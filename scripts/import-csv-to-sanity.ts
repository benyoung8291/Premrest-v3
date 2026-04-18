/**
 * Import Webflow CSV exports into Sanity.
 *
 * Order matters — leaf taxonomies first, then people, then projects/resources
 * which reference them. Reference fields are resolved by slug.
 *
 * Idempotent: uses deterministic _id based on `<type>.<slug>` so re-runs
 * overwrite instead of duplicate.
 *
 * Prereqs:
 *   - .env.local contains NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET,
 *     SANITY_API_WRITE_TOKEN (token must have "Editor" role).
 *
 * Usage:  npm run import:cms
 */
import 'dotenv/config';
import dotenv from 'dotenv';
import { createClient } from '@sanity/client';
import { parse } from 'csv-parse/sync';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { JSDOM } from 'jsdom';

// dotenv/config only reads .env; explicitly pull .env.local too.
dotenv.config({ path: path.resolve(__dirname, '..', '.env.local') });

const CSV_DIR = path.resolve(__dirname, '..', 'csv-exports');

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID');
if (!token) throw new Error('Missing SANITY_API_WRITE_TOKEN (Editor role)');

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-12-01',
  token,
  useCdn: false,
});

type Row = Record<string, string>;

const readCsv = (filename: string): Row[] => {
  const buf = fs.readFileSync(path.join(CSV_DIR, filename), 'utf-8');
  return parse(buf, { columns: true, skip_empty_lines: true, trim: true });
};

const docId = (type: string, slug: string) => `${type}.${slug}`;

const toSlug = (slug: string) => ({ _type: 'slug', current: slug });

const truthy = (v: string | undefined) => v === 'true' || v === 'yes';

const splitMulti = (v: string | undefined) =>
  (v || '').split(/;\s*/).map((s) => s.trim()).filter(Boolean);

// ---- image upload cache ----
const imageCache = new Map<string, { _type: 'image'; asset: { _type: 'reference'; _ref: string } }>();

async function uploadImage(url: string): Promise<{ _type: 'image'; asset: { _type: 'reference'; _ref: string } } | null> {
  if (!url) return null;
  if (imageCache.has(url)) return imageCache.get(url)!;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`  image fetch failed ${res.status} ${url}`);
      return null;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const filename = path.basename(new URL(url).pathname);
    const asset = await client.assets.upload('image', buf, { filename });
    const ref = { _type: 'image' as const, asset: { _type: 'reference' as const, _ref: asset._id } };
    imageCache.set(url, ref);
    return ref;
  } catch (err) {
    console.warn(`  image upload error: ${(err as Error).message}`);
    return null;
  }
}

async function uploadFile(url: string): Promise<{ _type: 'file'; asset: { _type: 'reference'; _ref: string } } | null> {
  if (!url) return null;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    const filename = path.basename(new URL(url).pathname);
    const asset = await client.assets.upload('file', buf, { filename });
    return { _type: 'file', asset: { _type: 'reference', _ref: asset._id } };
  } catch {
    return null;
  }
}

// ---- HTML → Portable Text (minimal, paragraph-focused) ----
function htmlToPortableText(html: string): any[] {
  if (!html || !html.trim()) return [];
  const dom = new JSDOM(`<body>${html}</body>`);
  const body = dom.window.document.body;
  const blocks: any[] = [];

  const walk = (node: Element, style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' = 'normal') => {
    const tag = node.tagName.toLowerCase();
    if (tag === 'p' || /^h[1-6]$/.test(tag)) {
      const s = tag === 'p' ? 'normal' : (tag as any);
      blocks.push({
        _type: 'block',
        _key: crypto.randomBytes(6).toString('hex'),
        style: s,
        markDefs: [],
        children: [
          { _type: 'span', _key: crypto.randomBytes(6).toString('hex'), text: node.textContent || '', marks: [] },
        ],
      });
    } else if (tag === 'ul' || tag === 'ol') {
      node.querySelectorAll('li').forEach((li) => {
        blocks.push({
          _type: 'block',
          _key: crypto.randomBytes(6).toString('hex'),
          style: 'normal',
          listItem: tag === 'ul' ? 'bullet' : 'number',
          level: 1,
          markDefs: [],
          children: [
            { _type: 'span', _key: crypto.randomBytes(6).toString('hex'), text: li.textContent || '', marks: [] },
          ],
        });
      });
    } else {
      Array.from(node.children).forEach((c) => walk(c as Element, style));
    }
  };

  Array.from(body.children).forEach((c) => walk(c as Element));

  // Fallback: if no structured children, treat entire text as a paragraph
  if (blocks.length === 0 && body.textContent?.trim()) {
    blocks.push({
      _type: 'block',
      _key: crypto.randomBytes(6).toString('hex'),
      style: 'normal',
      markDefs: [],
      children: [
        { _type: 'span', _key: crypto.randomBytes(6).toString('hex'), text: body.textContent.trim(), marks: [] },
      ],
    });
  }
  return blocks;
}

// ---- importers ----

