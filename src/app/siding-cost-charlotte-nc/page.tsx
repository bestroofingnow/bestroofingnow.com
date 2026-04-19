import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import Link from 'next/link';
import {
  DollarSign,
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  Calculator,
  ArrowRight,
  HelpCircle,
  Home,
  Ruler,
  Layers,
  TrendingUp,
  Paintbrush,
  ThermometerSun,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { CitationSection } from '@/components/seo/CitationBlock';
import { Button } from '@/components/ui/Button';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { SITE_CONFIG } from '@/lib/constants';
import { getRoofingContractorIdentity } from '@/lib/schema-helpers';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Siding Cost Charlotte NC | 2026 Vinyl Siding Price Guide | Free Estimates',
  description:
    'How much does siding cost in Charlotte NC? Vinyl siding installation costs $5-$12 per sq ft. Average home total: $7,000-$18,000. See cost breakdowns by material, home size, and style. Free estimates.',
  keywords: [
    'vinyl siding cost',
    'vinyl siding installation cost',
    'siding replacement cost',
    'siding cost Charlotte NC',
    'vinyl siding cost Charlotte NC',
    'siding replacement cost Charlotte NC',
    'how much does siding cost Charlotte NC',
    'fiber cement siding cost Charlotte',
    'James Hardie siding cost Charlotte NC',
    'siding installation cost per square foot',
    'siding cost Lake Norman NC',
    'siding cost Huntersville NC',
    'siding cost Mooresville NC',
    'Charlotte siding prices 2026',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/siding-cost-charlotte-nc`,
  },
  openGraph: {
    title: 'Siding Cost Charlotte NC | 2026 Vinyl Siding Price Guide',
    description:
      'Get accurate siding costs for Charlotte NC. Vinyl siding: $5-$12/sq ft. Fiber cement: $8-$15/sq ft. See cost breakdowns by material and home size. Free estimates from BBB A+ rated contractor.',
    url: `${SITE_CONFIG.url}/siding-cost-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.siding,
        width: 1200,
        height: 630,
        alt: 'Siding installation cost Charlotte NC - professional siding services',
      },
    ],
  },
};

// Cost by home size data
const costByHomeSize = [
  { homeSize: 'Small Home (1,000 sq ft)', sidingSqFt: '800 - 1,200', range: '$4,000 - $10,000', typical: '$6,500' },
  { homeSize: 'Average Home (1,500 sq ft)', sidingSqFt: '1,200 - 1,800', range: '$6,000 - $15,000', typical: '$9,500' },
  { homeSize: 'Large Home (2,000 sq ft)', sidingSqFt: '1,500 - 2,200', range: '$7,500 - $18,000', typical: '$12,000' },
  { homeSize: 'XL Home (2,500 sq ft)', sidingSqFt: '1,800 - 2,800', range: '$9,000 - $23,000', typical: '$15,000' },
  { homeSize: 'Estate (3,000+ sq ft)', sidingSqFt: '2,200 - 3,500+', range: '$11,000 - $35,000+', typical: '$19,000+' },
];

// Material cost comparison
const materialCosts = [
  {
    material: 'Vinyl Siding',
    perSqFt: '$5 - $8',
    lifespan: '20-40 years',
    pros: ['Most affordable option', 'Low maintenance', 'Wide color selection', 'Never needs painting'],
    bestFor: 'Budget-conscious homeowners',
  },
  {
    material: 'Insulated Vinyl Siding',
    perSqFt: '$7 - $12',
    lifespan: '25-40 years',
    pros: ['Better energy efficiency', 'Reduces noise', 'More rigid than standard vinyl', 'No painting required'],
    bestFor: 'Energy savings priority',
  },
  {
    material: 'Fiber Cement (James Hardie)',
    perSqFt: '$8 - $15',
    lifespan: '30-50 years',
    pros: ['Fire resistant', 'Termite proof', 'Premium appearance', 'Excellent durability'],
    bestFor: 'Most Charlotte homeowners',
    highlight: true,
  },
  {
    material: 'Engineered Wood',
    perSqFt: '$8 - $14',
    lifespan: '20-30 years',
    pros: ['Natural wood look', 'Pre-primed for painting', 'Dimensionally stable', 'Sustainable materials'],
    bestFor: 'Craftsman and traditional homes',
  },
  {
    material: 'Cedar Wood Siding',
    perSqFt: '$10 - $20',
    lifespan: '20-40 years',
    pros: ['Natural beauty', 'Excellent insulation', 'Environmentally friendly', 'Can be stained or painted'],
    bestFor: 'Historic homes, upscale neighborhoods',
  },
  {
    material: 'Metal/Aluminum Siding',
    perSqFt: '$6 - $12',
    lifespan: '40-50 years',
    pros: ['Fire resistant', 'Insect proof', 'Recyclable', 'Low maintenance'],
    bestFor: 'Commercial, modern homes',
  },
];

