// Realistic Sample Data for EventX - Kanpur Marketplace

export const KANPUR_LOCALITIES = [
  "Swaroop Nagar",
  "Civil Lines",
  "Kakadeo",
  "Kidwai Nagar",
  "Saket Nagar",
  "Mall Road",
  "Tilak Nagar",
  "Shyam Nagar",
  "Panki",
  "Barra"
];

export const SERVICE_CATEGORIES = [
  { 
    id: "venues", 
    name: "Banquet & Lawns", 
    icon: "Building2", 
    count: 48, 
    startingPrice: "₹45,000", 
    desc: "Luxury halls, manicured green lawns & rooftops",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: "catering", 
    name: "Catering Services", 
    icon: "Utensils", 
    count: 62, 
    startingPrice: "₹450/plate", 
    desc: "Awadhi dum biryani, live chaat & pure veg spreads",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: "decorators", 
    name: "Theme Decorators", 
    icon: "Sparkles", 
    count: 35, 
    startingPrice: "₹20,000", 
    desc: "Floral stage, mandap, LED arches & fairy lighting",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: "photographers", 
    name: "Photography & Reels", 
    icon: "Camera", 
    count: 42, 
    startingPrice: "₹25,000", 
    desc: "Candid portraits, 4K cinematic films & drone shoots",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: "djs", 
    name: "DJ & Sound Systems", 
    icon: "Music", 
    count: 29, 
    startingPrice: "₹12,000", 
    desc: "Concert sound, glass LED dance floor & pyro guns",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: "tent", 
    name: "Tent & Lounge Setup", 
    icon: "Tent", 
    count: 24, 
    startingPrice: "₹28,000", 
    desc: "German hangar tents, sofa lounges & mobile AC towers",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: "makeup", 
    name: "Bridal & Party Makeup", 
    icon: "Palette", 
    count: 38, 
    startingPrice: "₹8,000", 
    desc: "HD airbrush bridal makeup & venue door-step service",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: "entertainment", 
    name: "Anchors & Live Artists", 
    icon: "Mic2", 
    count: 19, 
    startingPrice: "₹10,000", 
    desc: "Event MCs, Punjabi dhol troupe & live musical bands",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
  }
];


export const EVENT_TYPES = [
  { id: "birthday", name: "Birthday Party", avgBudget: "₹35,000 - ₹1,50,000", popularGuests: "30 - 150" },
  { id: "engagement", name: "Ring Ceremony & Engagement", avgBudget: "₹1,00,000 - ₹4,00,000", popularGuests: "100 - 300" },
  { id: "wedding", name: "Wedding & Grand Reception", avgBudget: "₹4,00,000 - ₹25,00,000", popularGuests: "250 - 1500" },
  { id: "anniversary", name: "Anniversary Celebration", avgBudget: "₹50,000 - ₹2,00,000", popularGuests: "50 - 200" },
  { id: "corporate", name: "Corporate Event & Seminar", avgBudget: "₹75,000 - ₹5,00,000", popularGuests: "50 - 500" },
  { id: "babyshower", name: "Baby Shower & Naming Ceremony", avgBudget: "₹30,000 - ₹1,20,000", popularGuests: "30 - 120" }
];

