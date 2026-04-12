import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Shield,
  CheckCircle,
  Phone,
  Calendar,
  Zap,
  ThermometerSun,
  Clock,
  DollarSign,
  CloudRain,
  Wind,
  Droplets,
  Star,
  ArrowRight,
  HelpCircle,
  Home,
  Building2,
  Layers,
  Wrench,
  TrendingUp,
  XCircle,
  AlertTriangle,
  Volume2,
  Hammer,
} from 'lucide-react';
import { CitationSection } from '@/components/seo/CitationBlock';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { getRoofingContractorIdentity } from '@/lib/schema-helpers';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Metal Roofing Charlotte NC | 40-70 Yr',
  description:
    'Metal roofing Charlotte NC experts -- 2026 pricing, 40-70 yr lifespan, 25% energy savings & 140 MPH wind resistance. Standing seam & metal shingle installs by BBB A+ veteran-owned contractors. Free estimate!',
  keywords: [
    'metal roofing charlotte nc',
    'standing seam metal roof charlotte',
    'metal roof installation charlotte nc',
    'metal roof cost charlotte nc',
    'metal roofing contractors charlotte nc',
    'metal vs shingles charlotte',
    'standing seam metal roof charlotte nc',
    'metal roof contractors charlotte nc',
    'metal roofing lake norman nc',
    'metal roofing lake wylie sc',
    'metal roofing mooresville nc',
    'metal roofing huntersville nc',
    'metal roof vs shingles charlotte nc',
    'is a metal roof worth it charlotte nc',
    'metal shingle roofing charlotte nc',
    'metal roof replacement charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/metal-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Metal Roofing Charlotte NC | 40-70 Year Lifespan | Best Roofing Now',
  description:
      'Metal roofing Charlotte NC -- standing seam, metal shingles & corrugated options. 40-70 yr lifespan, 25% energy savings, 140 MPH wind resistance. Free estimates from BBB A+ veteran-owned contractor.',
  url: `${SITE_CONFIG.url}/metal-roofing-charlotte-nc`,
  type: 'website',
  images: [
      {
        url: IMAGES.hero.metalRoof,
  width: 1200,
  height: 630,
  alt: 'Metal roofing installation Charlotte NC - standing seam metal roof',
      },
    ],
  },
};

// Metal roofing benefits
const metalBenefits = [
  {
    icon: Clock,
  title: 'Exceptional Longevity',
  description: 'Metal roofs last 40-70 years, 2-3x longer than traditional asphalt shingles.',
  stat: '40-70 Years',
  },
  {
    icon: ThermometerSun,
  title: 'Energy Efficiency',
  description: 'Reflects solar heat, reducing cooling costs by up to 25% in Charlotte summers.',
  stat: '25% Savings',
  },
  {
    icon: Wind,
  title: 'Storm Resistance',
  description: 'Withstands winds up to 140 MPH - ideal for Charlotte severe weather.',
  stat: '140 MPH',
  },
  {
    icon: Shield,
  title: 'Low Maintenance',
  description: 'Minimal upkeep required. No shingle replacement or granule loss issues.',
  stat: 'Worry-Free',
  },
  {
    icon: Zap,
  title: 'Fire Resistant',
  description: 'Class A fire rating provides maximum protection for your home.',
  stat: 'Class A',
  },
  {
    icon: Droplets,
  title: 'Moisture Protection',
  description: 'Interlocking panels prevent water infiltration during heavy Charlotte rains.',
  stat: '100% Sealed',
  },
];

// Types of metal roofing
const metalTypes = [
  {
    name: 'Standing Seam Metal Roof',
  description: 'The premium choice for metal roofing in Charlotte. Concealed fasteners create a sleek, modern appearance while providing superior weather protection.',
  priceRange: '$12 - $18/sq ft',
  lifespan: '50-70 years',
  bestFor: 'Modern homes, maximum durability',
  features: ['Concealed fasteners', 'Minimal maintenance', 'Premium appearance', 'Best wind resistance'],
  image: IMAGES.hero.metalRoof,
  },
  {
    name: 'Metal Shingles',
  description: 'Designed to mimic traditional shingles, slate, or tile while providing all the benefits of metal roofing. Perfect for homeowners who want metal performance with classic aesthetics.',
  priceRange: '$9 - $14/sq ft',
  lifespan: '40-60 years',
  bestFor: 'Traditional home styles, HOA communities',
  features: ['Classic appearance', 'Multiple style options', 'Easy installation', 'Lightweight'],
  image: IMAGES.houses.house1,
  },
  {
    name: 'Corrugated Metal Roof',
  description: 'The most affordable metal roofing option. Excellent for agricultural buildings, sheds, and budget-conscious homeowners seeking metal durability.',
  priceRange: '$6 - $10/sq ft',
  lifespan: '30-50 years',
  bestFor: 'Budget-friendly, commercial/agricultural',
  features: ['Most affordable option', 'Quick installation', 'Industrial aesthetic', 'Excellent drainage'],
  image: IMAGES.commercial.warehouse,
  },
  {
    name: 'Stone-Coated Steel Roofing',
  description: 'Stone-coated steel combines the strength of steel with the beauty of natural stone granules. Available in tile, shake, and shingle profiles, this premium option delivers Class 4 hail resistance while looking like traditional roofing materials.',
  priceRange: '$10 - $16/sq ft',
  lifespan: '40-70 years',
  bestFor: 'Upscale homes, HOA-restricted areas',
  features: ['Class 4 impact rating', 'Natural stone finish', 'Fade-resistant color', 'Walkable surface'],
  image: IMAGES.houses.house1,
  },
];

