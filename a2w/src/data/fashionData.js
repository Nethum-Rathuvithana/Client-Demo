// A to W — Art to Wear Comprehensive Data Store
export const ROLES = [
  {
    id: 'designer',
    name: 'Designer',
    title: 'Independent Designer',
    symbol: 'dress_form',
    symbolLabel: 'Sculptural Dress Form',
    tagline: 'Upload designs, retain IP, license and earn on every stitch.',
    description: 'Transform raw sketches into manufactured garments without capital barriers. Retain full authorship, license to brands, and track global wholesale distribution.',
    perks: ['Direct sample approvals', 'Royalties & wholesale licensing', 'Access to certified ateliers', 'Living portfolio with provenance'],
    cta: 'Enter the Studio'
  },
  {
    id: 'brand',
    name: 'Fashion Brand',
    title: 'Atelier & Fashion Brand',
    symbol: 'brand_label',
    symbolLabel: 'Embossed Silk Label',
    tagline: 'Curate collections, launch exclusive drops, collaborate.',
    description: 'Discover vetted independent designers, co-create seasonal drops under shared prestige, and test limited runs with real-time customer pre-orders.',
    perks: ['Exclusive collection drops', 'Designer co-branding rights', 'Pre-sale demand validation', 'End-to-end supply chain integration'],
    cta: 'Explore Collaborations'
  },
  {
    id: 'retail',
    name: 'Retail Shop',
    title: 'Boutique & Retailer',
    symbol: 'clothing_rail',
    symbolLabel: 'Solid Brass Rail',
    tagline: 'Order curated wholesale lines with guaranteed MOQs in LKR.',
    description: 'Stock your boutique rails with museum-quality pieces. Request bespoke fabric swatches, physical samples, and negotiate bulk production with transparent pricing.',
    perks: ['Wholesale pricing (LKR)', 'Low MOQ guarantees', 'Virtual rail builder & line sheets', 'Direct delivery tracking'],
    cta: 'Build Rail'
  },
  {
    id: 'model',
    name: 'Model / Creator',
    title: 'Model & Creative Talent',
    symbol: 'camera_lens',
    symbolLabel: 'Reflective Lens',
    tagline: 'Comp-card profiles, booked shoots, recurring sales commission.',
    description: 'Create an editorial comp-card with verified measurements. Get invited to brand shoots and earn commission every time a garment you wore is purchased.',
    perks: ['Digital Comp-Card', 'Automated royalty tracking', 'Verified measurements & Fit-Twin', 'High-fashion editorial bookings'],
    cta: 'View Comp-Cards'
  },
  {
    id: 'production',
    name: 'Production Partner',
    title: 'Master Atelier & Mill',
    symbol: 'thread_spool',
    symbolLabel: 'Gilded Thread Spool',
    tagline: 'Craft approved samples, cut-and-sew master runs at agreed terms.',
    description: 'Connect with visionary designers looking for ethical, skilled craftsmanship. Fill production schedules with pre-funded, high-margin capsule runs.',
    perks: ['Certified pattern specs', 'Guaranteed milestone payouts', 'Zero marketing overhead', 'Long-term brand relationships'],
    cta: 'Partner Ateliers'
  },
  {
    id: 'customer',
    name: 'Customer',
    title: 'Patron of Wearable Art',
    symbol: 'garment_bag',
    symbolLabel: 'Linen Garment Bag',
    tagline: 'Acquire numbered editions or commission custom atelier pieces.',
    description: 'Step into garments that embody architectural thought. Know the exact hands that carded, cut, stitched, and captured your piece.',
    perks: ['Art-to-Wear provenance', 'Fit Twin size alignment', 'Bespoke custom tailoring', 'Numbered limited editions'],
    cta: 'Enter The Hall'
  }
];

