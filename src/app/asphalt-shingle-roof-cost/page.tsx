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
  AlertTriangle,
  Lightbulb,
  Zap,
  Clock,
  FileText,
  Award,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { FAQ } from '@/components/sections/FAQ';
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
  title: 'Asphalt Shingle Roof Cost (2026) | Charlotte NC Pricing Guide',
  description:
    'Asphalt shingle roof cost breakdown for Charlotte NC. 3-tab shingles $3.50-$5.50/sq ft, architectural $4.50-$7.00/sq ft, premium designer $7.00-$12.00/sq ft. Full replacement cost by house size, labor vs materials, and money-saving tips from a BBB A+ rated contractor.',
  keywords: [
    'asphalt shingle roof cost',
    'cost of an asphalt shingle roof',
    'cost of asphalt shingle roof',
    'cost to replace an asphalt shingle roof',
    'asphalt shingle roof replacement cost',
    'shingle roof cost per square foot',
    '3-tab vs architectural shingle cost',
    'asphalt shingle roof cost Charlotte NC',
    'shingle roof replacement cost Charlotte',
    'how much does a shingle roof cost Charlotte NC',
    'architectural shingle roof cost per square foot',
    'asphalt roof cost 2026',
    'shingle roof installation cost Charlotte NC',
    'cheapest shingle roof Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/asphalt-shingle-roof-cost`,
  },
  openGraph: {
    title: 'Asphalt Shingle Roof Cost (2026) | Charlotte NC Pricing Guide',
    description:
      'Complete asphalt shingle roof cost guide for Charlotte NC homeowners. Cost per square foot, by house size, 3-tab vs architectural vs designer comparison, and what affects your price.',
    url: `${SITE_CONFIG.url}/asphalt-shingle-roof-cost`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Asphalt shingle roof cost guide - Charlotte NC roofing pricing by Best Roofing Now',
      },
    ],
  },
};

const shingleCostFAQs = [
  {
    question: 'How much does an asphalt shingle roof cost in 2026?',
    answer:
      'An asphalt shingle roof costs between $5,500 and $20,000+ depending on the size of your home, shingle type, and project complexity. For a typical 2,000 square foot Charlotte home, expect to pay $9,000 to $14,000 for architectural shingles including materials, labor, tear-off, and disposal. 3-tab shingles are the most affordable at $3.50 to $5.50 per square foot installed, while premium designer shingles run $7.00 to $12.00 per square foot. Best Roofing Now provides free, itemized estimates so you know exactly what your project will cost before any work begins.',
  },
  {
    question: 'What is the cost per square foot for asphalt shingle roofing?',
    answer:
      'Asphalt shingle roofing costs per square foot in Charlotte NC range from $3.50 to $12.00 depending on the shingle type. 3-tab shingles cost $3.50 to $5.50 per square foot installed. Architectural shingles, the most popular choice, cost $4.50 to $7.00 per square foot. Premium designer shingles that mimic slate or cedar shake cost $7.00 to $12.00 per square foot. These prices include materials, labor, underlayment, and standard accessories. Tear-off of the old roof adds approximately $1.00 to $1.50 per square foot if needed.',
  },
  {
    question: 'How much does it cost to replace an asphalt shingle roof on a 2,000 sq ft home?',
    answer:
      'Replacing an asphalt shingle roof on a 2,000 square foot home in Charlotte NC typically costs $9,000 to $14,000 for architectural shingles or $7,000 to $11,000 for basic 3-tab shingles. This includes materials, labor, old roof tear-off, disposal, ice and water shield, drip edge, and ridge vent installation. Additional factors like roof pitch, number of stories, complexity (dormers, valleys, skylights), and the condition of the decking underneath can shift the final cost within or beyond these ranges.',
  },
  {
    question: 'What is the difference between 3-tab and architectural shingles in cost?',
    answer:
      'Architectural shingles cost roughly 30 to 40 percent more than 3-tab shingles upfront, but they last 25 to 30 years compared to only 15 to 20 years for 3-tab. For a 2,000 square foot roof, the price difference is typically $2,000 to $3,000. Most Charlotte roofing contractors, including Best Roofing Now, recommend architectural shingles because the cost per year of service is actually lower, they offer better wind resistance up to 130 mph for Charlotte storms, and they significantly improve curb appeal and resale value.',
  },
  {
    question: 'Are designer or premium asphalt shingles worth the extra cost?',
    answer:
      'Designer and premium asphalt shingles cost $7.00 to $12.00 per square foot compared to $4.50 to $7.00 for standard architectural, but they can be worth it for homeowners who want a luxury look without the weight and expense of real slate or cedar. Premium shingles from CertainTeed, GAF, and Owens Corning come with enhanced warranties up to 50 years, offer superior wind resistance, and can increase your home resale value by $10,000 to $15,000. They are especially popular in Charlotte neighborhoods like Myers Park, Dilworth, and SouthPark where curb appeal matters.',
  },
  {
    question: 'Does insurance cover the cost of an asphalt shingle roof replacement?',
    answer:
      'Homeowners insurance typically covers asphalt shingle roof replacement when damage is caused by a covered event such as hail, wind, falling trees, or severe storms. Charlotte experiences significant storm activity, so many roofing projects qualify for at least partial insurance coverage. Your out-of-pocket cost is usually just your deductible, which is typically $1,000 to $2,500. Best Roofing Now works directly with insurance companies, documents damage with detailed photos and reports, and helps navigate the entire claims process to maximize your coverage.',
  },
  {
    question: 'How long does an asphalt shingle roof last in Charlotte NC?',
    answer:
      'Asphalt shingle roof lifespan in Charlotte depends on the shingle type, ventilation quality, and maintenance. 3-tab shingles last 15 to 20 years, architectural shingles last 25 to 30 years, and premium designer shingles last 30 to 50 years. Charlotte hot summers, UV exposure, and frequent storms can shorten these lifespans by 3 to 5 years without proper attic ventilation. Regular inspections, prompt repairs, and keeping gutters clean help maximize the life of your shingle roof.',
  },
  {
    question: 'What factors affect asphalt shingle roof cost the most?',
    answer:
      'The biggest factors affecting asphalt shingle roof cost are roof size (measured in squares of 100 square feet), shingle type (3-tab vs architectural vs designer), roof pitch and steepness (steeper roofs require more labor and safety equipment), number of layers to tear off, complexity (dormers, valleys, skylights, multiple levels), decking condition (rotten wood must be replaced at $2 to $5 per square foot), and whether you are in a high-demand season. Getting multiple written estimates from licensed, insured contractors is the best way to ensure fair pricing.',
  },
  {
    question: 'Is it cheaper to reroof over existing shingles or tear off and replace?',
    answer:
      'A reroof overlay where new shingles are installed over old ones can save $1,000 to $3,000 compared to a full tear-off because you avoid the labor and disposal costs. However, most Charlotte roofing professionals recommend a full tear-off because it allows inspection of the decking and underlayment, prevents trapped moisture that causes premature failure, provides a longer-lasting installation, and is required by building code if there are already two layers. An overlay may also void some manufacturer warranties. Best Roofing Now will advise you honestly on which approach is right for your specific roof.',
  },
  {
    question: 'What is the best time of year to replace an asphalt shingle roof in Charlotte?',
    answer:
      'The best time to replace an asphalt shingle roof in Charlotte is during moderate temperatures between 40 and 85 degrees Fahrenheit, which means spring and fall are ideal. Late fall through early spring (November to March) often offers better pricing because contractor demand is lower. Summer installations are common but hot temperatures require careful handling of shingles. Avoid scheduling during peak storm season if possible, as emergency demand drives up prices and extends scheduling lead times.',
  },
];