// Cost comparison table data
const costComparison = [
  {
    material: 'Asphalt Shingles (3-Tab)',
  upfrontCost: '$8,000 - $12,000',
  lifespan: '15-20 years',
  replacements: '3-4 replacements',
  totalCost50Years: '$32,000 - $48,000',
  maintenance: 'High',
  },
  {
    material: 'Architectural Shingles',
  upfrontCost: '$10,000 - $18,000',
  lifespan: '25-30 years',
  replacements: '2 replacements',
  totalCost50Years: '$30,000 - $54,000',
  maintenance: 'Medium',
  },
  {
    material: 'Metal Roofing',
  upfrontCost: '$18,000 - $35,000',
  lifespan: '40-70 years',
  replacements: '0-1 replacement',
  totalCost50Years: '$18,000 - $35,000',
  maintenance: 'Low',
  highlight: true,
  },
];

// Charlotte climate benefits
const climateReasons = [
  {
    icon: ThermometerSun,
  title: 'Beat Charlotte Heat',
  description: 'Metal roofs reflect up to 70% of solar energy, dramatically reducing attic temperatures. During Charlotte summers that regularly exceed 90°F, this translates to lower AC bills and a more comfortable home.',
  },
  {
    icon: CloudRain,
  title: 'Handle Heavy Rainfall',
  description: 'Charlotte receives over 43 inches of rain annually. Metal roofing\'s interlocking panel design creates a watertight seal that sheds water efficiently, preventing leaks and water damage.',
  },
  {
    icon: Wind,
  title: 'Withstand Severe Storms',
  description: 'Charlotte experiences 25+ severe thunderstorm days per year. Standing seam metal roofs are rated for 140+ MPH winds and are virtually impervious to hail damage.',
  },
  {
    icon: Droplets,
  title: 'Resist Humidity & Moisture',
  description: 'Charlotte\'s humid subtropical climate promotes mold and algae growth on traditional roofs. Metal roofing resists moisture, mold, mildew, and algae naturally.',
  },
];

// FAQ data
const faqs = [
  {
    question: 'How much does a metal roof cost in Charlotte NC?',
  answer: 'Metal roofing in Charlotte NC typically costs $8-$18 per square foot installed, or $18,000-$35,000 for an average-sized home. Standing seam metal roofs are at the higher end ($12-$18/sq ft), while metal shingles and corrugated options are more affordable ($6-$14/sq ft). While the upfront cost is higher than asphalt shingles, metal roofs last 2-3 times longer, often making them more economical over time.',
  },
  {
    question: 'How long does a metal roof last in Charlotte?',
  answer: 'A properly installed metal roof in Charlotte lasts 40-70 years, significantly longer than the 20-30 year lifespan of asphalt shingles. Standing seam metal roofs can last 50-70 years, while metal shingles typically last 40-60 years. Charlotte\'s climate is actually well-suited for metal roofing - the main threats to roofing (UV, rain, and storms) are all handled exceptionally well by metal.',
  },
  {
    question: 'Are metal roofs noisy during rain in Charlotte?',
  answer: 'Modern metal roofing installed with proper underlayment and insulation is no louder than other roofing materials during rain. When installed over solid sheathing with quality underlayment - our standard practice - rain noise is comparable to asphalt shingles. Many Charlotte homeowners actually enjoy the subtle sound of rain on their metal roof.',
  },
  {
    question: 'Do metal roofs attract lightning?',
  answer: 'No, metal roofs do not attract lightning. Metal is conductive but does not increase the likelihood of a lightning strike - lightning strikes the highest point regardless of material. In fact, if lightning does strike a metal roof, the energy is dispersed safely across the surface, and because metal is non-combustible, there is no fire risk - making metal actually safer than many other roofing materials.',
  },
  {
    question: 'Will a metal roof increase my Charlotte home value?',
  answer: 'Yes, metal roofing typically increases home value in Charlotte. Studies show metal roofs recoup 60-85% of their cost at resale, and homes with metal roofs often sell faster. Buyers appreciate the longevity, energy efficiency, and low maintenance. For Charlotte specifically, the storm resistance is a significant selling point given our weather patterns.',
  },
  {
    question: 'Can you install a metal roof over existing shingles?',
  answer: 'In many cases, yes - metal roofing can be installed over one layer of existing shingles, which reduces labor costs and installation time. However, this depends on your roof\'s condition, local building codes, and the specific metal roofing system being installed. During our free inspection, we\'ll assess whether overlay is appropriate for your Charlotte home or if a complete tear-off is recommended.',
  },
  {
    question: 'What colors are available for metal roofing in Charlotte?',
  answer: 'Metal roofing comes in virtually unlimited colors to match any Charlotte home style. Popular choices include charcoal gray, black, bronze, forest green, barn red, and various shades of blue. Premium metal roofs use Kynar 500/Hylar 5000 paint finishes that resist fading, chalking, and color change for 30+ years - important given Charlotte\'s strong UV exposure.',
  },
  {
    question: 'Does metal roofing qualify for insurance discounts in Charlotte?',
  answer: 'Many insurance companies offer discounts of 5-35% for metal roofing due to its fire resistance and impact ratings. Charlotte homeowners with metal roofs often see significant insurance savings. We recommend checking with your insurance provider before installation - we can provide documentation of your metal roof\'s ratings to help secure available discounts.',
  },
];

