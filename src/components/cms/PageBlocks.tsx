import {
  allResourcesQuery,
  allProjectsQuery,
  resourcesByCategoryQuery,
  resourcesByTagQuery,
  latestResourceByCategoryAndContentTypeQuery,
  peopleByDepartmentQuery,
  resourceBySlugQuery,
} from '@/lib/queries';
import { safeFetch } from '@/lib/safeFetch';
import { urlFor } from '@/lib/sanity.image';
import type { Image } from 'sanity';

export const revalidate = 60;

type ResourceCardData = {
  _id: string;
  name: string;
  slug: string;
  summary?: string;
  featuredImage?: Image;
  video?: string;
  category?: { name: string; slug: string };
  contentType?: { name: string; slug: string };
};

type Project = {
  _id: string;
  name: string;
  slug: string;
  summary?: string;
  featuredImage?: Image;
};

type Person = {
  _id: string;
  name: string;
  slug: string;
  title?: string;
  photo?: Image;
  phone?: string;
  email?: string;
  linkedin?: string;
  displayContactInfo?: boolean;
};

/**
 * Homepage "Latest episode" block for Let's Talk Facilities. Replaces the
 * Webflow `.resources-wrapper .w-dyn-list` inside the home LTF section and
 * uses the home-specific class names so existing styles keep applying.
 */