async function importTaxonomy(filename: string, _type: string) {
  const rows = readCsv(filename);
  console.log(`\n[${_type}] importing ${rows.length} rows`);
  for (const row of rows) {
    const slug = row.Slug;
    if (!slug) continue;
    const doc: any = {
      _id: docId(_type, slug),
      _type,
      name: row.Name,
      slug: toSlug(slug),
    };
    if (row.Icon) {
      const img = await uploadImage(row.Icon);
      if (img) doc.icon = img;
    }
    if (row['Sort Order']) doc.sortOrder = Number(row['Sort Order']);
    await client.createOrReplace(doc);
    console.log(`  ✓ ${_type}.${slug}`);
  }
}

async function importPeople() {
  const rows = readCsv('people.csv');
  console.log(`\n[person] importing ${rows.length} rows`);
  for (const row of rows) {
    const slug = row.Slug;
    if (!slug) continue;
    const doc: any = {
      _id: docId('person', slug),
      _type: 'person',
      name: row.Name,
      slug: toSlug(slug),
      title: row.Title,
      department: row.Department,
      phone: row.Phone,
      email: row.Email,
      linkedin: row.LinkedIn || undefined,
      sortOrder: row['Sort Order'] ? Number(row['Sort Order']) : undefined,
      displayContactInfo: truthy(row['Display contact information']),
      displayResources: truthy(row['Display resources']),
      bio: htmlToPortableText(row.Bio || ''),
    };
    if (row.Photo) {
      const img = await uploadImage(row.Photo);
      if (img) doc.photo = img;
    }
    await client.createOrReplace(doc);
    console.log(`  ✓ person.${slug}`);
  }
}

async function importProjects() {
  const rows = readCsv('projects.csv');
  console.log(`\n[project] importing ${rows.length} rows`);
  for (const row of rows) {
    const slug = row.Slug;
    if (!slug) continue;
    const managerSlugs = splitMulti(row['Project Managers']);
    const managers = managerSlugs.map((s) => ({
      _type: 'reference',
      _ref: docId('person', s),
      _key: crypto.randomBytes(6).toString('hex'),
    }));

    const photos = [];
    for (const url of splitMulti(row.Photos)) {
      const img = await uploadImage(url);
      if (img) photos.push({ ...img, _key: crypto.randomBytes(6).toString('hex') });
    }

    const doc: any = {
      _id: docId('project', slug),
      _type: 'project',
      name: row.Name,
      slug: toSlug(slug),
      summary: row.Summary,
      description: htmlToPortableText(row.Description || ''),
      projectManagers: managers,
      photos,
    };
    if (row['Featured Image']) {
      const img = await uploadImage(row['Featured Image']);
      if (img) doc.featuredImage = img;
    }
    await client.createOrReplace(doc);
    console.log(`  ✓ project.${slug}`);
  }
}

async function importResources() {
  const rows = readCsv('resources.csv');
  console.log(`\n[resource] importing ${rows.length} rows`);
  for (const row of rows) {
    const slug = row.Slug;
    if (!slug) continue;
    const doc: any = {
      _id: docId('resource', slug),
      _type: 'resource',
      name: row.Name,
      slug: toSlug(slug),
      summary: row.Summary,
      content: htmlToPortableText(row.Content || ''),
      video: row.Video || undefined,
      publishedAt: row['Published On'] ? new Date(row['Published On']).toISOString() : undefined,
    };
    if (row.Category) doc.category = { _type: 'reference', _ref: docId('category', row.Category) };
    if (row.Type) doc.contentType = { _type: 'reference', _ref: docId('contentType', row.Type) };

    const authors = splitMulti(row.Author).map((s) => ({
      _type: 'reference',
      _ref: docId('person', s),
      _key: crypto.randomBytes(6).toString('hex'),
    }));
    if (authors.length) doc.authors = authors;

    const industries = splitMulti(row.Industries).map((s) => ({
      _type: 'reference',
      _ref: docId('industry', s),
      _key: crypto.randomBytes(6).toString('hex'),
    }));
    if (industries.length) doc.industries = industries;

    const tags = splitMulti(row.Tags).map((s) => ({
      _type: 'reference',
      _ref: docId('tag', s),
      _key: crypto.randomBytes(6).toString('hex'),
    }));
    if (tags.length) doc.tags = tags;

    if (row['Featured Image']) {
      const img = await uploadImage(row['Featured Image']);
      if (img) doc.featuredImage = img;
    }
    if (row['File Cover Image']) {
      const img = await uploadImage(row['File Cover Image']);
      if (img) doc.fileCoverImage = img;
    }
    if (row['File Upload']) {
      const file = await uploadFile(row['File Upload']);
      if (file) doc.fileUpload = file;
    }

    await client.createOrReplace(doc);
    console.log(`  ✓ resource.${slug}`);
  }
}

async function main() {
  // Leaf taxonomies first, then people, then documents that reference them.
  await importTaxonomy('categories.csv', 'category');
  await importTaxonomy('contents.csv', 'contentType');
  await importTaxonomy('industries.csv', 'industry');
  await importTaxonomy('tags.csv', 'tag');
  await importPeople();
  await importProjects();
  await importResources();
  console.log('\nAll done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
