import { groq } from 'next-sanity';

export const allResourcesQuery = groq`
  *[_type == "resource"] | order(coalesce(publishedAt, _createdAt) desc) {
    _id,
    name,
    "slug": slug.current,
    summary,
    featuredImage,
    video,
    category->{name, "slug": slug.current, icon},
    contentType->{name, "slug": slug.current},
    "authors": authors[]->{name, "slug": slug.current, photo, title},
    "industries": industries[]->{name, "slug": slug.current},
    "tags": tags[]->{name, "slug": slug.current}
  }
`;

export const resourceBySlugQuery = groq`
  *[_type == "resource" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    summary,
    content,
    featuredImage,
    video,
    "fileUpload": fileUpload{ asset-> { url, originalFilename } },
    fileCoverImage,
    category->{name, "slug": slug.current, icon},
    contentType->{name, "slug": slug.current},
    "authors": authors[]->{name, "slug": slug.current, photo, title, bio},
    "industries": industries[]->{name, "slug": slug.current},
    "tags": tags[]->{name, "slug": slug.current}
  }
`;

export const allProjectsQuery = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id, name, "slug": slug.current, summary, featuredImage,
    "projectManagers": projectManagers[]->{name, "slug": slug.current, photo, title}
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id, name, "slug": slug.current, summary, description, featuredImage, photos,
    "projectManagers": projectManagers[]->{name, "slug": slug.current, photo, title, email, phone, linkedin}
  }
`;

export const allPeopleQuery = groq`
  *[_type == "person"] | order(sortOrder asc, name asc) {
    _id, name, "slug": slug.current, title, photo, department,
    phone, email, linkedin, displayContactInfo, displayResources, bio
  }
`;

export const personBySlugQuery = groq`
  *[_type == "person" && slug.current == $slug][0] {
    _id, name, "slug": slug.current, title, photo, bio,
    phone, email, linkedin, displayContactInfo, displayResources
  }
`;

// Resource card shape shared by the listing + every filtered page.
const resourceCardProjection = `
  _id,
  name,
  "slug": slug.current,
  summary,
  featuredImage,
  video,
  category->{name, "slug": slug.current, icon},
  contentType->{name, "slug": slug.current},
  "authors": authors[]->{name, "slug": slug.current, photo, title},
  "industries": industries[]->{name, "slug": slug.current},
  "tags": tags[]->{name, "slug": slug.current}
`;

export const resourcesByCategoryQuery = groq`
  *[_type == "resource" && category->slug.current == $slug]
    | order(coalesce(publishedAt, _createdAt) desc) { ${resourceCardProjection} }
`;

export const resourcesByContentTypeQuery = groq`
  *[_type == "resource" && contentType->slug.current == $slug]
    | order(coalesce(publishedAt, _createdAt) desc) { ${resourceCardProjection} }
`;

export const resourcesByIndustryQuery = groq`
  *[_type == "resource" && $slug in industries[]->slug.current]
    | order(coalesce(publishedAt, _createdAt) desc) { ${resourceCardProjection} }
`;

export const resourcesByTagQuery = groq`
  *[_type == "resource" && $slug in tags[]->slug.current]
    | order(coalesce(publishedAt, _createdAt) desc) { ${resourceCardProjection} }
`;

export const resourcesByAuthorQuery = groq`
  *[_type == "resource" && $slug in authors[]->slug.current]
    | order(coalesce(publishedAt, _createdAt) desc) { ${resourceCardProjection} }
`;

export const allCategorySlugsQuery = groq`*[_type == "category" && defined(slug.current)]{ "slug": slug.current, name, icon }`;
export const allContentTypeSlugsQuery = groq`*[_type == "contentType" && defined(slug.current)]{ "slug": slug.current, name }`;
export const allIndustrySlugsQuery = groq`*[_type == "industry" && defined(slug.current)]{ "slug": slug.current, name }`;
export const allTagSlugsQuery = groq`*[_type == "tag" && defined(slug.current)]{ "slug": slug.current, name }`;

export const categoryBySlugQuery = groq`*[_type == "category" && slug.current == $slug][0]{ name, "slug": slug.current, icon }`;
export const contentTypeBySlugQuery = groq`*[_type == "contentType" && slug.current == $slug][0]{ name, "slug": slug.current }`;
export const industryBySlugQuery = groq`*[_type == "industry" && slug.current == $slug][0]{ name, "slug": slug.current }`;
export const tagBySlugQuery = groq`*[_type == "tag" && slug.current == $slug][0]{ name, "slug": slug.current }`;
