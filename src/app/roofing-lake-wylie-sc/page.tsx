import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import Link from 'next/link';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  ArrowRight,
  HelpCircle,
  Award,
  Clock,
  Wrench,
  Home,
  Building2,
  CloudRain,
  MapPin,
  Waves,
  Search,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Lake Wylie SC | #1 Rated Lake Wylie Roofers',
  description:
    'Lake Wylie\'s trusted roofing company serving Tega Cay, Fort Mill & York County. Waterfront roofing specialists with 500+ roofs installed. BBB A+, veteran-owned. FREE estimates! Call (704) 605-6047.',
  keywords: [
    'roofing lake wylie sc',
    'roofers lake wylie sc',
    'lake wylie roofing company',
    'roof repair lake wylie sc',
    'roof replacement lake wylie sc',
    'roofing contractor lake wylie sc',
    'best roofer lake wylie sc',
    'emergency roof repair lake wylie',
    'storm damage roofing lake wylie',
    'waterfront roofing lake wylie',
    'roofing tega cay sc',
    'york county roofers',
    'lake wylie roof replacement cost',
    'lake wylie roof repair near me',
    'metal roofing lake wylie sc',
    'hail damage roof repair lake wylie',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-lake-wylie-sc`,
  },
  openGraph: {
    title: 'Roofing Lake Wylie SC | #1 Rated Waterfront Roofers | Best Roofing Now',
    description:
      'Lake Wylie\'s #1 rated roofing company. Waterfront home specialists serving Tega Cay, Fort Mill & York County. 500+ roofs, BBB A+, veteran-owned. Free estimates!',
    url: `${SITE_CONFIG.url}/roofing-lake-wylie-sc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero14,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Lake Wylie SC - Best Roofing Now',
      },
    ],
  },
};

// Lake Wylie communities
const lakeWylieCommunities = [
  {
    name: 'Lake Wylie Waterfront',
    description: 'Lakefront estates, Palisades, River Hills communities',
    population: '10,000+',
    services: ['Waterfront Roofing', 'Wind-Resistant', 'Metal Roofing'],
  },
  {
    name: 'Tega Cay',
    slug: '/roofing-tega-cay-sc',
    description: 'Peninsula community, Reflection Pointe, Camp Creek',
    population: '12,000+',
    services: ['Residential', 'Waterfront', 'Storm Damage'],
  },
  {
    name: 'Fort Mill',
    slug: '/roofing-fort-mill-sc',
    description: 'Baxter Village, Kingsley, Springfield communities',
    population: '25,000+',
    services: ['Residential', 'Commercial', 'Emergency'],
  },
  {
    name: 'Clover',
    description: 'Historic downtown, Bethany Bend, rural estates',
    population: '6,500+',
    services: ['Residential', 'Metal Roofing', 'Storm Damage'],
  },
  {
    name: 'River District',
    description: 'Catawba River corridor, Riverwalk communities',
    population: '8,000+',
    services: ['Waterfront', 'New Construction', 'Luxury'],
  },
  {
    name: 'Lake Wylie (NC Side)',
    description: 'Gaston County lakefront, South Point area',
    population: '15,000+',
    services: ['Residential', 'Waterfront', 'Roof Repair'],
  },
];

// Services
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roof replacement and repair for Lake Wylie homes. GAF, CertainTeed, and Owens Corning certified installations with up to 50-year warranties.',
    href: '/residential-roofing-charlotte-nc',
  },
  {
    icon: Waves,
    title: 'Waterfront Home Roofing',
    description: 'Specialized roofing for lakefront properties on Lake Wylie. Wind-resistant, impact-rated materials designed for lakeside exposure and severe weather.',
    href: '/luxury-roofing-lake-norman-nc',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, and metal roofing for Lake Wylie and York County businesses. Retail centers, restaurants, and office buildings.',
    href: '/commercial-roofing-fort-mill-sc',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for storm damage, leaks, and wear. Same-day emergency service available 24/7 across the Lake Wylie area.',
    href: '/roof-repair-lake-wylie-sc',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Restoration',
    description: 'Insurance claim experts for hail and wind damage. We handle the entire claims process for Lake Wylie and Tega Cay homeowners.',
    href: '/storm-damage-roof-repair-lake-wylie-sc',
  },
  {
    icon: Search,
    title: 'Free Roof Inspections',
    description: 'Comprehensive free inspections with drone technology and detailed reports. No-obligation assessments for Lake Wylie homeowners.',
    href: '/roof-inspection-charlotte-nc',
  },
];