// Additional cost items
const additionalCosts = [
  { item: 'Old Siding Removal', cost: '$1 - $3 per sq ft', note: 'Required for most replacement projects' },
  { item: 'Housewrap/Moisture Barrier', cost: '$0.50 - $1.50 per sq ft', note: 'Essential for Charlotte humidity' },
  { item: 'Insulation Board', cost: '$1 - $2.50 per sq ft', note: 'Improves energy efficiency 10-20%' },
  { item: 'Trim & Soffit Work', cost: '$5 - $15 per linear ft', note: 'Window/door trim, corner boards, fascia' },
  { item: 'Wood Rot Repair', cost: '$200 - $1,000+', note: 'Common discovery during old siding removal' },
  { item: 'Permits', cost: '$100 - $300', note: 'Required in Mecklenburg County for full re-siding' },
];

// Cost factors
const costFactors = [
  {
    icon: Ruler,
    title: 'Home Size & Wall Area',
    description: 'Total square footage of exterior walls is the primary cost driver. Two-story homes have more wall area per floor plan square foot.',
    impact: 'Major Impact',
  },
  {
    icon: Layers,
    title: 'Material Choice',
    description: 'Vinyl starts at $5/sq ft while cedar can reach $20/sq ft. Fiber cement at $8-$15/sq ft is the most popular premium choice.',
    impact: 'Major Impact',
  },
  {
    icon: Home,
    title: 'Home Complexity',
    description: 'Dormers, bay windows, multiple gables, and architectural details increase labor time and material waste.',
    impact: 'Moderate Impact',
  },
  {
    icon: TrendingUp,
    title: 'Old Siding Removal',
    description: 'Removing existing siding adds $1-$3 per sq ft. Discovering wood rot underneath can add $200-$1,000+ in repairs.',
    impact: 'Moderate Impact',
  },
  {
    icon: ThermometerSun,
    title: 'Insulation & Housewrap',
    description: 'Adding insulation board and moisture barrier is strongly recommended for Charlotte\'s humid subtropical climate.',
    impact: 'Moderate Impact',
  },
  {
    icon: Paintbrush,
    title: 'Trim & Finish Work',
    description: 'Window trim, door trim, corner boards, and soffit/fascia add $2,000-$5,000 to most siding projects.',
    impact: 'Moderate Impact',
  },
];

