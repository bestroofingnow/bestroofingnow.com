import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  DollarSign,
  CheckCircle,
  Phone,
  Calendar,
  Home,
  Layers,
  Shield,
  Star,
  Calculator,
  HelpCircle,
  Award,
  TrendingUp,
  Ruler,
  Wind,
  Droplets,
  Zap,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { CitationSection } from '@/components/seo/CitationBlock';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { getRoofingContractorIdentity } from '@/lib/schema-helpers';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Shingles Prices in Charlotte NC (2026) | Cost Per Square Foot Guide',
  description:
    'Complete 2026 roofing shingles prices for Charlotte NC. 3-tab shingles $3-4.50/sqft, architectural $4.50-7/sqft, designer $7-13/sqft, impact-resistant $5-8/sqft. Cost by home size, brand comparison, and free estimates from a BBB A+ rated contractor.',
  keywords: [
    'roofing shingles prices',
    'shingle cost per square foot',
    'roofing shingles prices 2026',
    'roof shingle cost charlotte nc',
    'asphalt shingle prices',
    'architectural shingle cost',
    'designer shingle prices',
    'impact resistant shingle cost',
    '3-tab shingle prices',
    'how much do shingles cost per square foot',
    'shingle roof cost charlotte nc',
    'roof replacement cost shingles',
    'gaf shingle prices',
    'certainteed shingle prices',
    'owens corning shingle prices',
    'roofing material prices 2026',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-shingles-prices`,
  },
  openGraph: {
    title: 'Roofing Shingles Prices in Charlotte NC (2026) | Cost Per Square Foot',
    description:
      'Complete 2026 roofing shingles price guide. 3-tab $3-4.50/sqft, architectural $4.50-7/sqft, designer $7-13/sqft. Real pricing from a Charlotte NC contractor.',
    url: `${SITE_CONFIG.url}/roofing-shingles-prices`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Roofing shingles prices 2026 - Charlotte NC cost guide',
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Data: Shingle Type Comparison                                      */
/* ------------------------------------------------------------------ */

const shingleTypes = [
  {
    type: '3-Tab Shingles',
    priceRange: '$3.00 - $4.50',
    avgPrice: '$3.75',
    lifespan: '15-20 years',
    windRating: '60-70 mph',
    warranty: '20-25 year',
    bestFor: 'Budget-friendly projects, rental properties, basic coverage',
    icon: DollarSign,
  },
  {
    type: 'Architectural Shingles',
    priceRange: '$4.50 - $7.00',
    avgPrice: '$5.75',
    lifespan: '25-30 years',
    windRating: '110-130 mph',
    warranty: 'Lifetime limited',
    bestFor: 'Most homeowners, best value, dimensional appearance',
    icon: Layers,
  },
  {
    type: 'Designer / Luxury Shingles',
    priceRange: '$7.00 - $13.00',
    avgPrice: '$10.00',
    lifespan: '30-50 years',
    windRating: '110-130 mph',
    warranty: 'Lifetime limited',
    bestFor: 'Upscale homes, curb appeal, slate/shake look',
    icon: Award,
  },
  {
    type: 'Impact-Resistant Shingles',
    priceRange: '$5.00 - $8.00',
    avgPrice: '$6.50',
    lifespan: '25-35 years',
    windRating: '110-130 mph',
    warranty: 'Lifetime limited + Class 4',
    bestFor: 'Hail-prone areas, insurance discounts, storm protection',
    icon: Shield,
  },
];

/* ------------------------------------------------------------------ */
/*  Data: Cost by Home Size                                            */
/* ------------------------------------------------------------------ */

const costByHomeSize = [
  {
    roofSize: '1,000 sq ft',
    threeTab: '$3,000 - $4,500',
    architectural: '$4,500 - $7,000',
    designer: '$7,000 - $13,000',
    impactResistant: '$5,000 - $8,000',
  },
  {
    roofSize: '1,500 sq ft',
    threeTab: '$4,500 - $6,750',
    architectural: '$6,750 - $10,500',
    designer: '$10,500 - $19,500',
    impactResistant: '$7,500 - $12,000',
  },
  {
    roofSize: '2,000 sq ft',
    threeTab: '$6,000 - $9,000',
    architectural: '$9,000 - $14,000',
    designer: '$14,000 - $26,000',
    impactResistant: '$10,000 - $16,000',
  },
  {
    roofSize: '2,500 sq ft',
    threeTab: '$7,500 - $11,250',
    architectural: '$11,250 - $17,500',
    designer: '$17,500 - $32,500',
    impactResistant: '$12,500 - $20,000',
  },
  {
    roofSize: '3,000 sq ft',
    threeTab: '$9,000 - $13,500',
    architectural: '$13,500 - $21,000',
    designer: '$21,000 - $39,000',
    impactResistant: '$15,000 - $24,000',
  },
];

/* ------------------------------------------------------------------ */
/*  Data: Brand Pricing                                                */
/* ------------------------------------------------------------------ */

const brandPricing = [
  {
    brand: 'GAF Timberline HDZ',
    type: 'Architectural',
    pricePerSqFt: '$4.50 - $6.50',
    warranty: 'Lifetime Limited',
    features: 'LayerLock technology, StainGuard Plus, 130 mph wind rating',
  },
  {
    brand: 'GAF Timberline Ultra HD',
    type: 'Premium Architectural',
    pricePerSqFt: '$5.50 - $7.50',
    warranty: 'Lifetime Limited',
    features: 'Ultra-dimensional look, wood-shake aesthetic, StainGuard Plus',
  },
  {
    brand: 'CertainTeed Landmark',
    type: 'Architectural',
    pricePerSqFt: '$4.50 - $6.00',
    warranty: 'Lifetime Limited',
    features: 'NailTrak guides, StreakFighter algae resistance, 110 mph wind',
  },
  {
    brand: 'CertainTeed Presidential Shake',
    type: 'Designer / Luxury',
    pricePerSqFt: '$8.00 - $12.00',
    warranty: '50-Year',
    features: 'Triple-layer, authentic shake look, Class A fire rating',
  },
  {
    brand: 'Owens Corning Duration',
    type: 'Architectural',
    pricePerSqFt: '$4.75 - $6.50',
    warranty: 'Lifetime Limited',
    features: 'SureNail technology, TruDefinition color, 130 mph wind rating',
  },
  {
    brand: 'Owens Corning Duration STORM',
    type: 'Impact-Resistant',
    pricePerSqFt: '$5.50 - $7.50',
    warranty: 'Lifetime Limited + Class 4 IR',
    features: 'SureNail, Class 4 impact, 130 mph wind, insurance discounts',
  },
  {
    brand: 'GAF Camelot II',
    type: 'Designer / Luxury',
    pricePerSqFt: '$7.50 - $11.00',
    warranty: 'Lifetime Limited',
    features: 'Artisan-crafted appearance, slate look, StainGuard Plus',
  },
  {
    brand: 'TAMKO Heritage',
    type: 'Architectural',
    pricePerSqFt: '$4.00 - $5.50',
    warranty: 'Lifetime Limited',
    features: 'Affordable option, algae resistance, 110 mph wind rating',
  },
];

/* ------------------------------------------------------------------ */
/*  Data: Cost Factors                                                 */
/* ------------------------------------------------------------------ */

const costFactors = [
  { icon: Ruler, title: 'Roof Size & Pitch', description: 'Steeper roofs (8/12 pitch and above) require specialized equipment and more labor, adding 15-25% to total cost. A 2,000 sq ft roof at a standard 4/12 pitch is cheaper than the same area at 10/12.' },
  { icon: Layers, title: 'Shingle Grade & Brand', description: 'Premium brands like GAF, CertainTeed, and Owens Corning cost 10-20% more than economy brands but include better warranties, longer lifespans, and superior wind ratings.' },
  { icon: Wind, title: 'Tear-Off vs. Overlay', description: 'A complete tear-off of existing shingles adds $1,000-$3,000 but is recommended for proper inspection of decking and underlayment. North Carolina allows a maximum of two shingle layers.' },
  { icon: Droplets, title: 'Underlayment & Ice Shield', description: 'Synthetic underlayment costs $0.25-$0.50/sqft more than felt but lasts longer. Ice and water shield at valleys and eaves adds $0.50-$1.00/sqft for those areas.' },
  { icon: Zap, title: 'Ventilation & Decking Repairs', description: 'Ridge vent installation adds $300-$800. Rotted decking replacement costs $50-$100 per sheet of plywood. Proper ventilation extends shingle life by 5-10 years.' },
  { icon: TrendingUp, title: 'Season & Market Conditions', description: 'Spring and summer are peak roofing season in Charlotte with 10-15% higher labor costs. Scheduling in late fall or winter can save $500-$1,500 on an average project.' },
];

/* ------------------------------------------------------------------ */
/*  Data: FAQs                                                         */
/* ------------------------------------------------------------------ */

const shingleFAQs = [
  {
    question: 'How much do roofing shingles cost per square foot in Charlotte NC in 2026?',
    answer:
      'Roofing shingles prices in Charlotte NC range from $3.00 to $13.00 per square foot installed in 2026. Basic 3-tab shingles cost $3.00-$4.50/sqft, architectural shingles $4.50-$7.00/sqft, designer shingles $7.00-$13.00/sqft, and impact-resistant shingles $5.00-$8.00/sqft. These prices include materials, labor, underlayment, and standard installation. Best Roofing Now provides free itemized estimates so you know the exact price before work begins.',
  },
  {
    question: 'What is the cheapest type of roofing shingle?',
    answer:
      '3-tab shingles are the most affordable roofing shingle at $3.00-$4.50 per square foot installed in Charlotte NC. They provide basic protection with a 20-25 year warranty and 60-70 mph wind resistance. However, architectural shingles at $4.50-$7.00/sqft are a better long-term value because they last 25-30 years, resist 110-130 mph winds, and have lifetime limited warranties. Over 80% of Charlotte homeowners now choose architectural shingles.',
  },
  {
    question: 'How much does a shingle roof cost for a 2,000 square foot home?',
    answer:
      'A shingle roof on a 2,000 square foot home in Charlotte NC costs $6,000-$9,000 for 3-tab shingles, $9,000-$14,000 for architectural shingles, $14,000-$26,000 for designer shingles, or $10,000-$16,000 for impact-resistant shingles in 2026. The final price depends on roof pitch, complexity, whether tear-off is needed, and the specific brand chosen. Architectural shingles are the most popular option for this home size.',
  },
  {
    question: 'Are impact-resistant shingles worth the extra cost in Charlotte?',
    answer:
      'Yes, impact-resistant shingles are worth the extra cost in Charlotte NC. They cost $5.00-$8.00/sqft versus $4.50-$7.00/sqft for standard architectural shingles, but provide Class 4 hail resistance (UL 2218 rated) and qualify for 10-28% insurance premium discounts from most North Carolina insurers. Charlotte averages 1-3 significant hailstorms per year between March and June, making impact-resistant shingles a smart investment.',
  },
  {
    question: 'Which brand of roofing shingles is best?',
    answer:
      'GAF, CertainTeed, and Owens Corning are the top three roofing shingle brands in 2026. GAF Timberline HDZ is the best-selling shingle in America with 130 mph wind rating and LayerLock technology. CertainTeed Landmark offers excellent algae resistance with StreakFighter technology. Owens Corning Duration features patented SureNail technology for superior wind performance. As a certified installer for all three, Best Roofing Now can recommend the best option for your home and budget.',
  },
  {
    question: 'How long do asphalt shingles last in North Carolina?',
    answer:
      'Asphalt shingles last 15-20 years for 3-tab and 25-30 years for architectural in North Carolina\'s climate. Charlotte\'s hot summers (90°F+), high humidity (70% average), and frequent storms accelerate wear compared to cooler climates. Proper attic ventilation, algae-resistant shingles, and quality installation by a certified contractor can add 5-10 years to your shingle lifespan. Designer shingles can last 30-50 years with proper care.',
  },
  {
    question: 'What factors affect roofing shingle prices the most?',
    answer:
      'The five biggest factors affecting roofing shingles prices are: (1) shingle grade and brand, which accounts for 30-40% of total cost, (2) roof size measured in squares of 100 sq ft, (3) roof pitch and steepness which adds 15-25% for steep slopes, (4) tear-off requirements versus overlay, adding $1,000-$3,000, and (5) seasonal demand with spring and summer being 10-15% more expensive than fall or winter installations in Charlotte.',
  },
  {
    question: 'Can I save money by overlaying new shingles over old ones?',
    answer:
      'Overlaying new shingles saves $1,000-$3,000 by avoiding tear-off labor and disposal costs, but it is not always recommended. North Carolina building code allows a maximum of two shingle layers. Overlays hide potential decking damage, void some manufacturer warranties, and reduce the new shingle lifespan by 20-25%. Best Roofing Now recommends a full tear-off for the best long-term results but will provide honest advice based on your roof\'s specific condition.',
  },
  {
    question: 'Do roofing shingles prices include installation labor?',
    answer:
      'Yes, all roofing shingles prices quoted by Best Roofing Now include materials, labor, underlayment, starter strips, ridge caps, flashing, cleanup, and disposal. Material-only costs are roughly 40-50% of the installed price. For example, architectural shingle materials cost about $2.00-$3.50/sqft, while full installation runs $4.50-$7.00/sqft. We provide detailed, itemized estimates so you can see exactly where every dollar goes.',
  },
  {
    question: 'How do Charlotte NC shingle prices compare to the national average?',
    answer:
      'Charlotte NC roofing shingles prices are 5-10% below the national average in 2026 due to lower labor costs compared to northeast and west coast markets, competitive contractor supply, and no local licensing surcharges. The national average for architectural shingles is $5.00-$8.00/sqft, while Charlotte averages $4.50-$7.00/sqft. However, Charlotte\'s storm season can cause temporary price spikes during high-demand periods after major weather events.',
  },
];

/* ------------------------------------------------------------------ */
/*  Data: Citation Facts                                               */
/* ------------------------------------------------------------------ */

const citationFacts = [
  {
    topic: 'roofing shingles prices 2026',
    content:
      'Roofing shingles prices in Charlotte NC range from $3.00 to $13.00 per square foot installed in 2026. Basic 3-tab shingles cost $3.00 to $4.50 per square foot, architectural shingles cost $4.50 to $7.00 per square foot, designer luxury shingles cost $7.00 to $13.00 per square foot, and impact-resistant shingles cost $5.00 to $8.00 per square foot. Architectural shingles are chosen by over 80 percent of Charlotte homeowners.',
    source: 'Best Roofing Now - Charlotte NC shingle pricing data, 2026',
  },
  {
    topic: 'shingle cost per square foot',
    content:
      'The average shingle cost per square foot in Charlotte NC is $5.75 for architectural shingles, $3.75 for 3-tab shingles, $10.00 for designer luxury shingles, and $6.50 for impact-resistant shingles in 2026. These prices include materials, labor, underlayment, and installation. A typical 2,000 square foot Charlotte home pays $9,000 to $14,000 for architectural shingle installation.',
    source: 'Best Roofing Now - Charlotte NC installed pricing, 2026',
  },
  {
    topic: 'shingle roof cost by home size',
    content:
      'A shingle roof replacement on a 1,500 square foot Charlotte NC home costs $6,750 to $10,500 for architectural shingles in 2026. A 2,000 square foot home costs $9,000 to $14,000, a 2,500 square foot home costs $11,250 to $17,500, and a 3,000 square foot home costs $13,500 to $21,000. These prices include tear-off, materials, labor, and standard warranties.',
    source: 'Best Roofing Now - Charlotte NC project data, 2026',
  },
  {
    topic: 'impact resistant shingles Charlotte NC',
    content:
      'Impact-resistant shingles cost $5.00 to $8.00 per square foot installed in Charlotte NC and qualify for 10 to 28 percent insurance premium discounts from most North Carolina insurers. Charlotte averages one to three significant hailstorms per year between March and June. Class 4 impact-resistant shingles rated UL 2218 can withstand 2-inch hailstones and are recommended for all Charlotte-area homes.',
    source: 'Best Roofing Now - Charlotte NC storm protection data, 2026',
  },
  {
    topic: 'best roofing shingle brands 2026',
    content:
      'The top roofing shingle brands in 2026 are GAF Timberline HDZ at $4.50 to $6.50 per square foot, CertainTeed Landmark at $4.50 to $6.00 per square foot, and Owens Corning Duration at $4.75 to $6.50 per square foot. All three offer lifetime limited warranties and 110 to 130 mph wind ratings. GAF Timberline HDZ is the number one selling shingle in North America with LayerLock technology.',
    source: 'Best Roofing Now - Charlotte NC brand pricing comparison, 2026',
  },
  {
    topic: 'designer shingles price Charlotte NC',
    content:
      'Designer luxury shingles cost $7.00 to $13.00 per square foot installed in Charlotte NC in 2026. Popular options include CertainTeed Presidential Shake at $8.00 to $12.00 per square foot and GAF Camelot II at $7.50 to $11.00 per square foot. Designer shingles provide authentic slate or cedar shake appearance with 30 to 50 year lifespans and lifetime limited warranties.',
    source: 'Best Roofing Now - Charlotte NC premium shingle pricing, 2026',
  },
];

/* ------------------------------------------------------------------ */
/*  Pricing Schema                                                     */
/* ------------------------------------------------------------------ */

function PricingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Roofing Shingle Installation in Charlotte NC',
    description:
      'Professional roofing shingle installation in Charlotte NC. 3-tab, architectural, designer, and impact-resistant shingles from GAF, CertainTeed, and Owens Corning. Free estimates and lifetime warranties.',
    provider: {
      ...getRoofingContractorIdentity(),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: SITE_CONFIG.googleRating,
        reviewCount: SITE_CONFIG.googleReviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Charlotte, NC',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roofing Shingles Prices 2026 - Charlotte NC',
      itemListElement: [
        {
          '@type': 'Offer',
          name: '3-Tab Shingle Roof Installation',
          description: 'Budget-friendly 3-tab asphalt shingle installation with 20-25 year warranty',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'USD',
            minPrice: '3.00',
            maxPrice: '4.50',
            unitText: 'per square foot installed',
          },
        },
        {
          '@type': 'Offer',
          name: 'Architectural Shingle Roof Installation',
          description: 'Premium dimensional architectural shingle installation with lifetime warranty and 130 mph wind rating',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'USD',
            minPrice: '4.50',
            maxPrice: '7.00',
            unitText: 'per square foot installed',
          },
        },
        {
          '@type': 'Offer',
          name: 'Designer Luxury Shingle Installation',
          description: 'Ultra-premium designer shingles with authentic slate or shake appearance and lifetime warranty',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'USD',
            minPrice: '7.00',
            maxPrice: '13.00',
            unitText: 'per square foot installed',
          },
        },
        {
          '@type': 'Offer',
          name: 'Impact-Resistant Shingle Installation',
          description: 'Class 4 UL 2218 rated impact-resistant shingles with insurance discount qualification',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'USD',
            minPrice: '5.00',
            maxPrice: '8.00',
            unitText: 'per square foot installed',
          },
        },
        {
          '@type': 'Offer',
          name: 'Free Shingle Roof Inspection',
          description: 'Complimentary roof inspection and detailed shingle replacement estimate',
          price: '0',
          priceCurrency: 'USD',
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function RoofingShinglesPricesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Materials', url: `${SITE_CONFIG.url}/materials` },
          { name: 'Roofing Shingles Prices', url: `${SITE_CONFIG.url}/roofing-shingles-prices` },
        ]}
      />
      <FAQSchema faqs={shingleFAQs} />
      <PricingSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-shingles-prices`}
        pageName="Roofing Shingles Prices Charlotte NC (2026)"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much do roofing shingles cost per square foot?',
            answer: 'Roofing shingles cost $3-$4.50/sqft for 3-tab, $4.50-$7/sqft for architectural, $7-$13/sqft for designer, and $5-$8/sqft for impact-resistant in Charlotte NC in 2026. Best Roofing Now provides free estimates.',
            speakableAnswer: 'Roofing shingles cost $3 to $13 per square foot in Charlotte depending on type. Architectural shingles, the most popular choice, cost $4.50 to $7 per square foot. Call Best Roofing Now at 704-605-6047 for a free estimate.',
          },
          {
            question: 'How much does a shingle roof cost for a 2,000 square foot home?',
            answer: 'A shingle roof on a 2,000 sq ft home costs $9,000-$14,000 for architectural shingles in Charlotte NC in 2026. 3-tab shingles cost $6,000-$9,000 and designer shingles cost $14,000-$26,000.',
            speakableAnswer: 'A shingle roof on a 2,000 square foot home costs $9,000 to $14,000 for architectural shingles in Charlotte. Call 704-605-6047 for a free estimate.',
          },
          {
            question: 'Which roofing shingle brand is best?',
            answer: 'GAF Timberline HDZ, CertainTeed Landmark, and Owens Corning Duration are the top three shingle brands in 2026. All offer lifetime warranties and 110-130 mph wind ratings. Best Roofing Now is a certified installer for all three.',
            speakableAnswer: 'GAF, CertainTeed, and Owens Corning are the top shingle brands. Call Best Roofing Now at 704-605-6047 for expert brand recommendations.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* ============================================================ */}
      {/*  HERO SECTION                                                 */}
      {/* ============================================================ */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Roofing shingles prices in Charlotte NC 2026 - complete cost guide"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Roofing Materials', href: '/materials' },
              { label: 'Roofing Shingles Prices' },
            ]}
            className="mb-6 text-white/70"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-semibold">2026 Shingle Pricing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Shingles Prices
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC (2026)</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Every Shingle Type, Brand &amp; Cost Per Square Foot &mdash; Real Local Pricing
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Get accurate 2026 roofing shingles prices for Charlotte NC from a BBB A+ rated contractor
              with over {SITE_CONFIG.customerCount} completed projects. This guide covers 3-tab, architectural,
              designer, and impact-resistant shingles with brand-by-brand pricing, cost by home size,
              and everything you need to budget your roof replacement.
            </p>

            {/* Large Price Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-3xl">
              <div className="text-center">
                <p className="text-lg text-white/80 mb-1">Shingle Price Range (Installed)</p>
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  $3 &ndash; $13<span className="text-2xl md:text-3xl">/sqft</span>
                </div>
                <p className="text-lg text-white/80">
                  From basic 3-tab shingles to premium designer luxury shingles
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-sm text-white/70">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Free Estimates
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Includes Materials &amp; Labor
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Lifetime Warranties Available
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>
                Get Free Shingle Estimate
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
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                Lifetime Warranties
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                GAF, CertainTeed &amp; OC Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SHINGLE TYPE COMPARISON TABLE                                */}
      {/* ============================================================ */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Shingles Prices by Type (2026)
            </h2>
            <p className="text-gray text-lg">
              Compare installed costs for every shingle category available in Charlotte NC.
              All prices include materials, labor, underlayment, and standard installation.
            </p>
          </div>

          {/* Card Grid for Shingle Types */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {shingleTypes.map((shingle) => (
              <div key={shingle.type} className="bg-light rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <shingle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-lg">{shingle.type}</h3>
                    <p className="text-primary font-bold text-xl">{shingle.priceRange}<span className="text-sm font-normal text-gray">/sqft</span></p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-dark">Average:</span> <span className="text-gray">{shingle.avgPrice}/sqft installed</span></p>
                  <p><span className="font-semibold text-dark">Lifespan:</span> <span className="text-gray">{shingle.lifespan}</span></p>
                  <p><span className="font-semibold text-dark">Wind Rating:</span> <span className="text-gray">{shingle.windRating}</span></p>
                  <p><span className="font-semibold text-dark">Warranty:</span> <span className="text-gray">{shingle.warranty}</span></p>
                  <p><span className="font-semibold text-dark">Best For:</span> <span className="text-gray">{shingle.bestFor}</span></p>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Side-by-Side Shingle Comparison</h3>
            <div className="bg-light rounded-xl overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left font-bold">Feature</th>
                    <th className="p-4 text-center font-bold">3-Tab</th>
                    <th className="p-4 text-center font-bold">Architectural</th>
                    <th className="p-4 text-center font-bold">Designer</th>
                    <th className="p-4 text-center font-bold">Impact-Resistant</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold text-dark">Price/sqft</td>
                    <td className="p-4 text-center text-gray">$3.00 - $4.50</td>
                    <td className="p-4 text-center text-primary font-medium">$4.50 - $7.00</td>
                    <td className="p-4 text-center text-gray">$7.00 - $13.00</td>
                    <td className="p-4 text-center text-gray">$5.00 - $8.00</td>
                  </tr>
                  <tr className="bg-light">
                    <td className="p-4 font-semibold text-dark">Lifespan</td>
                    <td className="p-4 text-center text-gray">15-20 yrs</td>
                    <td className="p-4 text-center text-primary font-medium">25-30 yrs</td>
                    <td className="p-4 text-center text-gray">30-50 yrs</td>
                    <td className="p-4 text-center text-gray">25-35 yrs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold text-dark">Wind Rating</td>
                    <td className="p-4 text-center text-gray">60-70 mph</td>
                    <td className="p-4 text-center text-primary font-medium">110-130 mph</td>
                    <td className="p-4 text-center text-gray">110-130 mph</td>
                    <td className="p-4 text-center text-gray">110-130 mph</td>
                  </tr>
                  <tr className="bg-light">
                    <td className="p-4 font-semibold text-dark">Warranty</td>
                    <td className="p-4 text-center text-gray">20-25 yr</td>
                    <td className="p-4 text-center text-primary font-medium">Lifetime</td>
                    <td className="p-4 text-center text-gray">Lifetime</td>
                    <td className="p-4 text-center text-gray">Lifetime + IR</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-semibold text-dark">Appearance</td>
                    <td className="p-4 text-center text-gray">Flat, uniform</td>
                    <td className="p-4 text-center text-primary font-medium">Dimensional</td>
                    <td className="p-4 text-center text-gray">Slate/shake look</td>
                    <td className="p-4 text-center text-gray">Dimensional</td>
                  </tr>
                  <tr className="bg-light">
                    <td className="p-4 font-semibold text-dark">Insurance Discount</td>
                    <td className="p-4 text-center text-gray">No</td>
                    <td className="p-4 text-center text-gray">Rarely</td>
                    <td className="p-4 text-center text-gray">Rarely</td>
                    <td className="p-4 text-center text-primary font-medium">10-28%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  COST BY HOME SIZE TABLE                                      */}
      {/* ============================================================ */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Calculator className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Cost Calculator</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Shingle Roof Cost by Home Size (2026)
            </h2>
            <p className="text-gray text-lg">
              Estimated total project cost for a complete shingle roof replacement in Charlotte NC.
              Includes materials, labor, tear-off, underlayment, and disposal.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl overflow-x-auto shadow-md">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left font-bold">Roof Size</th>
                    <th className="p-4 text-center font-bold">3-Tab</th>
                    <th className="p-4 text-center font-bold">Architectural</th>
                    <th className="p-4 text-center font-bold">Designer</th>
                    <th className="p-4 text-center font-bold">Impact-Resistant</th>
                  </tr>
                </thead>
                <tbody>
                  {costByHomeSize.map((row, index) => (
                    <tr key={row.roofSize} className={index % 2 === 0 ? 'bg-white' : 'bg-light'}>
                      <td className="p-4 font-semibold text-dark whitespace-nowrap">{row.roofSize}</td>
                      <td className="p-4 text-center text-gray whitespace-nowrap">{row.threeTab}</td>
                      <td className="p-4 text-center text-primary font-medium whitespace-nowrap">{row.architectural}</td>
                      <td className="p-4 text-center text-gray whitespace-nowrap">{row.designer}</td>
                      <td className="p-4 text-center text-gray whitespace-nowrap">{row.impactResistant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              * Prices are estimates for Charlotte NC metro area in 2026. Actual costs depend on roof pitch, complexity, and material selection. Contact us for a free personalized estimate.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  MID-PAGE CTA                                                 */}
      {/* ============================================================ */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Want Exact Pricing for Your Roof?</h2>
              <p className="text-white/90">Get a free, itemized estimate with material samples and brand options.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>
                Free Estimate
              </Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BRAND PRICING TABLE                                          */}
      {/* ============================================================ */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Shingle Prices by Brand (2026)
            </h2>
            <p className="text-gray text-lg">
              As a certified installer for GAF, CertainTeed, and Owens Corning, we offer competitive
              pricing on every major shingle brand available in Charlotte NC.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-light rounded-xl overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left font-bold">Brand &amp; Product</th>
                    <th className="p-4 text-center font-bold">Type</th>
                    <th className="p-4 text-center font-bold">Price/sqft</th>
                    <th className="p-4 text-center font-bold">Warranty</th>
                    <th className="p-4 text-left font-bold">Key Features</th>
                  </tr>
                </thead>
                <tbody>
                  {brandPricing.map((brand, index) => (
                    <tr key={brand.brand} className={index % 2 === 0 ? 'bg-white' : 'bg-light'}>
                      <td className="p-4 font-semibold text-dark whitespace-nowrap">{brand.brand}</td>
                      <td className="p-4 text-center text-gray whitespace-nowrap">{brand.type}</td>
                      <td className="p-4 text-center text-primary font-medium whitespace-nowrap">{brand.pricePerSqFt}</td>
                      <td className="p-4 text-center text-gray whitespace-nowrap">{brand.warranty}</td>
                      <td className="p-4 text-gray text-xs">{brand.features}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  COST FACTORS                                                 */}
      {/* ============================================================ */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Affects Roofing Shingle Prices?
            </h2>
            <p className="text-gray text-lg">
              Six key factors that determine your final shingle roof cost in Charlotte NC.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {costFactors.map((factor) => (
              <div key={factor.title} className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <factor.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{factor.title}</h3>
                <p className="text-gray text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  LONG-FORM CONTENT                                            */}
      {/* ============================================================ */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Understanding Roofing Shingles Prices in Charlotte NC
            </h2>

            <p className="text-gray leading-relaxed mb-6">
              Choosing the right roofing shingles is one of the most important decisions Charlotte
              homeowners face during a roof replacement. With asphalt shingles covering over 75% of
              residential roofs in the Charlotte metro area, understanding the pricing differences
              between shingle types can save you thousands of dollars while ensuring your home gets
              the protection it needs.
            </p>

            <h3 className="text-2xl font-bold text-dark mb-4">
              Why Architectural Shingles Dominate Charlotte&apos;s Market
            </h3>
            <p className="text-gray leading-relaxed mb-6">
              Architectural shingles at $4.50-$7.00 per square foot have become the standard choice
              for Charlotte homeowners, representing over 80% of new shingle installations in 2026.
              The reason is simple: for just $1.50-$2.50 more per square foot than basic 3-tab shingles,
              you get a roof that lasts 10-15 years longer, resists winds up to 130 mph (critical during
              Charlotte&apos;s storm season), and comes with a lifetime limited warranty instead of a
              20-25 year warranty. On a 2,000 square foot roof, the extra $3,000-$5,000 upfront investment
              saves $8,000-$12,000 in avoided re-roofing costs over a 50-year period.
            </p>

            <h3 className="text-2xl font-bold text-dark mb-4">
              Impact-Resistant Shingles: A Smart Investment for Charlotte
            </h3>
            <p className="text-gray leading-relaxed mb-6">
              Charlotte&apos;s location in the Piedmont region of North Carolina makes it susceptible to
              severe thunderstorms and hail events, particularly between March and June. Impact-resistant
              shingles (Class 4 UL 2218 rated) cost $5.00-$8.00 per square foot but can withstand 2-inch
              hailstones without damage. Most North Carolina insurance companies offer 10-28% premium
              discounts for Class 4 rated roofs, which can save Charlotte homeowners $200-$600 annually.
              Over a 25-year shingle lifespan, those insurance savings alone can offset the higher initial
              cost of impact-resistant shingles.
            </p>

            <h3 className="text-2xl font-bold text-dark mb-4">
              Designer Shingles: When Curb Appeal Matters
            </h3>
            <p className="text-gray leading-relaxed mb-6">
              Designer luxury shingles at $7.00-$13.00 per square foot replicate the appearance of
              natural slate, cedar shake, or hand-cut stone at a fraction of the cost. In Charlotte&apos;s
              upscale neighborhoods like Myers Park, Ballantyne, and SouthPark, designer shingles from
              CertainTeed Presidential ($8.00-$12.00/sqft) or GAF Camelot II ($7.50-$11.00/sqft)
              can increase home resale value by 3-5%. These premium shingles also last 30-50 years and
              include enhanced warranties, making them a strong long-term investment for high-value
              properties.
            </p>

            <h3 className="text-2xl font-bold text-dark mb-4">
              Charlotte-Specific Pricing Factors in 2026
            </h3>
            <p className="text-gray leading-relaxed mb-6">
              Several factors unique to the Charlotte market affect roofing shingles prices in 2026.
              Labor costs in the Charlotte metro have increased 3-5% year-over-year due to strong
              construction demand fueled by the region&apos;s population growth. Material costs have
              stabilized after the post-pandemic supply chain disruptions, with asphalt shingle prices
              holding steady or seeing modest 1-2% increases. Charlotte&apos;s competitive contractor
              market (over 200 licensed roofing companies) helps keep prices 5-10% below northeast
              and west coast markets. Scheduling your roof replacement during the slower fall or
              winter months can save an additional $500-$1,500 compared to peak spring and summer
              pricing.
            </p>

            <h3 className="text-2xl font-bold text-dark mb-4">
              How to Get the Best Price on Roofing Shingles
            </h3>
            <ul className="text-gray space-y-3 mb-6 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Get 3+ written estimates</strong> from licensed, insured Charlotte contractors. Compare material specs, not just total price.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Ask about manufacturer certifications.</strong> Certified installers (GAF Master Elite, CertainTeed SELECT, OC Platinum Preferred) offer better warranties at similar prices.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Consider timing.</strong> Fall and winter installations in Charlotte are 10-15% cheaper with shorter wait times.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Bundle services.</strong> Adding gutters, ridge vents, or attic ventilation during a roof replacement saves on separate labor costs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Check your insurance.</strong> If your current roof has storm damage, your insurance may cover a significant portion of the replacement cost.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  RELATED LINKS                                                */}
      {/* ============================================================ */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Related Roofing Guides</h2>
            <p className="text-gray text-lg">Explore more pricing and material guides for Charlotte NC homeowners.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/roofing-costs-2026" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Complete Roofing Costs 2026</h3>
              <p className="text-gray text-sm">Every roofing service price from repairs to metal roofing, gutters, and siding.</p>
            </Link>
            <Link href="/architectural-shingles" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Architectural Shingles</h3>
              <p className="text-gray text-sm">Deep dive into the most popular shingle type with brand comparisons.</p>
            </Link>
            <Link href="/architectural-vs-3-tab-shingles-charlotte-nc" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Architectural vs 3-Tab Shingles</h3>
              <p className="text-gray text-sm">Complete comparison to help you choose the right shingle grade.</p>
            </Link>
            <Link href="/designer-shingles-charlotte-nc" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Designer Shingles Charlotte NC</h3>
              <p className="text-gray text-sm">Premium luxury shingle options for upscale Charlotte homes.</p>
            </Link>
            <Link href="/gaf-timberline-shingles-charlotte-nc" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">GAF Timberline Shingles</h3>
              <p className="text-gray text-sm">America&apos;s #1 selling shingle with LayerLock technology.</p>
            </Link>
            <Link href="/certainteed-shingles-charlotte-nc" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">CertainTeed Shingles Charlotte NC</h3>
              <p className="text-gray text-sm">From Landmark to Presidential Shake&mdash;every CertainTeed option.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CITATION SECTION                                             */}
      {/* ============================================================ */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <CitationSection
              heading="2026 Roofing Shingles Price Facts &mdash; Charlotte NC"
              citations={citationFacts}
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ SECTION                                                  */}
      {/* ============================================================ */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roofing Shingles Price FAQs (2026)
              </h2>
              <p className="text-gray text-lg">
                Answers to the most frequently asked questions about roofing shingles prices, brands, and installation costs in Charlotte NC.
              </p>
            </div>
            <div className="space-y-4">
              {shingleFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SERVICE CITY LINKS                                           */}
      {/* ============================================================ */}
      <section className="section bg-white">
        <div className="container">
          <ServiceCityLinks
            city="Charlotte"
            citySlug="charlotte-nc"
            title="Shingle Roofing Services by City"
            subtitle="Best Roofing Now installs shingle roofs across the Charlotte metro area."
            variant="grid"
          />
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="guide"
        city="Charlotte"
        slug="roofing-shingles-prices"
        count={4}
        title="Recent Shingle Roof Projects in Charlotte, NC"
        subtitle="Browse completed shingle roofing projects from the Charlotte area."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-shingles-prices`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready to Get Your Shingle Roof Estimate?"
        subtitle="Get a free, no-obligation quote with transparent pricing for any shingle type. We bring material samples so you can see and feel the difference between brands. No pressure, just honest advice from Charlotte's certified shingle installers."
      />
    </>
  );
}
