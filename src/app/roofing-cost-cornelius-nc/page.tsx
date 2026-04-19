import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  ArrowRight,
  HelpCircle,
  Award,
  MapPin,
  DollarSign,
  Home,
  TrendingUp,
  Calculator,
  FileText,
  Wrench,
  Hammer,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
import { LKNNeighborhoodGrid } from '@/components/sections/LKNNeighborhoodGrid';
import { LKNHowToBundle } from '@/components/seo/LKNHowToSchemas';
export const metadata: Metadata = {
  title: 'Roofing Cost Cornelius NC',
  description:
    'Roofing cost in Cornelius NC for 2026. Replacement pricing $5,925-$125,000+ by material and home size. The Peninsula, Antiquity, Jetton Cove rates. Free estimate.',
  keywords: [
    'roofing cost cornelius nc',
    'roof replacement cost cornelius',
    'how much does a roof cost in cornelius nc',
    'cornelius nc roofing prices 2026',
    'metal roof cost cornelius nc',
    'roof repair cost cornelius',
    'the peninsula roofing cost',
    'antiquity cornelius roof price',
    'cornelius roof estimate',
    'new roof price cornelius north carolina',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-cost-cornelius-nc`,
  },
  openGraph: {
    title: 'Roofing Cost Cornelius NC | 2026 Price Guide',
    description:
      'Complete 2026 Cornelius NC roofing cost breakdown — by material, home size, and neighborhood. The Peninsula, Antiquity, Jetton Cove pricing included.',
    url: `${SITE_CONFIG.url}/roofing-cost-cornelius-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.modern1,
        width: 1200,
        height: 630,
        alt: 'Roofing cost Cornelius NC 2026 - pricing guide for Cornelius homeowners',
      },
    ],
  },
};

// 2026 cost per roofing square (100 sqft) — Cornelius NC market rates
const materialPricing = [
  {
    material: 'Architectural Asphalt Shingles',
    perSquare: '$395 - $600',
    perHome2500: '$9,875 - $15,000',
    lifespan: '25-30 years',
    bestFor: 'Most Cornelius homes — Westmoreland, Patrick\'s Purchase, Old Cornelius',
    note: 'GAF Timberline HDZ and CertainTeed Landmark are the workhorse choice for Cornelius homeowners. Carries Class A fire and 130 MPH wind ratings standard.',
  },
  {
    material: 'Class 4 Impact-Resistant Shingles',
    perSquare: '$550 - $850',
    perHome2500: '$13,750 - $21,250',
    lifespan: '30-50 years',
    bestFor: 'Hail-prone Cornelius zip codes 28031 and 28036',
    note: 'Qualifies for NC homeowner insurance discounts of 10-28%. Mecklenburg County sees 1-3 hail events per year, making the upgrade pay back in 4-7 years.',
  },
  {
    material: 'Standing Seam Metal',
    perSquare: '$1,200 - $2,200',
    perHome2500: '$30,000 - $55,000',
    lifespan: '50-70 years',
    bestFor: 'The Peninsula estates, Jetton Cove waterfront, modern Antiquity builds',
    note: 'Concealed-fastener Kynar 500 panels handle Cornelius lake-wind exposure and meet most HOA architectural standards in The Peninsula.',
  },
  {
    material: 'Synthetic Slate / Composite',
    perSquare: '$900 - $1,800',
    perHome2500: '$22,500 - $45,000',
    lifespan: '40-60 years',
    bestFor: 'Antiquity neo-traditional homes, Peninsula estates wanting slate look',
    note: 'DaVinci and Brava deliver authentic slate aesthetics at 40% less weight — no roof structural reinforcement required for Cornelius homes built since 1995.',
  },
  {
    material: 'Natural Slate',
    perSquare: '$2,000 - $5,000',
    perHome2500: '$50,000 - $125,000',
    lifespan: '75-150 years',
    bestFor: 'Luxury Peninsula estates, custom Cornelius lakefront builds',
    note: 'A 100+ year roof. Requires structural assessment for Cornelius homes built before 2005. Insurance carriers in Cornelius love it for resilience.',
  },
  {
    material: 'Clay or Concrete Tile',
    perSquare: '$700 - $2,000',
    perHome2500: '$17,500 - $50,000',
    lifespan: '50-100 years',
    bestFor: 'Mediterranean and Spanish-style Cornelius custom homes',
    note: 'Common on Peninsula custom builds. Tile requires reinforced framing — verify your Cornelius home\'s deck rating before quoting.',
  },
  {
    material: 'Cedar Shake',
    perSquare: '$700 - $1,200',
    perHome2500: '$17,500 - $30,000',
    lifespan: '30-50 years',
    bestFor: 'Old Cornelius historic homes, lakeside cottages',
    note: 'Authentic cedar adds character to historic Cornelius properties but requires biennial maintenance in Lake Norman\'s humid summers.',
  },
];

