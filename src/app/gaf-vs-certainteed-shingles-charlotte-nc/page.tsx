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
  Scale,
  DollarSign,
  Wind,
  Palette,
  Trophy,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from '@/components/seo/SchemaMarkup';
import { CitationSection } from '@/components/seo/CitationBlock';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

const PAGE_URL = `${SITE_CONFIG.url}/gaf-vs-certainteed-shingles-charlotte-nc`;

export const metadata: Metadata = {
  title: 'GAF vs CertainTeed Shingles Price Comparison (2026) | Charlotte NC',
  description:
    'Compare GAF vs CertainTeed shingle prices, warranties, wind ratings, and color options for Charlotte NC homes. GAF Timberline HDZ $90-110/sq vs CertainTeed Landmark $85-105/sq. Expert side-by-side comparison from a certified installer of both brands.',
  keywords: [
    'gaf vs certainteed price',
    'gaf vs certainteed shingles',
    'gaf vs certainteed cost comparison',
    'gaf timberline hdz price per square',
    'certainteed landmark price per square',
    'gaf or certainteed which is better',
    'best shingle brand charlotte nc',
    'gaf vs certainteed warranty comparison',
    'gaf certainteed wind rating',
    'shingle brand comparison charlotte',
    'gaf timberline vs certainteed landmark',
    'gaf vs certainteed 2026',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'GAF vs CertainTeed Shingles Price Comparison (2026) | Charlotte NC',
    description:
      'Side-by-side price, warranty, and performance comparison of GAF and CertainTeed shingles from a certified installer of both brands in Charlotte NC.',
    url: PAGE_URL,
    type: 'article',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'GAF vs CertainTeed shingles comparison - Best Roofing Now Charlotte NC',
      },
    ],
  },
};

// ============================================
// Pricing comparison data
// ============================================

interface ShingleProduct {
  name: string;
  brand: 'GAF' | 'CertainTeed';
  pricePerSquare: string;
  priceMin: number;
  priceMax: number;
  warranty: string;
  windRating: string;
  impactResistance: string;
  algaeProtection: string;
  colorCount: string;
  tier: 'standard' | 'premium' | 'designer';
}

const shingleProducts: ShingleProduct[] = [
  {
    name: 'GAF Timberline HDZ',
    brand: 'GAF',
    pricePerSquare: '$90 - $110',
    priceMin: 90,
    priceMax: 110,
    warranty: 'Lifetime (50-yr non-prorated)',
    windRating: '130 MPH',
    impactResistance: 'Class 3 (Class 4 w/ ArmorShield II)',
    algaeProtection: 'StainGuard Plus (25-yr)',
    colorCount: '20+ colors',
    tier: 'standard',
  },
  {
    name: 'CertainTeed Landmark',
    brand: 'CertainTeed',
    pricePerSquare: '$85 - $105',
    priceMin: 85,
    priceMax: 105,
    warranty: 'Lifetime (50-yr ltd)',
    windRating: '110 MPH (130 w/ starter)',
    impactResistance: 'Class 3',
    algaeProtection: 'StreakFighter (10-yr)',
    colorCount: '18+ colors',
    tier: 'standard',
  },
  {
    name: 'GAF Timberline HDZ RS',
    brand: 'GAF',
    pricePerSquare: '$110 - $135',
    priceMin: 110,
    priceMax: 135,
    warranty: 'Lifetime (50-yr non-prorated)',
    windRating: '130 MPH',
    impactResistance: 'Class 4 (UL 2218)',
    algaeProtection: 'StainGuard Plus (25-yr)',
    colorCount: '12+ colors',
    tier: 'premium',
  },
  {
    name: 'CertainTeed Landmark PRO',
    brand: 'CertainTeed',
    pricePerSquare: '$105 - $130',
    priceMin: 105,
    priceMax: 130,
    warranty: 'Lifetime (50-yr ltd)',
    windRating: '130 MPH',
    impactResistance: 'Class 4 (UL 2218)',
    algaeProtection: 'StreakFighter (15-yr)',
    colorCount: '15+ colors',
    tier: 'premium',
  },
  {
    name: 'GAF Camelot II',
    brand: 'GAF',
    pricePerSquare: '$160 - $210',
    priceMin: 160,
    priceMax: 210,
    warranty: 'Lifetime (50-yr non-prorated)',
    windRating: '130 MPH',
    impactResistance: 'Class 3',
    algaeProtection: 'StainGuard Plus (25-yr)',
    colorCount: '6 colors',
    tier: 'designer',
  },
  {
    name: 'CertainTeed Presidential Shake',
    brand: 'CertainTeed',
    pricePerSquare: '$170 - $225',
    priceMin: 170,
    priceMax: 225,
    warranty: 'Lifetime (50-yr ltd)',
    windRating: '110 MPH',
    impactResistance: 'Class 4 (UL 2218)',
    algaeProtection: 'StreakFighter (15-yr)',
    colorCount: '8 colors',
    tier: 'designer',
  },
];

