// The Unusual — Experimental Runway Collection Data Store
// Curated avant-garde looks showcasing non-commercial, runway-only sculptural designs

const RUNWAY_LOOKS = [
  {
    id: 'look-01',
    lookNumber: '01',
    title: 'The Obsidian Cocoon',
    designerName: 'Maya Senanayake',
    season: 'Autumn Winter 2026',
    price: 'Runway only',
    accentColor: '#E7B49A', // Warm blush peach
    transitionType: 'fabricWipe',
    description: 'Sculpted from 16 metres of heat-compressed wild raw silk. Structural bone corsetry anchors an asymmetric pleated cowl that billows in the wake of the walk.',
    modelMedia: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
    fabricTexture: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80',
    materials: '100% Wild Raw Silk & Internal Steel Boning',
    runwayNotes: 'Presented at Colonnade Hall opening gala. Single edition experimental silhouette.'
  },
  {
    id: 'look-02',
    lookNumber: '02',
    title: 'Architectural Ribcage & Brass',
    designerName: 'Julian De Silva',
    season: 'Spring Summer 2026',
    price: 'Runway only',
    accentColor: '#D4AF37', // Antiqued brass gold
    transitionType: 'spotlightCut',
    description: 'Hand-hammered Sri Lankan brass armature framing raw unspun organza. An anatomical exploration of interior tailoring exposed to raw theatrical light.',
    modelMedia: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
    fabricTexture: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80',
    materials: 'Hammered Sheet Brass & Stiffened Glass Organza',
    runwayNotes: 'Auditory rustle engineered through interlocking brass rib joints.'
  },
  {
    id: 'look-03',
    lookNumber: '03',
    title: 'The Floating Cloud Column',
    designerName: 'Kavinda Abeysekara',
    season: 'Couture 2026',
    price: 'Runway only',
    accentColor: '#D5E3EE', // Sky mist blue
    transitionType: 'threadUnravel',
    description: 'Triple-washed micro-pleated translucent glass tulle suspended by invisible mono-filaments. The garment appears to dissipate into thin air with each step.',
    modelMedia: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85',
    fabricTexture: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=400&q=80',
    materials: 'Glass Fiber Tulle & Optical Monofilament',
    runwayNotes: 'Revealed under sweeping blue-spectrum floor luminaires.'
  },
  {
    id: 'look-04',
    lookNumber: '04',
    title: 'Crimson Monumental Cape',
    designerName: 'Nivani Karunaratne',
    season: 'Autumn Winter 2026',
    price: 'Runway only',
    accentColor: '#C84B31', // Deep venetian red
    transitionType: 'silhouetteMorph',
    description: 'Heavy vegetable-dyed boiled wool sculpted into monumental monolithic shoulders with a sweeping, fluid circular hem trailing four metres behind.',
    modelMedia: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85',
    fabricTexture: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&q=80',
    materials: '100% Boiled Merino Wool & Madder Root Dye',
    runwayNotes: 'Floor-sweeping circumference calibrated to 12.5 metres.'
  },
  {
    id: 'look-05',
    lookNumber: '05',
    title: 'The Molten Silk Slip',
    designerName: 'Maya Senanayake',
    season: 'Spring Summer 2026',
    price: 'Runway only',
    accentColor: '#E6A15C', // Liquid amber gold
    transitionType: 'runwayWalk',
    description: 'Bias-cut liquid charmeuse finished with raw selvedge fringes. Designed to catch directional stage spotlights like molten precious metals.',
    modelMedia: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85',
    fabricTexture: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=400&q=80',
    materials: 'Heavy Weight Silk Charmeuse & Raw Fringes',
    runwayNotes: 'Scrubbed runway motion responding directly to user scroll.'
  },
  {
    id: 'look-06',
    lookNumber: '06',
    title: 'The Eclipse Shroud',
    designerName: 'Julian De Silva',
    season: 'Capsule 2027',
    price: 'Runway only',
    accentColor: '#9D84B7', // Nocturne lavender
    transitionType: 'colorFlood',
    description: 'Woven with intentional drop-stitch voids every seven warp threads, creating an organic celestial pattern that shifts as the model rotates.',
    modelMedia: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=1200&q=85',
    fabricTexture: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=400&q=80',
    materials: 'Drop-Stitch Wild Hemp & Silver Filigree Threads',
    runwayNotes: 'Final look closing the experimental runway showcase.'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RUNWAY_LOOKS };
}
