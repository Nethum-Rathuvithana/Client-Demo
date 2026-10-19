/* =========================================================================
   AQUARIUM SCENERY STUDIO — JAVASCRIPT ENGINE
   World Path (Global Translation) Engine for realistic fish movement across
   (X, Y) coordinates, Boids flocking, mouse hover deceleration & inspection.
========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) window.lucide.createIcons();

  const canvas = document.getElementById('studio-canvas');
  const ctx = canvas.getContext('2d');
  const hoverCard = document.getElementById('fish-hover-card');
  const cardName = document.getElementById('card-name');
  const cardLatin = document.getElementById('card-latin');
  const cardPrice = document.getElementById('card-price');
  const cardTelemetry = document.getElementById('card-telemetry');

  // Sliders & HUD Controls
  const sliderScale = document.getElementById('slider-fish-scale');
  const labelScale = document.getElementById('label-fish-scale');
  const sliderCount = document.getElementById('slider-fish-count');
  const labelCount = document.getElementById('label-fish-count');
  const sliderSpeed = document.getElementById('slider-fish-speed');
  const labelSpeed = document.getElementById('label-fish-speed');
  const sliderFlocking = document.getElementById('slider-flocking');
  const labelFlocking = document.getElementById('label-flocking');

  const btnFeed = document.getElementById('btn-feed');
  const btnScatter = document.getElementById('btn-scatter');
  const btnToggleVideoPip = document.getElementById('btn-toggle-video-pip');
  const videoPipContainer = document.getElementById('video-pip-container');
  const btnToggleHud = document.getElementById('btn-toggle-hud');
  const studioHudPanel = document.getElementById('studio-hud-panel');
  const hudToggleIcon = document.getElementById('hud-toggle-icon');

  // Viewport Sizing
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

  // Simulation Parameters
  const config = {
    baseLength: 45, // default realistic Neon Tetra size in px
    targetCount: 14,
    speedMultiplier: 1.0,
    flockingMultiplier: 1.0,
    hoverRadius: 55,
    margin: 90 // screen boundary bounce distance
  };

  // Pellets Array
  const pellets = [];

  // Mouse State
  const mouse = {
    x: -1000,
    y: -1000,
    isHovering: false,
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
  // --- FISH CLASS: ORGANIC ANATOMY & WORLD PATH SIMULATION ---
  // =========================================================================
  class NeonTetra {
    constructor(id, x, y) {
      this.id = id;
      this.x = x || Math.random() * width;
      this.y = y || Math.random() * height;
      
      // World velocity
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.2 + Math.random() * 0.8;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      
      // Smoothed heading angle
      this.heading = angle;
      this.targetHeading = angle;
      
      // Z-depth: foreground (1.2) vs background depth (0.8)
      this.depth = 0.85 + Math.random() * 0.35;
      
      // Organic Fin & Spine Oscillation
      this.tailPhase = Math.random() * Math.PI * 2;
      this.tailFrequency = 8 + Math.random() * 4;
      
      // Hover deceleration state
      this.isHovered = false;
      this.hoverFactor = 1.0; // 1.0 = normal, drops to 0.15 on hover

      // Personality jitter
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
      } else if (mouse.hoveredFish === this && distMouse > effectiveRadius * 1.5) {
        this.isHovered = false;
        mouse.hoveredFish = null;
      }

      // Smooth deceleration on hover
      const targetHover = this.isHovered ? 0.15 : 1.0;
      this.hoverFactor += (targetHover - this.hoverFactor) * 0.1;

      // 2. Swim Cycle Update
      const currentSpeed = Math.hypot(this.vx, this.vy) * this.hoverFactor * config.speedMultiplier;
      this.tailPhase += (this.tailFrequency * (currentSpeed + 0.3)) * 0.016;

      // 3. Wandering & Natural Steering
      this.wanderTimer += 0.02;
      const wanderForce = Math.sin(this.wanderTimer) * 0.08;
      this.vx += -Math.sin(this.heading) * wanderForce;
      this.vy += Math.cos(this.heading) * wanderForce;

      // 4. Soft Boundary Steering (Stay inside visible aquarium)
      const m = config.margin;
      const boundaryTurn = 0.18;
      if (this.x < m) this.vx += boundaryTurn;
      if (this.x > width - m) this.vx -= boundaryTurn;
      if (this.y < m) this.vy += boundaryTurn;
      if (this.y > height - m) this.vy -= boundaryTurn;

      // 5. Attract to Food Pellets if any exist
      if (pellets.length > 0) {
        let nearestPellet = null;
        let minDist = 350;
        for (const p of pellets) {
          const d = Math.hypot(p.x - this.x, p.y - this.y);
          if (d < minDist) {
            minDist = d;
            nearestPellet = p;
          }
        }
        if (nearestPellet) {
          const attractAngle = Math.atan2(nearestPellet.y - this.y, nearestPellet.x - this.x);
          this.vx += Math.cos(attractAngle) * 0.15;
          this.vy += Math.sin(attractAngle) * 0.15;
          // Nibble pellet if close
          if (minDist < 14) {
            nearestPellet.eaten = true;
          }
        }
      }

      // 6. Smooth Speed Limiting
      const rawSpeed = Math.hypot(this.vx, this.vy);
      const maxSpeed = (2.2 * this.depth * config.speedMultiplier) * this.hoverFactor;
      const minSpeed = (0.6 * this.depth * config.speedMultiplier) * this.hoverFactor;
      
      if (rawSpeed > maxSpeed) {
        this.vx = (this.vx / rawSpeed) * maxSpeed;
        this.vy = (this.vy / rawSpeed) * maxSpeed;
      } else if (rawSpeed < minSpeed && !this.isHovered) {
        this.vx = (this.vx / rawSpeed) * minSpeed;
        this.vy = (this.vy / rawSpeed) * minSpeed;
      }

      // 7. Update World Path Coordinates (X, Y)
      this.x += this.vx;
      this.y += this.vy;

      // 8. Smooth Heading Interpolation
      if (rawSpeed > 0.05) {
        this.targetHeading = Math.atan2(this.vy, this.vx);
        let diff = this.targetHeading - this.heading;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        this.heading += diff * 0.08;
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);

      // Rotate to direction of motion
      ctx.rotate(this.heading);

      // Depth perspective scale
      const len = config.baseLength * this.depth;
      const w = len * 0.32; // body width

      // Tail oscillation
      const tailWag = Math.sin(this.tailPhase) * (len * 0.18);

      // Ambient depth lighting
      const alpha = Math.min(1.0, 0.75 + this.depth * 0.25);
      ctx.globalAlpha = alpha;

      // Glow halo for electric neon stripe
      ctx.shadowColor = 'rgba(0, 229, 255, 0.75)';
      ctx.shadowBlur = this.isHovered ? 20 : 12;

      // --- 1. Tail Fin (Forked Translucent Fin) ---
      ctx.beginPath();
      ctx.moveTo(-len * 0.45, 0);
      ctx.lineTo(-len * 0.75, tailWag - w * 0.7);
      ctx.quadraticCurveTo(-len * 0.6, tailWag, -len * 0.75, tailWag + w * 0.7);
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.fill();

      // --- 2. Main Torpedo Fish Body ---
      ctx.beginPath();
      // Nose / Snout
      ctx.moveTo(len * 0.5, 0);
      // Top curve (dorsal)
      ctx.bezierCurveTo(len * 0.25, -w * 0.8, -len * 0.2, -w * 0.7, -len * 0.45, tailWag * 0.3);
      // Bottom curve (ventral)
      ctx.bezierCurveTo(-len * 0.2, w * 0.7, len * 0.2, w * 0.8, len * 0.5, 0);
      ctx.closePath();

      // Silver-blue base body
      const bodyGrad = ctx.createLinearGradient(len * 0.5, -w, -len * 0.5, w);
      bodyGrad.addColorStop(0, '#e2e8f0');
      bodyGrad.addColorStop(0.3, '#0f2b38');
      bodyGrad.addColorStop(0.7, '#081a22');
      bodyGrad.addColorStop(1, '#051117');
      ctx.fillStyle = bodyGrad;
      ctx.fill();

      // --- 3. THE ICONIC ELECTRIC NEON BLUE STRIPE ---
      // Runs from snout/eye across upper lateral line
      ctx.beginPath();
      ctx.moveTo(len * 0.38, -w * 0.15);
      ctx.quadraticCurveTo(0, -w * 0.3, -len * 0.35, -w * 0.1 + tailWag * 0.4);
      ctx.lineTo(-len * 0.35, w * 0.05 + tailWag * 0.4);
      ctx.quadraticCurveTo(0, -w * 0.1, len * 0.38, 0);
      ctx.closePath();

      const neonBlueGrad = ctx.createLinearGradient(len * 0.4, 0, -len * 0.4, 0);
      neonBlueGrad.addColorStop(0, '#ffffff');
      neonBlueGrad.addColorStop(0.2, '#00f7ff');
      neonBlueGrad.addColorStop(0.8, '#00a6ff');
      neonBlueGrad.addColorStop(1, '#0051ff');
      ctx.fillStyle = neonBlueGrad;
      ctx.fill();

      // --- 4. THE VIVID RUBY CRIMSON RED POSTERIOR STRIPE ---
      // Runs along ventral rear half to tail
      ctx.beginPath();
      ctx.moveTo(-len * 0.05, w * 0.1);
      ctx.quadraticCurveTo(-len * 0.25, w * 0.2, -len * 0.45, tailWag * 0.3);
      ctx.lineTo(-len * 0.45, tailWag * 0.3 - w * 0.15);
      ctx.quadraticCurveTo(-len * 0.25, 0, -len * 0.05, 0);
      ctx.closePath();

      const neonRedGrad = ctx.createLinearGradient(-len * 0.05, 0, -len * 0.45, 0);
      neonRedGrad.addColorStop(0, '#ff1a53');
      neonRedGrad.addColorStop(0.5, '#e60039');
      neonRedGrad.addColorStop(1, '#990026');
      ctx.fillStyle = neonRedGrad;
      ctx.fill();

      // --- 5. Eye (Large black pupil with iridescent cyan ring) ---
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(len * 0.32, -w * 0.15, len * 0.065, 0, Math.PI * 2);
      ctx.fillStyle = '#00f0ff';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(len * 0.32, -w * 0.15, len * 0.045, 0, Math.PI * 2);
      ctx.fillStyle = '#050c12';
      ctx.fill();

      // --- 6. Dorsal & Pectoral Translucent Fins ---
      ctx.beginPath();
      ctx.moveTo(-len * 0.05, -w * 0.6);
      ctx.lineTo(-len * 0.22, -w * 1.25);
      ctx.lineTo(-len * 0.28, -w * 0.5);
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fill();

      // Pectoral fin
      ctx.beginPath();
      ctx.moveTo(len * 0.1, w * 0.2);
      ctx.lineTo(len * 0.02, w * 0.7);
      ctx.lineTo(len * 0.18, w * 0.3);
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.fill();

      // Hover Reticle (if hovered)
      if (this.isHovered) {
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.7)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(0, 0, len * 0.75, 0, Math.PI * 2);
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
      school.push(new NeonTetra(i + 1, x, y));
    }
  }
  initSchool(config.targetCount);

  function applyBoidsFlocking() {
    const visualDist = 140 * config.flockingMultiplier;
    const separateDist = 45;

    for (let i = 0; i < school.length; i++) {
      const f1 = school[i];
      if (f1.isHovered) continue; // Hovered fish pauses flocking

      let alignX = 0, alignY = 0, alignCount = 0;
      let cohX = 0, cohY = 0, cohCount = 0;
      let sepX = 0, sepY = 0;

      for (let j = 0; j < school.length; j++) {
        if (i === j) continue;
        const f2 = school[j];
        const dist = Math.hypot(f2.x - f1.x, f2.y - f1.y);

        if (dist < visualDist) {
          // Alignment
          alignX += f2.vx;
          alignY += f2.vy;
          alignCount++;

          // Cohesion
          cohX += f2.x;
          cohY += f2.y;
          cohCount++;

          // Separation
          if (dist < separateDist && dist > 0) {
            sepX += (f1.x - f2.x) / dist;
            sepY += (f1.y - f2.y) / dist;
          }
        }
      }

      // Apply forces
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
      this.vy = 1.0 + Math.random() * 1.5; // gentle downward gravity
      this.radius = 3 + Math.random() * 2.5;
      this.color = Math.random() > 0.5 ? '#f59e0b' : '#d97706';
      this.eaten = false;
      this.age = 0;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vx *= 0.98; // water drag
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

    // 1. Update Pellets
    for (let i = pellets.length - 1; i >= 0; i--) {
      const p = pellets[i];
      p.update();
      p.draw();
      if (p.y > height || p.eaten || p.age > 900) {
        pellets.splice(i, 1);
      }
    }

    // 2. Boids Flocking & Physics
    applyBoidsFlocking();

    // 3. Update & Draw Fish sorted by Z-depth
    school.sort((a, b) => a.depth - b.depth);

    for (const fish of school) {
      fish.update();
      fish.draw();
    }

    // 4. Update Hover Specimen Card Position & Content
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
  // --- WORKBENCH HUD BINDINGS & CONTROLS ---
  // =========================================================================
  
  // Scale Slider
  if (sliderScale && labelScale) {
    sliderScale.addEventListener('input', (e) => {
      config.baseLength = parseInt(e.target.value);
      const ratio = (config.baseLength / 45).toFixed(1);
      labelScale.textContent = `${config.baseLength}px (${ratio}x Real)`;
    });
  }

  // Population Slider
  if (sliderCount && labelCount) {
    sliderCount.addEventListener('input', (e) => {
      const target = parseInt(e.target.value);
      labelCount.textContent = `${target} Tetras`;
      config.targetCount = target;

      while (school.length < target) {
        school.push(new NeonTetra(school.length + 1, width * 0.5, height * 0.5));
      }
      while (school.length > target) {
        school.pop();
      }
    });
  }

  // Speed Slider
  if (sliderSpeed && labelSpeed) {
    sliderSpeed.addEventListener('input', (e) => {
      config.speedMultiplier = parseInt(e.target.value) / 10;
      labelSpeed.textContent = `${config.speedMultiplier.toFixed(1)}x Natural`;
    });
  }

  // Flocking Slider
  if (sliderFlocking && labelFlocking) {
    sliderFlocking.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      config.flockingMultiplier = val / 3;
      const labels = ['Loose / Independent', 'Gentle Shoaling', 'Balanced Schooling', 'Tight School', 'Strict Swarm'];
      labelFlocking.textContent = labels[val - 1] || 'Balanced';
    });
  }

  // Action Buttons
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

  // Video PiP Toggle
  if (btnToggleVideoPip && videoPipContainer) {
    btnToggleVideoPip.addEventListener('click', () => {
      videoPipContainer.classList.toggle('hidden');
    });
  }

  // HUD Panel Toggle
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
});
