// Ovita Restaurant & Cafe — Interactive Application Engine
// Complete Suite: Dynamic Kitchen Clock, POS Terminal, Daily Sales, Offers with Red Ribbons, Auth, Digital Receipts & Live Tracking

(function() {
  'use strict';

  // --- AUDIO SYNTHESIZER ---
  const soundEffects = {
    chime: function() {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } catch(e) {}
    },
    alert: function() {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.45);
      } catch(e) {}
    }
  };

  // --- STATE STORAGE ---
  const STORAGE_KEYS = {
    MENU: 'owita_menu_items_v3',
    OFFERS: 'owita_offers_v3',
    USERS: 'owita_users_v3',
    ORDERS: 'owita_orders_v3',
    CART: 'owita_cart_v3',
    CURRENT_USER: 'owita_current_user_v3',
    ACTIVE_VIEW: 'owita_active_view_v3',
    DAILY_SALES: 'owita_daily_sales_v3'
  };

  function getStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function setStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }

  // Reactive State
  let menuItems = getStorage(STORAGE_KEYS.MENU, DEFAULT_MENU_ITEMS);
  let offers = getStorage(STORAGE_KEYS.OFFERS, DEFAULT_OFFERS);
  let users = getStorage(STORAGE_KEYS.USERS, DEFAULT_USERS);
  let orders = getStorage(STORAGE_KEYS.ORDERS, DEFAULT_SEED_ORDERS);
  let cart = getStorage(STORAGE_KEYS.CART, []);
  let currentUser = getStorage(STORAGE_KEYS.CURRENT_USER, DEFAULT_USERS[0]);
  let activeView = getStorage(STORAGE_KEYS.ACTIVE_VIEW, 'customer');
  let activeCategory = 'all';
  let activeGalleryCategory = 'all';
  let adminActiveTab = 'orders'; // 'orders', 'pos', 'sales', 'menu', 'offers'
  let posCart = [];
  let customerLocation = null;

  // Curated Visual Gallery
  const GALLERY_PHOTOS = [
    {
      title: 'Sizzling Chicken Cheese Kottu',
      category: 'kottu',
      img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1200&q=85',
      caption: 'Chopped live on hot cast iron with rich mozzarella, tender chicken and spices'
    },
    {
      title: 'Special Mixed Fried Rice Feast',
      category: 'rice',
      img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=85',
      caption: 'Basmati wok-tossed with jumbo prawns, crispy drumsticks and spicy chili paste'
    },
    {
      title: 'Crispy Hot Butter Cuttlefish',
      category: 'seafood',
      img: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=85',
      caption: 'Golden fried calamari rings tossed in salted garlic dairy butter & dried red chilies'
    },
    {
      title: 'Two-Story Container Rooftop at Twilight',
      category: 'rooftop',
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
      caption: 'Open-air upper deck under warm glowing Edison fairy bulbs at Nagoda Junction'
    },
    {
      title: 'High-Flame Wok Master Craft',
      category: 'rooftop',
      img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
      caption: 'High flame wok tossing for authentic smoky restaurant flavor'
    },
    {
      title: 'Hyderabadi Chicken Dum Biryani',
      category: 'rice',
      img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=85',
      caption: 'Aromatic saffron basmati layered with tender spiced chicken and boiled eggs'
    },
    {
      title: 'Double Gourmet Beef Burger & Golden Fries',
      category: 'grill',
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85',
      caption: 'Flame-grilled pure beef patties, melted cheddar, pickles and salted french fries'
    },
    {
      title: 'Royal Falooda with Vanilla Ice Cream',
      category: 'drinks',
      img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1200&q=85',
      caption: 'Chilled rose milk shake, vermicelli noodles, basil seeds, jelly and vanilla scoop'
    }
  ];

  // Helper: Format Countdown Timer (e.g. "3d 15h 07m 37s" or "04h 22m 15s")
  function formatCountdown(targetTime) {
    const diff = new Date(targetTime).getTime() - Date.now();
    if (diff <= 0) return 'EXPIRED';
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    if (days > 0) {
      return `${days}d ${String(hours).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;
    }
    return `${String(hours).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;
  }

  // --- PREPARATION TIME FORMULA ---
  // Spec: "10 mins for each item and 10 more if its 2 items and from there on add 5 mins each"
  function calculatePrepTimeMins(totalItemCount) {
    if (!totalItemCount || totalItemCount <= 0) return 0;
    if (totalItemCount === 1) return 10;
    if (totalItemCount === 2) return 20; // 10 + 10
    return 20 + (totalItemCount - 2) * 5; // +5 mins for each extra
  }

  function getCartItemsTotalCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  // --- TOAST NOTIFIER (AUTO DISMISS IN MAX 4.5 SECONDS) ---
  let _toastTimer = null;
  function showToast(message, type = 'info') {
    let toast = document.getElementById('owitaLiveToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'owitaLiveToast';
      document.body.appendChild(toast);
    }

    toast.className = 'fixed bottom-6 right-6 z-[300] flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl shadow-2xl backdrop-blur-md border transition-all duration-500 transform translate-y-0 opacity-100 max-w-md ' +
      (type === 'success' ? 'bg-[#0A1A12]/95 border-emerald-500/50 text-emerald-200' :
       type === 'alert' ? 'bg-[#220B0B]/95 border-red-500/60 text-red-200 animate-pulse' :
       type === 'warning' ? 'bg-[#1E1408]/95 border-amber-500/50 text-amber-200' :
       'bg-[#121218]/95 border-amber-500/30 text-stone-200');

    toast.innerHTML = `
      <div class="flex items-center gap-2.5">
        <span class="w-2.5 h-2.5 rounded-full ${type === 'alert' ? 'bg-red-400' : type === 'success' ? 'bg-emerald-400' : 'bg-amber-400'} animate-ping shrink-0"></span>
        <span class="text-xs font-semibold leading-snug">${message}</span>
      </div>
      <button onclick="this.parentElement.classList.add('opacity-0', 'translate-y-4')" class="text-stone-400 hover:text-white p-1 ml-2 shrink-0">
        ✕
      </button>
    `;

    clearTimeout(_toastTimer);
    // Auto disappear in 4.5 seconds (under the user's 6 seconds limit)
    _toastTimer = setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-4');
    }, 4500);
  }

  // --- LUXURY SCROLL REVEAL OBSERVER (RELAXED, CINEMATIC SMOOTHNESS) ---
  let scrollObserver = null;
  function initScrollObserver() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-init').forEach(el => el.classList.add('reveal-active'));
      return;
    }

    if (!scrollObserver) {
      scrollObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: '0px 0px -20px 0px'
      });
    }

    document.querySelectorAll('.reveal-init:not(.reveal-active)').forEach(el => {
      scrollObserver.observe(el);
    });
  }

  // --- HELPER: GET ITEM EFFECTIVE PRICE & ACTIVE OFFER ---
  function getItemPricing(item) {
    const offer = offers.find(o => o.dishId === item.id && o.active && new Date(o.expiresAt) > new Date());
    if (offer) {
      let finalPrice = item.price;
      if (offer.discountType === 'percent') {
        finalPrice = Math.round(item.price * (1 - offer.discountValue / 100));
      } else if (offer.discountType === 'fixed') {
        finalPrice = Math.max(100, item.price - offer.discountValue);
      }
      return {
        hasOffer: true,
        offer,
        currentPrice: finalPrice,
        originalPrice: item.originalPrice || item.price,
        savings: (item.originalPrice || item.price) - finalPrice,
        tag: offer.tag || (offer.discountType === 'percent' ? `${offer.discountValue}% OFF` : `SAVE LKR ${offer.discountValue}`),
        expiresAt: offer.expiresAt
      };
    }
    return {
      hasOffer: false,
      offer: null,
      currentPrice: item.price,
      originalPrice: item.price,
      savings: 0,
      tag: null,
      expiresAt: null
    };
  }

  // --- RENDER DEDICATED OFFERS SECTION ---
  function renderActiveOffersSection() {
    const container = document.getElementById('exclusiveOffersGrid');
    const section = document.getElementById('offersSectionContainer');
    if (!container) return;

    const now = new Date();
    const activeOffers = offers.filter(o => o.active && new Date(o.expiresAt) > now);

    if (activeOffers.length === 0) {
      if (section) section.classList.add('hidden');
      return;
    }

    if (section) section.classList.remove('hidden');

    container.innerHTML = activeOffers.map((offer, idx) => {
      const item = menuItems.find(m => m.id === offer.dishId);
      if (!item) return '';

      const pricing = getItemPricing(item);

      return `
        <div class="owita-card menu-item-card rounded-2xl overflow-hidden flex flex-col justify-between group reveal-init reveal-bottom stagger-${(idx % 4) + 1} border-red-500/30 shadow-xl">
          <div>
            <div class="relative h-56 overflow-hidden">
              <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-[#101014] via-black/20 to-transparent"></div>
              
              <!-- Red Ribbon Discount Badge -->
              <div class="absolute top-0 right-0 z-20 offer-ribbon-red urgency-pulse px-3.5 py-1.5 rounded-bl-xl text-[10px] font-black tracking-wider flex items-center gap-1.5">
                <span>🔥</span>
                <span>${pricing.tag}</span>
              </div>

              <!-- Live Countdown Badge -->
              <div class="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-red-400 border border-red-500/40 flex items-center gap-1 live-offer-timer" data-expires="${offer.expiresAt}">
                <span>⏳ Ends: ${formatCountdown(offer.expiresAt)}</span>
              </div>

              <div class="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-xs font-semibold text-amber-400">
                ★ ${item.rating}
              </div>
            </div>

            <div class="p-5 space-y-2">
              <div class="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest">${offer.title}</div>
              <h3 class="font-serif-luxury text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                ${item.name}
              </h3>
              ${item.sinhala ? `<div class="text-[11px] text-amber-500/80 font-medium">${item.sinhala}</div>` : ''}
              <p class="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                ${offer.description || item.description}
              </p>

              <div class="text-[10px] text-amber-400/90 font-mono flex items-center gap-1 group-hover:opacity-0 transition-opacity">
                <i data-lucide="info" class="w-3 h-3"></i>
                <span>Hover card to view portion contents</span>
              </div>

              <!-- HOVER INCLUSIONS EXPANSION -->
              <div class="dish-hover-panel">
                <div class="portion-inclusions-box mt-2 p-3 rounded-xl bg-black/95 border border-amber-500/40 shadow-2xl space-y-2">
                <div class="flex items-center justify-between text-[11px] font-mono text-amber-400 uppercase tracking-wider border-b border-white/5 pb-1 font-semibold">
                  <span class="flex items-center gap-1"><i data-lucide="utensils" class="w-3 h-3 text-amber-400"></i> Portion Inclusions</span>
                  <span class="text-[10px] text-stone-400 font-normal">${item.serves || ''}</span>
                </div>
                <ul class="text-[11px] text-stone-300 space-y-1 pt-0.5">
                  ${(item.portionIncludes || []).map(inc => `
                    <li class="flex items-start gap-1.5 leading-snug">
                      <span class="text-amber-400 font-bold">✦</span>
                      <span>${inc}</span>
                    </li>
                  `).join('')}
                </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="p-5 pt-0 flex items-center justify-between border-t border-white/5 mt-3">
            <div>
              <div class="text-[10px] text-stone-500 uppercase tracking-widest font-mono">Special Price</div>
              <div class="flex items-baseline gap-2">
                <span class="text-lg font-bold font-mono text-red-400">
                  LKR ${pricing.currentPrice.toLocaleString()}
                </span>
                <span class="text-xs font-mono text-stone-500 line-through">
                  LKR ${pricing.originalPrice.toLocaleString()}
                </span>
              </div>
            </div>

            <button onclick="window.OwitaApp.addToCart('${item.id}')" class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white flex items-center gap-2 text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/30">
              <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
              <span>Claim Deal</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();
    initScrollObserver();
  }

  // --- RENDER SIGNATURE COLLECTION ---
    function renderSignatureDishes() {
    const container = document.getElementById('signatureCollectionGrid');
    if (!container) return;

    const signatureItems = menuItems.filter(item => item.isSignature);
    container.innerHTML = signatureItems.map((item, idx) => {
      const pricing = getItemPricing(item);

      return `
        <div class="owita-card menu-item-card rounded-2xl overflow-hidden flex flex-col justify-between group reveal-init reveal-bottom stagger-${(idx % 4) + 1} relative">
          <div>
            <div class="relative h-56 overflow-hidden">
              <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-[#101014] via-black/20 to-transparent"></div>
              
              <!-- Prep time badge -->
              <div class="absolute top-3 left-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-500/30 text-[10px] font-semibold text-amber-400">
                <i data-lucide="clock" class="w-3 h-3"></i>
                <span>~10 Mins Prep</span>
              </div>

              <!-- Red Ribbon if Offer is Active -->
              ${pricing.hasOffer ? `
                <div class="absolute top-0 right-0 z-20 offer-ribbon-red urgency-pulse px-3 py-1 rounded-bl-xl text-[10px] font-black tracking-wider">
                  🔥 ${pricing.tag}
                </div>
              ` : `
                <div class="absolute top-3 right-3 bg-amber-500 text-black px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  ${item.serves || 'Signature'}
                </div>
              `}

              ${pricing.hasOffer ? `
                <div class="absolute bottom-2 left-3 bg-black/85 backdrop-blur-md px-2.5 py-0.5 rounded text-[9px] font-mono font-bold text-red-400 border border-red-500/30 live-offer-timer" data-expires="${pricing.expiresAt}">
                  ⏳ Ends: ${formatCountdown(pricing.expiresAt)}
                </div>
              ` : ''}
            </div>

            <div class="p-5 space-y-2">
              <div class="flex items-start justify-between gap-2">
                <h4 class="font-serif-luxury text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  ${item.name}
                </h4>
                <div class="text-xs font-semibold text-amber-400 bg-black/60 px-2 py-0.5 rounded border border-amber-500/20 shrink-0">
                  ★ ${item.rating || '4.9'}
                </div>
              </div>
              ${item.sinhala ? `<div class="text-xs text-amber-500 font-medium">${item.sinhala}</div>` : ''}
              
              <p class="text-xs text-stone-400 line-clamp-1 leading-relaxed font-light">
                ${item.description}
              </p>
              
              <div class="text-[10px] text-amber-400/90 font-mono flex items-center gap-1 group-hover:opacity-0 transition-opacity">
                <i data-lucide="info" class="w-3 h-3"></i>
                <span>Hover card to view portion contents</span>
              </div>

              <!-- HOVER REVEAL INCLUSIONS & FULL CHEF DESCRIPTION -->
              <div class="dish-hover-panel">
                <div class="p-3 rounded-xl bg-black/95 border border-amber-500/40 shadow-2xl space-y-2 text-xs">
                  <p class="text-[11px] text-stone-200 leading-relaxed font-light italic">
                    "${item.description}"
                  </p>
                  <div class="border-t border-white/10 pt-2">
                    <div class="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold flex items-center justify-between mb-1">
                      <span>✦ WHAT'S INCLUDED:</span>
                      <span class="text-amber-300 font-normal">${item.serves || ''}</span>
                    </div>
                    <ul class="space-y-1">
                      ${(item.portionIncludes || []).map(inc => `
                        <li class="flex items-start gap-1.5 text-[11px] text-stone-200">
                          <span class="text-amber-400 font-bold shrink-0">✔</span>
                          <span>${inc}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-5 pt-0 flex items-center justify-between border-t border-white/5 mt-2">
            <div>
              <div class="text-[10px] font-mono text-stone-400 uppercase">Special Price</div>
              <div class="flex items-baseline gap-2">
                <span class="text-lg font-bold font-mono ${pricing.hasOffer ? 'text-red-400' : 'text-amber-400'}">
                  LKR ${pricing.currentPrice.toLocaleString()}
                </span>
                ${pricing.hasOffer ? `
                  <span class="text-xs font-mono text-stone-500 line-through">
                    LKR ${pricing.originalPrice.toLocaleString()}
                  </span>
                ` : ''}
              </div>
            </div>

            <button onclick="window.OwitaApp.addToCart('${item.id}')" class="px-4 py-2.5 rounded-xl amber-btn-primary flex items-center gap-2 text-xs font-bold uppercase tracking-wider shadow-lg">
              <i data-lucide="plus" class="w-4 h-4"></i>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();
    initScrollObserver();
  }

  function renderFullMenu() {
    const container = document.getElementById('fullMenuGrid');
    if (!container) return;

    const filtered = activeCategory === 'all' 
      ? menuItems 
      : menuItems.filter(item => item.category === activeCategory);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center text-stone-400">
          <i data-lucide="utensils-crossed" class="w-12 h-12 mx-auto mb-3 opacity-30"></i>
          <p class="text-sm">No dishes found in this category.</p>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    container.innerHTML = filtered.map((item, idx) => {
      const pricing = getItemPricing(item);

      return `
        <div id="menu-card-${item.id}" onclick="window.OwitaApp.onMenuCardClick('${item.id}', event)" class="menu-item-card rounded-2xl overflow-hidden flex flex-col justify-between group reveal-init reveal-bottom stagger-${(idx % 6) + 1} ${!item.inStock ? 'opacity-60 grayscale' : ''}">
          <div>
            <div class="relative h-48 overflow-hidden bg-stone-100">
              <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div class="absolute top-3 left-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-amber-400">
                <i data-lucide="clock" class="w-3 h-3"></i>
                <span>~10 Mins Prep</span>
              </div>

              ${pricing.hasOffer ? `
                <div class="absolute top-0 right-0 z-20 offer-ribbon-red urgency-pulse px-3 py-1 rounded-bl-xl text-[10px] font-black tracking-wider">
                  🔥 ${pricing.tag}
                </div>
              ` : `
                <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-stone-900 border border-black/5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  ${item.serves || 'Portion'}
                </div>
              `}

              ${!item.inStock ? `
                <div class="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center text-xs font-bold uppercase tracking-widest text-red-500">
                  Sold Out
                </div>
              ` : ''}

              <div class="absolute bottom-2.5 left-3 bg-black/75 backdrop-blur-sm px-2 py-0.5 rounded-md text-xs font-semibold text-amber-400 flex items-center gap-1">
                <span>★</span>
                <span>${item.rating || '4.8'}</span>
              </div>

              <div class="absolute bottom-2.5 right-3 bg-white/95 text-stone-900 font-mono font-bold text-xs px-2.5 py-0.5 rounded-md shadow-sm">
                LKR ${pricing.finalPrice.toLocaleString()}
              </div>
            </div>

            <div class="p-4 space-y-1">
              <h4 class="font-serif-luxury text-base font-bold text-stone-900 group-hover:text-[#FF7A00] transition-colors leading-snug">
                ${item.name}
              </h4>
              ${item.sinhala ? `<div class="text-[10px] text-stone-400 font-medium">${item.sinhala}</div>` : ''}
              
              <div class="pt-2 flex items-center justify-between text-[11px] text-stone-500 font-medium">
                <span class="flex items-center gap-1 text-[#FF7A00] hover:underline">
                  <i data-lucide="sparkles" class="w-3 h-3"></i>
                  <span>Inspect in Showcase</span>
                </span>
                <span class="text-stone-400 font-mono text-[10px]">${item.category.toUpperCase()}</span>
              </div>
            </div>
          </div>

          <div class="p-4 pt-0">
            <button onclick="event.stopPropagation(); window.OwitaApp.addToCart('${item.id}')" ${!item.inStock ? 'disabled' : ''} class="w-full py-2.5 rounded-xl amber-btn-primary flex items-center justify-center gap-2 text-xs uppercase font-bold tracking-wider">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();
    if (window.OwitaSlider && window.OwitaSlider.syncWithFullMenu) {
      const activeDish = window.HERO_SLIDER_DISHES ? window.HERO_SLIDER_DISHES[0] : null;
      if (activeDish) window.OwitaSlider.syncWithFullMenu(activeDish.id);
    }
  }

function renderGallery() {
    const container = document.getElementById('galleryGrid');
    if (!container) return;

    // Clean, direct gallery showcase without clutter
    container.innerHTML = GALLERY_PHOTOS.map((photo, idx) => `
      <div class="gallery-card group relative h-64 rounded-2xl overflow-hidden border border-white/10 reveal-init reveal-bottom stagger-${(idx % 4) + 1} shadow-lg cursor-pointer" onclick="window.OwitaApp.openGalleryLightbox(${idx})">
        <img src="${photo.img}" alt="${photo.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
        
        <div class="absolute bottom-4 left-4 right-4 space-y-1">
          <h4 class="font-serif-luxury text-base font-bold text-white group-hover:text-amber-400 transition-colors">${photo.title}</h4>
          <p class="text-[11px] text-stone-300 font-light line-clamp-1">${photo.caption}</p>
        </div>
      </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
    initScrollObserver();
  }

function setGalleryCategory(cat) {
    activeGalleryCategory = cat;
    document.querySelectorAll('.gallery-pill').forEach(btn => {
      if (btn.dataset.galleryCategory === cat) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    renderGallery();
  }

  function openGalleryLightbox(idx) {
    const photo = GALLERY_PHOTOS[idx];
    if (!photo) return;

    const modal = document.getElementById('galleryLightboxModal');
    const imgEl = document.getElementById('galleryLightboxImg');
    const titleEl = document.getElementById('galleryLightboxTitle');
    const captionEl = document.getElementById('galleryLightboxCaption');

    if (imgEl) imgEl.src = photo.img;
    if (titleEl) titleEl.textContent = photo.title;
    if (captionEl) captionEl.textContent = photo.caption;

    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
    if (window.lucide) lucide.createIcons();
  }

  function closeGalleryLightbox() {
    const modal = document.getElementById('galleryLightboxModal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // --- LIVE LOCATION & HAVERSINE DISTANCE ENGINE ---
  function calculateDistanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  function detectCustomerLocation() {
    const badge = document.getElementById('liveDistanceText');
    const timeBadge = document.getElementById('liveTimeText');
    const dirBtn = document.getElementById('googleMapsDirectionBtn');
    const destLat = (OWITA_CONFIG.coordinates && OWITA_CONFIG.coordinates.lat) ? OWITA_CONFIG.coordinates.lat : 6.5684;
    const destLng = (OWITA_CONFIG.coordinates && OWITA_CONFIG.coordinates.lng) ? OWITA_CONFIG.coordinates.lng : 79.9806;

    if (!navigator.geolocation) {
      showToast('Geolocation is not supported by your browser.', 'warning');
      return;
    }

    if (badge) badge.innerHTML = '<span class="animate-pulse text-amber-400">Detecting satellite GPS coordinates...</span>';

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        customerLocation = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };

        const distKm = calculateDistanceKm(customerLocation.lat, customerLocation.lng, destLat, destLng);
        const distFormatted = distKm < 1 ? `${Math.round(distKm * 1000)} meters` : `${distKm.toFixed(1)} km`;
        const estDriveMins = Math.max(3, Math.round(distKm * 2.2));

        if (badge) {
          badge.innerHTML = `You are <strong class="text-amber-400 font-bold">${distFormatted}</strong> away from Ovita Nagoda Junction!`;
        }
        if (timeBadge) {
          timeBadge.innerHTML = `⚡ Estimated Travel Time: <strong class="text-emerald-400 font-semibold">~${estDriveMins} mins</strong> via A2 / Matugama Rd`;
          timeBadge.classList.remove('hidden');
        }

        if (dirBtn) {
          dirBtn.href = `https://www.google.com/maps/dir/?api=1&origin=${customerLocation.lat},${customerLocation.lng}&destination=${destLat},${destLng}&destination_place_id=Ovita+Family+Restaurant+Nagoda+Junction+Kalutara`;
        }

        showToast(`📍 Live GPS: ${distFormatted} to Ovita Nagoda (~ ${estDriveMins} mins drive)`, 'success');
      },
      (err) => {
        if (badge) {
          badge.innerHTML = 'Location access paused. Distance defaults: ~3.2 km from Kalutara North · ~2.1 km from Katukurunda';
        }
        showToast('GPS access paused. Directions are pre-set for Nagoda Junction!', 'info');
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  }

  // --- CART CONTROLLER ---
  function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const pricing = getItemPricing(item);
    const existing = cart.find(c => c.id === itemId);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: pricing.currentPrice,
        originalPrice: pricing.originalPrice,
        img: item.img,
        quantity: 1
      });
    }

    setStorage(STORAGE_KEYS.CART, cart);
    updateCartBadges();
    renderCartDrawer();
    soundEffects.chime();
    showToast(`Added "${item.name}" to cart!`, 'success');
  }

  function updateCartQuantity(itemId, delta) {
    const item = cart.find(c => c.id === itemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(c => c.id !== itemId);
    }

    setStorage(STORAGE_KEYS.CART, cart);
    updateCartBadges();
    renderCartDrawer();
  }

  function removeFromCart(itemId) {
    cart = cart.filter(c => c.id !== itemId);
    setStorage(STORAGE_KEYS.CART, cart);
    updateCartBadges();
    renderCartDrawer();
  }

  function updateCartBadges() {
    const totalCount = getCartItemsTotalCount();
    const prepMins = calculatePrepTimeMins(totalCount);

    document.querySelectorAll('.cart-count-badge').forEach(badge => {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    document.querySelectorAll('.cart-prep-mins').forEach(el => {
      el.textContent = `~${prepMins} Mins`;
    });
  }

  function renderCartDrawer() {
    const itemsList = document.getElementById('cartDrawerItems');
    const emptyState = document.getElementById('cartEmptyState');
    const summaryBox = document.getElementById('cartSummaryBox');

    if (!itemsList) return;

    const totalCount = getCartItemsTotalCount();

    if (cart.length === 0) {
      itemsList.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      if (summaryBox) summaryBox.classList.add('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');
    if (summaryBox) summaryBox.classList.remove('hidden');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const packagingFee = 150;
    const serviceFee = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + packagingFee + serviceFee;
    const prepMins = calculatePrepTimeMins(totalCount);

    itemsList.innerHTML = cart.map(item => `
      <div class="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
        <img src="${item.img}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg border border-white/10 shrink-0">
        <div class="flex-1 min-w-0">
          <h5 class="text-xs font-bold text-white truncate">${item.name}</h5>
          <div class="text-xs font-mono text-amber-400 mt-0.5">LKR ${(item.price * item.quantity).toLocaleString()}</div>
          <div class="text-[10px] text-stone-500">LKR ${item.price.toLocaleString()} each</div>
        </div>
        <div class="flex items-center gap-1.5 bg-black/60 border border-white/10 rounded-lg p-1">
          <button onclick="window.OwitaApp.updateCartQuantity('${item.id}', -1)" class="w-6 h-6 rounded flex items-center justify-center text-stone-400 hover:text-white hover:bg-white/10 text-xs">
            -
          </button>
          <span class="w-6 text-center text-xs font-mono font-bold text-white">${item.quantity}</span>
          <button onclick="window.OwitaApp.updateCartQuantity('${item.id}', 1)" class="w-6 h-6 rounded flex items-center justify-center text-stone-400 hover:text-white hover:bg-white/10 text-xs">
            +
          </button>
        </div>
      </div>
    `).join('');

    document.getElementById('cartSubtotalText').textContent = `LKR ${subtotal.toLocaleString()}`;
    document.getElementById('cartPackagingFeeText').textContent = `LKR ${packagingFee.toLocaleString()}`;
    document.getElementById('cartServiceFeeText').textContent = `LKR ${serviceFee.toLocaleString()}`;
    document.getElementById('cartTotalText').textContent = `LKR ${grandTotal.toLocaleString()}`;

    const timerBadge = document.getElementById('cartTimerExplanation');
    if (timerBadge) {
      timerBadge.innerHTML = `
        <div class="flex items-center justify-between text-xs font-mono font-bold text-amber-400">
          <span>⚡ Kitchen Clock Estimate:</span>
          <span>~${prepMins} Minutes</span>
        </div>
        <div class="text-[10px] text-stone-400 mt-1">
          Formula: 10m for 1st item · +10m for 2nd · +5m for each extra (${totalCount} items). Timer activates when confirmed by kitchen!
        </div>
      `;
    }

    if (window.lucide) lucide.createIcons();
  }

  function proceedToCheckout() {
    if (cart.length === 0) {
      showToast('Your cart is empty! Select dishes from the menu first.', 'warning');
      return;
    }

    if (!currentUser || currentUser.role !== 'customer') {
      showToast('Please sign in or register to place your order.', 'warning');
      openAuthModal('signin');
      return;
    }

    closeCartDrawer();
    openCheckoutModal();
  }

  function openCheckoutModal() {
    const modal = document.getElementById('checkoutPaymentModal');
    if (!modal) return;

    const totalCount = getCartItemsTotalCount();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const packagingFee = 150;
    const serviceFee = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + packagingFee + serviceFee;
    const prepMins = calculatePrepTimeMins(totalCount);

    document.getElementById('checkoutCustomerName').value = currentUser.name || '';
    document.getElementById('checkoutCustomerPhone').value = currentUser.phone || '';
    document.getElementById('checkoutTotalDisplay').textContent = `LKR ${grandTotal.toLocaleString()}`;
    document.getElementById('checkoutPrepDisplay').textContent = `~${prepMins} Mins (${totalCount} items)`;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons();
  }

  function closeCheckoutModal() {
    const modal = document.getElementById('checkoutPaymentModal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // --- PAYMENT SIMULATION & ORDER GENERATOR (STARTS AS 'UNDER REVIEW') ---
  // Spec: "and the timer for order shhouldn't start till the order is confirmed by the admin, until then say under review"
  function executePaymentAndPlaceOrder(e) {
    if (e) e.preventDefault();

    if (cart.length === 0) return;

    const totalCount = getCartItemsTotalCount();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const packagingFee = 150;
    const serviceFee = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + packagingFee + serviceFee;
    const prepMins = calculatePrepTimeMins(totalCount);

    const customerName = document.getElementById('checkoutCustomerName').value.trim() || currentUser.name;
    const customerPhone = document.getElementById('checkoutCustomerPhone').value.trim() || currentUser.phone;
    const notes = document.getElementById('checkoutSpecialNotes').value.trim();
    const paymentMethodEl = document.querySelector('input[name="checkoutPaymentMethod"]:checked');
    const paymentMethod = paymentMethodEl ? paymentMethodEl.value : 'PayHere Card Simulator';

    const orderIdNumber = Math.floor(1000 + Math.random() * 9000);
    const newOrder = {
      orderId: 'OV-' + orderIdNumber,
      userId: currentUser.id,
      customerName,
      customerPhone,
      items: JSON.parse(JSON.stringify(cart)),
      itemCount: totalCount,
      subtotal,
      packagingFee,
      serviceFee,
      total: grandTotal,
      paymentMethod,
      paymentStatus: paymentMethod === 'Cash on Counter Pickup' ? 'Pending Counter Payment' : 'Paid',
      paymentReference: 'PAY-LK-' + Math.floor(100000 + Math.random() * 900000),
      orderStatus: 'Under Review',
      isConfirmed: false,
      prepTimeMins: prepMins,
      createdAt: new Date().toISOString(),
      confirmedAt: null,
      estimatedReadyAt: null, // Timer will NOT start until confirmed by admin!
      notes,
      hasChangeRequest: false,
      changeDetails: '',
      source: 'Online Website'
    };

    orders.unshift(newOrder);
    setStorage(STORAGE_KEYS.ORDERS, orders);

    // Clear cart
    cart = [];
    setStorage(STORAGE_KEYS.CART, cart);
    updateCartBadges();
    renderCartDrawer();

    closeCheckoutModal();
    soundEffects.chime();
    showToast(`Order ${newOrder.orderId} submitted! Awaiting kitchen confirmation.`, 'warning');

    openReceiptModal(newOrder.orderId);
    renderCustomerOrders();
    renderAdminOrders();
  }

  // --- DIGITAL RECEIPT GENERATOR (BIG CENTERED ORDER NUMBER & DYNAMIC SYNCED READY TIME) ---
  function openReceiptModal(orderId) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;

    const receiptBox = document.getElementById('digitalReceiptContent');
    if (!receiptBox) return;

    const dateFormatted = new Date(order.createdAt).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    const isConfirmed = order.isConfirmed && order.estimatedReadyAt;
    const readyTimeFormatted = isConfirmed 
      ? new Date(order.estimatedReadyAt).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
      : null;

    receiptBox.innerHTML = `
      <!-- Restaurant Header -->
      <div class="text-center pb-3 border-b border-dashed border-stone-700">
        <div class="font-serif-luxury text-2xl font-bold text-amber-400">${OWITA_CONFIG.restaurantName}</div>
        <div class="text-xs text-stone-400 mt-0.5">${OWITA_CONFIG.sinhalaName}</div>
        <div class="text-[11px] text-stone-500 mt-1">${OWITA_CONFIG.address}</div>
        <div class="text-[11px] text-stone-500">Tel: ${OWITA_CONFIG.phone}</div>
      </div>

      <!-- BIG CENTERED ORDER IDENTIFIER -->
      <div class="receipt-order-hero">
        <div class="text-[10px] font-mono uppercase tracking-widest text-amber-500 font-semibold">Official Order Identifier</div>
        <div class="text-3xl sm:text-4xl font-mono font-extrabold text-amber-400 tracking-wider my-1">${order.orderId}</div>
        <div class="text-[11px] font-mono ${isConfirmed ? 'text-emerald-400' : 'text-amber-300 animate-pulse'}">
          ${isConfirmed ? '● Kitchen Confirmed · Food Sizzling' : '⏳ Status: Under Review by Kitchen'}
        </div>
      </div>

      <!-- Order Details -->
      <div class="py-3 border-b border-dashed border-stone-700 text-xs space-y-1">
        <div class="flex justify-between">
          <span class="text-stone-400">Date & Time:</span>
          <span class="text-stone-200">${dateFormatted}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-stone-400">Customer:</span>
          <span class="text-stone-200">${order.customerName} (${order.customerPhone})</span>
        </div>
        <div class="flex justify-between">
          <span class="text-stone-400">Payment:</span>
          <span class="text-emerald-400 font-medium">${order.paymentStatus} via ${order.paymentMethod}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-stone-400">Txn Ref:</span>
          <span class="text-stone-400 font-mono text-[10px]">${order.paymentReference}</span>
        </div>
      </div>

      <!-- Itemized Bill -->
      <div class="py-3 border-b border-dashed border-stone-700 space-y-2">
        <div class="text-[11px] font-bold uppercase text-stone-400 tracking-wider">Itemized Bill</div>
        ${order.items.map(item => `
          <div class="flex justify-between text-xs">
            <span class="text-stone-200">${item.quantity}x ${item.name}</span>
            <span class="font-mono text-stone-300">LKR ${(item.price * item.quantity).toLocaleString()}</span>
          </div>
        `).join('')}
      </div>

      <!-- Financial Totals -->
      <div class="py-3 border-b border-dashed border-stone-700 text-xs space-y-1">
        <div class="flex justify-between text-stone-400">
          <span>Subtotal:</span>
          <span class="font-mono">LKR ${order.subtotal.toLocaleString()}</span>
        </div>
        <div class="flex justify-between text-stone-400">
          <span>Packaging Fee:</span>
          <span class="font-mono">LKR ${order.packagingFee.toLocaleString()}</span>
        </div>
        <div class="flex justify-between text-stone-400">
          <span>Kitchen Service (5%):</span>
          <span class="font-mono">LKR ${order.serviceFee.toLocaleString()}</span>
        </div>
        <div class="flex justify-between text-base font-bold text-white pt-2 border-t border-stone-800">
          <span class="text-amber-400">TOTAL AMOUNT:</span>
          <span class="font-mono text-amber-400">LKR ${order.total.toLocaleString()}</span>
        </div>
      </div>

      <!-- DYNAMIC ESTIMATED READY TIME -->
      <div class="pt-4 text-center space-y-2">
        <div class="p-3.5 rounded-xl ${isConfirmed ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-amber-500/10 border-amber-500/30'} border">
          <div class="text-[11px] font-semibold ${isConfirmed ? 'text-emerald-400' : 'text-amber-400'} uppercase tracking-widest flex items-center justify-center gap-1.5">
            <span class="w-2 h-2 rounded-full ${isConfirmed ? 'bg-emerald-400' : 'bg-amber-400 animate-ping'}"></span>
            <span>${isConfirmed ? 'Kitchen Confirmed Live Timer' : 'Awaiting Kitchen Review'}</span>
          </div>
          <div class="text-xl font-bold font-mono text-white mt-0.5">
            ${isConfirmed ? `Approx. ${readyTimeFormatted}` : 'Under Review'}
          </div>
          <div class="text-[11px] text-stone-400 mt-1">
            ${isConfirmed 
              ? `Preparation Window: ~${order.prepTimeMins} Minutes (Synchronized with Live Kitchen Clock)`
              : `Estimated Window: ~${order.prepTimeMins} Minutes (Clock will start once confirmed by kitchen)`}
          </div>
        </div>

        <div class="text-[11px] text-stone-500 italic">
          Thank you for dining with Ovita Family Restaurant, Nagoda Junction!
        </div>
      </div>
    `;

    const backBtnDiv = document.createElement('div');
    backBtnDiv.className = 'pt-2';
    backBtnDiv.innerHTML = `
      <button onclick="window.OwitaApp.closeReceiptModal()" class="w-full py-2.5 rounded-xl bg-white/5 hover:bg-amber-500/20 text-stone-300 hover:text-amber-300 text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition-all">
        <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
        <span>Back to Menu & Orders</span>
      </button>
    `;
    receiptBox.appendChild(backBtnDiv);

    const modal = document.getElementById('digitalReceiptModal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      const card = modal.querySelector('.owita-card');
      if (card) {
        card.classList.remove('modal-animate-in');
        void card.offsetWidth;
        card.classList.add('modal-animate-in');
      }
    }
    if (window.lucide) lucide.createIcons();
  }

  function closeReceiptModal() {
    const modal = document.getElementById('digitalReceiptModal');
    if (modal) {
      modal.classList.add('hidden');
    }
    document.body.style.overflow = '';
  }

  // --- CUSTOMER DASHBOARD & ORDER TRACKING ---
  function renderCustomerOrders() {
    const container = document.getElementById('customerOrdersList');
    if (!container) return;

    if (!currentUser || currentUser.role !== 'customer') {
      container.innerHTML = `
        <div class="p-8 text-center bg-white/[0.02] border border-white/5 rounded-2xl">
          <i data-lucide="user" class="w-10 h-10 mx-auto text-amber-400 mb-2"></i>
          <p class="text-sm text-stone-300">Sign in to view your orders and track live preparation status.</p>
          <button onclick="window.OwitaApp.openAuthModal('signin')" class="mt-4 px-5 py-2.5 rounded-xl amber-btn-primary text-xs font-bold uppercase tracking-wider">
            Sign In / Register
          </button>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    const myOrders = orders.filter(o => o.userId === currentUser.id);

    if (myOrders.length === 0) {
      container.innerHTML = `
        <div class="p-8 text-center bg-white/[0.02] border border-white/5 rounded-2xl text-stone-400">
          <i data-lucide="receipt" class="w-10 h-10 mx-auto mb-2 opacity-30"></i>
          <p class="text-sm">You haven't placed any orders yet.</p>
          <a href="#menu" class="inline-block mt-4 px-5 py-2.5 rounded-xl amber-btn-primary text-xs font-bold uppercase tracking-wider">
            Explore Menu & Order
          </a>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    container.innerHTML = myOrders.map(order => {
      const isUnderReview = order.orderStatus === 'Under Review' || !order.isConfirmed;
      const isReady = order.orderStatus === 'Ready for Pickup';
      const isCompleted = order.orderStatus === 'Completed';
      const isCancelled = order.orderStatus === 'Cancelled';
      const isChangeRequested = order.orderStatus === 'Change Requested' || order.orderStatus === 'Cancellation Requested';

      return `
        <div class="owita-card rounded-2xl p-6 space-y-5" id="orderCard-${order.orderId}">
          <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/5">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono text-stone-400">ORDER:</span>
                <span class="font-mono font-bold text-amber-400 text-lg">${order.orderId}</span>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  isUnderReview ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse' :
                  isReady ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                  isCompleted ? 'bg-stone-800 text-stone-400 border border-stone-700' :
                  isCancelled ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                  isChangeRequested ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse' :
                  'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                }">
                  ${isUnderReview ? '⏳ Under Review' : order.orderStatus}
                </span>
              </div>
              <div class="text-[11px] text-stone-500 mt-1">
                Placed ${new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} · Payment: ${order.paymentStatus}
              </div>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="window.OwitaApp.openReceiptModal('${order.orderId}')" class="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-stone-200 flex items-center gap-1.5 border border-white/10">
                <i data-lucide="receipt" class="w-3.5 h-3.5"></i>
                <span>View Receipt</span>
              </button>
            </div>
          </div>

          <!-- Live Timer Progress or Under Review Banner -->
          ${isUnderReview ? `
            <div class="p-4 rounded-xl bg-amber-500/[0.04] border border-amber-500/30 space-y-2">
              <div class="flex justify-between items-center text-xs">
                <span class="text-amber-300 font-semibold flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
                  <span>Order Placed · Awaiting Kitchen Confirmation</span>
                </span>
                <span class="font-mono font-bold text-amber-400">Standby</span>
              </div>
              <div class="h-2 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-amber-500/50 rounded-full animate-pulse" style="width: 30%;"></div>
              </div>
              <div class="text-[11px] text-stone-400 flex justify-between">
                <span>The preparation clock will start as soon as kitchen confirms your order.</span>
                <span>Window: ~${order.prepTimeMins} mins</span>
              </div>
            </div>
          ` : (!isCompleted && !isCancelled) ? `
            <div class="p-4 rounded-xl bg-black/40 border border-amber-500/20 space-y-2">
              <div class="flex justify-between items-center text-xs">
                <span class="text-stone-300 font-semibold flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full ${isReady ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}"></span>
                  ${isReady ? 'READY FOR PICKUP AT NAGODA COUNTER!' : 'Kitchen Preparation Status:'}
                </span>
                <span class="font-mono font-bold text-amber-400 live-timer-text" data-ready-at="${order.estimatedReadyAt}">
                  Calculating...
                </span>
              </div>

              <div class="kitchen-timer-meter">
                <div class="kitchen-timer-fill live-timer-bar" data-created-at="${order.confirmedAt || order.createdAt}" data-ready-at="${order.estimatedReadyAt}" style="width: 50%;"></div>
              </div>

              <div class="text-[11px] text-stone-400 flex justify-between">
                <span>Total Prep Time: ${order.prepTimeMins} mins (${order.itemCount} items)</span>
                <span>Counter: Nagoda Junction</span>
              </div>
            </div>
          ` : ''}

          <!-- Order Items Breakdown -->
          <div class="space-y-1.5 text-xs">
            ${order.items.map(item => `
              <div class="flex justify-between text-stone-300">
                <span>${item.quantity}x ${item.name}</span>
                <span class="font-mono text-stone-400">LKR ${(item.price * item.quantity).toLocaleString()}</span>
              </div>
            `).join('')}
            <div class="flex justify-between font-bold text-white pt-2 border-t border-white/5">
              <span>Total Paid / Payable:</span>
              <span class="font-mono text-amber-400">LKR ${order.total.toLocaleString()}</span>
            </div>
          </div>

          <!-- Change / Cancel Request Workflow -->
          ${(!isCompleted && !isCancelled) ? `
            <div class="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div class="text-[11px] text-stone-500">
                Need to add items or cancel? Once confirmed, changes require kitchen approval.
              </div>

              <div class="flex gap-2">
                <button onclick="window.OwitaApp.requestOrderCancellation('${order.orderId}')"" ${isChangeRequested ? 'disabled' : ''} class="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-semibold ${isChangeRequested ? 'opacity-40 cursor-not-allowed' : ''}">
                  Cancel Order (Request Refund)
                </button>
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();
    updateLiveTimers();
    initScrollObserver();
  }

    function requestOrderCancellation(orderId) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;

    if (order.orderStatus === 'Cancelled') {
      showToast('This order is already cancelled.', 'info');
      return;
    }

    const confirmed = confirm(
      'Request cancellation for Order #' + order.orderId + '?\n\n' +
      'Note: If accepted by the restaurant, a full refund of LKR ' + order.total.toLocaleString() + 
      ' will be returned to your ' + order.paymentMethod + '.'
    );
    if (!confirmed) return;

    const reason = prompt('Please enter a brief reason for cancellation:');
    if (reason === null) return;

    order.changeRequest = {
      type: 'cancel',
      status: 'pending',
      reason: reason.trim() || 'Customer requested order cancellation & refund',
      requestedAt: new Date().toISOString()
    };

    setStorage(STORAGE_KEYS.ORDERS, orders);
    renderCustomerOrders();
    renderAdminOrders();
    showToast('Cancellation & refund request submitted to restaurant manager.', 'warning');
  }

function adminConfirmOrder(orderId) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;

    order.isConfirmed = true;
    order.orderStatus = 'Preparing in Kitchen';
    order.confirmedAt = new Date().toISOString();
    order.estimatedReadyAt = new Date(Date.now() + order.prepTimeMins * 60 * 1000).toISOString();

    setStorage(STORAGE_KEYS.ORDERS, orders);
    renderAdminOrders();
    renderCustomerOrders();

    soundEffects.alert();
    const readyTimeStr = new Date(order.estimatedReadyAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    showToast(`🔔 Order ${order.orderId} Confirmed! Your food is now sizzling and will be ready in ${order.prepTimeMins} mins (approx. ${readyTimeStr})!`, 'alert');
  }

  // --- RESTAURANT BACKSTAGE ADMIN PORTAL & POS CONTROLLER ---
  function setAdminTab(tab) {
    adminActiveTab = tab;
    document.querySelectorAll('.admin-nav-tab').forEach(btn => {
      if (btn.dataset.adminTab === tab) {
        btn.classList.add('border-amber-500', 'text-amber-400', 'bg-white/[0.04]');
        btn.classList.remove('text-stone-400');
      } else {
        btn.classList.remove('border-amber-500', 'text-amber-400', 'bg-white/[0.04]');
        btn.classList.add('text-stone-400');
      }
    });

    // Toggle panels
    document.getElementById('adminTabOrders')?.classList.toggle('hidden', tab !== 'orders');
    document.getElementById('adminTabPos')?.classList.toggle('hidden', tab !== 'pos');
    document.getElementById('adminTabSales')?.classList.toggle('hidden', tab !== 'sales');
    document.getElementById('adminTabMenu')?.classList.toggle('hidden', tab !== 'menu');
    document.getElementById('adminTabOffers')?.classList.toggle('hidden', tab !== 'offers');

    if (tab === 'orders') renderAdminOrders();
    else if (tab === 'pos') renderPosTerminal();
    else if (tab === 'sales') renderDailySalesTracker();
    else if (tab === 'menu') renderAdminMenuManager();
    else if (tab === 'offers') renderAdminOffersManager();

    if (window.lucide) lucide.createIcons();
  }

  // 1. ADMIN ORDERS TABLE
  function renderAdminOrders() {
    const container = document.getElementById('adminOrdersTableBody');
    if (!container) return;

    if (orders.length === 0) {
      container.innerHTML = '<tr><td colspan="6" class="p-8 text-center text-stone-400">No customer orders placed yet.</td></tr>';
      return;
    }

    container.innerHTML = orders.map(order => {
      const isUnderReview = order.orderStatus === 'Under Review' || !order.isConfirmed;
      const isReady = order.orderStatus === 'Ready for Pickup';
      const isCompleted = order.orderStatus === 'Completed';
      const isCancelled = order.orderStatus === 'Cancelled';
      const hasReq = order.hasChangeRequest;

      return `
        <tr class="border-b border-white/5 hover:bg-white/[0.01] transition-colors ${isUnderReview ? 'bg-amber-500/[0.04]' : hasReq ? 'bg-amber-500/[0.08]' : ''}">
          <td class="p-4">
            <div class="font-mono font-bold text-white text-base">${order.orderId}</div>
            <div class="text-[10px] text-stone-400 font-mono">${new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            <div class="text-[9px] text-amber-500/80 font-mono uppercase">${order.source || 'Online'}</div>
          </td>
          <td class="p-4">
            <div class="text-xs font-semibold text-white">${order.customerName}</div>
            <div class="text-[11px] text-amber-400 font-mono">${order.customerPhone}</div>
          </td>
          <td class="p-4">
            <div class="text-xs text-stone-300 max-w-xs space-y-0.5">
              ${order.items.map(i => `<div>${i.quantity}x ${i.name}</div>`).join('')}
            </div>
            ${order.notes ? `<div class="text-[10px] text-stone-400 italic mt-1 bg-white/5 p-1 rounded">Note: ${order.notes}</div>` : ''}
          </td>
          <td class="p-4 font-mono text-xs">
            <div class="font-bold text-amber-400">LKR ${order.total.toLocaleString()}</div>
            <div class="text-[10px] ${order.paymentStatus === 'Paid' ? 'text-emerald-400' : 'text-amber-400'}">${order.paymentStatus}</div>
          </td>
          <td class="p-4">
            <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              isUnderReview ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse' :
              isReady ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
              isCompleted ? 'bg-stone-800 text-stone-400' :
              isCancelled ? 'bg-red-500/20 text-red-400' :
              hasReq ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50 animate-pulse' :
              'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
            }">
              ${isUnderReview ? '⏳ Under Review' : order.orderStatus}
            </span>
            ${hasReq ? `
              <div class="mt-1.5 p-1.5 bg-amber-500/10 border border-amber-500/30 rounded text-[10px] text-amber-300">
                <strong>Customer Request:</strong> ${order.changeDetails}
                <div class="flex gap-2 mt-1">
                  <button onclick="window.OwitaApp.adminHandleChangeRequest('${order.orderId}', true)" class="px-2 py-0.5 bg-emerald-500 text-black font-bold rounded text-[9px] uppercase">Approve</button>
                  <button onclick="window.OwitaApp.adminHandleChangeRequest('${order.orderId}', false)" class="px-2 py-0.5 bg-red-500 text-white font-bold rounded text-[9px] uppercase">Decline</button>
                </div>
              </div>
            ` : ''}
          </td>
          <td class="p-4 text-right space-x-1 whitespace-nowrap">
            ${isUnderReview ? `
              <button onclick="window.OwitaApp.adminConfirmOrder('${order.orderId}')" class="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 animate-pulse flex items-center gap-1.5 inline-flex">
                <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
                <span>Confirm & Start Clock</span>
              </button>
            ` : (!isCompleted && !isCancelled) ? `
              <button onclick="window.OwitaApp.adminAdjustOrderTime('${order.orderId}', 5)" title="Add 5 Mins Delay" class="px-2 py-1 bg-white/5 hover:bg-white/10 rounded text-stone-300 text-[11px] font-mono border border-white/10">
                +5m
              </button>
              <button onclick="window.OwitaApp.adminAdjustOrderTime('${order.orderId}', 10)" title="Add 10 Mins Delay" class="px-2 py-1 bg-white/5 hover:bg-white/10 rounded text-stone-300 text-[11px] font-mono border border-white/10">
                +10m
              </button>
              <button onclick="window.OwitaApp.adminUpdateOrderStatus('${order.orderId}', 'Ready for Pickup')" class="px-2.5 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 rounded text-xs font-semibold">
                Mark Ready
              </button>
              <button onclick="window.OwitaApp.adminUpdateOrderStatus('${order.orderId}', 'Completed')" class="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-semibold">
                Complete
              </button>
            ` : `
              <span class="text-xs text-stone-500">Archived</span>
            `}
          </td>
        </tr>
      `;
    }).join('');

    updateAdminAnalytics();
    if (window.lucide) lucide.createIcons();
  }

  function adminUpdateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;

    order.orderStatus = newStatus;
    if (newStatus === 'Ready for Pickup') {
      order.estimatedReadyAt = new Date().toISOString();
      soundEffects.alert();
      showToast(`Order ${order.orderId} marked READY for Counter Pickup!`, 'success');
    }

    setStorage(STORAGE_KEYS.ORDERS, orders);
    renderAdminOrders();
    renderCustomerOrders();
  }

    function adminHandleChangeRequest(orderId, approve) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order || !order.changeRequest) return;

    if (approve) {
      order.changeRequest.status = 'approved';
      order.orderStatus = 'Cancelled';
      order.isConfirmed = false;
      order.refundStatus = 'Refund Issued: LKR ' + order.total.toLocaleString() + ' via ' + order.paymentMethod;
      showToast('Order #' + order.orderId + ' cancelled. Full refund of LKR ' + order.total.toLocaleString() + ' issued to customer.', 'success');
    } else {
      order.changeRequest.status = 'declined';
      showToast('Cancellation declined for Order #' + order.orderId + '. Food is being prepared.', 'info');
    }

    setStorage(STORAGE_KEYS.ORDERS, orders);
    renderAdminOrders();
    renderCustomerOrders();
    renderDailySalesTracker();
  }

function adminAdjustOrderTime(orderId, additionalMins) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;

    const currentReady = new Date(order.estimatedReadyAt).getTime();
    order.estimatedReadyAt = new Date(currentReady + additionalMins * 60 * 1000).toISOString();
    order.prepTimeMins += additionalMins;

    setStorage(STORAGE_KEYS.ORDERS, orders);
    renderAdminOrders();
    renderCustomerOrders();
    showToast(`Added ${additionalMins} mins to Order ${orderId}. Customer timer updated!`, 'warning');
  }

  // 2. USER-FRIENDLY POS (POINT OF SALE) SYSTEM
  function renderPosTerminal() {
    const itemsGrid = document.getElementById('posMenuItemsGrid');
    const billItems = document.getElementById('posCurrentBillItems');
    if (!itemsGrid) return;

    // Fast 1-touch grid of dishes
    itemsGrid.innerHTML = menuItems.map(item => {
      const pricing = getItemPricing(item);
      return `
        <div onclick="window.OwitaApp.addToPosCart('${item.id}')" class="pos-item-btn p-3 rounded-2xl flex flex-col justify-between cursor-pointer group">
          <div class="flex items-center gap-3">
            <img src="${item.img}" alt="${item.name}" class="w-12 h-12 rounded-xl object-cover border border-white/10 shrink-0">
            <div class="min-w-0">
              <div class="text-xs font-bold text-white group-hover:text-amber-400 transition-colors truncate">${item.name}</div>
              <div class="text-[10px] text-stone-400 uppercase font-mono">${item.serves || item.category}</div>
            </div>
          </div>
          <div class="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
            <span class="text-xs font-mono font-bold text-amber-400">LKR ${pricing.currentPrice.toLocaleString()}</span>
            <span class="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center text-xs font-bold group-hover:bg-amber-500 group-hover:text-black transition-colors">+</span>
          </div>
        </div>
      `;
    }).join('');

    renderPosBill();
  }

  function addToPosCart(dishId) {
    const item = menuItems.find(m => m.id === dishId);
    if (!item) return;

    const pricing = getItemPricing(item);
    const existing = posCart.find(p => p.id === dishId);

    if (existing) {
      existing.quantity += 1;
    } else {
      posCart.push({
        id: item.id,
        name: item.name,
        price: pricing.currentPrice,
        quantity: 1
      });
    }

    soundEffects.chime();
    renderPosBill();
  }

  function updatePosCartQuantity(dishId, delta) {
    const item = posCart.find(p => p.id === dishId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      posCart = posCart.filter(p => p.id !== dishId);
    }
    renderPosBill();
  }

  function renderPosBill() {
    const container = document.getElementById('posCurrentBillItems');
    if (!container) return;

    const subtotal = posCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const packagingFee = document.getElementById('posPackagingCheck')?.checked ? 150 : 0;
    const serviceFee = document.getElementById('posServiceCheck')?.checked ? Math.round(subtotal * 0.05) : 0;
    const total = subtotal + packagingFee + serviceFee;

    if (posCart.length === 0) {
      container.innerHTML = '<div class="py-12 text-center text-xs text-stone-500 italic">No items selected yet. Tap any item on the left to add to bill.</div>';
    } else {
      container.innerHTML = posCart.map(item => `
        <div class="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
          <div class="flex-1 truncate mr-2">
            <div class="font-bold text-white truncate">${item.name}</div>
            <div class="text-[10px] text-stone-400 font-mono">LKR ${item.price.toLocaleString()} each</div>
          </div>
          <div class="flex items-center gap-1.5">
            <button onclick="window.OwitaApp.updatePosCartQuantity('${item.id}', -1)" class="w-6 h-6 rounded bg-white/5 text-stone-300 hover:text-white flex items-center justify-center">-</button>
            <span class="w-6 text-center font-mono font-bold text-white">${item.quantity}</span>
            <button onclick="window.OwitaApp.updatePosCartQuantity('${item.id}', 1)" class="w-6 h-6 rounded bg-white/5 text-stone-300 hover:text-white flex items-center justify-center">+</button>
            <span class="w-16 text-right font-mono font-bold text-amber-400">LKR ${(item.price * item.quantity).toLocaleString()}</span>
          </div>
        </div>
      `).join('');
    }

    document.getElementById('posSubtotalDisplay').textContent = `LKR ${subtotal.toLocaleString()}`;
    document.getElementById('posTotalDisplay').textContent = `LKR ${total.toLocaleString()}`;
  }

  function executePosCheckout() {
    if (posCart.length === 0) {
      showToast('Select at least one dish for POS sale.', 'warning');
      return;
    }

    const subtotal = posCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const packagingFee = document.getElementById('posPackagingCheck')?.checked ? 150 : 0;
    const serviceFee = document.getElementById('posServiceCheck')?.checked ? Math.round(subtotal * 0.05) : 0;
    const grandTotal = subtotal + packagingFee + serviceFee;
    const customerName = document.getElementById('posCustomerNameInput')?.value.trim() || 'Walk-in Counter Guest';
    const paymentMethod = document.getElementById('posPaymentMethodSelect')?.value || 'Cash on Counter';

    const orderId = 'OV-POS-' + Math.floor(1000 + Math.random() * 9000);
    const newPosOrder = {
      orderId,
      userId: 'pos-walkin',
      customerName,
      customerPhone: '077 277 5132',
      items: JSON.parse(JSON.stringify(posCart)),
      itemCount: posCart.reduce((sum, i) => sum + i.quantity, 0),
      subtotal,
      packagingFee,
      serviceFee,
      total: grandTotal,
      paymentMethod,
      paymentStatus: 'Paid',
      paymentReference: 'POS-TX-' + Date.now().toString().slice(-6),
      orderStatus: 'Ready for Pickup',
      isConfirmed: true,
      prepTimeMins: 10,
      createdAt: new Date().toISOString(),
      confirmedAt: new Date().toISOString(),
      estimatedReadyAt: new Date().toISOString(),
      notes: 'Direct Counter POS Order',
      hasChangeRequest: false,
      changeDetails: '',
      source: 'POS Counter'
    };

    orders.unshift(newPosOrder);
    setStorage(STORAGE_KEYS.ORDERS, orders);

    posCart = [];
    renderPosBill();
    soundEffects.alert();
    showToast(`✅ POS Sale ${orderId} Logged (LKR ${grandTotal.toLocaleString()})`, 'success');

    renderDailySalesTracker();
    openReceiptModal(orderId);
  }

  // 3. DAILY SALES & PERFORMANCE TRACKER
  function renderDailySalesTracker() {
    const todayStr = new Date().toISOString().slice(0, 10);
    const todayOrders = orders.filter(o => o.createdAt.startsWith(todayStr) && o.orderStatus !== 'Cancelled');

    const totalSales = todayOrders.reduce((sum, o) => sum + o.total, 0);
    const cashSales = todayOrders.filter(o => o.paymentMethod.toLowerCase().includes('cash')).reduce((sum, o) => sum + o.total, 0);
    const cardSales = todayOrders.filter(o => o.paymentMethod.toLowerCase().includes('card') || o.paymentMethod.toLowerCase().includes('payhere')).reduce((sum, o) => sum + o.total, 0);
    const qrSales = todayOrders.filter(o => o.paymentMethod.toLowerCase().includes('qr') || o.paymentMethod.toLowerCase().includes('bank')).reduce((sum, o) => sum + o.total, 0);

    const onlineOrdersCount = todayOrders.filter(o => o.source !== 'POS Counter').length;
    const posOrdersCount = todayOrders.filter(o => o.source === 'POS Counter').length;

    // Item popularity calculation
    const itemCounts = {};
    todayOrders.forEach(o => {
      o.items.forEach(i => {
        itemCounts[i.name] = (itemCounts[i.name] || 0) + i.quantity;
      });
    });

    const topItems = Object.entries(itemCounts).sort((a, b) => b[1] - a[1]).slice(0, 4);

    document.getElementById('salesTodayRevenue').textContent = `LKR ${totalSales.toLocaleString()}`;
    document.getElementById('salesTodayOrdersCount').textContent = todayOrders.length;
    document.getElementById('salesCashTotal').textContent = `LKR ${cashSales.toLocaleString()}`;
    document.getElementById('salesCardTotal').textContent = `LKR ${cardSales.toLocaleString()}`;
    document.getElementById('salesQrTotal').textContent = `LKR ${qrSales.toLocaleString()}`;
    document.getElementById('salesSplitDisplay').textContent = `${onlineOrdersCount} Online · ${posOrdersCount} Counter POS`;

    const topItemsList = document.getElementById('salesTopDishesList');
    if (topItemsList) {
      if (topItems.length === 0) {
        topItemsList.innerHTML = '<div class="text-xs text-stone-500 italic">No sales recorded yet today.</div>';
      } else {
        topItemsList.innerHTML = topItems.map(([name, count], i) => `
          <div class="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
            <span class="text-stone-200 font-medium">#${i+1} ${name}</span>
            <span class="font-mono text-amber-400 font-bold">${count} sold</span>
          </div>
        `).join('');
      }
    }
  }

  // 4. INVENTORY & DESCRIPTION EDITOR
  function renderAdminMenuManager() {
    const container = document.getElementById('adminMenuItemsList');
    if (!container) return;

    container.innerHTML = menuItems.map(item => {
      const pricing = getItemPricing(item);

      return `
        <div class="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 gap-3">
          <div class="flex items-start gap-3">
            <img src="${item.img}" alt="${item.name}" class="w-14 h-14 rounded-xl object-cover border border-white/10 shrink-0">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-white">${item.name}</span>
                ${pricing.hasOffer ? `<span class="offer-ribbon-red px-2 py-0.5 rounded text-[9px]">${pricing.tag}</span>` : ''}
              </div>
              <div class="text-[10px] text-amber-500 uppercase tracking-widest font-mono">${item.category} · ${item.serves || ''}</div>
              <p class="text-[11px] text-stone-400 line-clamp-1 mt-0.5 max-w-md">${item.description}</p>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-2.5 self-end sm:self-center">
            <div class="font-mono text-xs font-bold text-amber-400">LKR ${item.price.toLocaleString()}</div>
            
            <button onclick="window.OwitaApp.adminToggleStock('${item.id}')" class="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${item.inStock ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}">
              ${item.inStock ? 'In Stock' : 'Sold Out'}
            </button>

            <!-- Edit Dish & Description Button -->
            <button onclick="window.OwitaApp.adminOpenEditDishModal('${item.id}')" title="Edit Description & Price" class="px-2.5 py-1 bg-white/5 hover:bg-white/10 text-stone-200 border border-white/10 rounded text-xs flex items-center gap-1">
              <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
              <span>Edit Details</span>
            </button>

            <button onclick="window.OwitaApp.adminDeleteDish('${item.id}')" class="p-1.5 text-red-400 hover:bg-red-500/20 rounded">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();
  }

  function adminOpenEditDishModal(dishId) {
    const item = menuItems.find(m => m.id === dishId);
    if (!item) return;

    document.getElementById('editDishId').value = item.id;
    document.getElementById('editDishName').value = item.name;
    document.getElementById('editDishPrice').value = item.price;
    document.getElementById('editDishServes').value = item.serves || 'Serves 2 Persons';
    document.getElementById('editDishDescription').value = item.description || '';
    document.getElementById('editDishInclusions').value = (item.portionIncludes || []).join('\n');

    const modal = document.getElementById('adminEditDishModal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function adminCloseEditDishModal() {
    const modal = document.getElementById('adminEditDishModal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function adminSaveDishEdits(e) {
    if (e) e.preventDefault();

    const dishId = document.getElementById('editDishId').value;
    const item = menuItems.find(m => m.id === dishId);
    if (!item) return;

    const name = document.getElementById('editDishName').value.trim();
    const price = parseInt(document.getElementById('editDishPrice').value, 10);
    const serves = document.getElementById('editDishServes').value.trim();
    const description = document.getElementById('editDishDescription').value.trim();
    const inclusionsText = document.getElementById('editDishInclusions').value.trim();

    if (!name || isNaN(price) || price <= 0) {
      alert('Please fill out the dish name and valid price.');
      return;
    }

    item.name = name;
    item.price = price;
    item.serves = serves;
    item.description = description;
    item.portionIncludes = inclusionsText.split('\n').map(l => l.trim()).filter(l => l.length > 0);

    setStorage(STORAGE_KEYS.MENU, menuItems);
    adminCloseEditDishModal();

    renderAdminMenuManager();
    renderFullMenu();
    renderSignatureDishes();
    renderPosTerminal();
    renderActiveOffersSection();

    showToast(`Updated details and description for "${item.name}"!`, 'success');
  }

  function adminToggleStock(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    item.inStock = !item.inStock;
    setStorage(STORAGE_KEYS.MENU, menuItems);
    renderAdminMenuManager();
    renderFullMenu();
    renderSignatureDishes();
    showToast(`${item.name} is now ${item.inStock ? 'In Stock' : 'Out of Stock'}.`, 'info');
  }

  function adminDeleteDish(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    if (!confirm(`Are you sure you want to remove "${item.name}" from the menu?`)) return;

    menuItems = menuItems.filter(i => i.id !== itemId);
    setStorage(STORAGE_KEYS.MENU, menuItems);
    renderAdminMenuManager();
    renderFullMenu();
    renderSignatureDishes();
    showToast(`Removed ${item.name} from menu.`, 'warning');
  }

  function adminAddNewDish(e) {
    if (e) e.preventDefault();

    const name = document.getElementById('newDishName').value.trim();
    const sinhala = document.getElementById('newDishSinhala').value.trim();
    const category = document.getElementById('newDishCategory').value;
    const price = parseInt(document.getElementById('newDishPrice').value, 10);
    const serves = document.getElementById('newDishServes')?.value.trim() || 'Serves 2 Persons';
    const description = document.getElementById('newDishDescription').value.trim();
    const inclusionsText = document.getElementById('newDishInclusions')?.value.trim() || '';
    const img = document.getElementById('newDishImg').value.trim() || 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80';

    if (!name || isNaN(price) || price <= 0) {
      alert('Please fill out the dish name and valid price.');
      return;
    }

    const portionIncludes = inclusionsText.length > 0 
      ? inclusionsText.split('\n').map(l => l.trim()).filter(l => l.length > 0)
      : [
          'Freshly prepared upon order on hot flame wok',
          'Generous portion for ' + serves,
          'House-made authentic chili paste & sauce included'
        ];

    const newDish = {
      id: 'ow-custom-' + Date.now(),
      name,
      sinhala,
      category,
      price,
      serves,
      portionIncludes,
      isSignature: false,
      isOffer: false,
      offerDiscountPercent: 0,
      inStock: true,
      prepBaseMins: 10,
      rating: 5.0,
      reviewsCount: 1,
      img,
      description
    };

    menuItems.push(newDish);
    setStorage(STORAGE_KEYS.MENU, menuItems);

    document.getElementById('newDishForm').reset();
    document.getElementById('adminNewDishModal').classList.add('hidden');

    renderAdminMenuManager();
    renderFullMenu();
    renderPosTerminal();
    showToast(`Added "${name}" to menu successfully!`, 'success');
  }

  // 5. PROMOTIONAL OFFERS MANAGER
  function renderAdminOffersManager() {
    const list = document.getElementById('adminOffersList');
    if (!list) return;

    // Populate dish dropdown
    const select = document.getElementById('offerDishSelect');
    if (select) {
      select.innerHTML = menuItems.map(m => `<option value="${m.id}">${m.name} (LKR ${m.price})</option>`).join('');
    }

    if (offers.length === 0) {
      list.innerHTML = '<div class="text-xs text-stone-500 italic p-4">No active offers. Create one above!</div>';
      return;
    }

    list.innerHTML = offers.map(off => {
      const item = menuItems.find(m => m.id === off.dishId);
      const isExpired = new Date(off.expiresAt) <= new Date();

      return `
        <div class="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 gap-3">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-white">${off.title}</span>
              <span class="offer-ribbon-red px-2 py-0.5 rounded text-[9px] font-black">${off.tag}</span>
              ${isExpired ? '<span class="text-[9px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded">Expired</span>' : ''}
            </div>
            <div class="text-xs text-amber-400 font-mono mt-0.5">${off.dishName || (item ? item.name : '')}</div>
            <div class="text-[11px] text-stone-400 mt-1 font-mono">
              ⏳ Expiration: ${new Date(off.expiresAt).toLocaleString()} (${formatCountdown(off.expiresAt)})
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button onclick="window.OwitaApp.adminToggleOffer('${off.id}')" class="px-3 py-1 rounded text-xs font-bold uppercase ${off.active && !isExpired ? 'bg-emerald-500/20 text-emerald-400' : 'bg-stone-800 text-stone-400'}">
              ${off.active && !isExpired ? 'Active' : 'Inactive'}
            </button>
            <button onclick="window.OwitaApp.adminDeleteOffer('${off.id}')" class="p-1.5 text-red-400 hover:bg-red-500/20 rounded">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();
  }

  function adminCreateNewOffer(e) {
    if (e) e.preventDefault();

    const dishId = document.getElementById('offerDishSelect').value;
    const item = menuItems.find(m => m.id === dishId);
    if (!item) return;

    const title = document.getElementById('offerTitleInput').value.trim();
    const discountType = document.getElementById('offerTypeSelect').value; // 'percent' or 'fixed'
    const discountValue = parseInt(document.getElementById('offerValueInput').value, 10);
    const durationHours = parseFloat(document.getElementById('offerDurationSelect').value);

    if (!title || isNaN(discountValue) || discountValue <= 0) {
      alert('Please fill out all offer details.');
      return;
    }

    const expiresAt = new Date(Date.now() + durationHours * 3600 * 1000).toISOString();
    const tag = discountType === 'percent' ? `${discountValue}% OFF` : `SAVE LKR ${discountValue}`;

    const newOffer = {
      id: 'off-' + Date.now(),
      dishId: item.id,
      dishName: item.name,
      title,
      discountType,
      discountValue,
      tag,
      description: item.description,
      code: 'FLASH' + discountValue,
      active: true,
      expiresAt
    };

    offers.unshift(newOffer);
    setStorage(STORAGE_KEYS.OFFERS, offers);

    document.getElementById('adminOfferForm')?.reset();
    renderAdminOffersManager();
    renderActiveOffersSection();
    renderSignatureDishes();
    renderFullMenu();
    updateCustomerOfferBanner();

    soundEffects.alert();
    showToast(`🔥 New Flash Offer created for "${item.name}" (${tag})!`, 'success');
  }

  function adminToggleOffer(offerId) {
    const off = offers.find(o => o.id === offerId);
    if (!off) return;

    off.active = !off.active;
    setStorage(STORAGE_KEYS.OFFERS, offers);

    renderAdminOffersManager();
    renderActiveOffersSection();
    renderSignatureDishes();
    renderFullMenu();
    updateCustomerOfferBanner();
  }

  function adminDeleteOffer(offerId) {
    offers = offers.filter(o => o.id !== offerId);
    setStorage(STORAGE_KEYS.OFFERS, offers);

    renderAdminOffersManager();
    renderActiveOffersSection();
    renderSignatureDishes();
    renderFullMenu();
    updateCustomerOfferBanner();
    showToast('Offer removed.', 'info');
  }

  // Customer Top Notification Alert Bar for Active Offers
  function updateCustomerOfferBanner() {
    const banner = document.getElementById('customerOfferAlertBar');
    const dishEl = document.getElementById('offerAlertDishName');
    const timerEl = document.getElementById('offerAlertTimer');
    if (!banner) return;

    const active = offers.find(o => o.active && new Date(o.expiresAt) > new Date());
    if (active) {
      banner.classList.remove('hidden');
      if (dishEl) dishEl.textContent = active.dishName || active.title;
      if (timerEl) timerEl.textContent = 'Ends in: ' + formatCountdown(active.expiresAt);
    } else {
      banner.classList.add('hidden');
    }
  }

  // --- LIVE KITCHEN TIMER & OFFER COUNTDOWN ENGINE ---
  function updateLiveTimers() {
    const now = Date.now();

    // 1. Kitchen order timers
    document.querySelectorAll('.live-timer-text').forEach(textEl => {
      const readyAt = new Date(textEl.dataset.readyAt).getTime();
      if (!readyAt || isNaN(readyAt)) {
        textEl.textContent = 'Under Review';
        return;
      }

      const diffMs = readyAt - now;

      if (diffMs <= 0) {
        textEl.textContent = 'READY FOR PICKUP!';
        textEl.classList.remove('text-amber-400');
        textEl.classList.add('text-emerald-400');
      } else {
        const totalSecs = Math.floor(diffMs / 1000);
        const mins = Math.floor(totalSecs / 60);
        const secs = totalSecs % 60;
        textEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} Remaining`;
      }
    });

    document.querySelectorAll('.live-timer-bar').forEach(barEl => {
      const createdAt = new Date(barEl.dataset.createdAt).getTime();
      const readyAt = new Date(barEl.dataset.readyAt).getTime();
      const totalDuration = readyAt - createdAt;
      const elapsed = now - createdAt;

      if (totalDuration > 0) {
        const percent = Math.min(100, Math.max(5, (elapsed / totalDuration) * 100));
        barEl.style.width = `${percent}%`;
      }
    });

    // 2. Offer ticking countdowns
    document.querySelectorAll('.live-offer-timer').forEach(el => {
      const expires = el.dataset.expires;
      if (expires) {
        el.textContent = '⏳ Ends: ' + formatCountdown(expires);
      }
    });

    const topBannerTimer = document.getElementById('offerAlertTimer');
    const topActiveOffer = offers.find(o => o.active && new Date(o.expiresAt) > new Date());
    if (topBannerTimer && topActiveOffer) {
      topBannerTimer.textContent = 'Ends in: ' + formatCountdown(topActiveOffer.expiresAt);
    }
  }

  setInterval(updateLiveTimers, 1000);

  function updateAdminAnalytics() {
    const todayStr = new Date().toISOString().slice(0, 10);
    const todayOrders = orders.filter(o => o.createdAt.startsWith(todayStr) && o.orderStatus !== 'Cancelled');
    const totalRev = todayOrders.reduce((sum, o) => sum + o.total, 0);
    const pendingCount = orders.filter(o => o.orderStatus === 'Under Review' || o.orderStatus === 'Preparing in Kitchen' || o.orderStatus === 'Change Requested').length;

    const revEl = document.getElementById('adminTotalRevenue');
    const pendingEl = document.getElementById('adminPendingOrdersCount');
    const badgeEl = document.getElementById('adminPendingOrdersBadge');

    if (revEl) revEl.textContent = `LKR ${totalRev.toLocaleString()}`;
    if (pendingEl) pendingEl.textContent = pendingCount;
    if (badgeEl) {
      badgeEl.textContent = pendingCount;
      badgeEl.classList.toggle('hidden', pendingCount === 0);
    }
  }

  // --- MULTI-USER AUTH CONTROLLER ---
  function updateAuthUI() {
    const userDisplay = document.getElementById('headerUserDisplay');
    const authBtn = document.getElementById('headerAuthBtn');

    if (!userDisplay) return;

    if (currentUser) {
      userDisplay.innerHTML = `
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold text-xs">
            ${currentUser.name.charAt(0)}
          </div>
          <div class="hidden sm:block text-left">
            <div class="text-xs font-bold text-white truncate max-w-[120px]">${currentUser.name}</div>
            <div class="text-[10px] text-stone-400 capitalize">${currentUser.role}</div>
          </div>
          <button onclick="window.OwitaApp.signOut()" title="Sign Out" class="ml-1 text-stone-400 hover:text-white p-1">
            <i data-lucide="log-out" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      `;
      if (authBtn) authBtn.classList.add('hidden');
    } else {
      userDisplay.innerHTML = '';
      if (authBtn) authBtn.classList.remove('hidden');
    }

    if (window.lucide) lucide.createIcons();
    updateCustomerOfferBanner();
  }

  function openAuthModal(defaultTab = 'signin') {
    const modal = document.getElementById('owitaAuthModal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      switchAuthTab(defaultTab);
    }
  }

  function closeAuthModal() {
    const modal = document.getElementById('owitaAuthModal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function switchAuthTab(tab) {
    const signInForm = document.getElementById('authSignInForm');
    const registerForm = document.getElementById('authRegisterForm');
    const tabSignIn = document.getElementById('authTabSignIn');
    const tabRegister = document.getElementById('authTabRegister');

    if (tab === 'signin') {
      signInForm?.classList.remove('hidden');
      registerForm?.classList.add('hidden');
      tabSignIn?.classList.add('border-amber-500', 'text-amber-400');
      tabRegister?.classList.remove('border-amber-500', 'text-amber-400');
    } else {
      signInForm?.classList.add('hidden');
      registerForm?.classList.remove('hidden');
      tabRegister?.classList.add('border-amber-500', 'text-amber-400');
      tabSignIn?.classList.remove('border-amber-500', 'text-amber-400');
    }
  }

  function handleSignIn(e) {
    if (e) e.preventDefault();
    const email = document.getElementById('signInEmail').value.trim();
    const password = document.getElementById('signInPassword').value;

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      alert('Invalid email or password. Hint: Try nethum@example.com / password123 or manager@ovita.lk / admin');
      return;
    }

    currentUser = user;
    setStorage(STORAGE_KEYS.CURRENT_USER, currentUser);
    closeAuthModal();
    updateAuthUI();
    renderCustomerOrders();
    soundEffects.chime();
    showToast(`Welcome back, ${user.name}!`, 'success');

    // Customer Offer Alert notification upon signing in
    const activeOffer = offers.find(o => o.active && new Date(o.expiresAt) > new Date());
    if (activeOffer) {
      setTimeout(() => {
        showToast(`🔥 Exclusive Flash Deal: "${activeOffer.dishName || activeOffer.title}" is ${activeOffer.tag}! Ends in ${formatCountdown(activeOffer.expiresAt)}! Hurry!`, 'alert');
      }, 1200);
    }
  }

  function handleRegister(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const password = document.getElementById('regPassword').value;

    if (!name || !email || !phone || !password) {
      alert('Please fill out all registration fields.');
      return;
    }

    if (users.some(u => u.email === email)) {
      alert('An account with this email already exists.');
      return;
    }

    const newUser = {
      id: 'usr-' + Date.now(),
      name,
      email,
      phone,
      password,
      role: 'customer'
    };

    users.push(newUser);
    setStorage(STORAGE_KEYS.USERS, users);
    currentUser = newUser;
    setStorage(STORAGE_KEYS.CURRENT_USER, currentUser);

    closeAuthModal();
    updateAuthUI();
    renderCustomerOrders();
    soundEffects.chime();
    showToast(`Account created! Welcome to Ovita, ${name}!`, 'success');
  }

  function signOut() {
    currentUser = null;
    setStorage(STORAGE_KEYS.CURRENT_USER, null);
    updateAuthUI();
    renderCustomerOrders();
    showToast('Signed out successfully.', 'info');
  }

  function toggleRoleSwitch() {
    activeView = activeView === 'customer' ? 'restaurant' : 'customer';
    setStorage(STORAGE_KEYS.ACTIVE_VIEW, activeView);
    applyActiveView();
    soundEffects.chime();
    showToast(`Switched view to: ${activeView.toUpperCase()}`, 'info');
  }

    function applyActiveView() {
    const customerView = document.getElementById('customerWebsiteContainer');
    const adminView = document.getElementById('adminPortalContainer');
    const customerNav = document.getElementById('customerNavbar');
    const roleBtnText = document.getElementById('headerRoleSwitcherText');

    if (activeView === 'restaurant') {
      // Admin Backstage: Hide entire customer website, navbar, footer, map, and gallery
      if (customerView) customerView.classList.add('hidden');
      if (customerNav) customerNav.classList.add('hidden');
      if (adminView) adminView.classList.remove('hidden');
      if (roleBtnText) roleBtnText.textContent = 'Switch to Customer View';
      setAdminTab(adminActiveTab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Customer View: Show customer sections and navigation
      if (customerView) customerView.classList.remove('hidden');
      if (customerNav) customerNav.classList.remove('hidden');
      if (adminView) adminView.classList.add('hidden');
      if (roleBtnText) roleBtnText.textContent = 'Kitchen / POS Admin';
      renderCustomerOrders();
    }

    if (window.lucide) lucide.createIcons();
  }

function openCartDrawer() {
    const drawer = document.getElementById('cartDrawer') || document.getElementById('owitaCartDrawer');
    const backdrop = document.getElementById('owitaCartDrawerBackdrop');
    if (drawer) {
      drawer.classList.remove('translate-x-full');
      drawer.classList.add('translate-x-0', 'open');
      if (backdrop) {
        backdrop.classList.remove('hidden');
        backdrop.classList.add('open');
      }
      document.body.style.overflow = 'hidden';
      renderCartDrawer();
    }
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('cartDrawer') || document.getElementById('owitaCartDrawer');
    const backdrop = document.getElementById('owitaCartDrawerBackdrop');
    if (drawer) {
      drawer.classList.remove('translate-x-0', 'open');
      drawer.classList.add('translate-x-full');
      if (backdrop) {
        backdrop.classList.remove('open');
        backdrop.classList.add('hidden');
      }
      document.body.style.overflow = '';
    }
  }

  function setCategory(cat) {
    activeCategory = cat;
    document.querySelectorAll('.category-pill').forEach(btn => {
      if (btn.dataset.category === cat) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    renderFullMenu();
  }

  // --- INITIALIZE APPLICATION ---
  function init() {
    renderActiveOffersSection();
    renderSignatureDishes();
    renderFullMenu();
    renderGallery();
    updateCartBadges();
    updateAuthUI();
    applyActiveView();
    initScrollObserver();

    // Event Listeners for category pills
    document.querySelectorAll('.category-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        setCategory(btn.dataset.category);
      });
    });

    // Event Listeners for gallery pills
    document.querySelectorAll('.gallery-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        setGalleryCategory(btn.dataset.galleryCategory);
      });
    });

    // Admin Tabs
    document.querySelectorAll('.admin-nav-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        setAdminTab(btn.dataset.adminTab);
      });
    });

    // Form submits
    document.getElementById('authSignInForm')?.addEventListener('submit', handleSignIn);
    document.getElementById('authRegisterForm')?.addEventListener('submit', handleRegister);
    document.getElementById('checkoutPaymentForm')?.addEventListener('submit', executePaymentAndPlaceOrder);
    document.getElementById('newDishForm')?.addEventListener('submit', adminAddNewDish);
    document.getElementById('editDishForm')?.addEventListener('submit', adminSaveDishEdits);
    document.getElementById('adminOfferForm')?.addEventListener('submit', adminCreateNewOffer);

    // Global ESC key listener to close modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeReceiptModal();
        closeAuthModal();
        closeCheckoutModal();
        closeCartDrawer();
        closeGalleryLightbox();
        adminCloseEditDishModal();
      }
    });

    // Close on backdrop click for all modals
    ['digitalReceiptModal', 'checkoutPaymentModal', 'owitaAuthModal', 'adminNewDishModal', 'adminEditDishModal', 'galleryLightboxModal', 'tableReservationModal'].forEach(id => {
      const m = document.getElementById(id);
      if (m) {
        m.addEventListener('click', (e) => {
          if (e.target === m) {
            if (id === 'digitalReceiptModal') closeReceiptModal();
            else if (id === 'checkoutPaymentModal') closeCheckoutModal();
            else if (id === 'owitaAuthModal') closeAuthModal();
            else if (id === 'adminEditDishModal') adminCloseEditDishModal();
            else if (id === 'galleryLightboxModal') closeGalleryLightbox();
            else m.classList.add('hidden');
          }
        });
      }
    });

    if (window.lucide) lucide.createIcons();
  }

  // Expose public API to window for inline onclick handlers
  window.OwitaApp = {
    onMenuCardClick: function(dishId, event) {
      if (window.OwitaSlider && window.OwitaSlider.goToDishId) {
        window.OwitaSlider.goToDishId(dishId);
      }
      // Smoothly scroll up toward the interactive showcase so the user sees the plate animation & full details
      const showcaseEl = document.getElementById('interactiveOrderShowcase');
      if (showcaseEl) {
        showcaseEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
    init,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    openCartDrawer,
    closeCartDrawer,
    proceedToCheckout,
    openCheckoutModal,
    closeCheckoutModal,
    openReceiptModal,
    closeReceiptModal,
    openAuthModal,
    closeAuthModal,
    switchAuthTab,
    signOut,
    toggleRoleSwitch,
    setCategory,
    setGalleryCategory,
    openGalleryLightbox,
    closeGalleryLightbox,
    detectCustomerLocation,
    requestOrderCancellation,
    adminConfirmOrder,
    adminUpdateOrderStatus,
    adminHandleChangeRequest,
    adminAdjustOrderTime,
    setAdminTab,
    addToPosCart,
    updatePosCartQuantity,
    executePosCheckout,
    renderPosBill,
    adminOpenEditDishModal,
    adminCloseEditDishModal,
    adminToggleStock,
    adminDeleteDish,
    adminCreateNewOffer,
    adminToggleOffer,
    adminDeleteOffer
  };

  document.addEventListener('DOMContentLoaded', init);
})();
