// Vistas Rooftop Bar — Master Interactive Application
// Handles: Sky Explorer, Sunset Table Reservation Engine, Menu Ordering Tray, Admin Dashboard, Events & WhatsApp integrations

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const data = window.VISTAS_DATA;
  if (!data) {
    console.error('Vistas data not loaded');
    return;
  }

  // --- State Management ---
  const state = {
    skyMode: 'golden', // 'day' | 'golden' | 'night'
    menuFilter: 'all',
    menuSearch: '',
    orderTray: [], // array of { item, qty }
    reservations: JSON.parse(localStorage.getItem('vistas_reservations')) || data.initialReservations,
    selectedCategory: 'perimeter-sunset',
    activeBookingStep: 1,
    bookingForm: {
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
      time: '17:45',
      guests: 4,
      categoryId: 'perimeter-sunset',
      guestName: '',
      phone: '',
      email: '',
      occasion: 'Date Night / Sunset Drink',
      specialRequests: ''
    }
  };

  // Save reservations to localStorage
  function saveReservations() {
    localStorage.setItem('vistas_reservations', JSON.stringify(state.reservations));
  }

  // --- 1. Sky Explorer Component ---
  const skyLayers = document.querySelectorAll('.sky-layer');
  const skyButtons = document.querySelectorAll('.sky-btn');
  const skyTimeText = document.getElementById('sky-time');
  const skyVibeText = document.getElementById('sky-vibe');
  const skyTempText = document.getElementById('sky-temp');
  const skyBreezeText = document.getElementById('sky-breeze');
  const skyTitleText = document.getElementById('sky-title');
  const skyDescText = document.getElementById('sky-desc');

  function updateSkyExplorer(modeId) {
    state.skyMode = modeId;
    const modeConfig = data.skyExplorer.find(m => m.id === modeId) || data.skyExplorer[1];

    // Layers
    skyLayers.forEach(layer => {
      if (layer.dataset.mode === modeId) {
        layer.classList.add('active');
      } else {
        layer.classList.remove('active');
      }
    });

    // Buttons
    skyButtons.forEach(btn => {
      if (btn.dataset.mode === modeId) {
        btn.classList.add('bg-amber-500', 'text-stone-950', 'font-bold');
        btn.classList.remove('bg-stone-800/80', 'text-stone-300');
      } else {
        btn.classList.remove('bg-amber-500', 'text-stone-950', 'font-bold');
        btn.classList.add('bg-stone-800/80', 'text-stone-300');
      }
    });

    // Text content updates
    if (skyTimeText) skyTimeText.textContent = modeConfig.time;
    if (skyVibeText) skyVibeText.textContent = modeConfig.vibe;
    if (skyTempText) skyTempText.textContent = modeConfig.temp;
    if (skyBreezeText) skyBreezeText.textContent = modeConfig.breeze;
    if (skyTitleText) skyTitleText.textContent = modeConfig.title;
    if (skyDescText) skyDescText.textContent = modeConfig.description;
  }

  skyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      updateSkyExplorer(btn.dataset.mode);
    });
  });

  // Default sky explorer init
  updateSkyExplorer('golden');

  // --- 2. Render Seating Categories in Booking Section & Explorer ---
  const seatingGrid = document.getElementById('seating-cards-grid');
  const bookingCategorySelect = document.getElementById('booking-category');

  function renderSeatingCards() {
    if (!seatingGrid) return;
    seatingGrid.innerHTML = data.seatingCategories.map(cat => {
      const isSelected = cat.id === state.selectedCategory;
      return `
        <div class="vistas-card rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 ${isSelected ? 'seat-selected ring-2 ring-amber-400' : ''}" 
             data-category="${cat.id}">
          <div class="relative h-48 overflow-hidden">
            <img src="${cat.image}" alt="${cat.name}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
            <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-stone-950 backdrop-blur-md">
              ${cat.badge}
            </span>
            <span class="absolute bottom-3 left-3 text-xs text-amber-200/90 flex items-center gap-1.5 font-medium">
              <i data-lucide="users" class="w-3.5 h-3.5"></i> ${cat.capacity}
            </span>
          </div>

          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold font-serif-luxury text-white mb-2">${cat.name}</h3>
              <p class="text-xs text-stone-300/80 leading-relaxed mb-4">${cat.description}</p>
              
              <ul class="space-y-1.5 mb-5 text-xs text-stone-300">
                ${cat.features.map(f => `
                  <li class="flex items-center gap-2">
                    <i data-lucide="check" class="w-3.5 h-3.5 text-amber-400 shrink-0"></i>
                    <span>${f}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="pt-4 border-t border-amber-500/15 flex items-center justify-between">
              <div>
                <span class="text-[10px] uppercase tracking-wider text-stone-400 block">Min. Spend Policy</span>
                <span class="text-base font-bold text-amber-400 font-serif-luxury">${cat.minSpendFormatted}</span>
              </div>
              <button class="select-seat-btn px-4 py-2 rounded-xl text-xs font-semibold transition-all ${isSelected ? 'bg-amber-400 text-stone-950' : 'bg-stone-800 text-stone-200 hover:bg-amber-500/20 hover:text-amber-300 border border-amber-500/30'}"
                      data-category="${cat.id}">
                ${isSelected ? 'Selected' : 'Select Table'}
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach listeners
    seatingGrid.querySelectorAll('[data-category]').forEach(card => {
      card.addEventListener('click', (e) => {
        const catId = card.dataset.category;
        selectCategory(catId);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function selectCategory(catId) {
    state.selectedCategory = catId;
    state.bookingForm.categoryId = catId;
    renderSeatingCards();
    updateBookingSummary();
    if (bookingCategorySelect) {
      bookingCategorySelect.value = catId;
    }
  }

  renderSeatingCards();

  // Populate booking category dropdown
  if (bookingCategorySelect) {
    bookingCategorySelect.innerHTML = data.seatingCategories.map(cat => 
      `<option value="${cat.id}">${cat.name} — ${cat.minSpendFormatted}</option>`
    ).join('');
    bookingCategorySelect.addEventListener('change', (e) => {
      selectCategory(e.target.value);
    });
  }

  // --- 3. Booking Engine Flow ---
  const bookingDateInput = document.getElementById('booking-date');
  const bookingTimeSelect = document.getElementById('booking-time');
  const bookingGuestsSelect = document.getElementById('booking-guests');
  const bookingNameInput = document.getElementById('booking-name');
  const bookingPhoneInput = document.getElementById('booking-phone');
  const bookingEmailInput = document.getElementById('booking-email');
  const bookingOccasionSelect = document.getElementById('booking-occasion');
  const bookingRequestsInput = document.getElementById('booking-requests');
  const bookingSummaryBox = document.getElementById('booking-summary-box');
  const submitBookingBtn = document.getElementById('submit-booking-btn');
  const bookingSuccessModal = document.getElementById('booking-success-modal');

  // Set min date to today
  if (bookingDateInput) {
    bookingDateInput.min = new Date().toISOString().split('T')[0];
    bookingDateInput.value = state.bookingForm.date;
    bookingDateInput.addEventListener('change', (e) => {
      state.bookingForm.date = e.target.value;
      updateBookingSummary();
    });
  }

  if (bookingTimeSelect) {
    bookingTimeSelect.addEventListener('change', (e) => {
      state.bookingForm.time = e.target.value;
      updateBookingSummary();
    });
  }

  if (bookingGuestsSelect) {
    bookingGuestsSelect.addEventListener('change', (e) => {
      state.bookingForm.guests = parseInt(e.target.value, 10);
      updateBookingSummary();
    });
  }

  function updateBookingSummary() {
    if (!bookingSummaryBox) return;
    const cat = data.seatingCategories.find(c => c.id === state.selectedCategory) || data.seatingCategories[0];
    const isSunsetSlot = state.bookingForm.time >= '17:30' && state.bookingForm.time <= '18:45';
    
    bookingSummaryBox.innerHTML = `
      <div class="space-y-3 text-xs">
        <div class="flex items-center justify-between pb-2 border-b border-stone-800">
          <span class="text-stone-400">Date & Slot:</span>
          <span class="font-medium text-white flex items-center gap-1.5">
            ${state.bookingForm.date} @ ${state.bookingForm.time}
            ${isSunsetSlot ? '<span class="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] border border-amber-500/30">Sunset Prime</span>' : ''}
          </span>
        </div>
        <div class="flex items-center justify-between pb-2 border-b border-stone-800">
          <span class="text-stone-400">Guests:</span>
          <span class="font-medium text-white">${state.bookingForm.guests} Guests</span>
        </div>
        <div class="flex items-center justify-between pb-2 border-b border-stone-800">
          <span class="text-stone-400">Seating Area:</span>
          <span class="font-medium text-amber-300 text-right">${cat.name}</span>
        </div>
        <div class="flex items-center justify-between pb-2 border-b border-stone-800">
          <span class="text-stone-400">Min. Spend Requirement:</span>
          <span class="font-bold text-amber-400">${cat.minSpendFormatted}</span>
        </div>
        <div class="flex items-center justify-between pb-2 border-b border-stone-800">
          <span class="text-stone-400">Online Cover Deposit:</span>
          <span class="font-bold text-white">LKR ${cat.coverDeposit.toLocaleString()}</span>
        </div>
        <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200/90 leading-relaxed">
          <strong class="text-amber-300 block mb-1">Transparency Promise:</strong>
          Your deposit is 100% credited against your final food and beverage bill. 10% service charge and applicable government taxes apply on consumption. Free cancellation up to 4 hours prior.
        </div>
      </div>
    `;
  }

  updateBookingSummary();

  // Booking Form Submission
  const bookingFormEl = document.getElementById('reservation-form');
  if (bookingFormEl) {
    bookingFormEl.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const guestName = bookingNameInput?.value.trim() || 'Valued Guest';
      const phone = bookingPhoneInput?.value.trim() || '+94 77 000 0000';
      const email = bookingEmailInput?.value.trim() || 'guest@example.com';
      const occasion = bookingOccasionSelect?.value || 'Evening Out';
      const requests = bookingRequestsInput?.value.trim() || '';
      const cat = data.seatingCategories.find(c => c.id === state.selectedCategory) || data.seatingCategories[0];

      const refId = 'VST-' + Math.floor(1000 + Math.random() * 9000);

      const newBooking = {
        id: refId,
        guestName,
        phone,
        email,
        date: state.bookingForm.date,
        time: state.bookingForm.time,
        guests: state.bookingForm.guests,
        category: cat.id,
        categoryName: cat.name,
        minSpend: cat.minSpend,
        depositPaid: cat.coverDeposit,
        status: 'Confirmed',
        specialRequest: `Occasion: ${occasion}. ${requests}`.trim(),
        createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
      };

      // Push into state & persist
      state.reservations.unshift(newBooking);
      saveReservations();

      // Show Success Modal
      showBookingSuccess(newBooking);
      renderAdminBookings();
    });
  }

  function showBookingSuccess(booking) {
    if (!bookingSuccessModal) return;
    
    const detailsContainer = document.getElementById('success-booking-details');
    if (detailsContainer) {
      detailsContainer.innerHTML = `
        <div class="p-4 rounded-xl bg-stone-900/90 border border-amber-500/30 text-xs space-y-2 mb-4">
          <div class="flex justify-between text-stone-400">
            <span>Reference ID:</span>
            <span class="font-bold text-amber-400">${booking.id}</span>
          </div>
          <div class="flex justify-between text-stone-400">
            <span>Guest Name:</span>
            <span class="font-medium text-white">${booking.guestName}</span>
          </div>
          <div class="flex justify-between text-stone-400">
            <span>Date & Time:</span>
            <span class="font-medium text-white">${booking.date} @ ${booking.time}</span>
          </div>
          <div class="flex justify-between text-stone-400">
            <span>Seating:</span>
            <span class="font-medium text-amber-300">${booking.categoryName}</span>
          </div>
          <div class="flex justify-between text-stone-400">
            <span>Deposit Credited:</span>
            <span class="font-bold text-emerald-400">LKR ${booking.depositPaid.toLocaleString()}</span>
          </div>
        </div>
      `;
    }

    // Configure WhatsApp button
    const waBtn = document.getElementById('success-wa-btn');
    if (waBtn) {
      const msg = encodeURIComponent(
        `Hello Vistas Rooftop Bar, I have confirmed a reservation!

Reference: ${booking.id}
Name: ${booking.guestName}
Date: ${booking.date} at ${booking.time}
Party: ${booking.guests} Guests
Seating: ${booking.categoryName}

Please keep our table ready.`
      );
      waBtn.href = `https://wa.me/${data.venue.whatsapp}?text=${msg}`;
    }

    bookingSuccessModal.classList.remove('hidden');
    bookingSuccessModal.classList.add('flex');
    if (window.lucide) window.lucide.createIcons();
  }

  // Close Success Modal
  document.querySelectorAll('.close-success-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      bookingSuccessModal.classList.add('hidden');
      bookingSuccessModal.classList.remove('flex');
    });
  });

  // --- 4. Menu Filtering, Search & Order Tray ---
  const menuGrid = document.getElementById('menu-items-grid');
  const menuCategoryTabs = document.getElementById('menu-category-tabs');
  const menuSearchInput = document.getElementById('menu-search');
  const trayCountBadge = document.getElementById('tray-count-badge');
  const openTrayBtn = document.getElementById('open-tray-btn');
  const orderTrayModal = document.getElementById('order-tray-modal');
  const trayItemsContainer = document.getElementById('tray-items-container');
  const traySubtotalEl = document.getElementById('tray-subtotal');
  const trayServiceEl = document.getElementById('tray-service');
  const trayTotalEl = document.getElementById('tray-total');

  function renderMenu() {
    if (!menuGrid) return;
    
    let filtered = data.menu.items;

    if (state.menuFilter !== 'all') {
      filtered = filtered.filter(item => item.category === state.menuFilter);
    }

    if (state.menuSearch) {
      const q = state.menuSearch.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      menuGrid.innerHTML = `
        <div class="col-span-full py-16 text-center text-stone-400">
          <i data-lucide="wine" class="w-10 h-10 mx-auto mb-3 opacity-40"></i>
          <p class="text-base font-serif-luxury text-stone-300">No culinary items found matching "${state.menuSearch}"</p>
          <button id="reset-menu-filter" class="mt-3 px-4 py-1.5 rounded-lg text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30">
            View All Selections
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-menu-filter');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.menuFilter = 'all';
          state.menuSearch = '';
          if (menuSearchInput) menuSearchInput.value = '';
          renderCategoryTabs();
          renderMenu();
        });
      }
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    menuGrid.innerHTML = filtered.map(item => `
      <div class="vistas-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-amber-400/40">
        <div class="relative h-44 overflow-hidden">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent"></div>
          <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-stone-900/90 text-amber-300 border border-amber-500/30 backdrop-blur-sm">
            ${item.badge}
          </span>
          <div class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-stone-950/80 backdrop-blur-md text-xs font-bold text-amber-400 font-serif-luxury border border-amber-500/20">
            ${item.priceFormatted}
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-2 mb-1.5">
              <h4 class="font-bold font-serif-luxury text-base text-white group-hover:text-amber-200 transition-colors">
                ${item.name}
              </h4>
            </div>
            <p class="text-xs text-stone-300/80 leading-relaxed mb-3">
              ${item.description}
            </p>
            <div class="flex flex-wrap gap-1.5 mb-4">
              ${item.dietary.map(d => `
                <span class="text-[10px] px-2 py-0.5 rounded bg-stone-800 text-stone-400 border border-stone-700">
                  ${d}
                </span>
              `).join('')}
            </div>
          </div>

          <button class="add-to-tray-btn w-full py-2.5 rounded-xl text-xs font-semibold bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-200 border border-amber-500/30 transition-all flex items-center justify-center gap-2"
                  data-item-id="${item.id}">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i>
            <span>Add to Tasting Tray</span>
          </button>
        </div>
      </div>
    `).join('');

    // Attach listeners
    menuGrid.querySelectorAll('.add-to-tray-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        addToTray(btn.dataset.itemId);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function renderCategoryTabs() {
    if (!menuCategoryTabs) return;
    menuCategoryTabs.innerHTML = data.menu.categories.map(cat => {
      const isActive = cat.id === state.menuFilter;
      return `
        <button class="menu-tab-btn px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
          isActive 
            ? 'bg-amber-400 text-stone-950 shadow-md font-bold' 
            : 'bg-stone-900/80 text-stone-300 hover:bg-stone-800 hover:text-amber-300 border border-stone-800'
        }" data-cat-id="${cat.id}">
          ${cat.name}
        </button>
      `;
    }).join('');

    menuCategoryTabs.querySelectorAll('.menu-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.menuFilter = btn.dataset.catId;
        renderCategoryTabs();
        renderMenu();
      });
    });
  }

  renderCategoryTabs();
  renderMenu();

  if (menuSearchInput) {
    menuSearchInput.addEventListener('input', (e) => {
      state.menuSearch = e.target.value.trim();
      renderMenu();
    });
  }

  // --- Tasting Tray / Bill Estimator Logic ---
  function addToTray(itemId) {
    const item = data.menu.items.find(i => i.id === itemId);
    if (!item) return;

    const existing = state.orderTray.find(t => t.item.id === itemId);
    if (existing) {
      existing.qty += 1;
    } else {
      state.orderTray.push({ item, qty: 1 });
    }

    updateTrayUI();
    showToast(`Added "${item.name}" to Tasting Tray`);
  }

  function updateTrayUI() {
    const totalQty = state.orderTray.reduce((acc, curr) => acc + curr.qty, 0);
    if (trayCountBadge) {
      trayCountBadge.textContent = totalQty;
      trayCountBadge.classList.toggle('hidden', totalQty === 0);
    }

    if (!trayItemsContainer) return;

    if (state.orderTray.length === 0) {
      trayItemsContainer.innerHTML = `
        <div class="py-12 text-center text-stone-400">
          <i data-lucide="wine" class="w-8 h-8 mx-auto mb-2 opacity-30"></i>
          <p class="text-xs">Your tasting tray is currently empty.</p>
          <p class="text-[11px] text-stone-500 mt-1">Browse cocktails & tapas to estimate your spend.</p>
        </div>
      `;
      if (traySubtotalEl) traySubtotalEl.textContent = 'LKR 0';
      if (trayServiceEl) trayServiceEl.textContent = 'LKR 0';
      if (trayTotalEl) trayTotalEl.textContent = 'LKR 0';
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    let subtotal = 0;
    trayItemsContainer.innerHTML = state.orderTray.map((t, idx) => {
      const lineTotal = t.item.price * t.qty;
      subtotal += lineTotal;
      return `
        <div class="flex items-center justify-between p-3 rounded-xl bg-stone-900 border border-stone-800 text-xs">
          <div class="flex-1 pr-3">
            <h5 class="font-bold text-white mb-0.5">${t.item.name}</h5>
            <span class="text-stone-400 text-[11px]">${t.item.priceFormatted} each</span>
          </div>
          <div class="flex items-center gap-2">
            <button class="tray-qty-btn p-1 rounded bg-stone-800 text-stone-300 hover:bg-stone-700" data-idx="${idx}" data-delta="-1">
              <i data-lucide="minus" class="w-3 h-3"></i>
            </button>
            <span class="w-5 text-center font-bold text-amber-300">${t.qty}</span>
            <button class="tray-qty-btn p-1 rounded bg-stone-800 text-stone-300 hover:bg-stone-700" data-idx="${idx}" data-delta="1">
              <i data-lucide="plus" class="w-3 h-3"></i>
            </button>
            <span class="w-16 text-right font-medium text-white">LKR ${lineTotal.toLocaleString()}</span>
          </div>
        </div>
      `;
    }).join('');

    const serviceCharge = Math.round(subtotal * 0.10);
    const grandTotal = subtotal + serviceCharge;

    if (traySubtotalEl) traySubtotalEl.textContent = `LKR ${subtotal.toLocaleString()}`;
    if (trayServiceEl) trayServiceEl.textContent = `LKR ${serviceCharge.toLocaleString()}`;
    if (trayTotalEl) trayTotalEl.textContent = `LKR ${grandTotal.toLocaleString()}`;

    // Listeners for quantity adjust
    trayItemsContainer.querySelectorAll('.tray-qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx, 10);
        const delta = parseInt(btn.dataset.delta, 10);
        state.orderTray[idx].qty += delta;
        if (state.orderTray[idx].qty <= 0) {
          state.orderTray.splice(idx, 1);
        }
        updateTrayUI();
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  if (openTrayBtn && orderTrayModal) {
    openTrayBtn.addEventListener('click', () => {
      orderTrayModal.classList.remove('hidden');
      orderTrayModal.classList.add('flex');
      updateTrayUI();
    });
  }

  document.querySelectorAll('.close-tray-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      if (orderTrayModal) {
        orderTrayModal.classList.add('hidden');
        orderTrayModal.classList.remove('flex');
      }
    });
  });

  // --- 5. Render Events Hub ---
  const eventsGrid = document.getElementById('events-grid');
  function renderEvents() {
    if (!eventsGrid) return;
    eventsGrid.innerHTML = data.events.map(ev => `
      <div class="vistas-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-amber-400/40">
        <div class="relative h-52 overflow-hidden">
          <img src="${ev.image}" alt="${ev.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
          <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500 text-stone-950">
            ${ev.dateBadge}
          </span>
          <span class="absolute bottom-3 left-3 text-xs text-amber-200/90 font-medium">
            ${ev.schedule}
          </span>
        </div>

        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <span class="text-[10px] uppercase font-bold tracking-widest text-amber-400 block mb-1">${ev.tag}</span>
            <h3 class="text-xl font-bold font-serif-luxury text-white mb-2 leading-snug group-hover:text-amber-200 transition-colors">
              ${ev.title}
            </h3>
            <p class="text-xs text-stone-300/80 leading-relaxed mb-4">
              ${ev.description}
            </p>
            <ul class="space-y-1.5 mb-5 text-xs text-stone-300">
              ${ev.perks.map(p => `
                <li class="flex items-center gap-2">
                  <i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-400 shrink-0"></i>
                  <span>${p}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="pt-4 border-t border-stone-800 flex items-center gap-3">
            <a href="https://wa.me/${data.venue.whatsapp}?text=${encodeURIComponent('Hi Vistas Rooftop, I want to RSVP / reserve a table for: ' + ev.title)}"
               target="_blank"
               class="flex-1 py-2.5 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-stone-950 transition-all flex items-center justify-center gap-2">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
              <span>RSVP via WhatsApp</span>
            </a>
            <button class="share-event-btn p-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition-all"
                    data-title="${ev.title}">
              <i data-lucide="share-2" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    eventsGrid.querySelectorAll('.share-event-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.dataset.title;
        if (navigator.share) {
          navigator.share({
            title: `${title} at Vistas Rooftop Bar`,
            text: `Join me at Vistas Rooftop Bar, 24th Floor NH Collection Colombo for ${title}!`,
            url: window.location.href
          }).catch(() => {});
        } else {
          navigator.clipboard.writeText(window.location.href);
          showToast('Event link copied to clipboard!');
        }
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }
  renderEvents();

  // --- 6. Render Private Functions & Corporate Packages ---
  const privateEventsGrid = document.getElementById('private-events-grid');
  function renderPrivatePackages() {
    if (!privateEventsGrid) return;
    privateEventsGrid.innerHTML = data.privateEvents.map(pkg => `
      <div class="vistas-card p-6 rounded-2xl flex flex-col justify-between border-amber-500/20">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
              ${pkg.capacity}
            </span>
            <span class="text-xs text-stone-400 font-medium">${pkg.priceGuide}</span>
          </div>

          <h3 class="text-xl font-bold font-serif-luxury text-white mb-2">${pkg.title}</h3>
          <p class="text-xs text-amber-200/80 italic mb-3">${pkg.idealFor}</p>
          <p class="text-xs text-stone-300/80 leading-relaxed mb-4">${pkg.description}</p>

          <ul class="space-y-2 mb-6 text-xs text-stone-300">
            ${pkg.features.map(f => `
              <li class="flex items-start gap-2">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <a href="https://wa.me/${data.venue.whatsapp}?text=${encodeURIComponent('Hi Vistas Management, I would like to enquire about: ' + pkg.title)}"
           target="_blank"
           class="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-stone-800 hover:bg-amber-400 hover:text-stone-950 text-stone-200 border border-amber-500/30 transition-all text-center flex items-center justify-center gap-2">
          <i data-lucide="send" class="w-3.5 h-3.5"></i>
          <span>Enquire for Event</span>
        </a>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }
  renderPrivatePackages();

  // Corporate Inquiry Form
  const corporateForm = document.getElementById('corporate-inquiry-form');
  if (corporateForm) {
    corporateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('corp-name')?.value.trim();
      const org = document.getElementById('corp-org')?.value.trim() || 'Independent';
      const phone = document.getElementById('corp-phone')?.value.trim();
      const guests = document.getElementById('corp-guests')?.value;
      const type = document.getElementById('corp-type')?.value;
      const date = document.getElementById('corp-date')?.value;
      const notes = document.getElementById('corp-notes')?.value.trim();

      const waMsg = encodeURIComponent(
        `Hello Vistas Rooftop Events Team,

Private Event Inquiry:
Organizer: ${name} (${org})
Phone: ${phone}
Event Type: ${type}
Estimated Guests: ${guests}
Target Date: ${date}
Notes: ${notes}

Please share availability and corporate banquet pricing.`
      );

      window.open(`https://wa.me/${data.venue.whatsapp}?text=${waMsg}`, '_blank');
      showToast('Inquiry sent via WhatsApp! Our events manager will respond shortly.');
      corporateForm.reset();
    });
  }

  // --- 7. Admin / Staff Management Portal Modal ---
  const adminModal = document.getElementById('admin-modal');
  const openAdminBtn = document.getElementById('open-admin-btn');
  const openAdminFooterBtn = document.getElementById('open-admin-footer-btn');
  const adminBookingsTbody = document.getElementById('admin-bookings-tbody');
  const adminFilterStatus = document.getElementById('admin-filter-status');
  const adminTotalCount = document.getElementById('admin-total-count');
  const adminTodayCount = document.getElementById('admin-today-count');
  const adminRevenueEst = document.getElementById('admin-revenue-est');
  const exportCsvBtn = document.getElementById('export-csv-btn');

  function openAdmin() {
    if (!adminModal) return;
    adminModal.classList.remove('hidden');
    adminModal.classList.add('flex');
    renderAdminBookings();
  }

  if (openAdminBtn) openAdminBtn.addEventListener('click', openAdmin);
  if (openAdminFooterBtn) openAdminFooterBtn.addEventListener('click', openAdmin);

  document.querySelectorAll('.close-admin-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      if (adminModal) {
        adminModal.classList.add('hidden');
        adminModal.classList.remove('flex');
      }
    });
  });

  function renderAdminBookings() {
    if (!adminBookingsTbody) return;

    let list = state.reservations;
    const filter = adminFilterStatus ? adminFilterStatus.value : 'all';

    if (filter !== 'all') {
      list = list.filter(b => b.status === filter);
    }

    // Update KPI stats
    if (adminTotalCount) adminTotalCount.textContent = state.reservations.length;
    if (adminTodayCount) {
      const todayStr = new Date().toISOString().split('T')[0];
      const todayGuests = state.reservations
        .filter(r => r.date === todayStr)
        .reduce((sum, r) => sum + r.guests, 0);
      adminTodayCount.textContent = todayGuests || '18';
    }
    if (adminRevenueEst) {
      const totalRev = state.reservations.reduce((sum, r) => sum + (r.depositPaid || 0), 0);
      adminRevenueEst.textContent = `LKR ${totalRev.toLocaleString()}`;
    }

    if (list.length === 0) {
      adminBookingsTbody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center py-8 text-stone-500 text-xs">
            No bookings found for the selected filter.
          </td>
        </tr>
      `;
      return;
    }

    adminBookingsTbody.innerHTML = list.map((b, idx) => {
      const statusColor = b.status === 'Confirmed' 
        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
        : b.status === 'Pending Review'
        ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
        : 'bg-rose-500/20 text-rose-400 border-rose-500/30';

      return `
        <tr class="border-b border-stone-800/80 hover:bg-stone-900/50 transition-colors text-xs">
          <td class="py-3 px-3 font-mono font-bold text-amber-400">${b.id}</td>
          <td class="py-3 px-3">
            <div class="font-bold text-white">${b.guestName}</div>
            <div class="text-[11px] text-stone-400">${b.phone}</div>
          </td>
          <td class="py-3 px-3">
            <div class="text-white font-medium">${b.date}</div>
            <div class="text-[11px] text-stone-400">${b.time} (${b.guests}pax)</div>
          </td>
          <td class="py-3 px-3">
            <div class="text-amber-300 font-medium">${b.categoryName}</div>
            <div class="text-[11px] text-stone-400">Min: LKR ${(b.minSpend || 0).toLocaleString()}</div>
          </td>
          <td class="py-3 px-3 font-bold text-emerald-400">
            LKR ${(b.depositPaid || 0).toLocaleString()}
          </td>
          <td class="py-3 px-3">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border ${statusColor}">
              ${b.status}
            </span>
          </td>
          <td class="py-3 px-3">
            <div class="flex items-center gap-1.5">
              <button class="toggle-status-btn px-2 py-1 rounded bg-stone-800 text-[10px] text-stone-300 hover:bg-stone-700"
                      data-id="${b.id}">
                ${b.status === 'Confirmed' ? 'Hold' : 'Confirm'}
              </button>
              <a href="https://wa.me/${b.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello ' + b.guestName + ', this is Vistas Rooftop Bar confirming your table (' + b.id + ').')}"
                 target="_blank"
                 class="p-1 rounded bg-emerald-600/30 text-emerald-400 hover:bg-emerald-600/50">
                <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
              </a>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Attach toggle status listeners
    adminBookingsTbody.querySelectorAll('.toggle-status-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const target = state.reservations.find(r => r.id === id);
        if (target) {
          target.status = target.status === 'Confirmed' ? 'Pending Review' : 'Confirmed';
          saveReservations();
          renderAdminBookings();
        }
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  if (adminFilterStatus) {
    adminFilterStatus.addEventListener('change', renderAdminBookings);
  }

  if (exportCsvBtn) {
    exportCsvBtn.addEventListener('click', () => {
      const headers = ['Booking ID,Guest Name,Phone,Email,Date,Time,Guests,Category,Min Spend,Deposit,Status'];
      const rows = state.reservations.map(r => 
        `"${r.id}","${r.guestName}","${r.phone}","${r.email}","${r.date}","${r.time}","${r.guests}","${r.categoryName}","${r.minSpend}","${r.depositPaid}","${r.status}"`
      );
      const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', `vistas_reservations_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Daily reservation log exported to CSV');
    });
  }

  // --- 8. Mobile Navigation Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // --- 9. Simple Toast Notification ---
  function showToast(message) {
    let toast = document.getElementById('vistas-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'vistas-toast';
      toast.className = 'fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl bg-stone-900/95 text-white text-xs border border-amber-500/40 shadow-2xl backdrop-blur-md transition-all duration-300 transform translate-y-12 opacity-0 flex items-center gap-2.5';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-amber-400"></i> <span>${message}</span>`;
    if (window.lucide) window.lucide.createIcons();

    toast.classList.remove('translate-y-12', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-12', 'opacity-0');
    }, 3200);
  }
});
