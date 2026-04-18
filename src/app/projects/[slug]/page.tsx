import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { Image, PortableTextBlock } from 'sanity';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { projectBySlugQuery, allProjectsQuery } from '@/lib/queries';
import { safeFetch } from '@/lib/safeFetch';
import { urlFor } from '@/lib/sanity.image';

export const revalidate = 60;

type Manager = {
  name: string;
  slug: string;
  title?: string;
  photo?: Image;
  email?: string;
  phone?: string;
  linkedin?: string;
};

type Project = {
  _id: string;
  name: string;
  slug: string;
  summary?: string;
  description?: PortableTextBlock[];
  featuredImage?: Image;
  photos?: Image[];
  projectManagers?: Manager[];
};

export async function generateStaticParams() {
  const projects = await safeFetch<Array<{ slug: string }>>(allProjectsQuery, {}, []);
  return projects.filter((p) => p.slug).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await safeFetch<Project | null>(projectBySlugQuery, { slug }, null);
  if (!project) return { title: 'Premrest | Case Study' };
  const title = `Premrest | ${project.name}`;
  const image = project.featuredImage ? urlFor(project.featuredImage).width(1200).url() : undefined;
  return {
    title,
    description: project.summary,
    openGraph: { title, description: project.summary, ...(image ? { images: [image] } : {}) },
    twitter: { title, description: project.summary, ...(image ? { images: [image] } : {}) },
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
  const project = await safeFetch<Project | null>(projectBySlugQuery, { slug }, null);

  if (!project) notFound();

  const heroImage = project.featuredImage
    ? urlFor(project.featuredImage).width(1500).url()
    : null;

  return (
    <WebflowPage bodyClass="">
      <div className="page-wrapper">
        <div className="main-wrapper">
          <div className="projects-template-header background-color-primary">
            <div className="padding-global padding-section-large resources-template-padding-header">
              <div className="container-xlarge"></div>
            </div>
          </div>
          <div className="projects-content-section">
            <div className="padding-global padding-section-large padding-resources-template">
              <div className="container-large">
                <div className="grid-wrapper resources-template-container">
                  <div className="grid-column resources-template-image-container">
                    <div className="resources-template-image-container">
                      {heroImage ? (
                        <img
                          loading="lazy"
                          src={heroImage}
                          alt={project.name}
                          className="projects-template-image"
                        />
                      ) : null}
                      <img
                        loading="lazy"
                        src="/images/Premrest_Scribble_Green.svg"
                        alt=""
                        className="home-resources-scribbles"
                      />
                      <img
                        loading="lazy"
                        src="/images/Premrest_Patch_Cream.svg"
                        alt=""
                        className="home-resources-patch"
                      />
                    </div>
                  </div>
                  <div className="grid-column resources-template-title-container">
                    <div className="resources-template-header-container">
                      <h2 className="projects-template-heading">{project.name}</h2>
                      {project.summary ? (
                        <p className="projects-template-subheading">{project.summary}</p>
                      ) : null}
                      {project.projectManagers && project.projectManagers.length > 0 ? (
                        <div className="project-authors">
                          <div className="projects-author-wrapper">
                            {project.projectManagers.map((pm) => (
                              <div key={pm.slug} className="projects-author-container">
                                {pm.photo ? (
                                  <img
                                    src={urlFor(pm.photo).width(200).url()}
                                    loading="lazy"
                                    alt={pm.name}
                                    className="resources-author-image"
                                  />
                                ) : null}
                                <div>
                                  <h6 className="resources-author-name">{pm.name}</h6>
                                  {pm.title ? (
                                    <h6 className="resources-author-title">{pm.title}</h6>
                                  ) : null}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="grid-wrapper">
                  <div className="grid-1-column">
                    <div className="grid-column resources-content-container">
                      {project.description && project.description.length > 0 ? (
                        <div className="grid-column w-richtext">
                          <PortableText
                            value={project.description}
                            components={portableTextComponents}
                          />
                        </div>
                      ) : null}
                    </div>
                    {project.photos && project.photos.length > 0 ? (
                      <div className="grid-column grid-padding-top">
                        <div
                          className="grid-wrapper"
                          style={{
                            gap: '1rem',
                            gridTemplateColumns:
                              'repeat(auto-fill, minmax(300px, 1fr))',
                          }}
                        >
                          {project.photos.map((photo, i) => (
                            <img
                              key={i}
                              src={urlFor(photo).width(1200).url()}
                              loading="lazy"
                              alt={`${project.name} photo ${i + 1}`}
                              style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '0.5rem',
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WebflowPage>
  );
}
