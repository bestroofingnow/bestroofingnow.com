import { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  CheckCircle,
  XCircle,
  ArrowRight,
  Scale,
  Trophy,
  DollarSign,
  Clock,
  Shield,
  Thermometer,
  Weight,
  Wrench,
  Home,
  CloudRain,
  Zap,
  HelpCircle,
  BarChart3,
  Star,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { EstimateButton } from '@/components/estimate';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  AISearchOptimizationBundle,
} from '@/components/seo/SchemaMarkup';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';

const PAGE_URL = `${SITE_CONFIG.url}/tile-roof-vs-shingles-charlotte-nc`;

export const metadata: Metadata = {
  title: 'Tile Roof vs Shingles Charlotte NC | 2026 Cost Guide',
  description:
    'Tile roof vs asphalt shingles in Charlotte NC: costs, lifespan, weight, and storm performance compared. Free estimates from 5-star rated Charlotte roofer.',
  keywords: [
    'tile roof vs asphalt shingles',
    'tile vs shingle roof cost',
    'is tile roofing worth it',
    'tile roof cost Charlotte NC',
    'tile vs shingle roof Charlotte',
    'tile roof lifespan vs shingles',
    'tile roofing pros and cons Charlotte NC',
    'clay tile roof cost per square foot',
    'concrete tile vs asphalt shingles',
    'tile roof weight requirements',
    'best roofing material Charlotte NC',
    'tile roof vs shingles durability',
    'tile roof maintenance cost',
    'asphalt shingles vs tile roof insurance',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Tile Roof vs Shingles Charlotte NC | 2026 Cost Guide',
    description:
      'Tile roof vs asphalt shingles in Charlotte NC: costs, lifespan, weight, and storm performance compared. Free estimates from 5-star rated Charlotte roofer.',
    url: PAGE_URL,
    type: 'article',
    images: [
      {
        url: `${SITE_CONFIG.url}/images/logo.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tile roof vs asphalt shingles comparison - Best Roofing Now Charlotte NC',
      },
    ],
  },
};

// ============================================
// COST COMPARISON TABLE DATA
// ============================================
const costComparison = [
  {
    category: 'Materials Only (per sqft)',
    tile: '$8 - $16',
    shingles: '$1.50 - $3.50',
    notes: 'Clay tile costs more than concrete tile',
  },
  {
    category: 'Installed Cost (per sqft)',
    tile: '$15 - $30',
    shingles: '$4.50 - $7',
    notes: 'Tile labor is 2-3x shingle labor',
  },
  {
    category: '1,500 sqft Roof (total)',
    tile: '$22,500 - $45,000',
    shingles: '$6,750 - $10,500',
    notes: 'Most common Charlotte home size',
  },
  {
    category: '2,000 sqft Roof (total)',
    tile: '$30,000 - $60,000',
    shingles: '$9,000 - $14,000',
    notes: 'Larger Charlotte homes',
  },
  {
    category: '3,000 sqft Roof (total)',
    tile: '$45,000 - $90,000',
    shingles: '$13,500 - $21,000',
    notes: 'Luxury homes, Myers Park, Eastover',
  },
  {
    category: 'Structural Reinforcement',
    tile: '$2,000 - $8,000',
    shingles: '$0 (not needed)',
    notes: 'Most Charlotte homes need reinforcement for tile',
  },
  {
    category: 'Cost Per Year of Life',
    tile: '$0.40 - $0.80/sqft',
    shingles: '$0.18 - $0.28/sqft',
    notes: 'Based on 60-year tile vs 27-year shingle life',
  },
];

// ============================================
// LIFESPAN COMPARISON DATA
// ============================================
const lifespanData = [
  {
    material: 'Clay Tile',
    lifespan: '75 - 100 years',
    warranty: '50-year limited lifetime',
    replacements: '0-1 in 100 years',
    totalCost100yr: '$22,500 - $45,000',
  },
  {
    material: 'Concrete Tile',
    lifespan: '50 - 75 years',
    warranty: '50-year limited',
    replacements: '1 in 100 years',
    totalCost100yr: '$30,000 - $60,000',
  },
  {
    material: 'Architectural Shingles',
    lifespan: '25 - 30 years',
    warranty: '30-year limited lifetime',
    replacements: '3-4 in 100 years',
    totalCost100yr: '$27,000 - $56,000',
  },
  {
    material: '3-Tab Shingles',
    lifespan: '15 - 20 years',
    warranty: '20-25 year',
    replacements: '5-6 in 100 years',
    totalCost100yr: '$33,750 - $63,000',
  },
];

// ============================================
// CHARLOTTE CLIMATE FACTORS
// ============================================
const climateFactors = [
  {
    icon: CloudRain,
    factor: 'Annual Rainfall: 48 inches',
    tile: 'Excellent water shedding. Curved profile channels water efficiently. Underlayment provides secondary barrier.',
    shingles: 'Good water resistance when properly installed. Overlapping design works well. Ice and water shield at eaves recommended.',
    winner: 'tile' as const,
  },
  {
    icon: Zap,
    factor: 'Hail Events: 2-4 per year',
    tile: 'Weakness: individual tiles crack or shatter on impact. Replacement requires specialized labor. Insurance claims can be complex.',
    shingles: 'Class 4 impact-resistant shingles absorb hail energy by flexing. Qualify for NC insurance discounts of 10-28%.',
    winner: 'shingles' as const,
  },
  {
    icon: Thermometer,
    factor: 'Summer Heat: 90-100\u00B0F',
    tile: 'Natural thermal mass and air gap reduce attic temps by 15-20\u00B0F. Can cut cooling costs 10-20%. Ideal for south-facing roofs.',
    shingles: 'Dark shingles absorb significant heat. Cool-roof options cost 15-20% more. Radiant barrier underlayment helps but adds cost.',
    winner: 'tile' as const,
  },
  {
    icon: CloudRain,
    factor: 'Freeze-Thaw: 40+ frost days',
    tile: 'Concrete tiles absorb moisture and can crack during freeze-thaw cycles. Clay tiles resist better. Proper installation mitigates risk.',
    shingles: 'Flexible material handles temperature swings well. Expands and contracts without cracking. No freeze-thaw concerns.',
    winner: 'shingles' as const,
  },
  {
    icon: Zap,
    factor: 'Thunderstorms: 45+ annually',
    tile: 'Wind resistant to 125+ mph when properly fastened. Heavy weight resists uplift. Individual tiles may dislodge in extreme gusts.',
    shingles: 'Premium products rated to 130 mph winds. Flexible adhesive strips seal against wind-driven rain. Easier to repair after storms.',
    winner: 'tie' as const,
  },
  {
    icon: Thermometer,
    factor: 'Humidity & Algae',
    tile: 'Resistant to algae growth on clay. Concrete tiles may develop moss in shaded areas. Periodic cleaning recommended.',
    shingles: 'Algae-resistant (AR) shingles contain copper granules. Without AR treatment, black streaks develop within 5-7 years in Charlotte humidity.',
    winner: 'tile' as const,
  },
];

// ============================================
// WEIGHT COMPARISON
// ============================================
const weightData = {
  tile: {
    clay: '9 - 12 lbs/sqft',
    concrete: '7 - 10 lbs/sqft',
    total2000sqft: '14,000 - 24,000 lbs',
    structuralNote: 'Most Charlotte homes built after 1970 need reinforcement. Budget $2,000-$8,000 for structural upgrades. Requires engineer assessment ($300-$500).',
  },
  shingles: {
    architectural: '2.5 - 4 lbs/sqft',
    threeTab: '2 - 2.5 lbs/sqft',
    total2000sqft: '4,000 - 8,000 lbs',
    structuralNote: 'Works with any standard roof framing. No structural modifications needed. Can overlay one existing shingle layer in some cases.',
  },
};

// ============================================
// MAINTENANCE COMPARISON
// ============================================
const maintenanceComparison = [
  {
    task: 'Annual Inspection',
    tile: '$200 - $400 (specialized)',
    shingles: '$100 - $250 (standard)',
    frequency: 'Yearly',
  },
  {
    task: 'Individual Repair',
    tile: '$8 - $15 per tile + $150-$300 labor',
    shingles: '$5 - $10 per shingle + $100-$200 labor',
    frequency: 'As needed',
  },
  {
    task: 'Underlayment Replacement',
    tile: '$5,000 - $15,000 (tiles removed and reset)',
    shingles: 'N/A (replaced with full reroof)',
    frequency: 'Every 20-30 years for tile',
  },
  {
    task: 'Moss/Algae Cleaning',
    tile: '$300 - $600',
    shingles: '$200 - $500',
    frequency: 'Every 2-3 years in Charlotte',
  },
  {
    task: 'Flashing Repair',
    tile: '$300 - $800 (complex access)',
    shingles: '$200 - $500 (straightforward)',
    frequency: 'Every 10-15 years',
  },
];

// ============================================
// FAQS
// ============================================
const tileVsShinglesFAQs = [
  {
    question: 'How much does a tile roof cost compared to asphalt shingles in Charlotte NC?',
    answer:
      'In Charlotte NC, tile roofing costs $15 to $30 per square foot installed, while asphalt shingles cost $4.50 to $7 per square foot installed. For a typical 2,000 square foot roof, that means $30,000 to $60,000 for tile versus $9,000 to $14,000 for shingles. Tile also requires structural reinforcement on most Charlotte homes, adding $2,000 to $8,000. However, tile lasts 50 to 75 years compared to 25 to 30 years for shingles, making the cost per year of service comparable for homeowners who stay long-term.',
  },
  {
    question: 'Is a tile roof worth it in Charlotte NC?',
    answer:
      'A tile roof is worth it in Charlotte if you own a luxury home valued over $500,000, plan to stay 20 or more years, and your home can support the weight. Tile adds 5 to 10 percent to home value in neighborhoods like Myers Park, Eastover, and SouthPark, and provides superior energy efficiency during Charlotte\'s hot summers. For most Charlotte homeowners, however, architectural asphalt shingles provide excellent 25- to 30-year protection at 60 to 75 percent less cost.',
  },
  {
    question: 'How long does a tile roof last compared to shingles?',
    answer:
      'Clay tile roofs last 75 to 100 years and concrete tile roofs last 50 to 75 years. Architectural asphalt shingles last 25 to 30 years and three-tab shingles last 15 to 20 years. One tile roof outlasts two to three shingle roofs. The underlayment beneath tile does need replacement every 20 to 30 years, which costs $5,000 to $15,000 since tiles must be removed and reset.',
  },
  {
    question: 'Can my Charlotte home support a tile roof?',
    answer:
      'Most Charlotte homes built after 1970 with standard truss framing need structural reinforcement to support tile roofing. Tile weighs 7 to 12 pounds per square foot compared to 2 to 4 pounds for shingles. A structural engineer assessment, which costs $300 to $500, is required before tile installation. Reinforcement typically costs $2,000 to $8,000 depending on your home\'s existing framing. Homes built with concrete block or steel framing may already support the weight.',
  },
  {
    question: 'How do tile roofs perform in Charlotte hail storms?',
    answer:
      'Tile roofs are vulnerable to hail damage because individual tiles can crack or shatter on impact. Charlotte experiences 2 to 4 significant hail events per year. Cracked tiles need individual replacement at $8 to $15 per tile plus labor. By contrast, Class 4 impact-resistant asphalt shingles flex to absorb hail energy and qualify for insurance discounts of 10 to 28 percent in North Carolina. If you choose tile in Charlotte, budget for occasional hail repairs.',
  },
  {
    question: 'Are tile roofs more energy efficient than shingles in Charlotte?',
    answer:
      'Yes. Tile roofs are significantly more energy efficient in Charlotte\'s hot summers. The natural thermal mass of clay and concrete tiles, combined with the air gap between tile and roof deck, can reduce attic temperatures by 15 to 20 degrees Fahrenheit and cut cooling costs by 10 to 20 percent. Standard asphalt shingles absorb more heat, though cool-roof reflective shingles are available at 15 to 20 percent higher cost.',
  },
  {
    question: 'What maintenance does a tile roof need in Charlotte NC?',
    answer:
      'Tile roofs in Charlotte need annual inspections ($200 to $400), periodic moss and algae cleaning every 2 to 3 years ($300 to $600), and occasional individual tile replacement after hail or storm damage. The most significant maintenance expense is underlayment replacement every 20 to 30 years, which costs $5,000 to $15,000 since all tiles must be removed, the underlayment replaced, and tiles reset. Asphalt shingles require similar inspections but individual repairs are simpler and less expensive.',
  },
  {
    question: 'Does a tile roof increase home value in Charlotte?',
    answer:
      'A tile roof can increase home value by 5 to 10 percent in Charlotte\'s luxury neighborhoods including Myers Park, Eastover, SouthPark, and Lake Norman lakefront properties. For homes valued over $500,000, the distinctive Mediterranean or Spanish aesthetic commands a premium from buyers. For homes under $500,000, asphalt shingles are the expected material and a tile roof may not recoup its additional cost at resale.',
  },
  {
    question: 'Which roofing material has better insurance rates in Charlotte NC?',
    answer:
      'Asphalt shingles generally result in lower insurance premiums in Charlotte, especially impact-resistant Class 4 shingles that qualify for discounts of 10 to 28 percent in North Carolina. Tile roofs can lead to higher premiums because tile replacement after storm damage is more expensive and labor-intensive. Check with your Charlotte insurance provider before choosing tile, as some carriers charge a premium surcharge for tile roofing.',
  },
  {
    question: 'How long does it take to install a tile roof vs shingles in Charlotte?',
    answer:
      'A tile roof installation in Charlotte takes 1 to 2 weeks for a standard home, compared to 1 to 3 days for asphalt shingles. Tile installation is more complex, requiring specialized fastening systems, precise alignment, and often structural modifications. There are also fewer tile roofing specialists in the Charlotte metro compared to hundreds of qualified shingle installers. Plan for 30 to 50 percent higher labor costs with tile.',
  },
];

// ============================================
// PROS AND CONS
// ============================================
const tilePros = [
  'Lasts 50-75 years (clay up to 100)',
  'Superior energy efficiency in Charlotte heat',
  'Class A fire rating',
  'Adds 5-10% to luxury home value',
  'Resistant to rot, insects, and UV',
  'Distinctive Mediterranean curb appeal',
  'Low long-term cost per year of service',
  'Environmentally sustainable (natural materials)',
];

const tileCons = [
  'Costs 3-5x more than shingles upfront',
  'Requires structural reinforcement ($2K-$8K)',
  'Individual tiles crack in hail storms',
  'Fewer qualified installers in Charlotte',
  'Complex installation takes 1-2 weeks',
  'Underlayment replacement every 20-30 years',
  'May increase insurance premiums',
  'Heavy weight limits to certain structures',
];

const shinglePros = [
  'Costs 60-75% less than tile upfront',
  'Works with any roof structure',
  'Quick 1-3 day installation',
  'Hundreds of qualified Charlotte contractors',
  'Class 4 IR options earn insurance discounts',
  'Easy and affordable repairs',
  'Handles hail better (flexes vs cracks)',
  'Wide variety of colors and styles',
];

const shingleCons = [
  'Shorter 25-30 year lifespan',
  'Less energy efficient than tile',
  'Absorbs more heat in Charlotte summers',
  'Susceptible to algae without AR treatment',
  'May need 3-4 replacements per century',
  'Lower curb appeal than premium tile',
  'Granule loss accelerates after year 15',
  'Environmental impact (petroleum-based, less recyclable)',
];

export default function TileRoofVsShinglesCharlotteNCPage() {
  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Tile Roof vs Shingles Charlotte NC | 2026 Cost Guide"
        description="Complete side-by-side comparison of tile roofing vs asphalt shingles for Charlotte NC homeowners. Costs, lifespan, weight, maintenance, climate suitability, and expert recommendations."
        url={PAGE_URL}
        datePublished="2025-06-15"
        dateModified="2026-03-28"
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Compare', url: `${SITE_CONFIG.url}/compare` },
          { name: 'Tile Roof vs Shingles Charlotte NC', url: PAGE_URL },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Compare', url: `${SITE_CONFIG.url}/compare` },
          { name: 'Tile Roof vs Shingles Charlotte NC', url: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={tileVsShinglesFAQs} />
      <AISearchOptimizationBundle
        pageUrl={PAGE_URL}
        pageName="Tile Roof vs Asphalt Shingles Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does a tile roof cost vs asphalt shingles in Charlotte NC?',
            answer: 'Tile roofing costs $15-$30 per square foot installed in Charlotte while asphalt shingles cost $4.50-$7 per square foot. For a 2,000 sqft roof, that is $30,000-$60,000 for tile versus $9,000-$14,000 for shingles. Tile lasts 50-75 years vs 25-30 for shingles.',
            speakableAnswer: 'Tile roofing costs $15-30 per square foot in Charlotte, while asphalt shingles cost $4.50-7. Tile lasts 50-75 years versus 25-30 for shingles. Call Best Roofing Now at 704-605-6047 for a free estimate.',
          },
          {
            question: 'Is tile roofing worth it in Charlotte NC?',
            answer: 'Tile is worth it for luxury homes over $500,000 where you plan to stay 20+ years. It adds 5-10% to home value, cuts cooling costs 10-20%, and lasts 50-75 years. For most Charlotte homes, asphalt shingles provide excellent protection at 60-75% less cost.',
            speakableAnswer: 'Tile roofing is worth it for luxury Charlotte homes over $500,000 if you plan to stay 20+ years. For most homes, asphalt shingles are the better value. Call 704-605-6047 for expert advice.',
          },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Compare', href: '/compare' },
              { label: 'Tile Roof vs Shingles Charlotte NC' },
            ]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-10 h-10" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tile Roof vs Asphalt Shingles in Charlotte NC: The Complete 2026 Comparison
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Tile costs <strong>$15-$30/sqft</strong> and lasts <strong>50-75 years</strong>. Shingles cost <strong>$4.50-$7/sqft</strong> and last <strong>25-30 years</strong>. Which is right for your Charlotte home?
            </p>
            <p className="text-lg text-white/80 mb-8">
              Side-by-side comparison of cost, lifespan, weight, maintenance, Charlotte climate performance, insurance impact, and energy efficiency from a BBB A+ rated Charlotte roofing contractor.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Talk to an Expert
              </a>
              <EstimateButton variant="white" className="btn">
                Get Free Instant Estimate
              </EstimateButton>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary Boxes */}
      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Quick Summary: Tile vs Shingles at a Glance
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tile Summary */}
              <div className="bg-white rounded-xl shadow-lg border-t-4 border-primary p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Tile Roofing</h3>
                <div className="space-y-3 text-dark">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Cost (installed)</span>
                    <span>$15 - $30/sqft</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Lifespan</span>
                    <span>50 - 75 years</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Weight</span>
                    <span>7 - 12 lbs/sqft</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Installation Time</span>
                    <span>1 - 2 weeks</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Energy Savings</span>
                    <span>10 - 20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Best For</span>
                    <span>Luxury homes, 20+ yr stays</span>
                  </div>
                </div>
              </div>

              {/* Shingles Summary */}
              <div className="bg-white rounded-xl shadow-lg border-t-4 border-accent p-6">
                <h3 className="text-2xl font-bold text-accent mb-4">Asphalt Shingles</h3>
                <div className="space-y-3 text-dark">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Cost (installed)</span>
                    <span>$4.50 - $7/sqft</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Lifespan</span>
                    <span>25 - 30 years</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Weight</span>
                    <span>2 - 4 lbs/sqft</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Installation Time</span>
                    <span>1 - 3 days</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Insurance Discount</span>
                    <span>10 - 28% (Class 4)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Best For</span>
                    <span>Most Charlotte homes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Cost Comparison Table */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              <DollarSign className="w-8 h-8 inline-block mr-2" aria-hidden="true" />
              Cost Comparison: Tile Roof vs Shingles in Charlotte NC (2026)
            </h2>
            <p className="text-gray text-center mb-8 max-w-3xl mx-auto">
              Real-world pricing from Charlotte roofing projects. Tile costs 3-5x more upfront but lasts 2-3x longer.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-md">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-4 rounded-tl-xl">Category</th>
                    <th className="text-left p-4">Tile Roof</th>
                    <th className="text-left p-4">Asphalt Shingles</th>
                    <th className="text-left p-4 rounded-tr-xl">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-semibold text-dark">{row.category}</td>
                      <td className="p-4 text-dark">{row.tile}</td>
                      <td className="p-4 text-dark">{row.shingles}</td>
                      <td className="p-4 text-gray text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Lifespan Comparison */}
      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              <Clock className="w-8 h-8 inline-block mr-2" aria-hidden="true" />
              Tile vs Shingle Lifespan: How Long Will Each Roof Last?
            </h2>
            <p className="text-gray text-center mb-8 max-w-3xl mx-auto">
              One tile roof outlasts 2-3 asphalt shingle roofs. Over a 100-year period, the total cost comparison shifts dramatically in tile&apos;s favor for permanent homeowners.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lifespanData.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md p-6 text-center">
                  <h3 className="text-lg font-bold text-primary mb-3">{item.material}</h3>
                  <div className="text-3xl font-bold text-accent mb-2">{item.lifespan}</div>
                  <div className="text-sm text-gray mb-3">Warranty: {item.warranty}</div>
                  <div className="border-t pt-3">
                    <div className="text-sm text-gray">Replacements in 100 years:</div>
                    <div className="font-bold text-dark">{item.replacements}</div>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="text-sm text-gray">100-year total cost:</div>
                    <div className="font-semibold text-dark text-sm">{item.totalCost100yr}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 mt-8">
              <p className="text-dark leading-relaxed">
                <strong>Key insight:</strong> For homeowners staying 30+ years in Charlotte, tile roofing delivers better lifetime value despite the higher upfront cost. A single tile roof at $30,000 to $60,000 outlasts three shingle roofs costing $27,000 to $42,000 combined when you factor in tear-off, disposal, and installation costs for each replacement cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte Climate Suitability */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              <Thermometer className="w-8 h-8 inline-block mr-2" aria-hidden="true" />
              Tile vs Shingles in Charlotte Weather: Which Performs Better?
            </h2>
            <p className="text-gray text-center mb-8 max-w-3xl mx-auto">
              Charlotte&apos;s humid subtropical climate with hot summers, frequent storms, and occasional freezing temperatures affects tile and shingle roofs differently.
            </p>
            <div className="space-y-6">
              {climateFactors.map((factor, idx) => {
                const Icon = factor.icon;
                return (
                  <div key={idx} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      <h3 className="text-xl font-bold text-primary">{factor.factor}</h3>
                      <div className="ml-auto flex items-center gap-2">
                        {factor.winner === 'tile' && (
                          <>
                            <Trophy className="w-5 h-5 text-yellow-500" aria-hidden="true" />
                            <span className="text-sm font-semibold text-gray">Tile wins</span>
                          </>
                        )}
                        {factor.winner === 'shingles' && (
                          <>
                            <Trophy className="w-5 h-5 text-yellow-500" aria-hidden="true" />
                            <span className="text-sm font-semibold text-gray">Shingles win</span>
                          </>
                        )}
                        {factor.winner === 'tie' && (
                          <span className="text-sm font-semibold text-gray">Tie</span>
                        )}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className={`p-4 rounded-lg ${factor.winner === 'tile' ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                        <div className="font-semibold text-primary mb-2">Tile</div>
                        <p className="text-sm text-gray">{factor.tile}</p>
                      </div>
                      <div className={`p-4 rounded-lg ${factor.winner === 'shingles' ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                        <div className="font-semibold text-primary mb-2">Shingles</div>
                        <p className="text-sm text-gray">{factor.shingles}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Weight & Structural Requirements */}
      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              Tile Roof Weight vs Shingles: Can Your Charlotte Home Support Tile?
            </h2>
            <p className="text-gray text-center mb-8 max-w-3xl mx-auto">
              Tile roofing weighs 3-5x more than asphalt shingles. This is the single biggest barrier to tile installation on existing Charlotte homes.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-4">Tile Roof Weight</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span>Clay tile</span>
                    <span className="font-semibold">{weightData.tile.clay}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Concrete tile</span>
                    <span className="font-semibold">{weightData.tile.concrete}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Total (2,000 sqft roof)</span>
                    <span className="font-semibold">{weightData.tile.total2000sqft}</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-dark">{weightData.tile.structuralNote}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-accent">
                <h3 className="text-xl font-bold text-accent mb-4">Shingle Weight</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span>Architectural</span>
                    <span className="font-semibold">{weightData.shingles.architectural}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>3-Tab</span>
                    <span className="font-semibold">{weightData.shingles.threeTab}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Total (2,000 sqft roof)</span>
                    <span className="font-semibold">{weightData.shingles.total2000sqft}</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-dark">{weightData.shingles.structuralNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Comparison */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              <Wrench className="w-8 h-8 inline-block mr-2" aria-hidden="true" />
              Maintenance Comparison: Ongoing Costs in Charlotte
            </h2>
            <p className="text-gray text-center mb-8 max-w-3xl mx-auto">
              Both materials need maintenance in Charlotte&apos;s climate, but the type and cost of maintenance differs significantly.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-md">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-4 rounded-tl-xl">Maintenance Task</th>
                    <th className="text-left p-4">Tile Cost</th>
                    <th className="text-left p-4">Shingle Cost</th>
                    <th className="text-left p-4 rounded-tr-xl">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {maintenanceComparison.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-semibold text-dark">{row.task}</td>
                      <td className="p-4 text-dark">{row.tile}</td>
                      <td className="p-4 text-dark">{row.shingles}</td>
                      <td className="p-4 text-gray text-sm">{row.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Tile vs Shingles: Pros and Cons for Charlotte Homeowners
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tile Pros/Cons */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Tile Roofing</h3>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Advantages</h4>
                  <ul className="space-y-2">
                    {tilePros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-dark">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-700 mb-3">Disadvantages</h4>
                  <ul className="space-y-2">
                    {tileCons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-dark">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Shingles Pros/Cons */}
              <div>
                <h3 className="text-2xl font-bold text-accent mb-6">Asphalt Shingles</h3>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-700 mb-3">Advantages</h4>
                  <ul className="space-y-2">
                    {shinglePros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-dark">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-700 mb-3">Disadvantages</h4>
                  <ul className="space-y-2">
                    {shingleCons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-dark">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Verdict */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              <Star className="w-8 h-8 inline-block mr-2" aria-hidden="true" />
              Our Expert Verdict for Charlotte Homeowners
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 mb-8">
                <p className="text-lg text-dark leading-relaxed">
                  <strong>For most Charlotte homeowners, asphalt shingles are the better choice.</strong> They cost 60-75% less upfront, perform excellently in our climate (especially impact-resistant Class 4 options for hail), and any local contractor can install and maintain them. The 25-30 year lifespan aligns well with the average Charlotte homeownership period of 13 years.
                </p>
              </div>
              <div className="bg-accent/5 border-l-4 border-accent rounded-r-xl p-6 mb-8">
                <p className="text-lg text-dark leading-relaxed">
                  <strong>Choose tile roofing if:</strong> you own a luxury home valued over $500,000, your architecture suits Mediterranean or Spanish styling, you plan to stay 20+ years, your structure can support the weight (or you are willing to invest in reinforcement), and upfront budget is not the primary constraint. In Charlotte neighborhoods like Myers Park, Eastover, and lakefront Lake Norman properties, tile delivers both exceptional longevity and significant resale premium.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Choose Tile If:</h3>
                  <ul className="space-y-2">
                    {[
                      'Home valued over $500,000',
                      'Staying 20+ years in the property',
                      'Mediterranean or Spanish architecture',
                      'Structure supports 9-12 lbs/sqft',
                      'Energy efficiency is a top priority',
                      'You want a forever roof',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-dark">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-4">Choose Shingles If:</h3>
                  <ul className="space-y-2">
                    {[
                      'Budget-conscious protection needed',
                      'Planning to sell within 15 years',
                      'Standard Charlotte home construction',
                      'Want insurance discount eligibility',
                      'Prefer quick 1-3 day installation',
                      'Need easy and affordable repairs',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-dark">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              <HelpCircle className="w-8 h-8 inline-block mr-2" aria-hidden="true" />
              Frequently Asked Questions: Tile Roof vs Shingles in Charlotte NC
            </h2>
            <div className="space-y-4">
              {tileVsShinglesFAQs.map((faq, idx) => (
                <details key={idx} className="bg-white rounded-xl shadow-md group">
                  <summary className="p-6 cursor-pointer font-semibold text-primary hover:text-accent transition list-none flex items-center justify-between">
                    <span>{faq.question}</span>
                    <ArrowRight className="w-5 h-5 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" aria-hidden="true" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Related Roofing Comparisons & Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Asphalt Shingle Roof Cost 2026',
                description: 'Complete pricing breakdown for asphalt shingle roofs in Charlotte NC.',
                href: '/asphalt-shingle-roof-cost',
              },
              {
                title: 'Metal Roof vs Shingles Cost',
                description: 'Side-by-side metal vs shingle cost comparison for Charlotte homes.',
                href: '/shingle-vs-metal-roof-cost',
              },
              {
                title: 'GAF vs CertainTeed Shingles',
                description: 'Compare the two top shingle brands — pricing, warranty, and performance.',
                href: '/gaf-vs-certainteed-shingles-charlotte-nc',
              },
              {
                title: 'Metal vs Tile Comparison',
                description: 'Two premium roofing options compared for longevity and value.',
                href: '/compare/metal-vs-tile',
              },
              {
                title: 'Charlotte Roofing Costs 2026',
                description: 'Complete pricing guide for all roofing materials in Charlotte NC.',
                href: '/charlotte-roofing-costs-2026',
              },
              {
                title: 'Storm Damage Roof Repair',
                description: 'Free inspections and insurance claim help after Charlotte storms.',
                href: '/storm-damage-roof-repair',
              },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="card hover:shadow-xl transition group"
              >
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition">
                  {link.title}
                </h3>
                <p className="text-gray text-sm mb-4">{link.description}</p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Strip */}
      <GeoProjectGalleryStrip pageType="other" city="Charlotte" slug="tile-roof-vs-shingles" />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Tile and Shingle Roofing"
      />

      {/* CTA Section */}
      <CTASection
        title="Need Help Choosing Between Tile and Shingles?"
        subtitle="Our Charlotte roofing experts will assess your home's structure, discuss your goals, and recommend the right material. Free inspections and estimates with no obligation."
        variant="accent"
      />

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <DirectoryCitations pageType="default" maxLinks={3} variant="inline" title="Expert Advice From" />
          </div>
        </div>
      </section>
    </>
  );
}
