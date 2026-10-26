/**
 * "Most Loved Dish" Food Hero Slider Animation Controller
 * Uses GSAP 3 Core for 60fps plate orbit swap, opposing mask wipes, color tweens, and intro
 */

(function () {
  'use strict';

  const dishes = window.HERO_SLIDER_DISHES || [];
  let currentIndex = 0;
  let isAnimating = false;
  let autoplayTimer = null;
  const AUTOPLAY_DELAY = 4500;
  let currentTab = 'overview';

  // DOM Elements
  const heroEl = document.getElementById('mostLovedHero');
  const plateStage = document.querySelector('.slider-plate-stage');
  const currentOrbit = document.querySelector('.current-orbit');
  const nextOrbit = document.querySelector('.next-orbit');
  const currentPlateImg = document.querySelector('.current-plate');
  const nextPlateImg = document.querySelector('.next-plate');

  const eyebrowEl = document.querySelector('.title-eyebrow');
  const line1El = document.querySelector('.title-line1');
  const line2El = document.querySelector('.title-line2');

  const ratingBadgeEl = document.querySelector('.rating-badge');
  const ratingNumEl = document.querySelector('.rating-number');
  const chefNameEl = document.querySelector('.chef-name');
  const chefSubEl = document.querySelector('.chef-subtitle');
  const descEl = document.querySelector('.card-description');
  const ingredientsListEl = document.querySelector('.card-ingredients-list');
  const likesCountEl = document.querySelector('.likes-count');

  const bandPrimary = document.querySelector('.band-primary');
  const bandSecondary = document.querySelector('.band-secondary');

  const pagerDots = document.querySelectorAll('.pager-dot-wrap');
  const thumbItems = document.querySelectorAll('.thumb-item');
  const activeTile = document.querySelector('.strip-active-tile');

  // Preload all plate images for instant transitions
  dishes.forEach(d => {
    const img = new Image();
    img.src = d.img;
    const thumb = new Image();
    thumb.src = d.thumb;
  });

  // Helper: Position active tile over thumb item
  function updateActiveThumbnailTile(index, immediate = false) {
    if (!thumbItems[index] || !activeTile) return;
    const targetThumb = thumbItems[index];
    const track = document.querySelector('.strip-track');
    if (!track) return;
    const trackRect = track.getBoundingClientRect();
    const thumbRect = targetThumb.getBoundingClientRect();
    const leftOffset = thumbRect.left - trackRect.left - 8;

    if (immediate || typeof gsap === 'undefined') {
      activeTile.style.transform = 'translateX(' + leftOffset + 'px)';
    } else {
      gsap.to(activeTile, {
        x: leftOffset,
        duration: 0.45,
        ease: 'power2.out'
      });
    }

    thumbItems.forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });

    pagerDots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
  }

  // --- SLIDE CHANGE TRANSITION TIMELINE (§6 Study 05_transition_sequence.jpg) ---
  function goToSlide(newIndex, direction = 1) {
    if (newIndex === currentIndex || isAnimating || !window.gsap) return;
    isAnimating = true;

    const currentDish = dishes[currentIndex];
    const nextDish = dishes[newIndex];
    const isForward = direction >= 0;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.to([heroEl], {
        opacity: 0.3,
        duration: 0.15,
        onComplete: () => {
          currentPlateImg.src = nextDish.img;
          eyebrowEl.textContent = '#' + nextDish.rank + ' Most loved dish';
          line1El.textContent = nextDish.line1;
          line2El.textContent = nextDish.line2;
          ratingNumEl.textContent = nextDish.rating;
          chefNameEl.textContent = nextDish.chef;
          chefSubEl.textContent = nextDish.chefSub;
          descEl.textContent = nextDish.desc;
          likesCountEl.textContent = nextDish.likes;
          ratingBadgeEl.style.backgroundColor = nextDish.badge;
          bandPrimary.style.backgroundColor = nextDish.band;
          bandSecondary.style.backgroundColor = nextDish.band;
          renderIngredients(nextDish.ingredients);
          currentIndex = newIndex;
          updateActiveThumbnailTile(newIndex);
          gsap.to(heroEl, { opacity: 1, duration: 0.15 });
          isAnimating = false;
        }
      });
      return;
    }

    // Prepare next plate image & ensure visible
    nextPlateImg.src = nextDish.img;
    nextPlateImg.alt = nextDish.line1 + ' ' + nextDish.line2;

    const tl = gsap.timeline({
      onComplete: () => {
        // Swap active references
        currentPlateImg.src = nextDish.img;
        currentPlateImg.alt = nextDish.line1 + ' ' + nextDish.line2;

        gsap.set(currentOrbit, { rotation: 0, opacity: 1 });
        gsap.set(currentPlateImg, { rotation: 0, scale: 1, filter: 'drop-shadow(0 40px 60px rgba(40, 44, 70, 0.35))' });
        gsap.set(nextOrbit, { rotation: isForward ? 45 : -45, opacity: 0 });
        gsap.set(nextPlateImg, { rotation: 0 });

        currentIndex = newIndex;
        isAnimating = false;
        resetAutoplay();
      }
    });

    // A. Plate "orbit swap" (§6A)
    // Outgoing plate: rotates 0° -> -45° (or +45° if backwards) leaving through left edge
    const outOrbitAngle = isForward ? -45 : 45;
    const outSpinAngle = isForward ? -150 : 150;
    const inStartAngle = isForward ? 45 : -45;
    const inSpinStart = isForward ? 200 : -200;

    // Reset next orbit to entry position with opacity 1
    gsap.set(nextOrbit, { rotation: inStartAngle, opacity: 1 });
    gsap.set(nextPlateImg, { rotation: inSpinStart, scale: 0.92, filter: 'blur(6px) drop-shadow(0 40px 60px rgba(40, 44, 70, 0.35))' });

    // Outgoing Plate Animation (0 -> 0.75s, power2.in)
    tl.to(currentOrbit, {
      rotation: outOrbitAngle,
      duration: 0.75,
      ease: 'power2.in'
    }, 0);

    tl.to(currentPlateImg, {
      rotation: outSpinAngle,
      filter: 'blur(6px) drop-shadow(0 40px 60px rgba(40, 44, 70, 0.35))',
      duration: 0.75,
      ease: 'power2.in'
    }, 0);

    // Incoming Plate Animation (0.30 -> 1.15s, power3.out — overlapping frames 6-8)
    tl.to(nextOrbit, {
      rotation: 0,
      duration: 0.85,
      ease: 'power3.out'
    }, 0.30);

    tl.to(nextPlateImg, {
      rotation: 0,
      scale: 1,
      filter: 'blur(0px) drop-shadow(0 40px 60px rgba(40, 44, 70, 0.35))',
      duration: 0.85,
      ease: 'power3.out'
    }, 0.30);

    // B. Title Mask Wipes (opposing directions, §6B)
    // Wipe Out: (0 -> 0.40s)
    // Eyebrow wipes out right-to-left: inset(0 100% 0 0)
    tl.to(eyebrowEl, {
      clipPath: 'inset(0 100% 0 0)',
      duration: 0.35,
      ease: 'power2.in'
    }, 0);

    // Line 1 wipes out from the left: inset(0 0 0 100%)
    tl.to(line1El, {
      clipPath: 'inset(0 0 0 100%)',
      duration: 0.40,
      ease: 'power2.in'
    }, 0.04);

    // Line 2 wipes out from the right: inset(0 100% 0 0)
    tl.to(line2El, {
      clipPath: 'inset(0 100% 0 0)',
      duration: 0.40,
      ease: 'power2.in'
    }, 0.08);

    // Content Swap at mid-point (0.45s)
    tl.call(() => {
      eyebrowEl.textContent = '#' + nextDish.rank + ' Most loved dish';
      line1El.textContent = nextDish.line1;
      line2El.textContent = nextDish.line2;

      // Set initial clip paths for wipe-in
      gsap.set(line1El, { clipPath: 'inset(0 0 0 100%)' });
      gsap.set(line2El, { clipPath: 'inset(0 100% 0 0)', x: 12 });
      gsap.set(eyebrowEl, { clipPath: 'inset(0 100% 0 0)' });
    }, null, 0.45);

    // Wipe In: (0.75 -> 1.25s)
    // Line 1 reveals from right edge leftward: inset(0 0 0 100%) -> inset(0 0 0 0)
    tl.to(line1El, {
      clipPath: 'inset(0 0 0 0%)',
      duration: 0.50,
      ease: 'expo.out'
    }, 0.75);

    // Line 2 reveals from left edge rightward: inset(0 100% 0 0) -> inset(0 0 0 0) + x: 12 -> 0
    tl.to(line2El, {
      clipPath: 'inset(0 0% 0 0)',
      x: 0,
      duration: 0.50,
      ease: 'expo.out'
    }, 0.80);

    // Eyebrow reveals left-to-right
    tl.to(eyebrowEl, {
      clipPath: 'inset(0 0% 0 0)',
      duration: 0.45,
      ease: 'expo.out'
    }, 0.85);

    // C. Info Card Transitions (§6C)
    // Text fade out (0 -> 0.25s)
    tl.to([ratingNumEl, chefNameEl, chefSubEl, descEl, likesCountEl], {
      opacity: 0,
      y: -6,
      duration: 0.25,
      ease: 'power1.in'
    }, 0);

    // Swap text content at 0.35s
    tl.call(() => {
      ratingNumEl.textContent = nextDish.rating;
      chefNameEl.textContent = nextDish.chef;
      chefSubEl.textContent = nextDish.chefSub;
      descEl.textContent = nextDish.desc;
      likesCountEl.textContent = nextDish.likes;
      renderIngredients(nextDish.ingredients);
    }, null, 0.35);

    // Badge color tween (0.30 -> 0.80s)
    tl.to(ratingBadgeEl, {
      backgroundColor: nextDish.badge,
      duration: 0.50,
      ease: 'power2.out'
    }, 0.30);

    // Background bands color crossfade (0.20 -> 0.90s)
    tl.to([bandPrimary, bandSecondary], {
      backgroundColor: nextDish.band,
      duration: 0.70,
      ease: 'power2.out'
    }, 0.20);

    // Info card text fade in (0.85 -> 1.25s)
    tl.fromTo([ratingNumEl, chefNameEl, chefSubEl, descEl, likesCountEl], {
      opacity: 0,
      y: 8
    }, {
      opacity: 1,
      y: 0,
      duration: 0.40,
      stagger: 0.05,
      ease: 'power2.out'
    }, 0.85);

    // D. Pager & Thumbnail Active Indicator slide (0.30 -> 0.75s)
    updateActiveThumbnailTile(newIndex);
  }

  // --- INGREDIENTS TAB RENDERER ---
  function renderIngredients(ingredients) {
    if (!ingredientsListEl) return;
    ingredientsListEl.innerHTML = `
      <div style="font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--slider-ink); margin-bottom: 6px;">
        Core Ingredients
      </div>
      <ul style="padding-left: 14px; margin: 0; display: grid; grid-template-columns: 1fr; gap: 4px;">
        ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
      </ul>
    `;
  }

  function switchCardTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.card-tab').forEach(b => {
      b.classList.toggle('active', b.dataset.tab === tab);
    });

    const indicator = document.querySelector('.card-tab-indicator');
    if (indicator) {
      if (tab === 'ingredients') {
        indicator.style.transform = 'translateX(90px)';
        indicator.style.width = '75px';
        descEl.classList.add('hidden');
        ingredientsListEl.classList.remove('hidden');
      } else {
        indicator.style.transform = 'translateX(0)';
        indicator.style.width = '54px';
        descEl.classList.remove('hidden');
        ingredientsListEl.classList.add('hidden');
      }
    }
  }

  // --- PAGE LOAD INTRO ANIMATION (§7 Study 06_page_load_intro.jpg) ---
  function playIntroAnimation() {
    if (typeof gsap === 'undefined') return;

    const initialDish = dishes[0];
    currentPlateImg.src = initialDish.img;
    currentPlateImg.alt = initialDish.line1 + ' ' + initialDish.line2;
    renderIngredients(initialDish.ingredients);
    updateActiveThumbnailTile(0, true);

    // Initial state matching 06_page_load_intro.jpg
    gsap.set(heroEl, { opacity: 0 });
    gsap.set([eyebrowEl, line1El, line2El], { opacity: 0, filter: 'blur(10px)' });
    gsap.set(currentOrbit, { rotation: -60, x: -100, y: -100 });
    gsap.set(currentPlateImg, { rotation: 360, filter: 'blur(8px) drop-shadow(0 40px 60px rgba(40,44,70,.35))' });
    gsap.set('.slider-info-card', { opacity: 0, y: 24 });
    gsap.set('.slider-action-row, .slider-thumbnails-strip, .slider-pager-nav, .slider-top-bar, .slider-scroll-cue', { opacity: 0 });

    const introTl = gsap.timeline({ delay: 0.1 });

    // 1. 0 -> 0.4s: Page fades in from blank #F2F2F6
    introTl.to(heroEl, {
      opacity: 1,
      duration: 0.4,
      ease: 'power1.out'
    });

    // 2. 0.2 -> 0.9s: Eyebrow + title lines fade in with blur(10px) -> 0
    introTl.to([eyebrowEl, line1El, line2El], {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.7,
      ease: 'power2.out'
    }, 0.2);

    // 3. 0.4 -> 1.4s: Plate rolls in from top-left spinning 360 -> 0
    introTl.to(currentOrbit, {
      rotation: 0,
      x: 0,
      y: 0,
      duration: 1.0,
      ease: 'power3.out'
    }, 0.4);

    introTl.to(currentPlateImg, {
      rotation: 0,
      filter: 'blur(0px) drop-shadow(0 40px 60px rgba(40, 44, 70, 0.35))',
      duration: 1.0,
      ease: 'power3.out'
    }, 0.4);

    // 4. 0.9 -> 1.5s: Info card slides up (y: 24 -> 0)
    introTl.to('.slider-info-card', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, 0.9);

    // 5. 1.0 -> 1.6s: Action row, thumbnails, pager, top bar stagger in
    introTl.to('.slider-top-bar, .slider-pager-nav, .slider-action-row, .slider-thumbnails-strip, .slider-scroll-cue', {
      opacity: 1,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out'
    }, 1.0);

    // Floating idle breath animation for plate (§8: y +/- 4px, 6s yoyo)
    gsap.to(currentPlateImg, {
      y: -4,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      delay: 1.8
    });
  }

  // --- AUTOPLAY & IDLE RESUME (§8) ---
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      const nextIdx = (currentIndex + 1) % dishes.length;
      goToSlide(nextIdx, 1);
    }, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // --- ACTIONS ---
  function orderFood() {
    // Smooth scroll down to Ovita's online menu
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function playVideo() {
    const dish = dishes[currentIndex];
    if (window.OwitaApp && window.OwitaApp.showToast) {
      window.OwitaApp.showToast('Playing culinary preparation video for ' + dish.line1 + ' ' + dish.line2, 'info');
    } else {
      alert('Playing chef video for ' + dish.line1 + ' ' + dish.line2);
    }
  }

  // --- EVENT LISTENERS (§8) ---
  function initEvents() {
    // Thumbnail Clicks (direction-aware)
    thumbItems.forEach((thumb, idx) => {
      thumb.addEventListener('click', () => {
        const dir = idx >= currentIndex ? 1 : -1;
        goToSlide(idx, dir);
      });
    });

    // Pager Dots
    pagerDots.forEach((dotWrap, idx) => {
      dotWrap.addEventListener('click', () => {
        const dir = idx >= currentIndex ? 1 : -1;
        goToSlide(idx, dir);
      });
    });

    // Chevrons
    const prevBtn = document.querySelector('.strip-prev');
    const nextBtn = document.querySelector('.strip-next');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const prevIdx = (currentIndex - 1 + dishes.length) % dishes.length;
        goToSlide(prevIdx, -1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const nextIdx = (currentIndex + 1) % dishes.length;
        goToSlide(nextIdx, 1);
      });
    }

    // Action buttons
    const orderBtn = document.getElementById('heroOrderBtn');
    if (orderBtn) {
      orderBtn.addEventListener('click', orderFood);
    }
    const playBtn = document.querySelector('.action-play');
    if (playBtn) {
      playBtn.addEventListener('click', playVideo);
    }

    // Keyboard Arrow Keys
    window.addEventListener('keydown', (e) => {
      if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
        return;
      }
      if (e.key === 'ArrowRight') {
        const nextIdx = (currentIndex + 1) % dishes.length;
        goToSlide(nextIdx, 1);
      } else if (e.key === 'ArrowLeft') {
        const prevIdx = (currentIndex - 1 + dishes.length) % dishes.length;
        goToSlide(prevIdx, -1);
      }
    });

    // Mouse wheel / trackpad (debounced 900ms)
    let wheelTimeout = null;
    let lastWheelTime = 0;
    heroEl.addEventListener('wheel', (e) => {
      // Only capture when hero is at top of screen
      if (window.scrollY > 50) return;
      const now = Date.now();
      if (Math.abs(e.deltaX) > 25 || (e.shiftKey && Math.abs(e.deltaY) > 25)) {
        e.preventDefault();
        if (now - lastWheelTime > 900) {
          lastWheelTime = now;
          if (e.deltaX > 0 || e.deltaY > 0) {
            goToSlide((currentIndex + 1) % dishes.length, 1);
          } else {
            goToSlide((currentIndex - 1 + dishes.length) % dishes.length, -1);
          }
        }
      }
    }, { passive: false });

    // Touch swipe (50px threshold)
    let touchStartX = 0;
    let touchStartY = 0;
    heroEl.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    heroEl.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          goToSlide((currentIndex + 1) % dishes.length, 1);
        } else {
          goToSlide((currentIndex - 1 + dishes.length) % dishes.length, -1);
        }
      }
    }, { passive: true });

    // Card Tabs Click
    document.querySelectorAll('.card-tab').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        switchCardTab(tabBtn.dataset.tab);
      });
    });

    // Pause autoplay on card or thumbnails hover
    const cardEl = document.querySelector('.slider-info-card');
    const stripEl = document.querySelector('.slider-thumbnails-strip');
    [cardEl, stripEl].forEach(el => {
      if (!el) return;
      el.addEventListener('mouseenter', stopAutoplay);
      el.addEventListener('mouseleave', resetAutoplay);
    });

    // Window resize: re-position active thumbnail tile
    window.addEventListener('resize', () => {
      updateActiveThumbnailTile(currentIndex, true);
    });
  }

  // Initialize
  function init() {
    initEvents();
    playIntroAnimation();
    startAutoplay();
  }

  // Global export
  window.OwitaSlider = {
    init,
    goToSlide,
    orderFood,
    playVideo,
    switchCardTab
  };

  // Auto-init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 50);
  }

})();
