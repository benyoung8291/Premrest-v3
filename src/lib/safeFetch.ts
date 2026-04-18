import { readClient } from './sanity.client';

/**
 * Run a GROQ query but degrade to a fallback on any failure (auth, network,
 * missing env vars at build time). This keeps static pre-rendering unblocked
 * when Sanity is temporarily unreachable or misconfigured — the page builds
 * with fallback data and will repopulate on the next revalidation.
 */
export async function safeFetch<T>(query: string, params: Record<string, unknown>, fallback: T): Promise<T> {
  try {
    return await readClient.fetch<T>(query, params);
  } catch (err) {
    console.warn('[sanity] query failed, using fallback:', (err as Error).message);
    return fallback;
  }
}
