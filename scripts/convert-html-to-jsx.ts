/**
 * Convert Webflow static HTML export into Next.js App Router pages.
 *
 * For each .html in webflow-export/extracted/:
 *   1. Read the file
 *   2. Extract <head> metadata (title, description, og:*, favicon) → page.tsx Metadata export
 *   3. Extract <body> inner HTML
 *   4. Rewrite relative asset paths to absolute (/images/..., /css/..., /js/..., /documents/...)
 *   5. Strip the shared Nav and Footer so they come from layout.tsx
 *   6. Write src/app/<route>/page.tsx that injects the HTML via dangerouslySetInnerHTML
 *
 * Webflow's detail_*.html files become [slug]/page.tsx templates under
 * src/app/<collection>/[slug]/.
 */
import * as cheerio from 'cheerio';
import fs from 'node:fs';
import path from 'node:path';

const EXPORT_DIR = path.resolve(__dirname, '..', 'webflow-export', 'extracted');
const APP_DIR = path.resolve(__dirname, '..', 'src', 'app');
const LAYOUT_DIR = path.resolve(__dirname, '..', 'src', 'components', 'webflow-chrome');

// Webflow detail templates → dynamic [slug] routes
const DETAIL_TEMPLATE_MAP: Record<string, string> = {
  'detail_projects.html': 'projects/[slug]',
  'detail_resources.html': 'resources/[slug]',
  'detail_people.html': 'people/[slug]',
  'detail_categories.html': 'categories/[slug]',
  'detail_industries.html': 'industries/[slug]',
  'detail_tags.html': 'tags/[slug]',
  'detail_content.html': 'content/[slug]',
};

// Files to skip entirely (Webflow internals, 404/401 handled separately)
const SKIP_FILES = new Set(['401.html', '404.html', 'untitled.html']);

type PageMeta = {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
};

