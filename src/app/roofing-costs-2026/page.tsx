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
  Hammer,
  Droplets,
  ThermometerSun,
  CreditCard,
  PiggyBank,
  BarChart3,
  AlertTriangle,
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
  title: 'Complete Guide to Roofing Costs in Charlotte NC (2026) | Best Roofing Now',
  description:
    'Comprehensive 2026 roofing cost guide for Charlotte NC. Roof replacement $8,000-$15,000, metal roofing $12-18/sqft, roof repair $250-$4,500, gutter installation $600-$2,400, siding $5-15/sqft. Free estimates from BBB A+ rated contractor.',
  keywords: [
    'roofing costs 2026',
    'roof replacement cost',
    'roof replacement cost charlotte nc',
    'new roof cost',
    'new roof cost charlotte nc',
    'metal roof cost',
    'metal roof cost charlotte nc',
    'asphalt shingle roof cost',
    'roof repair cost',
    'roof repair cost charlotte nc',
    'gutter installation cost',
    'gutter installation cost charlotte nc',
    'gutter replacement cost',
    'gutter replacement cost charlotte nc',
    'siding cost charlotte nc',
    'roofing prices 2026',
    'how much does a new roof cost 2026',
    'metal roofing price per square foot',
    'charlotte nc roofing estimate',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-costs-2026`,
  },
  openGraph: {
    title: 'Complete Guide to Roofing Costs in Charlotte NC (2026)',
    description:
      'The definitive 2026 roofing cost guide covering roof replacement, metal roofing, repairs, gutters, and siding costs in Charlotte NC. Real pricing from a BBB A+ rated contractor.',
    url: `${SITE_CONFIG.url}/roofing-costs-2026`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roofing costs 2026 complete guide - Best Roofing Now Charlotte NC',
      },
    ],
  },
};

const costFAQs = [
  {
    question: 'How much does a roof replacement cost in Charlotte NC in 2026?',
    answer:
      'A roof replacement in Charlotte NC costs between $8,000 and $15,000 for asphalt shingles on an average-sized home (1,800-2,200 sq ft) in 2026. Metal roofing ranges from $24,000 to $36,000, while premium materials like slate or tile can cost $30,000 to $60,000. The final price depends on roof size, material choice, pitch, complexity, and whether a tear-off of the existing roof is required. Best Roofing Now provides free, itemized estimates so you know the exact cost before work begins.',
  },
  {
    question: 'How much does a new roof cost in 2026?',
    answer:
      'A new roof in 2026 costs $4.50 to $7.00 per square foot for architectural asphalt shingles, $12 to $18 per square foot for standing seam metal, and $15 to $30 per square foot for tile roofing. For a typical 2,000 square foot roof in Charlotte NC, that translates to $9,000-$14,000 for shingles, $24,000-$36,000 for metal, or $30,000-$60,000 for tile. These prices include materials, labor, tear-off, disposal, and standard warranties.',
  },
  {
    question: 'What does metal roofing cost per square foot in Charlotte?',
    answer:
      'Metal roofing in Charlotte NC costs $12 to $18 per square foot installed in 2026. Standing seam metal, the most popular residential metal option, averages $14 to $16 per square foot. Metal shingle panels cost $10 to $14 per square foot, while corrugated metal runs $8 to $12 per square foot. A complete metal roof installation on an average Charlotte home costs $24,000 to $36,000. Metal roofs last 40 to 70 years and offer superior wind resistance up to 140 mph.',
  },
  {
    question: 'How much does asphalt shingle roofing cost?',
    answer:
      'Asphalt shingle roofing costs $3.50 to $5.50 per square foot for 3-tab shingles and $4.50 to $7.00 per square foot for architectural shingles in Charlotte NC in 2026. Architectural shingles are the most popular choice, offering 25 to 30 year lifespans with wind resistance up to 130 mph. For a typical Charlotte home, a complete asphalt shingle roof replacement ranges from $8,000 to $15,000 including materials, labor, tear-off, and disposal.',
  },
  {
    question: 'What does roof repair cost in Charlotte NC?',
    answer:
      'Roof repair costs in Charlotte NC range from $250 to $4,500 in 2026 depending on the scope of work. Minor repairs like patching a leak or replacing a few shingles cost $250 to $600. Moderate repairs involving flashing, valley work, or section replacement run $600 to $1,800. Major repairs requiring structural work, decking replacement, or emergency service cost $1,800 to $4,500 or more. Best Roofing Now provides free inspections to determine exactly what your roof needs.',
  },
  {
    question: 'How much does gutter installation cost in 2026?',
    answer:
      'Gutter installation costs $4 to $12 per linear foot in Charlotte NC in 2026, with most homes spending $600 to $2,400 total. Aluminum gutters are the most popular option at $4 to $9 per linear foot. Seamless aluminum gutters cost $6 to $12 per linear foot. Copper gutters are premium at $15 to $30 per linear foot. Gutter guards add $7 to $15 per linear foot. Best Roofing Now offers bundled pricing when gutters are installed with a roof replacement.',
  },
  {
    question: 'How much does gutter replacement cost?',
    answer:
      'Gutter replacement costs $600 to $2,400 for a typical Charlotte NC home in 2026. This includes removal of the old gutter system, installation of new gutters and downspouts, and disposal. Standard 5-inch K-style aluminum gutters cost $4 to $9 per linear foot installed. Oversized 6-inch gutters for heavy rain areas cost $6 to $12 per linear foot. Most Charlotte homes have 150 to 200 linear feet of gutters. Gutter repair without full replacement runs $150 to $500.',
  },
  {
    question: 'What factors affect roofing costs the most?',
    answer:
      'The five biggest factors affecting roofing costs in Charlotte NC are roof size (measured in squares of 100 square feet), material choice (shingles at $4.50-$7.00/sqft versus metal at $12-$18/sqft versus tile at $15-$30/sqft), roof pitch and steepness (steeper roofs require more labor and safety equipment), complexity (dormers, valleys, skylights, and multiple roof levels), and whether tear-off of the old roof is needed versus an overlay. Getting multiple written estimates is the best way to understand your specific costs.',
  },
  {
    question: 'How much does siding cost in Charlotte NC?',
    answer:
      'Siding installation in Charlotte NC costs $5 to $15 per square foot in 2026, depending on the material. Vinyl siding costs $5 to $8 per square foot and is the most affordable option. Fiber cement (HardiePlank) siding runs $8 to $12 per square foot and is the most popular choice in Charlotte for its durability. Engineered wood siding costs $7 to $11 per square foot. For a typical Charlotte home, full siding replacement ranges from $8,000 to $25,000.',
  },
  {
    question: 'Does insurance cover roofing costs in Charlotte NC?',
    answer:
      'Homeowners insurance typically covers roofing costs in Charlotte when damage is caused by a covered event such as storms, hail, wind, or fallen trees. Charlotte experiences significant storm activity, and many roof repairs and replacements qualify for partial or full insurance coverage. Best Roofing Now works directly with insurance companies, documents damage with photos and detailed reports, and assists with the entire claims process to help maximize your coverage and minimize out-of-pocket expense.',
  },
];

// Pricing schema for rich results
function PricingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Roofing Services in Charlotte NC',
    description:
      'Complete roofing services in Charlotte NC including roof replacement, metal roofing, roof repair, gutter installation, and siding. BBB A+ rated with transparent pricing and free estimates.',
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
      name: 'Roofing Costs 2026 - Charlotte NC',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Asphalt Shingle Roof Replacement',
          description: 'Complete roof replacement with architectural asphalt shingles including tear-off and disposal',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '8000',
            maxPrice: '15000',
            unitText: 'per project',
          },
        },
        {
          '@type': 'Offer',
          name: 'Metal Roof Installation',
          description: 'Standing seam metal roofing installation with 40-70 year lifespan',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '24000',
            maxPrice: '36000',
            unitText: 'per project',
          },
        },
        {
          '@type': 'Offer',
          name: 'Roof Repair',
          description: 'Roof repair services from minor patches to major structural work',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '250',
            maxPrice: '4500',
            unitText: 'per project',
          },
        },
        {
          '@type': 'Offer',
          name: 'Gutter Installation',
          description: 'Complete gutter system installation including downspouts',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '600',
            maxPrice: '2400',
            unitText: 'per project',
          },
        },
        {
          '@type': 'Offer',
          name: 'Siding Installation',
          description: 'Vinyl, fiber cement, and engineered wood siding installation',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'USD',
            minPrice: '8000',
            maxPrice: '25000',
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

// Citation-ready facts for AI extraction
const citationFacts = [
  {
    topic: 'roof replacement cost 2026',
    content:
      'A roof replacement in Charlotte NC costs between $8,000 and $15,000 for asphalt shingles on a typical 1,800 to 2,200 square foot home in 2026. Architectural shingles average $4.50 to $7.00 per square foot installed. Metal roofing costs $24,000 to $36,000, while tile roofing ranges from $30,000 to $60,000. Prices include materials, labor, tear-off, disposal, and standard manufacturer warranties.',
    source: 'Best Roofing Now - Charlotte NC contractor pricing data, 2026',
  },
  {
    topic: 'new roof cost 2026',
    content:
      'The average cost of a new roof in Charlotte NC in 2026 is $9,000 to $14,000 for a standard 2,000 square foot home with architectural asphalt shingles. This represents a 3-5% increase over 2025 prices due to rising material and labor costs. A new metal roof on the same home costs $24,000 to $36,000 but lasts 40 to 70 years compared to 25 to 30 years for shingles.',
    source: 'Best Roofing Now - Charlotte NC market data, 2026',
  },
  {
    topic: 'metal roof cost per square foot',
    content:
      'Metal roofing costs $12 to $18 per square foot installed in Charlotte NC in 2026. Standing seam metal averages $14 to $16 per square foot and is the most popular residential option. Metal shingle panels cost $10 to $14 per square foot. A complete metal roof installation on a 2,000 square foot Charlotte home ranges from $24,000 to $36,000. Metal roofs provide 40 to 70 year lifespans with 140 mph wind resistance.',
    source: 'Best Roofing Now - Charlotte NC metal roofing pricing, 2026',
  },
  {
    topic: 'asphalt shingle roof cost',
    content:
      'Asphalt shingle roofing in Charlotte NC costs $4.50 to $7.00 per square foot for architectural shingles and $3.50 to $5.50 per square foot for 3-tab shingles in 2026. Architectural shingles are chosen by over 80% of Charlotte homeowners for their dimensional appearance, 25 to 30 year warranty, and 130 mph wind resistance. A full shingle replacement on a typical home runs $8,000 to $15,000.',
    source: 'Best Roofing Now - Charlotte NC shingle pricing, 2026',
  },
  {
    topic: 'roof repair cost',
    content:
      'Roof repair in Charlotte NC costs $250 to $4,500 in 2026. Minor repairs including leak patching and individual shingle replacement cost $250 to $600. Moderate repairs involving flashing, valley work, or section replacement run $600 to $1,800. Major repairs with structural or decking work cost $1,800 to $4,500. Emergency storm damage repairs may include premium pricing for after-hours service.',
    source: 'Best Roofing Now - Charlotte NC repair pricing, 2026',
  },
  {
    topic: 'gutter installation cost',
    content:
      'Gutter installation in Charlotte NC costs $4 to $12 per linear foot in 2026, with the average home spending $600 to $2,400 total. Standard aluminum K-style gutters cost $4 to $9 per linear foot. Seamless aluminum gutters run $6 to $12 per linear foot. Gutter guards add $7 to $15 per linear foot. Most Charlotte homes require 150 to 200 linear feet of gutters and downspouts.',
    source: 'Best Roofing Now - Charlotte NC gutter pricing, 2026',
  },
  {
    topic: 'gutter replacement cost',
    content:
      'Gutter replacement costs $600 to $2,400 for a typical Charlotte NC home in 2026. This includes removal of the existing system, new gutter and downspout installation, and debris disposal. Standard 5-inch K-style aluminum gutters cost $4 to $9 per linear foot. Oversized 6-inch commercial-grade gutters for heavy rainfall areas cost $6 to $12 per linear foot. Gutter repair without replacement averages $150 to $500.',
    source: 'Best Roofing Now - Charlotte NC gutter replacement data, 2026',
  },
  {
    topic: 'siding cost charlotte nc',
    content:
      'Siding installation in Charlotte NC costs $5 to $15 per square foot in 2026. Vinyl siding is the most affordable at $5 to $8 per square foot. Fiber cement siding (HardiePlank) is the most popular in Charlotte at $8 to $12 per square foot due to its durability against humidity and storms. Engineered wood siding costs $7 to $11 per square foot. Full siding replacement on a typical home runs $8,000 to $25,000.',
    source: 'Best Roofing Now - Charlotte NC siding pricing, 2026',
  },
];

export default function RoofingCosts2026Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Guides', url: `${SITE_CONFIG.url}/guides` },
          { name: 'Roofing Costs 2026', url: `${SITE_CONFIG.url}/roofing-costs-2026` },
        ]}
      />
      <FAQSchema faqs={costFAQs} />
      <PricingSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-costs-2026`}
        pageName="Complete Guide to Roofing Costs in Charlotte NC (2026)"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does a roof replacement cost in 2026?',
            answer: 'A roof replacement in Charlotte NC costs $8,000-$15,000 for asphalt shingles, $24,000-$36,000 for metal roofing, and $30,000-$60,000 for tile on an average-sized home in 2026. Best Roofing Now provides free estimates with transparent pricing.',
            speakableAnswer: 'Roof replacement in Charlotte costs $8,000 to $15,000 for shingles or $24,000 to $36,000 for metal in 2026. Call Best Roofing Now at 704-605-6047 for a free estimate.',
          },
          {
            question: 'What does metal roofing cost per square foot?',
            answer: 'Metal roofing costs $12-$18 per square foot installed in Charlotte NC in 2026. Standing seam metal averages $14-$16 per square foot. A complete metal roof on an average home costs $24,000-$36,000 and lasts 40-70 years.',
            speakableAnswer: 'Metal roofing costs $12 to $18 per square foot in Charlotte. A full metal roof costs $24,000 to $36,000. Call 704-605-6047 for a free metal roofing estimate.',
          },
          {
            question: 'How much does roof repair cost?',
            answer: 'Roof repair costs $250-$4,500 in Charlotte NC in 2026. Minor repairs run $250-$600, moderate repairs $600-$1,800, and major repairs $1,800-$4,500+. Best Roofing Now provides free inspections and honest pricing.',
            speakableAnswer: 'Roof repair in Charlotte costs $250 to $4,500 depending on the scope. Call Best Roofing Now at 704-605-6047 for a free roof inspection.',
          },
          {
            question: 'How much do gutters cost in Charlotte NC?',
            answer: 'Gutter installation costs $4-$12 per linear foot in Charlotte NC in 2026, with most homes spending $600-$2,400 total. Aluminum gutters cost $4-$9/ft. Seamless gutters cost $6-$12/ft. Gutter guards add $7-$15/ft.',
            speakableAnswer: 'Gutters cost $600 to $2,400 for a typical Charlotte home. Call 704-605-6047 for a free gutter estimate.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Complete guide to roofing costs in Charlotte NC 2026 - Best Roofing Now"
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
              <span className="text-sm font-semibold">2026 Comprehensive Cost Hub</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Complete Guide to Roofing Costs <br className="hidden md:block" />
              <span className="text-accent-light">in Charlotte NC (2026)</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Roof Replacement, Metal Roofing, Repairs, Gutters &amp; Siding &mdash; Every Price You Need
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              This is the most comprehensive roofing cost guide for Charlotte NC homeowners in 2026. Whether you
              need a minor leak repair, a full roof replacement, new gutters, or siding, this page covers every
              service type, material option, and price range based on real local pricing from a BBB A+ rated
              contractor with over {SITE_CONFIG.customerCount} completed projects.
            </p>

            {/* Large Price Display */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-3xl">
              <div className="text-center">
                <p className="text-lg text-white/80 mb-1">Full Service Range</p>
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  $250 &ndash; $60,000+
                </div>
                <p className="text-lg text-white/80">
                  From minor repairs to premium roof installations, gutters, and siding
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-sm text-white/70">
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
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Financing Available
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

      {/* Quick Navigation */}
      <section className="bg-white py-8 border-b border-gray-100 sticky top-0 z-20">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#roof-replacement" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <Home className="w-4 h-4" /> Roof Replacement
            </a>
            <a href="#metal-roofing" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <Shield className="w-4 h-4" /> Metal Roofing
            </a>
            <a href="#roof-repair" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <Wrench className="w-4 h-4" /> Roof Repair
            </a>
            <a href="#gutters" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <Droplets className="w-4 h-4" /> Gutters
            </a>
            <a href="#siding" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <Layers className="w-4 h-4" /> Siding
            </a>
            <a href="#cost-factors" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <BarChart3 className="w-4 h-4" /> Cost Factors
            </a>
            <a href="#financing" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <CreditCard className="w-4 h-4" /> Financing
            </a>
          </div>
        </div>
      </section>

      {/* Master Cost Summary Table */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              2026 Roofing Cost Summary &mdash; All Services at a Glance
            </h2>
            <p className="text-gray text-lg">
              This table provides a comprehensive overview of what Charlotte NC homeowners can expect to pay
              for every major roofing service in 2026. These ranges reflect typical pricing for the Greater
              Charlotte area and account for differences in home size, material quality, and project complexity.
              Use this as your starting point before requesting a free, detailed estimate specific to your property.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Service</th>
                      <th className="px-6 py-4 text-left font-semibold">Per Unit Cost</th>
                      <th className="px-6 py-4 text-left font-semibold">Typical Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Asphalt Shingle Replacement</td>
                      <td className="px-6 py-4 text-gray">$4.50 &ndash; $7.00/sq ft</td>
                      <td className="px-6 py-4 font-semibold text-accent">$8,000 &ndash; $15,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">Standing Seam Metal Roof</td>
                      <td className="px-6 py-4 text-gray">$12 &ndash; $18/sq ft</td>
                      <td className="px-6 py-4 font-semibold text-accent">$24,000 &ndash; $36,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Tile Roofing</td>
                      <td className="px-6 py-4 text-gray">$15 &ndash; $30/sq ft</td>
                      <td className="px-6 py-4 font-semibold text-accent">$30,000 &ndash; $60,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">Minor Roof Repair</td>
                      <td className="px-6 py-4 text-gray">&mdash;</td>
                      <td className="px-6 py-4 font-semibold text-accent">$250 &ndash; $600</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Major Roof Repair</td>
                      <td className="px-6 py-4 text-gray">&mdash;</td>
                      <td className="px-6 py-4 font-semibold text-accent">$1,800 &ndash; $4,500+</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">Gutter Installation</td>
                      <td className="px-6 py-4 text-gray">$4 &ndash; $12/lin ft</td>
                      <td className="px-6 py-4 font-semibold text-accent">$600 &ndash; $2,400</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Gutter Replacement</td>
                      <td className="px-6 py-4 text-gray">$4 &ndash; $12/lin ft</td>
                      <td className="px-6 py-4 font-semibold text-accent">$600 &ndash; $2,400</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">Siding Installation</td>
                      <td className="px-6 py-4 text-gray">$5 &ndash; $15/sq ft</td>
                      <td className="px-6 py-4 font-semibold text-accent">$8,000 &ndash; $25,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">Roof Inspection</td>
                      <td className="px-6 py-4 text-gray">&mdash;</td>
                      <td className="px-6 py-4 font-semibold text-green-600">Free &ndash; $350</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-sm text-gray">
                <strong>Note:</strong> Prices reflect 2026 Charlotte area averages for a typical 1,800-2,200 sq ft home.
                Actual costs vary based on roof size, complexity, material grade, and current market conditions. Best Roofing
                Now offers free estimates &mdash; <Link href="/contact" className="text-primary font-semibold hover:underline">request yours today</Link>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Replacement Costs Section */}
      <section id="roof-replacement" className="section bg-light scroll-mt-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Home className="w-4 h-4" />
              <span className="text-sm font-semibold">Roof Replacement</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Replacement Costs by Material (2026)
            </h2>
            <p className="text-gray text-lg">
              Roof replacement is the largest roofing investment most Charlotte homeowners will make. The cost
              depends primarily on roof size and material choice. Asphalt shingles remain the most popular option
              for their balance of cost and performance, while metal roofing continues to grow rapidly due to its
              40-70 year lifespan and superior storm resistance. Below is what Charlotte homeowners pay for a
              complete roof replacement in 2026 by material type, including labor, tear-off, disposal, and
              standard warranties.
            </p>
          </div>

          {/* Replacement by Material Cards */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-primary">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-dark">Asphalt Shingles</h3>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">Most Popular</span>
              </div>
              <p className="text-3xl font-bold text-primary mb-1">$8,000 &ndash; $15,000</p>
              <p className="text-sm text-gray mb-3">$4.50 &ndash; $7.00 per sq ft installed</p>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>25-30 year lifespan with manufacturer warranty</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Wind resistance up to 130 mph</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Chosen by 80%+ of Charlotte homeowners</span>
                </li>
              </ul>
              <Link href="/asphalt-shingle-roofing-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1 mt-4">
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-blue-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-dark">Metal Roofing</h3>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Best Long-Term</span>
              </div>
              <p className="text-3xl font-bold text-primary mb-1">$24,000 &ndash; $36,000</p>
              <p className="text-sm text-gray mb-3">$12 &ndash; $18 per sq ft installed</p>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>40-70 year lifespan, virtually maintenance-free</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Wind resistance up to 140+ mph</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>25-40% energy savings on cooling costs</span>
                </li>
              </ul>
              <Link href="/standing-seam-metal-roof-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1 mt-4">
                Metal Roofing Details <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-orange-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-dark">Tile Roofing</h3>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">Premium</span>
              </div>
              <p className="text-3xl font-bold text-primary mb-1">$30,000 &ndash; $60,000</p>
              <p className="text-sm text-gray mb-3">$15 &ndash; $30 per sq ft installed</p>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>50-100 year lifespan, fireproof</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Distinctive Mediterranean/Spanish appearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Excellent insulation, reduces energy costs</span>
                </li>
              </ul>
              <Link href="/tile-roofing-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1 mt-4">
                Tile Options <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Replacement Cost by Home Size */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Roof Replacement Cost by Home Size
            </h3>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Home Size (Roof Area)</th>
                      <th className="px-6 py-4 text-left font-semibold">Shingles</th>
                      <th className="px-6 py-4 text-left font-semibold">Metal</th>
                      <th className="px-6 py-4 text-left font-semibold">Tile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">1,000 sq ft</td>
                      <td className="px-6 py-4 text-gray">$4,500 &ndash; $7,000</td>
                      <td className="px-6 py-4 text-gray">$12,000 &ndash; $18,000</td>
                      <td className="px-6 py-4 text-gray">$15,000 &ndash; $30,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">1,500 sq ft</td>
                      <td className="px-6 py-4 text-gray">$6,750 &ndash; $10,500</td>
                      <td className="px-6 py-4 text-gray">$18,000 &ndash; $27,000</td>
                      <td className="px-6 py-4 text-gray">$22,500 &ndash; $45,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">2,000 sq ft</td>
                      <td className="px-6 py-4 font-semibold text-accent">$9,000 &ndash; $14,000</td>
                      <td className="px-6 py-4 font-semibold text-accent">$24,000 &ndash; $36,000</td>
                      <td className="px-6 py-4 font-semibold text-accent">$30,000 &ndash; $60,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-dark">2,500 sq ft</td>
                      <td className="px-6 py-4 text-gray">$11,250 &ndash; $17,500</td>
                      <td className="px-6 py-4 text-gray">$30,000 &ndash; $45,000</td>
                      <td className="px-6 py-4 text-gray">$37,500 &ndash; $75,000</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-dark">3,000+ sq ft</td>
                      <td className="px-6 py-4 text-gray">$13,500 &ndash; $21,000+</td>
                      <td className="px-6 py-4 text-gray">$36,000 &ndash; $54,000+</td>
                      <td className="px-6 py-4 text-gray">$45,000 &ndash; $90,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-sm text-gray">
                <strong>Note:</strong> The 2,000 sq ft row is highlighted as it represents the average Charlotte home.
                Prices include materials, labor, tear-off, disposal, and standard warranties.
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/roof-replacement-cost-charlotte-nc"
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                Replacement Cost Guide <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/roof-replacement-charlotte-nc"
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                Replacement Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/charlotte-roofing-costs-2026"
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                Charlotte-Specific Pricing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metal Roofing Costs - Detailed Section */}
      <section id="metal-roofing" className="section bg-white scroll-mt-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold">Metal Roofing Deep Dive</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Metal Roof Cost in Charlotte NC (2026)
              </h2>
              <p className="text-gray text-lg mb-6">
                Metal roofing is the fastest-growing roofing material in Charlotte, and for good reason. At $12
                to $18 per square foot installed, metal costs roughly 2-3x more than asphalt shingles upfront but
                delivers 40 to 70 years of virtually maintenance-free performance. For Charlotte homeowners who
                plan to stay in their home long-term, metal roofing often costs less over a 50-year period than
                two shingle replacements. Metal roofs also reflect solar heat, reducing cooling costs by 25-40%
                during Charlotte&apos;s hot summers.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between bg-light rounded-lg p-4">
                  <div>
                    <h3 className="font-bold text-dark">Standing Seam Metal</h3>
                    <p className="text-sm text-gray">Most popular residential metal option</p>
                  </div>
                  <span className="text-lg font-bold text-primary">$14 &ndash; $16/sq ft</span>
                </div>
                <div className="flex items-center justify-between bg-light rounded-lg p-4">
                  <div>
                    <h3 className="font-bold text-dark">Metal Shingle Panels</h3>
                    <p className="text-sm text-gray">Looks like traditional shingles</p>
                  </div>
                  <span className="text-lg font-bold text-primary">$10 &ndash; $14/sq ft</span>
                </div>
                <div className="flex items-center justify-between bg-light rounded-lg p-4">
                  <div>
                    <h3 className="font-bold text-dark">Corrugated Metal</h3>
                    <p className="text-sm text-gray">Budget-friendly metal option</p>
                  </div>
                  <span className="text-lg font-bold text-primary">$8 &ndash; $12/sq ft</span>
                </div>
                <div className="flex items-center justify-between bg-light rounded-lg p-4">
                  <div>
                    <h3 className="font-bold text-dark">Copper Roofing</h3>
                    <p className="text-sm text-gray">Ultra-premium, 100+ year lifespan</p>
                  </div>
                  <span className="text-lg font-bold text-primary">$25 &ndash; $40+/sq ft</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 mb-6">
                <h4 className="font-bold text-dark mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Metal vs. Shingles: 50-Year Cost Comparison
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-dark">Metal Roof (1 installation)</p>
                    <p className="text-2xl font-bold text-blue-600">$24,000 &ndash; $36,000</p>
                    <p className="text-gray">Lasts 40-70 years</p>
                  </div>
                  <div>
                    <p className="font-semibold text-dark">Shingles (2 replacements)</p>
                    <p className="text-2xl font-bold text-gray-600">$16,000 &ndash; $30,000</p>
                    <p className="text-gray">Replace at year 25-30</p>
                  </div>
                </div>
                <p className="text-gray text-xs mt-3">Metal roofing delivers comparable or lower total cost with zero mid-life replacement hassle, plus energy savings and higher resale value.</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/standing-seam-metal-roof-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Standing Seam Details <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/metal-roof-vs-shingles-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Metal vs Shingles <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/metal-roofing-services"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Metal Roofing Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.hero.metalRoof}
                alt="Metal roof installation cost Charlotte NC - standing seam metal roofing"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-dark">40-70 Year Lifespan</p>
                    <p className="text-sm text-gray">140+ mph wind rating</p>
                  </div>
                </div>
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

      {/* Roof Repair Costs Section */}
      <section id="roof-repair" className="section bg-light scroll-mt-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-semibold">Roof Repair</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Repair Costs Breakdown (2026)
            </h2>
            <p className="text-gray text-lg">
              Roof repair is the most common roofing expense for Charlotte homeowners. The cost ranges from $250
              for a simple patch to $4,500 or more for extensive structural work. Charlotte&apos;s climate with
              hot summers, heavy rainstorms, and occasional hail takes a toll on roofing materials over time.
              Catching problems early with regular inspections saves thousands by preventing minor damage from
              becoming a major expense. Here is what you can expect to pay for each type of roof repair in 2026.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-green-500">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">Minor Repairs</h3>
              <p className="text-2xl font-bold text-green-600 mb-3">$250 &ndash; $600</p>
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
                  <span>Vent boot and pipe collar replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Minor sealant and caulking around flashing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-yellow-700" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">Moderate Repairs</h3>
              <p className="text-2xl font-bold text-yellow-600 mb-3">$600 &ndash; $1,800</p>
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
                  <span>Multiple shingle section replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Small area decking replacement (under 50 sq ft)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all border-t-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">Major Repairs</h3>
              <p className="text-2xl font-bold text-red-600 mb-3">$1,800 &ndash; $4,500+</p>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Structural repair including rafter and truss work</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Large decking replacement (50+ sq ft)</span>
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
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/roof-repair-cost-charlotte-nc"
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                Repair Cost Guide <ArrowRight className="w-4 h-4" />
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

      {/* Gutter Costs Section */}
      <section id="gutters" className="section bg-white scroll-mt-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Droplets className="w-4 h-4" />
              <span className="text-sm font-semibold">Gutters &amp; Downspouts</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Gutter Installation &amp; Replacement Costs (2026)
            </h2>
            <p className="text-gray text-lg">
              Gutters are critical to protecting your home&apos;s foundation, siding, and landscaping from water
              damage. Charlotte receives approximately 43 inches of rainfall annually, making a properly functioning
              gutter system essential. Gutter installation costs $4 to $12 per linear foot, with most Charlotte
              homes spending $600 to $2,400 total. Bundling gutter installation with a roof replacement project
              often saves 10-15% on the gutter work.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-dark mb-4">Gutter Installation by Material</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white rounded-lg p-4">
                  <div>
                    <p className="font-bold text-dark">Aluminum K-Style</p>
                    <p className="text-sm text-gray">Most popular, 20-30 year life</p>
                  </div>
                  <span className="text-lg font-bold text-primary">$4 &ndash; $9/ft</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4">
                  <div>
                    <p className="font-bold text-dark">Seamless Aluminum</p>
                    <p className="text-sm text-gray">Custom-fitted, fewer leaks</p>
                  </div>
                  <span className="text-lg font-bold text-primary">$6 &ndash; $12/ft</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4">
                  <div>
                    <p className="font-bold text-dark">Copper Gutters</p>
                    <p className="text-sm text-gray">Premium, 50+ year life</p>
                  </div>
                  <span className="text-lg font-bold text-primary">$15 &ndash; $30/ft</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4">
                  <div>
                    <p className="font-bold text-dark">Gutter Guards</p>
                    <p className="text-sm text-gray">Leaf protection add-on</p>
                  </div>
                  <span className="text-lg font-bold text-primary">$7 &ndash; $15/ft</span>
                </div>
              </div>
            </div>

            <div className="bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-dark mb-4">Gutter Replacement &amp; Repair</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-dark">Full Gutter Replacement</p>
                    <span className="text-lg font-bold text-accent">$600 &ndash; $2,400</span>
                  </div>
                  <p className="text-sm text-gray">Includes removal of old system, new gutters and downspouts, disposal. Most homes have 150-200 linear feet of gutters.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-dark">Gutter Repair</p>
                    <span className="text-lg font-bold text-accent">$150 &ndash; $500</span>
                  </div>
                  <p className="text-sm text-gray">Fixing leaks, reattaching sections, replacing damaged downspouts, or resealing joints and end caps.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-dark">Gutter Cleaning</p>
                    <span className="text-lg font-bold text-accent">$100 &ndash; $250</span>
                  </div>
                  <p className="text-sm text-gray">Professional cleaning of debris, leaves, and blockages. Recommended twice per year in Charlotte.</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Link href="/gutter-installation-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">
                  Installation <ArrowRight className="w-3 h-3" />
                </Link>
                <Link href="/gutter-repair-charlotte-nc" className="text-primary text-sm font-semibold hover:text-accent inline-flex items-center gap-1">
                  Repair <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Siding Costs Section */}
      <section id="siding" className="section bg-light scroll-mt-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Layers className="w-4 h-4" />
                <span className="text-sm font-semibold">Siding</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Siding Costs in Charlotte NC (2026)
              </h2>
              <p className="text-gray text-lg mb-6">
                Siding protects your home from moisture, wind, and pests while defining its curb appeal. Charlotte&apos;s
                humidity and storm exposure make durable siding materials essential. Siding installation costs $5 to
                $15 per square foot depending on the material, with most Charlotte homes spending $8,000 to $25,000
                for a full replacement. Many homeowners bundle siding work with a roof replacement for a seamless
                exterior upgrade and bundled cost savings.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between bg-white rounded-lg p-4">
                  <div>
                    <h3 className="font-bold text-dark">Vinyl Siding</h3>
                    <p className="text-sm text-gray">Most affordable, low maintenance</p>
                  </div>
                  <span className="text-lg font-bold text-primary">$5 &ndash; $8/sq ft</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4">
                  <div>
                    <h3 className="font-bold text-dark">Fiber Cement (HardiePlank)</h3>
                    <p className="text-sm text-gray">Most popular in Charlotte, 30-50 year life</p>
                  </div>
                  <span className="text-lg font-bold text-primary">$8 &ndash; $12/sq ft</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4">
                  <div>
                    <h3 className="font-bold text-dark">Engineered Wood</h3>
                    <p className="text-sm text-gray">Natural wood look, good durability</p>
                  </div>
                  <span className="text-lg font-bold text-primary">$7 &ndash; $11/sq ft</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-lg p-4">
                  <div>
                    <h3 className="font-bold text-dark">Natural Wood</h3>
                    <p className="text-sm text-gray">Premium appearance, requires maintenance</p>
                  </div>
                  <span className="text-lg font-bold text-primary">$10 &ndash; $15/sq ft</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/siding-installation-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Siding Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.services.siding}
                alt="Siding installation cost Charlotte NC - fiber cement and vinyl siding"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Full Siding Replacement</p>
                    <p className="text-sm text-gray">$8,000 &ndash; $25,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factors Affecting Cost */}
      <section id="cost-factors" className="section bg-white scroll-mt-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm font-semibold">Pricing Factors</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              5 Factors That Affect Your Roofing Cost
            </h2>
            <p className="text-gray text-lg">
              Understanding what drives roofing costs helps you budget accurately and evaluate estimates. These
              five factors have the biggest impact on what you will pay for any roofing project in Charlotte NC.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Ruler className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">1. Roof Size</h3>
              <p className="text-gray text-sm">
                Roof size is the single biggest cost driver, measured in roofing squares (100 sq ft each). A
                typical Charlotte home has 18-22 squares. Larger roofs cost more in materials and labor but
                may have a lower per-square-foot price due to economies of scale.
              </p>
            </div>

            <div className="bg-light rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">2. Roof Pitch &amp; Steepness</h3>
              <p className="text-gray text-sm">
                Steeper roofs (8/12 pitch and above) cost 20-40% more than standard slopes because they require
                specialized safety equipment, harnesses, and more labor time. Many Charlotte homes have moderate
                5/12 to 7/12 pitches that do not carry a steep-roof surcharge.
              </p>
            </div>

            <div className="bg-light rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">3. Material Choice</h3>
              <p className="text-gray text-sm">
                Material costs range from $3.50/sq ft for basic 3-tab shingles to $40+/sq ft for copper. The
                material you choose determines not just your upfront cost but also your long-term value through
                lifespan, maintenance requirements, energy efficiency, and resale impact.
              </p>
            </div>

            <div className="bg-light rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">4. Complexity &amp; Features</h3>
              <p className="text-gray text-sm">
                Dormers, valleys, skylights, chimneys, and multiple roof levels add complexity that increases
                labor time and material waste. A simple gable roof costs less than a complex hip roof with
                multiple penetrations. Each feature adds $200-$800 to the project.
              </p>
            </div>

            <div className="bg-light rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Hammer className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">5. Tear-Off vs. Overlay</h3>
              <p className="text-gray text-sm">
                Removing the existing roof (tear-off) before installing new materials adds $1,000-$3,000 to the
                project. An overlay installs new shingles over old ones, saving 20-25% on labor but is not always
                recommended. Most contractors, including Best Roofing Now, recommend tear-off for the best results
                and longest warranty coverage.
              </p>
            </div>

            <div className="bg-light rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <ThermometerSun className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Bonus: Seasonal Timing</h3>
              <p className="text-gray text-sm">
                Roofing work in Charlotte during off-peak season (November through March) may offer better
                scheduling flexibility and sometimes more competitive pricing. Peak season runs April through
                October when demand is highest. Emergency storm repairs carry premium pricing year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options Section */}
      <section id="financing" className="section bg-gradient-to-br from-primary/5 to-white scroll-mt-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <CreditCard className="w-4 h-4" />
                <span className="text-sm font-semibold">Payment Options</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Financing Options for Your Roofing Project
              </h2>
              <p className="text-gray text-lg">
                A new roof is a significant investment, but you do not have to pay for it all at once. Best Roofing
                Now offers flexible financing options to help Charlotte homeowners get the roofing work they need
                without straining their budget. We work with multiple lenders to find the best terms for your situation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiggyBank className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-bold text-dark mb-2">0% APR for 12 Months</h3>
                <p className="text-gray text-sm">
                  Spread your roofing cost over 12 months with zero interest. Perfect for homeowners who want to
                  pay over time without any extra cost. Subject to credit approval.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-dark mb-2">Low Monthly Payments</h3>
                <p className="text-gray text-sm">
                  Extended payment plans with low monthly installments. A $12,000 roof replacement can be as low
                  as $150-$200 per month depending on your term and credit profile.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">Insurance Assistance</h3>
                <p className="text-gray text-sm">
                  For storm damage, we work directly with your insurance company to maximize coverage and minimize
                  your out-of-pocket cost. We document damage and handle the claims process.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  href="/roof-financing-charlotte-nc"
                  variant="primary"
                  size="lg"
                  icon={<CreditCard className="w-5 h-5" aria-hidden="true" />}
                >
                  Explore Financing Options
                </Button>
                <Button
                  href="/insurance-claim-roofing-charlotte-nc"
                  variant="outline"
                  size="lg"
                  icon={<Shield className="w-5 h-5" aria-hidden="true" />}
                >
                  Insurance Claim Help
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Material Cost Comparison &mdash; Side by Side
            </h2>
            <p className="text-gray text-lg">
              Choosing the right roofing material means balancing upfront cost against lifespan, maintenance,
              energy efficiency, and home value. This comparison helps Charlotte homeowners see the full picture.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-4 text-left font-semibold">Material</th>
                      <th className="px-4 py-4 text-left font-semibold">Cost/sq ft</th>
                      <th className="px-4 py-4 text-left font-semibold">Lifespan</th>
                      <th className="px-4 py-4 text-left font-semibold">Wind Rating</th>
                      <th className="px-4 py-4 text-left font-semibold">Maintenance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white">
                      <td className="px-4 py-4 font-medium text-dark">3-Tab Shingles</td>
                      <td className="px-4 py-4 text-gray">$3.50-$5.50</td>
                      <td className="px-4 py-4 text-gray">15-20 yrs</td>
                      <td className="px-4 py-4 text-gray">60-70 mph</td>
                      <td className="px-4 py-4 text-gray">Moderate</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-4 font-medium text-dark">Architectural Shingles</td>
                      <td className="px-4 py-4 font-semibold text-accent">$4.50-$7.00</td>
                      <td className="px-4 py-4 text-gray">25-30 yrs</td>
                      <td className="px-4 py-4 text-gray">Up to 130 mph</td>
                      <td className="px-4 py-4 text-gray">Low</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-4 font-medium text-dark">Designer Shingles</td>
                      <td className="px-4 py-4 text-gray">$6.00-$9.00</td>
                      <td className="px-4 py-4 text-gray">30-50 yrs</td>
                      <td className="px-4 py-4 text-gray">Up to 130 mph</td>
                      <td className="px-4 py-4 text-gray">Low</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-4 font-medium text-dark">Standing Seam Metal</td>
                      <td className="px-4 py-4 font-semibold text-accent">$12-$18</td>
                      <td className="px-4 py-4 text-gray">40-70 yrs</td>
                      <td className="px-4 py-4 text-gray">140+ mph</td>
                      <td className="px-4 py-4 text-gray">Very Low</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-4 font-medium text-dark">Tile (Clay/Concrete)</td>
                      <td className="px-4 py-4 text-gray">$15-$30</td>
                      <td className="px-4 py-4 text-gray">50-100 yrs</td>
                      <td className="px-4 py-4 text-gray">Up to 150 mph</td>
                      <td className="px-4 py-4 text-gray">Low</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-4 font-medium text-dark">Natural Slate</td>
                      <td className="px-4 py-4 text-gray">$15-$30</td>
                      <td className="px-4 py-4 text-gray">75-100+ yrs</td>
                      <td className="px-4 py-4 text-gray">Up to 150 mph</td>
                      <td className="px-4 py-4 text-gray">Very Low</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-4 font-medium text-dark">Cedar Shake</td>
                      <td className="px-4 py-4 text-gray">$10-$20</td>
                      <td className="px-4 py-4 text-gray">30-50 yrs</td>
                      <td className="px-4 py-4 text-gray">Up to 110 mph</td>
                      <td className="px-4 py-4 text-gray">High</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-4 font-medium text-dark">Copper</td>
                      <td className="px-4 py-4 text-gray">$25-$40+</td>
                      <td className="px-4 py-4 text-gray">100+ yrs</td>
                      <td className="px-4 py-4 text-gray">Up to 150 mph</td>
                      <td className="px-4 py-4 text-gray">Very Low</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-sm text-gray">
                <strong>Charlotte recommendation:</strong> Architectural shingles offer the best value for most homeowners.
                Metal roofing is ideal for long-term homeowners who want a &ldquo;forever roof.&rdquo;
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
              Why Charlotte Trusts Best Roofing Now
            </h2>
            <p className="text-gray text-lg">
              Over {SITE_CONFIG.customerCount} completed projects and a perfect {SITE_CONFIG.googleRating} Google rating. Here is what sets us apart.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Transparent Pricing</h3>
              <p className="text-gray text-sm">Itemized estimates with no hidden fees. The price we quote is the price you pay.</p>
            </div>
            <div className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">BBB A+ &amp; Certified</h3>
              <p className="text-gray text-sm">CertainTeed, GAF, and Owens Corning certified with manufacturer-backed warranties.</p>
            </div>
            <div className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Insurance Experts</h3>
              <p className="text-gray text-sm">We help document damage and work directly with your insurance company to maximize coverage.</p>
            </div>
            <div className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Flexible Financing</h3>
              <p className="text-gray text-sm">0% APR for 12 months and low monthly payment plans to fit any budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <CitationSection
              heading="2026 Roofing Cost Facts &mdash; Charlotte NC"
              citations={citationFacts}
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
                Roofing Cost FAQs (2026)
              </h2>
              <p className="text-gray text-lg">
                Answers to the most frequently asked questions about roofing costs, metal roofing, roof repair, gutters, and siding in Charlotte NC.
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
              href="/charlotte-roofing-costs-2026"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Charlotte-Specific Costs <ArrowRight className="w-4 h-4" />
            </Link>
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
              href="/metal-roofing-services"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Metal Roofing Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/gutter-installation-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Gutter Installation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/siding-installation-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Siding Services <ArrowRight className="w-4 h-4" />
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
              href="/roof-financing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Financing Options <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/insurance-claim-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Insurance Claims <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service City Links */}
      <section className="section bg-white">
        <div className="container">
          <ServiceCityLinks
            city="Charlotte"
            citySlug="charlotte-nc"
            title="Roofing Services by City"
            subtitle="Best Roofing Now serves Charlotte and the entire metro area."
            variant="grid"
          />
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="guide"
        city="Charlotte"
        slug="roofing-costs-2026"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-costs-2026`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready to Get Your Roofing Estimate?"
        subtitle="Get a free, no-obligation quote with transparent pricing for roof replacement, metal roofing, repairs, gutters, or siding. Our team will assess your property and provide honest recommendations tailored to your needs and budget. No hidden fees, no surprises."
      />
    </>
  );
}
