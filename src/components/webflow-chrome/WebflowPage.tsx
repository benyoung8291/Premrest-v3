import { navHtml } from './nav.html';
import { footerHtml } from './footer.html';

type Props = {
  bodyClass?: string;
  children: React.ReactNode;
  [key: `data-${string}`]: string | undefined;
};

/**
 * Drop-in replacement for Webflow's <body> wrapper. Each generated page renders
 * <WebflowPage> with the body class + data-* attributes stripped off the
 * exported Webflow HTML, and inserts the shared nav + footer that used to live
 * inline in every page.
 *
 * Next.js puts this inside <body>, so we render a <div> here (not another
 * <body>). The Webflow CSS targets classes/data-attrs, not the body tag itself,
 * so placing them on a wrapper div works identically.
 */
export function WebflowPage({ bodyClass, children, ...dataAttrs }: Props) {
  return (
    <div className={bodyClass} {...dataAttrs}>
      <div dangerouslySetInnerHTML={{ __html: navHtml }} />
      {children}
      <div dangerouslySetInnerHTML={{ __html: footerHtml }} />
    </div>
  );
}
