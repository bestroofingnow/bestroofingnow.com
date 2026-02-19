import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  DollarSign,
  CheckCircle,
  Phone,
  Calendar,
  Home,
  Ruler,
  Layers,
  TrendingUp,
  Shield,
  Star,
  Calculator,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { JamesTip } from '@/components/sections/PersonalTouch';
import { Button } from '@/components/ui/Button';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { SITE_CONFIG } from '@/lib/constants';
import { getRoofingContractorIdentity } from '@/lib/schema-helpers';
import { IMAGES } from '@/lib/images';
import { Lightbulb, Quote } from 'lucide-react';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Replacement Cost Charlotte NC | 2026 Price Guide | Free Estimates',
  description:
    'How much does roof replacement cost in Charlotte NC? Average costs range from $8,000-$25,000 for typical homes. Get accurate pricing by roof size, materials, and complexity. Free estimates available.',
  keywords: [
    'roof replacement cost Charlotte NC',
    'how much does a new roof cost Charlotte',
    'Charlotte roof replacement prices',
    'roof replacement estimate Charlotte',
    'new roof cost Charlotte NC',
    'average roof replacement cost Charlotte',
    'roof replacement pricing Charlotte',
    'Charlotte roofing prices 2026',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-replacement-cost-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Replacement Cost Charlotte NC | 2026 Price Guide',
    description:
      'Get accurate roof replacement costs for Charlotte NC. Typical homes range $8,000-$25,000. See cost breakdowns by size, material, and complexity. Free estimates from BBB A+ rated contractor.',
    url: `${SITE_CONFIG.url}/roof-replacement-cost-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roof replacement cost Charlotte NC - professional roofing installation',
      },
    ],
  },
};

// Cost breakdown data
const costBySize = [
  { size: '1,000 sq ft', range: '$4,500 - $8,000', typical: '$6,000' },
  { size: '1,500 sq ft', range: '$6,500 - $12,000', typical: '$9,000' },
  { size: '2,000 sq ft', range: '$8,000 - $16,000', typical: '$12,000' },
  { size: '2,500 sq ft', range: '$10,000 - $20,000', typical: '$15,000' },
  { size: '3,000 sq ft', range: '$12,000 - $25,000', typical: '$18,000' },
  { size: '3,500+ sq ft', range: '$15,000 - $35,000+', typical: '$22,000+' },
];

const materialCosts = [
  {
    material: 'Asphalt Shingles (3-Tab)',
    perSqFt: '$3.50 - $5.50',
    lifespan: '15-20 years',
    pros: ['Most affordable option', 'Easy installation', 'Wide color variety'],
    best: 'Budget-conscious homeowners',
  },
  {
    material: 'Architectural Shingles',
    perSqFt: '$4.50 - $7.00',
    lifespan: '25-30 years',
    pros: ['Better appearance', 'Longer warranty', 'Wind resistant'],
    best: 'Most Charlotte homeowners',
  },
  {
    material: 'Metal Roofing',
    perSqFt: '$8.00 - $15.00',
    lifespan: '40-70 years',
    pros: ['Extreme durability', 'Energy efficient', 'Low maintenance'],
    best: 'Long-term investment',
  },
  {
    material: 'Tile Roofing',
    perSqFt: '$15.00 - $25.00',
    lifespan: '50-100 years',
    pros: ['Premium appearance', 'Exceptional lifespan', 'Fire resistant'],
    best: 'Luxury homes, Mediterranean style',
  },
];

const costFactors = [
  {
    icon: Ruler,
    title: 'Roof Size',
    description: 'The primary cost driver. Measured in roofing squares (100 sq ft each).',
    impact: 'Major Impact',
  },
  {
    icon: Layers,
    title: 'Material Choice',
    description: 'From budget asphalt to premium metal or tile options.',
    impact: 'Major Impact',
  },
  {
    icon: TrendingUp,
    title: 'Roof Pitch/Slope',
    description: 'Steeper roofs require more safety equipment and labor time.',
    impact: 'Moderate Impact',
  },
  {
    icon: Home,
    title: 'Roof Complexity',
    description: 'Valleys, dormers, skylights, and multiple levels add cost.',
    impact: 'Moderate Impact',
  },
];

const faqs = [
  {
    question: 'How much does a new roof cost in Charlotte NC in 2026?',
    answer:
      'A new roof in Charlotte NC typically costs between $8,000 and $25,000 for most homes in 2026. The average Charlotte homeowner pays around $12,000-$15,000 for a complete roof replacement with architectural shingles. Exact costs depend on your roof size, material choice, and complexity. We offer free estimates to give you an accurate price for your specific home.',
  },
  {
    question: 'What is the average cost per square foot for roof replacement in Charlotte?',
    answer:
      'In Charlotte NC, roof replacement costs range from $4-$7 per square foot for standard asphalt shingles, $8-$15 per square foot for metal roofing, and $15-$25 per square foot for tile roofing. These prices include materials, labor, tear-off of the old roof, and disposal. Architectural shingles, the most popular choice, typically cost $4.50-$7.00 per square foot installed.',
  },
  {
    question: 'Does insurance cover roof replacement in Charlotte NC?',
    answer:
      'Yes, homeowners insurance typically covers roof replacement if the damage was caused by a covered event like storms, hail, or wind. Charlotte experiences significant storm activity, and many roof replacements are at least partially covered by insurance. Best Roofing Now works directly with insurance companies and can help you navigate the claims process to maximize your coverage.',
  },
  {
    question: 'How long does a roof replacement take in Charlotte?',
    answer:
      'Most residential roof replacements in Charlotte take 1-3 days to complete, depending on the size and complexity of your roof. A typical 2,000-2,500 square foot roof can usually be completed in 1-2 days. Larger homes, complex roof designs, or unexpected repairs may extend the timeline. We work efficiently to minimize disruption to your daily life.',
  },
  {
    question: 'When is the best time to replace a roof in Charlotte NC?',
    answer:
      'The best time for roof replacement in Charlotte is during spring (March-May) or fall (September-November) when temperatures are moderate. However, experienced roofers can work year-round in Charlotte\'s climate. The key is to replace your roof before it fails rather than waiting for the "perfect" time. If your roof is showing signs of wear, schedule a free inspection to assess the urgency.',
  },
  {
    question: 'Should I repair or replace my roof in Charlotte?',
    answer:
      'As a general rule, if repairs would cost more than 50% of a replacement, or if your roof is approaching 20+ years old, replacement is often the better investment. Minor repairs (under $1,500) for localized damage make sense for roofs with remaining lifespan. We provide honest assessments and never recommend replacement unless it\'s truly needed. Our free inspections help you make an informed decision.',
  },
  {
    question: 'What is the cheapest roof replacement option in Charlotte?',
    answer:
      'The most affordable roof replacement option in Charlotte is 3-tab asphalt shingles, costing $3.50-$5.50 per square foot installed (around $6,000-$10,000 for an average home). However, we often recommend architectural shingles for just $1-2 more per square foot because they last 10+ years longer and offer better wind resistance - important in Charlotte\'s storm-prone climate. The slightly higher upfront cost often provides better long-term value.',
  },
  {
    question: 'Do you offer financing for roof replacement in Charlotte?',
    answer:
      'Yes! Best Roofing Now offers flexible financing options including 0% APR for 12 months and low monthly payment plans. This allows Charlotte homeowners to get the roof they need without draining savings. Financing approval is quick (often same-day), and we can discuss your options during your free estimate.',
  },
];

// Pricing schema for rich results
function PricingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Roof Replacement in Charlotte NC',
    description:
      'Professional roof replacement services in Charlotte NC. Complete tear-off, installation of new roofing materials, and cleanup. BBB A+ rated.',
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
      name: 'Roof Replacement Pricing',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Asphalt Shingle Roof Replacement',
          description: 'Complete roof replacement with 3-tab or architectural asphalt shingles',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '8000',
            maxPrice: '18000',
            unitText: 'per project',
          },
        },
        {
          '@type': 'Offer',
          name: 'Metal Roof Replacement',
          description: 'Premium metal roofing installation including standing seam options',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '15000',
            maxPrice: '40000',
            unitText: 'per project',
          },
        },
        {
          '@type': 'Offer',
          name: 'Free Roof Inspection',
          description: 'Complimentary roof inspection and estimate',
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

export default function RoofReplacementCostCharlottePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Replacement Cost Charlotte NC', url: `${SITE_CONFIG.url}/roof-replacement-cost-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <PricingSchema />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-replacement-cost-charlotte-nc`}
        pageName="Roof Replacement Cost Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does a new roof cost in Charlotte NC in 2026?',
            answer: 'A new roof in Charlotte NC costs $8,000-$25,000 for most homes in 2026. The average cost is $12,000-$15,000 for a 2,000 sq ft roof with architectural shingles. Best Roofing Now provides free estimates with exact pricing for your home.',
            speakableAnswer: 'A new roof in Charlotte costs $8,000-25,000 for most homes. The average is $12,000-15,000. Call Best Roofing Now at 704-605-6047 for a free estimate.',
          },
          {
            question: 'What is the average cost per square foot for roof replacement in Charlotte?',
            answer: 'Roof replacement in Charlotte costs $3.50-$7.00 per square foot for asphalt shingles, $7-$12 for metal roofing, and $10-$15 for premium materials like slate or tile. Labor and material costs vary by roof complexity.',
            speakableAnswer: 'Roof replacement in Charlotte costs $3.50-7 per square foot for shingles, $7-12 for metal. Call Best Roofing Now for exact pricing.',
          },
          {
            question: 'Why do roof replacement costs vary so much in Charlotte NC?',
            answer: 'Roof replacement costs in Charlotte vary based on: roof size (1,000-3,500+ sq ft), material choice (3-tab vs architectural vs designer), roof pitch and complexity, number of layers to remove, and ventilation/flashing needs. Best Roofing Now provides detailed free estimates.',
            speakableAnswer: 'Roof costs vary by size, material, pitch, and complexity. Best Roofing Now offers free detailed estimates. Call 704-605-6047.',
          },
          {
            question: 'Does insurance cover roof replacement in Charlotte NC?',
            answer: 'Homeowners insurance typically covers roof replacement in Charlotte when caused by storms, hail, wind, or fallen trees. Best Roofing Now helps document damage and works directly with insurance companies to maximize your claim coverage.',
            speakableAnswer: 'Insurance covers roof replacement from storm damage in Charlotte. Best Roofing Now helps with insurance claims. Call 704-605-6047.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section with Cost Range */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Roof replacement cost in Charlotte NC - professional roofing installation"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-semibold">2026 Pricing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Replacement Cost <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Average cost for Charlotte homeowners:
            </p>

            {/* Large Price Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl">
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  $8,000 - $25,000
                </div>
                <p className="text-lg text-white/80">
                  Typical range for most Charlotte homes (1,500 - 3,000 sq ft)
                </p>
                <div className="flex items-center justify-center gap-4 mt-4 text-sm text-white/70">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Includes labor
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Materials
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Tear-off & disposal
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

      {/* Why Prices Vary Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Affects Roof Replacement Cost in Charlotte?
            </h2>
            <p className="text-gray text-lg">
              Several factors determine your final price. Understanding these helps you budget accurately
              and make informed decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Cost By Roof Size Table */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Replacement Cost by Size
            </h2>
            <p className="text-gray text-lg">
              Roof size is the biggest factor in pricing. Here are typical costs for Charlotte homes
              based on roof square footage.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Roof Size</th>
                      <th className="px-6 py-4 text-left font-semibold">Price Range</th>
                      <th className="px-6 py-4 text-left font-semibold">Typical Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {costBySize.map((row, index) => (
                      <tr key={row.size} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-medium text-dark">{row.size}</td>
                        <td className="px-6 py-4 text-gray">{row.range}</td>
                        <td className="px-6 py-4 font-semibold text-accent">{row.typical}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-sm text-gray">
                <strong>Note:</strong> Prices based on architectural shingles. Actual costs vary based on
                material choice, roof complexity, and current market conditions.
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
                Want an Exact Price for Your Roof?
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

      {/* Material Costs Comparison */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Material Costs in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Material choice significantly impacts both upfront cost and long-term value.
              Here is what Charlotte homeowners can expect to pay.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {materialCosts.map((material) => (
              <div
                key={material.material}
                className="p-6 bg-light rounded-xl border-2 border-transparent hover:border-primary transition"
              >
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
                    <span className="text-gray">{material.best}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Getting accurate pricing is just the start. Here is why over {SITE_CONFIG.customerCount}+ Charlotte
                homeowners have trusted us with their roof replacement.
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
                    <strong className="text-dark">Honest Assessments</strong>
                    <p className="text-gray">
                      We recommend repairs when they make sense - we do not push replacements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Premium Materials</strong>
                    <p className="text-gray">
                      CertainTeed, GAF, and Owens Corning certified installer with top-tier warranties.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Insurance Claim Experts</strong>
                    <p className="text-gray">
                      We help maximize your insurance coverage and handle the paperwork.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Flexible Financing</strong>
                    <p className="text-gray">
                      0% APR options and low monthly payments to fit any budget.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Charlotte NC roof replacement project by Best Roofing Now"
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

      {/* Project Showcase */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Recent Roof Replacements in Charlotte
            </h2>
            <p className="text-gray text-lg">
              See examples of our work throughout the Charlotte area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed roof replacement in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of roof replacement Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Residential roofing project Charlotte area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Owner's Honest Advice on Costs */}
      <section className="section bg-gradient-to-br from-primary/5 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                  <Lightbulb className="w-4 h-4" />
                  <span className="text-sm font-semibold">From the Owner</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Honest Advice on Roof Costs from James Turner
                </h2>
                <div className="space-y-4 text-gray">
                  <p>
                    &ldquo;I&apos;m going to be straight with you about roof costs in Charlotte. After replacing
                    over 500 roofs in this area, I&apos;ve seen every pricing trick in the book. Some companies
                    give you a low estimate to get the job, then pile on &lsquo;surprise&rsquo; charges halfway through.
                    Others push premium materials on homes that don&apos;t need them.&rdquo;
                  </p>
                  <p>
                    &ldquo;A customer in SouthPark once called us for a full replacement quote. When I got up
                    there, the roof only needed about $600 in repairs &mdash; two small flashing patches and a
                    few lifted shingles. I told her the truth instead of selling her a $15,000 roof she didn&apos;t
                    need. She&apos;s sent us twelve referrals since then. Honesty is the best business plan I&apos;ve
                    ever had.&rdquo;
                  </p>
                  <p className="font-medium text-primary">
                    &mdash; James Turner, Founder &amp; Owner
                  </p>
                </div>
                <div className="mt-6 bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-3 flex items-center gap-2">
                    <Quote className="w-5 h-5 text-primary" />
                    James&apos;s Red Flags When Getting Roof Quotes
                  </h3>
                  <ul className="space-y-3 text-sm text-gray">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">1.</span>
                      <span>Estimate is 40%+ below everyone else &mdash; they&apos;ll cut corners or add charges later</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">2.</span>
                      <span>Company has no local address or only showed up after a storm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">3.</span>
                      <span>They push you to sign today with &ldquo;this price expires tomorrow&rdquo; pressure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">4.</span>
                      <span>No written warranty details before you sign the contract</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">5.</span>
                      <span>They want full payment upfront before any work starts</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-2">
                <JamesTip tipId="cost-honesty" />
                <div className="mt-6 bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-3">What Most Charlotte Homeowners Choose</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray">Most popular material</span>
                      <span className="font-bold text-primary">Architectural Shingles</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray">Average project cost</span>
                      <span className="font-bold text-accent">$12,000 - $15,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray">Average project time</span>
                      <span className="font-bold text-primary">1-2 days</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray">Use insurance claims</span>
                      <span className="font-bold text-green-600">~40% of jobs</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray">Use financing</span>
                      <span className="font-bold text-green-600">~30% of jobs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roof Replacement Cost FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions about roof replacement costs in Charlotte NC.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
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
        slug="roof-replacement-cost-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roof-replacement-cost-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Roof Replacement Cost"

      />

      <CTASection
        title="Ready to Get Your Roof Replacement Estimate?"
        subtitle="Get a free, no-obligation quote with transparent pricing. Our team will assess your roof and provide honest recommendations tailored to your needs and budget."
      />
    </>
  );
}
