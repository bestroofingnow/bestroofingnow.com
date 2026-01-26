import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Droplets,
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  ArrowRight,
  HelpCircle,
  Home,
  Building2,
  Clock,
  Wrench,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG, LOCATIONS } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Gutter Installation Charlotte NC | Seamless Gutters | Best Roofing Now',
  description:
    'Professional gutter installation in Charlotte NC. Seamless aluminum, copper, steel & vinyl gutters. Expert gutter replacement, sizing, and gutter guard options. Free estimates from BBB A+ rated contractor. Call (704) 605-6047.',
  keywords: [
    'gutter installation charlotte nc',
    'seamless gutters charlotte',
    'gutter replacement charlotte nc',
    'gutter company charlotte',
    'gutter installers charlotte nc',
    'aluminum gutters charlotte',
    'gutter contractors near me',
    'seamless gutter installation charlotte',
    'new gutters charlotte nc',
    'residential gutter installation',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-installation-charlotte-nc`,
  },
  openGraph: {
    title: 'Gutter Installation Charlotte NC | Seamless Gutters | Best Roofing Now',
    description:
      'Expert gutter installation in Charlotte NC. Seamless aluminum, copper & steel gutters custom-fit to your home. 20+ year lifespan, no leaky joints. Free estimates from BBB A+ rated contractor.',
    url: `${SITE_CONFIG.url}/gutter-installation-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.gutters,
        width: 1200,
        height: 630,
        alt: 'Gutter installation Charlotte NC - seamless aluminum gutters',
      },
    ],
  },
};

// Gutter types data
const gutterTypes = [
  {
    name: 'Seamless Aluminum Gutters',
    description: 'The most popular choice for Charlotte homes. Custom-formed on-site from a single piece of aluminum to fit your home perfectly. No seams means no leaks.',
    priceRange: '$6 - $12/linear ft',
    lifespan: '20-30 years',
    bestFor: 'Most residential homes',
    features: ['No seams or joints', 'Rust-resistant', '25+ color options', 'Lightweight yet durable'],
    popular: true,
  },
  {
    name: 'Copper Gutters',
    description: 'Premium gutters that develop a beautiful patina over time. Exceptional durability and a distinctive look that enhances historic and upscale homes.',
    priceRange: '$25 - $40/linear ft',
    lifespan: '50-100 years',
    bestFor: 'Historic homes, luxury properties',
    features: ['Develops natural patina', 'Extremely durable', 'Never rusts', 'Increases home value'],
    popular: false,
  },
  {
    name: 'Galvanized Steel Gutters',
    description: 'Heavy-duty gutters ideal for commercial properties and homes that need maximum strength. Zinc coating provides corrosion resistance.',
    priceRange: '$8 - $15/linear ft',
    lifespan: '15-25 years',
    bestFor: 'Commercial buildings, heavy-duty needs',
    features: ['Maximum strength', 'Handles heavy loads', 'Dent-resistant', 'Cost-effective durability'],
    popular: false,
  },
  {
    name: 'Vinyl Gutters',
    description: 'Budget-friendly option that is easy to install and maintain. Best for mild climates and budget-conscious homeowners.',
    priceRange: '$3 - $6/linear ft',
    lifespan: '10-15 years',
    bestFor: 'Budget projects, DIY-friendly',
    features: ['Most affordable', 'Never rusts', 'Easy installation', 'Low maintenance'],
    popular: false,
  },
];

// Why seamless gutters are better
const seamlessBenefits = [
  {
    icon: Droplets,
    title: 'No Leaks',
    description: 'Seamless gutters eliminate the joints where traditional sectional gutters leak. One continuous piece means water flows directly to downspouts.',
  },
  {
    icon: Clock,
    title: 'Longer Lifespan',
    description: 'Without seams to fail, seamless gutters last 20-30 years compared to 10-15 years for sectional gutters.',
  },
  {
    icon: Wrench,
    title: 'Less Maintenance',
    description: 'Fewer crevices mean less debris buildup. Seamless gutters require cleaning just 1-2 times per year.',
  },
  {
    icon: Home,
    title: 'Custom Fit',
    description: 'Manufactured on-site to your exact measurements. Perfect fit means better water management and enhanced curb appeal.',
  },
  {
    icon: Shield,
    title: 'Stronger Construction',
    description: 'Continuous aluminum construction is inherently stronger than sectional pieces joined together.',
  },
  {
    icon: Star,
    title: 'Better Appearance',
    description: 'Clean, uninterrupted lines look better than sectional gutters with visible joints every 10 feet.',
  },
];