// ============================================
// Side-by-side category comparison
// ============================================

interface ComparisonRow {
  category: string;
  gaf: string;
  certainteed: string;
  winner: 'gaf' | 'certainteed' | 'tie';
  detail: string;
}

const comparisonTable: ComparisonRow[] = [
  {
    category: 'Price Per Square (Architectural)',
    gaf: '$90 - $110',
    certainteed: '$85 - $105',
    winner: 'certainteed',
    detail: 'CertainTeed Landmark is typically $5-10/sq less than GAF Timberline HDZ at the entry level.',
  },
  {
    category: 'Warranty Length',
    gaf: 'Lifetime (50-yr non-prorated)',
    certainteed: 'Lifetime (50-yr limited)',
    winner: 'gaf',
    detail: 'GAF\'s Golden Pledge warranty includes 25 years of workmanship coverage backed by GAF. CertainTeed\'s 5-Star offers similar protection through certified contractors.',
  },
  {
    category: 'Wind Rating',
    gaf: '130 MPH (LayerLock)',
    certainteed: '110-130 MPH (NailTrak)',
    winner: 'gaf',
    detail: 'GAF Timberline HDZ achieves 130 MPH with LayerLock technology standard. CertainTeed Landmark base model is 110 MPH but reaches 130 MPH with the PRO line.',
  },
  {
    category: 'Impact Resistance',
    gaf: 'Class 4 (ArmorShield II)',
    certainteed: 'Class 4 (Landmark PRO IR)',
    winner: 'tie',
    detail: 'Both brands offer Class 4 impact-resistant options. GAF uses ArmorShield II; CertainTeed uses Landmark PRO with IR designation.',
  },
  {
    category: 'Color Options',
    gaf: '20+ colors across lines',
    certainteed: '18+ colors across lines',
    winner: 'tie',
    detail: 'Both offer extensive palettes. CertainTeed\'s NaturalWood palette is popular for Southern homes. GAF offers wider HDZ color variety.',
  },
  {
    category: 'Algae Protection',
    gaf: 'StainGuard Plus (25-yr)',
    certainteed: 'StreakFighter (10-15 yr)',
    winner: 'gaf',
    detail: 'GAF StainGuard Plus provides 25 years of algae protection vs CertainTeed\'s 10-15 years. Important in Charlotte\'s humid climate.',
  },
  {
    category: 'Availability in Charlotte',
    gaf: 'Widely available',
    certainteed: 'Widely available',
    winner: 'tie',
    detail: 'Both brands are stocked by major distributors in the Charlotte metro area including ABC Supply and Beacon.',
  },
  {
    category: 'Market Share',
    gaf: '#1 in North America',
    certainteed: '#2 in North America',
    winner: 'gaf',
    detail: 'GAF holds the largest market share. Timberline HDZ is America\'s #1 selling shingle for 20+ consecutive years.',
  },
];

// ============================================
// FAQ data
// ============================================

