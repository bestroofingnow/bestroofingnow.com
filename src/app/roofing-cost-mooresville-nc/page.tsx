import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
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
  Wrench,
  FileText,
  Waves,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
import { LKNNeighborhoodGrid } from '@/components/sections/LKNNeighborhoodGrid';
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
import { LKNHowToBundle } from '@/components/seo/LKNHowToSchemas';
export const metadata: Metadata = {
  title: 'Roofing Cost Mooresville NC',
  description:
    'Roofing cost Mooresville NC for 2026: shingle roofs $9,875–$15,000, metal $30K–$55K, slate $50K+. Permits, insurance, financing. Call (704) 605-6047.',
  keywords: [
    'roofing cost mooresville nc',
    'roof replacement cost mooresville',
    'roof repair cost mooresville nc',
    'how much does a roof cost in mooresville',
    'mooresville nc roofing prices 2026',
    'metal roof cost mooresville nc',
    'slate roof cost mooresville',
    'roof estimate mooresville nc',
    'cheapest roofer mooresville nc',
    'the point mooresville roofing cost',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-cost-mooresville-nc`,
  },
  openGraph: {
    title: 'Roofing Cost Mooresville NC | 2026 Price Guide',
    description:
      'Complete 2026 roofing cost guide for Mooresville NC. Pricing by material, home size, and neighborhood — from downtown bungalows to The Point lakefront estates.',
    url: `${SITE_CONFIG.url}/roofing-cost-mooresville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.modern1,
        width: 1200,
        height: 630,
        alt: 'Roofing cost Mooresville NC 2026 - Race City roof pricing guide',
      },
    ],
  },
};

// 2026 cost per square (100 sqft) — Mooresville NC market
const materialCosts = [
  {
    material: 'Architectural Asphalt Shingles',
    perSquare: '$395 – $600',
    perSqFt: '$3.95 – $6.00',
    lifespan: '25–30 years',
    bestFor: 'Most Mooresville homes — Curtis Pond, Cedarwood, downtown',
    note: 'GAF Timberline HDZ and CertainTeed Landmark are the best-selling shingles in Mooresville. Class 4 impact-resistant upgrades earn 10–25% Iredell County insurance discounts.',
  },
  {
    material: 'Metal — Standing Seam',
    perSquare: '$1,200 – $2,200',
    perSqFt: '$12.00 – $22.00',
    lifespan: '50–70+ years',
    bestFor: 'Waterfront estates on The Point, Brawley peninsula, Cove Creek',
    note: 'Concealed-fastener Galvalume or aluminum panels with Kynar 500 finish. Rated for 140+ MPH winds — ideal for Lake Norman shoreline exposure.',
  },
  {
    material: 'Synthetic Slate (DaVinci, Brava)',
    perSquare: '$900 – $1,800',
    perSqFt: '$9.00 – $18.00',
    lifespan: '40–60 years',
    bestFor: 'Luxury Mooresville homes wanting slate look at half the weight',
    note: 'Popular in The Point and The Farms where HOAs require upscale profiles but framing was not engineered for natural slate loads.',
  },
  {
    material: 'Natural Slate',
    perSquare: '$2,000 – $5,000',
    perSqFt: '$20.00 – $50.00',
    lifespan: '75–150 years',
    bestFor: 'Heritage estates and ultra-luxury Lake Norman waterfront',
    note: 'Found on a small subset of Mooresville custom estates. Requires reinforced framing — typically only viable on new construction or major remodels.',
  },
  {
    material: 'Clay or Concrete Tile',
    perSquare: '$700 – $2,000',
    perSqFt: '$7.00 – $20.00',
    lifespan: '50–100 years',
    bestFor: 'Mediterranean and Spanish-style estates on the lake',
    note: 'Heavy material — confirm structural capacity before quoting. Concrete tile is the more affordable subset.',
  },
  {
    material: 'Cedar Shake',
    perSquare: '$700 – $1,200',
    perSqFt: '$7.00 – $12.00',
    lifespan: '20–40 years',
    bestFor: 'Craftsman, lodge, and lakefront cottage architecture',
    note: 'Premium hand-split shakes deliver a textured Lake Norman aesthetic. Annual maintenance and treatment recommended in Iredell County humidity.',
  },
];

