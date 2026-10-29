/**
 * Animation constants for Contact Page Tabs and Panels
 * Configurable timings, distances, and easings
 */

export const CONTACT_ANIMATION = {
  // Easing curve: smooth deceleration cubic-bezier(0.22, 1, 0.36, 1)
  easingCurve: [0.22, 1, 0.36, 1] as const,
  cssEasing: 'cubic-bezier(0.22, 1, 0.36, 1)',

  // Tab bar morph
  tabMorphDurationMs: 450,
  tabMorphDurationSec: 0.45,
  activeFlex: 1.63, // 1.63 / (1.63 + 1) ≈ 62% width
  inactiveFlex: 1,  // 1 / (1.63 + 1) ≈ 38% width
  sublabelDelayMs: 100,
  sublabelDelaySec: 0.1,
  iconPopDurationSec: 0.3,

  // Pill highlight spring physics (creates a subtle ~4px overshoot that settles)
  pillSpring: {
    type: 'spring' as const,
    stiffness: 340,
    damping: 24,
    mass: 0.85,
  },

  // Panel slide and fade
  panelDesktopDurationMs: 400,
  panelDesktopDurationSec: 0.4,
  panelMobileDurationMs: 320,
  panelMobileDurationSec: 0.32,
  slideDistanceDesktopPx: 32,
  slideDistanceMobilePx: 20,

  // Left column card stagger
  cardStaggerMs: 60,
  cardStaggerSec: 0.06,

  // Mobile gestures & scrolling
  swipeThresholdPx: 40,
  mobileBreakpointPx: 1024,
  scrollMarginTopPx: 140,

  // Reduced motion (instant swap with 150ms opacity crossfade)
  reducedMotionDurationSec: 0.15,
  reducedMotionDurationMs: 150,
} as const;

