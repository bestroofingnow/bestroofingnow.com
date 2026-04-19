import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
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
  Wrench,
  Building2,
  Zap,
  Clock,
  Award,
  ThermometerSun,
  Wind,
  Flame,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { getRoofingContractorIdentity } from '@/lib/schema-helpers';
import { IMAGES } from '@/lib/images';
import EstimateButton from '@/components/estimate/EstimateButton';

export const metadata: Metadata = {
  title: 'Metal Roof Cost (2026) | Pricing Per Sq Ft, by Type & House Size',
  description:
    'Complete 2026 metal roof cost guide. Standing seam $10-$18/sqft, corrugated $5-$10, metal shingles $7-$14, copper $25-$40. Cost by house size, installation factors, ROI analysis. Free estimates in Charlotte NC.',
  keywords: [
    'metal roof cost',
    'metal roofing cost per square foot',
    'standing seam metal roof cost',
    'metal roof installation cost',
    'metal roof cost Charlotte NC',
    'how much does a metal roof cost',
    'metal roof price per square',
    'corrugated metal roof cost',
    'metal shingle roof cost',
    'stone coated metal roof cost',
    'copper roof cost',
    'metal roof cost per square foot 2026',
    'is a metal roof worth the cost',
    'metal roof vs shingles cost',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/metal-roof-cost`,
  },
  openGraph: {
    title: 'Metal Roof Cost (2026) | Pricing Per Sq Ft, by Type & House Size',
    description:
      'Complete 2026 metal roof cost guide with pricing by type, square footage, and house size. Standing seam, corrugated, metal shingles, and copper. Free estimates from BBB A+ rated Charlotte NC contractor.',
    url: `${SITE_CONFIG.url}/metal-roof-cost`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.metalRoof,
        width: 1200,
        height: 630,
        alt: 'Metal roof cost guide 2026 - standing seam and metal roofing pricing',
      },
    ],
  },
};

const metalRoofFAQs = [
  {
    question: 'How much does a metal roof cost in 2026?',
    answer:
      'Metal roof costs in 2026 range from $5 to $40 per square foot installed, depending on the type of metal. Corrugated metal is the most affordable at $5-$10 per square foot, metal shingles run $7-$14, standing seam costs $10-$18, stone-coated steel is $8-$15, and copper is the premium option at $25-$40 per square foot. For a typical 2,000 square foot home, expect to pay $15,000 to $30,000 for most metal roof types. Best Roofing Now provides free estimates with transparent pricing so you know exactly what your metal roof will cost.',
  },
  {
    question: 'How much does a standing seam metal roof cost per square foot?',
    answer:
      'A standing seam metal roof costs $10 to $18 per square foot installed in 2026, making it the most popular premium metal roofing option. For a 2,000 square foot home in Charlotte NC, that translates to roughly $20,000 to $36,000. The price varies based on metal gauge (24-gauge is standard, 22-gauge is premium), panel width, seam height, and whether you choose aluminum, galvalume, or zinc. Standing seam is the gold standard for metal roofing because of its concealed fastener system, which eliminates exposed screws that can leak over time.',
  },
  {
    question: 'Is a metal roof worth the extra cost over shingles?',
    answer:
      'A metal roof is worth the extra cost for most homeowners planning to stay in their home long-term. While metal costs roughly double what asphalt shingles do upfront, metal roofs last 40 to 70 years compared to 20 to 30 years for shingles. Over a 50-year period, you would need two shingle roofs but only one metal roof, making metal the cheaper long-term option. Metal roofs also reduce cooling costs by up to 25%, may qualify for 10-30% insurance discounts in North Carolina, and can increase home resale value by 1-6%. The break-even point is typically 15-20 years.',
  },
  {
    question: 'What is the cheapest type of metal roofing?',
    answer:
      'Corrugated metal roofing is the cheapest type at $5 to $10 per square foot installed. For a 1,500 square foot home, corrugated metal costs roughly $7,500 to $15,000. While it is the most affordable metal option, corrugated roofing has a more utilitarian look that works well for farmhouse, industrial, and rustic-style homes but may not suit traditional neighborhoods. Metal shingles at $7 to $14 per square foot offer a middle ground, providing the look of traditional shingles with metal durability at a lower cost than standing seam.',
  },
  {
    question: 'How much does metal roof installation cost for labor?',
    answer:
      'Metal roof installation labor typically accounts for 40-60% of the total project cost, running $4 to $10 per square foot depending on roof complexity. Simple gable roofs with minimal penetrations are at the lower end, while steep roofs with multiple dormers, valleys, and skylights are at the higher end. Standing seam installation requires specialized skills and costs more for labor than screw-down panels. In the Charlotte NC area, labor costs trend slightly above the national average due to strong demand for experienced metal roofing installers.',
  },
  {
    question: 'Does a metal roof increase home value?',
    answer:
      'Yes, a metal roof typically increases home value by 1-6% according to multiple real estate studies. In the Charlotte NC market, metal roofs are especially appealing to buyers because of their storm resistance, energy efficiency, and low maintenance. Homes with metal roofs tend to sell faster and at higher prices than comparable homes with aging shingle roofs. The return on investment for a metal roof averages 60-85% of the installation cost at resale, which is higher than many other home improvement projects.',
  },
  {
    question: 'How long does a metal roof last compared to shingles?',
    answer:
      'A metal roof lasts 40 to 70 years depending on the material type, compared to 20 to 30 years for architectural asphalt shingles and just 15 to 20 years for 3-tab shingles. Standing seam metal roofs with proper installation can last 50 years or more. Copper roofs have been documented lasting over 100 years. In Charlotte NC, metal roofs hold up exceptionally well against the heat, humidity, wind, and occasional hail that wear down shingle roofs much faster.',
  },
  {
    question: 'Can you install a metal roof over existing shingles?',
    answer:
      'Yes, in many cases a metal roof can be installed directly over existing asphalt shingles, which saves $1,000 to $3,000 on tear-off and disposal costs. However, this approach has limitations. The existing roof must be in reasonably flat condition without significant damage or moisture issues. Local building codes in Charlotte NC generally allow one overlay, and the additional weight is minimal since metal roofing is much lighter than shingles. Best Roofing Now inspects your existing roof to determine whether overlay is appropriate or if tear-off is recommended for the best long-term result.',
  },
  {
    question: 'Do metal roofs qualify for insurance discounts in North Carolina?',
    answer:
      'Yes, many insurance companies in North Carolina offer discounts of 10-30% on homeowners insurance premiums for metal roofs. Metal roofing earns Class A fire resistance rating (the highest available) and withstands wind speeds of 110-160 mph depending on the type and installation method. After recent hurricane seasons, insurers have increasingly rewarded impact-resistant and wind-rated roofing materials. Contact your insurance provider for your specific discount, and Best Roofing Now can provide documentation of your metal roof specifications to support your claim.',
  },
  {
    question: 'What factors affect metal roof cost the most?',
    answer:
      'The biggest factors affecting metal roof cost are the type of metal (corrugated vs. standing seam vs. copper), the gauge or thickness of the panels, roof size and complexity (pitch, dormers, valleys, penetrations), whether tear-off of existing roofing is needed, the number of stories on the home, and your geographic location. In Charlotte NC, costs are influenced by local labor rates, permit requirements, and the strong demand for metal roofing installers. Color and finish also affect price, with specialty Kynar finishes costing more than standard paint systems.',
  },
];

// Pricing schema for rich results
function MetalRoofPricingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Metal Roof Installation',
    description:
      'Professional metal roof installation in Charlotte NC including standing seam, corrugated, metal shingles, stone-coated steel, and copper roofing. BBB A+ rated with transparent pricing and free estimates.',
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
      name: 'Metal Roof Installation Pricing 2026',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Standing Seam Metal Roof',
          description: 'Premium standing seam metal roof installation with concealed fasteners and 50+ year lifespan',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '20000',
            maxPrice: '36000',
            unitText: 'per 2,000 sq ft roof',
          },
        },
        {
          '@type': 'Offer',
          name: 'Corrugated Metal Roof',
          description: 'Affordable corrugated metal roofing installation for residential and agricultural buildings',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '10000',
            maxPrice: '20000',
            unitText: 'per 2,000 sq ft roof',
          },
        },
        {
          '@type': 'Offer',
          name: 'Metal Shingle Roof',
          description: 'Metal shingle roofing that combines the look of traditional shingles with metal durability',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '14000',
            maxPrice: '28000',
            unitText: 'per 2,000 sq ft roof',
          },
        },
        {
          '@type': 'Offer',
          name: 'Free Metal Roof Consultation',
          description: 'Complimentary metal roof consultation with detailed cost estimate',
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

export default function MetalRoofCostPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Costs', url: `${SITE_CONFIG.url}/charlotte-roofing-costs-2026` },
          { name: 'Metal Roof Cost', url: `${SITE_CONFIG.url}/metal-roof-cost` },
        ]}
      />
      <FAQSchema faqs={metalRoofFAQs} />
      <MetalRoofPricingSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/metal-roof-cost`}
        pageName="Metal Roof Cost Guide 2026"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does a metal roof cost?',
            answer: 'Metal roof costs range from $5-$40 per square foot installed depending on type. Corrugated is $5-$10/sqft, metal shingles $7-$14, standing seam $10-$18, stone-coated steel $8-$15, and copper $25-$40. For a typical 2,000 sq ft home, expect $15,000-$30,000. Best Roofing Now offers free estimates.',
            speakableAnswer: 'Metal roofs cost $5 to $40 per square foot depending on type. A typical 2,000 square foot home costs $15,000 to $30,000. Call Best Roofing Now at 704-605-6047 for a free estimate.',
          },
          {
            question: 'How much does a standing seam metal roof cost?',
            answer: 'Standing seam metal roofs cost $10-$18 per square foot installed. For a 2,000 sq ft home in Charlotte NC, that is $20,000-$36,000. Standing seam is the most popular premium metal roofing option due to its concealed fasteners and 50+ year lifespan.',
            speakableAnswer: 'Standing seam metal roofs cost $10 to $18 per square foot. A typical 2,000 square foot home costs $20,000 to $36,000. Call 704-605-6047 for a free estimate.',
          },
          {
            question: 'Is a metal roof worth the cost?',
            answer: 'Yes, metal roofs are worth it for long-term homeowners. They last 40-70 years vs 20-30 for shingles, reduce cooling costs by 25%, qualify for 10-30% insurance discounts in NC, and increase home value by 1-6%. The break-even vs shingles is 15-20 years.',
            speakableAnswer: 'Yes, metal roofs last 40 to 70 years and save money long-term. They reduce cooling costs by 25% and may lower insurance 10 to 30 percent. Call Best Roofing Now for a free consultation.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.metalRoof}
            alt="Metal roof cost guide 2026 - standing seam metal roofing installation"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Roofing Costs', href: '/charlotte-roofing-costs-2026' },
              { label: 'Metal Roof Cost' },
            ]}
            className="mb-6 text-white/70"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-semibold">2026 Metal Roof Pricing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Metal Roof Cost <br className="hidden md:block" />
              <span className="text-accent-light">Complete 2026 Pricing Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              How Much Does a Metal Roof Really Cost? Pricing by Type, Size &amp; Installation
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Metal roofing is the fastest-growing roofing choice in Charlotte NC and across the Southeast.
              Whether you are considering standing seam, corrugated, metal shingles, or stone-coated steel,
              this guide breaks down every cost factor so you can budget accurately and make an informed
              decision. Pricing is based on 2026 Charlotte-area rates from a BBB A+ rated contractor with
              over {SITE_CONFIG.customerCount} completed projects.
            </p>

            {/* Large Price Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl">
              <div className="text-center">
                <p className="text-lg text-white/80 mb-1">Metal Roof Cost Range (Installed)</p>
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  $5 &ndash; $40<span className="text-2xl md:text-3xl">/sq ft</span>
                </div>
                <p className="text-lg text-white/80">
                  From corrugated to copper &mdash; all types included
                </p>
                <div className="flex items-center justify-center gap-4 mt-4 text-sm text-white/70">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Free Estimates
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    40-70 Year Lifespan
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Insurance Discounts
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <EstimateButton variant="accent" size="lg">
                Get Your Free Metal Roof Estimate
              </EstimateButton>
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
                {SITE_CONFIG.googleRating} Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB {SITE_CONFIG.bbbRating} Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                {SITE_CONFIG.customerCount}+ Projects Completed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cost by Metal Type */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Metal Roof Cost by Type &mdash; Per Square Foot Pricing
            </h2>
            <p className="text-gray text-lg">
              Not all metal roofs are created equal. The type of metal roofing you choose is the single
              biggest factor in your total cost. Each type offers a different balance of price, appearance,
              durability, and performance. Here is what each type costs installed in the Charlotte NC area
              in 2026, including materials, labor, underlayment, flashing, and standard warranties.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Metal Roof Type</th>
                      <th className="px-6 py-4 text-left font-semibold">Cost/Sq Ft</th>
                      <th className="px-6 py-4 text-left font-semibold">Lifespan</th>
                      <th className="px-6 py-4 text-left font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Corrugated Metal</td>
                      <td className="px-6 py-4 font-semibold text-accent">$5 &ndash; $10</td>
                      <td className="px-6 py-4 text-gray">30-45 years</td>
                      <td className="px-6 py-4 text-gray">Budget-friendly, farmhouse, rustic style</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">Metal Shingles</td>
                      <td className="px-6 py-4 font-semibold text-accent">$7 &ndash; $14</td>
                      <td className="px-6 py-4 text-gray">40-60 years</td>
                      <td className="px-6 py-4 text-gray">Traditional look with metal durability</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Stone-Coated Steel</td>
                      <td className="px-6 py-4 font-semibold text-accent">$8 &ndash; $15</td>
                      <td className="px-6 py-4 text-gray">40-60 years</td>
                      <td className="px-6 py-4 text-gray">Tile or shake look, HOA-compliant</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">Standing Seam</td>
                      <td className="px-6 py-4 font-semibold text-accent">$10 &ndash; $18</td>
                      <td className="px-6 py-4 text-gray">50-70 years</td>
                      <td className="px-6 py-4 text-gray">Premium, modern, best performance</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Copper</td>
                      <td className="px-6 py-4 font-semibold text-accent">$25 &ndash; $40</td>
                      <td className="px-6 py-4 text-gray">80-100+ years</td>
                      <td className="px-6 py-4 text-gray">Luxury, historic, architectural accent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-sm text-gray">
                <strong>Note:</strong> Prices reflect 2026 Charlotte NC area installed costs including materials,
                labor, underlayment, and flashing. Actual costs vary based on roof size, complexity, and specific
                product selection. <Link href="/contact" className="text-primary font-semibold hover:underline">Request a free estimate</Link> for
                your exact pricing.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost by House Size */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Metal Roof Cost by House Size
            </h2>
            <p className="text-gray text-lg">
              Your home&apos;s size is the next biggest cost driver after material type. Below is what Charlotte
              homeowners typically pay for a complete metal roof installation by house size. These prices include
              full tear-off of existing roofing, new underlayment, all flashing and trim, and standard manufacturer
              warranties. Prices assume a moderately complex roof with average pitch. Steeper roofs, additional
              stories, and complex layouts with many dormers or valleys will add 10-25% to these base prices.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-4 text-left font-semibold">Home Size</th>
                      <th className="px-4 py-4 text-left font-semibold">Corrugated</th>
                      <th className="px-4 py-4 text-left font-semibold">Metal Shingles</th>
                      <th className="px-4 py-4 text-left font-semibold">Standing Seam</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white">
                      <td className="px-4 py-4 font-medium text-dark">1,000 sq ft</td>
                      <td className="px-4 py-4 text-gray">$5,000 &ndash; $10,000</td>
                      <td className="px-4 py-4 text-gray">$7,000 &ndash; $14,000</td>
                      <td className="px-4 py-4 text-gray">$10,000 &ndash; $18,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-4 font-medium text-dark">1,500 sq ft</td>
                      <td className="px-4 py-4 text-gray">$7,500 &ndash; $15,000</td>
                      <td className="px-4 py-4 text-gray">$10,500 &ndash; $21,000</td>
                      <td className="px-4 py-4 text-gray">$15,000 &ndash; $27,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-4 font-medium text-dark">2,000 sq ft</td>
                      <td className="px-4 py-4 font-semibold text-accent">$10,000 &ndash; $20,000</td>
                      <td className="px-4 py-4 font-semibold text-accent">$14,000 &ndash; $28,000</td>
                      <td className="px-4 py-4 font-semibold text-accent">$20,000 &ndash; $36,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-4 font-medium text-dark">2,500 sq ft</td>
                      <td className="px-4 py-4 text-gray">$12,500 &ndash; $25,000</td>
                      <td className="px-4 py-4 text-gray">$17,500 &ndash; $35,000</td>
                      <td className="px-4 py-4 text-gray">$25,000 &ndash; $45,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-4 font-medium text-dark">3,000 sq ft</td>
                      <td className="px-4 py-4 text-gray">$15,000 &ndash; $30,000</td>
                      <td className="px-4 py-4 text-gray">$21,000 &ndash; $42,000</td>
                      <td className="px-4 py-4 text-gray">$30,000 &ndash; $54,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-sm text-gray">
                <strong>Most popular:</strong> The highlighted 2,000 sq ft row represents the average Charlotte-area
                home. Prices include tear-off, underlayment, flashing, trim, and standard warranties.{' '}
                <Link href="/contact" className="text-primary font-semibold hover:underline">Get your custom quote</Link>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Cost Factors */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Affects Metal Roof Installation Cost?
            </h2>
            <p className="text-gray text-lg">
              Beyond the type of metal and roof size, several factors can significantly impact your total
              installation cost. Understanding these variables helps you anticipate your actual price and
              avoid surprises. Here are the key factors that affect metal roof cost in the Charlotte NC area.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark">Roof Pitch &amp; Steepness</h3>
                  <p className="text-sm text-gray">+10-25% for steep roofs</p>
                </div>
              </div>
              <p className="text-gray text-sm">
                Roofs with a pitch above 6:12 require additional safety equipment, specialized staging, and
                more installation time. Steep roofs cost 10-25% more than standard-pitch roofs. Most Charlotte
                homes have a 4:12 to 8:12 pitch.
              </p>
            </div>

            <div className="bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark">Dormers, Valleys &amp; Penetrations</h3>
                  <p className="text-sm text-gray">+15-30% for complex roofs</p>
                </div>
              </div>
              <p className="text-gray text-sm">
                Each dormer, valley, skylight, chimney, or vent requires custom flashing and careful
                fitting. Complex roof layouts with many penetrations cost significantly more than simple
                gable or hip roofs due to additional labor and materials.
              </p>
            </div>

            <div className="bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark">Tear-Off vs. Overlay</h3>
                  <p className="text-sm text-gray">Save $1,000-$3,000 with overlay</p>
                </div>
              </div>
              <p className="text-gray text-sm">
                Installing metal over existing shingles saves on tear-off and disposal costs. However,
                tear-off is recommended when the existing roof has moisture damage, uneven surfaces, or
                when local code requires it. Best Roofing Now inspects your existing roof to recommend
                the best approach.
              </p>
            </div>

            <div className="bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark">Number of Stories</h3>
                  <p className="text-sm text-gray">+5-15% per additional story</p>
                </div>
              </div>
              <p className="text-gray text-sm">
                Multi-story homes require additional scaffolding, material handling equipment, and safety
                measures. Two-story homes typically add 5-10% to installation costs, and three-story homes
                can add 10-15% compared to single-story homes.
              </p>
            </div>

            <div className="bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark">Labor vs. Materials Split</h3>
                  <p className="text-sm text-gray">40-60% labor, 40-60% materials</p>
                </div>
              </div>
              <p className="text-gray text-sm">
                Metal roofing installation is more labor-intensive than shingles, requiring specialized
                skills for panel cutting, seaming, and flashing work. Labor typically runs $4-$10 per
                square foot. Standing seam requires more skilled labor than screw-down panels, reflected
                in higher labor costs.
              </p>
            </div>

            <div className="bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Ruler className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark">Metal Gauge &amp; Finish</h3>
                  <p className="text-sm text-gray">Thicker gauge = higher cost</p>
                </div>
              </div>
              <p className="text-gray text-sm">
                Metal roofing comes in various gauges (thicknesses). Standard 29-gauge is the most
                affordable, 26-gauge is mid-range, and 24-gauge or 22-gauge panels are premium. Kynar/PVDF
                paint finishes cost more but resist fading for 30+ years compared to standard paint systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <CTASection
        title="Ready for Your Metal Roof Estimate?"
        subtitle="Get a free, no-obligation metal roof quote with transparent pricing. We will assess your roof, explain your options, and provide an itemized estimate with no hidden fees."
      />

      {/* Types of Metal Roofing Comparison */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Layers className="w-4 h-4" />
                <span className="text-sm font-semibold">Metal Roofing Types</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Types of Metal Roofing Compared
              </h2>
              <p className="text-gray text-lg mb-6">
                Choosing the right type of metal roofing depends on your budget, aesthetic preferences, and
                performance priorities. Each type has distinct advantages that make it the best choice for
                specific situations. Here is a detailed comparison to help you decide which metal roof
                is right for your Charlotte home.
              </p>

              <div className="space-y-4">
                <div className="bg-light rounded-lg p-5">
                  <h3 className="font-bold text-dark mb-2">Standing Seam &mdash; The Gold Standard</h3>
                  <p className="text-gray text-sm mb-2">
                    Standing seam panels feature raised seams that interlock without exposed fasteners,
                    creating a sleek modern look and the most weatherproof metal roof available. The
                    concealed fastener system eliminates the most common failure point on metal roofs.
                    Available in steel, aluminum, zinc, and copper.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded">$10-$18/sqft</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">50-70 year lifespan</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">Wind rated 140+ mph</span>
                  </div>
                </div>

                <div className="bg-light rounded-lg p-5">
                  <h3 className="font-bold text-dark mb-2">Corrugated Metal &mdash; Best Budget Option</h3>
                  <p className="text-gray text-sm mb-2">
                    Corrugated panels use exposed fasteners and a rippled profile that provides excellent
                    water shedding. This is the most affordable metal roofing option and installs quickly.
                    Best suited for farmhouse, modern industrial, and rustic home styles. Available
                    in galvanized steel, galvalume, and aluminum.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded">$5-$10/sqft</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">30-45 year lifespan</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">Fastest install</span>
                  </div>
                </div>

                <div className="bg-light rounded-lg p-5">
                  <h3 className="font-bold text-dark mb-2">Metal Shingles &mdash; Traditional Look, Metal Durability</h3>
                  <p className="text-gray text-sm mb-2">
                    Metal shingles are stamped to replicate the appearance of asphalt shingles, cedar
                    shakes, or slate tiles while delivering metal performance. They are the easiest metal
                    roof to get approved by HOAs because they look like traditional roofing from the street.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded">$7-$14/sqft</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">40-60 year lifespan</span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">HOA friendly</span>
                  </div>
                </div>

                <div className="bg-light rounded-lg p-5">
                  <h3 className="font-bold text-dark mb-2">Stone-Coated Steel &mdash; Best of Both Worlds</h3>
                  <p className="text-gray text-sm mb-2">
                    Steel panels coated with stone granules that mimic the look of clay tile, wood shake,
                    or slate. The stone coating also dampens rain noise, which addresses a common concern
                    about metal roofing. Excellent impact resistance with Class 4 hail rating.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded">$8-$15/sqft</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">40-60 year lifespan</span>
                    <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded">Class 4 hail rated</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <SEOImage
                src={IMAGES.hero.metalRoof}
                alt="Types of metal roofing - standing seam metal roof installation in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Metal Roof Experts</p>
                    <p className="text-sm text-gray">All Types &amp; Styles</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 bg-light rounded-xl p-6">
                <h3 className="font-bold text-dark mb-3">Explore Our Metal Roofing Pages</h3>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/standing-seam-metal-roof-charlotte-nc"
                    className="inline-flex items-center gap-1 bg-white px-3 py-2 rounded-lg text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                  >
                    Standing Seam <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="/metal-roofing-charlotte-nc"
                    className="inline-flex items-center gap-1 bg-white px-3 py-2 rounded-lg text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                  >
                    Metal Roofing Charlotte <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="/metal-roof-vs-shingles-charlotte-nc"
                    className="inline-flex items-center gap-1 bg-white px-3 py-2 rounded-lg text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                  >
                    Metal vs Shingles <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="/metal-roofing-services"
                    className="inline-flex items-center gap-1 bg-white px-3 py-2 rounded-lg text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                  >
                    Metal Roofing Services <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metal Roof Advantages in Charlotte NC */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Metal Roofing Makes Sense in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              Charlotte&apos;s climate and weather patterns make metal roofing an especially smart investment.
              From severe thunderstorms and occasional hurricanes to intense summer heat, metal roofs
              are engineered to handle exactly the conditions Charlotte homeowners face year after year.
              Here are the key advantages that make metal roofing the fastest-growing roofing choice
              in the Charlotte metro area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-blue-500">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Wind className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">Storm &amp; Hurricane Resistance</h3>
              <p className="text-2xl font-bold text-blue-600 mb-3">110-160 MPH</p>
              <p className="text-gray text-sm">
                Metal roofs are rated for wind speeds of 110-160 mph depending on type and installation
                method. Standing seam metal roofs withstand the strongest winds in Charlotte&apos;s severe
                storm season. Unlike shingles that can blow off in sections, metal panels interlock to
                create a unified wind-resistant barrier.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">Insurance Savings</h3>
              <p className="text-2xl font-bold text-green-600 mb-3">10-30% Discount</p>
              <p className="text-gray text-sm">
                Many North Carolina insurance companies offer 10-30% premium discounts for metal roofs
                due to their superior fire, wind, and impact resistance. On a $2,000/year premium, that
                is $200-$600 in annual savings that compounds over the life of the roof, potentially
                saving $8,000-$24,000 over 40 years.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <ThermometerSun className="w-6 h-6 text-orange-700" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">Energy Efficiency</h3>
              <p className="text-2xl font-bold text-orange-600 mb-3">25% Cooling Savings</p>
              <p className="text-gray text-sm">
                Metal roofs with reflective coatings deflect solar radiation, reducing attic temperatures
                by up to 40 degrees in Charlotte&apos;s hot summers. This translates to 25% lower cooling
                costs, which is significant when Charlotte temperatures regularly exceed 95 degrees from
                June through September. Light-colored metal roofs perform best.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">Exceptional Longevity</h3>
              <p className="text-2xl font-bold text-purple-600 mb-3">40-70 Years</p>
              <p className="text-gray text-sm">
                Metal roofs last 40-70 years with minimal maintenance, compared to 20-30 years for
                asphalt shingles. In Charlotte&apos;s demanding climate, shingle roofs often fail at the
                lower end of their lifespan due to heat, humidity, and storms. A metal roof installed
                today could easily last until 2066-2096.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">Class A Fire Resistance</h3>
              <p className="text-2xl font-bold text-red-600 mb-3">Highest Rating</p>
              <p className="text-gray text-sm">
                Metal roofs earn the highest possible fire resistance rating (Class A), meaning they
                will not ignite from external fire sources like embers or radiant heat. This is
                particularly important in Charlotte&apos;s wooded neighborhoods where wildfire risk,
                though low, exists during dry seasons.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-teal-500">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">Low Maintenance</h3>
              <p className="text-2xl font-bold text-teal-600 mb-3">Near Zero</p>
              <p className="text-gray text-sm">
                Metal roofs require virtually no maintenance beyond occasional gutter cleaning and
                visual inspections. No granule loss, no moss or algae growth (a common issue on
                Charlotte shingle roofs due to humidity), no cracking, and no curling. This saves
                homeowners hundreds in annual maintenance costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Is a Metal Roof Worth It? ROI Analysis */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <SEOImage
                src={IMAGES.hero.hero3}
                alt="Metal roof ROI analysis - is a metal roof worth the cost in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-dark">{SITE_CONFIG.googleRating} Rating</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Calculator className="w-4 h-4" />
                <span className="text-sm font-semibold">ROI Analysis</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Is a Metal Roof Worth the Cost?
              </h2>
              <p className="text-gray text-lg mb-6">
                The upfront cost of a metal roof is higher than shingles, but the total cost of ownership
                tells a different story. Here is a realistic 50-year cost comparison for a typical 2,000
                square foot Charlotte home, showing why metal roofing is the smarter long-term investment.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-light rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-dark">Standing Seam Metal Roof (50 years)</h3>
                    <span className="text-lg font-bold text-green-600">~$28,000</span>
                  </div>
                  <ul className="text-gray text-sm space-y-1">
                    <li>One installation: $25,000-$30,000</li>
                    <li>Maintenance over 50 years: ~$500</li>
                    <li>Energy savings: -$6,000 to -$12,000</li>
                    <li>Insurance savings: -$5,000 to -$15,000</li>
                  </ul>
                </div>

                <div className="bg-light rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-dark">Asphalt Shingles (50 years)</h3>
                    <span className="text-lg font-bold text-red-600">~$35,000+</span>
                  </div>
                  <ul className="text-gray text-sm space-y-1">
                    <li>Two installations: $24,000-$30,000 (at current prices)</li>
                    <li>Maintenance &amp; repairs over 50 years: ~$3,000-$5,000</li>
                    <li>No energy reflection benefit</li>
                    <li>No insurance discount</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="font-bold text-green-800 mb-1">
                  Metal Roof 50-Year Savings: $7,000 &ndash; $20,000+
                </p>
                <p className="text-green-700 text-sm">
                  When you factor in avoiding a second roof replacement, energy savings, insurance discounts,
                  and near-zero maintenance, a metal roof typically costs less over its lifetime than two
                  rounds of asphalt shingles. The break-even point is typically 15-20 years.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <EstimateButton variant="primary" size="lg">
                  Get Your Metal Roof Quote
                </EstimateButton>
                <Button
                  href={`tel:${SITE_CONFIG.phoneClean}`}
                  variant="outline"
                  size="lg"
                  icon={<Phone className="w-5 h-5" aria-hidden="true" />}
                >
                  Call {SITE_CONFIG.phone}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte-Specific Considerations */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-semibold">Local Considerations</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Metal Roof Considerations for Charlotte NC Homeowners
              </h2>
              <p className="text-gray text-lg">
                Charlotte has specific factors that affect metal roof selection and cost. From HOA regulations
                to color choices optimized for Southern heat, here is what Charlotte-area homeowners need
                to know before investing in a metal roof.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  HOA Rules &amp; Approval
                </h3>
                <p className="text-gray text-sm mb-3">
                  Many Charlotte neighborhoods have HOAs that regulate roofing materials and colors.
                  Standing seam may face restrictions in traditional neighborhoods, but metal shingles
                  and stone-coated steel are almost always approved because they replicate the look of
                  conventional materials. Best Roofing Now helps navigate HOA approval processes and
                  can provide material samples for your architectural review committee.
                </p>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Metal shingles: Approved by most HOAs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Stone-coated steel: HOA-friendly tile and shake looks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Standing seam: Check with HOA first; some restrict</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                  <ThermometerSun className="w-5 h-5 text-orange-500" />
                  Color Choices for Southern Heat
                </h3>
                <p className="text-gray text-sm mb-3">
                  In Charlotte&apos;s hot climate, metal roof color significantly impacts energy efficiency.
                  Light colors (light gray, white, tan, light blue) reflect the most solar radiation and
                  provide the greatest cooling benefit. Darker colors absorb more heat but can still
                  outperform shingles when paired with reflective coatings and proper ventilation.
                </p>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Light colors: Best energy efficiency for Charlotte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Cool-metal coatings: Reflect infrared even on dark colors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>ENERGY STAR rated colors: Maximum cooling savings</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                  <Wind className="w-5 h-5 text-blue-500" />
                  Storm Season Preparedness
                </h3>
                <p className="text-gray text-sm mb-3">
                  Charlotte&apos;s severe storm season runs from April through October, with the highest risk
                  of damaging winds, hail, and heavy rain in June through August. Installing a metal roof
                  before storm season provides maximum protection and can prevent the costly emergency
                  repairs that follow major weather events.
                </p>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Best timing: Fall/winter install before spring storms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Impact resistance: Class 4 hail rating available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Wind uplift: Metal panels resist blow-off better than shingles</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  Charlotte Permit &amp; Code Requirements
                </h3>
                <p className="text-gray text-sm mb-3">
                  Mecklenburg County requires building permits for roof replacements. Metal roofing
                  installations must comply with NC Building Code wind load requirements, which are
                  based on Charlotte&apos;s wind zone classification. Best Roofing Now handles all permit
                  applications and ensures your installation meets or exceeds code requirements.
                </p>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>We handle all Mecklenburg County permits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>NC wind load compliance guaranteed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Final inspection coordination included</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Best Roofing Now */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Trusts Best Roofing Now for Metal Roofing
            </h2>
            <p className="text-gray text-lg">
              Over {SITE_CONFIG.customerCount} completed projects and a perfect 5.0 Google rating. Here is what sets us apart for metal roof installations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Transparent Metal Roof Pricing</h3>
              <p className="text-gray text-sm">Itemized estimates with material specs, labor costs, and no hidden fees. The price we quote is the price you pay.</p>
            </div>
            <div className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Certified Metal Installers</h3>
              <p className="text-gray text-sm">Factory-trained installers experienced with standing seam, corrugated, and metal shingle systems.</p>
            </div>
            <div className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Manufacturer Warranties</h3>
              <p className="text-gray text-sm">Full manufacturer-backed warranties on materials and workmanship. Your investment is protected for decades.</p>
            </div>
            <div className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Flexible Financing</h3>
              <p className="text-gray text-sm">0% APR for 12 months and low monthly payment plans make metal roofing affordable for any budget.</p>
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
                Metal Roof Cost FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions about metal roof costs, pricing, and value.
              </p>
            </div>
            <div className="space-y-4">
              {metalRoofFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Explore More Metal Roofing Resources
            </h2>
            <p className="text-gray">
              Dive deeper into metal roofing topics, local services, and cost comparisons.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/metal-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Metal Roofing Charlotte NC <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/standing-seam-metal-roof-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Standing Seam Metal Roof <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/metal-roof-vs-shingles-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Metal Roof vs Shingles <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/metal-roofing-services"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Metal Roofing Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/charlotte-roofing-costs-2026"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              All Roofing Costs Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roof-replacement-cost-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Roof Replacement Costs <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/metal-roofing-huntersville-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Metal Roofing Huntersville <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/metal-roofing-lake-norman-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Metal Roofing Lake Norman <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/metal-roofing-mooresville-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Metal Roofing Mooresville <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="guide"
        city="Charlotte"
        slug="metal-roof-cost"
        count={4}
        title="Recent Metal Roofing Projects in Charlotte, NC"
        subtitle="Browse completed metal roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/metal-roof-cost`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready to Get Your Metal Roof Estimate?"
        subtitle="Get a free, no-obligation metal roof quote with transparent pricing. Our team will assess your roof, explain your options, and provide an itemized estimate with no hidden fees. No pressure, no surprises."
      />
    </>
  );
}