export const JOURNEY_STAGES = [
  {
    step: 1,
    id: 'submitted',
    title: 'Design Submitted',
    shortCopy: 'The pencil sketch draws itself as an idea becomes a tangible silhouette.',
    badge: 'Stage 01',
    detail: 'Digital technical pack, vector proportions, and material intent registered with cryptographic provenance.'
  },
  {
    step: 2,
    id: 'details',
    title: 'Details & Categorisation',
    shortCopy: 'Tags pin onto the sketch while silk and weave swatches orbit into alignment.',
    badge: 'Stage 02',
    detail: 'Fiber composition, yarn density, pantone dye references, and drape physics categorized for craft verification.'
  },
  {
    step: 3,
    id: 'sample',
    title: 'Sample Approval',
    shortCopy: 'Raw muslin toile is fitted on the dress form, sealed with a hand-stitched seal.',
    badge: 'Stage 03',
    detail: 'Physical toile inspected by lead master cutter; fit revisions adjusted on 3D avatar before final cutting.'
  },
  {
    step: 4,
    id: 'production',
    title: 'Production',
    shortCopy: 'Pattern pieces fly in; running stitches sew the seams with the partner atelier.',
    badge: 'Stage 04',
    detail: 'Small-batch ethical run crafted by certified local artisans in Colombo & Kandy mills.'
  },
  {
    step: 5,
    id: 'photoshoot',
    title: 'Photoshoot',
    shortCopy: 'A warm strobe flash captures the drape on the model beside contact-sheet frames.',
    badge: 'Stage 05',
    detail: 'Editorial campaign captured in golden natural light; model comp-card and styling details tagged.'
  },
  {
    step: 6,
    id: 'live',
    title: 'Live on Platform',
    shortCopy: 'Garment rests on the brass rail ready for direct collector purchase and wholesale orders.',
    badge: 'Stage 06',
    detail: 'Interactive 3D exhibit active in The Hall; wholesale line sheet available for boutique ordering.'
  }
];

