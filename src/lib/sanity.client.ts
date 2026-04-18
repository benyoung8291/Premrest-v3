import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-01';

// Server-side token; falls back to the write token so reads work without
// extra setup. This only runs in server components / route handlers —
// never shipped to the browser.
const serverReadToken =
  process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN;

export const readClient = createClient({
  projectId,
  dataset,
  apiVersion,
  // Private datasets can't use the CDN (no auth support on CDN reads),
  // so turn it off when we're forced to send a token.
  useCdn: !serverReadToken,
  perspective: 'published',
  token: serverReadToken,
});

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});
