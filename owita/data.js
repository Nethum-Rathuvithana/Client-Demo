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
  openingHours: 'Open Daily: 10:30 AM – 11:00 PM',
  currency: 'LKR',
  serviceFeePercent: 5,
  packagingFeeLKR: 150
};

// Menu Items with authentic Sri Lankan family restaurant dishes & realistic LKR prices
const DEFAULT_MENU_ITEMS = [
  // --- SIGNATURE COLLECTION (FEATURED ON HOMEPAGE) ---
  {
    id: 'ow-sig-1',
    name: 'Ovita Special Mixed Fried Rice',
    sinhala: 'ඕවිට ස්පෙෂල් මික්ස්ඩ් රයිස්',
    category: 'rice',
    price: 1850,
    isSignature: true,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.9,
    reviewsCount: 142,
    img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    description: 'Fragrant basmati wok-tossed with tiger prawns, tender chicken, chicken sausage, fried egg, wok greens, and our house-made chili paste.'
  },
  {
    id: 'ow-sig-2',
    name: 'Cheese Chicken Kottu Royale',
    sinhala: 'චීස් චිකන් කොත්තු රෝයල්',
    category: 'kottu',
    price: 1650,
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
    isSignature: true,
    isOffer: false,
    offerDiscountPercent: 0,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.9,
    reviewsCount: 220,
    img: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    description: 'Fresh southern coast ocean cuttlefish rings coated in seasoned batter, deep fried till crisp, and tossed with farm butter, capsicum, and dry chili flakes.'
  },
  {
    id: 'ow-sig-4',
    name: 'Ovita Mixed Grill Sizzler Platter',
    sinhala: 'මික්ස්ඩ් ග්‍රිල් ප්ලැටර්',
    category: 'grill',
    price: 3600,
    isSignature: true,
    isOffer: true,
    offerDiscountPercent: 15,
    inStock: true,
    prepBaseMins: 10,
    rating: 4.8,
    reviewsCount: 86,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'Sizzling hot plate loaded with garlic butter prawns, grilled chicken breast, beef medallion, chicken sausages, grilled vegetables, and house BBQ pepper sauce.'
  },

  // --- RICE & BIRYANI ---
  {
    id: 'ow-rice-1',
    name: 'Kalutara Seafood Nasi Goreng',
    category: 'rice',
    price: 1950,
    isSignature: false,
    isOffer: false,
    inStock: true,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    description: 'Authentic Indonesian-style spicy fried rice with calamari, prawns, chicken satay skewer, sunny-side egg, and crisp prawn crackers.'
  },
  {
    id: 'ow-rice-2',
    name: 'Hyderabadi Chicken Dum Biryani',
    category: 'rice',
    price: 1750,
    isSignature: false,
    isOffer: false,
    inStock: true,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    description: 'Long grain aged basmati layered with saffron, traditional whole spices, and succulent marinated chicken piece. Served with mint raita and boiled egg.'
  },
  {
    id: 'ow-rice-3',
    name: 'Vegetable Mongolian Wok Rice',
    category: 'rice',
    price: 1350,
    isSignature: false,
    isOffer: false,
    inStock: true,
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    description: 'Wok fried rice with sweet corn, baby mushrooms, bell peppers, cashews, and Mongolian sweet-savory wok glaze.'
  },

  // --- KOTTU SPECIALTIES ---
  {
    id: 'ow-kottu-1',
    name: 'Seafood Dolphin Kottu (Large)',
    category: 'kottu',
    price: 2200,
    isSignature: false,
    isOffer: false,
    inStock: true,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    description: 'Cube cut godamba paratha stir-fried with seer fish cubes, prawns, cuttlefish, green chilies, and creamy curry sauce.'
  },
  {
    id: 'ow-kottu-2',
    name: 'Roast Paan Beef Kottu',
    category: 'kottu',
    price: 1800,
    isSignature: false,
    isOffer: false,
    inStock: true,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    description: 'Crushed oven-crisped Sri Lankan roast bread tossed with slow-braised pepper beef, onions, egg, and spicy coconut gravy.'
  },
  {
    id: 'ow-kottu-3',
    name: 'Vegetable & Egg Palandi Kottu',
    category: 'kottu',
    price: 1200,
    isSignature: false,
    isOffer: false,
    inStock: true,
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    description: 'Light and aromatic vegetarian kottu with shredded carrots, cabbage, leeks, double farm eggs, and mild spices.'
  },

  // --- SEAFOOD & DEVILLED ---
  {
    id: 'ow-sea-1',
    name: 'Negombo Lagoon Devilled Jumbo Prawns',
    category: 'seafood',
    price: 2500,
    isSignature: false,
    isOffer: false,
    inStock: true,
    rating: 5.0,
    img: 'https://images.unsplash.com/photo-1559737558-245ff2317926?auto=format&fit=crop&w=800&q=80',
    description: 'Plump coastal prawns flash-sautéed in fiery sweet-tangy devilled sauce with crunchy capsicum, onions, and tomato wedges.'
  },
  {
    id: 'ow-sea-2',
    name: 'Crispy Batter Fried Seer Fish',
    category: 'seafood',
    price: 2100,
    isSignature: false,
    isOffer: false,
    inStock: true,
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    description: 'Fresh local seer fish steaks marinated in lime and black pepper, battered golden, served with homemade tartar sauce and lemon.'
  },

  // --- CHICKEN, BEEF & WOK ---
  {
    id: 'ow-meat-1',
    name: 'Dragon Crispy Chicken',
    category: 'meat',
    price: 1700,
    isSignature: false,
    isOffer: false,
    inStock: true,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    description: 'Crisp chicken strips glazed in red chili paste, honey, soy, toasted cashews, and scallions.'
  },
  {
    id: 'ow-meat-2',
    name: 'Black Pepper Szechuan Beef',
    category: 'meat',
    price: 1950,
    isSignature: false,
    isOffer: false,
    inStock: true,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'Thinly sliced tender beef wok-seared with crushed Kalutara black peppercorns, bell peppers, and oyster sauce.'
  },

  // --- BURGERS & SUBMARINES ---
  {
    id: 'ow-west-1',
    name: 'Ovita Monster Crispy Chicken Submarine',
    category: 'grill',
    price: 1600,
    isSignature: false,
    isOffer: false,
    inStock: true,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    description: '10-inch warm French baguette packed with crispy panko chicken, melted cheese slice, lettuce, tomato, and garlic mayo.'
  },
  {
    id: 'ow-west-2',
    name: 'Double Gourmet Beef Burger with Fries',
    category: 'grill',
    price: 1750,
    isSignature: false,
    isOffer: false,
    inStock: true,
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    description: 'Two smashed beef patties, aged cheddar, caramelized onions, dill pickles, and house special relish on toasted brioche.'
  },

  // --- BEVERAGES & DESSERTS ---
  {
    id: 'ow-bev-1',
    name: 'Ovita Special Royal Falooda',
    category: 'drinks',
    price: 650,
    isSignature: false,
    isOffer: false,
    inStock: true,
    rating: 5.0,
    img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    description: 'Chilled rose syrup milk with kasakasa basil seeds, rose jelly, vanilla ice cream scoop, and cashew nuts.'
  },
  {
    id: 'ow-bev-2',
    name: 'Fresh Sri Lankan Woodapple Freeze',
    category: 'drinks',
    price: 550,
    isSignature: false,
    isOffer: false,
    inStock: true,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    description: 'Blended fresh sweet woodapple pulp with coconut milk, natural kitul treacle, and crushed ice.'
  },
  {
    id: 'ow-bev-3',
    name: 'Traditional Jaggery Watalappan',
    category: 'drinks',
    price: 450,
    isSignature: false,
    isOffer: false,
    inStock: true,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    description: 'Steamed coconut custard with pure kitul jaggery, cardamom, nutmeg, and roasted cashew garnish.'
  }
];

