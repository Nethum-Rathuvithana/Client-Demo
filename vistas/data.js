// Vistas Rooftop Bar — Master Data Model & Venue Configurations
// 24th Floor, NH Collection Colombo (formerly Mövenpick Hotel)

window.VISTAS_DATA = {
  venue: {
    name: "Vistas Rooftop Bar",
    tagline: "Meet Colombo at Golden Hour — 24 Floors Above the Ocean",
    hotel: "NH Collection Colombo",
    floor: "24th Floor",
    address: "24 Srimath Anagarika Dharmapala Mawatha, Colombo 03, Sri Lanka",
    phone: "+94 117 450 450",
    directPhone: "+94 70 243 4288",
    whatsapp: "94702434288",
    email: "vistas.colombo@nh-hotels.com",
    openingHours: {
      weekdays: "5:00 PM – 1:00 AM",
      weekends: "5:00 PM – 2:00 AM",
      goldenHour: "5:30 PM – 6:45 PM"
    },
    dressCode: "Smart Casual / Sunset Chic (No athletic wear, flip-flops, or beachwear after 6 PM)",
    agePolicy: "21+ after 7:00 PM. All ages welcome during early sunset dining (5:00 PM - 7:00 PM)",
    parking: "Complimentary Valet Parking available at the NH Collection Colombo Main Lobby",
    coordinates: "6.9114° N, 79.8510° E"
  },

  skyExplorer: [
    {
      id: "day",
      label: "Daylight Ocean",
      time: "5:00 PM – 5:45 PM",
      temp: "29°C",
      breeze: "Sea Breeze 14 knots",
      vibe: "Sunlit Oceanic Horizon & Tropical Chillout",
      bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85",
      title: "Vast Horizons & Azure Indian Ocean",
      description: "Arrive as the day eases. Take in the crystal-clear panoramic blue expanse of the Indian Ocean, watch the ships drift along the horizon, and enjoy the cooling offshore breeze 24 floors up.",
      accentColor: "#38BDF8"
    },
    {
      id: "golden",
      label: "Golden Hour Sunset",
      time: "5:45 PM – 6:45 PM",
      temp: "27°C",
      breeze: "Sunset Glow",
      vibe: "Legendary Amber Sunset & Sundowner Beats",
      bgImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=85",
      title: "The Iconic Colombo Golden Hour",
      description: "Colombo's most dramatic vantage point. As the sun sinks directly into the ocean in shades of molten amber, crimson, and violet, our mixologists pour signature sundowner cocktails to melodic deep house beats.",
      accentColor: "#F59E0B"
    },
    {
      id: "night",
      label: "Starlight Skyline",
      time: "6:45 PM – Late",
      temp: "25°C",
      breeze: "Rooftop Starlight",
      vibe: "Lotus Tower Glow & Energetic Nightlife",
      bgImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1920&q=85",
      title: "Electric Colombo City Lights",
      description: "When darkness falls, the 360° panorama ignites. Look east to see the illuminated Lotus Tower and Colombo's neon skyline, while our resident DJs turn the rooftop into the city's most sophisticated evening retreat.",
      accentColor: "#818CF8"
    }
  ],

  seatingCategories: [
    {
      id: "perimeter-sunset",
      name: "Perimeter Oceanfront Sunset Lounge",
      badge: "Highest Demand",
      capacity: "4 to 6 Guests",
      minGuests: 2,
      maxGuests: 6,
      minSpend: 25000,
      minSpendFormatted: "LKR 25,000",
      description: "Front-row unobstructed glass balustrade seating facing directly west across the Indian Ocean. Ultra-luxurious plush outdoor sofas positioned for the definitive sunset panorama.",
      features: [
        "100% unobstructed sunset & ocean view",
        "Front-row perimeter glass railing",
        "Dedicated VIP table service",
        "Min. spend 100% redeemable on food & beverage"
      ],
      coverDeposit: 10000,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "skyline-hightop",
      name: "Lotus Skyline Elevated High-Tops",
      badge: "City Panorama",
      capacity: "2 to 4 Guests",
      minGuests: 2,
      maxGuests: 4,
      minSpend: 15000,
      minSpendFormatted: "LKR 15,000",
      description: "High-top wooden tables overlooking the sparkling eastern Colombo cityscape and the iconic illuminated Lotus Tower. Ideal for couples, cocktail catchups, and photography enthusiasts.",
      features: [
        "Unrivalled Colombo city skyline backdrop",
        "Elevated barstools with cushioned seating",
        "Fast-turnaround cocktail & tapas service",
        "Min. spend 100% redeemable on bill"
      ],
      coverDeposit: 5000,
      image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "nature-canopy",
      name: "Nature Sanctuary Timber Booths",
      badge: "Art & Intimacy",
      capacity: "6 to 8 Guests",
      minGuests: 4,
      maxGuests: 8,
      minSpend: 20000,
      minSpendFormatted: "LKR 20,000",
      description: "Nestled within Vistas' newly redesigned nature-infused interior. Surrounded by bespoke hand-painted Sri Lankan wildlife art and hand-carved teak accents with ambient canopy lighting.",
      features: [
        "Semi-private sheltered dining nook",
        "Intimate acoustic zone for conversations",
        "Hand-carved artisanal timber finishes",
        "Ideal for birthday groups & family celebrations"
      ],
      coverDeposit: 8000,
      image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "presidential-cabana",
      name: "Presidential Sunset Cabana (VIP Edge)",
      badge: "Ultra Luxury",
      capacity: "8 to 14 Guests",
      minGuests: 6,
      maxGuests: 14,
      minSpend: 50000,
      minSpendFormatted: "LKR 50,000",
      description: "The pinnacle of Colombo rooftop hospitality. A private corner pavilion with 270° dual ocean and city panoramas, dedicated master mixologist, and custom welcome champagne service.",
      features: [
        "270-degree wraparound corner panorama",
        "Dedicated private mixologist & hostess",
        "Personalized sound & ambient lighting controls",
        "Complimentary welcome bottle of premium sparkling"
      ],
      coverDeposit: 20000,
      image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "indoor-cocktail",
      name: "Central Island Bar & Casual High-Tops",
      badge: "No Min. Spend Weekdays",
      capacity: "1 to 3 Guests",
      minGuests: 1,
      maxGuests: 3,
      minSpend: 0,
      minSpendFormatted: "No Min. Spend (LKR 8,000 Fri-Sat)",
      description: "Direct seating at our illuminated brass-and-marble central cocktail bar. Watch our flair bartenders craft artisanal infusions with prompt walk-in availability.",
      features: [
        "Interactive bar experience with head mixologists",
        "Ideal for solo travelers, business meetups & dates",
        "Fast seating & zero minimum spend on Sun-Thu",
        "Full food & beverage menu available"
      ],
      coverDeposit: 0,
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
    }
  ],

  menu: {
    categories: [
      { id: "all", name: "Full Selection" },
      { id: "signature-cocktails", name: "Signature Mixology" },
      { id: "tapas", name: "Gourmet Tapas & Bites" },
      { id: "sharing-platters", name: "Rooftop Platters" },
      { id: "zero-proof", name: "Zero-Proof / Mocktails" },
      { id: "champagne", name: "Champagne & Spirits" }
    ],
    items: [
      {
        id: "c-1",
        category: "signature-cocktails",
        name: "Ceylon Old Fashioned (Signature)",
        price: 3600,
        priceFormatted: "LKR 3,600",
        description: "15-year aged Rockland Ceylon Arrack, cinnamon-infused kitul treacle, smoked orange peel, Angostura bitters, served over hand-cut crystal sphere.",
        badge: "House Icon",
        dietary: ["Gluten-Free", "Locally Sourced"],
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "c-2",
        category: "signature-cocktails",
        name: "Vistas Sunset Passion Spritz",
        price: 3200,
        priceFormatted: "LKR 3,200",
        description: "Aperol, fresh Mirigama passionfruit nectar, Prosecco Superiore, artisanal soda, rosemary sprig flamed table-side.",
        badge: "Golden Hour Best Seller",
        dietary: ["Refreshing"],
        image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "c-3",
        category: "signature-cocktails",
        name: "Tamarind & Bird\'s Eye Chili Mezcalita",
        price: 3800,
        priceFormatted: "LKR 3,800",
        description: "Artisanal Oaxacan Mezcal, roasted tamarind reduction, fresh lime, agave, rimmed with smoked Jaffna sea salt & dried chili.",
        badge: "Spicy & Smoky",
        dietary: ["Spicy"],
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "c-4",
        category: "signature-cocktails",
        name: "24th Floor Cloud Nine",
        price: 3400,
        priceFormatted: "LKR 3,400",
        description: "Colombo No. 7 Gin, blue pea flower liqueur, elderflower cordial, yuzu tonic, topped with edible citrus smoke bubble.",
        badge: "Showstopper",
        dietary: ["Botanical"],
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "c-5",
        category: "signature-cocktails",
        name: "Coconut Cloud Espresso Martini",
        price: 3400,
        priceFormatted: "LKR 3,400",
        description: "Ketel One Vodka, freshly pulled single-origin Kotmale espresso, Kahlúa, crowned with toasted king coconut milk foam.",
        badge: "Nightcap",
        dietary: ["Dairy-Free"],
        image: "https://images.unsplash.com/photo-1545438102-799c3991ffb2?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "t-1",
        category: "tapas",
        name: "Crispy Negombo Lagoon Prawns",
        price: 3900,
        priceFormatted: "LKR 3,900",
        description: "Panko & toasted curry leaf crusted jumbo lagoon prawns, served with kaffir lime garlic aioli and sweet tamarind dip.",
        badge: "Chef\'s Signature",
        dietary: ["Seafood", "Crispy"],
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "t-2",
        category: "tapas",
        name: "Slow-Braised Ceylon Black Pork Sliders (3 pcs)",
        price: 3600,
        priceFormatted: "LKR 3,600",
        description: "12-hour roasted pork belly in traditional roasted dark curry glaze, pickled green papaya slaw, brioche slider buns.",
        badge: "Crowd Favorite",
        dietary: ["Pork", "Rich"],
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "t-3",
        category: "tapas",
        name: "Jaffna Spiced Crispy Calamari Rings",
        price: 3400,
        priceFormatted: "LKR 3,400",
        description: "Tender calamari dusted in Jaffna roasted chili and ground coriander, flash-fried with fresh curry leaves and lime wedges.",
        badge: "Spicy",
        dietary: ["Seafood", "Spicy"],
        image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "t-4",
        category: "tapas",
        name: "Pol Roti Tacos with Jackfruit Carnitas (V)",
        price: 2800,
        priceFormatted: "LKR 2,800",
        description: "Handmade mini coconut flatbreads, pulled baby jackfruit (polos) braised in island spices, avocado salsa, coconut cream.",
        badge: "Vegetarian",
        dietary: ["Vegan", "Gluten-Free Option"],
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "t-5",
        category: "tapas",
        name: "Truffle & Parmesan Hand-Cut Manioc Fries",
        price: 2400,
        priceFormatted: "LKR 2,400",
        description: "Golden cassava wedges tossed in white truffle oil, 24-month aged Reggiano, rosemary salt, served with black garlic dip.",
        badge: "Bar Snack",
        dietary: ["Vegetarian"],
        image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "p-1",
        category: "sharing-platters",
        name: "Vistas Grand Ocean Grill Platter",
        price: 11500,
        priceFormatted: "LKR 11,500",
        description: "Jumbo butter-poached prawns, grilled yellowfin tuna steaks, chili-garlic calamari, blue swimmer crab cakes, served with three house sauces.",
        badge: "Serves 3-4",
        dietary: ["Seafood", "Gluten-Free"],
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "p-2",
        category: "sharing-platters",
        name: "Charcoal Yakitori & Satay Skewer Board",
        price: 8800,
        priceFormatted: "LKR 8,800",
        description: "Lemongrass chicken skewers, Australian wagyu beef cubes, pork belly glazed in sweet soy, spicy peanut sambal & pickled cucumber.",
        badge: "Serves 2-3",
        dietary: ["High Protein"],
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "z-1",
        category: "zero-proof",
        name: "King Coconut Mint Quencher",
        price: 1800,
        priceFormatted: "LKR 1,800",
        description: "Fresh Thambili (king coconut water), smashed garden mint, crushed lime, cold-pressed sugarcane syrup, sea salt rim.",
        badge: "Pure Hydration",
        dietary: ["Non-Alcoholic", "Vegan"],
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "z-2",
        category: "zero-proof",
        name: "Golden Hour Hibiscus & Spiced Guava Fizz",
        price: 2100,
        priceFormatted: "LKR 2,100",
        description: "Organic steeped hibiscus tea, pink guava puree, cinnamon-cardamom reduction, effervescent botanical tonic.",
        badge: "Zero-Proof Best Seller",
        dietary: ["Non-Alcoholic"],
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "ch-1",
        category: "champagne",
        name: "Veuve Clicquot Yellow Label Brut NV (Bottle)",
        price: 52000,
        priceFormatted: "LKR 52,000",
        description: "The quintessential sunset champagne. Golden yellow, fine persistent bubbles, aromas of brioche and vanilla.",
        badge: "VIP Bottle",
        dietary: ["Champagne"],
        image: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "ch-2",
        category: "champagne",
        name: "Moët & Chandon Impérial Rosé (Bottle)",
        price: 58000,
        priceFormatted: "LKR 58,000",
        description: "Radiant pink champagne with intense aromas of wild strawberry, raspberry, and subtle floral nuances.",
        badge: "Celebration",
        dietary: ["Champagne"],
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },

  events: [
    {
      id: "ev-1",
      title: "Golden Hour Sundowner Session with DJ Stefan",
      schedule: "Every Friday | 5:30 PM – 9:00 PM",
      dateBadge: "This Friday",
      tag: "Live Music & Sunset",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      description: "Colombo\'s premier weekly sundowner ritual. DJ Stefan spins organic deep house and sunset melodic grooves as the sun drops. Enjoy complimentary chef\'s canapés for early table bookings.",
      perks: ["2-for-1 Vistas Spritz until 6:30 PM", "Live Saxophonist accompaniment", "Perimeter tables book out 48h in advance"],
      bookingConditions: "Minimum spend applies for perimeter tables. General walk-ins welcome at the central bar."
    },
    {
      id: "ev-2",
      title: "Unlimited Gourmet Tapas & Acoustic Serenades",
      schedule: "Every Wednesday | 6:30 PM – 10:30 PM",
      dateBadge: "Every Wednesday",
      tag: "Dining Special",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      description: "Sample your way through 10 chef-crafted tapas plates on free-flow, accompanied by soulful live acoustic guitar and vocal covers of international classics 24 floors above Colombo.",
      perks: ["LKR 7,500 nett per person all-inclusive", "Unlimited chef\'s curated tapas tasting", "Special bottle packages on Spanish and Chilean wines"],
      bookingConditions: "Table reservations highly recommended due to limited kitchen batch tastings."
    },
    {
      id: "ev-3",
      title: "Saturday Starlight Rhythms: Resident & Guest DJs",
      schedule: "Every Saturday | 8:00 PM – 1:30 AM",
      dateBadge: "Every Saturday",
      tag: "Nightlife & Beats",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      description: "The city\'s highest nightlife escape. Elevated basslines, craft mixology, bottle service presentations, and Colombo\'s discerning social set gathering under the open starlit sky.",
      perks: ["VIP Cabana reservations available", "Champagne and single-malt packages", "Strict smart casual dress code"],
      bookingConditions: "Cover charges or table minimum spends apply after 8:30 PM."
    },
    {
      id: "ev-4",
      title: "Full Moon Poya Skyline Soirée (Zero-Proof & Bites)",
      schedule: "Monthly Poya Holiday | 5:00 PM – 11:00 PM",
      dateBadge: "Upcoming Poya",
      tag: "Cultural Holiday",
      image: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?auto=format&fit=crop&w=800&q=80",
      description: "Celebrate the luminous Poya full moon suspended right above the Indian Ocean. An elegant dry-evening experience with bespoke artisanal mocktails, seafood grills, and serene live sitar & handpan melodies.",
      perks: ["Artisanal botanical mocktail masterflights", "Ocean grill platters", "Relaxed family and group seating"],
      bookingConditions: "Non-alcoholic evening conforming to national holiday guidelines."
    }
  ],

  privateEvents: [
    {
      id: "pkg-1",
      title: "Sunset Terrace Semi-Private Buyout",
      capacity: "Up to 50 Guests",
      idealFor: "Corporate Sundowners, Brand Launches, Milestone Birthdays",
      description: "Dedicated Western deck section facing the sunset. Includes private satellite bar, high-top and lounge seating, custom pass-around canapés, and dedicated service staff.",
      features: [
        "Exclusive oceanfront railing section",
        "Custom branded cocktail on arrival",
        "Pass-around tapas menu (8 varieties)",
        "Sound system connection for personalized background music"
      ],
      priceGuide: "Packages from LKR 6,500 ++ per guest"
    },
    {
      id: "pkg-2",
      title: "Corporate Starlight Networking Reception",
      capacity: "Up to 100 Guests",
      idealFor: "Annual Dinners, Expat Mixers, Client Appreciation Events",
      description: "Seamless indoor-outdoor layout utilizing both the air-conditioned timber-carved sanctuary and the open-air skyline terrace. Perfect balance of speech space and breezy mingling.",
      features: [
        "Cordless microphones & high-res mobile display screens",
        "Free-flow sommelier-selected wines & beer",
        "Interactive live yakitori & seafood cooking stations",
        "Valet priority tags for VIP guests"
      ],
      priceGuide: "Custom quotation based on corporate headcount"
    },
    {
      id: "pkg-3",
      title: "Exclusive 24th Floor Full Venue Buyout",
      capacity: "Up to 220 Guests",
      idealFor: "Luxury Weddings, International Conferences, Film Premiers",
      description: "Complete private reign over Colombo\'s highest panoramic rooftop venue. Total exclusivity with 360-degree views, bespoke lighting themes, master mixologists, and headline entertainment.",
      features: [
        "100% private rooftop exclusivity",
        "Custom executive chef banquet or multi-course tasting",
        "Tailored mixology bar with bespoke themed cocktail menu",
        "Security, private elevator express service & full concierge"
      ],
      priceGuide: "Minimum food & beverage expenditure applies"
    }
  ],

  gallery: [
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      caption: "Sunset over the Indian Ocean balustrade"
    },
    {
      url: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80",
      caption: "Panoramic high-tops overlooking the Colombo skyline"
    },
    {
      url: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80",
      caption: "Bespoke nature-infused timber interior lounge"
    },
    {
      url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
      caption: "Artisanal Ceylon mixology crafted by award-winning bartenders"
    },
    {
      url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
      caption: "Nighttime starlight ambience 24 floors above Colombo"
    },
    {
      url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
      caption: "Crispy lagoon prawns and Sri Lankan fusion tapas"
    }
  ],

  initialReservations: [
    {
      id: "VST-8921",
      guestName: "Aritha Wickramasinghe",
      phone: "+94 77 345 6789",
      email: "aritha.w@colomboventures.lk",
      date: "2026-10-23",
      time: "17:45",
      guests: 4,
      category: "perimeter-sunset",
      categoryName: "Perimeter Oceanfront Sunset Lounge",
      minSpend: 25000,
      depositPaid: 10000,
      status: "Confirmed",
      specialRequest: "Celebrating 10th anniversary. Would appreciate corner sunset table and candle setup.",
      createdAt: "2026-10-17 11:20"
    },
    {
      id: "VST-8922",
      guestName: "Samantha & Michael Davies",
      phone: "+44 7911 123456",
      email: "s.davies@uktraveler.co.uk",
      date: "2026-10-23",
      time: "18:00",
      guests: 2,
      category: "skyline-hightop",
      categoryName: "Lotus Skyline Elevated High-Tops",
      minSpend: 15000,
      depositPaid: 5000,
      status: "Confirmed",
      specialRequest: "Visiting Sri Lanka for the first time. Photography spots preferred.",
      createdAt: "2026-10-17 14:05"
    },
    {
      id: "VST-8923",
      guestName: "Dr. Ruwan Pathirana",
      phone: "+94 71 890 1234",
      email: "rpathirana@asiri.lk",
      date: "2026-10-24",
      time: "19:30",
      guests: 8,
      category: "nature-canopy",
      categoryName: "Nature Sanctuary Timber Booths",
      minSpend: 20000,
      depositPaid: 8000,
      status: "Pending Review",
      specialRequest: "Birthday dinner party. Bringing an approved cake, need cake service plates.",
      createdAt: "2026-10-18 09:15"
    },
    {
      id: "VST-8924",
      guestName: "Tariq Mansoor (HSBC Private Banking)",
      phone: "+94 77 999 8811",
      email: "tmansoor@hsbc.lk",
      date: "2026-10-24",
      time: "17:30",
      guests: 10,
      category: "presidential-cabana",
      categoryName: "Presidential Sunset Cabana (VIP Edge)",
      minSpend: 50000,
      depositPaid: 20000,
      status: "Confirmed",
      specialRequest: "Executive client reception. Veuve Clicquot chilled on ice upon arrival please.",
      createdAt: "2026-10-18 10:40"
    }
  ]
};
