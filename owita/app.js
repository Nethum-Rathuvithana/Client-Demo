// Owita Restaurant & Cafe — Interactive Application Engine
// Manages Menu, Cart, Timers, Multi-user Auth, Payment Portal, Digital Receipt & Admin Portal

(function() {
  'use strict';

  // --- AUDIO SYNTHESIZER (NO EXTERNAL AUDIO FILES NEEDED) ---
  const soundEffects = {
    chime: function() {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
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
    MENU: 'owita_menu_items_v1',
    OFFERS: 'owita_offers_v1',
    USERS: 'owita_users_v1',
    CURRENT_USER: 'owita_current_user_v1',
    ORDERS: 'owita_orders_v1',
    CART: 'owita_cart_v1',
    ACTIVE_VIEW: 'owita_active_view_v1' // 'customer' or 'admin'
  };

  // Initialize or fetch state
  function getStorage(key, defaultVal) {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : defaultVal;
  }
  function setStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  let menuItems = getStorage(STORAGE_KEYS.MENU, DEFAULT_MENU_ITEMS);
  let offers = getStorage(STORAGE_KEYS.OFFERS, DEFAULT_OFFERS);
  let users = getStorage(STORAGE_KEYS.USERS, DEFAULT_USERS);
  let currentUser = getStorage(STORAGE_KEYS.CURRENT_USER, DEFAULT_USERS[0]); // default customer logged in for smooth demo
  let orders = getStorage(STORAGE_KEYS.ORDERS, DEFAULT_SEED_ORDERS);
  let cart = getStorage(STORAGE_KEYS.CART, []);
  let activeView = getStorage(STORAGE_KEYS.ACTIVE_VIEW, 'customer'); // 'customer' or 'admin'
  let activeCategory = 'all';
  let activeGalleryCategory = 'all';
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


  // --- ORDER TIMER CALCULATION FORMULA ---
  // Spec: 10 mins for 1 item, 10 more if 2 items (20 mins), and 5 mins for each item thereafter.
  function calculatePrepTimeMins(totalItemsCount) {
    if (!totalItemsCount || totalItemsCount <= 0) return 0;
    if (totalItemsCount === 1) return 10;
    if (totalItemsCount === 2) return 20;
    return 20 + ((totalItemsCount - 2) * 5);
  }

  function getCartItemsTotalCount() {
    return cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  }

  // --- TOAST NOTIFICATIONS ---
  function showToast(message, type = 'success') {
    const toast = document.getElementById('owitaToast');
    const toastText = document.getElementById('owitaToastText');
    const toastIcon = document.getElementById('owitaToastIcon');
    if (!toast || !toastText) return;

    toastText.textContent = message;
    if (type === 'alert') {
      toast.className = 'fixed bottom-6 right-6 z-[200] flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-amber-950/95 border border-amber-500 text-amber-200 shadow-2xl backdrop-blur-md transition-all duration-300 transform translate-y-0 opacity-100';
      soundEffects.alert();
    } else {
      toast.className = 'fixed bottom-6 right-6 z-[200] flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#121217]/95 border border-amber-500/30 text-stone-100 shadow-2xl backdrop-blur-md transition-all duration-300 transform translate-y-0 opacity-100';
      soundEffects.chime();
    }

    clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => {
      toast.classList.add('translate-y-12', 'opacity-0');
    }, 3800);
  }

  // --- RENDER MENU & SIGNATURE COLLECTION ---
  function renderSignatureDishes() {
    const container = document.getElementById('signatureCollectionGrid');
    if (!container) return;

    const signatureItems = menuItems.filter(item => item.isSignature);
    container.innerHTML = signatureItems.map((item, idx) => `
      <div class="owita-card rounded-2xl overflow-hidden flex flex-col justify-between group reveal-init reveal-bottom stagger-${(idx % 4) + 1}">
        <div>
          <div class="relative h-56 overflow-hidden">
            <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-[#101014] via-transparent to-transparent"></div>
            
            <div class="absolute top-3 left-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-500/30 text-[10px] font-semibold text-amber-400">
              <i data-lucide="clock" class="w-3 h-3"></i>
              <span>~10 Mins Prep</span>
            </div>

            ${item.isOffer ? `
              <div class="absolute top-3 right-3 bg-amber-500 text-black px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                ${item.offerDiscountPercent}% OFF
              </div>
            ` : ''}

            <div class="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold text-amber-400 flex items-center gap-1">
              <span>★</span>
              <span>${item.rating}</span>
            </div>
          </div>

          <div class="p-5 space-y-2">
            <h3 class="font-serif-luxury text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
              ${item.name}
            </h3>
            ${item.sinhala ? `<div class="text-[11px] text-amber-500/80 font-medium">${item.sinhala}</div>` : ''}
            <p class="text-xs text-stone-400 line-clamp-2 leading-relaxed">
              ${item.description}
            </p>
          </div>
        </div>

        <div class="p-5 pt-0 flex items-center justify-between border-t border-white/5 mt-2">
          <div>
            <div class="text-[10px] text-stone-500 uppercase tracking-widest font-mono">Price</div>
            <div class="text-lg font-bold font-mono text-amber-400">
              LKR ${item.price.toLocaleString()}
            </div>
          </div>

          <button onclick="window.OwitaApp.addToCart('${item.id}')" class="px-4 py-2.5 rounded-xl amber-btn-primary flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
            <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
            <span>Add</span>
          </button>
        </div>
      </div>
    `).join('');

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

    container.innerHTML = filtered.map(item => `
      <div class="owita-card rounded-2xl overflow-hidden flex flex-col justify-between group ${!item.inStock ? 'opacity-60 grayscale' : ''}">
        <div>
          <div class="relative h-48 overflow-hidden">
            <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-[#101014] via-transparent to-transparent"></div>
            
            <div class="absolute top-3 left-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-amber-500/30 text-[10px] font-semibold text-amber-400">
              <i data-lucide="clock" class="w-3 h-3"></i>
              <span>~10 Mins Prep</span>
            </div>

            ${!item.inStock ? `
              <div class="absolute inset-0 bg-black/70 flex items-center justify-center text-xs font-bold uppercase tracking-widest text-red-400">
                Sold Out
              </div>
            ` : ''}

            <div class="absolute bottom-2.5 right-3 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-xs font-semibold text-amber-400">
              ★ ${item.rating || '4.8'}
            </div>
          </div>

          <div class="p-4 space-y-1.5">
            <h4 class="font-serif-luxury text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
              ${item.name}
            </h4>
            <p class="text-xs text-stone-400 line-clamp-2 leading-relaxed">
              ${item.description}
            </p>
          </div>
        </div>

        <div class="p-4 pt-0 flex items-center justify-between border-t border-white/5 mt-2">
          <div>
            <div class="text-base font-bold font-mono text-amber-400">
              LKR ${item.price.toLocaleString()}
            </div>
          </div>

          ${item.inStock ? `
            <button onclick="window.OwitaApp.addToCart('${item.id}')" class="px-3.5 py-2 rounded-xl amber-btn-primary flex items-center gap-1.5 text-xs font-bold">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i>
              <span>Add</span>
            </button>
          ` : `
            <span class="text-xs text-stone-500 uppercase font-mono">Unavailable</span>
          `}
        </div>
      </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
  }

  // --- CART MANAGEMENT ---
  function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const existing = cart.find(c => c.id === itemId);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
        quantity: 1,
        notes: ''
      });
    }

    setStorage(STORAGE_KEYS.CART, cart);
    updateCartBadges();
    renderCartDrawer();
    showToast(`Added ${item.name} to cart`);
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
    showToast('Item removed from cart');
  }

  function updateCartBadges() {
    const totalCount = getCartItemsTotalCount();
    document.querySelectorAll('.cart-count-badge').forEach(el => {
      el.textContent = totalCount;
      el.classList.toggle('hidden', totalCount === 0);
    });

    // Update dynamic prep timer estimate in cart
    const prepMins = calculatePrepTimeMins(totalCount);
    document.querySelectorAll('.cart-prep-estimate-time').forEach(el => {
      el.textContent = `${prepMins} Mins`;
    });
  }

  function renderCartDrawer() {
    const container = document.getElementById('cartDrawerItems');
    const summaryBox = document.getElementById('cartSummaryBox');
    const emptyBox = document.getElementById('cartEmptyBox');
    if (!container) return;

    const totalCount = getCartItemsTotalCount();

    if (cart.length === 0) {
      container.innerHTML = '';
      if (summaryBox) summaryBox.classList.add('hidden');
      if (emptyBox) emptyBox.classList.remove('hidden');
      return;
    }

    if (emptyBox) emptyBox.classList.add('hidden');
    if (summaryBox) summaryBox.classList.remove('hidden');

    let subtotal = 0;
    container.innerHTML = cart.map(item => {
      const itemSubtotal = item.price * item.quantity;
      subtotal += itemSubtotal;
      return `
        <div class="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
          <img src="${item.img}" alt="${item.name}" class="w-14 h-14 rounded-lg object-cover">
          <div class="flex-1 min-w-0">
            <h4 class="text-sm font-semibold text-white truncate">${item.name}</h4>
            <div class="text-xs font-mono text-amber-400 mt-0.5">LKR ${item.price.toLocaleString()}</div>
            <div class="flex items-center gap-2 mt-2">
              <button onclick="window.OwitaApp.updateCartQuantity('${item.id}', -1)" class="w-6 h-6 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs">
                -
              </button>
              <span class="text-xs font-mono text-white px-1">${item.quantity}</span>
              <button onclick="window.OwitaApp.updateCartQuantity('${item.id}', 1)" class="w-6 h-6 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs">
                +
              </button>
            </div>
          </div>
          <div class="text-right">
            <div class="text-xs font-mono font-bold text-white">LKR ${itemSubtotal.toLocaleString()}</div>
            <button onclick="window.OwitaApp.removeFromCart('${item.id}')" class="text-stone-500 hover:text-red-400 text-xs mt-3 block ml-auto">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    const serviceFee = Math.round(subtotal * 0.05);
    const packagingFee = OWITA_CONFIG.packagingFeeLKR;
    const total = subtotal + serviceFee + packagingFee;
    const prepMins = calculatePrepTimeMins(totalCount);

    document.getElementById('cartDrawerSubtotal').textContent = `LKR ${subtotal.toLocaleString()}`;
    document.getElementById('cartDrawerServiceFee').textContent = `LKR ${serviceFee.toLocaleString()}`;
    document.getElementById('cartDrawerPackagingFee').textContent = `LKR ${packagingFee.toLocaleString()}`;
    document.getElementById('cartDrawerTotal').textContent = `LKR ${total.toLocaleString()}`;
    document.getElementById('cartDrawerPrepExplanation').textContent = 
      totalCount === 1 ? '10 mins for 1 item' : 
      totalCount === 2 ? '20 mins for 2 items' : 
      `20 mins base + ${(totalCount - 2) * 5} mins for ${totalCount} items`;

    if (window.lucide) lucide.createIcons();
  }

  // --- CHECKOUT & PAYMENT MODAL FLOW ---
  function proceedToCheckout() {
    if (cart.length === 0) {
      showToast('Your cart is empty', 'alert');
      return;
    }

    // Spec Requirement: Customers must order after signing in, give option to sign in when confirming order!
    if (!currentUser || currentUser.role !== 'customer') {
      closeCartDrawer();
      openAuthModal('signin', () => {
        openCheckoutModal();
      });
      return;
    }

    closeCartDrawer();
    openCheckoutModal();
  }

  function openCheckoutModal() {
    const modal = document.getElementById('checkoutPaymentModal');
    if (!modal) return;

    const totalCount = getCartItemsTotalCount();
    const subtotal = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
    const serviceFee = Math.round(subtotal * 0.05);
    const packagingFee = OWITA_CONFIG.packagingFeeLKR;
    const total = subtotal + serviceFee + packagingFee;
    const prepMins = calculatePrepTimeMins(totalCount);

    // Populate Review list
    const reviewContainer = document.getElementById('checkoutOrderReviewItems');
    if (reviewContainer) {
      reviewContainer.innerHTML = cart.map(item => `
        <div class="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
          <span class="text-stone-300 font-medium">${item.quantity}x ${item.name}</span>
          <span class="font-mono text-amber-400">LKR ${(item.price * item.quantity).toLocaleString()}</span>
        </div>
      `).join('');
    }

    document.getElementById('checkoutSubtotal').textContent = `LKR ${subtotal.toLocaleString()}`;
    document.getElementById('checkoutServiceFee').textContent = `LKR ${serviceFee.toLocaleString()}`;
    document.getElementById('checkoutPackagingFee').textContent = `LKR ${packagingFee.toLocaleString()}`;
    document.getElementById('checkoutGrandTotal').textContent = `LKR ${total.toLocaleString()}`;
    document.getElementById('checkoutTotalItems').textContent = `${totalCount} Dish${totalCount > 1 ? 'es' : ''}`;
    document.getElementById('checkoutEstimatedMins').textContent = `${prepMins} Minutes`;

    // Customer details
    document.getElementById('checkoutCustomerName').value = currentUser.name || '';
    document.getElementById('checkoutCustomerPhone').value = currentUser.phone || '';
    document.getElementById('checkoutCustomerEmail').value = currentUser.email || '';

    modal.classList.remove('hidden');
  }

  function closeCheckoutModal() {
    const modal = document.getElementById('checkoutPaymentModal');
    if (modal) modal.classList.add('hidden');
  }

  // Handle Payment & Order Placement
  function executePaymentAndPlaceOrder(e) {
    e.preventDefault();

    const paymentMethodRadio = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentMethod = paymentMethodRadio ? paymentMethodRadio.value : 'Credit / Debit Card';
    const pickupNotes = document.getElementById('checkoutOrderNotes').value || '';

    const totalCount = getCartItemsTotalCount();
    const subtotal = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
    const serviceFee = Math.round(subtotal * 0.05);
    const packagingFee = OWITA_CONFIG.packagingFeeLKR;
    const total = subtotal + serviceFee + packagingFee;
    const prepMins = calculatePrepTimeMins(totalCount);

    // Generate Unique Order ID: #OW-XXXX
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderId = `OW-${randomSuffix}`;

    const newOrder = {
      orderId: orderId,
      userId: currentUser.id,
      customerName: currentUser.name,
      customerPhone: currentUser.phone,
      customerEmail: currentUser.email,
      pickupAddress: 'Pickup at Counter — Nagoda Junction, Kalutara',
      items: JSON.parse(JSON.stringify(cart)),
      itemCount: totalCount,
      subtotal: subtotal,
      serviceFee: serviceFee,
      packagingFee: packagingFee,
      discountAmount: 0,
      total: total,
      paymentStatus: 'Paid',
      paymentMethod: paymentMethod,
      paymentReference: `PAYHERE-TXN-${Date.now().toString().slice(-6)}`,
      orderStatus: 'In Kitchen',
      createdAt: Date.now(),
      prepTimeMins: prepMins,
      estimatedReadyAt: Date.now() + (prepMins * 60 * 1000),
      restaurantConfirmed: true,
      changeRequest: null,
      notes: pickupNotes
    };

    // Prepend order
    orders.unshift(newOrder);
    setStorage(STORAGE_KEYS.ORDERS, orders);

    // Clear cart
    cart = [];
    setStorage(STORAGE_KEYS.CART, cart);
    updateCartBadges();

    closeCheckoutModal();
    showToast(`Payment successful! Order ${orderId} placed & confirmed!`);

    // Open Digital Receipt Modal
    openReceiptModal(newOrder.orderId);

    // Re-render dashboards
    renderCustomerOrders();
    renderAdminOrders();
  }

  // --- DIGITAL RECEIPT GENERATOR ---
  function openReceiptModal(orderId) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;

    const receiptBox = document.getElementById('digitalReceiptContent');
    if (!receiptBox) return;

    const dateFormatted = new Date(order.createdAt).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    const readyTimeFormatted = new Date(order.estimatedReadyAt).toLocaleTimeString('en-GB', {
      hour: '2-digit', minute: '2-digit'
    });

    receiptBox.innerHTML = `
      <div class="text-center pb-4 border-b border-dashed border-stone-700">
        <div class="font-serif-luxury text-2xl font-bold text-amber-400">${OWITA_CONFIG.restaurantName}</div>
        <div class="text-xs text-stone-400 mt-0.5">${OWITA_CONFIG.sinhalaName}</div>
        <div class="text-[11px] text-stone-500 mt-1">${OWITA_CONFIG.address}</div>
        <div class="text-[11px] text-stone-500">Tel: ${OWITA_CONFIG.phone}</div>
      </div>

      <div class="py-3 border-b border-dashed border-stone-700 text-xs space-y-1">
        <div class="flex justify-between">
          <span class="text-stone-400 font-mono">ORDER NUMBER:</span>
          <span class="font-mono font-bold text-white">${order.orderId}</span>
        </div>
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

      <div class="py-3 border-b border-dashed border-stone-700 space-y-2">
        <div class="text-[11px] font-bold uppercase text-stone-400 tracking-wider">Itemized Bill</div>
        ${order.items.map(item => `
          <div class="flex justify-between text-xs">
            <span class="text-stone-200">${item.quantity}x ${item.name}</span>
            <span class="font-mono text-stone-300">LKR ${(item.price * item.quantity).toLocaleString()}</span>
          </div>
        `).join('')}
      </div>

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

      <div class="pt-4 text-center space-y-2">
        <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30">
          <div class="text-[11px] font-semibold text-amber-400 uppercase tracking-widest">Estimated Ready Time</div>
          <div class="text-xl font-bold font-mono text-white mt-0.5">Approx. ${readyTimeFormatted}</div>
          <div class="text-[11px] text-stone-400 mt-1">Preparation Window: ~${order.prepTimeMins} Minutes</div>
        </div>

        <div class="text-[11px] text-stone-500 italic">
          Thank you for dining with Owita Family Restaurant!
        </div>
      </div>
    `;

    // Add return button at bottom of receipt card
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
        void card.offsetWidth; // trigger reflow
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
  // Spec: "and a one customer order shouldn't be visible to another customer but every order should be visible to restaurant."
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

    // Filter to ONLY this customer's orders!
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
                <span class="font-mono font-bold text-amber-400 text-base">${order.orderId}</span>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  isReady ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                  isCompleted ? 'bg-stone-800 text-stone-400 border border-stone-700' :
                  isCancelled ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                  isChangeRequested ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse' :
                  'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                }">
                  ${order.orderStatus}
                </span>
              </div>
              <div class="text-[11px] text-stone-500 mt-1">
                Placed ${new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} · Payment: ${order.paymentStatus}
              </div>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="window.OwitaApp.openReceiptModal('${order.orderId}')" class="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-stone-300 flex items-center gap-1.5 border border-white/10">
                <i data-lucide="receipt" class="w-3.5 h-3.5"></i>
                <span>Receipt</span>
              </button>
            </div>
          </div>

          <!-- Live Timer Progress -->
          ${(!isCompleted && !isCancelled) ? `
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
                <div class="kitchen-timer-fill live-timer-bar" data-created-at="${order.createdAt}" data-ready-at="${order.estimatedReadyAt}" style="width: 50%;"></div>
              </div>

              <div class="text-[11px] text-stone-400 flex justify-between">
                <span>Total Prep Time: ${order.prepTimeMins} mins (${order.itemCount} items)</span>
                <span>Counter: Nagoda Junction</span>
              </div>
            </div>
          ` : ''}

          <!-- Items Ordered -->
          <div class="space-y-1.5">
            <div class="text-xs font-semibold text-stone-400">Items:</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              ${order.items.map(i => `
                <div class="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex justify-between">
                  <span>${i.quantity}x ${i.name}</span>
                  <span class="font-mono text-amber-400">LKR ${(i.price * i.quantity).toLocaleString()}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Customer Action: Change / Cancel Request -->
          <!-- Spec: If restaurant confirmed, order won't change instantly; asks restaurant to confirm change/cancel! -->
          ${(!isCompleted && !isCancelled && order.orderStatus !== 'Ready for Pickup') ? `
            <div class="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
              ${isChangeRequested ? `
                <div class="text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/30 flex items-center gap-2">
                  <i data-lucide="clock" class="w-4 h-4 animate-spin"></i>
                  <span>Awaiting Restaurant Approval for ${order.changeRequest?.type === 'cancel' ? 'Cancellation' : 'Modification'}...</span>
                </div>
              ` : `
                <div class="flex items-center gap-2">
                  <button onclick="window.OwitaApp.requestOrderChange('${order.orderId}', 'modify')" class="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10 text-xs">
                    Modify Items / Notes
                  </button>
                  <button onclick="window.OwitaApp.requestOrderChange('${order.orderId}', 'cancel')" class="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs">
                    Cancel Order
                  </button>
                </div>
                <div class="text-[11px] text-stone-500">
                  Confirmed orders require restaurant acceptance to change.
                </div>
              `}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();
    updateLiveTimers();
  }

  // Customer triggers Change or Cancel Request
  function requestOrderChange(orderId, requestType) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;

    if (requestType === 'cancel') {
      const reason = prompt(`Please specify why you would like to cancel Order ${orderId}:`, 'Change of plans');
      if (reason === null) return; // User clicked cancel on prompt

      order.orderStatus = 'Cancellation Requested';
      order.changeRequest = {
        type: 'cancel',
        reason: reason,
        requestedAt: Date.now()
      };
      setStorage(STORAGE_KEYS.ORDERS, orders);
      showToast(`Cancellation requested for ${orderId}. Restaurant has been notified.`, 'alert');
    } else {
      const modification = prompt(`What changes would you like to make to Order ${orderId}? (e.g. Add extra chili paste, change spice level):`, order.notes || '');
      if (modification === null) return;

      order.orderStatus = 'Change Requested';
      order.changeRequest = {
        type: 'modify',
        reason: modification,
        requestedAt: Date.now()
      };
      setStorage(STORAGE_KEYS.ORDERS, orders);
      showToast(`Modification request sent to Owita kitchen.`, 'alert');
    }

    renderCustomerOrders();
    renderAdminOrders();
  }

  // --- RESTAURANT ADMIN PORTAL ---
  function renderAdminOrders() {
    const container = document.getElementById('adminOrdersTableBody');
    const badgeCount = document.getElementById('adminPendingOrdersBadge');
    if (!container) return;

    // Filter pending/active for badge
    const activeKitchenOrders = orders.filter(o => o.orderStatus === 'In Kitchen' || o.orderStatus === 'Change Requested' || o.orderStatus === 'Cancellation Requested');
    if (badgeCount) {
      badgeCount.textContent = activeKitchenOrders.length;
      badgeCount.classList.toggle('hidden', activeKitchenOrders.length === 0);
    }

    // Render all orders
    container.innerHTML = orders.map(order => {
      const isChangeReq = order.orderStatus === 'Change Requested' || order.orderStatus === 'Cancellation Requested';
      return `
        <tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors ${isChangeReq ? 'bg-amber-950/20' : ''}">
          <td class="p-4 font-mono font-bold text-amber-400">
            ${order.orderId}
          </td>
          <td class="p-4">
            <div class="font-medium text-white text-xs">${order.customerName}</div>
            <div class="text-[11px] text-stone-500 font-mono">${order.customerPhone}</div>
          </td>
          <td class="p-4 text-xs">
            <div class="space-y-0.5">
              ${order.items.map(i => `<div class="text-stone-300">${i.quantity}x ${i.name}</div>`).join('')}
              ${order.notes ? `<div class="text-[11px] text-amber-400 italic">Note: ${order.notes}</div>` : ''}
            </div>
          </td>
          <td class="p-4 text-xs font-mono font-bold text-white">
            LKR ${order.total.toLocaleString()}
            <div class="text-[10px] text-emerald-400 font-normal">${order.paymentStatus} (${order.paymentMethod.split(' ')[0]})</div>
          </td>
          <td class="p-4 text-xs">
            <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              order.orderStatus === 'Ready for Pickup' ? 'bg-emerald-500/20 text-emerald-400' :
              order.orderStatus === 'Completed' ? 'bg-stone-800 text-stone-400' :
              order.orderStatus === 'Cancelled' ? 'bg-red-500/20 text-red-400' :
              isChangeReq ? 'bg-amber-500/30 text-amber-200 animate-pulse border border-amber-500/50' :
              'bg-amber-500/20 text-amber-400'
            }">
              ${order.orderStatus}
            </span>

            ${isChangeReq ? `
              <div class="mt-2 p-2 rounded bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-200">
                <strong>Customer Request:</strong> ${order.changeRequest?.reason}
                <div class="flex gap-2 mt-1.5">
                  <button onclick="window.OwitaApp.adminHandleChangeRequest('${order.orderId}', true)" class="px-2 py-1 rounded bg-emerald-600 text-white font-bold text-[10px]">
                    Approve
                  </button>
                  <button onclick="window.OwitaApp.adminHandleChangeRequest('${order.orderId}', false)" class="px-2 py-1 rounded bg-stone-700 hover:bg-stone-600 text-white font-bold text-[10px]">
                    Decline
                  </button>
                </div>
              </div>
            ` : ''}
          </td>
          <td class="p-4 text-xs font-mono">
            ${order.orderStatus === 'In Kitchen' ? `
              <div class="live-timer-text text-amber-400 font-bold" data-ready-at="${order.estimatedReadyAt}">--:--</div>
              <div class="flex items-center gap-1 mt-1.5">
                <button onclick="window.OwitaApp.adminAdjustOrderTime('${order.orderId}', 5)" title="Add 5 Mins Delay" class="px-1.5 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[10px] text-stone-300">
                  +5m
                </button>
                <button onclick="window.OwitaApp.adminAdjustOrderTime('${order.orderId}', 10)" title="Add 10 Mins Delay" class="px-1.5 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[10px] text-stone-300">
                  +10m
                </button>
              </div>
            ` : order.orderStatus === 'Ready for Pickup' ? `
              <span class="text-emerald-400 font-bold">READY NOW</span>
            ` : `
              <span class="text-stone-500">Ended</span>
            `}
          </td>
          <td class="p-4 text-xs">
            <div class="flex items-center gap-1.5">
              ${order.orderStatus === 'In Kitchen' ? `
                <button onclick="window.OwitaApp.adminUpdateOrderStatus('${order.orderId}', 'Ready for Pickup')" class="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[11px] whitespace-nowrap">
                  Mark Ready
                </button>
              ` : order.orderStatus === 'Ready for Pickup' ? `
                <button onclick="window.OwitaApp.adminUpdateOrderStatus('${order.orderId}', 'Completed')" class="px-2.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 font-semibold text-[11px] whitespace-nowrap">
                  Complete
                </button>
              ` : `
                <span class="text-stone-500 text-[11px]">Archived</span>
              `}
            </div>
          </td>
        </tr>
      `;
    }).join('');

    updateAdminAnalytics();
  }

  // Admin modifies order status
  function adminUpdateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;

    order.orderStatus = newStatus;
    if (newStatus === 'Ready for Pickup') {
      order.estimatedReadyAt = Date.now();
    }
    setStorage(STORAGE_KEYS.ORDERS, orders);

    showToast(`Order ${orderId} marked as ${newStatus}!`);
    renderAdminOrders();
    renderCustomerOrders();
  }

  // Admin handles customer cancellation or change request
  function adminHandleChangeRequest(orderId, isApproved) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order || !order.changeRequest) return;

    const reqType = order.changeRequest.type;
    if (isApproved) {
      if (reqType === 'cancel') {
        order.orderStatus = 'Cancelled';
        order.paymentStatus = 'Refund Processed';
        showToast(`Cancellation approved for ${orderId}. Refund queued.`);
      } else {
        order.orderStatus = 'In Kitchen';
        order.notes = (order.notes ? order.notes + ' | ' : '') + `Modified: ${order.changeRequest.reason}`;
        showToast(`Modification approved for ${orderId}.`);
      }
    } else {
      order.orderStatus = 'In Kitchen';
      showToast(`Request declined for ${orderId}. Kitchen proceeding with original.`);
    }

    order.changeRequest = null;
    setStorage(STORAGE_KEYS.ORDERS, orders);
    renderAdminOrders();
    renderCustomerOrders();
  }

  // Admin adjusts prep time (kitchen delay +5m or +10m)
  function adminAdjustOrderTime(orderId, additionalMins) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return;

    order.prepTimeMins += additionalMins;
    order.estimatedReadyAt += (additionalMins * 60 * 1000);
    setStorage(STORAGE_KEYS.ORDERS, orders);

    showToast(`Added ${additionalMins} mins to Order ${orderId}. Customer notified.`, 'alert');
    renderAdminOrders();
    renderCustomerOrders();
  }

  // Admin Menu Manager
  function renderAdminMenuManager() {
    const container = document.getElementById('adminMenuItemsList');
    if (!container) return;

    container.innerHTML = menuItems.map(item => `
      <div class="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
        <div class="flex items-center gap-3">
          <img src="${item.img}" class="w-12 h-12 rounded-lg object-cover">
          <div>
            <div class="text-sm font-semibold text-white flex items-center gap-2">
              <span>${item.name}</span>
              ${!item.inStock ? '<span class="text-[10px] text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded">Out of Stock</span>' : ''}
            </div>
            <div class="text-xs text-amber-400 font-mono">LKR ${item.price.toLocaleString()} · ${item.category}</div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="window.OwitaApp.adminToggleStock('${item.id}')" class="px-2.5 py-1 rounded text-xs border ${item.inStock ? 'border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10' : 'border-stone-700 text-stone-400 hover:bg-stone-800'}">
            ${item.inStock ? 'In Stock' : 'Mark In Stock'}
          </button>
          <button onclick="window.OwitaApp.adminEditPrice('${item.id}')" class="px-2.5 py-1 rounded text-xs bg-white/5 hover:bg-white/10 text-stone-300">
            Edit Price
          </button>
          <button onclick="window.OwitaApp.adminDeleteDish('${item.id}')" class="p-1 text-stone-500 hover:text-red-400">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
  }

  function adminToggleStock(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;
    item.inStock = !item.inStock;
    setStorage(STORAGE_KEYS.MENU, menuItems);
    renderAdminMenuManager();
    renderFullMenu();
    renderGallery();
    renderSignatureDishes();
    showToast(`${item.name} marked ${item.inStock ? 'In Stock' : 'Out of Stock'}`);
  }

  function adminEditPrice(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;
    const newPriceStr = prompt(`Enter new price in LKR for ${item.name}:`, item.price);
    if (newPriceStr === null) return;
    const newPrice = parseInt(newPriceStr, 10);
    if (!isNaN(newPrice) && newPrice > 0) {
      item.price = newPrice;
      setStorage(STORAGE_KEYS.MENU, menuItems);
      renderAdminMenuManager();
      renderFullMenu();
      renderSignatureDishes();
      showToast(`Price updated for ${item.name} to LKR ${newPrice.toLocaleString()}`);
    }
  }

  function adminDeleteDish(itemId) {
    if (!confirm('Are you sure you want to remove this dish from the menu?')) return;
    menuItems = menuItems.filter(i => i.id !== itemId);
    setStorage(STORAGE_KEYS.MENU, menuItems);
    renderAdminMenuManager();
    renderFullMenu();
    renderSignatureDishes();
    showToast('Dish removed from menu');
  }

  function adminAddNewDish(e) {
    e.preventDefault();
    const name = document.getElementById('newDishName').value;
    const category = document.getElementById('newDishCategory').value;
    const price = parseInt(document.getElementById('newDishPrice').value, 10);
    const description = document.getElementById('newDishDesc').value;
    const img = document.getElementById('newDishImg').value || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';

    const newDish = {
      id: `ow-custom-${Date.now()}`,
      name: name,
      category: category,
      price: price,
      description: description,
      img: img,
      inStock: true,
      rating: 5.0,
      isSignature: false,
      isOffer: false
    };

    menuItems.push(newDish);
    setStorage(STORAGE_KEYS.MENU, menuItems);

    document.getElementById('adminNewDishModal').classList.add('hidden');
    document.getElementById('newDishForm').reset();

    renderAdminMenuManager();
    renderFullMenu();
    showToast(`Added ${name} to Owita Menu!`);
  }

  function updateAdminAnalytics() {
    const totalOrdersCount = orders.length;
    const totalRevenue = orders.filter(o => o.orderStatus !== 'Cancelled').reduce((s, o) => s + (o.total || 0), 0);
    const inKitchenCount = orders.filter(o => o.orderStatus === 'In Kitchen').length;

    const revEl = document.getElementById('adminStatRevenue');
    const ordEl = document.getElementById('adminStatOrders');
    const kitEl = document.getElementById('adminStatKitchen');

    if (revEl) revEl.textContent = `LKR ${totalRevenue.toLocaleString()}`;
    if (ordEl) ordEl.textContent = totalOrdersCount;
    if (kitEl) kitEl.textContent = inKitchenCount;
  }

  // --- LIVE TIMER LOOP ---
  function updateLiveTimers() {
    const now = Date.now();
    document.querySelectorAll('.live-timer-text').forEach(el => {
      const readyAt = parseInt(el.dataset.readyAt, 10);
      if (!readyAt) return;

      const diffMs = readyAt - now;
      if (diffMs <= 0) {
        el.textContent = 'READY FOR PICKUP';
        el.className = 'font-mono font-bold text-emerald-400';
      } else {
        const totalSecs = Math.floor(diffMs / 1000);
        const mins = Math.floor(totalSecs / 60);
        const secs = totalSecs % 60;
        el.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')} remaining`;
      }
    });

    document.querySelectorAll('.live-timer-bar').forEach(el => {
      const createdAt = parseInt(el.dataset.createdAt, 10);
      const readyAt = parseInt(el.dataset.readyAt, 10);
      if (!createdAt || !readyAt) return;

      const totalDuration = readyAt - createdAt;
      const elapsed = now - createdAt;
      const percent = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
      el.style.width = `${percent}%`;
    });
  }

  // Start ticker
  setInterval(updateLiveTimers, 1000);

  // --- AUTHENTICATION & SESSION MANAGEMENT ---
  function updateAuthUI() {
    const userBtnText = document.getElementById('userNavBtnText');
    const userNavSub = document.getElementById('userNavBtnSub');
    if (currentUser) {
      if (userBtnText) userBtnText.textContent = currentUser.name.split(' ')[0];
      if (userNavSub) userNavSub.textContent = currentUser.role === 'admin' ? 'Kitchen Admin' : 'Customer';
    } else {
      if (userBtnText) userBtnText.textContent = 'Sign In';
      if (userNavSub) userNavSub.textContent = 'Account';
    }
  }

  let authCallback = null;
  function openAuthModal(mode = 'signin', callback = null) {
    authCallback = callback;
    const modal = document.getElementById('owitaAuthModal');
    if (!modal) return;
    modal.classList.remove('hidden');
    switchAuthTab(mode);
  }

  function closeAuthModal() {
    const modal = document.getElementById('owitaAuthModal');
    if (modal) modal.classList.add('hidden');
  }

  function switchAuthTab(tab) {
    const signinForm = document.getElementById('authSignInForm');
    const registerForm = document.getElementById('authRegisterForm');
    const tabSignin = document.getElementById('authTabSignIn');
    const tabRegister = document.getElementById('authTabRegister');

    if (tab === 'signin') {
      signinForm.classList.remove('hidden');
      registerForm.classList.add('hidden');
      tabSignin.className = 'flex-1 py-2 font-bold text-xs uppercase tracking-wider border-b-2 border-amber-500 text-amber-400';
      tabRegister.className = 'flex-1 py-2 font-bold text-xs uppercase tracking-wider text-stone-400 hover:text-white';
    } else {
      signinForm.classList.add('hidden');
      registerForm.classList.remove('hidden');
      tabRegister.className = 'flex-1 py-2 font-bold text-xs uppercase tracking-wider border-b-2 border-amber-500 text-amber-400';
      tabSignin.className = 'flex-1 py-2 font-bold text-xs uppercase tracking-wider text-stone-400 hover:text-white';
    }
  }

  function handleSignIn(e) {
    e.preventDefault();
    const email = document.getElementById('authSignInEmail').value.trim();
    const password = document.getElementById('authSignInPassword').value;

    const matched = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (matched) {
      currentUser = matched;
      setStorage(STORAGE_KEYS.CURRENT_USER, currentUser);
      updateAuthUI();
      closeAuthModal();
      showToast(`Welcome back, ${currentUser.name}!`);
      renderCustomerOrders();
      if (authCallback) {
        authCallback();
        authCallback = null;
      }
    } else {
      showToast('Invalid credentials. (Hint: customer@owita.lk / password123)', 'alert');
    }
  }

  function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('authRegName').value.trim();
    const phone = document.getElementById('authRegPhone').value.trim();
    const email = document.getElementById('authRegEmail').value.trim();
    const password = document.getElementById('authRegPassword').value;

    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      showToast('Account with this email already exists', 'alert');
      return;
    }

    const newUser = {
      id: `usr-${Date.now()}`,
      name: name,
      phone: phone,
      email: email,
      password: password,
      role: 'customer',
      address: 'Nagoda, Kalutara'
    };

    users.push(newUser);
    setStorage(STORAGE_KEYS.USERS, users);

    currentUser = newUser;
    setStorage(STORAGE_KEYS.CURRENT_USER, currentUser);

    updateAuthUI();
    closeAuthModal();
    showToast(`Account created for ${newUser.name}!`);
    renderCustomerOrders();
    if (authCallback) {
      authCallback();
      authCallback = null;
    }
  }

  function toggleRoleSwitch() {
    // Quickly flip between customer view and admin portal
    if (activeView === 'customer') {
      activeView = 'admin';
    } else {
      activeView = 'customer';
    }
    setStorage(STORAGE_KEYS.ACTIVE_VIEW, activeView);
    applyActiveView();
  }

  function applyActiveView() {
    const customerView = document.getElementById('customerWebsiteContainer');
    const adminView = document.getElementById('adminPortalContainer');
    const toggleBtn = document.getElementById('viewModeToggleBtn');

    if (activeView === 'admin') {
      if (customerView) customerView.classList.add('hidden');
      if (adminView) adminView.classList.remove('hidden');
      if (toggleBtn) {
        toggleBtn.innerHTML = `
          <i data-lucide="utensils" class="w-3.5 h-3.5 text-amber-400"></i>
          <span>Switch to Customer Store</span>
        `;
      }
      renderAdminOrders();
      renderAdminMenuManager();
    } else {
      if (adminView) adminView.classList.add('hidden');
      if (customerView) customerView.classList.remove('hidden');
      if (toggleBtn) {
        toggleBtn.innerHTML = `
          <i data-lucide="shield-check" class="w-3.5 h-3.5 text-amber-400"></i>
          <span>Restaurant Admin Portal</span>
          <span id="adminPendingOrdersBadge" class="w-5 h-5 rounded-full bg-amber-500 text-black text-[10px] font-bold flex items-center justify-center hidden">0</span>
        `;
      }
      renderSignatureDishes();
      renderFullMenu();
      renderCustomerOrders();
    }

    if (window.lucide) lucide.createIcons();
  }

  // --- DRAWERS & MODALS HELPERS ---
  function openCartDrawer() {
    renderCartDrawer();
    document.getElementById('owitaCartDrawer').classList.remove('translate-x-full');
    document.getElementById('owitaCartDrawerBackdrop').classList.remove('hidden');
  }

  function closeCartDrawer() {
    document.getElementById('owitaCartDrawer').classList.add('translate-x-full');
    document.getElementById('owitaCartDrawerBackdrop').classList.add('hidden');
  }

  function setCategory(cat) {
    activeCategory = cat;
    document.querySelectorAll('.category-pill').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === cat);
    });
    renderFullMenu();
  }

  // --- INITIALIZE APP ---
  
  // --- LUXURY SCROLL REVEAL OBSERVER ---
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
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });
    }

    document.querySelectorAll('.reveal-init:not(.reveal-active)').forEach(el => {
      scrollObserver.observe(el);
    });
  }

  
  // --- VISUAL GALLERY ENGINE ---
  function renderGallery() {
    const container = document.getElementById('galleryGrid');
    if (!container) return;

    const filtered = activeGalleryCategory === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter(p => p.category === activeGalleryCategory);

    container.innerHTML = filtered.map((photo, idx) => `
      <div class="gallery-card group relative h-64 border border-white/10 reveal-init reveal-bottom stagger-${(idx % 4) + 1}" onclick="window.OwitaApp.openGalleryLightbox(${idx})">
        <img src="${photo.img}" alt="${photo.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
        
        <div class="absolute bottom-4 left-4 right-4 space-y-1">
          <div class="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
            <i data-lucide="camera" class="w-3 h-3"></i>
            <span>${photo.category.toUpperCase()}</span>
          </div>
          <h4 class="font-serif-luxury text-base font-bold text-white group-hover:text-amber-300 transition-colors">
            ${photo.title}
          </h4>
          <p class="text-[11px] text-stone-300 line-clamp-1 font-light">
            ${photo.caption}
          </p>
        </div>

        <div class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:text-amber-400 group-hover:scale-110 transition-all border border-white/10">
          <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
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

  function init() {
    renderSignatureDishes();
    renderFullMenu();
    updateCartBadges();
    updateAuthUI();
    applyActiveView();

    
    document.querySelectorAll('.gallery-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        setGalleryCategory(btn.dataset.galleryCategory);
      });
    });

    // Event Listeners for category pills
    document.querySelectorAll('.category-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        setCategory(btn.dataset.category);
      });
    });

    // Form submits
    document.getElementById('authSignInForm')?.addEventListener('submit', handleSignIn);
    document.getElementById('authRegisterForm')?.addEventListener('submit', handleRegister);
    document.getElementById('checkoutPaymentForm')?.addEventListener('submit', executePaymentAndPlaceOrder);
    document.getElementById('newDishForm')?.addEventListener('submit', adminAddNewDish);

    // Initial icon render
    if (window.lucide) lucide.createIcons();
    initScrollObserver();

    // Global ESC key to close receipt & modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeReceiptModal();
        closeAuthModal();
        closeCheckoutModal();
        closeCartDrawer();
      }
    });

    // Close modal on backdrop click
    ['digitalReceiptModal', 'checkoutPaymentModal', 'owitaAuthModal', 'adminNewDishModal', 'galleryLightboxModal'].forEach(id => {
      const m = document.getElementById(id);
      if (m) {
        m.addEventListener('click', (e) => {
          if (e.target === m) {
            if (id === 'digitalReceiptModal') closeReceiptModal();
            else if (id === 'checkoutPaymentModal') closeCheckoutModal();
            else if (id === 'owitaAuthModal') closeAuthModal();
            else if (id === 'galleryLightboxModal') closeGalleryLightbox();
            else m.classList.add('hidden');
          }
        });
      }
    });

  }

  // Expose public API to window for inline onclick handlers
  window.OwitaApp = {
    setGalleryCategory,
    openGalleryLightbox,
    closeGalleryLightbox,
    detectCustomerLocation,
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
    toggleRoleSwitch,
    setCategory,
    requestOrderChange,
    adminUpdateOrderStatus,
    adminHandleChangeRequest,
    adminAdjustOrderTime,
    adminToggleStock,
    adminEditPrice,
    adminDeleteDish
  };

  document.addEventListener('DOMContentLoaded', init);
})();
