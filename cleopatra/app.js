/**
 * Cleopatra Nightclub - Main Application Logic
 * Colombo, Sri Lanka
 */

// Application State
let currentGalleryCategory = 'All';
let currentEventCategory = 'All';
let currentSearchQuery = '';
let currentLightboxIndex = 0;
let countdownInterval = null;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  StorageManager.init();
  initLucide();
  initCountdown();
  renderFeaturedEvent();
  renderEvents();
  renderVenueZones();
  renderArtists();
  renderGallery();
  populateEventDropdown();
  setupEventListeners();
  checkHashRoute();
});

function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// -------------------------------------------------------------
// Countdown Timer for Featured Event
// -------------------------------------------------------------
function initCountdown() {
  const events = StorageManager.get('events', SEED_DATA.events);
  const featured = events.find(e => e.featured) || events[0];
  if (!featured) return;

  const targetDate = new Date(featured.date + 'T22:00:00');

  function update() {
    const now = new Date();
    const diff = targetDate - now;

    const daysEl = document.getElementById('countDays');
    const hoursEl = document.getElementById('countHours');
    const minsEl = document.getElementById('countMins');
    const secsEl = document.getElementById('countSecs');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    if (diff <= 0) {
      daysEl.innerText = '00';
      hoursEl.innerText = '00';
      minsEl.innerText = '00';
      secsEl.innerText = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    daysEl.innerText = String(days).padStart(2, '0');
    hoursEl.innerText = String(hours).padStart(2, '0');
    minsEl.innerText = String(mins).padStart(2, '0');
    secsEl.innerText = String(secs).padStart(2, '0');
  }

  update();
  if (countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(update, 1000);
}

// -------------------------------------------------------------
// Featured Event Section
// -------------------------------------------------------------
function renderFeaturedEvent() {
  const container = document.getElementById('featuredEventContainer');
  if (!container) return;

  const events = StorageManager.get('events', SEED_DATA.events);
  const event = events.find(e => e.featured) || events[0];
  if (!event) {
    container.innerHTML = '<div class="text-center py-8 text-stone-400">No featured event available.</div>';
    return;
  }

  container.innerHTML = `
    <div class="relative rounded-2xl overflow-hidden glass-panel border border-amber-500/30 p-6 md:p-8 hover:border-amber-500/60 transition-all duration-300">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- Event Poster -->
        <div class="lg:col-span-5 relative group overflow-hidden rounded-xl border border-amber-500/20">
          <img src="${event.image}" alt="${event.title}" class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          <div class="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-500/30 text-xs font-semibold text-amber-300 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            ${event.category}
          </div>
          <div class="absolute bottom-4 left-4 right-4">
            <div class="text-xs uppercase tracking-widest text-amber-400/90 font-semibold mb-1">Official Headliner</div>
            <div class="text-lg font-bold text-white flex items-center gap-2">
              <i data-lucide="disc" class="w-4 h-4 text-amber-400"></i>
              ${event.performer}
            </div>
          </div>
        </div>

        <!-- Event Details & RSVP -->
        <div class="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
              <i data-lucide="calendar" class="w-4 h-4"></i>
              ${event.displayDate} • ${event.time}
            </div>
            <h3 class="text-2xl md:text-3xl font-bold font-cinzel text-white mb-3">
              ${event.title}
            </h3>
            <p class="text-stone-300 text-sm md:text-base leading-relaxed mb-6">
              ${event.description}
            </p>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-black/40 border border-stone-800">
              <div>
                <span class="text-xs text-stone-400 block">General Entry</span>
                <span class="text-sm font-bold text-amber-300">LKR ${event.priceLKR}</span>
              </div>
              <div>
                <span class="text-xs text-stone-400 block">VIP Booth From</span>
                <span class="text-sm font-bold text-amber-300">LKR ${event.vipTableLKR}</span>
              </div>
              <div class="col-span-2 sm:col-span-1">
                <span class="text-xs text-stone-400 block">VIP Booths Left</span>
                <span class="text-sm font-bold text-emerald-400">${event.tableRemaining} Remaining</span>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <button onclick="openBookingModalForEvent('${event.title}')" class="btn-gold-shimmer px-6 py-3 rounded-xl flex items-center gap-2 font-bold text-sm tracking-wide">
              <i data-lucide="crown" class="w-4 h-4"></i>
              Reserve VIP Booth
            </button>
            <button onclick="openEventDetail('${event.id}')" class="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-stone-200 border border-stone-700 hover:border-amber-500/40 font-semibold text-sm transition-all flex items-center gap-2">
              <i data-lucide="info" class="w-4 h-4"></i>
              View Full Lineup & Rules
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  initLucide();
}

// -------------------------------------------------------------
// Events Directory
// -------------------------------------------------------------
function renderEvents(category = currentEventCategory, search = currentSearchQuery) {
  const container = document.getElementById('eventsGrid');
  if (!container) return;

  const events = StorageManager.get('events', SEED_DATA.events);
  let filtered = events;

  if (category && category !== 'All') {
    filtered = filtered.filter(e => e.category.toLowerCase().includes(category.toLowerCase()));
  }

  if (search && search.trim() !== '') {
    const q = search.toLowerCase().trim();
    filtered = filtered.filter(e => 
      e.title.toLowerCase().includes(q) || 
      e.performer.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center glass-panel rounded-2xl border border-stone-800">
        <i data-lucide="calendar-x" class="w-12 h-12 text-stone-600 mx-auto mb-3"></i>
        <h4 class="text-lg font-bold text-stone-300 mb-1">No matching events found</h4>
        <p class="text-sm text-stone-500 mb-4">Try clearing your search query or selecting a different genre.</p>
        <button onclick="resetEventFilters()" class="text-xs px-4 py-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 font-semibold">
          Reset Event Filters
        </button>
      </div>
    `;
    initLucide();
    return;
  }

  container.innerHTML = filtered.map(ev => `
    <div class="glass-panel rounded-2xl overflow-hidden border border-amber-500/15 hover:border-amber-500/50 transition-all duration-300 flex flex-col group">
      <!-- Artwork -->
      <div class="relative overflow-hidden h-52">
        <img src="${ev.image}" alt="${ev.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        <div class="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-amber-300 border border-amber-500/30">
          ${ev.category}
        </div>
        <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div class="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i>
            ${ev.displayDate.split(',')[1] || ev.displayDate}
          </div>
          <span class="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30 font-medium">
            ${ev.tableRemaining} tables left
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="text-xs text-stone-400 mb-1 font-medium flex items-center gap-1.5">
            <i data-lucide="disc" class="w-3.5 h-3.5 text-amber-400"></i>
            ${ev.performer}
          </div>
          <h4 class="text-lg font-bold font-cinzel text-white group-hover:text-amber-300 transition-colors mb-2 line-clamp-1">
            ${ev.title}
          </h4>
          <p class="text-xs text-stone-300 line-clamp-2 leading-relaxed mb-4">
            ${ev.description}
          </p>
        </div>

        <div>
          <div class="flex items-center justify-between text-xs py-2 border-t border-stone-800/80 mb-4">
            <span class="text-stone-400">Door Cover: <strong class="text-amber-300">LKR ${ev.priceLKR}</strong></span>
            <span class="text-stone-400">VIP: <strong class="text-amber-300">LKR ${ev.vipTableLKR}</strong></span>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <button onclick="openEventDetail('${ev.id}')" class="px-3 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-200 text-xs font-semibold border border-stone-700/80 hover:border-amber-500/30 transition-all flex items-center justify-center gap-1.5">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i>
              Details
            </button>
            <button onclick="openBookingModalForEvent('${ev.title}')" class="btn-gold-shimmer px-3 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5">
              <i data-lucide="crown" class="w-3.5 h-3.5"></i>
              Book VIP
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  initLucide();
}

function resetEventFilters() {
  currentEventCategory = 'All';
  currentSearchQuery = '';
  const searchInput = document.getElementById('eventSearchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.event-filter-btn').forEach(btn => {
    btn.classList.remove('bg-amber-500', 'text-black', 'border-amber-400');
    btn.classList.add('bg-white/5', 'text-stone-300', 'border-stone-800');
    if (btn.dataset.category === 'All') {
      btn.classList.add('bg-amber-500', 'text-black', 'border-amber-400');
      btn.classList.remove('bg-white/5', 'text-stone-300', 'border-stone-800');
    }
  });
  renderEvents();
}

// -------------------------------------------------------------
// The Venue Experience
// -------------------------------------------------------------
function renderVenueZones() {
  const container = document.getElementById('venueZonesGrid');
  if (!container) return;

  const features = SEED_DATA.venue.features;
  container.innerHTML = features.map(item => `
    <div class="glass-panel rounded-2xl overflow-hidden border border-amber-500/15 hover:border-amber-500/50 transition-all duration-300 group">
      <div class="relative h-48 overflow-hidden">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
        <div class="absolute bottom-3 left-4 flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
            <i data-lucide="${item.icon}" class="w-4 h-4"></i>
          </div>
          <h4 class="text-base font-bold font-cinzel text-white group-hover:text-amber-300 transition-colors">
            ${item.title}
          </h4>
        </div>
      </div>
      <div class="p-5">
        <p class="text-xs text-stone-300 leading-relaxed">
          ${item.desc}
        </p>
      </div>
    </div>
  `).join('');

  initLucide();
}

// -------------------------------------------------------------
// Artists & Residents
// -------------------------------------------------------------
function renderArtists() {
  const container = document.getElementById('artistsGrid');
  if (!container) return;

  const artists = StorageManager.get('artists', SEED_DATA.artists);
  container.innerHTML = artists.map(art => `
    <div class="glass-panel rounded-2xl overflow-hidden border border-amber-500/15 hover:border-amber-500/50 transition-all duration-300 group flex flex-col justify-between">
      <div>
        <div class="relative h-60 overflow-hidden">
          <img src="${art.image}" alt="${art.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div class="absolute bottom-3 left-3 right-3">
            <span class="text-xs text-amber-400 font-semibold block uppercase tracking-wider">${art.role}</span>
            <h4 class="text-lg font-bold font-cinzel text-white group-hover:text-amber-300 transition-colors">${art.name}</h4>
          </div>
        </div>
        <div class="p-5">
          <div class="flex items-center gap-1.5 text-xs text-stone-400 mb-2 font-medium">
            <i data-lucide="music" class="w-3.5 h-3.5 text-amber-400"></i>
            ${art.genre}
          </div>
          <p class="text-xs text-stone-300 leading-relaxed mb-4">
            ${art.bio}
          </p>
        </div>
      </div>
      <div class="p-5 pt-0">
        <div class="p-2.5 rounded-lg bg-black/40 border border-stone-800 flex items-center justify-between text-xs">
          <span class="text-stone-400">Schedule:</span>
          <span class="font-semibold text-amber-300">${art.appearances}</span>
        </div>
      </div>
    </div>
  `).join('');

  initLucide();
}

// -------------------------------------------------------------
// Visual Gallery & Lightbox
// -------------------------------------------------------------
function renderGallery(category = currentGalleryCategory) {
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  const gallery = StorageManager.get('gallery', SEED_DATA.gallery);
  let filtered = gallery;
  if (category && category !== 'All') {
    filtered = gallery.filter(g => g.category.toLowerCase() === category.toLowerCase());
  }

  container.innerHTML = filtered.map((item, idx) => `
    <div onclick="openLightbox(${idx}, '${category}')" class="relative group rounded-xl overflow-hidden cursor-pointer h-60 border border-stone-800 hover:border-amber-500/40 transition-all">
      <img src="${item.url}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
        <span class="text-xs text-amber-400 font-semibold uppercase tracking-wider">${item.category}</span>
        <h5 class="text-sm font-bold text-white">${item.title}</h5>
        <div class="mt-2 flex items-center gap-1 text-xs text-stone-300">
          <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
          Click to View
        </div>
      </div>
    </div>
  `).join('');

  initLucide();
}

let activeLightboxImages = [];

function openLightbox(index, category = 'All') {
  const gallery = StorageManager.get('gallery', SEED_DATA.gallery);
  activeLightboxImages = category === 'All' ? gallery : gallery.filter(g => g.category.toLowerCase() === category.toLowerCase());
  currentLightboxIndex = index;
  updateLightbox();

  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('hidden');
}

function updateLightbox() {
  const item = activeLightboxImages[currentLightboxIndex];
  if (!item) return;

  const img = document.getElementById('lightboxImg');
  const title = document.getElementById('lightboxTitle');
  const cat = document.getElementById('lightboxCategory');
  const counter = document.getElementById('lightboxCounter');

  if (img) img.src = item.url;
  if (title) title.innerText = item.title;
  if (cat) cat.innerText = item.category;
  if (counter) counter.innerText = `${currentLightboxIndex + 1} of ${activeLightboxImages.length}`;
}

function nextLightboxImage() {
  if (currentLightboxIndex < activeLightboxImages.length - 1) {
    currentLightboxIndex++;
  } else {
    currentLightboxIndex = 0;
  }
  updateLightbox();
}

function prevLightboxImage() {
  if (currentLightboxIndex > 0) {
    currentLightboxIndex--;
  } else {
    currentLightboxIndex = activeLightboxImages.length - 1;
  }
  updateLightbox();
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.add('hidden');
}

// -------------------------------------------------------------
// Event Detail Modal
// -------------------------------------------------------------
function openEventDetail(eventId) {
  const events = StorageManager.get('events', SEED_DATA.events);
  const ev = events.find(e => e.id === eventId);
  if (!ev) return;

  const modal = document.getElementById('eventDetailModal');
  const content = document.getElementById('eventDetailContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="relative h-64 sm:h-72 w-full overflow-hidden">
      <img src="${ev.image}" alt="${ev.title}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      <button onclick="closeEventDetail()" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
      <div class="absolute bottom-4 left-6 right-6">
        <span class="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase">${ev.category}</span>
        <h3 class="text-2xl sm:text-3xl font-bold font-cinzel text-white mt-2">${ev.title}</h3>
        <p class="text-xs sm:text-sm text-amber-300 font-semibold">${ev.displayDate} • ${ev.time}</p>
      </div>
    </div>

    <div class="p-6 sm:p-8 space-y-6">
      <div>
        <h4 class="text-sm font-bold uppercase tracking-wider text-amber-400 mb-2 font-cinzel">About the Night</h4>
        <p class="text-stone-300 text-sm leading-relaxed">${ev.description}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl bg-black/40 border border-stone-800 space-y-2">
          <span class="text-xs uppercase tracking-wider text-amber-400 font-semibold block">Entry & Admissions</span>
          <div class="flex justify-between text-xs text-stone-300">
            <span>General Door Cover:</span>
            <strong class="text-white">LKR ${ev.priceLKR}</strong>
          </div>
          <div class="flex justify-between text-xs text-stone-300">
            <span>VIP Table Packages:</span>
            <strong class="text-amber-300">From LKR ${ev.vipTableLKR}</strong>
          </div>
          <div class="flex justify-between text-xs text-stone-300">
            <span>Tables Remaining:</span>
            <strong class="text-emerald-400">${ev.tableRemaining} Booths</strong>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-black/40 border border-stone-800 space-y-2">
          <span class="text-xs uppercase tracking-wider text-amber-400 font-semibold block">Venue Policies</span>
          <div class="flex justify-between text-xs text-stone-300">
            <span>Dress Code:</span>
            <span class="text-stone-300 font-medium">${ev.dressCode}</span>
          </div>
          <div class="flex justify-between text-xs text-stone-300">
            <span>Age Requirement:</span>
            <span class="text-stone-300 font-medium">21+ Physical ID Req.</span>
          </div>
          <div class="flex justify-between text-xs text-stone-300">
            <span>Sound Protocol:</span>
            <span class="text-amber-300 font-medium">Void Acoustics 30kW</span>
          </div>
        </div>
      </div>

      <div>
        <h4 class="text-sm font-bold uppercase tracking-wider text-amber-400 mb-3 font-cinzel">Lineup Timetable</h4>
        <div class="space-y-2">
          ${ev.lineup ? ev.lineup.map(item => `
            <div class="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-stone-800 text-xs">
              <span class="font-bold text-amber-300 flex items-center gap-2">
                <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                ${item.time}
              </span>
              <span class="text-stone-200 font-medium">${item.artist}</span>
            </div>
          `).join('') : '<div class="text-xs text-stone-400">Full timetable announced at doors.</div>'}
        </div>
      </div>

      <div class="pt-4 border-t border-stone-800 flex flex-wrap gap-4 items-center justify-between">
        <button onclick="closeEventDetail(); openBookingModalForEvent('${ev.title}')" class="btn-gold-shimmer px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2">
          <i data-lucide="crown" class="w-4 h-4"></i>
          Book VIP Table For This Event
        </button>
        <button onclick="closeEventDetail()" class="px-5 py-3 rounded-xl bg-white/5 text-stone-300 hover:text-white text-xs font-semibold">
          Close
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  initLucide();
}

function closeEventDetail() {
  const modal = document.getElementById('eventDetailModal');
  if (modal) modal.classList.add('hidden');
}

// -------------------------------------------------------------
// VIP Table Booking / Reservation Form
// -------------------------------------------------------------
function populateEventDropdown() {
  const select = document.getElementById('resEvent');
  if (!select) return;

  const events = StorageManager.get('events', SEED_DATA.events);
  select.innerHTML = '<option value="">Select Event (Optional)</option>' + 
    events.map(e => `<option value="${e.title}">${e.title} (${e.date})</option>`).join('');
}

function openBookingModalForEvent(eventTitle) {
  const select = document.getElementById('resEvent');
  if (select) {
    select.value = eventTitle;
  }
  const contactSection = document.getElementById('contactSection');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    showToast('Event selected! Fill out your details below to reserve.', 'gold');
  }
}

function handleReservationSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('resName').value.trim();
  const phone = document.getElementById('resPhone').value.trim();
  const email = document.getElementById('resEmail').value.trim();
  const date = document.getElementById('resDate').value;
  const event = document.getElementById('resEvent').value || 'General VIP Entry';
  const guests = document.getElementById('resGuests').value;
  const type = document.getElementById('resType').value;
  const notes = document.getElementById('resNotes').value.trim();

  if (!name || !phone || !date) {
    showToast('Please provide your name, phone number, and reservation date.', 'error');
    return;
  }

  const refCode = 'CLEO-' + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const dateString = now.toISOString().split('T')[0] + ' ' + now.toTimeString().split(' ')[0].substring(0, 5);

  const newEnquiry = {
    id: refCode,
    name,
    phone,
    email: email || 'Not provided',
    date,
    event,
    type,
    guests: parseInt(guests) || 2,
    notes: notes || 'None',
    status: 'New',
    createdAt: dateString
  };

  const enquiries = StorageManager.get('enquiries', SEED_DATA.enquiries);
  enquiries.unshift(newEnquiry);
  StorageManager.set('enquiries', enquiries);

  // Show Confirmation Modal
  showBookingConfirmation(newEnquiry);

  // Reset Form
  document.getElementById('reservationForm').reset();
  showToast('Reservation request submitted successfully!', 'success');
}

function showBookingConfirmation(enquiry) {
  const modal = document.getElementById('confirmationModal');
  const detailsEl = document.getElementById('confirmDetails');
  const whatsappBtn = document.getElementById('confirmWhatsappBtn');
  if (!modal || !detailsEl) return;

  detailsEl.innerHTML = `
    <div class="space-y-3 text-left p-4 rounded-xl bg-black/50 border border-amber-500/20 text-xs">
      <div class="flex justify-between border-b border-stone-800 pb-2">
        <span class="text-stone-400">Reference:</span>
        <strong class="text-amber-400 font-mono text-sm">${enquiry.id}</strong>
      </div>
      <div class="flex justify-between">
        <span class="text-stone-400">Guest Name:</span>
        <strong class="text-white">${enquiry.name}</strong>
      </div>
      <div class="flex justify-between">
        <span class="text-stone-400">Date:</span>
        <strong class="text-white">${enquiry.date}</strong>
      </div>
      <div class="flex justify-between">
        <span class="text-stone-400">Seating Type:</span>
        <strong class="text-amber-300">${enquiry.type}</strong>
      </div>
      <div class="flex justify-between">
        <span class="text-stone-400">Party Size:</span>
        <strong class="text-white">${enquiry.guests} Guests</strong>
      </div>
    </div>
  `;

  const waText = encodeURIComponent(`Hello Cleopatra Concierge, I submitted VIP reservation request #${enquiry.id} for ${enquiry.guests} guests on ${enquiry.date} (${enquiry.type}). Name: ${enquiry.name}.`);
  if (whatsappBtn) {
    whatsappBtn.href = `https://wa.me/94771234567?text=${waText}`;
  }

  modal.classList.remove('hidden');
  initLucide();
}

function closeConfirmationModal() {
  const modal = document.getElementById('confirmationModal');
  if (modal) modal.classList.add('hidden');
}

// -------------------------------------------------------------
// Admin Dashboard System
// -------------------------------------------------------------
function openAdminDashboard() {
  const modal = document.getElementById('adminModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  switchAdminTab('overview');
  initLucide();
}

function closeAdminDashboard() {
  const modal = document.getElementById('adminModal');
  if (!modal) return;
  modal.classList.add('hidden');
}

function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.classList.remove('text-amber-400', 'border-amber-400', 'bg-white/5');
    btn.classList.add('text-stone-400', 'border-transparent');
    if (btn.dataset.tab === tabName) {
      btn.classList.add('text-amber-400', 'border-amber-400', 'bg-white/5');
      btn.classList.remove('text-stone-400', 'border-transparent');
    }
  });

  const content = document.getElementById('adminTabContent');
  if (!content) return;

  if (tabName === 'overview') {
    renderAdminOverview(content);
  } else if (tabName === 'events') {
    renderAdminEvents(content);
  } else if (tabName === 'enquiries') {
    renderAdminEnquiries(content);
  } else if (tabName === 'gallery') {
    renderAdminGallery(content);
  } else if (tabName === 'demo') {
    renderAdminDemo(content);
  }

  initLucide();
}

