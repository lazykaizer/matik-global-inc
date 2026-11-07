'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Ensures that navigating between pages always starts at the top (0, 0)
 * across mobile, tablets, and desktop browsers, preventing Next.js / browser
 * scroll retention issues when clicking links from page footers or lower sections.
 */
export function NavigationScrollRestoration() {
  const pathname = usePathname();
  const prevPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    // Prevent browser from automatically reusing old scroll offsets on SPA navigations
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Listen for clicks on links that point to the current page (e.g. clicking Home while on Home)
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href) return;

      // If user clicks a link to the exact same route without an anchor hash, scroll to top
      if (href === pathname || (href === '/' && pathname === '/')) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleAnchorClick, { passive: true });
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [pathname]);

  // Handle route change
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if route changed
    const isNewRoute = prevPathnameRef.current !== null && prevPathnameRef.current !== pathname;
    prevPathnameRef.current = pathname;

    if (!isNewRoute) return;

    // If there is an on-page hash, let browser/element handle scrolling to that section
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      const targetId = hash.slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    const html = document.documentElement;
    const hadScrollSmooth = html.classList.contains('scroll-smooth');

    // Temporarily disable smooth scroll so reset to (0, 0) is guaranteed instantaneous
    if (hadScrollSmooth) {
      html.classList.remove('scroll-smooth');
      html.style.scrollBehavior = 'auto';
    }

    const performReset = () => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      } catch {
        window.scrollTo(0, 0);
      }
      if (html) html.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    };

    // 1. Immediate reset
    performReset();

    // 2. Next animation frame
    const rafId = requestAnimationFrame(() => {
      performReset();
    });

    // 3. Fallback ticks to handle any dynamic / heavy component layout shifts
    const t1 = setTimeout(performReset, 50);
    const t2 = setTimeout(() => {
      performReset();
      if (hadScrollSmooth) {
        html.classList.add('scroll-smooth');
        html.style.scrollBehavior = '';
      }
    }, 150);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
      if (hadScrollSmooth && !html.classList.contains('scroll-smooth')) {
        html.classList.add('scroll-smooth');
        html.style.scrollBehavior = '';
      }
    };
  }, [pathname]);

  return null;
}
