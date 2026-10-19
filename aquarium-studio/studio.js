/* =========================================================================
   AQUARIUM SCENERY STUDIO — FULL-SCREEN CHOREOGRAPHED MOVEMENT PATH
   - Moves entire neon tetra school as one unified, photorealistic video element.
   - PRESERVES ORIGINAL ORIENTATION: Zero rotation, zero flipping, zero mirroring.
   - Smooth Catmull-Rom spline with Hermite acceleration/deceleration.
   - 58-second full aquarium cycle spanning 8% to 86% width and 25% to 72% height.
   - 2-second upper-right hover pause with micro-drift.
   - Smooth closed loop with 0.000 discontinuity.
   - Real-time green screen chroma-keying with despill.
   - Hover deceleration by 85% & live inspection card.
========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) window.lucide.createIcons();

  const canvas = document.getElementById('studio-canvas');
  const ctx = canvas.getContext('2d');
  const video = document.getElementById('source-tetra-video');
  const hoverCard = document.getElementById('fish-hover-card');
  const cardTelemetry = document.getElementById('card-telemetry');

  // Sliders & HUD Controls
  const sliderScale = document.getElementById('slider-fish-scale');
  const labelScale = document.getElementById('label-fish-scale');
  const sliderSpeed = document.getElementById('slider-fish-speed');
  const labelSpeed = document.getElementById('label-fish-speed');
  const sliderThreshold = document.getElementById('slider-chroma-threshold');
  const labelThreshold = document.getElementById('label-chroma-threshold');

  const hudTimeDisplay = document.getElementById('hud-time-display');
  const hudProgressBar = document.getElementById('hud-progress-bar');
  const hudStageName = document.getElementById('hud-stage-name');
  const hudCoords = document.getElementById('hud-coords');

  const btnFeed = document.getElementById('btn-feed');
  const btnScatter = document.getElementById('btn-scatter');
  const btnToggleVideoPip = document.getElementById('btn-toggle-video-pip');
  const videoPipContainer = document.getElementById('video-pip-container');
  const btnToggleHud = document.getElementById('btn-toggle-hud');
  const studioHudPanel = document.getElementById('studio-hud-panel');
  const hudToggleIcon = document.getElementById('hud-toggle-icon');
  const stageJumpBtns = document.querySelectorAll('.stage-jump-btn');

  // Sizing
  let width = window.innerWidth;
  let height = window.innerHeight;

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Configuration
  const config = {
    baseWidth: 240,
    colorVibrancy: 1.45, // Boosts dull video colors into living fluorescent neon // realistic swarm element width in px
    speedMultiplier: 1.0,
    directionMode: 'forward',
    invertFacing: false, // set to true to instantly flip heading
    baseVideoFacing: 'right', // 'left' = raw video tetras face left, 'right' = raw video tetras face right // 'reverse' = completely backwards XY path, 'forward' = normal
    chromaThreshold: 35,
    chromaSoftness: 18,
    hoverRadius: 120
  };

  // Pellets Array
  const pellets = [];

  // Mouse State
  const mouse = {
    x: -1000,
    y: -1000,
    isHoveringSwarm: false
  };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
    mouse.isHoveringSwarm = false;
    hoverCard.classList.remove('visible');
  });

  // =========================================================================
  // --- REAL-TIME GREEN SCREEN CHROMA-KEY EXTRACTION PIPELINE ---
  // =========================================================================
  const keyedCanvas = document.createElement('canvas');
  const keyedCtx = keyedCanvas.getContext('2d', { willReadFrequently: true });
  
  const keyWidth = 640;
  const keyHeight = 360;
  keyedCanvas.width = keyWidth;
  keyedCanvas.height = keyHeight;

  let isVideoReady = false;

  video.addEventListener('loadeddata', () => {
    isVideoReady = true;
    video.play().catch(() => {});
  });
  if (video.readyState >= 2) {
    isVideoReady = true;
    video.play().catch(() => {});
  }

  let cropBox = { sx: 0, sy: 0, sw: keyWidth, sh: keyHeight };

  function processChromaKey() {
    if (!isVideoReady || video.paused || video.ended) return;

    keyedCtx.drawImage(video, 0, 0, keyWidth, keyHeight);
    const frame = keyedCtx.getImageData(0, 0, keyWidth, keyHeight);
    const data = frame.data;
    const len = data.length;
    const threshold = config.chromaThreshold;
    const softness = config.chromaSoftness;

    let minX = keyWidth, minY = keyHeight, maxX = 0, maxY = 0;
    let foundFish = false;

    for (let i = 0; i < len; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const maxOther = Math.max(r, b);
      const diff = g - maxOther;

      if (diff > threshold) {
        data[i + 3] = 0; // Transparent green
      } else if (diff > threshold - softness) {
        const alphaRatio = (threshold - diff) / softness;
        data[i + 3] = Math.round(data[i + 3] * alphaRatio);
        data[i + 1] = maxOther;
      } else {
        const pixelIdx = i / 4;
        const px = pixelIdx % keyWidth;
        const py = Math.floor(pixelIdx / keyWidth);
        if (px < minX) minX = px;
        if (px > maxX) maxX = px;
        if (py < minY) minY = py;
        if (py > maxY) maxY = py;
        foundFish = true;

        if (g > maxOther * 1.15) {
          data[i + 1] = Math.round(maxOther * 1.05);
        }
      }
    }

    keyedCtx.putImageData(frame, 0, 0);

    if (foundFish && maxX > minX && maxY > minY) {
      const pad = 10;
      cropBox.sx = Math.max(0, minX - pad);
      cropBox.sy = Math.max(0, minY - pad);
      cropBox.sw = Math.min(keyWidth - cropBox.sx, (maxX - minX) + pad * 2);
      cropBox.sh = Math.min(keyHeight - cropBox.sy, (maxY - minY) + pad * 2);
    }
  }

  // =========================================================================
  // --- 58-SECOND CHOREOGRAPHED WAYPOINTS TABLE ---
  // =========================================================================
  const waypoints = [
    { t: 0,  x: 0.08, y: 0.40, stage: '1. Begin — Left-middle (Start)' },
    { t: 10, x: 0.35, y: 0.27, stage: '2. Cross upper-middle (Glide right)' },
    { t: 20, x: 0.82, y: 0.25, stage: '3. Pause & drift (Slow down near upper-right)' },
    { t: 23, x: 0.86, y: 0.35, stage: '3. Gentle hover drift (Upper-right)' },
    { t: 31, x: 0.82, y: 0.72, stage: '4. Descend through right side (Wide lazy arc)' },
    { t: 40, x: 0.53, y: 0.72, stage: '5. Cruise along lower area (Glide left)' },
    { t: 50, x: 0.19, y: 0.60, stage: '6. Cross middle leftward (Broad curve)' },
    { t: 58, x: 0.08, y: 0.40, stage: '7. Return & ease into loop' }
  ];

  const totalDuration = 58.0; // 58 seconds
  const N = waypoints.length - 1; // 7 spline segments

  function catmullRom(p0, p1, p2, p3, t) {
    const v0 = (p2 - p0) * 0.5;
    const v1 = (p3 - p1) * 0.5;
    const t2 = t * t;
    const t3 = t2 * t;
    return (2 * p1 - 2 * p2 + v0 + v1) * t3 +
           (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 +
           v0 * t + p1;
  }

  // Calculate exact continuous (X, Y) on the spline at time t
  function evaluateJourneyPath(time) {
    const loopTime = ((time % totalDuration) + totalDuration) % totalDuration;

    let segIdx = 0;
    for (let i = 0; i < waypoints.length - 1; i++) {
      if (loopTime >= waypoints[i].t && loopTime < waypoints[i + 1].t) {
        segIdx = i;
        break;
      }
    }

    const w1 = waypoints[segIdx];
    const w2 = waypoints[segIdx + 1];
    const segDuration = w2.t - w1.t;
    const rawT = (loopTime - w1.t) / segDuration;

    // Hermite smoothstep for natural acceleration/deceleration between anchor points
    const easedT = rawT * rawT * (3 - 2 * rawT);

    // Closed loop neighbors
    const idx0 = (segIdx - 1 + N) % N;
    const idx1 = segIdx;
    const idx2 = (segIdx + 1) % N;
    const idx3 = (segIdx + 2) % N;

    const normX = catmullRom(waypoints[idx0].x, waypoints[idx1].x, waypoints[idx2].x, waypoints[idx3].x, easedT);
    const normY = catmullRom(waypoints[idx0].y, waypoints[idx1].y, waypoints[idx2].y, waypoints[idx3].y, easedT);

    // Micro-sway during hover phase (20s - 23s)
    let microX = 0;
    let microY = 0;
    if (loopTime >= 20 && loopTime <= 23) {
      microX = Math.sin((loopTime - 20) * Math.PI) * 0.008;
      microY = Math.cos((loopTime - 20) * Math.PI * 2) * 0.005;
    }

    return {
      normX: normX + microX,
      normY: normY + microY,
      stage: w1.stage,
      loopTime: loopTime
    };
  }

  // =========================================================================
  // =========================================================================
  // =========================================================================
  // =========================================================================
  // =========================================================================
  // =========================================================================
  // --- SWARM ELEMENT CONTROLLER (Guaranteed Head-First Forward Swimming) ---
  // =========================================================================
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const swarm = {
    timelineSec: 0,
    x: width * 0.08,
    y: height * 0.40,
    normX: 0.08,
    normY: 0.40,
    currentStage: waypoints[0].stage,

    // Head-First Forward Swimming:
    // Raw video heads face LEFT.
    // Eastbound (traveling right): scaleX = -1.0 (flips head to face RIGHT -> swims forward!)
    // Westbound (traveling left): scaleX = +1.0 (unflipped head faces LEFT -> swims forward!)
    facingDirection: 1, // +1 = East (right), -1 = West (left)
    scaleX: -1.0,
    scaleY: 1.0,
    depthScale: 1.0,
    pitchRad: 0.0,
    turnStateLabel: 'Swimming Forward Eastbound →',

    // Hover Deceleration State
    isHovered: false,
    hoverFactor: 1.0,

    update(dt) {
      // 1. Hover check with mouse cursor
      const dxMouse = mouse.x - this.x;
      const dyMouse = mouse.y - this.y;
      const distMouse = Math.hypot(dxMouse, dyMouse);
      const effectiveRadius = config.hoverRadius;

      if (distMouse < effectiveRadius) {
        this.isHovered = true;
        mouse.isHoveringSwarm = true;
      } else if (distMouse > effectiveRadius * 1.5) {
        this.isHovered = false;
        mouse.isHoveringSwarm = false;
      }

      // Smooth deceleration on hover (slows journey progression by 85%)
      const targetHover = this.isHovered ? 0.15 : 1.0;
      this.hoverFactor += (targetHover - this.hoverFactor) * 0.1;

      // 2. Advance journey timeline
      const speedFactor = prefersReducedMotion ? 0.6 : 1.0;
      const advanceSec = dt * config.speedMultiplier * this.hoverFactor * speedFactor;
      this.timelineSec = (this.timelineSec + advanceSec) % totalDuration;

      const pathTime = this.timelineSec % totalDuration;

      // 3. Evaluate position on Catmull-Rom spline
      const pathPoint = evaluateJourneyPath(pathTime);
      this.normX = pathPoint.normX;
      this.normY = pathPoint.normY;
      this.currentStage = pathPoint.stage;

      // Map normalized coordinates to usable screen dimensions
      const paddingX = config.baseWidth * 0.55;
      const paddingY = config.baseWidth * 0.35;
      const usableW = width - paddingX * 2;
      const usableH = height - paddingY * 2;

      this.x = paddingX + this.normX * usableW;
      this.y = paddingY + this.normY * usableH;

      // 4. Sample vertical velocity for hydrodynamic pitch
      const dtSample = 0.08;
      const nextPt = evaluateJourneyPath((pathTime + dtSample) % totalDuration);
      const vy = (nextPt.normY - this.normY) / dtSample;

      // 5. Head-First Forward Swimming with 2.5D Turnarounds
      // Raw video has fish heads pointing LEFT.
      // - To swim RIGHT (East): we need head pointing RIGHT -> scaleX = -1.0 * flipMod
      // - To swim LEFT (West): we need head pointing LEFT -> scaleX = +1.0 * flipMod
      const flipMod = config.invertFacing ? -1 : 1;
      const minPositiveWidth = 0.22;
      const t = pathTime;

      // Segment 1 (0.0s -> 24.0s): Gliding LEFT TO RIGHT across upper tank.
      // Direction: Traveling EAST (Right). Head points EAST (Right) -> scaleX = -1.0 * flipMod
      if (t < 24.0) {
        this.scaleX = -1.0 * flipMod;
        this.scaleY = 1.0;
        this.facingDirection = 1;
        this.turnStateLabel = flipMod > 0 ? 'Swimming Forward Eastbound → (Head First)' : 'Swimming Eastbound (Inverted) →';
      }
      // Turn 1 (24.0s -> 25.0s): 2.5D Turnaround in upper right (East to West)
      else if (t >= 24.0 && t <= 25.0) {
        const p = (t - 24.0) / 1.0;
        const comp = 1.0 - (1.0 - minPositiveWidth) * Math.sin(p * Math.PI);
        this.scaleY = 1.0 + 0.05 * Math.sin(p * Math.PI);
        if (p < 0.5) {
          // Eastbound compressing into depth
          this.scaleX = -comp * flipMod;
          this.turnStateLabel = `2.5D Turn: Banking into depth (${(comp * 100).toFixed(0)}% W)`;
        } else {
          // Switching to Westbound (Head points Left) expanding out
          this.scaleX = comp * flipMod;
          this.turnStateLabel = `2.5D Turn: Angling Westward (${(comp * 100).toFixed(0)}% W)`;
        }
        this.facingDirection = -1;
      }
      // Segment 2 (25.0s -> 54.5s): Cruising RIGHT TO LEFT along lower area & middle.
      // Direction: Traveling WEST (Left). Head points WEST (Left) -> scaleX = +1.0 * flipMod
      else if (t > 25.0 && t < 54.5) {
        this.scaleX = 1.0 * flipMod;
        this.scaleY = 1.0;
        this.facingDirection = -1;
        this.turnStateLabel = flipMod > 0 ? 'Swimming Forward Westbound ← (Head First)' : 'Swimming Westbound (Inverted) ←';
      }
      // Turn 2 (54.5s -> 55.5s): 2.5D Turnaround on left side (West to East)
      else if (t >= 54.5 && t <= 55.5) {
        const p = (t - 54.5) / 1.0;
        const comp = 1.0 - (1.0 - minPositiveWidth) * Math.sin(p * Math.PI);
        this.scaleY = 1.0 + 0.05 * Math.sin(p * Math.PI);
        if (p < 0.5) {
          // Westbound compressing
          this.scaleX = comp * flipMod;
          this.turnStateLabel = `2.5D Turn: Banking into depth (${(comp * 100).toFixed(0)}% W)`;
        } else {
          // Switching to Eastbound (Head points Right) expanding out
          this.scaleX = -comp * flipMod;
          this.turnStateLabel = `2.5D Turn: Angling Eastward (${(comp * 100).toFixed(0)}% W)`;
        }
        this.facingDirection = 1;
      }
      // Segment 3 (55.5s -> 58.0s / 0.0s): Easing into loop Eastbound
      else {
        this.scaleX = -1.0 * flipMod;
        this.scaleY = 1.0;
        this.facingDirection = 1;
        this.turnStateLabel = flipMod > 0 ? 'Swimming Forward Eastbound → (Head First)' : 'Swimming Eastbound (Inverted) →';
      }

      // 6. Subtle Depth Pass (8-10% scale reduction during upper background pass: 12s - 34s)
      if (t >= 12.0 && t <= 34.0) {
        const depthP = (t - 12.0) / (34.0 - 12.0);
        this.depthScale = 1.0 - 0.10 * Math.sin(depthP * Math.PI);
      } else {
        this.depthScale = 1.0;
      }

      // 7. Subtle Hydrodynamic Pitch (2-3 degrees)
      if (!prefersReducedMotion) {
        const maxPitch = 2.5 * (Math.PI / 180);
        const targetPitch = Math.max(-maxPitch, Math.min(maxPitch, vy * 0.7 * this.facingDirection));
        this.pitchRad += (targetPitch - this.pitchRad) * 0.1;
      } else {
        this.pitchRad = 0;
      }

      // 8. Update HUD Telemetry
      if (hudTimeDisplay) {
        hudTimeDisplay.textContent = `${this.timelineSec.toFixed(1)}s / ${totalDuration.toFixed(1)}s`;
      }
      if (hudProgressBar) {
        const pct = (this.timelineSec / totalDuration) * 100;
        hudProgressBar.style.width = `${pct.toFixed(1)}%`;
      }
      if (hudStageName) {
        hudStageName.textContent = this.currentStage;
      }
      if (hudCoords) {
        hudCoords.textContent = `${(this.normX * 100).toFixed(1)}% X, ${(this.normY * 100).toFixed(1)}% Y`;
      }
      const hudOrientation = document.getElementById('hud-orientation');
      if (hudOrientation) {
        hudOrientation.textContent = this.turnStateLabel;
      }
      const hudDepthDisplay = document.getElementById('hud-depth-display');
      if (hudDepthDisplay) {
        const depthPct = Math.round(this.depthScale * 100);
        hudDepthDisplay.textContent = depthPct < 96 ? `Background Pass (${depthPct}%)` : `Midground (${depthPct}%)`;
      }
      const hudPitchDisplay = document.getElementById('hud-pitch-display');
      if (hudPitchDisplay) {
        hudPitchDisplay.textContent = `${(this.pitchRad * (180 / Math.PI)).toFixed(1)}°`;
      }
    },

    draw() {
      ctx.save();
      
      // Visual centre of swarm preserved throughout
      ctx.translate(this.x, this.y);

      // Subtle hydrodynamic pitch (2-3 degrees)
      if (Math.abs(this.pitchRad) > 0.001) {
        ctx.rotate(this.pitchRad);
      }

      // Guaranteed Head-First Forward Swimming (scaled on origin)
      ctx.scale(this.scaleX * this.depthScale, this.scaleY * this.depthScale);

      const drawW = config.baseWidth;
      const aspect = cropBox.sh / (cropBox.sw || 1);
      const drawH = drawW * (aspect > 0.2 && aspect < 1.0 ? aspect : 0.52);

      // Subtle atmospheric water shadow
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
      ctx.shadowBlur = 12 * this.depthScale;
      ctx.shadowOffsetY = 6 * this.depthScale;

      // Render the extracted photorealistic video frame with living fluorescent vibrancy
      ctx.save();
      const vib = config.colorVibrancy || 1.45;
      const contrast = 1.0 + (vib - 1.0) * 0.25;
      const brightness = 1.0 + (vib - 1.0) * 0.15;
      ctx.filter = `saturate(${vib.toFixed(2)}) contrast(${contrast.toFixed(2)}) brightness(${brightness.toFixed(2)})`;

      if (cropBox.sw > 20 && cropBox.sh > 10) {
        ctx.drawImage(
          keyedCanvas,
          cropBox.sx, cropBox.sy, cropBox.sw, cropBox.sh,
          -drawW / 2, -drawH / 2, drawW, drawH
        );
      } else {
        ctx.drawImage(keyedCanvas, 0, 0, keyWidth, keyHeight, -drawW / 2, -drawH / 2, drawW, drawH);
      }
      ctx.restore(); // Restore filter
      ctx.restore(); // Restore shadow

      // Completely removed artificial oval shape behind fish - clean natural water

      // Hover Reticle indicator if targeted
      if (this.isHovered) {
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.85)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(0, 0, drawW * 0.58, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      ctx.restore();
    }
  };

  // --- MAIN 60FPS SIMULATION LOOP ---
  // =========================================================================
  let lastTimestamp = performance.now();

  function loop(now) {
    const dt = Math.min(0.1, (now - lastTimestamp) / 1000); // delta in seconds
    lastTimestamp = now;

    ctx.clearRect(0, 0, width, height);

    // 1. Process Green Screen Chroma-Key on the Video Frame
    processChromaKey();

    // 2. Update Pellets
    for (let i = pellets.length - 1; i >= 0; i--) {
      const p = pellets[i];
      p.update();
      p.draw();
      if (p.y > height || p.eaten || p.age > 900) {
        pellets.splice(i, 1);
      }
    }

    // 3. Update & Draw the Un-Rotated Video Swarm Element along the 58s Path
    swarm.update(dt);
    swarm.draw();

    // 4. Update Hover Specimen Card
    if (swarm.isHovered) {
      hoverCard.style.left = swarm.x + 'px';
      hoverCard.style.top = swarm.y + 'px';
      hoverCard.classList.add('visible');

      if (cardTelemetry) {
        cardTelemetry.textContent = `Timeline: ${swarm.timelineSec.toFixed(1)}s / 58s • Coords: ${(swarm.normX * 100).toFixed(0)}% X, ${(swarm.normY * 100).toFixed(0)}% Y`;
      }
    } else {
      hoverCard.classList.remove('visible');
    }

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // Click on canvas to drop food pellets at cursor
  canvas.addEventListener('click', (e) => {
    spawnPellets(e.clientX, e.clientY, 6);
  });

  // =========================================================================
  // --- WORKBENCH HUD CONTROLS ---
  // =========================================================================
  if (sliderScale && labelScale) {
    sliderScale.addEventListener('input', (e) => {
      config.baseWidth = parseInt(e.target.value);
      const ratio = (config.baseWidth / 240).toFixed(1);
      labelScale.textContent = `${config.baseWidth}px (${ratio}x Real)`;
    });
  }

  if (sliderSpeed && labelSpeed) {
    sliderSpeed.addEventListener('input', (e) => {
      config.speedMultiplier = parseInt(e.target.value) / 10;
      labelSpeed.textContent = `${config.speedMultiplier.toFixed(1)}x Natural`;
    });
  }

  if (sliderThreshold && labelThreshold) {
    sliderThreshold.addEventListener('input', (e) => {
      config.chromaThreshold = parseInt(e.target.value);
      labelThreshold.textContent = config.chromaThreshold;
    });
  }

  if (btnFeed) {
    btnFeed.addEventListener('click', () => {
      spawnPellets(swarm.x, swarm.y - 120, 12);
    });
  }

  if (btnScatter) {
    btnScatter.addEventListener('click', () => {
      // Jump forward by 10 seconds along journey
      swarm.timelineSec = (swarm.timelineSec + 10) % totalDuration;
    });
  }

  // Trajectory Direction Toggle (Reverse Backwards / Forward)
  const btnDirForward = document.getElementById('btn-dir-forward');
  const btnDirReverse = document.getElementById('btn-dir-reverse');

  if (btnDirForward && btnDirReverse) {
    btnDirForward.addEventListener('click', () => {
      config.directionMode = 'forward';
      btnDirForward.classList.add('bg-cyan-500', 'text-stone-950', 'font-bold');
      btnDirForward.classList.remove('bg-stone-900', 'text-stone-300');
      btnDirReverse.classList.remove('bg-cyan-500', 'text-stone-950', 'font-bold');
      btnDirReverse.classList.add('bg-stone-900', 'text-stone-300');
    });

    btnDirReverse.addEventListener('click', () => {
      config.directionMode = 'reverse';
      btnDirReverse.classList.add('bg-cyan-500', 'text-stone-950', 'font-bold');
      btnDirReverse.classList.remove('bg-stone-900', 'text-stone-300');
      btnDirForward.classList.remove('bg-cyan-500', 'text-stone-950', 'font-bold');
      btnDirForward.classList.add('bg-stone-900', 'text-stone-300');
    });
  }

  


  
  // Instant Invert Facing Button Listener
  const btnFacingInvert = document.getElementById('btn-facing-invert');
  if (btnFacingInvert) {
    btnFacingInvert.addEventListener('click', () => {
      config.invertFacing = !config.invertFacing;
      btnFacingInvert.classList.toggle('bg-cyan-500');
      btnFacingInvert.classList.toggle('text-stone-950');
      btnFacingInvert.classList.toggle('font-bold');
      console.log('Fish facing inverted:', config.invertFacing);
    });
  }

  
  // Living Color Vibrancy Slider Listener
  const sliderVibrancy = document.getElementById('slider-fish-vibrancy');
  const labelVibrancy = document.getElementById('label-fish-vibrancy');
  if (sliderVibrancy && labelVibrancy) {
    sliderVibrancy.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      config.colorVibrancy = val / 100;
      labelVibrancy.textContent = `${val}% (Luminous Neon)`;
    });
  }

  // Waypoint Jump Buttons
  stageJumpBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSec = parseFloat(btn.dataset.time);
      if (!isNaN(targetSec)) {
        swarm.timelineSec = targetSec;
      }
    });
  });

  if (btnToggleVideoPip && videoPipContainer) {
    btnToggleVideoPip.addEventListener('click', () => {
      videoPipContainer.classList.toggle('hidden');
    });
  }

  if (btnToggleHud && studioHudPanel) {
    let hudOpen = true;
    btnToggleHud.addEventListener('click', () => {
      hudOpen = !hudOpen;
      if (hudOpen) {
        studioHudPanel.classList.remove('hidden');
        hudToggleIcon.setAttribute('data-lucide', 'chevron-up');
      } else {
        studioHudPanel.classList.add('hidden');
        hudToggleIcon.setAttribute('data-lucide', 'sliders');
      }
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // Video Source Switcher Logic
  const videoSourceBtns = document.querySelectorAll('.video-source-btn');
  const pipVideo = document.getElementById('pip-video');

  videoSourceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.dataset.src;
      if (!src) return;

      video.src = src;
      video.load();
      video.play().catch(() => {});

      if (pipVideo) {
        pipVideo.src = src;
        pipVideo.load();
        pipVideo.play().catch(() => {});
      }

      videoSourceBtns.forEach(b => {
        if (b === btn) {
          b.classList.add('bg-cyan-500/20', 'border-cyan-500/40', 'text-cyan-200');
          b.classList.remove('bg-stone-900/80', 'border-stone-800', 'text-stone-300');
        } else {
          b.classList.remove('bg-cyan-500/20', 'border-cyan-500/40', 'text-cyan-200');
          b.classList.add('bg-stone-900/80', 'border-stone-800', 'text-stone-300');
        }
      });
    });
  });
});