export const GARMENTS = [
  {
    id: 'hero_gown',
    name: 'The Peach Chiffon Gown',
    slug: 'peach-chiffon-gown',
    edition: 'Edition 01 of 18',
    occasion: 'Evening Gala',
    fabric: 'Silk Chiffon & Hand-Spun Organdy',
    colorName: 'Blush Peach',
    colorHex: '#E7B49A',
    retailPriceLKR: 68000,
    wholesalePriceLKR: 38000,
    moq: 20,
    availability: 'Made to Order · 14 Days',
    inStockCount: 6,
    designer: {
      name: 'Maya Senanayake',
      atelier: 'Studio Senanayake, Colombo 07',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      bio: 'Pioneering organic silk draping infused with ancient Sri Lankan lacework.'
    },
    credits: {
      designedBy: 'Maya Senanayake',
      sampleApproved: 'Master Cutter Sunil Fernando',
      producedBy: 'Lanka Fine Silk Weavers & Artisans Guild',
      photographedBy: 'Tariq Thorne (Sunlit Colonnade Shoot)',
      modelledBy: 'Keshini Perera (Height 174cm, Size S)'
    },
    fitTwin: {
      modelHeight: 174,
      modelSize: 'S',
      bust: '84 cm',
      waist: '64 cm',
      hips: '91 cm',
      recommendation: 'True to architectural drape. If between sizes, size down for sculpted bodice.'
    },
    journeyDates: [
      { stage: 'Design Submitted', date: 'August 12, 2026', note: 'Initial charcoal and graphite drape sketches' },
      { stage: 'Details & Categorisation', date: 'August 24, 2026', note: 'Selected 100% mulberry peach chiffon' },
      { stage: 'Sample Approval', date: 'September 08, 2026', note: 'Toile fit calibrated on sculptural form' },
      { stage: 'Production', date: 'September 28, 2026', note: 'First 20 units hand-stitched at Colombo Atelier' },
      { stage: 'Photoshoot', date: 'October 14, 2026', note: 'Captured under natural golden hour archways' },
      { stage: 'Live on Platform', date: 'October 24, 2026', note: 'Opened for direct patronage and boutique rails' }
    ],
    layers: {
      sketch: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
      drape3D: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      photo: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80'
    },
    story: 'Sculpted from twelve continuous metres of featherweight peach chiffon. The gown features hand-pleated sunburst rays radiating from the waistline, echoing the arches of neoclassical colonnades.'
  },
  {
    id: 'hall_garment_01',
    name: 'Travertine Cocoon Coat',
    slug: 'travertine-cocoon-coat',
    edition: 'Edition 04 of 25',
    occasion: 'Architectural Outerwear',
    fabric: 'Raw Wild Silk & Wool Cashmere',
    colorName: 'Warm Travertine',
    colorHex: '#E9DFCF',
    retailPriceLKR: 84000,
    wholesalePriceLKR: 49000,
    moq: 15,
    availability: 'Limited Batch · Ready to Ship',
    inStockCount: 4,
    designer: {
      name: 'Julian De Silva',
      atelier: 'Atelier JDS, Kandy',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'Exploring monolithic garment geometry inspired by tropical modernism.'
    },
    credits: {
      designedBy: 'Julian De Silva',
      sampleApproved: 'JDS Studio Quality Board',
      producedBy: 'Central Highlands Mill Collective',
      photographedBy: 'Dilshan Weerasinghe',
      modelledBy: 'Sasha Alwis (Height 178cm, Size M)'
    },
    fitTwin: {
      modelHeight: 178,
      modelSize: 'M',
      bust: '88 cm',
      waist: '68 cm',
      hips: '95 cm',
      recommendation: 'Relaxed cocoon silhouette. Features drop shoulders.'
    },
    journeyDates: [
      { stage: 'Design Submitted', date: 'July 10, 2026', note: 'Structural charcoal study' },
      { stage: 'Details & Categorisation', date: 'July 28, 2026', note: 'Custom double-face wool and wild raw silk blend' },
      { stage: 'Sample Approval', date: 'August 19, 2026', note: 'Muslin prototype approved' },
      { stage: 'Production', date: 'September 15, 2026', note: 'Tailored with invisible horn buttons' },
      { stage: 'Photoshoot', date: 'October 02, 2026', note: 'Minimalist stone pavilion backdrop' },
      { stage: 'Live on Platform', date: 'October 20, 2026', note: 'Released for retail line sheets' }
    ],
    layers: {
      sketch: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80',
      drape3D: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80',
      photo: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80'
    },
    story: 'Conceived as an architectural sanctuary. Clean, uninterrupted curved lines sweep around the shoulders into a relaxed cocoon hem.'
  },
  {
    id: 'hall_garment_02',
    name: 'Fluted Linen Column Dress',
    slug: 'fluted-linen-column-dress',
    edition: 'Edition 08 of 30',
    occasion: 'Resort & Gallery',
    fabric: 'Unbleached Organic Flax Linen',
    colorName: 'Raw Linen',
    colorHex: '#F1E9DC',
    retailPriceLKR: 46000,
    wholesalePriceLKR: 24500,
    moq: 30,
    availability: 'In Production · Ships in 7 Days',
    inStockCount: 12,
    designer: {
      name: 'Nivani Karunaratne',
      atelier: 'Nivani Textile Lab, Galle Fort',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Revitalizing heirloom organic flax weaving with micro-accordion pleats.'
    },
    credits: {
      designedBy: 'Nivani Karunaratne',
      sampleApproved: 'Galle Heritage Tailors',
      producedBy: 'Southern Coast Craft Guild',
      photographedBy: 'Chathura Gunasekara',
      modelledBy: 'Mei Lin (Height 168cm, Size S)'
    },
    fitTwin: {
      modelHeight: 168,
      modelSize: 'S',
      bust: '82 cm',
      waist: '62 cm',
      hips: '88 cm',
      recommendation: 'Column fit with subtle natural stretch from the vertical fluting.'
    },
    journeyDates: [
      { stage: 'Design Submitted', date: 'August 01, 2026', note: 'Fluted column proportions' },
      { stage: 'Details & Categorisation', date: 'August 14, 2026', note: '100% non-bleached European flax' },
      { stage: 'Sample Approval', date: 'September 01, 2026', note: 'Stitch tension calibrated' },
      { stage: 'Production', date: 'September 22, 2026', note: 'Batch of 30 crafted' },
      { stage: 'Photoshoot', date: 'October 08, 2026', note: 'Galle fort bastions at dawn' },
      { stage: 'Live on Platform', date: 'October 25, 2026', note: 'Live for boutiques & orders' }
    ],
    layers: {
      sketch: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
      drape3D: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      photo: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=900&q=80'
    },
    story: 'Vertical accordion pleats evoke the fluting of classical columns, giving the wearer an elongated, effortlessly fluid line.'
  },
  {
    id: 'hall_garment_03',
    name: 'Sky Mist Organza Trench',
    slug: 'sky-mist-organza-trench',
    edition: 'Edition 02 of 12',
    occasion: 'Editorial & Evening',
    fabric: 'Translucent Glass Organza',
    colorName: 'Sky Mist',
    colorHex: '#D5E3EE',
    retailPriceLKR: 92000,
    wholesalePriceLKR: 54000,
    moq: 12,
    availability: 'Made to Order',
    inStockCount: 3,
    designer: {
      name: 'Kavinda Abeysekara',
      atelier: 'Kavinda Haute Couture',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      bio: 'Bridging glass transparency and traditional tailoring.'
    },
    credits: {
      designedBy: 'Kavinda Abeysekara',
      sampleApproved: 'Atelier Technical Direction',
      producedBy: 'Prestige Silk Masters',
      photographedBy: 'Elena Rostova',
      modelledBy: 'Natasha Dias (Height 176cm, Size S)'
    },
    fitTwin: {
      modelHeight: 176,
      modelSize: 'S',
      bust: '85 cm',
      waist: '65 cm',
      hips: '92 cm',
      recommendation: 'Comes with removable matching silk sash belt.'
    },
    journeyDates: [
      { stage: 'Design Submitted', date: 'July 15, 2026', note: 'Transparency play studies' },
      { stage: 'Details & Categorisation', date: 'August 03, 2026', note: 'Triple-washed silk glass organza' },
      { stage: 'Sample Approval', date: 'August 29, 2026', note: 'French seam finish verified' },
      { stage: 'Production', date: 'September 19, 2026', note: 'Tailoring in limited runs' },
      { stage: 'Photoshoot', date: 'October 11, 2026', note: 'Reflecting afternoon rain' },
      { stage: 'Live on Platform', date: 'October 22, 2026', note: 'Available worldwide' }
    ],
    layers: {
      sketch: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80',
      drape3D: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80',
      photo: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80'
    },
    story: 'A whisper-light outer layer catching breezes like a sail. French seams ensure every interior line is as clean as the silhouette.'
  },
  {
    id: 'hall_garment_04',
    name: 'Midnight Ink Pleated Tunic',
    slug: 'midnight-ink-pleated-tunic',
    edition: 'Edition 11 of 40',
    occasion: 'Ceremony & Gallery',
    fabric: 'Dense Crepe De Chine & Matte Satin',
    colorName: 'Deep Ink',
    colorHex: '#1B1917',
    retailPriceLKR: 44000,
    wholesalePriceLKR: 25000,
    moq: 35,
    availability: 'In Stock',
    inStockCount: 18,
    designer: {
      name: 'Maya Senanayake',
      atelier: 'Studio Senanayake, Colombo 07',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      bio: 'Pioneering organic silk draping infused with ancient Sri Lankan lacework.'
    },
    credits: {
      designedBy: 'Maya Senanayake',
      sampleApproved: 'Studio Senanayake',
      producedBy: 'Colombo Craft Cooperative',
      photographedBy: 'Tariq Thorne',
      modelledBy: 'Keshini Perera (Height 174cm, Size S)'
    },
    fitTwin: {
      modelHeight: 174,
      modelSize: 'S',
      bust: '84 cm',
      waist: '64 cm',
      hips: '91 cm',
      recommendation: 'A-line drape suitable across a broad range of body shapes.'
    },
    journeyDates: [
      { stage: 'Design Submitted', date: 'June 20, 2026', note: 'Ink wash silhouette study' },
      { stage: 'Details & Categorisation', date: 'July 12, 2026', note: 'Heavy weight silk crepe' },
      { stage: 'Sample Approval', date: 'July 30, 2026', note: 'Asymmetrical hem approved' },
      { stage: 'Production', date: 'August 25, 2026', note: 'Master batch completed' },
      { stage: 'Photoshoot', date: 'September 18, 2026', note: 'Low-key chiaroscuro studio shoot' },
      { stage: 'Live on Platform', date: 'October 01, 2026', note: 'Reordered twice by boutique partners' }
    ],
    layers: {
      sketch: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
      drape3D: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      photo: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80'
    },
    story: 'Pure dark drama. Deep ink absorbs the room’s illumination, creating a bold sculptural silhouette that shifts with movement.'
  },
  {
    id: 'hall_garment_05',
    name: 'Raw Silk Pleated Kimono',
    slug: 'raw-silk-pleated-kimono',
    edition: 'Edition 05 of 20',
    occasion: 'Lounge & Evening',
    fabric: 'Hand-Loomed Raw Matka Silk',
    colorName: 'Muted Taupe',
    colorHex: '#B8A48C',
    retailPriceLKR: 58000,
    wholesalePriceLKR: 32000,
    moq: 25,
    availability: 'Limited Batch',
    inStockCount: 7,
    designer: {
      name: 'Julian De Silva',
      atelier: 'Atelier JDS, Kandy',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'Exploring monolithic garment geometry inspired by tropical modernism.'
    },
    credits: {
      designedBy: 'Julian De Silva',
      sampleApproved: 'Atelier JDS',
      producedBy: 'Kandy Handloom Masters',
      photographedBy: 'Dilshan Weerasinghe',
      modelledBy: 'Amani Jayawardena (Height 172cm, Size S)'
    },
    fitTwin: {
      modelHeight: 172,
      modelSize: 'S',
      bust: '83 cm',
      waist: '63 cm',
      hips: '89 cm',
      recommendation: 'Generous kimono sleeves with internal waist ribbons.'
    },
    journeyDates: [
      { stage: 'Design Submitted', date: 'July 05, 2026', note: 'Sleeve drape physics' },
      { stage: 'Details & Categorisation', date: 'July 20, 2026', note: 'Naturally dyed taupe slub' },
      { stage: 'Sample Approval', date: 'August 10, 2026', note: 'Collar lapel perfected' },
      { stage: 'Production', date: 'September 05, 2026', note: 'Woven on manual flying shuttles' },
      { stage: 'Photoshoot', date: 'September 28, 2026', note: 'Veranda in shadow' },
      { stage: 'Live on Platform', date: 'October 15, 2026', note: 'Stocked in 4 premium boutiques' }
    ],
    layers: {
      sketch: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80',
      drape3D: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80',
      photo: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80'
    },
    story: 'Woven from raw slub silk with organic irregularities celebrated as character. Effortlessly layers over slip dresses or tailored pants.'
  }
];

