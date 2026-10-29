'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, ListFilter, Bookmark } from 'lucide-react';
import { PrivacySection } from '@/content/privacyPolicyData';

interface TableOfContentsProps {
  sections: PrivacySection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || 'who-we-are');
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  // Set up scroll-spy using IntersectionObserver
  useEffect(() => {
    const handleObserver: IntersectionObserverCallback = (entries) => {
      // Find the first intersecting entry from top
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Pick the entry closest to top
        visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActiveId(visibleEntries[0].target.id);
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '-80px 0px -60% 0px',
      threshold: [0, 0.2, 0.5],
    });

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleScrollTo = (id: string) => {
    setMobileOpen(false);
    setActiveId(id);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (typeof window !== 'undefined') {
        window.history.replaceState({}, '', `#${id}`);
      }
    }
  };

  const activeSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <>
      {/* =========================================================================
          MOBILE COLLAPSIBLE PINNED BAR (Sticky below 80px navbar)
          ========================================================================= */}
      <div className="lg:hidden print:hidden sticky top-20 z-30 w-full bg-[#050B1A]/95 backdrop-blur-xl border-b border-blue-500/20">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-toc-list"
          className="w-full h-12 min-h-[48px] px-4 flex items-center justify-between text-xs font-mono text-ice-cyan cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ice-cyan"
        >
          <div className="flex items-center gap-2 truncate max-w-[85%]">
            <ListFilter className="w-4 h-4 shrink-0 text-diamond-blue" />
            <span className="text-muted-text">On this page:</span>
            <span className="text-surface-text font-bold truncate">
              {activeSection.number}. {activeSection.title}
            </span>
          </div>
          <ChevronDown
            className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
              mobileOpen ? 'rotate-180 text-ice-cyan' : 'text-muted-text'
            }`}
          />
        </button>

        {/* Mobile Dropdown Drawer */}
        {mobileOpen && (
          <nav
            id="mobile-toc-list"
            aria-label="On this page mobile navigation"
            className="w-full max-h-[60dvh] overflow-y-auto bg-[#070E1D]/98 border-t border-blue-500/15 p-3 flex flex-col gap-1 shadow-2xl"
          >
            {sections.map((sec) => {
              const isActive = activeId === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => handleScrollTo(sec.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-mono flex items-baseline gap-2 transition-colors cursor-pointer min-h-[44px] ${
                    isActive
                      ? 'bg-blue-500/20 text-ice-cyan font-bold border-l-2 border-ice-cyan'
                      : 'text-muted-text hover:text-surface-text hover:bg-blue-500/10'
                  }`}
                >
                  <span className="opacity-75">{sec.number}.</span>
                  <span className="truncate">{sec.title}</span>
                </button>
              );
            })}
          </nav>
        )}
      </div>

      {/* =========================================================================
          DESKTOP STICKY SIDEBAR (280px, sticky under navbar)
          ========================================================================= */}
      <aside className="hidden lg:block print:hidden w-[280px] shrink-0 sticky top-28 self-start">
        <nav
          aria-label="On this page"
          className="p-5 rounded-2xl frosted-glass border border-blue-500/20 bg-[#0B1630]/70 flex flex-col gap-3 shadow-lg max-h-[calc(100vh-140px)] overflow-y-auto"
        >
          <div className="flex items-center gap-2 pb-2 border-b border-blue-500/20 font-mono text-[11px] text-ice-cyan uppercase tracking-wider font-bold">
            <Bookmark className="w-3.5 h-3.5" />
            <span>On this page</span>
          </div>

          <ul className="flex flex-col gap-0.5 text-xs">
            {sections.map((sec) => {
              const isActive = activeId === sec.id;
              return (
                <li key={sec.id}>
                  <button
                    type="button"
                    onClick={() => handleScrollTo(sec.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`w-full text-left px-3 py-2 rounded-lg font-mono flex items-baseline gap-2 transition-all cursor-pointer ${
                      isActive
                        ? 'bg-blue-500/20 text-ice-cyan font-bold shadow-[0_0_12px_rgba(61,139,255,0.25)] border-l-2 border-ice-cyan translate-x-1'
                        : 'text-muted-text hover:text-surface-text hover:bg-blue-500/10'
                    }`}
                  >
                    <span className="text-[11px] opacity-75">{sec.number}.</span>
                    <span className="leading-snug truncate">{sec.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