// Active Promotional Offers Managed by Admin
const DEFAULT_OFFERS = [
  {
    id: 'off-1',
    title: 'Weekend Family Feast Combo',
    code: 'OVITA15',
    discountPercent: 15,
    minSpend: 4000,
    description: 'Get 15% OFF on all orders above LKR 4,000 every Friday, Saturday & Sunday.',
    active: true
  },
  {
    id: 'off-2',
    title: 'Free Delivery to Nagoda & Kalutara South',
    code: 'FREEDEL',
    discountPercent: 0,
    freeDelivery: true,
    minSpend: 2500,
    description: 'Complimentary express delivery on orders over LKR 2,500 within a 5km radius.',
    active: true
  },
  {
    id: 'off-3',
    title: 'Kottu Festival Week',
    code: 'KOTTU10',
    discountPercent: 10,
    minSpend: 1500,
    description: '10% discount on all Cheese, Dolphin & Roast Paan Kottu selections.',
    active: true
  }
];

// Initial Seed Users (Customer & Admin)
const DEFAULT_USERS = [
  {
    id: 'usr-customer-1',
    name: 'Nethu Senanayake',
    email: 'customer@ovita.lk',
    phone: '077 123 4567',
    password: 'password123',
    role: 'customer',
    address: 'No. 45, Temple Road, Nagoda, Kalutara South'
  },
  {
    id: 'usr-admin-1',
    name: 'Ovita Kitchen Manager',
    email: 'admin@ovita.lk',
    phone: '077 277 5132',
    password: 'adminovita2026',
    role: 'admin',
    address: 'Nagoda Junction, Kalutara South'
  }
];

// Initial Seed Orders for Instant Demonstration
const DEFAULT_SEED_ORDERS = [
  {
    orderId: 'OV-8941',
    userId: 'usr-customer-1',
    customerName: 'Nethu Senanayake',
    customerPhone: '077 123 4567',
    customerEmail: 'customer@ovita.lk',
    pickupAddress: 'Pickup at Counter — Nagoda Junction, Kalutara South',
    items: [
      { id: 'ow-sig-1', name: 'Ovita Special Mixed Fried Rice', price: 1850, quantity: 1, notes: 'Less spicy' },
      { id: 'ow-sig-2', name: 'Cheese Chicken Kottu Royale', price: 1650, quantity: 1, notes: 'Extra cheese' }
    ],
    itemCount: 2,
    subtotal: 3500,
    serviceFee: 175,
    packagingFee: 150,
    discountAmount: 0,
    total: 3825,
    paymentStatus: 'Paid',
    paymentMethod: 'Credit / Debit Card (Online)',
    paymentReference: 'PAYHERE-TXN-849120',
    orderStatus: 'In Kitchen',
    createdAt: Date.now() - (6 * 60 * 1000),
    prepTimeMins: 20,
    estimatedReadyAt: Date.now() + (14 * 60 * 1000),
    restaurantConfirmed: true,
    changeRequest: null,
    notes: 'Please pack chili paste in extra container.'
  }
];