// Cost by Cornelius home size — pricing rounded to typical Cornelius footprints
const costBySize = [
  {
    size: '1,500 sqft',
    architectural: '$5,925 - $9,000',
    metal: '$18,000 - $33,000',
    syntheticSlate: '$13,500 - $27,000',
    naturalSlate: '$30,000 - $75,000',
    typical: 'Old Cornelius cottages, Westmoreland starters',
  },
  {
    size: '2,000 sqft',
    architectural: '$7,900 - $12,000',
    metal: '$24,000 - $44,000',
    syntheticSlate: '$18,000 - $36,000',
    naturalSlate: '$40,000 - $100,000',
    typical: 'Patrick\'s Purchase ranches, smaller Antiquity townhomes',
  },
  {
    size: '2,500 sqft',
    architectural: '$9,875 - $15,000',
    metal: '$30,000 - $55,000',
    syntheticSlate: '$22,500 - $45,000',
    naturalSlate: '$50,000 - $125,000',
    typical: 'Antiquity single-family, Jetton Cove standard homes',
  },
  {
    size: '3,500 sqft',
    architectural: '$13,825 - $21,000',
    metal: '$42,000 - $77,000',
    syntheticSlate: '$31,500 - $63,000',
    naturalSlate: '$70,000 - $175,000',
    typical: 'Peninsula non-waterfront, larger Antiquity executive homes',
  },
  {
    size: '5,000+ sqft',
    architectural: '$19,750 - $30,000+',
    metal: '$60,000 - $110,000+',
    syntheticSlate: '$45,000 - $90,000+',
    naturalSlate: '$100,000 - $250,000+',
    typical: 'The Peninsula golf-front estates, Cornelius lakefront luxury',
  },
];

// Roof repair cost tiers for Cornelius
const repairTiers = [
  {
    tier: 'Minor Repairs',
    range: '$400 - $2,500',
    examples: 'Single-shingle blow-off, isolated nail-pops, sealant refresh, pipe-boot replacement, flashing touch-ups',
    response: 'Same-week service across Cornelius for non-active leaks',
  },
  {
    tier: 'Moderate Repairs',
    range: '$2,500 - $6,000',
    examples: 'Section re-shingle (1-3 squares), valley re-flash, ridge vent replacement, multiple boots, 4-8 sheets of decking',
    response: 'Common after Cornelius wind events — typically scheduled within 7-10 days',
  },
  {
    tier: 'Major Repairs',
    range: '$6,000 - $15,000',
    examples: 'Storm damage to multiple roof planes, partial replacement (one elevation), structural truss repair, major deck rebuild',
    response: 'Insurance-claim work — Best Roofing Now meets your Cornelius adjuster on site',
  },
  {
    tier: 'Full Replacement',
    range: '$8,000 - $125,000+',
    examples: 'Storm-totaled roof, end-of-life shingle system, owner-driven upgrade to metal, slate, or impact-resistant',
    response: 'See pricing tables above for material and Cornelius home-size breakdown',
  },
];

// Cornelius neighborhood pricing reality
const neighborhoodPricing = [
  {
    neighborhood: 'The Peninsula',
    typicalSize: '4,500 - 8,000+ sqft',
    avgCost: '$25,000 - $150,000+',
    profile: 'Gated golf-course community on Lake Norman with strict HOA architectural review. Steep multi-gable estate roofs with 9/12-12/12 pitches. Material samples and color must be HOA-approved before tear-off.',
    materials: 'Standing seam, synthetic slate, natural slate, premium architectural',
  },
  {
    neighborhood: 'Antiquity',
    typicalSize: '2,200 - 4,000 sqft',
    avgCost: '$11,000 - $45,000',
    profile: 'Mixed-use neo-traditional Cornelius community with consistent architectural style. HOA approval required for material and color changes from original build spec.',
    materials: 'Architectural shingles (most common), synthetic slate accents, metal porch roofs',
  },
  {
    neighborhood: 'Jetton Cove',
    typicalSize: '2,500 - 5,500 sqft',
    avgCost: '$15,000 - $75,000',
    profile: 'Established Cornelius lakeside community with mature trees and waterfront access. Wind exposure on lake-side elevations drives upgraded fastening patterns.',
    materials: 'Architectural shingles, standing seam metal, impact-resistant Class 4',
  },
  {
    neighborhood: 'Old Cornelius',
    typicalSize: '1,200 - 2,400 sqft',
    avgCost: '$6,500 - $22,000',
    profile: 'Historic downtown Cornelius cottages and bungalows. Lower roof pitches (4/12-7/12) and smaller footprints keep costs down. Some properties under historic district guidance.',
    materials: 'Architectural shingles, cedar shake on historic-eligible homes',
  },
  {
    neighborhood: 'Westmoreland',
    typicalSize: '1,800 - 3,200 sqft',
    avgCost: '$8,000 - $25,000',
    profile: 'Established Cornelius residential pocket with traditional ranch and two-story homes. Standard pitches and straightforward roof geometry keep installation costs predictable.',
    materials: 'Architectural shingles dominate, occasional metal accent roofs',
  },
  {
    neighborhood: 'Patrick\'s Purchase',
    typicalSize: '2,000 - 3,500 sqft',
    avgCost: '$9,000 - $28,000',
    profile: 'Family-oriented Cornelius neighborhood with consistent suburban architecture. Most roofs from original early-2000s build now reaching natural replacement age in 2026.',
    materials: 'Architectural shingles, Class 4 impact upgrades for insurance savings',
  },
];

