// Climate and weather data for Charlotte metro area locations
// Used to enhance location pages with local weather considerations

export interface ClimateData {
  annualRainfall: string;
  avgSummerHigh: string;
  avgWinterLow: string;
  humidityLevel: string;
  stormSeason: string;
  hailRisk: 'Low' | 'Moderate' | 'High';
  hurricaneRisk: 'Low' | 'Moderate' | 'High';
  iceStormRisk: 'Low' | 'Moderate' | 'High';
  roofingConsiderations: string[];
  recentStormHistory: StormEvent[];
}

export interface StormEvent {
  date: string;
  type: string;
  description: string;
  impact: string;
}

// Charlotte Metro Climate Data
export const CHARLOTTE_CLIMATE: ClimateData = {
  annualRainfall: '44 inches',
  avgSummerHigh: '90°F',
  avgWinterLow: '32°F',
  humidityLevel: 'High (65-75% summer average)',
  stormSeason: 'April - September',
  hailRisk: 'Moderate',
  hurricaneRisk: 'Moderate',
  iceStormRisk: 'Low',
  roofingConsiderations: [
    'UV-resistant shingles recommended due to intense summer sun',
    'Proper attic ventilation critical to manage humidity and heat',
    'Impact-resistant shingles available for hail-prone areas',
    'Wind-resistant installation (130 MPH rated) for storm protection',
    'Algae-resistant shingles prevent black streaking in humid climate',
  ],
  recentStormHistory: [
    {
      date: 'September 2024',
      type: 'Hurricane Helene',
      description: 'Remnants brought heavy rain and high winds to Charlotte metro',
      impact: 'Widespread wind damage to roofs, fallen trees, significant insurance claims',
    },
    {
      date: 'August 2024',
      type: 'Severe Thunderstorm',
      description: 'Multiple rounds of severe storms with damaging winds',
      impact: 'Scattered roof damage throughout Mecklenburg and surrounding counties',
    },
    {
      date: 'May 2024',
      type: 'Hail Storm',
      description: 'Golf ball-sized hail reported in parts of Union and Mecklenburg counties',
      impact: 'Significant hail damage to roofs, vehicles, and property',
    },
    {
      date: 'April 2024',
      type: 'Tornado',
      description: 'EF1 tornado touched down in eastern Mecklenburg County',
      impact: 'Localized severe damage to homes and businesses',
    },
    {
      date: 'December 2023',
      type: 'Ice Storm',
      description: 'Rare ice accumulation across the Charlotte region',
      impact: 'Tree damage, power outages, some ice dam-related roof damage',
    },
  ],
};

// Location-specific climate variations
export const LOCATION_CLIMATE: Record<string, Partial<ClimateData>> = {
  'lake-norman': {
    humidityLevel: 'High (70-80% near water)',
    roofingConsiderations: [
      'Wind-resistant installation essential for lakefront exposure',
      'Materials must withstand constant moisture from lake proximity',
      'Corrosion-resistant flashing for increased humidity',
      'Enhanced ventilation to combat lake-effect moisture',
      'Regular maintenance due to accelerated weathering near water',
    ],
  },
  'cornelius-nc': {
    humidityLevel: 'High (70-80% near Lake Norman)',
    roofingConsiderations: [
      'Waterfront homes require premium wind-resistant installation',
      'Salt air from boat traffic can affect metal components',
      'Lake-effect weather patterns bring sudden storms',
      'Premium architectural shingles recommended for aesthetic standards',
    ],
  },
  'mooresville-nc': {
    roofingConsiderations: [
      'Lakeside and eastern neighborhoods face different weather exposure',
      'Lower Iredell County taxes make roof maintenance a smart investment',
      'Mix of lakefront estates and family homes requires tailored approaches',
    ],
  },
  'hickory-nc': {
    avgWinterLow: '28°F',
    iceStormRisk: 'Moderate',
    roofingConsiderations: [
      'Foothills location brings unique weather patterns',
      'Higher ice storm risk than Charlotte proper',
      'Terrain creates microclimates affecting different neighborhoods',
    ],
  },
  'gastonia-nc': {
    roofingConsiderations: [
      'I-85 corridor location means exposure to storms moving through',
      'Affordable solutions available for budget-conscious homeowners',
      'Historic downtown areas may require architectural considerations',
    ],
  },
  'fort-mill-sc': {
    roofingConsiderations: [
      'South Carolina building codes may differ slightly from NC',
      'Rapid growth means many newer homes with manufacturer warranties',
      'Understanding SC insurance processes important for claims',
    ],
  },
  'rock-hill-sc': {
    roofingConsiderations: [
      'York County experiences same weather patterns as Charlotte',
      'Mix of historic and new construction requires versatile expertise',
      'SC licensing and insurance requirements apply',
    ],
  },
};

// Get climate data for a specific location
export function getClimateData(locationSlug: string): ClimateData {
  const locationSpecific = LOCATION_CLIMATE[locationSlug] || {};
  return {
    ...CHARLOTTE_CLIMATE,
    ...locationSpecific,
    roofingConsiderations: locationSpecific.roofingConsiderations || CHARLOTTE_CLIMATE.roofingConsiderations,
  };
}

// Get seasonal roofing tips
export const SEASONAL_TIPS = {
  spring: {
    title: 'Spring Roofing Tips',
    tips: [
      'Schedule post-winter inspection to identify any damage',
      'Check for ice dam damage from winter',
      'Clean gutters of debris accumulated over winter',
      'Repair any damage before storm season begins',
      'Trim overhanging tree branches',
    ],
  },
  summer: {
    title: 'Summer Roofing Tips',
    tips: [
      'Ensure proper attic ventilation for heat management',
      'Schedule morning installations to avoid afternoon storms',
      'Consider cool roof options for energy savings',
      'Address any storm damage promptly',
      'Check for algae growth in humid conditions',
    ],
  },
  fall: {
    title: 'Fall Roofing Tips',
    tips: [
      'Complete repairs before winter weather arrives',
      'Clean gutters after leaves fall',
      'Check attic insulation before heating season',
      'Inspect and seal flashings',
      'Schedule pre-winter roof inspection',
    ],
  },
  winter: {
    title: 'Winter Roofing Tips',
    tips: [
      'Watch for ice dam formation',
      'Keep gutters clear of ice and debris',
      'Monitor for condensation in attic',
      'Address emergency repairs immediately',
      'Know your emergency roofing contact',
    ],
  },
};
