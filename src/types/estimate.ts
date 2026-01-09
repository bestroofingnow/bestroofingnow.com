export interface RoofSegment {
  pitchDegrees: number;
  azimuthDegrees: number;
  stats: {
    areaMeters2: number;
    sunshineQuantiles: number[];
    groundAreaMeters2: number;
  };
}

export interface SolarData {
  solarPotential: {
    maxArrayPanelsCount: number;
    panelCapacityWatts: number;
    panelHeightMeters: number;
    panelWidthMeters: number;
    panelLifetimeYears: number;
    maxArrayAreaMeters2: number;
    maxSunshineHoursPerYear: number;
    carbonOffsetFactorKgPerMwh: number;
    wholeRoofStats: {
      areaMeters2: number;
      sunshineQuantiles: number[];
      groundAreaMeters2: number;
    };
    buildingStats: {
      areaMeters2: number;
      sunshineQuantiles: number[];
      groundAreaMeters2: number;
    };
    roofSegmentStats: RoofSegment[];
  };
  imageryDate: {
    year: number;
    month: number;
    day: number;
  };
  imageryProcessedDate: {
    year: number;
    month: number;
    day: number;
  };
  center: {
    latitude: number;
    longitude: number;
  };
}

export interface PriceRange {
  low: number;
  mid: number;
  high: number;
}

export interface MaterialEstimate {
  name: string;
  pricePerSqFt: { low: number; mid: number; high: number };
  estimate: PriceRange;
}

export interface RoofEstimate {
  groundSqFt: number;
  roofSqFt: number;
  squares: number;
  pitchDegrees: number;
  pitchRatio: string;
  estimate: PriceRange;
  materialEstimates: MaterialEstimate[];
  address?: string;
  imageryDate?: string;
}

export interface LeadData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city?: string;
  state?: string;
  postalCode?: string;
  tcpaConsent: boolean;
  consentTimestamp: string;
}

export interface GHLWebhookPayload {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  source: string;
  tags: string[];
  customField: {
    roof_square_feet: number;
    roof_squares: number;
    roof_pitch: string;
    shingles_low: number;
    shingles_mid: number;
    shingles_high: number;
    metal_low: number;
    metal_mid: number;
    metal_high: number;
    synthetic_low: number;
    synthetic_mid: number;
    synthetic_high: number;
    coatings_low: number;
    coatings_mid: number;
    coatings_high: number;
    tcpa_consent: string;
    consent_timestamp: string;
  };
}

export interface PlaceDetails {
  formatted_address: string;
  lat: number;
  lng: number;
  city: string;
  state: string;
  postalCode: string;
}

export interface Prediction {
  place_id: string;
  description: string;
  main_text: string;
  secondary_text: string;
}

export interface PlacePrediction {
  place_id: string;
  description: string;
  structured_formatting?: {
    main_text: string;
    secondary_text: string;
  };
}
