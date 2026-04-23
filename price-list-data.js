const PRICE_LIST_DATA = [
  {
    id: "tub-liner",
    category: "Tubs & Bases",
    label: "Tub Liner",
    bucket: "bf",
    description: "Base tub liner from the 2/11/2026 price list.",
    variants: [
      { id: "white", label: "White", price: 2575 },
      { id: "pearl", label: "Pearl", price: 2675 },
      { id: "marbles", label: "Marbles", price: 2775 }
    ]
  },
  {
    id: "tub-liner-formed-front",
    category: "Tubs & Bases",
    label: "Tub Liner Formed Front Upcharge",
    bucket: "bf",
    description: "Upcharge for a formed-front liner.",
    variants: [
      { id: "standard", label: "Standard", price: 475 }
    ]
  },
  {
    id: "fs-empress-standard",
    category: "Tubs & Bases",
    label: "Freestanding Soaker Empress 30/32",
    bucket: "bf",
    description: "Standard Empress freestanding soaker tub.",
    variants: [
      { id: "white", label: "White", price: 2900 },
      { id: "pearl", label: "Pearl", price: 3000 },
      { id: "marbles", label: "Marbles", price: 3100 }
    ]
  },
  {
    id: "fs-empress-xl",
    category: "Tubs & Bases",
    label: "Freestanding Empress XL 38/40/42",
    bucket: "bf",
    description: "XL freestanding Empress tub.",
    variants: [
      { id: "white", label: "White", price: 3250 },
      { id: "pearl", label: "Pearl", price: 3350 },
      { id: "marbles", label: "Marbles", price: 3450 }
    ]
  },
  {
    id: "fs-garden-tub-40",
    category: "Tubs & Bases",
    label: "Freestanding Garden Tub 40",
    bucket: "bf",
    description: "40 inch freestanding garden tub.",
    variants: [
      { id: "white", label: "White", price: 3250 },
      { id: "pearl", label: "Pearl", price: 3350 },
      { id: "marbles", label: "Marbles", price: 3450 }
    ]
  },
  {
    id: "freestanding-a-front",
    category: "Tubs & Bases",
    label: "Freestanding Tub A Front",
    bucket: "bf",
    description: "Freestanding tub A front.",
    variants: [
      { id: "white", label: "White", price: 2900 },
      { id: "pearl", label: "Pearl", price: 3000 },
      { id: "marbles", label: "Marbles", price: 3100 }
    ]
  },
  {
    id: "tub-end-panels",
    category: "Tubs & Bases",
    label: "Tub End Panels",
    bucket: "bf",
    description: "Tub end panels.",
    variants: [
      { id: "white", label: "White", price: 325 },
      { id: "pearl", label: "Pearl", price: 325 },
      { id: "marbles", label: "Marbles", price: 350 }
    ]
  },
  {
    id: "tub-end-caps",
    category: "Tubs & Bases",
    label: "Tub End Caps",
    bucket: "bf",
    description: "Tub end caps.",
    variants: [
      { id: "white", label: "White", price: 225 },
      { id: "pearl", label: "Pearl", price: 225 },
      { id: "marbles", label: "Marbles", price: 225 }
    ]
  },
  {
    id: "drain-kit",
    category: "Tubs & Bases",
    label: "Drain Kit",
    bucket: "bf",
    description: "Drain kit in CH/BN/SS/ORB/MB/CZ.",
    variants: [
      { id: "standard", label: "Standard Finish", price: 300 }
    ]
  },
  {
    id: "threshold-base-6",
    category: "Tubs & Bases",
    label: "6 Inch Threshold Molded Base",
    bucket: "bf",
    description: "26 to 60 inch molded base. Matrix sizing still needs to be confirmed in the field.",
    variants: [
      { id: "white", label: "White", price: 3000 },
      { id: "pearl", label: "Pearl", price: 3100 },
      { id: "marbles", label: "Marbles", price: 3200 }
    ]
  },
  {
    id: "threshold-base-fs-3",
    category: "Tubs & Bases",
    label: "3 Inch Threshold FS Base",
    bucket: "bf",
    description: "Freestanding 3 inch threshold base. Matrix sizing still needs to be confirmed in the field.",
    variants: [
      { id: "white", label: "White", price: 3000 },
      { id: "pearl", label: "Pearl", price: 3100 },
      { id: "marbles", label: "Marbles", price: 3200 }
    ]
  },
  {
    id: "threshold-base-fs-6",
    category: "Tubs & Bases",
    label: "6 Inch Threshold FS Base",
    bucket: "bf",
    description: "Freestanding 6 inch threshold base. Matrix sizing still needs to be confirmed in the field.",
    variants: [
      { id: "white", label: "White", price: 3000 },
      { id: "pearl", label: "Pearl", price: 3100 },
      { id: "marbles", label: "Marbles", price: 3200 }
    ]
  },
  {
    id: "threshold-base-neo-angle",
    category: "Tubs & Bases",
    label: "6 Inch Threshold Neo-Angle Base 36 or 38",
    bucket: "bf",
    description: "Neo-angle 36 or 38 inch base from the 2/11/2026 price list.",
    variants: [
      { id: "white", label: "White", price: 3000 },
      { id: "pearl", label: "Pearl", price: 3100 },
      { id: "marbles", label: "Marbles", price: 3200 }
    ]
  },
  {
    id: "threshold-base-curved-front",
    category: "Tubs & Bases",
    label: "6 Inch Threshold Curved Front Base",
    bucket: "bf",
    description: "Curved front base in 32, 36, or 40 inch sizes.",
    variants: [
      { id: "white", label: "White", price: 3000 },
      { id: "pearl", label: "Pearl", price: 3100 },
      { id: "marbles", label: "Marbles", price: 3200 }
    ]
  },
  {
    id: "flat-floor-base",
    category: "Tubs & Bases",
    label: "Flat Floor Base",
    bucket: "bf",
    description: "Flat floor base with diamond or tub pattern.",
    variants: [
      { id: "white", label: "White", price: 3000 },
      { id: "pearl", label: "Pearl", price: 3100 },
      { id: "marbles", label: "Marbles", price: 3200 }
    ]
  },
  {
    id: "flat-floor-1x1-tile-pattern",
    category: "Tubs & Bases",
    label: "Flat Floor 1 x 1 Tile Pattern Base",
    bucket: "bf",
    description: "Flat floor 1 x 1 tile pattern base, white only.",
    variants: [
      { id: "white", label: "White", price: 3000 }
    ]
  },
  {
    id: "flat-floor-handicap",
    category: "Tubs & Bases",
    label: "Flat Floor Base with Molded Handicap Threshold",
    bucket: "bf",
    description: "Handicap threshold flat floor base.",
    variants: [
      { id: "white", label: "White", price: 3000 },
      { id: "pearl", label: "Pearl", price: 3100 },
      { id: "marbles", label: "Marbles", price: 3200 }
    ]
  },
  {
    id: "ez-roll-in",
    category: "Tubs & Bases",
    label: "FS EZ Roll In Barrier Free",
    bucket: "bf",
    description: "Barrier free base in tub pattern honeycomb only.",
    variants: [
      { id: "white", label: "White", price: 3200 },
      { id: "pearl", label: "Pearl", price: 3300 },
      { id: "marbles", label: "Marbles", price: 3475 }
    ]
  },
  {
    id: "xl-fs-base",
    category: "Tubs & Bases",
    label: "XL FS Base 42x60 or 48x60",
    bucket: "bf",
    description: "XL freestanding base, listed as CD only on the price sheet.",
    variants: [
      { id: "white", label: "White", price: 3100 },
      { id: "pearl", label: "Pearl", price: 3200 },
      { id: "marbles", label: "Marbles", price: 3475 }
    ]
  },
  {
    id: "collapsible-threshold",
    category: "Tubs & Bases",
    label: "Collapsible Threshold",
    bucket: "bf",
    description: "For flat floor bases only, grey only.",
    variants: [
      { id: "grey", label: "Grey", price: 325 }
    ]
  },
  {
    id: "wall-flat-84x132",
    category: "Walls & Accessories",
    label: "Flat Wall 84 x 132",
    bucket: "bf",
    description: "7 by 11 wall sheet.",
    variants: [
      { id: "white", label: "White", price: 2900 },
      { id: "pearl", label: "Pearl", price: 3000 },
      { id: "marbles", label: "Marbles", price: 3100 }
    ]
  },
  {
    id: "wall-flat-84x156",
    category: "Walls & Accessories",
    label: "Flat Wall 84 x 156",
    bucket: "bf",
    description: "7 by 13 wall sheet.",
    variants: [
      { id: "white", label: "White", price: 3000 },
      { id: "pearl", label: "Pearl", price: 3100 },
      { id: "marbles", label: "Marbles", price: 3200 }
    ]
  },
  {
    id: "wall-flat-90x132",
    category: "Walls & Accessories",
    label: "Flat Wall 90 x 132",
    bucket: "bf",
    description: "7.5 by 11 wall sheet.",
    variants: [
      { id: "white", label: "White", price: 2900 },
      { id: "pearl", label: "Pearl", price: 3000 },
      { id: "marbles", label: "Marbles", price: 3100 }
    ]
  },
  {
    id: "wall-flat-90x156",
    category: "Walls & Accessories",
    label: "Flat Wall 90 x 156",
    bucket: "bf",
    description: "7.5 by 13 wall sheet.",
    variants: [
      { id: "white", label: "White", price: 3000 },
      { id: "pearl", label: "Pearl", price: 3100 },
      { id: "marbles", label: "Marbles", price: 3200 }
    ]
  },
  {
    id: "wall-flat-90x192",
    category: "Walls & Accessories",
    label: "Flat Wall 90 x 192",
    bucket: "bf",
    description: "7.5 by 16 wall sheet.",
    variants: [
      { id: "white", label: "White", price: 3600 },
      { id: "pearl", label: "Pearl", price: 3700 },
      { id: "marbles", label: "Marbles", price: 3875 }
    ]
  },
  {
    id: "tile-pattern-upcharge",
    category: "Walls & Accessories",
    label: "Additional for All Tile Patterns",
    bucket: "bf",
    description: "Tile pattern upcharge for Palermo, Napoli, Padova, Rimini, Milano, Savona, Torino, Roma, Genova, Verona, subway, textured, mosaic, and other tile wall patterns.",
    variants: [
      { id: "standard", label: "Standard Tile Pattern Upgrade", price: 900 },
      { id: "torino", label: "Torino", price: 900 },
      { id: "napoli", label: "Napoli", price: 900 },
      { id: "palermo", label: "Palermo", price: 900 },
      { id: "padova", label: "Padova", price: 900 },
      { id: "milano", label: "Milano", price: 900 },
      { id: "roma", label: "Roma", price: 900 },
      { id: "savona", label: "Savona", price: 900 },
      { id: "rimini", label: "Rimini", price: 900 },
      { id: "genova", label: "Genova", price: 900 },
      { id: "verona", label: "Verona", price: 900 },
      { id: "tile-12x12", label: "12 x 12 Tile Pattern", price: 900 },
      { id: "subway-3x6", label: "3 x 6 Subway Style", price: 900 },
      { id: "diamond-6x6", label: "6 x 6 Diamond Tile Pattern", price: 900 },
      { id: "tile-4x4", label: "4 x 4 Tile Pattern", price: 900 },
      { id: "tile-6x6", label: "6 x 6 Tile Pattern", price: 900 },
      { id: "tile-10x10-design", label: "10 x 10 Tile Pattern with Design", price: 900 },
      { id: "textured-6x22", label: "6 x 22 Textured Tile Pattern", price: 900 },
      { id: "textured-13x13-inserts", label: "13 x 13 Textured Tile Pattern with 4 x 4 Inserts", price: 900 },
      { id: "mosaic", label: "Mosaic Tile Pattern", price: 900 }
    ]
  },
  {
    id: "wainscot-6x6",
    category: "Wainscoting",
    label: "Wainscoting 6x6 Pattern",
    bucket: "wainscoting",
    description: "50 x 145 wainscoting.",
    variants: [
      { id: "white", label: "White", price: 2900 },
      { id: "pearl", label: "Pearl", price: 3000 },
      { id: "marbles", label: "Marbles", price: 3100 }
    ]
  },
  {
    id: "wainscot-beadboard",
    category: "Wainscoting",
    label: "Wainscoting Bead Board",
    bucket: "wainscoting",
    description: "54 x 145 bead board wainscoting.",
    variants: [
      { id: "white", label: "White", price: 3000 },
      { id: "pearl", label: "Pearl", price: 3100 },
      { id: "marbles", label: "Marbles", price: 3200 }
    ]
  },
  {
    id: "wainscot-savona",
    category: "Wainscoting",
    label: "Wainscoting Savona 54 x 132 7/8",
    bucket: "wainscoting",
    description: "Savona wainscoting, white only.",
    variants: [
      { id: "white", label: "White", price: 3000 }
    ]
  },
  {
    id: "extensions-flat-2x11",
    category: "Walls & Accessories",
    label: "Flat Extension Approx 2 x 11",
    bucket: "bf",
    description: "Flat wall extension.",
    variants: [
      { id: "standard", label: "Standard", price: 775 }
    ]
  },
  {
    id: "extensions-flat-2x13",
    category: "Walls & Accessories",
    label: "Flat Extension Approx 2 x 13",
    bucket: "bf",
    description: "Flat wall extension.",
    variants: [
      { id: "standard", label: "Standard", price: 1000 }
    ]
  },
  {
    id: "tile-extension-1x11",
    category: "Walls & Accessories",
    label: "Tile Extension Approx 1 x 11",
    bucket: "bf",
    description: "Palermo, Napoli, Padova, Rimini, Milano, or Savona extension.",
    variants: [
      { id: "standard", label: "Standard", price: 925 }
    ]
  },
  {
    id: "window-cutout",
    category: "Walls & Accessories",
    label: "Window Cut Out and/or Trim",
    bucket: "bf",
    description: "Standard-size window cutout or trim.",
    variants: [
      { id: "standard", label: "Standard", price: 600 }
    ]
  },
  {
    id: "safety-bar-16",
    category: "Walls & Accessories",
    label: "Safety Bar 16",
    bucket: "bf",
    description: "Common safety bar size from the price list.",
    variants: [
      { id: "chrome-white-pearl", label: "Chrome / White / Pearl", price: 345 },
      { id: "matte-black", label: "Matte Black", price: 375 },
      { id: "brushed-gold", label: "Brushed Gold", price: 375 },
      { id: "stainless", label: "Stainless Steel", price: 345 },
      { id: "brushed-nickel", label: "Brushed Nickel", price: 345 },
      { id: "oil-rubbed-bronze", label: "Oil Rubbed Bronze", price: 375 }
    ]
  },
  {
    id: "safety-bar-l-shape",
    category: "Walls & Accessories",
    label: "L Shaped Safety Bar 34 x 18",
    bucket: "bf",
    description: "L shaped safety bar.",
    variants: [
      { id: "standard", label: "Standard", price: 550 }
    ]
  },
  {
    id: "corner-seat",
    category: "Safety Seats",
    label: "Corner Seat",
    bucket: "bf",
    description: "Bath Fitter corner seat, all colors. Confirm price from the current sheet.",
    variants: [
      { id: "confirm", label: "Confirm Price", price: 0 }
    ]
  },
  {
    id: "l-shape-corner-seat",
    category: "Safety Seats",
    label: "L-Shape Corner Seat 32 x 21",
    bucket: "bf",
    description: "All colors and brushed nickel only. Confirm price from the current sheet.",
    variants: [
      { id: "confirm", label: "Confirm Price", price: 0 }
    ]
  },
  {
    id: "fold-down-seat-18",
    category: "Safety Seats",
    label: "18 Inch Fold Down Seat with Blocking",
    bucket: "bf",
    description: "All colors with chrome, brushed nickel, matte black, or brushed gold support finish. Confirm price from the current sheet.",
    variants: [
      { id: "confirm", label: "Confirm Price", price: 0 }
    ]
  },
  {
    id: "fold-down-seat-28",
    category: "Safety Seats",
    label: "28 Inch Fold Down Seat with Blocking",
    bucket: "bf",
    description: "All colors with chrome, brushed nickel, matte black, or brushed gold support finish. Confirm price from the current sheet.",
    variants: [
      { id: "confirm", label: "Confirm Price", price: 0 }
    ]
  },
  {
    id: "oxford-caddy-single",
    category: "Walls & Accessories",
    label: "Oxford Corner Caddy Single",
    bucket: "bf",
    description: "Corner caddy single.",
    variants: [
      { id: "white", label: "White", price: 190 },
      { id: "pearl", label: "Pearl", price: 190 },
      { id: "marbles", label: "Marbles", price: 190 }
    ]
  },
  {
    id: "oxford-caddy-double",
    category: "Walls & Accessories",
    label: "Oxford Corner Caddy Double",
    bucket: "bf",
    description: "Corner caddy double.",
    variants: [
      { id: "white", label: "White", price: 295 },
      { id: "pearl", label: "Pearl", price: 295 },
      { id: "marbles", label: "Marbles", price: 295 }
    ]
  },
  {
    id: "oxford-full-length-shelf",
    category: "Walls & Accessories",
    label: "Oxford Full Length Corner Shelf with Footrest",
    bucket: "bf",
    description: "Full-length corner shelf.",
    variants: [
      { id: "white", label: "White", price: 395 },
      { id: "pearl", label: "Pearl", price: 395 },
      { id: "marbles", label: "Marbles", price: 395 }
    ]
  },
  {
    id: "soap-dish",
    category: "Walls & Accessories",
    label: "Soap Dish",
    bucket: "bf",
    description: "Soap dish accessory.",
    variants: [
      { id: "white", label: "White", price: 155 },
      { id: "pearl", label: "Pearl", price: 155 },
      { id: "marbles", label: "Marbles", price: 155 }
    ]
  },
  {
    id: "toilet-paper-holder",
    category: "Walls & Accessories",
    label: "Toilet Paper Holder",
    bucket: "bf",
    description: "Integrated toilet paper holder.",
    variants: [
      { id: "white", label: "White", price: 130 },
      { id: "pearl", label: "Pearl", price: 130 },
      { id: "marbles", label: "Marbles", price: 130 }
    ]
  },
  {
    id: "towel-bar",
    category: "Walls & Accessories",
    label: "Towel Bar",
    bucket: "bf",
    description: "Integrated towel bar.",
    variants: [
      { id: "white", label: "White", price: 245 },
      { id: "pearl", label: "Pearl", price: 245 },
      { id: "marbles", label: "Marbles", price: 245 }
    ]
  },
  {
    id: "acrylic-shelf",
    category: "Walls & Accessories",
    label: "Acrylic Shelf",
    bucket: "bf",
    description: "Acrylic shelf accessory.",
    variants: [
      { id: "white", label: "White", price: 265 },
      { id: "pearl", label: "Pearl", price: 265 },
      { id: "marbles", label: "Marbles", price: 265 }
    ]
  },
  {
    id: "shower-rod-curved-5",
    category: "Curtain & Shower Rods",
    label: "5 Foot Curved Shower Rod",
    bucket: "bf",
    description: "Chrome, brushed nickel, oil rubbed bronze, or matte black.",
    variants: [
      { id: "standard", label: "Standard", price: 275 }
    ]
  },
  {
    id: "shower-rod-curved-6",
    category: "Curtain & Shower Rods",
    label: "6 Foot Curved Shower Rod",
    bucket: "bf",
    description: "Chrome, brushed nickel, oil rubbed bronze, or matte black.",
    variants: [
      { id: "standard", label: "Standard", price: 275 }
    ]
  },
  {
    id: "shower-rod-fixed-5-5",
    category: "Curtain & Shower Rods",
    label: "5.5 Foot Fixed Shower Rod",
    bucket: "bf",
    description: "Chrome, brushed nickel, oil rubbed bronze, or matte black.",
    variants: [
      { id: "standard", label: "Standard", price: 275 }
    ]
  },
  {
    id: "shower-rod-fixed-6",
    category: "Curtain & Shower Rods",
    label: "6 Foot Fixed Shower Rod",
    bucket: "bf",
    description: "Chrome, brushed nickel, oil rubbed bronze, or matte black.",
    variants: [
      { id: "standard", label: "Standard", price: 300 }
    ]
  },
  {
    id: "curtain-rod-tension-5",
    category: "Curtain & Shower Rods",
    label: "5 Foot Tension Curtain Rod",
    bucket: "bf",
    description: "Chrome, pearl, brass, or nickel.",
    variants: [
      { id: "standard", label: "Standard", price: 85 }
    ]
  },
  {
    id: "labor-remove-fg-1-piece",
    category: "Labor & Prep",
    label: "Remove, Dispose and Prepare FG 1 Piece",
    bucket: "labor",
    description: "Fiberglass one-piece prep labor.",
    variants: [
      { id: "standard", label: "Standard", price: 1400 }
    ]
  },
  {
    id: "labor-remove-fg-1-piece-ceiling",
    category: "Labor & Prep",
    label: "Remove, Dispose and Prepare FG 1 Piece with Ceiling",
    bucket: "labor",
    description: "FG one-piece with ceiling prep labor.",
    variants: [
      { id: "standard", label: "Standard", price: 1600 }
    ]
  },
  {
    id: "labor-remove-garden-jetted",
    category: "Labor & Prep",
    label: "Remove, Dispose and Prepare Garden/Jetted Tub",
    bucket: "labor",
    description: "Garden or jetted tub labor.",
    variants: [
      { id: "standard", label: "Standard", price: 1400 }
    ]
  },
  {
    id: "labor-remove-dispose-customer",
    category: "Labor & Prep",
    label: "Remove and Dispose by Customer",
    bucket: "labor",
    description: "Customer removal credit version.",
    variants: [
      { id: "standard", label: "Standard", price: 1100 }
    ]
  },
  {
    id: "labor-remove-cast-steel-tub",
    category: "Labor & Prep",
    label: "Remove and Dispose Cast or Steel Tub",
    bucket: "labor",
    description: "Cast or steel tub labor.",
    variants: [
      { id: "standard", label: "Standard", price: 1400 }
    ]
  },
  {
    id: "labor-remove-existing-bf-liner",
    category: "Labor & Prep",
    label: "Remove, Dispose and Prepare Existing BF Liner",
    bucket: "labor",
    description: "Existing Bath Fitter liner prep labor.",
    variants: [
      { id: "standard", label: "Standard", price: 1400 }
    ]
  },
  {
    id: "labor-add-gooseneck",
    category: "Labor & Prep",
    label: "Add Spigot or Add Gooseneck for Shower Head",
    bucket: "labor",
    description: "Spigot or gooseneck add.",
    variants: [
      { id: "standard", label: "Standard", price: 320 }
    ]
  },
  {
    id: "labor-remove-spigot",
    category: "Labor & Prep",
    label: "Remove Spigot and Cap Off",
    bucket: "labor",
    description: "Remove spigot and cap.",
    variants: [
      { id: "standard", label: "Standard", price: 310 }
    ]
  },
  {
    id: "labor-non-skid",
    category: "Labor & Prep",
    label: "Application of Non-Skid Texture",
    bucket: "labor",
    description: "Sand texture application.",
    variants: [
      { id: "standard", label: "Standard", price: 435 }
    ]
  },
  {
    id: "labor-wrap-threshold",
    category: "Labor & Prep",
    label: "Wrap Threshold up to 60",
    bucket: "labor",
    description: "Threshold wrap labor.",
    variants: [
      { id: "standard", label: "Standard", price: 495 }
    ]
  },
  {
    id: "labor-remove-build-wrap-threshold",
    category: "Labor & Prep",
    label: "Remove, Build and Wrap Threshold up to 60",
    bucket: "labor",
    description: "Threshold rebuild labor.",
    variants: [
      { id: "standard", label: "Standard", price: 1095 }
    ]
  },
  {
    id: "labor-remove-fiberglass-base",
    category: "Labor & Prep",
    label: "Remove, Dispose and Prepare Fiberglass Base",
    bucket: "labor",
    description: "Fiberglass base labor.",
    variants: [
      { id: "standard", label: "Standard", price: 1050 }
    ]
  },
  {
    id: "labor-shower-to-tub-slab",
    category: "Labor & Prep",
    label: "Shower to Tub Labor with Slab",
    bucket: "labor",
    description: "Shower to tub labor on slab.",
    variants: [
      { id: "standard", label: "Standard", price: 1950 }
    ]
  },
  {
    id: "labor-subfloor-replace",
    category: "Labor & Prep",
    label: "Subfloor Replace Tub/Base",
    bucket: "labor",
    description: "Subfloor replacement excluding joists.",
    variants: [
      { id: "standard", label: "Standard", price: 900 }
    ]
  },
  {
    id: "labor-jackhammer-tile-base",
    category: "Labor & Prep",
    label: "Remove and Jack Hammer Tile Base",
    bucket: "labor",
    description: "Tile base demolition labor.",
    variants: [
      { id: "standard", label: "Standard", price: 1725 }
    ]
  },
  {
    id: "labor-remove-shower-door",
    category: "Labor & Prep",
    label: "Remove and Dispose Shower Door",
    bucket: "bf",
    description: "Shower door removal only.",
    variants: [
      { id: "standard", label: "Standard", price: 450 }
    ]
  },
  {
    id: "labor-cap-old-shower-head",
    category: "Labor & Prep",
    label: "Cap Old Shower Head on Relo",
    bucket: "labor",
    description: "Cap shower head relocation.",
    variants: [
      { id: "standard", label: "Standard", price: 425 }
    ]
  },
  {
    id: "labor-wall-prep",
    category: "Labor & Prep",
    label: "Wall Prep Includes All Three Walls",
    bucket: "labor",
    description: "Wall prep labor.",
    variants: [
      { id: "standard", label: "Standard", price: 320 }
    ]
  },
  {
    id: "labor-wall-repair",
    category: "Labor & Prep",
    label: "Wall Repair",
    bucket: "labor",
    description: "Wall repair labor.",
    variants: [
      { id: "standard", label: "Standard", price: 320 }
    ]
  },
  {
    id: "labor-build-wall",
    category: "Labor & Prep",
    label: "Build Wall 2 x 4 and Sheetrock Frame",
    bucket: "labor",
    description: "Build framed wall.",
    variants: [
      { id: "standard", label: "Standard", price: 1550 }
    ]
  },
  {
    id: "labor-remove-wall",
    category: "Labor & Prep",
    label: "Remove Wall Standard Size",
    bucket: "labor",
    description: "Remove wall labor.",
    variants: [
      { id: "standard", label: "Standard", price: 575 }
    ]
  },
  {
    id: "labor-new-sheetrock",
    category: "Labor & Prep",
    label: "New Sheetrock per Wall",
    bucket: "labor",
    description: "New sheetrock labor charged per wall.",
    variants: [
      { id: "standard", label: "Standard", price: 450 }
    ]
  },
  {
    id: "labor-extra-cuts-bends",
    category: "Labor & Prep",
    label: "Extra Cuts or Extra Bends",
    bucket: "labor",
    description: "Price-sheet line item for extra cuts or bends.",
    variants: [
      { id: "standard", label: "Standard", price: 295 }
    ]
  },
  {
    id: "labor-remove-3pc-wall-system",
    category: "Labor & Prep",
    label: "Remove and Dispose 3 Pc Wall System with New Rock",
    bucket: "labor",
    description: "Three-piece wall removal with new rock.",
    variants: [
      { id: "standard", label: "Standard", price: 1250 }
    ]
  },
  {
    id: "labor-remove-tile-wall",
    category: "Labor & Prep",
    label: "Remove Tile Walls Each",
    bucket: "labor",
    description: "Per-wall tile removal.",
    variants: [
      { id: "standard", label: "Standard", price: 575 }
    ]
  },
  {
    id: "labor-remove-header",
    category: "Labor & Prep",
    label: "Remove Header",
    bucket: "labor",
    description: "Requires ceiling panel as well.",
    variants: [
      { id: "standard", label: "Standard", price: 975 }
    ]
  },
  {
    id: "labor-mud-wall-removal",
    category: "Labor & Prep",
    label: "Mud Wall Removal All Three Walls",
    bucket: "labor",
    description: "Mud wall removal plus sheetrock charge.",
    variants: [
      { id: "standard", label: "Standard", price: 2475 }
    ]
  },
  {
    id: "labor-cover-window",
    category: "Labor & Prep",
    label: "Cover Existing Window in Shower Area",
    bucket: "labor",
    description: "Cover existing shower-area window.",
    variants: [
      { id: "standard", label: "Standard", price: 575 }
    ]
  },
  {
    id: "ceiling-flat-3x5",
    category: "Ceilings & Flooring",
    label: "Flat Ceiling 3 x 5",
    bucket: "bf",
    description: "Flat ceiling panel.",
    variants: [
      { id: "white", label: "White", price: 900 },
      { id: "pearl", label: "Pearl", price: 900 },
      { id: "marbles", label: "Marbles", price: 900 }
    ]
  },
  {
    id: "ceiling-flat-cutout",
    category: "Ceilings & Flooring",
    label: "Flat Ceiling 3 x 5 with Cut Out",
    bucket: "bf",
    description: "Flat ceiling with cut out.",
    variants: [
      { id: "white", label: "White", price: 1100 },
      { id: "pearl", label: "Pearl", price: 1100 },
      { id: "marbles", label: "Marbles", price: 1100 }
    ]
  },
  {
    id: "ceiling-flat-return-cutout",
    category: "Ceilings & Flooring",
    label: "Flat Ceiling 3 x 5 with Return and Cut Out",
    bucket: "bf",
    description: "Ceiling with return and cut out.",
    variants: [
      { id: "white", label: "White", price: 1100 },
      { id: "pearl", label: "Pearl", price: 1100 },
      { id: "marbles", label: "Marbles", price: 1100 }
    ]
  },
  {
    id: "ceiling-oversized",
    category: "Ceilings & Flooring",
    label: "Oversized Ceiling Panel up to 4 x 5",
    bucket: "bf",
    description: "Oversized ceiling panel.",
    variants: [
      { id: "white", label: "White", price: 1600 },
      { id: "pearl", label: "Pearl", price: 1600 },
      { id: "marbles", label: "Marbles", price: 1600 }
    ]
  },
  {
    id: "ceiling-tile-pattern",
    category: "Ceilings & Flooring",
    label: "Tile Pattern Ceiling Panel 3 x 5",
    bucket: "bf",
    description: "Tile-pattern ceiling panel.",
    variants: [
      { id: "white", label: "White", price: 1950 },
      { id: "pearl", label: "Pearl", price: 2050 },
      { id: "marbles", label: "Marbles", price: 2150 }
    ]
  },
  {
    id: "ceiling-entire-bathroom",
    category: "Ceilings & Flooring",
    label: "Entire Bathroom 5 to 7 x 11",
    bucket: "bf",
    description: "Entire bathroom ceiling package.",
    variants: [
      { id: "white", label: "White", price: 2695 },
      { id: "pearl", label: "Pearl", price: 2795 },
      { id: "marbles", label: "Marbles", price: 2995 }
    ]
  },
  {
    id: "ceiling-domed",
    category: "Ceilings & Flooring",
    label: "Domed Ceiling 54 to 60 or 65",
    bucket: "bf",
    description: "Domed ceiling panel.",
    variants: [
      { id: "standard", label: "Standard", price: 1200 }
    ]
  },
  {
    id: "flooring-pergo",
    category: "Ceilings & Flooring",
    label: "Pergo Flooring",
    bucket: "labor",
    description: "Price per square foot from the sheet.",
    quantityLabel: "sq ft",
    quantityStep: 1,
    variants: [
      { id: "standard", label: "Per Sq Ft", price: 50 }
    ]
  },
  {
    id: "flooring-vinyl",
    category: "Ceilings & Flooring",
    label: "Linoleum / Vinyl Flooring",
    bucket: "labor",
    description: "Price per square foot from the sheet.",
    quantityLabel: "sq ft",
    quantityStep: 1,
    variants: [
      { id: "standard", label: "Per Sq Ft", price: 46 }
    ]
  },
  {
    id: "jackhammer-charge",
    category: "Labor & Prep",
    label: "Jack Hammer Charge",
    bucket: "labor",
    description: "Jack hammer charge.",
    variants: [
      { id: "standard", label: "Standard", price: 880 }
    ]
  },
  {
    id: "relocate-plumbing-copper",
    category: "Plumbing & Fixtures",
    label: "Relocate Plumbing Copper",
    bucket: "labor",
    description: "Copper plumbing relocation labor.",
    variants: [
      { id: "standard", label: "Standard", price: 880 }
    ]
  },
  {
    id: "move-shower-head-overflow",
    category: "Plumbing & Fixtures",
    label: "Move Shower Head or Move Overflow",
    bucket: "labor",
    description: "Plumbing move labor.",
    variants: [
      { id: "standard", label: "Standard", price: 325 }
    ]
  },
  {
    id: "relocate-drain",
    category: "Plumbing & Fixtures",
    label: "Relocate Drain",
    bucket: "labor",
    description: "Drain relocation labor.",
    variants: [
      { id: "standard", label: "Standard", price: 775 }
    ]
  },
  {
    id: "delta-lahara",
    category: "Plumbing & Fixtures",
    label: "Delta Lahara T17438",
    bucket: "bf",
    description: "Delta Lahara trim set.",
    variants: [
      { id: "chrome", label: "Chrome", price: 950 },
      { id: "brushed-nickel", label: "Brushed Nickel", price: 1100 },
      { id: "black", label: "Black", price: 1200 },
      { id: "orb", label: "Oil Rubbed Bronze", price: 1200 }
    ]
  },
  {
    id: "delta-trinsic",
    category: "Plumbing & Fixtures",
    label: "Delta Trinsic T17459",
    bucket: "bf",
    description: "Delta Trinsic trim set.",
    variants: [
      { id: "chrome", label: "Chrome", price: 1350 },
      { id: "brushed-nickel", label: "Brushed Nickel", price: 1500 },
      { id: "black", label: "Black", price: 1600 },
      { id: "orb", label: "Oil Rubbed Bronze", price: 1600 }
    ]
  },
  {
    id: "delta-kayra-intuition",
    category: "Plumbing & Fixtures",
    label: "Delta Kayra Intuition Set T17433-I",
    bucket: "bf",
    description: "Kayra intuition set.",
    variants: [
      { id: "chrome", label: "Chrome", price: 1500 },
      { id: "brushed-nickel", label: "Brushed Nickel", price: 1650 }
    ]
  },
  {
    id: "delta-kayra-basic",
    category: "Plumbing & Fixtures",
    label: "Delta Kayra Basic T17433",
    bucket: "bf",
    description: "Kayra basic trim set.",
    variants: [
      { id: "chrome", label: "Chrome", price: 950 },
      { id: "brushed-nickel", label: "Brushed Nickel", price: 1200 },
      { id: "black", label: "Black", price: 1200 }
    ]
  },
  {
    id: "delta-ashlyn",
    category: "Plumbing & Fixtures",
    label: "Delta Ashlyn T17464",
    bucket: "bf",
    description: "Ashlyn trim set.",
    variants: [
      { id: "chrome", label: "Chrome", price: 950 },
      { id: "brushed-nickel", label: "Brushed Nickel", price: 1500 },
      { id: "black", label: "Black", price: 1650 },
      { id: "orb", label: "Oil Rubbed Bronze", price: 1650 }
    ]
  },
  {
    id: "delta-lahara-handheld-bar",
    category: "Plumbing & Fixtures",
    label: "Lahara Handheld with Bar and Diverter",
    bucket: "bf",
    description: "Delta handheld with bar and diverter.",
    variants: [
      { id: "chrome", label: "Chrome", price: 500 },
      { id: "brushed-nickel", label: "Brushed Nickel", price: 825 },
      { id: "black", label: "Black", price: 1075 }
    ]
  },
  {
    id: "delta-kinetic-raincan",
    category: "Plumbing & Fixtures",
    label: "Kinetic Raincan Showerhead 3 Setting",
    bucket: "bf",
    description: "Delta raincan showerhead.",
    variants: [
      { id: "chrome", label: "Chrome", price: 575 },
      { id: "brushed-nickel", label: "Brushed Nickel", price: 700 },
      { id: "black", label: "Black", price: 700 }
    ]
  },
  {
    id: "delta-in2ition-kinetic",
    category: "Plumbing & Fixtures",
    label: "In2ition Kinetic Shower Head/Handheld",
    bucket: "bf",
    description: "In2ition handheld combo.",
    variants: [
      { id: "chrome", label: "Chrome", price: 700 },
      { id: "brushed-nickel", label: "Brushed Nickel", price: 825 },
      { id: "black", label: "Black", price: 850 },
      { id: "orb", label: "Oil Rubbed Bronze", price: 850 },
      { id: "brushed-gold", label: "Brushed Gold", price: 850 }
    ]
  },
  {
    id: "moen-flara",
    category: "Plumbing & Fixtures",
    label: "Moen Flara PosiTemp",
    bucket: "bf",
    description: "Moen Flara valve set.",
    variants: [
      { id: "chrome", label: "Chrome", price: 1400 },
      { id: "brushed-nickel", label: "Brushed Nickel", price: 1500 }
    ]
  },
  {
    id: "moen-voss",
    category: "Plumbing & Fixtures",
    label: "Moen Voss T3693",
    bucket: "bf",
    description: "Moen Voss valve set.",
    variants: [
      { id: "chrome", label: "Chrome", price: 1500 },
      { id: "brushed-nickel", label: "Brushed Nickel", price: 1600 },
      { id: "black", label: "Black", price: 1700 },
      { id: "orb", label: "Oil Rubbed Bronze", price: 1600 }
    ]
  },
  {
    id: "elegance-tub-door-60",
    category: "Shower Doors",
    label: "Elegance Tub Door 56 to 60",
    bucket: "doors",
    description: "TD-009-XX-60 and 6055 sizes.",
    variants: [
      { id: "chrome", label: "Chrome", price: 2150 },
      { id: "brushed-nickel", label: "Brushed Nickel", price: 2200 },
      { id: "matte-black", label: "Matte Black", price: 2200 },
      { id: "brushed-gold", label: "Brushed Gold", price: 2395 }
    ]
  },
  {
    id: "elegance-shower-door-60",
    category: "Shower Doors",
    label: "Elegance Shower Door 56 to 60",
    bucket: "doors",
    description: "SD-009-XX-60 size.",
    variants: [
      { id: "chrome", label: "Chrome", price: 2150 },
      { id: "brushed-nickel", label: "Brushed Nickel", price: 2200 },
      { id: "matte-black", label: "Matte Black", price: 2200 },
      { id: "brushed-gold", label: "Brushed Gold", price: 2395 }
    ]
  },
  {
    id: "elegance-shower-door-66",
    category: "Shower Doors",
    label: "Elegance Shower Door 62 to 66",
    bucket: "doors",
    description: "SD-009-XX-66 size.",
    variants: [
      { id: "chrome", label: "Chrome", price: 2250 },
      { id: "brushed-nickel", label: "Brushed Nickel", price: 2300 },
      { id: "matte-black", label: "Matte Black", price: 2300 },
      { id: "brushed-gold", label: "Brushed Gold", price: 2495 }
    ]
  },
  {
    id: "prestige-tub-door-60",
    category: "Shower Doors",
    label: "Prestige Tub Door 56 to 60",
    bucket: "doors",
    description: "Prestige tub door.",
    variants: [
      { id: "bn-clear", label: "Brushed Nickel Clear", price: 2400 },
      { id: "bn-niagara", label: "Brushed Nickel Niagara Rain", price: 2400 }
    ]
  },
  {
    id: "prestige-shower-door-48",
    category: "Shower Doors",
    label: "Prestige Shower Door 44 to 48",
    bucket: "doors",
    description: "Prestige shower door.",
    variants: [
      { id: "clear", label: "Clear", price: 2400 },
      { id: "niagara", label: "Niagara Rain", price: 2400 }
    ]
  },
  {
    id: "prestige-shower-door-60",
    category: "Shower Doors",
    label: "Prestige Shower Door 56 to 60",
    bucket: "doors",
    description: "Prestige shower door.",
    variants: [
      { id: "niagara", label: "Niagara Rain", price: 2400 }
    ]
  },
  {
    id: "neo-angle-door-36",
    category: "Shower Doors",
    label: "Neo Angle Shower Door 36 x 36",
    bucket: "doors",
    description: "Chrome only, clear only.",
    variants: [
      { id: "chrome-clear", label: "Chrome Clear", price: 2100 }
    ]
  },
  {
    id: "neo-angle-door-38",
    category: "Shower Doors",
    label: "Neo Angle Shower Door 38 x 38",
    bucket: "doors",
    description: "Chrome only, clear or decorative.",
    variants: [
      { id: "chrome", label: "Chrome", price: 2100 }
    ]
  },
  {
    id: "curved-door-32",
    category: "Shower Doors",
    label: "Curved Shower Door 32 x 32",
    bucket: "doors",
    description: "Chrome only, clear or Paris Point.",
    variants: [
      { id: "chrome", label: "Chrome", price: 2100 }
    ]
  },
  {
    id: "curved-door-36",
    category: "Shower Doors",
    label: "Curved Shower Door 36 x 36",
    bucket: "doors",
    description: "Chrome only, clear or Paris Point.",
    variants: [
      { id: "chrome", label: "Chrome", price: 2100 }
    ]
  },
  {
    id: "curved-door-40",
    category: "Shower Doors",
    label: "Curved Shower Door 40 x 40",
    bucket: "doors",
    description: "Chrome only, clear or Paris Point.",
    variants: [
      { id: "chrome", label: "Chrome", price: 2400 }
    ]
  },
  {
    id: "latitude-tub-shield-28",
    category: "Shower Doors",
    label: "Latitude Tub Shield 28",
    bucket: "doors",
    description: "Matte black only, clear.",
    variants: [
      { id: "matte-black", label: "Matte Black", price: 1850 }
    ]
  },
  {
    id: "latitude-tub-shield-32",
    category: "Shower Doors",
    label: "Latitude Tub Shield 32",
    bucket: "doors",
    description: "Matte black only, clear.",
    variants: [
      { id: "matte-black", label: "Matte Black", price: 1900 }
    ]
  },
  {
    id: "latitude-shower-shield-29",
    category: "Shower Doors",
    label: "Latitude Shower Shield 28 or 29",
    bucket: "doors",
    description: "Matte black only, clear.",
    variants: [
      { id: "matte-black", label: "Matte Black", price: 2100 }
    ]
  },
  {
    id: "latitude-shower-shield-38-44",
    category: "Shower Doors",
    label: "Latitude Shower Shield 38 or 44",
    bucket: "doors",
    description: "Matte black only, clear.",
    variants: [
      { id: "matte-black", label: "Matte Black", price: 2150 }
    ]
  }
];
