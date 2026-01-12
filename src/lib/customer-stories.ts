// Customer Stories Data - Derived from Past Customers CSV
// Links completed projects to neighborhoods for local SEO

export interface CustomerStory {
  id: string;
  name: string;  // First name only for privacy
  street: string;  // Cleaned street (no number)
  city: string;
  state: string;
  zip: string;
  lat: number;
  lng: number;
  serviceDate: string;
  serviceYear: number;
  serviceMonth: string;
  product: string | null;  // CertainTeed Landmark, GAF Timberline HDZ, etc.
  productColor: string | null;
  serviceType: string;  // Service Provided, Insurance Work, Repairs, etc.
  neighborhoodSlug: string | null;  // Mapped neighborhood if in Charlotte
}

// Charlotte zip code to neighborhood mapping
const ZIP_TO_NEIGHBORHOOD: Record<string, string> = {
  // Myers Park, Eastover area
  '28207': 'myers-park',
  '28209': 'myers-park',
  // Dilworth, South End
  '28203': 'dilworth',
  // NoDa, Plaza Midwood
  '28205': 'plaza-midwood',
  // University area
  '28262': 'university-city',
  // Ballantyne
  '28277': 'ballantyne',
  // SouthPark
  '28211': 'southpark',
  '28210': 'southpark',
  '28226': 'southpark',
  // Steele Creek
  '28273': 'steele-creek',
  '28278': 'steele-creek',
  // Highland Creek
  '28269': 'highland-creek',
  // Mountain Island
  '28214': 'mountain-island',
  // Prosperity Village / University
  '28213': 'prosperity-village',
  // Eastland / Hickory Grove
  '28212': 'hickory-grove',
  '28215': 'hickory-grove',
  '28227': 'mint-hill',
  // Uptown
  '28202': 'uptown',
  '28206': 'noda',
  // West Charlotte
  '28208': 'west-charlotte',
  '28216': 'mountain-island',
  '28217': 'steele-creek',
  // South Charlotte
  '28270': 'providence',
};

// Map city to location slug
const CITY_TO_SLUG: Record<string, string> = {
  'Charlotte': 'charlotte-nc',
  'Huntersville': 'huntersville-nc',
  'Cornelius': 'cornelius-nc',
  'Davidson': 'davidson-nc',
  'Mooresville': 'mooresville-nc',
  'Concord': 'concord-nc',
  'Harrisburg': 'harrisburg-nc',
  'Kannapolis': 'kannapolis-nc',
  'Mint Hill': 'mint-hill-nc',
  'Matthews': 'matthews-nc',
  'Indian Trail': 'indian-trail-nc',
  'Monroe': 'monroe-nc',
  'Waxhaw': 'waxhaw-nc',
  'Fort Mill': 'fort-mill-sc',
  'Rock Hill': 'rock-hill-sc',
  'Denver': 'denver-nc',
  'Mount Holly': 'mount-holly-nc',
  'Gastonia': 'gastonia-nc',
  'Pineville': 'pineville-nc',
  'Salisbury': 'salisbury-nc',
  'Statesville': 'statesville-nc',
  'Lincolnton': 'lincolnton-nc',
  'Maiden': 'maiden-nc',
  'Dallas': 'dallas-nc',
  'Shelby': 'shelby-nc',
  'Albemarle': 'albemarle-nc',
};

// Parse month from date string like "Friday, January 6th 2023, 10:23 am"
function parseServiceDate(dateStr: string): { year: number; month: string } {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
  let year = 2023;
  let month = 'January';

  for (const m of months) {
    if (dateStr.includes(m)) {
      month = m;
      break;
    }
  }

  const yearMatch = dateStr.match(/20\d{2}/);
  if (yearMatch) {
    year = parseInt(yearMatch[0]);
  }

  return { year, month };
}