function rewriteAssetPaths(html: string): string {
  let out = html
    .replace(/(["'(])\s*images\//g, '$1/images/')
    .replace(/(["'(])\s*css\//g, '$1/css/')
    .replace(/(["'(])\s*js\//g, '$1/js/')
    .replace(/(["'(])\s*documents\//g, '$1/documents/')
    .replace(/(["'(])\s*fonts\//g, '$1/fonts/');

  // Rewrite internal page links: href="foo.html" → href="/foo", href="index.html" → href="/"
  out = out.replace(/href="([^"#?]+)\.html(["#?])/g, (_m, slug: string, tail: string) => {
    if (slug === 'index') return `href="/${tail === '"' ? '' : tail}`;
    // Leave absolute URLs alone
    if (/^https?:\/\//.test(slug)) return _m;
    return `href="/${slug}${tail}`;
  });

  return out;
}

function escapeForTemplateLiteral(html: string): string {
  // Escape backticks and ${ for template literal safety
  return html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function extractMeta($: cheerio.CheerioAPI): PageMeta {
  const meta: PageMeta = {
    title: $('title').text() || 'Premrest',
  };
  const grab = (sel: string) => $(sel).attr('content') || undefined;
  meta.description = grab('meta[name="description"]');
  meta.ogTitle = grab('meta[property="og:title"]');
  meta.ogDescription = grab('meta[property="og:description"]');
  meta.ogImage = grab('meta[property="og:image"]');
  meta.twitterTitle = grab('meta[property="twitter:title"]');
  meta.twitterDescription = grab('meta[property="twitter:description"]');
  meta.twitterImage = grab('meta[property="twitter:image"]');
  return meta;
}

function metadataToSource(meta: PageMeta): string {
  const j = (v?: string) => (v === undefined ? undefined : JSON.stringify(v));
  const fields: string[] = [];
  fields.push(`  title: ${j(meta.title)}`);
  if (meta.description) fields.push(`  description: ${j(meta.description)}`);
  const og: string[] = [];
  if (meta.ogTitle) og.push(`    title: ${j(meta.ogTitle)}`);
  if (meta.ogDescription) og.push(`    description: ${j(meta.ogDescription)}`);
  if (meta.ogImage) og.push(`    images: [${j(meta.ogImage)}]`);
  if (og.length) fields.push(`  openGraph: {\n${og.join(',\n')}\n  }`);
  const tw: string[] = [];
  if (meta.twitterTitle) tw.push(`    title: ${j(meta.twitterTitle)}`);
  if (meta.twitterDescription) tw.push(`    description: ${j(meta.twitterDescription)}`);
  if (meta.twitterImage) tw.push(`    images: [${j(meta.twitterImage)}]`);
  if (tw.length) fields.push(`  twitter: {\n${tw.join(',\n')}\n  }`);
  return `export const metadata: Metadata = {\n${fields.join(',\n')}\n};\n`;
}

function stripNavAndFooter($: cheerio.CheerioAPI): { navHtml: string; footerHtml: string } {
  // Webflow wraps the navbar in .nav_component or .navbar-logo-left-container-3
  // and the footer inside <footer> or .footer_component. We capture the first
  // occurrence so we can reuse it in the shared layout.
  let navHtml = '';
  let footerHtml = '';

  const navCandidates = [
    '.nav_fixed',
    '.navbar_component',
    '.nav_component',
    '[data-animation][data-collapse][role="banner"]',
    '.w-nav',
  ];
  for (const sel of navCandidates) {
    const el = $(sel).first();
    if (el.length) {
      navHtml = $.html(el) || '';
      el.remove();
      break;
    }
  }

  const footerCandidates = [
    '.global_section_footer',
    'footer',
    '.footer_component',
    '.footer_wrapper',
  ];
  for (const sel of footerCandidates) {
    const el = $(sel).first();
    if (el.length) {
      footerHtml = $.html(el) || '';
      el.remove();
      break;
    }
  }

  return { navHtml, footerHtml };
}

function writePage(route: string, meta: PageMeta, bodyHtml: string, bodyClass: string, dataAttrs: Record<string, string>) {
  const dir = path.join(APP_DIR, route);
  fs.mkdirSync(dir, { recursive: true });

  const dataAttrsStr = Object.entries(dataAttrs)
    .map(([k, v]) => `${k}={${JSON.stringify(v)}}`)
    .join(' ');

  const src = `import type { Metadata } from 'next';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';

${metadataToSource(meta)}
const bodyHtml = \`${escapeForTemplateLiteral(bodyHtml)}\`;

export default function Page() {
  return (
    <WebflowPage bodyClass=${JSON.stringify(bodyClass)} ${dataAttrsStr}>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </WebflowPage>
  );
}
`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), src);
}

function writeChrome(navHtml: string, footerHtml: string, htmlDataAttrs: Record<string, string>) {
  fs.mkdirSync(LAYOUT_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(LAYOUT_DIR, 'nav.html.ts'),
    `export const navHtml = \`${escapeForTemplateLiteral(navHtml)}\`;\n`,
  );
  fs.writeFileSync(
    path.join(LAYOUT_DIR, 'footer.html.ts'),
    `export const footerHtml = \`${escapeForTemplateLiteral(footerHtml)}\`;\n`,
  );
  fs.writeFileSync(
    path.join(LAYOUT_DIR, 'html-attrs.ts'),
    `export const htmlDataAttrs = ${JSON.stringify(htmlDataAttrs, null, 2)} as const;\n`,
  );
}

function resolveRoute(file: string): string | null {
  if (file === 'index.html') return '';
  if (DETAIL_TEMPLATE_MAP[file]) return DETAIL_TEMPLATE_MAP[file];
  if (file.startsWith('detail_')) return null; // skip other detail templates for now
  if (SKIP_FILES.has(file)) return null;
  return file.replace(/\.html$/, '');
}

function processFile(absPath: string, route: string, captureChrome: boolean): {
  navHtml?: string;
  footerHtml?: string;
  htmlDataAttrs?: Record<string, string>;
} {
  const raw = fs.readFileSync(absPath, 'utf-8');
  const $ = cheerio.load(raw);

  const meta = extractMeta($);

  const htmlEl = $('html').first();
  const htmlDataAttrs: Record<string, string> = {};
  ['data-wf-page', 'data-wf-site', 'lang'].forEach((k) => {
    const v = htmlEl.attr(k);
    if (v) htmlDataAttrs[k] = v;
  });

  const { navHtml, footerHtml } = stripNavAndFooter($);

  const bodyEl = $('body').first();
  const bodyClass = bodyEl.attr('class') || '';
  const bodyDataAttrs: Record<string, string> = {};
  Object.entries(bodyEl.attr() || {}).forEach(([k, v]) => {
    if (k.startsWith('data-')) bodyDataAttrs[k] = String(v);
  });

  const bodyHtml = rewriteAssetPaths(bodyEl.html() || '');

  writePage(route, meta, bodyHtml, bodyClass, bodyDataAttrs);

  if (captureChrome) {
    return {
      navHtml: rewriteAssetPaths(navHtml),
      footerHtml: rewriteAssetPaths(footerHtml),
      htmlDataAttrs,
    };
  }
  return {};
}

function main() {
  const files = fs.readdirSync(EXPORT_DIR).filter((f) => f.endsWith('.html'));
  console.log(`Found ${files.length} HTML files`);

  let chromeCaptured = false;
  let navHtml = '';
  let footerHtml = '';
  let htmlDataAttrs: Record<string, string> = {};

  for (const file of files) {
    const route = resolveRoute(file);
    if (route === null) {
      console.log(`  skip ${file}`);
      continue;
    }
    const abs = path.join(EXPORT_DIR, file);
    // Capture nav/footer from index.html (most representative)
    const capture = !chromeCaptured && file === 'index.html';
    const r = processFile(abs, route, capture);
    if (capture && r.navHtml) {
      navHtml = r.navHtml;
      footerHtml = r.footerHtml || '';
      htmlDataAttrs = r.htmlDataAttrs || {};
      chromeCaptured = true;
    }
    console.log(`  → /${route || ''}`);
  }

  // Also process nested files (e.g. contact/thanks.html → /contact/thanks)
  const walkNested = (dir: string, prefix: string) => {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walkNested(path.join(dir, entry.name), `${prefix}${entry.name}/`);
      } else if (entry.name.endsWith('.html')) {
        const route = `${prefix}${entry.name.replace(/\.html$/, '')}`;
        processFile(path.join(dir, entry.name), route, false);
        console.log(`  → /${route}`);
      }
    }
  };
  for (const sub of ['cleaning', 'contact', 'installs', 'lets-talk-facilities', 'marketing']) {
    walkNested(path.join(EXPORT_DIR, sub), `${sub}/`);
  }

  writeChrome(navHtml, footerHtml, htmlDataAttrs);
  console.log('Chrome (nav+footer) captured from index.html');
  console.log('Done.');
}

main();
