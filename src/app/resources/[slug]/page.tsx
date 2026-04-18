import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { Image, PortableTextBlock } from 'sanity';
import { WebflowPage } from '@/components/webflow-chrome/WebflowPage';
import { WebflowHtml } from '@/components/webflow-chrome/WebflowHtml';
import { resourceBySlugQuery, allResourcesQuery } from '@/lib/queries';
import { safeFetch } from '@/lib/safeFetch';
import { urlFor } from '@/lib/sanity.image';

export const revalidate = 60;

type Author = {
  name: string;
  slug: string;
  title?: string;
  photo?: Image;
  bio?: string;
};

type Resource = {
  _id: string;
  name: string;
  slug: string;
  summary?: string;
  content?: PortableTextBlock[];
  featuredImage?: Image;
  video?: string;
  fileUpload?: { asset?: { _ref: string; url?: string } };
  fileCoverImage?: Image;
  category?: { name: string; slug: string };
  contentType?: { name: string; slug: string };
  authors?: Author[];
};

export async function generateStaticParams() {
  const resources = await safeFetch<Array<{ slug: string }>>(
    allResourcesQuery,
    {},
    [],
  );
  return resources.filter((r) => r.slug).map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = await safeFetch<Resource | null>(
    resourceBySlugQuery,
    { slug },
    null,
  );
  if (!resource) return { title: 'Premrest | Resource' };
  const title = `Premrest | ${resource.name}`;
  const image = resource.featuredImage
    ? urlFor(resource.featuredImage).width(1200).url()
    : undefined;
  return {
    title,
    description: resource.summary,
    openGraph: {
      title,
      description: resource.summary,
      ...(image ? { images: [image] } : {}),
    },
    twitter: {
      title,
      description: resource.summary,
      ...(image ? { images: [image] } : {}),
    },
  };
}

const globalStylesHtml = `
  <div class="global-styles w-embed">
    <style>
body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:antialiased;text-rendering:optimizeLegibility}*[tabindex]:focus-visible,input[type="file"]:focus-visible{outline:.125rem solid #4d65ff;outline-offset:.125rem}.inherit-color *{color:inherit}.w-richtext > :not(div):first-child,.w-richtext > div:first-child > :first-child{margin-top:0 !important}.w-richtext>:last-child,.w-richtext ol li:last-child,.w-richtext ul li:last-child{margin-bottom:0 !important}.container-medium,.container-small,.container-large{margin-right:auto !important;margin-left:auto !important}.text-style-3lines{display:-webkit-box;overflow:hidden;-webkit-line-clamp:3;-webkit-box-orient:vertical}.text-style-2lines{display:-webkit-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}.hide{display:none !important}@media screen and (max-width:991px){.hide,.hide-tablet{display:none !important}}@media screen and (max-width:767px){.hide-mobile-landscape{display:none !important}}@media screen and (max-width:479px){.hide-mobile{display:none !important}}
    </style>
  </div>
`;

const podcastLinksHtml = `
  <div class="grid-column ltf-block-resources">
    <p><strong>Subscribe to the Let's Talk Facilities podcast.</strong></p>
    <div class="podcast-logos">
      <a href="https://podcasts.apple.com/us/podcast/lets-talk-facilities/id1794530719" target="_blank" class="podcast-link w-inline-block"><img src="/images/Apple.webp" loading="lazy" alt="" class="podcast-logo"></a>
      <a href="https://www.youtube.com/@premrest" target="_blank" class="podcast-link w-inline-block"><img src="/images/YouTube.webp" loading="lazy" alt="" class="podcast-logo"></a>
      <a href="https://open.spotify.com/show/7bO9C0xjbrc5sYduBnJHHv?si=7c0c7e6877154f3e" target="_blank" class="podcast-link w-inline-block"><img src="/images/Spotify.webp" loading="lazy" alt="" class="podcast-logo"></a>
      <a href="https://youtube.com/playlist?list=PLMLI27bMPtHrw4TgptEyP8nRlmCutCFUS" target="_blank" class="podcast-link w-inline-block"><img src="/images/YT-Music.webp" loading="lazy" alt="" class="podcast-logo"></a>
    </div>
  </div>
`;

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
  const resource = await safeFetch<Resource | null>(
    resourceBySlugQuery,
    { slug },
    null,
  );

  if (!resource) notFound();

  const downloadUrl = resource.fileUpload?.asset?.url;
  const heroImage = resource.featuredImage
    ? urlFor(resource.featuredImage).width(1500).url()
    : null;

  return (
    <WebflowPage bodyClass="">
      <div className="page-wrapper">
        <WebflowHtml html={globalStylesHtml} />
        <div className="main-wrapper">
          <div className="resources-template-header background-color-primary">
            <div className="padding-global padding-section-large resources-template-padding-header">
              <div className="container-xlarge"></div>
            </div>
          </div>
          <div className="resources-content-section">
            <div className="padding-global padding-section-large padding-resources-template">
              <div className="container-large">
                <div className="grid-wrapper resources-template-container">
                  <div className="grid-column resources-template-image-container">
                    <div className="resources-template-image-container">
                      {heroImage ? (
                        <img
                          loading="lazy"
                          src={heroImage}
                          alt={resource.name}
                          className="resources-template-image"
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
                      <div className="content-badges-container-section">
                        {resource.category ? (
                          <div className="content-badge-service">
                            <h6 className="content-service-heading">
                              {resource.category.name}
                            </h6>
                          </div>
                        ) : null}
                        {resource.contentType ? (
                          <div className="content-badge-type">
                            <h6 className="content-type-heading">
                              {resource.contentType.name}
                            </h6>
                          </div>
                        ) : null}
                      </div>
                      <h2 className="resources-template-heading">
                        {resource.name}
                      </h2>
                      {resource.authors && resource.authors.length > 0 ? (
                        <div className="resource-template-authors">
                          {resource.authors.map((author) => (
                            <div
                              key={author.slug}
                              className="resource-template-items"
                            >
                              <div className="resources-author-container">
                                {author.photo ? (
                                  <img
                                    src={urlFor(author.photo).width(200).url()}
                                    loading="lazy"
                                    alt={author.name}
                                    className="resources-author-image"
                                  />
                                ) : null}
                                <div>
                                  <h6 className="resources-author-name">
                                    {author.name}
                                  </h6>
                                  {author.title ? (
                                    <h6 className="resources-author-title">
                                      {author.title}
                                    </h6>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="grid-wrapper">
                  <div className="grid-1-column">
                    <div className="grid-column resources-content-container">
                      {resource.summary ? (
                        <p className="text-size-large resources-content-summary">
                          {resource.summary}
                        </p>
                      ) : null}
                      {resource.video ? (
                        <div className="resources-video w-embed">
                          <iframe
                            src={resource.video}
                            title={resource.name}
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{
                              width: '100%',
                              aspectRatio: '16 / 9',
                              border: 0,
                            }}
                          />
                        </div>
                      ) : null}
                      {resource.content && resource.content.length > 0 ? (
                        <div className="grid-column w-richtext">
                          <PortableText
                            value={resource.content}
                            components={portableTextComponents}
                          />
                        </div>
                      ) : null}
                      {downloadUrl ? (
                        <a
                          href={downloadUrl}
                          id="file-download"
                          className="button w-button"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download
                        </a>
                      ) : null}
                      <WebflowHtml html={podcastLinksHtml} />
                    </div>
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