// Customer stories data - processed from CSV
export const CUSTOMER_STORIES: CustomerStory[] = [
  // Charlotte - University City area (28262)
  {
    id: 'adam-gene-downs',
    name: 'Adam',
    street: 'Gene Downs Road',
    city: 'Charlotte',
    state: 'NC',
    zip: '28262',
    lat: 35.3465398,
    lng: -80.7149072,
    serviceDate: 'August 2025',
    serviceYear: 2025,
    serviceMonth: 'August',
    product: null,
    productColor: null,
    serviceType: 'Service Provided',
    neighborhoodSlug: 'university-city',
  },
  {
    id: 'altamease-hemby-woods',
    name: 'Altamease',
    street: 'Hemby Woods Drive',
    city: 'Charlotte',
    state: 'NC',
    zip: '28262',
    lat: 35.3000372,
    lng: -80.7907695,
    serviceDate: 'July 2024',
    serviceYear: 2024,
    serviceMonth: 'July',
    product: 'CertainTeed Landmark',
    productColor: 'Georgetown Gray',
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: 'university-city',
  },
  {
    id: 'elizabeth-rumstone',
    name: 'Elizabeth',
    street: 'Rumstone Lane',
    city: 'Charlotte',
    state: 'NC',
    zip: '28262',
    lat: 35.2994195,
    lng: -80.7804294,
    serviceDate: 'August 2023',
    serviceYear: 2023,
    serviceMonth: 'August',
    product: null,
    productColor: null,
    serviceType: 'Service Provided',
    neighborhoodSlug: 'university-city',
  },
  // Charlotte - Highland Creek / Prosperity (28269)
  {
    id: 'james-morningsong',
    name: 'James',
    street: 'Morningsong Lane',
    city: 'Charlotte',
    state: 'NC',
    zip: '28269',
    lat: 35.3806089,
    lng: -80.774827,
    serviceDate: 'January 2023',
    serviceYear: 2023,
    serviceMonth: 'January',
    product: null,
    productColor: null,
    serviceType: 'Service Provided',
    neighborhoodSlug: 'highland-creek',
  },
  {
    id: 'larry-briggs',
    name: 'Larry',
    street: 'Briggs Drive',
    city: 'Charlotte',
    state: 'NC',
    zip: '28269',
    lat: 35.3223686,
    lng: -80.7900611,
    serviceDate: 'September 2023',
    serviceYear: 2023,
    serviceMonth: 'September',
    product: 'CertainTeed Landmark',
    productColor: 'Georgetown Gray',
    serviceType: 'Full Roof Replacement with Gutters',
    neighborhoodSlug: 'highland-creek',
  },
  {
    id: 'kimberly-coopers-ridge',
    name: 'Kimberly',
    street: 'Coopers Ridge Lane',
    city: 'Charlotte',
    state: 'NC',
    zip: '28269',
    lat: 35.3716554,
    lng: -80.7591788,
    serviceDate: 'June 2023',
    serviceYear: 2023,
    serviceMonth: 'June',
    product: 'CertainTeed Landmark',
    productColor: 'Moire Black',
    serviceType: 'Insurance Claim Roof Replacement',
    neighborhoodSlug: 'highland-creek',
  },
  {
    id: 'linda-chapel-ridge',
    name: 'Linda',
    street: 'Chapel Ridge Road',
    city: 'Charlotte',
    state: 'NC',
    zip: '28269',
    lat: 35.3453193,
    lng: -80.7886547,
    serviceDate: 'May 2023',
    serviceYear: 2023,
    serviceMonth: 'May',
    product: 'CertainTeed Landmark',
    productColor: 'Weathered Wood',
    serviceType: 'Insurance Claim Roof Replacement',
    neighborhoodSlug: 'highland-creek',
  },
  {
    id: 'margaret-hilltop',
    name: 'Margaret',
    street: 'Hilltop Circle',
    city: 'Charlotte',
    state: 'NC',
    zip: '28269',
    lat: 35.2901712,
    lng: -80.804665,
    serviceDate: 'October 2023',
    serviceYear: 2023,
    serviceMonth: 'October',
    product: 'GAF Timberline HDZ',
    productColor: 'Weathered Wood',
    serviceType: 'Full Roof Replacement with Gutters & Paint',
    neighborhoodSlug: 'highland-creek',
  },
  // Charlotte - Ballantyne (28277)
  {
    id: 'gary-pomerane',
    name: 'Gary',
    street: 'Pomerane Place',
    city: 'Charlotte',
    state: 'NC',
    zip: '28277',
    lat: 35.0296037,
    lng: -80.8369788,
    serviceDate: 'August 2023',
    serviceYear: 2023,
    serviceMonth: 'August',
    product: 'GAF Timberline HDZ',
    productColor: 'Pewter',
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: 'ballantyne',
  },
  {
    id: 'kaushal-chilvary',
    name: 'Kaushal',
    street: 'Chilvary Drive',
    city: 'Charlotte',
    state: 'NC',
    zip: '28277',
    lat: 35.0598642,
    lng: -80.7945832,
    serviceDate: 'June 2024',
    serviceYear: 2024,
    serviceMonth: 'June',
    product: null,
    productColor: null,
    serviceType: 'Roof Repairs',
    neighborhoodSlug: 'ballantyne',
  },
  {
    id: 'liz-shining-rock',
    name: 'Liz',
    street: 'Shining Rock Court',
    city: 'Charlotte',
    state: 'NC',
    zip: '28277',
    lat: 35.0595257,
    lng: -80.8213562,
    serviceDate: 'June 2024',
    serviceYear: 2024,
    serviceMonth: 'June',
    product: null,
    productColor: null,
    serviceType: 'Roof Repairs',
    neighborhoodSlug: 'ballantyne',
  },
  // Charlotte - SouthPark (28210, 28211, 28226)
  {
    id: 'bill-wynfaire',
    name: 'Bill',
    street: 'Wynfaire Lane',
    city: 'Charlotte',
    state: 'NC',
    zip: '28210',
    lat: 35.1250868,
    lng: -80.8296044,
    serviceDate: 'January 2023',
    serviceYear: 2023,
    serviceMonth: 'January',
    product: 'CertainTeed Landmark',
    productColor: 'Driftwood',
    serviceType: 'Insurance Claim Roof Replacement',
    neighborhoodSlug: 'southpark',
  },
  {
    id: 'lisa-thermal',
    name: 'Lisa',
    street: 'Thermal Road',
    city: 'Charlotte',
    state: 'NC',
    zip: '28211',
    lat: 35.1547372,
    lng: -80.7600446,
    serviceDate: 'January 2023',
    serviceYear: 2023,
    serviceMonth: 'January',
    product: null,
    productColor: null,
    serviceType: 'Service Provided',
    neighborhoodSlug: 'southpark',
  },
  {
    id: 'satish-greentree',
    name: 'Satish',
    street: 'Greentree Drive',
    city: 'Charlotte',
    state: 'NC',
    zip: '28211',
    lat: 35.1662136,
    lng: -80.8068499,
    serviceDate: 'January 2023',
    serviceYear: 2023,
    serviceMonth: 'January',
    product: null,
    productColor: null,
    serviceType: 'Roof Repairs',
    neighborhoodSlug: 'southpark',
  },
  {
    id: 'daniel-benridge',
    name: 'Daniel',
    street: 'Benridge Lane',
    city: 'Charlotte',
    state: 'NC',
    zip: '28226',
    lat: 35.0994554,
    lng: -80.8053985,
    serviceDate: 'January 2023',
    serviceYear: 2023,
    serviceMonth: 'January',
    product: 'GAF Timberline HDZ',
    productColor: 'Williamsburg Slate',
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: 'southpark',
  },
  // Charlotte - Plaza Midwood / NoDa (28205)
  {
    id: 'cameron-matheson',
    name: 'Cameron',
    street: 'Matheson Avenue',
    city: 'Charlotte',
    state: 'NC',
    zip: '28205',
    lat: 35.2386266,
    lng: -80.8005922,
    serviceDate: 'August 2025',
    serviceYear: 2025,
    serviceMonth: 'August',
    product: 'CertainTeed Landmark',
    productColor: 'Charcoal Black',
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: 'plaza-midwood',
  },
  {
    id: 'camille-garrison',
    name: 'Camille',
    street: 'Garrison Street',
    city: 'Charlotte',
    state: 'NC',
    zip: '28205',
    lat: 35.2438898,
    lng: -80.803177,
    serviceDate: 'January 2023',
    serviceYear: 2023,
    serviceMonth: 'January',
    product: 'GAF Timberline HDZ',
    productColor: 'Weathered Wood',
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: 'plaza-midwood',
  },
  {
    id: 'cj-brighton',
    name: 'CJ',
    street: 'Brighton Place',
    city: 'Charlotte',
    state: 'NC',
    zip: '28205',
    lat: 35.2059442,
    lng: -80.7815139,
    serviceDate: 'May 2023',
    serviceYear: 2023,
    serviceMonth: 'May',
    product: 'CertainTeed Landmark',
    productColor: 'Charcoal Black',
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: 'plaza-midwood',
  },
  // Charlotte - Dilworth (28203)
  {
    id: 'john-charlotte-drive',
    name: 'John',
    street: 'Charlotte Drive',
    city: 'Charlotte',
    state: 'NC',
    zip: '28203',
    lat: 35.1992586,
    lng: -80.8480066,
    serviceDate: 'September 2023',
    serviceYear: 2023,
    serviceMonth: 'September',
    product: 'CertainTeed Landmark',
    productColor: 'Appalachian Sky',
    serviceType: 'Insurance Claim with Gutters',
    neighborhoodSlug: 'dilworth',
  },
  {
    id: 'julia-charlotte-drive',
    name: 'Julia',
    street: 'Charlotte Drive',
    city: 'Charlotte',
    state: 'NC',
    zip: '28203',
    lat: 35.1988657,
    lng: -80.848439,
    serviceDate: 'June 2024',
    serviceYear: 2024,
    serviceMonth: 'June',
    product: 'CertainTeed Landmark Solaris',
    productColor: 'Granite Gray',
    serviceType: 'Energy-Efficient Roof Replacement',
    neighborhoodSlug: 'dilworth',
  },
  // Huntersville
  {
    id: 'andrew-blackstone',
    name: 'Andrew',
    street: 'Blackstone Drive',
    city: 'Huntersville',
    state: 'NC',
    zip: '28078',
    lat: 35.4103152,
    lng: -80.8322861,
    serviceDate: 'December 2024',
    serviceYear: 2024,
    serviceMonth: 'December',
    product: 'CertainTeed Landmark',
    productColor: 'Georgetown Gray',
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: null,
  },
  {
    id: 'cherie-newstead',
    name: 'Cherie',
    street: 'Newstead Road',
    city: 'Huntersville',
    state: 'NC',
    zip: '28078',
    lat: 35.413964,
    lng: -80.830437,
    serviceDate: 'August 2025',
    serviceYear: 2025,
    serviceMonth: 'August',
    product: null,
    productColor: null,
    serviceType: 'Service Provided',
    neighborhoodSlug: null,
  },
  {
    id: 'fred-mt-holly-huntersville',
    name: 'Fred',
    street: 'Mount Holly-Huntersville Road',
    city: 'Huntersville',
    state: 'NC',
    zip: '28078',
    lat: 35.3565294,
    lng: -80.8710952,
    serviceDate: 'January 2023',
    serviceYear: 2023,
    serviceMonth: 'January',
    product: 'GAF Timberline HDZ',
    productColor: 'Charcoal',
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: null,
  },
  // Cornelius
  {
    id: 'herschel-heritage-green',
    name: 'Herschel',
    street: 'Heritage Green Drive',
    city: 'Cornelius',
    state: 'NC',
    zip: '28031',
    lat: 35.4672793,
    lng: -80.8541902,
    serviceDate: 'July 2025',
    serviceYear: 2025,
    serviceMonth: 'July',
    product: 'CertainTeed Landmark',
    productColor: 'Charcoal Black',
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: null,
  },
  {
    id: 'lisa-smith-circle',
    name: 'Lisa',
    street: 'Smith Circle',
    city: 'Cornelius',
    state: 'NC',
    zip: '28031',
    lat: 35.4801174,
    lng: -80.8679647,
    serviceDate: 'October 2023',
    serviceYear: 2023,
    serviceMonth: 'October',
    product: 'CertainTeed Landmark',
    productColor: 'Charcoal Black',
    serviceType: 'Insurance Claim Roof Replacement',
    neighborhoodSlug: null,
  },
  // Concord
  {
    id: 'roy-eastover',
    name: 'Roy',
    street: 'Eastover Drive Southeast',
    city: 'Concord',
    state: 'NC',
    zip: '28025',
    lat: 35.4071008,
    lng: -80.5702743,
    serviceDate: 'July 2023',
    serviceYear: 2023,
    serviceMonth: 'July',
    product: 'CertainTeed Landmark',
    productColor: null,
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: null,
  },
  {
    id: 'terrance-larkhaven',
    name: 'Terrance',
    street: 'Larkhaven Avenue Southwest',
    city: 'Concord',
    state: 'NC',
    zip: '28027',
    lat: 35.3496073,
    lng: -80.6293318,
    serviceDate: 'May 2024',
    serviceYear: 2024,
    serviceMonth: 'May',
    product: 'CertainTeed Landmark',
    productColor: 'Weathered Wood',
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: null,
  },
  // Monroe
  {
    id: 'chris-bradford',
    name: 'Chris',
    street: 'Bradford Place',
    city: 'Monroe',
    state: 'NC',
    zip: '28110',
    lat: 35.020184,
    lng: -80.6559538,
    serviceDate: 'March 2023',
    serviceYear: 2023,
    serviceMonth: 'March',
    product: 'CertainTeed Landmark',
    productColor: 'Weathered Wood',
    serviceType: 'Insurance Claim Roof Replacement',
    neighborhoodSlug: null,
  },
  // Rock Hill
  {
    id: 'amanda-pinehill',
    name: 'Amanda',
    street: 'Pinehill Road',
    city: 'Rock Hill',
    state: 'SC',
    zip: '29732',
    lat: 34.9743394,
    lng: -81.0495327,
    serviceDate: 'January 2025',
    serviceYear: 2025,
    serviceMonth: 'January',
    product: 'GAF Timberline HDZ',
    productColor: null,
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: null,
  },
  {
    id: 'dianne-walnut',
    name: 'Dianne',
    street: 'Walnut Street',
    city: 'Rock Hill',
    state: 'SC',
    zip: '29730',
    lat: 34.9163332,
    lng: -81.0197113,
    serviceDate: 'December 2024',
    serviceYear: 2024,
    serviceMonth: 'December',
    product: 'CertainTeed Landmark',
    productColor: 'Moire Black',
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: null,
  },
  // Mooresville
  {
    id: 'elizabeth-castles-gate',
    name: 'Elizabeth',
    street: 'Castles Gate Drive',
    city: 'Mooresville',
    state: 'NC',
    zip: '28117',
    lat: 35.5824094,
    lng: -80.891368,
    serviceDate: 'November 2023',
    serviceYear: 2023,
    serviceMonth: 'November',
    product: 'CertainTeed Landmark',
    productColor: 'Moire Black',
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: null,
  },
  // Kannapolis
  {
    id: 'james-north-avenue',
    name: 'James',
    street: 'North Avenue',
    city: 'Kannapolis',
    state: 'NC',
    zip: '28083',
    lat: 35.4556822,
    lng: -80.5999276,
    serviceDate: 'September 2025',
    serviceYear: 2025,
    serviceMonth: 'September',
    product: 'CertainTeed Landmark',
    productColor: 'Driftwood',
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: null,
  },
  {
    id: 'noel-11th-street',
    name: 'Noel',
    street: 'East 11th Street',
    city: 'Kannapolis',
    state: 'NC',
    zip: '28083',
    lat: 35.5096376,
    lng: -80.610102,
    serviceDate: 'July 2024',
    serviceYear: 2024,
    serviceMonth: 'July',
    product: 'CertainTeed Landmark',
    productColor: 'Georgetown Gray',
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: null,
  },
  // Denver (Lake Norman)
  {
    id: 'linda-smith-cove',
    name: 'Linda',
    street: 'Smith Cove Road',
    city: 'Denver',
    state: 'NC',
    zip: '28037',
    lat: 35.4891861,
    lng: -80.9931095,
    serviceDate: 'April 2024',
    serviceYear: 2024,
    serviceMonth: 'April',
    product: 'CertainTeed Landmark',
    productColor: 'Moire Black',
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: null,
  },
  // Matthews
  {
    id: 'michael-red-fox',
    name: 'Michael',
    street: 'Red Fox Trail',
    city: 'Matthews',
    state: 'NC',
    zip: '28104',
    lat: 35.0161269,
    lng: -80.7279598,
    serviceDate: 'January 2023',
    serviceYear: 2023,
    serviceMonth: 'January',
    product: null,
    productColor: null,
    serviceType: 'Service Provided',
    neighborhoodSlug: null,
  },
  // Mint Hill
  {
    id: 'angela-olde-irongate',
    name: 'Angela',
    street: 'Olde Irongate Lane',
    city: 'Mint Hill',
    state: 'NC',
    zip: '28227',
    lat: 35.1684979,
    lng: -80.6701085,
    serviceDate: 'August 2025',
    serviceYear: 2025,
    serviceMonth: 'August',
    product: null,
    productColor: null,
    serviceType: 'Service Provided',
    neighborhoodSlug: null,
  },
  // Gastonia
  {
    id: 'ashley-wood',
    name: 'Ashley',
    street: 'Wood Street',
    city: 'Gastonia',
    state: 'NC',
    zip: '28052',
    lat: 35.2367492,
    lng: -81.1947691,
    serviceDate: 'December 2024',
    serviceYear: 2024,
    serviceMonth: 'December',
    product: 'CertainTeed Landmark',
    productColor: null,
    serviceType: 'Full Roof Replacement',
    neighborhoodSlug: null,
  },
  // Waxhaw
  {
    id: 'eric-harvest-time',
    name: 'Eric',
    street: 'Harvest Time Lane',
    city: 'Waxhaw',
    state: 'NC',
    zip: '28173',
    lat: 34.9690497,
    lng: -80.6786588,
    serviceDate: 'December 2024',
    serviceYear: 2024,
    serviceMonth: 'December',
    product: null,
    productColor: null,
    serviceType: 'Service Provided',
    neighborhoodSlug: null,
  },
  // Fort Mill
  {
    id: 'edward-tanzanite',
    name: 'Edward',
    street: 'Tanzanite Circle',
    city: 'Fort Mill',
    state: 'SC',
    zip: '29708',
    lat: 35.0554454,
    lng: -80.9848842,
    serviceDate: 'January 2023',
    serviceYear: 2023,
    serviceMonth: 'January',
    product: null,
    productColor: null,
    serviceType: 'Service Provided',
    neighborhoodSlug: null,
  },
];

