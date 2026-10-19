/* =========================================================================
   AQUARIUM SCENERY STUDIO — SINGLE COHESIVE SWARM ELEMENT
   - Renders the video fish group as ONE unified photorealistic element.
   - Moves along a broad horizontal route spanning 65–85% of aquarium width.
   - Gentle vertical arcs and coordinated banking turns.
   - Depth strata passes: Midground, Background (Deep), and Foreground (Near Viewer).
   - Real-time green-screen chroma keying with despill.
   - Hover deceleration by 85% & live inspection telemetry.
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

  const hudDepthPass = document.getElementById('hud-depth-pass');
  const hudTurnState = document.getElementById('hud-turn-state');

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
    baseWidth: 240, // natural width of the cohesive swarm element in px
    speedMultiplier: 1.0,
    chromaThreshold: 35,
    chromaSoftness: 18,
    hoverRadius: 130
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
  
  // High-clarity 640x360 processing buffer
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
        data[i + 3] = 0; // Transparent green background
      } else if (diff > threshold - softness) {
        // Soft edge feathering
        const alphaRatio = (threshold - diff) / softness;
        data[i + 3] = Math.round(data[i + 3] * alphaRatio);
        data[i + 1] = maxOther;
      } else {
        // Fish pixel
        const pixelIdx = i / 4;
        const px = pixelIdx % keyWidth;
        const py = Math.floor(pixelIdx / keyWidth);
        if (px < minX) minX = px;
        if (px > maxX) maxX = px;
        if (py < minY) minY = py;
        if (py > maxY) maxY = py;
        foundFish = true;

        // Despill subtle green bounce reflections
        if (g > maxOther * 1.15) {
          data[i + 1] = Math.round(maxOther * 1.05);
        }
      }
    }

    keyedCtx.putImageData(frame, 0, 0);

    // Auto-tighten crop around the fish group
    if (foundFish && maxX > minX && maxY > minY) {
      const pad = 10;
      cropBox.sx = Math.max(0, minX - pad);
      cropBox.sy = Math.max(0, minY - pad);
      cropBox.sw = Math.min(keyWidth - cropBox.sx, (maxX - minX) + pad * 2);
      cropBox.sh = Math.min(keyHeight - cropBox.sy, (maxY - minY) + pad * 2);
    }
  }

  // =========================================================================
  // --- SINGLE COHESIVE SWARM ELEMENT ---
  // =========================================================================
  // Travels across 65-85% of aquarium width along gentle vertical arcs
  // Executes coordinated turns and cycles through depth passes
  const swarmElement = {
    x: width * 0.25,
    y: height * 0.5,
    vx: 1.45,
    vy: 0,
    heading: 0,
    direction: 1, // 1 = Eastbound (Right), -1 = Westbound (Left)
    routeProgress: 0,
    
    // Depth Pass cycle: 0 = Midground, 1 = Deep Background, 2 = Near Viewer Foreground
    passIndex: 0,
    currentZ: 1.0,
    targetZ: 1.0,
    
    turnState: 'cruising',
    turnTimer: 0,
    
    // Hover state
    isHovered: false,
    hoverFactor: 1.0,

    get minX() { return width * 0.12; },
    get maxX() { return width * 0.88; },

    update() {
      // 1. Hover check with mouse cursor
      const dxMouse = mouse.x - this.x;
      const dyMouse = mouse.y - this.y;
      const distMouse = Math.hypot(dxMouse, dyMouse);
      const effectiveRadius = config.hoverRadius * this.currentZ;

      if (distMouse < effectiveRadius) {
        this.isHovered = true;
        mouse.isHoveringSwarm = true;
      } else if (distMouse > effectiveRadius * 1.5) {
        this.isHovered = false;
        mouse.isHoveringSwarm = false;
      }

      // Smooth deceleration on hover (slow down whole swarm by 85%)
      const targetHover = this.isHovered ? 0.15 : 1.0;
      this.hoverFactor += (targetHover - this.hoverFactor) * 0.1;

      // 2. Horizontal traversal (65-85% aquarium width)
      const speed = 1.6 * config.speedMultiplier * this.hoverFactor;
      this.x += this.vx * speed;

      // 3. Vertical sinusoidal arc (swimming gently through water column)
      this.routeProgress += 0.0035 * config.speedMultiplier * this.hoverFactor;
      const baseMidY = height * 0.48;
      const verticalWave = Math.sin(this.routeProgress * Math.PI * 2) * (height * 0.18);
      const microSway = Math.cos(this.routeProgress * 5) * 22;
      const targetY = baseMidY + verticalWave + microSway;
      this.y += (targetY - this.y) * (0.04 * this.hoverFactor);

      // 4. Boundary Turnaround
      if (this.direction === 1 && this.x >= this.maxX) {
        this.beginTurn(-1);
      } else if (this.direction === -1 && this.x <= this.minX) {
        this.beginTurn(1);
      }

      // Smooth Banking Turn
      if (this.turnState === 'banking') {
        this.turnTimer += 0.03 * this.hoverFactor;
        const targetAngle = this.direction === 1 ? 0 : Math.PI;
        let diff = targetAngle - this.heading;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        this.heading += diff * 0.08;

        if (this.turnTimer >= Math.PI) {
          this.turnState = 'cruising';
          this.vx = this.direction * 1.45;
        }
      } else {
        const targetAngle = Math.atan2(targetY - this.y, this.direction * 1.45);
        let diff = targetAngle - this.heading;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        this.heading += diff * 0.06;
      }

      // 5. Depth Pass Transition Cycle
      this.currentZ += (this.targetZ - this.currentZ) * 0.015;

      // Update HUD telemetry
      if (hudDepthPass) {
        if (this.targetZ < 0.9) hudDepthPass.textContent = 'Background Pass (Deep)';
        else if (this.targetZ > 1.15) hudDepthPass.textContent = 'Foreground Pass (Near Viewer)';
        else hudDepthPass.textContent = 'Midground Pass';
      }
      if (hudTurnState) {
        const dirStr = this.direction === 1 ? 'Cruising Eastbound →' : 'Cruising Westbound ←';
        hudTurnState.textContent = this.turnState === 'banking' ? 'Coordinated Banking Turn' : dirStr;
      }
    },

    beginTurn(newDir) {
      this.direction = newDir;
      this.turnState = 'banking';
      this.turnTimer = 0;
      this.vx = newDir * 0.7;

      // Cycle depth pass
      this.passIndex = (this.passIndex + 1) % 3;
      if (this.passIndex === 0) {
        this.targetZ = 1.0; // Midground
      } else if (this.passIndex === 1) {
        this.targetZ = 0.78; // Deep background (smaller, softer)
      } else {
        this.targetZ = 1.28; // Foreground (larger, crisp, vibrant)
      }
    },

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);

      // Rotate along motion heading
      ctx.rotate(this.heading);

      // Flip vertically when swimming left so the fish stay right-side up
      const swimmingLeft = Math.cos(this.heading) < 0;
      if (swimmingLeft) {
        ctx.scale(1, -1);
      }

      // Scale based on depth
      const drawW = config.baseWidth * this.currentZ;
      const aspect = cropBox.sh / (cropBox.sw || 1);
      const drawH = drawW * (aspect > 0.2 && aspect < 1.0 ? aspect : 0.52);

      const isForeground = this.currentZ > 1.15;
      const isBackground = this.currentZ < 0.88;

      const alpha = isBackground ? 0.75 : (isForeground ? 1.0 : 0.9);
      ctx.globalAlpha = alpha;

      // Ambient underwater shadow
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
      ctx.shadowBlur = (isForeground ? 22 : 10) * this.currentZ;
      ctx.shadowOffsetY = 10 * this.currentZ;

      // Draw the Extracted Real Video Swarm Element!
      if (cropBox.sw > 20 && cropBox.sh > 10) {
        ctx.drawImage(
          keyedCanvas,
          cropBox.sx, cropBox.sy, cropBox.sw, cropBox.sh,
          -drawW / 2, -drawH / 2, drawW, drawH
        );
      } else {
        ctx.drawImage(keyedCanvas, 0, 0, keyWidth, keyHeight, -drawW / 2, -drawH / 2, drawW, drawH);
      }
      ctx.restore();

      // Atmospheric Water Glow
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = isForeground ? 'rgba(0, 229, 255, 0.22)' : 'rgba(0, 229, 255, 0.1)';
      ctx.shadowColor = 'rgba(0, 229, 255, 0.75)';
      ctx.shadowBlur = this.isHovered ? 30 : (isForeground ? 18 : 8);
      ctx.beginPath();
      ctx.ellipse(0, 0, drawW * 0.44, drawH * 0.35, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Hover Reticle indicator if targeted
      if (this.isHovered) {
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.85)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(0, 0, drawW * 0.6, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      ctx.restore();
    }
  };

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

    // 3. Update & Draw the Single Cohesive Swarm Element
    swarmElement.update();
    swarmElement.draw();

    // 4. Update Hover Specimen Card
    if (swarmElement.isHovered) {
      hoverCard.style.left = swarmElement.x + 'px';
      hoverCard.style.top = swarmElement.y + 'px';
      hoverCard.classList.add('visible');

      if (cardTelemetry) {
        const stratumName = swarmElement.currentZ < 0.9 ? 'Background Pass' : (swarmElement.currentZ > 1.15 ? 'Foreground Pass' : 'Midground Pass');
        cardTelemetry.textContent = `Unified Swarm Unit • ${stratumName} • Scale: ${Math.round(config.baseWidth * swarmElement.currentZ)}px`;
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
      spawnPellets(swarmElement.x, swarmElement.y - 120, 12);
    });
  }

  if (btnScatter) {
    btnScatter.addEventListener('click', () => {
      // Coordinated turn
      swarmElement.beginTurn(swarmElement.direction === 1 ? -1 : 1);
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
