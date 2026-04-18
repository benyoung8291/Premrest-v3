import type { Metadata } from 'next';
import Script from 'next/script';
import { htmlDataAttrs } from '@/components/webflow-chrome/html-attrs';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Premrest — Beautiful Flooring | Commercial Floor Experts',
    template: '%s | Premrest',
  },
  description:
    "Australia's go-to for commercial floor care, cleaning and installing floors from small spaces to multi-level projects.",
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/webclip.png',
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
        {children}

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
