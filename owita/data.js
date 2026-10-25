// Ovita Family Restaurant & Cafe — Nagoda Junction, Kalutara South
// Central Seed Data & State Definition (Reflecting Verified Signboard Branding)

const OWITA_CONFIG = {
  restaurantName: 'Ovita Family Restaurant',
  brandName: 'ඕවිට (OVITA)',
  sinhalaName: 'ඕවිට ෆැමිලි රෙස්ටුරන්ට්',
  tagline: 'Two-Story Container Rooftop Dining & Authentic Cuisine · Nagoda Junction, Kalutara South',
  phone: '077 277 5132',
  altPhone: '034 222 8490',
  address: 'Nagoda Junction, Kalutara South, Western Province, Sri Lanka',
  coordinates: {
    lat: 6.5684,
    lng: 79.9806
  },
  openingHours: 'Daily 11:00 AM – 11:30 PM',
  containerColors: {
    cyan: '#00D2D3',
    yellow: '#FFB800',
    red: '#FF4757'
  },
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  }
};

const DEFAULT_MENU_ITEMS = [
  // --- SIGNATURE COLLECTION (FEATURED ON HOMEPAGE) ---
  {
    id: 'ow-sig-1',
    name: 'Ovita Special Mixed Fried Rice',
    sinhala: 'ඕවිට ස්පෙෂල් මික්ස්ඩ් රයිස්',
    category: 'rice',
    price: 1850,
    serves: 'Serves 2–3 Persons',
    portionIncludes: [
      '3x Crispy Golden Chicken Drumsticks',
      '3x Fried Farm Eggs',
      'Wok-tossed Lagoon Prawns & Ocean Calamari',
      'Fragrant Long-Grain Basmati with shredded leeks & carrots',
      'Signature spicy chili paste & rich curry gravy tub'
    ],
    isSignature: true,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.9,
    reviewsCount: 142,
    img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    description: 'Fragrant basmati wok-tossed with tiger prawns, tender chicken, chicken sausage, fried eggs, wok greens, and our house-made chili paste.'
  },
  {
    id: 'ow-sig-2',
    name: 'Cheese Chicken Kottu Royale',
    sinhala: 'චීස් චිකන් කොත්තු රෝයල්',
    category: 'kottu',
    price: 1650,
    serves: 'Serves 2 Persons',
    portionIncludes: [
      'Double Melted Mozzarella pull layer',
      '2x Shredded Roasted Spiced Chicken Quarters',
      '2x Beaten Farm Eggs chopped into fresh godamba roti',
      'Crunchy spring leeks, carrots & caramelized onions',
      'Rich seasoned chicken gravy poured over hot griddle'
    ],
    isSignature: true,
    isOffer: true,
    offerDiscountPercent: 10,
    inStock: true,
    prepBaseMins: 10,
    rating: 5.0,
    reviewsCount: 198,
    img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    description: 'Shredded godamba roti chopped on hot griddle with marinated chicken, eggs, crunchy leeks, rich fresh milk gravy, and melted double mozzarella.'
  },
  {
    id: 'ow-sig-3',
    name: 'Crispy Hot Butter Cuttlefish',
    sinhala: 'හොට් බටර් දැල්ලෝ',
    category: 'seafood',
    price: 2400,
    serves: 'Serves 2–3 Persons (Share Platter)',
    portionIncludes: [
      '300g Hand-cut tender calamari rings in golden spiced crust',
      'Tossed in salted garlic dairy butter',
      'Crisp roasted red dried chilies & fresh scallion rings',
      'Tangy lime wedges for fresh squeezing',
      'Sweet chili dipping sauce cup'
    ],
    isSignature: true,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.9,
    reviewsCount: 167,
    img: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    description: 'Fresh local cuttlefish rings in ultra-crisp seasoned batter, wok-tossed with sweet golden garlic butter, scallions, and dried red chili flakes.'
  },
  {
    id: 'ow-sig-4',
    name: 'Ovita Mixed Sizzler Platter',
    sinhala: 'ඕවිට මික්ස්ඩ් සිස්ලර් ප්ලැටර්',
    category: 'grill',
    price: 2950,
    serves: 'Serves 3–4 Persons',
    portionIncludes: [
      '3x Flame-Grilled BBQ Chicken Drumsticks & Wings',
      '3x Garlic Butter Jumbo Prawn Skewers',
      'Grilled Chicken Sausages & Tender Beef Strips',
      'Sizzling French Fries & Butter-glazed Sweetcorn',
      'Smoky Black Pepper & BBQ Dip Sauces'
    ],
    isSignature: true,
    isOffer: true,
    offerDiscountPercent: 15,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.8,
    reviewsCount: 112,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'A smoking cast-iron platter featuring succulent BBQ chicken drumsticks, garlic grilled prawns, beef slices, grilled sausages, and spiced fries.'
  },

  // --- RICE & BIRYANI ---
  {
    id: 'ow-rice-1',
    name: 'Kalutara Seafood Nasi Goreng',
    sinhala: 'සීෆුඩ් නාසි ගොරෙන්',
    category: 'rice',
    price: 1950,
    serves: 'Serves 2 Persons',
    portionIncludes: [
      '2x Sunny-Side Up Fried Farm Eggs on top',
      '2x Grilled Chicken Satay Skewers with peanut gravy',
      'Crispy deep-fried prawn crackers (kerupuk)',
      'Wok-tossed basmati rice in sweet sambal with prawns & cuttlefish',
      'Pickled cucumber & red onion atchar'
    ],
    isSignature: false,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.8,
    reviewsCount: 89,
    img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    description: 'Indonesian-Sri Lankan fusion wok rice with sweet soy, fresh prawns, calamari, topped with a runny fried egg and crispy prawn crackers.'
  },
  {
    id: 'ow-rice-2',
    name: 'Hyderabadi Chicken Dum Biryani',
    sinhala: 'හයිද්‍රාබාදි චිකන් දම් බිරියානි',
    category: 'rice',
    price: 2200,
    serves: 'Serves 3 Persons',
    portionIncludes: [
      '3x Slow-Cooked Tender Spiced Chicken Leg Quarters',
      '3x Hard-Boiled Farm Eggs simmered in biryani masala',
      'Aromatic Saffron Basmati layered with caramelized onions',
      'Chilled mint & cucumber yogurt raita bowl',
      'Spicy traditional Biryani gravy bowl'
    ],
    isSignature: false,
    isOffer: true,
    offerDiscountPercent: 10,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.9,
    reviewsCount: 134,
    img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    description: 'Fragrant aged basmati sealed with marinated chicken thighs, saffron, mint, whole spices, served with boiled eggs, raita, and spicy gravy.'
  },
  {
    id: 'ow-rice-3',
    name: 'Vegetable Mongolian Wok Rice',
    sinhala: 'එළවළු මොන්ගෝලියන් රයිස්',
    category: 'rice',
    price: 1350,
    serves: 'Serves 2 Persons',
    portionIncludes: [
      'Crisp wok-tossed bell peppers, broccoli, carrots & baby corn',
      'Golden fried tofu cubes & crunchy cashew nuts',
      'Long-grain basmati in savory dark Mongolian garlic sauce',
      'Spring onion & toasted sesame seed garnish',
      'Side of homemade chili oil'
    ],
    isSignature: false,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.7,
    reviewsCount: 54,
    img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    description: 'Wok-charred long grain rice with mushrooms, baby corn, bell peppers, broccoli, and roasted cashews tossed in dark savory Mongolian sauce.'
  },

  // --- KOTTU VARIETIES ---
  {
    id: 'ow-kot-1',
    name: 'Seafood Dolphin Kottu (Large)',
    sinhala: 'සීෆුඩ් ඩොල්ෆින් කොත්තු',
    category: 'kottu',
    price: 2100,
    serves: 'Serves 2–3 Persons',
    portionIncludes: [
      'Square-cut fluffy parotta roti pillows',
      'Fresh Kalutara lagoon prawns & tender calamari rings',
      '2x Beaten Farm Eggs with caramelized leeks & onions',
      'Thick coastal seafood curry reduction',
      'Topped with dairy butter & fresh lime wedge'
    ],
    isSignature: false,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.9,
    reviewsCount: 110,
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    description: 'Fluffy parotta squares chopped with jumbo prawns, calamari, creamy curry gravy, and green chilies. A legendary Kalutara delicacy.'
  },
  {
    id: 'ow-kot-2',
    name: 'Roast Paan Beef Kottu',
    sinhala: 'රෝස්ට් පාන් බීෆ් කොත්තු',
    category: 'kottu',
    price: 1750,
    serves: 'Serves 2 Persons',
    portionIncludes: [
      'Wood-fired Sri Lankan crusty Roast Paan chopped on tawa',
      'Slow-cooked tender black pepper beef chunks',
      '2x Farm eggs tossed with green chilies, onions & curry leaves',
      'Dark spicy roasted curry gravy infusion',
      'Fried garlic chips & crispy onions on top'
    ],
    isSignature: false,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.8,
    reviewsCount: 78,
    img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    description: 'Crispy wood-fired Sri Lankan roast bread chopped on hot tawa with tender pepper beef, onions, egg, and roasted curry reduction.'
  },
  {
    id: 'ow-kot-3',
    name: 'Vegetable & Egg Palandi Kottu',
    sinhala: 'එග් පලන්දි කොත්තු',
    category: 'kottu',
    price: 1250,
    serves: 'Serves 2 Persons',
    portionIncludes: [
      '3x Farm eggs beaten with fresh shredded godamba roti',
      'Crunchy shredded cabbage, carrots, bell peppers & leeks',
      'Creamy fresh cow milk and butter gravy reduction',
      'Crushed black pepper & roasted cumin aroma',
      'Tangy vegetable curry dipping sauce'
    ],
    isSignature: false,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.7,
    reviewsCount: 65,
    img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    description: 'Rich creamy kottu prepared with fresh cow milk, shredded vegetables, eggs, and light spices for a smooth comforting flavor.'
  },

  // --- SEAFOOD SPECIALTIES ---
  {
    id: 'ow-sea-1',
    name: 'Devilled Jumbo Prawns (Platter)',
    sinhala: 'ඩෙවිල්ඩ් ජම්බෝ ඉස්සෝ',
    category: 'seafood',
    price: 2600,
    serves: 'Serves 2–3 Persons',
    portionIncludes: [
      '8x Jumbo Ocean Prawns wok-seared in spicy devilled glaze',
      'Sauteed crisp bell peppers, red onions & ripe tomatoes',
      'Fiery tomato-chili sauce with crushed pepper & garlic',
      'Fresh lime juice & spring scallions garnish',
      'Perfect accompaniment with fried rice or warm roti'
    ],
    isSignature: false,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.9,
    reviewsCount: 92,
    img: 'https://images.unsplash.com/photo-1559737558-245ff2317926?auto=format&fit=crop&w=800&q=80',
    description: 'Large sea prawns flash-fried and tossed in fiery sweet-spicy tomato chili sauce with onions, capsicum, and crushed black pepper.'
  },
  {
    id: 'ow-sea-2',
    name: 'Devilled Crispy BBQ Wings Platter',
    sinhala: 'ඩෙවිල්ඩ් ක්‍රිස්පි විංග්ස්',
    category: 'meat',
    price: 1750,
    serves: 'Serves 2–3 Persons',
    portionIncludes: [
      '10x Crispy Marinated Chicken Wings & Drumettes',
      'Wok-tossed in spicy-sweet Sri Lankan devilled glaze',
      'Caramelized red onion rings & green banana peppers',
      'Toasted sesame seeds & fresh spring onions',
      'House special garlic mayo dipping sauce'
    ],
    isSignature: false,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.8,
    reviewsCount: 115,
    img: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    description: 'Crispy fried chicken wings tossed in rich spicy-tangy devilled sauce with banana peppers, onions, and spring scallions.'
  },

  // --- WOK MEATS ---
  {
    id: 'ow-meat-1',
    name: 'Dragon Crispy Chicken Platter',
    sinhala: 'ඩ්‍රැගන් ක්‍රිස්පි චිකන්',
    category: 'meat',
    price: 1850,
    serves: 'Serves 2–3 Persons',
    portionIncludes: [
      '12x Boneless crispy fried chicken strips in savory batter',
      'Glazed in sweet-fiery Szechuan chili sauce',
      'Roasted whole cashew nuts & crisp green bell peppers',
      'Toasted sesame seeds & julienned spring onions',
      'Extra spicy chili dipping cup'
    ],
    isSignature: false,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.9,
    reviewsCount: 143,
    img: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    description: 'Crispy chicken strips coated in sweet-fiery Szechuan sauce, roasted cashews, and crunchy bell peppers.'
  },
  {
    id: 'ow-meat-2',
    name: 'Black Pepper Szechuan Beef',
    sinhala: 'බ්ලැක් පෙපර් බීෆ්',
    category: 'meat',
    price: 2100,
    serves: 'Serves 2 Persons',
    portionIncludes: [
      'Tender marinated beef fillet strips wok-seared on high flame',
      'Coarsely crushed Malabar black peppercorns & garlic butter',
      'Sliced green capsicum, red onions & scallions',
      'Rich oyster & dark soy reduction',
      'Garnished with crisp fresh ginger slivers'
    ],
    isSignature: false,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.8,
    reviewsCount: 67,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'Tender beef strips seared on high-heat wok with crushed black peppercorns, scallions, bell peppers, and savory oyster sauce.'
  },

  // --- BURGERS & SUBMARINES ---
  {
    id: 'ow-grill-1',
    name: 'Ovita Monster Crispy Chicken Submarine',
    sinhala: 'ක්‍රිස්පි චිකන් සබ්මැරීන්',
    category: 'grill',
    price: 1550,
    serves: 'Serves 1–2 Persons',
    portionIncludes: [
      '12-Inch Freshly baked warm crusty baguette',
      'Double layer crispy fried seasoned chicken fillet strips',
      'Melted Cheddar & Mozzarella cheese blanket',
      'Fresh crisp lettuce, sliced tomatoes & gherkins',
      'Portion of golden salted French fries included'
    ],
    isSignature: false,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.8,
    reviewsCount: 88,
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    description: '12-inch toasted artisan sub packed with double crispy fried chicken, melted cheddar, lettuce, pickles, and our signature garlic sauce. Served with fries.'
  },
  {
    id: 'ow-grill-2',
    name: 'Double Gourmet Beef Burger with Fries',
    sinhala: 'ඩබල් බීෆ් බර්ගර්',
    category: 'grill',
    price: 1650,
    serves: 'Serves 1 Person',
    portionIncludes: [
      '2x 120g Hand-pressed pure seasoned beef patties',
      'Double melted American yellow cheddar slices',
      'Caramelized balsamic onions & crisp iceberg lettuce',
      'House-made smoky burger relish on butter-toasted brioche bun',
      'Crisp golden salted French fries & ketchup'
    ],
    isSignature: false,
    isOffer: true,
    offerDiscountPercent: 10,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.9,
    reviewsCount: 119,
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    description: 'Two pure grilled beef patties, double melted cheese, caramelized onions, crisp lettuce, and special burger relish on toasted brioche. Served with fries.'
  },

  // --- BEVERAGES & DESSERTS ---
  {
    id: 'ow-drk-1',
    name: 'Ovita Special Royal Falooda',
    sinhala: 'රෝයල් ෆලූඩා',
    category: 'drinks',
    price: 650,
    serves: 'Serves 1 Person (Large Tall Glass)',
    portionIncludes: [
      'Fragrant Rose syrup milk shake base with chilled cream',
      'Soft vermicelli noodles & soaked basil seeds (kasakasa)',
      'Colorful strawberry jelly cubes',
      'Generous scoop of rich Vanilla dairy ice cream',
      'Topped with roasted cashew nut crumble'
    ],
    isSignature: false,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.9,
    reviewsCount: 154,
    img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    description: 'A classic Sri Lankan treat: chilled rose syrup milk, basil seeds, colorful jelly cubes, vermicelli, topped with a scoop of vanilla ice cream.'
  },
  {
    id: 'ow-drk-2',
    name: 'Fresh Sri Lankan Woodapple Freeze',
    sinhala: 'දිවුල් ජූස්',
    category: 'drinks',
    price: 550,
    serves: 'Serves 1 Person',
    portionIncludes: [
      'Authentic pure Sri Lankan woodapple pulp',
      'Blended with fresh coconut milk & pure palm jaggery',
      'Crushed ice frappe texture',
      'Pinch of sea salt for flavor depth',
      'Chilled refreshing tropical cooler'
    ],
    isSignature: false,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.8,
    reviewsCount: 71,
    img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    description: 'Organic local woodapple blended with coconut milk, palm treacle, and crushed ice for a revitalizing native refreshment.'
  },
  {
    id: 'ow-drk-3',
    name: 'Traditional Jaggery Watalappan',
    sinhala: 'වටලප්පන්',
    category: 'drinks',
    price: 450,
    serves: 'Serves 1 Person',
    portionIncludes: [
      'Steamed spiced coconut custard cup',
      'Pure organic Kithul jaggery infusion',
      'Fragrant nutmeg, cardamom & cloves spice blend',
      'Roasted cashew nut topping',
      'Chilled traditional Sri Lankan dessert'
    ],
    isSignature: false,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 5.0,
    reviewsCount: 108,
    img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    description: 'Authentic spiced coconut custard pudding made with pure Kithul jaggery, eggs, cardamom, nutmeg, and crowned with roasted cashews.'
  }
];

