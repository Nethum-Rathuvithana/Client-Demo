/* =========================================================================
   AQUARIUM SCENERY STUDIO — COORDINATED 8-FISH SCHOOLING ENGINE
   - Cohesive imperfect school of 8 Neon Tetras.
   - Broad horizontal route spanning 65–85% of aquarium width.
   - Gentle vertical arcs, brief spacing changes, and coordinated banking turns.
   - Individual lag behind and surge ahead micro-behaviors.
   - Midground, background, and foreground passes with depth scaling.
   - Green-screen video extraction with 60FPS chroma-keying.
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
    fishCount: 8, // Exactly 8 Neon Tetras as requested
    baseLength: 52, // realistic Neon Tetra length in px
    speedMultiplier: 1.0,
    chromaThreshold: 35,
    chromaSoftness: 18,
    hoverRadius: 55
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
  const keyedCanvas = document.createElement('canvas');
  const keyedCtx = keyedCanvas.getContext('2d', { willReadFrequently: true });
  
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
      const pad = 8;
      cropBox.sx = Math.max(0, minX - pad);
      cropBox.sy = Math.max(0, minY - pad);
      cropBox.sw = Math.min(keyWidth - cropBox.sx, (maxX - minX) + pad * 2);
      cropBox.sh = Math.min(keyHeight - cropBox.sy, (maxY - minY) + pad * 2);
    }
  }

  // =========================================================================
  // --- SCHOOL MASTER CONTROLLER (CENTROID, ROUTE & DEPTH PASSES) ---
  // =========================================================================
  // Navigates a broad horizontal path spanning 75% of the aquarium width
  // Follows sinusoidal vertical arcs and alternates between depth strata
  const schoolMaster = {
    x: width * 0.25,
    y: height * 0.5,
    vx: 1.4,
    vy: 0,
    heading: 0,
    direction: 1, // 1 = Eastbound (Right), -1 = Westbound (Left)
    routeProgress: 0, // 0 to 1 along travel cycle
    
    // Depth Pass cycle: 0 = Midground, 1 = Deep Background, 2 = Near Viewer Foreground
    passIndex: 0,
    currentZ: 1.0, // Scale multiplier based on depth
    targetZ: 1.0,
    
    turnState: 'cruising', // 'cruising' or 'banking'
    turnTimer: 0,
    
    // Route limits (65–85% width span)
    get minX() { return width * 0.12; },
    get maxX() { return width * 0.88; },

    update() {
      // 1. Horizontal traversal
      const speed = 1.65 * config.speedMultiplier;
      this.x += this.vx * speed;

      // 2. Vertical sinusoidal arc (gentle undulating wave through water column)
      this.routeProgress += 0.0035 * config.speedMultiplier;
      const baseMidY = height * 0.48;
      const verticalWave = Math.sin(this.routeProgress * Math.PI * 2) * (height * 0.18);
      const microSway = Math.cos(this.routeProgress * 6) * 25;
      const targetY = baseMidY + verticalWave + microSway;
      this.y += (targetY - this.y) * 0.04;

      // 3. Turnaround Logic at Eastern (Right) & Western (Left) boundaries
      if (this.direction === 1 && this.x >= this.maxX) {
        this.beginTurn(-1);
      } else if (this.direction === -1 && this.x <= this.minX) {
        this.beginTurn(1);
      }

      // Smooth banking turn execution
      if (this.turnState === 'banking') {
        this.turnTimer += 0.03;
        const targetAngle = this.direction === 1 ? 0 : Math.PI;
        let diff = targetAngle - this.heading;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        this.heading += diff * 0.08;

        if (this.turnTimer >= Math.PI) {
          this.turnState = 'cruising';
          this.vx = this.direction * 1.4;
        }
      } else {
        // Cruising heading matches horizontal motion + gentle vertical climb/dive
        const targetAngle = Math.atan2(targetY - this.y, this.direction * 1.4);
        let diff = targetAngle - this.heading;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        this.heading += diff * 0.06;
      }

      // 4. Depth Pass Transition Cycle
      // Interpolate master Z smoothly
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
      this.vx = newDir * 0.7; // slight deceleration into turn

      // Cycle depth pass on turnaround:
      // Pass 0: Midground (Z=1.0) -> Pass 1: Background (Z=0.78) -> Pass 2: Foreground (Z=1.28)
      this.passIndex = (this.passIndex + 1) % 3;
      if (this.passIndex === 0) {
        this.targetZ = 1.0; // Midground
      } else if (this.passIndex === 1) {
        this.targetZ = 0.78; // Deep in the tank (smaller, softer)
      } else {
        this.targetZ = 1.28; // Near the viewer (larger, crisp, glowing)
      }
    }
  };

  // =========================================================================
  // --- INDIVIDUAL NEON TETRA MEMBER (8-FISH COHESIVE SCHOOL) ---
  // =========================================================================
  class SchoolMember {
    constructor(slotIndex) {
      this.slotIndex = slotIndex;
      
      // Slot-based formation offset within the cohesive school cluster
      // Radii are kept tight (within 130px) so the school remains cohesive
      const formationAngle = (slotIndex / config.fishCount) * Math.PI * 2;
      const formationDist = 28 + (slotIndex % 3) * 22;
      this.baseOffsetX = Math.cos(formationAngle) * formationDist;
      this.baseOffsetY = Math.sin(formationAngle) * (formationDist * 0.65);

      this.x = schoolMaster.x + this.baseOffsetX;
      this.y = schoolMaster.y + this.baseOffsetY;
      this.vx = schoolMaster.vx;
      this.vy = 0;
      this.heading = 0;

      // Individual lag / surge micro-behaviors
      this.microLagTimer = Math.random() * 200;
      this.currentLagX = 0;
      this.targetLagX = 0;
      this.personalJitterY = (Math.random() - 0.5) * 15;

      // Depth offset (slight depth variation within the school)
      this.relativeDepth = 0.95 + (slotIndex % 4) * 0.035;

      // Hover deceleration
      this.isHovered = false;
      this.hoverFactor = 1.0;
    }

    update() {
      // 1. Hover check with mouse cursor
      const dxMouse = mouse.x - this.x;
      const dyMouse = mouse.y - this.y;
      const distMouse = Math.hypot(dxMouse, dyMouse);
      const effectiveRadius = config.hoverRadius * (schoolMaster.currentZ * this.relativeDepth);

      if (distMouse < effectiveRadius && !mouse.hoveredFish) {
        this.isHovered = true;
        mouse.hoveredFish = this;
      } else if (mouse.hoveredFish === this && distMouse > effectiveRadius * 1.6) {
        this.isHovered = false;
        mouse.hoveredFish = null;
      }

      // Decelerate by 85% on hover
      const targetHover = this.isHovered ? 0.15 : 1.0;
      this.hoverFactor += (targetHover - this.hoverFactor) * 0.12;

      // 2. Micro-Behavior: Individual fish lagging behind or surging ahead
      this.microLagTimer += 0.02;
      if (Math.sin(this.microLagTimer) > 0.8) {
        // Brief surge ahead!
        this.targetLagX = schoolMaster.direction * 35;
      } else if (Math.sin(this.microLagTimer) < -0.8) {
        // Brief lag behind!
        this.targetLagX = -schoolMaster.direction * 42;
      } else {
        // Rejoin normal formation
        this.targetLagX = 0;
      }
      this.currentLagX += (this.targetLagX - this.currentLagX) * 0.03;

      // 3. Target Position relative to School Master Centroid
      const targetPosX = schoolMaster.x + (this.baseOffsetX * schoolMaster.direction) + this.currentLagX;
      const targetPosY = schoolMaster.y + this.baseOffsetY + this.personalJitterY;

      // Spring-like pull toward school centroid (keeps school tight & cohesive)
      const pullForce = 0.055;
      this.vx += (targetPosX - this.x) * pullForce;
      this.vy += (targetPosY - this.y) * pullForce;

      // Dampening to avoid endless vibration
      this.vx *= 0.88;
      this.vy *= 0.88;

      // 4. Separation between members to maintain natural spacing
      for (const other of school) {
        if (other === this) continue;
        const dist = Math.hypot(this.x - other.x, this.y - other.y);
        const minDist = 26 * schoolMaster.currentZ;
        if (dist < minDist && dist > 0) {
          const push = (minDist - dist) * 0.08;
          this.x += ((this.x - other.x) / dist) * push;
          this.y += ((this.y - other.y) / dist) * push;
        }
      }

      // 5. Update World Path Coordinates (X, Y)
      this.x += this.vx * this.hoverFactor;
      this.y += this.vy * this.hoverFactor;

      // 6. Smooth Heading toward motion
      const currentDirX = schoolMaster.direction;
      const targetAngle = schoolMaster.heading;
      let diff = targetAngle - this.heading;
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;
      this.heading += diff * 0.08;
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);

      // Rotate along motion heading
      ctx.rotate(this.heading);

      // Flip vertically when swimming left so fish remains right-side up
      const swimmingLeft = Math.cos(this.heading) < 0;
      if (swimmingLeft) {
        ctx.scale(1, -1);
      }

      // Combined Depth Factor (School Depth Pass * Individual Depth)
      const totalDepth = schoolMaster.currentZ * this.relativeDepth;
      const len = config.baseLength * totalDepth;
      const aspect = cropBox.sh / (cropBox.sw || 1);
      const drawW = len;
      const drawH = len * (aspect > 0.2 && aspect < 1.0 ? aspect : 0.45);

      // Depth lighting & atmospheric haze
      // Foreground = crisp, intense; Background = soft, slightly misty
      const isForeground = totalDepth > 1.15;
      const isBackground = totalDepth < 0.85;

      const alpha = isBackground ? 0.72 : (isForeground ? 1.0 : 0.88);
      ctx.globalAlpha = alpha;

      // Depth shadow
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.65)';
      ctx.shadowBlur = (isForeground ? 18 : 8) * totalDepth;
      ctx.shadowOffsetY = 8 * totalDepth;

      // Render the Extracted Real Video Fish!
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

      // Atmospheric Water Glow (Stronger on foreground pass)
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = isForeground ? 'rgba(0, 229, 255, 0.22)' : 'rgba(0, 229, 255, 0.1)';
      ctx.shadowColor = 'rgba(0, 229, 255, 0.7)';
      ctx.shadowBlur = this.isHovered ? 28 : (isForeground ? 16 : 8);
      ctx.beginPath();
      ctx.ellipse(0, 0, drawW * 0.42, drawH * 0.26, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Hover Reticle indicator if targeted
      if (this.isHovered) {
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.85)';
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
  // --- INITIALIZE THE 8 FISH MEMBERS ---
  // =========================================================================
  const school = [];
  for (let i = 0; i < config.fishCount; i++) {
    school.push(new SchoolMember(i));
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

    // 3. Update School Master Centroid along Panoramic Horizontal Route
    schoolMaster.update();

    // 4. Update & Render the 8 School Members (sorted by depth for clean occlusion)
    school.sort((a, b) => a.relativeDepth - b.relativeDepth);
    for (const member of school) {
      member.update();
      member.draw();
    }

    // 5. Update Hover Specimen Card
    if (mouse.hoveredFish) {
      const hf = mouse.hoveredFish;
      hoverCard.style.left = hf.x + 'px';
      hoverCard.style.top = hf.y + 'px';
      hoverCard.classList.add('visible');

      if (cardTelemetry) {
        const stratumName = schoolMaster.currentZ < 0.9 ? 'Background Pass' : (schoolMaster.currentZ > 1.15 ? 'Foreground Pass' : 'Midground Pass');
        cardTelemetry.textContent = `Specimen #0${hf.slotIndex + 1} • ${stratumName} • Scale: ${Math.round(config.baseLength * schoolMaster.currentZ * hf.relativeDepth)}px`;
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
      const ratio = (config.baseLength / 52).toFixed(1);
      labelScale.textContent = `${config.baseLength}px (${ratio}x Real)`;
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
      spawnPellets(schoolMaster.x, schoolMaster.y - 120, 12);
    });
  }

  if (btnScatter) {
    btnScatter.addEventListener('click', () => {
      // Coordinated turn or scattering
      schoolMaster.beginTurn(schoolMaster.direction === 1 ? -1 : 1);
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
