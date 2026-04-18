export { metadata, viewport } from 'next-sanity/studio';

export const dynamic = 'force-static';

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  // The Studio owns the full page — bypass the site's Webflow chrome.
  return children;
}