// Cost by home size — Mooresville-specific
const costBySize = [
  {
    size: '1,500 sqft',
    squares: '15–18',
    shingles: '$5,925 – $9,000',
    metal: '$18,000 – $33,000',
    synthetic: '$13,500 – $27,000',
  },
  {
    size: '2,000 sqft',
    squares: '20–24',
    shingles: '$7,900 – $12,000',
    metal: '$24,000 – $44,000',
    synthetic: '$18,000 – $36,000',
  },
  {
    size: '2,500 sqft',
    squares: '25–30',
    shingles: '$9,875 – $15,000',
    metal: '$30,000 – $55,000',
    synthetic: '$22,500 – $45,000',
  },
  {
    size: '3,500 sqft',
    squares: '35–42',
    shingles: '$13,825 – $21,000',
    metal: '$42,000 – $77,000',
    synthetic: '$31,500 – $63,000',
  },
  {
    size: '5,000+ sqft',
    squares: '50+',
    shingles: '$19,750 – $30,000+',
    metal: '$60,000 – $110,000+',
    synthetic: '$45,000 – $90,000+',
  },
];

// Repair cost tiers
const repairTiers = [
  {
    tier: 'Minor Repair',
    range: '$400 – $2,500',
    examples: [
      'Replace 5–25 wind-lifted or hail-bruised shingles',
    'Reseal pipe-boot or chimney flashing',
    'Patch a localized leak from one penetration',
    'Single missing ridge cap or starter strip',
    ],
    when: 'A few damaged shingles after a Mooresville thunderstorm, or one slow leak around a vent.',
  },
  {
    tier: 'Moderate Repair',
    range: '$2,500 – $6,000',
    examples: [
      'Replace one full slope (10–15 squares) of shingles',
      'Re-flash an entire chimney or skylight assembly',
      'Replace a damaged valley with new ice-and-water shield',
      'Re-deck and re-roof a single section after rot is found',
    ],
    when: 'Storm damage isolated to one slope, or older roofing where one face has failed before the rest.',
  },
  {
    tier: 'Major Repair / Partial Replacement',
    range: '$6,000 – $15,000',
    examples: [
      'Full tear-off and re-roof of one wing on a multi-gable home',
      'Hail-storm insurance claim covering 50%+ of roof area',
      'Decking replacement across multiple slopes',
      'Conversion of a slope from shingle to metal accent',
    ],
    when: 'Substantial storm damage, mid-life roof with widespread issues, or remodel-driven scope.',
  },
];

// What drives Mooresville roofing costs
const costDrivers = [
  {
    icon: TrendingUp,
    title: 'Roof Pitch & Steepness',
    description:
      'Many Mooresville waterfront estates in The Point and along Brawley School Road sit on 9/12, 10/12, or 12/12 pitches. Steep roofs require harnesses, jacks, and slower install — adding 15–35% in labor over a low-pitch suburban home in Curtis Pond or Cedarwood.',
  },
  {
    icon: Home,
    title: 'Roof Complexity',
    description:
      'Mooresville luxury homes often feature multi-gable rooflines, dormers, turrets, and copper-accented bay roofs. Each cricket, valley, and dormer adds flashing labor. A complex Trump National Charlotte roof can cost 20–30% more than a simple gable of the same square footage.',
  },
  {
    icon: Waves,
    title: 'Lake Norman Waterfront Premium',
    description:
      'Roofs on the Lake Norman shoreline need extended ice-and-water shield, 6-nail high-wind fastening, upgraded ridge vents, and corrosion-resistant metal accessories. Expect a 15–30% premium over comparable inland Mooresville homes.',
  },
  {
    icon: FileText,
    title: 'Tear-Off vs Lay-Over',
    description:
      'North Carolina code allows only one layer of shingles to be left in place. Most Mooresville roofs already have one layer, so a full tear-off ($1.50–$2.50/sqft in disposal and labor) is standard. Two-layer tear-offs cost more due to weight and dump fees in Iredell County.',
  },
  {
    icon: Shield,
    title: 'Decking & Underlayment',
    description:
      'Rotted plywood decking costs $75–$150 per 4×8 sheet to replace. Older Mooresville homes (1970s–1990s ranches) often need 5–15% decking replacement. Synthetic underlayment ($0.25–$0.50/sqft) is now standard over felt.',
  },
  {
    icon: FileText,
    title: 'Mooresville Permits & HOA',
    description:
      'The Town of Mooresville requires a roofing permit on any tear-off or structural work. Permit fees typically run $95–$250 depending on project value. The Point, The Farms, and Cedarwood HOAs may require pre-approval of color and material.',
  },
];