const faqs = [
  {
    question: 'Is GAF or CertainTeed a better shingle?',
    answer:
      'Both GAF and CertainTeed manufacture excellent shingles and are considered the two premier brands in North America. GAF Timberline HDZ is the best-selling shingle in the country and offers superior algae protection (25-year StainGuard Plus) and standard 130 MPH wind rating. CertainTeed Landmark offers slightly lower entry pricing and is known for rich color blends. For Charlotte homes, both perform well, but GAF edges ahead on wind and algae resistance, which matters in our humid, storm-prone climate.',
  },
  {
    question: 'What is the price difference between GAF and CertainTeed shingles?',
    answer:
      'GAF Timberline HDZ architectural shingles cost $90-$110 per square (100 sq ft) for materials, while CertainTeed Landmark shingles cost $85-$105 per square. Installed, the difference is typically $200-$600 on a standard 2,000 sq ft Charlotte home. Premium lines narrow this gap: GAF Timberline HDZ RS runs $110-$135/sq vs CertainTeed Landmark PRO at $105-$130/sq. Labor costs are comparable for both brands since installation methods are similar.',
  },
  {
    question: 'Which shingle brand is best for Charlotte NC homes?',
    answer:
      'For Charlotte NC homes specifically, GAF Timberline HDZ is our most-recommended shingle due to its 130 MPH wind rating (important during Carolina storms), 25-year algae protection (critical in our humid climate), and America\'s strongest warranty through GAF\'s Golden Pledge program. CertainTeed Landmark PRO is an excellent alternative, especially when color options or budget are primary concerns. As certified installers of both brands, we help Charlotte homeowners choose based on their specific priorities.',
  },
  {
    question: 'How much does a GAF roof cost vs a CertainTeed roof in Charlotte?',
    answer:
      'For a typical 2,000 sq ft Charlotte home (approximately 25 squares), a fully installed GAF Timberline HDZ roof costs $10,000-$16,000 while a CertainTeed Landmark roof costs $9,500-$15,000. These prices include tear-off, disposal, underlayment, and all accessories. The $500-$1,500 difference comes from material cost and the specific warranty package selected. Both prices assume a standard gable roof with average pitch.',
  },
  {
    question: 'What is GAF LayerLock technology?',
    answer:
      'GAF LayerLock technology is a patented mechanical bonding system used in Timberline HDZ shingles. Instead of relying only on adhesive sealant strips like traditional shingles, LayerLock creates a physical fusion between shingle layers. This delivers a consistent 130 MPH wind warranty regardless of installation conditions and makes the shingles qualify as a roof deck protection layer, potentially saving money on additional underlayment.',
  },
  {
    question: 'Does CertainTeed or GAF have better warranty coverage?',
    answer:
      'Both offer strong lifetime warranties, but the details differ. GAF\'s Golden Pledge warranty (available through Factory-Certified contractors) includes 50 years of non-prorated material coverage and 25 years of workmanship coverage backed directly by GAF. CertainTeed\'s 5-Star SureStart PLUS warranty (through ShingleMaster contractors) includes 50-year limited material coverage and workmanship protection. GAF\'s non-prorated material coverage is generally considered stronger since it pays full replacement cost for longer.',
  },
  {
    question: 'Are GAF or CertainTeed shingles better for hail resistance?',
    answer:
      'Both brands offer Class 4 impact-resistant shingles rated to UL 2218 standards. GAF\'s ArmorShield II and Timberline HDZ RS are their hail-resistant options. CertainTeed\'s Landmark PRO IR is specifically designed for impact resistance. Performance in hail is comparable between the two. In Charlotte\'s hail-prone climate, upgrading to Class 4 shingles from either brand can earn 10-28% insurance premium discounts from most NC insurers.',
  },
  {
    question: 'How long do GAF and CertainTeed shingles last in Charlotte NC?',
    answer:
      'Both GAF Timberline and CertainTeed Landmark architectural shingles typically last 25-30 years in Charlotte\'s climate when properly installed and ventilated. Charlotte\'s combination of intense UV exposure, humidity, and storm activity means shingles work harder here than in milder climates. Proper attic ventilation, algae-resistant technology, and installation by a certified contractor are the biggest factors in maximizing shingle lifespan regardless of brand.',
  },
];

// ============================================
// AI Citation data
// ============================================