// FAQs
const faqs = [
  {
    question: 'How much does a roof replacement cost in Lake Wylie SC?',
    answer: 'A roof replacement in Lake Wylie typically costs between $8,500 and $25,000 for most homes in 2026. Standard asphalt shingle roofs for average-sized homes run $8,500-$14,000. Waterfront properties and larger homes in Palisades or River Hills can range $15,000-$25,000+. Metal roofing costs $14,000-$30,000. Best Roofing Now provides free, no-obligation estimates with transparent pricing. Call (704) 605-6047 for your free estimate.',
  },
  {
    question: 'What is the best roofing material for Lake Wylie waterfront homes?',
    answer: 'For Lake Wylie waterfront homes, we recommend wind-resistant materials rated for 130+ MPH. Standing seam metal roofing is excellent for lakefront exposure, offering 50+ year lifespans and Class 4 impact resistance. GAF HDZ architectural shingles are another great option with 130 MPH wind warranty. Both materials withstand Lake Wylie\'s weather patterns while providing excellent curb appeal for lakefront properties.',
  },
  {
    question: 'Do you serve Lake Wylie and Tega Cay from Charlotte?',
    answer: 'Yes! Best Roofing Now proudly serves Lake Wylie, Tega Cay, Fort Mill, and all of York County from our Charlotte headquarters. We are fully licensed and insured for roofing work in South Carolina. Lake Wylie is one of our most active service areas with numerous completed projects across the lakefront communities.',
  },
  {
    question: 'Are you licensed to work in South Carolina?',
    answer: 'Yes, Best Roofing Now is fully licensed, bonded, and insured to perform roofing work in South Carolina. We carry $2 million in general liability insurance and full workers\' compensation coverage. We are familiar with York County building codes and permit requirements and handle all necessary permits as part of our service.',
  },
  {
    question: 'How quickly can you respond to storm damage in Lake Wylie?',
    answer: 'Best Roofing Now offers 24/7 emergency response for Lake Wylie storm damage. We typically arrive within 2-4 hours for emergency tarping and provide full damage assessments within 24 hours. Lake Wylie is especially vulnerable to wind-driven storms off the lake, and we\'re equipped with emergency tarps and materials for immediate response. Call (704) 605-6047 anytime.',
  },
  {
    question: 'Does homeowners insurance cover roof replacement in Lake Wylie SC?',
    answer: 'Yes, South Carolina homeowners insurance typically covers roof replacement when damage is caused by storms, hail, wind, or fallen trees. Best Roofing Now handles the entire insurance claim process for Lake Wylie homeowners - from documentation and adjuster meetings to supplemental claims. We\'ve helped hundreds of homeowners get their roofs replaced through insurance at minimal out-of-pocket cost.',
  },
  {
    question: 'What roofing certifications do you have?',
    answer: 'Best Roofing Now is a GAF Factory-Certified Contractor and CertainTeed ShingleMaster. These manufacturer certifications allow us to offer enhanced warranties up to 50 years on Lake Wylie installations. We are also BBB A+ accredited with zero complaints and carry Owens Corning Preferred Contractor status.',
  },
  {
    question: 'Can you help with insurance claims for hail damage in Lake Wylie?',
    answer: 'Absolutely. Lake Wylie sees significant hail events, especially during spring and summer months. Best Roofing Now provides free hail damage inspections, detailed photo documentation, and full insurance claim management. We meet with your adjuster, file supplemental claims when needed, and coordinate repairs around the claims timeline - all at no upfront cost to you.',
  },
];