export const NETWORK_PROFILES = [
  {
    id: 'p1',
    name: 'Maya Senanayake',
    role: 'designer',
    roleLabel: 'Couture Designer',
    location: 'Colombo, Sri Lanka',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
    stats: { designs: 14, collaborations: 8, wholesaleRails: 19 },
    activeCollaborations: ['p2', 'p3', 'p5'],
    bio: 'Rooted in organic draping, botanical dyeing, and architectural silhouettes.'
  },
  {
    id: 'p2',
    name: 'House of Sylvan',
    role: 'brand',
    roleLabel: 'Luxury Fashion Brand',
    location: 'London & Colombo',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80',
    stats: { drops: 5, partneredDesigners: 6, stockists: 34 },
    activeCollaborations: ['p1', 'p4', 'p6'],
    bio: 'Curating boundary-pushing seasonal drops with independent South Asian designers.'
  },
  {
    id: 'p3',
    name: 'The Cinnamon Arch Boutique',
    role: 'retail',
    roleLabel: 'Concept Retail Store',
    location: 'Galle Fort Heritage Quarter',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=80',
    stats: { activeRails: 8, ordersPlaced: 27, avgMOQ: '35 pcs' },
    activeCollaborations: ['p1', 'p5'],
    bio: 'Curated retail sanctuary showcasing wearable art to international travelers.'
  },
  {
    id: 'p4',
    name: 'Keshini Perera',
    role: 'model',
    roleLabel: 'Editorial Model',
    location: 'Colombo & Singapore',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80',
    stats: { campaigns: 22, height: '174 cm', size: 'S / UK 8' },
    activeCollaborations: ['p1', 'p2'],
    bio: 'Editorial presence in Vogue South Asia and Harper’s Bazaar. Height 174cm, Size S.'
  },
  {
    id: 'p5',
    name: 'Lanka Fine Silk Artisans Guild',
    role: 'production',
    roleLabel: 'Master Weaving Mill',
    location: 'Kandy Hill Country',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80',
    stats: { artisans: 48, monthlyCapacity: '400 pcs', certification: '100% Ethical' },
    activeCollaborations: ['p1', 'p3'],
    bio: 'Specialising in hand-loomed Mulberry silk, zero-waste cutting and botanical dye vats.'
  },
  {
    id: 'p6',
    name: 'Aurelia Solis',
    role: 'customer',
    roleLabel: 'Private Art Collector',
    location: 'Zurich & Dubai',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
    stats: { piecesAcquired: 9, customCommissions: 2 },
    activeCollaborations: ['p2'],
    bio: 'Collecting numbered wearable art editions that honor maker heritage.'
  }
];

export const UPCOMING_DROPS = [
  {
    id: 'drop_solstice',
    brand: 'House of Sylvan × Maya Senanayake',
    title: 'The Solstice Colonnade Collection',
    curtainColor: 'rgba(231, 180, 154, 0.75)',
    revealDate: 'November 15, 2026',
    silhouetteImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    description: 'Seven unreleased garments celebrating midday sunbeams cutting through travertine arches. Strictly 15 editions per design.',
    status: 'Silhouetted behind Sheer Silk',
    notifiedCount: 342,
    retailerEarlyAccess: true
  },
  {
    id: 'drop_monolith',
    brand: 'Atelier JDS',
    title: 'Monolith: Heavy Linen & Raw Stone',
    curtainColor: 'rgba(184, 164, 140, 0.8)',
    revealDate: 'December 01, 2026',
    silhouetteImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    description: 'Structured outerwear inspired by monolithic masonry and tropical brutalism.',
    status: 'Silhouetted behind Sheer Silk',
    notifiedCount: 198,
    retailerEarlyAccess: true
  }
];