// Pricing by Mooresville neighborhood
const neighborhoodPricing = [
  {
    name: 'The Point (Trump National Charlotte)',
    homeSize: '4,000 – 12,000+ sqft',
    typicalRange: '$28,000 – $150,000+',
    notes:
      'Lakefront estates inside The Point command Mooresville’s highest roofing budgets. Standing seam metal, synthetic slate, and natural slate dominate. HOA architectural review required.',
  },
  {
    name: 'Brawley School Road Peninsula',
    homeSize: '2,800 – 6,500 sqft',
    typicalRange: '$18,000 – $65,000',
    notes:
      'Mix of established lakefront and lake-access communities (Cove Creek, The Harbour, The Farms). Class 4 impact-resistant shingles and standing seam are the most-quoted upgrades.',
  },
  {
    name: 'Curtis Pond',
    homeSize: '2,400 – 4,200 sqft',
    typicalRange: '$12,000 – $26,000',
    notes:
      'Family-friendly Mooresville community. Architectural shingles in Charcoal, Weathered Wood, and Pewter Gray are the most common picks. Steeper Curtis Pond pitches add modest labor.',
  },
  {
    name: 'Cedarwood',
    homeSize: '2,200 – 3,800 sqft',
    typicalRange: '$10,500 – $22,000',
    notes:
      'Strong fit for premium architectural shingles or Class 4 IR upgrades. Mooresville’s Cedarwood streets see steady storm-claim activity, so insurance-grade installs are popular.',
  },
  {
    name: 'The Farms',
    homeSize: '3,000 – 6,000 sqft',
    typicalRange: '$15,000 – $48,000',
    notes:
      'Equestrian-style estates near Lake Norman. Synthetic slate and standing seam are common. HOA may regulate color palette and roof profile.',
  },
  {
    name: 'Cove Creek',
    homeSize: '2,800 – 5,500 sqft',
    typicalRange: '$14,000 – $42,000',
    notes:
      'Mooresville lake-access community with mid-pitch architecture. Architectural shingles and metal accents on porches and bay windows are the most-quoted combinations.',
  },
  {
    name: 'Downtown Mooresville Historic',
    homeSize: '1,400 – 2,800 sqft',
    typicalRange: '$7,000 – $18,000',
    notes:
      'Older Race City bungalows and craftsmans. Architectural shingles, metal accents, and occasional standing seam revivals. Decking replacement budgets should be slightly higher.',
  },
  {
    name: 'Mooresville Suburban (general)',
    homeSize: '1,800 – 3,200 sqft',
    typicalRange: '$8,500 – $20,000',
    notes:
      'Newer Mooresville subdivisions off NC-150 and Williamson Road. Standard tear-off and architectural shingle replacement is the most common scope.',
  },
];

