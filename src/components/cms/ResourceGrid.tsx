import { allResourcesQuery } from '@/lib/queries';
import { safeFetch } from '@/lib/safeFetch';
import { ResourceCards, type ResourceCard } from './ResourceCards';

export const revalidate = 60;

export async function ResourceGrid() {
  const resources = await safeFetch<ResourceCard[]>(allResourcesQuery, {}, []);
  return <ResourceCards resources={resources} />;
}