// Cost factors specific to Cornelius
const costFactors = [
  {
    icon: TrendingUp,
    title: 'Roof Pitch & Complexity',
    description: 'Peninsula estates often run 9/12 to 12/12 pitches with multiple gables, valleys, dormers, and turret elements. Steep, complex Cornelius roofs add 15-40% over a simple ranch in Westmoreland or Patrick\'s Purchase.',
  },
  {
    icon: Hammer,
    title: 'Tear-Off Layers',
    description: 'North Carolina building code permits a maximum of two layers of asphalt shingles (one lay-over). Most Cornelius homes built since the early 2000s are on their original layer, so a single tear-off applies. Two-layer tear-offs add $1.00-$1.75 per square foot to your Cornelius project.',
  },
  {
    icon: FileText,
    title: 'Cornelius Permits',
    description: 'Cornelius permits roof replacements through the Town of Cornelius Planning Department. Typical residential roof permit fees run $95-$250 with fast turnaround (often same-week). Permits are mandatory for tear-off and re-roofs across all Cornelius zip codes (28031, 28036).',
  },
  {
    icon: Shield,
    title: 'Insurance & Hail Exposure',
    description: 'Mecklenburg County (which includes Cornelius) is in the Carolinas hail corridor, with 1-3 significant hail events per year. Class 4 impact-resistant shingles qualify for NC homeowner discounts that recoup the upgrade cost in 4-7 years.',
  },
  {
    icon: Home,
    title: 'HOA Architectural Approval',
    description: 'The Peninsula and Antiquity require HOA architectural review before any Cornelius roof replacement. Material samples, color chips, and contractor credentials are submitted for approval. Best Roofing Now manages the full Cornelius HOA submittal package on your behalf.',
  },
  {
    icon: Wrench,
    title: 'Deck Repairs',
    description: 'Rotted or damaged plywood decking averages $75-$150 per sheet replaced. Older Cornelius homes — especially Old Cornelius and Westmoreland properties from the 1970s-1980s — see higher deck-replacement frequency.',
  },
];

// Repair vs replacement decision matrix for Cornelius homeowners
const repairVsReplace = [
  {
    scenario: 'Single isolated leak, roof under 12 years old',
    recommendation: 'Repair',
    reasoning: 'Targeted repair preserves remaining roof life. Typical Cornelius cost: $400-$1,500.',
  },
  {
    scenario: 'Hail damage with insurance claim approval',
    recommendation: 'Replace',
    reasoning: 'Insurance covers full Cornelius replacement minus deductible. Upgrade to Class 4 for premium discount.',
  },
  {
    scenario: 'Multiple leaks across different roof planes',
    recommendation: 'Replace',
    reasoning: 'Underlayment failure indicated. Cornelius patch-and-pray cycles cost more long-term than replacement.',
  },
  {
    scenario: 'Roof 18+ years old with curling shingles',
    recommendation: 'Replace',
    reasoning: 'Approaching end-of-life. Cornelius insurance carriers may non-renew on roofs over 20-25 years.',
  },
  {
    scenario: 'Storm damage to one roof slope only',
    recommendation: 'Repair or partial replace',
    reasoning: 'Insurance may approve partial Cornelius replacement matching adjacent slopes.',
  },
  {
    scenario: 'Selling your Cornelius home in 12-24 months',
    recommendation: 'Replace',
    reasoning: 'A new roof recoups 60-70% in Cornelius resale and dramatically reduces days-on-market.',
  },
];

