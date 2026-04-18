import type { MetadataRoute } from 'next';
import { groq } from 'next-sanity';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://premrest.com.au').replace(/\/$/, '');

const staticRoutes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/careers', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/cleaning', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/installs', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/special-projects', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/sustainability', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/facility-managers', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/building-managers', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/procurement-managers', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/sustainability-managers', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/general-cleaning-managers', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/builders-developers', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/dental-practices', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/resources', priority: 0.8, changeFrequency: 'daily' },
  { path: '/projects', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/case-studies', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/industries', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/lets-talk-facilities', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/impact-calculator', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/spotting-help', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/sds-datasheets', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/style-guide', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
];

type SanitySlug = { slug: string; updated: string };

const slugsQuery = groq`{
  "resources": *[_type == "resource" && defined(slug.current)]{ "slug": slug.current, "updated": coalesce(_updatedAt, _createdAt) },
  "projects":  *[_type == "project"  && defined(slug.current)]{ "slug": slug.current, "updated": coalesce(_updatedAt, _createdAt) },
  "people":    *[_type == "person"   && defined(slug.current) && displayContactInfo != false]{ "slug": slug.current, "updated": coalesce(_updatedAt, _createdAt) },
  "categories":*[_type == "category" && defined(slug.current)]{ "slug": slug.current, "updated": coalesce(_updatedAt, _createdAt) },
  "industries":*[_type == "industry" && defined(slug.current)]{ "slug": slug.current, "updated": coalesce(_updatedAt, _createdAt) },
  "tags":      *[_type == "tag"      && defined(slug.current)]{ "slug": slug.current, "updated": coalesce(_updatedAt, _createdAt) }
}`;

type SanitySlugs = {
  resources: SanitySlug[];
  projects: SanitySlug[];
  people: SanitySlug[];
  categories: SanitySlug[];
  industries: SanitySlug[];
  tags: SanitySlug[];
};

const emptySlugs: SanitySlugs = {
  resources: [], projects: [], people: [], categories: [], industries: [], tags: [],
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Lazy-load Sanity so that a missing/invalid config (e.g. during a preview
  // build without env vars) doesn't fail the whole sitemap route — we just
  // emit the static entries in that case.
  let cms: SanitySlugs = emptySlugs;
  try {
    const { safeFetch } = await import('@/lib/safeFetch');
    cms = await safeFetch<SanitySlugs>(slugsQuery, {}, emptySlugs);
  } catch (err) {
    console.warn('[sitemap] Sanity unavailable, emitting static routes only:', (err as Error).message);
  }

  const build = (items: SanitySlug[], prefix: string, priority: number, freq: MetadataRoute.Sitemap[number]['changeFrequency']): MetadataRoute.Sitemap =>
    items
      .filter((i) => !!i.slug)
      .map((i) => ({
        url: `${SITE_URL}${prefix}/${i.slug}`,
        lastModified: i.updated ? new Date(i.updated) : now,
        changeFrequency: freq,
        priority,
      }));

  return [
    ...staticEntries,
    ...build(cms.resources, '/resources', 0.7, 'weekly'),
    ...build(cms.projects, '/projects', 0.7, 'monthly'),
    ...build(cms.people, '/people', 0.5, 'monthly'),
    ...build(cms.categories, '/categories', 0.5, 'weekly'),
    ...build(cms.industries, '/industries', 0.5, 'weekly'),
    ...build(cms.tags, '/tags', 0.3, 'weekly'),
  ];
}
