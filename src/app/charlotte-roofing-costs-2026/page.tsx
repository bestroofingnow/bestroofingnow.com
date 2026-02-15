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
  Wrench,
  Building2,
  Lightbulb,
  Zap,
  Clock,
  FileText,
  Award,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { FAQ } from '@/components/sections/FAQ';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
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
  title: 'Charlotte NC Roofing Costs & Pricing Guide (2026) | What to Expect',
  description:
    'Complete 2026 Charlotte NC roofing cost guide. Roof repair $150-$5,000+, shingle replacement $8,500-$15,000, metal roofing $15,000-$30,000. Free estimates with transparent pricing from BBB A+ rated contractor.',
  keywords: [
    'roofing costs Charlotte NC 2026',
    'Charlotte roofing prices',
    'roof replacement cost Charlotte NC',
    'roof repair cost Charlotte',
    'metal roofing cost Charlotte NC',
    'commercial roofing cost Charlotte',
    'Charlotte roofing pricing guide',
    'how much does a new roof cost Charlotte NC',
    'roofing estimate Charlotte NC',
    'Charlotte NC roofer prices 2026',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/charlotte-roofing-costs-2026`,
  },
  openGraph: {
    title: 'Charlotte NC Roofing Costs & Pricing Guide (2026) | What to Expect',
    description:
      'Complete 2026 roofing cost guide for Charlotte NC homeowners and businesses. Repair, replacement, and material pricing with free estimates from Best Roofing Now.',
    url: `${SITE_CONFIG.url}/charlotte-roofing-costs-2026`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Charlotte NC roofing costs and pricing guide 2026 - Best Roofing Now',
      },
    ],
  },
};

const costFAQs = [
  {
    question: 'How much does a new roof cost in Charlotte NC in 2026?',
    answer:
      'A new roof in Charlotte NC typically costs between $8,500 and $15,000 for a standard asphalt shingle replacement on an average-sized home in 2026. Metal roofing ranges from $15,000 to $30,000, while premium materials like slate, cedar shake, or tile can run $20,000 to $45,000 or more. Your actual cost depends on roof size, material choice, pitch, complexity, and whether tear-off is needed. Best Roofing Now provides free, detailed estimates so you know exactly what your project will cost before any work begins.',
  },
  {
    question: 'What is the cheapest roofing option in Charlotte?',
    answer:
      'The most affordable roofing option in Charlotte is 3-tab asphalt shingles at $3.50 to $5.50 per square foot installed, or roughly $5,500 to $8,000 for a 1,000 square foot roof. However, most Charlotte contractors recommend architectural shingles at $4.50 to $7.00 per square foot because they last 25 to 30 years compared to just 15 to 20 years for 3-tab shingles, offer better wind resistance for Charlotte storms, and provide a more attractive appearance that can increase your home value.',
  },
  {
    question: 'Does insurance cover roofing costs in Charlotte NC?',
    answer:
      'Homeowners insurance typically covers roofing costs in Charlotte when damage is caused by a covered event such as storms, hail, wind, or fallen trees. Charlotte experiences significant storm activity, so many roof repairs and replacements qualify for at least partial insurance coverage. Best Roofing Now works directly with insurance companies, helps document damage with photos and detailed reports, and assists with the entire claims process to maximize your coverage and minimize out-of-pocket costs.',
  },
  {
    question: 'How much does roof repair cost in Charlotte?',
    answer:
      'Roof repair costs in Charlotte range widely depending on the scope of work. Minor repairs like patching a small leak or replacing a few shingles cost $150 to $500. Moderate repairs involving flashing, valley work, or multiple shingle areas run $500 to $1,500. Major repairs requiring structural work, large section replacement, or emergency service can cost $1,500 to $5,000 or more. Best Roofing Now provides free inspections and honest assessments so you only pay for what you actually need.',
  },
  {
    question: 'Is a metal roof worth the cost in Charlotte NC?',
    answer:
      'A metal roof is often worth the higher upfront cost for Charlotte homeowners planning to stay in their home long-term. While metal roofing costs $15,000 to $30,000 compared to $8,500 to $15,000 for shingles, metal roofs last 40 to 70 years versus 20 to 30 years for shingles. They also offer superior wind resistance up to 140 mph, significant energy savings by reflecting heat, virtually no maintenance, and can increase your home resale value. Over a 50-year period, a metal roof often costs less than two shingle replacements.',
  },
  {
    question: 'How much do gutters cost in Charlotte NC?',
    answer:
      'Gutter installation in Charlotte typically costs $1,200 to $3,500 for a standard home, or roughly $6 to $15 per linear foot depending on the material. Aluminum gutters are the most popular and affordable at $6 to $12 per linear foot. Copper gutters are premium at $15 to $30 per linear foot. Gutter guards add $7 to $15 per linear foot. Gutter repair for existing systems typically runs $150 to $500. Best Roofing Now offers gutter services alongside roofing work, often at bundled pricing.',
  },
  {
    question: 'What factors affect roofing costs the most in Charlotte?',
    answer:
      'The biggest factors affecting roofing costs in Charlotte are roof size (measured in squares of 100 square feet), material choice (3-tab shingles versus architectural versus metal versus premium), roof pitch and steepness (steeper roofs require more labor and safety equipment), complexity (dormers, valleys, skylights, multiple levels), whether tear-off of old roofing is needed versus overlay, and current market conditions for materials and labor. Getting multiple written estimates is the best way to understand your specific costs.',
  },
  {
    question: 'When is the best time to get roofing work done in Charlotte to save money?',
    answer:
      'The most cost-effective time for roofing work in Charlotte is typically late fall through early spring (November through March) when contractor demand is lower and scheduling is more flexible. Spring and summer are peak season, and emergency work after storms commands premium pricing. However, do not wait if your roof has active leaks or significant damage, as delaying repairs often leads to more expensive interior water damage. Best Roofing Now offers competitive pricing year-round and flexible financing options.',
  },
];

// Pricing schema for rich results
function PricingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Roofing Services in Charlotte NC',
    description:
      'Complete roofing services in Charlotte NC including repair, replacement, and installation. BBB A+ rated with transparent pricing and free estimates.',
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
      name: 'Charlotte NC Roofing Pricing 2026',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Roof Repair',
          description: 'Minor to major roof repairs including leak repair, shingle replacement, and flashing work',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '150',
            maxPrice: '5000',
            unitText: 'per project',
          },
        },
        {
          '@type': 'Offer',
          name: 'Asphalt Shingle Roof Replacement',
          description: 'Complete roof replacement with 3-tab or architectural asphalt shingles',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '8500',
            maxPrice: '15000',
            unitText: 'per project',
          },
        },
        {
          '@type': 'Offer',
          name: 'Metal Roof Installation',
          description: 'Premium metal roofing installation including standing seam options',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '15000',
            maxPrice: '30000',
            unitText: 'per project',
          },
        },
        {
          '@type': 'Offer',
          name: 'Free Roof Inspection',
          description: 'Complimentary roof inspection and detailed estimate',
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

export default function CharlotteRoofingCosts2026Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Guides', url: `${SITE_CONFIG.url}/guides` },
          { name: 'Roofing Costs 2026', url: `${SITE_CONFIG.url}/charlotte-roofing-costs-2026` },
        ]}
      />
      <FAQSchema faqs={costFAQs} />
      <PricingSchema />
      <LocalBusinessSchema includeRating={false} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/charlotte-roofing-costs-2026`}
        pageName="Charlotte NC Roofing Costs & Pricing Guide 2026"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does roofing cost in Charlotte NC in 2026?',
            answer: 'Roofing costs in Charlotte NC in 2026 range from $150 for minor repairs to $45,000+ for premium roof replacements. Asphalt shingle replacement averages $8,500-$15,000, metal roofing $15,000-$30,000. Best Roofing Now provides free estimates with transparent pricing.',
            speakableAnswer: 'Roofing costs in Charlotte range from $150 for repairs to $45,000 for premium materials. Average shingle replacement is $8,500-$15,000. Call Best Roofing Now at 704-605-6047 for a free estimate.',
          },
          {
            question: 'What is the average cost to replace a roof in Charlotte NC?',
            answer: 'The average cost to replace a roof in Charlotte NC is $8,500-$15,000 for asphalt shingles on a typical 2,000 square foot home. Metal roofing costs $18,000-$28,000 for the same size. Best Roofing Now offers free estimates and financing options.',
            speakableAnswer: 'Average roof replacement in Charlotte costs $8,500-$15,000 for shingles or $18,000-$28,000 for metal. Call 704-605-6047 for a free estimate.',
          },
          {
            question: 'How much does roof repair cost in Charlotte NC?',
            answer: 'Roof repair in Charlotte NC costs $150-$500 for minor fixes, $500-$1,500 for moderate repairs, and $1,500-$5,000+ for major structural work. Best Roofing Now provides free inspections and honest pricing with no hidden fees.',
            speakableAnswer: 'Roof repair in Charlotte costs $150-$500 for minor fixes up to $5,000+ for major repairs. Call Best Roofing Now at 704-605-6047 for a free inspection.',
          },
          {
            question: 'What roofing materials are most popular in Charlotte NC?',
            answer: 'Architectural asphalt shingles are the most popular roofing material in Charlotte NC, chosen by most homeowners for their balance of cost ($4.50-$7.00/sq ft), durability (25-30 years), and appearance. Standing seam metal is the fastest-growing choice for long-term value.',
            speakableAnswer: 'Architectural shingles are most popular in Charlotte at $4.50-$7 per square foot. Metal roofing is fastest growing. Call Best Roofing Now for material advice.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Charlotte NC roofing costs and pricing guide 2026 - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Guides', href: '/guides' },
              { label: 'Roofing Costs 2026' },
            ]}
            className="mb-6 text-white/70"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-semibold">2026 Comprehensive Pricing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Charlotte NC Roofing Costs <br className="hidden md:block" />
              <span className="text-accent-light">&amp; Pricing Guide (2026)</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              What Every Charlotte Homeowner and Business Owner Should Expect to Pay
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Whether you need a small repair or a complete roof replacement, understanding Charlotte roofing
              costs in 2026 helps you budget accurately and avoid overpaying. This guide covers every service
              type, material option, and price range based on real local pricing from a BBB A+ rated contractor
              with over {SITE_CONFIG.customerCount} completed projects.
            </p>

            {/* Large Price Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl">
              <div className="text-center">
                <p className="text-lg text-white/80 mb-1">Most Common Service Range</p>
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  $150 &ndash; $30,000+
                </div>
                <p className="text-lg text-white/80">
                  From minor repairs to full metal roof installations
                </p>
                <div className="flex items-center justify-center gap-4 mt-4 text-sm text-white/70">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Free Estimates
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Transparent Pricing
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    No Hidden Fees
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

      {/* Quick Cost Summary Table */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Quick Cost Summary &mdash; Charlotte Roofing Prices at a Glance
            </h2>
            <p className="text-gray text-lg">
              This table provides a broad overview of what Charlotte homeowners and businesses can expect
              to pay for common roofing services in 2026. These ranges reflect typical pricing for the
              Greater Charlotte area and account for differences in roof size, material quality, and
              project complexity. Use this as a starting point to understand your budget before scheduling
              a free inspection. Keep in mind that every roof is different, and your actual cost will depend
              on specific conditions that only an on-site assessment can determine. Best Roofing Now provides
              free, written estimates with itemized costs so there are never any surprises.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Service</th>
                      <th className="px-6 py-4 text-left font-semibold">Average Cost Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Minor Roof Repair</td>
                      <td className="px-6 py-4 font-semibold text-accent">$150 &ndash; $500</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">Major Roof Repair</td>
                      <td className="px-6 py-4 font-semibold text-accent">$500 &ndash; $1,500</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Extensive Repair</td>
                      <td className="px-6 py-4 font-semibold text-accent">$1,500 &ndash; $5,000+</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">Asphalt Shingle Replacement (avg home)</td>
                      <td className="px-6 py-4 font-semibold text-accent">$8,500 &ndash; $15,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Metal Roof Installation</td>
                      <td className="px-6 py-4 font-semibold text-accent">$15,000 &ndash; $30,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">Premium Materials (Slate/Cedar/Tile)</td>
                      <td className="px-6 py-4 font-semibold text-accent">$20,000 &ndash; $45,000+</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Flat Roof Coating</td>
                      <td className="px-6 py-4 font-semibold text-accent">$2,000 &ndash; $6,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">Gutter Installation</td>
                      <td className="px-6 py-4 font-semibold text-accent">$1,200 &ndash; $3,500</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Roof Inspection</td>
                      <td className="px-6 py-4 font-semibold text-accent">Free &ndash; $350</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-sm text-gray">
                <strong>Note:</strong> Prices reflect 2026 Charlotte area averages. Actual costs vary based on
                roof size, complexity, material grade, and current market conditions. Best Roofing Now offers free
                estimates &mdash; <Link href="/contact" className="text-primary font-semibold hover:underline">request yours today</Link>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Repair Costs Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Repair Costs in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Roof repairs are the most common roofing expense for Charlotte homeowners, and the good news
              is that most repairs are far less expensive than a full replacement. The key is catching problems
              early before minor damage becomes a major headache. Charlotte&apos;s climate, with its hot summers,
              heavy rainstorms, and occasional hail, takes a toll on roofing materials over time. Regular
              inspections can identify small issues like a cracked shingle or deteriorated flashing before they
              lead to interior water damage that costs thousands to remediate. Here is what you can expect to
              pay for different levels of roof repair in the Charlotte area in 2026.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">Minor Repairs</h3>
              <p className="text-2xl font-bold text-green-600 mb-3">$150 &ndash; $500</p>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Patching small leaks and applying sealant</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Individual shingle replacement (1-10 shingles)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Minor sealant and caulking repairs around vents</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-yellow-700" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">Moderate Repairs</h3>
              <p className="text-2xl font-bold text-yellow-600 mb-3">$500 &ndash; $1,500</p>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Flashing repair around chimneys and walls</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Valley repair where two roof slopes meet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Multiple shingle replacement across a section</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">Major Repairs</h3>
              <p className="text-2xl font-bold text-red-600 mb-3">$1,500 &ndash; $5,000+</p>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Structural repair including rafter and decking work</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Large section replacement after storm damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Emergency repair premiums for after-hours service</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray mb-4">
              Explore detailed repair pricing and service information:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/roof-repair-cost-charlotte-nc"
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                Roof Repair Costs <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/roof-repair-charlotte-nc"
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                Roof Repair Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/flat-roof-repair-charlotte-nc"
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                Flat Roof Repair <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/emergency-tarp-service-charlotte-nc"
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                Emergency Tarp Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Replacement Costs by Home Size */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Replacement Costs by Home Size
            </h2>
            <p className="text-gray text-lg">
              Roof size is the single biggest factor in determining replacement cost. Below is a breakdown
              of what Charlotte homeowners typically pay based on their roof&apos;s square footage for both
              asphalt shingle and metal roof installations. These prices include materials, labor, old roof
              tear-off, disposal, and a standard manufacturer warranty. Keep in mind that additional factors
              like roof pitch (steeper roofs cost more due to extra safety equipment and labor time), the
              number of stories on your home, whether you are doing a tear-off or overlay, and overall
              complexity (dormers, valleys, skylights) can shift your price higher or lower within these ranges.
              An overlay, where new shingles are installed directly over old ones, can save 20-25% on labor
              but is not always recommended and may void some warranties.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Home Size (Roof Area)</th>
                      <th className="px-6 py-4 text-left font-semibold">Shingle Replacement</th>
                      <th className="px-6 py-4 text-left font-semibold">Metal Roof</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">1,000 sq ft</td>
                      <td className="px-6 py-4 text-gray">$5,500 &ndash; $8,000</td>
                      <td className="px-6 py-4 text-gray">$10,000 &ndash; $16,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">1,500 sq ft</td>
                      <td className="px-6 py-4 text-gray">$7,500 &ndash; $11,000</td>
                      <td className="px-6 py-4 text-gray">$14,000 &ndash; $22,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">2,000 sq ft</td>
                      <td className="px-6 py-4 font-semibold text-accent">$9,500 &ndash; $14,000</td>
                      <td className="px-6 py-4 font-semibold text-accent">$18,000 &ndash; $28,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">2,500 sq ft</td>
                      <td className="px-6 py-4 text-gray">$11,500 &ndash; $17,000</td>
                      <td className="px-6 py-4 text-gray">$22,000 &ndash; $34,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">3,000+ sq ft</td>
                      <td className="px-6 py-4 text-gray">$13,500 &ndash; $20,000+</td>
                      <td className="px-6 py-4 text-gray">$26,000 &ndash; $40,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-sm text-gray">
                <strong>Note:</strong> Shingle prices reflect architectural shingles (most popular choice). The 2,000 sq ft
                row is highlighted as it represents the average Charlotte home. Metal roof pricing includes standing seam options.
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray mb-4">
              Get detailed replacement pricing and guides:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/roof-replacement-cost-charlotte-nc"
                className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                Replacement Cost Guide <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/roof-replacement-charlotte-nc"
                className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                Replacement Services <ArrowRight className="w-4 h-4" />
              </Link>
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
                Get a free, no-obligation estimate specific to your home or business. No hidden fees, no surprises.
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

      {/* Cost by Roofing Material */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Cost by Roofing Material
            </h2>
            <p className="text-gray text-lg">
              Material choice is the second-largest factor in your roofing cost after roof size. Charlotte
              homeowners have a wide range of options, from budget-friendly 3-tab shingles to premium slate
              and copper. Each material offers a different balance of upfront cost, lifespan, energy efficiency,
              and curb appeal. The right choice depends on your budget, how long you plan to stay in your home,
              and the look you want to achieve. Architectural shingles remain the most popular choice in
              Charlotte, offering a strong balance of value and performance. However, metal roofing has seen
              a significant surge in popularity as homeowners increasingly prioritize long-term value,
              energy savings, and resilience against Charlotte&apos;s frequent storms. Below is a comparison
              of per-square-foot costs for the most common roofing materials installed in the Charlotte area.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-white rounded-xl border-2 border-transparent hover:border-primary transition">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-dark">3-Tab Shingles</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Budget</span>
                </div>
                <p className="text-2xl font-bold text-primary mb-2">$3.50 &ndash; $5.50<span className="text-sm font-normal text-gray">/sq ft</span></p>
                <p className="text-gray text-sm mb-3">15-20 year lifespan. Most affordable shingle option with a flat, uniform appearance. Ideal for budget-conscious homeowners or rental properties.</p>
                <Link href="/architectural-vs-3-tab-shingles-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">Compare to Architectural <ArrowRight className="w-3 h-3" /></Link>
              </div>

              <div className="p-6 bg-white rounded-xl border-2 border-primary transition ring-2 ring-primary/20">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-dark">Architectural Shingles</h3>
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <p className="text-2xl font-bold text-primary mb-2">$4.50 &ndash; $7.00<span className="text-sm font-normal text-gray">/sq ft</span></p>
                <p className="text-gray text-sm mb-3">25-30 year lifespan. Dimensional look with better wind resistance (up to 130 mph). The standard choice for most Charlotte homeowners.</p>
                <Link href="/asphalt-shingle-roofing-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">Learn More <ArrowRight className="w-3 h-3" /></Link>
              </div>

              <div className="p-6 bg-white rounded-xl border-2 border-transparent hover:border-primary transition">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-dark">Designer Shingles</h3>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">Premium</span>
                </div>
                <p className="text-2xl font-bold text-primary mb-2">$6.00 &ndash; $9.00<span className="text-sm font-normal text-gray">/sq ft</span></p>
                <p className="text-gray text-sm mb-3">30-50 year lifespan. Luxury appearance mimicking slate or wood shake. Enhanced warranties and superior aesthetics for upscale homes.</p>
                <Link href="/designer-shingles-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">Designer Options <ArrowRight className="w-3 h-3" /></Link>
              </div>

              <div className="p-6 bg-white rounded-xl border-2 border-transparent hover:border-primary transition">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-dark">Standing Seam Metal</h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Long-Term Value</span>
                </div>
                <p className="text-2xl font-bold text-primary mb-2">$9.00 &ndash; $16.00<span className="text-sm font-normal text-gray">/sq ft</span></p>
                <p className="text-gray text-sm mb-3">40-70 year lifespan. Extreme durability, energy efficient, and virtually maintenance-free. Withstands 140+ mph winds common in Charlotte storms.</p>
                <Link href="/standing-seam-metal-roof-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">Metal Roofing Details <ArrowRight className="w-3 h-3" /></Link>
              </div>

              <div className="p-6 bg-white rounded-xl border-2 border-transparent hover:border-primary transition">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-dark">Natural Slate</h3>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">Luxury</span>
                </div>
                <p className="text-2xl font-bold text-primary mb-2">$15.00 &ndash; $30.00<span className="text-sm font-normal text-gray">/sq ft</span></p>
                <p className="text-gray text-sm mb-3">75-100+ year lifespan. The pinnacle of roofing materials. Exceptional beauty, fireproof, and virtually indestructible. Common in Myers Park and Eastover estates.</p>
                <Link href="/slate-roofing-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">Slate Roofing <ArrowRight className="w-3 h-3" /></Link>
              </div>

              <div className="p-6 bg-white rounded-xl border-2 border-transparent hover:border-primary transition">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-dark">Cedar Shake</h3>
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">Natural</span>
                </div>
                <p className="text-2xl font-bold text-primary mb-2">$10.00 &ndash; $20.00<span className="text-sm font-normal text-gray">/sq ft</span></p>
                <p className="text-gray text-sm mb-3">30-50 year lifespan. Beautiful natural wood appearance with excellent insulation. Requires more maintenance but delivers unmatched rustic charm.</p>
                <Link href="/cedar-shake-roofing-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">Cedar Shake Options <ArrowRight className="w-3 h-3" /></Link>
              </div>

              <div className="p-6 bg-white rounded-xl border-2 border-transparent hover:border-primary transition">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-dark">Tile Roofing</h3>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Premium</span>
                </div>
                <p className="text-2xl font-bold text-primary mb-2">$12.00 &ndash; $25.00<span className="text-sm font-normal text-gray">/sq ft</span></p>
                <p className="text-gray text-sm mb-3">50-100 year lifespan. Clay or concrete tile with a distinctive Mediterranean or Spanish style. Fire resistant, extremely durable, and adds significant curb appeal.</p>
                <Link href="/tile-roofing-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">Tile Options <ArrowRight className="w-3 h-3" /></Link>
              </div>

              <div className="p-6 bg-white rounded-xl border-2 border-transparent hover:border-primary transition">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-dark">Copper Roofing</h3>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Ultra-Premium</span>
                </div>
                <p className="text-2xl font-bold text-primary mb-2">$25.00 &ndash; $40.00+<span className="text-sm font-normal text-gray">/sq ft</span></p>
                <p className="text-gray text-sm mb-3">100+ year lifespan. The ultimate roofing investment with its distinctive patina that develops over time. Often used for accents, bay windows, and historic restoration projects.</p>
                <Link href="/copper-roofing-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">Copper Roofing <ArrowRight className="w-3 h-3" /></Link>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/metal-roofing-services"
                  className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Metal Roofing Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/metal-roof-vs-shingles-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Metal vs Shingles <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Roofing Costs */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-semibold">Commercial Pricing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Commercial Roofing Costs in Charlotte
              </h2>
              <p className="text-gray text-lg mb-6">
                Commercial roofing in Charlotte presents different cost considerations than residential work.
                Most commercial buildings use flat or low-slope roofing systems like TPO, EPDM, or built-up
                roofing rather than shingles. The larger surface areas involved mean that per-square-foot costs
                are typically lower than residential, but total project costs can be significantly higher due
                to scale. Material choice for commercial roofing depends heavily on the building type, energy
                efficiency goals, and long-term maintenance budget. TPO has become the most popular commercial
                roofing material in Charlotte due to its energy efficiency, durability, and competitive pricing.
                EPDM remains a strong choice for budget-conscious building owners who need reliable waterproofing
                without premium costs. Roof coatings offer an attractive alternative to full replacement for
                commercial roofs that are structurally sound but showing surface wear, potentially extending
                the roof&apos;s life by 10-15 years at a fraction of replacement cost.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between bg-light rounded-lg p-4">
                  <div>
                    <h3 className="font-bold text-dark">TPO Roofing</h3>
                    <p className="text-sm text-gray">Single-ply membrane, energy efficient</p>
                  </div>
                  <span className="text-lg font-bold text-primary">$5.50 &ndash; $9.00/sq ft</span>
                </div>
                <div className="flex items-center justify-between bg-light rounded-lg p-4">
                  <div>
                    <h3 className="font-bold text-dark">EPDM Roofing</h3>
                    <p className="text-sm text-gray">Rubber membrane, cost-effective</p>
                  </div>
                  <span className="text-lg font-bold text-primary">$4.50 &ndash; $8.00/sq ft</span>
                </div>
                <div className="flex items-center justify-between bg-light rounded-lg p-4">
                  <div>
                    <h3 className="font-bold text-dark">Flat Roof Coating</h3>
                    <p className="text-sm text-gray">Silicone or acrylic, extends roof life</p>
                  </div>
                  <span className="text-lg font-bold text-primary">$2.00 &ndash; $5.00/sq ft</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/commercial-roof-repair-cost-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Commercial Repair Costs <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/commercial-roofing-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Commercial Roofing <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/tpo-roofing-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  TPO Roofing <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/epdm-roofing-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  EPDM Roofing <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/flat-roof-coating-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Flat Roof Coating <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.services.commercial}
                alt="Commercial roofing costs Charlotte NC - flat roof systems"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Commercial Specialists</p>
                    <p className="text-sm text-gray">TPO, EPDM &amp; Coatings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Service Costs */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Additional Service Costs
            </h2>
            <p className="text-gray text-lg">
              Beyond the roof itself, Charlotte homeowners often need complementary services to keep their
              entire roofing system performing at its best. Gutters, skylights, ventilation, and fascia
              work are frequently bundled with roofing projects for both cost savings and convenience. Having
              a single contractor handle your entire roof system ensures that all components work together
              properly and that there are no gaps in warranty coverage. Best Roofing Now offers all of these
              services in-house, and many customers save 10-15% by bundling gutter installation or ventilation
              upgrades with a roof replacement project. Here is what these additional services typically cost
              in the Charlotte area as of 2026.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark">Gutter Installation</h3>
                  <p className="text-sm text-gray">$6 &ndash; $15 per linear foot</p>
                </div>
              </div>
              <p className="text-gray text-sm mb-3">
                Complete gutter system installation including downspouts. Aluminum is most popular at $6-$12/ft.
                Average Charlotte home costs $1,200 to $3,500 total.
              </p>
              <div className="flex gap-2">
                <Link href="/gutter-installation-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">Installation <ArrowRight className="w-3 h-3" /></Link>
                <Link href="/gutter-repair-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">Repair ($150-$500) <ArrowRight className="w-3 h-3" /></Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark">Skylight Installation</h3>
                  <p className="text-sm text-gray">$1,500 &ndash; $3,500 each</p>
                </div>
              </div>
              <p className="text-gray text-sm mb-3">
                Velux and other premium skylight brands. Price includes the unit, flashing kit, and installation labor.
                Replacing an existing skylight during a reroof is significantly cheaper.
              </p>
              <Link href="/skylight-installation-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">Skylight Options <ArrowRight className="w-3 h-3" /></Link>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark">Ridge Vent Installation</h3>
                  <p className="text-sm text-gray">$3 &ndash; $6 per linear foot</p>
                </div>
              </div>
              <p className="text-gray text-sm mb-3">
                Critical for attic ventilation and energy efficiency. Usually included with full roof replacements.
                Soffit vents run $300-$600 and are often upgraded at the same time.
              </p>
              <div className="flex gap-2">
                <Link href="/ridge-vent-installation-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">Ridge Vents <ArrowRight className="w-3 h-3" /></Link>
                <Link href="/roof-ventilation-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">Ventilation Guide <ArrowRight className="w-3 h-3" /></Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark">Fascia &amp; Soffit Repair</h3>
                  <p className="text-sm text-gray">$300 &ndash; $1,500</p>
                </div>
              </div>
              <p className="text-gray text-sm mb-3">
                Damaged fascia boards and soffits are commonly discovered during roof replacements. Repair
                costs depend on the extent of rot or damage and the linear footage involved.
              </p>
              <Link href="/fascia-soffit-repair-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">Fascia &amp; Soffit <ArrowRight className="w-3 h-3" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* How to Save on Roofing */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={IMAGES.hero.hero5}
                alt="Saving money on roofing costs in Charlotte NC"
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How to Save on Roofing in Charlotte
              </h2>
              <p className="text-gray text-lg mb-6">
                Roofing is a significant investment, but there are several legitimate ways to reduce your
                out-of-pocket costs without compromising on quality. Charlotte homeowners have more options
                than many realize, from insurance claims to strategic timing and bundled services. The most
                important thing is to never sacrifice quality for a lower price, as cheap roofing work almost
                always costs more in the long run through premature failures, voided warranties, and repeat
                repairs. Here are the smartest ways to save on your Charlotte roofing project in 2026.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">File Insurance Claims After Storm Damage</strong>
                    <p className="text-gray text-sm">
                      Charlotte&apos;s frequent storms mean many roofing projects qualify for insurance coverage.
                      Best Roofing Now helps document damage and works directly with adjusters to maximize your claim.
                    </p>
                    <Link href="/insurance-claim-roofing-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1 mt-1">Insurance Claim Help <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Take Advantage of Financing Options</strong>
                    <p className="text-gray text-sm">
                      Spread the cost over time with 0% APR for 12 months or low monthly payment plans. Get the
                      roof you need now without draining your savings.
                    </p>
                    <Link href="/roof-financing-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1 mt-1">Financing Options <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Schedule During Off-Peak Seasons</strong>
                    <p className="text-gray text-sm">
                      Late fall through early spring typically offers better availability and sometimes more
                      competitive pricing as contractor demand is lower.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Bundle Multiple Services for Discounts</strong>
                    <p className="text-gray text-sm">
                      Combine roof replacement with gutter installation, skylight work, or ventilation upgrades
                      to save 10-15% versus having each done separately.
                    </p>
                    <Link href="/affordable-roofing-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1 mt-1">Affordable Roofing Options <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Getting an Accurate Estimate */}
      <section className="section bg-gradient-to-br from-primary/5 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <FileText className="w-4 h-4" />
                <span className="text-sm font-semibold">Expert Advice</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Getting an Accurate Estimate
              </h2>
              <p className="text-gray text-lg">
                An accurate roofing estimate is the foundation of a successful project and the best protection
                against unexpected costs. Unfortunately, not all estimates are created equal, and some contractors
                use vague or incomplete quotes as a tool to win jobs at unrealistically low prices only to pile
                on charges once work has started. Knowing what a good estimate looks like, and what red flags to
                watch for, helps you choose the right contractor and avoid costly surprises. A thorough estimate
                should include a detailed scope of work describing every step of the project, an itemized
                materials list specifying the exact brand, model, and quantity of every product to be used,
                separate line items for labor, tear-off and disposal, and any required permits. It should also
                clearly state the warranty terms for both materials and workmanship, the expected project timeline,
                and the payment schedule. Any estimate that lumps everything into a single lump-sum number without
                itemization should be treated with caution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  What a Good Estimate Includes
                </h3>
                <ul className="space-y-3 text-gray text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Detailed scope of work with project description</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Itemized materials list with brands and quantities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Separate line items for labor, materials, tear-off, and disposal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Clear warranty terms (materials and workmanship)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Project timeline and payment schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Proof of insurance and license information</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-500" />
                  Red Flags to Watch For
                </h3>
                <ul className="space-y-3 text-gray text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">!</span>
                    <span>Estimate is 40%+ below other quotes &mdash; they will cut corners or add charges later</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">!</span>
                    <span>Vague lump-sum pricing with no itemization or material specs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">!</span>
                    <span>High-pressure sales tactics or &ldquo;today only&rdquo; pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">!</span>
                    <span>Requiring full payment upfront before work begins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">!</span>
                    <span>No proof of insurance or unwillingness to provide license number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">!</span>
                    <span>Storm chaser with no local address or office &mdash; here today, gone tomorrow</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray mb-4">
                Best Roofing Now provides free, comprehensive inspections with detailed written estimates.
                No obligation, no pressure, and no surprises.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
                >
                  Get Your Free Inspection
                </Button>
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

      {/* Why Choose Best Roofing Now */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Trusts Best Roofing Now
            </h2>
            <p className="text-gray text-lg">
              Over {SITE_CONFIG.customerCount} completed projects and a perfect 5.0 Google rating. Here is what sets us apart.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Transparent Pricing</h3>
              <p className="text-gray text-sm">Itemized estimates with no hidden fees. The price we quote is the price you pay.</p>
            </div>
            <div className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">BBB A+ &amp; Certified</h3>
              <p className="text-gray text-sm">CertainTeed, GAF, and Owens Corning certified with manufacturer-backed warranties.</p>
            </div>
            <div className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Insurance Experts</h3>
              <p className="text-gray text-sm">We help document damage and work directly with your insurance company to maximize coverage.</p>
            </div>
            <div className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Flexible Financing</h3>
              <p className="text-gray text-sm">0% APR for 12 months and low monthly payment plans to fit any budget.</p>
            </div>
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
                Charlotte Roofing Cost FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions about roofing costs and pricing in Charlotte NC.
              </p>
            </div>
            <div className="space-y-4">
              {costFAQs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Explore More Roofing Resources
            </h2>
            <p className="text-gray">
              Dive deeper into specific roofing topics, services, and pricing for the Charlotte area.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/roof-replacement-cost-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Replacement Cost Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roof-repair-cost-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Repair Cost Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/residential-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Residential Roofing <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/commercial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/metal-roofing-services"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Metal Roofing Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/insurance-claim-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Insurance Claims <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roof-financing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Financing Options <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="guide"
        city="Charlotte"
        slug="charlotte-roofing-costs-2026"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/charlotte-roofing-costs-2026`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready to Get Your Roofing Estimate?"
        subtitle="Get a free, no-obligation quote with transparent pricing. Our team will assess your roof and provide honest recommendations tailored to your needs and budget. No hidden fees, no surprises."
      />
    </>
  );
}
