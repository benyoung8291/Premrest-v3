import { resourcesByTagQuery } from '@/lib/queries';
import { safeFetch } from '@/lib/safeFetch';
import { urlFor } from '@/lib/sanity.image';
import type { Image } from 'sanity';

type Episode = {
  _id: string;
  name: string;
  slug: string;
  summary?: string;
  featuredImage?: Image;
  category?: { name: string; slug: string };
  contentType?: { name: string; slug: string };
};

export const revalidate = 60;

/**
 * Hero "latest episode" block used by /lets-talk-facilities and
 * /lets-talk-sustainability. Queries resources filtered by podcast tag and
 * renders the most recent one inside the existing Webflow layout, preserving
 * the prefix-specific class names so the Webflow CSS keeps applying.
 */
export async function PodcastLatestEpisode({
  tagSlug,
  headlineClass,
  textClass,
  badgeModifier = '',
  badgeTextModifier = '',
}: {
  tagSlug: string;
  headlineClass: string;
  textClass: string;
  badgeModifier?: string;
  badgeTextModifier?: string;
}) {
  const episodes = await safeFetch<Episode[]>(resourcesByTagQuery, { slug: tagSlug }, []);
  const latest = episodes[0];

  if (!latest) {
    return (
      <div className="resources-wrapper w-dyn-list">
        <div className="w-dyn-empty">
          <div>No items found.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="resources-wrapper w-dyn-list">
      <div role="list" className="w-dyn-items">
        <div role="listitem" className="w-dyn-item">
          <div className="grid-2-columns-ltf">
            <div data-w-id="52f2338f-f317-b6a9-8cc7-66b8730dcbd4" className="grid-column">
              <div className="ltf-badge">
                <div className={`content-badge${badgeModifier ? ` ${badgeModifier}` : ''}`}>
                  <h6 className={`content-service${badgeTextModifier ? ` ${badgeTextModifier}` : ''}`}>
                    Latest episode
                  </h6>
                </div>
              </div>
              <h2 className={headlineClass}>{latest.name}</h2>
              {latest.summary ? <p className={textClass}>{latest.summary}</p> : null}
            </div>
            <div
              id="w-node-_52f2338f-f317-b6a9-8cc7-66b8730dcbd9-5e3a4737"
              data-w-id="52f2338f-f317-b6a9-8cc7-66b8730dcbd9"
              className="letstalkfacilities-section-video grid-column-2-inverse"
            >
              <a href={`/resources/${latest.slug}`} className="w-inline-block">
                <div className="letstalkfacilities-section-image">
                  <img
                    loading="lazy"
                    src="/images/Premrest_Scribble_Green.svg"
                    alt=""
                    className="ltf-section-scribbles"
                  />
                  <img
                    loading="lazy"
                    src="/images/Premrest_Patch_Blue.svg"
                    alt=""
                    className="ltf-section-patch"
                  />
                  <img loading="lazy" src="/images/play-button.png" alt="" className="video-play-button" />
                  <div className="letstalkfacilities-section-overlay"></div>
                  {latest.featuredImage ? (
                    <img
                      loading="lazy"
                      alt={latest.name}
                      src={urlFor(latest.featuredImage).width(1600).url()}
                      className="letstalkfacilities-section-videoimage"
                    />
                  ) : null}
                </div>
              </a>
              <div className="letstalkfacilities-section-content grid-column grid-column-services-cards"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Grid of all other episodes in a podcast series — sits below the hero
 * "latest episode" block and renders one card per remaining resource.
 */
export async function PodcastEpisodesGrid({ tagSlug }: { tagSlug: string }) {
  const episodes = await safeFetch<Episode[]>(resourcesByTagQuery, { slug: tagSlug }, []);
  const rest = episodes.slice(1);

  if (rest.length === 0) {
    return (
      <div className="collection-list-wrapper w-dyn-list">
        <div className="w-dyn-empty">
          <div>No items found.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="collection-list-wrapper w-dyn-list">
      <div role="list" className="podcasts-collection w-dyn-items">
        {rest.map((ep) => (
          <div role="listitem" className="collection-item w-dyn-item" key={ep._id}>
            <a href={`/resources/${ep.slug}`} className="link-block-4 w-inline-block">
              <div className="content-badges-container">
                {ep.category ? (
                  <div className="content-badge-service">
                    <h6 className="content-service-heading">{ep.category.name}</h6>
                  </div>
                ) : null}
                {ep.contentType ? (
                  <div className="content-badge-type">
                    <h6 className="content-type-heading">{ep.contentType.name}</h6>
                  </div>
                ) : null}
              </div>
              <div className="image-container">
                <img loading="lazy" src="/images/play-button.png" alt="" className="video-play-button" />
                {ep.featuredImage ? (
                  <img
                    loading="lazy"
                    src={urlFor(ep.featuredImage).width(1200).url()}
                    alt={ep.name}
                    className="podcasts-featured-image"
                  />
                ) : null}
              </div>
              <div className="resources-container padding-medium">
                <h3 className="podcasts-heading">{ep.name}</h3>
                {ep.summary ? <p className="podcasts-summary">{ep.summary}</p> : null}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