export const VENDORS = [
  {
    id: "v-101",
    name: "The Grand Imperial Banquet & Lawns",
    category: "venues",
    locality: "Swaroop Nagar",
    city: "Kanpur",
    address: "14/110, Near Motijheel Gate, Swaroop Nagar, Kanpur, UP 208002",
    rating: 4.9,
    reviewCount: 142,
    startingPrice: 85000,
    priceUnit: "per day",
    capacityMin: 200,
    capacityMax: 1200,
    verified: true,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["Grand Lawn", "Air Conditioned Banquet", "Valet Parking", "Bridal Rooms"],
    description: "Kanpur's premier luxury celebration venue featuring a 15,000 sq.ft. manicured green lawn and a pillarless AC banquet hall. Perfect for weddings, corporate galas, and lavish engagements.",
    packages: [
      { name: "Hall Only Rental", price: 85000, details: "12 Hours usage, basic lighting, 100 chairs, AC banquet hall" },
      { name: "Lawn + Hall Bundle", price: 140000, details: "24 Hours full venue access, lawn illumination, bridal suite, 300 chairs" }
    ],
    inclusions: [
      "2 Air-conditioned Bridal Dressing Rooms",
      "Centralized AC Banquet Hall (Capacity 500)",
      "Lawn Capacity up to 1200 guests",
      "Dedicated 100+ car valet parking lot",
      "Backup 125 KVA Generator power backup",
      "In-house security guards"
    ],
    exclusions: ["Outside alcohol without permissions", "Firecrackers after 10 PM"],
    cancellationPolicy: "Full refund 30 days prior. 50% refund up to 14 days prior.",
    reviews: [
      { id: "r1", user: "Vikram Malhotra", rating: 5, date: "September 2026", text: "Hosted my sister's wedding reception here in Swaroop Nagar. The lighting and space management were flawless!" },
      { id: "r2", user: "Pooja Gupta", rating: 5, date: "August 2026", text: "Spacious lawn, ample parking on Motijheel road, and super clean bridal suites. Highly recommended." }
    ],
    availableDates: ["2026-10-15", "2026-10-18", "2026-10-22", "2026-11-05", "2026-11-12", "2026-11-20"]
  },
  {
    id: "v-102",
    name: "Royal Heritage Palace & Gardens",
    category: "venues",
    locality: "Civil Lines",
    city: "Kanpur",
    address: "7/45, VIP Road, Civil Lines, Kanpur, UP 208001",
    rating: 4.8,
    reviewCount: 98,
    startingPrice: 120000,
    priceUnit: "per day",
    capacityMin: 300,
    capacityMax: 2000,
    verified: true,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["Heritage Architecture", "Royal Courtyard", "In-house Catering Option"],
    description: "An elegant colonial-style property in the heart of Civil Lines. Famous for royal decor themes, poolside cocktail setups, and grand entry pathways.",
    packages: [
      { name: "Royal Courtyard Package", price: 120000, details: "Lawn & Courtyard access, vintage chandelier decor, full power backup" }
    ],
    inclusions: ["Poolside cocktail deck", "Heritage archway entrance", "3 Deluxe VIP guest rooms included"],
    exclusions: ["DJ music beyond 10:30 PM as per Kanpur guidelines"],
    cancellationPolicy: "Strict non-refundable token, reschedule allowed within 6 months.",
    reviews: [
      { id: "r3", user: "Anand Singhania", rating: 5, date: "July 2026", text: "Truly royal vibes! All guests praised the vintage architecture and spacious green lawn." }
    ],
    availableDates: ["2026-10-20", "2026-10-25", "2026-11-02", "2026-11-15", "2026-11-28"]
  },
  {
    id: "v-103",
    name: "Skyline Rooftop Lounge & Event Venue",
    category: "venues",
    locality: "Mall Road",
    city: "Kanpur",
    address: "Top Floor, Z Square Mall Complex, Mall Road, Kanpur, UP 208001",
    rating: 4.7,
    reviewCount: 76,
    startingPrice: 45000,
    priceUnit: "per event",
    capacityMin: 40,
    capacityMax: 220,
    verified: true,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["Rooftop View", "Modern Cocktail Vibe", "Ideal for Birthdays & Ring Ceremony"],
    description: "Kanpur's top panoramic skyline view venue. Perfect for intimate celebrations, birthday bashes, corporate mixers, and ring ceremonies.",
    packages: [
      { name: "Sunset Party Package", price: 45000, details: "Rooftop lounge access, ambient LED bar lighting, sound system" }
    ],
    inclusions: ["Panoramic view of Kanpur city", "Rooftop canopy shelter", "Integrated Bose sound system"],
    exclusions: ["Strict capacity cap of 220 guests"],
    cancellationPolicy: "Full refund up to 7 days before event date.",
    reviews: [
      { id: "r4", user: "Neha Kapoor", rating: 5, date: "September 2026", text: "Celebrated my 30th birthday here. The night view of Kanpur city was breathtaking!" }
    ],
    availableDates: ["2026-10-14", "2026-10-16", "2026-10-21", "2026-10-30", "2026-11-08"]
  },
  {
    id: "v-104",
    name: "Kanpur Delights Gourmet Catering",
    category: "catering",
    locality: "Saket Nagar",
    city: "Kanpur",
    address: "Plot 88, Block C, Saket Nagar, Kanpur, UP 208022",
    rating: 4.9,
    reviewCount: 215,
    startingPrice: 650,
    priceUnit: "per plate",
    capacityMin: 50,
    capacityMax: 2500,
    verified: true,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["Live Kanpur Chaat Stall", "Awadhi Biryani Special", "Pure Veg & Non-Veg Options"],
    description: "Award-winning catering company in Kanpur specializing in authentic Awadhi delicacies, live Kanpur Thaggu Laddu & Chaat stalls, North Indian buffets, and mocktail bars.",
    packages: [
      { name: "Silver Veg Buffet", price: 650, details: "3 Starters, 4 Main Courses, 2 Dal, Assorted Roti, 3 Desserts, Live Kanpur Chaat counter" },
      { name: "Gold Royal Feast (Veg & Non-Veg)", price: 850, details: "5 Starters, Mutton Awadhi Biryani, Paneer Tikka, Live Pasta Counter, 5 Desserts, Mocktail bar" }
    ],
    inclusions: ["Uniformed professional waitstaff", "Bone china cutlery & brass chafing dishes", "Live live chaat & jalebi counter", "Mineral water bottles"],
    exclusions: ["Table linen decoration extra at ₹2,500"],
    cancellationPolicy: "Free date change up to 10 days prior.",
    reviews: [
      { id: "r5", user: "Rohan Verma", rating: 5, date: "August 2026", text: "The Awadhi Biryani and Matka Kulfi were the highlight of our reception! All 600 guests were raving." }
    ],
    availableDates: ["2026-10-15", "2026-10-19", "2026-10-24", "2026-11-04", "2026-11-18"]
  },
  {
    id: "v-105",
    name: "Shree Annapurna Pure Veg Caterers",
    category: "catering",
    locality: "Swaroop Nagar",
    city: "Kanpur",
    address: "24/4, Near Chatterbox Cafe, Swaroop Nagar, Kanpur, UP 208002",
    rating: 4.9,
    reviewCount: 180,
    startingPrice: 750,
    priceUnit: "per plate",
    capacityMin: 80,
    capacityMax: 1500,
    verified: true,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["100% Pure Veg", "Jain Food Specialist", "Organic Ingredients", "50+ Dessert Items"],
    description: "Kanpur's top rated 100% Pure Vegetarian gourmet catering service. Known for strict hygiene standards, zero-onion-garlic Jain menu options, and royal Indian sweets.",
    packages: [
      { name: "Satvik Gourmet Menu", price: 750, details: "4 Live counters, Rajasthani & Gujarati specials, Kesar Rasmalai, Malpua stall" }
    ],
    inclusions: ["100% Pure Veg kitchen guarantee", "Live Tandoor & Naan counter", "Custom printed menu standees"],
    exclusions: ["Non-vegetarian preparation strictly not handled"],
    cancellationPolicy: "80% refund up to 15 days before event.",
    reviews: [
      { id: "r6", user: "Sunita Agarwal", rating: 5, date: "September 2026", text: "Flawless pure veg catering for my son's engagement in Kanpur. The Live Dosa and Rabri counters were top notch!" }
    ],
    availableDates: ["2026-10-16", "2026-10-23", "2026-11-01", "2026-11-10", "2026-11-22"]
  },
  {
    id: "v-106",
    name: "Floral Elegance & Royal Decorators",
    category: "decorators",
    locality: "Kakadeo",
    city: "Kanpur",
    address: "117/N/52, Near Geeta Nagar Crossing, Kakadeo, Kanpur, UP 208025",
    rating: 4.8,
    reviewCount: 112,
    startingPrice: 35000,
    priceUnit: "per setup",
    capacityMin: 0,
    capacityMax: 3000,
    verified: true,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["Fresh Flower Stage", "Royal Mandap", "LED Entrance Archway", "Selfie Points"],
    description: "Transforming Kanpur celebrations with bespoke floral architecture, mirror mandaps, ethereal pastel mandap designs, and fairy light canopy ceilings.",
    packages: [
      { name: "Classic Engagement Stage", price: 35000, details: "16x10ft floral backdrop, sofa seating, entryway arch, 4 LED uplights" },
      { name: "Grand Wedding Mandap & Passage", price: 75000, details: "Dome floral mandap, 50ft carpet walkway, passage pillars, photobooth" }
    ],
    inclusions: ["Fresh exotic flowers (Orchids, Roses, Carnations)", "Dimmable LED ambient lighting", "On-site decor technician during event"],
    exclusions: ["Artificial generator power (venue must provide)"],
    cancellationPolicy: "Full refund up to 14 days prior.",
    reviews: [
      { id: "r7", user: "Shweta Tripathi", rating: 5, date: "August 2026", text: "The mandap decor was straight out of a Bollywood movie! Beautiful pink hydrangeas and warm fairy lights." }
    ],
    availableDates: ["2026-10-17", "2026-10-26", "2026-11-03", "2026-11-14", "2026-11-25"]
  },
  {
    id: "v-107",
    name: "Kriti Creation Theme Decor",
    category: "decorators",
    locality: "Kidwai Nagar",
    city: "Kanpur",
    address: "Block M, Near Marble Market, Kidwai Nagar, Kanpur, UP 208011",
    rating: 4.7,
    reviewCount: 89,
    startingPrice: 22000,
    priceUnit: "per setup",
    capacityMin: 0,
    capacityMax: 1000,
    verified: true,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["Theme Birthday Setup", "Baby Shower Decor", "Organic Balloon Arches", "Neon Signs"],
    description: "Specialists in theme birthday setups, neon photobooths, pastel balloon archways, ring ceremony stage backdrops, and kids party themes.",
    packages: [
      { name: "Pastel Birthday / Anniversary Package", price: 22000, details: "Custom neon name sign, 8ft ring frame with double balloon arch, cake table" }
    ],
    inclusions: ["Customized neon name light", "Theme balloon arch", "Cake pedestal & lighting"],
    exclusions: ["Fresh flower overload"],
    cancellationPolicy: "Date shift allowed free of charge.",
    reviews: [
      { id: "r8", user: "Meghna Pandey", rating: 5, date: "September 2026", text: "Awesome Cocomelon theme birthday decor in Kidwai Nagar. Very professional team!" }
    ],
    availableDates: ["2026-10-14", "2026-10-18", "2026-10-27", "2026-11-06", "2026-11-19"]
  },
  {
    id: "v-108",
    name: "Cinematic Memories Studio Kanpur",
    category: "photographers",
    locality: "Tilak Nagar",
    city: "Kanpur",
    address: "2A/88, Main Road, Tilak Nagar, Kanpur, UP 208002",
    rating: 4.9,
    reviewCount: 165,
    startingPrice: 40000,
    priceUnit: "per day",
    capacityMin: 0,
    capacityMax: 5000,
    verified: true,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["4K Cinematic Film", "Sony FX6 / FX3 gear", "Drone Aerial Views", "Same Day Teaser Reel"],
    description: "Kanpur's top wedding photography collective. Capturing raw emotional moments with high-end Sony cinema cameras, DJI 4K drone cinematography, and magazine-worthy portraits.",
    packages: [
      { name: "Candid & Cinematic Package", price: 40000, details: "1 Candid Photographer, 1 Cinematic Videographer, 4K Teaser (60 sec), Full Film (20-30 min), 300+ retouched photos" },
      { name: "Grand Wedding Double Crew + Drone", price: 75000, details: "2 Candid Photographers, 2 Cinematographers, DJI 4K Drone Operator, 2 Hardcover Photobooks, Raw files drive" }
    ],
    inclusions: ["Deliverables in custom USB drive & cloud gallery link", "1-minute Instagram Reel delivered within 48 hours", "Full HD color graded master film"],
    exclusions: ["Travel outside Kanpur billed separately at actuals"],
    cancellationPolicy: "Refundable deposit minus 10% processing fee up to 20 days prior.",
    reviews: [
      { id: "r9", user: "Divya & Rahul", rating: 5, date: "July 2026", text: "The teaser reel they created for our sangeet in Kanpur got 50k views on Insta! Absolutely world-class team." }
    ],
    availableDates: ["2026-10-15", "2026-10-21", "2026-10-28", "2026-11-08", "2026-11-21"]
  },
  {
    id: "v-109",
    name: "Kalyan Lens & Frames Studio",
    category: "photographers",
    locality: "Shyam Nagar",
    city: "Kanpur",
    address: "C-14, Bye Pass Road, Shyam Nagar, Kanpur, UP 208015",
    rating: 4.8,
    reviewCount: 74,
    startingPrice: 25000,
    priceUnit: "per day",
    capacityMin: 0,
    capacityMax: 2000,
    verified: true,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["Traditional Photo & Video", "Instant Print Photo Booth", "Pre-Wedding Shoot"],
    description: "Reliable, high quality photography team for family celebrations, birthdays, anniversaries, and budget wedding packages across Kanpur.",
    packages: [
      { name: "Classic Event Coverage", price: 25000, details: "1 Traditional Photographer, 1 HD Videographer, 1 Premium Photo Album (100 pages)" }
    ],
    inclusions: ["Physical album printing included", "All unedited raw photos delivered"],
    exclusions: ["Drone photography extra ₹7,500"],
    cancellationPolicy: "50% refund up to 7 days prior.",
    reviews: [
      { id: "r10", user: "Pradeep Joshi", rating: 5, date: "August 2026", text: "Punctual, friendly, and very reasonable rates for our 25th wedding anniversary." }
    ],
    availableDates: ["2026-10-16", "2026-10-22", "2026-11-04", "2026-11-16", "2026-11-29"]
  },
  {
    id: "v-110",
    name: "Beats & Bass Live DJ & Sound Studio",
    category: "djs",
    locality: "Kakadeo",
    city: "Kanpur",
    address: "Opposite Coaching Mandi, Kakadeo, Kanpur, UP 208025",
    rating: 4.8,
    reviewCount: 95,
    startingPrice: 15000,
    priceUnit: "per event",
    capacityMin: 0,
    capacityMax: 1500,
    verified: true,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["JBL VRX Line Array", "3D Glass LED Dance Floor", "Cold Pyro & CO2 Fog Cannons", "Bollywood & Commercial DJ"],
    description: "High-energy DJ studio in Kanpur equipped with concert-grade JBL VRX sound, 16x16ft glass LED dance floor, moving head beam lights, and experienced Bollywood/EDM DJs.",
    packages: [
      { name: "Sangeet DJ + Basic Sound", price: 15000, details: "Dual 15-inch JBL speakers, DJ console, LED wash lights, wireless mics" },
      { name: "Grand Concert DJ Setup + LED Floor", price: 32000, details: "JBL Line Array setup, 16x16ft Glass LED Dance Floor, 4 Cold Pyro Guns, Heavy Fog Machine" }
    ],
    inclusions: ["Dedicated DJ console technician", "4 Wireless Shure microphones for announcements", "Custom music playlist curation"],
    exclusions: ["Gen-Set diesel extra if venue lacks power setup"],
    cancellationPolicy: "Free date rescheduling up to 7 days before.",
    reviews: [
      { id: "r11", user: "Amit Sengar", rating: 5, date: "September 2026", text: "The LED dance floor and cold pyros made our sangeet night unforgettable! The DJ kept the crowd dancing till midnight." }
    ],
    availableDates: ["2026-10-15", "2026-10-20", "2026-10-29", "2026-11-09", "2026-11-23"]
  },
  {
    id: "v-111",
    name: "Punjab Dhol & Nashik Band Troupe",
    category: "entertainment",
    locality: "Panki",
    city: "Kanpur",
    address: "Station Road, Panki Industrial Area, Kanpur, UP 208020",
    rating: 4.9,
    reviewCount: 130,
    startingPrice: 12000,
    priceUnit: "per event",
    capacityMin: 0,
    capacityMax: 3000,
    verified: true,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["Authentic Punjabi Dhol", "Nashik Dhol Pathak", "Groom Baraat Band", "Rajasthani Folk Dancers"],
    description: "High-octane traditional dhol players and brass band troupe in Kanpur. Bringing infectious energy for Baraat entries, Haldi ceremonies, and festival events.",
    packages: [
      { name: "4-Dhol Baraat Entry", price: 12000, details: "4 Master Dhol players in traditional Punjabi attire, 2 hours non-stop" },
      { name: "Grand Brass Band + 8 Dhol Troupe", price: 28000, details: "12 Band musicians, 8 Dhol players, Light trolley, Fancy costumes" }
    ],
    inclusions: ["Authentic traditional costumes", "High-energy non-stop performance for 2.5 hours"],
    exclusions: ["Extending beyond 3 hours requires hourly top-up"],
    cancellationPolicy: "100% refund up to 10 days prior.",
    reviews: [
      { id: "r12", user: "Gaurav Bhalla", rating: 5, date: "August 2026", text: "The dhol beats for my brother's baraat in Kanpur were electrifying! Whole street started dancing." }
    ],
    availableDates: ["2026-10-17", "2026-10-24", "2026-11-05", "2026-11-17", "2026-11-30"]
  },
  {
    id: "v-112",
    name: "Shree Ram Waterproof Tents & German Hangar",
    category: "tent",
    locality: "Barra",
    city: "Kanpur",
    address: "Block World 2, Highway Side, Barra, Kanpur, UP 208027",
    rating: 4.7,
    reviewCount: 62,
    startingPrice: 28000,
    priceUnit: "per event",
    capacityMin: 100,
    capacityMax: 4000,
    verified: true,
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["German Hangar Structure", "Air Cooled Pandal", "Luxury Velvet Sofas", "Waterproof Setup"],
    description: "Kanpur's premier tenting and temporary event structure provider. Offering German aluminum hangars, waterproof monsoon tents, VIP lounge furniture, and mobile AC towers.",
    packages: [
      { name: "5000 sq.ft. Waterproof Pandal", price: 28000, details: "Monsoon proof canopy structure, 200 plastic cushioned chairs, 20 round tables, carpeting" },
      { name: "AC German Hangar Luxury Lounge", price: 95000, details: "Aluminum truss hangar, 4 AC tower units, 30 Chesterfield leather sofas, wooden flooring" }
    ],
    inclusions: ["Full installation & teardown labor", "Fire retardant canopy fabric", "Red carpet walkway"],
    exclusions: ["Local civic permissions if setup on public ground"],
    cancellationPolicy: "70% refund up to 14 days prior.",
    reviews: [
      { id: "r13", user: "Deepak Mishra", rating: 5, date: "September 2026", text: "Saved our outdoor function during unexpected rain! The German hangar was 100% leak proof." }
    ],
    availableDates: ["2026-10-18", "2026-10-25", "2026-11-07", "2026-11-19", "2026-11-27"]
  },
  {
    id: "v-113",
    name: "Glamour by Rashmi Bridal Makeup Studio",
    category: "makeup",
    locality: "Swaroop Nagar",
    city: "Kanpur",
    address: "7/18, Near Standard Bakery, Swaroop Nagar, Kanpur, UP 208002",
    rating: 4.9,
    reviewCount: 154,
    startingPrice: 8000,
    priceUnit: "per look",
    capacityMin: 0,
    capacityMax: 50,
    verified: true,
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
    ],
    tags: ["HD & Airbrush Bridal", "MAC & NARS Certified", "Saree Draping Included", "Venues On-site Service"],
    description: "Celebrity-certified bridal makeup artist studio in Swaroop Nagar. Known for subtle glowy skin, HD airbrush finish, intricate hair styling, and doorstep venue services.",
    packages: [
      { name: "Party Guest Makeup Package", price: 8000, details: "HD Party makeup, hair styling, eyelashes, saree/dupatta draping" },
      { name: "Signature HD Airbrush Bridal Package", price: 18000, details: "Airbrush HD makeup, premium lashes, hair extensions, trial session, touchup kit" }
    ],
    inclusions: ["All premium international makeup brands (MAC, NARS, Huda Beauty)", "Eyelashes & hair styling included", "On-location venue travel in Kanpur"],
    exclusions: ["Additional family members must be pre-booked"],
    cancellationPolicy: "Full refund 15 days prior.",
    reviews: [
      { id: "r14", user: "Simran Tandon", rating: 5, date: "August 2026", text: "Rashmi did my bridal makeup for my wedding in Kanpur. My makeup stayed intact for 14 hours without any cakey feel!" }
    ],
    availableDates: ["2026-10-15", "2026-10-19", "2026-10-31", "2026-11-11", "2026-11-24"]
  }
];