const DEFAULT_OFFERS = [
  {
    id: 'off-1',
    title: 'Rooftop Twilight Special',
    tag: '10% OFF',
    description: '10% off on all Cheese Kottu varieties between 5 PM and 8 PM daily.',
    code: 'TWILIGHT10',
    active: true
  },
  {
    id: 'off-2',
    title: 'Family Sizzler Weekend',
    tag: '15% OFF',
    description: 'Order any Sizzler or Fried Rice Platter and receive 15% off.',
    code: 'FAMILY15',
    active: true
  },
  {
    id: 'off-3',
    title: 'Free Falooda with Submarine',
    tag: 'FREE DRINK',
    description: 'Order any 12-inch Monster Submarine and receive a complimentary Royal Falooda.',
    code: 'FALFREE',
    active: true
  }
];

const DEFAULT_USERS = [
  {
    id: 'usr-customer-1',
    name: 'Nethum Rathuvithana',
    email: 'nethum@example.com',
    password: 'password123',
    phone: '077 123 4567',
    role: 'customer'
  },
  {
    id: 'usr-admin-1',
    name: 'Ovita Kitchen Manager',
    email: 'manager@ovita.lk',
    password: 'admin',
    phone: '077 277 5132',
    role: 'restaurant'
  }
];

const DEFAULT_SEED_ORDERS = [
  {
    orderId: 'OV-8492',
    userId: 'usr-customer-1',
    customerName: 'Nethum Rathuvithana',
    customerPhone: '077 123 4567',
    items: [
      { id: 'ow-sig-1', name: 'Ovita Special Mixed Fried Rice', price: 1850, quantity: 1 },
      { id: 'ow-sig-2', name: 'Cheese Chicken Kottu Royale', price: 1650, quantity: 1 }
    ],
    itemCount: 2,
    subtotal: 3500,
    packagingFee: 150,
    serviceFee: 175,
    total: 3825,
    paymentMethod: 'PayHere / Card Simulator',
    paymentStatus: 'Paid',
    paymentReference: 'PAY-LK-948194',
    orderStatus: 'Preparing in Kitchen',
    prepTimeMins: 20,
    createdAt: new Date(Date.now() - 6 * 60 * 1000).toISOString(),
    estimatedReadyAt: new Date(Date.now() + 14 * 60 * 1000).toISOString(),
    notes: 'Please add extra chili paste and less spice in kottu.',
    hasChangeRequest: false,
    changeDetails: ''
  }
];
