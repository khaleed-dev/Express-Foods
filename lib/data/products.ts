import type { Product, ProductCategory } from "@/lib/types";

export const products: Product[] = [
  // ===========================
  // CITRUS
  // ===========================
  {
    slug: "oranges",
    name: "Oranges",
    category: "citrus",
    tagline: "Navel and Valencia varieties, year-round supply",
    description:
      "Egyptian navel and Valencia oranges grown in the fertile Nile Delta. Rich in juice content and natural sweetness, our oranges meet the strictest European retail standards. Available in multiple calibers for wholesale, food service, and juice processing.",
    image: "/images/products/Oranges.png",
    season: "November - May",
    packTypes: ["Carton", "Open Top", "Telescopic"],
    packagingOptions: ["8 kg carton", "10 kg carton", "15 kg open top"],
    calibers: ["48-56", "60-64", "72-80", "88-100", "105-113"],
    shelfLife: "4-6 weeks",
    storageTemp: "3-7 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P.", "BRCGS", "FDA"],
    targetMarkets: ["EU", "UK", "Middle East", "Asia"],
    specs: [
      { label: "Varieties", value: "Navel, Valencia, Blood Orange" },
      { label: "Brix", value: "11-14" },
      { label: "Caliber range", value: "48-113" },
      { label: "Season", value: "November - May" },
      { label: "Shelf life", value: "4-6 weeks cold stored" },
      { label: "Storage temp", value: "3-7 C" },
    ],
    faq: [
      {
        question: "What orange varieties do you export?",
        answer:
          "We export Navel (Washington, Cara Cara), Valencia, and Blood Oranges. Navel is our flagship from November through March, while Valencia runs from March to May for juice-grade supply.",
      },
      {
        question: "What calibers are available?",
        answer:
          "We offer calibers from 48 to 113, packed to your specification. The most popular export calibers are 60-64 and 72-80 for European retail.",
      },
      {
        question: "Can you supply for juice processing?",
        answer:
          "Yes. Our Valencia oranges are ideal for NFC juice with a Brix of 11-14. We also supply processing-grade fruit at competitive pricing for juice manufacturers.",
      },
    ],
  },
  {
    slug: "mandarin-oranges",
    name: "Mandarin Oranges",
    category: "citrus",
    tagline: "Easy-peel mandarins with intense flavor",
    description:
      "Sweet, easy-peel Egyptian mandarins prized by European and Asian importers. Our Murcott, Clementine, and Fremont varieties deliver consistent quality and excellent shelf life. Every shipment is precooled and inspected before loading.",
    image: "/images/products/Mandarin-Oranges.png",
    season: "November - March",
    packTypes: ["Carton", "Flow Pack", "Girsack"],
    packagingOptions: ["5 kg carton", "10 kg carton", "Girsack 1 kg"],
    calibers: ["1", "2", "3", "4", "5"],
    shelfLife: "3-4 weeks",
    storageTemp: "4-8 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P.", "BRCGS"],
    targetMarkets: ["EU", "UK", "Russia", "Asia"],
    specs: [
      { label: "Varieties", value: "Murcott, Clementine, Fremont" },
      { label: "Brix", value: "12-15" },
      { label: "Caliber range", value: "1-5" },
      { label: "Season", value: "November - March" },
      { label: "Shelf life", value: "3-4 weeks cold stored" },
      { label: "Storage temp", value: "4-8 C" },
    ],
    faq: [
      {
        question: "Which mandarin varieties perform best for retail?",
        answer:
          "Clementines are most popular for European retail due to their seedless profile and bright color. Murcott is preferred in Asian markets for its intense sweetness.",
      },
      {
        question: "Do you offer branded packaging?",
        answer:
          "Yes. We supply private-label packaging including printed cartons, stickered fruit, and branded girsacks. Minimum order applies for custom print runs.",
      },
    ],
  },
  {
    slug: "lemon",
    name: "Lemon",
    category: "citrus",
    tagline: "High-juice lemons with long shelf life",
    description:
      "Egyptian Eureka and Adalia lemons with excellent juice content and vibrant yellow skin. Grown in controlled conditions for consistent sizing and low seed count. Ideal for fresh market, food service, and beverage manufacturing.",
    image: "/images/products/Lemon.png",
    season: "October - April",
    packTypes: ["Carton", "Open Top", "Mesh Bag"],
    packagingOptions: ["5 kg carton", "10 kg carton", "15 kg open top"],
    calibers: ["3", "4", "5"],
    shelfLife: "4-6 weeks",
    storageTemp: "8-12 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P."],
    targetMarkets: ["EU", "UK", "Middle East", "Gulf States"],
    specs: [
      { label: "Varieties", value: "Eureka, Adalia" },
      { label: "Juice content", value: "30-38%" },
      { label: "Caliber range", value: "3-5" },
      { label: "Season", value: "October - April" },
      { label: "Shelf life", value: "4-6 weeks cold stored" },
      { label: "Storage temp", value: "8-12 C" },
    ],
    faq: [
      {
        question: "What is the juice content of your lemons?",
        answer:
          "Our lemons average 30-38% juice content, well above the minimum threshold for Grade 1 European import standards.",
      },
      {
        question: "Can you supply lemons year-round?",
        answer:
          "Primary season runs October through April. Off-season supply may be available from controlled-atmosphere storage — contact us for availability.",
      },
    ],
  },
  {
    slug: "grapefruit",
    name: "Grapefruit",
    category: "citrus",
    tagline: "Star Ruby and Marsh varieties for premium markets",
    description:
      "Egyptian grapefruit in Star Ruby and Marsh varieties, known for deep color and balanced sweetness. Packed in ventilated cartons for maximum freshness during transit. A staple for European breakfast markets and juice processors.",
    image: "/images/products/Grapefruit.png",
    season: "November - April",
    packTypes: ["Carton", "Open Top"],
    packagingOptions: ["10 kg carton", "15 kg open top", "17 kg carton"],
    calibers: ["27", "32", "36", "40", "45"],
    shelfLife: "4-6 weeks",
    storageTemp: "8-12 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P.", "FDA"],
    targetMarkets: ["EU", "UK", "North America", "Asia"],
    specs: [
      { label: "Varieties", value: "Star Ruby, Marsh" },
      { label: "Brix", value: "9-12" },
      { label: "Caliber range", value: "27-45" },
      { label: "Season", value: "November - April" },
      { label: "Shelf life", value: "4-6 weeks cold stored" },
      { label: "Storage temp", value: "8-12 C" },
    ],
    faq: [
      {
        question: "What makes Egyptian grapefruit different?",
        answer:
          "Egyptian grapefruit benefits from the Nile Delta's warm days and cool nights, producing fruit with higher sugar-acid balance than many competing origins. Star Ruby has deep red flesh color.",
      },
      {
        question: "Do you supply to North America?",
        answer:
          "Yes. We hold FDA registration and can supply USDA-compliant grapefruit. Contact us for phytosanitary documentation and shipping schedules to US and Canadian ports.",
      },
    ],
  },

  // ===========================
  // FRESH FRUITS
  // ===========================
  {
    slug: "mango",
    name: "Mango",
    category: "fresh-fruits",
    tagline: "Premium Egyptian mango — Keitt, Kent, and local varieties",
    description:
      "Egyptian mangoes are celebrated for their fiber-free flesh and intense tropical sweetness. We export Keitt, Kent, and selected local varieties with hot water treatment and vapor heat treatment where required. Available fresh and IQF frozen.",
    image: "/images/products/Mango.png",
    season: "July - October",
    packTypes: ["Carton", "Telescopic"],
    packagingOptions: ["4 kg carton", "6 kg carton", "7 kg telescopic"],
    calibers: ["6", "7", "8", "9", "10", "12"],
    shelfLife: "2-3 weeks",
    storageTemp: "10-13 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P.", "BRCGS"],
    targetMarkets: ["EU", "UK", "Middle East", "Gulf States"],
    alsoAvailableFrozen: true,
    specs: [
      { label: "Varieties", value: "Keitt, Kent, Ewais, Zebda" },
      { label: "Brix", value: "14-18" },
      { label: "Caliber range", value: "6-12 per carton" },
      { label: "Season", value: "July - October" },
      { label: "Shelf life", value: "2-3 weeks cold stored" },
      { label: "Storage temp", value: "10-13 C" },
    ],
    faq: [
      {
        question: "Which mango variety is best for European retail?",
        answer:
          "Keitt and Kent are the most popular for European markets due to their large size, vibrant color, and fiber-free flesh. They also have excellent shelf life compared to local varieties.",
      },
      {
        question: "Is hot water treatment available?",
        answer:
          "Yes. We provide certified hot water treatment (HWT) as required by EU and US import regulations. Treatment is performed at our packhouse under phytosanitary supervision.",
      },
    ],
  },
  {
    slug: "strawberries",
    name: "Strawberries",
    category: "fresh-fruits",
    tagline: "Festival and Fortuna — Egypt's winter strawberry",
    description:
      "Egypt is one of the world's top strawberry exporters, harvesting from December through April when European supply is limited. Our Festival and Fortuna berries are hand-picked, precooled within hours, and shipped by air or sea to your cold chain.",
    image: "/images/products/Strawberries.png",
    season: "December - April",
    packTypes: ["Punnet", "Clamshell", "Bulk"],
    packagingOptions: ["250 g punnet", "400 g clamshell", "2.5 kg flat"],
    shelfLife: "7-10 days",
    storageTemp: "0-2 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P.", "BRCGS"],
    targetMarkets: ["EU", "UK", "Gulf States"],
    alsoAvailableFrozen: true,
    specs: [
      { label: "Varieties", value: "Festival, Fortuna, Florida" },
      { label: "Brix", value: "8-12" },
      { label: "Pack sizes", value: "250 g, 400 g, 2.5 kg" },
      { label: "Season", value: "December - April" },
      { label: "Shelf life", value: "7-10 days" },
      { label: "Storage temp", value: "0-2 C" },
    ],
    faq: [
      {
        question: "How do you ensure freshness during transit?",
        answer:
          "Berries are precooled to 2 C within 2 hours of harvest, palletized in cold rooms, and shipped in reefer containers at 0-2 C. For premium programs, we offer air freight with 24-48 hour delivery to European hubs.",
      },
      {
        question: "What packaging formats are available?",
        answer:
          "We offer 250 g and 400 g consumer punnets, 2.5 kg flats for food service, and bulk bins for processing. Custom branded packaging is available with advance notice.",
      },
    ],
  },
  {
    slug: "grapes",
    name: "Grapes",
    category: "fresh-fruits",
    tagline: "Table grapes — seedless and seeded for global retail",
    description:
      "Egyptian table grapes in premium seedless and seeded varieties, harvested from May through September. Our vineyards in Upper Egypt produce consistent caliber, color, and sweetness that meets European supermarket specifications.",
    image: "/images/products/Grapes.png",
    season: "May - September",
    packTypes: ["Carton", "Punnet", "Flow Pack"],
    packagingOptions: ["4.5 kg carton", "500 g punnet", "8 kg open top"],
    shelfLife: "3-5 weeks",
    storageTemp: "0-2 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P.", "BRCGS"],
    targetMarkets: ["EU", "UK", "Asia", "India"],
    specs: [
      { label: "Varieties", value: "Flame Seedless, Crimson, Superior, Red Globe" },
      { label: "Brix", value: "16-20" },
      { label: "Berry size", value: "18-26 mm" },
      { label: "Season", value: "May - September" },
      { label: "Shelf life", value: "3-5 weeks cold stored" },
      { label: "Storage temp", value: "0-2 C" },
    ],
    faq: [
      {
        question: "Which seedless varieties do you grow?",
        answer:
          "We export Flame Seedless, Superior Seedless, and Crimson Seedless. All are grown under net houses with controlled irrigation for consistent berry size and color.",
      },
      {
        question: "Do you use SO2 pads?",
        answer:
          "Yes. All export grapes are packed with dual-release SO2 pads for optimal shelf life. We follow EU MRL limits and provide residue analysis certificates with every shipment.",
      },
    ],
  },
  {
    slug: "guava",
    name: "Guava",
    category: "fresh-fruits",
    tagline: "Aromatic Egyptian guava — white and pink flesh",
    description:
      "Fragrant Egyptian guavas with creamy texture and high vitamin C content. Our white and pink-fleshed varieties are hand-sorted, waxed, and packed for long-distance transit. Popular in Middle Eastern and Asian fresh fruit markets.",
    image: "/images/products/Guava.png",
    season: "September - January",
    packTypes: ["Carton", "Telescopic"],
    packagingOptions: ["3.5 kg carton", "5 kg carton"],
    shelfLife: "2-3 weeks",
    storageTemp: "8-10 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P."],
    targetMarkets: ["Middle East", "Gulf States", "Asia"],
    specs: [
      { label: "Varieties", value: "White, Pink (Ruby)" },
      { label: "Brix", value: "8-12" },
      { label: "Weight", value: "150-350 g per fruit" },
      { label: "Season", value: "September - January" },
      { label: "Shelf life", value: "2-3 weeks cold stored" },
      { label: "Storage temp", value: "8-10 C" },
    ],
    faq: [
      {
        question: "Which markets prefer Egyptian guava?",
        answer:
          "The Gulf States and wider Middle East are our primary guava markets. Growing demand is also seen in Southeast Asian markets where guava is a staple fruit.",
      },
    ],
  },
  {
    slug: "pomegranate",
    name: "Pomegranate",
    category: "fresh-fruits",
    tagline: "Wonderful variety — deep color, high juice",
    description:
      "Egyptian Wonderful pomegranates with deep crimson arils and excellent juice yield. Harvested in Upper Egypt from September through November, our pomegranates are sourced from GLOBALG.A.P. certified orchards and packed for sea freight or air cargo.",
    image: "/images/products/Pomegranate.png",
    season: "September - November",
    packTypes: ["Carton", "Open Top"],
    packagingOptions: ["3.5 kg carton", "5 kg carton"],
    calibers: ["8", "10", "12", "14"],
    shelfLife: "8-12 weeks",
    storageTemp: "5-7 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P.", "BRCGS"],
    targetMarkets: ["EU", "UK", "Middle East", "Asia"],
    alsoAvailableFrozen: true,
    specs: [
      { label: "Varieties", value: "Wonderful, Acco, Hershkovitz" },
      { label: "Brix", value: "15-18" },
      { label: "Caliber", value: "8-14 per carton" },
      { label: "Season", value: "September - November" },
      { label: "Shelf life", value: "8-12 weeks cold stored" },
      { label: "Storage temp", value: "5-7 C" },
    ],
    faq: [
      {
        question: "Do you export pomegranate arils?",
        answer:
          "Yes. We offer IQF pomegranate seeds (arils) as a separate product line for food manufacturers and food service. Fresh whole fruit is also available during season.",
      },
    ],
  },
  {
    slug: "watermelon",
    name: "Watermelon",
    category: "fresh-fruits",
    tagline: "Seedless and seeded — spring and summer supply",
    description:
      "Egyptian watermelons grown in the warm Nile Valley climate, producing sweet, crisp fruit from March through August. We supply both seedless and seeded varieties in multiple size ranges for retail and food service distribution.",
    image: "/images/products/Watermelon.png",
    season: "March - August",
    packTypes: ["Bulk Bin", "Palletized"],
    packagingOptions: ["Bulk (palletized)", "Individual sticker/label"],
    shelfLife: "2-3 weeks",
    storageTemp: "10-15 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P."],
    targetMarkets: ["EU", "Middle East", "Gulf States"],
    specs: [
      { label: "Varieties", value: "Seedless Crimson, Seeded Crimson" },
      { label: "Brix", value: "10-13" },
      { label: "Weight range", value: "4-12 kg" },
      { label: "Season", value: "March - August" },
      { label: "Shelf life", value: "2-3 weeks" },
      { label: "Storage temp", value: "10-15 C" },
    ],
    faq: [
      {
        question: "What size watermelons do you export?",
        answer:
          "We offer 4-6 kg mini watermelons for retail and 8-12 kg standard sizes for food service. All are inspected for Brix, rind thickness, and hollow heart before packing.",
      },
    ],
  },
  {
    slug: "cantaloupe",
    name: "Cantaloupe",
    category: "fresh-fruits",
    tagline: "Sweet Egyptian cantaloupe — Galia and Charentais",
    description:
      "Egyptian cantaloupe melon in Galia and Charentais types, prized for their aromatic flesh and high sugar content. Harvested from April through October, our melons are cooled rapidly and shipped in temperature-controlled containers.",
    image: "/images/products/Cantaloupe.png",
    season: "April - October",
    packTypes: ["Carton", "Open Top"],
    packagingOptions: ["5 kg carton", "10 kg carton"],
    calibers: ["6", "8", "9", "12"],
    shelfLife: "2-3 weeks",
    storageTemp: "2-5 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P."],
    targetMarkets: ["EU", "UK", "Gulf States"],
    specs: [
      { label: "Varieties", value: "Galia, Charentais, Ananas" },
      { label: "Brix", value: "11-15" },
      { label: "Weight", value: "0.8-2.5 kg" },
      { label: "Season", value: "April - October" },
      { label: "Shelf life", value: "2-3 weeks cold stored" },
      { label: "Storage temp", value: "2-5 C" },
    ],
    faq: [
      {
        question: "Which cantaloupe variety ships best?",
        answer:
          "Galia and Charentais have the best transit life for sea freight. We recommend air freight only for ultra-premium programs with 48-hour delivery windows.",
      },
    ],
  },
  {
    slug: "avocado",
    name: "Avocado",
    category: "fresh-fruits",
    tagline: "Hass and Fuerte — Egypt's emerging avocado crop",
    description:
      "Egyptian avocados are a growing success story, with Hass and Fuerte orchards expanding across the Nile Delta. Our fruit is harvested at optimal dry matter content, preconditioned for ripeness on demand, and packed to European retail standards.",
    image: "/images/products/Avocado.png",
    season: "September - March",
    packTypes: ["Carton", "Tray Pack"],
    packagingOptions: ["4 kg carton", "10 kg bulk"],
    calibers: ["10", "12", "14", "16", "18", "20"],
    shelfLife: "3-4 weeks",
    storageTemp: "5-7 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P."],
    targetMarkets: ["EU", "UK", "Middle East"],
    specs: [
      { label: "Varieties", value: "Hass, Fuerte" },
      { label: "Dry matter", value: "21-28%" },
      { label: "Caliber range", value: "10-20" },
      { label: "Season", value: "September - March" },
      { label: "Shelf life", value: "3-4 weeks cold stored" },
      { label: "Storage temp", value: "5-7 C" },
    ],
    faq: [
      {
        question: "Is Egyptian avocado production reliable?",
        answer:
          "Yes. Egyptian avocado acreage has tripled in 5 years. Our partner farms use Israeli and Spanish rootstock with drip irrigation, producing fruit that competes on quality with traditional origins.",
      },
    ],
  },
  {
    slug: "barhi-dates",
    name: "Barhi Dates",
    category: "fresh-fruits",
    tagline: "Fresh Barhi dates — soft, caramel-like sweetness",
    description:
      "Barhi dates harvested at the Khalal (yellow) stage for fresh consumption. These premium dates have a unique crunchy-to-soft texture and rich caramel sweetness. Packed in modified atmosphere for extended shelf life and shipped year-round from cold storage.",
    image: "/images/products/Barhi-Dates-Fresh.png",
    season: "August - October (fresh); year-round (stored)",
    packTypes: ["Punnet", "Clamshell", "Carton"],
    packagingOptions: ["500 g punnet", "1 kg clamshell", "5 kg carton"],
    shelfLife: "4-6 weeks (fresh); 12 months (frozen)",
    storageTemp: "-18 C (frozen) / 0-2 C (fresh)",
    certifications: ["ISO 22000", "HACCP", "BRCGS", "HALAL"],
    targetMarkets: ["Gulf States", "EU", "UK", "Asia", "North America"],
    specs: [
      { label: "Variety", value: "Barhi" },
      { label: "Harvest stage", value: "Khalal (yellow)" },
      { label: "Sugar content", value: "65-70%" },
      { label: "Season", value: "August - October" },
      { label: "Shelf life", value: "4-6 weeks fresh / 12 months frozen" },
      { label: "Storage temp", value: "0-2 C (fresh)" },
    ],
    faq: [
      {
        question: "What is the difference between Barhi and Medjool?",
        answer:
          "Barhi dates are smaller, sold fresh at the Khalal (yellow) stage with a crunchy texture that softens over time. Medjool are larger, harvested at full ripeness (Rutab stage) with soft, chewy flesh.",
      },
    ],
  },
  {
    slug: "medjool-dates",
    name: "Medjool Dates",
    category: "fresh-fruits",
    tagline: "Large, soft Medjool — the king of dates",
    description:
      "Premium Egyptian Medjool dates — large, soft, and naturally sweet. Hand-harvested and sorted by size, our Medjool dates are packed in food-grade trays and cartons for retail and food service. HACCP and HALAL certified.",
    image: "/images/products/Medjool-Dates.png",
    season: "September - November (fresh); year-round (stored)",
    packTypes: ["Tray", "Carton", "Bulk"],
    packagingOptions: ["500 g tray", "1 kg carton", "5 kg bulk"],
    shelfLife: "12-18 months",
    storageTemp: "-2 to 2 C",
    certifications: ["ISO 22000", "HACCP", "BRCGS", "HALAL", "FDA"],
    targetMarkets: ["EU", "UK", "North America", "Gulf States", "Asia"],
    specs: [
      { label: "Variety", value: "Medjool" },
      { label: "Size grades", value: "Large, Jumbo, Super Jumbo" },
      { label: "Moisture", value: "21-26%" },
      { label: "Season", value: "September - November" },
      { label: "Shelf life", value: "12-18 months" },
      { label: "Storage temp", value: "-2 to 2 C" },
    ],
    faq: [
      {
        question: "What size grades do you offer?",
        answer:
          "We grade Medjool into Large (15-17 g), Jumbo (17-21 g), and Super Jumbo (21+ g). Each grade is packed separately for retail or mixed for food service applications.",
      },
    ],
  },

  // ===========================
  // VEGETABLES
  // ===========================
  {
    slug: "bell-peppers",
    name: "Bell Peppers",
    category: "vegetables",
    tagline: "Red, yellow, green — year-round greenhouse supply",
    description:
      "Egyptian bell peppers grown in modern greenhouses for consistent shape, color, and sweetness. Available in red, yellow, orange, and green. Packed to European supermarket standards with full traceability from seed to shelf.",
    image: "/images/products/Bell-Peppers.png",
    season: "October - June",
    packTypes: ["Carton", "Flow Pack"],
    packagingOptions: ["5 kg carton", "3 kg flow pack", "6 kg carton"],
    shelfLife: "2-3 weeks",
    storageTemp: "7-10 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P.", "BRCGS"],
    targetMarkets: ["EU", "UK", "Russia", "Middle East"],
    alsoAvailableFrozen: true,
    specs: [
      { label: "Colors", value: "Red, Yellow, Orange, Green" },
      { label: "Grade", value: "Class I, Class II" },
      { label: "Size", value: "70-110 mm" },
      { label: "Season", value: "October - June" },
      { label: "Shelf life", value: "2-3 weeks cold stored" },
      { label: "Storage temp", value: "7-10 C" },
    ],
    faq: [
      {
        question: "Are your peppers greenhouse-grown?",
        answer:
          "Yes. Our bell peppers come from climate-controlled greenhouses using integrated pest management. This ensures consistent color, size, and minimal residues.",
      },
    ],
  },
  {
    slug: "broccoli",
    name: "Broccoli",
    category: "vegetables",
    tagline: "Dense heads, deep green — export-grade broccoli",
    description:
      "Compact, dark green broccoli heads from Egyptian winter fields. Rapid cooling after harvest preserves color and nutritional value. Packed in ice or wrapped for retail, with options for crown cuts for food service buyers.",
    image: "/images/products/Broccoli.png",
    season: "November - April",
    packTypes: ["Carton", "Wrapped", "Ice Pack"],
    packagingOptions: ["6 kg carton", "10 kg ice pack", "Film wrapped"],
    shelfLife: "2-3 weeks",
    storageTemp: "0-2 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P."],
    targetMarkets: ["EU", "UK", "Middle East"],
    alsoAvailableFrozen: true,
    specs: [
      { label: "Cut type", value: "Whole crown, Crown cut" },
      { label: "Head diameter", value: "12-18 cm" },
      { label: "Color", value: "Dark green, compact" },
      { label: "Season", value: "November - April" },
      { label: "Shelf life", value: "2-3 weeks cold stored" },
      { label: "Storage temp", value: "0-2 C" },
    ],
    faq: [
      {
        question: "Do you offer broccoli crown cuts?",
        answer:
          "Yes. We supply both whole crowns and cut florets for food service. Crown cuts are packed in 6 kg cartons with ice for maximum freshness.",
      },
    ],
  },
  {
    slug: "cauliflower",
    name: "Cauliflower",
    category: "vegetables",
    tagline: "White, tight-curd cauliflower for global markets",
    description:
      "Egyptian cauliflower with bright white curds and tightly packed heads. Grown in the cool winter season for optimal density and flavor. Available as whole heads or pre-cut florets for food service and manufacturing clients.",
    image: "/images/products/Cauliflower.png",
    season: "November - April",
    packTypes: ["Carton", "Wrapped", "Bulk"],
    packagingOptions: ["6 kg carton", "10 kg carton", "Film wrapped"],
    shelfLife: "2-3 weeks",
    storageTemp: "0-2 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P."],
    targetMarkets: ["EU", "UK", "Middle East"],
    alsoAvailableFrozen: true,
    specs: [
      { label: "Cut type", value: "Whole head, Florets" },
      { label: "Head size", value: "15-22 cm diameter" },
      { label: "Color", value: "White, compact curd" },
      { label: "Season", value: "November - April" },
      { label: "Shelf life", value: "2-3 weeks cold stored" },
      { label: "Storage temp", value: "0-2 C" },
    ],
    faq: [
      {
        question: "What cauliflower sizes do you export?",
        answer:
          "We supply heads from 15 to 22 cm diameter, sorted into size categories. Most European retailers prefer 6-count and 8-count cartons.",
      },
    ],
  },
  {
    slug: "green-beans",
    name: "Green Beans",
    category: "vegetables",
    tagline: "Fine and extra-fine — Egypt's premier green beans",
    description:
      "Egypt is a leading exporter of premium green beans to European markets. Our fine and extra-fine beans are hand-picked daily, cooled to 4 C within hours, and packed in 4 kg cartons. Available from October through May with air and sea freight options.",
    image: "/images/products/Green-Beans.png",
    season: "October - May",
    packTypes: ["Carton", "Punnet", "Bulk"],
    packagingOptions: ["4 kg carton", "250 g punnet", "6 kg bulk"],
    shelfLife: "10-14 days",
    storageTemp: "4-7 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P.", "BRCGS"],
    targetMarkets: ["EU", "UK", "Scandinavia"],
    alsoAvailableFrozen: true,
    specs: [
      { label: "Grades", value: "Extra Fine (6-8 mm), Fine (8-10 mm), Bobby (10-12 mm)" },
      { label: "Length", value: "10-14 cm" },
      { label: "Color", value: "Bright green, uniform" },
      { label: "Season", value: "October - May" },
      { label: "Shelf life", value: "10-14 days" },
      { label: "Storage temp", value: "4-7 C" },
    ],
    faq: [
      {
        question: "What grades of green beans do you supply?",
        answer:
          "We supply Extra Fine (6-8 mm), Fine (8-10 mm), and Bobby (10-12 mm) grades. Extra Fine is preferred by European supermarkets; Bobby grade is popular for food service.",
      },
    ],
  },
  {
    slug: "okra",
    name: "Okra",
    category: "vegetables",
    tagline: "Baby okra — a Middle Eastern and European staple",
    description:
      "Egyptian baby okra, hand-harvested at optimal size for tenderness and flavor. A key export product for Middle Eastern communities in Europe and direct Gulf State supply. Available fresh in season and IQF frozen year-round.",
    image: "/images/products/Okra.png",
    season: "May - October",
    packTypes: ["Carton", "Punnet", "Bulk"],
    packagingOptions: ["2 kg carton", "4 kg carton", "500 g punnet"],
    shelfLife: "7-10 days",
    storageTemp: "7-10 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P."],
    targetMarkets: ["EU", "UK", "Middle East", "Gulf States"],
    alsoAvailableFrozen: true,
    specs: [
      { label: "Sizes", value: "Baby (2-4 cm), Small (4-6 cm), Medium (6-9 cm)" },
      { label: "Grade", value: "Class I, Class II" },
      { label: "Color", value: "Bright green" },
      { label: "Season", value: "May - October" },
      { label: "Shelf life", value: "7-10 days" },
      { label: "Storage temp", value: "7-10 C" },
    ],
    faq: [
      {
        question: "What size okra do you export?",
        answer:
          "Baby okra (2-4 cm) is our premium export grade, preferred by European retailers and Gulf State buyers. Small (4-6 cm) and medium (6-9 cm) grades are available for food service and processing.",
      },
    ],
  },
  {
    slug: "potatoes",
    name: "Potatoes",
    category: "vegetables",
    tagline: "Spunta, Diamant, Hermes — year-round potato supply",
    description:
      "Egyptian potatoes in multiple varieties for fresh market and processing. Grown across two annual seasons for near year-round availability. Washed, graded, and packed in ventilated bags or cartons to your specification.",
    image: "/images/products/Potatoes.png",
    season: "January - May; September - November",
    packTypes: ["Mesh Bag", "Paper Bag", "Carton"],
    packagingOptions: ["10 kg mesh bag", "25 kg paper bag", "20 kg carton"],
    shelfLife: "3-6 months",
    storageTemp: "4-8 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P."],
    targetMarkets: ["EU", "UK", "Russia", "Africa"],
    specs: [
      { label: "Varieties", value: "Spunta, Diamant, Hermes, Lady Rosetta" },
      { label: "Size grades", value: "35-55 mm, 55-75 mm, 75+ mm" },
      { label: "Season", value: "Jan-May / Sep-Nov" },
      { label: "Pack types", value: "10, 20, 25 kg" },
      { label: "Shelf life", value: "3-6 months cold stored" },
      { label: "Storage temp", value: "4-8 C" },
    ],
    faq: [
      {
        question: "Which potato variety is best for chips/fries?",
        answer:
          "Lady Rosetta and Hermes are our processing-grade varieties with optimal dry matter for chip and fry production. Contact us for bulk processing supply.",
      },
    ],
  },
  {
    slug: "pumpkins",
    name: "Pumpkins",
    category: "vegetables",
    tagline: "Butternut and orange — cooking and processing pumpkins",
    description:
      "Egyptian pumpkins including butternut squash and traditional orange varieties. Harvested at full maturity for maximum sweetness and storage life. Ideal for retail, food service, and puree processing markets.",
    image: "/images/products/Pumpkins.png",
    season: "September - February",
    packTypes: ["Bin", "Carton", "Palletized"],
    packagingOptions: ["Bulk bin", "10 kg carton", "Palletized"],
    shelfLife: "2-4 months",
    storageTemp: "10-13 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P."],
    targetMarkets: ["EU", "UK", "Middle East"],
    alsoAvailableFrozen: true,
    specs: [
      { label: "Varieties", value: "Butternut, Orange, Grey" },
      { label: "Weight range", value: "1-8 kg" },
      { label: "Season", value: "September - February" },
      { label: "Shelf life", value: "2-4 months" },
      { label: "Storage temp", value: "10-13 C" },
      { label: "Uses", value: "Retail, food service, puree processing" },
    ],
    faq: [
      {
        question: "Do you supply butternut squash specifically?",
        answer:
          "Yes. Butternut is our most-exported pumpkin variety, available from September through February. We also offer diced and cubed IQF butternut for convenience food manufacturers.",
      },
    ],
  },
  {
    slug: "red-chili-peppers",
    name: "Red Chili Peppers",
    category: "vegetables",
    tagline: "Hot and mild varieties for spice and processing",
    description:
      "Egyptian red chili peppers in hot and mild varieties for the spice trade and food manufacturing. Sun-dried and fresh options available. Packed to specification with full documentation including Scoville heat level and residue analysis.",
    image: "/images/products/Red-Chili-Peppers.png",
    season: "June - November",
    packTypes: ["Carton", "Bulk", "Vacuum Pack"],
    packagingOptions: ["5 kg carton", "10 kg bulk", "Vacuum sealed"],
    shelfLife: "2-3 weeks (fresh); 12 months (dried)",
    storageTemp: "7-10 C (fresh)",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P."],
    targetMarkets: ["EU", "Asia", "Middle East", "Africa"],
    specs: [
      { label: "Types", value: "Hot (Cayenne), Mild (Anaheim)" },
      { label: "Scoville range", value: "5,000 - 50,000 SHU" },
      { label: "Forms", value: "Fresh, Dried, Crushed" },
      { label: "Season", value: "June - November" },
      { label: "Shelf life", value: "2-3 weeks fresh" },
      { label: "Storage temp", value: "7-10 C (fresh)" },
    ],
    faq: [
      {
        question: "What heat levels are available?",
        answer:
          "We offer mild (5,000-10,000 SHU) and hot (30,000-50,000 SHU) varieties. Every batch comes with Scoville heat unit documentation for your quality control.",
      },
    ],
  },
  {
    slug: "red-onions",
    name: "Red Onions",
    category: "vegetables",
    tagline: "Deep red, pungent — premium export-grade onions",
    description:
      "Egyptian red onions known for their deep color and strong flavor. Cured, graded, and packed in breathable mesh bags for long-distance transit. A key commodity for African and European markets with large volume capacity.",
    image: "/images/products/Red-Onions.png",
    season: "March - August",
    packTypes: ["Mesh Bag", "Jumbo Bag", "Carton"],
    packagingOptions: ["10 kg mesh bag", "25 kg mesh bag", "1000 kg jumbo bag"],
    calibers: ["40-60 mm", "60-80 mm", "80-100 mm"],
    shelfLife: "3-6 months",
    storageTemp: "0-3 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P."],
    targetMarkets: ["EU", "Africa", "Asia", "Middle East"],
    specs: [
      { label: "Variety", value: "Red Creole, Giza Red" },
      { label: "Calibers", value: "40-60, 60-80, 80-100 mm" },
      { label: "Season", value: "March - August" },
      { label: "Pack types", value: "10, 25, 1000 kg" },
      { label: "Shelf life", value: "3-6 months" },
      { label: "Storage temp", value: "0-3 C" },
    ],
    faq: [
      {
        question: "What volume can you supply?",
        answer:
          "We can supply multiple containers per week during peak season. Egypt is one of the world's largest onion exporters, and we have established logistics for large-volume orders.",
      },
    ],
  },
  {
    slug: "spring-onions",
    name: "Spring Onions",
    category: "vegetables",
    tagline: "Fresh-cut spring onions — bundled and retail-ready",
    description:
      "Crisp Egyptian spring onions, hand-harvested and bundled for retail and food service. Available year-round with peak quality in the cooler months. Packed with ice for freshness during transit.",
    image: "/images/products/Spring-Onions.png",
    season: "Year-round (peak: October - April)",
    packTypes: ["Bundle", "Carton", "Ice Pack"],
    packagingOptions: ["Bundles of 8-12", "5 kg carton with ice"],
    shelfLife: "10-14 days",
    storageTemp: "0-2 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P."],
    targetMarkets: ["EU", "UK", "Middle East"],
    specs: [
      { label: "Type", value: "Green onion / Scallion" },
      { label: "Length", value: "25-35 cm" },
      { label: "Bundles", value: "8-12 stems per bundle" },
      { label: "Season", value: "Year-round" },
      { label: "Shelf life", value: "10-14 days" },
      { label: "Storage temp", value: "0-2 C" },
    ],
    faq: [
      {
        question: "How are spring onions shipped?",
        answer:
          "Spring onions are bundled, packed in ice-lined cartons, and shipped via air freight for maximum freshness. Sea freight is available for shorter transit routes.",
      },
    ],
  },
  {
    slug: "sweet-potatoes",
    name: "Sweet Potatoes",
    category: "vegetables",
    tagline: "Beauregard and Bellevue — orange-fleshed and sweet",
    description:
      "Egyptian sweet potatoes with vibrant orange flesh and consistent sizing. Cured for optimal sweetness and shelf life, then graded and packed to European retail specifications. A growing category with strong demand in EU and UK markets.",
    image: "/images/products/Sweet-Potatoes.png",
    season: "September - March",
    packTypes: ["Carton", "Mesh Bag"],
    packagingOptions: ["6 kg carton", "10 kg carton", "20 kg mesh bag"],
    calibers: ["60-120 mm", "120-200 mm", "200+ mm"],
    shelfLife: "4-8 weeks",
    storageTemp: "12-15 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P.", "BRCGS"],
    targetMarkets: ["EU", "UK", "Scandinavia"],
    alsoAvailableFrozen: true,
    specs: [
      { label: "Varieties", value: "Beauregard, Bellevue" },
      { label: "Flesh color", value: "Orange" },
      { label: "Calibers", value: "60-120, 120-200, 200+ mm" },
      { label: "Season", value: "September - March" },
      { label: "Shelf life", value: "4-8 weeks cured" },
      { label: "Storage temp", value: "12-15 C" },
    ],
    faq: [
      {
        question: "Are your sweet potatoes cured?",
        answer:
          "Yes. All our sweet potatoes undergo a curing process at 29-32 C and 85-90% humidity for 4-7 days. This heals skin wounds and converts starches to sugars for better flavor and longer shelf life.",
      },
    ],
  },
  {
    slug: "yellow-onions",
    name: "Yellow Onions",
    category: "vegetables",
    tagline: "Golden skin, firm flesh — bulk and retail supply",
    description:
      "Egyptian yellow onions with golden-brown skin and mild, versatile flavor. A commodity export product with large volume availability. Graded and packed in mesh bags from 10 kg to 1-tonne jumbo bags for wholesale and industrial buyers.",
    image: "/images/products/Yellow-Onions.png",
    season: "March - September",
    packTypes: ["Mesh Bag", "Jumbo Bag"],
    packagingOptions: ["10 kg mesh bag", "25 kg mesh bag", "1000 kg jumbo bag"],
    calibers: ["40-60 mm", "60-80 mm", "80-100 mm"],
    shelfLife: "3-6 months",
    storageTemp: "0-3 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P."],
    targetMarkets: ["EU", "Africa", "Asia", "Middle East"],
    specs: [
      { label: "Variety", value: "Giza 20, Texas Grano" },
      { label: "Calibers", value: "40-60, 60-80, 80-100 mm" },
      { label: "Season", value: "March - September" },
      { label: "Pack types", value: "10, 25, 1000 kg" },
      { label: "Shelf life", value: "3-6 months" },
      { label: "Storage temp", value: "0-3 C" },
    ],
    faq: [
      {
        question: "What is your minimum order for onions?",
        answer:
          "Minimum order is one 40-foot container (approximately 27-29 tonnes). We can also arrange consolidated shipments for smaller importers on request.",
      },
    ],
  },
  {
    slug: "iceberg-lettuce",
    name: "Iceberg Lettuce",
    category: "vegetables",
    tagline: "Crisp, compact heads — vacuum-cooled for freshness",
    description:
      "Egyptian iceberg lettuce grown in the Delta's cool-season climate. Vacuum-cooled immediately after harvest and packed in shrink film for optimal shelf life. Supplied to European food service and retail chains from November through April.",
    image: "/images/products/Iceberg-Lettuce.png",
    season: "November - April",
    packTypes: ["Carton", "Wrapped"],
    packagingOptions: ["10 kg carton (8-12 heads)", "Shrink-wrapped single heads"],
    shelfLife: "2-3 weeks",
    storageTemp: "0-2 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P.", "BRCGS"],
    targetMarkets: ["EU", "UK", "Middle East"],
    specs: [
      { label: "Type", value: "Iceberg (crisphead)" },
      { label: "Head weight", value: "400-700 g" },
      { label: "Pack count", value: "8-12 heads per carton" },
      { label: "Season", value: "November - April" },
      { label: "Shelf life", value: "2-3 weeks vacuum-cooled" },
      { label: "Storage temp", value: "0-2 C" },
    ],
    faq: [
      {
        question: "How is the lettuce cooled?",
        answer:
          "We use vacuum cooling to bring core temperature to 2 C within 30 minutes of harvest. This is the gold standard for leafy vegetables and ensures maximum shelf life during transit.",
      },
    ],
  },
  {
    slug: "artichoke",
    name: "Artichoke",
    category: "vegetables",
    tagline: "Globe artichokes — fresh and processed for export",
    description:
      "Egyptian globe artichokes harvested from December through March. Known for their large size and meaty hearts, our artichokes are packed fresh for retail or processed into frozen hearts for food service and manufacturing.",
    image: "/images/products/Artichoke.png",
    season: "December - March",
    packTypes: ["Carton", "Tray"],
    packagingOptions: ["6 kg carton", "Tray-wrapped (4 count)"],
    shelfLife: "2-3 weeks",
    storageTemp: "0-2 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P."],
    targetMarkets: ["EU", "UK", "Middle East"],
    alsoAvailableFrozen: true,
    specs: [
      { label: "Type", value: "Globe artichoke" },
      { label: "Count per carton", value: "12-20 heads" },
      { label: "Size", value: "7-12 cm diameter" },
      { label: "Season", value: "December - March" },
      { label: "Shelf life", value: "2-3 weeks" },
      { label: "Storage temp", value: "0-2 C" },
    ],
    faq: [
      {
        question: "Do you supply artichoke hearts?",
        answer:
          "Yes. We offer IQF artichoke hearts and bottoms as a separate product line. These are processed at our HACCP-certified facility and available year-round from frozen stock.",
      },
    ],
  },
  {
    slug: "garlic",
    name: "Garlic",
    category: "vegetables",
    tagline: "Egyptian garlic — pungent, firm, long-lasting",
    description:
      "Premium Egyptian garlic known for its strong aroma, firm cloves, and long storage life. Cured and sorted by size, our garlic is exported in mesh bags and cartons to markets across Europe, Asia, and the Middle East.",
    image: "/images/products/Garlic.png",
    season: "April - August",
    packTypes: ["Mesh Bag", "Carton", "Vacuum Pack"],
    packagingOptions: ["10 kg mesh bag", "5 kg carton", "Peeled vacuum pack"],
    calibers: ["40-50 mm", "50-60 mm", "60-70 mm"],
    shelfLife: "6-9 months",
    storageTemp: "0-3 C",
    certifications: ["ISO 22000", "HACCP", "GLOBALG.A.P."],
    targetMarkets: ["EU", "Middle East", "Asia", "Africa"],
    specs: [
      { label: "Type", value: "White garlic, Egyptian garlic" },
      { label: "Calibers", value: "40-50, 50-60, 60-70 mm" },
      { label: "Cloves per head", value: "8-12" },
      { label: "Season", value: "April - August" },
      { label: "Shelf life", value: "6-9 months cured" },
      { label: "Storage temp", value: "0-3 C" },
    ],
    faq: [
      {
        question: "Is peeled garlic available?",
        answer:
          "Yes. We offer peeled garlic cloves in vacuum-sealed packs for food service and manufacturing customers. Available fresh and frozen.",
      },
    ],
  },

  // ===========================
  // IQF FROZEN
  // ===========================
  {
    slug: "iqf-okra",
    name: "Okra (IQF)",
    category: "iqf-frozen",
    tagline: "Individually frozen baby okra — year-round supply",
    description:
      "IQF frozen Egyptian okra in baby and small sizes. Blanched and individually quick frozen within hours of harvest to lock in color, texture, and nutrition. Available year-round in bulk and retail packaging.",
    image: "/images/products/Okra.png",
    season: "Year-round (from frozen stock)",
    packTypes: ["Poly Bag", "Bulk Carton"],
    packagingOptions: ["400 g retail bag", "2.5 kg catering bag", "10 kg bulk carton"],
    shelfLife: "18-24 months",
    storageTemp: "-18 C or below",
    certifications: ["ISO 22000", "HACCP", "BRCGS", "IFS", "HALAL"],
    targetMarkets: ["EU", "UK", "Middle East", "Gulf States", "North America"],
    specs: [
      { label: "Cut type", value: "Whole baby, Zero trim" },
      { label: "Sizes", value: "Baby (2-4 cm), Small (4-6 cm)" },
      { label: "Blanching", value: "Steam blanched" },
      { label: "Availability", value: "Year-round" },
      { label: "Shelf life", value: "18-24 months at -18 C" },
      { label: "Packaging", value: "400 g, 2.5 kg, 10 kg" },
    ],
    faq: [
      {
        question: "What sizes of frozen okra do you offer?",
        answer:
          "We supply baby (2-4 cm) and small (4-6 cm) frozen okra. Both are blanched and IQF processed for free-flowing convenience.",
      },
    ],
  },
  {
    slug: "iqf-green-beans",
    name: "Green Beans (IQF)",
    category: "iqf-frozen",
    tagline: "Cut and whole — IQF green beans for food service",
    description:
      "IQF frozen Egyptian green beans in whole and cut formats. Processed from premium-grade fresh beans, blanched and frozen at peak quality. Ideal for food service, ready meals, and retail frozen vegetable blends.",
    image: "/images/products/Green-Beans.png",
    season: "Year-round (from frozen stock)",
    packTypes: ["Poly Bag", "Bulk Carton"],
    packagingOptions: ["400 g retail bag", "2.5 kg catering bag", "10 kg bulk carton"],
    shelfLife: "18-24 months",
    storageTemp: "-18 C or below",
    certifications: ["ISO 22000", "HACCP", "BRCGS", "IFS"],
    targetMarkets: ["EU", "UK", "North America", "Asia"],
    specs: [
      { label: "Cut types", value: "Whole, Cut (2-3 cm), French cut" },
      { label: "Grades", value: "Extra Fine, Fine, Bobby" },
      { label: "Blanching", value: "Steam blanched" },
      { label: "Availability", value: "Year-round" },
      { label: "Shelf life", value: "18-24 months at -18 C" },
      { label: "Packaging", value: "400 g, 2.5 kg, 10 kg" },
    ],
    faq: [
      {
        question: "What cut styles are available?",
        answer:
          "We offer whole beans, 2-3 cm cuts, and French-cut (longitudinal). All styles are available in Extra Fine, Fine, and Bobby grades.",
      },
    ],
  },
  {
    slug: "iqf-strawberries",
    name: "Strawberries (IQF)",
    category: "iqf-frozen",
    tagline: "Whole and diced frozen strawberries — year-round",
    description:
      "IQF frozen Egyptian strawberries — whole, halved, and diced formats. Flash-frozen at peak ripeness for maximum flavor and color retention. Supplied to juice manufacturers, bakeries, dairy processors, and retail brands globally.",
    image: "/images/products/Strawberries.png",
    season: "Year-round (from frozen stock)",
    packTypes: ["Poly Bag", "Bulk Carton"],
    packagingOptions: ["300 g retail bag", "2.5 kg catering bag", "10 kg bulk carton"],
    shelfLife: "18-24 months",
    storageTemp: "-18 C or below",
    certifications: ["ISO 22000", "HACCP", "BRCGS", "IFS", "FDA"],
    targetMarkets: ["EU", "UK", "North America", "Asia", "Middle East"],
    specs: [
      { label: "Formats", value: "Whole, Halved, Diced, Puree" },
      { label: "Brix", value: "7-10" },
      { label: "Color", value: "Deep red, uniform" },
      { label: "Availability", value: "Year-round" },
      { label: "Shelf life", value: "18-24 months at -18 C" },
      { label: "Packaging", value: "300 g, 2.5 kg, 10 kg" },
    ],
    faq: [
      {
        question: "Do you offer sugar-added frozen strawberries?",
        answer:
          "Yes. We can supply IQF strawberries with 10% or 20% sugar addition, as well as unsweetened. Custom sugar ratios are available for bulk orders.",
      },
    ],
  },
  {
    slug: "iqf-mango",
    name: "Mango (IQF)",
    category: "iqf-frozen",
    tagline: "Diced and sliced frozen mango — premium quality",
    description:
      "IQF frozen Egyptian mango in diced, sliced, and chunk formats. Processed from ripe Keitt and local varieties for optimal Brix and color. Ideal for smoothies, desserts, ready meals, and industrial juice production.",
    image: "/images/products/Mango.png",
    season: "Year-round (from frozen stock)",
    packTypes: ["Poly Bag", "Bulk Carton"],
    packagingOptions: ["300 g retail bag", "2.5 kg catering bag", "10 kg bulk carton"],
    shelfLife: "18-24 months",
    storageTemp: "-18 C or below",
    certifications: ["ISO 22000", "HACCP", "BRCGS", "IFS"],
    targetMarkets: ["EU", "UK", "North America", "Asia"],
    specs: [
      { label: "Formats", value: "Diced (10mm, 20mm), Sliced, Chunks, Puree" },
      { label: "Brix", value: "14-18" },
      { label: "Varieties", value: "Keitt, Kent, Local" },
      { label: "Availability", value: "Year-round" },
      { label: "Shelf life", value: "18-24 months at -18 C" },
      { label: "Packaging", value: "300 g, 2.5 kg, 10 kg" },
    ],
    faq: [
      {
        question: "What dice sizes do you offer?",
        answer:
          "Standard dice sizes are 10x10 mm and 20x20 mm. Custom sizes are available for minimum order quantities. All diced mango is free-flowing IQF.",
      },
    ],
  },
  {
    slug: "iqf-broccoli",
    name: "Broccoli (IQF)",
    category: "iqf-frozen",
    tagline: "IQF broccoli florets — consistent size and color",
    description:
      "IQF frozen Egyptian broccoli florets, blanched and individually quick frozen for maximum nutrition retention. Uniform 30-50 mm florets ideal for food service, ready meals, and retail frozen vegetable packs.",
    image: "/images/products/Broccoli.png",
    season: "Year-round (from frozen stock)",
    packTypes: ["Poly Bag", "Bulk Carton"],
    packagingOptions: ["400 g retail bag", "2.5 kg catering bag", "10 kg bulk carton"],
    shelfLife: "18-24 months",
    storageTemp: "-18 C or below",
    certifications: ["ISO 22000", "HACCP", "BRCGS", "IFS"],
    targetMarkets: ["EU", "UK", "Middle East", "Asia"],
    specs: [
      { label: "Cut type", value: "Florets (30-50 mm)" },
      { label: "Color", value: "Dark green, blanched" },
      { label: "Blanching", value: "Steam blanched" },
      { label: "Availability", value: "Year-round" },
      { label: "Shelf life", value: "18-24 months at -18 C" },
      { label: "Packaging", value: "400 g, 2.5 kg, 10 kg" },
    ],
    faq: [
      {
        question: "What floret sizes are available?",
        answer:
          "Standard floret size is 30-50 mm. We can also supply smaller 20-30 mm florets for stir-fry blends and baby food manufacturing.",
      },
    ],
  },
  {
    slug: "iqf-cauliflower",
    name: "Cauliflower (IQF)",
    category: "iqf-frozen",
    tagline: "IQF cauliflower florets — white, uniform, versatile",
    description:
      "IQF frozen Egyptian cauliflower florets processed from fresh winter harvest. Blanched to preserve white color and firm texture. A versatile ingredient for frozen meal manufacturers, food service operators, and retail brands.",
    image: "/images/products/Cauliflower.png",
    season: "Year-round (from frozen stock)",
    packTypes: ["Poly Bag", "Bulk Carton"],
    packagingOptions: ["400 g retail bag", "2.5 kg catering bag", "10 kg bulk carton"],
    shelfLife: "18-24 months",
    storageTemp: "-18 C or below",
    certifications: ["ISO 22000", "HACCP", "BRCGS", "IFS"],
    targetMarkets: ["EU", "UK", "Middle East", "Asia"],
    specs: [
      { label: "Cut type", value: "Florets (30-50 mm)" },
      { label: "Color", value: "White, blanched" },
      { label: "Blanching", value: "Steam blanched" },
      { label: "Availability", value: "Year-round" },
      { label: "Shelf life", value: "18-24 months at -18 C" },
      { label: "Packaging", value: "400 g, 2.5 kg, 10 kg" },
    ],
    faq: [
      {
        question: "Can you supply cauliflower rice?",
        answer:
          "Yes. We offer riced cauliflower (3-5 mm grain) as an IQF product. This is increasingly popular for low-carb and health food applications.",
      },
    ],
  },
  {
    slug: "iqf-bell-peppers",
    name: "Bell Peppers (IQF)",
    category: "iqf-frozen",
    tagline: "Diced and sliced frozen peppers — all colors",
    description:
      "IQF frozen Egyptian bell peppers in red, yellow, green, and mixed color blends. Available diced, sliced, and in strips. Perfect for pizza toppings, stir-fry mixes, ready meals, and frozen vegetable medleys.",
    image: "/images/products/Bell-Peppers.png",
    season: "Year-round (from frozen stock)",
    packTypes: ["Poly Bag", "Bulk Carton"],
    packagingOptions: ["400 g retail bag", "2.5 kg catering bag", "10 kg bulk carton"],
    shelfLife: "18-24 months",
    storageTemp: "-18 C or below",
    certifications: ["ISO 22000", "HACCP", "BRCGS", "IFS"],
    targetMarkets: ["EU", "UK", "North America", "Asia"],
    specs: [
      { label: "Colors", value: "Red, Yellow, Green, Mixed" },
      { label: "Formats", value: "Diced (10mm, 20mm), Sliced, Strips" },
      { label: "Availability", value: "Year-round" },
      { label: "Shelf life", value: "18-24 months at -18 C" },
      { label: "Packaging", value: "400 g, 2.5 kg, 10 kg" },
    ],
    faq: [
      {
        question: "Can you supply mixed pepper blends?",
        answer:
          "Yes. We offer standard traffic-light blends (red/yellow/green) and custom color ratios to your specification.",
      },
    ],
  },
  {
    slug: "iqf-pomegranate-seeds",
    name: "Pomegranate Seeds (IQF)",
    category: "iqf-frozen",
    tagline: "Ruby-red arils — individually frozen, free-flowing",
    description:
      "IQF frozen Egyptian pomegranate arils (seeds) from Wonderful variety fruit. Deep ruby color with sweet-tart flavor profile. Ideal for smoothie bowls, salad toppings, desserts, and health food products.",
    image: "/images/products/Pomegranate.png",
    season: "Year-round (from frozen stock)",
    packTypes: ["Poly Bag", "Bulk Carton"],
    packagingOptions: ["300 g retail bag", "2.5 kg catering bag", "10 kg bulk carton"],
    shelfLife: "18-24 months",
    storageTemp: "-18 C or below",
    certifications: ["ISO 22000", "HACCP", "BRCGS", "IFS"],
    targetMarkets: ["EU", "UK", "North America", "Asia"],
    specs: [
      { label: "Variety", value: "Wonderful" },
      { label: "Brix", value: "15-18" },
      { label: "Color", value: "Deep ruby red" },
      { label: "Availability", value: "Year-round" },
      { label: "Shelf life", value: "18-24 months at -18 C" },
      { label: "Packaging", value: "300 g, 2.5 kg, 10 kg" },
    ],
    faq: [
      {
        question: "Are the arils hand-separated?",
        answer:
          "We use a combination of mechanical and hand separation to ensure clean arils with minimal rind fragments. Each batch is optically sorted for color consistency.",
      },
    ],
  },
  {
    slug: "iqf-sweet-potatoes",
    name: "Sweet Potatoes (IQF)",
    category: "iqf-frozen",
    tagline: "Diced and cubed frozen sweet potato — convenience ready",
    description:
      "IQF frozen Egyptian sweet potatoes in diced, cubed, and sliced formats. Pre-cooked and individually frozen for easy preparation. Growing demand from health food brands, baby food manufacturers, and food service operators.",
    image: "/images/products/Sweet-Potatoes.png",
    season: "Year-round (from frozen stock)",
    packTypes: ["Poly Bag", "Bulk Carton"],
    packagingOptions: ["400 g retail bag", "2.5 kg catering bag", "10 kg bulk carton"],
    shelfLife: "18-24 months",
    storageTemp: "-18 C or below",
    certifications: ["ISO 22000", "HACCP", "BRCGS", "IFS"],
    targetMarkets: ["EU", "UK", "North America"],
    specs: [
      { label: "Formats", value: "Diced (15mm, 20mm), Cubed, Sliced" },
      { label: "Variety", value: "Beauregard (orange flesh)" },
      { label: "Pre-treatment", value: "Steam cooked, IQF frozen" },
      { label: "Availability", value: "Year-round" },
      { label: "Shelf life", value: "18-24 months at -18 C" },
      { label: "Packaging", value: "400 g, 2.5 kg, 10 kg" },
    ],
    faq: [
      {
        question: "Are the sweet potatoes pre-cooked?",
        answer:
          "Yes. Our IQF sweet potatoes are steam-cooked before freezing, so they only need reheating. This makes them ideal for ready-meal production and food service.",
      },
    ],
  },
  {
    slug: "iqf-pumpkin",
    name: "Pumpkin (IQF)",
    category: "iqf-frozen",
    tagline: "Diced butternut and pumpkin — for soups and meals",
    description:
      "IQF frozen Egyptian pumpkin and butternut squash in diced and cubed formats. Pre-peeled and steam-processed for convenience. Ideal for soup production, baby food, ready meals, and bakery applications.",
    image: "/images/products/Pumpkins.png",
    season: "Year-round (from frozen stock)",
    packTypes: ["Poly Bag", "Bulk Carton"],
    packagingOptions: ["400 g retail bag", "2.5 kg catering bag", "10 kg bulk carton"],
    shelfLife: "18-24 months",
    storageTemp: "-18 C or below",
    certifications: ["ISO 22000", "HACCP", "BRCGS", "IFS"],
    targetMarkets: ["EU", "UK", "North America", "Asia"],
    specs: [
      { label: "Formats", value: "Diced (15mm, 20mm), Cubed, Puree" },
      { label: "Varieties", value: "Butternut, Orange pumpkin" },
      { label: "Pre-treatment", value: "Peeled, steam cooked" },
      { label: "Availability", value: "Year-round" },
      { label: "Shelf life", value: "18-24 months at -18 C" },
      { label: "Packaging", value: "400 g, 2.5 kg, 10 kg" },
    ],
    faq: [
      {
        question: "Do you supply pumpkin puree?",
        answer:
          "Yes. We offer frozen pumpkin puree in 1 kg and 10 kg blocks for bakery and food manufacturing applications. The puree is made from our own processed pumpkin.",
      },
    ],
  },
  {
    slug: "iqf-artichoke-hearts",
    name: "Artichoke Hearts (IQF)",
    category: "iqf-frozen",
    tagline: "Trimmed and frozen artichoke hearts — ready to use",
    description:
      "IQF frozen Egyptian artichoke hearts and bottoms, trimmed and blanched for immediate use. A staple ingredient for Mediterranean food manufacturers, pizza producers, and upscale food service operations worldwide.",
    image: "/images/products/Artichoke.png",
    season: "Year-round (from frozen stock)",
    packTypes: ["Poly Bag", "Bulk Carton"],
    packagingOptions: ["400 g retail bag", "2.5 kg catering bag", "10 kg bulk carton"],
    shelfLife: "18-24 months",
    storageTemp: "-18 C or below",
    certifications: ["ISO 22000", "HACCP", "BRCGS", "IFS"],
    targetMarkets: ["EU", "UK", "North America", "Middle East"],
    specs: [
      { label: "Formats", value: "Hearts, Bottoms, Quarters" },
      { label: "Count per kg", value: "20-30 hearts" },
      { label: "Blanching", value: "Steam and water blanched" },
      { label: "Availability", value: "Year-round" },
      { label: "Shelf life", value: "18-24 months at -18 C" },
      { label: "Packaging", value: "400 g, 2.5 kg, 10 kg" },
    ],
    faq: [
      {
        question: "What is the difference between hearts and bottoms?",
        answer:
          "Artichoke hearts include the tender inner leaves and core. Bottoms are the base only, with all leaves removed. Both are blanched and IQF frozen.",
      },
    ],
  },
];

// ===========================
// HELPER FUNCTIONS
// ===========================

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getCategories(): ProductCategory[] {
  return ["citrus", "fresh-fruits", "vegetables", "iqf-frozen"];
}
