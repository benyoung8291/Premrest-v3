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
    author->{name, "slug": slug.current, photo, title},
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
    fileUpload,
    fileCoverImage,
    category->{name, "slug": slug.current, icon},
    contentType->{name, "slug": slug.current},
    author->{name, "slug": slug.current, photo, title, bio},
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
