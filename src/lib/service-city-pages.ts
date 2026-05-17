/**
 * Registry of valid service × city page combinations.
 *
 * Built 2026-05-17 to fix the 563 4XX errors flagged by Ahrefs Site Audit.
 * The ServiceCityLinks component was previously generating links to all
 * 10 services × every city in LOCATIONS, regardless of whether the page
 * existed. This registry lets the component filter to real pages only.
 *
 * Generated from: `ls src/app/` on 2026-05-17. Keep in sync with new pages.
 * Format: { service: 'roof-replacement', citySlug: 'charlotte-nc' }
 */

export type ServiceSlug =
  | 'roofing'
  | 'roofers'
  | 'roof-repair'
  | 'roof-replacement'
  | 'roof-inspection'
  | 'emergency-roof-repair'
  | 'storm-damage-roof-repair'
  | 'commercial-roofing'
  | 'metal-roofing'
  | 'gutter-installation';

export interface ServiceCityPage {
  service: ServiceSlug;
  citySlug: string;
}

export const SERVICE_CITY_PAGES: readonly ServiceCityPage[] = [
  // commercial-roofing
  { service: 'commercial-roofing', citySlug: 'charlotte-nc' },
  { service: 'commercial-roofing', citySlug: 'concord-nc' },
  { service: 'commercial-roofing', citySlug: 'cornelius-nc' },
  { service: 'commercial-roofing', citySlug: 'davidson-nc' },
  { service: 'commercial-roofing', citySlug: 'denver-nc' },
  { service: 'commercial-roofing', citySlug: 'fort-mill-sc' },
  { service: 'commercial-roofing', citySlug: 'gastonia-nc' },
  { service: 'commercial-roofing', citySlug: 'huntersville-nc' },
  { service: 'commercial-roofing', citySlug: 'lake-norman-nc' },
  { service: 'commercial-roofing', citySlug: 'lake-wylie-sc' },
  { service: 'commercial-roofing', citySlug: 'matthews-nc' },
  { service: 'commercial-roofing', citySlug: 'mooresville-nc' },
  { service: 'commercial-roofing', citySlug: 'mt-holly-nc' },
  { service: 'commercial-roofing', citySlug: 'rock-hill-sc' },
  { service: 'commercial-roofing', citySlug: 'sherrills-ford-nc' },
  { service: 'commercial-roofing', citySlug: 'statesville-nc' },

  // emergency-roof-repair (and /emergency-roof-repair near-me pillar exists separately)
  { service: 'emergency-roof-repair', citySlug: 'charlotte-nc' },
  { service: 'emergency-roof-repair', citySlug: 'cornelius-nc' },
  { service: 'emergency-roof-repair', citySlug: 'davidson-nc' },
  { service: 'emergency-roof-repair', citySlug: 'denver-nc' },
  { service: 'emergency-roof-repair', citySlug: 'huntersville-nc' },
  { service: 'emergency-roof-repair', citySlug: 'lake-norman-nc' },
  { service: 'emergency-roof-repair', citySlug: 'mooresville-nc' },
  { service: 'emergency-roof-repair', citySlug: 'sherrills-ford-nc' },
  { service: 'emergency-roof-repair', citySlug: 'statesville-nc' },

  // gutter-installation
  { service: 'gutter-installation', citySlug: 'charlotte-nc' },
  { service: 'gutter-installation', citySlug: 'cornelius-nc' },
  { service: 'gutter-installation', citySlug: 'davidson-nc' },
  { service: 'gutter-installation', citySlug: 'denver-nc' },
  { service: 'gutter-installation', citySlug: 'huntersville-nc' },
  { service: 'gutter-installation', citySlug: 'lake-norman-nc' },
  { service: 'gutter-installation', citySlug: 'lake-wylie-sc' },
  { service: 'gutter-installation', citySlug: 'matthews-nc' },
  { service: 'gutter-installation', citySlug: 'mooresville-nc' },
  { service: 'gutter-installation', citySlug: 'mt-holly-nc' },
  { service: 'gutter-installation', citySlug: 'sherrills-ford-nc' },
  { service: 'gutter-installation', citySlug: 'statesville-nc' },

  // metal-roofing
  { service: 'metal-roofing', citySlug: 'charlotte-nc' },
  { service: 'metal-roofing', citySlug: 'cornelius-nc' },
  { service: 'metal-roofing', citySlug: 'davidson-nc' },
  { service: 'metal-roofing', citySlug: 'denver-nc' },
  { service: 'metal-roofing', citySlug: 'huntersville-nc' },
  { service: 'metal-roofing', citySlug: 'lake-norman-nc' },
  { service: 'metal-roofing', citySlug: 'lake-wylie-sc' },
  { service: 'metal-roofing', citySlug: 'matthews-nc' },
  { service: 'metal-roofing', citySlug: 'mooresville-nc' },
  { service: 'metal-roofing', citySlug: 'mt-holly-nc' },
  { service: 'metal-roofing', citySlug: 'sherrills-ford-nc' },
  { service: 'metal-roofing', citySlug: 'statesville-nc' },

  // roofers
  { service: 'roofers', citySlug: 'charlotte-nc' },
  { service: 'roofers', citySlug: 'concord-nc' },
  { service: 'roofers', citySlug: 'cornelius-nc' },
  { service: 'roofers', citySlug: 'davidson-nc' },
  { service: 'roofers', citySlug: 'denver-nc' },
  { service: 'roofers', citySlug: 'fort-mill-sc' },
  { service: 'roofers', citySlug: 'huntersville-nc' },
  { service: 'roofers', citySlug: 'lake-norman-nc' },
  { service: 'roofers', citySlug: 'lake-wylie-sc' },
  { service: 'roofers', citySlug: 'matthews-nc' },
  { service: 'roofers', citySlug: 'mooresville-nc' },
  { service: 'roofers', citySlug: 'mt-holly-nc' },
  { service: 'roofers', citySlug: 'sherrills-ford-nc' },
  { service: 'roofers', citySlug: 'statesville-nc' },

  // roofing (umbrella service)
  { service: 'roofing', citySlug: 'charlotte-nc' },
  { service: 'roofing', citySlug: 'concord-nc' },
  { service: 'roofing', citySlug: 'cornelius-nc' },
  { service: 'roofing', citySlug: 'davidson-nc' },
  { service: 'roofing', citySlug: 'denver-nc' },
  { service: 'roofing', citySlug: 'fort-mill-sc' },
  { service: 'roofing', citySlug: 'gastonia-nc' },
  { service: 'roofing', citySlug: 'huntersville-nc' },
  { service: 'roofing', citySlug: 'indian-trail-nc' },
  { service: 'roofing', citySlug: 'lake-norman-nc' },
  { service: 'roofing', citySlug: 'lake-wylie-sc' },
  { service: 'roofing', citySlug: 'matthews-nc' },
  { service: 'roofing', citySlug: 'mint-hill-nc' },
  { service: 'roofing', citySlug: 'mooresville-nc' },
  { service: 'roofing', citySlug: 'mt-holly-nc' },
  { service: 'roofing', citySlug: 'pineville-nc' },
  { service: 'roofing', citySlug: 'rock-hill-sc' },
  { service: 'roofing', citySlug: 'sherrills-ford-nc' },
  { service: 'roofing', citySlug: 'statesville-nc' },
  { service: 'roofing', citySlug: 'tega-cay-sc' },
  { service: 'roofing', citySlug: 'terrell-nc' },
  { service: 'roofing', citySlug: 'troutman-nc' },

  // roof-inspection
  { service: 'roof-inspection', citySlug: 'charlotte-nc' },
  { service: 'roof-inspection', citySlug: 'cornelius-nc' },
  { service: 'roof-inspection', citySlug: 'davidson-nc' },
  { service: 'roof-inspection', citySlug: 'denver-nc' },
  { service: 'roof-inspection', citySlug: 'huntersville-nc' },
  { service: 'roof-inspection', citySlug: 'lake-norman-nc' },
  { service: 'roof-inspection', citySlug: 'matthews-nc' },
  { service: 'roof-inspection', citySlug: 'mooresville-nc' },
  { service: 'roof-inspection', citySlug: 'statesville-nc' },

  // roof-repair
  { service: 'roof-repair', citySlug: 'charlotte-nc' },
  { service: 'roof-repair', citySlug: 'concord-nc' },
  { service: 'roof-repair', citySlug: 'cornelius-nc' },
  { service: 'roof-repair', citySlug: 'davidson-nc' },
  { service: 'roof-repair', citySlug: 'denver-nc' },
  { service: 'roof-repair', citySlug: 'fort-mill-sc' },
  { service: 'roof-repair', citySlug: 'huntersville-nc' },
  { service: 'roof-repair', citySlug: 'lake-norman-nc' },
  { service: 'roof-repair', citySlug: 'lake-wylie-sc' },
  { service: 'roof-repair', citySlug: 'matthews-nc' },
  { service: 'roof-repair', citySlug: 'mooresville-nc' },
  { service: 'roof-repair', citySlug: 'mt-holly-nc' },
  { service: 'roof-repair', citySlug: 'pineville-nc' },
  { service: 'roof-repair', citySlug: 'sherrills-ford-nc' },
  { service: 'roof-repair', citySlug: 'statesville-nc' },

  // roof-replacement
  { service: 'roof-replacement', citySlug: 'charlotte-nc' },
  { service: 'roof-replacement', citySlug: 'concord-nc' },
  { service: 'roof-replacement', citySlug: 'cornelius-nc' },
  { service: 'roof-replacement', citySlug: 'davidson-nc' },
  { service: 'roof-replacement', citySlug: 'denver-nc' },
  { service: 'roof-replacement', citySlug: 'fort-mill-sc' },
  { service: 'roof-replacement', citySlug: 'gastonia-nc' },
  { service: 'roof-replacement', citySlug: 'huntersville-nc' },
  { service: 'roof-replacement', citySlug: 'lake-norman-nc' },
  { service: 'roof-replacement', citySlug: 'lake-wylie-sc' },
  { service: 'roof-replacement', citySlug: 'matthews-nc' },
  { service: 'roof-replacement', citySlug: 'mooresville-nc' },
  { service: 'roof-replacement', citySlug: 'mt-holly-nc' },
  { service: 'roof-replacement', citySlug: 'sherrills-ford-nc' },
  { service: 'roof-replacement', citySlug: 'statesville-nc' },

  // storm-damage-roof-repair (city variants + the geo-neutral near-me pillar lives at /storm-damage-roof-repair)
  { service: 'storm-damage-roof-repair', citySlug: 'charlotte-nc' },
  { service: 'storm-damage-roof-repair', citySlug: 'cornelius-nc' },
  { service: 'storm-damage-roof-repair', citySlug: 'davidson-nc' },
  { service: 'storm-damage-roof-repair', citySlug: 'denver-nc' },
  { service: 'storm-damage-roof-repair', citySlug: 'huntersville-nc' },
  { service: 'storm-damage-roof-repair', citySlug: 'lake-norman-nc' },
  { service: 'storm-damage-roof-repair', citySlug: 'lake-wylie-sc' },
  { service: 'storm-damage-roof-repair', citySlug: 'matthews-nc' },
  { service: 'storm-damage-roof-repair', citySlug: 'mooresville-nc' },
  { service: 'storm-damage-roof-repair', citySlug: 'mt-holly-nc' },
  { service: 'storm-damage-roof-repair', citySlug: 'sherrills-ford-nc' },
  { service: 'storm-damage-roof-repair', citySlug: 'statesville-nc' },
];

/** O(1) lookup set built from the registry. */
const PAGE_SET = new Set(
  SERVICE_CITY_PAGES.map((p) => `${p.service}|${p.citySlug}`)
);

/** Returns true if /{service}-{citySlug} is a real built page. */
export function hasServiceCityPage(service: ServiceSlug, citySlug: string): boolean {
  return PAGE_SET.has(`${service}|${citySlug}`);
}

/** Returns the URL for /{service}-{citySlug}. */
export function serviceCityUrl(service: ServiceSlug, citySlug: string): string {
  return `/${service}-${citySlug}`;
}