// Mooresville cost FAQs — voice-search optimized
const costFAQs = [
  {
    question: 'How much does a new roof cost in Mooresville NC in 2026?',
    answer:
      'In 2026, a new roof in Mooresville NC costs about $7,900–$15,000 for a typical 2,000–2,500 sqft home using architectural asphalt shingles. Premium materials raise the cost: standing seam metal runs $30,000–$55,000 on the same home, synthetic slate runs $22,500–$45,000, and natural slate on Mooresville lakefront estates can exceed $50,000–$125,000. Best Roofing Now provides free, written estimates anywhere in Mooresville and Iredell County.',
  },
  {
    question: 'How much does roof replacement cost in Mooresville?',
    answer:
      'Roof replacement in Mooresville averages $9,875–$15,000 for a 2,500 sqft home in architectural shingles. The exact price depends on tear-off layers, deck condition, pitch, and material. Lakefront homes on The Point or Brawley School Road peninsula typically run $18,000–$65,000+ because they use upgraded materials and waterfront fastening details.',
  },
  {
    question: 'What is the cheapest roofing material in Mooresville NC?',
    answer:
      'Architectural asphalt shingles are the most affordable widely-installed roofing material in Mooresville at $395–$600 per square (100 sqft) installed. They offer 25–30 year lifespans, wind ratings of 110–130 MPH, and warranty options up to 50 years from manufacturers like GAF and CertainTeed. We do not recommend 3-tab shingles for Mooresville due to lower wind resistance and shorter lifespan.',
  },
  {
    question: 'How much does a roof on a 2,500 sqft home in Mooresville cost?',
    answer:
      'A 2,500 sqft Mooresville home (about 25–30 roofing squares) costs $9,875–$15,000 in architectural shingles, $30,000–$55,000 in standing seam metal, $22,500–$45,000 in synthetic slate, and $50,000–$125,000 in natural slate. Final pricing depends on pitch, complexity, deck condition, and neighborhood — Curtis Pond and Cedarwood typically come in toward the lower end, while The Point and The Farms come in higher.',
  },
  {
    question: 'How much do roof repairs cost in Mooresville?',
    answer:
      'Roof repairs in Mooresville cost $400–$2,500 for minor work (a few damaged shingles, one flashing reseal, single leak), $2,500–$6,000 for moderate work (one slope of shingles, full chimney re-flash, valley replacement), and $6,000–$15,000 for major partial replacement (one wing of a multi-gable home, decking work, large insurance scopes). Emergency tarping is included free with most insurance-claim repairs.',
  },
  {
    question: 'What is the average cost of a metal roof in Mooresville NC?',
    answer:
      'A standing seam metal roof in Mooresville costs $1,200–$2,200 per square installed in 2026, which works out to $30,000–$55,000 on a typical 2,500 sqft home and $60,000–$110,000+ on a 5,000+ sqft Lake Norman estate. Pricing reflects panel gauge (24ga vs 26ga), Kynar 500 finish, snow/ice details, and trim complexity. Lifespans of 50–70+ years and 140+ MPH wind ratings make metal a popular pick for The Point and Brawley peninsula homeowners.',
  },
  {
    question: 'Do I need a permit to replace my roof in Mooresville?',
    answer:
      'Yes. The Town of Mooresville requires a building permit for any roof tear-off or structural roofing work. Permit fees generally run $95–$250 based on project value. Best Roofing Now pulls Mooresville and Iredell County permits on every project we install. Permitting protects the homeowner, ensures inspection of the deck and underlayment, and is required for warranty validity on most manufacturer roofing systems.',
  },
  {
    question: 'Will my insurance cover a hail-damaged roof in Mooresville?',
    answer:
      'If a hail or wind storm caused functional damage to your Mooresville roof, your homeowner insurance typically covers replacement minus your wind/hail deductible. Iredell County is in a documented hail corridor, so most NC carriers carry a 1–2% deductible — on a $465,000 Mooresville home that is $4,650–$9,300 out of pocket. We document storm damage, meet your adjuster on-site, and write supplements to maximize your claim.',
  },
  {
    question: 'Is financing available for roofing in Mooresville?',
    answer:
      'Yes. Best Roofing Now offers roofing financing for Mooresville homeowners through multiple lenders, with options including 0% APR promotional periods, low monthly payments, and terms from 12 to 180 months. Most Mooresville homeowners qualify with no money down. See our roof financing page for details on programs available in Iredell and Mecklenburg counties.',
  },
  {
    question: 'Who is the most affordable roofer in Mooresville NC?',
    answer:
      'The most affordable Mooresville roofer is rarely the best value. The lowest bid often skips permit fees, underlayment upgrades, decking allowances, and proper flashing — costs that resurface as leaks and warranty denials within a few years. Best Roofing Now competes on transparent pricing, manufacturer-certified installation (GAF, CertainTeed), and enhanced warranties up to 50 years. We routinely save Mooresville homeowners money over the life of the roof, even if our initial bid is not the absolute cheapest.',
  },
];