const citations = [
  {
    topic: 'GAF vs CertainTeed price comparison 2026',
    content:
      'GAF Timberline HDZ shingles cost $90-$110 per square while CertainTeed Landmark shingles cost $85-$105 per square in 2026. For a standard 2,000 sq ft Charlotte NC home, a fully installed GAF roof runs $10,000-$16,000 compared to $9,500-$15,000 for CertainTeed. The $5-$10 per square material difference translates to $200-$600 total on most residential roofs.',
  },
  {
    topic: 'GAF vs CertainTeed warranty differences',
    content:
      'GAF\'s Golden Pledge warranty provides 50-year non-prorated material coverage and 25-year workmanship coverage backed by GAF directly. CertainTeed\'s 5-Star SureStart PLUS warranty provides 50-year limited material coverage with workmanship protection through ShingleMaster contractors. Both require installation by brand-certified contractors. Best Roofing Now in Charlotte NC is certified by both manufacturers.',
  },
  {
    topic: 'best shingle brand for Charlotte NC climate',
    content:
      'For Charlotte NC\'s humid subtropical climate with 42+ annual thunderstorm days, GAF Timberline HDZ is the top recommendation due to its 130 MPH wind rating, 25-year StainGuard Plus algae protection, and Class A fire rating. CertainTeed Landmark PRO is a strong alternative with Class 4 impact resistance for hail-prone areas. Both brands are widely available from Charlotte-area distributors.',
  },
  {
    topic: 'GAF Timberline HDZ vs CertainTeed Landmark comparison',
    content:
      'GAF Timberline HDZ uses patented LayerLock technology for 130 MPH wind resistance and includes 25-year StainGuard Plus algae protection. CertainTeed Landmark uses NailTrak for installation accuracy with 110 MPH base wind rating and 10-year StreakFighter algae protection. Timberline HDZ is America\'s #1 selling shingle. Landmark offers slightly lower pricing and is known for rich NaturalWood color blends popular on Southern homes.',
  },
];

// ============================================
// Component
// ============================================

