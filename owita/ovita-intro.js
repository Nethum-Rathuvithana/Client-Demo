/**
 * ============================================================================
 * OVITA INTRO — LANDING HERO, LUXURY SCROLL STORY & ENGINE
 * Uses Lenis for smooth scrolling, GSAP with ScrollTrigger for pinned master timeline,
 * and high-performance transform/opacity/clip-path animations.
 * ============================================================================
 */

(function () {
  "use strict";

  const CONTENT = window.OVITA_CONTENT || {};
  const CONFIG = window.OVITA_CONFIG || {};

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // State
  let activeDishIndex = 0;
  let autoplayTimer = null;
  let isAutoplayPaused = false;
  let isUserInteracting = false;
  let lenisInstance = null;
  let masterTimeline = null;
  let leavesAmount = 0;

  // DOM Elements
  const introContainer = document.getElementById("ovita-intro");
  const platesTrack = document.getElementById("carouselPlatesTrack");
  const dishNameEl = document.getElementById("carouselDishName");
  const dishDescEl = document.getElementById("carouselDishDesc");
  const pagerDotsContainer = document.getElementById("carouselPagerDots");
  const pausePlayBtn = document.getElementById("carouselPauseBtn");
  const navBrand = document.getElementById("ovitaNavBrand");
  const leavesLayer = document.getElementById("leavesStage");
  const cursorGlow = document.getElementById("ovitaCursorGlow");

  const dishes = CONTENT.dishes || [];
  const N = dishes.length;

  // ==========================================================================
  // 1. CAROUSEL ENGINE (SECTION 5.4)
  // ==========================================================================
  const platesElements = [];

  function initCarouselDOM() {
    if (!platesTrack) return;
    platesTrack.innerHTML = "";
    if (pagerDotsContainer) pagerDotsContainer.innerHTML = "";

    dishes.forEach((dish, idx) => {
      // Plate element
      const plate = document.createElement("div");
      plate.className = "carousel-plate-item";
      plate.setAttribute("role", "group");
      plate.setAttribute("aria-roledescription", "slide");
      plate.setAttribute("aria-label", `${idx + 1} of ${N}: ${dish.name}`);
      plate.dataset.index = idx;

      const img = document.createElement("img");
      img.src = dish.image;
      img.alt = dish.alt || dish.name;
      img.loading = idx < 3 ? "eager" : "lazy";
      img.decoding = "async";

      plate.appendChild(img);
      platesTrack.appendChild(plate);
      platesElements.push(plate);

      plate.addEventListener("click", () => {
        if (idx !== activeDishIndex) {
          goToDish(idx);
        }
      });

      // Pager dot
      if (pagerDotsContainer) {
        const dot = document.createElement("button");
        dot.className = `carousel-dot ${idx === 0 ? "active" : ""}`;
        dot.setAttribute("aria-label", `Go to dish ${idx + 1}: ${dish.name}`);
        dot.addEventListener("click", () => goToDish(idx));
        pagerDotsContainer.appendChild(dot);
      }
    });

    updateCarouselSlots(false);
    updateDishDetails(activeDishIndex, false);
    setupCarouselInteractions();
  }

  function getSignedDistance(index, activeIdx) {
    return ((index - activeIdx + N + N / 2) % N) - N / 2;
  }

  function updateCarouselSlots(animate = true) {
    const stageWidth = platesTrack.offsetWidth || 400;
    const D = stageWidth * 0.52; // Active diameter
    const slots = CONFIG.carousel?.slots || {};
    const duration = animate ? (CONFIG.carousel?.glideDurationSec || 0.9) : 0;
    const ease = CONFIG.carousel?.glideEase || "power3.inOut";
    const rotDeg = CONFIG.carousel?.plateRotationDeg || 8;

    platesElements.forEach((el, i) => {
      const d = getSignedDistance(i, activeDishIndex);
      let targetX = 0;
      let targetScale = 0.35;
      let targetOpacity = 0;
      let targetBlur = 6;
      let zIndex = 0;
      let targetRot = 0;

      if (Math.abs(d) < 0.1) {
        // Active (0)
        targetX = 0;
        targetScale = slots.active?.scale || 1.0;
        targetOpacity = slots.active?.opacity || 1.0;
        targetBlur = slots.active?.blur || 0;
        zIndex = 3;
        targetRot = 0;
      } else if (d > 0 && d <= 1.2) {
        // Next (+1)
        targetX = D * (slots.next?.offsetMultiplier || 0.80);
        targetScale = slots.next?.scale || 0.54;
        targetOpacity = slots.next?.opacity || 0.30;
        targetBlur = slots.next?.blur || 3;
        zIndex = 2;
        targetRot = -rotDeg;
      } else if (d < 0 && d >= -1.2) {
        // Previous (-1)
        targetX = D * (slots.previous?.offsetMultiplier || -0.80);
        targetScale = slots.previous?.scale || 0.54;
        targetOpacity = slots.previous?.opacity || 0.45;
        targetBlur = slots.previous?.blur || 2;
        zIndex = 2;
        targetRot = rotDeg;
      } else if (d > 1.2 && d <= 2.2) {
        // Outer Next (+2)
        targetX = D * (slots.outerNext?.offsetMultiplier || 1.30);
        targetScale = slots.outerNext?.scale || 0.35;
        targetOpacity = 0;
        targetBlur = 6;
        zIndex = 1;
        targetRot = -rotDeg * 1.5;
      } else if (d < -1.2 && d >= -2.2) {
        // Outer Prev (-2)
        targetX = D * (slots.outerPrev?.offsetMultiplier || -1.30);
        targetScale = slots.outerPrev?.scale || 0.35;
        targetOpacity = 0;
        targetBlur = 6;
        zIndex = 1;
        targetRot = rotDeg * 1.5;
      } else {
        targetX = d > 0 ? D * 1.6 : -D * 1.6;
        targetScale = 0.2;
        targetOpacity = 0;
        targetBlur = 8;
        zIndex = 0;
      }

      el.style.zIndex = zIndex;

      if (animate && window.gsap && !prefersReducedMotion) {
        gsap.to(el, {
          x: targetX,
          scale: targetScale,
          opacity: targetOpacity,
          rotation: targetRot,
          filter: `blur(${targetBlur}px)`,
          duration: duration,
          ease: ease,
          overwrite: "auto"
        });
      } else {
        el.style.transform = `translateX(${targetX}px) scale(${targetScale}) rotate(${targetRot}deg)`;
        el.style.opacity = targetOpacity;
        el.style.filter = `blur(${targetBlur}px)`;
      }
    });

    // Update dots
    if (pagerDotsContainer) {
      const dots = pagerDotsContainer.querySelectorAll(".carousel-dot");
      dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === activeDishIndex);
      });
    }
  }

  function updateDishDetails(newIdx, animate = true) {
    const dish = dishes[newIdx];
    if (!dish) return;

    if (animate && window.gsap && !prefersReducedMotion) {
      // Outgoing old name
      gsap.to(dishNameEl, {
        y: -10,
        opacity: 0,
        filter: "blur(4px)",
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          dishNameEl.textContent = dish.name;
          gsap.fromTo(
            dishNameEl,
            { y: 10, opacity: 0, filter: "blur(3px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.6, ease: "power3.out" }
          );
        }
      });

      // Outgoing old desc
      gsap.to(dishDescEl, {
        y: -6,
        opacity: 0,
        duration: 0.25,
        delay: 0.08,
        ease: "power2.in",
        onComplete: () => {
          dishDescEl.textContent = dish.description;
          gsap.fromTo(
            dishDescEl,
            { y: 8, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, delay: 0.08, ease: "power2.out" }
          );
        }
      });
    } else {
      dishNameEl.textContent = dish.name;
      dishDescEl.textContent = dish.description;
      dishNameEl.style.opacity = 1;
      dishDescEl.style.opacity = 1;
    }

    // Announce to screen reader
    const liveRegion = document.getElementById("carouselAriaLive");
    if (liveRegion && isUserInteracting) {
      liveRegion.textContent = `Selected dish: ${dish.name}. ${dish.description}`;
    }
  }

  function goToDish(index, fromUser = true) {
    if (index === activeDishIndex) return;
    if (fromUser) isUserInteracting = true;
    activeDishIndex = (index + N) % N;
    updateCarouselSlots(true);
    updateDishDetails(activeDishIndex, true);
    resetAutoplayTimer();
  }

  function nextDish() {
    goToDish(activeDishIndex + 1, false);
  }

  function prevDish() {
    goToDish(activeDishIndex - 1, false);
  }

  function startAutoplay() {
    if (isAutoplayPaused || prefersReducedMotion) return;
    stopAutoplay();
    const hold = CONFIG.carousel?.holdDurationMs || 2600;
    const glide = (CONFIG.carousel?.glideDurationSec || 0.9) * 1000;
    autoplayTimer = setTimeout(() => {
      nextDish();
      startAutoplay();
    }, hold + glide);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearTimeout(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplayTimer() {
    stopAutoplay();
    if (!isAutoplayPaused && !prefersReducedMotion) {
      const delay = isUserInteracting
        ? (CONFIG.carousel?.resumeDelayMs || 1500)
        : (CONFIG.carousel?.holdDurationMs || 2600);
      autoplayTimer = setTimeout(() => {
        isUserInteracting = false;
        nextDish();
        startAutoplay();
      }, delay);
    }
  }

  function toggleAutoplay() {
    isAutoplayPaused = !isAutoplayPaused;
    if (isAutoplayPaused) {
      stopAutoplay();
      pausePlayBtn.setAttribute("aria-label", CONTENT.hero?.playLabel || "Resume carousel autoplay");
      pausePlayBtn.innerHTML = '<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
    } else {
      pausePlayBtn.setAttribute("aria-label", CONTENT.hero?.pauseLabel || "Pause carousel autoplay");
      pausePlayBtn.innerHTML = '<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
      startAutoplay();
    }
  }

  function setupCarouselInteractions() {
    const container = document.querySelector(".hero-carousel-container");
    if (!container) return;

    // Hover pause
    container.addEventListener("mouseenter", () => {
      isUserInteracting = true;
      stopAutoplay();
    });
    container.addEventListener("mouseleave", () => {
      resetAutoplayTimer();
    });

    // Touch / Drag swipe
    let startX = 0;
    let isDragging = false;

    platesTrack.addEventListener("pointerdown", (e) => {
      startX = e.clientX;
      isDragging = true;
      isUserInteracting = true;
      stopAutoplay();
    });

    window.addEventListener("pointerup", (e) => {
      if (!isDragging) return;
      isDragging = false;
      const diffX = e.clientX - startX;
      if (Math.abs(diffX) > 40) {
        if (diffX < 0) nextDish();
        else prevDish();
      }
      resetAutoplayTimer();
    });

    // Keyboard navigation
    platesTrack.setAttribute("tabindex", "0");
    platesTrack.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        nextDish();
      } else if (e.key === "ArrowLeft") {
        prevDish();
      }
    });

    if (pausePlayBtn) {
      pausePlayBtn.addEventListener("click", toggleAutoplay);
    }

    // Tab visibility pause
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopAutoplay();
      else resetAutoplayTimer();
    });
  }

  // ==========================================================================
  // 2. HERO ENTRANCE SEQUENCE (SECTION 5.5)
  // ==========================================================================
  function runHeroEntrance() {
    if (prefersReducedMotion || !window.gsap) {
      startAutoplay();
      return;
    }

    const entranceTl = gsap.timeline({
      onComplete: () => {
        startAutoplay();
      }
    });

    // 1. Page & Leaves fade in from black (1.2s)
    entranceTl.fromTo(
      ["#ovita-intro", ".art-stage", ".leaves-stage"],
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.out" },
      0
    );

    // 2. 0.6s: Active plate scales 0.85 -> 1 & fades in (0.9s); others follow 0.2s later
    entranceTl.fromTo(
      ".carousel-plate-item",
      { scale: 0.82, opacity: 0 },
      {
        scale: (i) => (i === activeDishIndex ? 1 : 0.54),
        opacity: (i) => (i === activeDishIndex ? 1 : 0.35),
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out"
      },
      0.6
    );

    // 3. 0.9s: Intro copy lines rise from mask (0.8s each, stagger 0.1s)
    entranceTl.fromTo(
      ".hero-intro-text",
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.8, ease: "power4.out" },
      0.9
    );

    // 4. 1.6s: Scroll cue line draws in
    entranceTl.fromTo(
      ".hero-scroll-cue",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" },
      1.5
    );
  }

  // ==========================================================================
  // 3. SCROLL ARCHITECTURE & MASTER TIMELINE (SECTION 6 & 7)
  // ==========================================================================
  function initScrollArchitecture() {
    if (typeof Lenis !== "undefined") {
      lenisInstance = new Lenis({ lerp: 0.1, smoothWheel: true });
      lenisInstance.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenisInstance.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    // Panels
    const panels = [
      document.getElementById("storyPanel1"),
      document.getElementById("storyPanel2"),
      document.getElementById("storyPanel3"),
      document.getElementById("storyPanel4")
    ];

    const chapterTicks = document.querySelectorAll(".chapter-tick");
    function updateChapterRail(panelIndex) {
      chapterTicks.forEach((tick, i) => {
        tick.classList.toggle("active", i === panelIndex);
      });
    }

    // Pinned Master Timeline (5 units of scrubbed scroll)
    masterTimeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: "#ovita-intro",
        start: "top top",
        end: "+=500%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        snap: {
          snapTo: [0, 0.24, 0.44, 0.66, 0.88, 1],
          duration: { min: 0.25, max: 0.7 },
          delay: 0.08,
          ease: "power2.inOut"
        },
        onUpdate: (self) => {
          const progress = self.progress;

          // Autoplay control
          if (progress > 0.05) stopAutoplay();
          else if (progress <= 0.01 && !isAutoplayPaused) startAutoplay();

          // Nav Brand Fade-in (Section 8: fades in once hero has gone at time 0.8 / progress 0.16)
          if (navBrand) {
            navBrand.classList.toggle("visible", progress >= 0.16);
          }

          // Leaves alignment factor (Section 6.2)
          // 0 for time <= 0.8 (progress <= 0.16), ramps to 1 by time 1.0 (progress 0.20)
          if (progress <= 0.16) {
            leavesAmount = 0;
          } else if (progress <= 0.20) {
            leavesAmount = (progress - 0.16) / 0.04;
          } else {
            leavesAmount = 1;
          }

          // Active Panel highlight for chapter rail
          if (progress < 0.2) updateChapterRail(-1);
          else if (progress < 0.4) updateChapterRail(0);
          else if (progress < 0.62) updateChapterRail(1);
          else if (progress < 0.84) updateChapterRail(2);
          else updateChapterRail(3);
        }
      }
    });

    // ------------------------------------------------------------------------
    // Timeline 0.00 to 0.25: Hero Copy & Scroll Cue Exit
    // ------------------------------------------------------------------------
    masterTimeline.to(
      ".hero-intro-text",
      { yPercent: -110, opacity: 0, duration: 0.25, ease: "power2.in" },
      0.00
    );
    masterTimeline.to(
      ".hero-scroll-cue",
      { opacity: 0, scaleY: 0, duration: 0.20, ease: "power2.in" },
      0.00
    );

    // ------------------------------------------------------------------------
    // Timeline 0.00 to 0.45: Carousel Drifts Away
    // ------------------------------------------------------------------------
    masterTimeline.to(
      ".hero-carousel-container",
      {
        x: "-10vw",
        scale: 0.95,
        opacity: 0,
        filter: "blur(6px)",
        duration: 0.45,
        ease: "power2.inOut"
      },
      0.00
    );

    // ------------------------------------------------------------------------
    // Timeline 0.15 to 0.80: Dark Sweep Rises and Dissolves Artwork
    // ------------------------------------------------------------------------
    masterTimeline.fromTo(
      ".sweep",
      { y: "100vh" },
      { y: "-20vh", duration: 0.65, ease: "power2.inOut" },
      0.15
    );

    // ------------------------------------------------------------------------
    // Timeline 0.55 to 1.00: Panel 1 Enters (Rise Transition)
    // ------------------------------------------------------------------------
    if (panels[0]) {
      masterTimeline.set(panels[0], { opacity: 1, zIndex: 10 }, 0.55);

      masterTimeline.fromTo(
        "#panel1Hairline",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.3, ease: "power3.out" },
        0.58
      );
      masterTimeline.fromTo(
        "#panel1Eyebrow",
        { letterSpacing: "0.6em", opacity: 0 },
        { letterSpacing: "0.32em", opacity: 1, duration: 0.35, ease: "power2.out" },
        0.60
      );
      masterTimeline.fromTo(
        "#panel1Headline",
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.38, ease: "power4.out" },
        0.65
      );
      masterTimeline.fromTo(
        ["#panel1Body", "#panel1Detail"],
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.06, ease: "power2.out" },
        0.72
      );
      masterTimeline.fromTo(
        "#panel1ImageWindow",
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.42, ease: "power3.inOut" },
        0.58
      );
      masterTimeline.fromTo(
        "#panel1Image",
        { scale: 1.25 },
        { scale: 1.0, duration: 0.42, ease: "power3.out" },
        0.58
      );
    }

    // 1.00 to 1.40: Panel 1 Holds

    // ------------------------------------------------------------------------
    // Timeline 1.40 to 1.90: Panel 1 Leaves, Panel 2 Enters (Split Curtain)
    // ------------------------------------------------------------------------
    if (panels[0] && panels[1]) {
      // Panel 1 Exit upward
      masterTimeline.to(
        "#panel1Headline",
        { yPercent: -100, opacity: 0, duration: 0.3, ease: "power3.in" },
        1.40
      );
      masterTimeline.to(
        "#panel1ImageWindow",
        { clipPath: "inset(0% 0% 100% 0%)", duration: 0.35, ease: "power3.in" },
        1.40
      );
      masterTimeline.set(panels[0], { opacity: 0, zIndex: 0 }, 1.75);

      // Split Curtain slides in to cover Panel 1, then splits apart to reveal Panel 2
      masterTimeline.set(panels[1], { opacity: 1, zIndex: 10 }, 1.45);
      masterTimeline.fromTo(
        ".split-curtain-left",
        { xPercent: -100 },
        { xPercent: 0, duration: 0.22, ease: "power3.in" },
        1.42
      );
      masterTimeline.fromTo(
        ".split-curtain-right",
        { xPercent: 100 },
        { xPercent: 0, duration: 0.22, ease: "power3.in" },
        1.42
      );

      // Split apart to reveal Panel 2
      masterTimeline.to(
        ".split-curtain-left",
        { xPercent: -100, duration: 0.26, ease: "power3.out" },
        1.64
      );
      masterTimeline.to(
        ".split-curtain-right",
        { xPercent: 100, duration: 0.26, ease: "power3.out" },
        1.64
      );

      // Panel 2 words enter with skewY 6 to 0 & ember glow pulses
      masterTimeline.fromTo(
        "#panel2Headline",
        { yPercent: 60, skewY: 6, opacity: 0 },
        { yPercent: 0, skewY: 0, opacity: 1, duration: 0.35, ease: "power4.out" },
        1.66
      );
      masterTimeline.fromTo(
        "#panel2Body",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
        1.72
      );
    }

    // 1.90 to 2.50: Panel 2 Holds

    // ------------------------------------------------------------------------
    // Timeline 2.50 to 3.00: Panel 2 Leaves, Panel 3 Enters (Iris Reveal)
    // ------------------------------------------------------------------------
    if (panels[1] && panels[2]) {
      masterTimeline.to(panels[1], { opacity: 0, duration: 0.3 }, 2.50);
      masterTimeline.set(panels[1], { zIndex: 0 }, 2.80);

      masterTimeline.set(panels[2], { opacity: 1, zIndex: 10 }, 2.50);
      masterTimeline.fromTo(
        panels[2],
        { clipPath: "circle(0% at 50% 62%)" },
        { clipPath: "circle(85% at 50% 62%)", duration: 0.45, ease: "power3.inOut" },
        2.52
      );
      masterTimeline.fromTo(
        "#panel3Image",
        { scale: 1.12 },
        { scale: 1.0, duration: 0.48, ease: "none" },
        2.52
      );
      masterTimeline.fromTo(
        "#panel3Headline",
        { filter: "blur(12px)", opacity: 0 },
        { filter: "blur(0px)", opacity: 1, duration: 0.35, ease: "power3.out" },
        2.65
      );
    }

    // 3.00 to 3.60: Panel 3 Holds

    // ------------------------------------------------------------------------
    // Timeline 3.60 to 4.10: Panel 3 Leaves, Panel 4 Enters (Gold Line Sweep)
    // ------------------------------------------------------------------------
    if (panels[2] && panels[3]) {
      masterTimeline.to(panels[2], { opacity: 0, duration: 0.3 }, 3.60);
      masterTimeline.set(panels[2], { zIndex: 0 }, 3.90);

      masterTimeline.set(panels[3], { opacity: 1, zIndex: 10 }, 3.60);

      // Gold line travels left to right (x: -2vw to 102vw)
      masterTimeline.fromTo(
        ".gold-travel-line",
        { left: "-2vw", opacity: 1 },
        { left: "102vw", opacity: 1, duration: 0.45, ease: "power3.inOut" },
        3.62
      );

      // Panel 4 is revealed behind it with matching clip-path
      masterTimeline.fromTo(
        panels[3],
        { clipPath: "inset(0% 100% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.45, ease: "power3.inOut" },
        3.62
      );

      masterTimeline.fromTo(
        "#panel4Headline",
        { scale: 1.06, letterSpacing: "0.04em", opacity: 0 },
        { scale: 1.0, letterSpacing: "-0.01em", opacity: 1, duration: 0.38, ease: "power3.out" },
        3.75
      );

      masterTimeline.fromTo(
        "#panel4OrderBtn",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
        3.88
      );
    }

    // 4.10 to 4.70: Panel 4 Holds

    // ------------------------------------------------------------------------
    // Timeline 4.70 to 5.00: Leaves Fade Out, Hand-Off to Ordering Section
    // ------------------------------------------------------------------------
    masterTimeline.to(
      ".leaves-stage",
      { opacity: 0, duration: 0.30, ease: "power2.in" },
      4.70
    );
  }

  // ==========================================================================
  // 4. LIVING LEAVES SWAY & PARALLAX (SECTION 6.2)
  // ==========================================================================
  function initLivingLeaves() {
    if (!leavesLayer || prefersReducedMotion || !window.gsap) return;

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", (e) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX = normX * (CONFIG.scroll?.leaves?.desktopMouseParallaxPx || 8);
      mouseY = normY * (CONFIG.scroll?.leaves?.desktopMouseParallaxPx || 8);
    });

    let startTime = performance.now();
    function tickLeaves() {
      const elapsed = (performance.now() - startTime) / 1000;
      // Gentle wind sway (9s sine loop)
      const swayRot = Math.sin((elapsed / 9) * Math.PI * 2) * (CONFIG.scroll?.leaves?.swayRotateDeg || 0.6);
      const swayTrans = Math.cos((elapsed / 9) * Math.PI * 2) * (CONFIG.scroll?.leaves?.swayTranslatePx || 4);

      // Multiply by leavesAmount (0 while artwork is visible, ramps to 1 by time 1.0)
      const curRot = swayRot * leavesAmount;
      const curTrans = swayTrans * leavesAmount;
      const curMouseX = mouseX * leavesAmount;
      const curMouseY = mouseY * leavesAmount;

      leavesLayer.style.transform = `translate(${curTrans + curMouseX}px, ${curTrans + curMouseY}px) rotate(${curRot}deg)`;
      requestAnimationFrame(tickLeaves);
    }
    requestAnimationFrame(tickLeaves);
  }

  // ==========================================================================
  // 5. CURSOR GLOW & MAGNETIC ORDER BUTTON (SECTION 3 & 7)
  // ==========================================================================
  function initCursorGlowAndMagnet() {
    if (!cursorGlow || prefersReducedMotion || window.innerWidth < 1024) return;

    let targetX = -200, targetY = -200;
    let currentX = -200, currentY = -200;

    window.addEventListener("mousemove", (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    function renderGlow() {
      currentX += (targetX - currentX) * 0.08; // 0.6s lag
      currentY += (targetY - currentY) * 0.08;
      cursorGlow.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(renderGlow);
    }
    requestAnimationFrame(renderGlow);

    // Magnetic pull on "Order now" button (6px on desktop)
    const btn = document.getElementById("panel4OrderBtn");
    if (btn) {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
        const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0px, 0px)";
      });
    }
  }

  // ==========================================================================
  // 6. SCROLL TO ORDER / HAND-OFF ACTION (SECTION 8)
  // ==========================================================================
  window.OvitaScrollToOrder = function (dishId = null) {
    const easeInOutExpo = (t) =>
      t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;

    const orderSection = document.getElementById("order");
    if (lenisInstance && orderSection) {
      lenisInstance.scrollTo("#order", { duration: 1.6, easing: easeInOutExpo });
    } else if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }

    if (dishId) {
      console.log(`Selected dish hand-off: ${dishId}`);
    }
  };

  // Wire scroll cue click
  const scrollCue = document.getElementById("heroScrollCue");
  if (scrollCue) {
    scrollCue.addEventListener("click", () => {
      if (lenisInstance) {
        lenisInstance.scrollTo(window.innerHeight * 1.2, { duration: 1.4 });
      } else {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      }
    });
  }

  // ==========================================================================
  // 7. INITIALIZATION
  // ==========================================================================
  window.addEventListener("DOMContentLoaded", () => {
    initCarouselDOM();
    initScrollArchitecture();
    initLivingLeaves();
    initCursorGlowAndMagnet();
    runHeroEntrance();
  });
})();
