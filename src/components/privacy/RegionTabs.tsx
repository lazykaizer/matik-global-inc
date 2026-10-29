'use client';

import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Globe, MapPin, Landmark } from 'lucide-react';
import { RegionTabData } from '@/content/privacyPolicyData';
import { renderWithPlaceholders } from './Placeholder';

interface RegionTabsProps {
  regions: RegionTabData[];
}

export function RegionTabs({ regions }: RegionTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(regions[0]?.id || 'eea-uk');
  const shouldReduceMotion = useReducedMotion();
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const icons: Record<string, React.ReactNode> = {
    'eea-uk': <Globe className="w-4 h-4" />,
    'us-states': <MapPin className="w-4 h-4" />,
    'india': <Landmark className="w-4 h-4" />,
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex = currentIndex;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % regions.length;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + regions.length) % regions.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = regions.length - 1;
    }

    if (nextIndex !== currentIndex) {
      const nextId = regions[nextIndex].id;
      setActiveTab(nextId);
      tabRefs.current[nextId]?.focus();
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 my-4">
      {/* Tab bar (Hidden in Print) */}
      <div
        role="tablist"
        aria-label="Jurisdiction Specific Privacy Disclosures"
        className="print:hidden w-full p-1.5 rounded-2xl frosted-glass border border-blue-500/25 bg-[#070E1D]/80 flex flex-wrap sm:flex-nowrap items-center gap-1.5 relative select-none"
      >
        {regions.map((region, index) => {
          const isActive = activeTab === region.id;
          return (
            <button
              key={region.id}
              ref={(el) => { tabRefs.current[region.id] = el; }}
              type="button"
              role="tab"
              id={`tab-${region.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${region.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(region.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`relative flex-1 min-h-[44px] px-3 sm:px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ice-cyan cursor-pointer ${
                isActive
                  ? 'text-surface-text font-bold'
                  : 'text-muted-text hover:text-surface-text hover:bg-blue-500/10'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId={shouldReduceMotion ? undefined : 'regionActivePill'}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#162A58]/90 via-[#13244c]/90 to-[#101E40]/90 border border-ice-cyan/60 shadow-[0_0_20px_rgba(122,209,250,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)] pointer-events-none z-0"
                  transition={{
                    type: 'spring',
                    stiffness: 340,
                    damping: 24,
                    mass: 0.85,
                  }}
                />
              )}
              <span className="relative z-10 text-ice-cyan">{icons[region.id]}</span>
              <span className="relative z-10 text-center leading-tight">{region.label}</span>
            </button>
          );
        })}
      </div>

      {/* Panels container (All panels in DOM for SEO and Print) */}
      <div className="w-full relative">
        {regions.map((region) => {
          const isActive = activeTab === region.id;
          return (
            <div
              key={region.id}
              id={`panel-${region.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${region.id}`}
              aria-hidden={!isActive}
              className={`p-5 sm:p-6 rounded-2xl frosted-glass border border-blue-500/20 bg-[#0B1630]/60 transition-opacity duration-200 print:!block print:!opacity-100 print:mb-4 print:border print:border-gray-300 print:p-4 ${
                isActive ? 'block opacity-100' : 'hidden opacity-0 print:!block'
              }`}
            >
              {/* Region Label visible only in print mode */}
              <div className="hidden print:block font-bold text-sm text-black mb-2 border-b border-gray-300 pb-1">
                Jurisdiction: {region.label}
              </div>
              <p className="text-[16px] sm:text-[17px] text-surface-text/90 leading-[1.8] print:text-black">
                {renderWithPlaceholders(region.content)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
