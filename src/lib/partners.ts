// Trusted Partners & Roofing Network - Curated partner data
// Out-of-market roofers for reciprocal link building + local complementary services

export interface Partner {
  name: string;
  url: string;
  description: string;
  location: string;
  serviceType: PartnerType;
  specialty: string;
  reciprocal?: boolean;
}

export type PartnerType =
  | 'roofing-network'
  | 'hvac'
  | 'plumbing'
  | 'electrical'
  | 'landscaping'
  | 'painting'
  | 'general-contractor'
  | 'insurance'
  | 'real-estate'
  | 'home-inspection';

export interface PartnerCategory {
  type: PartnerType;
  label: string;
  description: string;
}

export const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    type: 'roofing-network',
    label: 'Trusted Roofing Network',
    description: 'We have built relationships with reputable roofing contractors across the country. If you need a trusted roofer outside the Charlotte area, these are companies we personally recommend.',
  },
  {
    type: 'hvac',
    label: 'HVAC & Climate Control',
    description: 'Proper attic ventilation and HVAC systems work hand-in-hand with your roof. These are Charlotte-area HVAC professionals we trust.',
  },
  {
    type: 'plumbing',
    label: 'Plumbing Services',
    description: 'Roof leaks often require coordination with plumbing professionals. These local plumbers have our endorsement.',
  },
  {
    type: 'electrical',
    label: 'Electrical Services',
    description: 'From solar panel installations to storm damage repairs, these electricians are reliable partners we work with regularly.',
  },
  {
    type: 'landscaping',
    label: 'Landscaping & Exterior',
    description: 'After a roof project, your landscaping may need attention. These companies help restore and enhance your property.',
  },
  {
    type: 'painting',
    label: 'Painting & Exterior Finishing',
    description: 'A new roof often calls for fresh exterior paint. These painters deliver quality results that complement your roofing investment.',
  },
  {
    type: 'general-contractor',
    label: 'General Contractors',
    description: 'For larger renovation projects that go beyond roofing, these general contractors share our standards for quality and integrity.',
  },
  {
    type: 'insurance',
    label: 'Insurance Professionals',
    description: 'Navigating roof damage insurance claims can be complex. These insurance professionals help homeowners get fair coverage.',
  },
  {
    type: 'real-estate',
    label: 'Real Estate Professionals',
    description: 'Buying or selling a home? These real estate agents understand the value of a quality roof and can guide you through the process.',
  },
  {
    type: 'home-inspection',
    label: 'Home Inspection Services',
    description: 'A thorough home inspection includes your roof. These inspectors provide detailed, honest assessments.',
  },
];

// Curated partner list - populate with real companies as partnerships are established
// TODO: Replace placeholder entries with actual partner companies
export const PARTNERS: Partner[] = [
  // === NATIONWIDE ROOFING NETWORK ===
  {
    name: 'Example Roofing Co - Austin',
    url: 'https://example.com',
    description: 'Family-owned roofing contractor serving the greater Austin, Texas area with residential and commercial roofing services including shingle, metal, and tile roofing.',
    location: 'Austin, TX',
    serviceType: 'roofing-network',
    specialty: 'Residential & Commercial Roofing',
    reciprocal: true,
  },
  {
    name: 'Example Roofing Co - Tampa',
    url: 'https://example.com',
    description: 'Licensed Florida roofing contractor specializing in hurricane-resistant roofing systems for homes and businesses throughout the Tampa Bay area.',
    location: 'Tampa, FL',
    serviceType: 'roofing-network',
    specialty: 'Storm-Resistant Roofing',
    reciprocal: true,
  },
  {
    name: 'Example Roofing Co - Denver',
    url: 'https://example.com',
    description: 'Colorado roofing experts specializing in hail damage repair and high-altitude roofing solutions for the Denver metro area.',
    location: 'Denver, CO',
    serviceType: 'roofing-network',
    specialty: 'Hail Damage & Mountain Roofing',
    reciprocal: true,
  },

  // === LOCAL HOME SERVICE PARTNERS ===
  {
    name: 'Example HVAC Charlotte',
    url: 'https://example.com',
    description: 'Charlotte HVAC contractor specializing in attic ventilation, energy-efficient climate systems, and whole-home comfort solutions.',
    location: 'Charlotte, NC',
    serviceType: 'hvac',
    specialty: 'Residential HVAC & Attic Ventilation',
  },
  {
    name: 'Example Plumbing Charlotte',
    url: 'https://example.com',
    description: 'Licensed Charlotte plumber providing emergency leak repair, water heater installation, and whole-home re-piping services.',
    location: 'Charlotte, NC',
    serviceType: 'plumbing',
    specialty: 'Emergency Plumbing & Leak Repair',
  },
  {
    name: 'Example Electrician Charlotte',
    url: 'https://example.com',
    description: 'Full-service electrical contractor in Charlotte specializing in residential wiring, panel upgrades, and solar panel electrical connections.',
    location: 'Charlotte, NC',
    serviceType: 'electrical',
    specialty: 'Residential Electrical & Solar',
  },
];

export function getPartnersByType(type: PartnerType): Partner[] {
  return PARTNERS.filter(p => p.serviceType === type);
}

export function getNetworkRoofers(): Partner[] {
  return PARTNERS.filter(p => p.serviceType === 'roofing-network');
}

export function getLocalPartners(): Partner[] {
  return PARTNERS.filter(p => p.serviceType !== 'roofing-network');
}