// Demo Customer Bookings for Dashboard & Confirmation
export const INITIAL_BOOKINGS = [
  {
    id: "EX-KNP-2026-8942",
    eventName: "Rohan & Ananya's Engagement Ceremony",
    eventType: "engagement",
    city: "Kanpur",
    venueAddress: "The Grand Imperial Banquet, Swaroop Nagar, Kanpur",
    eventDate: "2026-11-15",
    guestCount: 200,
    budget: 250000,
    status: "Confirmed",
    tokenPaid: 50000,
    totalCost: 245000,
    createdAt: "2026-10-02",
    vendors: [
      { id: "v-101", name: "The Grand Imperial Banquet & Lawns", category: "Banquet Venue", price: 85000, status: "Confirmed" },
      { id: "v-104", name: "Kanpur Delights Gourmet Catering", category: "Catering (200 plates x ₹650)", price: 130000, status: "Confirmed" },
      { id: "v-107", name: "Kriti Creation Theme Decor", category: "Engagement Decor", price: 220000, status: "Confirmed" },
      { id: "v-110", name: "Beats & Bass Live DJ & Sound Studio", category: "DJ & Sound", price: 10000, status: "Confirmed" }
    ],
    timeline: [
      { date: "2026-10-02", title: "Booking Placed on EventX", done: true },
      { date: "2026-10-15", title: "Menu Sampling with Kanpur Delights", done: false },
      { date: "2026-11-01", title: "Stage Decor Walkthrough", done: false },
      { date: "2026-11-15", title: "Event Execution Date", done: false }
    ]
  }
];