// Financing context
const financingOptions = [
  {
    title: '0% APR Promotional Financing',
    description: '0% APR for 12-24 months on qualified Cornelius roof replacements. Pay no interest if balance settled in promotional window. Ideal for homeowners with cash reserves who prefer to keep liquidity.',
  },
  {
    title: 'Long-Term Fixed Payment Plans',
    description: 'Terms from 60 to 180 months with fixed monthly payments. A typical Cornelius $25,000 metal roof financed at 9.99% APR over 120 months runs roughly $330/month — manageable for most Cornelius household budgets.',
  },
  {
    title: 'Insurance Claim Assistance',
    description: 'When your Cornelius roof is replaced under a homeowner insurance claim, the insurer pays the bulk of the cost. Best Roofing Now coordinates directly with your adjuster, documents storm damage, and bridges any gap with financing for your deductible.',
  },
  {
    title: 'PowerPay & GoodLeap Partner Lenders',
    description: 'We work with national home-improvement lenders specializing in Cornelius and broader Lake Norman roofing projects. Soft-pull pre-qualification means checking your rate does not affect your credit score.',
  },
];

// 10 cost-focused FAQs for Cornelius
const costFAQs = [
  {
    question: 'How much does a new roof cost in Cornelius NC in 2026?',
    answer:
      'A new roof in Cornelius NC in 2026 costs $9,875-$15,000 for a typical 2,500 sqft home with architectural asphalt shingles. Standing seam metal roofs run $30,000-$55,000 on the same Cornelius home. The Peninsula and other Cornelius luxury estates with synthetic or natural slate range from $22,500 to $125,000+. Best Roofing Now provides free, on-site Cornelius estimates with itemized line-item pricing.',
  },
  {
    question: 'How much does roof replacement cost in Cornelius?',
    answer:
      'Roof replacement in Cornelius averages $9,000-$25,000 for a standard suburban home in Westmoreland, Patrick\'s Purchase, or Antiquity. Cornelius luxury estates in The Peninsula commonly run $35,000-$150,000+ depending on roof pitch, complexity, and material. Cornelius pricing reflects Mecklenburg County labor rates, current 2026 material costs, and Cornelius permit fees of $95-$250.',
  },
  {
    question: 'What\'s the cheapest roofing material in Cornelius NC?',
    answer:
      'Architectural asphalt shingles are the cheapest mainstream roofing material in Cornelius NC at $395-$600 per square (100 sqft) installed. Three-tab shingles are technically cheaper but are not recommended in Cornelius because of their lower wind rating and shorter 15-20 year lifespan. For best value in Cornelius, GAF Timberline HDZ architectural shingles deliver 25-30 years at the lower end of premium pricing.',
  },
  {
    question: 'How much does a roof on a 2,500 sqft Cornelius home cost?',
    answer:
      'A roof on a 2,500 sqft Cornelius home costs $9,875-$15,000 with architectural shingles, $13,750-$21,250 with Class 4 impact-resistant shingles, $30,000-$55,000 with standing seam metal, $22,500-$45,000 with synthetic slate, or $50,000-$125,000 with natural slate. These Cornelius prices include tear-off, disposal, underlayment, drip edge, ridge vent, flashing, and Cornelius permits.',
  },
  {
    question: 'How much do roof repairs cost in Cornelius?',
    answer:
      'Roof repairs in Cornelius cost $400-$2,500 for minor work (shingle replacement, isolated leaks, boot or flashing repair), $2,500-$6,000 for moderate repairs (multiple sections, valley re-flash, partial decking), and $6,000-$15,000 for major repairs (storm damage, multiple planes, structural truss work). Cornelius emergency tarp service is available 24/7.',
  },
  {
    question: 'What\'s the average cost of a metal roof in Cornelius NC?',
    answer:
      'A metal roof in Cornelius NC averages $1,200-$2,200 per square (100 sqft) installed for standing seam Kynar 500 panels — the gold standard for Cornelius lakefront and Peninsula homes. On a typical 2,500 sqft Cornelius home that works out to $30,000-$55,000. Larger Cornelius estates of 5,000+ sqft commonly run $60,000-$110,000+. Metal roofs deliver 50-70 year lifespans and outperform shingles in Cornelius wind exposure.',
  },
  {
    question: 'Do I need a permit to replace my roof in Cornelius?',
    answer:
      'Yes, you need a permit to replace your roof in Cornelius. The Town of Cornelius Planning Department requires a residential building permit for any roof tear-off or re-roof project. Cornelius permit fees typically run $95-$250 with same-week turnaround for routine residential work. Best Roofing Now handles all Cornelius permitting on your behalf as part of our standard Cornelius roofing service.',
  },
  {
    question: 'Will The Peninsula HOA approve my roof replacement?',
    answer:
      'The Peninsula HOA in Cornelius requires architectural review before any roof replacement begins. You must submit a material sample, color chip, manufacturer specification sheet, and licensed contractor credentials to the Peninsula Architectural Review Committee. Approved materials commonly include architectural shingles in pre-approved color palettes, standing seam metal in muted tones, and synthetic or natural slate. Best Roofing Now manages the entire Peninsula HOA submittal for our Cornelius clients.',
  },
  {
    question: 'Will my insurance cover a hail-damaged roof in Cornelius?',
    answer:
      'Yes, Cornelius homeowner insurance typically covers hail-damaged roof replacement, minus your wind/hail deductible (commonly 1-2% of dwelling coverage in Mecklenburg County). On a Cornelius home with $500,000 dwelling coverage that is a $5,000-$10,000 out-of-pocket deductible, with the carrier covering the rest of the Cornelius replacement. Best Roofing Now performs no-cost storm inspections and meets your adjuster on site.',
  },
  {
    question: 'Is roofing financing available in Cornelius NC?',
    answer:
      'Yes, multiple roofing financing options are available in Cornelius NC. Best Roofing Now partners with PowerPay, GoodLeap, and other national lenders to offer 0% APR promotional periods (12-24 months), long-term fixed payment plans (60-180 months), and soft-pull pre-qualification that does not affect your Cornelius credit score. Most Cornelius homeowners qualify with no money down on roofs from $5,000 to $150,000+.',
  },
];

