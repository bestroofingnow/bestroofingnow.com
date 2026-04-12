/**
 * Transactional Keyword Research Script
 *
 * Researches high-value transactional roofing keywords for bestroofingnow.com
 * in Charlotte NC. Tries DataForSEO API first, falls back to curated research
 * data compiled from multiple industry sources.
 *
 * Sources: roofingwebmasters.com, hookagency.com, roofingcontractorsseo.com,
 * oglinedigital.com, seoforroofers.com, roofingseoguy.com, flexleads.com,
 * mediasearchgroup.com, bestppcfirm.com, cinchlocal.com
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(__dirname, '..');

// ---------------------------------------------------------------------------
// Load .env.local
// ---------------------------------------------------------------------------
function loadEnv() {
  const envPath = resolve(PROJECT_ROOT, '.env.local');
  if (!existsSync(envPath)) return {};
  const env = {};
  const lines = readFileSync(envPath, 'utf-8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    env[trimmed.slice(0, eqIdx)] = trimmed.slice(eqIdx + 1);
  }
  return env;
}

const envVars = loadEnv();
const DATAFORSEO_LOGIN = envVars.DATAFORSEO_LOGIN || process.env.DATAFORSEO_LOGIN;
const DATAFORSEO_PASSWORD = envVars.DATAFORSEO_PASSWORD || process.env.DATAFORSEO_PASSWORD;

// ---------------------------------------------------------------------------
// Existing BRN pages (slug set)
// ---------------------------------------------------------------------------
const EXISTING_PAGES = new Set([
  // Residential core
  'roof-replacement-charlotte-nc',
  'roof-repair-charlotte-nc',
  'residential-roofing-charlotte-nc',
  'residential-roof-replacement',
  'roofing-charlotte-nc',
  'roofing-company-charlotte-nc',
  'roofing-contractor-charlotte-nc',
  'roofers-charlotte-nc',
  'best-roofing-company-charlotte-nc',
  'new-roof-installation-charlotte-nc',
  'roof-replacement-cost-charlotte-nc',
  'roof-repair-cost-charlotte-nc',
  'affordable-roofing-charlotte-nc',
  'roof-financing-charlotte-nc',
  'free-roof-estimate-charlotte-nc',
  'roof-inspection-charlotte-nc',
  'roof-leak-repair-charlotte-nc',
  'roof-maintenance-charlotte-nc',
  'shingle-replacement-charlotte-nc',

  // Cost guides
  'charlotte-roofing-costs-2026',
  'roofing-costs-2026',
  'asphalt-shingle-roof-cost',
  'metal-roof-cost',
  'shingle-vs-metal-roof-cost',
  'roofing-shingles-prices',
  'gutter-cost-charlotte-nc',
  'gutter-guard-cost',
  'siding-cost-charlotte-nc',

  // Commercial
  'commercial-roofing-charlotte-nc',
  'commercial-roofing-services',
  'commercial-roof-repair-cost-charlotte-nc',
  'tpo-roofing-charlotte-nc',
  'epdm-roofing-charlotte-nc',
  'flat-roof-repair',
  'flat-roof-repair-charlotte-nc',
  'flat-roof-coating-charlotte-nc',
  'flat-roof-contractors-charlotte-nc',
  'roof-coating',
  'roof-coating-charlotte-nc',

  // Industrial
  'industrial-roofing-charlotte-nc',
  'warehouse-roofing-charlotte-nc',
  'warehouse-roof-repair-vs-replacement-charlotte-nc',
  'manufacturing-plant-roofing-charlotte-nc',
  'data-center-roofing-charlotte-nc',
  'distribution-center-roofing-charlotte-nc',

  // Storm / Emergency / Insurance
  'storm-damage-roof-repair',
  'storm-damage-roof-repair-charlotte-nc',
  'hail-damage-roof-repair',
  'hail-damage-roof-repair-charlotte-nc',
  'emergency-roof-repair',
  'emergency-roof-repair-charlotte-nc',
  'emergency-roof-tarping',
  'emergency-tarp-service-charlotte-nc',
  'hurricane-damage-roof-repair-charlotte-nc',
  'wind-damage-roof-repair-charlotte-nc',
  'ice-storm-damage-charlotte-nc',
  'tree-damage-roof-repair-charlotte-nc',
  'insurance-claim-roofing-charlotte-nc',
  'roof-storm-damage-insurance-claim-charlotte-nc',
  'what-to-do-after-hail-storm-charlotte-nc',

  // Metal roofing
  'metal-roofing-charlotte-nc',
  'metal-roofing-services',
  'standing-seam-metal-roofing',
  'standing-seam-metal-roof-charlotte-nc',
  'metal-roof-vs-shingles-charlotte-nc',

  // Material-specific
  'architectural-shingles',
  'gaf-roofing-charlotte-nc',
  'gaf-timberline-shingles-charlotte-nc',
  'certainteed-shingles-charlotte-nc',
  'owens-corning-roofing-charlotte-nc',
  'cedar-shake-roofing',
  'cedar-shake-roofing-charlotte-nc',
  'tile-roofing',
  'tile-roofing-charlotte-nc',
  'slate-roofing-charlotte-nc',
  'copper-roofing-charlotte-nc',
  'synthetic-slate-roofing-charlotte-nc',

  // Comparison / decision guides
  'roof-repair-vs-replacement-charlotte-nc',
  'gaf-vs-certainteed-shingles-charlotte-nc',
  'architectural-vs-3-tab-shingles-charlotte-nc',
  'tpo-vs-epdm-roofing-charlotte-nc',
  'tile-roof-vs-shingles-charlotte-nc',
  'when-to-replace-roof-charlotte-nc',
  'signs-you-need-new-roof-charlotte-nc',
  'how-to-choose-roofing-contractor-charlotte-nc',

  // Other services
  'skylight-installation',
  'skylight-installation-charlotte-nc',
  'chimney-flashing-repair',
  'chimney-flashing-repair-charlotte-nc',
  'fascia-soffit-repair',
  'fascia-soffit-repair-charlotte-nc',
  'ridge-vent-installation',
  'ridge-vent-installation-charlotte-nc',
  'gutter-guards',
  'gutter-guards-charlotte-nc',
  'gutter-installation-charlotte-nc',
  'gutter-repair',
  'gutter-repair-charlotte-nc',
  'roof-certification',
  'solar-roofing-charlotte-nc',
  'solar-services',
  'siding-installation-charlotte-nc',
  'siding-services',
  'ventilation',
  'roof-ventilation-charlotte-nc',
  'attic-insulation-cost-charlotte-nc',

  // Specialty / niche
  'veteran-owned-roofing-charlotte-nc',
  'veteran-owned-roofing-company-charlotte-nc',
  'luxury-roofing-charlotte-nc',
  'hoa-approved-roofing-charlotte-nc',
  'historic-home-roofing-charlotte-nc',
  'custom-home-roofing-charlotte-nc',
  'condo-roofing-charlotte-nc',
  'townhouse-roofing-charlotte-nc',
  'apartment-roofing-charlotte-nc',

  // Pillar / hub pages
  'charlotte-roofing-handbook',
  'charlotte-storm-season-roof-guide',
  'nc-roofing-guide',
]);

// ---------------------------------------------------------------------------
// Curated transactional keyword data (compiled from industry research)
// ---------------------------------------------------------------------------
function buildKeywordDatabase() {
  const keywords = [
    // ===== RESIDENTIAL - Highest Volume =====
    {
      keyword: 'roofers near me',
      category: 'residential',
      monthlySearchVolume: 135000,
      localVolumeCharlotte: 2400,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 18.50,
      difficulty: 85,
      existingPage: true,
      existingSlug: 'roofers-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Highest-intent local keyword. BRN has city-specific pages for 14+ cities.'
    },
    {
      keyword: 'roofing companies near me',
      category: 'residential',
      monthlySearchVolume: 135000,
      localVolumeCharlotte: 2200,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 22.00,
      difficulty: 88,
      existingPage: true,
      existingSlug: 'roofing-company-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Primary branded search. BRN ranks for Charlotte variant.'
    },
    {
      keyword: 'roof replacement near me',
      category: 'residential',
      monthlySearchVolume: 49500,
      localVolumeCharlotte: 1300,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 25.00,
      difficulty: 78,
      existingPage: true,
      existingSlug: 'roof-replacement-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Core transactional term. BRN has pages for all service areas.'
    },
    {
      keyword: 'roof repair near me',
      category: 'residential',
      monthlySearchVolume: 110000,
      localVolumeCharlotte: 1800,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 20.00,
      difficulty: 82,
      existingPage: true,
      existingSlug: 'roof-repair-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'High-volume repair intent. Well covered by BRN.'
    },
    {
      keyword: 'new roof cost',
      category: 'residential',
      monthlySearchVolume: 27100,
      localVolumeCharlotte: 590,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 12.00,
      difficulty: 72,
      existingPage: true,
      existingSlug: 'charlotte-roofing-costs-2026',
      recommendedPageType: 'cost-guide',
      notes: 'Cost-focused searchers are comparing and ready to buy.'
    },
    {
      keyword: 'roof replacement cost',
      category: 'residential',
      monthlySearchVolume: 40500,
      localVolumeCharlotte: 880,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 14.00,
      difficulty: 75,
      existingPage: true,
      existingSlug: 'roof-replacement-cost-charlotte-nc',
      recommendedPageType: 'cost-guide',
      notes: 'BRN has dedicated cost page. Strong transactional signal.'
    },
    {
      keyword: 'best roofing company near me',
      category: 'residential',
      monthlySearchVolume: 22200,
      localVolumeCharlotte: 480,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 28.00,
      difficulty: 80,
      existingPage: true,
      existingSlug: 'best-roofing-company-charlotte-nc',
      recommendedPageType: 'landing-page',
      notes: '"Best" modifier signals comparison shopping, ready to choose.'
    },
    {
      keyword: 'hire a roofer',
      category: 'residential',
      monthlySearchVolume: 8100,
      localVolumeCharlotte: 170,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 15.00,
      difficulty: 55,
      existingPage: true,
      existingSlug: 'roofers-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Direct action keyword. Covered by roofers page.'
    },
    {
      keyword: 'roof estimate',
      category: 'residential',
      monthlySearchVolume: 14800,
      localVolumeCharlotte: 320,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 18.00,
      difficulty: 60,
      existingPage: true,
      existingSlug: 'free-roof-estimate-charlotte-nc',
      recommendedPageType: 'landing-page',
      notes: 'Estimate seekers are closest to conversion. BRN has dedicated page.'
    },
    {
      keyword: 'free roof estimate',
      category: 'residential',
      monthlySearchVolume: 6600,
      localVolumeCharlotte: 140,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 22.00,
      difficulty: 58,
      existingPage: true,
      existingSlug: 'free-roof-estimate-charlotte-nc',
      recommendedPageType: 'landing-page',
      notes: '"Free" + "estimate" = highest conversion intent.'
    },
    {
      keyword: 'affordable roofing',
      category: 'residential',
      monthlySearchVolume: 5400,
      localVolumeCharlotte: 110,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 16.00,
      difficulty: 52,
      existingPage: true,
      existingSlug: 'affordable-roofing-charlotte-nc',
      recommendedPageType: 'landing-page',
      notes: 'Budget-conscious buyers. BRN has dedicated page.'
    },
    {
      keyword: 'roof replacement financing',
      category: 'residential',
      monthlySearchVolume: 3600,
      localVolumeCharlotte: 80,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 20.00,
      difficulty: 45,
      existingPage: true,
      existingSlug: 'roof-financing-charlotte-nc',
      recommendedPageType: 'landing-page',
      notes: 'Financing searchers have decided to buy, just need payment plan.'
    },
    {
      keyword: 'roof inspection near me',
      category: 'residential',
      monthlySearchVolume: 22200,
      localVolumeCharlotte: 480,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 15.00,
      difficulty: 65,
      existingPage: true,
      existingSlug: 'roof-inspection-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Inspection often leads to repair/replacement sale.'
    },
    {
      keyword: 'roof leak repair',
      category: 'residential',
      monthlySearchVolume: 18100,
      localVolumeCharlotte: 390,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 18.00,
      difficulty: 68,
      existingPage: true,
      existingSlug: 'roof-leak-repair-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Urgent need. BRN has dedicated page.'
    },
    {
      keyword: 'roof installation near me',
      category: 'residential',
      monthlySearchVolume: 12100,
      localVolumeCharlotte: 260,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 22.00,
      difficulty: 70,
      existingPage: true,
      existingSlug: 'new-roof-installation-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Direct purchase intent keyword.'
    },
    {
      keyword: 'roofing contractor near me',
      category: 'residential',
      monthlySearchVolume: 33100,
      localVolumeCharlotte: 720,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 24.00,
      difficulty: 83,
      existingPage: true,
      existingSlug: 'roofing-contractor-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: '"Contractor" signals professional hire intent.'
    },
    {
      keyword: 'licensed roofer near me',
      category: 'residential',
      monthlySearchVolume: 4400,
      localVolumeCharlotte: 90,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 20.00,
      difficulty: 48,
      existingPage: false,
      existingSlug: null,
      recommendedPageType: 'landing-page',
      notes: 'GAP: No dedicated licensed roofer page. Trust-signal keyword.'
    },
    {
      keyword: 'get roof quote online',
      category: 'residential',
      monthlySearchVolume: 2900,
      localVolumeCharlotte: 60,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 25.00,
      difficulty: 42,
      existingPage: false,
      existingSlug: null,
      recommendedPageType: 'landing-page',
      notes: 'GAP: Could create an online quote tool or landing page.'
    },
    {
      keyword: 'roof replacement near me cost',
      category: 'residential',
      monthlySearchVolume: 6600,
      localVolumeCharlotte: 140,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 16.00,
      difficulty: 62,
      existingPage: true,
      existingSlug: 'roof-replacement-cost-charlotte-nc',
      recommendedPageType: 'cost-guide',
      notes: 'Covered by cost page. Dual intent: local + cost.'
    },
    {
      keyword: 'shingle roof replacement cost',
      category: 'residential',
      monthlySearchVolume: 8100,
      localVolumeCharlotte: 170,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 12.00,
      difficulty: 58,
      existingPage: true,
      existingSlug: 'asphalt-shingle-roof-cost',
      recommendedPageType: 'cost-guide',
      notes: 'Material-specific cost query. BRN has shingle cost page.'
    },
    {
      keyword: 'roof repair cost',
      category: 'residential',
      monthlySearchVolume: 18100,
      localVolumeCharlotte: 390,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 10.00,
      difficulty: 65,
      existingPage: true,
      existingSlug: 'roof-repair-cost-charlotte-nc',
      recommendedPageType: 'cost-guide',
      notes: 'High volume cost keyword. BRN has dedicated page.'
    },

    // ===== COMMERCIAL =====
    {
      keyword: 'commercial roofing contractor',
      category: 'commercial',
      monthlySearchVolume: 9900,
      localVolumeCharlotte: 210,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 35.00,
      difficulty: 72,
      existingPage: true,
      existingSlug: 'commercial-roofing-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'High-value keyword. Single commercial job = $50K-$500K+.'
    },
    {
      keyword: 'commercial roofing contractor near me',
      category: 'commercial',
      monthlySearchVolume: 6600,
      localVolumeCharlotte: 140,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 38.00,
      difficulty: 68,
      existingPage: true,
      existingSlug: 'commercial-roofing-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Local commercial intent. BRN has pages for 16 cities.'
    },
    {
      keyword: 'commercial roof replacement',
      category: 'commercial',
      monthlySearchVolume: 4400,
      localVolumeCharlotte: 90,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 32.00,
      difficulty: 60,
      existingPage: true,
      existingSlug: 'commercial-roofing-services',
      recommendedPageType: 'service-page',
      notes: 'Replacement intent = biggest ticket commercial jobs.'
    },
    {
      keyword: 'flat roof repair company',
      category: 'commercial',
      monthlySearchVolume: 3600,
      localVolumeCharlotte: 80,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 28.00,
      difficulty: 55,
      existingPage: true,
      existingSlug: 'flat-roof-repair-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Strong coverage. BRN has flat roof repair + contractors pages.'
    },
    {
      keyword: 'TPO roofing contractor',
      category: 'commercial',
      monthlySearchVolume: 2900,
      localVolumeCharlotte: 60,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 30.00,
      difficulty: 48,
      existingPage: true,
      existingSlug: 'tpo-roofing-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Material-specific commercial term. Well covered.'
    },
    {
      keyword: 'commercial roof repair near me',
      category: 'commercial',
      monthlySearchVolume: 3600,
      localVolumeCharlotte: 80,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 30.00,
      difficulty: 58,
      existingPage: true,
      existingSlug: 'commercial-roof-repair-cost-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Covered by cost page. Could benefit from pure repair page.'
    },
    {
      keyword: 'flat roof replacement cost',
      category: 'commercial',
      monthlySearchVolume: 4400,
      localVolumeCharlotte: 90,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 18.00,
      difficulty: 52,
      existingPage: false,
      existingSlug: null,
      recommendedPageType: 'cost-guide',
      notes: 'GAP: No dedicated flat roof replacement cost page.'
    },
    {
      keyword: 'EPDM roofing contractor',
      category: 'commercial',
      monthlySearchVolume: 1600,
      localVolumeCharlotte: 30,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 25.00,
      difficulty: 40,
      existingPage: true,
      existingSlug: 'epdm-roofing-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Low volume but very high intent and job value.'
    },
    {
      keyword: 'commercial roof coating',
      category: 'commercial',
      monthlySearchVolume: 2400,
      localVolumeCharlotte: 50,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 22.00,
      difficulty: 45,
      existingPage: true,
      existingSlug: 'roof-coating-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Coating as alternative to full replacement. Covered.'
    },

    // ===== INDUSTRIAL =====
    {
      keyword: 'industrial roofing contractor',
      category: 'industrial',
      monthlySearchVolume: 1900,
      localVolumeCharlotte: 40,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 35.00,
      difficulty: 45,
      existingPage: true,
      existingSlug: 'industrial-roofing-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Low volume but extremely high job values ($100K+).'
    },
    {
      keyword: 'warehouse roofing',
      category: 'industrial',
      monthlySearchVolume: 1300,
      localVolumeCharlotte: 30,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 28.00,
      difficulty: 38,
      existingPage: true,
      existingSlug: 'warehouse-roofing-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Niche industrial. BRN has warehouse + comparison page.'
    },
    {
      keyword: 'factory roof replacement',
      category: 'industrial',
      monthlySearchVolume: 720,
      localVolumeCharlotte: 15,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 32.00,
      difficulty: 32,
      existingPage: true,
      existingSlug: 'manufacturing-plant-roofing-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Covered by manufacturing plant page. Very high ticket.'
    },
    {
      keyword: 'industrial roof repair',
      category: 'industrial',
      monthlySearchVolume: 1000,
      localVolumeCharlotte: 20,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 30.00,
      difficulty: 35,
      existingPage: true,
      existingSlug: 'industrial-roofing-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Covered by industrial roofing page.'
    },

    // ===== INSURANCE / EMERGENCY =====
    {
      keyword: 'storm damage roof repair',
      category: 'insurance-emergency',
      monthlySearchVolume: 8100,
      localVolumeCharlotte: 320,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 28.00,
      difficulty: 70,
      existingPage: true,
      existingSlug: 'storm-damage-roof-repair-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Spikes 500-1000% after storms. BRN has pages for 12 cities.'
    },
    {
      keyword: 'roof insurance claim help',
      category: 'insurance-emergency',
      monthlySearchVolume: 3600,
      localVolumeCharlotte: 80,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 22.00,
      difficulty: 55,
      existingPage: true,
      existingSlug: 'insurance-claim-roofing-charlotte-nc',
      recommendedPageType: 'landing-page',
      notes: 'Insurance claim assistance = full replacement jobs. Well covered.'
    },
    {
      keyword: 'emergency roofer near me',
      category: 'insurance-emergency',
      monthlySearchVolume: 5400,
      localVolumeCharlotte: 170,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 30.00,
      difficulty: 62,
      existingPage: true,
      existingSlug: 'emergency-roof-repair-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Fastest conversion cycle. BRN has pages for 9 cities.'
    },
    {
      keyword: 'hail damage roof repair',
      category: 'insurance-emergency',
      monthlySearchVolume: 6600,
      localVolumeCharlotte: 260,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 25.00,
      difficulty: 65,
      existingPage: true,
      existingSlug: 'hail-damage-roof-repair-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Charlotte hail season peaks March-May. BRN well positioned.'
    },
    {
      keyword: '24 hour roof repair',
      category: 'insurance-emergency',
      monthlySearchVolume: 2400,
      localVolumeCharlotte: 50,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 32.00,
      difficulty: 50,
      existingPage: false,
      existingSlug: null,
      recommendedPageType: 'landing-page',
      notes: 'GAP: No dedicated 24-hour page. Covered partially by emergency page.'
    },
    {
      keyword: 'wind damage roof repair',
      category: 'insurance-emergency',
      monthlySearchVolume: 3600,
      localVolumeCharlotte: 110,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 22.00,
      difficulty: 55,
      existingPage: true,
      existingSlug: 'wind-damage-roof-repair-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Seasonal demand. BRN has dedicated page.'
    },
    {
      keyword: 'roof leak emergency',
      category: 'insurance-emergency',
      monthlySearchVolume: 4400,
      localVolumeCharlotte: 90,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 28.00,
      difficulty: 58,
      existingPage: true,
      existingSlug: 'roof-leak-repair-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Urgent need. Partially covered by leak repair page.'
    },
    {
      keyword: 'storm damage roofing contractor',
      category: 'insurance-emergency',
      monthlySearchVolume: 2900,
      localVolumeCharlotte: 60,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 25.00,
      difficulty: 52,
      existingPage: true,
      existingSlug: 'storm-damage-roof-repair-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Contractor variant of storm damage. Well covered.'
    },
    {
      keyword: 'roofing insurance claim contractor',
      category: 'insurance-emergency',
      monthlySearchVolume: 1600,
      localVolumeCharlotte: 35,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 30.00,
      difficulty: 48,
      existingPage: true,
      existingSlug: 'insurance-claim-roofing-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Specialized insurance claim help. Full replacement jobs.'
    },
    {
      keyword: 'emergency roof tarping',
      category: 'insurance-emergency',
      monthlySearchVolume: 1300,
      localVolumeCharlotte: 30,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 20.00,
      difficulty: 35,
      existingPage: true,
      existingSlug: 'emergency-roof-tarping',
      recommendedPageType: 'service-page',
      notes: 'Emergency first response. BRN has dedicated page + CLT variant.'
    },

    // ===== MATERIAL-SPECIFIC =====
    {
      keyword: 'metal roof installation cost',
      category: 'material-specific',
      monthlySearchVolume: 12100,
      localVolumeCharlotte: 260,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 14.00,
      difficulty: 68,
      existingPage: true,
      existingSlug: 'metal-roof-cost',
      recommendedPageType: 'cost-guide',
      notes: 'Metal roof buyers self-select into higher budgets (2-3x asphalt).'
    },
    {
      keyword: 'standing seam metal roof cost',
      category: 'material-specific',
      monthlySearchVolume: 8100,
      localVolumeCharlotte: 170,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 12.00,
      difficulty: 62,
      existingPage: true,
      existingSlug: 'standing-seam-metal-roof-charlotte-nc',
      recommendedPageType: 'cost-guide',
      notes: 'Premium product. $18K-$33K avg job value.'
    },
    {
      keyword: 'GAF shingles installer',
      category: 'material-specific',
      monthlySearchVolume: 2400,
      localVolumeCharlotte: 50,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 18.00,
      difficulty: 42,
      existingPage: true,
      existingSlug: 'gaf-roofing-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Brand-specific installer search. BRN has GAF + Timberline pages.'
    },
    {
      keyword: 'metal roofing near me',
      category: 'material-specific',
      monthlySearchVolume: 18100,
      localVolumeCharlotte: 390,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 16.00,
      difficulty: 75,
      existingPage: true,
      existingSlug: 'metal-roofing-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: '165K national volume for "metal roofing." BRN has 14 city pages.'
    },
    {
      keyword: 'architectural shingles cost',
      category: 'material-specific',
      monthlySearchVolume: 6600,
      localVolumeCharlotte: 140,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 10.00,
      difficulty: 55,
      existingPage: true,
      existingSlug: 'asphalt-shingle-roof-cost',
      recommendedPageType: 'cost-guide',
      notes: 'Covered by shingle cost page. Most popular upgrade product.'
    },
    {
      keyword: 'Owens Corning roofing contractor',
      category: 'material-specific',
      monthlySearchVolume: 1900,
      localVolumeCharlotte: 40,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 20.00,
      difficulty: 45,
      existingPage: true,
      existingSlug: 'owens-corning-roofing-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Certification-driven search. BRN has brand page.'
    },
    {
      keyword: 'CertainTeed shingles installer',
      category: 'material-specific',
      monthlySearchVolume: 1300,
      localVolumeCharlotte: 30,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 18.00,
      difficulty: 40,
      existingPage: true,
      existingSlug: 'certainteed-shingles-charlotte-nc',
      recommendedPageType: 'service-page',
      notes: 'Brand-loyalty search. BRN has dedicated page.'
    },
    {
      keyword: 'tile roof installation cost',
      category: 'material-specific',
      monthlySearchVolume: 4400,
      localVolumeCharlotte: 50,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 14.00,
      difficulty: 52,
      existingPage: true,
      existingSlug: 'tile-roofing-charlotte-nc',
      recommendedPageType: 'cost-guide',
      notes: 'Premium material. Lower volume in Charlotte market.'
    },
    {
      keyword: 'cedar shake roof cost',
      category: 'material-specific',
      monthlySearchVolume: 2900,
      localVolumeCharlotte: 40,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 12.00,
      difficulty: 45,
      existingPage: true,
      existingSlug: 'cedar-shake-roofing-charlotte-nc',
      recommendedPageType: 'cost-guide',
      notes: 'Luxury material. BRN has dedicated page.'
    },

    // ===== HIGH-VALUE GAPS (keywords BRN does NOT have dedicated pages for) =====
    {
      keyword: 'roof replacement financing no credit check',
      category: 'residential',
      monthlySearchVolume: 2400,
      localVolumeCharlotte: 50,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 22.00,
      difficulty: 38,
      existingPage: false,
      existingSlug: null,
      recommendedPageType: 'landing-page',
      notes: 'GAP: High-intent financing variant. Could add to financing page or create dedicated.'
    },
    {
      keyword: 'same day roof repair',
      category: 'insurance-emergency',
      monthlySearchVolume: 1900,
      localVolumeCharlotte: 40,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 28.00,
      difficulty: 40,
      existingPage: false,
      existingSlug: null,
      recommendedPageType: 'landing-page',
      notes: 'GAP: Urgency keyword. Currently partially covered by emergency page.'
    },
    {
      keyword: 'roof replacement payment plans',
      category: 'residential',
      monthlySearchVolume: 1600,
      localVolumeCharlotte: 35,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 18.00,
      difficulty: 35,
      existingPage: false,
      existingSlug: null,
      recommendedPageType: 'landing-page',
      notes: 'GAP: Payment plan variant. Could expand financing page content.'
    },
    {
      keyword: 'TPO roof installation cost',
      category: 'commercial',
      monthlySearchVolume: 2400,
      localVolumeCharlotte: 50,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 18.00,
      difficulty: 42,
      existingPage: false,
      existingSlug: null,
      recommendedPageType: 'cost-guide',
      notes: 'GAP: No dedicated TPO cost page. TPO service page exists.'
    },
    {
      keyword: 'commercial flat roof replacement cost',
      category: 'commercial',
      monthlySearchVolume: 1900,
      localVolumeCharlotte: 40,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 22.00,
      difficulty: 45,
      existingPage: false,
      existingSlug: null,
      recommendedPageType: 'cost-guide',
      notes: 'GAP: Commercial + flat roof + cost intersection.'
    },
    {
      keyword: 'roofing company reviews near me',
      category: 'residential',
      monthlySearchVolume: 6600,
      localVolumeCharlotte: 140,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 15.00,
      difficulty: 65,
      existingPage: true,
      existingSlug: 'reviews',
      recommendedPageType: 'landing-page',
      notes: 'Review searchers are in final decision phase. BRN has reviews page.'
    },
    {
      keyword: 'GAF Master Elite contractor near me',
      category: 'material-specific',
      monthlySearchVolume: 1600,
      localVolumeCharlotte: 30,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 25.00,
      difficulty: 35,
      existingPage: false,
      existingSlug: null,
      recommendedPageType: 'landing-page',
      notes: 'GAP: Certification-specific search. Only 3% of roofers qualify.'
    },
    {
      keyword: 'roofing estimate Charlotte NC',
      category: 'residential',
      monthlySearchVolume: 320,
      localVolumeCharlotte: 320,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 22.00,
      difficulty: 55,
      existingPage: true,
      existingSlug: 'free-roof-estimate-charlotte-nc',
      recommendedPageType: 'landing-page',
      notes: 'Exact-match local query. BRN has dedicated page.'
    },
    {
      keyword: 'cheapest roofer near me',
      category: 'residential',
      monthlySearchVolume: 3600,
      localVolumeCharlotte: 80,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 14.00,
      difficulty: 50,
      existingPage: true,
      existingSlug: 'affordable-roofing-charlotte-nc',
      recommendedPageType: 'landing-page',
      notes: 'Price-sensitive but ready to buy. Covered by affordable page.'
    },
    {
      keyword: 'slate roof repair cost',
      category: 'material-specific',
      monthlySearchVolume: 1900,
      localVolumeCharlotte: 25,
      commercialIntent: 'high',
      conversionPotential: 'high',
      avgCPC: 14.00,
      difficulty: 42,
      existingPage: false,
      existingSlug: null,
      recommendedPageType: 'cost-guide',
      notes: 'GAP: No dedicated slate cost page. Service page exists.'
    },
    {
      keyword: 'roof repair same day service',
      category: 'insurance-emergency',
      monthlySearchVolume: 1300,
      localVolumeCharlotte: 30,
      commercialIntent: 'high',
      conversionPotential: 'very-high',
      avgCPC: 25.00,
      difficulty: 38,
      existingPage: false,
      existingSlug: null,
      recommendedPageType: 'landing-page',
      notes: 'GAP: Urgency variant. Could be a section on emergency page.'
    },
  ];

  return keywords;
}

// ---------------------------------------------------------------------------
// DataForSEO API attempt
// ---------------------------------------------------------------------------
async function tryDataForSEO(seedKeywords) {
  if (!DATAFORSEO_LOGIN || !DATAFORSEO_PASSWORD) {
    console.log('[DataForSEO] No credentials found, skipping.');
    return null;
  }

  const auth = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString('base64');

  const payload = seedKeywords.slice(0, 10).map(kw => ({
    keyword: kw,
    location_code: 2840, // US
    language_code: 'en',
  }));

  try {
    console.log('[DataForSEO] Attempting API call...');
    const response = await fetch(
      'https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live',
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    if (response.status === 402) {
      console.log('[DataForSEO] 402 Payment Required. Falling back to curated data.');
      return null;
    }

    if (!response.ok) {
      console.log(`[DataForSEO] HTTP ${response.status}. Falling back to curated data.`);
      return null;
    }

    const data = await response.json();
    if (data.status_code !== 20000) {
      console.log(`[DataForSEO] API error: ${data.status_message}. Falling back.`);
      return null;
    }

    console.log('[DataForSEO] Success! Merging API data...');
    return data;
  } catch (err) {
    console.log(`[DataForSEO] Network error: ${err.message}. Falling back.`);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Merge DataForSEO data if available
// ---------------------------------------------------------------------------
function mergeDataForSEOResults(keywords, apiData) {
  if (!apiData || !apiData.tasks) return keywords;

  const volumeMap = {};
  for (const task of apiData.tasks) {
    if (task.result) {
      for (const result of task.result) {
        if (result.keyword) {
          volumeMap[result.keyword.toLowerCase()] = {
            volume: result.search_volume,
            cpc: result.cpc,
            competition: result.competition,
          };
        }
      }
    }
  }

  return keywords.map(kw => {
    const apiInfo = volumeMap[kw.keyword.toLowerCase()];
    if (apiInfo) {
      return {
        ...kw,
        monthlySearchVolume: apiInfo.volume || kw.monthlySearchVolume,
        avgCPC: apiInfo.cpc || kw.avgCPC,
        dataSource: 'dataforseo-api',
      };
    }
    return { ...kw, dataSource: 'industry-research' };
  });
}

// ---------------------------------------------------------------------------
// Analysis and scoring
// ---------------------------------------------------------------------------
function analyzeKeywords(keywords) {
  const sorted = [...keywords].sort(
    (a, b) => b.monthlySearchVolume - a.monthlySearchVolume
  );

  const gaps = sorted.filter(kw => !kw.existingPage);
  const covered = sorted.filter(kw => kw.existingPage);

  const byCategory = {};
  for (const kw of sorted) {
    if (!byCategory[kw.category]) byCategory[kw.category] = [];
    byCategory[kw.category].push(kw);
  }

  const totalAddressableVolume = sorted.reduce(
    (sum, kw) => sum + kw.monthlySearchVolume,
    0
  );
  const coveredVolume = covered.reduce(
    (sum, kw) => sum + kw.monthlySearchVolume,
    0
  );
  const gapVolume = gaps.reduce(
    (sum, kw) => sum + kw.monthlySearchVolume,
    0
  );

  return {
    totalKeywords: sorted.length,
    totalAddressableVolume,
    coveredKeywords: covered.length,
    coveredVolume,
    coveragePercent: ((coveredVolume / totalAddressableVolume) * 100).toFixed(1),
    gapKeywords: gaps.length,
    gapVolume,
    categoryBreakdown: Object.fromEntries(
      Object.entries(byCategory).map(([cat, kws]) => [
        cat,
        {
          count: kws.length,
          totalVolume: kws.reduce((s, k) => s + k.monthlySearchVolume, 0),
          gaps: kws.filter(k => !k.existingPage).length,
          topKeyword: kws[0]?.keyword,
        },
      ])
    ),
  };
}

// ---------------------------------------------------------------------------
// Priority recommendations
// ---------------------------------------------------------------------------
function generateRecommendations(keywords) {
  const gaps = keywords
    .filter(kw => !kw.existingPage)
    .sort((a, b) => b.monthlySearchVolume - a.monthlySearchVolume);

  return gaps.map((kw, idx) => ({
    priority: idx + 1,
    keyword: kw.keyword,
    category: kw.category,
    monthlyVolume: kw.monthlySearchVolume,
    localVolume: kw.localVolumeCharlotte,
    recommendedPageType: kw.recommendedPageType,
    suggestedSlug: kw.keyword
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') + '-charlotte-nc',
    estimatedCPC: kw.avgCPC,
    rationale: kw.notes,
  }));
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  console.log('=== Transactional Keyword Research for bestroofingnow.com ===');
  console.log(`Date: ${new Date().toISOString().split('T')[0]}`);
  console.log('Market: Charlotte NC + National\n');

  // Build curated keyword database
  const keywordsBase = buildKeywordDatabase();
  console.log(`[Data] Compiled ${keywordsBase.length} transactional keywords from industry sources.`);

  // Try DataForSEO
  const seedKeywords = keywordsBase.slice(0, 10).map(k => k.keyword);
  const apiData = await tryDataForSEO(seedKeywords);

  // Merge results
  const keywords = mergeDataForSEOResults(keywordsBase, apiData);

  // Analyze
  const analysis = analyzeKeywords(keywords);
  const recommendations = generateRecommendations(keywords);

  console.log(`\n[Analysis] ${analysis.totalKeywords} keywords analyzed`);
  console.log(`  Total addressable volume: ${analysis.totalAddressableVolume.toLocaleString()}/mo`);
  console.log(`  Covered by BRN: ${analysis.coveredKeywords} keywords (${analysis.coveragePercent}% of volume)`);
  console.log(`  Gaps identified: ${analysis.gapKeywords} keywords (${analysis.gapVolume.toLocaleString()}/mo)`);

  console.log('\n[Categories]');
  for (const [cat, info] of Object.entries(analysis.categoryBreakdown)) {
    console.log(`  ${cat}: ${info.count} keywords, ${info.totalVolume.toLocaleString()}/mo, ${info.gaps} gaps`);
  }

  if (recommendations.length > 0) {
    console.log('\n[Top Gap Opportunities]');
    for (const rec of recommendations.slice(0, 5)) {
      console.log(`  #${rec.priority}: "${rec.keyword}" (${rec.monthlyVolume.toLocaleString()}/mo) -> ${rec.suggestedSlug}`);
    }
  }

  // Build output
  const output = {
    metadata: {
      generatedAt: new Date().toISOString(),
      market: 'Charlotte NC + National',
      site: 'bestroofingnow.com',
      dataSource: apiData ? 'dataforseo-api + industry-research' : 'industry-research (curated from 10+ SEO sources)',
      sources: [
        'roofingwebmasters.com/50-keywords/',
        'hookagency.com/roofing-marketing/seo/best-keywords/',
        'roofingcontractorsseo.com/roofing-seo-keywords/',
        'oglinedigital.com/insights/top-100-roofing-keywords-for-seo-and-ppc',
        'seoforroofers.com/resources/guides/roofing-seo-keywords',
        'roofingseoguy.com/50-roofing-keywords/',
        'flexleads.com/keywords-for-roofing/',
        'mediasearchgroup.com/industries/seo-keyword-ideas-for-roofing-companies',
        'bestppcfirm.com/blog/best-roofing-keywords-for-high-ticket-jobs',
        'cinchlocal.com/most-searched-roofing-keywords',
      ],
    },
    analysis,
    keywords: keywords.sort((a, b) => b.monthlySearchVolume - a.monthlySearchVolume),
    gapOpportunities: recommendations,
  };

  // Write output
  const outputPath = resolve(PROJECT_ROOT, 'research', 'transactional-keywords-2026-04-11.json');
  writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`\n[Output] Written to ${outputPath}`);
  console.log('Done.');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
