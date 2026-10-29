/**
 * ============================================================================
 * OVITA INTRO CONFIGURATION
 * Tunable values for timings, slot sizes, anchors, animation curves, and physics.
 * ============================================================================
 */
window.OVITA_CONFIG = {
  // Carousel Geometry & Timing (Section 5.4)
  carousel: {
    holdDurationMs: 2600,       // Duration each dish holds at center before gliding (2.6s)
    glideDurationSec: 0.9,      // Glide animation duration (900ms)
    glideEase: "power3.inOut",   // Easing curve for plate and text slide
    resumeDelayMs: 1500,        // Delay before auto-advance resumes after pointer leaves
    plateRotationDeg: 8,        // Subtle rotation during incoming (+8 to 0) / outgoing (0 to -8)
    
    // Slot scale & opacity multipliers (d = distance from active plate)
    slots: {
      active:   { offsetMultiplier: 0,     scale: 1.0,  opacity: 1.00, blur: 0 },
      previous: { offsetMultiplier: -0.80, scale: 0.54, opacity: 0.45, blur: 2 },
      next:     { offsetMultiplier: 0.80,  scale: 0.54, opacity: 0.30, blur: 3 },
      outerPrev:{ offsetMultiplier: -1.30, scale: 0.35, opacity: 0.00, blur: 6 },
      outerNext:{ offsetMultiplier: 1.30,  scale: 0.35, opacity: 0.00, blur: 6 }
    }
  },

  // Hero Entrance Sequence (Section 5.5)
  entrance: {
    pageFadeDurationSec: 1.2,
    plateDelaySec: 0.6,
    plateDurationSec: 0.9,
    copyDelaySec: 0.9,
    copyStaggerSec: 0.1,
    scrollCueDelaySec: 1.6
  },

  // Master Scroll Timeline & Leaves Physics (Section 6)
  scroll: {
    totalScreens: 5,             // 5 screens of scrubbed scroll (+500%)
    scrubSmoothness: 1,          // GSAP scrub lag
    snapPoints: [0, 0.24, 0.44, 0.66, 0.88, 1], // Snap cleanly to Hero & Panels 1..4
    snapDuration: { min: 0.25, max: 0.7 },
    snapDelay: 0.08,
    snapEase: "power2.inOut",
    
    // Living Leaves Sway (Section 6.2)
    leaves: {
      swayLoopDurationSec: 9,
      swayRotateDeg: 0.6,
      swayTranslatePx: 4,
      scrollParallaxYPercent: 2,
      scrollParallaxScale: 1.04,
      desktopMouseParallaxPx: 8,
      alignmentFadeStart: 0.8,   // leaves remain locked at identity until time 0.8
      alignmentFadeEnd: 1.0      // ramp sway and parallax from 0 to 1 between 0.8 and 1.0
    }
  },

  // Stage Anchor (Section 5.1)
  stage: {
    compositeWidth: 2576,
    compositeHeight: 1438,
    aspectRatio: 2576 / 1438,    // 1.7913
    cropLeftAnchor: 0.04         // 4% overflow on left, 96% on right
  }
};
