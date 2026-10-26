/**
 * THE UNUSUAL — EXPERIMENTAL RUNWAY SHOWCASE
 * Scroll-Scrubbed Runway Direction Engine
 * Using GSAP & ScrollTrigger with Pure Mathematical Precision
 */

(function () {
  'use strict';

  // State Management
  const state = {
    looks: RUNWAY_LOOKS,
    currentLookIndex: 0,
    totalLooks: RUNWAY_LOOKS.length,
    isIdlePaused: false,
    hoveredCardIndex: null,
    scrollProgress: 0,
    segmentProgress: 0,
    focusLineY: window.innerHeight * 0.4
  };

  // DOM Elements Cache
  const DOM = {
    scrollTrack: document.getElementById('unusualScrollTrack'),
    stageFixed: document.getElementById('unusualStageFixed'),
    // Left column
    seasonLabel: document.getElementById('seasonLabel'),
    lookCounterCurrent: document.getElementById('lookCounterCurrent'),
    lookCounterTotal: document.getElementById('lookCounterTotal'),
    lookTitle: document.getElementById('lookTitle'),
    lookDesigner: document.getElementById('lookDesigner'),
    lookDesc: document.getElementById('lookDesc'),
    lookMaterials: document.getElementById('lookMaterials'),
    progressFill: document.getElementById('progressFill'),
    // Center stage
    spotlight: document.getElementById('stageSpotlight'),
    ghostLeft: document.getElementById('ghostLeft'),
    ghostRight: document.getElementById('ghostRight'),
    ghostLeftImg: document.querySelector('#ghostLeft img'),
    ghostRightImg: document.querySelector('#ghostRight img'),
    mainModelImg: document.getElementById('mainModelImg'),
    incomingModelImg: document.getElementById('incomingModelImg'),
    mainModelFigure: document.getElementById('mainModelFigure'),
    floorReflectionImg: document.querySelector('#floorReflection img'),
    fabricWipeCurtain: document.getElementById('fabricWipeCurtain'),
    colorFloodDisc: document.getElementById('colorFloodDisc'),
    transitionCanvas: document.getElementById('transitionCanvas'),
    threadCanvas: document.getElementById('threadCanvas'),
    idleToggleBtn: document.getElementById('idleToggleBtn'),
    idleToggleText: document.getElementById('idleToggleText'),
    // Right rail
    railScrollLane: document.getElementById('railScrollLane'),
    // Custom cursor
    customCursor: document.getElementById('customCursor'),
    cursorText: document.getElementById('cursorText'),
    // Intro curtain
    introCurtain: document.getElementById('introCurtain')
  };

  // Set total counter
  DOM.lookCounterTotal.textContent = `0${state.totalLooks}`;
  DOM.scrollTrack.style.height = `${state.totalLooks * 100}vh`;

  // Canvas 2D Contexts
  const transCtx = DOM.transitionCanvas.getContext('2d');
  const threadCtx = DOM.threadCanvas.getContext('2d');

  function resizeCanvases() {
    DOM.transitionCanvas.width = DOM.transitionCanvas.clientWidth;
    DOM.transitionCanvas.height = DOM.transitionCanvas.clientHeight;
    DOM.threadCanvas.width = window.innerWidth;
    DOM.threadCanvas.height = window.innerHeight;
    state.focusLineY = window.innerHeight * 0.4;
  }
  window.addEventListener('resize', resizeCanvases);
  resizeCanvases();

  // --------------------------------------------------------------------------
  // 1. RENDER RIGHT RAIL CARDS
  // --------------------------------------------------------------------------
  function buildRightRail() {
    DOM.railScrollLane.innerHTML = '';
    state.looks.forEach((look, index) => {
      const card = document.createElement('div');
      card.className = `runway-card ${index === 0 ? 'active' : ''}`;
      card.dataset.index = index;
      card.style.setProperty('--card-accent', look.accentColor);
      card.style.setProperty('--card-glow', `${look.accentColor}40`);

      card.innerHTML = `
        <div class="card-thumb-wrap">
          <img src="${look.thumbnail}" alt="${look.title}" loading="lazy">
        </div>
        <div class="card-meta-wrap">
          <div class="card-num-season">
            <span>Look ${look.lookNumber}</span>
            <span>${look.season.split(' ')[0]}</span>
          </div>
          <h4 class="card-title-text">${look.title}</h4>
          <span class="card-designer-text">${look.designerName}</span>
          <div class="card-action-row">
            <span class="card-status-badge">${look.price}</span>
            <span class="card-link-view">View Look →</span>
          </div>
        </div>
      `;

      // Click to smooth scroll directly to this look
      card.addEventListener('click', () => {
        scrollToLook(index);
      });

      // Hover to draw glowing thread
      card.addEventListener('mouseenter', () => {
        state.hoveredCardIndex = index;
        DOM.customCursor.classList.add('hovered');
        DOM.cursorText.textContent = 'View';
      });

      card.addEventListener('mouseleave', () => {
        state.hoveredCardIndex = null;
        DOM.customCursor.classList.remove('hovered');
        DOM.cursorText.textContent = 'Scroll';
      });

      DOM.railScrollLane.appendChild(card);
    });
  }

  // Smooth Scroll directly to a specific look index
  function scrollToLook(targetIndex) {
    const scrollMax = DOM.scrollTrack.offsetHeight - window.innerHeight;
    const targetScrollY = (targetIndex / (state.totalLooks - 1)) * scrollMax;
    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  }

  // --------------------------------------------------------------------------
  // 2. STAGE UPDATES & TEXT MASK REVEAL
  // --------------------------------------------------------------------------
  function updateStageLook(index, force = false) {
    if (state.currentLookIndex === index && !force) return;
    state.currentLookIndex = index;
    const currentLook = state.looks[index];

    // 1. Update Accent Glow Colors
    document.documentElement.style.setProperty('--accent-color', currentLook.accentColor);
    document.documentElement.style.setProperty('--accent-glow', `${currentLook.accentColor}35`);

    // 2. Counter split-flap animation
    DOM.lookCounterCurrent.style.transform = 'translateY(-100%)';
    setTimeout(() => {
      DOM.lookCounterCurrent.textContent = currentLook.lookNumber;
      DOM.lookCounterCurrent.style.transform = 'translateY(0%)';
    }, 150);

    // 3. Mask-reveal left column text
    const textLines = [DOM.lookTitle, DOM.lookDesigner, DOM.lookDesc, DOM.lookMaterials];
    textLines.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
    });

    setTimeout(() => {
      DOM.seasonLabel.textContent = currentLook.season;
      DOM.lookTitle.textContent = currentLook.title;
      DOM.lookDesigner.textContent = currentLook.designerName;
      DOM.lookDesc.textContent = currentLook.description;
      DOM.lookMaterials.textContent = `Materials: ${currentLook.materials}`;

      textLines.forEach((el, i) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, i * 40);
      });
    }, 200);

    // 4. Update Main Center Model & Floor Reflection
    DOM.mainModelImg.src = currentLook.modelMedia;
    DOM.mainModelImg.alt = currentLook.title;
    DOM.floorReflectionImg.src = currentLook.modelMedia;

    // 5. Update Ghosts (previous and next)
    const prevIdx = index > 0 ? index - 1 : null;
    const nextIdx = index < state.totalLooks - 1 ? index + 1 : null;

    if (prevIdx !== null) {
      DOM.ghostLeft.style.display = 'block';
      DOM.ghostLeftImg.src = state.looks[prevIdx].modelMedia;
    } else {
      DOM.ghostLeft.style.display = 'none';
    }

    if (nextIdx !== null) {
      DOM.ghostRight.style.display = 'block';
      DOM.ghostRightImg.src = state.looks[nextIdx].modelMedia;
    } else {
      DOM.ghostRight.style.display = 'none';
    }

    // 6. Update Active Card Class
    const cards = DOM.railScrollLane.querySelectorAll('.runway-card');
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. THE 6 CREATIVE TRANSITION ENGINES (Driven by progress 0 -> 1)
  // --------------------------------------------------------------------------
  /**
   * Transition 1: fabricWipe
   * A vertical strip of the incoming garment's fabric texture sweeps left to right.
   * The new model is revealed behind it using clip-path.
   */
  function applyFabricWipe(tProgress, currLook, nextLook) {
    if (tProgress <= 0) {
      DOM.fabricWipeCurtain.style.width = '0%';
      DOM.incomingModelImg.style.display = 'none';
      DOM.incomingModelImg.style.clipPath = 'none';
      return;
    }

    DOM.incomingModelImg.style.display = 'block';
    DOM.incomingModelImg.src = nextLook.modelMedia;

    // Sweep width across 0 -> 100%
    const sweepPercent = tProgress * 100;
    DOM.fabricWipeCurtain.style.backgroundImage = `url('${nextLook.fabricTexture}')`;
    DOM.fabricWipeCurtain.style.width = `${Math.min(100, sweepPercent + 5)}%`;

    // Clip-path reveals incoming model
    DOM.incomingModelImg.style.clipPath = `polygon(0 0, ${sweepPercent}% 0, ${sweepPercent}% 100%, 0 100%)`;

    if (tProgress >= 0.98) {
      DOM.fabricWipeCurtain.style.width = '0%';
    }
  }

  /**
   * Transition 2: spotlightCut
   * Stage dims to near-black, a spotlight sweeps across with a light flicker,
   * and the new model emerges from the dark.
   */
  function applySpotlightCut(tProgress, currLook, nextLook) {
    if (tProgress <= 0) {
      DOM.mainModelImg.style.filter = 'drop-shadow(0 18px 35px rgba(0,0,0,0.7))';
      DOM.incomingModelImg.style.display = 'none';
      return;
    }

    DOM.incomingModelImg.style.display = 'block';
    DOM.incomingModelImg.src = nextLook.modelMedia;

    if (tProgress < 0.5) {
      // Dim outgoing model and spotlight
      const dim = 1 - tProgress * 2;
      DOM.mainModelImg.style.opacity = `${dim}`;
      DOM.mainModelImg.style.filter = `brightness(${dim * 0.4})`;
      DOM.spotlight.style.opacity = `${dim * 0.2}`;
      DOM.incomingModelImg.style.opacity = '0';
    } else {
      // Strobe spotlight flicker and illuminate incoming model
      const lightRise = (tProgress - 0.5) * 2;
      const flicker = Math.random() > 0.3 ? 1 : 0.6; // subtle strobe flicker
      DOM.mainModelImg.style.opacity = '0';
      DOM.incomingModelImg.style.opacity = `${lightRise * flicker}`;
      DOM.incomingModelImg.style.filter = `brightness(${0.8 + lightRise * 0.4}) drop-shadow(0 18px 35px rgba(0,0,0,0.7))`;
      DOM.spotlight.style.opacity = `${lightRise}`;
    }
  }

  /**
   * Transition 3: threadUnravel
   * Outgoing outfit breaks into thin vertical thread-like particles on canvas
   * that float upward and re-weave into incoming outfit.
   */
  let threadParticles = [];
  function initThreadParticles() {
    threadParticles = [];
    const w = DOM.transitionCanvas.width;
    const h = DOM.transitionCanvas.height;
    for (let i = 0; i < 90; i++) {
      threadParticles.push({
        x: w * 0.35 + Math.random() * (w * 0.3),
        y: h * 0.2 + Math.random() * (h * 0.6),
        length: 12 + Math.random() * 28,
        speedY: -(2 + Math.random() * 4),
        alpha: 0.8
      });
    }
  }

  function applyThreadUnravel(tProgress, currLook, nextLook) {
    transCtx.clearRect(0, 0, DOM.transitionCanvas.width, DOM.transitionCanvas.height);

    if (tProgress <= 0 || tProgress >= 1) {
      DOM.incomingModelImg.style.display = 'none';
      DOM.mainModelImg.style.opacity = '1';
      return;
    }

    if (threadParticles.length === 0) initThreadParticles();

    DOM.incomingModelImg.style.display = 'block';
    DOM.incomingModelImg.src = nextLook.modelMedia;

    DOM.mainModelImg.style.opacity = `${1 - tProgress}`;
    DOM.incomingModelImg.style.opacity = `${tProgress}`;

    // Render floating thread lines
    transCtx.strokeStyle = nextLook.accentColor;
    transCtx.lineWidth = 1.5;
    transCtx.setLineDash([4, 4]);

    threadParticles.forEach((p) => {
      const currentY = (p.y + p.speedY * (tProgress * 40)) % DOM.transitionCanvas.height;
      transCtx.globalAlpha = Math.sin(tProgress * Math.PI) * 0.7;
      transCtx.beginPath();
      transCtx.moveTo(p.x, currentY);
      transCtx.lineTo(p.x, currentY + p.length);
      transCtx.stroke();
    });
    transCtx.setLineDash([]);
  }

  /**
   * Transition 4: silhouetteMorph
   * Outgoing model's silhouette morphs into incoming silhouette
   */
  function applySilhouetteMorph(tProgress, currLook, nextLook) {
    if (tProgress <= 0) {
      DOM.incomingModelImg.style.display = 'none';
      DOM.mainModelImg.style.filter = 'drop-shadow(0 18px 35px rgba(0,0,0,0.7))';
      return;
    }

    DOM.incomingModelImg.style.display = 'block';
    DOM.incomingModelImg.src = nextLook.modelMedia;

    if (tProgress < 0.5) {
      // Turn outgoing to dark solid silhouette
      const morphFactor = tProgress * 2;
      DOM.mainModelImg.style.filter = `brightness(${1 - morphFactor}) contrast(200%) blur(${morphFactor * 6}px)`;
      DOM.mainModelImg.style.opacity = `${1 - morphFactor * 0.6}`;
      DOM.incomingModelImg.style.opacity = '0';
    } else {
      // Morph incoming from silhouette back to illuminated garment
      const resolveFactor = (tProgress - 0.5) * 2;
      DOM.mainModelImg.style.opacity = '0';
      DOM.incomingModelImg.style.opacity = '1';
      DOM.incomingModelImg.style.filter = `brightness(${resolveFactor}) blur(${(1 - resolveFactor) * 6}px) drop-shadow(0 18px 35px rgba(0,0,0,0.7))`;
    }
  }

  /**
   * Transition 5: runwayWalk
   * Outgoing model slides/walks off to left while incoming model walks on from right,
   * scrubbed directly with scroll progress.
   */
  function applyRunwayWalk(tProgress, currLook, nextLook) {
    if (tProgress <= 0) {
      DOM.mainModelImg.style.transform = 'translateX(0%)';
      DOM.incomingModelImg.style.display = 'none';
      return;
    }

    DOM.incomingModelImg.style.display = 'block';
    DOM.incomingModelImg.src = nextLook.modelMedia;

    // Outgoing slides left and fades
    DOM.mainModelImg.style.transform = `translateX(-${tProgress * 80}%)`;
    DOM.mainModelImg.style.opacity = `${1 - tProgress * 0.9}`;

    // Incoming slides in from right
    DOM.incomingModelImg.style.transform = `translateX(${(1 - tProgress) * 80}%)`;
    DOM.incomingModelImg.style.opacity = `${tProgress}`;
  }

  /**
   * Transition 6: colorFlood
   * A circular ripple of the new look's accentColor expands from active card
   * across stage, then recedes to reveal new model.
   */
  function applyColorFlood(tProgress, currLook, nextLook) {
    if (tProgress <= 0) {
      DOM.colorFloodDisc.style.opacity = '0';
      DOM.incomingModelImg.style.display = 'none';
      return;
    }

    DOM.incomingModelImg.style.display = 'block';
    DOM.incomingModelImg.src = nextLook.modelMedia;

    // Center point of flood from right rail
    DOM.colorFloodDisc.style.left = '75%';
    DOM.colorFloodDisc.style.top = '40%';
    DOM.colorFloodDisc.style.backgroundColor = nextLook.accentColor;

    if (tProgress < 0.5) {
      const scale = tProgress * 180;
      DOM.colorFloodDisc.style.opacity = `${tProgress * 1.8}`;
      DOM.colorFloodDisc.style.transform = `translate(-50%, -50%) scale(${scale})`;
      DOM.mainModelImg.style.opacity = `${1 - tProgress * 2}`;
    } else {
      const recede = (1 - tProgress) * 2;
      DOM.colorFloodDisc.style.opacity = `${recede * 0.9}`;
      DOM.colorFloodDisc.style.transform = `translate(-50%, -50%) scale(${180 + (1 - recede) * 40})`;
      DOM.mainModelImg.style.opacity = '0';
      DOM.incomingModelImg.style.opacity = `${(tProgress - 0.5) * 2}`;
    }
  }

  // Master Transition Dispatcher
  function runTransition(type, progress, currLook, nextLook) {
    switch (type) {
      case 'fabricWipe':
        applyFabricWipe(progress, currLook, nextLook);
        break;
      case 'spotlightCut':
        applySpotlightCut(progress, currLook, nextLook);
        break;
      case 'threadUnravel':
        applyThreadUnravel(progress, currLook, nextLook);
        break;
      case 'silhouetteMorph':
        applySilhouetteMorph(progress, currLook, nextLook);
        break;
      case 'runwayWalk':
        applyRunwayWalk(progress, currLook, nextLook);
        break;
      case 'colorFlood':
        applyColorFlood(progress, currLook, nextLook);
        break;
      default:
        applyFabricWipe(progress, currLook, nextLook);
    }
  }

  // --------------------------------------------------------------------------
  // 4. SCROLL PROGRESS SCRUBBER ENGINE
  // --------------------------------------------------------------------------
  function onScroll() {
    const scrollY = window.scrollY;
    const trackHeight = DOM.scrollTrack.offsetHeight - window.innerHeight;
    if (trackHeight <= 0) return;

    // Global scroll progress (0 -> 1)
    const rawProgress = Math.min(1, Math.max(0, scrollY / trackHeight));
    state.scrollProgress = rawProgress;

    // Fill vertical progress bar
    DOM.progressFill.style.height = `${rawProgress * 100}%`;

    // Segment math: Divide total progress into equal segments, one per look
    const segmentCount = state.totalLooks - 1;
    const scaled = rawProgress * segmentCount;
    const currentBaseIndex = Math.min(state.totalLooks - 1, Math.floor(scaled));
    const nextIndex = Math.min(state.totalLooks - 1, currentBaseIndex + 1);

    // Progress within this look's segment (0 -> 1)
    const segmentProgress = scaled - currentBaseIndex;
    state.segmentProgress = segmentProgress;

    // 0–60%: Look is "held" (model shows idle loop, card active)
    // 60–100%: Transition scrubbed by scroll
    let transitionProgress = 0;
    if (segmentProgress > 0.6 && currentBaseIndex < state.totalLooks - 1) {
      transitionProgress = (segmentProgress - 0.6) / 0.4; // maps 0.6..1.0 -> 0..1
    }

    // Update Stage Elements
    const activeIndexForDisplay = segmentProgress > 0.75 ? nextIndex : currentBaseIndex;
    updateStageLook(activeIndexForDisplay);

    // Apply scrubbed creative transition
    if (currentBaseIndex < state.totalLooks - 1) {
      const currentLook = state.looks[currentBaseIndex];
      const nextLook = state.looks[nextIndex];
      runTransition(currentLook.transitionType, transitionProgress, currentLook, nextLook);

      // Ghost drift mechanics: As scrolling progresses (60->100%),
      // incoming ghost drifts toward center and sharpens
      if (transitionProgress > 0) {
        DOM.ghostRight.style.transform = `translateY(-50%) translateX(-${transitionProgress * 55}px)`;
        DOM.ghostRight.style.filter = `blur(${Math.max(0, 14 - transitionProgress * 14)}px) grayscale(${Math.max(0, 100 - transitionProgress * 100)}%)`;
        DOM.ghostRight.style.opacity = `${0.16 + transitionProgress * 0.4}`;
      } else {
        DOM.ghostRight.style.transform = 'translateY(-50%) translateX(0px)';
        DOM.ghostRight.style.filter = 'blur(14px) grayscale(100%)';
        DOM.ghostRight.style.opacity = '0.16';
      }
    } else {
      // Last look held clean
      DOM.incomingModelImg.style.display = 'none';
      DOM.mainModelImg.style.opacity = '1';
      DOM.mainModelImg.style.transform = 'none';
      DOM.mainModelImg.style.filter = 'drop-shadow(0 18px 35px rgba(0,0,0,0.7))';
    }

    // Right Rail Motion: moves upward as user scrolls so active card matches ~40% focus line
    syncRightRail(rawProgress);

    // Draw connecting thread if card is hovered
    drawConnectingThread();
  }

  // Synchronize Right Rail upward movement with Focus Line
  function syncRightRail(progress) {
    const cards = DOM.railScrollLane.querySelectorAll('.runway-card');
    if (cards.length === 0) return;

    const totalHeight = DOM.railScrollLane.scrollHeight - window.innerHeight * 0.6;
    const translateY = -progress * totalHeight;
    DOM.railScrollLane.style.transform = `translateY(${translateY}px)`;
  }

  // --------------------------------------------------------------------------
  // 5. HOVER CONNECTING THREAD (Right Rail -> Stage Model)
  // --------------------------------------------------------------------------
  function drawConnectingThread() {
    threadCtx.clearRect(0, 0, DOM.threadCanvas.width, DOM.threadCanvas.height);
    if (state.hoveredCardIndex === null) return;

    const cards = DOM.railScrollLane.querySelectorAll('.runway-card');
    const activeCard = cards[state.hoveredCardIndex];
    if (!activeCard) return;

    const cardRect = activeCard.getBoundingClientRect();
    const modelRect = DOM.mainModelImg.getBoundingClientRect();

    // Start from left edge of card
    const startX = cardRect.left;
    const startY = cardRect.top + cardRect.height / 2;

    // End at model waist/center
    const endX = modelRect.left + modelRect.width / 2;
    const endY = modelRect.top + modelRect.height * 0.55;

    // Draw glowing curved thread
    const cpX = (startX + endX) / 2;
    const cpY = Math.min(startY, endY) - 50;

    threadCtx.strokeStyle = state.looks[state.hoveredCardIndex].accentColor;
    threadCtx.lineWidth = 1.5;
    threadCtx.setLineDash([6, 5]);

    threadCtx.beginPath();
    threadCtx.moveTo(startX, startY);
    threadCtx.quadraticCurveTo(cpX, cpY, endX, endY);
    threadCtx.stroke();
    threadCtx.setLineDash([]);
  }

  // --------------------------------------------------------------------------
  // 6. KEYBOARD NAVIGATION & ARROW KEYS
  // --------------------------------------------------------------------------
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      const next = Math.min(state.totalLooks - 1, state.currentLookIndex + 1);
      scrollToLook(next);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      const prev = Math.max(0, state.currentLookIndex - 1);
      scrollToLook(prev);
    }
  });

  // --------------------------------------------------------------------------
  // 7. CUSTOM CURSOR & IDLE BUTTON
  // --------------------------------------------------------------------------
  window.addEventListener('mousemove', (e) => {
    DOM.customCursor.style.left = `${e.clientX}px`;
    DOM.customCursor.style.top = `${e.clientY}px`;
  });

  // Idle Loop Toggle
  DOM.idleToggleBtn.addEventListener('click', () => {
    state.isIdlePaused = !state.isIdlePaused;
    if (state.isIdlePaused) {
      DOM.mainModelFigure.classList.remove('model-idle-loop');
      DOM.idleToggleText.textContent = 'Play Idle';
    } else {
      DOM.mainModelFigure.classList.add('model-idle-loop');
      DOM.idleToggleText.textContent = 'Pause Idle';
    }
  });

  // --------------------------------------------------------------------------
  // 8. INTRO CURTAIN OPEN ANIMATION
  // --------------------------------------------------------------------------
  function initIntro() {
    buildRightRail();
    updateStageLook(0, true);

    setTimeout(() => {
      DOM.introCurtain.classList.add('opened');
      DOM.mainModelFigure.classList.add('model-idle-loop');
    }, 600);
  }

  // Scroll listener with RAF throttling
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Soft snapping after user stops scrolling
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      // If user stopped in middle of transition (0.4 to 0.8), snap softly
      const segmentProgress = state.segmentProgress;
      if (segmentProgress > 0.25 && segmentProgress < 0.75) {
        const snapTargetIndex = segmentProgress > 0.5
          ? Math.min(state.totalLooks - 1, state.currentLookIndex + 1)
          : state.currentLookIndex;
        scrollToLook(snapTargetIndex);
      }
    }, 280);
  }, { passive: true });

  // Initialize on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIntro);
  } else {
    initIntro();
  }

})();
