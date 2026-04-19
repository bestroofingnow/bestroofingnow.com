// Lake Norman Expertise / Knowledge Graph Schema
//
// Emits a rich Organization schema with knowsAbout (LKN-specific topics),
// areaServed (named LKN neighborhoods as Place entities), and memberOf
// (LKN partnerships). AI engines build knowledge graphs from these entities
// and use them to answer "who is the expert on Lake Norman roofing" queries.
//
// Drop on LKN hub pages alongside the existing LocalBusinessSchema. The two
// describe the same entity at different levels of detail — Google explicitly
// supports multiple Organization schemas referring to the same @id.

import { SITE_CONFIG } from '@/lib/constants';

const SITE = SITE_CONFIG.url;

const LKN_NEIGHBORHOODS = [
  // Cornelius
  { name: 'The Peninsula', city: 'Cornelius', state: 'NC', containedIn: 'Cornelius' },
  { name: 'Antiquity', city: 'Cornelius', state: 'NC', containedIn: 'Cornelius' },
  { name: 'Jetton Cove', city: 'Cornelius', state: 'NC', containedIn: 'Cornelius' },
  // Davidson
  { name: 'River Run Country Club', city: 'Davidson', state: 'NC', containedIn: 'Davidson' },
  { name: 'Davidson Pointe', city: 'Davidson', state: 'NC', containedIn: 'Davidson' },
  // Mooresville
  { name: 'The Point at Trump National', city: 'Mooresville', state: 'NC', containedIn: 'Mooresville' },
  { name: 'The Farms', city: 'Mooresville', state: 'NC', containedIn: 'Mooresville' },
  { name: 'Curtis Pond', city: 'Mooresville', state: 'NC', containedIn: 'Mooresville' },
  { name: 'Cove Creek', city: 'Mooresville', state: 'NC', containedIn: 'Mooresville' },
  // Huntersville
  { name: 'Birkdale', city: 'Huntersville', state: 'NC', containedIn: 'Huntersville' },
  { name: 'Vermillion', city: 'Huntersville', state: 'NC', containedIn: 'Huntersville' },
  { name: 'Skybrook', city: 'Huntersville', state: 'NC', containedIn: 'Huntersville' },
  { name: 'Northstone Country Club', city: 'Huntersville', state: 'NC', containedIn: 'Huntersville' },
  // Denver
  { name: 'Sailview', city: 'Denver', state: 'NC', containedIn: 'Denver' },
  { name: 'Governors Island', city: 'Denver', state: 'NC', containedIn: 'Denver' },
];

const LKN_CITIES = [
  { name: 'Cornelius', state: 'NC', lat: 35.4868, lon: -80.8601 },
  { name: 'Davidson', state: 'NC', lat: 35.4993, lon: -80.8487 },
  { name: 'Mooresville', state: 'NC', lat: 35.5848, lon: -80.8101 },
  { name: 'Huntersville', state: 'NC', lat: 35.4107, lon: -80.8429 },
  { name: 'Denver', state: 'NC', lat: 35.5304, lon: -81.0312 },
  { name: 'Sherrills Ford', state: 'NC', lat: 35.5945, lon: -80.9545 },
  { name: 'Statesville', state: 'NC', lat: 35.7826, lon: -80.8873 },
  { name: 'Troutman', state: 'NC', lat: 35.7029, lon: -80.8965 },
  { name: 'Terrell', state: 'NC', lat: 35.6160, lon: -80.9620 },
];

const KNOWS_ABOUT = [
  'Lake Norman roofing',
  'Lake Norman waterfront roofing',
  'Lake Norman wind-resistant roofing',
  'Lake Norman storm damage repair',
  'Lake Norman ice storm damage roofing',
  'Lake Norman hail damage roof repair',
  'Lake Norman luxury and estate roofing',
  'Lake Norman HOA architectural review committee approval',
  'The Peninsula Cornelius roofing standards',
  'Trump National Charlotte (The Point Mooresville) roofing standards',
  'River Run Country Club Davidson roofing',
  'Standing seam metal roofing for Lake Norman',
  'Natural slate roofing for Lake Norman estates',
  'Synthetic slate roofing (DaVinci, Brava, F-Wave, CertainTeed Symphony)',
  'Cedar shake roofing for Lake Norman lakefront homes',
  'Tile roofing (clay and concrete) for Lake Norman',
  'Solar roofing in Lake Norman (GAF Timberline Solar, Tesla Solar Roof)',
  'Class 4 impact-resistant shingles for North Carolina insurance discounts',
  'NC Department of Insurance hail and wind claim process',
  'Insurance claim documentation for Lake Norman storm damage',
  'CertainTeed SELECT ShingleMaster, GAF Master Elite, Owens Corning Platinum Preferred installation',
];

interface LKNExpertiseSchemaProps {
  pageUrl?: string;
}

export function LKNExpertiseSchema({ pageUrl }: LKNExpertiseSchemaProps = {}) {
  const id = `${pageUrl ?? SITE}/#lake-norman-expertise`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'RoofingContractor'],
    '@id': id,
    name: 'Best Roofing Now',
    alternateName: 'Best Roofing Now LLC',
    url: SITE,
    description:
      "Best Roofing Now is the most community-embedded roofing contractor serving the Lake Norman region of North Carolina. Veteran-owned, BBB A+ accredited, 5.0 Google rating, certified by CertainTeed, GAF, and Owens Corning. Specialized expertise across Lake Norman waterfront, premium estate, golf community, and HOA-governed roofing projects.",
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '10130 Mallard Creek Rd, Suite 300',
      addressLocality: 'Charlotte',
      addressRegion: 'NC',
      postalCode: '28262',
      addressCountry: 'US',
    },
    foundingDate: SITE_CONFIG.founded,
    knowsAbout: KNOWS_ABOUT,
    areaServed: [
      // Lake Norman as the umbrella region
      {
        '@type': 'Place',
        name: 'Lake Norman',
        '@id': 'https://en.wikipedia.org/wiki/Lake_Norman',
        sameAs: 'https://en.wikipedia.org/wiki/Lake_Norman',
      },
      // Cities
      ...LKN_CITIES.map((c) => ({
        '@type': 'City',
        name: `${c.name}, ${c.state}`,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: c.lat,
          longitude: c.lon,
        },
      })),
      // Named neighborhoods
      ...LKN_NEIGHBORHOODS.map((n) => ({
        '@type': 'Place',
        name: `${n.name} (${n.city}, ${n.state})`,
        containedInPlace: {
          '@type': 'City',
          name: `${n.containedIn}, ${n.state}`,
        },
      })),
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'Lake Norman Chamber of Commerce',
        url: 'https://lakenormanchamber.org',
        sameAs: 'https://business.lakenormanchamber.org/directory/details/best-roofing-now-4317292',
      },
      {
        '@type': 'Organization',
        name: 'LKN Small Business Network',
        url: 'https://lknsbn.com',
      },
      {
        '@type': 'Organization',
        name: 'LKN Connect Community',
        url: 'https://lknconnect.com',
      },
      {
        '@type': 'Organization',
        name: 'Better Business Bureau (BBB) Accredited Business',
        url: 'https://www.bbb.org/',
      },
    ],
    award: [
      'BBB A+ Accredited',
      '5.0 Google Star Rating',
      'CertainTeed SELECT ShingleMaster',
      'GAF Master Elite',
      'Owens Corning Platinum Preferred Contractor',
      'Veteran-Owned Business',
    ],
    slogan: 'Lake Norman\'s Most Community-Rooted Roofing Contractor',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