// Gutter sizing guide
const gutterSizes = [
  {
    size: '5-Inch K-Style',
    capacity: '1.2 gallons per foot',
    roofArea: 'Up to 5,500 sq ft',
    bestFor: 'Most residential homes in Charlotte',
    downspoutSize: '2x3 inch',
    recommended: true,
  },
  {
    size: '6-Inch K-Style',
    capacity: '2.0 gallons per foot',
    roofArea: '5,500 - 8,000 sq ft',
    bestFor: 'Large homes, steep roofs, heavy rainfall areas',
    downspoutSize: '3x4 inch',
    recommended: false,
  },
  {
    size: '5-Inch Half-Round',
    capacity: '1.0 gallons per foot',
    roofArea: 'Up to 4,500 sq ft',
    bestFor: 'Historic homes, traditional aesthetics',
    downspoutSize: '3-inch round',
    recommended: false,
  },
  {
    size: '6-Inch Half-Round',
    capacity: '1.5 gallons per foot',
    roofArea: '4,500 - 7,000 sq ft',
    bestFor: 'Larger historic or luxury homes',
    downspoutSize: '4-inch round',
    recommended: false,
  },
];

// Gutter guard options
const gutterGuards = [
  {
    type: 'Micro-Mesh Guards',
    description: 'Fine stainless steel mesh blocks even tiny debris like pine needles and shingle grit while allowing water through.',
    priceRange: '$15 - $25/linear ft installed',
    effectiveness: '98%+ debris blocked',
    bestFor: 'Pine trees, heavy debris areas',
    warranty: '20-25 years',
  },
  {
    type: 'Solid Cover Guards',
    description: 'Uses surface tension to draw water into the gutter while debris slides off. Excellent for leaves and large debris.',
    priceRange: '$12 - $20/linear ft installed',
    effectiveness: '95%+ debris blocked',
    bestFor: 'Oak trees, general leaf protection',
    warranty: '15-20 years',
  },
  {
    type: 'Screen Guards',
    description: 'Affordable mesh or perforated screens that fit over existing gutters. Good basic protection at lower cost.',
    priceRange: '$7 - $12/linear ft installed',
    effectiveness: '85%+ debris blocked',
    bestFor: 'Budget-conscious, moderate debris',
    warranty: '10-15 years',
  },
  {
    type: 'Foam Inserts',
    description: 'Porous foam that fits inside gutters, allowing water through while blocking debris. Most affordable option.',
    priceRange: '$4 - $8/linear ft installed',
    effectiveness: '75%+ debris blocked',
    bestFor: 'Light debris, tight budgets',
    warranty: '5-10 years',
  },
];

// Cost comparison data
const costComparison = [
  {
    material: 'Vinyl Gutters',
    materialCost: '$3 - $6/ft',
    laborCost: '$2 - $4/ft',
    totalInstalled: '$5 - $10/ft',
    avgHomeTotal: '$600 - $1,200',
    lifespan: '10-15 years',
  },
  {
    material: 'Seamless Aluminum',
    materialCost: '$4 - $8/ft',
    laborCost: '$4 - $6/ft',
    totalInstalled: '$8 - $14/ft',
    avgHomeTotal: '$1,000 - $1,800',
    lifespan: '20-30 years',
    highlight: true,
  },
  {
    material: 'Galvanized Steel',
    materialCost: '$5 - $10/ft',
    laborCost: '$4 - $6/ft',
    totalInstalled: '$9 - $16/ft',
    avgHomeTotal: '$1,100 - $2,000',
    lifespan: '15-25 years',
  },
  {
    material: 'Copper Gutters',
    materialCost: '$15 - $30/ft',
    laborCost: '$8 - $12/ft',
    totalInstalled: '$23 - $42/ft',
    avgHomeTotal: '$2,800 - $5,000+',
    lifespan: '50-100 years',
  },
];

