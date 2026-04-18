# Premrest v3

Next.js 14 + Sanity CMS clone of [premrest.com.au](https://premrest.com.au).

## What's in the box

- **55 pages** converted from the Webflow static export (1:1 HTML/CSS/JS fidelity).
- **Webflow ix2 animations** preserved (jQuery + `/js/webflow.js` served from `/public/js/`).
- **Sanity Studio** mounted at `/studio` with schemas mirroring Webflow's CMS collections:
  Categories, Content Types, Industries, Tags, People, Projects, Resources.
- **CSV importer** at `scripts/import-csv-to-sanity.ts` — idempotent, uploads images
  from Webflow's CDN to Sanity.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create a Sanity project

Log in to [sanity.io/manage](https://www.sanity.io/manage), create a new project,
note the **Project ID**, and create an **Editor** API token under *API → Tokens*.

### 3. Configure env

```bash
cp .env.local.example .env.local
# Fill in:
#   NEXT_PUBLIC_SANITY_PROJECT_ID
#   NEXT_PUBLIC_SANITY_DATASET         (usually "production")
#   SANITY_API_WRITE_TOKEN             (Editor token)
```

### 4. Download Webflow assets (if fresh clone)

The ~55 MB Webflow ZIP isn't committed. Regenerate public assets from it:

```bash
mkdir -p webflow-export
curl -L "https://www.dropbox.com/scl/fi/e5sh726mbax0rajqkla0c/premrest-486d48.webflow.zip?rlkey=nxl9tda9oa2v2ahq4xq6vxd29&dl=1" \
  -o webflow-export/premrest.zip
unzip -q webflow-export/premrest.zip -d webflow-export/extracted
cp -r webflow-export/extracted/{images,css,js,documents} public/
npm run convert:html
```

(The second command regenerates `src/app/**/page.tsx` from the HTML export. You
only need this if the export changes.)

### 5. Import CMS content

```bash
npm run import:cms
```

This walks every CSV in `csv-exports/` and writes to Sanity in dependency order:
taxonomies → people → projects → resources.

### 6. Run

```bash
npm run dev
# Site:   http://localhost:3000
# Studio: http://localhost:3000/studio
```

## Architecture

- `src/app/**/page.tsx` — one per Webflow route. The body HTML is injected as a
  template string via `dangerouslySetInnerHTML` inside `<WebflowPage>` so
  Webflow's CSS selectors, `data-w-id` attributes, and ix2 hooks all keep
  working exactly as they did on Webflow.
- `src/app/layout.tsx` — loads Webflow's three CSS files in order, plus jQuery
  + `webflow.js` for animations, plus Google Fonts/Typekit loaders.
- `src/components/webflow-chrome/` — shared nav + footer extracted from the
  export so they don't duplicate into every page.
- `sanity/schemas/` — one TypeScript file per collection, 1:1 with Webflow.
- `src/lib/sanity.client.ts` + `src/lib/queries.ts` — read + write clients,
  plus GROQ queries.

## Deploying to Vercel

1. Push this branch, connect the repo in Vercel.
2. Set the env vars from `.env.local.example` in the Vercel dashboard.
3. Deploy.

## Regenerating pages after Webflow changes

If you edit the site in Webflow, re-export, and re-run Phase C:

```bash
rm -rf webflow-export/extracted public/{images,css,js,documents}
unzip -q webflow-export/premrest.zip -d webflow-export/extracted
cp -r webflow-export/extracted/{images,css,js,documents} public/
find src/app -name 'page.tsx' -not -path '*studio*' -delete
npm run convert:html
```
