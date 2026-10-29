'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { TabSwitcher, ContactTabType } from './TabSwitcher';
import { BusinessInfoCard } from './BusinessInfoCard';
import { CareersInfoCard } from './CareersInfoCard';
import { BusinessEnquiryForm } from './BusinessEnquiryForm';
import { WorkWithUsForm } from './WorkWithUsForm';
import { SuccessCard } from './SuccessCard';
import { BusinessEnquiryValues, CareersFormValues } from '@/lib/contactValidation';
import { CONTACT_ANIMATION } from '@/lib/contactAnimationConstants';

interface ContactContentProps {
  initialTab?: ContactTabType;
}

export function ContactContent({ initialTab = 'business' }: ContactContentProps) {
  // Active tab state initialized directly from server prop
  const [activeTab, setActiveTab] = useState<ContactTabType>(initialTab);
  // Direction: 1 for Business -> Careers (leftward), -1 for Careers -> Business (rightward)
  const [direction, setDirection] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Preserve form data in memory across tab switches
  const [businessData, setBusinessData] = useState<Partial<BusinessEnquiryValues>>({});
  const [careersData, setCareersData] = useState<Partial<CareersFormValues>>({});

  // Submission success states
  const [businessSuccess, setBusinessSuccess] = useState<{
    referenceId: string;
    firstName: string;
  } | null>(null);

  const [careersSuccess, setCareersSuccess] = useState<{
    referenceId: string;
    firstName: string;
  } | null>(null);

  // Refs for container height measurement and auto-scroll
  const formSectionRef = useRef<HTMLDivElement>(null);
  const businessPanelRef = useRef<HTMLDivElement>(null);
  const careersPanelRef = useRef<HTMLDivElement>(null);
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Container height for smooth ResizeObserver height morphing
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined);

  // Check system prefers-reduced-motion
  const shouldReduceMotion = useReducedMotion();

  // Screen width detection for responsive distances and mobile optimizations
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < CONTACT_ANIMATION.mobileBreakpointPx);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sync tab with URL search params and hash on client mount / popstate
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const syncFromLocation = () => {
      const url = new URL(window.location.href);
      const typeParam = url.searchParams.get('type');
      const hash = url.hash.replace('#', '');

      if (typeParam === 'careers' || hash === 'careers') {
        setDirection(1);
        setActiveTab('careers');
      } else if (typeParam === 'business' || hash === 'business') {
        setDirection(-1);
        setActiveTab('business');
      }
    };

    syncFromLocation();
    window.addEventListener('popstate', syncFromLocation);
    window.addEventListener('hashchange', syncFromLocation);

    return () => {
      window.removeEventListener('popstate', syncFromLocation);
      window.removeEventListener('hashchange', syncFromLocation);
    };
  }, []);

  // Dynamic ResizeObserver to smoothly animate container height between tab forms & stepper steps
  useEffect(() => {
    const targetElement = activeTab === 'business' ? businessPanelRef.current : careersPanelRef.current;
    if (!targetElement) return;

    const measureHeight = () => {
      const height = targetElement.offsetHeight;
      if (height > 0) {
        setContainerHeight(height);
      }
    };

    measureHeight();

    const resizeObserver = new ResizeObserver(() => {
      measureHeight();
    });

    resizeObserver.observe(targetElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeTab, businessSuccess, careersSuccess]);

  // Tab switch handler: updates URL without page reload and preserves memory
  const handleTabChange = (newTab: ContactTabType) => {
    if (newTab === activeTab) return;

    const newDirection = newTab === 'careers' ? 1 : -1;
    setDirection(newDirection);
    setActiveTab(newTab);
    setIsAnimating(true);

    if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
    animationTimerRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, CONTACT_ANIMATION.panelDesktopDurationMs);

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('type', newTab);
      url.hash = newTab;
      window.history.replaceState({}, '', url.toString());

      // On mobile only: smoothly scroll so top of active form lands cleanly below sticky tab bar
      if (isMobile && window.scrollY > 80 && formSectionRef.current) {
        setTimeout(() => {
          formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      }
    }
  };

  const isBusiness = activeTab === 'business';
  const isCareers = activeTab === 'careers';

  const slideDistance = isMobile
    ? CONTACT_ANIMATION.slideDistanceMobilePx
    : CONTACT_ANIMATION.slideDistanceDesktopPx;

  const panelDuration = shouldReduceMotion
    ? CONTACT_ANIMATION.reducedMotionDurationSec
    : (isMobile ? CONTACT_ANIMATION.panelMobileDurationSec : CONTACT_ANIMATION.panelDesktopDurationSec);

  return (
    <div 
      id="contactus-page" 
      className="radial-bg min-h-screen relative antialiased selection:bg-diamond-blue selection:text-white overflow-x-hidden w-full text-surface-text"
      style={{
        backgroundColor: '#050B1A',
        color: '#E1E8F8',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Background Ambient Glow Accents */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[15%] left-[25%] w-[700px] h-[700px] rounded-full bg-[#3D8BFF]/10 blur-[150px]"></div>
        <div className="absolute top-[35%] -right-[10%] w-[650px] h-[650px] rounded-full bg-[#7FD6FF]/12 blur-[160px]"></div>
        <div className="absolute bottom-[10%] -left-[5%] w-[600px] h-[600px] rounded-full bg-[#3D8BFF]/10 blur-[140px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(172,199,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(172,199,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="w-full pt-2 sm:pt-4 max-w-[1360px] mx-auto px-6 lg:px-12 flex flex-col gap-7 lg:gap-10 pb-24">
        
        {/* =========================================================================
            1. COMPACT HERO
            ========================================================================= */}
        <section className="w-full flex flex-col items-center text-center gap-3.5 max-w-3xl mx-auto pt-1 sm:pt-2">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-surface-text tracking-tight leading-tight">
            Let&apos;s talk.
          </h1>

          <p className="text-muted-text text-base sm:text-lg max-w-2xl leading-relaxed">
            Whether you need a technology partner or want to join our team, you&apos;re in the right place.
          </p>
        </section>

        {/* =========================================================================
            2. SEGMENTED TWO-TAB SWITCHER (Sticky on mobile below 80px navbar)
            ========================================================================= */}
        <TabSwitcher activeTab={activeTab} onTabChange={handleTabChange} />

        {/* =========================================================================
            3. TWO-COLUMN LAYOUT UNDER THE TABS
            Left: Sticky info cards | Right: Active Form
            Mobile: info column sits below the form
            ========================================================================= */}
        <section 
          ref={formSectionRef}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start scroll-mt-[140px]"
        >
          {/* Left Column (Sticky on desktop, below form on mobile) */}
          <div className="lg:col-span-4 order-2 lg:order-1 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              {activeTab === 'business' ? (
                <motion.div
                  key="business-info"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, x: -16 }}
                  transition={{
                    duration: shouldReduceMotion ? CONTACT_ANIMATION.reducedMotionDurationSec : 0.25,
                    ease: CONTACT_ANIMATION.easingCurve,
                  }}
                >
                  <BusinessInfoCard isMobile={isMobile} />
                </motion.div>
              ) : (
                <motion.div
                  key="careers-info"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, x: 16 }}
                  transition={{
                    duration: shouldReduceMotion ? CONTACT_ANIMATION.reducedMotionDurationSec : 0.25,
                    ease: CONTACT_ANIMATION.easingCurve,
                  }}
                >
                  <CareersInfoCard isMobile={isMobile} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Direction-aware Form Panels with Height Animation */}
          <div className="lg:col-span-8 order-1 lg:order-2 w-full">
            {/* Smooth container height animated wrapper with overflow-x hidden */}
            <motion.div
              animate={{
                height: containerHeight && containerHeight > 0 ? containerHeight : 'auto',
              }}
              transition={{
                duration: panelDuration,
                ease: CONTACT_ANIMATION.easingCurve,
              }}
              style={{
                willChange: isAnimating && !shouldReduceMotion ? 'height' : 'auto',
              }}
              className="w-full relative overflow-x-hidden p-1 -m-1"
            >
              {/* Single-cell CSS Grid Stack: Both forms stay continuously mounted in the DOM */}
              <div className="grid grid-cols-1 grid-rows-1 relative w-full items-start">
                
                {/* =============================================================
                    BUSINESS ENQUIRY FORM PANEL
                    ============================================================= */}
                <motion.div
                  ref={businessPanelRef}
                  id="panel-business"
                  role="tabpanel"
                  aria-labelledby="tab-business"
                  aria-hidden={!isBusiness}
                  inert={!isBusiness ? true : undefined}
                  initial={false}
                  animate={{
                    opacity: isBusiness ? 1 : 0,
                    x: isBusiness ? 0 : (shouldReduceMotion ? 0 : -slideDistance * direction),
                    pointerEvents: isBusiness ? 'auto' : 'none',
                    transitionEnd: {
                      visibility: isBusiness ? 'visible' : 'hidden',
                    },
                  }}
                  transition={{
                    duration: panelDuration,
                    ease: CONTACT_ANIMATION.easingCurve,
                  }}
                  style={{
                    visibility: isBusiness ? 'visible' : (isAnimating ? 'visible' : 'hidden'),
                    willChange: isAnimating && !shouldReduceMotion ? 'transform, opacity' : 'auto',
                  }}
                  className="col-start-1 row-start-1 w-full"
                >
                  {businessSuccess ? (
                    <SuccessCard
                      type="business"
                      firstName={businessSuccess.firstName}
                      referenceId={businessSuccess.referenceId}
                      onReset={() => {
                        setBusinessSuccess(null);
                        setBusinessData({});
                      }}
                    />
                  ) : (
                    <BusinessEnquiryForm
                      savedState={businessData}
                      onStateChange={setBusinessData}
                      onSuccess={(refId, firstName) => {
                        setBusinessSuccess({ referenceId: refId, firstName });
                      }}
                    />
                  )}
                </motion.div>

                {/* =============================================================
                    WORK WITH US (CAREERS) FORM PANEL
                    ============================================================= */}
                <motion.div
                  ref={careersPanelRef}
                  id="panel-careers"
                  role="tabpanel"
                  aria-labelledby="tab-careers"
                  aria-hidden={!isCareers}
                  inert={!isCareers ? true : undefined}
                  initial={false}
                  animate={{
                    opacity: isCareers ? 1 : 0,
                    x: isCareers ? 0 : (shouldReduceMotion ? 0 : slideDistance * direction),
                    pointerEvents: isCareers ? 'auto' : 'none',
                    transitionEnd: {
                      visibility: isCareers ? 'visible' : 'hidden',
                    },
                  }}
                  transition={{
                    duration: panelDuration,
                    ease: CONTACT_ANIMATION.easingCurve,
                  }}
                  style={{
                    visibility: isCareers ? 'visible' : (isAnimating ? 'visible' : 'hidden'),
                    willChange: isAnimating && !shouldReduceMotion ? 'transform, opacity' : 'auto',
                  }}
                  className="col-start-1 row-start-1 w-full"
                >
                  {careersSuccess ? (
                    <SuccessCard
                      type="careers"
                      firstName={careersSuccess.firstName}
                      referenceId={careersSuccess.referenceId}
                      onReset={() => {
                        setCareersSuccess(null);
                        setCareersData({});
                      }}
                    />
                  ) : (
                    <WorkWithUsForm
                      savedState={careersData}
                      onStateChange={setCareersData}
                      onSuccess={(refId, firstName) => {
                        setCareersSuccess({ referenceId: refId, firstName });
                      }}
                    />
                  )}
                </motion.div>

              </div>
            </motion.div>
          </div>

        </section>

      </div>
    </div>
  );
}
