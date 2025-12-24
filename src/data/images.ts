// WordPress Media URLs from bestroofingnow.com

export const IMAGES = {
  // Logos
  logo: {
    main: 'https://bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png',
    white: 'https://bestroofingnow.com/wp-content/uploads/2023/03/best-roofing-now-logo-white-text-w-tagline.png',
  },

  // Manufacturer Logos
  manufacturers: {
    certainteed: 'https://bestroofingnow.com/wp-content/uploads/2025/02/certainteed-logo.webp',
    gaf: 'https://bestroofingnow.com/wp-content/uploads/2023/03/gaf-logo.png',
    owensCorning: 'https://bestroofingnow.com/wp-content/uploads/2023/03/oc-logo.svg',
  },

  // Trust Badges & Certifications
  badges: {
    bbb: 'https://bestroofingnow.com/wp-content/uploads/2025/08/Untitled-design-6.png',
    certainteedCertified: 'https://bestroofingnow.com/wp-content/uploads/2025/08/Untitled-design-5.png',
    blocSponsor: 'https://bestroofingnow.com/wp-content/uploads/2025/08/Untitled-design-7.png',
    lakeNormanChamber: 'https://bestroofingnow.com/wp-content/uploads/2025/08/Untitled-design-11.png',
  },

  // Media Mentions
  press: {
    cbs: 'https://bestroofingnow.com/wp-content/uploads/2025/04/cbs-logo-png_seeklogo-27357-removebg-preview.webp',
    digitalJournal: 'https://bestroofingnow.com/wp-content/uploads/2025/04/Digital-Journal-logo-removebg-preview.webp',
  },

  // Hero Images
  hero: {
    homepage: 'https://bestroofingnow.com/wp-content/uploads/2025/11/Best-Roofing-Now-Homepage.png',
    ecoFriendly: 'https://bestroofingnow.com/wp-content/uploads/2025/01/Eco-Friendly-Roofing-Materials-1024x1024.png',
  },

  // Service Images
  services: {
    residential: 'https://bestroofingnow.com/wp-content/uploads/2025/08/residential-roofing.webp',
    commercial: 'https://bestroofingnow.com/wp-content/uploads/2025/08/commercial-roofing.webp',
    emergency: 'https://bestroofingnow.com/wp-content/uploads/2025/08/emergency-roofing.webp',
    stormDamage: 'https://bestroofingnow.com/wp-content/uploads/2025/08/storm-damage.webp',
    gutters: 'https://bestroofingnow.com/wp-content/uploads/2025/08/gutters.webp',
    siding: 'https://bestroofingnow.com/wp-content/uploads/2025/08/siding.webp',
  },

  // Team Photos
  team: {
    roofer1: 'https://bestroofingnow.com/wp-content/uploads/2025/09/roofer-uniform.webp',
    roofer2: 'https://bestroofingnow.com/wp-content/uploads/2025/09/head-roofer.webp',
    professional: 'https://bestroofingnow.com/wp-content/uploads/2025/09/professional-roofer.webp',
  },

  // Project Photos (Before/After)
  projects: {
    metalRoofBefore: 'https://bestroofingnow.com/wp-content/uploads/2025/08/metal-roof-before.webp',
    metalRoofAfter: 'https://bestroofingnow.com/wp-content/uploads/2025/08/metal-roof-after.webp',
    flatRoofBefore: 'https://bestroofingnow.com/wp-content/uploads/2025/08/flat-roof-before.webp',
    flatRoofAfter: 'https://bestroofingnow.com/wp-content/uploads/2025/08/flat-roof-after.webp',
  },

  // Location-specific images (Charlotte area neighborhoods)
  locations: {
    charlotte: 'https://bestroofingnow.com/wp-content/uploads/2025/08/charlotte-skyline.webp',
    lakeNorman: 'https://bestroofingnow.com/wp-content/uploads/2025/08/lake-norman.webp',
    huntersville: 'https://bestroofingnow.com/wp-content/uploads/2025/08/huntersville.webp',
    concord: 'https://bestroofingnow.com/wp-content/uploads/2025/08/concord.webp',
  },

  // Educational Content
  education: {
    roofParts: 'https://bestroofingnow.com/wp-content/uploads/2025/08/roof-parts-diagram.webp',
    inspectionChecklist: 'https://bestroofingnow.com/wp-content/uploads/2025/08/inspection-checklist.webp',
    stormDamageGuide: 'https://bestroofingnow.com/wp-content/uploads/2025/08/storm-damage-guide.webp',
  },

  // Default/Placeholder
  placeholder: 'https://bestroofingnow.com/wp-content/uploads/2025/01/Eco-Friendly-Roofing-Materials-1024x1024.png',
};

// Helper function to get image URL with fallback
export function getImageUrl(path: string, fallback?: string): string {
  return path || fallback || IMAGES.placeholder;
}
