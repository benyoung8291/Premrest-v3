import { readClient } from '@/lib/sanity.client';
import { allPeopleQuery } from '@/lib/queries';
import { urlFor } from '@/lib/sanity.image';
import type { Image } from 'sanity';

type Person = {
  _id: string;
  name: string;
  slug: string;
  title?: string;
  photo?: Image;
};

export const revalidate = 60;

/**
 * Replacement for the Webflow `.grid-team.w-dyn-items` list on /about.
 * Class names match the export so the Webflow CSS continues to apply.
 */
export async function TeamGrid() {
  const people = await readClient.fetch<Person[]>(allPeopleQuery);

  return (
    <div className="w-dyn-list">
      <div role="list" className="grid-4-columns grid-team w-dyn-items">
        {people.map((p) => (
          <div role="listitem" className="w-dyn-item" key={p._id}>
            <div className="grid-column grid-column-team">
              <a href={`/people/${p.slug}`} className="team-profile-links w-inline-block">
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
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
