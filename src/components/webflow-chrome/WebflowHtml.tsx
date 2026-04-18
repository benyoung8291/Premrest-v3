import React, { Fragment } from 'react';

/**
 * Render Webflow-exported HTML where certain sections have been replaced with
 * HTML comments like `<!--SANITY:resources-->`. The comment markers are swapped
 * out for the provided React slot components so Sanity-driven content can be
 * interleaved with the static Webflow markup.
 *
 * Chunks between markers are injected as raw HTML via dangerouslySetInnerHTML
 * so Webflow's ix2 data-w-id attributes and CSS selectors keep working.
 */
export function WebflowHtml({
  html,
  slots = {},
}: {
  html: string;
  slots?: Record<string, React.ReactNode>;
}) {
  const pattern = /<!--SANITY:([a-zA-Z0-9_-]+)-->/g;
  const parts: Array<{ kind: 'html'; value: string } | { kind: 'slot'; name: string }> = [];
  let cursor = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(html)) !== null) {
    if (match.index > cursor) {
      parts.push({ kind: 'html', value: html.slice(cursor, match.index) });
    }
    parts.push({ kind: 'slot', name: match[1] });
    cursor = match.index + match[0].length;
  }
  if (cursor < html.length) {
    parts.push({ kind: 'html', value: html.slice(cursor) });
  }

  return (
    <>
      {parts.map((p, i) =>
        p.kind === 'html' ? (
          // display:contents makes this wrapper invisible to CSS layout so
          // Webflow selectors that depend on direct-child relationships still
          // resolve across the chunk boundary.
          <div
            key={i}
            style={{ display: 'contents' }}
            dangerouslySetInnerHTML={{ __html: p.value }}
          />
        ) : (
          <Fragment key={i}>{slots[p.name] ?? null}</Fragment>
        ),
      )}
    </>
  );
}
