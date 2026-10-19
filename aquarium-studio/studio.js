/* =========================================================================
   AQUARIUM SCENERY STUDIO — JAVASCRIPT ENGINE
   Real-Time Green Screen Chroma-Keying & Photorealistic Video Fish Extraction.
   World Path Translation across (X, Y) coordinates, Boids Flocking, & Hover.
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
  const sliderCount = document.getElementById('slider-fish-count');
  const labelCount = document.getElementById('label-fish-count');
  const sliderSpeed = document.getElementById('slider-fish-speed');
  const labelSpeed = document.getElementById('label-fish-speed');
  const sliderThreshold = document.getElementById('slider-chroma-threshold');
  const labelThreshold = document.getElementById('label-chroma-threshold');

  const btnFeed = document.getElementById('btn-feed');
  const btnScatter = document.getElementById('btn-scatter');
  const btnToggleVideoPip = document.getElementById('btn-toggle-video-pip');
  const videoPipContainer = document.getElementById('video-pip-container');
  const btnToggleHud = document.getElementById('btn-toggle-hud');
  const studioHudPanel = document.getElementById('studio-hud-panel');
  const hudToggleIcon = document.getElementById('hud-toggle-icon');

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
    baseLength: 55, // realistic Neon Tetra length in px
    targetCount: 12,
    speedMultiplier: 1.0,
    flockingMultiplier: 1.0,
    hoverRadius: 60,
    margin: 90,
    chromaThreshold: 35, // green distance threshold
    chromaSoftness: 18    // edge feathering
  };

  // Pellets Array
  const pellets = [];

  // Mouse State
  const mouse = {
    x: -1000,
    y: -1000,
    hoveredFish: null
  };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
    mouse.hoveredFish = null;
    hoverCard.classList.remove('visible');
  });

  // =========================================================================
  // --- REAL-TIME GREEN SCREEN CHROMA-KEY EXTRACTION PIPELINE ---
  // =========================================================================
  // Offscreen canvas for sampling and keying the video
  const keyedCanvas = document.createElement('canvas');
  const keyedCtx = keyedCanvas.getContext('2d', { willReadFrequently: true });
  
  // Downscaled processing size for 60FPS fluid execution
  const keyWidth = 480;
  const keyHeight = 270;
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

  // Crop bounding box around the active fish in the video
  let cropBox = { sx: 0, sy: 0, sw: keyWidth, sh: keyHeight };

  function processChromaKey() {
    if (!isVideoReady || video.paused || video.ended) return;

    // 1. Draw raw video frame onto offscreen canvas
    keyedCtx.drawImage(video, 0, 0, keyWidth, keyHeight);

    // 2. Extract pixel buffer
    const frame = keyedCtx.getImageData(0, 0, keyWidth, keyHeight);
    const data = frame.data;
    const len = data.length;
    const threshold = config.chromaThreshold;
    const softness = config.chromaSoftness;

    let minX = keyWidth, minY = keyHeight, maxX = 0, maxY = 0;
    let foundFish = false;

    // 3. Fast Chroma-Key & Spill Suppression Shader
    for (let i = 0; i < len; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Green dominance calculation
      const maxOther = Math.max(r, b);
      const diff = g - maxOther;

      // Pure green background check
      if (diff > threshold) {
        data[i + 3] = 0; // Transparent
      } else if (diff > threshold - softness) {
        // Edge feathering
        const alphaRatio = (threshold - diff) / softness;
        data[i + 3] = Math.round(data[i + 3] * alphaRatio);
        // Despill green fringe
        data[i + 1] = maxOther;
      } else {
        // Pixel belongs to fish! Track bounding box
        const pixelIdx = i / 4;
        const px = pixelIdx % keyWidth;
        const py = Math.floor(pixelIdx / keyWidth);
        if (px < minX) minX = px;
        if (px > maxX) maxX = px;
        if (py < minY) minY = py;
        if (py > maxY) maxY = py;
        foundFish = true;

        // Despill subtle green reflections on body
        if (g > maxOther * 1.15) {
          data[i + 1] = Math.round(maxOther * 1.05);
        }
      }
    }

    // Put keyed pixels back
    keyedCtx.putImageData(frame, 0, 0);

    // Update fish crop coordinates if detected
    if (foundFish && maxX > minX && maxY > minY) {
      const pad = 8;
      cropBox.sx = Math.max(0, minX - pad);
      cropBox.sy = Math.max(0, minY - pad);
      cropBox.sw = Math.min(keyWidth - cropBox.sx, (maxX - minX) + pad * 2);
      cropBox.sh = Math.min(keyHeight - cropBox.sy, (maxY - minY) + pad * 2);
    }
  }

  // =========================================================================
  // --- FISH CLASS: PHOTOREALISTIC VIDEO-EXTRACTED ENTITY ---
  // =========================================================================
  class PhotorealisticTetra {
    constructor(id, x, y) {
      this.id = id;
      this.x = x || Math.random() * width;
      this.y = y || Math.random() * height;

      // Velocity in world coordinates
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.3 + Math.random() * 0.9;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;

      // Smoothed heading & banking angle
      this.heading = angle;
      this.targetHeading = angle;

      // Z-depth: 0.85 (deep in water) to 1.25 (foreground glass)
      this.depth = 0.85 + Math.random() * 0.35;

      // Fin wag & banking
      this.isHovered = false;
      this.hoverFactor = 1.0;
      this.wanderTimer = Math.random() * 100;
    }

    update() {
      // 1. Hover check with cursor
      const dxMouse = mouse.x - this.x;
      const dyMouse = mouse.y - this.y;
      const distMouse = Math.hypot(dxMouse, dyMouse);
      const effectiveRadius = config.hoverRadius * this.depth;

      if (distMouse < effectiveRadius && !mouse.hoveredFish) {
        this.isHovered = true;
        mouse.hoveredFish = this;
      } else if (mouse.hoveredFish === this && distMouse > effectiveRadius * 1.6) {
        this.isHovered = false;
        mouse.hoveredFish = null;
      }

      // Smooth deceleration on hover (slow down by 85%)
      const targetHover = this.isHovered ? 0.15 : 1.0;
      this.hoverFactor += (targetHover - this.hoverFactor) * 0.12;

      // 2. Wandering & Natural Steering
      this.wanderTimer += 0.025;
      const wanderForce = Math.sin(this.wanderTimer) * 0.09;
      this.vx += -Math.sin(this.heading) * wanderForce;
      this.vy += Math.cos(this.heading) * wanderForce;

      // 3. Soft Boundary Steering (Keep inside aquarium)
      const m = config.margin;
      const boundaryTurn = 0.2;
      if (this.x < m) this.vx += boundaryTurn;
      if (this.x > width - m) this.vx -= boundaryTurn;
      if (this.y < m) this.vy += boundaryTurn;
      if (this.y > height - m) this.vy -= boundaryTurn;

      // 4. Food Pellets attraction
      if (pellets.length > 0) {
        let nearestPellet = null;
        let minDist = 380;
        for (const p of pellets) {
          const d = Math.hypot(p.x - this.x, p.y - this.y);
          if (d < minDist) {
            minDist = d;
            nearestPellet = p;
          }
        }
        if (nearestPellet) {
          const attractAngle = Math.atan2(nearestPellet.y - this.y, nearestPellet.x - this.x);
          this.vx += Math.cos(attractAngle) * 0.18;
          this.vy += Math.sin(attractAngle) * 0.18;
          if (minDist < 16) nearestPellet.eaten = true;
        }
      }

      // 5. Speed limits
      const rawSpeed = Math.hypot(this.vx, this.vy);
      const maxSpeed = (2.4 * this.depth * config.speedMultiplier) * this.hoverFactor;
      const minSpeed = (0.7 * this.depth * config.speedMultiplier) * this.hoverFactor;

      if (rawSpeed > maxSpeed) {
        this.vx = (this.vx / rawSpeed) * maxSpeed;
        this.vy = (this.vy / rawSpeed) * maxSpeed;
      } else if (rawSpeed < minSpeed && !this.isHovered) {
        this.vx = (this.vx / rawSpeed) * minSpeed;
        this.vy = (this.vy / rawSpeed) * minSpeed;
      }

      // 6. Update World Path Coordinates (X, Y)
      this.x += this.vx;
      this.y += this.vy;

      // 7. Smooth Heading Interpolation
      if (rawSpeed > 0.05) {
        this.targetHeading = Math.atan2(this.vy, this.vx);
        let diff = this.targetHeading - this.heading;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        this.heading += diff * 0.09;
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);

      // Rotate along velocity vector
      ctx.rotate(this.heading);

      // Flip vertically if swimming to the left so fish stays right-side up
      const swimmingLeft = Math.cos(this.heading) < 0;
      if (swimmingLeft) {
        ctx.scale(1, -1);
      }

      // Depth scaling & lighting
      const len = config.baseLength * this.depth;
      const aspect = cropBox.sh / (cropBox.sw || 1);
      const drawW = len;
      const drawH = len * (aspect > 0.2 && aspect < 1.0 ? aspect : 0.45);

      const alpha = Math.min(1.0, 0.8 + this.depth * 0.2);
      ctx.globalAlpha = alpha;

      // Depth shadow under fish
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
      ctx.shadowBlur = 12 * this.depth;
      ctx.shadowOffsetY = 8 * this.depth;

      // Draw Keyed Video Fish directly!
      if (cropBox.sw > 20 && cropBox.sh > 10) {
        ctx.drawImage(
          keyedCanvas,
          cropBox.sx, cropBox.sy, cropBox.sw, cropBox.sh,
          -drawW / 2, -drawH / 2, drawW, drawH
        );
      } else {
        // Fallback to full keyed canvas
        ctx.drawImage(keyedCanvas, 0, 0, keyWidth, keyHeight, -drawW / 2, -drawH / 2, drawW, drawH);
      }
      ctx.restore();

      // Subtle water shimmer & electric blue accent glow
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = 'rgba(0, 229, 255, 0.12)';
      ctx.shadowColor = 'rgba(0, 229, 255, 0.6)';
      ctx.shadowBlur = this.isHovered ? 25 : 10;
      ctx.beginPath();
      ctx.ellipse(0, 0, drawW * 0.4, drawH * 0.25, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Hover Reticle indicator if targeted
      if (this.isHovered) {
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.8)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(0, 0, drawW * 0.65, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      ctx.restore();
    }
  }

  // =========================================================================
  // --- BOIDS FLOCKING ENGINE (COHESION, SEPARATION, ALIGNMENT) ---
  // =========================================================================
  const school = [];

  function initSchool(count) {
    school.length = 0;
    for (let i = 0; i < count; i++) {
      const x = width * 0.2 + Math.random() * (width * 0.6);
      const y = height * 0.2 + Math.random() * (height * 0.6);
      school.push(new PhotorealisticTetra(i + 1, x, y));
    }
  }
  initSchool(config.targetCount);

  function applyBoidsFlocking() {
    const visualDist = 140 * config.flockingMultiplier;
    const separateDist = 48;

    for (let i = 0; i < school.length; i++) {
      const f1 = school[i];
      if (f1.isHovered) continue;

      let alignX = 0, alignY = 0, alignCount = 0;
      let cohX = 0, cohY = 0, cohCount = 0;
      let sepX = 0, sepY = 0;

      for (let j = 0; j < school.length; j++) {
        if (i === j) continue;
        const f2 = school[j];
        const dist = Math.hypot(f2.x - f1.x, f2.y - f1.y);

        if (dist < visualDist) {
          alignX += f2.vx;
          alignY += f2.vy;
          alignCount++;

          cohX += f2.x;
          cohY += f2.y;
          cohCount++;

          if (dist < separateDist && dist > 0) {
            sepX += (f1.x - f2.x) / dist;
            sepY += (f1.y - f2.y) / dist;
          }
        }
      }

      if (alignCount > 0) {
        alignX /= alignCount;
        alignY /= alignCount;
        f1.vx += (alignX - f1.vx) * 0.035;
        f1.vy += (alignY - f1.vy) * 0.035;
      }

      if (cohCount > 0) {
        cohX /= cohCount;
        cohY /= cohCount;
        f1.vx += ((cohX - f1.x) / visualDist) * 0.025;
        f1.vy += ((cohY - f1.y) / visualDist) * 0.025;
      }

      f1.vx += sepX * 0.06;
      f1.vy += sepY * 0.06;
    }
  }

  // =========================================================================
  // --- SINKING FOOD PELLETS SIMULATION ---
  // =========================================================================
  class Pellet {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 1.5;
      this.vy = 1.0 + Math.random() * 1.5;
      this.radius = 3 + Math.random() * 2.5;
      this.color = Math.random() > 0.5 ? '#f59e0b' : '#d97706';
      this.eaten = false;
      this.age = 0;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vx *= 0.98;
      this.age++;
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowColor = 'rgba(245, 158, 11, 0.5)';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();
    }
  }

  function spawnPellets(originX, originY, count = 8) {
    for (let i = 0; i < count; i++) {
      const offsetX = (Math.random() - 0.5) * 80;
      const offsetY = (Math.random() - 0.5) * 30;
      pellets.push(new Pellet(originX + offsetX, originY + offsetY));
    }
  }

  // =========================================================================
  // --- MAIN 60FPS SIMULATION LOOP ---
  // =========================================================================
  function loop() {
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

    // 3. Flocking & Physics
    applyBoidsFlocking();

    // 4. Update & Render Photorealistic Video Fish sorted by Z-depth
    school.sort((a, b) => a.depth - b.depth);

    for (const fish of school) {
      fish.update();
      fish.draw();
    }

    // 5. Update Hover Specimen Card
    if (mouse.hoveredFish) {
      const hf = mouse.hoveredFish;
      hoverCard.style.left = hf.x + 'px';
      hoverCard.style.top = hf.y + 'px';
      hoverCard.classList.add('visible');

      if (cardTelemetry) {
        cardTelemetry.textContent = `X: ${Math.round(hf.x)}px • Y: ${Math.round(hf.y)}px • Speed: ${(Math.hypot(hf.vx, hf.vy)).toFixed(2)}px/s`;
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
      config.baseLength = parseInt(e.target.value);
      const ratio = (config.baseLength / 55).toFixed(1);
      labelScale.textContent = `${config.baseLength}px (${ratio}x Real)`;
    });
  }

  if (sliderCount && labelCount) {
    sliderCount.addEventListener('input', (e) => {
      const target = parseInt(e.target.value);
      labelCount.textContent = `${target} Tetras`;
      config.targetCount = target;

      while (school.length < target) {
        school.push(new PhotorealisticTetra(school.length + 1, width * 0.5, height * 0.5));
      }
      while (school.length > target) {
        school.pop();
      }
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
      spawnPellets(width * 0.5, height * 0.15, 12);
    });
  }

  if (btnScatter) {
    btnScatter.addEventListener('click', () => {
      school.forEach(f => {
        const scatterAngle = Math.random() * Math.PI * 2;
        const scatterBurst = 4 + Math.random() * 4;
        f.vx = Math.cos(scatterAngle) * scatterBurst;
        f.vy = Math.sin(scatterAngle) * scatterBurst;
      });
    });
  }

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

      // Update video source
      video.src = src;
      video.load();
      video.play().catch(() => {});

      if (pipVideo) {
        pipVideo.src = src;
        pipVideo.load();
        pipVideo.play().catch(() => {});
      }

      // Update button styling
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