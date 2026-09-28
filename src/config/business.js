/**
 * Belric Living — Business Configuration
 * ALL business content, colors, services, contact details, and images live in this single file.
 * Non-technical owners can edit this file to update the entire website.
 */

export const business = {
  // Brand Identity
  name: "Belric Living",
  legalName: "Belric Living Ltd",
  businessType: "Cleaning & Home Renovation Service",
  tagline: "Simple Improvements, Beautiful Results.",
  brandStyle: "Luxury",
  
  // Color Palette - Eye-catching Luxury Architectural Navy/Sapphire & Warm Rose/Champagne Gold
  colors: {
    primary: "#0284C7", // Vibrant Architectural Mediterranean Sapphire / Cyan Glow
    primaryHover: "#0369A1",
    primaryLight: "#F0F9FF",
    secondary: "#E64E7E", // Refined Berry / Rose Accent
    secondaryHover: "#D4396B",
    secondaryLight: "#FDF0F4",
    accentGlow: "#38BDF8", // Luminous Eye-Catching Azure Highlight
    headerBg: "#0B1528", // Rich Deep Royal Midnight Blue (Sophisticated & Eye-catching)
    headerNavText: "#E0E7FF", // Crisp high-legibility Ice Blue text
    headerBorder: "#1E293B",
    headerTopStrip: "#070E1C", // Darker accent bar
    footerBg: "#070E1B", // Deepest midnight navy base
    footerBorder: "#1A2536",
    footerText: "#CBD5E1",
    footerMuted: "#64748B",
    slateDark: "#0B1528",
    slateMedium: "#13213C",
    slateBorder: "#1E293B",
    surfaceCream: "#F8FAFC",
    surfaceWhite: "#FFFFFF",
    textDark: "#0F172A",
    textMuted: "#475569"
  },

  // Location & Contact Details
  city: "London",
  area: "Greater London & Surrounds",
  address: "77 Westdown Rd, London E15 2DA, UK",
  postalCode: "E15 2DA",
  country: "United Kingdom",
  phone: "447475352330",
  phoneDisplay: "+44 7475 352330",
  phoneHref: "tel:447475352330",
  email: "arslanseo049@gmail.com",
  emailHref: "mailto:arslanseo049@gmail.com",
  
  // WhatsApp: Only rendered if a valid phone number is specified
  whatsapp: "", // Left blank as {{WHATSAPP_NUMBER}} was not provided

  // Google Maps Direction Link
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=77+Westdown+Rd%2C+London+E15+2DA%2C+UK",

  // Operating Hours
  openingHours: "Monday – Saturday: 08:00 – 18:00",
  openingHoursNote: "Emergency & weekend consultations available by appointment",

  // CTAs
  mainCtaText: "Book Now",
  mainCtaHref: "#contact",
  secondaryCtaText: "View Services",
  secondaryCtaHref: "#services",
  callCtaText: "Call Us Now",
  directionsCtaText: "Get Directions",

  // Business Description
  description: "Belric Living delivers bespoke residential renovations, kitchen and bathroom transformations, interior enhancements, and turnkey property maintenance across London. With meticulous craft, transparent pricing, and respectful care for your living space, we turn your property aspirations into beautiful, lasting results.",

  // Hero Section Details
  hero: {
    eyebrow: "London · Home Renovation & Property Improvement",
    headline: "Simple Improvements, Beautiful Results.",
    subheadline: "Bespoke home renovations, kitchen & bathroom remodeling, decorating, and maintenance for discerning London homeowners.",
    trustBadge: "Serving London & Home Counties · Fully Insured Craftsmanship",
    backgroundImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
  },

  // About Section Details
  about: {
    eyebrow: "Our Heritage & Approach",
    title: "Crafted for London Living, Executed with Precision",
    lead: "At Belric Living, we believe true home improvement starts with listening and ends with perfection.",
    paragraphs: [
      "Based in London, we specialize in high-calibre home transformations that balance modern aesthetic elegance with durable British craftsmanship.",
      "Whether you are planning a full-scale property remodel, upgrading a kitchen, or seeking diligent ongoing maintenance, our multi-disciplinary team oversees every detail from initial consultation to immaculate handover."
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    imageCaption: "London Site Supervision & Master Craftsmanship",
    highlights: [
      "Direct communication with dedicated project leads",
      "Fixed itemized pricing with zero hidden surcharges",
      "Turnkey handover: every project is left spotless and move-in ready"
    ]
  },

  // Unique Selling Points (Why Choose Us)
  usps: [
    {
      id: "usp-1",
      number: "01",
      title: "London Craftsmanship",
      description: "Proven expertise navigating London period architectures, Victorian terrace nuances, and contemporary modern apartments."
    },
    {
      id: "usp-2",
      number: "02",
      title: "Complete Project Oversight",
      description: "From structural remodeling to fine joinery and final cleaning, every phase is managed cohesively under one roof."
    },
    {
      id: "usp-3",
      number: "03",
      title: "Guaranteed Turnkey Handover",
      description: "We leave every home spotless, debris-free, and thoroughly detailed so you can enjoy your transformed space right away."
    },
    {
      id: "usp-4",
      number: "04",
      title: "Transparent & Accountable",
      description: "Clear fixed scopes, realistic schedules, and prompt friendly consultation whenever you have a question."
    }
  ],

  // Main Services List (10 Services provided by user)
  services: [
    {
      id: "home-renovation",
      title: "Home Renovation",
      category: "Full Property",
      description: "Comprehensive residential renovations revitalizing London properties into cohesive, functional, and striking living environments.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
      features: ["Full house modernization", "Structural reconfigurations", "Turnkey completion"]
    },
    {
      id: "kitchen-remodeling",
      title: "Kitchen Remodeling",
      category: "Culinary Spaces",
      description: "Bespoke cabinetry, quartz and marble countertops, integrated appliances, and ergonomic layouts designed for both family life and culinary entertaining.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
      features: ["Custom island design", "Stone worktop fabrication", "Plumbing & electrics"]
    },
    {
      id: "bathroom-remodeling",
      title: "Bathroom Remodeling",
      category: "Sanctuary Spaces",
      description: "Luxury ensuite, wet room, and family bathroom overhauls with walk-in showers, designer tiling, underfloor heating, and concealed fittings.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
      features: ["Wet-room waterproofing", "Luxury tile layouts", "Sanitaryware fitting"]
    },
    {
      id: "interior-home-improvements",
      title: "Interior Home Improvements",
      category: "Living Areas",
      description: "Architectural wall paneling, modern acoustic solutions, custom alcove storage, and spatial upgrades tailored to elevate everyday comfort.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
      features: ["Bespoke wall mouldings", "Architectural lighting", "Space optimization"]
    },
    {
      id: "flooring-installation",
      title: "Flooring Installation",
      category: "Surfaces",
      description: "Precision installation of engineered hardwood, herringbone parquet, luxury vinyl tiles, and large-format porcelain with subfloor levelling.",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1600&q=80",
      features: ["Herringbone & chevron", "Subfloor soundproofing", "Durable sealants"]
    },
    {
      id: "painting-decorating",
      title: "Painting & Decorating",
      category: "Finishes",
      description: "Flawless surface preparation, heritage sash revival, woodwork enamel, and premium paint application delivering crisp, enduring results.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80",
      features: ["Interior & exterior", "Plaster repair & sanding", "Dustless extraction"]
    },
    {
      id: "drywall-plastering",
      title: "Drywall & Plastering",
      category: "Structure & Walls",
      description: "Structural stud walls, acoustic board hanging, and glass-smooth plaster skimming that creates the flawless canvas for your decor.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      features: ["Stud partitioning", "Skim coat skimming", "Ceiling repairs"]
    },
    {
      id: "door-window-installation",
      title: "Door & Window Installation",
      category: "Openings & Joinery",
      description: "Custom internal solid timber doors, high-efficiency double glazing, bi-fold garden doors, and precision architectural ironmongery.",
      image: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=1600&q=80",
      features: ["Internal & exterior doors", "Thermal efficiency", "Hardware alignment"]
    },
    {
      id: "carpentry-services",
      title: "Carpentry Services",
      category: "Custom Joinery",
      description: "Master carpentry including fitted wardrobes, built-in library bookcases, floating media credenzas, and bespoke architectural woodwork.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      features: ["Fitted wardrobes", "Media walls & alcoves", "Fine timber joinery"]
    },
    {
      id: "home-repair-maintenance",
      title: "Home Repair & Maintenance",
      category: "Property Upkeep",
      description: "Reliable, detail-oriented repair services handling plumbing fixtures, electrical touch-ups, seasonal upkeep, and turnkey maintenance.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80",
      features: ["Prompt diagnostics", "Multi-trade repairs", "Preventative care"]
    }
  ],

  // Secondary Services: empty as none provided in prompt
  secondaryServices: [],

  // Testimonials: Empty because {{TESTIMONIALS}} was not provided.
  // The prompt strictly requires: "TESTIMONIALS — include ONLY if {{TESTIMONIALS}} contains real content. If none provided, omit this section entirely — do not replace it with filler."
  testimonials: [],

  // FAQ Section
  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "Everything You Need to Know",
    description: "Clear answers to common questions about our renovation process, quotes, and delivery across London.",
    items: [
      {
        question: "How do you provide quotes for renovation and improvement projects?",
        answer: "We arrange an initial consultation to examine your property in person, review your vision and requirements, and provide a clear, itemized quotation with zero hidden fees."
      },
      {
        question: "Which areas of London do you serve?",
        answer: "We serve clients across Greater London, including East London, Central London, North London, and neighbouring residential districts."
      },
      {
        question: "Do you oversee all trade coordination and final cleanup?",
        answer: "Yes. Belric Living manages all trades under a single contract. In addition, we ensure a comprehensive post-renovation cleanup, so your home is handed back spotless and move-in ready."
      },
      {
        question: "Are your projects insured and compliant with UK building regulations?",
        answer: "Every project undertaken by Belric Living is backed by comprehensive public liability insurance and executed in full compliance with current UK building and safety codes."
      }
    ]
  },

  // Contact Section Details
  contact: {
    eyebrow: "Contact Belric Living",
    title: "Discuss Your Project With Our London Team",
    subheadline: "Whether you need a full home renovation or specific property improvements, we are ready to assist with expert guidance.",
    formTitle: "Request a Consultation",
    formSubtitle: "Tell us about your home improvement needs and we will get back to you within 24 hours.",
    submitText: "Send Consultation Request",
    successMessage: "Thank you for contacting Belric Living. We have received your request and our team will get in touch with you shortly.",
    fields: {
      name: "Your Full Name",
      phone: "Phone Number",
      email: "Email Address",
      service: "Service Required",
      message: "Project Details or Property Notes"
    }
  },

  // Navigation Links
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ],

  // Footer Details
  footer: {
    tagline: "Simple Improvements, Beautiful Results.",
    copyrightYear: 2026,
    copyrightText: "Belric Living. All rights reserved.",
    privacyText: "Privacy Policy",
    termsText: "Terms of Service"
  }
};
