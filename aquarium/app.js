// AQUARIA — Living Interactive Aquarium Simulation & E-Commerce Application
// Features: Fullscreen Living Tank, 3D Towards-Screen Zoom & Fade Theatre, Ascending Botanical Canopy, Horizontal Aquascapes & Audio

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const data = window.AQUARIA_DATA;
  if (!data) {
    console.error('AQUARIA data missing');
    return;
  }

  // --- Global Application State ---
  const state = {
    currentHabitat: 'tropical-community',
    isPaused: false,
    activeFishIndex: 0,
    activeTab: 'all',
    searchQuery: '',
    selectedCareLevel: 'all',
    sortBy: 'featured',
    cart: JSON.parse(localStorage.getItem('aquaria_cart')) || [],
    hoveredEntity: null,
    audioEnabled: false,
    audioCtx: null,
    audioGain: null
  };

  function saveCart() {
    localStorage.setItem('aquaria_cart', JSON.stringify(state.cart));
    updateCartUI();
  }

  // --- 1. Canvas Living Aquarium Physics (60FPS) ---
  const canvas = document.getElementById('aquarium-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initSubstrateAndPlants();
  });

  let entities = [];
  let bubbles = [];
  let particles = [];
  let plants = [];

  function initBubbles() {
    bubbles = [];
    for (let i = 0; i < 40; i++) {
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.8,
        speed: Math.random() * 1.3 + 0.6,
        wobbleSpeed: Math.random() * 0.05 + 0.02,
        wobbleAmp: Math.random() * 2 + 1,
        phase: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.4 + 0.2
      });
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.35 + 0.1
      });
    }
  }

  function initSubstrateAndPlants() {
    plants = [];
    const sandY = height - 70;

    // Left Vallisneria ribbon thicket
    for (let i = 0; i < 14; i++) {
      plants.push({
        type: 'vallisneria',
        clusterId: 'vallisneria',
        x: 40 + i * 22 + Math.random() * 10,
        y: sandY + 15,
        height: Math.random() * (height * 0.55) + height * 0.35,
        width: 14 + Math.random() * 8,
        swaySpeed: 0.015 + Math.random() * 0.01,
        swayOffset: Math.random() * Math.PI * 2,
        color: '#166534',
        tipColor: '#4ADE80'
      });
    }

    // Right Rotala stems
    for (let i = 0; i < 10; i++) {
      plants.push({
        type: 'rotala',
        clusterId: 'rotala-rotundifolia',
        x: width - 260 + i * 24 + Math.random() * 8,
        y: sandY + 10,
        height: Math.random() * (height * 0.45) + height * 0.25,
        width: 12 + Math.random() * 6,
        swaySpeed: 0.02 + Math.random() * 0.012,
        swayOffset: Math.random() * Math.PI * 2,
        color: '#15803D',
        tipColor: '#F472B6'
      });
    }

    // Anubias cluster
    plants.push({
      type: 'anubias',
      clusterId: 'anubias-nana',
      x: width * 0.32,
      y: sandY - 60,
      radius: 40,
      swaySpeed: 0.008,
      swayOffset: 0,
      color: '#14532D'
    });

    // Monte Carlo clump
    plants.push({
      type: 'monte-carlo',
      clusterId: 'monte-carlo',
      x: width * 0.55,
      y: sandY + 15,
      radius: 50,
      swaySpeed: 0.005,
      swayOffset: 0,
      color: '#22C55E'
    });
  }

  function spawnHabitatEntities(habitatId) {
    entities = [];
    const h = data.habitats.find(item => item.id === habitatId) || data.habitats[0];
    const allowed = h.activeSpecies;
    const sandY = height - 70;

    // 1. Neon Tetras (8 entities - Schooling)
    if (allowed.includes('neon-tetra')) {
      const centerX = width * 0.35;
      const centerY = height * 0.42;
      for (let i = 0; i < 8; i++) {
        entities.push({
          id: 'neon-tetra',
          species: 'neon-tetra',
          x: centerX + (Math.random() - 0.5) * 160,
          y: centerY + (Math.random() - 0.5) * 90,
          vx: Math.random() * 1.4 + 0.8,
          vy: (Math.random() - 0.5) * 0.4,
          speed: 1.2,
          length: 30,
          height: 10,
          tailPhase: Math.random() * Math.PI * 2,
          schoolId: 'neon-school',
          type: 'fish'
        });
      }
    }

    // 2. Harlequin Rasboras (5 entities)
    if (allowed.includes('harlequin-rasbora')) {
      const centerX = width * 0.65;
      const centerY = height * 0.32;
      for (let i = 0; i < 5; i++) {
        entities.push({
          id: 'harlequin-rasbora',
          species: 'harlequin-rasbora',
          x: centerX + (Math.random() - 0.5) * 140,
          y: centerY + (Math.random() - 0.5) * 80,
          vx: -(Math.random() * 1.3 + 0.7),
          vy: (Math.random() - 0.5) * 0.4,
          speed: 1.1,
          length: 34,
          height: 14,
          tailPhase: Math.random() * Math.PI * 2,
          type: 'fish'
        });
      }
    }

    // 3. Fancy Guppies (3 entities)
    if (allowed.includes('fancy-guppy')) {
      for (let i = 0; i < 3; i++) {
        entities.push({
          id: 'fancy-guppy',
          species: 'fancy-guppy',
          x: width * 0.2 + Math.random() * (width * 0.6),
          y: height * 0.18 + Math.random() * (height * 0.22),
          vx: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.9 + 0.6),
          vy: (Math.random() - 0.5) * 0.35,
          speed: 0.9,
          length: 38,
          height: 12,
          tailPhase: Math.random() * Math.PI * 2,
          type: 'fish'
        });
      }
    }

    // 4. Honey Gouramis (2 entities)
    if (allowed.includes('honey-gourami')) {
      for (let i = 0; i < 2; i++) {
        entities.push({
          id: 'honey-gourami',
          species: 'honey-gourami',
          x: (i === 0 ? width * 0.22 : width * 0.78) + (Math.random() - 0.5) * 60,
          y: height * 0.45 + (Math.random() - 0.5) * 80,
          vx: (i === 0 ? 1 : -1) * 0.5,
          vy: (Math.random() - 0.5) * 0.2,
          speed: 0.45,
          length: 46,
          height: 22,
          tailPhase: Math.random() * Math.PI * 2,
          type: 'fish'
        });
      }
    }

    // 5. Freshwater Angelfish (1 entity)
    if (allowed.includes('angelfish')) {
      entities.push({
        id: 'angelfish',
        species: 'angelfish',
        x: width * 0.5,
        y: height * 0.38,
        vx: 0.6,
        vy: 0.1,
        speed: 0.55,
        length: 58,
        height: 64,
        tailPhase: 0,
        type: 'fish'
      });
    }

    // 6. Chili Rasboras (4 entities)
    if (allowed.includes('chili-rasbora')) {
      const centerX = width * 0.48;
      const centerY = height * 0.52;
      for (let i = 0; i < 4; i++) {
        entities.push({
          id: 'chili-rasbora',
          species: 'chili-rasbora',
          x: centerX + (Math.random() - 0.5) * 90,
          y: centerY + (Math.random() - 0.5) * 60,
          vx: Math.random() * 1.5 + 0.8,
          vy: (Math.random() - 0.5) * 0.5,
          speed: 1.3,
          length: 20,
          height: 6,
          tailPhase: Math.random() * Math.PI * 2,
          type: 'fish'
        });
      }
    }

    // 7. Panda Corydoras (3 entities - Bottom dwellers)
    if (allowed.includes('panda-corydoras')) {
      for (let i = 0; i < 3; i++) {
        entities.push({
          id: 'panda-corydoras',
          species: 'panda-corydoras',
          x: width * 0.25 + i * (width * 0.22) + (Math.random() - 0.5) * 50,
          y: sandY + 10 + (Math.random() - 0.5) * 15,
          vx: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.7 + 0.4),
          vy: 0,
          speed: 0.6,
          length: 36,
          height: 14,
          tailPhase: Math.random() * Math.PI * 2,
          isBottomDweller: true,
          type: 'fish'
        });
      }
    }

    // 8. Blue Dream Shrimp (4 entities)
    if (allowed.includes('blue-dream-shrimp')) {
      for (let i = 0; i < 4; i++) {
        entities.push({
          id: 'blue-dream-shrimp',
          species: 'blue-dream-shrimp',
          x: width * 0.2 + i * (width * 0.18) + (Math.random() - 0.5) * 40,
          y: sandY - 20 + (Math.random() - 0.5) * 30,
          vx: (Math.random() > 0.5 ? 0.3 : -0.3),
          vy: (Math.random() - 0.5) * 0.15,
          speed: 0.35,
          length: 22,
          height: 8,
          isShrimp: true,
          type: 'fish'
        });
      }
    }
  }

  initBubbles();
  initParticles();
  initSubstrateAndPlants();
  spawnHabitatEntities(state.currentHabitat);

  // Drawing helpers
  function drawNeonTetra(ctx, e, facingRight, hovered) {
    const scale = hovered ? 1.15 : 1.0;
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.scale(facingRight ? scale : -scale, scale);
    ctx.beginPath();
    ctx.ellipse(0, 0, 15, 6, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#CBD5E1';
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-12, -2);
    ctx.lineTo(8, -1);
    ctx.strokeStyle = '#00F0FF';
    ctx.lineWidth = 2.8;
    ctx.shadowColor = '#00F0FF';
    ctx.shadowBlur = hovered ? 10 : 4;
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.moveTo(-2, 1);
    ctx.lineTo(14, 2);
    ctx.strokeStyle = '#EF4444';
    ctx.lineWidth = 2.5;
    ctx.stroke();
    const tailWiggle = Math.sin(e.tailPhase) * 4;
    ctx.beginPath();
    ctx.moveTo(-14, 0);
    ctx.lineTo(-22, -6 + tailWiggle);
    ctx.lineTo(-19, tailWiggle * 0.5);
    ctx.lineTo(-22, 6 + tailWiggle);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(9, -1, 1.8, 0, Math.PI * 2);
    ctx.fillStyle = '#0F172A';
    ctx.fill();
    ctx.restore();
  }

  function drawHarlequinRasbora(ctx, e, facingRight, hovered) {
    const scale = hovered ? 1.15 : 1.0;
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.scale(facingRight ? scale : -scale, scale);
    ctx.beginPath();
    ctx.ellipse(0, 0, 16, 8, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#FB923C';
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(2, -4);
    ctx.lineTo(1, 6);
    ctx.lineTo(-13, 1);
    ctx.closePath();
    ctx.fillStyle = '#0F172A';
    ctx.fill();
    const tailWiggle = Math.sin(e.tailPhase) * 4;
    ctx.beginPath();
    ctx.moveTo(-15, 0);
    ctx.lineTo(-24, -7 + tailWiggle);
    ctx.lineTo(-20, tailWiggle * 0.5);
    ctx.lineTo(-24, 7 + tailWiggle);
    ctx.closePath();
    ctx.fillStyle = 'rgba(251, 146, 60, 0.55)';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(10, -2, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#000';
    ctx.fill();
    ctx.restore();
  }

  function drawFancyGuppy(ctx, e, facingRight, hovered) {
    const scale = hovered ? 1.15 : 1.0;
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.scale(facingRight ? scale : -scale, scale);
    ctx.beginPath();
    ctx.ellipse(5, 0, 14, 5, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#38BDF8';
    ctx.fill();
    const tailWave1 = Math.sin(e.tailPhase) * 6;
    const tailWave2 = Math.sin(e.tailPhase + 1) * 8;
    ctx.beginPath();
    ctx.moveTo(-8, 0);
    ctx.bezierCurveTo(-18, -12 + tailWave1, -26, -18 + tailWave2, -34, -14 + tailWave2);
    ctx.bezierCurveTo(-38, 0 + tailWave1, -34, 14 + tailWave2, -26, 18 + tailWave2);
    ctx.bezierCurveTo(-18, 12 + tailWave1, -12, 4, -8, 0);
    ctx.closePath();
    const grad = ctx.createLinearGradient(-8, 0, -35, 0);
    grad.addColorStop(0, '#F59E0B');
    grad.addColorStop(0.5, '#EC4899');
    grad.addColorStop(1, '#8B5CF6');
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(14, -1, 1.8, 0, Math.PI * 2);
    ctx.fillStyle = '#000';
    ctx.fill();
    ctx.restore();
  }

  function drawHoneyGourami(ctx, e, facingRight, hovered) {
    const scale = hovered ? 1.15 : 1.0;
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.scale(facingRight ? scale : -scale, scale);
    ctx.beginPath();
    ctx.ellipse(0, 0, 22, 12, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#FBBF24';
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(8, 6);
    ctx.quadraticCurveTo(2, 22, -12, 24);
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 1.2;
    ctx.stroke();
    const wiggle = Math.sin(e.tailPhase) * 3;
    ctx.beginPath();
    ctx.ellipse(-24, wiggle, 8, 8, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(251, 191, 36, 0.6)';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(14, -2, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = '#1E293B';
    ctx.fill();
    ctx.restore();
  }

  function drawAngelfish(ctx, e, facingRight, hovered) {
    const scale = hovered ? 1.15 : 1.0;
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.scale(facingRight ? scale : -scale, scale);
    ctx.beginPath();
    ctx.moveTo(25, 0);
    ctx.lineTo(0, -22);
    ctx.lineTo(-24, 0);
    ctx.lineTo(0, 22);
    ctx.closePath();
    ctx.fillStyle = '#E2E8F0';
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(0, -22);
    ctx.quadraticCurveTo(-15, -45, -35, -55);
    ctx.quadraticCurveTo(-20, -32, -15, -12);
    ctx.closePath();
    ctx.fillStyle = 'rgba(226, 232, 240, 0.7)';
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(8, 12);
    ctx.lineTo(-10, 60);
    ctx.strokeStyle = '#E2E8F0';
    ctx.lineWidth = 1.6;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(16, -4, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#EF4444';
    ctx.fill();
    ctx.restore();
  }

  function drawChiliRasbora(ctx, e, facingRight, hovered) {
    const scale = hovered ? 1.2 : 1.0;
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.scale(facingRight ? scale : -scale, scale);
    ctx.beginPath();
    ctx.ellipse(0, 0, 10, 3.5, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#DC2626';
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(-2, 0, 4, 1.5, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#18181B';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(7, -1, 1.2, 0, Math.PI * 2);
    ctx.fillStyle = '#000';
    ctx.fill();
    ctx.restore();
  }

  function drawPandaCorydoras(ctx, e, facingRight, hovered) {
    const scale = hovered ? 1.15 : 1.0;
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.scale(facingRight ? scale : -scale, scale);
    ctx.beginPath();
    ctx.ellipse(0, 0, 17, 8, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#E2D9C8';
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(11, -2, 4.5, 7, 0.3, 0, Math.PI * 2);
    ctx.fillStyle = '#09090B';
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-2, -7);
    ctx.lineTo(4, -16);
    ctx.lineTo(8, -8);
    ctx.closePath();
    ctx.fillStyle = '#09090B';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(-14, 0, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = '#09090B';
    ctx.fill();
    ctx.restore();
  }

  function drawBlueDreamShrimp(ctx, e, facingRight, hovered) {
    const scale = hovered ? 1.2 : 1.0;
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.scale(facingRight ? scale : -scale, scale);
    ctx.beginPath();
    ctx.moveTo(8, -2);
    ctx.quadraticCurveTo(0, -7, -8, -1);
    ctx.quadraticCurveTo(-14, 5, -18, 4);
    ctx.lineTo(-12, 1);
    ctx.quadraticCurveTo(-2, 2, 8, -2);
    ctx.fillStyle = '#0284C7';
    ctx.fill();
    ctx.restore();
  }

  function drawFishEntity(ctx, e) {
    const isHovered = state.hoveredEntity && state.hoveredEntity.entity === e;
    const facingRight = e.vx >= 0;

    switch (e.species) {
      case 'neon-tetra': drawNeonTetra(ctx, e, facingRight, isHovered); break;
      case 'harlequin-rasbora': drawHarlequinRasbora(ctx, e, facingRight, isHovered); break;
      case 'fancy-guppy': drawFancyGuppy(ctx, e, facingRight, isHovered); break;
      case 'honey-gourami': drawHoneyGourami(ctx, e, facingRight, isHovered); break;
      case 'angelfish': drawAngelfish(ctx, e, facingRight, isHovered); break;
      case 'chili-rasbora': drawChiliRasbora(ctx, e, facingRight, isHovered); break;
      case 'panda-corydoras': drawPandaCorydoras(ctx, e, facingRight, isHovered); break;
      case 'blue-dream-shrimp': drawBlueDreamShrimp(ctx, e, facingRight, isHovered); break;
      default: drawNeonTetra(ctx, e, facingRight, isHovered);
    }
  }

  function drawSubstrateAndHardscape(ctx, time) {
    const sandY = height - 70;
    const sandGrad = ctx.createLinearGradient(0, sandY, 0, height);
    sandGrad.addColorStop(0, '#B8860B');
    sandGrad.addColorStop(0.3, '#785A18');
    sandGrad.addColorStop(1, '#1A180E');
    ctx.fillStyle = sandGrad;
    ctx.beginPath();
    ctx.moveTo(0, sandY);
    ctx.quadraticCurveTo(width * 0.25, sandY - 15, width * 0.5, sandY - 8);
    ctx.quadraticCurveTo(width * 0.75, sandY - 2, width, sandY - 12);
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fill();

    // Natural Driftwood
    ctx.strokeStyle = '#2B1810';
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(width * 0.28, sandY + 10);
    ctx.quadraticCurveTo(width * 0.35, sandY - 120, width * 0.42, sandY - 180);
    ctx.quadraticCurveTo(width * 0.48, sandY - 140, width * 0.56, sandY + 5);
    ctx.stroke();

    // River Stones
    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.ellipse(width * 0.33, sandY - 10, 38, 22, -0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#334155';
    ctx.beginPath();
    ctx.ellipse(width * 0.62, sandY - 5, 45, 26, 0.15, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawPlants(ctx, time) {
    plants.forEach(p => {
      ctx.save();
      if (p.type === 'vallisneria') {
        const sway = Math.sin(time * p.swaySpeed + p.swayOffset) * 18;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.quadraticCurveTo(p.x + sway * 0.6, p.y - p.height * 0.5, p.x + sway, p.y - p.height);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.width;
        ctx.lineCap = 'round';
        ctx.stroke();
      } else if (p.type === 'rotala') {
        const sway = Math.sin(time * p.swaySpeed + p.swayOffset) * 12;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.quadraticCurveTo(p.x + sway * 0.5, p.y - p.height * 0.6, p.x + sway, p.y - p.height);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.width;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(p.x + sway, p.y - p.height, 6, 0, Math.PI * 2);
        ctx.fillStyle = p.tipColor;
        ctx.fill();
      } else if (p.type === 'anubias') {
        for (let l = 0; l < 5; l++) {
          const angle = (l * Math.PI) / 3 - 0.5;
          ctx.beginPath();
          ctx.ellipse(p.x + Math.cos(angle) * 20, p.y + Math.sin(angle) * 15, 18, 10, angle, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      } else if (p.type === 'monte-carlo') {
        for (let c = 0; c < 7; c++) {
          ctx.beginPath();
          ctx.arc(p.x + (c - 3) * 14, p.y - Math.sin(c) * 4, 10, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      }
      ctx.restore();
    });
  }

  function animate(timestamp) {
    if (!state.isPaused) {
      const hConfig = data.habitats.find(h => h.id === state.currentHabitat) || data.habitats[0];
      ctx.clearRect(0, 0, width, height);

      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#041215');
      bgGrad.addColorStop(0.4, '#082126');
      bgGrad.addColorStop(0.8, '#0B2C33');
      bgGrad.addColorStop(1, '#0E3740');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Caustic overlay
      const causticGrad = ctx.createRadialGradient(width * 0.5, 0, 20, width * 0.5, 0, width * 0.7);
      causticGrad.addColorStop(0, hConfig.causticColor);
      causticGrad.addColorStop(0.6, 'transparent');
      ctx.fillStyle = causticGrad;
      ctx.fillRect(0, 0, width, height);

      drawSubstrateAndHardscape(ctx, timestamp * 0.001);
      drawPlants(ctx, timestamp * 0.001);

      // Bubbles
      bubbles.forEach(b => {
        b.y -= b.speed;
        b.phase += b.wobbleSpeed;
        const currentX = b.x + Math.sin(b.phase) * b.wobbleAmp;
        if (b.y < -10) { b.y = height + 10; b.x = Math.random() * width; }
        ctx.beginPath();
        ctx.arc(currentX, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity})`;
        ctx.fill();
      });

      // Particles
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(103, 232, 249, ${p.opacity})`;
        ctx.fill();
      });

      // Fish Entities
      const sandY = height - 70;
      entities.forEach(e => {
        const isHovered = state.hoveredEntity && state.hoveredEntity.entity === e;
        const currentSpeed = isHovered ? e.speed * 0.25 : e.speed;
        e.tailPhase += isHovered ? 0.08 : 0.22;

        e.x += e.vx * currentSpeed;
        e.y += e.vy * currentSpeed;

        const marginX = 60;
        if (e.x > width - marginX && e.vx > 0) e.vx = -Math.abs(e.vx);
        else if (e.x < marginX && e.vx < 0) e.vx = Math.abs(e.vx);

        if (e.isBottomDweller) {
          if (e.y < sandY - 30) e.vy += 0.05;
          if (e.y > sandY + 25) e.vy -= 0.05;
        } else if (e.isShrimp) {
          if (e.y < sandY - 50) e.vy += 0.04;
          if (e.y > sandY + 15) e.vy -= 0.04;
        } else {
          const topMargin = 90;
          const bottomMargin = sandY - 60;
          if (e.y < topMargin && e.vy < 0) e.vy = Math.abs(e.vy);
          else if (e.y > bottomMargin && e.vy > 0) e.vy = -Math.abs(e.vy);
        }

        drawFishEntity(ctx, e);
      });
    }

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  // --- 2. Hover Tooltip Logic ---
  const tooltip = document.getElementById('aquarium-tooltip');
  const tooltipImg = document.getElementById('tooltip-img');
  const tooltipName = document.getElementById('tooltip-name');
  const tooltipSci = document.getElementById('tooltip-sci');
  const tooltipPrice = document.getElementById('tooltip-price');
  const tooltipStock = document.getElementById('tooltip-stock');
  const tooltipDetailsBtn = document.getElementById('tooltip-details-btn');
  const tooltipCartBtn = document.getElementById('tooltip-cart-btn');

  function checkPointerHover(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;

    let found = null;
    for (let i = 0; i < entities.length; i++) {
      const e = entities[i];
      const dist = Math.hypot(mouseX - e.x, mouseY - e.y);
      if (dist < Math.max(e.length, e.height) * 0.8 + 15) {
        found = { type: 'fish', entity: e, item: data.fish.find(f => f.id === e.species) };
        break;
      }
    }

    if (found && found.item) {
      state.hoveredEntity = found;
      showTooltip(found.item, mouseX, mouseY);
      canvas.style.cursor = 'pointer';
    } else {
      state.hoveredEntity = null;
      hideTooltip();
      canvas.style.cursor = 'default';
    }
  }

  function showTooltip(item, mouseX, mouseY) {
    if (!tooltip) return;
    if (tooltipImg) tooltipImg.src = item.image;
    if (tooltipName) tooltipName.textContent = item.name;
    if (tooltipSci) tooltipSci.textContent = item.scientificName;
    if (tooltipPrice) tooltipPrice.textContent = item.priceFormatted;
    if (tooltipStock) tooltipStock.textContent = item.inStock ? 'Quarantined & Healthy' : 'Backorder';

    if (tooltipDetailsBtn) {
      tooltipDetailsBtn.onclick = () => openProductModal(item);
    }
    if (tooltipCartBtn) {
      tooltipCartBtn.onclick = (e) => {
        e.stopPropagation();
        addToCart(item, 1);
      };
    }

    let posX = mouseX + 20;
    let posY = mouseY - 60;
    if (posX + 260 > window.innerWidth - 20) posX = mouseX - 280;
    if (posY + 150 > window.innerHeight - 20) posY = window.innerHeight - 170;
    if (posY < 80) posY = 80;

    tooltip.style.left = `${posX}px`;
    tooltip.style.top = `${posY}px`;
    tooltip.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
    tooltip.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
  }

  function hideTooltip() {
    if (!tooltip) return;
    tooltip.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
    tooltip.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
  }

  canvas.addEventListener('mousemove', (e) => {
    checkPointerHover(e.clientX, e.clientY);
  });
  canvas.addEventListener('click', (e) => {
    if (state.hoveredEntity && state.hoveredEntity.item) {
      openProductModal(state.hoveredEntity.item);
    }
  });

  // --- 3. Depth Meter HUD on Scroll & Descent Transition ---
  const depthText = document.getElementById('depth-text');
  const depthVeil = document.getElementById('water-depth-veil');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    let depthStr = 'DEPTH: 0.0m SURFACE';

    if (scrollY < 400) {
      depthStr = `DEPTH: ${(scrollY / 250).toFixed(1)}m SURFACE WATERS`;
      if (depthVeil) depthVeil.style.backgroundColor = 'rgba(5, 19, 22, 0.15)';
    } else if (scrollY < 1200) {
      depthStr = 'DEPTH: 1.8m • 3D SPECIMEN CHAMBER';
      if (depthVeil) depthVeil.style.backgroundColor = 'rgba(5, 19, 22, 0.45)';
    } else if (scrollY < 2100) {
      depthStr = 'DEPTH: 3.4m • BOTANICAL CANOPY';
      if (depthVeil) depthVeil.style.backgroundColor = 'rgba(6, 26, 22, 0.65)';
    } else if (scrollY < 3000) {
      depthStr = 'DEPTH: 5.0m • AQUASCAPE STUDIO';
      if (depthVeil) depthVeil.style.backgroundColor = 'rgba(5, 19, 22, 0.75)';
    } else {
      depthStr = 'DEPTH: 6.8m • SUBSTRATE CHEMISTRY LAB';
      if (depthVeil) depthVeil.style.backgroundColor = 'rgba(5, 19, 22, 0.88)';
    }

    if (depthText) depthText.textContent = depthStr;
  });

  // --- 4. 3D Towards-Screen Zoom & Fade Specimen Chamber ---
  // "some come towards the screen and fade away and new ones appear in the middle of the screen"
  const fishStage = document.getElementById('fish-3d-stage');
  const fishPrevBtn = document.getElementById('fish-prev-btn');
  const fishNextBtn = document.getElementById('fish-next-btn');
  const fishScrubber = document.getElementById('fish-scrubber-bar');

  function render3DFishStage() {
    if (!fishStage) return;

    fishStage.innerHTML = data.fish.map((f, idx) => {
      let stateClass = 'state-queued';
      if (idx === state.activeFishIndex) {
        stateClass = 'state-active';
      } else if (idx < state.activeFishIndex) {
        stateClass = 'state-exiting'; // Already swam towards camera & faded away
      } else if (idx === state.activeFishIndex + 1) {
        stateClass = 'state-entering'; // Emerging from deep water
      }

      return `
        <div class="fish-3d-card ${stateClass} aqua-card rounded-3xl overflow-hidden border-cyan-500/35 p-6 sm:p-8 flex flex-col justify-between shadow-2xl" 
             data-fish-idx="${idx}">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <!-- Photo with 3D Depth Frame -->
            <div class="md:col-span-6 relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl group">
              <img src="${f.image}" alt="${f.name}" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-transparent"></div>
              <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-stone-900/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                ${f.badge}
              </span>
              <span class="absolute bottom-3 left-3 text-xs text-stone-300 font-mono">
                Origin: ${f.origin.split('(')[0]}
              </span>
            </div>

            <!-- Content Details -->
            <div class="md:col-span-6 space-y-4">
              <div>
                <span class="text-[10px] uppercase font-bold tracking-widest text-cyan-400 block mb-1">
                  Specimen ${idx + 1} of ${data.fish.length} • ${f.subCategory}
                </span>
                <h3 class="text-2xl sm:text-3xl font-bold font-cinzel text-white leading-tight">
                  ${f.name}
                </h3>
                <p class="text-xs text-stone-400 italic mb-2">${f.scientificName}</p>
                <div class="flex items-baseline gap-3">
                  <span class="text-3xl font-bold text-cyan-300 font-cinzel">${f.priceFormatted}</span>
                  ${f.packText ? `<span class="text-xs text-amber-300 font-medium">(${f.packText})</span>` : ''}
                </div>
              </div>

              <p class="text-xs text-stone-300/80 leading-relaxed line-clamp-3">
                ${f.description}
              </p>

              <!-- Parameter Meters -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 p-2.5 rounded-xl bg-stone-900/90 border border-cyan-500/20 text-[11px]">
                <div>
                  <span class="text-[9px] uppercase text-stone-500 block">Temp</span>
                  <span class="font-bold text-white">${f.temperature.split('(')[0]}</span>
                </div>
                <div>
                  <span class="text-[9px] uppercase text-stone-500 block">pH</span>
                  <span class="font-bold text-white">${f.phRange}</span>
                </div>
                <div>
                  <span class="text-[9px] uppercase text-stone-500 block">Min Tank</span>
                  <span class="font-bold text-cyan-300">${f.minTankSize.split('(')[0]}</span>
                </div>
                <div>
                  <span class="text-[9px] uppercase text-stone-500 block">Care</span>
                  <span class="font-bold text-emerald-400">${f.careLevel}</span>
                </div>
              </div>

              <!-- Buttons -->
              <div class="pt-2 flex items-center gap-3">
                <button class="flex-1 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
                        onclick="window.AQUARIA_APP.addToCartById('${f.id}')">
                  <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                  <span>Add Specimen</span>
                </button>
                <button class="px-4 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-cyan-500/25 text-xs font-semibold transition-all"
                        onclick="window.AQUARIA_APP.openProductModalById('${f.id}')">
                  Care Sheet
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    renderFishScrubber();
    if (window.lucide) window.lucide.createIcons();
  }

  function renderFishScrubber() {
    if (!fishScrubber) return;
    fishScrubber.innerHTML = data.fish.map((f, idx) => {
      const isCurrent = idx === state.activeFishIndex;
      return `
        <button class="px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
          isCurrent 
            ? 'bg-cyan-500 text-stone-950 font-bold scale-105 shadow-md' 
            : 'bg-stone-900/80 text-stone-400 hover:text-white border border-stone-800'
        }" onclick="window.AQUARIA_APP.goToFish(${idx})">
          <span>${idx + 1}. ${f.name.split(' ')[0]}</span>
        </button>
      `;
    }).join('');
  }

  function update3DFishTransition(newIndex) {
    if (newIndex < 0 || newIndex >= data.fish.length) return;
    state.activeFishIndex = newIndex;
    render3DFishStage();
  }

  if (fishPrevBtn) {
    fishPrevBtn.addEventListener('click', () => {
      if (state.activeFishIndex > 0) {
        update3DFishTransition(state.activeFishIndex - 1);
      } else {
        update3DFishTransition(data.fish.length - 1);
      }
    });
  }

  if (fishNextBtn) {
    fishNextBtn.addEventListener('click', () => {
      if (state.activeFishIndex < data.fish.length - 1) {
        update3DFishTransition(state.activeFishIndex + 1);
      } else {
        update3DFishTransition(0);
      }
    });
  }

  // Mouse Wheel over 3D Stage (smoothly cycle towards screen)
  let wheelTimeout = null;
  if (fishStage) {
    fishStage.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (wheelTimeout) return;
      wheelTimeout = setTimeout(() => { wheelTimeout = null; }, 350);

      if (e.deltaY > 0) {
        // Scroll down: zoom current towards screen, bring next from center
        if (state.activeFishIndex < data.fish.length - 1) {
          update3DFishTransition(state.activeFishIndex + 1);
        } else {
          update3DFishTransition(0);
        }
      } else {
        if (state.activeFishIndex > 0) {
          update3DFishTransition(state.activeFishIndex - 1);
        } else {
          update3DFishTransition(data.fish.length - 1);
        }
      }
    }, { passive: false });
  }

  render3DFishStage();

  // --- 5. Ascending Vertical Botanical Canopy (Plants Section) ---
  // "for the vertical scroll can you make the animation we can see the next 2 ones to come each smaller than the one closer tothe middle and the middle main one the biggest"
  const verticalPlantStage = document.getElementById('vertical-plant-stage');
  const verticalPlantStack = document.getElementById('vertical-plant-stack');
  const btnPlantPrev = document.getElementById('btn-plant-prev');
  const btnPlantNext = document.getElementById('btn-plant-next');
  const plantStratumTitle = document.getElementById('plant-stratum-title');
  const plantCounterBadge = document.getElementById('plant-counter-badge');
  const activePlantPlacement = document.getElementById('active-plant-placement');
  const activePlantName = document.getElementById('active-plant-name');
  const activePlantLatin = document.getElementById('active-plant-latin');
  const activePlantDesc = document.getElementById('active-plant-desc');
  const activePlantLight = document.getElementById('active-plant-light');
  const activePlantCo2 = document.getElementById('active-plant-co2');
  const activePlantGrowth = document.getElementById('active-plant-growth');
  const activePlantPrice = document.getElementById('active-plant-price');
  const btnActivePlantCart = document.getElementById('btn-active-plant-cart');
  const plantPaginationPills = document.getElementById('plant-pagination-pills');

  let activePlantIndex = 0;
  const plantList = data.plants || [];
  const totalPlants = plantList.length;

  function renderPlantPerspectiveStack() {
    if (!verticalPlantStack || totalPlants === 0) return;

    // 1. Build cards HTML if not already initialized
    if (!verticalPlantStack.hasChildNodes() || verticalPlantStack.children.length !== totalPlants) {
      verticalPlantStack.innerHTML = plantList.map((p, idx) => {
        return `
          <div class="plant-stack-card" id="plant-card-${idx}" data-idx="${idx}" onclick="window.AQUARIA_APP.onPlantCardClick(${idx})">
            <div class="flex flex-col sm:flex-row items-center gap-4">
              <!-- Specimen Image Preview -->
              <div class="relative w-full sm:w-44 h-36 rounded-2xl overflow-hidden shrink-0 border border-emerald-500/25 bg-abyss">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent"></div>
                <span class="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/90 text-stone-950 font-cinzel">
                  ${p.badge}
                </span>
                <span class="absolute bottom-2 right-2 px-2 py-0.5 rounded-lg bg-stone-950/85 backdrop-blur-md text-xs font-bold text-emerald-300 font-cinzel border border-emerald-500/30">
                  ${p.priceFormatted}
                </span>
              </div>

              <!-- Specimen Info -->
              <div class="flex-1 min-w-0 w-full space-y-1.5">
                <div class="flex items-center justify-between gap-2">
                  <span class="text-[10px] uppercase font-bold tracking-widest text-emerald-400 truncate">${p.placementTag}</span>
                  <span class="text-[10px] text-stone-400 font-mono">Stratum 0${idx + 1}</span>
                </div>
                <h4 class="text-base sm:text-lg font-bold font-cinzel text-white truncate">
                  ${p.name}
                </h4>
                <p class="text-xs text-stone-400 italic truncate">${p.scientificName}</p>
                
                <p class="text-xs text-stone-300/80 line-clamp-2 leading-relaxed">
                  ${p.description}
                </p>

                <!-- Center Active Controls -->
                <div class="pt-2 flex items-center gap-2">
                  <button class="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-stone-950 transition-all flex items-center gap-1 shadow-md shadow-emerald-500/20"
                          onclick="event.stopPropagation(); window.AQUARIA_APP.addToCartById('${p.id}')">
                    <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                    <span>Add to Cart</span>
                  </button>
                  <button class="px-3 py-1.5 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-300 text-xs font-semibold border border-stone-700/60"
                          onclick="event.stopPropagation(); window.AQUARIA_APP.openProductModalById('${p.id}')">
                    <span>Inspect</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');
      if (window.lucide) window.lucide.createIcons();
    }

    // 2. Position each card according to its offset from activePlantIndex:
    // MIDDLE: BIGGEST (pos-center)
    // NEXT 1 TO COME: SMALLER (pos-near-next)
    // NEXT 2 TO COME: EVEN SMALLER (pos-far-next)
    // PREV 1: SMALLER (pos-near-prev)
    // PREV 2: EVEN SMALLER (pos-far-prev)
    plantList.forEach((_, idx) => {
      const card = document.getElementById(`plant-card-${idx}`);
      if (!card) return;

      const diff = idx - activePlantIndex;

      card.classList.remove(
        'pos-center',
        'pos-near-next',
        'pos-near-prev',
        'pos-far-next',
        'pos-far-prev',
        'pos-hidden-next',
        'pos-hidden-prev'
      );

      if (diff === 0) {
        card.classList.add('pos-center');
      } else if (diff === 1) {
        card.classList.add('pos-near-next');
      } else if (diff === 2) {
        card.classList.add('pos-far-next');
      } else if (diff === -1) {
        card.classList.add('pos-near-prev');
      } else if (diff === -2) {
        card.classList.add('pos-far-prev');
      } else if (diff > 2) {
        card.classList.add('pos-hidden-next');
      } else {
        card.classList.add('pos-hidden-prev');
      }
    });

    // 3. Update Left Telemetry Panel for Active Plant
    const cur = plantList[activePlantIndex];
    if (cur) {
      if (plantStratumTitle) plantStratumTitle.textContent = cur.placement;
      if (plantCounterBadge) plantCounterBadge.textContent = `0${activePlantIndex + 1} / 0${totalPlants}`;
      if (activePlantPlacement) activePlantPlacement.textContent = cur.placementTag;
      if (activePlantName) activePlantName.textContent = cur.name;
      if (activePlantLatin) activePlantLatin.textContent = cur.scientificName;
      if (activePlantDesc) activePlantDesc.textContent = cur.description;
      if (activePlantLight) activePlantLight.textContent = cur.lightDemand;
      if (activePlantCo2) activePlantCo2.textContent = cur.co2Demand;
      if (activePlantGrowth) activePlantGrowth.textContent = cur.growthRate || 'Moderate';
      if (activePlantPrice) activePlantPrice.textContent = cur.priceFormatted;

      if (btnActivePlantCart) {
        btnActivePlantCart.onclick = () => window.AQUARIA_APP.addToCartById(cur.id);
      }
    }

    // 4. Update Navigation Pills
    if (plantPaginationPills) {
      plantPaginationPills.innerHTML = plantList.map((p, idx) => {
        const isActive = idx === activePlantIndex;
        const activeClass = isActive 
          ? 'bg-emerald-500 text-stone-950 font-bold border-emerald-400 shadow-md shadow-emerald-500/30' 
          : 'bg-stone-900/80 text-stone-400 hover:text-stone-200 border-stone-800';
        const shortName = p.name.split(' ')[0];
        return `
          <button onclick="window.AQUARIA_APP.setPlantIndex(${idx})" 
                  class="px-2.5 py-1 rounded-lg border text-[10px] tracking-wide transition-all ${activeClass}">
            0${idx + 1} ${shortName}
          </button>
        `;
      }).join('');
    }
  }

  function setPlantIndex(newIdx) {
    if (newIdx < 0) newIdx = 0;
    if (newIdx >= totalPlants) newIdx = totalPlants - 1;
    activePlantIndex = newIdx;
    renderPlantPerspectiveStack();
  }

  function nextPlant() {
    if (activePlantIndex < totalPlants - 1) {
      setPlantIndex(activePlantIndex + 1);
    } else {
      setPlantIndex(0); // loop
    }
  }

  function prevPlant() {
    if (activePlantIndex > 0) {
      setPlantIndex(activePlantIndex - 1);
    } else {
      setPlantIndex(totalPlants - 1); // loop
    }
  }

  // Bind Buttons
  if (btnPlantPrev) btnPlantPrev.addEventListener('click', prevPlant);
  if (btnPlantNext) btnPlantNext.addEventListener('click', nextPlant);

  // Wheel Scroll over Vertical Plant Stage:
  if (verticalPlantStage) {
    let lastWheelTime = 0;
    verticalPlantStage.addEventListener('wheel', (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime < 240) return; // throttle for smooth step
      lastWheelTime = now;

      if (e.deltaY > 0) {
        nextPlant();
      } else if (e.deltaY < 0) {
        prevPlant();
      }
    }, { passive: false });

    // Touch Swipe over Stage
    let touchStartY = 0;
    verticalPlantStage.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    verticalPlantStage.addEventListener('touchend', (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;
      if (Math.abs(diffY) > 40) {
        if (diffY > 0) nextPlant();
        else prevPlant();
      }
    }, { passive: true });
  }

  // Keyboard navigation when in view
  window.addEventListener('keydown', (e) => {
    const plantsSection = document.getElementById('plants-canopy');
    if (!plantsSection) return;
    const rect = plantsSection.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;

    if (e.key === 'ArrowUp') {
      prevPlant();
    } else if (e.key === 'ArrowDown') {
      nextPlant();
    }
  });

  // Expose to window.AQUARIA_APP
  window.AQUARIA_APP.setPlantIndex = setPlantIndex;
  window.AQUARIA_APP.onPlantCardClick = (idx) => {
    setPlantIndex(idx);
  };

  renderPlantPerspectiveStack();

  
  // --- 6. Horizontal Architectural Glass Aquascapes ---
  const tanksContainer = document.getElementById('tanks-horizontal-container');
  const tanksLeftBtn = document.getElementById('tanks-scroll-left');
  const tanksRightBtn = document.getElementById('tanks-scroll-right');

  function renderHorizontalTanks() {
    if (!tanksContainer) return;
    tanksContainer.innerHTML = data.aquariums.map(t => `
      <div class="horizontal-aquarium-card p-6 flex flex-col justify-between group cursor-pointer" onclick="window.AQUARIA_APP.openProductModalById('${t.id}')">
        <div class="relative h-64 rounded-2xl overflow-hidden mb-5 border border-cyan-500/20">
          <img src="${t.image}" alt="${t.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-transparent"></div>
          <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500 text-stone-950 font-cinzel">
            ${t.badge} • ${t.volume}
          </span>
          <div class="absolute bottom-3 left-3 right-3 text-xs text-stone-300 font-mono">
            ${t.dimensions}
          </div>
        </div>

        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-cyan-400 block mb-1">${t.style}</span>
          <h4 class="text-xl font-bold font-cinzel text-white group-hover:text-cyan-200 transition-colors mb-2">
            ${t.name}
          </h4>
          <p class="text-xs text-stone-300/80 leading-relaxed mb-4 line-clamp-3">
            ${t.description}
          </p>
          <div class="p-3 rounded-xl bg-stone-900 border border-stone-800 text-[11px] text-stone-300 mb-4">
            <strong class="text-cyan-300 block mb-0.5">Glass Standard:</strong>
            ${t.glass}
          </div>
        </div>

        <div class="pt-4 border-t border-cyan-500/20 flex items-center justify-between">
          <div>
            <span class="text-[10px] uppercase text-stone-400 block">Complete Setup</span>
            <span class="text-2xl font-bold text-cyan-300 font-cinzel">${t.priceFormatted}</span>
          </div>
          <button class="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all"
                  onclick="event.stopPropagation(); window.AQUARIA_APP.openProductModalById('${t.id}')">
            Explore System
          </button>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }
  renderHorizontalTanks();

  if (tanksLeftBtn && tanksRightBtn && tanksContainer) {
    tanksLeftBtn.addEventListener('click', () => {
      tanksContainer.scrollBy({ left: -450, behavior: 'smooth' });
    });
    tanksRightBtn.addEventListener('click', () => {
      tanksContainer.scrollBy({ left: 450, behavior: 'smooth' });
    });
  }

  // --- 7. Master Catalog Grid & Search ---
  const catalogGrid = document.getElementById('catalog-products-grid');
  const categoryTabs = document.querySelectorAll('.catalog-cat-tab');
  const catalogSearchInput = document.getElementById('catalog-search-input');
  const careFilterSelect = document.getElementById('filter-care-level');
  const sortSelect = document.getElementById('sort-products-select');

  function getAllProducts() {
    return [
      ...data.fish,
      ...data.plants,
      ...data.aquariums,
      ...data.equipment
    ];
  }

  function renderCatalog() {
    if (!catalogGrid) return;
    let items = getAllProducts();

    if (state.activeTab !== 'all') {
      items = items.filter(i => i.category === state.activeTab);
    }

    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      items = items.filter(i => 
        i.name.toLowerCase().includes(q) || 
        (i.scientificName && i.scientificName.toLowerCase().includes(q))
      );
    }

    if (state.selectedCareLevel !== 'all') {
      items = items.filter(i => i.careLevel && i.careLevel.toLowerCase().includes(state.selectedCareLevel.toLowerCase()));
    }

    if (state.sortBy === 'price-low') {
      items.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price-high') {
      items.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === 'name') {
      items.sort((a, b) => a.name.localeCompare(b.name));
    }

    catalogGrid.innerHTML = items.map(item => `
      <div class="aqua-card rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer" onclick="window.AQUARIA_APP.openProductModalById('${item.id}')">
        <div class="relative h-48 overflow-hidden">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
          <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-stone-900/90 text-cyan-300 border border-cyan-500/30">
            ${item.badge || item.category}
          </span>
          <div class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-lg bg-stone-950/80 backdrop-blur-md text-xs font-bold text-cyan-300 font-cinzel">
            ${item.priceFormatted}
          </div>
        </div>

        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h4 class="font-bold font-cinzel text-sm text-white group-hover:text-cyan-200 transition-colors mb-0.5">
              ${item.name}
            </h4>
            <p class="text-[11px] text-stone-400 italic mb-2">${item.scientificName || item.style || ''}</p>
          </div>

          <div class="pt-3 border-t border-cyan-500/15 flex items-center gap-2">
            <button class="flex-1 py-2 rounded-xl text-xs font-bold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-cyan-500/20"
                    onclick="event.stopPropagation(); window.AQUARIA_APP.openProductModalById('${item.id}')">
              Details
            </button>
            <button class="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-stone-950 font-bold"
                    onclick="event.stopPropagation(); window.AQUARIA_APP.addToCartById('${item.id}')">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      state.activeTab = tab.dataset.cat;
      categoryTabs.forEach(t => {
        if (t.dataset.cat === state.activeTab) {
          t.classList.add('bg-cyan-500', 'text-stone-950', 'font-bold');
          t.classList.remove('bg-stone-900/80', 'text-stone-300');
        } else {
          t.classList.remove('bg-cyan-500', 'text-stone-950', 'font-bold');
          t.classList.add('bg-stone-900/80', 'text-stone-300');
        }
      });
      renderCatalog();
    });
  });

  if (catalogSearchInput) {
    catalogSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      renderCatalog();
    });
  }

  if (careFilterSelect) {
    careFilterSelect.addEventListener('change', (e) => {
      state.selectedCareLevel = e.target.value;
      renderCatalog();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderCatalog();
    });
  }

  renderCatalog();

  // --- 8. Habitat Switcher ---
  document.querySelectorAll('.habitat-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const habId = btn.dataset.habitat;
      state.currentHabitat = habId;
      document.querySelectorAll('.habitat-tab-btn').forEach(b => {
        if (b.dataset.habitat === habId) {
          b.classList.add('bg-cyan-500', 'text-stone-950', 'font-bold');
          b.classList.remove('bg-stone-900/80', 'text-stone-300');
        } else {
          b.classList.remove('bg-cyan-500', 'text-stone-950', 'font-bold');
          b.classList.add('bg-stone-900/80', 'text-stone-300');
        }
      });
      spawnHabitatEntities(habId);
      showToast(`Habitat Switched to ${btn.textContent.trim()}`);
    });
  });

  // --- 9. Product Detail Modal ---
  const productModal = document.getElementById('product-detail-modal');
  const modalContentBox = document.getElementById('product-modal-content');

  function openProductModal(item) {
    if (!productModal || !modalContentBox) return;

    modalContentBox.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-5 space-y-3">
          <div class="relative h-80 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
            <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-stone-900/90 text-cyan-300 border border-cyan-500/30">
              ${item.badge || item.category}
            </span>
          </div>
          <div class="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-stone-300 space-y-1.5">
            <div class="flex items-center gap-2 text-emerald-400 font-bold">
              <i data-lucide="shield-check" class="w-4 h-4"></i>
              <span>100% Live Arrival Guarantee</span>
            </div>
            <p class="text-[11px] text-stone-400">Insulated thermal box with medical-grade pure oxygen pack.</p>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-4">
          <div>
            <span class="text-xs uppercase font-bold tracking-widest text-cyan-400">${item.subCategory || item.category}</span>
            <h2 class="text-2xl sm:text-3xl font-bold font-cinzel text-white mt-1">${item.name}</h2>
            <p class="text-sm text-stone-400 italic mb-2">${item.scientificName || ''}</p>
            <div class="text-2xl font-bold text-cyan-300 font-cinzel">${item.priceFormatted}</div>
          </div>

          <p class="text-xs text-stone-300 leading-relaxed">${item.description}</p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-xl bg-stone-900/80 border border-cyan-500/20 text-xs">
            ${item.temperature ? `<div><span class="text-[9px] uppercase text-stone-500 block">Temp</span><span class="font-bold text-white">${item.temperature}</span></div>` : ''}
            ${item.phRange ? `<div><span class="text-[9px] uppercase text-stone-500 block">pH</span><span class="font-bold text-white">${item.phRange}</span></div>` : ''}
            ${item.minTankSize ? `<div><span class="text-[9px] uppercase text-stone-500 block">Min Tank</span><span class="font-bold text-white">${item.minTankSize}</span></div>` : ''}
            ${item.careLevel ? `<div><span class="text-[9px] uppercase text-stone-500 block">Care</span><span class="font-bold text-cyan-300">${item.careLevel}</span></div>` : ''}
            ${item.lightDemand ? `<div><span class="text-[9px] uppercase text-stone-500 block">Light</span><span class="font-bold text-white">${item.lightDemand}</span></div>` : ''}
            ${item.co2Demand ? `<div><span class="text-[9px] uppercase text-stone-500 block">CO2</span><span class="font-bold text-white">${item.co2Demand}</span></div>` : ''}
          </div>

          <div class="pt-4 border-t border-stone-800 flex items-center gap-3">
            <button class="flex-1 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
                    onclick="window.AQUARIA_APP.addToCartById('${item.id}'); document.getElementById('product-detail-modal').classList.add('hidden');">
              <i data-lucide="shopping-bag" class="w-4 h-4"></i>
              <span>Add to Cart (${item.priceFormatted})</span>
            </button>
          </div>
        </div>
      </div>
    `;

    productModal.classList.remove('hidden');
    productModal.classList.add('flex');
    if (window.lucide) window.lucide.createIcons();
  }

  document.querySelectorAll('.close-product-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      productModal.classList.add('hidden');
      productModal.classList.remove('flex');
    });
  });

  // --- 10. Shopping Cart Drawer ---
  const cartDrawer = document.getElementById('cart-drawer');
  const cartBackdrop = document.getElementById('cart-backdrop');
  const openCartBtn = document.getElementById('open-cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartBadge = document.getElementById('cart-badge');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartShippingEl = document.getElementById('cart-shipping');
  const cartTotalEl = document.getElementById('cart-total');
  const freeShippingBar = document.getElementById('free-shipping-progress');
  const freeShippingText = document.getElementById('free-shipping-text');
  const checkoutModal = document.getElementById('checkout-modal');

  function openCart() {
    if (!cartDrawer) return;
    cartDrawer.classList.remove('translate-x-full');
    cartBackdrop.classList.remove('hidden');
    updateCartUI();
  }

  function closeCart() {
    if (!cartDrawer) return;
    cartDrawer.classList.add('translate-x-full');
    cartBackdrop.classList.add('hidden');
  }

  if (openCartBtn) openCartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);

  function addToCart(item, qty = 1) {
    const existing = state.cart.find(c => c.item.id === item.id);
    if (existing) {
      existing.qty += qty;
    } else {
      state.cart.push({ item, qty });
    }
    saveCart();
    showToast(`Added ${qty}x "${item.name}" to cart`);
  }

  function updateCartUI() {
    const totalQty = state.cart.reduce((sum, c) => sum + c.qty, 0);
    if (cartBadge) {
      cartBadge.textContent = totalQty;
      cartBadge.classList.toggle('hidden', totalQty === 0);
    }

    if (!cartItemsContainer) return;

    if (state.cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="py-16 text-center text-stone-400">
          <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto mb-3 opacity-30"></i>
          <p class="font-cinzel text-sm text-stone-300">Your aquatic cart is empty.</p>
        </div>
      `;
      if (cartSubtotalEl) cartSubtotalEl.textContent = '$0.00';
      if (cartShippingEl) cartShippingEl.textContent = '$0.00';
      if (cartTotalEl) cartTotalEl.textContent = '$0.00';
      if (freeShippingBar) freeShippingBar.style.width = '0%';
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    let subtotal = 0;
    cartItemsContainer.innerHTML = state.cart.map((c, idx) => {
      const lineTotal = c.item.price * c.qty;
      subtotal += lineTotal;
      return `
        <div class="flex items-center gap-3 p-3 rounded-xl bg-stone-900 border border-stone-800 text-xs">
          <img src="${c.item.image}" alt="${c.item.name}" class="w-12 h-12 rounded-lg object-cover shrink-0">
          <div class="flex-1 min-w-0">
            <h5 class="font-bold font-cinzel text-white truncate">${c.item.name}</h5>
            <span class="text-cyan-400 text-[11px]">${c.item.priceFormatted}</span>
          </div>
          <div class="flex items-center gap-2">
            <button class="cart-qty-btn p-1 rounded bg-stone-800 text-stone-300 hover:bg-stone-700" data-idx="${idx}" data-delta="-1">
              <i data-lucide="minus" class="w-3 h-3"></i>
            </button>
            <span class="w-4 text-center font-bold text-white">${c.qty}</span>
            <button class="cart-qty-btn p-1 rounded bg-stone-800 text-stone-300 hover:bg-stone-700" data-idx="${idx}" data-delta="1">
              <i data-lucide="plus" class="w-3 h-3"></i>
            </button>
          </div>
          <div class="w-16 text-right font-bold text-cyan-300 font-cinzel">
            $${lineTotal.toFixed(2)}
          </div>
        </div>
      `;
    }).join('');

    const threshold = data.store.freeShippingThreshold;
    const shipping = subtotal >= threshold ? 0 : 14.50;
    const grandTotal = subtotal + shipping;

    if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (cartShippingEl) cartShippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (cartTotalEl) cartTotalEl.textContent = `$${grandTotal.toFixed(2)}`;

    if (freeShippingBar && freeShippingText) {
      const percent = Math.min(100, Math.round((subtotal / threshold) * 100));
      freeShippingBar.style.width = `${percent}%`;
      if (subtotal >= threshold) {
        freeShippingText.innerHTML = '<span class="text-emerald-400 font-bold">You unlocked FREE live-arrival insulated shipping!</span>';
      } else {
        const remaining = (threshold - subtotal).toFixed(2);
        freeShippingText.innerHTML = `Add <strong>$${remaining}</strong> more for FREE Live Arrival Shipping`;
      }
    }

    cartItemsContainer.querySelectorAll('.cart-qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx, 10);
        const delta = parseInt(btn.dataset.delta, 10);
        state.cart[idx].qty += delta;
        if (state.cart[idx].qty <= 0) state.cart.splice(idx, 1);
        saveCart();
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  const proceedCheckoutBtn = document.getElementById('proceed-checkout-btn');
  if (proceedCheckoutBtn && checkoutModal) {
    proceedCheckoutBtn.addEventListener('click', () => {
      closeCart();
      checkoutModal.classList.remove('hidden');
      checkoutModal.classList.add('flex');
    });
  }

  document.querySelectorAll('.close-checkout-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      checkoutModal.classList.add('hidden');
      checkoutModal.classList.remove('flex');
    });
  });

  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('chk-name')?.value;
      const ref = 'AQ-' + Math.floor(1000 + Math.random() * 9000);
      alert(`Thank you ${name}! Order ${ref} received. Live arrival insulated shipment is being prepared.`);
      state.cart = [];
      saveCart();
      checkoutModal.classList.add('hidden');
      checkoutModal.classList.remove('flex');
    });
  }

  // --- 11. Audio Ambience & Simulation Controls ---
  const toggleAudioBtn = document.getElementById('toggle-audio-btn');
  function toggleAudio() {
    if (!state.audioEnabled) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        state.audioCtx = new AudioCtx();
        const bufferSize = state.audioCtx.sampleRate * 2;
        const buffer = state.audioCtx.createBuffer(1, bufferSize, state.audioCtx.sampleRate);
        const dataOut = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          dataOut[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = state.audioCtx.createBufferSource();
        whiteNoise.buffer = buffer;
        whiteNoise.loop = true;

        const filter = state.audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 420;
        filter.Q.value = 2.5;

        state.audioGain = state.audioCtx.createGain();
        state.audioGain.gain.value = 0.08;

        whiteNoise.connect(filter);
        filter.connect(state.audioGain);
        state.audioGain.connect(state.audioCtx.destination);
        whiteNoise.start();

        state.audioEnabled = true;
        if (toggleAudioBtn) {
          toggleAudioBtn.classList.add('text-cyan-400', 'border-cyan-400');
        }
        showToast('Ambient water soundscape activated');
      } catch (err) {
        console.error(err);
      }
    } else {
      if (state.audioCtx) state.audioCtx.close();
      state.audioEnabled = false;
      if (toggleAudioBtn) {
        toggleAudioBtn.classList.remove('text-cyan-400', 'border-cyan-400');
      }
    }
  }

  if (toggleAudioBtn) toggleAudioBtn.addEventListener('click', toggleAudio);

  const pauseBtn = document.getElementById('pause-anim-btn');
  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      state.isPaused = !state.isPaused;
      pauseBtn.classList.toggle('text-amber-400', state.isPaused);
      showToast(state.isPaused ? 'Aquarium simulation paused' : 'Aquarium simulation resumed');
    });
  }

  function showToast(msg) {
    let t = document.getElementById('aqua-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'aqua-toast';
      t.className = 'fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl bg-stone-900/95 text-white text-xs border border-cyan-500/40 shadow-2xl backdrop-blur-md transition-all duration-300 transform translate-y-12 opacity-0 flex items-center gap-2.5';
      document.body.appendChild(t);
    }
    t.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-cyan-400"></i> <span>${msg}</span>`;
    if (window.lucide) window.lucide.createIcons();

    t.classList.remove('translate-y-12', 'opacity-0');
    t.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      t.classList.remove('translate-y-0', 'opacity-100');
      t.classList.add('translate-y-12', 'opacity-0');
    }, 3000);
  }

  // Window global exposures
  window.AQUARIA_APP = {
    openProductModalById: (id) => {
      const all = getAllProducts();
      const item = all.find(i => i.id === id);
      if (item) openProductModal(item);
    },
    addToCartById: (id) => {
      const all = getAllProducts();
      const item = all.find(i => i.id === id);
      if (item) addToCart(item, 1);
    },
    goToFish: (idx) => {
      update3DFishTransition(idx);
    },
    openTab: (tabId) => {
      state.activeTab = tabId;
      categoryTabs.forEach(t => {
        if (t.dataset.cat === tabId) {
          t.classList.add('bg-cyan-500', 'text-stone-950', 'font-bold');
          t.classList.remove('bg-stone-900/80', 'text-stone-300');
        } else {
          t.classList.remove('bg-cyan-500', 'text-stone-950', 'font-bold');
          t.classList.add('bg-stone-900/80', 'text-stone-300');
        }
      });
      renderCatalog();
      const catEl = document.getElementById('complete-catalog');
      if (catEl) catEl.scrollIntoView({ behavior: 'smooth' });
    }
  };
});