export async function HomeLatestLTFEpisode() {
  const episodes = await safeFetch<ResourceCardData[]>(
    resourcesByTagQuery,
    { slug: 'lets-talk-facilities' },
    [],
  );
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
          <div className="letstalkfacilities-section-video">
            <div className="ltf-badges-container-section">
              <div className="content-badge-service">
                <h6 className="content-service-heading">Latest episode</h6>
              </div>
            </div>
            <a href={`/resources/${latest.slug}`} className="w-inline-block">
              <div className="letstalkfacilities-section-image">
                <img loading="lazy" src="/images/Premrest_Scribble_Green.svg" alt="" className="ltf-resources-scribbles" />
                <img loading="lazy" src="/images/Premrest_Patch_Cream.svg" alt="" className="ltf-resources-patch" />
                <img src="/images/play-button.png" loading="lazy" alt="" className="video-play-button" />
                <div className="letstalkfacilities-section-overlay"></div>
                {latest.featuredImage ? (
                  <img
                    src={urlFor(latest.featuredImage).width(1600).url()}
                    loading="lazy"
                    alt={latest.name}
                    height="Auto"
                    className="letstalkfacilities-section-videoimage"
                  />
                ) : null}
              </div>
            </a>
            <div className="letstalkfacilities-section-content grid-column grid-column-services-cards">
              <h3 className="ltf-section-headline">{latest.name}</h3>
              {latest.summary ? <p className="ltf-section-subheadline">{latest.summary}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * "Talk to the flooring experts" team grid used on /cleaning and /installs —
 * filters people by department and renders the 3-column card layout with
 * contact icons. Phone/email/linkedin icons are shown only for people who
 * opted in via `displayContactInfo`.
 */
export async function ExpertsTeamGrid({ department }: { department: string }) {
  const people = await safeFetch<Person[]>(peopleByDepartmentQuery, { department }, []);

  if (!people || people.length === 0) {
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
      <div role="list" className="grid-3-columns grid-team w-dyn-items">
        {people.map((p) => (
          <div role="listitem" className="w-dyn-item" key={p._id}>
            <div className="grid-column grid-column-team">
              {p.photo ? (
                <img
                  src={urlFor(p.photo).width(600).url()}
                  loading="lazy"
                  alt={p.name}
                  className="team-profile-image"
                />
              ) : null}
              <h4 className="team-profile-headline">{p.name}</h4>
              {p.title ? <p className="team-profile-title">{p.title}</p> : null}
              {p.displayContactInfo ? (
                <div className="experts-contact-container">
                  {p.phone ? (
                    <div className="contact-icon-block">
                      <a href={`tel:${p.phone.replace(/\s+/g, '')}`} className="w-inline-block">
                        <img src="/images/phone.png" loading="lazy" alt="Phone" className="contact-experts-icon" />
                      </a>
                    </div>
                  ) : null}
                  {p.email ? (
                    <div className="contact-icon-block">
                      <a href={`mailto:${p.email}`} className="w-inline-block">
                        <img src="/images/mail-advertising.png" loading="lazy" alt="Email" className="contact-experts-icon" />
                      </a>
                    </div>
                  ) : null}
                  {p.linkedin ? (
                    <div className="contact-icon-block">
                      <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="w-inline-block">
                        <img src="/images/linkedin_1.png" loading="lazy" alt="LinkedIn" className="contact-experts-icon-li" />
                      </a>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * "Latest resources" hero — a single most-recent resource rendered in the
 * two-column `home-resources-*` layout used on /installs and /links. An
 * optional categorySlug narrows the resource pool (e.g. only Installs).
 */
export async function LatestResourceHero({ categorySlug }: { categorySlug?: string } = {}) {
  const resources = categorySlug
    ? await safeFetch<ResourceCardData[]>(resourcesByCategoryQuery, { slug: categorySlug }, [])
    : await safeFetch<ResourceCardData[]>(allResourcesQuery, {}, []);
  const latest = resources[0];

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
          <div className="grid-wrapper grid-column-2-resources">
            <div className="grid-column home-resources-column-1">
              <div className="home-resources-image-container">
                {latest.featuredImage ? (
                  <img
                    loading="lazy"
                    src={urlFor(latest.featuredImage).width(1200).url()}
                    alt={latest.name}
                    className="global-resources-image"
                  />
                ) : null}
                <img loading="lazy" src="/images/Premrest_Scribble_Green.svg" alt="" className="home-resources-scribbles" />
                <img loading="lazy" src="/images/Premrest_Patch_Cream.svg" alt="" className="home-resources-patch" />
              </div>
            </div>
            <div className="grid-column home-resources-column-2">
              <div className="home-resources-container">
                <div className="content-badges-container-section">
                  {latest.category ? (
                    <div className="content-badge-service">
                      <h6 className="content-service-heading">{latest.category.name}</h6>
                    </div>
                  ) : null}
                  {latest.contentType ? (
                    <div className="content-badge-type">
                      <h6 className="content-type-heading">{latest.contentType.name}</h6>
                    </div>
                  ) : null}
                </div>
                <h3 className="home-resources-title">{latest.name}</h3>
                <a href={`/resources/${latest.slug}`} className="button is-secondary w-button">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Latest-projects grid used on /installs — matches the `projects-collection-list`
 * Webflow container (distinct from /projects which uses `projects-collection`).
 */
export async function LatestProjects({ limit = 3 }: { limit?: number } = {}) {
  const projects = await safeFetch<Project[]>(allProjectsQuery, {}, []);
  const shown = projects.slice(0, limit);

  if (shown.length === 0) {
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
      <div role="list" className="projects-collection-list w-dyn-items">
        {shown.map((p) => (
          <div role="listitem" className="w-dyn-item" key={p._id}>
            <div className="grid-column">
              <a href={`/projects/${p.slug}`} className="w-inline-block">
                <div className="installs-project-content grid-column grid-column-installs-project-cards-2"></div>
                <div className="installs-project-cards">
                  <div className="project-installs-images">
                    {p.featuredImage ? (
                      <img
                        src={urlFor(p.featuredImage).width(1200).url()}
                        loading="lazy"
                        alt={p.name}
                        height="Auto"
                        className="project-installs-image-2"
                      />
                    ) : null}
                  </div>
                </div>
                <h3 className="project-installs-headline">{p.name}</h3>
                {p.summary ? <p className="project-installs-subheadline">{p.summary}</p> : null}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * "Latest webinar" headline/summary block for /cleaning. Renders the
 * left-hand column (heading + paragraph + button); the hero image is
 * rendered separately by LatestCleaningWebinarImage so each slot maps to
 * the corresponding Webflow `.w-dyn-list` it replaces.
 */
export async function LatestCleaningWebinarText() {
  const latest = await safeFetch<ResourceCardData | null>(
    latestResourceByCategoryAndContentTypeQuery,
    { categorySlug: 'cleaning', contentTypeSlug: 'webinars' },
    null,
  );

  if (!latest) {
    return (
      <div className="webinar-grid-column w-dyn-list">
        <div className="w-dyn-empty">
          <div>No items found.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="webinar-grid-column w-dyn-list">
      <div role="list" className="w-dyn-items">
        <div role="listitem" className="w-dyn-item">
          <div className="grid-column grid-webinar">
            <h2>{latest.name}</h2>
            {latest.summary ? <p>{latest.summary}</p> : null}
            <a href={`/resources/${latest.slug}`} className="button w-button">
              View webinar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function LatestCleaningWebinarImage() {
  const latest = await safeFetch<ResourceCardData | null>(
    latestResourceByCategoryAndContentTypeQuery,
    { categorySlug: 'cleaning', contentTypeSlug: 'webinars' },
    null,
  );

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
          <div className="webinar-section-video">
            <div className="webinar-badges-container-section">
              <div className="content-badge-service is-inverse">
                <h6 className="content-service-heading is-inverse">Latest Webinar</h6>
              </div>
            </div>
            <a href={`/resources/${latest.slug}`} className="w-inline-block">
              <div className="letstalkfacilities-section-image">
                <img loading="lazy" src="/images/Premrest_Scribble_Green.svg" alt="" className="ltf-resources-scribbles" />
                <img loading="lazy" src="/images/Premrest_Patch_Orange.svg" alt="" className="ltf-resources-patch" />
                <img loading="lazy" src="/images/play-button.png" alt="" className="video-play-button" />
                <div className="letstalkfacilities-section-overlay"></div>
                {latest.featuredImage ? (
                  <img
                    loading="lazy"
                    height="Auto"
                    alt={latest.name}
                    src={urlFor(latest.featuredImage).width(1600).url()}
                    className="letstalkfacilities-section-videoimage"
                  />
                ) : null}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Featured-image block for a single specific resource — used on
 * /dental-practices where a fixed podcast episode is highlighted and its
 * image is pulled from the referenced Sanity document.
 */
export async function ResourcePodcastImage({ slug }: { slug: string }) {
  const r = await safeFetch<{ name: string; slug: string; featuredImage?: Image } | null>(
    resourceBySlugQuery,
    { slug },
    null,
  );

  if (!r || !r.featuredImage) {
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
          <div className="webinar-section-video">
            <a href={`/resources/${r.slug}`} className="w-inline-block">
              <div className="letstalkfacilities-section-image">
                <img loading="lazy" src="/images/Premrest_Scribble_Green.svg" alt="" className="ltf-resources-scribbles" />
                <img loading="lazy" src="/images/Premrest_Patch_Orange.svg" alt="" className="ltf-resources-patch" />
                <img loading="lazy" src="/images/play-button.png" alt="" className="video-play-button" />
                <div className="letstalkfacilities-section-overlay"></div>
                <img
                  loading="lazy"
                  height="Auto"
                  alt={r.name}
                  src={urlFor(r.featuredImage).width(1600).url()}
                  className="letstalkfacilities-section-videoimage"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
