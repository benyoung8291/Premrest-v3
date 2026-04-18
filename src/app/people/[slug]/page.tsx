import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { Image, PortableTextBlock } from 'sanity';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { ResourceCards, type ResourceCard } from '@/components/cms/ResourceCards';
import {
  personBySlugQuery,
  allPeopleQuery,
  resourcesByAuthorQuery,
} from '@/lib/queries';
import { safeFetch } from '@/lib/safeFetch';
import { urlFor } from '@/lib/sanity.image';

export const revalidate = 60;

type Person = {
  _id: string;
  name: string;
  slug: string;
  title?: string;
  photo?: Image;
  bio?: PortableTextBlock[];
  phone?: string;
  email?: string;
  linkedin?: string;
  displayContactInfo?: boolean;
  displayResources?: boolean;
};

export async function generateStaticParams() {
  const people = await safeFetch<Array<{ slug: string }>>(allPeopleQuery, {}, []);
  return people.filter((p) => p.slug).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = await safeFetch<Person | null>(personBySlugQuery, { slug }, null);
  if (!person) return { title: 'Premrest' };
  const title = `${person.name}${person.title ? ` - ${person.title}` : ''} at Premrest`;
  const image = person.photo ? urlFor(person.photo).width(1200).url() : undefined;
  return {
    title,
    openGraph: { title, ...(image ? { images: [image] } : {}) },
    twitter: { title, ...(image ? { images: [image] } : {}) },
  };
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: Image }) => (
      <img
        src={urlFor(value).width(1200).url()}
        alt=""
        loading="lazy"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    ),
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = await safeFetch<Person | null>(personBySlugQuery, { slug }, null);
  if (!person) notFound();

  const showResources = person.displayResources !== false;
  const resources = showResources
    ? await safeFetch<ResourceCard[]>(resourcesByAuthorQuery, { slug }, [])
    : [];
  const photoUrl = person.photo ? urlFor(person.photo).width(1200).url() : null;

  return (
    <WebflowPage bodyClass="">
      <div className="page-wrapper">
        <div className="main-wrapper">
          <div className="people-section-profile padding-top">
            <div className="padding-global padding-section-large">
              <div className="container-large">
                <div className="grid-wrapper">
                  <div className="grid-2-columns">
                    <div className="grid-column">
                      {photoUrl ? (
                        <img
                          src={photoUrl}
                          loading="lazy"
                          alt={person.name}
                          className="profile-image"
                        />
                      ) : null}
                    </div>
                    <div className="grid-column">
                      <h2 className="profile-headline">{person.name}</h2>
                      {person.title ? (
                        <p className="text-size-large profile-subheadline">
                          {person.title}
                        </p>
                      ) : null}
                      {person.bio && person.bio.length > 0 ? (
                        <div className="grid-column w-richtext">
                          <PortableText
                            value={person.bio}
                            components={portableTextComponents}
                          />
                        </div>
                      ) : null}
                      {person.displayContactInfo !== false ? (
                        <div style={{ marginTop: '1rem' }}>
                          {person.email ? (
                            <p>
                              <a href={`mailto:${person.email}`}>{person.email}</a>
                            </p>
                          ) : null}
                          {person.phone ? (
                            <p>
                              <a href={`tel:${person.phone.replace(/\s+/g, '')}`}>
                                {person.phone}
                              </a>
                            </p>
                          ) : null}
                          {person.linkedin ? (
                            <p>
                              <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                LinkedIn
                              </a>
                            </p>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showResources && resources.length > 0 ? (
            <div className="people-section-resources">
              <div className="padding-global padding-section-large">
                <div className="container-large">
                  <div className="grid-wrapper grid-wrapper-team">
                    <div className="grid-1-column">
                      <div className="grid-column">
                        <h2>Resources</h2>
                      </div>
                    </div>
                    <ResourceCards resources={resources} />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </WebflowPage>
  );
}
