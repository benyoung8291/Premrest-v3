/**
 * Scrape article bodies from the live Webflow site and patch them into
 * Sanity. Webflow's CSV export doesn't include the rich text `Content`
 * column for resources, so after import:cms every resource has an empty
 * body. This fills them in by reading the rendered HTML at
 *   https://premrest.com.au/resources/{slug}
 * and converting the .grid-column.w-richtext block into Portable Text.
 *
 * Idempotent — re-running overwrites the content field.
 * Resources that 404 on the live site (drafts, unpublished) are skipped
 * and logged at the end.
 *
 * Usage:  npm run scrape:resources
 */
import 'dotenv/config';
import dotenv from 'dotenv';
import { createClient } from '@sanity/client';
import { JSDOM } from 'jsdom';
import crypto from 'node:crypto';
import path from 'node:path';

dotenv.config({ path: path.resolve(__dirname, '..', '.env.local') });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;
const LIVE_ORIGIN = process.env.SCRAPE_ORIGIN || 'https://premrest.com.au';

if (!projectId) throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID');
if (!token) throw new Error('Missing SANITY_API_WRITE_TOKEN (Editor role)');

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-12-01',
  token,
  useCdn: false,
});

const key = () => crypto.randomBytes(6).toString('hex');

type Span = { _type: 'span'; _key: string; text: string; marks: string[] };
type MarkDef = { _type: string; _key: string; href?: string };
type Block = {
  _type: 'block';
  _key: string;
  style: string;
  listItem?: 'bullet' | 'number';
  level?: number;
  markDefs: MarkDef[];
  children: Span[];
};

function collectChildren(
  node: Element,
  markDefs: MarkDef[],
  marks: string[] = [],
): Span[] {
  const out: Span[] = [];
  node.childNodes.forEach((child) => {
    if (child.nodeType === 3) {
      const text = (child.textContent || '').replace(/\s+/g, ' ');
      if (text) out.push({ _type: 'span', _key: key(), text, marks: [...marks] });
      return;
    }
    if (child.nodeType !== 1) return;
    const el = child as Element;
    const tag = el.tagName.toLowerCase();
    if (tag === 'strong' || tag === 'b') {
      out.push(...collectChildren(el, markDefs, [...marks, 'strong']));
    } else if (tag === 'em' || tag === 'i') {
      out.push(...collectChildren(el, markDefs, [...marks, 'em']));
    } else if (tag === 'u') {
      out.push(...collectChildren(el, markDefs, [...marks, 'underline']));
    } else if (tag === 'br') {
      out.push({ _type: 'span', _key: key(), text: '\n', marks: [...marks] });
    } else if (tag === 'a') {
      const href = el.getAttribute('href') || '';
      const mark: MarkDef = { _type: 'link', _key: key(), href };
      markDefs.push(mark);
      out.push(...collectChildren(el, markDefs, [...marks, mark._key]));
    } else {
      out.push(...collectChildren(el, markDefs, marks));
    }
  });
  return out;
}

function blockFrom(el: Element, style: string): Block | null {
  const markDefs: MarkDef[] = [];
  const children = collectChildren(el, markDefs);
  const hasText = children.some((c) => c.text.trim().length > 0);
  if (!hasText) return null;
  return { _type: 'block', _key: key(), style, markDefs, children };
}

function htmlToPortableText(html: string): Block[] {
  const dom = new JSDOM(`<body>${html}</body>`);
  const body = dom.window.document.body;
  const blocks: Block[] = [];

  const walk = (root: Element) => {
    Array.from(root.children).forEach((el) => {
      const tag = el.tagName.toLowerCase();
      if (/^h[1-4]$/.test(tag)) {
        const b = blockFrom(el, tag as 'h1' | 'h2' | 'h3' | 'h4');
        if (b) blocks.push(b);
      } else if (tag === 'p') {
        const b = blockFrom(el, 'normal');
        if (b) blocks.push(b);
      } else if (tag === 'blockquote') {
        const b = blockFrom(el, 'blockquote');
        if (b) blocks.push(b);
      } else if (tag === 'ul' || tag === 'ol') {
        el.querySelectorAll(':scope > li').forEach((li) => {
          const markDefs: MarkDef[] = [];
          const children = collectChildren(li as Element, markDefs);
          if (!children.some((c) => c.text.trim())) return;
          blocks.push({
            _type: 'block',
            _key: key(),
            style: 'normal',
            listItem: tag === 'ul' ? 'bullet' : 'number',
            level: 1,
            markDefs,
            children,
          });
        });
      } else {
        walk(el);
      }
    });
  };

  walk(body);
  return blocks;
}

async function listLiveSlugs(): Promise<string[]> {
  const res = await fetch(`${LIVE_ORIGIN}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const slugs: string[] = [];
  const re = /<loc>[^<]*\/resources\/([^<\/\s]+)<\/loc>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) slugs.push(m[1]);
  return Array.from(new Set(slugs));
}

async function scrapeOne(slug: string): Promise<Block[] | null> {
  const res = await fetch(`${LIVE_ORIGIN}/resources/${slug}`, {
    redirect: 'follow',
  });
  if (!res.ok) return null;
  const html = await res.text();
  const dom = new JSDOM(html);
  const node = dom.window.document.querySelector(
    '.resources-content-container .w-richtext, .grid-column.w-richtext',
  );
  if (!node) return null;
  const blocks = htmlToPortableText(node.innerHTML);
  return blocks.length > 0 ? blocks : null;
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const onlySlug = process.argv.find((a) => a.startsWith('--slug='))?.slice(7);

  const slugs = onlySlug ? [onlySlug] : await listLiveSlugs();
  console.log(
    `[scrape] ${dryRun ? 'DRY RUN — ' : ''}${slugs.length} resource URL${slugs.length === 1 ? '' : 's'}`,
  );

  let patched = 0;
  let missingContent = 0;
  const failures: string[] = [];

  for (const slug of slugs) {
    const id = `resource.${slug}`;
    try {
      const blocks = await scrapeOne(slug);
      if (!blocks) {
        missingContent++;
        console.log(`  ∅ ${slug} (no rich text block found)`);
        continue;
      }
      if (dryRun) {
        const textPreview = blocks
          .slice(0, 2)
          .map((b) => b.children.map((c) => c.text).join(''))
          .join(' / ');
        console.log(
          `  ✓ ${blocks.length} blocks → ${slug}  | first: "${textPreview.slice(0, 100)}"`,
        );
      } else {
        const exists = await client.fetch('*[_id == $id][0]{_id}', { id });
        if (!exists) {
          console.log(`  skip ${slug} (no matching Sanity doc)`);
          continue;
        }
        await client.patch(id).set({ content: blocks }).commit();
        console.log(`  ✓ ${blocks.length} blocks → ${slug}`);
      }
      patched++;
    } catch (err) {
      failures.push(slug);
      console.error(`  ✗ ${slug}:`, (err as Error).message);
    }
  }

  console.log(
    `\n[scrape] done: ${patched} ${dryRun ? 'would patch' : 'patched'}, ${missingContent} had no body, ${failures.length} errored`,
  );
  if (failures.length) console.log('  errored:', failures.join(', '));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
