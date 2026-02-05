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
} from 'lucide-react';
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
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Metal Roofing Charlotte NC | Standing Seam & Metal Roof Installation',
  description:
    'Expert metal roofing installation in Charlotte NC. Standing seam, metal shingles, and corrugated metal roofs. 40-70 year lifespan, energy efficient, storm resistant. Free estimates from BBB A+ rated contractor.',
  keywords: [
    'metal roofing charlotte nc',
    'metal roof installation charlotte',
    'standing seam metal roof charlotte',
    'metal roof cost charlotte nc',
    'metal roof contractors charlotte',
    'metal shingle roofing charlotte nc',
    'corrugated metal roof charlotte',
    'metal roof replacement charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/metal-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Metal Roofing Charlotte NC | Standing Seam & Metal Roof Installation',
    description:
      'Premium metal roofing installation in Charlotte NC. Standing seam, metal shingles, and corrugated options. 40-70 year lifespan, energy savings up to 25%. Free estimates from BBB A+ rated contractor.',
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
              Standing seam, metal shingles, and corrugated metal roof installation by Charlotte's trusted roofing experts.
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
                Charlotte's hot summers, heavy rainfall, and severe storms make metal roofing an excellent choice. Here is why metal roofs outperform traditional materials in our region.
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
                {SITE_CONFIG.googleReviewCount}+ Google reviews with a perfect 5.0 rating. Our customers love our honest approach and quality work.
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
                Family-owned, veteran-operated roofing company serving Charlotte since 2020. We live and work in the community we serve.
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

      <CTASection
        title="Ready to Upgrade to Metal Roofing?"
        subtitle="Get a free, no-obligation estimate for metal roofing installation in Charlotte NC. Our experts will help you choose the best metal roof option for your home and budget."
      />
    </>
  );
}
