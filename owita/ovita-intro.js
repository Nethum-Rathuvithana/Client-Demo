/**
 * ============================================================================
 * OVITA INTRO — HIGH PERFORMANCE LUXURY SCROLL STORY & ENGINE
 * Optimized for low-end hardware & smooth 60fps rendering:
 * - Lenis lerp: 0.12 (responsive, zero input lag)
 * - ScrollTrigger scrub: 0.45s (snappy, butter-smooth)
 * - GPU transforms (translate3d, scale, opacity) instead of software filters/reflows
 * - Pure compositor breeze for foliage
 * ============================================================================
 */

(function () {
  "use strict";

  const CONTENT = window.OVITA_CONTENT || {};
  const CONFIG = window.OVITA_CONFIG || {};

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
  const platesTrack = document.getElementById("carouselPlatesTrack");
  const dishNameEl = document.getElementById("carouselDishName");
  const dishDescEl = document.getElementById("carouselDishDesc");
  const pagerDotsContainer = document.getElementById("carouselPagerDots");
  const pausePlayBtn = document.getElementById("carouselPauseBtn");
  const navBrand = document.getElementById("ovitaNavBrand");
  const cursorGlow = document.getElementById("ovitaCursorGlow");

  const dishes = CONTENT.dishes || [];
  const N = dishes.length;

  // ==========================================================================
  // 1. CAROUSEL ENGINE (GPU OPTIMIZED)
  // ==========================================================================
  const platesElements = [];

  function initCarouselDOM() {
    if (!platesTrack) return;
    platesTrack.innerHTML = "";
    if (pagerDotsContainer) pagerDotsContainer.innerHTML = "";

    dishes.forEach((dish, idx) => {
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
    const D = stageWidth * 0.52;
    const slots = CONFIG.carousel?.slots || {};
    const duration = animate ? (CONFIG.carousel?.glideDurationSec || 0.85) : 0;
    const ease = CONFIG.carousel?.glideEase || "power3.inOut";
    const rotDeg = CONFIG.carousel?.plateRotationDeg || 7;

    platesElements.forEach((el, i) => {
      const d = getSignedDistance(i, activeDishIndex);
      let targetX = 0;
      let targetScale = 0.35;
      let targetOpacity = 0;
      let zIndex = 0;
      let targetRot = 0;

      if (Math.abs(d) < 0.1) {
        targetX = 0;
        targetScale = slots.active?.scale || 1.0;
        targetOpacity = slots.active?.opacity || 1.0;
        zIndex = 3;
        targetRot = 0;
      } else if (d > 0 && d <= 1.2) {
        targetX = D * (slots.next?.offsetMultiplier || 0.80);
        targetScale = slots.next?.scale || 0.54;
        targetOpacity = slots.next?.opacity || 0.35;
        zIndex = 2;
        targetRot = -rotDeg;
      } else if (d < 0 && d >= -1.2) {
        targetX = D * (slots.previous?.offsetMultiplier || -0.80);
        targetScale = slots.previous?.scale || 0.54;
        targetOpacity = slots.previous?.opacity || 0.45;
        zIndex = 2;
        targetRot = rotDeg;
      } else if (d > 1.2 && d <= 2.2) {
        targetX = D * (slots.outerNext?.offsetMultiplier || 1.30);
        targetScale = slots.outerNext?.scale || 0.35;
        targetOpacity = 0;
        zIndex = 1;
        targetRot = -rotDeg * 1.5;
      } else if (d < -1.2 && d >= -2.2) {
        targetX = D * (slots.outerPrev?.offsetMultiplier || -1.30);
        targetScale = slots.outerPrev?.scale || 0.35;
        targetOpacity = 0;
        zIndex = 1;
        targetRot = rotDeg * 1.5;
      } else {
        targetX = d > 0 ? D * 1.6 : -D * 1.6;
        targetScale = 0.2;
        targetOpacity = 0;
        zIndex = 0;
      }

      el.style.zIndex = zIndex;

      if (animate && window.gsap && !prefersReducedMotion) {
        gsap.to(el, {
          x: targetX,
          scale: targetScale,
          opacity: targetOpacity,
          rotation: targetRot,
          duration: duration,
          ease: ease,
          overwrite: "auto",
          force3D: true
        });
      } else {
        el.style.transform = `translate3d(${targetX}px, 0, 0) scale(${targetScale}) rotate(${targetRot}deg)`;
        el.style.opacity = targetOpacity;
      }
    });

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
      gsap.to([dishNameEl, dishDescEl], {
        y: -10,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          dishNameEl.textContent = dish.name;
          dishDescEl.textContent = dish.description;
          gsap.fromTo(
            dishNameEl,
            { y: 12, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", force3D: true }
          );
          gsap.fromTo(
            dishDescEl,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, delay: 0.05, ease: "power3.out", force3D: true }
          );
        }
      });
    } else {
      dishNameEl.textContent = dish.name;
      dishDescEl.textContent = dish.description;
      dishNameEl.style.opacity = 1;
      dishDescEl.style.opacity = 1;
    }

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
    const glide = (CONFIG.carousel?.glideDurationSec || 0.85) * 1000;
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

    container.addEventListener("mouseenter", () => {
      isUserInteracting = true;
      stopAutoplay();
    });
    container.addEventListener("mouseleave", () => {
      resetAutoplayTimer();
    });

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

    platesTrack.setAttribute("tabindex", "0");
    platesTrack.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") nextDish();
      else if (e.key === "ArrowLeft") prevDish();
    });

    if (pausePlayBtn) {
      pausePlayBtn.addEventListener("click", toggleAutoplay);
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopAutoplay();
      else resetAutoplayTimer();
    });
  }

  // ==========================================================================
  // 2. HERO ENTRANCE SEQUENCE
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

    entranceTl.fromTo(
      ["#ovita-intro", ".art-stage", ".leaves-stage"],
      { opacity: 0 },
      { opacity: 1, duration: 1.0, ease: "power2.out" },
      0
    );

    entranceTl.fromTo(
      ".carousel-plate-item",
      { scale: 0.85, opacity: 0 },
      {
        scale: (i) => (i === activeDishIndex ? 1 : 0.54),
        opacity: (i) => (i === activeDishIndex ? 1 : 0.35),
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out"
      },
      0.5
    );

    entranceTl.fromTo(
      ".hero-intro-text",
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.75, ease: "power4.out" },
      0.7
    );

    entranceTl.fromTo(
      ".hero-scroll-cue",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" },
      1.2
    );
  }

  // ==========================================================================
  // 3. MASTER SCROLL TIMELINE (ULTRA SMOOTH 0.45s SCRUB)
  // ==========================================================================
  function initScrollArchitecture() {
    if (typeof Lenis !== "undefined") {
      lenisInstance = new Lenis({
        lerp: 0.12,          // Responsive tracking without input lag
        smoothWheel: true,
        wheelMultiplier: 1.05
      });
      lenisInstance.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenisInstance.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

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

    masterTimeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: "#ovita-intro",
        start: "top top",
        end: "+=500%",
        pin: true,
        scrub: 0.45,         // Fast, fluid 0.45s scrub (eliminates lag on low-end systems)
        anticipatePin: 1,
        snap: {
          snapTo: [0, 0.24, 0.44, 0.66, 0.88, 1],
          duration: { min: 0.2, max: 0.5 },
          delay: 0.04,
          ease: "power2.out"
        },
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress > 0.05) stopAutoplay();
          else if (progress <= 0.01 && !isAutoplayPaused) startAutoplay();

          if (navBrand) {
            navBrand.classList.toggle("visible", progress >= 0.16);
          }

          // Leaves alignment factor (Section 6.2):
          // 0 for timeline <= 0.8 (progress <= 0.16), ramps to 1 by time 1.0 (progress 0.20)
          if (progress <= 0.16) {
            leavesAmount = 0;
          } else if (progress <= 0.20) {
            leavesAmount = (progress - 0.16) / 0.04;
          } else {
            leavesAmount = 1;
          }

          if (progress < 0.2) updateChapterRail(-1);
          else if (progress < 0.4) updateChapterRail(0);
          else if (progress < 0.62) updateChapterRail(1);
          else if (progress < 0.84) updateChapterRail(2);
          else updateChapterRail(3);
        }
      }
    });

    // Timeline 0.00 to 0.25: Hero Copy & Cue Exit
    masterTimeline.to(".hero-intro-text", { yPercent: -110, opacity: 0, duration: 0.25, ease: "power2.in" }, 0.00);
    masterTimeline.to(".hero-scroll-cue", { opacity: 0, duration: 0.20, ease: "power2.in" }, 0.00);

    // Timeline 0.00 to 0.45: Carousel Drifts Away (Hardware accelerated, no blur)
    masterTimeline.to(".hero-carousel-container", {
      x: "-10vw",
      scale: 0.95,
      opacity: 0,
      duration: 0.45,
      ease: "power2.inOut"
    }, 0.00);

    // Timeline 0.15 to 0.80: Dark Sweep Rises (translate3d)
    masterTimeline.fromTo(".sweep",
      { y: "100vh" },
      { y: "-20vh", duration: 0.65, ease: "power2.inOut" },
      0.15
    );

    // Timeline 0.55 to 1.00: Panel 1 Enters (Rise Transition)
    if (panels[0]) {
      masterTimeline.set(panels[0], { opacity: 1, zIndex: 10 }, 0.55);
      masterTimeline.fromTo("#panel1Hairline", { scaleX: 0 }, { scaleX: 1, duration: 0.3, ease: "power3.out" }, 0.58);
      masterTimeline.fromTo("#panel1Eyebrow", { letterSpacing: "0.5em", opacity: 0 }, { letterSpacing: "0.32em", opacity: 1, duration: 0.35, ease: "power2.out" }, 0.60);
      masterTimeline.fromTo("#panel1Headline", { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.38, ease: "power4.out" }, 0.65);
      masterTimeline.fromTo(["#panel1Body", "#panel1Detail"], { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, stagger: 0.06, ease: "power2.out" }, 0.72);
      masterTimeline.fromTo("#panel1ImageWindow", { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.42, ease: "power3.inOut" }, 0.58);
      masterTimeline.fromTo("#panel1Image", { scale: 1.25 }, { scale: 1.0, duration: 0.42, ease: "power3.out" }, 0.58);
    }

    // Timeline 1.40 to 1.90: Panel 1 Leaves, Panel 2 Enters (Split Curtain)
    if (panels[0] && panels[1]) {
      masterTimeline.to("#panel1Headline", { yPercent: -100, opacity: 0, duration: 0.3, ease: "power3.in" }, 1.40);
      masterTimeline.to("#panel1ImageWindow", { clipPath: "inset(0% 0% 100% 0%)", duration: 0.35, ease: "power3.in" }, 1.40);
      masterTimeline.set(panels[0], { opacity: 0, zIndex: 0 }, 1.75);

      masterTimeline.set(panels[1], { opacity: 1, zIndex: 10 }, 1.45);
      masterTimeline.fromTo(".split-curtain-left", { xPercent: -100 }, { xPercent: 0, duration: 0.22, ease: "power3.in" }, 1.42);
      masterTimeline.fromTo(".split-curtain-right", { xPercent: 100 }, { xPercent: 0, duration: 0.22, ease: "power3.in" }, 1.42);

      masterTimeline.to(".split-curtain-left", { xPercent: -100, duration: 0.26, ease: "power3.out" }, 1.64);
      masterTimeline.to(".split-curtain-right", { xPercent: 100, duration: 0.26, ease: "power3.out" }, 1.64);

      masterTimeline.fromTo("#panel2Headline", { yPercent: 50, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.35, ease: "power4.out" }, 1.66);
      masterTimeline.fromTo("#panel2Body", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }, 1.72);
    }

    // Timeline 2.50 to 3.00: Panel 2 Leaves, Panel 3 Enters (Iris Reveal)
    if (panels[1] && panels[2]) {
      masterTimeline.to(panels[1], { opacity: 0, duration: 0.3 }, 2.50);
      masterTimeline.set(panels[1], { zIndex: 0 }, 2.80);

      masterTimeline.set(panels[2], { opacity: 1, zIndex: 10 }, 2.50);
      masterTimeline.fromTo(panels[2],
        { clipPath: "circle(0% at 50% 62%)" },
        { clipPath: "circle(85% at 50% 62%)", duration: 0.45, ease: "power3.inOut" },
        2.52
      );
      masterTimeline.fromTo("#panel3Image", { scale: 1.12 }, { scale: 1.0, duration: 0.48, ease: "none" }, 2.52);
      masterTimeline.fromTo("#panel3Headline", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" }, 2.65);
    }

    // Timeline 3.60 to 4.10: Panel 3 Leaves, Panel 4 Enters (Gold Line Sweep)
    if (panels[2] && panels[3]) {
      masterTimeline.to(panels[2], { opacity: 0, duration: 0.3 }, 3.60);
      masterTimeline.set(panels[2], { zIndex: 0 }, 3.90);

      masterTimeline.set(panels[3], { opacity: 1, zIndex: 10 }, 3.60);

      // Gold line travels using transform xPercent (hardware GPU compositor, zero reflow)
      masterTimeline.fromTo(".gold-travel-line",
        { x: "-2vw", opacity: 1 },
        { x: "104vw", opacity: 1, duration: 0.45, ease: "power3.inOut" },
        3.62
      );

      masterTimeline.fromTo(panels[3],
        { clipPath: "inset(0% 100% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.45, ease: "power3.inOut" },
        3.62
      );

      masterTimeline.fromTo("#panel4Headline",
        { scale: 1.05, opacity: 0 },
        { scale: 1.0, opacity: 1, duration: 0.38, ease: "power3.out" },
        3.75
      );

      masterTimeline.fromTo("#panel4OrderBtn",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
        3.88
      );
    }

    // Timeline 4.70 to 5.00: Leaves Fade Out
    masterTimeline.to(".leaves-stage", { opacity: 0, duration: 0.30, ease: "power2.in" }, 4.70);
  }

  // ==========================================================================
  // 4. LIVING LEAVES SWAY & MOUSE PARALLAX (SECTION 6.2)
  // Interactive organic wind sway + desktop mouse parallax + pixel-perfect alignment
  // ==========================================================================
  function initLivingLeaves() {
    const leavesLayer = document.getElementById("leavesStage");
    if (!leavesLayer || prefersReducedMotion) return;

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", (e) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX = normX * (CONFIG.scroll?.leaves?.desktopMouseParallaxPx || 8);
      mouseY = normY * (CONFIG.scroll?.leaves?.desktopMouseParallaxPx || 8);
    }, { passive: true });

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

      // GPU hardware accelerated 3D transform
      leavesLayer.style.transform = `translate3d(${curTrans + curMouseX}px, ${curTrans + curMouseY}px, 0) rotate(${curRot}deg)`;
      requestAnimationFrame(tickLeaves);
    }
    requestAnimationFrame(tickLeaves);
  }

  // ==========================================================================
  // 5. CURSOR GLOW & MAGNETIC ORDER BUTTON (THROTTLED & ACCELERATED)
  // ==========================================================================
  function initCursorGlowAndMagnet() {
    if (!cursorGlow || prefersReducedMotion || window.innerWidth < 1024) return;

    let targetX = -200, targetY = -200;
    let currentX = -200, currentY = -200;
    let ticking = false;

    window.addEventListener("mousemove", (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!ticking) {
        requestAnimationFrame(() => {
          currentX += (targetX - currentX) * 0.15;
          currentY += (targetY - currentY) * 0.15;
          cursorGlow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    const btn = document.getElementById("panel4OrderBtn");
    if (btn) {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.2;
        const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.2;
        btn.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      }, { passive: true });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate3d(0, 0, 0)";
      });
    }
  }

  // ==========================================================================
  // 5. SCROLL TO ORDER / HAND-OFF ACTION
  // ==========================================================================
  window.OvitaScrollToOrder = function (dishId = null) {
    const easeInOutExpo = (t) =>
      t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;

    const orderSection = document.getElementById("order");
    if (lenisInstance && orderSection) {
      lenisInstance.scrollTo("#order", { duration: 1.4, easing: easeInOutExpo });
    } else if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollCue = document.getElementById("heroScrollCue");
  if (scrollCue) {
    scrollCue.addEventListener("click", () => {
      if (lenisInstance) {
        lenisInstance.scrollTo(window.innerHeight * 1.2, { duration: 1.2 });
      } else {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      }
    });
  }

  // ==========================================================================
  // 6. INITIALIZATION
  // ==========================================================================
  window.addEventListener("DOMContentLoaded", () => {
    initCarouselDOM();
    initScrollArchitecture();
    initLivingLeaves();
    initCursorGlowAndMagnet();
    runHeroEntrance();
  });
})();