// Pricing schema for rich results
function PricingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Asphalt Shingle Roofing Services in Charlotte NC',
    description:
      'Complete asphalt shingle roof installation, replacement, and repair services in Charlotte NC. 3-tab, architectural, and premium designer shingle options. BBB A+ rated with transparent pricing and free estimates.',
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
      name: 'Asphalt Shingle Roofing Pricing 2026',
      itemListElement: [
        {
          '@type': 'Offer',
          name: '3-Tab Shingle Roof Replacement',
          description: 'Budget-friendly 3-tab asphalt shingle roof installation with 15-20 year lifespan',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '5500',
            maxPrice: '11000',
            unitText: 'per project (1,000-2,000 sq ft)',
          },
        },
        {
          '@type': 'Offer',
          name: 'Architectural Shingle Roof Replacement',
          description: 'Premium architectural shingle roof installation with 25-30 year lifespan and enhanced wind resistance',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '7000',
            maxPrice: '17000',
            unitText: 'per project (1,000-2,500 sq ft)',
          },
        },
        {
          '@type': 'Offer',
          name: 'Designer Shingle Roof Replacement',
          description: 'Luxury designer shingle roof installation mimicking slate or cedar shake with 30-50 year lifespan',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '14000',
            maxPrice: '30000',
            unitText: 'per project (1,000-2,500 sq ft)',
          },
        },
        {
          '@type': 'Offer',
          name: 'Free Shingle Roof Inspection',
          description: 'Complimentary asphalt shingle roof inspection and detailed estimate',
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

export default function AsphaltShingleRoofCostPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Costs', url: `${SITE_CONFIG.url}/charlotte-roofing-costs-2026` },
          { name: 'Asphalt Shingle Roof Cost', url: `${SITE_CONFIG.url}/asphalt-shingle-roof-cost` },
        ]}
      />
      <FAQSchema faqs={shingleCostFAQs} />
      <PricingSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/asphalt-shingle-roof-cost`}
        pageName="Asphalt Shingle Roof Cost Guide 2026"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does an asphalt shingle roof cost?',
            answer: 'An asphalt shingle roof costs $3.50-$12.00 per square foot installed depending on shingle type. 3-tab shingles cost $3.50-$5.50/sq ft, architectural shingles $4.50-$7.00/sq ft, and designer shingles $7.00-$12.00/sq ft. For a typical 2,000 sq ft home, expect $9,000-$14,000 total for architectural shingles.',
            speakableAnswer: 'An asphalt shingle roof costs $3.50 to $12 per square foot. For a typical 2,000 square foot home, expect $9,000 to $14,000 for architectural shingles. Call Best Roofing Now at 704-605-6047 for a free estimate.',
          },
          {
            question: 'What is the cost to replace an asphalt shingle roof?',
            answer: 'The cost to replace an asphalt shingle roof in Charlotte NC ranges from $5,500 for a small home with 3-tab shingles to $20,000+ for a larger home with premium designer shingles. The average Charlotte home pays $9,000-$14,000 for architectural shingle replacement including tear-off and disposal.',
            speakableAnswer: 'Replacing an asphalt shingle roof costs $5,500 to $20,000 depending on home size and shingle type. The average Charlotte home pays $9,000 to $14,000. Call 704-605-6047 for a free estimate.',
          },
          {
            question: 'How much do 3-tab vs architectural shingles cost?',
            answer: '3-tab shingles cost $3.50-$5.50 per square foot while architectural shingles cost $4.50-$7.00 per square foot. Architectural shingles cost 30-40% more upfront but last 25-30 years versus 15-20 years for 3-tab, making them a better long-term value.',
            speakableAnswer: '3-tab shingles cost $3.50 to $5.50 per square foot. Architectural shingles cost $4.50 to $7 per square foot but last 10 years longer. Call Best Roofing Now for details.',
          },
          {
            question: 'What affects the cost of an asphalt shingle roof the most?',
            answer: 'The biggest factors are roof size, shingle type (3-tab vs architectural vs designer), roof pitch and steepness, project complexity (dormers, valleys, skylights), number of tear-off layers, and decking condition. Best Roofing Now provides free inspections to determine your exact cost.',
            speakableAnswer: 'Roof size, shingle type, pitch, and complexity affect cost the most. Call Best Roofing Now at 704-605-6047 for a free inspection and exact price.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Asphalt shingle roof cost guide for Charlotte NC homeowners - Best Roofing Now"
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
              { label: 'Asphalt Shingle Roof Cost' },
            ]}
            className="mb-6 text-white/70"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-semibold">2026 Asphalt Shingle Pricing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Asphalt Shingle Roof Cost <br className="hidden md:block" />
              <span className="text-accent-light">Complete 2026 Pricing Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              How Much Does an Asphalt Shingle Roof Really Cost in Charlotte NC?
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Asphalt shingles remain the most popular roofing material in Charlotte, chosen by over 80% of
              homeowners for their balance of affordability, durability, and curb appeal. Whether you are
              considering budget-friendly 3-tab shingles or premium architectural options, this guide breaks
              down every cost factor so you can make an informed decision based on real local pricing from
              a BBB A+ rated contractor with over {SITE_CONFIG.customerCount} completed projects.
            </p>

            {/* Large Price Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl">
              <div className="text-center">
                <p className="text-lg text-white/80 mb-1">Asphalt Shingle Roof Cost Range</p>
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  $3.50 &ndash; $12.00<span className="text-2xl md:text-3xl">/sq ft</span>
                </div>
                <p className="text-lg text-white/80">
                  From basic 3-tab to premium designer shingles
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
              <EstimateButton variant="accent" size="lg">
                Get Your Free Shingle Roof Estimate
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

      {/* Cost Per Square Foot by Shingle Type */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Asphalt Shingle Roof Cost Per Square Foot
            </h2>
            <p className="text-gray text-lg">
              The cost of an asphalt shingle roof varies significantly based on the type of shingle you choose.
              Charlotte homeowners have three main categories to consider: basic 3-tab shingles for maximum
              affordability, architectural shingles for the best balance of value and performance, and premium
              designer shingles for luxury aesthetics with enhanced durability. All prices below include
              materials, professional installation labor, underlayment, and standard accessories like drip
              edge and ridge cap. Tear-off of your existing roof adds approximately $1.00 to $1.50 per
              square foot to these prices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-green-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-dark">3-Tab Shingles</h3>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Budget</span>
              </div>
              <p className="text-3xl font-bold text-green-600 mb-2">$3.50 &ndash; $5.50<span className="text-sm font-normal text-gray">/sq ft</span></p>
              <p className="text-sm text-gray mb-4">15-20 year lifespan</p>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Flat, uniform appearance with single-layer tabs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Wind resistance up to 60-70 mph</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Best for tight budgets or rental properties</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Limited color and style options</span>
                </li>
              </ul>
              <Link href="/architectural-vs-3-tab-shingles-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1 mt-4">Compare 3-Tab vs Architectural <ArrowRight className="w-3 h-3" /></Link>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-primary ring-2 ring-primary/20">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-dark">Architectural</h3>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <p className="text-3xl font-bold text-primary mb-2">$4.50 &ndash; $7.00<span className="text-sm font-normal text-gray">/sq ft</span></p>
              <p className="text-sm text-gray mb-4">25-30 year lifespan</p>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Dimensional, layered look with shadow lines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Wind resistance up to 130 mph</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Best value per year of service life</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Wide selection of colors and profiles</span>
                </li>
              </ul>
              <Link href="/architectural-shingles" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1 mt-4">Explore Architectural Shingles <ArrowRight className="w-3 h-3" /></Link>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-purple-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-dark">Premium Designer</h3>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">Premium</span>
              </div>
              <p className="text-3xl font-bold text-purple-600 mb-2">$7.00 &ndash; $12.00<span className="text-sm font-normal text-gray">/sq ft</span></p>
              <p className="text-sm text-gray mb-4">30-50 year lifespan</p>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>Mimics slate, cedar shake, or tile appearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>Wind resistance up to 130-150 mph</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>Enhanced manufacturer warranties up to 50 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>Increases home resale value $10K-$15K</span>
                </li>
              </ul>
              <Link href="/certainteed-shingles-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1 mt-4">CertainTeed Premium Shingles <ArrowRight className="w-3 h-3" /></Link>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 max-w-3xl mx-auto text-center">
            <p className="text-gray text-sm">
              <strong>Pro tip from Best Roofing Now:</strong> While 3-tab shingles cost less upfront, architectural
              shingles provide a lower cost per year of service. Over a 30-year period, you would need to replace
              3-tab shingles at least once, making them more expensive long-term. We recommend architectural shingles
              for most Charlotte homeowners as the best overall value.
            </p>
          </div>
        </div>
      </section>

      {/* Cost by House Size */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Asphalt Shingle Roof Cost by House Size
            </h2>
            <p className="text-gray text-lg">
              Roof size is the single biggest factor in determining your asphalt shingle roof replacement cost.
              Below is a breakdown of what Charlotte homeowners typically pay based on roof square footage for
              each shingle type. These prices include materials, labor, old roof tear-off, disposal, underlayment,
              drip edge, ridge vent, and a standard manufacturer warranty. Keep in mind that additional factors
              like roof pitch (steeper roofs cost more), number of stories, and overall complexity (dormers,
              valleys, skylights) can shift your price within these ranges. The 2,000 square foot row is
              highlighted as it represents the average Charlotte home.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Roof Size</th>
                      <th className="px-6 py-4 text-left font-semibold">3-Tab Shingles</th>
                      <th className="px-6 py-4 text-left font-semibold">Architectural</th>
                      <th className="px-6 py-4 text-left font-semibold">Premium Designer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">1,000 sq ft</td>
                      <td className="px-6 py-4 text-gray">$5,500 &ndash; $7,500</td>
                      <td className="px-6 py-4 text-gray">$7,000 &ndash; $9,500</td>
                      <td className="px-6 py-4 text-gray">$10,000 &ndash; $14,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">1,500 sq ft</td>
                      <td className="px-6 py-4 text-gray">$7,000 &ndash; $9,500</td>
                      <td className="px-6 py-4 text-gray">$8,500 &ndash; $12,000</td>
                      <td className="px-6 py-4 text-gray">$13,000 &ndash; $20,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">2,000 sq ft</td>
                      <td className="px-6 py-4 font-semibold text-accent">$8,500 &ndash; $11,000</td>
                      <td className="px-6 py-4 font-semibold text-accent">$9,500 &ndash; $14,000</td>
                      <td className="px-6 py-4 font-semibold text-accent">$16,000 &ndash; $24,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">2,500 sq ft</td>
                      <td className="px-6 py-4 text-gray">$10,000 &ndash; $14,000</td>
                      <td className="px-6 py-4 text-gray">$12,000 &ndash; $17,500</td>
                      <td className="px-6 py-4 text-gray">$19,000 &ndash; $30,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">3,000+ sq ft</td>
                      <td className="px-6 py-4 text-gray">$12,000 &ndash; $16,500+</td>
                      <td className="px-6 py-4 text-gray">$14,000 &ndash; $21,000+</td>
                      <td className="px-6 py-4 text-gray">$23,000 &ndash; $36,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-sm text-gray">
                <strong>Note:</strong> The 2,000 sq ft row is highlighted as it represents the average Charlotte home.
                Prices include tear-off, materials, labor, and disposal. Actual costs vary based on roof complexity
                and current market conditions. <Link href="/contact" className="text-primary font-semibold hover:underline">Get your free estimate today</Link>.
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <EstimateButton variant="primary" size="lg">
                Calculate Your Exact Cost
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
      </section>

      {/* 3-Tab vs Architectural vs Designer Comparison */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              3-Tab vs Architectural vs Designer Shingles &mdash; Full Comparison
            </h2>
            <p className="text-gray text-lg">
              Choosing between 3-tab, architectural, and designer asphalt shingles is one of the most important
              decisions you will make during a roof replacement project. Each type offers a different balance of
              cost, durability, aesthetics, and warranty coverage. This side-by-side comparison helps Charlotte
              homeowners understand exactly what they are getting at each price point so you can choose the
              shingle that best fits your budget, style, and long-term goals.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Feature</th>
                      <th className="px-6 py-4 text-left font-semibold">3-Tab</th>
                      <th className="px-6 py-4 text-left font-semibold">Architectural</th>
                      <th className="px-6 py-4 text-left font-semibold">Designer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Cost Per Sq Ft</td>
                      <td className="px-6 py-4 text-gray">$3.50 &ndash; $5.50</td>
                      <td className="px-6 py-4 font-semibold text-accent">$4.50 &ndash; $7.00</td>
                      <td className="px-6 py-4 text-gray">$7.00 &ndash; $12.00</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">Lifespan</td>
                      <td className="px-6 py-4 text-gray">15-20 years</td>
                      <td className="px-6 py-4 font-semibold text-accent">25-30 years</td>
                      <td className="px-6 py-4 text-gray">30-50 years</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Wind Resistance</td>
                      <td className="px-6 py-4 text-gray">60-70 mph</td>
                      <td className="px-6 py-4 font-semibold text-accent">Up to 130 mph</td>
                      <td className="px-6 py-4 text-gray">130-150 mph</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">Appearance</td>
                      <td className="px-6 py-4 text-gray">Flat, uniform</td>
                      <td className="px-6 py-4 font-semibold text-accent">Dimensional, textured</td>
                      <td className="px-6 py-4 text-gray">Luxury (slate/shake look)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Warranty</td>
                      <td className="px-6 py-4 text-gray">20-25 years</td>
                      <td className="px-6 py-4 font-semibold text-accent">30 years (lifetime)</td>
                      <td className="px-6 py-4 text-gray">50 years (lifetime)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">Impact Resistance</td>
                      <td className="px-6 py-4 text-gray">Class 1-2</td>
                      <td className="px-6 py-4 font-semibold text-accent">Class 3-4</td>
                      <td className="px-6 py-4 text-gray">Class 4</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Cost for 2,000 Sq Ft Roof</td>
                      <td className="px-6 py-4 text-gray">$8,500 &ndash; $11,000</td>
                      <td className="px-6 py-4 font-semibold text-accent">$9,500 &ndash; $14,000</td>
                      <td className="px-6 py-4 text-gray">$16,000 &ndash; $24,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">Best For</td>
                      <td className="px-6 py-4 text-gray">Budget-conscious, rentals</td>
                      <td className="px-6 py-4 font-semibold text-accent">Most homeowners</td>
                      <td className="px-6 py-4 text-gray">Upscale homes, long-term stays</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-sm text-gray">
                <strong>Best Roofing Now recommendation:</strong> Architectural shingles offer the best value for most Charlotte
                homeowners. They cost only 30-40% more than 3-tab but last 50% longer, provide dramatically better storm
                protection, and improve your home&apos;s curb appeal. <Link href="/architectural-vs-3-tab-shingles-charlotte-nc" className="text-primary font-semibold hover:underline">See our full 3-tab vs architectural comparison</Link>.
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
                Want an Exact Price for Your Shingle Roof?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate specific to your home. We will inspect your roof and provide
                transparent, itemized pricing with no hidden fees.
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

      {/* Factors Affecting Cost */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Affects the Cost of an Asphalt Shingle Roof?
            </h2>
            <p className="text-gray text-lg">
              Your actual asphalt shingle roof cost depends on several factors beyond just the shingle type.
              Charlotte homes vary widely in roof configuration, and each of these variables can move your
              total price up or down by hundreds or even thousands of dollars. Understanding these factors
              helps you evaluate quotes more accurately and ensures you are comparing apples to apples when
              getting estimates from different contractors.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Ruler className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Roof Size</h3>
              <p className="text-gray text-sm">
                The biggest cost factor. Measured in &ldquo;squares&rdquo; (100 sq ft each), larger roofs
                require more materials and labor. A 2,000 sq ft roof is roughly 20 squares. Most Charlotte
                homes range from 15 to 35 squares.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Roof Pitch &amp; Steepness</h3>
              <p className="text-gray text-sm">
                Steeper roofs (7/12 pitch and above) require extra safety equipment, specialized staging,
                and more labor time. This can add 15-25% to your total cost. Many Charlotte ranch homes
                have moderate 4/12 to 6/12 pitches that are more affordable to work on.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Tear-Off Layers</h3>
              <p className="text-gray text-sm">
                Removing one layer of old shingles adds $1.00 to $1.50 per square foot. Two layers of tear-off
                can add $1.50 to $2.50 per square foot. Charlotte building code prohibits installing more than
                two layers of shingles, so tear-off may be required.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Roof Complexity</h3>
              <p className="text-gray text-sm">
                Dormers, valleys, skylights, chimneys, and multiple roof levels all add complexity and cost.
                Each penetration requires special flashing and careful water management. A simple gable
                roof costs significantly less than a complex hip roof with multiple dormers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Decking Condition</h3>
              <p className="text-gray text-sm">
                Rotten or damaged plywood decking discovered during tear-off must be replaced before new
                shingles go on. Replacement costs $2 to $5 per square foot for the affected area. This is
                only visible once the old roof is removed, which is one reason honest contractors provide
                contingency guidance upfront.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Charlotte Location &amp; Season</h3>
              <p className="text-gray text-sm">
                Pricing can vary within the Charlotte metro area, and peak storm seasons (spring and summer)
                often mean higher demand and longer lead times. Neighborhoods like Myers Park, SouthPark, and
                Lake Norman may command higher prices due to larger homes and premium material expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Labor vs Materials Breakdown */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={IMAGES.hero.hero5}
                alt="Asphalt shingle roof installation labor and materials - Charlotte NC"
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
                <span className="text-sm font-semibold">Cost Breakdown</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Labor vs Materials: Where Your Money Goes
              </h2>
              <p className="text-gray text-lg mb-6">
                Understanding how your asphalt shingle roof cost breaks down between labor and materials helps
                you evaluate quotes and identify where you might be overpaying. For a typical Charlotte shingle
                roof replacement, here is where your investment goes. Contractor overhead, insurance, permits,
                and profit margin account for the remaining portion.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between bg-light rounded-lg p-4">
                  <div>
                    <h3 className="font-bold text-dark">Materials</h3>
                    <p className="text-sm text-gray">Shingles, underlayment, drip edge, ridge cap, nails, ice/water shield</p>
                  </div>
                  <span className="text-lg font-bold text-primary">35-45%</span>
                </div>
                <div className="flex items-center justify-between bg-light rounded-lg p-4">
                  <div>
                    <h3 className="font-bold text-dark">Labor</h3>
                    <p className="text-sm text-gray">Installation crew, tear-off, cleanup, safety equipment</p>
                  </div>
                  <span className="text-lg font-bold text-primary">40-50%</span>
                </div>
                <div className="flex items-center justify-between bg-light rounded-lg p-4">
                  <div>
                    <h3 className="font-bold text-dark">Disposal &amp; Permits</h3>
                    <p className="text-sm text-gray">Dumpster rental, landfill fees, Mecklenburg County permit</p>
                  </div>
                  <span className="text-lg font-bold text-primary">5-10%</span>
                </div>
                <div className="flex items-center justify-between bg-light rounded-lg p-4">
                  <div>
                    <h3 className="font-bold text-dark">Overhead &amp; Warranty</h3>
                    <p className="text-sm text-gray">Insurance, licensing, workmanship warranty, project management</p>
                  </div>
                  <span className="text-lg font-bold text-primary">5-15%</span>
                </div>
              </div>

              <p className="text-gray text-sm">
                <strong>Important:</strong> Be cautious of bids where labor costs seem unrealistically low. Quality
                installation is critical for shingle performance and warranty compliance. Cheap labor often leads to
                premature failures, voided warranties, and costly repairs within just a few years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need Shingle Replacement */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-semibold">Warning Signs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Signs You Need Asphalt Shingle Replacement
            </h2>
            <p className="text-gray text-lg">
              Knowing when to replace your asphalt shingle roof saves you from more expensive damage down
              the road. Charlotte&apos;s climate with its intense summer heat, heavy rainstorms, and occasional
              hail accelerates shingle wear. If you notice any of these signs, it is time to schedule a
              professional inspection to determine whether repair or full replacement makes more financial sense.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-dark mb-2">Curling or Buckling Shingles</h3>
              <p className="text-gray text-sm">
                Shingle edges that curl upward or tabs that buckle indicate age-related deterioration and loss of
                waterproofing ability. Once curling starts, the shingles are nearing end of life and are vulnerable
                to wind lift-off during Charlotte storms.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-dark mb-2">Granule Loss in Gutters</h3>
              <p className="text-gray text-sm">
                Finding excessive granules in your gutters or downspouts means your shingles are losing their
                protective coating. Some granule loss is normal in the first year, but heavy accumulation on
                older roofs signals the shingles can no longer protect against UV damage and water penetration.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-dark mb-2">Missing or Damaged Shingles</h3>
              <p className="text-gray text-sm">
                After Charlotte storms, check for missing shingles, cracked tabs, or visible bare spots. While
                a few missing shingles can be repaired, widespread damage or missing shingles across multiple
                areas often makes full replacement more cost-effective than patching.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-dark mb-2">Daylight Through Roof Boards</h3>
              <p className="text-gray text-sm">
                If you can see daylight through your roof decking from inside the attic, there are gaps where
                water can enter. This is an urgent sign that requires immediate attention to prevent interior
                water damage.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-dark mb-2">Sagging Roof Deck</h3>
              <p className="text-gray text-sm">
                A visibly sagging roofline or soft spots when walking on the roof indicate structural damage to
                the decking below. This requires immediate professional assessment and likely means both decking
                replacement and new shingles.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-dark mb-2">Roof Age Over 20 Years</h3>
              <p className="text-gray text-sm">
                If your 3-tab shingle roof is over 15 years old or your architectural shingles are past 25 years,
                proactive replacement before a major failure saves money on emergency repairs and interior
                damage remediation.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray mb-4">
              Not sure if your shingles need replacement? Get a free professional inspection.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <EstimateButton variant="primary" size="lg">
                Schedule Free Roof Inspection
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
      </section>

      {/* Insurance Coverage Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold">Insurance &amp; Storm Damage</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Insurance Coverage for Shingle Roof Replacement in Charlotte
              </h2>
              <p className="text-gray text-lg mb-6">
                Charlotte sits in one of the most active storm corridors in the Southeast, experiencing frequent
                hail events, high winds, and severe thunderstorms throughout the year. This means many asphalt
                shingle roof replacements qualify for homeowners insurance coverage. If your shingle roof has
                been damaged by a covered event, your insurance company is responsible for paying the cost of
                replacement minus your deductible. Understanding the claims process can save Charlotte homeowners
                thousands of dollars on their shingle roof replacement.
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Free Storm Damage Inspection</strong>
                    <p className="text-gray text-sm">
                      Best Roofing Now provides complimentary storm damage assessments with detailed photo
                      documentation that meets insurance adjuster requirements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">We Work with All Major Insurers</strong>
                    <p className="text-gray text-sm">
                      From State Farm and Allstate to USAA and Nationwide, we have experience navigating every
                      major insurance company&apos;s claims process for Charlotte homeowners.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Maximize Your Coverage</strong>
                    <p className="text-gray text-sm">
                      Our detailed Xactimate-formatted reports ensure nothing is missed. We identify all storm-related
                      damage including shingles, underlayment, flashing, vents, and gutters to maximize your claim.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Your Out-of-Pocket: Just the Deductible</strong>
                    <p className="text-gray text-sm">
                      For approved claims, your cost is typically just your deductible ($1,000 to $2,500 for most
                      Charlotte homeowners). Insurance covers the rest of your new shingle roof.
                    </p>
                  </div>
                </li>
              </ul>

              <Link
                href="/insurance-claim-roofing-charlotte-nc"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Learn About Insurance Claims <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.hero.hero3}
                alt="Storm damage shingle roof insurance claim Charlotte NC"
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
                    <p className="font-bold text-dark">Insurance Claim Experts</p>
                    <p className="text-sm text-gray">We handle the entire process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Shingle Brands */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Top Asphalt Shingle Brands We Install in Charlotte
            </h2>
            <p className="text-gray text-lg">
              As a CertainTeed ShingleMaster and GAF Factory-Certified Contractor, Best Roofing Now installs
              the most trusted shingle brands in the industry. Each manufacturer offers different strengths in
              terms of warranty coverage, color selection, and performance in Charlotte&apos;s climate. We will
              help you choose the right brand and product line based on your budget, style preferences, and
              long-term goals.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">CertainTeed</h3>
              <p className="text-gray text-sm mb-3">
                Landmark, Landmark Pro, and Grand Manor lines. Known for industry-leading warranties and superior
                color consistency. Our ShingleMaster certification unlocks their best warranty coverage for Charlotte
                homeowners.
              </p>
              <Link href="/certainteed-shingles-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">CertainTeed Options <ArrowRight className="w-3 h-3" /></Link>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">GAF Timberline</h3>
              <p className="text-gray text-sm mb-3">
                America&apos;s #1 selling shingle brand. Timberline HDZ and Timberline UHDZ offer exceptional wind
                resistance and the StainGuard Plus algae protection that Charlotte&apos;s humid climate demands.
              </p>
              <Link href="/gaf-timberline-shingles-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">GAF Options <ArrowRight className="w-3 h-3" /></Link>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Owens Corning</h3>
              <p className="text-gray text-sm mb-3">
                TruDefinition Duration and Duration FLEX lines. Known for their SureNail Technology strip that
                provides exceptional wind resistance and makes them popular in Charlotte&apos;s storm-prone climate.
              </p>
              <Link href="/architectural-shingles" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">Learn More <ArrowRight className="w-3 h-3" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* How to Save Money */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Lightbulb className="w-4 h-4" />
                <span className="text-sm font-semibold">Money-Saving Tips</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How to Save on Your Asphalt Shingle Roof Cost
              </h2>
              <p className="text-gray text-lg">
                A new asphalt shingle roof is a significant investment, but there are several legitimate ways to
                reduce your out-of-pocket costs without compromising on quality. Here are the smartest strategies
                Charlotte homeowners use to save money on their shingle roof replacement in 2026.
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-dark">File Insurance Claims After Storm Damage</strong>
                  <p className="text-gray text-sm">
                    Charlotte&apos;s frequent hail and wind storms mean many shingle roof replacements qualify for
                    insurance coverage. Your out-of-pocket cost may be just your deductible. Best Roofing Now helps
                    document damage and navigate the entire claims process.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-dark">Choose Architectural Over Designer (Unless You Need Premium)</strong>
                  <p className="text-gray text-sm">
                    Architectural shingles offer 90% of the performance and appearance of premium designer shingles at
                    40-50% less cost. For most Charlotte homes, architectural shingles are the sweet spot of value and quality.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-dark">Schedule During Off-Peak Months (November&ndash;March)</strong>
                  <p className="text-gray text-sm">
                    Late fall through early spring typically offers better availability and sometimes more competitive
                    pricing as contractor demand is lower in Charlotte during these months.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-dark">Bundle Gutters, Ventilation, or Skylights</strong>
                  <p className="text-gray text-sm">
                    Adding gutter installation, ridge vents, or skylight replacement to your roof project can save
                    10-15% versus having each service done separately.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-dark">Take Advantage of Financing Options</strong>
                  <p className="text-gray text-sm">
                    Spread the cost over time with 0% APR for 12 months or low monthly payment plans. Get the roof
                    you need now without draining your savings.
                  </p>
                  <Link href="/roof-financing-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1 mt-1">Financing Options <ArrowRight className="w-3 h-3" /></Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Best Roofing Now */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Homeowners Choose Best Roofing Now for Shingle Roofing
            </h2>
            <p className="text-gray text-lg">
              Over {SITE_CONFIG.customerCount} completed projects and a perfect {SITE_CONFIG.googleRating} Google rating.
              Here is what sets us apart for asphalt shingle roof installations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Transparent Pricing</h3>
              <p className="text-gray text-sm">Itemized estimates breaking down every shingle, nail, and hour of labor. The price we quote is the price you pay.</p>
            </div>
            <div className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Manufacturer Certified</h3>
              <p className="text-gray text-sm">CertainTeed ShingleMaster and GAF Factory-Certified, unlocking the best warranties for your shingle roof.</p>
            </div>
            <div className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Insurance Experts</h3>
              <p className="text-gray text-sm">We document storm damage and work directly with your insurer to maximize shingle roof replacement coverage.</p>
            </div>
            <div className="p-6 bg-white rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Fast Installation</h3>
              <p className="text-gray text-sm">Most asphalt shingle roofs completed in 1-2 days. Minimal disruption to your daily life with thorough cleanup.</p>
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
                Asphalt Shingle Roof Cost FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions about asphalt shingle roof costs, pricing, and what to expect
                for your Charlotte NC roofing project.
              </p>
            </div>
            <div className="space-y-4">
              {shingleCostFAQs.map((faq, index) => (
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
              Explore More Shingle Roofing Resources
            </h2>
            <p className="text-gray">
              Dive deeper into shingle types, brand comparisons, and roofing costs for the Charlotte area.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/charlotte-roofing-costs-2026"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Full Roofing Cost Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/architectural-shingles"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Architectural Shingles <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/architectural-vs-3-tab-shingles-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              3-Tab vs Architectural <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/certainteed-shingles-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              CertainTeed Shingles <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/gaf-timberline-shingles-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              GAF Timberline Shingles <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roof-replacement-cost-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Replacement Cost Guide <ArrowRight className="w-4 h-4" />
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
            <Link
              href="/tile-roof-vs-shingles-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Tile vs Shingles <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/shingle-vs-metal-roof-cost"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Shingles vs Metal Cost <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/gaf-vs-certainteed-shingles-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              GAF vs CertainTeed <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/metal-roof-cost"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Metal Roof Cost <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Get Your Shingle Roof Estimate?"
        subtitle="Get a free, no-obligation quote with transparent, itemized pricing for your asphalt shingle roof. Our certified team will inspect your roof and recommend the best shingle type for your home and budget. No hidden fees, no surprises."
      />
    </>
  );
}
