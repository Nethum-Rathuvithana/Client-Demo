/**
 * "Most Loved Dish" Food Hero Slider Animation Controller
 * Uses GSAP 3 Core for 60fps plate orbit swap, opposing mask wipes, color tweens
 * Synchronized with the Full Menu below (highlight active card + two-way sync)
 */

(function () {
  'use strict';

  const dishes = window.HERO_SLIDER_DISHES || [];
  let currentIndex = 0;
  let isAnimating = false;
  let autoplayTimer = null;
  const AUTOPLAY_DELAY = 5000;
  let currentTab = 'overview';

  // DOM Elements
  const heroEl = document.getElementById('mostLovedHero');
  if (!heroEl) return;

  const currentOrbit = document.querySelector('.current-orbit');
  const nextOrbit = document.querySelector('.next-orbit');
  const currentPlateImg = document.querySelector('.current-plate');
  const nextPlateImg = document.querySelector('.next-plate');

  const eyebrowEl = document.querySelector('.title-eyebrow');
  const line1El = document.querySelector('.title-line1');
  const line2El = document.querySelector('.title-line2');
  const priceTagEl = document.querySelector('.slider-price-tag');
  const servesPillEl = document.querySelector('.slider-serves-pill');

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

  // Preload first batch of plate images
  dishes.slice(0, 6).forEach(d => {
    const img = new Image();
    img.src = d.img;
  });

  // Helper: Position active tile over thumb item
  function updateActiveThumbnailTile(index, immediate = false) {
    if (!thumbItems[index] || !activeTile) return;
    const targetThumb = thumbItems[index];
    const track = document.querySelector('.strip-track');
    if (!track) return;
    const trackRect = track.getBoundingClientRect();
    const thumbRect = targetThumb.getBoundingClientRect();
    const leftOffset = thumbRect.left - trackRect.left - 6;

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

    // Scroll thumbnail into view within track wrapper if needed
    const wrapper = document.querySelector('.strip-track-wrapper');
    if (wrapper) {
      const scrollPos = targetThumb.offsetLeft - wrapper.offsetWidth / 2 + targetThumb.offsetWidth / 2;
      wrapper.scrollTo({ left: Math.max(0, scrollPos), behavior: 'smooth' });
    }
  }

  // --- TWO-WAY SYNC: HIGHLIGHT CORRESPONDING MENU CARD BELOW ---
  function syncWithFullMenu(dishId) {
    if (!dishId) return;

    // Remove highlight from all menu cards
    document.querySelectorAll('.menu-item-card').forEach(card => {
      card.classList.remove('menu-card-highlighted');
    });

    // Find and highlight matching card
    const targetCard = document.getElementById('menu-card-' + dishId);
    if (targetCard) {
      targetCard.classList.add('menu-card-highlighted');
      // Gentle scroll into view without jarring screen
      const rect = targetCard.getBoundingClientRect();
      const inViewport = (rect.top >= 100 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) - 50);
      if (!inViewport && window.scrollY > 400) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }

  // --- SLIDE CHANGE TRANSITION TIMELINE ---
  function goToSlide(newIndex, direction = 1, triggerSync = true) {
    if (newIndex === currentIndex || isAnimating || !window.gsap) return;
    isAnimating = true;

    const currentDish = dishes[currentIndex];
    const nextDish = dishes[newIndex];
    const isForward = direction >= 0;

    // Reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      currentPlateImg.src = nextDish.img;
      eyebrowEl.textContent = '#' + nextDish.rank + ' ' + (nextDish.category ? nextDish.category.toUpperCase() : 'SPECIAL');
      line1El.textContent = nextDish.line1;
      line2El.textContent = nextDish.line2;
      if (priceTagEl) priceTagEl.textContent = nextDish.priceFormatted;
      if (servesPillEl) servesPillEl.textContent = nextDish.serves;
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
      if (triggerSync) syncWithFullMenu(nextDish.id);
      isAnimating = false;
      return;
    }

    // Prepare next plate image & ensure visible
    nextPlateImg.src = nextDish.img;
    nextPlateImg.alt = nextDish.line1 + ' ' + nextDish.line2;

    const tl = gsap.timeline({
      onComplete: () => {
        currentPlateImg.src = nextDish.img;
        currentPlateImg.alt = nextDish.line1 + ' ' + nextDish.line2;

        gsap.set(currentOrbit, { rotation: 0, opacity: 1 });
        gsap.set(currentPlateImg, { rotation: 0, scale: 1, filter: 'drop-shadow(0 35px 50px rgba(40, 30, 20, 0.28))' });
        gsap.set(nextOrbit, { rotation: isForward ? 45 : -45, opacity: 0 });
        gsap.set(nextPlateImg, { rotation: 0 });

        currentIndex = newIndex;
        isAnimating = false;
        if (triggerSync) syncWithFullMenu(nextDish.id);
        resetAutoplay();
      }
    });

    // A. Plate "orbit swap"
    const outOrbitAngle = isForward ? -45 : 45;
    const outSpinAngle = isForward ? -150 : 150;
    const inStartAngle = isForward ? 45 : -45;
    const inSpinStart = isForward ? 200 : -200;

    gsap.set(nextOrbit, { rotation: inStartAngle, opacity: 1 });
    gsap.set(nextPlateImg, { rotation: inSpinStart, scale: 0.92, filter: 'blur(6px) drop-shadow(0 35px 50px rgba(40, 30, 20, 0.28))' });

    // Outgoing Plate Animation (0 -> 0.75s)
    tl.to(currentOrbit, {
      rotation: outOrbitAngle,
      duration: 0.75,
      ease: 'power2.in'
    }, 0);

    tl.to(currentPlateImg, {
      rotation: outSpinAngle,
      filter: 'blur(6px) drop-shadow(0 35px 50px rgba(40, 30, 20, 0.28))',
      duration: 0.75,
      ease: 'power2.in'
    }, 0);

    // Incoming Plate Animation (0.30 -> 1.15s)
    tl.to(nextOrbit, {
      rotation: 0,
      duration: 0.85,
      ease: 'power3.out'
    }, 0.30);

    tl.to(nextPlateImg, {
      rotation: 0,
      scale: 1,
      filter: 'blur(0px) drop-shadow(0 35px 50px rgba(40, 30, 20, 0.28))',
      duration: 0.85,
      ease: 'power3.out'
    }, 0.30);

    // B. Title Mask Wipes
    tl.to(eyebrowEl, { clipPath: 'inset(0 100% 0 0)', duration: 0.35, ease: 'power2.in' }, 0);
    tl.to(line1El, { clipPath: 'inset(0 0 0 100%)', duration: 0.40, ease: 'power2.in' }, 0.04);
    tl.to(line2El, { clipPath: 'inset(0 100% 0 0)', duration: 0.40, ease: 'power2.in' }, 0.08);

    // Content Swap at mid-point (0.45s)
    tl.call(() => {
      eyebrowEl.textContent = '#' + nextDish.rank + ' ' + (nextDish.category ? nextDish.category.toUpperCase() : 'SPECIAL');
      line1El.textContent = nextDish.line1;
      line2El.textContent = nextDish.line2;
      if (priceTagEl) priceTagEl.textContent = nextDish.priceFormatted;
      if (servesPillEl) servesPillEl.textContent = nextDish.serves;

      gsap.set(line1El, { clipPath: 'inset(0 0 0 100%)' });
      gsap.set(line2El, { clipPath: 'inset(0 100% 0 0)', x: 12 });
      gsap.set(eyebrowEl, { clipPath: 'inset(0 100% 0 0)' });
    }, null, 0.45);

    // Wipe In (0.75 -> 1.25s)
    tl.to(line1El, { clipPath: 'inset(0 0 0 0%)', duration: 0.50, ease: 'expo.out' }, 0.75);
    tl.to(line2El, { clipPath: 'inset(0 0% 0 0)', x: 0, duration: 0.50, ease: 'expo.out' }, 0.80);
    tl.to(eyebrowEl, { clipPath: 'inset(0 0% 0 0)', duration: 0.45, ease: 'expo.out' }, 0.85);

    // C. Info Card Transitions
    tl.to([ratingNumEl, chefNameEl, chefSubEl, descEl, likesCountEl], {
      opacity: 0,
      y: -6,
      duration: 0.25,
      ease: 'power1.in'
    }, 0);

    tl.call(() => {
      ratingNumEl.textContent = nextDish.rating;
      chefNameEl.textContent = nextDish.chef;
      chefSubEl.textContent = nextDish.chefSub;
      descEl.textContent = nextDish.desc;
      likesCountEl.textContent = nextDish.likes;
      renderIngredients(nextDish.ingredients);
    }, null, 0.35);

    tl.to(ratingBadgeEl, {
      backgroundColor: nextDish.badge,
      duration: 0.50,
      ease: 'power2.out'
    }, 0.30);

    tl.to([bandPrimary, bandSecondary], {
      backgroundColor: nextDish.band,
      duration: 0.70,
      ease: 'power2.out'
    }, 0.20);

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

    // Thumbnail strip active tile update
    updateActiveThumbnailTile(newIndex);
  }

  // Go to dish by ID (called when clicking a menu card below)
  function goToDishId(dishId) {
    const idx = dishes.findIndex(d => d.id === dishId);
    if (idx !== -1) {
      const dir = idx >= currentIndex ? 1 : -1;
      goToSlide(idx, dir, false);
      // Highlight card immediately
      syncWithFullMenu(dishId);
    }
  }

  // --- INGREDIENTS TAB RENDERER ---
  function renderIngredients(ingredients) {
    if (!ingredientsListEl) return;
    ingredientsListEl.innerHTML = `
      <div style="font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #111116; margin-bottom: 6px;">
        Portion Contents & Recipe
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

  // --- PAGE LOAD INTRO ANIMATION ---
  function playIntroAnimation() {
    if (typeof gsap === 'undefined') return;

    const initialDish = dishes[0];
    currentPlateImg.src = initialDish.img;
    currentPlateImg.alt = initialDish.line1 + ' ' + initialDish.line2;
    if (priceTagEl) priceTagEl.textContent = initialDish.priceFormatted;
    if (servesPillEl) servesPillEl.textContent = initialDish.serves;
    renderIngredients(initialDish.ingredients);
    updateActiveThumbnailTile(0, true);
    syncWithFullMenu(initialDish.id);

    // Initial state
    gsap.set(heroEl, { opacity: 0 });
    gsap.set([eyebrowEl, line1El, line2El], { opacity: 0, filter: 'blur(8px)' });
    gsap.set(currentOrbit, { rotation: -60, x: -80, y: -80 });
    gsap.set(currentPlateImg, { rotation: 360, filter: 'blur(8px) drop-shadow(0 35px 50px rgba(40,30,20,.28))' });
    gsap.set('.slider-info-card', { opacity: 0, y: 24 });
    gsap.set('.slider-action-row, .slider-thumbnails-strip, .slider-pager-nav, .slider-top-bar, .slider-dish-meta', { opacity: 0 });

    const introTl = gsap.timeline({ delay: 0.1 });

    introTl.to(heroEl, { opacity: 1, duration: 0.4, ease: 'power1.out' });
    introTl.to([eyebrowEl, line1El, line2El], { opacity: 1, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out' }, 0.2);
    introTl.to(currentOrbit, { rotation: 0, x: 0, y: 0, duration: 1.0, ease: 'power3.out' }, 0.35);
    introTl.to(currentPlateImg, { rotation: 0, filter: 'blur(0px) drop-shadow(0 35px 50px rgba(40, 30, 20, 0.28))', duration: 1.0, ease: 'power3.out' }, 0.35);
    introTl.to('.slider-info-card', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.75);
    introTl.to('.slider-top-bar, .slider-pager-nav, .slider-dish-meta, .slider-action-row, .slider-thumbnails-strip', {
      opacity: 1,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out'
    }, 0.85);

    // Floating idle breath
    gsap.to(currentPlateImg, {
      y: -4,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      delay: 1.8
    });
  }

  // Autoplay
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

  // Add current showcase dish to cart
  function addCurrentDishToCart() {
    const dish = dishes[currentIndex];
    if (window.OwitaApp && window.OwitaApp.addToCart) {
      window.OwitaApp.addToCart(dish.id);
    }
  }

  // Scroll smoothly down to the full menu grid
  function scrollToFullMenu() {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Initialize event listeners
  function initEvents() {
    // Thumbnails
    thumbItems.forEach((thumb, idx) => {
      thumb.addEventListener('click', () => {
        const dir = idx >= currentIndex ? 1 : -1;
        goToSlide(idx, dir);
      });
    });

    // Pager dots
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

    // Showcase Add to Cart button
    const orderBtn = document.getElementById('showcaseOrderBtn');
    if (orderBtn) {
      orderBtn.addEventListener('click', addCurrentDishToCart);
    }

    const scrollMenuBtn = document.getElementById('showcaseScrollMenuBtn');
    if (scrollMenuBtn) {
      scrollMenuBtn.addEventListener('click', scrollToFullMenu);
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

    // Wheel debounce
    let lastWheelTime = 0;
    heroEl.addEventListener('wheel', (e) => {
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

    // Touch swipe
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

    // Card tabs
    document.querySelectorAll('.card-tab').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        switchCardTab(tabBtn.dataset.tab);
      });
    });

    // Hover pause
    const cardEl = document.querySelector('.slider-info-card');
    const stripEl = document.querySelector('.slider-thumbnails-strip');
    [cardEl, stripEl].forEach(el => {
      if (!el) return;
      el.addEventListener('mouseenter', stopAutoplay);
      el.addEventListener('mouseleave', resetAutoplay);
    });

    // Resize
    window.addEventListener('resize', () => {
      updateActiveThumbnailTile(currentIndex, true);
    });
  }

  function init() {
    initEvents();
    playIntroAnimation();
    startAutoplay();
  }

  // Global export
  window.OwitaSlider = {
    init,
    goToSlide,
    goToDishId,
    addCurrentDishToCart,
    scrollToFullMenu,
    switchCardTab,
    syncWithFullMenu
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 50);
  }

})();