// Get stories by city
export function getStoriesByCity(city: string): CustomerStory[] {
  return CUSTOMER_STORIES.filter(story =>
    story.city.toLowerCase() === city.toLowerCase()
  );
}

// Get stories by neighborhood slug
export function getStoriesByNeighborhood(neighborhoodSlug: string): CustomerStory[] {
  return CUSTOMER_STORIES.filter(story =>
    story.neighborhoodSlug === neighborhoodSlug
  );
}

// Get stories by zip code
export function getStoriesByZip(zip: string): CustomerStory[] {
  return CUSTOMER_STORIES.filter(story => story.zip === zip);
}

// Get stories by location slug (huntersville-nc, etc)
export function getStoriesByLocationSlug(locationSlug: string): CustomerStory[] {
  const cityName = Object.entries(CITY_TO_SLUG)
    .find(([_, slug]) => slug === locationSlug)?.[0];

  if (!cityName) return [];
  return getStoriesByCity(cityName);
}

// Get story count by city
export function getStoryCountByCity(): Record<string, number> {
  const counts: Record<string, number> = {};
  CUSTOMER_STORIES.forEach(story => {
    counts[story.city] = (counts[story.city] || 0) + 1;
  });
  return counts;
}

// Get story count by neighborhood
export function getStoryCountByNeighborhood(): Record<string, number> {
  const counts: Record<string, number> = {};
  CUSTOMER_STORIES.forEach(story => {
    if (story.neighborhoodSlug) {
      counts[story.neighborhoodSlug] = (counts[story.neighborhoodSlug] || 0) + 1;
    }
  });
  return counts;
}