// FAQ data
const faqs = [
  {
    question: 'How much does vinyl siding cost in Charlotte NC in 2026?',
    answer:
      'Vinyl siding in Charlotte NC costs $5-$8 per square foot installed in 2026, including materials, labor, and basic trim. For an average 1,500 sq ft Charlotte home, expect to pay $6,000-$15,000 total depending on siding quality and project complexity. Insulated vinyl costs $7-$12 per square foot and provides better energy efficiency. Best Roofing Now provides free, detailed siding estimates.',
  },
  {
    question: 'How much does siding replacement cost in Charlotte?',
    answer:
      'Siding replacement in Charlotte costs $7,000-$18,000 for an average home in 2026. This includes old siding removal ($1-$3/sq ft), new siding installation, housewrap, and basic trim work. The total depends on your material choice: vinyl runs $5-$8/sq ft, fiber cement $8-$15/sq ft, and cedar $10-$20/sq ft. Replacement projects typically cost 15-25% more than new installation due to removal, disposal, and potential wood rot repairs.',
  },
  {
    question: 'Is fiber cement siding worth the extra cost over vinyl?',
    answer:
      'Fiber cement siding (like James Hardie) is worth the investment for many Charlotte homeowners. While it costs $3-$7 more per square foot than vinyl, fiber cement lasts 30-50 years vs 20-40 for vinyl, is fire resistant (important with Charlotte\'s hot summers), resists termites (a concern in NC\'s humid climate), and significantly increases home resale value. Fiber cement also holds paint better and does not warp or melt like vinyl can in extreme heat.',
  },
  {
    question: 'How long does siding installation take in Charlotte?',
    answer:
      'Most siding installation projects in Charlotte take 1-3 weeks to complete, depending on home size and complexity. A small single-story home can be done in 5-7 days, while a large two-story home with extensive trim work may take 2-3 weeks. Weather delays are possible during Charlotte\'s rainy spring season. We schedule projects to minimize disruption and communicate timeline updates throughout the process.',
  },
  {
    question: 'Does new siding increase home value in Charlotte?',
    answer:
      'Yes, new siding is one of the highest-ROI home improvements in Charlotte. According to Remodeling Magazine\'s 2025 Cost vs. Value Report, vinyl siding replacement recoups 68-75% of the project cost at resale, while fiber cement siding recoups 75-85%. In Charlotte\'s competitive housing market, homes with new siding sell faster and for higher prices. Curb appeal improvements like siding can add $10,000-$30,000 to your home\'s perceived value.',
  },
  {
    question: 'What is the best siding material for Charlotte NC climate?',
    answer:
      'Fiber cement (James Hardie) is the best overall siding material for Charlotte\'s climate. It handles the humid subtropical conditions (70%+ average humidity), resists the 90+ degree summer heat without warping, is fire resistant, and is termite proof. High-quality insulated vinyl is a good budget alternative. Cedar requires more maintenance in Charlotte\'s humidity but offers natural beauty. Avoid thin vinyl that can crack in temperature swings between Charlotte\'s mild winters and hot summers.',
  },
  {
    question: 'Can I install siding over existing siding in Charlotte?',
    answer:
      'While it is technically possible to install new siding over existing siding in some cases, we generally do not recommend it for Charlotte homes. Overlaying hides potential moisture damage and wood rot (common in Charlotte\'s humid climate), adds weight to your walls, and may void manufacturer warranties. Removing old siding allows inspection of sheathing, replacement of damaged housewrap, and ensures a proper moisture barrier - all critical in Charlotte\'s 43+ inches of annual rainfall.',
  },
  {
    question: 'Does insurance cover siding replacement in Charlotte?',
    answer:
      'Home insurance may cover siding replacement if damage was caused by a covered event such as hail, wind, or fallen trees. Normal wear, fading, and aging are not covered. Charlotte experiences significant storm activity, and hail damage to siding is a common insurance claim. Best Roofing Now can inspect your siding for storm damage, document findings, and help you navigate the insurance claims process to maximize your coverage.',
  },
];

// AI citation data
const citations = [
  {
    topic: 'vinyl siding cost Charlotte NC 2026',
    content: 'Vinyl siding installation in Charlotte NC costs $5-$8 per square foot in 2026, including materials, labor, and basic trim work. An average 1,500 square foot Charlotte home pays $6,000-$15,000 for complete vinyl siding installation. Insulated vinyl siding costs $7-$12 per square foot and offers improved energy efficiency for Charlotte\'s hot summers.',
  },
  {
    topic: 'siding replacement cost Charlotte NC',
    content: 'Siding replacement in Charlotte NC costs $7,000-$18,000 for an average home in 2026. This includes old siding removal, disposal, housewrap installation, new siding, and trim work. Fiber cement siding (James Hardie) at $8-$15 per square foot is the most popular premium choice for Charlotte homeowners due to its 30-50 year lifespan and resistance to humidity, termites, and fire.',
  },
  {
    topic: 'best siding material for Charlotte NC',
    content: 'Fiber cement siding is the best-performing siding material for Charlotte NC\'s humid subtropical climate. It withstands 90+ degree summers without warping, resists Charlotte\'s abundant termite population, and handles 43+ inches of annual rainfall. James Hardie fiber cement is the most-installed premium siding in the Charlotte metro area, offering a 30-50 year lifespan with minimal maintenance.',
  },
  {
    topic: 'siding cost per square foot Charlotte NC',
    content: 'Siding costs in Charlotte NC range from $5-$20 per square foot installed in 2026 depending on material. Vinyl siding costs $5-$8/sq ft, insulated vinyl $7-$12/sq ft, fiber cement (James Hardie) $8-$15/sq ft, engineered wood $8-$14/sq ft, and cedar $10-$20/sq ft. Best Roofing Now, a BBB A+ rated contractor, provides free siding estimates for Charlotte-area homeowners.',
  },
];