// Cross-link tiles
const relatedLinks = [
  { href: '/lake-norman-roofing-costs-2026', title: 'Lake Norman Roofing Costs 2026', subtitle: 'Regional pricing across all LKN cities' },
  { href: '/lake-norman-roofing-guide', title: 'Lake Norman Roofing Guide', subtitle: 'The complete waterfront roofing handbook' },
  { href: '/roofing-mooresville-nc', title: 'Roofing Mooresville NC', subtitle: 'Mooresville roofing services hub' },
  { href: '/roof-replacement-mooresville-nc', title: 'Roof Replacement Mooresville', subtitle: 'Full tear-off and re-roof projects' },
  { href: '/roof-repair-mooresville-nc', title: 'Roof Repair Mooresville', subtitle: 'Leak, flashing, and storm repairs' },
  { href: '/roofers-mooresville-nc', title: 'Roofers in Mooresville NC', subtitle: 'Top-rated Mooresville roofing crews' },
  { href: '/metal-roofing-mooresville-nc', title: 'Metal Roofing Mooresville', subtitle: 'Standing seam and architectural metal' },
  { href: '/slate-roofing-lake-norman-nc', title: 'Slate Roofing Lake Norman', subtitle: 'Natural slate for luxury estates' },
  { href: '/synthetic-slate-roofing-lake-norman-nc', title: 'Synthetic Slate LKN', subtitle: 'DaVinci & Brava composite slate' },
  { href: '/cedar-shake-roofing-lake-norman-nc', title: 'Cedar Shake Lake Norman', subtitle: 'Hand-split cedar for lake homes' },
  { href: '/tile-roofing-lake-norman-nc', title: 'Tile Roofing Lake Norman', subtitle: 'Clay & concrete tile installs' },
  { href: '/roof-financing-charlotte-nc', title: 'Roof Financing', subtitle: 'Flexible payment options' },
];

