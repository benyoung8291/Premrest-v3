import { readClient } from '@/lib/sanity.client';
import { allResourcesQuery } from '@/lib/queries';
import { urlFor } from '@/lib/sanity.image';
import type { Image } from 'sanity';

type Resource = {
  _id: string;
  name: string;
  slug: string;
  summary?: string;
  featuredImage?: Image;
  video?: string;
  category?: { name: string; slug: string };
  contentType?: { name: string; slug: string };
  authors?: Array<{ name: string; slug: string; title?: string; photo?: Image }>;
};

export const revalidate = 60;

/**
 * Replacement for the outer `<div class="w-dyn-list" fs-cmsload-mode="pagination">`
 * on /resources. We keep Webflow's class names (content-badge-service,
 * resources-heading, etc.) so the design carries over.
 */
export async function ResourceGrid() {
  const resources = await readClient.fetch<Resource[]>(allResourcesQuery);

  return (
    <div className="w-dyn-list">
      <div role="list" className="resources-collection w-dyn-items">
        {resources.map((r) => (
          <div role="listitem" className="collection-item w-dyn-item" key={r._id}>
            <div className="content-badges-container">
              {r.category ? (
                <div className="content-badge-service">
                  <h6 className="content-service-heading">{r.category.name}</h6>
                </div>
              ) : null}
              {r.contentType ? (
                <div className="content-badge-type">
                  <h6 className="content-type-heading">{r.contentType.name}</h6>
                </div>
              ) : null}
            </div>
            <div className="image-container">
              {r.video ? (
                <img src="/images/play-button.png" loading="lazy" alt="" className="video-play-button" />
              ) : null}
              {r.featuredImage ? (
                <img
                  src={urlFor(r.featuredImage).width(1200).url()}
                  loading="lazy"
                  alt={r.name}
                  className="resources-featured-image"
                />
              ) : null}
            </div>
            <div className="resources-container padding-medium">
              <h3 className="resources-heading">{r.name}</h3>
              {r.summary ? <p className="resources-summary">{r.summary}</p> : null}
              {r.authors && r.authors.length > 0 ? (
                <div className="w-dyn-list">
                  <div role="list" className="author-resources-wrapper w-dyn-items">
                    {r.authors.map((author) => (
                      <div
                        role="listitem"
                        className="collection-item-2 w-dyn-item"
                        key={author.slug}
                      >
                        <div className="resources-author-container">
                          {author.photo ? (
                            <img
                              src={urlFor(author.photo).width(120).url()}
                              loading="lazy"
                              alt={author.name}
                              className="resources-author-image"
                            />
                          ) : null}
                          <div>
                            <h6 className="resources-author-name">{author.name}</h6>
                            {author.title ? (
                              <h6 className="resources-author-title">{author.title}</h6>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              <a
                href={`/resources/${r.slug}`}
                className="button is-secondary resources-view-button w-button"
              >
                View resource
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