// Pricing schema for rich results
function SidingCostPricingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.url}/siding-cost-charlotte-nc/#service`,
    name: 'Siding Installation in Charlotte NC',
    description:
      'Professional siding installation and replacement services in Charlotte NC. Vinyl, fiber cement, engineered wood, and cedar siding with transparent pricing. BBB A+ rated.',
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
    serviceType: 'Siding Installation',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Siding Installation Pricing',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Vinyl Siding Installation',
          description: 'Professional vinyl siding installation for Charlotte homes',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '6000',
            maxPrice: '15000',
            unitText: 'per typical home',
          },
        },
        {
          '@type': 'Offer',
          name: 'Fiber Cement Siding Installation',
          description: 'James Hardie fiber cement siding installation with 30-50 year lifespan',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '10000',
            maxPrice: '25000',
            unitText: 'per typical home',
          },
        },
        {
          '@type': 'Offer',
          name: 'Cedar Siding Installation',
          description: 'Premium natural cedar siding for historic and luxury homes',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '12000',
            maxPrice: '35000',
            unitText: 'per typical home',
          },
        },
        {
          '@type': 'Offer',
          name: 'Free Siding Inspection & Estimate',
          description: 'Complimentary siding assessment and cost estimate',
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

export default function SidingCostCharlottePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Siding Cost Charlotte NC', url: `${SITE_CONFIG.url}/siding-cost-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <SidingCostPricingSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/siding-cost-charlotte-nc`}
        pageName="Siding Cost Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does vinyl siding cost in Charlotte NC?',
            answer: 'Vinyl siding in Charlotte NC costs $5-$8 per square foot installed, or $6,000-$15,000 for an average home in 2026. Insulated vinyl costs $7-$12/sq ft. Best Roofing Now provides free siding estimates.',
            speakableAnswer: 'Vinyl siding in Charlotte costs $5-8 per square foot, or $6,000-15,000 for most homes. Call Best Roofing Now at 704-605-6047.',
          },
          {
            question: 'How much does siding replacement cost in Charlotte NC?',
            answer: 'Siding replacement in Charlotte costs $7,000-$18,000 for an average home including old siding removal, housewrap, and new installation. Fiber cement siding costs $8-$15/sq ft and vinyl costs $5-$8/sq ft.',
            speakableAnswer: 'Siding replacement in Charlotte costs $7,000-18,000 for most homes. Call Best Roofing Now at 704-605-6047 for a free estimate.',
          },
          {
            question: 'What is the best siding for Charlotte NC homes?',
            answer: 'Fiber cement siding (James Hardie) is the best overall choice for Charlotte\'s humid climate. It resists humidity, termites, and fire, and lasts 30-50 years. Vinyl is a good budget alternative at lower cost.',
            speakableAnswer: 'Fiber cement siding is best for Charlotte. It lasts 30-50 years and handles the humidity. Call Best Roofing Now for options.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section with Cost Range */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.services.siding}
            alt="Siding installation cost Charlotte NC - professional siding services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-semibold">2026 Siding Pricing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Siding Cost <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Average siding cost for Charlotte homeowners:
            </p>

            {/* Large Price Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl">
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  $7,000 - $18,000
                </div>
                <p className="text-lg text-white/80">
                  Typical range for most Charlotte homes (1,200 - 2,200 sq ft siding)
                </p>
                <div className="flex items-center justify-center gap-4 mt-4 text-sm text-white/70">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Materials included
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Professional labor
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Old siding removal
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calculator className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Estimate
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
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Free Estimates
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Cost Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Affects Siding Cost in Charlotte?
            </h2>
            <p className="text-gray text-lg">
              Several factors determine your final siding cost. Understanding these helps you budget accurately
              and compare quotes from different contractors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costFactors.map((factor) => (
              <div
                key={factor.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <factor.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{factor.title}</h3>
                <p className="text-gray text-sm mb-3">{factor.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  factor.impact === 'Major Impact'
                    ? 'bg-accent/10 text-accent'
                    : 'bg-primary/10 text-primary'
                }`}>
                  {factor.impact}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost by Home Size Table */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Siding Cost by Home Size in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Home size and wall area are the biggest cost drivers for siding. Here are typical costs
              for Charlotte homes based on size.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Home Size</th>
                      <th className="px-6 py-4 text-left font-semibold">Siding Sq Ft</th>
                      <th className="px-6 py-4 text-left font-semibold">Price Range</th>
                      <th className="px-6 py-4 text-left font-semibold">Typical Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {costByHomeSize.map((row, index) => (
                      <tr key={row.homeSize} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-medium text-dark">{row.homeSize}</td>
                        <td className="px-6 py-4 text-gray">{row.sidingSqFt}</td>
                        <td className="px-6 py-4 text-gray">{row.range}</td>
                        <td className="px-6 py-4 font-semibold text-accent">{row.typical}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-sm text-gray">
                <strong>Note:</strong> Prices based on standard vinyl siding with basic trim. Fiber cement and premium
                materials will be higher. Actual costs vary based on home complexity and condition.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Want an Exact Price for Your Siding Project?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate specific to your home. No hidden fees, no surprises.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-accent hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Siding Material Cost Comparison */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Siding Material Costs in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Material choice significantly impacts both upfront cost and long-term value.
              Here is what Charlotte homeowners can expect to pay.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materialCosts.map((material) => (
              <div
                key={material.material}
                className={`p-6 rounded-xl border-2 transition ${
                  material.highlight
                    ? 'bg-primary/5 border-primary shadow-lg'
                    : 'bg-light border-transparent hover:border-primary/30'
                }`}
              >
                {material.highlight && (
                  <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Most Popular
                  </span>
                )}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-dark">{material.material}</h3>
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {material.perSqFt}/sq ft
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="text-gray">
                    <strong className="text-dark">Lifespan:</strong> {material.lifespan}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {material.pros.map((pro) => (
                    <li key={pro} className="flex items-center gap-2 text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-sm">
                    <strong className="text-primary">Best for:</strong>{' '}
                    <span className="text-gray">{material.bestFor}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Costs Table */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Additional Siding Costs to Budget For
            </h2>
            <p className="text-gray text-lg">
              Beyond the siding itself, these common add-ons affect your total project cost.
              A thorough estimate should include all applicable items.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Item</th>
                      <th className="px-6 py-4 text-left font-semibold">Cost</th>
                      <th className="px-6 py-4 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {additionalCosts.map((row, index) => (
                      <tr key={row.item} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-medium text-dark">{row.item}</td>
                        <td className="px-6 py-4 font-semibold text-accent">{row.cost}</td>
                        <td className="px-6 py-4 text-gray text-sm">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-sm text-gray">
                <strong>Pro Tip:</strong> Always budget 10-15% above the estimate for unexpected repairs.
                Charlotte&apos;s humidity means moisture damage behind old siding is common and only visible after removal.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Homeowners Choose Best Roofing Now for Siding
              </h2>
              <p className="text-gray text-lg mb-8">
                Getting accurate pricing is just the start. Here is why over {SITE_CONFIG.customerCount}+ Charlotte
                homeowners have trusted us with their exterior projects.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Transparent Pricing</strong>
                    <p className="text-gray">
                      No hidden fees or surprise charges. Your estimate includes everything - removal, materials, labor, and trim.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Certified Installer</strong>
                    <p className="text-gray">
                      James Hardie and CertainTeed certified. Manufacturer-backed warranties on materials and labor.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Complete Exterior Services</strong>
                    <p className="text-gray">
                      We handle siding, roofing, gutters, soffit, and fascia - one contractor for your entire exterior.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Moisture Damage Experts</strong>
                    <p className="text-gray">
                      We thoroughly inspect and repair sheathing and moisture barriers - critical in Charlotte&apos;s humid climate.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Veteran-Owned, Local Company</strong>
                    <p className="text-gray">
                      Family-owned and operated in Charlotte. We live here, work here, and stand behind our work.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <SEOImage
                src={IMAGES.realProjects.drone2}
                alt="Siding installation project Charlotte NC by Best Roofing Now"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-dark">5.0 Rating</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Citation Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <CitationSection
              heading="Siding Cost Facts for Charlotte NC"
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
                Siding Cost FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions about siding costs in Charlotte NC.
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

      {/* Related Services */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Related Services & Cost Guides
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/roof-replacement-cost-charlotte-nc" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <Home className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Replacement Cost</h3>
              <p className="text-gray text-sm">See 2026 roof replacement costs for Charlotte homes.</p>
            </Link>
            <Link href="/gutter-cost-charlotte-nc" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <Layers className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Gutter Cost</h3>
              <p className="text-gray text-sm">2026 gutter installation cost guide for Charlotte.</p>
            </Link>
            <Link href="/gutter-installation-charlotte-nc" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <Ruler className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Gutter Installation</h3>
              <p className="text-gray text-sm">Full details on gutter types, sizing, and installation.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <Shield className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Repair</h3>
              <p className="text-gray text-sm">Expert roof repair to complete your exterior renovation.</p>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="siding-cost-charlotte-nc"
        count={4}
        title="Recent Exterior Projects in Charlotte, NC"
        subtitle="Browse completed roofing and exterior projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/siding-cost-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Siding Cost"
      />

      <CTASection
        title="Ready to Get Your Siding Estimate?"
        subtitle="Get a free, no-obligation quote with transparent pricing. Our team will assess your siding needs and provide honest recommendations tailored to your home and budget."
      />
    </>
  );
}
