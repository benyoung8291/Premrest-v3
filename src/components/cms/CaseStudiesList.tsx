import { readClient } from '@/lib/sanity.client';
import { allProjectsQuery } from '@/lib/queries';
import { urlFor } from '@/lib/sanity.image';
import type { Image } from 'sanity';

type Project = {
  _id: string;
  name: string;
  slug: string;
  summary?: string;
  featuredImage?: Image;
  projectManagers?: Array<{ name: string; slug: string; title?: string; photo?: Image }>;
};

export const revalidate = 60;

/**
 * Featured (latest) case study on /case-studies — replaces the first
 * `.casestudies-section-feature .w-dyn-list`.
 */
export async function CaseStudyFeatured() {
  const projects = await readClient.fetch<Project[]>(allProjectsQuery);
  const p = projects[0];
  if (!p) return null;

  return (
    <div className="w-dyn-list">
      <div role="list" className="w-dyn-items">
        <div role="listitem" className="w-dyn-item">
          <div className="grid-2-columns casestudies-feature">
            <div className="grid-column">
              <div className="column-image-block">
                {p.featuredImage ? (
                  <img
                    src={urlFor(p.featuredImage).width(1600).url()}
                    loading="lazy"
                    alt={p.name}
                    className="casestudies-feature-cover-image"
                  />
                ) : null}
                <img src="/images/Premrest_Scribble_Green.svg" loading="lazy" alt="" className="casestudies-image-scribble" />
                <img src="/images/Premrest_Patch_Blue.svg" loading="lazy" alt="" className="casestudies-image-patch" />
              </div>
            </div>
            <div className="grid-column">
              <div className="content-badge-service">
                <h6 className="casestudies-feature-badge">Latest Case Study</h6>
              </div>
              <h2>{p.name}</h2>
              {p.summary ? <p>{p.summary}</p> : null}
              {p.projectManagers && p.projectManagers.length > 0 ? (
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    {p.projectManagers.map((pm) => (
                      <div role="listitem" className="w-dyn-item" key={pm.slug}>
                        <div className="resources-author-container casestudies-feature">
                          {pm.photo ? (
                            <img
                              src={urlFor(pm.photo).width(120).url()}
                              loading="lazy"
                              alt={pm.name}
                              className="resources-author-image"
                            />
                          ) : null}
                          <div>
                            <h6 className="resources-author-name">{pm.name}</h6>
                            {pm.title ? <h6 className="resources-author-title">{pm.title}</h6> : null}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              <a
                href={`/projects/${p.slug}`}
                className="button casestudies-feature-button w-button"
              >
                View case study
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * "Other case studies" grid — replaces `.casestudies-section-other .w-dyn-list`.
 */
export async function CaseStudyOthers() {
  const projects = await readClient.fetch<Project[]>(allProjectsQuery);
  const rest = projects.slice(1);
  if (rest.length === 0) {
    return (
      <div className="w-dyn-list">
        <div className="w-dyn-empty">
          <div>More case studies coming soon.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-dyn-list">
      <div role="list" className="casestudies-other-columns w-dyn-items">
        {rest.map((p) => (
          <div role="listitem" className="w-dyn-item" key={p._id}>
            <div className="grid-column">
              <div className="column-image-block">
                {p.featuredImage ? (
                  <img
                    src={urlFor(p.featuredImage).width(1200).url()}
                    loading="lazy"
                    alt={p.name}
                    className="casestudies-other-cover-image"
                  />
                ) : null}
              </div>
              <h4>{p.name}</h4>
              {p.summary ? <p>{p.summary}</p> : null}
              <a
                href={`/projects/${p.slug}`}
                className="button casestudies-feature-button w-button"
              >
                View case study
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
