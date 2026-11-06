'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Briefcase, Users2 } from 'lucide-react';
import { CONTACT_ANIMATION } from '@/lib/contactAnimationConstants';

export type ContactTabType = 'business' | 'careers';

interface TabSwitcherProps {
  activeTab: ContactTabType;
  onTabChange: (tab: ContactTabType) => void;
}

export function TabSwitcher({ activeTab, onTabChange }: TabSwitcherProps) {
  const businessTabRef = useRef<HTMLButtonElement>(null);
  const careersTabRef = useRef<HTMLButtonElement>(null);
  const tablistRef = useRef<HTMLDivElement>(null);

  // Live region announcement
  const [announcement, setAnnouncement] = useState('');
  const [isMorphing, setIsMorphing] = useState(false);
  const morphTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track touch gestures on tab bar only
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Check system prefers-reduced-motion
  const shouldReduceMotion = useReducedMotion();

  // Announce tab changes to screen readers after transition settles
  useEffect(() => {
    setIsMorphing(true);
    if (morphTimeoutRef.current) clearTimeout(morphTimeoutRef.current);

    morphTimeoutRef.current = setTimeout(() => {
      setIsMorphing(false);
      setAnnouncement(
        activeTab === 'business'
          ? 'Business Enquiry selected'
          : 'Work With Us selected'
      );
    }, CONTACT_ANIMATION.tabMorphDurationMs);

    return () => {
      if (morphTimeoutRef.current) clearTimeout(morphTimeoutRef.current);
    };
  }, [activeTab]);

  // Keyboard navigation: Left/Right/Up/Down/Home/End without stealing focus away from tab bar
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      onTabChange('careers');
      careersTabRef.current?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      onTabChange('business');
      businessTabRef.current?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      onTabChange('business');
      businessTabRef.current?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      onTabChange('careers');
      careersTabRef.current?.focus();
    }
  };

  // Horizontal swipe on tab bar area only (threshold: 40px)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current || e.changedTouches.length === 0) return;
    const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
    const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    // Must be predominantly horizontal and exceed threshold
    if (Math.abs(deltaX) > CONTACT_ANIMATION.swipeThresholdPx && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0 && activeTab === 'business') {
        onTabChange('careers');
      } else if (deltaX > 0 && activeTab === 'careers') {
        onTabChange('business');
      }
    }
  };

  const isBusiness = activeTab === 'business';
  const isCareers = activeTab === 'careers';

  return (
    <div className="w-full flex justify-center sticky top-20 z-30 bg-[#050B1A]/90 backdrop-blur-xl border-b border-blue-500/15 py-3 sm:py-0 sm:static sm:bg-transparent sm:backdrop-blur-none sm:border-0 transition-all">
      {/* Screen Reader Announcement Live Region */}
      <div className="sr-only" role="status" aria-live="polite">
        {announcement}
      </div>

      <div
        ref={tablistRef}
        role="tablist"
        aria-label="Contact Enquiry Type"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="w-full max-w-2xl p-1.5 sm:p-2 rounded-2xl bg-[#071126]/85 backdrop-blur-2xl border border-blue-500/30 shadow-[0_16px_40px_-10px_rgba(3,8,20,0.9),0_0_25px_rgba(61,139,255,0.15)] flex items-center gap-2 sm:gap-2.5 select-none relative"
      >
        {/* =====================================================================
            TAB 1: BUSINESS ENQUIRY
            ===================================================================== */}
        <motion.button
          ref={businessTabRef}
          type="button"
          role="tab"
          id="tab-business"
          aria-selected={isBusiness}
          aria-controls="panel-business"
          tabIndex={isBusiness ? 0 : -1}
          onClick={() => onTabChange('business')}
          onKeyDown={handleKeyDown}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          className={`group relative flex-1 min-h-[58px] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl flex items-center gap-2.5 sm:gap-3.5 text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ice-cyan transition-all overflow-hidden ${
            isBusiness
              ? 'text-surface-text'
              : 'text-muted-text hover:text-surface-text hover:bg-[#101E40]/60 hover:shadow-[0_0_16px_rgba(61,139,255,0.2)] border border-transparent hover:border-blue-500/30'
          }`}
        >
          {/* Animated Glass Highlight Pill */}
          {isBusiness && (
            <motion.div
              layoutId={shouldReduceMotion ? undefined : 'activeTabPill'}
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#14264e] via-[#1a3366] to-[#122244] border border-cyan-400/50 shadow-[0_0_28px_rgba(61,139,255,0.32),inset_0_1px_1px_rgba(255,255,255,0.25)] pointer-events-none z-0"
              transition={
                shouldReduceMotion
                  ? { duration: CONTACT_ANIMATION.reducedMotionDurationSec }
                  : CONTACT_ANIMATION.pillSpring
              }
            >
              {/* Specular Edge Refraction */}
              <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-90" />
            </motion.div>
          )}

          {/* Icon with scale pop on activation */}
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : isBusiness
                ? { scale: [1, 1.1, 1] }
                : { scale: 1 }
            }
            transition={{ duration: CONTACT_ANIMATION.iconPopDurationSec, ease: 'easeInOut' }}
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 z-10 transition-all ${
              isBusiness
                ? 'bg-gradient-to-br from-blue-500/30 to-cyan-500/20 text-ice-cyan border border-cyan-400/40 shadow-[0_0_14px_rgba(127,214,255,0.3)]'
                : 'bg-[#0d1c3a]/70 text-muted-text border border-blue-500/20 group-hover:text-surface-text group-hover:border-blue-500/35 group-hover:bg-[#13254c]'
            }`}
          >
            <Briefcase className="w-5 h-5" />
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col z-10 min-w-0 flex-1 overflow-hidden">
            <span className={`font-display text-sm sm:text-base font-bold truncate transition-colors leading-snug ${
              isBusiness ? 'text-white' : 'text-surface-text/75 group-hover:text-white'
            }`}>
              Business Enquiry
            </span>

            <span className={`text-[11px] sm:text-xs truncate block leading-tight mt-0.5 transition-colors ${
              isBusiness ? 'text-cyan-200/90 font-medium' : 'text-muted-text group-hover:text-surface-text/70'
            }`}>
              For companies exploring our services
            </span>
          </div>

          {/* Active status pill */}
          {isBusiness && (
            <div className="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-400/15 border border-cyan-400/35 text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-semibold shrink-0 z-10 shadow-[0_0_10px_rgba(127,214,255,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Active</span>
            </div>
          )}
        </motion.button>

        {/* =====================================================================
            TAB 2: WORK WITH US (CAREERS)
            ===================================================================== */}
        <motion.button
          ref={careersTabRef}
          type="button"
          role="tab"
          id="tab-careers"
          aria-selected={isCareers}
          aria-controls="panel-careers"
          tabIndex={isCareers ? 0 : -1}
          onClick={() => onTabChange('careers')}
          onKeyDown={handleKeyDown}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          className={`group relative flex-1 min-h-[58px] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl flex items-center gap-2.5 sm:gap-3.5 text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ice-cyan transition-all overflow-hidden ${
            isCareers
              ? 'text-surface-text'
              : 'text-muted-text hover:text-surface-text hover:bg-[#101E40]/60 hover:shadow-[0_0_16px_rgba(61,139,255,0.2)] border border-transparent hover:border-blue-500/30'
          }`}
        >
          {/* Animated Glass Highlight Pill */}
          {isCareers && (
            <motion.div
              layoutId={shouldReduceMotion ? undefined : 'activeTabPill'}
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#14264e] via-[#1a3366] to-[#122244] border border-cyan-400/50 shadow-[0_0_28px_rgba(61,139,255,0.32),inset_0_1px_1px_rgba(255,255,255,0.25)] pointer-events-none z-0"
              transition={
                shouldReduceMotion
                  ? { duration: CONTACT_ANIMATION.reducedMotionDurationSec }
                  : CONTACT_ANIMATION.pillSpring
              }
            >
              {/* Specular Edge Refraction */}
              <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-90" />
            </motion.div>
          )}

          {/* Icon with scale pop on activation */}
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : isCareers
                ? { scale: [1, 1.1, 1] }
                : { scale: 1 }
            }
            transition={{ duration: CONTACT_ANIMATION.iconPopDurationSec, ease: 'easeInOut' }}
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 z-10 transition-all ${
              isCareers
                ? 'bg-gradient-to-br from-blue-500/30 to-cyan-500/20 text-ice-cyan border border-cyan-400/40 shadow-[0_0_14px_rgba(127,214,255,0.3)]'
                : 'bg-[#0d1c3a]/70 text-muted-text border border-blue-500/20 group-hover:text-surface-text group-hover:border-blue-500/35 group-hover:bg-[#13254c]'
            }`}
          >
            <Users2 className="w-5 h-5" />
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col z-10 min-w-0 flex-1 overflow-hidden">
            <span className={`font-display text-sm sm:text-base font-bold truncate transition-colors leading-snug ${
              isCareers ? 'text-white' : 'text-surface-text/75 group-hover:text-white'
            }`}>
              Careers &amp; Talent
            </span>

            <span className={`text-[11px] sm:text-xs truncate block leading-tight mt-0.5 transition-colors ${
              isCareers ? 'text-cyan-200/90 font-medium' : 'text-muted-text group-hover:text-surface-text/70'
            }`}>
              For job seekers and freelancers
            </span>
          </div>

          {/* Active status pill */}
          {isCareers && (
            <div className="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-400/15 border border-cyan-400/35 text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-semibold shrink-0 z-10 shadow-[0_0_10px_rgba(127,214,255,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Active</span>
            </div>
          )}
        </motion.button>
      </div>
    </div>
  );
}