// Installation process steps
const installationProcess = [
  {
    step: 1,
    title: 'Free Inspection & Estimate',
    description: 'We assess your current gutters, measure your roofline, evaluate drainage needs, and provide a detailed written estimate with options.',
  },
  {
    step: 2,
    title: 'Material Selection',
    description: 'Choose your gutter style, size, and color from our extensive options. We help you select the best solution for your home and budget.',
  },
  {
    step: 3,
    title: 'On-Site Fabrication',
    description: 'Our truck-mounted gutter machine creates seamless gutters on-site, custom-cut to your exact measurements.',
  },
  {
    step: 4,
    title: 'Old Gutter Removal',
    description: 'We carefully remove existing gutters and inspect fascia boards for damage that needs repair before installation.',
  },
  {
    step: 5,
    title: 'Professional Installation',
    description: 'New gutters are installed with proper slope for optimal drainage. We use heavy-duty hangers spaced every 24 inches for maximum support.',
  },
  {
    step: 6,
    title: 'Downspout & Drainage',
    description: 'Strategic downspout placement ensures water is directed away from your foundation. We can add underground drainage if needed.',
  },
  {
    step: 7,
    title: 'Final Inspection & Cleanup',
    description: 'We test the system with water, make any adjustments, and clean up completely. Your property is left spotless.',
  },
];

// FAQ data
const faqs = [
  {
    question: 'How much does gutter installation cost in Charlotte NC?',
    answer: 'Gutter installation in Charlotte NC typically costs $6-$14 per linear foot for seamless aluminum gutters, the most popular choice. For an average Charlotte home with 150-200 linear feet of gutters, expect to pay $1,000-$2,500 for professional installation. Factors affecting cost include gutter material (aluminum, copper, steel, vinyl), home height and accessibility, number of corners and downspouts, and whether old gutters need removal. We provide free, detailed estimates with no hidden fees.',
  },
  {
    question: 'What are seamless gutters and why are they better?',
    answer: 'Seamless gutters are custom-formed on-site from a continuous piece of aluminum (or other metal) to fit your home exactly. Unlike sectional gutters that have joints every 10 feet, seamless gutters have connections only at corners and downspouts. This eliminates the leak-prone joints that are the #1 failure point in traditional gutters. Seamless gutters last longer (20-30 years vs 10-15), require less maintenance, look cleaner, and handle Charlotte\'s heavy rainfall better.',
  },
  {
    question: 'How long does gutter installation take?',
    answer: 'Most residential gutter installations in Charlotte are completed in one day. A typical single-story home takes 3-5 hours, while larger or multi-story homes may take 6-8 hours. Our crews arrive with truck-mounted gutter machines that fabricate seamless gutters on-site, ensuring a quick and efficient installation. We schedule installations to minimize disruption to your day.',
  },
  {
    question: 'What size gutters do I need for my Charlotte home?',
    answer: 'Most Charlotte homes work best with 5-inch K-style gutters and 2x3-inch downspouts - this handles the vast majority of rainfall conditions. However, larger homes (over 2,500 sq ft roof area), steep roofs, or homes in areas with heavy tree cover may benefit from 6-inch gutters with 3x4-inch downspouts. During our free inspection, we calculate the optimal gutter size based on your roof area, pitch, and local rainfall data.',
  },
  {
    question: 'Are gutter guards worth the investment in Charlotte?',
    answer: 'Yes, gutter guards are often worth the investment in Charlotte due to our abundant tree coverage. Quality gutter guards can reduce cleaning from 2-4 times per year to once every 2-3 years. They also prevent clogs that cause water damage to fascia, foundation, and landscaping. The best choice depends on your specific trees - micro-mesh works best for pine needles, while solid covers excel with oak leaves. We can recommend the best option for your property.',
  },
  {
    question: 'How do I know if I need new gutters or just repairs?',
    answer: 'Signs you need gutter replacement include: gutters pulling away from the house, multiple leaks or holes, extensive rust or corrosion, sagging or improper slope, water pooling around foundation, gutters over 20 years old, or frequent overflows during moderate rain. Minor issues like a single leak or loose hanger can usually be repaired. During our free inspection, we provide an honest assessment - we recommend repairs when they make sense and only suggest replacement when truly needed.',
  },
  {
    question: 'What colors do seamless gutters come in?',
    answer: 'Seamless aluminum gutters are available in 25+ standard colors to match virtually any home exterior. Popular choices in Charlotte include white, black, bronze, dark brown, and various shades of gray to complement contemporary and traditional homes. Custom color matching is also available for unique situations. The color is baked-on enamel that resists fading and peeling for the life of the gutters.',
  },
  {
    question: 'Do you install gutters on new construction?',
    answer: 'Yes, we work with Charlotte-area builders and homeowners on new construction gutter installation. Installing gutters during the construction process allows for optimal placement and integration with the roofing system. We coordinate with your builder\'s timeline and can also add underground drainage systems more easily during construction. Contact us early in your build process for best results.',
  },
];

