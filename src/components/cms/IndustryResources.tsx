import { resourcesByIndustryQuery } from '@/lib/queries';
import { safeFetch } from '@/lib/safeFetch';

type Item = {
  _id: string;
  name: string;
  slug: string;
  summary?: string;
};

export const revalidate = 60;

/**
 * Renders the "related resources" list that sits alongside each industry
 * description on /industries. Matches the `.resources-industries-*` classes
 * from the Webflow export so the styles continue to apply.
 */
export async function IndustryResources({ industrySlug }: { industrySlug: string }) {
  const items = await safeFetch<Item[]>(resourcesByIndustryQuery, { slug: industrySlug }, []);

  if (!items || items.length === 0) {
    return (
      <div className="w-dyn-list">
        <div className="w-dyn-empty">
          <div>No items found.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-dyn-list">
      <div role="list" className="w-dyn-items">
        {items.map((r) => (
          <div role="listitem" className="w-dyn-item" key={r._id}>
            <a href={`/resources/${r.slug}`} className="resources-industries-link w-inline-block">
              <p className="text-size-large resources-industries-headline">{r.name}</p>
              {r.summary ? (
                <p className="text-size-large resources-industries-text">{r.summary}</p>
              ) : null}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