// Vendor Dashboard Mock Data
export const INITIAL_VENDOR_LEADS = [
  {
    id: "LEAD-901",
    customerName: "Sanjay Dixit",
    phone: "+91 98390 XXXXX",
    email: "sanjay.dixit@gmail.com",
    eventType: "Wedding Reception",
    eventDate: "2026-11-20",
    guestCount: 450,
    locality: "Civil Lines, Kanpur",
    budgetRange: "₹2,00,000 - ₹3,50,000",
    status: "New Inquiry",
    requestedService: "Veg Buffet Catering & Live Chaat",
    createdAt: "2 Hours ago"
  },
  {
    id: "LEAD-902",
    customerName: "Priyanka Saxena",
    phone: "+91 94150 XXXXX",
    email: "priyanka.saxena@hotmail.com",
    eventType: "Birthday Party (1st Birthday)",
    eventDate: "2026-10-28",
    guestCount: 80,
    locality: "Swaroop Nagar, Kanpur",
    budgetRange: "₹45,000",
    status: "Quote Sent",
    requestedService: "Theme Balloon Decor & Snack Buffet",
    createdAt: "1 Day ago"
  },
  {
    id: "LEAD-903",
    customerName: "Dr. Alok Srivastava",
    phone: "+91 97930 XXXXX",
    email: "dr.alok@kanpurmed.org",
    eventType: "Anniversary Celebration",
    eventDate: "2026-11-05",
    guestCount: 150,
    locality: "Kakadeo, Kanpur",
    budgetRange: "₹1,20,000",
    status: "Confirmed",
    requestedService: "Candid Photography & DJ Sound",
    createdAt: "3 Days ago"
  }
];
