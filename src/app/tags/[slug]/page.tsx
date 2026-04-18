import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FilteredResourcesPage } from '@/components/cms/FilteredResourcesPage';
import type { ResourceCard } from '@/components/cms/ResourceCards';
import {
  tagBySlugQuery,
  allTagSlugsQuery,
  resourcesByTagQuery,
} from '@/lib/queries';
import { safeFetch } from '@/lib/safeFetch';

export const revalidate = 60;

type Tag = { name: string; slug: string };

export async function generateStaticParams() {
  const items = await safeFetch<Array<{ slug: string }>>(allTagSlugsQuery, {}, []);
  return items.filter((c) => c.slug).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await safeFetch<Tag | null>(tagBySlugQuery, { slug }, null);
  const title = item ? `Premrest | ${item.name}` : 'Premrest';
  return { title, openGraph: { title }, twitter: { title } };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await safeFetch<Tag | null>(tagBySlugQuery, { slug }, null);
  if (!item) notFound();
  const resources = await safeFetch<ResourceCard[]>(resourcesByTagQuery, { slug }, []);
  return <FilteredResourcesPage heading={item.name} resources={resources} />;
}