// Generate story headline
export function generateStoryHeadline(story: CustomerStory): string {
  if (story.product) {
    return `${story.name}'s ${story.product} Roof on ${story.street}`;
  }
  return `${story.name}'s Roofing Project on ${story.street}`;
}

// Generate story description for SEO
export function generateStoryDescription(story: CustomerStory): string {
  const location = story.neighborhoodSlug
    ? `the ${story.neighborhoodSlug.replace(/-/g, ' ')} neighborhood of ${story.city}`
    : story.city;

  if (story.product && story.productColor) {
    return `Best Roofing Now completed a ${story.product} roof installation in ${story.productColor} for ${story.name} on ${story.street} in ${location}, ${story.state}. ${story.serviceType} completed in ${story.serviceDate}.`;
  } else if (story.product) {
    return `Best Roofing Now installed a new ${story.product} roof for ${story.name} on ${story.street} in ${location}, ${story.state}. Project completed in ${story.serviceDate}.`;
  }
  return `Best Roofing Now provided professional roofing services for ${story.name} on ${story.street} in ${location}, ${story.state}. Service completed in ${story.serviceDate}.`;
}

// Get unique cities with story counts
export function getCitiesWithStories(): { city: string; count: number; slug: string }[] {
  const counts = getStoryCountByCity();
  return Object.entries(counts)
    .map(([city, count]) => ({
      city,
      count,
      slug: CITY_TO_SLUG[city] || city.toLowerCase().replace(/\s+/g, '-') + '-nc'
    }))
    .sort((a, b) => b.count - a.count);
}

// Get total stats
export function getStoryStats(): {
  totalProjects: number;
  citiesServed: number;
  neighborhoodsServed: number;
  yearsActive: number[];
} {
  const cities = new Set(CUSTOMER_STORIES.map(s => s.city));
  const neighborhoods = new Set(CUSTOMER_STORIES.filter(s => s.neighborhoodSlug).map(s => s.neighborhoodSlug));
  const years = [...new Set(CUSTOMER_STORIES.map(s => s.serviceYear))].sort();

  return {
    totalProjects: CUSTOMER_STORIES.length,
    citiesServed: cities.size,
    neighborhoodsServed: neighborhoods.size,
    yearsActive: years,
  };
}