// Service Schema for gutter installation
function GutterInstallationServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.url}/gutter-installation-charlotte-nc/#service`,
    name: 'Gutter Installation Charlotte NC',
    description: 'Professional gutter installation services in Charlotte NC. Seamless aluminum, copper, steel, and vinyl gutters custom-fit to your home. Gutter guards, repairs, and replacement.',
    provider: {
      '@type': 'RoofingContractor',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.address.street,
        addressLocality: SITE_CONFIG.address.city,
        addressRegion: SITE_CONFIG.address.state,
        postalCode: SITE_CONFIG.address.zip,
        addressCountry: 'US',
      },
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
      name: 'Gutter Installation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Seamless Aluminum Gutter Installation',
          description: 'Custom seamless aluminum gutters fabricated on-site with 20-30 year lifespan',
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
          description: 'Premium copper gutters with 50-100 year lifespan for luxury and historic homes',
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
          description: 'Professional gutter guard systems to eliminate debris buildup',
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
          name: 'Free Gutter Inspection',
          description: 'Complimentary gutter assessment and installation estimate',
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

export default function GutterInstallationCharlottePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gutter Installation Charlotte NC', url: `${SITE_CONFIG.url}/gutter-installation-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <GutterInstallationServiceSchema />
      <LocalBusinessSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/gutter-installation-charlotte-nc`}
        pageName="Gutter Installation Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does gutter installation cost in Charlotte NC?',
            answer: 'Gutter installation in Charlotte NC costs $6-$15 per linear foot for seamless aluminum gutters, or $1,000-$3,000 for most homes. Copper gutters cost $25-$40 per foot. Best Roofing Now provides free estimates with transparent pricing.',
            speakableAnswer: 'Gutter installation in Charlotte costs $6-15 per foot for aluminum, or $1,000-3,000 for most homes. Call Best Roofing Now at 704-605-6047.',
          },
          {
            question: 'Who is the best gutter installation company in Charlotte?',
            answer: 'Best Roofing Now is Charlotte\'s top-rated gutter installation company with a 5-star Google rating and BBB A+ accreditation. This veteran-owned company installs seamless gutters made on-site with lifetime warranties.',
            speakableAnswer: 'Best Roofing Now is Charlotte\'s top-rated gutter installer with 5-star ratings and lifetime warranties. Call 704-605-6047.',
          },
          {
            question: 'What size gutters do I need in Charlotte NC?',
            answer: 'Most Charlotte homes need 5-inch gutters for standard roof sizes or 6-inch oversized gutters for large roofs with steep pitches. Best Roofing Now assesses your roof during free inspections to recommend the right gutter size.',
            speakableAnswer: 'Most Charlotte homes need 5 or 6-inch gutters. Best Roofing Now provides free inspections to recommend the right size.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.gutters}
            alt="Gutter installation Charlotte NC - seamless aluminum gutters"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Droplets className="w-4 h-4" />
              <span className="text-sm font-semibold">Professional Gutter Services</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Installation <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Custom seamless gutters, expert installation, and gutter guard systems from Charlotte&apos;s trusted gutter company.
            </p>

            {/* Key Benefits Display */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-xl">
              <div className="text-center bg-white/10 rounded-lg p-3">
                <div className="text-2xl md:text-3xl font-bold text-accent-light">20-30</div>
                <div className="text-xs md:text-sm text-white/80">Year Lifespan</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-3">
                <div className="text-2xl md:text-3xl font-bold text-accent-light">0</div>
                <div className="text-xs md:text-sm text-white/80">Leaky Seams</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-3">
                <div className="text-2xl md:text-3xl font-bold text-accent-light">1</div>
                <div className="text-xs md:text-sm text-white/80">Day Install</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Gutter Estimate
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

      {/* Types of Gutters Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Types of Gutters We Install in Charlotte
            </h2>
            <p className="text-gray text-lg">
              From budget-friendly vinyl to premium copper, we offer gutter solutions for every Charlotte home and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {gutterTypes.map((type) => (
              <div
                key={type.name}
                className={`p-6 rounded-xl border-2 transition ${
                  type.popular
                    ? 'bg-primary/5 border-primary shadow-lg'
                    : 'bg-light border-transparent hover:border-primary/30'
                }`}
              >
                {type.popular && (
                  <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-dark mb-2">{type.name}</h3>
                <p className="text-gray mb-4">{type.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <div className="text-xs text-gray uppercase">Price Range</div>
                    <div className="font-bold text-primary">{type.priceRange}</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <div className="text-xs text-gray uppercase">Lifespan</div>
                    <div className="font-bold text-primary">{type.lifespan}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-gray">
                    <strong className="text-dark">Best for:</strong> {type.bestFor}
                  </span>
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Seamless Gutters Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Seamless Gutters Are Better for Charlotte Homes
            </h2>
            <p className="text-gray text-lg">
              Seamless gutters eliminate the #1 failure point in traditional gutters - the seams. Here is why Charlotte homeowners are making the switch.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seamlessBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gutter Sizing Guide */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Gutter Sizing Guide for Charlotte
            </h2>
            <p className="text-gray text-lg">
              Proper gutter sizing is critical for handling Charlotte&apos;s 43+ inches of annual rainfall. Here is what you need to know.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-light rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-4 text-left font-semibold">Gutter Size</th>
                      <th className="px-4 py-4 text-left font-semibold">Capacity</th>
                      <th className="px-4 py-4 text-left font-semibold">Roof Area</th>
                      <th className="px-4 py-4 text-left font-semibold">Best For</th>
                      <th className="px-4 py-4 text-left font-semibold">Downspout</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {gutterSizes.map((size) => (
                      <tr
                        key={size.size}
                        className={size.recommended ? 'bg-green-50' : 'bg-white'}
                      >
                        <td className={`px-4 py-4 font-medium ${size.recommended ? 'text-primary font-bold' : 'text-dark'}`}>
                          {size.size}
                          {size.recommended && (
                            <span className="ml-2 inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                              Recommended
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-4 text-gray">{size.capacity}</td>
                        <td className="px-4 py-4 text-gray">{size.roofArea}</td>
                        <td className="px-4 py-4 text-gray text-sm">{size.bestFor}</td>
                        <td className="px-4 py-4 text-gray">{size.downspoutSize}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-sm text-gray">
                <strong>Pro Tip:</strong> Charlotte&apos;s intense summer thunderstorms can dump 1-2 inches of rain per hour. Larger gutters provide extra capacity for these events and reduce overflow risk.
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
                Ready for New Gutters That Actually Work?
              </h2>
              <p className="text-white/90">
                Get a free gutter inspection and estimate. We will recommend the perfect solution for your home.
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

      {/* Gutter Guard Options */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Gutter Guard Options for Charlotte Homes
            </h2>
            <p className="text-gray text-lg">
              Tired of cleaning gutters 2-4 times a year? Gutter guards can reduce maintenance to once every 2-3 years while preventing clogs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {gutterGuards.map((guard) => (
              <div
                key={guard.type}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-dark mb-2">{guard.type}</h3>
                <p className="text-gray mb-4">{guard.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-light rounded-lg p-3">
                    <div className="text-xs text-gray uppercase">Price Installed</div>
                    <div className="font-bold text-primary text-sm">{guard.priceRange}</div>
                  </div>
                  <div className="bg-light rounded-lg p-3">
                    <div className="text-xs text-gray uppercase">Effectiveness</div>
                    <div className="font-bold text-green-600">{guard.effectiveness}</div>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray">
                    <strong className="text-dark">Best for:</strong> {guard.bestFor}
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

      {/* Cost Comparison Table */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Gutter Installation Cost Comparison
            </h2>
            <p className="text-gray text-lg">
              Transparent pricing for gutter installation in Charlotte NC. Costs shown are for an average home with 125-150 linear feet of gutters.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-light rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-4 text-left font-semibold">Material</th>
                      <th className="px-4 py-4 text-left font-semibold">Material Cost</th>
                      <th className="px-4 py-4 text-left font-semibold">Labor Cost</th>
                      <th className="px-4 py-4 text-left font-semibold">Total Installed</th>
                      <th className="px-4 py-4 text-left font-semibold">Avg Home Total</th>
                      <th className="px-4 py-4 text-left font-semibold">Lifespan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {costComparison.map((row) => (
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
                        <td className="px-4 py-4 text-gray">{row.materialCost}</td>
                        <td className="px-4 py-4 text-gray">{row.laborCost}</td>
                        <td className="px-4 py-4 text-gray">{row.totalInstalled}</td>
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
                *Prices are estimates for Charlotte NC area. Actual costs may vary based on home height, roof complexity, and number of downspouts required.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Gutter Installation Process
            </h2>
            <p className="text-gray text-lg">
              From free estimate to final inspection, here is how we deliver quality gutter installation for Charlotte homeowners.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {installationProcess.map((item, index) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    {index < installationProcess.length - 1 && (
                      <div className="w-0.5 h-16 bg-primary/20 mx-auto mt-2" />
                    )}
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md flex-grow">
                    <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                    <p className="text-gray">{item.description}</p>
                  </div>
                </div>
              ))}
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
                Why Charlotte Homeowners Choose Best Roofing Now for Gutters
              </h2>
              <p className="text-gray text-lg mb-8">
                We are more than just a gutter company - we are your trusted partner for complete home exterior protection. Here is why over {SITE_CONFIG.customerCount}+ Charlotte homeowners trust us.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">On-Site Fabrication</strong>
                    <p className="text-gray">
                      We bring our gutter machine to your home and create seamless gutters on the spot - no waiting for special orders.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Honest Assessments</strong>
                    <p className="text-gray">
                      We recommend repairs when they make sense. We will never push replacement unless it is truly needed.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Complete Exterior Services</strong>
                    <p className="text-gray">
                      As a full-service roofing contractor, we can address any fascia rot, soffit damage, or roofing issues discovered during gutter installation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Veteran-Owned, Local Company</strong>
                    <p className="text-gray">
                      Family-owned and operated in Charlotte since 2020. We live here, work here, and stand behind our work.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Gutter installation Charlotte NC - completed project"
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

      {/* Service Areas */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Gutter Installation Throughout Charlotte Metro
          </h2>
          <p className="text-center text-gray max-w-2xl mx-auto mb-8">
            We provide professional gutter installation across the Charlotte metropolitan area and surrounding communities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {LOCATIONS.slice(0, 18).map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white rounded-lg p-3 text-center hover:bg-primary hover:text-white transition-colors group shadow-sm"
              >
                <span className="text-sm font-medium">
                  {location.city}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/locations" className="text-primary font-semibold hover:text-accent inline-flex items-center gap-2">
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
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
                <span className="text-sm font-semibold">Gutter FAQs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Common Questions About Gutter Installation
              </h2>
              <p className="text-gray text-lg">
                Get answers to frequently asked questions about gutter installation in Charlotte NC.
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
            Related Gutter & Exterior Services
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/services/gutter-repair" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <Wrench className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Gutter Repair</h3>
              <p className="text-gray text-sm">Fix leaks, sagging, and damage to restore proper drainage.</p>
            </Link>
            <Link href="/services/gutter-cleaning" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <Droplets className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Gutter Cleaning</h3>
              <p className="text-gray text-sm">Professional debris removal and downspout flushing.</p>
            </Link>
            <Link href="/services/soffit-fascia" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <Building2 className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Soffit & Fascia</h3>
              <p className="text-gray text-sm">Repair or replace damaged fascia where gutters attach.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <Home className="w-10 h-10 text-primary mb-3" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Repair</h3>
              <p className="text-gray text-sm">Address roof issues to protect your gutter investment.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready for Gutters That Last?"
        subtitle="Get a free, no-obligation estimate for gutter installation in Charlotte NC. Our experts will help you choose the best gutter solution for your home and budget."
      />
    </>
  );
}
