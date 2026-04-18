'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Page transitions + scroll-reveal, with zero runtime dependencies.
 *
 * 1. **Route-change fade** — we flip `data-pr-route-enter` on the wrapper each
 *    time the pathname changes. CSS handles the fade-in (see enhancements.css).
 *    On browsers that support the View Transitions API the cross-fade uses it
 *    natively, otherwise it degrades to the CSS keyframe.
 *
 * 2. **Scroll-reveal** — on every route, we tag the large top-level sections
 *    inside the route tree with `data-pr-reveal`, then an IntersectionObserver
 *    adds `.is-visible` when each enters the viewport. This adds perceived
 *    polish without duplicating what Webflow's ix2 does on the homepage
 *    hero/hero-adjacent elements (which already carry `data-w-id`).
 *
 * Everything is gated behind `prefers-reduced-motion: no-preference` via CSS,
 * so we don't need to branch in JS for accessibility.
 */
export function PageTransitions({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Tag top-level sections for scroll-reveal and observe them. Re-runs on
  // every navigation so newly-rendered pages get the treatment too.
  useEffect(() => {
    const root = wrapperRef.current;
    if (!root || typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || typeof IntersectionObserver === 'undefined') return;

    // Target the semantic sections inside the page body. We intentionally
    // skip the hero (first direct child), because Webflow's ix2 runs its own
    // opening animation there and we don't want to double-up.
    const candidates = root.querySelectorAll<HTMLElement>(
      [
        '.main-wrapper > section:not(:first-child)',
        '.main-wrapper > div[class*="section"]:not(:first-child)',
        '.page-wrapper > section:not(:first-child)',
        '.page-wrapper > div[class*="section"]:not(:first-child)',
      ].join(','),
    );

    // Skip elements Webflow ix2 is already animating (they have data-w-id
    // and start with inline `opacity:0`).
    const reveals: HTMLElement[] = [];
    candidates.forEach((el) => {
      if (el.hasAttribute('data-w-id')) return;
      if (el.getAttribute('data-pr-reveal') !== null) return;
      el.setAttribute('data-pr-reveal', '');
      reveals.push(el);
    });

    if (reveals.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    reveals.forEach((el) => observer.observe(el));

    // Failsafe: reveal anything still hidden after 1.5s (very short pages,
    // observers that miss on fast scroll, etc.).
    const failsafe = window.setTimeout(() => {
      reveals.forEach((el) => el.classList.add('is-visible'));
    }, 1500);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, [pathname]);

  // Toggle the route-enter attribute on each navigation to retrigger the
  // fade animation on the wrapper.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    el.removeAttribute('data-pr-route-enter');
    // Force a reflow so the animation restarts.
    void el.offsetWidth;
    el.setAttribute('data-pr-route-enter', '');
  }, [pathname]);

  return (
    <div ref={wrapperRef} data-pr-route-wrapper data-pr-route-enter>
      {children}
    </div>
  );
}
