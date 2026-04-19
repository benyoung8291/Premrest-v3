import { allProjectsQuery } from '@/lib/queries';
import { safeFetch } from '@/lib/safeFetch';
import { urlFor } from '@/lib/sanity.image';
import type { Image } from 'sanity';

type Project = {
  _id: string;
  name: string;
  slug: string;
  summary?: string;
  featuredImage?: Image;
};

export const revalidate = 60;

export async function ProjectsGrid() {
  const projects = await safeFetch<Project[]>(allProjectsQuery, {}, []);

  if (!projects || projects.length === 0) {
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
      <div role="list" className="projects-collection w-dyn-items">
        {projects.map((p) => (
          <div role="listitem" className="collection-item w-dyn-item" key={p._id}>
            <a href={`/projects/${p.slug}`} className="projects-link w-inline-block">
              {p.featuredImage ? (
                <img
                  src={urlFor(p.featuredImage).width(1200).url()}
                  loading="lazy"
                  alt={p.name}
                  className="projects-featured-image"
                />
              ) : (
                <img
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                  loading="lazy"
                  alt=""
                  className="projects-featured-image w-dyn-bind-empty"
                />
              )}
              <div className="projects-container padding-medium">
                <h3 className="projects-heading">{p.name}</h3>
                {p.summary ? <p className="projects-summary">{p.summary}</p> : null}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
