// AQUARIA — Living Interactive Aquarium Simulation & E-Commerce Application
// Features: 60FPS Boids & Species Simulation, Hover Tooltips, Habitat Switching, Catalogs, Cart Drawer & Audio

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
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    activeTab: 'all',
    searchQuery: '',
    selectedCareLevel: 'all',
    selectedPlacement: 'all',
    sortBy: 'featured',
    viewMode: 'grid', // 'grid' | 'list'
    cart: JSON.parse(localStorage.getItem('aquaria_cart')) || [],
    hoveredEntity: null,
    audioEnabled: false,
    audioCtx: null,
    audioGain: null
  };

  // --- Persistence ---
  function saveCart() {
    localStorage.setItem('aquaria_cart', JSON.stringify(state.cart));
    updateCartUI();
  }

  // --- 1. Canvas Aquarium Physics & Living Ecosystem Engine ---
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

  // Entities Collection
  let entities = [];
  let bubbles = [];
  let particles = [];
  let plants = [];

  // Initialize Oxygen Bubbles
  function initBubbles() {
    bubbles = [];
    for (let i = 0; i < 35; i++) {
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.8,
        speed: Math.random() * 1.2 + 0.6,
        wobbleSpeed: Math.random() * 0.05 + 0.02,
        wobbleAmp: Math.random() * 2 + 1,
        phase: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.4 + 0.2
      });
    }
  }

  // Initialize Suspended Micro-particles
  function initParticles() {
    particles = [];
    for (let i = 0; i < 45; i++) {
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

  // Initialize Background & Midground Plant Stems
  function initSubstrateAndPlants() {
    plants = [];
    const sandY = height - 70;

    // Left Vallisneria Thicket
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

    // Right Rotala & Amazon Swords
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

    // Center-left Anubias clusters on driftwood
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

    // Center-right Monte Carlo patch
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

  // --- Spawn Species for Current Habitat ---
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
          name: 'Neon Tetra',
          scientificName: 'Paracheirodon innesi',
          x: centerX + (Math.random() - 0.5) * 160,
          y: centerY + (Math.random() - 0.5) * 90,
          vx: Math.random() * 1.4 + 0.8,
          vy: (Math.random() - 0.5) * 0.4,
          speed: 1.2,
          length: 30,
          height: 10,
          tailPhase: Math.random() * Math.PI * 2,
          depth: Math.random() * 0.5 + 0.75, // scale
          schoolId: 'neon-school',
          schoolLeader: i === 0,
          type: 'fish'
        });
      }
    }

    // 2. Harlequin Rasboras (5 entities - Schooling)
    if (allowed.includes('harlequin-rasbora')) {
      const centerX = width * 0.65;
      const centerY = height * 0.32;
      for (let i = 0; i < 5; i++) {
        entities.push({
          id: 'harlequin-rasbora',
          species: 'harlequin-rasbora',
          name: 'Harlequin Rasbora',
          scientificName: 'Trigonostigma heteromorpha',
          x: centerX + (Math.random() - 0.5) * 140,
          y: centerY + (Math.random() - 0.5) * 80,
          vx: -(Math.random() * 1.3 + 0.7),
          vy: (Math.random() - 0.5) * 0.4,
          speed: 1.1,
          length: 34,
          height: 14,
          tailPhase: Math.random() * Math.PI * 2,
          depth: Math.random() * 0.4 + 0.8,
          schoolId: 'harlequin-school',
          schoolLeader: i === 0,
          type: 'fish'
        });
      }
    }

    // 3. Fancy Guppies (3 entities - Mid/Surface Flowing Fins)
    if (allowed.includes('fancy-guppy')) {
      for (let i = 0; i < 3; i++) {
        entities.push({
          id: 'fancy-guppy',
          species: 'fancy-guppy',
          name: 'Fancy Sunset Guppy',
          scientificName: 'Poecilia reticulata',
          x: width * 0.2 + Math.random() * (width * 0.6),
          y: height * 0.18 + Math.random() * (height * 0.22),
          vx: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.9 + 0.6),
          vy: (Math.random() - 0.5) * 0.35,
          speed: 0.9,
          length: 38,
          height: 12,
          tailPhase: Math.random() * Math.PI * 2,
          depth: 1.05,
          type: 'fish'
        });
      }
    }

    // 4. Honey Gouramis (2 entities - Slow Near Plants)
    if (allowed.includes('honey-gourami')) {
      for (let i = 0; i < 2; i++) {
        entities.push({
          id: 'honey-gourami',
          species: 'honey-gourami',
          name: 'Sunset Honey Gourami',
          scientificName: 'Trichogaster chuna',
          x: (i === 0 ? width * 0.22 : width * 0.78) + (Math.random() - 0.5) * 60,
          y: height * 0.45 + (Math.random() - 0.5) * 80,
          vx: (i === 0 ? 1 : -1) * 0.5,
          vy: (Math.random() - 0.5) * 0.2,
          speed: 0.45,
          length: 46,
          height: 22,
          tailPhase: Math.random() * Math.PI * 2,
          depth: 1.15,
          type: 'fish'
        });
      }
    }

    // 5. Freshwater Angelfish (1 entity - Majestic Glider)
    if (allowed.includes('angelfish')) {
      entities.push({
        id: 'angelfish',
        species: 'angelfish',
        name: 'Freshwater Angelfish',
        scientificName: 'Pterophyllum scalare',
        x: width * 0.5,
        y: height * 0.38,
        vx: 0.6,
        vy: 0.1,
        speed: 0.55,
        length: 58,
        height: 64, // Tall disc shape
        tailPhase: 0,
        depth: 1.3,
        type: 'fish'
      });
    }

    // 6. Chili Rasboras (4 entities - Micro loose school)
    if (allowed.includes('chili-rasbora')) {
      const centerX = width * 0.48;
      const centerY = height * 0.52;
      for (let i = 0; i < 4; i++) {
        entities.push({
          id: 'chili-rasbora',
          species: 'chili-rasbora',
          name: 'Chili Rasbora',
          scientificName: 'Boraras brigittae',
          x: centerX + (Math.random() - 0.5) * 90,
          y: centerY + (Math.random() - 0.5) * 60,
          vx: Math.random() * 1.5 + 0.8,
          vy: (Math.random() - 0.5) * 0.5,
          speed: 1.3,
          length: 20,
          height: 6,
          tailPhase: Math.random() * Math.PI * 2,
          depth: 0.8,
          schoolId: 'chili-school',
          schoolLeader: i === 0,
          type: 'fish'
        });
      }
    }

    // 7. Panda Corydoras (3 entities - Substrate Crawlers)
    if (allowed.includes('panda-corydoras')) {
      for (let i = 0; i < 3; i++) {
        entities.push({
          id: 'panda-corydoras',
          species: 'panda-corydoras',
          name: 'Panda Corydoras',
          scientificName: 'Corydoras panda',
          x: width * 0.25 + i * (width * 0.22) + (Math.random() - 0.5) * 50,
          y: sandY + 10 + (Math.random() - 0.5) * 15,
          vx: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.7 + 0.4),
          vy: 0,
          speed: 0.6,
          length: 36,
          height: 14,
          tailPhase: Math.random() * Math.PI * 2,
          depth: 1.0,
          isBottomDweller: true,
          type: 'fish'
        });
      }
    }

    // 8. Blue Dream Shrimp (4 entities - Crawling on wood & substrate)
    if (allowed.includes('blue-dream-shrimp')) {
      for (let i = 0; i < 4; i++) {
        entities.push({
          id: 'blue-dream-shrimp',
          species: 'blue-dream-shrimp',
          name: 'Blue Dream Shrimp',
          scientificName: "Neocaridina davidi 'Blue Dream'",
          x: width * 0.2 + i * (width * 0.18) + (Math.random() - 0.5) * 40,
          y: sandY - 20 + (Math.random() - 0.5) * 30,
          vx: (Math.random() > 0.5 ? 0.3 : -0.3),
          vy: (Math.random() - 0.5) * 0.15,
          speed: 0.35,
          length: 22,
          height: 8,
          depth: 0.85,
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

  // --- Rendering Helpers for Specific Fish Anatomies ---
  function drawNeonTetra(ctx, e, facingRight, hovered) {
    const scale = hovered ? 1.15 : 1.0;
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.scale(facingRight ? scale : -scale, scale);

    // Body base
    ctx.beginPath();
    ctx.ellipse(0, 0, 15, 6, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#CBD5E1';
    ctx.fill();

    // Iridescent Neon Blue Top Stripe
    ctx.beginPath();
    ctx.moveTo(-12, -2);
    ctx.lineTo(8, -1);
    ctx.strokeStyle = '#00F0FF';
    ctx.lineWidth = 2.8;
    ctx.shadowColor = '#00F0FF';
    ctx.shadowBlur = hovered ? 10 : 4;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Glowing Crimson Red Stripe (Posterior half)
    ctx.beginPath();
    ctx.moveTo(-2, 1);
    ctx.lineTo(14, 2);
    ctx.strokeStyle = '#EF4444';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = '#EF4444';
    ctx.shadowBlur = hovered ? 8 : 2;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Tail fin with sinusoidal oscillation
    const tailWiggle = Math.sin(e.tailPhase) * 4;
    ctx.beginPath();
    ctx.moveTo(-14, 0);
    ctx.lineTo(-22, -6 + tailWiggle);
    ctx.lineTo(-19, tailWiggle * 0.5);
    ctx.lineTo(-22, 6 + tailWiggle);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.fill();

    // Eye
    ctx.beginPath();
    ctx.arc(9, -1, 1.8, 0, Math.PI * 2);
    ctx.fillStyle = '#0F172A';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(9.4, -1.3, 0.6, 0, Math.PI * 2);
    ctx.fillStyle = '#67E8F9';
    ctx.fill();

    ctx.restore();
  }

  function drawHarlequinRasbora(ctx, e, facingRight, hovered) {
    const scale = hovered ? 1.15 : 1.0;
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.scale(facingRight ? scale : -scale, scale);

    // Deep body
    ctx.beginPath();
    ctx.ellipse(0, 0, 16, 8, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#FB923C'; // Copper tone
    ctx.fill();

    // Metallic Pink/Gold shimmer sheen
    ctx.beginPath();
    ctx.ellipse(-2, -2, 10, 4, -0.1, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(253, 186, 116, 0.4)';
    ctx.fill();

    // Velvety Black Triangle Patch
    ctx.beginPath();
    ctx.moveTo(2, -4);
    ctx.lineTo(1, 6);
    ctx.lineTo(-13, 1);
    ctx.closePath();
    ctx.fillStyle = '#0F172A';
    ctx.fill();

    // Tail
    const tailWiggle = Math.sin(e.tailPhase) * 4;
    ctx.beginPath();
    ctx.moveTo(-15, 0);
    ctx.lineTo(-24, -7 + tailWiggle);
    ctx.lineTo(-20, tailWiggle * 0.5);
    ctx.lineTo(-24, 7 + tailWiggle);
    ctx.closePath();
    ctx.fillStyle = 'rgba(251, 146, 60, 0.55)';
    ctx.fill();

    // Eye
    ctx.beginPath();
    ctx.arc(10, -2, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#000000';
    ctx.fill();

    ctx.restore();
  }

  function drawFancyGuppy(ctx, e, facingRight, hovered) {
    const scale = hovered ? 1.15 : 1.0;
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.scale(facingRight ? scale : -scale, scale);

    // Slender Body
    ctx.beginPath();
    ctx.ellipse(5, 0, 14, 5, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#38BDF8';
    ctx.fill();

    // Giant Flowing Sunset Veil Tail
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

    // Eye
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

    // Oval Honey Body
    ctx.beginPath();
    ctx.ellipse(0, 0, 22, 12, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#FBBF24'; // Warm honey amber
    ctx.fill();

    // Golden dorsal & anal fins
    ctx.beginPath();
    ctx.arc(-2, -12, 14, Math.PI * 0.9, Math.PI * 1.9);
    ctx.fillStyle = 'rgba(245, 158, 11, 0.7)';
    ctx.fill();

    // Thread-like Pelvic Feeler Fin (signature gourami feature)
    ctx.beginPath();
    ctx.moveTo(8, 6);
    ctx.quadraticCurveTo(2, 22, -12, 24);
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // Rounded tail
    const wiggle = Math.sin(e.tailPhase) * 3;
    ctx.beginPath();
    ctx.ellipse(-24, wiggle, 8, 8, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(251, 191, 36, 0.6)';
    ctx.fill();

    // Eye
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

    // Tall Diamond Disc Body
    ctx.beginPath();
    ctx.moveTo(25, 0);
    ctx.lineTo(0, -22);
    ctx.lineTo(-24, 0);
    ctx.lineTo(0, 22);
    ctx.closePath();
    ctx.fillStyle = '#E2E8F0';
    ctx.fill();

    // Subtle dark vertical stripes (Zebra pattern)
    ctx.beginPath();
    ctx.moveTo(5, -18);
    ctx.lineTo(5, 18);
    ctx.moveTo(-10, -14);
    ctx.lineTo(-10, 14);
    ctx.strokeStyle = 'rgba(30, 41, 59, 0.45)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Dramatic Tall Dorsal Fin
    ctx.beginPath();
    ctx.moveTo(0, -22);
    ctx.quadraticCurveTo(-15, -45, -35, -55);
    ctx.quadraticCurveTo(-20, -32, -15, -12);
    ctx.closePath();
    ctx.fillStyle = 'rgba(226, 232, 240, 0.7)';
    ctx.fill();

    // Dramatic Elongated Ventral Feelers
    ctx.beginPath();
    ctx.moveTo(8, 12);
    ctx.lineTo(-10, 60);
    ctx.strokeStyle = '#E2E8F0';
    ctx.lineWidth = 1.6;
    ctx.stroke();

    // Fan tail
    ctx.beginPath();
    ctx.moveTo(-24, 0);
    ctx.lineTo(-40, -15);
    ctx.lineTo(-34, 0);
    ctx.lineTo(-40, 15);
    ctx.closePath();
    ctx.fillStyle = 'rgba(226, 232, 240, 0.6)';
    ctx.fill();

    // Eye with red iris
    ctx.beginPath();
    ctx.arc(16, -4, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#EF4444';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(16.5, -4, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = '#0F172A';
    ctx.fill();

    ctx.restore();
  }

  function drawChiliRasbora(ctx, e, facingRight, hovered) {
    const scale = hovered ? 1.2 : 1.0;
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.scale(facingRight ? scale : -scale, scale);

    // Vivid Ruby Body
    ctx.beginPath();
    ctx.ellipse(0, 0, 10, 3.5, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#DC2626'; // Vivid ruby red
    ctx.shadowColor = '#DC2626';
    ctx.shadowBlur = hovered ? 8 : 2;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Black longitudinal spot
    ctx.beginPath();
    ctx.ellipse(-2, 0, 4, 1.5, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#18181B';
    ctx.fill();

    // Tail
    ctx.beginPath();
    ctx.moveTo(-10, 0);
    ctx.lineTo(-15, -3);
    ctx.lineTo(-13, 0);
    ctx.lineTo(-15, 3);
    ctx.closePath();
    ctx.fillStyle = 'rgba(239, 68, 68, 0.6)';
    ctx.fill();

    // Eye
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

    // Buff-colored compact body
    ctx.beginPath();
    ctx.ellipse(0, 0, 17, 8, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#E2D9C8';
    ctx.fill();

    // Jet-Black Eye Mask (Panda mask)
    ctx.beginPath();
    ctx.ellipse(11, -2, 4.5, 7, 0.3, 0, Math.PI * 2);
    ctx.fillStyle = '#09090B';
    ctx.fill();

    // Dorsal Fin Black Spot
    ctx.beginPath();
    ctx.moveTo(-2, -7);
    ctx.lineTo(4, -16);
    ctx.lineTo(8, -8);
    ctx.closePath();
    ctx.fillStyle = '#09090B';
    ctx.fill();

    // Caudal Peduncle Black Spot
    ctx.beginPath();
    ctx.arc(-14, 0, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = '#09090B';
    ctx.fill();

    // Foraging Barbels at mouth
    ctx.beginPath();
    ctx.moveTo(17, 2);
    ctx.lineTo(21, 5);
    ctx.strokeStyle = '#D1C7B7';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // Tail
    const wiggle = Math.sin(e.tailPhase) * 3;
    ctx.beginPath();
    ctx.moveTo(-16, 0);
    ctx.lineTo(-24, -6 + wiggle);
    ctx.lineTo(-21, wiggle * 0.5);
    ctx.lineTo(-24, 6 + wiggle);
    ctx.closePath();
    ctx.fillStyle = 'rgba(226, 217, 200, 0.6)';
    ctx.fill();

    ctx.restore();
  }

  function drawBlueDreamShrimp(ctx, e, facingRight, hovered) {
    const scale = hovered ? 1.2 : 1.0;
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.scale(facingRight ? scale : -scale, scale);

    // Curved arched carapace (Deep sapphire blue)
    ctx.beginPath();
    ctx.moveTo(8, -2);
    ctx.quadraticCurveTo(0, -7, -8, -1);
    ctx.quadraticCurveTo(-14, 5, -18, 4);
    ctx.lineTo(-12, 1);
    ctx.quadraticCurveTo(-2, 2, 8, -2);
    ctx.fillStyle = '#0284C7';
    ctx.shadowColor = '#38BDF8';
    ctx.shadowBlur = hovered ? 8 : 2;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Walking legs
    ctx.strokeStyle = '#38BDF8';
    ctx.lineWidth = 1;
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(4 - i * 4, 1);
      ctx.lineTo(2 - i * 4, 6);
      ctx.stroke();
    }

    // Long sweeping Antennae
    ctx.beginPath();
    ctx.moveTo(8, -2);
    ctx.quadraticCurveTo(18, -10, 26, -14);
    ctx.strokeStyle = 'rgba(125, 211, 252, 0.6)';
    ctx.lineWidth = 0.8;
    ctx.stroke();

    // Eye
    ctx.beginPath();
    ctx.arc(7, -3, 1.2, 0, Math.PI * 2);
    ctx.fillStyle = '#000';
    ctx.fill();

    ctx.restore();
  }

  // Draw Specific Fish by Species
  function drawFishEntity(ctx, e) {
    const isHovered = state.hoveredEntity && state.hoveredEntity.entity === e;
    const facingRight = e.vx >= 0;

    switch (e.species) {
      case 'neon-tetra':
        drawNeonTetra(ctx, e, facingRight, isHovered);
        break;
      case 'harlequin-rasbora':
        drawHarlequinRasbora(ctx, e, facingRight, isHovered);
        break;
      case 'fancy-guppy':
        drawFancyGuppy(ctx, e, facingRight, isHovered);
        break;
      case 'honey-gourami':
        drawHoneyGourami(ctx, e, facingRight, isHovered);
        break;
      case 'angelfish':
        drawAngelfish(ctx, e, facingRight, isHovered);
        break;
      case 'chili-rasbora':
        drawChiliRasbora(ctx, e, facingRight, isHovered);
        break;
      case 'panda-corydoras':
        drawPandaCorydoras(ctx, e, facingRight, isHovered);
        break;
      case 'blue-dream-shrimp':
        drawBlueDreamShrimp(ctx, e, facingRight, isHovered);
        break;
      default:
        drawNeonTetra(ctx, e, facingRight, isHovered);
    }
  }

  // --- Substrate & Hardscape Drawing ---
  function drawSubstrateAndHardscape(ctx, time) {
    const sandY = height - 70;

    // Substrate bed
    const sandGrad = ctx.createLinearGradient(0, sandY, 0, height);
    sandGrad.addColorStop(0, '#B8860B'); // Warm golden sand
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

    // Natural Driftwood Roots & Branches
    ctx.strokeStyle = '#2B1810';
    ctx.fillStyle = '#1F110B';
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.beginPath();
    // Central branch
    ctx.moveTo(width * 0.28, sandY + 10);
    ctx.quadraticCurveTo(width * 0.35, sandY - 120, width * 0.42, sandY - 180);
    ctx.quadraticCurveTo(width * 0.48, sandY - 140, width * 0.56, sandY + 5);
    ctx.stroke();

    // Secondary gnarly twig
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(width * 0.42, sandY - 180);
    ctx.quadraticCurveTo(width * 0.46, sandY - 240, width * 0.52, sandY - 260);
    ctx.stroke();

    // River Stones / Seiryu Rocks
    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.ellipse(width * 0.33, sandY - 10, 38, 22, -0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#334155';
    ctx.beginPath();
    ctx.ellipse(width * 0.62, sandY - 5, 45, 26, 0.15, 0, Math.PI * 2);
    ctx.fill();
  }

  // Draw Plant Layers
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

        // Tip highlight
        ctx.beginPath();
        ctx.moveTo(p.x + sway * 0.8, p.y - p.height * 0.8);
        ctx.lineTo(p.x + sway, p.y - p.height);
        ctx.strokeStyle = p.tipColor;
        ctx.lineWidth = p.width * 0.7;
        ctx.stroke();
      } else if (p.type === 'rotala') {
        const sway = Math.sin(time * p.swaySpeed + p.swayOffset) * 12;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.quadraticCurveTo(p.x + sway * 0.5, p.y - p.height * 0.6, p.x + sway, p.y - p.height);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.width;
        ctx.stroke();

        // Rotala pink top leaves
        ctx.beginPath();
        ctx.arc(p.x + sway, p.y - p.height, 6, 0, Math.PI * 2);
        ctx.fillStyle = p.tipColor;
        ctx.fill();
      } else if (p.type === 'anubias') {
        // Broad deep green leaves
        for (let l = 0; l < 5; l++) {
          const angle = (l * Math.PI) / 3 - 0.5;
          ctx.beginPath();
          ctx.ellipse(p.x + Math.cos(angle) * 20, p.y + Math.sin(angle) * 15, 18, 10, angle, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
          ctx.strokeStyle = '#052E16';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      } else if (p.type === 'monte-carlo') {
        // Bright green carpet clumps
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

  // --- Main Animation Render Loop (60 FPS) ---
  let lastTime = 0;
  function animate(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const dt = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    if (!state.isPaused) {
      // 1. Clear & Background Gradient for Active Habitat
      const hConfig = data.habitats.find(h => h.id === state.currentHabitat) || data.habitats[0];
      ctx.clearRect(0, 0, width, height);

      // Deep aquatic gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#041215');
      bgGrad.addColorStop(0.4, '#082126');
      bgGrad.addColorStop(0.8, '#0B2C33');
      bgGrad.addColorStop(1, '#0E3740');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Caustics water light wave effect
      const causticIntensity = (Math.sin(timestamp * 0.001) + 1) * 0.5;
      const causticGrad = ctx.createRadialGradient(width * 0.5, 0, 20, width * 0.5, 0, width * 0.7);
      causticGrad.addColorStop(0, hConfig.causticColor);
      causticGrad.addColorStop(0.6, 'transparent');
      ctx.fillStyle = causticGrad;
      ctx.fillRect(0, 0, width, height);

      // 3. Draw Substrate & Hardscape
      drawSubstrateAndHardscape(ctx, timestamp * 0.001);

      // 4. Draw Layered Aquatic Plants
      drawPlants(ctx, timestamp * 0.001);

      // 5. Update & Draw Oxygen Bubbles
      ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
      bubbles.forEach(b => {
        b.y -= b.speed;
        b.phase += b.wobbleSpeed;
        const currentX = b.x + Math.sin(b.phase) * b.wobbleAmp;

        if (b.y < -10) {
          b.y = height + 10;
          b.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(currentX, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity})`;
        ctx.fill();
      });

      // 6. Update & Draw Micro-particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(103, 232, 249, ${p.opacity})`;
        ctx.fill();
      });

      // 7. Update & Draw Fish Entities
      const sandY = height - 70;
      entities.forEach(e => {
        const isHovered = state.hoveredEntity && state.hoveredEntity.entity === e;

        // If hovered, gently slow down
        const currentSpeed = isHovered ? e.speed * 0.25 : e.speed;
        e.tailPhase += isHovered ? 0.08 : 0.22;

        e.x += e.vx * currentSpeed;
        e.y += e.vy * currentSpeed;

        // Boundaries and Natural Turns
        const marginX = 60;
        if (e.x > width - marginX && e.vx > 0) {
          e.vx = -Math.abs(e.vx);
        } else if (e.x < marginX && e.vx < 0) {
          e.vx = Math.abs(e.vx);
        }

        // Vertical Boundaries
        if (e.isBottomDweller) {
          // Keep near sand
          if (e.y < sandY - 30) e.vy += 0.05;
          if (e.y > sandY + 25) e.vy -= 0.05;
        } else if (e.isShrimp) {
          // Crawl and occasionally flick
          if (e.y < sandY - 50) e.vy += 0.04;
          if (e.y > sandY + 15) e.vy -= 0.04;
        } else {
          // Pelagic fish
          const topMargin = 90;
          const bottomMargin = sandY - 60;
          if (e.y < topMargin && e.vy < 0) {
            e.vy = Math.abs(e.vy);
          } else if (e.y > bottomMargin && e.vy > 0) {
            e.vy = -Math.abs(e.vy);
          }
        }

        // Gentle random course variations
        if (Math.random() < 0.02) {
          e.vy += (Math.random() - 0.5) * 0.15;
          e.vy = Math.max(-0.6, Math.min(0.6, e.vy));
        }

        drawFishEntity(ctx, e);
      });
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  // --- 2. Interactive Fish & Plant Hover Tooltips ---
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

    // Check Fish entities first
    for (let i = 0; i < entities.length; i++) {
      const e = entities[i];
      const dist = Math.hypot(mouseX - e.x, mouseY - e.y);
      if (dist < Math.max(e.length, e.height) * 0.8 + 15) {
        found = { type: 'fish', entity: e, item: data.fish.find(f => f.id === e.species) };
        break;
      }
    }

    // Check plant clusters if no fish hovered
    if (!found) {
      for (let i = 0; i < plants.length; i++) {
        const p = plants[i];
        const dist = Math.hypot(mouseX - p.x, mouseY - (p.y - p.height * 0.5));
        if (dist < 40) {
          found = { type: 'plant', entity: p, item: data.plants.find(pl => pl.id === p.clusterId) };
          break;
        }
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
    if (tooltipStock) {
      tooltipStock.textContent = item.inStock ? 'Quarantined & Healthy' : 'Backorder';
    }

    // Attach actions
    if (tooltipDetailsBtn) {
      tooltipDetailsBtn.onclick = () => openProductModal(item);
    }
    if (tooltipCartBtn) {
      tooltipCartBtn.onclick = (e) => {
        e.stopPropagation();
        addToCart(item, 1);
      };
    }

    // Clamped viewport positioning
    let posX = mouseX + 20;
    let posY = mouseY - 60;
    const tooltipWidth = 260;
    const tooltipHeight = 150;

    if (posX + tooltipWidth > window.innerWidth - 20) {
      posX = mouseX - tooltipWidth - 20;
    }
    if (posY + tooltipHeight > window.innerHeight - 20) {
      posY = window.innerHeight - tooltipHeight - 20;
    }
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

  // Mobile Touch Support
  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      checkPointerHover(touch.clientX, touch.clientY);
    }
  }, { passive: true });

  // --- 3. Habitat Switcher ---
  const habitatButtons = document.querySelectorAll('.habitat-tab-btn');
  const habitatTitle = document.getElementById('current-habitat-name');
  const habitatDesc = document.getElementById('current-habitat-desc');

  function switchHabitat(habitatId) {
    state.currentHabitat = habitatId;
    const h = data.habitats.find(item => item.id === habitatId) || data.habitats[0];

    // Update active tab buttons
    habitatButtons.forEach(btn => {
      if (btn.dataset.habitat === habitatId) {
        btn.classList.add('bg-cyan-500', 'text-stone-950', 'font-bold');
        btn.classList.remove('bg-stone-900/80', 'text-stone-300');
      } else {
        btn.classList.remove('bg-cyan-500', 'text-stone-950', 'font-bold');
        btn.classList.add('bg-stone-900/80', 'text-stone-300');
      }
    });

    if (habitatTitle) habitatTitle.textContent = h.name;
    if (habitatDesc) habitatDesc.textContent = h.description;

    // Smooth transition: repopulate entities with animation
    spawnHabitatEntities(habitatId);
    showToast(`Switched Habitat: ${h.name}`);
  }

  habitatButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchHabitat(btn.dataset.habitat);
    });
  });

  // --- 4. Catalogs, Search & Filtering ---
  const catalogGrid = document.getElementById('catalog-products-grid');
  const categoryTabs = document.querySelectorAll('.catalog-cat-tab');
  const catalogSearchInput = document.getElementById('catalog-search-input');
  const careFilterSelect = document.getElementById('filter-care-level');
  const sortSelect = document.getElementById('sort-products-select');
  const viewGridBtn = document.getElementById('view-grid-btn');
  const viewListBtn = document.getElementById('view-list-btn');

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

    // 1. Category Tab Filter
    if (state.activeTab !== 'all') {
      items = items.filter(i => i.category === state.activeTab);
    }

    // 2. Search Query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      items = items.filter(i => 
        i.name.toLowerCase().includes(q) ||
        (i.scientificName && i.scientificName.toLowerCase().includes(q)) ||
        (i.description && i.description.toLowerCase().includes(q))
      );
    }

    // 3. Care Filter (for fish)
    if (state.selectedCareLevel !== 'all') {
      items = items.filter(i => i.careLevel && i.careLevel.toLowerCase().includes(state.selectedCareLevel.toLowerCase()));
    }

    // 4. Sorting
    if (state.sortBy === 'price-low') {
      items.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price-high') {
      items.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === 'name') {
      items.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (items.length === 0) {
      catalogGrid.innerHTML = `
        <div class="col-span-full py-20 text-center text-stone-400">
          <i data-lucide="waves" class="w-10 h-10 mx-auto mb-3 opacity-30"></i>
          <p class="text-base font-cinzel text-stone-200">No aquatic specimens found matching "${state.searchQuery}"</p>
          <button id="reset-catalog-btn" class="mt-3 px-4 py-2 rounded-xl text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            Reset Filters
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-catalog-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.activeTab = 'all';
          state.searchQuery = '';
          if (catalogSearchInput) catalogSearchInput.value = '';
          renderCategoryTabs();
          renderCatalog();
        });
      }
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    // Render Grid vs List View
    if (state.viewMode === 'list') {
      catalogGrid.className = 'space-y-3';
      catalogGrid.innerHTML = items.map(item => `
        <div class="aqua-card p-4 rounded-2xl flex items-center justify-between gap-4 cursor-pointer group" onclick="window.AQUARIA_APP.openProductModalById('${item.id}')">
          <div class="flex items-center gap-4">
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover shrink-0">
            <div>
              <span class="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">${item.category}</span>
              <h4 class="font-bold font-cinzel text-sm text-white group-hover:text-cyan-300 transition-colors">${item.name}</h4>
              <span class="text-xs text-stone-400 italic block">${item.scientificName || item.style || ''}</span>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="text-right">
              <span class="text-base font-bold text-cyan-300 font-cinzel">${item.priceFormatted}</span>
              <span class="text-[11px] text-emerald-400 block">In Stock</span>
            </div>
            <button class="add-cart-btn px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-stone-950 font-bold text-xs uppercase transition-all"
                    onclick="event.stopPropagation(); window.AQUARIA_APP.addToCartById('${item.id}')">
              Add
            </button>
          </div>
        </div>
      `).join('');
    } else {
      catalogGrid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
      catalogGrid.innerHTML = items.map(item => `
        <div class="aqua-card rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer" onclick="window.AQUARIA_APP.openProductModalById('${item.id}')">
          <div class="relative h-52 overflow-hidden">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/30 to-transparent"></div>
            
            <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-stone-900/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm">
              ${item.badge || item.category}
            </span>
            <div class="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-stone-950/80 backdrop-blur-md text-sm font-bold text-cyan-300 font-cinzel border border-cyan-500/20">
              ${item.priceFormatted}
            </div>
          </div>

          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-[10px] uppercase font-bold tracking-widest text-cyan-400 block mb-1">${item.subCategory || item.placementTag || item.style || item.category}</span>
              <h4 class="font-bold font-cinzel text-base text-white group-hover:text-cyan-200 transition-colors mb-1 leading-snug">
                ${item.name}
              </h4>
              <p class="text-xs text-stone-400 italic mb-3">${item.scientificName || ''}</p>
              <p class="text-xs text-stone-300/80 line-clamp-2 leading-relaxed mb-4">
                ${item.description}
              </p>
            </div>

            <div class="pt-3 border-t border-cyan-500/15 flex items-center gap-2">
              <button class="flex-1 py-2.5 rounded-xl text-xs font-bold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-cyan-500/20 transition-all flex items-center justify-center gap-1.5"
                      onclick="event.stopPropagation(); window.AQUARIA_APP.openProductModalById('${item.id}')">
                <i data-lucide="eye" class="w-3.5 h-3.5 text-cyan-400"></i>
                <span>View Details</span>
              </button>
              <button class="px-4 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-stone-950 transition-all flex items-center justify-center shadow-lg"
                      onclick="event.stopPropagation(); window.AQUARIA_APP.addToCartById('${item.id}')">
                <i data-lucide="plus" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function renderCategoryTabs() {
    categoryTabs.forEach(tab => {
      if (tab.dataset.cat === state.activeTab) {
        tab.classList.add('bg-cyan-500', 'text-stone-950', 'font-bold');
        tab.classList.remove('bg-stone-900/80', 'text-stone-300');
      } else {
        tab.classList.remove('bg-cyan-500', 'text-stone-950', 'font-bold');
        tab.classList.add('bg-stone-900/80', 'text-stone-300');
      }
    });
  }

  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      state.activeTab = tab.dataset.cat;
      renderCategoryTabs();
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

  if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener('click', () => {
      state.viewMode = 'grid';
      viewGridBtn.classList.add('text-cyan-400');
      viewListBtn.classList.remove('text-cyan-400');
      renderCatalog();
    });
    viewListBtn.addEventListener('click', () => {
      state.viewMode = 'list';
      viewListBtn.classList.add('text-cyan-400');
      viewGridBtn.classList.remove('text-cyan-400');
      renderCatalog();
    });
  }

  renderCategoryTabs();
  renderCatalog();

  // --- 5. Product Detail Modal Engine ---
  const productModal = document.getElementById('product-detail-modal');
  const modalContentBox = document.getElementById('product-modal-content');

  function openProductModal(item) {
    if (!productModal || !modalContentBox) return;

    modalContentBox.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Media Gallery -->
        <div class="lg:col-span-5 space-y-3">
          <div class="relative h-80 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
            <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-stone-900/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
              ${item.badge || item.category}
            </span>
          </div>
          <div class="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-stone-300 space-y-2">
            <div class="flex items-center gap-2 text-emerald-400 font-bold">
              <i data-lucide="shield-check" class="w-4 h-4"></i>
              <span>100% Live Arrival Guarantee</span>
            </div>
            <p class="text-[11px] text-stone-400">Insulated thermal box with pure oxygen pack included with livestock.</p>
          </div>
        </div>

        <!-- Spec & Care Data -->
        <div class="lg:col-span-7 space-y-5">
          <div>
            <span class="text-xs uppercase font-bold tracking-widest text-cyan-400">${item.subCategory || item.category}</span>
            <h2 class="text-2xl sm:text-3xl font-bold font-cinzel text-white mt-1">${item.name}</h2>
            <p class="text-sm text-stone-400 italic mb-3">${item.scientificName || ''}</p>
            <div class="flex items-baseline gap-3">
              <span class="text-2xl font-bold text-cyan-300 font-cinzel">${item.priceFormatted}</span>
              ${item.packText ? `<span class="text-xs text-amber-300 font-medium">or ${item.packText}</span>` : ''}
            </div>
          </div>

          <p class="text-xs text-stone-300 leading-relaxed">
            ${item.description}
          </p>

          <!-- Water & Biology Specifications Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-xl bg-stone-900/80 border border-cyan-500/20 text-xs">
            ${item.temperature ? `
              <div>
                <span class="text-[10px] uppercase text-stone-500 block">Temperature</span>
                <span class="font-bold text-white">${item.temperature}</span>
              </div>
            ` : ''}
            ${item.phRange ? `
              <div>
                <span class="text-[10px] uppercase text-stone-500 block">pH Range</span>
                <span class="font-bold text-white">${item.phRange}</span>
              </div>
            ` : ''}
            ${item.minTankSize ? `
              <div>
                <span class="text-[10px] uppercase text-stone-500 block">Min Tank</span>
                <span class="font-bold text-white">${item.minTankSize}</span>
              </div>
            ` : ''}
            ${item.careLevel ? `
              <div>
                <span class="text-[10px] uppercase text-stone-500 block">Care Level</span>
                <span class="font-bold text-cyan-300">${item.careLevel}</span>
              </div>
            ` : ''}
            ${item.lightDemand ? `
              <div>
                <span class="text-[10px] uppercase text-stone-500 block">Light</span>
                <span class="font-bold text-white">${item.lightDemand}</span>
              </div>
            ` : ''}
            ${item.co2Demand ? `
              <div>
                <span class="text-[10px] uppercase text-stone-500 block">CO2</span>
                <span class="font-bold text-white">${item.co2Demand}</span>
              </div>
            ` : ''}
            ${item.dimensions ? `
              <div>
                <span class="text-[10px] uppercase text-stone-500 block">Dimensions</span>
                <span class="font-bold text-white">${item.dimensions}</span>
              </div>
            ` : ''}
            ${item.volume ? `
              <div>
                <span class="text-[10px] uppercase text-stone-500 block">Volume</span>
                <span class="font-bold text-cyan-300">${item.volume}</span>
              </div>
            ` : ''}
          </div>

          <!-- Compatible Tank Mates / Setup Features -->
          ${item.tankMates ? `
            <div>
              <span class="text-xs font-bold text-stone-300 block mb-1.5">Compatible Tank Mates:</span>
              <div class="flex flex-wrap gap-1.5">
                ${item.tankMates.map(tm => `
                  <span class="text-[11px] px-2.5 py-1 rounded-lg bg-stone-800 text-cyan-300 border border-cyan-500/20">
                    ${tm}
                  </span>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Add to Cart Quantity Selector -->
          <div class="pt-4 border-t border-stone-800 flex items-center gap-4">
            <div class="flex items-center rounded-xl bg-stone-900 border border-stone-700 p-1">
              <button id="modal-qty-minus" class="p-2 rounded-lg text-stone-300 hover:bg-stone-800">
                <i data-lucide="minus" class="w-4 h-4"></i>
              </button>
              <span id="modal-qty-val" class="w-10 text-center font-bold text-white text-sm">1</span>
              <button id="modal-qty-plus" class="p-2 rounded-lg text-stone-300 hover:bg-stone-800">
                <i data-lucide="plus" class="w-4 h-4"></i>
              </button>
            </div>

            <button id="modal-add-cart-btn" class="flex-1 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg">
              <i data-lucide="shopping-bag" class="w-4 h-4"></i>
              <span>Add to Cart (${item.priceFormatted})</span>
            </button>
          </div>
        </div>
      </div>
    `;

    // Modal Qty Logic
    let currentQty = 1;
    const qtyVal = document.getElementById('modal-qty-val');
    const btnMinus = document.getElementById('modal-qty-minus');
    const btnPlus = document.getElementById('modal-qty-plus');
    const addBtn = document.getElementById('modal-add-cart-btn');

    if (btnMinus && btnPlus && qtyVal) {
      btnMinus.onclick = () => {
        if (currentQty > 1) {
          currentQty--;
          qtyVal.textContent = currentQty;
          addBtn.querySelector('span').textContent = `Add to Cart ($${(item.price * currentQty).toFixed(2)})`;
        }
      };
      btnPlus.onclick = () => {
        currentQty++;
        qtyVal.textContent = currentQty;
        addBtn.querySelector('span').textContent = `Add to Cart ($${(item.price * currentQty).toFixed(2)})`;
      };
    }

    if (addBtn) {
      addBtn.onclick = () => {
        addToCart(item, currentQty);
        closeProductModal();
      };
    }

    productModal.classList.remove('hidden');
    productModal.classList.add('flex');
    if (window.lucide) window.lucide.createIcons();
  }

  function closeProductModal() {
    if (!productModal) return;
    productModal.classList.add('hidden');
    productModal.classList.remove('flex');
  }

  document.querySelectorAll('.close-product-modal').forEach(btn => {
    btn.addEventListener('click', closeProductModal);
  });

  // --- 6. Shopping Cart Drawer & Checkout ---
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
          <p class="text-xs text-stone-500 mt-1">Discover fish, plants, and aquascapes above.</p>
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

    // Shipping calculation
    const threshold = data.store.freeShippingThreshold;
    const shipping = subtotal >= threshold ? 0 : 14.50;
    const grandTotal = subtotal + shipping;

    if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (cartShippingEl) cartShippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (cartTotalEl) cartTotalEl.textContent = `$${grandTotal.toFixed(2)}`;

    // Free Shipping Progress
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

    // Attach qty listeners
    cartItemsContainer.querySelectorAll('.cart-qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx, 10);
        const delta = parseInt(btn.dataset.delta, 10);
        state.cart[idx].qty += delta;
        if (state.cart[idx].qty <= 0) {
          state.cart.splice(idx, 1);
        }
        saveCart();
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // Checkout modal trigger
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
      if (checkoutModal) {
        checkoutModal.classList.add('hidden');
        checkoutModal.classList.remove('flex');
      }
    });
  });

  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('chk-name')?.value;
      const phone = document.getElementById('chk-phone')?.value;
      const ref = 'AQ-' + Math.floor(1000 + Math.random() * 9000);

      alert(`Thank you ${name}! Order ${ref} placed successfully. We are preparing your insulated live-arrival shipment.`);
      state.cart = [];
      saveCart();
      if (checkoutModal) {
        checkoutModal.classList.add('hidden');
        checkoutModal.classList.remove('flex');
      }
    });
  }

  // --- 7. Synthesized Ambient Water Audio (Web Audio API) ---
  const toggleAudioBtn = document.getElementById('toggle-audio-btn');
  function toggleAudio() {
    if (!state.audioEnabled) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        state.audioCtx = new AudioCtx();

        // White noise node
        const bufferSize = state.audioCtx.sampleRate * 2;
        const buffer = state.audioCtx.createBuffer(1, bufferSize, state.audioCtx.sampleRate);
        const dataOut = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          dataOut[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = state.audioCtx.createBufferSource();
        whiteNoise.buffer = buffer;
        whiteNoise.loop = true;

        // Bandpass filter to create bubbling gentle current
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
          toggleAudioBtn.querySelector('span').textContent = 'Water Ambience: ON';
        }
        showToast('Ambient aquarium soundscape activated');
      } catch (err) {
        console.error('Audio synthesis error:', err);
      }
    } else {
      if (state.audioCtx) {
        state.audioCtx.close();
      }
      state.audioEnabled = false;
      if (toggleAudioBtn) {
        toggleAudioBtn.classList.remove('text-cyan-400', 'border-cyan-400');
        toggleAudioBtn.querySelector('span').textContent = 'Water Ambience: OFF';
      }
    }
  }

  if (toggleAudioBtn) {
    toggleAudioBtn.addEventListener('click', toggleAudio);
  }

  // --- 8. Pause / Resume Animation Control ---
  const pauseBtn = document.getElementById('pause-anim-btn');
  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      state.isPaused = !state.isPaused;
      pauseBtn.querySelector('span').textContent = state.isPaused ? 'Resume Aquarium' : 'Pause Aquarium';
      pauseBtn.classList.toggle('text-amber-400', state.isPaused);
    });
  }

  // --- 9. Toast Notification Helper ---
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

  // Expose global methods for inline HTML triggers
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
    }
  };
});