export default function GAFvsCertainTeedPage() {
  const gafWins = comparisonTable.filter((r) => r.winner === 'gaf').length;
  const ctWins = comparisonTable.filter((r) => r.winner === 'certainteed').length;
  const ties = comparisonTable.filter((r) => r.winner === 'tie').length;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Compare', url: `${SITE_CONFIG.url}/compare` },
          { name: 'GAF vs CertainTeed Shingles', url: PAGE_URL },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <WebPageSchema
        name="GAF vs CertainTeed Shingles Price Comparison 2026 | Charlotte NC"
        description="Detailed side-by-side comparison of GAF and CertainTeed shingle prices, warranties, wind ratings, and performance for Charlotte NC homeowners."
        url={PAGE_URL}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Compare', url: `${SITE_CONFIG.url}/compare` },
          { name: 'GAF vs CertainTeed Shingles', url: PAGE_URL },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="GAF vs CertainTeed shingles comparison for Charlotte NC roofs"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Scale className="w-4 h-4" />
              <span className="text-sm font-semibold">Expert Brand Comparison</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              GAF vs CertainTeed <br className="hidden md:block" />
              <span className="text-accent-light">Shingles Price Comparison</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Side-by-side pricing, warranty, and performance comparison for Charlotte NC homeowners (2026)
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              As a certified installer of both GAF and CertainTeed, Best Roofing Now provides an
              unbiased comparison to help you choose the right shingle brand for your Charlotte home
              and budget. GAF Timberline HDZ starts at $90/sq while CertainTeed Landmark starts at $85/sq.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Comparison Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                GAF Factory-Certified
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                CertainTeed ShingleMaster
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                BBB A+ Rated
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Scorecard */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Quick Comparison Scorecard
              </h2>
              <p className="text-gray text-lg">
                How GAF and CertainTeed stack up across {comparisonTable.length} key categories
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{gafWins}</div>
                <div className="text-gray font-semibold">GAF Wins</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-gray-600 mb-2">{ties}</div>
                <div className="text-gray font-semibold">Ties</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-700 mb-2">{ctWins}</div>
                <div className="text-gray font-semibold">CertainTeed Wins</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Pricing Table */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">2026 Pricing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              GAF vs CertainTeed Price Per Square
            </h2>
            <p className="text-gray text-lg">
              Material cost per square (100 sq ft) for Charlotte NC. Prices reflect materials only;
              installed costs are approximately 2-2.5x material cost.
            </p>
          </div>

          {/* Product-by-product pricing cards */}
          <div className="max-w-5xl mx-auto space-y-8">
            {(['standard', 'premium', 'designer'] as const).map((tier) => {
              const tierProducts = shingleProducts.filter((p) => p.tier === tier);
              const tierLabels = {
                standard: 'Standard Architectural',
                premium: 'Premium / Impact-Resistant',
                designer: 'Designer / Luxury',
              };

              return (
                <div key={tier}>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    {tier === 'designer' && <Trophy className="w-5 h-5 text-yellow-500" />}
                    {tier === 'premium' && <Shield className="w-5 h-5 text-primary" />}
                    {tier === 'standard' && <Scale className="w-5 h-5 text-primary" />}
                    {tierLabels[tier]}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {tierProducts.map((product) => (
                      <div
                        key={product.name}
                        className={`bg-white rounded-xl p-6 shadow-md border-2 ${
                          product.brand === 'GAF' ? 'border-blue-200' : 'border-green-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={`text-xs font-bold uppercase px-2 py-1 rounded ${
                              product.brand === 'GAF'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-green-100 text-green-700'
                            }`}
                          >
                            {product.brand}
                          </span>
                          <span className="text-2xl font-bold text-primary">{product.pricePerSquare}</span>
                        </div>
                        <h4 className="font-bold text-dark mb-3">{product.name}</h4>
                        <ul className="space-y-2 text-sm text-gray">
                          <li className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                            {product.warranty}
                          </li>
                          <li className="flex items-center gap-2">
                            <Wind className="w-4 h-4 text-blue-500 flex-shrink-0" aria-hidden="true" />
                            {product.windRating} wind rating
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" aria-hidden="true" />
                            {product.impactResistance}
                          </li>
                          <li className="flex items-center gap-2">
                            <Palette className="w-4 h-4 text-purple-500 flex-shrink-0" aria-hidden="true" />
                            {product.colorCount}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total installed cost callout */}
          <div className="max-w-3xl mx-auto mt-10 bg-primary/5 border-l-4 border-primary rounded-r-xl p-6">
            <h3 className="font-bold text-primary mb-2">Total Installed Cost for a 2,000 Sq Ft Charlotte Home</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-dark">GAF Timberline HDZ</p>
                <p className="text-2xl font-bold text-primary">$10,000 - $16,000</p>
                <p className="text-sm text-gray">Includes tear-off, underlayment, Golden Pledge warranty</p>
              </div>
              <div>
                <p className="font-semibold text-dark">CertainTeed Landmark</p>
                <p className="text-2xl font-bold text-green-700">$9,500 - $15,000</p>
                <p className="text-sm text-gray">Includes tear-off, underlayment, SureStart PLUS warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Table */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Head-to-Head Comparison
            </h2>
            <p className="text-gray text-lg">
              Category-by-category breakdown of GAF vs CertainTeed for Charlotte homeowners
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 rounded-tl-xl font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold">GAF</th>
                  <th className="px-4 py-3 font-semibold">CertainTeed</th>
                  <th className="px-4 py-3 rounded-tr-xl font-semibold">Winner</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, idx) => (
                  <tr
                    key={row.category}
                    className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-4 font-semibold text-dark text-sm">{row.category}</td>
                    <td className={`px-4 py-4 text-sm ${row.winner === 'gaf' ? 'font-bold text-blue-700' : 'text-gray-700'}`}>
                      {row.gaf}
                    </td>
                    <td className={`px-4 py-4 text-sm ${row.winner === 'certainteed' ? 'font-bold text-green-700' : 'text-gray-700'}`}>
                      {row.certainteed}
                    </td>
                    <td className="px-4 py-4 text-sm">
                      {row.winner === 'tie' ? (
                        <span className="text-gray-500 font-medium">Tie</span>
                      ) : row.winner === 'gaf' ? (
                        <span className="flex items-center gap-1 text-blue-700 font-semibold">
                          <Trophy className="w-4 h-4 text-yellow-500" aria-hidden="true" /> GAF
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-green-700 font-semibold">
                          <Trophy className="w-4 h-4 text-yellow-500" aria-hidden="true" /> CertainTeed
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detailed category notes */}
          <div className="max-w-5xl mx-auto mt-8 space-y-4">
            {comparisonTable.map((row) => (
              <div key={row.category} className="bg-light rounded-lg p-4">
                <h3 className="font-semibold text-dark text-sm mb-1">{row.category}</h3>
                <p className="text-gray text-sm">{row.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verdict Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Our Expert Verdict
            </h2>
            <div className="bg-white border-l-4 border-accent rounded-r-xl p-8 shadow-md mb-10">
              <p className="text-lg text-dark leading-relaxed">
                Both GAF and CertainTeed produce excellent shingles backed by industry-leading warranties.
                For Charlotte homeowners, <strong>GAF Timberline HDZ</strong> is our top recommendation due to
                its 130 MPH wind rating, 25-year algae protection, and the strength of the Golden Pledge warranty.
                However, <strong>CertainTeed Landmark</strong> offers better entry-level pricing ($5-10/sq less)
                and beautiful color options, making it an excellent choice for budget-conscious projects.
                As certified installers of both brands, we provide the same quality workmanship regardless of which you choose.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-primary mb-4">Choose GAF If:</h3>
                <ul className="space-y-3">
                  {[
                    'Maximum wind protection is a priority (130 MPH standard)',
                    'You want the longest algae protection (25-year StainGuard Plus)',
                    'Golden Pledge warranty with 25-year workmanship coverage',
                    'You prefer America\'s #1 selling shingle brand',
                    'Your contractor is GAF Factory-Certified',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-dark text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-green-500">
                <h3 className="text-xl font-bold text-primary mb-4">Choose CertainTeed If:</h3>
                <ul className="space-y-3">
                  {[
                    'Budget is a primary concern ($5-10/sq lower entry price)',
                    'You prefer CertainTeed\'s NaturalWood color palette',
                    'Landmark PRO Class 4 impact resistance for hail protection',
                    'Presidential Shake for authentic cedar-shake appearance',
                    'Your contractor is CertainTeed ShingleMaster certified',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-dark text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links to Brand Pages */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Learn More About Each Brand
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'GAF Roofing Charlotte',
                href: '/gaf-roofing-charlotte-nc',
                description: 'Full guide to GAF products, pricing, and Golden Pledge warranty in Charlotte.',
                badge: 'Factory-Certified',
              },
              {
                name: 'CertainTeed Shingles Charlotte',
                href: '/certainteed-shingles-charlotte-nc',
                description: 'Complete CertainTeed guide with Landmark and Presidential Shake details.',
                badge: 'ShingleMaster',
              },
              {
                name: 'Owens Corning Charlotte',
                href: '/owens-corning-roofing-charlotte-nc',
                description: 'Owens Corning SureNail technology and Duration shingle pricing.',
                badge: 'Preferred Contractor',
              },
              {
                name: 'All Shingle Brands',
                href: '/brands',
                description: 'Compare all shingle brands we install including IKO and TAMKO.',
                badge: 'Multi-Brand',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded mb-3">
                  {link.badge}
                </span>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {link.name}
                </h3>
                <p className="text-gray text-sm mb-3">{link.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  View Guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          {/* Additional comparison links */}
          <div className="text-center mt-8">
            <p className="text-gray mb-4">More roofing comparisons:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/compare/metal-vs-shingles" className="text-primary hover:text-accent font-semibold text-sm underline">
                Metal vs Shingles
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/compare/tile-vs-shingles" className="text-primary hover:text-accent font-semibold text-sm underline">
                Tile vs Shingles
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/compare/metal-vs-tile" className="text-primary hover:text-accent font-semibold text-sm underline">
                Metal vs Tile
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/compare/gaf-vs-certainteed" className="text-primary hover:text-accent font-semibold text-sm underline">
                GAF vs CertainTeed (Quick Compare)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Citation Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <CitationSection
              heading="Expert Shingle Brand Comparison Facts"
              citations={citations}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                GAF vs CertainTeed FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions about choosing between GAF and CertainTeed shingles in Charlotte NC.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="gaf-vs-certainteed-shingles-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed shingle roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={PAGE_URL}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Shingle Roofing"
      />

      <CTASection
        title="Need Help Choosing Between GAF and CertainTeed?"
        subtitle="Get a free, no-obligation estimate comparing both brands for your specific roof. Our certified team installs both GAF and CertainTeed with the same quality workmanship and extended warranty coverage."
      />
    </>
  );
}