// Nearby cities
const nearbyCities = [
  { name: 'Tega Cay', href: '/roofing-tega-cay-sc' },
  { name: 'Fort Mill', href: '/roofing-fort-mill-sc' },
  { name: 'Rock Hill', href: '/roofing-rock-hill-sc' },
  { name: 'Clover', href: '/roofing-rock-hill-sc' },
  { name: 'Gastonia', href: '/roofing-gastonia-nc' },
  { name: 'Charlotte', href: '/roofing-charlotte-nc' },
  { name: 'Pineville', href: '/roofing-pineville-nc' },
  { name: 'Steele Creek', href: '/roofing-steele-creek-charlotte-nc' },
];

export default function RoofingLakeWylieSCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Lake Wylie SC', url: `${SITE_CONFIG.url}/roofing-lake-wylie-sc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-lake-wylie-sc`}
        pageName="Roofing Lake Wylie SC | Waterfront Roofers"
        city="Lake Wylie"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SEOImage
            src={IMAGES.hero.hero14}
            alt="Lake Wylie roofing - waterfront roofing experts serving Tega Cay and York County"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Lake Wylie&apos;s Trusted Roofers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Roofing Lake Wylie SC<br />
              <span className="text-accent">Waterfront Roofing Experts</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Serving Lake Wylie, Tega Cay &amp; Fort Mill with {SITE_CONFIG.roofsInstalled}+ roofs installed.
              Waterfront home specialists with wind-resistant, impact-rated roofing solutions
              designed for lakeside living in York County.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span>{SITE_CONFIG.googleRating} Google Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Award className="w-5 h-5 text-accent" />
                <span>{SITE_CONFIG.roofsInstalled}+ Roofs Installed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-accent" />
                <span>Veteran-Owned</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>BBB A+ Rated</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                <Calendar className="w-5 h-5" />
                Free Lake Wylie Estimate
              </Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5" />
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Lake Wylie Communities We Serve
            </h2>
            <p className="text-gray-600 text-lg">
              From waterfront estates on Lake Wylie to the growing communities of Tega Cay and Fort Mill,
              we&apos;re the trusted roofers for homeowners across the Lake Wylie region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lakeWylieCommunities.map((community) => (
              <div
                key={community.name}
                className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {community.name}
                    </h3>
                    <p className="text-sm text-gray-500">{community.population} residents</p>
                  </div>
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <p className="text-gray-600 mb-4">{community.description}</p>
                <div className="flex flex-wrap gap-2">
                  {community.services.map((service) => (
                    <span
                      key={service}
                      className="bg-white text-xs px-2 py-1 rounded-full text-gray-600 border border-gray-200"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Lake Wylie Roofing Services
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive roofing solutions tailored for Lake Wylie homes and businesses.
              From waterfront estates to commercial properties, we deliver excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-medium group-hover:text-accent transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Lake Wylie Homeowners Choose Best Roofing Now
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Waterfront Roofing Specialists</h3>
                    <p className="text-gray-600">
                      We understand Lake Wylie&apos;s unique weather patterns and the special needs
                      of lakefront properties. Wind-resistant, impact-rated materials for maximum protection.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">SC Licensed &amp; Insured</h3>
                    <p className="text-gray-600">
                      Fully licensed for roofing work in South Carolina with $2M liability coverage.
                      We handle all York County permits and inspections.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Insurance Claim Experts</h3>
                    <p className="text-gray-600">
                      We&apos;ve helped hundreds of Lake Wylie homeowners navigate storm damage claims
                      with full documentation and direct adjuster coordination.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">24/7 Emergency Response</h3>
                    <p className="text-gray-600">
                      Lake Wylie storms don&apos;t wait and neither do we. 2-4 hour emergency response
                      with tarping and damage assessment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark mb-1">Manufacturer-Certified</h3>
                    <p className="text-gray-600">
                      GAF Factory-Certified and CertainTeed ShingleMaster contractor offering
                      enhanced warranties up to 50 years on Lake Wylie installations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <SEOImage
                src={IMAGES.realProjects.project17}
                alt="Lake Wylie waterfront home roofing project"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">{SITE_CONFIG.roofsInstalled}+</div>
                <div className="text-sm text-white/80">Roofs Installed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Content */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Roofing Services for Lake Wylie &amp; York County
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Lake Wylie is one of the Charlotte metro area&apos;s most desirable waterfront communities,
                spanning both York County, South Carolina and Gaston County, North Carolina along the
                Catawba River. The lake&apos;s 325 miles of shoreline create unique roofing challenges -
                from wind-driven rain off the water to increased hail exposure in open lakefront areas.
              </p>
              <p>
                Best Roofing Now understands these challenges because we&apos;ve roofed homes throughout
                the Lake Wylie corridor. Whether your home is in the upscale Palisades community,
                the family-friendly Tega Cay peninsula, or one of the established neighborhoods along
                the lake, we deliver roofing solutions engineered for lakeside performance.
              </p>
              <p>
                Our cross-border expertise means Lake Wylie homeowners get seamless service regardless
                of which side of the state line they&apos;re on. We&apos;re fully licensed in both
                North Carolina and South Carolina, handle all permits through York County or Gaston
                County, and understand the specific building codes for each jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving Lake Wylie &amp; Surrounding Areas
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Cities We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {nearbyCities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Lake Wylie Roofing FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions from Lake Wylie homeowners about roofing services, costs, and materials.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Lake Wylie Roofing Services &amp; Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/roof-repair-lake-wylie-sc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roof Repair Lake Wylie</h3>
              <p className="text-sm text-gray-600">Fast leak &amp; storm repair</p>
            </Link>
            <Link href="/roof-replacement-lake-wylie-sc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roof Replacement</h3>
              <p className="text-sm text-gray-600">Full replacement from $8.5K</p>
            </Link>
            <Link href="/roofers-lake-wylie-sc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofers Lake Wylie</h3>
              <p className="text-sm text-gray-600">Top-rated contractors</p>
            </Link>
            <Link href="/storm-damage-roof-repair-lake-wylie-sc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Storm Damage</h3>
              <p className="text-sm text-gray-600">Insurance claim experts</p>
            </Link>
            <Link href="/roofing-tega-cay-sc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Tega Cay SC</h3>
              <p className="text-sm text-gray-600">Peninsula community</p>
            </Link>
            <Link href="/roofing-fort-mill-sc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Fort Mill SC</h3>
              <p className="text-sm text-gray-600">York County service</p>
            </Link>
            <Link href="/roofing-rock-hill-sc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Rock Hill SC</h3>
              <p className="text-sm text-gray-600">Nearby city service</p>
            </Link>
            <Link href="/roofing-charlotte-nc" className="bg-light rounded-lg p-4 hover:shadow-md transition-all group">
              <h3 className="font-bold text-primary group-hover:text-accent">Roofing Charlotte NC</h3>
              <p className="text-sm text-gray-600">Main service area</p>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="location"
        city="Fort Mill"
        slug="roofing-lake-wylie-sc"
        count={4}
        title="Recent Roofing Projects Near Lake Wylie"
        subtitle="Browse completed roofing projects from the Lake Wylie area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-lake-wylie-sc`}
      />

      <CityGeoSection
        city="Lake Wylie"
        state="SC"
        citySlug="lake-wylie-sc"
        service="Roofing"
      />

      <CTASection
        title="Ready for Your Lake Wylie Roofing Project?"
        subtitle="Get a free estimate from Lake Wylie's trusted roofing experts. We serve Tega Cay, Fort Mill, and all Lake Wylie waterfront communities."
      />
    </>
  );
}