// Service Schema for metal roofing
function MetalRoofingServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.url}/metal-roofing-charlotte-nc/#service`,
  name: 'Metal Roofing Installation Charlotte NC',
  description: 'Professional metal roofing installation services in Charlotte NC. Standing seam, metal shingles, and corrugated metal roofs. 40-70 year lifespan, energy efficient, storm resistant.',
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
  serviceType: 'Metal Roofing Installation',
  hasOfferCatalog: {
      '@type': 'OfferCatalog',
  name: 'Metal Roofing Options',
  itemListElement: [
        {
          '@type': 'Offer',
  name: 'Standing Seam Metal Roof',
  description: 'Premium standing seam metal roofing with concealed fasteners and 50-70 year lifespan',
  priceSpecification: {
            '@type': 'PriceSpecification',
  priceCurrency: 'USD',
  minPrice: '20000',
  maxPrice: '45000',
  unitText: 'per project',
          },
        },
        {
          '@type': 'Offer',
  name: 'Metal Shingle Roofing',
  description: 'Metal shingles designed to mimic traditional roofing with 40-60 year lifespan',
  priceSpecification: {
            '@type': 'PriceSpecification',
  priceCurrency: 'USD',
  minPrice: '15000',
  maxPrice: '35000',
  unitText: 'per project',
          },
        },
        {
          '@type': 'Offer',
  name: 'Corrugated Metal Roof',
  description: 'Affordable corrugated metal roofing with 30-50 year lifespan',
  priceSpecification: {
            '@type': 'PriceSpecification',
  priceCurrency: 'USD',
  minPrice: '12000',
  maxPrice: '25000',
  unitText: 'per project',
          },
        },
        {
          '@type': 'Offer',
  name: 'Stone-Coated Steel Roofing',
  description: 'Stone-coated steel roofing with Class 4 impact rating and natural stone finish, 40-70 year lifespan',
  priceSpecification: {
            '@type': 'PriceSpecification',
  priceCurrency: 'USD',
  minPrice: '18000',
  maxPrice: '40000',
  unitText: 'per project',
          },
        },
        {
          '@type': 'Offer',
  name: 'Free Metal Roofing Consultation',
  description: 'Complimentary metal roofing assessment and estimate',
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

export default function MetalRoofingCharlottePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Metal Roofing Charlotte NC', url: `${SITE_CONFIG.url}/metal-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <MetalRoofingServiceSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/metal-roofing-charlotte-nc`}
        pageName="Metal Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.metalRoof}
            alt="Metal roofing installation Charlotte NC - standing seam metal roof"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Premium Metal Roofing</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Metal Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              <Link href="/standing-seam-metal-roof-charlotte-nc" className="underline decoration-accent-light/50 hover:decoration-accent-light">Standing seam</Link>, metal shingles, corrugated, and stone-coated steel metal roof installation by Charlotte's trusted <Link href="/roofing-contractor-charlotte-nc" className="underline decoration-accent-light/50 hover:decoration-accent-light">roofing experts</Link>.
            </p>

            {/* Key Benefits Display */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-xl">
              <div className="text-center bg-white/10 rounded-lg p-3">
                <div className="text-2xl md:text-3xl font-bold text-accent-light">40-70</div>
                <div className="text-xs md:text-sm text-white/80">Year Lifespan</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-3">
                <div className="text-2xl md:text-3xl font-bold text-accent-light">25%</div>
                <div className="text-xs md:text-sm text-white/80">Energy Savings</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-3">
                <div className="text-2xl md:text-3xl font-bold text-accent-light">140</div>
                <div className="text-xs md:text-sm text-white/80">MPH Wind Rating</div>
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
                Get Free Metal Roof Estimate
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
                Certified Metal Roof Installers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Metal Roofing Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Metal Roofing in Charlotte NC?
            </h2>
            <p className="text-gray text-lg">
              Metal roofing offers unmatched durability, energy efficiency, and protection against Charlotte's demanding weather conditions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metalBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-accent font-bold text-lg mb-1">{benefit.stat}</div>
                    <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                    <p className="text-gray text-sm">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Metal Roofing Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Types of Metal Roofing We Install
            </h2>
            <p className="text-gray text-lg">
              From premium standing seam to budget-friendly corrugated, we offer metal roofing solutions for every Charlotte home and budget.
            </p>
          </div>
          <div className="space-y-8">
            {metalTypes.map((type, index) => (
              <div
                key={type.name}
                className={`bg-white rounded-xl shadow-md overflow-hidden ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } lg:flex`}
              >
                <div className="lg:w-2/5 relative">
                  <div className="aspect-video lg:aspect-auto lg:h-full">
                    <Image
                      src={type.image}
                      alt={`${type.name} installation in Charlotte NC`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-3/5 p-6 lg:p-8">
                  <h3 className="text-2xl font-bold text-dark mb-3">{type.name}</h3>
                  <p className="text-gray mb-4">{type.description}</p>
                  <div className="grid sm:grid-cols-3 gap-4 mb-4">
                    <div className="bg-light rounded-lg p-3">
                      <div className="text-sm text-gray">Price Range</div>
                      <div className="font-bold text-primary">{type.priceRange}</div>
                    </div>
                    <div className="bg-light rounded-lg p-3">
                      <div className="text-sm text-gray">Lifespan</div>
                      <div className="font-bold text-primary">{type.lifespan}</div>
                    </div>
                    <div className="bg-light rounded-lg p-3">
                      <div className="text-sm text-gray">Best For</div>
                      <div className="font-bold text-primary text-sm">{type.bestFor}</div>
                    </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for a Metal Roof That Lasts a Lifetime?
              </h2>
              <p className="text-white/90">
                Get a free consultation and see why Charlotte homeowners are switching to metal roofing.
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

      {/* Cost Comparison Table */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Metal Roof Cost vs. Asphalt Shingles: Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              While metal roofing has a higher upfront cost, the long-term savings make it the smarter investment for Charlotte homeowners.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-light rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-4 text-left font-semibold">Material</th>
                      <th className="px-4 py-4 text-left font-semibold">Upfront Cost*</th>
                      <th className="px-4 py-4 text-left font-semibold">Lifespan</th>
                      <th className="px-4 py-4 text-left font-semibold">Replacements in 50 yrs</th>
                      <th className="px-4 py-4 text-left font-semibold">50-Year Total Cost</th>
                      <th className="px-4 py-4 text-left font-semibold">Maintenance</th>
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
                        <td className="px-4 py-4 text-gray">{row.upfrontCost}</td>
                        <td className="px-4 py-4 text-gray">{row.lifespan}</td>
                        <td className="px-4 py-4 text-gray">{row.replacements}</td>
                        <td className={`px-4 py-4 font-semibold ${row.highlight ? 'text-green-600' : 'text-gray'}`}>
                          {row.totalCost50Years}
                        </td>
                        <td className="px-4 py-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                            row.maintenance === 'Low' ? 'bg-green-100 text-green-700' :
                            row.maintenance === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {row.maintenance}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-sm text-gray">
                *Estimated costs for a typical 2,000 sq ft Charlotte home. Actual costs vary based on roof complexity and material selection.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Metal Roofing for Charlotte Climate */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Metal Roofing Is Ideal for Charlotte's Climate
              </h2>
              <p className="text-gray text-lg mb-8">
                Charlotte's hot summers, heavy rainfall, and <Link href="/storm-damage-roof-repair-charlotte-nc" className="text-primary hover:text-accent font-semibold">severe storms</Link> make metal roofing an excellent choice. Here is why metal roofs outperform <Link href="/metal-roof-vs-shingles-charlotte-nc" className="text-primary hover:text-accent font-semibold">traditional shingle materials</Link> in our region.
              </p>
              <div className="space-y-6">
                {climateReasons.map((reason) => (
                  <div key={reason.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{reason.title}</h3>
                      <p className="text-gray text-sm">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Metal roof installation Charlotte NC - completed project"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Built for Charlotte</p>
                    <p className="text-sm text-gray">Weather-Tested Protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metal Roof Lifespan & ROI Analysis */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <TrendingUp className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">ROI Analysis</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Metal Roof Lifespan and ROI for Charlotte Homeowners
              </h2>
              <p className="text-gray text-lg max-w-3xl mx-auto">
                A metal roof is not just a roofing material -- it is a long-term financial investment that pays for itself multiple times over the life of your Charlotte home.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray mb-10">
              <p>
                When Charlotte homeowners compare <strong>metal roofing</strong> to asphalt shingles on upfront price alone, metal looks expensive. But that comparison misses the full picture. Over a 50-year ownership period, a metal roof typically costs <strong>30-50% less</strong> than repeatedly replacing asphalt shingles. Here is why the numbers favor metal in the Charlotte NC market.
              </p>
              <p>
                A standing seam metal roof installed on a typical 2,000-square-foot Charlotte home costs $24,000 to $36,000. That same home with architectural shingles would cost $10,000 to $18,000 -- but those shingles need replacement every 25-30 years. Over 50 years, you would spend $30,000 to $54,000 on shingle replacements alone, plus the disruption and inconvenience of multiple re-roofing projects. The metal roof, meanwhile, is still performing with decades of life remaining.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-light rounded-xl p-6 text-center">
                <DollarSign className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">60-85%</div>
                <p className="text-sm text-gray font-medium">Cost Recouped at Resale</p>
                <p className="text-xs text-gray mt-2">Metal roofs increase resale value. Homes with metal roofing sell an average of 6% faster in the Charlotte market.</p>
              </div>
              <div className="bg-light rounded-xl p-6 text-center">
                <ThermometerSun className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">$300-$600</div>
                <p className="text-sm text-gray font-medium">Annual Energy Savings</p>
                <p className="text-xs text-gray mt-2">Reflective metal roofing reduces Charlotte cooling costs by 20-25%, saving hundreds per year on electricity bills.</p>
              </div>
              <div className="bg-light rounded-xl p-6 text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">5-35%</div>
                <p className="text-sm text-gray font-medium">Insurance Premium Savings</p>
                <p className="text-xs text-gray mt-2">Many insurers discount premiums for metal roofs due to superior fire, wind, and impact resistance ratings.</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Factor in the energy savings ($300-$600 per year in Charlotte), potential insurance discounts (5-35% depending on your carrier), and the elimination of future replacement costs, and a metal roof delivers a <strong>genuine return on investment</strong> within 15-20 years. Everything beyond that is pure savings. For homeowners planning to stay in their Charlotte home long-term, metal roofing is the clear financial winner. Even if you sell, the remaining lifespan of a metal roof is a powerful selling point -- buyers know they will not need to budget for a new roof for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metal Roofing Myths Debunked */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Fact vs. Fiction</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Metal Roofing Myths Debunked
              </h2>
              <p className="text-gray text-lg">
                Misconceptions about metal roofing stop many Charlotte homeowners from making the best choice for their home. Here are the facts.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Volume2 className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">Myth: Metal Roofs Are Loud When It Rains</h3>
                    <p className="text-gray mb-2">
                      <strong>Reality:</strong> When installed over solid roof decking with proper underlayment and insulation -- which is standard practice for every installation we perform -- a metal roof is no louder than asphalt shingles during rain. The multiple layers between the metal panels and your living space (decking, underlayment, insulation, attic space, ceiling) absorb sound effectively. Independent testing shows that a properly installed metal roof registers the same decibel level as other roofing materials during heavy rainfall.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">Myth: Metal Roofs Attract Lightning</h3>
                    <p className="text-gray mb-2">
                      <strong>Reality:</strong> Lightning is attracted to the highest point in an area regardless of material -- not to metal specifically. A metal roof does not increase your odds of being struck. In fact, if lightning does strike your roof, metal is actually <em>safer</em> because it is non-combustible and disperses the energy across the entire surface. Unlike wood or asphalt, a metal roof will not catch fire from a lightning strike. This makes metal roofing one of the safest options in Charlotte's thunderstorm-prone climate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">Myth: Metal Roofs Dent Easily in Hail</h3>
                    <p className="text-gray mb-2">
                      <strong>Reality:</strong> Modern metal roofing panels are engineered for impact resistance. Standing seam and stone-coated steel roofs carry Class 4 impact ratings -- the highest available -- meaning they withstand impacts from 2-inch steel balls dropped from 20 feet without sustaining functional damage. Charlotte averages 1-2 significant hail events per year, and metal roofing outperforms asphalt shingles in every hail impact test. While cosmetic denting is possible in extreme hail, it does not affect the roof's performance or waterproofing ability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">Myth: Metal Roofing Is Too Expensive</h3>
                    <p className="text-gray mb-2">
                      <strong>Reality:</strong> Metal roofing has a higher upfront cost, but it is the most affordable roofing material when measured over the life of your home. A single metal roof outlasts 2-3 asphalt shingle roofs, saving Charlotte homeowners $15,000 to $25,000 over 50 years. Add annual energy savings of $300-$600, potential insurance discounts, and zero replacement hassle, and metal roofing becomes the most cost-effective option available. Corrugated metal and metal shingles also offer entry-level metal options starting at just $6-$10 per square foot.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Hammer className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">Myth: You Cannot Walk on a Metal Roof</h3>
                    <p className="text-gray mb-2">
                      <strong>Reality:</strong> Most metal roofing systems are safe to walk on when done properly. Standing seam panels should be stepped on at the flat areas between seams. Stone-coated steel and metal shingles are fully walkable. Our certified installers know the correct techniques for walking on every metal roof type we install, and we train Charlotte homeowners on safe access points during the final walkthrough.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metal Roof Maintenance Requirements */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Wrench className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Maintenance Guide</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Metal Roof Maintenance in Charlotte NC
              </h2>
              <p className="text-gray text-lg">
                One of the biggest advantages of a metal roof is how little maintenance it requires compared to other roofing materials.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray mb-10">
              <p>
                Metal roofing is often described as a "set it and forget it" roofing solution, and that reputation is well-earned. Unlike asphalt shingles that need regular inspection for curling, cracking, and granule loss, metal roofs maintain their integrity decade after decade with minimal intervention. That said, a small amount of periodic maintenance ensures your metal roof reaches its full 40-70 year lifespan in Charlotte's climate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-light rounded-xl p-6">
                <h3 className="font-bold text-dark mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Annual Maintenance Checklist
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Clear debris</strong> -- Remove leaves, branches, and accumulated debris from panels, valleys, and gutters each spring and fall</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Inspect flashings</strong> -- Check around chimneys, vents, and skylights for any sealant deterioration, especially after severe Charlotte storms</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Check fasteners</strong> -- On exposed-fastener systems (corrugated), verify screws are tight and rubber washers are intact</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Trim overhanging branches</strong> -- Prevent scratching and debris accumulation from trees near your roofline</span>
                  </li>
                </ul>
              </div>

              <div className="bg-light rounded-xl p-6">
                <h3 className="font-bold text-dark mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  What You Do NOT Need to Worry About
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray">
                    <XCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span><strong>No moss or algae treatments</strong> -- Metal surfaces resist organic growth that plagues asphalt roofs in Charlotte's humid climate</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray">
                    <XCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span><strong>No granule loss</strong> -- Metal panels do not shed protective coatings like asphalt shingles, maintaining their performance throughout their lifespan</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray">
                    <XCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span><strong>No cracking or curling</strong> -- Metal does not dry out or become brittle from UV exposure the way asphalt does</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray">
                    <XCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span><strong>No regular recoating</strong> -- Kynar 500 paint finishes resist fading for 30+ years without repainting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray">
              <p>
                For Charlotte homeowners who want professional peace of mind, we offer annual <Link href="/roof-maintenance-charlotte-nc" className="text-primary hover:text-accent font-semibold">roof maintenance inspections</Link> that include a thorough check of your metal roof's flashings, fasteners, sealants, and overall condition. Most metal roof maintenance visits take under an hour and cost a fraction of what shingle roofs require in ongoing upkeep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Hub */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Metal Roofing Services Across the Charlotte Area
            </h2>
            <p className="text-gray text-lg text-center mb-10">
              We install metal roofs throughout Charlotte and the surrounding Lake Norman, Lake Wylie, and greater Mecklenburg County communities.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/metal-roofing-huntersville-nc" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 group">
                <ArrowRight className="w-4 h-4 text-primary group-hover:text-accent transition-colors flex-shrink-0" />
                <span className="text-dark font-medium group-hover:text-primary transition-colors">Metal Roofing Huntersville NC</span>
              </Link>
              <Link href="/metal-roofing-cornelius-nc" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 group">
                <ArrowRight className="w-4 h-4 text-primary group-hover:text-accent transition-colors flex-shrink-0" />
                <span className="text-dark font-medium group-hover:text-primary transition-colors">Metal Roofing Cornelius NC</span>
              </Link>
              <Link href="/metal-roofing-davidson-nc" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 group">
                <ArrowRight className="w-4 h-4 text-primary group-hover:text-accent transition-colors flex-shrink-0" />
                <span className="text-dark font-medium group-hover:text-primary transition-colors">Metal Roofing Davidson NC</span>
              </Link>
              <Link href="/metal-roofing-mooresville-nc" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 group">
                <ArrowRight className="w-4 h-4 text-primary group-hover:text-accent transition-colors flex-shrink-0" />
                <span className="text-dark font-medium group-hover:text-primary transition-colors">Metal Roofing Mooresville NC</span>
              </Link>
              <Link href="/metal-roofing-matthews-nc" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 group">
                <ArrowRight className="w-4 h-4 text-primary group-hover:text-accent transition-colors flex-shrink-0" />
                <span className="text-dark font-medium group-hover:text-primary transition-colors">Metal Roofing Matthews NC</span>
              </Link>
              <Link href="/metal-roofing-lake-norman-nc" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 group">
                <ArrowRight className="w-4 h-4 text-primary group-hover:text-accent transition-colors flex-shrink-0" />
                <span className="text-dark font-medium group-hover:text-primary transition-colors">Metal Roofing Lake Norman NC</span>
              </Link>
              <Link href="/metal-roofing-lake-wylie-sc" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 group">
                <ArrowRight className="w-4 h-4 text-primary group-hover:text-accent transition-colors flex-shrink-0" />
                <span className="text-dark font-medium group-hover:text-primary transition-colors">Metal Roofing Lake Wylie SC</span>
              </Link>
              <Link href="/metal-roofing-denver-nc" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 group">
                <ArrowRight className="w-4 h-4 text-primary group-hover:text-accent transition-colors flex-shrink-0" />
                <span className="text-dark font-medium group-hover:text-primary transition-colors">Metal Roofing Denver NC</span>
              </Link>
              <Link href="/metal-roofing-mt-holly-nc" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 group">
                <ArrowRight className="w-4 h-4 text-primary group-hover:text-accent transition-colors flex-shrink-0" />
                <span className="text-dark font-medium group-hover:text-primary transition-colors">Metal Roofing Mt Holly NC</span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/metal-roof-vs-shingles-charlotte-nc" className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-5 py-2.5 font-medium hover:bg-primary-dark transition-colors">
                Metal Roof vs. Shingles
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/standing-seam-metal-roof-charlotte-nc" className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-5 py-2.5 font-medium hover:bg-primary-dark transition-colors">
                Standing Seam Guide
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/metal-roofing-services" className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-5 py-2.5 font-medium hover:bg-primary-dark transition-colors">
                All Metal Roofing Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Metal Roofing Projects in Charlotte
            </h2>
            <p className="text-gray text-lg">
              See examples of our metal roof installations throughout the Charlotte area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.hero.metalRoof}
                alt="Standing seam metal roof installation Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Completed metal roofing project Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of metal roof Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Metal roofing contractor Charlotte NC"
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

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Charlotte's Trusted Metal Roofing Contractor
            </h2>
            <p className="text-gray text-lg">
              Best Roofing Now brings expert metal roof installation to Charlotte homeowners with honest service and quality workmanship.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">5-Star Rated</h3>
              <p className="text-gray text-sm">
                {SITE_CONFIG.googleReviewCount}+ Google reviews with a perfect 5.0 rating. See why Charlotte homeowners rate us the <Link href="/best-roofing-company-charlotte-nc" className="text-primary hover:text-accent font-semibold">best roofing company in Charlotte</Link>.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Certified Installers</h3>
              <p className="text-gray text-sm">
                Factory-certified metal roof installers trained in proper installation techniques for maximum longevity and warranty coverage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Transparent Pricing</h3>
              <p className="text-gray text-sm">
                Detailed quotes with no hidden fees. We explain every line item so you know exactly what you are paying for.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Local Charlotte Company</h3>
              <p className="text-gray text-sm">
                <Link href="/veteran-owned-roofing-company-charlotte-nc" className="text-primary hover:text-accent font-semibold">Family-owned, veteran-operated</Link> roofing company serving Charlotte since 2020. We live and work in the community we serve.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Premium Materials</h3>
              <p className="text-gray text-sm">
                We use only top-quality metal roofing products with Kynar 500 finishes and comprehensive manufacturer warranties.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">BBB A+ Accredited</h3>
              <p className="text-gray text-sm">
                Better Business Bureau A+ rating with zero complaints. Our reputation is built on integrity and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metal Roofing Cost Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <DollarSign className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Pricing Guide</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Metal Roofing Cost in Charlotte NC
              </h2>
              <p className="text-gray max-w-2xl mx-auto">
                Metal roofing costs vary by material type, roof complexity, and home size. Here are 2026 installed prices for Charlotte-area homes.
              </p>
            </div>

            {/* Cost Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary">
                <h3 className="font-bold text-dark text-lg mb-2">Standing Seam</h3>
                <p className="text-3xl font-bold text-primary mb-1">$12 - $18</p>
                <p className="text-sm text-gray mb-3">per square foot installed</p>
                <ul className="text-sm text-gray space-y-1">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> 40-60 year lifespan</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Concealed fasteners</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Best wind resistance</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-accent">
                <h3 className="font-bold text-dark text-lg mb-2">Corrugated Metal</h3>
                <p className="text-3xl font-bold text-primary mb-1">$8 - $12</p>
                <p className="text-sm text-gray mb-3">per square foot installed</p>
                <ul className="text-sm text-gray space-y-1">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> 30-50 year lifespan</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Most affordable metal option</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Quick installation</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-primary">
                <h3 className="font-bold text-dark text-lg mb-2">Aluminum</h3>
                <p className="text-3xl font-bold text-primary mb-1">$10 - $15</p>
                <p className="text-sm text-gray mb-3">per square foot installed</p>
                <ul className="text-sm text-gray space-y-1">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Rust-proof / saltwater safe</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> Lightweight</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> 40-60 year lifespan</li>
                </ul>
              </div>
            </div>

            {/* Total Project Cost Callout */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center mb-10">
              <h3 className="text-xl font-bold text-dark mb-2">Total Project Cost for a 2,000 Sq Ft Home</h3>
              <p className="text-4xl font-bold text-primary mb-2">$24,000 - $36,000</p>
              <p className="text-gray max-w-xl mx-auto">
                Includes tear-off of existing roof, underlayment, flashing, ridge vents, and standing seam metal installation. Price varies by roof pitch and complexity.
              </p>
            </div>

            {/* Citation */}
            <CitationSection
              heading="Metal Roofing Facts for Charlotte NC"
              citations={[
                {
                  topic: 'metal roof cost Charlotte NC 2026',
                  content:
                    'Metal roofing installation in Charlotte NC costs $8 to $18 per square foot in 2026, depending on material. Standing seam metal roofs cost $12-$18/sqft, corrugated metal $8-$12/sqft, and aluminum $10-$15/sqft installed. A complete metal roof replacement on a typical 2,000 square foot Charlotte home ranges from $24,000 to $36,000 including tear-off, underlayment, and all trim work.',
                  source: 'Best Roofing Now 2026 pricing data -- Charlotte NC market',
                },
                {
                  topic: 'metal roof lifespan Charlotte NC',
                  content:
                    'A properly installed metal roof in Charlotte NC lasts 40 to 70 years depending on material type. Standing seam metal roofs last 50-70 years, stone-coated steel 40-70 years, metal shingles 40-60 years, and corrugated metal 30-50 years. By comparison, asphalt shingle roofs in the Charlotte climate typically last 15-25 years before needing replacement.',
                  source: 'Metal Roofing Alliance industry data and Charlotte-area project records',
                },
                {
                  topic: 'metal roof energy savings Charlotte NC',
                  content:
                    'Metal roofing reflects up to 70% of solar radiation, reducing Charlotte NC cooling costs by 20-25% annually. For a typical Charlotte home, this translates to $300-$600 in annual energy savings. Cool-metal roofing with reflective pigment coatings can reduce roof surface temperatures by up to 100 degrees Fahrenheit compared to dark asphalt shingles.',
                  source: 'Oak Ridge National Laboratory cool-roofing study; Charlotte energy audit data',
                },
                {
                  topic: 'metal roof wind and hail resistance Charlotte NC',
                  content:
                    'Standing seam metal roofs are rated for winds up to 140 MPH and carry Class 4 impact ratings, the highest hail resistance classification available. Charlotte NC experiences an average of 25 severe thunderstorm days per year. Metal roofing outperforms asphalt shingles in every standardized wind uplift and hail impact test, making it the ideal material for Charlotte storm protection.',
                  source: 'FM Global and UL testing standards; NOAA Charlotte severe weather data',
                },
              ]}
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
                <span className="text-sm font-semibold">Metal Roofing FAQs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Common Questions About Metal Roofing in Charlotte
              </h2>
              <p className="text-gray text-lg">
                Get answers to the most frequently asked questions about metal roofing for Charlotte NC homes.
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
        pageType="main-service-area"
        city="Charlotte"
        slug="metal-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/metal-roofing-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Metal Roofing"

      />

      {/* Related Metal Roofing Guides */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Metal Roofing Cost Guides &amp; Comparisons
            </h2>
            <p className="text-gray">
              Explore pricing, comparisons, and styles for metal roofing in Charlotte NC.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              href="/metal-roof-cost"
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                Metal Roof Cost 2026
              </h3>
              <p className="text-gray text-sm">
                Complete pricing for standing seam, corrugated, and metal shingle roofs.
              </p>
            </Link>
            <Link
              href="/shingle-vs-metal-roof-cost"
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                Shingles vs Metal Roof Cost
              </h3>
              <p className="text-gray text-sm">
                Side-by-side cost comparison with 30-year ROI analysis.
              </p>
            </Link>
            <Link
              href="/blog/modern-metal-roof-styles-photo-catalog-color-guide"
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                Metal Roof Styles &amp; Colors
              </h3>
              <p className="text-gray text-sm">
                Photo catalog of modern metal roof styles, colors, and design inspiration.
              </p>
            </Link>
            <Link
              href="/standing-seam-metal-roof-charlotte-nc"
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                Standing Seam Metal Roofing
              </h3>
              <p className="text-gray text-sm">
                Premium standing seam installation for Charlotte homes and businesses.
              </p>
            </Link>
            <Link
              href="/metal-roof-vs-shingles-charlotte-nc"
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                Metal vs Shingles Charlotte NC
              </h3>
              <p className="text-gray text-sm">
                Which roofing material is right for your Charlotte home?
              </p>
            </Link>
            <Link
              href="/tile-roof-vs-shingles-charlotte-nc"
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                Tile vs Shingles Comparison
              </h3>
              <p className="text-gray text-sm">
                Compare tile, metal, and shingle roofing for Charlotte homes.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Upgrade to Metal Roofing?"
        subtitle="Get a free, no-obligation estimate for metal roofing installation in Charlotte NC. Our experts will help you choose the best metal roof option for your home and budget."
      />
    </>
  );
}