export default function RoofingCostCorneliusNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Cornelius Roofing', url: `${SITE_CONFIG.url}/roofing-cornelius-nc` },
          { name: 'Roofing Cost Cornelius NC', url: `${SITE_CONFIG.url}/roofing-cost-cornelius-nc` },
        ]}
      />
      <LocalBusinessSchema includeRating={true} />
      <FAQSchema faqs={costFAQs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-cost-cornelius-nc`}
        pageName="Roofing Cost Cornelius NC | 2026 Price Guide"
        city="Cornelius"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/roofing-cost-cornelius-nc`} city={"Cornelius"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.houses.modern2}
            alt="Roofing cost Cornelius NC 2026 - pricing guide for Cornelius homeowners"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">2026 Cornelius NC Pricing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Roofing Cost Cornelius NC<br />
              <span className="text-accent">2026 Price Guide</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Transparent 2026 roofing prices for every Cornelius neighborhood — The Peninsula,
              Antiquity, Jetton Cove, Old Cornelius, Westmoreland, and Patrick&apos;s Purchase.
              Materials, labor, permits, and HOA work — all itemized. Free Cornelius estimates with no hidden fees.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span>{SITE_CONFIG.googleRating} Google Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Calculator className="w-5 h-5 text-accent" />
                <span>Free Cornelius Estimates</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-accent" />
                <span>Itemized, No Hidden Fees</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                <Calendar className="w-5 h-5" />
                Get Your Free Cornelius Estimate
              </Button>
              <Button href={`tel:${SITE_CONFIG.phone}`} variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5" />
                (704) 605-6047
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer / AI Overview bait */}
      <section className="py-12 bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border-l-4 border-accent">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Quick Answer: Roofing Cost in Cornelius NC (2026)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              In 2026, a new roof in Cornelius NC costs <strong>$9,875 to $15,000</strong> for a
              typical 2,500 sqft home with architectural asphalt shingles. Standing seam metal
              runs <strong>$30,000 to $55,000</strong> on the same Cornelius home. Luxury Peninsula
              and Jetton Cove estates with synthetic or natural slate range from{' '}
              <strong>$22,500 to $125,000+</strong>. Cornelius roof repair costs run{' '}
              <strong>$400 to $15,000</strong> depending on damage scope. Cornelius permits add
              $95-$250 and most projects need 1-3 days of on-site labor.
            </p>
            <p className="text-sm text-gray-500 italic">
              Source: Best Roofing Now 2026 Cornelius NC pricing data, Mecklenburg County permit
              schedule, and 800+ Lake Norman roofing projects completed.
            </p>
          </div>
        </div>
      </section>

      {/* Average Roof Cost in Cornelius NC by Material */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Average Roof Cost in Cornelius NC (2026 by Material)
            </h2>
            <p className="text-gray-600 text-lg">
              2026 Cornelius pricing per roofing square (100 sqft of roof area) and per typical
              2,500 sqft Cornelius home. All prices are turn-key and include tear-off, underlayment,
              flashing, disposal, and Cornelius permits.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-4">
            {materialPricing.map((item) => (
              <div key={item.material} className="bg-light rounded-xl p-6 shadow-sm">
                <div className="grid md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-3">
                    <h3 className="font-bold text-primary text-lg">{item.material}</h3>
                    <p className="text-accent font-bold mt-1">{item.perSquare}<span className="text-xs text-gray-500 font-normal"> / square</span></p>
                    <p className="text-sm text-gray-600 mt-1">{item.perHome2500} <span className="text-xs text-gray-500">on 2,500 sqft</span></p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Lifespan</p>
                    <p className="font-medium text-gray-700">{item.lifespan}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Best For</p>
                    <p className="text-gray-700 text-sm">{item.bestFor}</p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Cornelius Note</p>
                    <p className="text-gray-600 text-sm">{item.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cornelius Roof Replacement Cost by Home Size */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Cornelius Roof Replacement Cost by Home Size
            </h2>
            <p className="text-gray-600 text-lg">
              2026 turn-key Cornelius pricing by roof footprint and material. Most Cornelius homes
              fall between 2,000 and 3,500 sqft, with The Peninsula estates often exceeding 5,000 sqft.
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-4 text-left font-bold">Home Size</th>
                  <th className="px-4 py-4 text-left font-bold">Architectural Shingles</th>
                  <th className="px-4 py-4 text-left font-bold">Standing Seam Metal</th>
                  <th className="px-4 py-4 text-left font-bold">Synthetic Slate</th>
                  <th className="px-4 py-4 text-left font-bold">Natural Slate</th>
                </tr>
              </thead>
              <tbody>
                {costBySize.map((row, index) => (
                  <tr key={row.size} className={index % 2 === 0 ? 'bg-white' : 'bg-light/50'}>
                    <td className="px-4 py-4">
                      <div className="font-semibold text-primary">{row.size}</div>
                      <div className="text-xs text-gray-500 mt-1">{row.typical}</div>
                    </td>
                    <td className="px-4 py-4 text-gray-700 font-medium">{row.architectural}</td>
                    <td className="px-4 py-4 text-gray-700 font-medium">{row.metal}</td>
                    <td className="px-4 py-4 text-gray-700 font-medium">{row.syntheticSlate}</td>
                    <td className="px-4 py-4 text-gray-700 font-medium">{row.naturalSlate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Cornelius pricing reflects 2026 Mecklenburg County labor rates, current material
              costs, and standard Cornelius permit fees. Actual quotes vary with roof pitch,
              complexity, tear-off layers, and HOA requirements in The Peninsula or Antiquity.
            </p>
          </div>
        </div>
      </section>

      {/* Roof Repair vs Replacement Cost Comparison */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Repair vs Replacement in Cornelius: Cost Comparison
            </h2>
            <p className="text-gray-600 text-lg">
              Most Cornelius roof issues fall into one of four cost tiers. Use this to set
              expectations before your free Best Roofing Now Cornelius estimate.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
            {repairTiers.map((tier) => (
              <div key={tier.tier} className="bg-light rounded-xl p-6 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-primary">{tier.tier}</h3>
                  <span className="text-accent font-bold">{tier.range}</span>
                </div>
                <p className="text-sm text-gray-700 mb-2"><strong>Examples:</strong> {tier.examples}</p>
                <p className="text-sm text-gray-600"><strong>Cornelius response:</strong> {tier.response}</p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-4 text-center">
              Repair or Replace? Cornelius Decision Matrix
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-light rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left font-bold">Cornelius Scenario</th>
                    <th className="px-4 py-3 text-left font-bold">Recommendation</th>
                    <th className="px-4 py-3 text-left font-bold">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {repairVsReplace.map((row, index) => (
                    <tr key={row.scenario} className={index % 2 === 0 ? 'bg-white' : 'bg-light/50'}>
                      <td className="px-4 py-3 text-gray-700 text-sm">{row.scenario}</td>
                      <td className="px-4 py-3 font-semibold text-primary text-sm">{row.recommendation}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{row.reasoning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Cornelius Roofing Costs */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What Drives Cornelius Roofing Costs?
              </h2>
              <p className="text-gray-600 mb-8">
                Six factors push Cornelius NC roofing prices up or down on otherwise identical
                square footage. Understanding these helps Cornelius homeowners budget accurately
                and avoid surprises during the project.
              </p>
              <div className="space-y-5">
                {costFactors.map((factor) => (
                  <div key={factor.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <factor.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{factor.title}</h3>
                      <p className="text-gray-600 text-sm">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.houses.house2}
                alt="Cornelius NC home roof replacement project - factors affecting cost"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">{SITE_CONFIG.roofsInstalled}+</div>
                <div className="text-sm text-white/80">Cornelius &amp; LKN Roofs Installed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing by Cornelius Neighborhood */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Pricing by Cornelius Neighborhood
            </h2>
            <p className="text-gray-600 text-lg">
              Roofing costs in Cornelius NC vary dramatically by neighborhood. The Peninsula
              estates run several multiples of an Old Cornelius cottage on the same per-square
              basis because of size, pitch, complexity, and HOA material requirements.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {neighborhoodPricing.map((nb) => (
              <div key={nb.neighborhood} className="bg-light rounded-xl p-6 shadow-sm border-l-4 border-accent">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-primary">{nb.neighborhood}</h3>
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Typical Size</p>
                    <p className="font-semibold text-gray-700 text-sm">{nb.typicalSize}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Avg Cost Range</p>
                    <p className="font-bold text-accent text-sm">{nb.avgCost}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{nb.profile}</p>
                <p className="text-xs text-gray-500"><strong className="text-gray-700">Common materials:</strong> {nb.materials}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Looking for neighborhood-specific roofing service in Cornelius?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/roofing-the-peninsula-cornelius-nc" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
                The Peninsula Roofing
              </Link>
              <Link href="/roofing-jetton-cove-cornelius-nc" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
                Jetton Cove Roofing
              </Link>
              <Link href="/roofing-antiquity-cornelius-nc" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
                Antiquity Roofing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cornelius Permits, HOA & Insurance */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Cornelius Roofing Permits, HOA Rules &amp; Insurance
              </h2>
              <p className="text-gray-600 text-lg">
                Three Cornelius-specific cost variables most homeowners overlook until quote day.
                Best Roofing Now handles the paperwork on every Cornelius project.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Cornelius Permits</h3>
                <p className="text-gray-600 text-sm mb-3">
                  The Town of Cornelius Planning Department requires a residential building permit
                  for all roof tear-offs and re-roofs. Typical Cornelius residential permit: $95-$250.
                  Turnaround is generally same-week for routine roofing work in Cornelius zip codes
                  28031 and 28036.
                </p>
                <p className="text-xs text-gray-500">
                  We pull every Cornelius permit in your name and post the inspection card on site.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">HOA Approval (Peninsula &amp; Antiquity)</h3>
                <p className="text-gray-600 text-sm mb-3">
                  The Peninsula Architectural Review Committee and Antiquity HOA both require
                  pre-approval of material, color, and contractor before any Cornelius roof
                  replacement begins. Submittals typically include shingle samples, color chips,
                  manufacturer specs, and licensed contractor credentials.
                </p>
                <p className="text-xs text-gray-500">
                  We prepare and submit the full Cornelius HOA package on your behalf.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Insurance &amp; Hail</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Mecklenburg County (which includes Cornelius) sees 1-3 hail events per year.
                  Class 4 impact-resistant shingles qualify for Cornelius homeowner insurance
                  discounts of 10-28%. On a Cornelius policy with $500K dwelling coverage that
                  often saves $300-$700 per year.
                </p>
                <p className="text-xs text-gray-500">
                  Free Cornelius storm inspections — we meet your adjuster on site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing in Cornelius */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Financing a New Roof in Cornelius
              </h2>
              <p className="text-gray-600 text-lg">
                A new roof is one of the largest home investments most Cornelius homeowners make.
                Best Roofing Now offers four financing paths so you can match payments to your
                Cornelius household budget.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {financingOptions.map((opt) => (
                <div key={opt.title} className="bg-light rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-bold text-primary">{opt.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{opt.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/roof-financing-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                See full financing options for Cornelius and Charlotte-area homeowners
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Cornelius Homeowners Choose Best Roofing Now
            </h2>
            <p className="text-gray-600 text-lg">
              Cornelius is our backyard. We have replaced roofs from Old Cornelius bungalows to
              Peninsula golf-front estates and everything in between.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Cornelius HOA Certified</h3>
              <p className="text-gray-600 text-sm">
                Pre-approved with The Peninsula and Antiquity HOAs. We know exactly which
                Cornelius materials and colors clear architectural review on the first submittal.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Insurance Savings</h3>
              <p className="text-gray-600 text-sm">
                Class 4 impact upgrades save 10-28% on annual Cornelius homeowner premiums.
                Over 10 years, that is $3,000-$7,000+ in savings on a typical Cornelius policy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Cornelius Resale Impact</h3>
              <p className="text-gray-600 text-sm">
                With Cornelius median home values around $525K (and Lake Norman waterfront 2-3x
                that), a new roof recoups 60-70% of cost and dramatically reduces days-on-market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Cornelius Roofing Cost FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions about Cornelius Roofing Costs
            </h2>
            <p className="text-gray-600">
              The questions Cornelius homeowners ask most often before getting their free roofing
              estimate from Best Roofing Now.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {costFAQs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LKN Data Citations for AEO authority */}
      <LKNDataCitations city="Cornelius" />

      {/* LKN Partnerships block */}
      <LKNNeighborhoodGrid currentCity="Cornelius" currentSlug="roofing-cost-cornelius-nc" />
      <LKNPartnershipsBlock city="Cornelius" />

      {/* Service Areas + Cross-links */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              More Cornelius &amp; Lake Norman Roofing Resources
            </h2>
            <p className="text-gray-600">
              Continue your Cornelius roofing research with deeper guides, neighborhood pages,
              and adjacent Lake Norman pricing references.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/roofing-cornelius-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Cornelius NC Roofing Hub</h3>
              <p className="text-sm text-gray-600">Full Cornelius roofing services</p>
            </Link>
            <Link href="/roofers-cornelius-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Cornelius Roofers</h3>
              <p className="text-sm text-gray-600">Local Cornelius roofing contractors</p>
            </Link>
            <Link href="/roof-replacement-cornelius-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Cornelius Roof Replacement</h3>
              <p className="text-sm text-gray-600">Full replacement service detail</p>
            </Link>
            <Link href="/roof-repair-cornelius-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Cornelius Roof Repair</h3>
              <p className="text-sm text-gray-600">Targeted Cornelius repair pricing</p>
            </Link>
            <Link href="/metal-roofing-cornelius-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Metal Roofing Cornelius</h3>
              <p className="text-sm text-gray-600">Standing seam Cornelius specialists</p>
            </Link>
            <Link href="/roofing-the-peninsula-cornelius-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">The Peninsula Roofing</h3>
              <p className="text-sm text-gray-600">Cornelius luxury estate specialists</p>
            </Link>
            <Link href="/roofing-jetton-cove-cornelius-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Jetton Cove Roofing</h3>
              <p className="text-sm text-gray-600">Cornelius lakeside community</p>
            </Link>
            <Link href="/roofing-antiquity-cornelius-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Antiquity Roofing</h3>
              <p className="text-sm text-gray-600">Cornelius neo-traditional homes</p>
            </Link>
            <Link href="/lake-norman-roofing-costs-2026" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Lake Norman 2026 Costs</h3>
              <p className="text-sm text-gray-600">Full LKN regional pricing guide</p>
            </Link>
            <Link href="/lake-norman-roofing-guide" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">LKN Roofing Mega Guide</h3>
              <p className="text-sm text-gray-600">20K-word Lake Norman reference</p>
            </Link>
            <Link href="/roofing-cost-mooresville-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Mooresville Roofing Cost</h3>
              <p className="text-sm text-gray-600">Adjacent LKN city pricing</p>
            </Link>
            <Link href="/slate-roofing-lake-norman-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Slate Roofing LKN</h3>
              <p className="text-sm text-gray-600">Natural slate for Cornelius estates</p>
            </Link>
            <Link href="/synthetic-slate-roofing-lake-norman-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Synthetic Slate LKN</h3>
              <p className="text-sm text-gray-600">DaVinci/Brava for Cornelius homes</p>
            </Link>
            <Link href="/cedar-shake-roofing-lake-norman-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Cedar Shake LKN</h3>
              <p className="text-sm text-gray-600">Old Cornelius cottage character</p>
            </Link>
            <Link href="/tile-roofing-lake-norman-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Tile Roofing LKN</h3>
              <p className="text-sm text-gray-600">Clay and concrete tile pricing</p>
            </Link>
            <Link href="/roof-financing-charlotte-nc" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roof Financing</h3>
              <p className="text-sm text-gray-600">0% APR &amp; long-term plans</p>
            </Link>
            <Link href="/contact" className="bg-white rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Free Cornelius Estimate</h3>
              <p className="text-sm text-gray-600">Get your itemized quote today</p>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="location"
        city="Cornelius"
        slug="roofing-cost-cornelius-nc"
        count={4}
        title="Recent Cornelius NC Roofing Projects"
        subtitle="Browse completed roof replacements and repairs across Cornelius — The Peninsula, Antiquity, Jetton Cove, and beyond — with transparent 2026 pricing by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-cost-cornelius-nc`}
      />

      <CityGeoSection
        city="Cornelius"
        state="NC"
        citySlug="cornelius-nc"
        service="Roofing Cost Estimates"
      />

      {/* Lake Norman Guide Cross-Link */}
      <section className="py-8 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray mb-4">Want the deeper Lake Norman pricing context for your Cornelius project?</p>
            <Link href="/lake-norman-roofing-guide" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-lg">
              Read The Complete Lake Norman Roofing Guide (2026) <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Get Your Free Cornelius NC Roofing Estimate"
        subtitle="Itemized 2026 Cornelius pricing with no hidden fees. Best Roofing Now serves The Peninsula, Antiquity, Jetton Cove, Old Cornelius, Westmoreland, Patrick's Purchase, and every Cornelius zip code."
      />
    </>
  );
}