export default function RoofingCostMooresvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Mooresville Roofing', url: `${SITE_CONFIG.url}/roofing-mooresville-nc` },
          { name: 'Roofing Cost Mooresville NC 2026', url: `${SITE_CONFIG.url}/roofing-cost-mooresville-nc` },
        ]}
      />
      <LocalBusinessSchema includeRating={true} />
      <FAQSchema faqs={costFAQs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-cost-mooresville-nc`}
        pageName="Roofing Cost Mooresville NC | 2026 Price Guide"
        city="Mooresville"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/roofing-cost-mooresville-nc`} city={"Mooresville"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SEOImage
            src={IMAGES.houses.modern1}
            alt="Roofing cost Mooresville NC 2026 - Race City home pricing guide"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">2026 Mooresville Pricing Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Roofing Cost Mooresville NC<br />
              <span className="text-accent">2026 Price Guide</span>
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-2xl">
              Transparent 2026 roofing prices for every Mooresville neighborhood — from
              Curtis Pond and Cedarwood to The Point, The Farms, and the Brawley School
              Road peninsula on Lake Norman. Real numbers, not ranges-of-ranges.
            </p>
            <p className="text-base text-white/80 mb-8 max-w-2xl">
              Average Mooresville home (2,500 sqft) in architectural shingles:{' '}
              <strong className="text-accent">$9,875 – $15,000</strong>. Standing seam metal:{' '}
              <strong className="text-accent">$30,000 – $55,000</strong>. Lakefront estates can
              exceed <strong className="text-accent">$100,000+</strong> in slate or premium metal.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span>{SITE_CONFIG.googleRating} Google Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Calculator className="w-5 h-5 text-accent" />
                <span>Free Mooresville Estimates</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-accent" />
                <span>BBB A+ Rated</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Iredell County Local</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>
                Get Your Free Mooresville Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Summary */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              How Much Does a Roof Cost in Mooresville NC in 2026?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                The short answer: a typical Mooresville NC roof costs <strong>$7,900 – $15,000</strong>{' '}
                in architectural asphalt shingles for a 2,000–2,500 sqft home. Step up to standing
                seam metal and pricing moves to <strong>$24,000 – $55,000</strong> for the same
                footprint. On Lake Norman waterfront — The Point, the Brawley School Road peninsula,
                Cove Creek, The Farms — homes are larger, rooflines are more complex, and premium
                materials are the norm, so total invoices commonly land between{' '}
                <strong>$28,000 and $150,000+</strong>.
              </p>
              <p>
                Mooresville sits in Iredell County, on the eastern shore of Lake Norman, and is known
                as Race City USA — home to NASCAR&apos;s headquarters and a growing population of luxury
                lakefront homeowners. The town&apos;s housing stock spans 1950s downtown bungalows,
                1980s ranches in Cedarwood, modern subdivisions like Curtis Pond, and multi-million
                dollar estates inside Trump National Charlotte at The Point. Each cohort sees very
                different roofing budgets, and the sections below break the numbers down by material,
                home size, and neighborhood.
              </p>
              <p>
                Median home value in Mooresville sits around <strong>$465,000</strong> in early 2026
                (Zillow), with waterfront premiums running 2–4x that figure on Lake Norman. Iredell
                County&apos;s position in a documented hail corridor makes Class 4 impact-resistant
                shingles a popular value upgrade — they typically earn a 10–25% homeowner insurance
                discount with major NC carriers and offset their modest cost premium within a few
                policy renewals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Average Roof Cost in Mooresville NC by Material */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Average Roof Cost in Mooresville NC (2026 by Material)
            </h2>
            <p className="text-gray-600 text-lg">
              Installed pricing per square (100 sqft) for the most common Mooresville roofing materials.
              Based on Best Roofing Now project data and 2026 Iredell County labor and material costs.
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left font-bold">Material</th>
                  <th className="px-6 py-4 text-left font-bold">Per Square (100 sqft)</th>
                  <th className="px-6 py-4 text-left font-bold">Per Sq Ft</th>
                  <th className="px-6 py-4 text-left font-bold">Lifespan</th>
                </tr>
              </thead>
              <tbody>
                {materialCosts.map((row, idx) => (
                  <tr key={row.material} className={idx % 2 === 0 ? 'bg-white' : 'bg-light'}>
                    <td className="px-6 py-4 font-semibold text-primary">{row.material}</td>
                    <td className="px-6 py-4 text-accent font-semibold">{row.perSquare}</td>
                    <td className="px-6 py-4 text-gray-700">{row.perSqFt}</td>
                    <td className="px-6 py-4 text-gray-700">{row.lifespan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * 2026 Mooresville NC market rates. Per-square installed pricing includes tear-off,
              underlayment, drip edge, ridge vent, and standard flashing. Excludes deck replacement
              and major structural work.
            </p>
          </div>

          {/* Material context cards */}
          <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-4">
            {materialCosts.map((row) => (
              <div key={row.material} className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-primary mb-1">{row.material}</h3>
                <p className="text-sm text-accent font-semibold mb-2">{row.perSquare} per square</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Best for:</strong> {row.bestFor}</p>
                <p className="text-sm text-gray-600">{row.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mooresville Roof Replacement Cost by Home Size */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Mooresville Roof Replacement Cost by Home Size
            </h2>
            <p className="text-gray-600 text-lg">
              2026 installed pricing for Mooresville NC roof replacement, by living-area square
              footage. Most Mooresville homes fall between 2,000 and 3,500 sqft; The Point and
              The Farms estates regularly exceed 5,000 sqft.
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-light rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left font-bold">Roof Size (sqft)</th>
                  <th className="px-6 py-4 text-left font-bold">Squares</th>
                  <th className="px-6 py-4 text-left font-bold">Architectural Shingles</th>
                  <th className="px-6 py-4 text-left font-bold">Metal Standing Seam</th>
                  <th className="px-6 py-4 text-left font-bold">Synthetic Slate</th>
                </tr>
              </thead>
              <tbody>
                {costBySize.map((row, idx) => (
                  <tr key={row.size} className={idx % 2 === 0 ? 'bg-white' : 'bg-light'}>
                    <td className="px-6 py-4 font-semibold text-primary">{row.size}</td>
                    <td className="px-6 py-4 text-gray-600">{row.squares}</td>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.shingles}</td>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.metal}</td>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.synthetic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Assumes a roof area roughly equal to living-area square footage on a typical
              Mooresville two-story home. Add 15–35% for steeper-pitched lakefront estates.
            </p>
          </div>

          {/* Quick reference cards */}
          <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-4">
            <div className="bg-light rounded-xl p-6 text-center">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Most Common Mooresville Home</p>
              <p className="text-3xl font-bold text-primary mb-1">2,500 sqft</p>
              <p className="text-accent font-semibold">$9,875 – $15,000</p>
              <p className="text-sm text-gray-600">Architectural shingles, full tear-off</p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Lakefront Estate Average</p>
              <p className="text-3xl font-bold text-primary mb-1">5,000 sqft</p>
              <p className="text-accent font-semibold">$45,000 – $90,000+</p>
              <p className="text-sm text-gray-600">Synthetic slate or standing seam metal</p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Downtown Mooresville Bungalow</p>
              <p className="text-3xl font-bold text-primary mb-1">1,500 sqft</p>
              <p className="text-accent font-semibold">$5,925 – $9,000</p>
              <p className="text-sm text-gray-600">Architectural shingles, simple gable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Repair vs Replacement */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Mooresville Roof Repair vs Replacement: How Much Each Costs
            </h2>
            <p className="text-gray-600 text-lg">
              Not every Mooresville roof needs a full replacement. Here is what repair scopes
              actually cost in 2026 Iredell County pricing — and when each tier is appropriate.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-5">
            {repairTiers.map((tier) => (
              <div key={tier.tier} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{tier.tier}</h3>
                    <p className="text-2xl font-bold text-accent mt-1">{tier.range}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Typical Mooresville scopes</p>
                    <ul className="space-y-1 mb-3">
                      {tier.examples.map((example) => (
                        <li key={example} className="flex gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-600"><strong>When this tier fits:</strong> {tier.when}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-10 bg-primary/5 border border-primary/10 rounded-xl p-6">
            <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
              <Wrench className="w-5 h-5" />
              Repair-vs-replace rule of thumb for Mooresville homes
            </h3>
            <p className="text-gray-700 text-sm">
              If your Mooresville roof is under 12 years old and damage is localized, repair almost
              always wins on cost. If your roof is 18+ years old, has multiple damaged slopes, or
              has any decking rot, the math usually favors a full replacement — especially when an
              insurance claim is involved. We give honest recommendations either way and never push
              replacement when a repair will solve the problem.
            </p>
          </div>
        </div>
      </section>

      {/* What Drives Mooresville Roofing Costs */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What Drives Mooresville Roofing Costs
              </h2>
              <p className="text-gray-600 mb-8">
                Six factors swing nearly every Mooresville roofing estimate. Understanding them
                helps you read bids accurately and compare apples to apples between Mooresville
                contractors.
              </p>
              <div className="space-y-5">
                {costDrivers.map((driver) => (
                  <div key={driver.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <driver.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{driver.title}</h3>
                      <p className="text-gray-600 text-sm">{driver.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <SEOImage
                src={IMAGES.houses.house2}
                alt="Mooresville NC home roof replacement - what drives roofing cost"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">{SITE_CONFIG.roofsInstalled}+</div>
                <div className="text-sm text-white/80">Roofs Installed across Mooresville &amp; Lake Norman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing by Mooresville Neighborhood */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Pricing by Mooresville Neighborhood
            </h2>
            <p className="text-gray-600 text-lg">
              Mooresville is not a single market. Lakefront estates inside The Point, lake-access
              communities along the Brawley School Road peninsula, and family neighborhoods like
              Curtis Pond and Cedarwood all see meaningfully different roofing budgets.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
            {neighborhoodPricing.map((nbhd) => (
              <div key={nbhd.name} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-primary">{nbhd.name}</h3>
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Typical Home Size</p>
                    <p className="font-semibold text-gray-700">{nbhd.homeSize}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Typical Roof Cost</p>
                    <p className="font-bold text-accent">{nbhd.typicalRange}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{nbhd.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Permits & Insurance */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Mooresville Roofing Permits &amp; Insurance Considerations
              </h2>
              <p className="text-gray-600 text-lg">
                Two cost factors often overlooked in DIY budgeting: Mooresville permits and the
                way Iredell County&apos;s hail history shapes insurance pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-light rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Mooresville Roofing Permits</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>Required by the Town of Mooresville for any tear-off or structural roofing work.</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>Permit fees typically $95 – $250 based on declared project value.</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>Inspection of decking and underlayment is part of the permit — protects the homeowner.</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>NC code limits roofs to one layer of shingles. Most Mooresville re-roofs require full tear-off.</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>HOAs in The Point, The Farms, Cedarwood, and Cove Creek may require pre-approval of color/material.</span></li>
                </ul>
              </div>

              <div className="bg-light rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Insurance &amp; Hail Protection</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>Iredell County is in a documented hail corridor — Mooresville sees regular hail events each spring/summer.</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>Most NC homeowner policies carry a 1–2% wind/hail deductible — on a $465K Mooresville home, that is $4,650 – $9,300.</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>Class 4 IBHS impact-resistant shingles often qualify for 10–25% premium discounts.</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>Standing seam metal also qualifies for discounts on many NC carriers.</span></li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /><span>We meet your adjuster on-site, document storm damage, and write supplements to maximize your Mooresville claim.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Financing a New Roof in Mooresville
              </h2>
              <p className="text-gray-700 mb-4">
                A new roof is a major investment for any Mooresville homeowner — especially on
                lakefront estates where premium materials push budgets past six figures. Best
                Roofing Now partners with multiple lenders to make Mooresville roof financing
                straightforward and affordable.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span>0% APR promotional periods on qualifying applications</span></li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span>Terms from 12 to 180 months for low monthly payments</span></li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span>No money down for most Mooresville and Iredell County homeowners</span></li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span>Soft credit pulls during pre-qualification — no impact on your score</span></li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span>Combine with insurance proceeds for hail-claim deductible coverage</span></li>
              </ul>
              <Link
                href="/roof-financing-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                View Mooresville Roof Financing Options <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Sample Monthly Payment</p>
                <p className="text-4xl font-bold text-primary mb-1">$135<span className="text-lg text-gray-500">/mo</span></p>
                <p className="text-sm text-gray-600 mb-4">on a $12,500 Mooresville architectural shingle re-roof, 144-month term, sample financing</p>
                <Button href="/contact" variant="primary" size="md" className="w-full">
                  Apply for Roof Financing
                </Button>
                <p className="text-xs text-gray-500 mt-3">Sample only — actual rate and term subject to credit approval.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Mooresville Homeowners Choose Best Roofing Now
            </h2>
            <p className="text-gray-600 text-lg">
              The cheapest Mooresville roofer is rarely the best value. Here is why hundreds of
              Mooresville and Lake Norman homeowners have trusted us with their roof investment.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Manufacturer Certified</h3>
              <p className="text-gray-600 text-sm">
                GAF Factory-Certified and CertainTeed ShingleMaster credentials unlock enhanced
                warranties up to 50 years on Mooresville installations — coverage budget bidders
                cannot offer.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Insurance Savings</h3>
              <p className="text-gray-600 text-sm">
                Class 4 impact-resistant installations save 10–25% on annual premiums for Iredell
                County homeowners. Over 10 years, that compounds into $5,000–$15,000+ in savings
                for most Mooresville homes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Mooresville Resale Impact</h3>
              <p className="text-gray-600 text-sm">
                A documented new roof typically recoups 60–70% in Mooresville home value. On
                Lake Norman waterfront, premium roofing can add $20,000–$40,000 to resale price
                and shorten time on market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Mooresville Roofing Cost FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Mooresville Roofing Cost — Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              The most-asked Mooresville roofing cost questions in 2026, answered clearly for
              voice search and AI overviews.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {costFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas + Cross-Links */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
            More Mooresville &amp; Lake Norman Roofing Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-light rounded-lg p-4 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-primary group-hover:text-accent">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="location"
        city="Mooresville"
        slug="roofing-cost-mooresville-nc"
        count={4}
        title="Recent Mooresville Roofing Projects"
        subtitle="Browse completed Mooresville and Lake Norman roofing projects from Best Roofing Now — real homes, real pricing, real outcomes."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-cost-mooresville-nc`}
      />

      <CityGeoSection
        city="Mooresville"
        state="NC"
        citySlug="mooresville-nc"
        service="Roofing Cost Estimates"
      />

      {/* Lake Norman Guide Cross-Link */}
      <section className="py-8 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray mb-4">Want the full waterfront roofing playbook for Mooresville and Lake Norman?</p>
            <Link
              href="/lake-norman-roofing-guide"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-lg"
            >
              Read The Complete Lake Norman Roofing Guide (2026) <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <LKNNeighborhoodGrid currentCity="Mooresville" currentSlug="roofing-cost-mooresville-nc" />
      <LKNPartnershipsBlock city={'Mooresville'} />
      <LKNDataCitations city={'Mooresville'} />

      <CTASection
        title="Get Your Free Mooresville Roofing Estimate"
        subtitle="Transparent 2026 pricing with no hidden fees. Whether you live in Curtis Pond, Cedarwood, The Farms, or a lakefront estate inside The Point, Best Roofing Now will send a Mooresville-local estimator out for a free, written, no-obligation quote."
      />
    </>
  );
}
