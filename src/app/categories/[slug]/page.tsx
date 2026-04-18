import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FilteredResourcesPage } from '@/components/cms/FilteredResourcesPage';
import type { ResourceCard } from '@/components/cms/ResourceCards';
import {
  categoryBySlugQuery,
  allCategorySlugsQuery,
  resourcesByCategoryQuery,
} from '@/lib/queries';
import { safeFetch } from '@/lib/safeFetch';

export const revalidate = 60;

type Category = { name: string; slug: string };

export async function generateStaticParams() {
  const cats = await safeFetch<Array<{ slug: string }>>(allCategorySlugsQuery, {}, []);
  return cats.filter((c) => c.slug).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await safeFetch<Category | null>(categoryBySlugQuery, { slug }, null);
  const title = category ? `Premrest | ${category.name}` : 'Premrest';
  return { title, openGraph: { title }, twitter: { title } };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await safeFetch<Category | null>(categoryBySlugQuery, { slug }, null);
  if (!category) notFound();
  const resources = await safeFetch<ResourceCard[]>(resourcesByCategoryQuery, { slug }, []);
  return <FilteredResourcesPage heading={category.name} resources={resources} />;
}
