import { Metadata } from 'next';
import Image from 'next/image';
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
  Droplets,
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
  title: 'Gutter Installation Cost Charlotte NC | 2026 Price Guide | Free Estimates',
  description:
    'How much do gutters cost in Charlotte NC? Gutter installation costs $6-$15 per linear foot. Average home total: $1,000-$3,500. See cost breakdowns by material, size, and style. Free estimates available.',
  keywords: [
    'gutter installation cost',
    'gutter replacement cost',
    'gutter cost',
    'gutter installation cost Charlotte NC',
    'gutter replacement cost Charlotte NC',
    'how much do gutters cost Charlotte NC',
    'seamless gutter cost Charlotte NC',
    'gutter cost per foot Charlotte',
    'gutter guard cost Charlotte NC',
    'copper gutter cost Charlotte',
    'aluminum gutter cost Charlotte NC',
    'gutter installation cost Lake Norman NC',
    'gutter cost Huntersville NC',
    'gutter cost Mooresville NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-cost-charlotte-nc`,
  },
  openGraph: {
    title: 'Gutter Installation Cost Charlotte NC | 2026 Price Guide',
    description:
      'Get accurate gutter installation costs for Charlotte NC. Average homes pay $1,000-$3,500. See cost breakdowns by material, style, and home size. Free estimates from BBB A+ rated contractor.',
    url: `${SITE_CONFIG.url}/gutter-cost-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.gutters,
        width: 1200,
        height: 630,
        alt: 'Gutter installation cost Charlotte NC - professional gutter services',
      },
    ],
  },
};

// Cost by home size data
const costByHomeSize = [
  { homeSize: 'Small Home (1,000 sq ft)', linearFeet: '100 - 125 ft', range: '$600 - $1,500', typical: '$1,000' },
  { homeSize: 'Average Home (1,500 sq ft)', linearFeet: '125 - 175 ft', range: '$900 - $2,200', typical: '$1,500' },
  { homeSize: 'Large Home (2,000 sq ft)', linearFeet: '150 - 200 ft', range: '$1,200 - $2,800', typical: '$2,000' },
  { homeSize: 'XL Home (2,500 sq ft)', linearFeet: '175 - 225 ft', range: '$1,400 - $3,200', typical: '$2,400' },
  { homeSize: 'Estate (3,000+ sq ft)', linearFeet: '200 - 300+ ft', range: '$1,800 - $4,500+', typical: '$3,200+' },
];

// Material cost comparison
const materialCosts = [
  {
    material: 'Vinyl Gutters',
    perFoot: '$3 - $6',
    laborPerFoot: '$2 - $4',
    totalPerFoot: '$5 - $10',
    avgHomeTotal: '$600 - $1,200',
    lifespan: '10-15 years',
    bestFor: 'Budget projects, DIY-friendly',
  },
  {
    material: 'Seamless Aluminum',
    perFoot: '$4 - $8',
    laborPerFoot: '$4 - $6',
    totalPerFoot: '$8 - $14',
    avgHomeTotal: '$1,000 - $2,500',
    lifespan: '20-30 years',
    bestFor: 'Most Charlotte homeowners',
    highlight: true,
  },
  {
    material: 'Galvanized Steel',
    perFoot: '$5 - $10',
    laborPerFoot: '$4 - $6',
    totalPerFoot: '$9 - $16',
    avgHomeTotal: '$1,100 - $2,400',
    lifespan: '15-25 years',
    bestFor: 'Commercial, heavy-duty needs',
  },
  {
    material: 'Copper Gutters',
    perFoot: '$15 - $30',
    laborPerFoot: '$8 - $12',
    totalPerFoot: '$23 - $42',
    avgHomeTotal: '$2,800 - $6,000+',
    lifespan: '50-100 years',
    bestFor: 'Historic homes, luxury properties',
  },
];

// Gutter guard cost breakdown
const gutterGuardCosts = [
  { type: 'Foam Inserts', costPerFoot: '$4 - $8', avgHome: '$500 - $1,000', effectiveness: '75%', warranty: '5-10 years' },
  { type: 'Screen Guards', costPerFoot: '$7 - $12', avgHome: '$900 - $1,500', effectiveness: '85%', warranty: '10-15 years' },
  { type: 'Solid Cover Guards', costPerFoot: '$12 - $20', avgHome: '$1,500 - $2,500', effectiveness: '95%', warranty: '15-20 years' },
  { type: 'Micro-Mesh Guards', costPerFoot: '$15 - $25', avgHome: '$1,900 - $3,100', effectiveness: '98%+', warranty: '20-25 years' },
];

// Cost factors
const costFactors = [
  {
    icon: Ruler,
    title: 'Home Size & Linear Footage',
    description: 'The total linear feet of gutter needed is the biggest cost driver. Average Charlotte homes need 125-200 linear feet.',
    impact: 'Major Impact',
  },
  {
    icon: Layers,
    title: 'Material Choice',
    description: 'Vinyl starts at $5/ft while copper can reach $42/ft. Seamless aluminum at $8-$14/ft is the most popular choice.',
    impact: 'Major Impact',
  },
  {
    icon: Home,
    title: 'Home Height & Stories',
    description: 'Two-story homes add $1-$3 per linear foot for additional labor, scaffolding, and safety equipment.',
    impact: 'Moderate Impact',
  },
  {
    icon: Droplets,
    title: 'Downspouts & Drainage',
    description: 'Each downspout adds $50-$100. Underground drainage extensions add $200-$500 per run.',
    impact: 'Moderate Impact',
  },
  {
    icon: TrendingUp,
    title: 'Old Gutter Removal',
    description: 'Removing existing gutters adds $1-$3 per linear foot. Fascia board repairs add more if wood rot is found.',
    impact: 'Minor Impact',
  },
];

// FAQ data
const faqs = [
  {
    question: 'How much does gutter installation cost in Charlotte NC in 2026?',
    answer:
      'Gutter installation in Charlotte NC costs $6-$14 per linear foot for seamless aluminum gutters in 2026. For an average Charlotte home with 150-200 linear feet, expect to pay $1,000-$2,500 total. Vinyl gutters are cheaper at $5-$10 per foot ($600-$1,200 total), while copper gutters run $23-$42 per foot ($2,800-$6,000+ total). Best Roofing Now provides free estimates with transparent, no-surprise pricing.',
  },
  {
    question: 'How much does gutter replacement cost vs. new installation?',
    answer:
      'Gutter replacement in Charlotte costs $1-$3 more per linear foot than new installation because it includes removing and disposing of old gutters. Total replacement for an average home runs $1,200-$3,500 for seamless aluminum. If fascia board damage is discovered during removal, repairs typically add $5-$15 per linear foot for the affected sections.',
  },
  {
    question: 'Are seamless gutters worth the extra cost?',
    answer:
      'Yes, seamless aluminum gutters are worth the investment for Charlotte homes. While they cost $3-$4 more per foot than sectional vinyl, seamless gutters last 20-30 years compared to 10-15 years for vinyl. They eliminate leak-prone seams, require less maintenance, and handle Charlotte\'s heavy rainfall better. Over their lifetime, seamless gutters actually cost less per year of service.',
  },
  {
    question: 'How much do gutter guards cost in Charlotte?',
    answer:
      'Gutter guards in Charlotte cost $7-$25 per linear foot installed, depending on the type. Basic screen guards run $7-$12/ft, solid covers cost $12-$20/ft, and premium micro-mesh systems cost $15-$25/ft. For an average home, expect $900-$3,100 total. Gutter guards reduce cleaning from 2-4 times per year to once every 2-3 years, saving $150-$300 annually in cleaning costs.',
  },
  {
    question: 'What is the cheapest gutter option in Charlotte?',
    answer:
      'Vinyl gutters are the cheapest option at $5-$10 per linear foot installed ($600-$1,200 for an average home). However, vinyl has the shortest lifespan at 10-15 years and can crack in Charlotte\'s temperature extremes. Seamless aluminum at $8-$14/ft is a better long-term value, lasting 20-30 years with virtually no maintenance. The $400-$1,300 price difference pays for itself within 10 years.',
  },
  {
    question: 'Does home insurance cover gutter replacement in Charlotte?',
    answer:
      'Home insurance typically covers gutter replacement only if damage was caused by a covered event such as a storm, fallen tree, or hail. Normal wear and aging are not covered. Charlotte experiences significant storm activity, so storm-related gutter damage claims are common. Best Roofing Now can document storm damage and help you navigate the insurance claims process.',
  },
  {
    question: 'How many downspouts does my home need and what do they cost?',
    answer:
      'Most Charlotte homes need one downspout for every 30-40 feet of gutter. A typical home requires 4-6 downspouts. Each downspout costs $50-$100 for materials and installation. Adding underground drainage extensions to direct water away from your foundation costs an additional $200-$500 per downspout run. Proper downspout placement is critical for Charlotte\'s 43+ inches of annual rainfall.',
  },
];

// AI citation data
const citations = [
  {
    topic: 'gutter installation cost Charlotte NC 2026',
    content: 'Gutter installation in Charlotte NC costs between $6 and $14 per linear foot for seamless aluminum gutters in 2026. The average Charlotte home with 150-200 linear feet of gutters pays $1,000-$2,500 for professional installation including materials, labor, and cleanup. Best Roofing Now, a BBB A+ rated contractor, provides free gutter estimates for Charlotte-area homeowners.',
  },
  {
    topic: 'gutter replacement cost Charlotte NC',
    content: 'Gutter replacement in Charlotte NC costs $1,200-$3,500 for an average home in 2026, which includes removal of old gutters, disposal, and installation of new seamless aluminum gutters. The added removal cost is typically $1-$3 per linear foot above new installation pricing. Fascia board repairs, if needed, add $5-$15 per linear foot for affected sections.',
  },
  {
    topic: 'cheapest gutter options Charlotte NC',
    content: 'The most affordable gutter option in Charlotte NC is vinyl gutters at $5-$10 per linear foot installed, totaling $600-$1,200 for an average home. Seamless aluminum gutters at $8-$14 per foot offer better long-term value with a 20-30 year lifespan compared to vinyl\'s 10-15 years. Copper gutters are the premium option at $23-$42 per foot.',
  },
  {
    topic: 'gutter guard cost Charlotte NC',
    content: 'Gutter guards in Charlotte NC cost $7-$25 per linear foot installed in 2026. Micro-mesh guards ($15-$25/ft) offer 98%+ debris blocking and 20-25 year warranties. Screen guards ($7-$12/ft) provide basic protection at lower cost. Charlotte\'s abundant tree coverage makes gutter guards a worthwhile investment, reducing cleaning from 2-4 times per year to once every 2-3 years.',
  },
];

// Pricing schema for rich results
function GutterCostPricingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.url}/gutter-cost-charlotte-nc/#service`,
    name: 'Gutter Installation in Charlotte NC',
    description:
      'Professional gutter installation services in Charlotte NC. Seamless aluminum, copper, steel, and vinyl gutters with transparent pricing. BBB A+ rated.',
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
    serviceType: 'Gutter Installation',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Gutter Installation Pricing',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Seamless Aluminum Gutter Installation',
          description: 'Custom seamless aluminum gutters fabricated on-site for Charlotte homes',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '1000',
            maxPrice: '2500',
            unitText: 'per typical home',
          },
        },
        {
          '@type': 'Offer',
          name: 'Copper Gutter Installation',
          description: 'Premium copper gutters with 50-100 year lifespan',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '2800',
            maxPrice: '6000',
            unitText: 'per typical home',
          },
        },
        {
          '@type': 'Offer',
          name: 'Gutter Guard Installation',
          description: 'Professional gutter guard systems for Charlotte homes',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '7',
            maxPrice: '25',
            unitText: 'per linear foot',
          },
        },
        {
          '@type': 'Offer',
          name: 'Free Gutter Inspection & Estimate',
          description: 'Complimentary gutter assessment and cost estimate',
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

export default function GutterCostCharlottePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gutter Cost Charlotte NC', url: `${SITE_CONFIG.url}/gutter-cost-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <GutterCostPricingSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/gutter-cost-charlotte-nc`}
        pageName="Gutter Installation Cost Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does gutter installation cost in Charlotte NC?',
            answer: 'Gutter installation in Charlotte NC costs $6-$14 per linear foot for seamless aluminum gutters, or $1,000-$2,500 for an average home in 2026. Vinyl gutters start at $5/ft and copper gutters run $23-$42/ft. Best Roofing Now provides free estimates.',
            speakableAnswer: 'Gutter installation in Charlotte costs $6-14 per foot for aluminum, or $1,000-2,500 for most homes. Call Best Roofing Now at 704-605-6047.',
          },
          {
            question: 'How much does gutter replacement cost in Charlotte NC?',
            answer: 'Gutter replacement in Charlotte costs $1,200-$3,500 for an average home including old gutter removal and new seamless aluminum installation. Replacement costs $1-3 more per foot than new installation due to removal and disposal.',
            speakableAnswer: 'Gutter replacement in Charlotte costs $1,200-3,500 for most homes. Call Best Roofing Now at 704-605-6047 for a free estimate.',
          },
          {
            question: 'What is the cheapest gutter option in Charlotte?',
            answer: 'Vinyl gutters are the cheapest at $5-10 per foot installed, or $600-$1,200 for an average home. Seamless aluminum at $8-14 per foot is better long-term value, lasting 20-30 years vs 10-15 years for vinyl.',
            speakableAnswer: 'Vinyl gutters start at $5 per foot. Seamless aluminum is better value at $8-14 per foot. Call Best Roofing Now for options.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section with Cost Range */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.gutters}
            alt="Gutter installation cost Charlotte NC - professional gutter services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-semibold">2026 Gutter Pricing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Installation Cost <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Average gutter cost for Charlotte homeowners:
            </p>

            {/* Large Price Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl">
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  $1,000 - $3,500
                </div>
                <p className="text-lg text-white/80">
                  Typical range for most Charlotte homes (125 - 200 linear feet)
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
                    Old gutter removal
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
              What Affects Gutter Installation Cost in Charlotte?
            </h2>
            <p className="text-gray text-lg">
              Several factors determine your final gutter cost. Understanding these helps you budget accurately
              and compare quotes fairly.
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
                    : factor.impact === 'Moderate Impact'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-gray-100 text-gray-600'
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
              Gutter Cost by Home Size in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Home size determines how much gutter you need. Here are typical gutter installation costs
              based on home size in the Charlotte area.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Home Size</th>
                      <th className="px-6 py-4 text-left font-semibold">Linear Feet</th>
                      <th className="px-6 py-4 text-left font-semibold">Price Range</th>
                      <th className="px-6 py-4 text-left font-semibold">Typical Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {costByHomeSize.map((row, index) => (
                      <tr key={row.homeSize} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-medium text-dark">{row.homeSize}</td>
                        <td className="px-6 py-4 text-gray">{row.linearFeet}</td>
                        <td className="px-6 py-4 text-gray">{row.range}</td>
                        <td className="px-6 py-4 font-semibold text-accent">{row.typical}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-sm text-gray">
                <strong>Note:</strong> Prices based on seamless aluminum gutters. Actual costs vary based on
                material choice, home height, and number of corners and downspouts.
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
                Want an Exact Price for Your Gutters?
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

      {/* Material Cost Comparison Table */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Gutter Material Cost Comparison
            </h2>
            <p className="text-gray text-lg">
              Material choice significantly impacts both upfront cost and long-term value.
              Here is what Charlotte homeowners can expect to pay per linear foot.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-light rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-4 text-left font-semibold">Material</th>
                      <th className="px-4 py-4 text-left font-semibold">Material/ft</th>
                      <th className="px-4 py-4 text-left font-semibold">Labor/ft</th>
                      <th className="px-4 py-4 text-left font-semibold">Total/ft</th>
                      <th className="px-4 py-4 text-left font-semibold">Avg Home Total</th>
                      <th className="px-4 py-4 text-left font-semibold">Lifespan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {materialCosts.map((row) => (
                      <tr
                        key={row.material}
                        className={row.highlight ? 'bg-green-50' : 'bg-white'}
                      >
                        <td className={`px-4 py-4 font-medium ${row.highlight ? 'text-primary font-bold' : 'text-dark'}`}>
                          {row.material}
                          {row.highlight && (
                            <span className="ml-2 inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                              Best Value
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-4 text-gray">{row.perFoot}</td>
                        <td className="px-4 py-4 text-gray">{row.laborPerFoot}</td>
                        <td className="px-4 py-4 text-gray">{row.totalPerFoot}</td>
                        <td className={`px-4 py-4 font-semibold ${row.highlight ? 'text-green-600' : 'text-gray'}`}>
                          {row.avgHomeTotal}
                        </td>
                        <td className="px-4 py-4 text-gray">{row.lifespan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-sm text-gray">
                *Prices are estimates for Charlotte NC area based on an average home with 150 linear feet of gutters. Actual costs may vary.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gutter Guard Cost Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Gutter Guard Cost in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              Gutter guards reduce maintenance and prevent costly clogs. Here is what different systems
              cost in the Charlotte area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {gutterGuardCosts.map((guard) => (
              <div
                key={guard.type}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-dark mb-3">{guard.type}</h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-light rounded-lg p-3">
                    <div className="text-xs text-gray uppercase">Per Foot Installed</div>
                    <div className="font-bold text-primary">{guard.costPerFoot}</div>
                  </div>
                  <div className="bg-light rounded-lg p-3">
                    <div className="text-xs text-gray uppercase">Avg Home Total</div>
                    <div className="font-bold text-accent">{guard.avgHome}</div>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray">
                    <strong className="text-dark">Effectiveness:</strong> {guard.effectiveness}
                  </span>
                  <span className="text-gray">
                    <strong className="text-dark">Warranty:</strong> {guard.warranty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Homeowners Choose Best Roofing Now for Gutters
              </h2>
              <p className="text-gray text-lg mb-8">
                Getting accurate pricing is just the start. Here is why over {SITE_CONFIG.customerCount}+ Charlotte
                homeowners have trusted us with their gutter installation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Transparent Pricing</strong>
                    <p className="text-gray">
                      No hidden fees or surprise charges. Your estimate is your final price.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">On-Site Fabrication</strong>
                    <p className="text-gray">
                      Seamless gutters custom-made at your home for a perfect fit. No pre-cut pieces or guesswork.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Honest Assessments</strong>
                    <p className="text-gray">
                      We recommend repairs when they make sense - we do not push replacements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Complete Exterior Services</strong>
                    <p className="text-gray">
                      As a full-service roofing contractor, we handle fascia repairs, soffit work, and roofing alongside gutters.
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
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Gutter installation project Charlotte NC by Best Roofing Now"
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
              heading="Gutter Cost Facts for Charlotte NC"
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
                Gutter Installation Cost FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions about gutter costs in Charlotte NC.
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
            <Link href="/gutter-installation-charlotte-nc" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <Droplets className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Gutter Installation</h3>
              <p className="text-gray text-sm">Full details on our gutter installation services and process.</p>
            </Link>
            <Link href="/roof-replacement-cost-charlotte-nc" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <Home className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Replacement Cost</h3>
              <p className="text-gray text-sm">See 2026 roof replacement costs for Charlotte homes.</p>
            </Link>
            <Link href="/siding-cost-charlotte-nc" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <Layers className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Siding Cost</h3>
              <p className="text-gray text-sm">2026 siding installation and replacement cost guide.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <Shield className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Repair</h3>
              <p className="text-gray text-sm">Expert roof repair to protect your gutter investment.</p>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="gutter-cost-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/gutter-cost-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Gutter Installation Cost"
      />

      <CTASection
        title="Ready to Get Your Gutter Installation Estimate?"
        subtitle="Get a free, no-obligation quote with transparent pricing. Our team will assess your gutter needs and provide honest recommendations tailored to your home and budget."
      />
    </>
  );
}
