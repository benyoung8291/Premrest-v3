import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { htmlDataAttrs } from '@/components/webflow-chrome/html-attrs';
import { PageTransitions } from '@/components/motion/PageTransitions';

import '@/styles/globals.css';
import '@/styles/enhancements.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premrest.com.au';
const SITE_NAME = 'Premrest';
const DEFAULT_TITLE = 'Premrest — Beautiful Commercial Flooring | Australia\u2019s Floor Care Experts';
const DEFAULT_DESCRIPTION =
  "Australia's go-to for commercial floor care \u2014 cleaning, installation and restoration for offices, facilities and multi-level projects. Sustainable, long-lasting, and backed by decades of expertise.";
const DEFAULT_OG_IMAGE =
  'https://cdn.prod.website-files.com/675661387278edf4cf92de17/6789cc06bafc481a657e1967_Home_FeaturedImage.jpg';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | Premrest',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: 'Next.js',
  keywords: [
    'commercial flooring Australia',
    'commercial floor care',
    'commercial carpet cleaning',
    'floor installation',
    'floor restoration',
    'facility management flooring',
    'sustainable commercial flooring',
    'Premrest',
  ],
  authors: [{ name: 'Premrest', url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Commercial Services',
  referrer: 'origin-when-cross-origin',
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/webclip.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'Premrest commercial flooring' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBF7F3' },
    { media: '(prefers-color-scheme: dark)', color: '#2E3133' },
  ],
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/favicon.png`,
  description: DEFAULT_DESCRIPTION,
  email: 'office@premrest.com.au',
  areaServed: { '@type': 'Country', name: 'Australia' },
  sameAs: [
    'https://www.youtube.com/@premrest',
    'https://open.spotify.com/show/7bO9C0xjbrc5sYduBnJHHv',
    'https://podcasts.apple.com/us/podcast/lets-talk-facilities/id1794530719',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-AU',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={(htmlDataAttrs as Record<string, string>).lang ?? 'en'}
      data-wf-page={(htmlDataAttrs as Record<string, string>)['data-wf-page']}
      data-wf-site={(htmlDataAttrs as Record<string, string>)['data-wf-site']}
    >
      <head>
        {/* Webflow CSS — order matters: normalize → webflow base → site theme */}
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/webflow.css" />
        <link rel="stylesheet" href="/css/premrest-486d48.webflow.css" />

        {/* Google Fonts via WebFont loader (matches Webflow's export) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          strategy="beforeInteractive"
        />
        <Script id="webfont-load" strategy="beforeInteractive">
          {`WebFont.load({google:{families:["Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic","PT Sans:400,400italic,700,700italic","Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic","Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","Inter:300,400,500,600,700","Public Sans:300,400,500,600,700"]}});`}
        </Script>
        <Script src="https://use.typekit.net/ykm3xtb.js" strategy="beforeInteractive" />
        <Script id="typekit-load" strategy="beforeInteractive">
          {`try{Typekit.load();}catch(e){}`}
        </Script>

        {/* Webflow's client-side helper sets w-mod-js and w-mod-touch on <html> */}
        <Script id="webflow-mod" strategy="beforeInteractive">
          {`!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`}
        </Script>

        {/* jQuery must load BEFORE webflow.js — ix2 depends on it. Loading
            beforeInteractive blocks rendering which is what we want here so
            the global $ is available when webflow.js evaluates. */}
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=675661387278edf4cf92de17"
          strategy="beforeInteractive"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <PageTransitions>{children}</PageTransitions>

        <script
          id="ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        <Script src="/js/webflow.js" strategy="afterInteractive" />

        {/* Fallback: if ix2 hasn't replaced inline opacity:0 within 2s
            (e.g. webflow.js blocked, intersection observer glitch on mobile),
            force any opacity:0 inline-styled element to be visible. */}
        <Script id="ix2-fallback" strategy="afterInteractive">
          {`setTimeout(function(){document.querySelectorAll('[style*="opacity:0"],[style*="opacity: 0"]').forEach(function(e){if(!e.style.transition)e.style.opacity='1';});},2000);`}
        </Script>
      </body>
    </html>
  );
}
