/**
 * Cleopatra Nightclub - Seed Data & State Management
 * Colombo, Sri Lanka (Liberty Plaza)
 */

const SEED_DATA = {
  venue: {
    name: "Cleopatra Nightclub",
    tagline: "An Experience Beyond the Ordinary",
    location: "Liberty Plaza, R. A. De Mel Mawatha, Colombo 03, Sri Lanka",
    phone: "+94 11 257 4899",
    whatsapp: "+94 77 123 4567",
    email: "vip@cleopatracolombo.lk",
    hours: "Wednesday – Sunday | 10:00 PM – 4:30 AM",
    dressCode: "Smart Sophisticated & Glamorous (Strict door discretion)",
    ageLimit: "21+ Physical Government ID Required",
    capacity: "650 guests across 3 curated zones",
    soundSystem: "Custom Void Acoustics Rig (30kW Precision Audio)",
    features: [
      { id: "mainstage", title: "The Pharaoh's Mainstage", icon: "music", desc: "Custom Void Acoustics sound system, 360° laser array, and kinetic golden chandelier.", image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=1200&q=80" },
      { id: "vip", title: "Anubis VIP Mezzanine", icon: "crown", desc: "Elevated private booths with dedicated bottle concierge and private security escort.", image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80" },
      { id: "mixology", title: "Giza Mixology Sanctuary", icon: "wine", desc: "Curated gold-leaf cocktails, rare single malts, and vintage champagne towers.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80" },
      { id: "terrace", title: "Nile Shisha & Open Terrace", icon: "flame", desc: "Intimate alfresco lounge featuring premium organic shisha and ambient chillout rhythms.", image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80" }
    ]
  },
  events: [
    {
      id: "anubis-rising",
      title: "Anubis Rising: International Techno Night",
      subtitle: "Peak-time electronic journey featuring Berlin & Colombo sounds",
      date: "2026-10-17",
      displayDate: "Saturday, Oct 17, 2026",
      time: "10:00 PM – 04:30 AM",
      category: "International Guests",
      performer: "DJ Mark Kross (Berlin) + Local Support",
      priceLKR: "4,000",
      vipTableLKR: "65,000",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
      featured: true,
      description: "Colombo's premier electronic experience returns to the Pharaoh's Mainstage. Headlined by renowned electronic producer DJ Mark Kross, expect hypnotic synth progressions, driving basslines, and synchronized lasers under the golden pyramid.",
      dressCode: "Smart Sophisticated / All Black Preferred",
      lineup: [
        { time: "10:00 PM", artist: "DJ Kiara Silva (Warm-up Groove)" },
        { time: "12:00 AM", artist: "DJ Dimitri Vance (Progressive Set)" },
        { time: "01:30 AM", artist: "DJ Mark Kross (Main Showcase)" },
        { time: "03:30 AM", artist: "Cleopatra Resident Back-to-Back" }
      ],
      tableRemaining: 3
    },
    {
      id: "golden-pyramid",
      title: "The Golden Pyramid: Friday Ritual",
      subtitle: "Afro-House rhythms and tribal hypnotic melodies",
      date: "2026-10-23",
      displayDate: "Friday, Oct 23, 2026",
      time: "10:00 PM – 04:00 AM",
      category: "Afro & Melodic",
      performer: "DJ Tara Vance & Master Percussionists",
      priceLKR: "3,500",
      vipTableLKR: "50,000",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      description: "Immerse yourself in deep Afro-House, organic percussion, and warm tribal grooves. Accompanied by live djembe and saxophone performances amidst ancient Egyptian ambient visuals.",
      dressCode: "Glamorous / Gold Accents Encouraged",
      lineup: [
        { time: "10:00 PM", artist: "Resident Warm-up" },
        { time: "11:30 PM", artist: "Live Percussion Ensemble" },
        { time: "01:00 AM", artist: "DJ Tara Vance (Afro-House Extended)" }
      ],
      tableRemaining: 5
    },
    {
      id: "pharaohs-domain",
      title: "Pharaoh's Domain: Saturday Showcase",
      subtitle: "The ultimate weekend celebration in Colombo",
      date: "2026-10-24",
      displayDate: "Saturday, Oct 24, 2026",
      time: "10:00 PM – 04:30 AM",
      category: "House & Techno",
      performer: "DJ Dimitri Vance & Guest Vocalists",
      priceLKR: "4,000",
      vipTableLKR: "60,000",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      description: "Our signature Saturday night experience. From vocal house anthems to high-energy peak-hour drops, Cleopatra transforms into Colombo's most vibrant celebration with full CO2 and pyro effects.",
      dressCode: "Club Chic / Strictly Elegant",
      lineup: [
        { time: "10:00 PM", artist: "DJ Kiara Silva" },
        { time: "12:30 AM", artist: "DJ Dimitri Vance" },
        { time: "02:45 AM", artist: "Special Guest Vocal Showcase" }
      ],
      tableRemaining: 2
    },
    {
      id: "nefertiti-rnb",
      title: "Nefertiti's Secret: Urban & R&B Nights",
      subtitle: "Old-school classics meets modern melodic urban beats",
      date: "2026-10-30",
      displayDate: "Friday, Oct 30, 2026",
      time: "10:00 PM – 04:00 AM",
      category: "Hip-Hop & R&B",
      performer: "DJ Kiara Silva & The Colombo Collective",
      priceLKR: "3,000",
      vipTableLKR: "45,000",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      description: "A smooth, energetic journey through iconic 2000s R&B, contemporary hip-hop, and UK garage grooves. Enjoy our signature champagne cocktails and VIP bottle packages.",
      dressCode: "Smart Casual / Elevated Streetwear",
      lineup: [
        { time: "10:00 PM", artist: "Throwback Warm-up" },
        { time: "12:00 AM", artist: "DJ Kiara Silva" },
        { time: "02:00 AM", artist: "The Colombo Collective" }
      ],
      tableRemaining: 6
    },
    {
      id: "midnight-oasis-halloween",
      title: "Midnight Oasis: Halloween Masquerade",
      subtitle: "The Dark Egyptian Pharaonic Gala",
      date: "2026-10-31",
      displayDate: "Saturday, Oct 31, 2026",
      time: "09:30 PM – 05:00 AM",
      category: "VIP Special Events",
      performer: "Special International B2B Showcase",
      priceLKR: "5,000",
      vipTableLKR: "80,000",
      image: "https://images.unsplash.com/photo-1520523839898-5071282543e2?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      description: "Colombo's most lavish Halloween costume masquerade. Gold masks, thematic immersive installations, fire performers, and an electrifying multi-genre musical lineup spanning until sunrise.",
      dressCode: "Gala Masquerade or Glamorous Dark / Gold",
      lineup: [
        { time: "09:30 PM", artist: "Doors Open & Welcome Elixirs" },
        { time: "11:00 PM", artist: "DJ Tara Vance" },
        { time: "01:00 AM", artist: "International B2B Surprise Guest" },
        { time: "03:30 AM", artist: "Late Night Sanctuary" }
      ],
      tableRemaining: 1
    }
  ],
  artists: [
    {
      id: "mark-kross",
      name: "DJ Mark Kross",
      role: "Resident Headliner",
      genre: "Melodic Techno / Progressive",
      bio: "With appearances at major European festivals and regional venues, Mark brings an uncompromising precision to the Cleopatra decks.",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      appearances: "Bi-weekly Saturdays"
    },
    {
      id: "tara-vance",
      name: "DJ Tara Vance",
      role: "Resident Curator",
      genre: "Afro-House / Organic Grooves",
      bio: "Pioneering the Afro-House movement in Sri Lanka, Tara weaves organic live percussion with deep, driving melodic baselines.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      appearances: "Every Friday"
    },
    {
      id: "dimitri-vance",
      name: "DJ Dimitri Vance",
      role: "Peak-Time Resident",
      genre: "Progressive House / High Energy",
      bio: "Known for explosive sets and master crowd command, Dimitri powers the midnight peak hours on the Pharaoh's Mainstage.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      appearances: "Every Saturday"
    },
    {
      id: "kiara-silva",
      name: "DJ Kiara Silva",
      role: "Vibe Selector",
      genre: "Urban R&B / Deep Grooves",
      bio: "Colombo native crafting seamless transitions between timeless R&B melodies, UK garage, and contemporary electronic rhythms.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      appearances: "Wednesday & Friday"
    }
  ],
  gallery: [
    { id: 1, title: "The Pharaoh's Laser Spectacle", category: "Atmosphere", url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80" },
    { id: 2, title: "Anubis Mezzanine VIP Booths", category: "VIP Lounge", url: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80" },
    { id: 3, title: "Golden Elixir Signature Cocktail", category: "Mixology", url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80" },
    { id: 4, title: "Mainstage Void Acoustics Rig", category: "Atmosphere", url: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=1200&q=80" },
    { id: 5, title: "Electric Saturday Energy", category: "Crowd", url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80" },
    { id: 6, title: "Nile Outdoor Shisha Terrace", category: "VIP Lounge", url: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80" },
    { id: 7, title: "DJ Headliner in Action", category: "Performances", url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80" },
    { id: 8, title: "Premium Bottle Concierge", category: "VIP Lounge", url: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1200&q=80" }
  ],
  enquiries: [
    {
      id: "CLEO-8491",
      name: "Kaveen Senanayake",
      phone: "+94 77 234 5678",
      email: "kaveen.s@outlook.com",
      date: "2026-10-17",
      event: "Anubis Rising: International Techno Night",
      type: "Anubis VIP Booth",
      guests: 6,
      notes: "Celebrating a milestone birthday. Requesting Grey Goose & Dom Pérignon package.",
      status: "New",
      createdAt: "2026-10-12 14:15"
    },
    {
      id: "CLEO-8488",
      name: "Dilshan Fernando",
      phone: "+94 71 890 1234",
      email: "dilshan.f@gmail.com",
      date: "2026-10-23",
      event: "The Golden Pyramid: Friday Ritual",
      type: "Pharaoh's Royal Stage Booth",
      guests: 10,
      notes: "Corporate client group entertaining guests from Dubai. Requires private security escort.",
      status: "In Progress",
      createdAt: "2026-10-11 19:40"
    },
    {
      id: "CLEO-8472",
      name: "Michelle Perera",
      phone: "+94 76 543 2109",
      email: "michelle.p@yahoo.com",
      date: "2026-10-24",
      event: "Pharaoh's Domain: Saturday Showcase",
      type: "Dancefloor High Table",
      guests: 4,
      notes: "Table confirmed and deposit verified with concierge.",
      status: "Confirmed",
      createdAt: "2026-10-10 11:20"
    }
  ]
};

const StorageManager = {
  get(key, defaultValue) {
    try {
      const stored = localStorage.getItem('cleopatra_' + key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem('cleopatra_' + key, JSON.stringify(value));
    } catch (e) {
      console.warn('Storage error', e);
    }
  },
  init() {
    if (!localStorage.getItem('cleopatra_events')) {
      this.set('events', SEED_DATA.events);
    }
    if (!localStorage.getItem('cleopatra_artists')) {
      this.set('artists', SEED_DATA.artists);
    }
    if (!localStorage.getItem('cleopatra_gallery')) {
      this.set('gallery', SEED_DATA.gallery);
    }
    if (!localStorage.getItem('cleopatra_enquiries')) {
      this.set('enquiries', SEED_DATA.enquiries);
    }
  },
  resetAll() {
    this.set('events', SEED_DATA.events);
    this.set('artists', SEED_DATA.artists);
    this.set('gallery', SEED_DATA.gallery);
    this.set('enquiries', SEED_DATA.enquiries);
  }
};

StorageManager.init();