function renderAdminOverview(container) {
  const events = StorageManager.get('events', SEED_DATA.events);
  const enquiries = StorageManager.get('enquiries', SEED_DATA.enquiries);
  const gallery = StorageManager.get('gallery', SEED_DATA.gallery);

  const pending = enquiries.filter(e => e.status === 'New' || e.status === 'In Progress').length;
  const totalGuests = enquiries.reduce((sum, e) => sum + (e.guests || 0), 0);

  container.innerHTML = `
    <div class="space-y-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-4 rounded-xl bg-black/40 border border-stone-800">
          <span class="text-xs text-stone-400 block mb-1">Active Events</span>
          <span class="text-2xl font-bold font-cinzel text-amber-300">${events.length}</span>
        </div>
        <div class="p-4 rounded-xl bg-black/40 border border-stone-800">
          <span class="text-xs text-stone-400 block mb-1">Pending Enquiries</span>
          <span class="text-2xl font-bold font-cinzel text-amber-400">${pending}</span>
        </div>
        <div class="p-4 rounded-xl bg-black/40 border border-stone-800">
          <span class="text-xs text-stone-400 block mb-1">Total RSVP Guests</span>
          <span class="text-2xl font-bold font-cinzel text-emerald-400">${totalGuests}</span>
        </div>
        <div class="p-4 rounded-xl bg-black/40 border border-stone-800">
          <span class="text-xs text-stone-400 block mb-1">Gallery Media</span>
          <span class="text-2xl font-bold font-cinzel text-stone-300">${gallery.length}</span>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-sm font-bold font-cinzel text-amber-300 uppercase tracking-wider">Recent Enquiries</h4>
          <button onclick="switchAdminTab('enquiries')" class="text-xs text-stone-400 hover:text-white underline">View All Enquiries</button>
        </div>
        <div class="space-y-2">
          ${enquiries.slice(0, 4).map(e => `
            <div class="p-3 rounded-lg bg-black/40 border border-stone-800 flex items-center justify-between text-xs">
              <div>
                <span class="font-bold text-white">${e.name}</span>
                <span class="text-stone-400 ml-2">(${e.guests} guests • ${e.date})</span>
                <div class="text-[11px] text-stone-500 mt-0.5">${e.type} • ${e.phone}</div>
              </div>
              <span class="px-2 py-0.5 rounded text-[11px] font-semibold ${
                e.status === 'New' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                e.status === 'Confirmed' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                'bg-blue-500/20 text-blue-300 border border-blue-500/30'
              }">${e.status}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderAdminEvents(container) {
  const events = StorageManager.get('events', SEED_DATA.events);

  container.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <h4 class="text-sm font-bold font-cinzel text-amber-300 uppercase tracking-wider">Manage Events</h4>
        <button onclick="openNewEventModal()" class="btn-gold-shimmer px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5">
          <i data-lucide="plus" class="w-3.5 h-3.5"></i>
          Add New Event
        </button>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs text-stone-300">
          <thead class="bg-black/60 text-stone-400 uppercase border-b border-stone-800">
            <tr>
              <th class="p-3">Title</th>
              <th class="p-3">Date</th>
              <th class="p-3">Performer</th>
              <th class="p-3">Category</th>
              <th class="p-3">Featured</th>
              <th class="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-800/60">
            ${events.map(ev => `
              <tr class="hover:bg-white/5">
                <td class="p-3 font-semibold text-white">${ev.title}</td>
                <td class="p-3 text-stone-400">${ev.date}</td>
                <td class="p-3">${ev.performer}</td>
                <td class="p-3"><span class="px-2 py-0.5 rounded bg-white/5 border border-stone-700 text-[11px]">${ev.category}</span></td>
                <td class="p-3">
                  <button onclick="toggleEventFeatured('${ev.id}')" class="px-2 py-0.5 rounded text-[11px] font-semibold ${ev.featured ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-stone-500'}">
                    ${ev.featured ? '★ Featured' : '☆ Standard'}
                  </button>
                </td>
                <td class="p-3 text-right">
                  <button onclick="deleteEvent('${ev.id}')" class="text-rose-400 hover:text-rose-300 text-xs px-2 py-1 rounded bg-rose-500/10 hover:bg-rose-500/20">Delete</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openNewEventModal() {
  const title = prompt("Event Title (e.g. 'Golden Temple: Saturday Electro'):");
  if (!title) return;
  const performer = prompt("Headliner / Performer:", "DJ Mark Kross & Guests");
  const date = prompt("Date (YYYY-MM-DD):", "2026-11-14");
  const category = prompt("Category (House & Techno / Afro & Melodic / Hip-Hop & R&B / International Guests):", "House & Techno");
  const priceLKR = prompt("General Door Cover (LKR):", "4,000");

  const newEv = {
    id: 'event-' + Date.now(),
    title,
    subtitle: 'Special showcase at Cleopatra',
    date: date || '2026-11-14',
    displayDate: date || 'Saturday, Nov 14, 2026',
    time: '10:00 PM – 04:30 AM',
    category: category || 'House & Techno',
    performer: performer || 'Resident DJs',
    priceLKR: priceLKR || '4,000',
    vipTableLKR: '60,000',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    description: 'An electrifying night on the Pharaoh\'s Mainstage with state-of-the-art visuals and custom Void Acoustics sound.',
    dressCode: 'Smart Sophisticated',
    lineup: [
      { time: '10:00 PM', artist: 'Opening Set' },
      { time: '01:00 AM', artist: performer || 'Headliner' }
    ],
    tableRemaining: 4
  };

  const events = StorageManager.get('events', SEED_DATA.events);
  events.push(newEv);
  StorageManager.set('events', events);
  renderEvents();
  renderFeaturedEvent();
  populateEventDropdown();
  switchAdminTab('events');
  showToast('Event created successfully!', 'success');
}

function toggleEventFeatured(id) {
  const events = StorageManager.get('events', SEED_DATA.events);
  events.forEach(e => {
    if (e.id === id) {
      e.featured = !e.featured;
    } else {
      e.featured = false;
    }
  });
  StorageManager.set('events', events);
  renderFeaturedEvent();
  initCountdown();
  switchAdminTab('events');
  showToast('Featured event updated!', 'gold');
}

function deleteEvent(id) {
  if (!confirm("Are you sure you want to delete this event?")) return;
  let events = StorageManager.get('events', SEED_DATA.events);
  events = events.filter(e => e.id !== id);
  StorageManager.set('events', events);
  renderEvents();
  renderFeaturedEvent();
  populateEventDropdown();
  switchAdminTab('events');
  showToast('Event deleted', 'info');
}

function renderAdminEnquiries(container) {
  const enquiries = StorageManager.get('enquiries', SEED_DATA.enquiries);

  container.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <h4 class="text-sm font-bold font-cinzel text-amber-300 uppercase tracking-wider">Table Bookings & Enquiries CRM</h4>
        <span class="text-xs text-stone-400">${enquiries.length} Total Records</span>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs text-stone-300">
          <thead class="bg-black/60 text-stone-400 uppercase border-b border-stone-800">
            <tr>
              <th class="p-3">Ref</th>
              <th class="p-3">Guest</th>
              <th class="p-3">Contact</th>
              <th class="p-3">Date & Guests</th>
              <th class="p-3">Type</th>
              <th class="p-3">Status</th>
              <th class="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-800/60">
            ${enquiries.map(enq => `
              <tr class="hover:bg-white/5">
                <td class="p-3 font-mono text-amber-400 font-bold">${enq.id}</td>
                <td class="p-3">
                  <strong class="text-white block">${enq.name}</strong>
                  <span class="text-[11px] text-stone-400">${enq.event}</span>
                </td>
                <td class="p-3">
                  <div>${enq.phone}</div>
                  <div class="text-[11px] text-stone-400">${enq.email}</div>
                </td>
                <td class="p-3">
                  <div>${enq.date}</div>
                  <div class="text-[11px] text-stone-400">${enq.guests} Guests</div>
                </td>
                <td class="p-3"><span class="px-2 py-0.5 rounded bg-white/5 border border-stone-700 text-[11px]">${enq.type}</span></td>
                <td class="p-3">
                  <select onchange="updateEnquiryStatus('${enq.id}', this.value)" class="bg-black border border-stone-700 rounded px-2 py-1 text-xs text-stone-200">
                    <option value="New" ${enq.status === 'New' ? 'selected' : ''}>New</option>
                    <option value="In Progress" ${enq.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                    <option value="Confirmed" ${enq.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                    <option value="Archived" ${enq.status === 'Archived' ? 'selected' : ''}>Archived</option>
                  </select>
                </td>
                <td class="p-3 text-right space-x-1">
                  <a href="https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}" target="_blank" class="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] inline-flex items-center gap-1">
                    <i data-lucide="message-circle" class="w-3 h-3"></i> Chat
                  </a>
                  <button onclick="deleteEnquiry('${enq.id}')" class="px-2 py-1 rounded bg-rose-500/10 text-rose-400 text-[11px]">Delete</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function updateEnquiryStatus(id, newStatus) {
  const enquiries = StorageManager.get('enquiries', SEED_DATA.enquiries);
  const target = enquiries.find(e => e.id === id);
  if (target) {
    target.status = newStatus;
    StorageManager.set('enquiries', enquiries);
    showToast(`Enquiry #${id} status set to ${newStatus}`, 'info');
  }
}

function deleteEnquiry(id) {
  if (!confirm("Delete enquiry #" + id + "?")) return;
  let enquiries = StorageManager.get('enquiries', SEED_DATA.enquiries);
  enquiries = enquiries.filter(e => e.id !== id);
  StorageManager.set('enquiries', enquiries);
  switchAdminTab('enquiries');
  showToast('Enquiry removed', 'info');
}

function renderAdminGallery(container) {
  const gallery = StorageManager.get('gallery', SEED_DATA.gallery);

  container.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <h4 class="text-sm font-bold font-cinzel text-amber-300 uppercase tracking-wider">Gallery Media Manager</h4>
        <button onclick="openAddGalleryModal()" class="btn-gold-shimmer px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5">
          <i data-lucide="plus" class="w-3.5 h-3.5"></i>
          Add Photo
        </button>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        ${gallery.map(item => `
          <div class="relative group rounded-xl overflow-hidden border border-stone-800 bg-black/40">
            <img src="${item.url}" alt="${item.title}" class="w-full h-32 object-cover">
            <div class="p-2">
              <span class="text-[10px] text-amber-400 font-semibold uppercase block">${item.category}</span>
              <span class="text-xs font-bold text-white block truncate">${item.title}</span>
            </div>
            <button onclick="deleteGalleryItem(${item.id})" class="absolute top-2 right-2 p-1.5 rounded bg-black/80 text-rose-400 hover:text-white hover:bg-rose-600 transition-colors">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function openAddGalleryModal() {
  const title = prompt("Photo Title:");
  if (!title) return;
  const url = prompt("Photo URL (Unsplash or direct image):", "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80");
  const category = prompt("Category (Atmosphere / VIP Lounge / Mixology / Crowd / Performances):", "Atmosphere");

  const gallery = StorageManager.get('gallery', SEED_DATA.gallery);
  gallery.push({
    id: Date.now(),
    title,
    category: category || 'Atmosphere',
    url: url || 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80'
  });
  StorageManager.set('gallery', gallery);
  renderGallery();
  switchAdminTab('gallery');
  showToast('Photo added to gallery', 'success');
}

function deleteGalleryItem(id) {
  let gallery = StorageManager.get('gallery', SEED_DATA.gallery);
  gallery = gallery.filter(g => g.id !== id);
  StorageManager.set('gallery', gallery);
  renderGallery();
  switchAdminTab('gallery');
  showToast('Photo removed', 'info');
}

function renderAdminDemo(container) {
  container.innerHTML = `
    <div class="p-6 rounded-2xl bg-black/40 border border-stone-800 space-y-4 max-w-xl">
      <h4 class="text-base font-bold font-cinzel text-amber-300">Client Demo Controls</h4>
      <p class="text-xs text-stone-300 leading-relaxed">
        This demo uses local browser persistence (localStorage). You can test adding events, editing bookings, or resetting the dataset back to the pristine Colombo venue seed data anytime.
      </p>

      <div class="pt-4 border-t border-stone-800 flex items-center gap-3">
        <button onclick="resetDemoData()" class="px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 text-xs font-bold transition-all">
          Reset All Data to Default
        </button>
      </div>
    </div>
  `;
}

function resetDemoData() {
  if (!confirm("Reset all events, enquiries, and gallery back to pristine default state?")) return;
  StorageManager.resetAll();
  renderFeaturedEvent();
  renderEvents();
  renderArtists();
  renderGallery();
  populateEventDropdown();
  switchAdminTab('overview');
  showToast('Demo data restored to pristine state!', 'success');
}

// -------------------------------------------------------------
// Toast Notifications
// -------------------------------------------------------------
function showToast(message, type = 'gold') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `px-4 py-3 rounded-xl text-xs font-semibold shadow-2xl flex items-center gap-2 transform transition-all duration-300 translate-y-4 opacity-0 border ${
    type === 'success' ? 'bg-emerald-950/90 text-emerald-200 border-emerald-500/50' :
    type === 'error' ? 'bg-rose-950/90 text-rose-200 border-rose-500/50' :
    'bg-stone-900/95 text-amber-300 border-amber-500/40'
  }`;

  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : type === 'error' ? 'alert-triangle' : 'sparkles'}" class="w-4 h-4"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  initLucide();

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// -------------------------------------------------------------
// Event Listeners & Router
// -------------------------------------------------------------
function setupEventListeners() {
  // Event category filter tabs
  document.querySelectorAll('.event-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.event-filter-btn').forEach(b => {
        b.classList.remove('bg-amber-500', 'text-black', 'border-amber-400');
        b.classList.add('bg-white/5', 'text-stone-300', 'border-stone-800');
      });
      btn.classList.add('bg-amber-500', 'text-black', 'border-amber-400');
      btn.classList.remove('bg-white/5', 'text-stone-300', 'border-stone-800');
      currentEventCategory = btn.dataset.category;
      renderEvents(currentEventCategory, currentSearchQuery);
    });
  });

  // Event search input
  const searchInput = document.getElementById('eventSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderEvents(currentEventCategory, currentSearchQuery);
    });
  }

  // Gallery filter tabs
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.gallery-filter-btn').forEach(b => {
        b.classList.remove('bg-amber-500', 'text-black', 'border-amber-400');
        b.classList.add('bg-white/5', 'text-stone-300', 'border-stone-800');
      });
      btn.classList.add('bg-amber-500', 'text-black', 'border-amber-400');
      btn.classList.remove('bg-white/5', 'text-stone-300', 'border-stone-800');
      currentGalleryCategory = btn.dataset.category;
      renderGallery(currentGalleryCategory);
    });
  });

  // Reservation form
  const resForm = document.getElementById('reservationForm');
  if (resForm) {
    resForm.addEventListener('submit', handleReservationSubmit);
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeDrawer = document.getElementById('closeMobileDrawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }
  if (closeDrawer && mobileDrawer) {
    closeDrawer.addEventListener('click', () => {
      mobileDrawer.classList.add('hidden');
    });
  }

  // Keyboard navigation for Lightbox
  window.addEventListener('keydown', (e) => {
    const lbModal = document.getElementById('lightboxModal');
    if (lbModal && !lbModal.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    }
    const evModal = document.getElementById('eventDetailModal');
    if (evModal && !evModal.classList.contains('hidden')) {
      if (e.key === 'Escape') closeEventDetail();
    }
  });

  // Route hash listener
  window.addEventListener('hashchange', checkHashRoute);
}

function checkHashRoute() {
  const hash = window.location.hash;
  if (hash === '#/admin' || hash === '#admin') {
    openAdminDashboard();
  } else if (hash.startsWith('#/events/')) {
    const id = hash.replace('#/events/', '');
    openEventDetail(id);
  }
}
