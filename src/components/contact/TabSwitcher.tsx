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
        className="w-full max-w-2xl p-1.5 sm:p-2 rounded-2xl frosted-glass border border-blue-500/25 shadow-[0_12px_36px_-8px_rgba(7,14,29,0.85)] flex items-center gap-2 select-none relative"
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
          className={`relative min-h-[56px] px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl flex items-center gap-2.5 sm:gap-3.5 text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ice-cyan transition-colors overflow-hidden ${
            isBusiness
              ? 'text-surface-text'
              : 'text-muted-text hover:text-surface-text hover:bg-[#101E40]/60 hover:shadow-[0_0_16px_rgba(61,139,255,0.2)] border border-transparent hover:border-blue-500/30'
          }`}
          style={{
            flex: isBusiness ? (shouldReduceMotion ? 1 : CONTACT_ANIMATION.activeFlex) : CONTACT_ANIMATION.inactiveFlex,
            transition: shouldReduceMotion ? 'none' : `flex ${CONTACT_ANIMATION.tabMorphDurationMs}ms ${CONTACT_ANIMATION.cssEasing}`,
            willChange: isMorphing && !shouldReduceMotion ? 'flex-grow' : 'auto',
          }}
        >
          {/* Animated Glass Highlight Pill */}
          {isBusiness && (
            <motion.div
              layoutId={shouldReduceMotion ? undefined : 'activeTabPill'}
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#162A58]/90 via-[#13244c]/90 to-[#101E40]/90 border border-ice-cyan/60 shadow-[0_0_24px_rgba(122,209,250,0.3),inset_0_1px_1px_rgba(255,255,255,0.25)] pointer-events-none z-0"
              transition={
                shouldReduceMotion
                  ? { duration: CONTACT_ANIMATION.reducedMotionDurationSec }
                  : CONTACT_ANIMATION.pillSpring
              }
            />
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
            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 z-10 transition-colors ${
              isBusiness
                ? 'bg-blue-500/25 text-ice-cyan border border-ice-cyan/30'
                : 'bg-blue-950/40 text-muted-text'
            }`}
          >
            <Briefcase className="w-5 h-5" />
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col z-10 min-w-0 overflow-hidden">
            <span className={`font-display text-sm sm:text-base font-bold truncate transition-colors leading-snug ${
              isBusiness ? 'text-surface-text' : 'text-surface-text/75'
            }`}>
              {/* Show compact single word when inactive */}
              {isBusiness ? 'Business Enquiry' : 'Business'}
            </span>

            {/* Sub-label with 100ms entrance delay when active */}
            <AnimatePresence initial={false}>
              {isBusiness && (
                <motion.span
                  key="sublabel-business"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -2, transition: { duration: 0.1 } }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : CONTACT_ANIMATION.sublabelDelaySec,
                    duration: 0.22,
                    ease: CONTACT_ANIMATION.easingCurve,
                  }}
                  className="text-[11px] sm:text-xs text-muted-text truncate block leading-tight mt-0.5"
                >
                  For companies exploring our services
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Active indicator dot */}
          {isBusiness && (
            <span className="absolute bottom-1.5 right-3 w-1.5 h-1.5 rounded-full bg-ice-cyan animate-pulse z-10"></span>
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
          className={`relative min-h-[56px] px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl flex items-center gap-2.5 sm:gap-3.5 text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ice-cyan transition-colors overflow-hidden ${
            isCareers
              ? 'text-surface-text'
              : 'text-muted-text hover:text-surface-text hover:bg-[#101E40]/60 hover:shadow-[0_0_16px_rgba(61,139,255,0.2)] border border-transparent hover:border-blue-500/30'
          }`}
          style={{
            flex: isCareers ? (shouldReduceMotion ? 1 : CONTACT_ANIMATION.activeFlex) : CONTACT_ANIMATION.inactiveFlex,
            transition: shouldReduceMotion ? 'none' : `flex ${CONTACT_ANIMATION.tabMorphDurationMs}ms ${CONTACT_ANIMATION.cssEasing}`,
            willChange: isMorphing && !shouldReduceMotion ? 'flex-grow' : 'auto',
          }}
        >
          {/* Animated Glass Highlight Pill */}
          {isCareers && (
            <motion.div
              layoutId={shouldReduceMotion ? undefined : 'activeTabPill'}
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#162A58]/90 via-[#13244c]/90 to-[#101E40]/90 border border-ice-cyan/60 shadow-[0_0_24px_rgba(122,209,250,0.3),inset_0_1px_1px_rgba(255,255,255,0.25)] pointer-events-none z-0"
              transition={
                shouldReduceMotion
                  ? { duration: CONTACT_ANIMATION.reducedMotionDurationSec }
                  : CONTACT_ANIMATION.pillSpring
              }
            />
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
            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 z-10 transition-colors ${
              isCareers
                ? 'bg-blue-500/25 text-ice-cyan border border-ice-cyan/30'
                : 'bg-blue-950/40 text-muted-text'
            }`}
          >
            <Users2 className="w-5 h-5" />
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col z-10 min-w-0 overflow-hidden">
            <span className={`font-display text-sm sm:text-base font-bold truncate transition-colors leading-snug ${
              isCareers ? 'text-surface-text' : 'text-surface-text/75'
            }`}>
              {/* Show compact single word when inactive */}
              {isCareers ? 'Work With Us' : 'Careers'}
            </span>

            {/* Sub-label with 100ms entrance delay when active */}
            <AnimatePresence initial={false}>
              {isCareers && (
                <motion.span
                  key="sublabel-careers"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -2, transition: { duration: 0.1 } }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : CONTACT_ANIMATION.sublabelDelaySec,
                    duration: 0.22,
                    ease: CONTACT_ANIMATION.easingCurve,
                  }}
                  className="text-[11px] sm:text-xs text-muted-text truncate block leading-tight mt-0.5"
                >
                  For job seekers and freelancers
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Active indicator dot */}
          {isCareers && (
            <span className="absolute bottom-1.5 right-3 w-1.5 h-1.5 rounded-full bg-ice-cyan animate-pulse z-10"></span>
          )}
        </motion.button>
      </div>
    </div>
  );
}
