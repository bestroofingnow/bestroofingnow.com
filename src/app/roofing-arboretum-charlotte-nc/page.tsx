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
  Users,
  Clock,
  Wrench,
  Home,
  Building2,
  CloudRain,
  Search,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Arboretum Charlotte NC',
  robots: { index: false, follow: true },
  description:
    'Roofing contractor in the Arboretum area of Charlotte NC. Roof replacement, repair, and storm damage. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing arboretum charlotte nc',
    'roofer arboretum charlotte',
    'arboretum roof replacement charlotte',
    'arboretum roof repair charlotte nc',
    'roofing contractor arboretum charlotte',
    'Providence Road roofing charlotte',
    'south charlotte roofing arboretum',
    'arboretum neighborhood roofer',
    'best roofer arboretum charlotte nc',
    'arboretum charlotte roofing services',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-arboretum-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Arboretum Charlotte NC | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving the Arboretum area of South Charlotte. Roof replacement, repair, and storm damage. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-arboretum-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Arboretum Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full roof replacement for Arboretum homes with premium architectural shingles and manufacturer warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Expert repairs for leaks, missing shingles, flashing issues, and aging roof components on Arboretum homes.',
    href: '/services/roof-repair',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Fast response storm damage restoration with insurance claim assistance for Arboretum homeowners.',
    href: '/services/storm-damage',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Comprehensive inspections with detailed reports for maintenance planning and real estate transactions.',
    href: '/services/roof-inspection',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Roofing services for Arboretum-area businesses, offices, and commercial properties along Providence Road.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'Emergency Service',
    description: '24/7 emergency roofing service when Arboretum homeowners need immediate help after storms or leaks.',
    href: '/services/emergency-roofing',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from homeowners across South Charlotte.`,
  },
  {
    icon: Shield,
    title: 'Manufacturer Certified',
    description: 'GAF Factory-Certified and CertainTeed ShingleMaster for warranty-backed installations.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability and workers\' comp coverage.',
  },
  {
    icon: Users,
    title: 'Local Expertise',
    description: 'Deep knowledge of Arboretum-area homes built in the 1990s-2000s and their common roofing needs.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Arboretum homeowners need us most.',
  },
];

const arboretumAreas = [
  'The Arboretum',
  'Providence Road South',
  'Providence Country Club',
  'Strawberry Hill',
  'Raintree',
  'Sardis Forest',
  'Matthews-Mint Hill Road',
  'Rea Road',
  'Colony Road South',
  'Johnston Road',
  'McMullen Creek',
  'Sardis Road',
];

const nearbyAreas = [
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'Pineville', href: '/roofing-pineville-nc' },
  { name: 'Matthews', href: '/roofing-matthews-nc' },
  { name: 'Mint Hill', href: '/roofing-mint-hill-nc' },
  { name: 'Weddington', href: '/roofing-weddington-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

const faqs = [
  {
    question: 'What roofing services do you offer in the Arboretum area?',
    answer:
      'Best Roofing Now provides complete roofing services in the Arboretum area including roof replacement, roof repair, storm damage restoration, emergency services, roof inspections, and gutter services. We specialize in the 1990s-2000s homes common throughout the Arboretum neighborhood.',
  },
  {
    question: 'How old are most roofs in the Arboretum area?',
    answer:
      'Most Arboretum-area homes were built between 1990 and 2005, making many roofs 20-35 years old. Standard architectural shingles have a 25-30 year lifespan, meaning many Arboretum roofs are approaching or past the point where replacement becomes more cost-effective than continued repairs.',
  },
  {
    question: 'How much does a roof replacement cost in the Arboretum?',
    answer:
      'Roof replacement in the Arboretum area typically costs $8,000-$18,000 depending on home size, roof complexity, and material choice. Homes in the $350K-$700K range common in this area often have 2,000-3,500 sq ft roof areas. We provide free, detailed estimates for every project.',
  },
  {
    question: 'Do you handle insurance claims for storm damage?',
    answer:
      'Yes, we have extensive experience with insurance claims for storm damage in the Arboretum area. We provide thorough documentation, meet with adjusters on-site, and advocate for fair settlements. Charlotte\'s severe thunderstorms and occasional hail events frequently cause damage to the Arboretum\'s aging roof stock.',
  },
  {
    question: 'What roofing materials work best for Arboretum homes?',
    answer:
      'Most Arboretum homes are well-suited for premium architectural shingles like GAF Timberline HDZ or CertainTeed Landmark Pro. These provide excellent value, 30+ year warranties, and enhanced curb appeal. For homeowners seeking upgrades, we also offer designer shingles and standing seam metal options.',
  },
  {
    question: 'Do you work with Arboretum-area HOAs?',
    answer:
      'Yes, we work with HOAs throughout the Arboretum area including Providence Country Club and surrounding communities. We handle material approval submissions, color matching, and compliance with community architectural guidelines.',
  },
  {
    question: 'How long does a roof replacement take in the Arboretum?',
    answer:
      'Most Arboretum home roof replacements are completed in 1-3 days depending on home size and weather conditions. We schedule work efficiently and maintain clean job sites throughout the project.',
  },
  {
    question: 'Do you offer financing for roof replacement?',
    answer:
      'Yes, we offer flexible financing options to make roof replacement affordable for Arboretum homeowners. We also accept insurance payments and can help you understand your coverage options. Contact us for details on current financing programs.',
  },
];

export default function RoofingArboretumCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Arboretum Charlotte NC', url: `${SITE_CONFIG.url}/roofing-arboretum-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-arboretum-charlotte-nc`}
        pageName="Roofing Arboretum Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero1}
            alt="Professional roofing contractor in Arboretum Charlotte NC - Best Roofing Now crew"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Arboretum <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Trusted Roofing for South Charlotte&apos;s Arboretum Neighborhood
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is the trusted choice for homeowners in the Arboretum area of South
              Charlotte. With homes primarily built in the 1990s-2000s, many roofs in this area are
              reaching the end of their lifespan. We deliver expert roof replacements, repairs, and
              storm damage restoration at competitive prices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
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
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Expert Roofing Services for the Arboretum Area
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                The Arboretum area along Providence Road in South Charlotte is one of the city&apos;s
                most desirable neighborhoods, known for its excellent schools, convenient shopping,
                and well-maintained homes in the $350K-$700K range. Built primarily during the
                1990s and 2000s, many Arboretum homes are now reaching the age where roof
                replacement becomes a smart investment.
              </p>
              <p>
                At Best Roofing Now, we understand the specific roofing needs of Arboretum-area
                homes. The standard architectural shingles installed during original construction
                typically last 25-30 years, and many homes in this area are approaching or past
                that threshold. Our team provides honest assessments and recommends repair when
                possible and replacement when necessary.
              </p>
              <p>
                Whether you need a full roof replacement, storm damage repair, or a comprehensive
                inspection, we deliver quality workmanship backed by manufacturer warranties and
                our commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Services in the Arboretum
            </h2>
            <p className="text-gray text-lg">
              Complete roofing solutions for Arboretum-area homes and businesses along Providence Road.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray text-sm mb-3">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
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
                Why Arboretum Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Homeowners throughout the Arboretum area choose us for our quality workmanship,
                honest pricing, and deep experience with South Charlotte homes.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                      <p className="text-gray text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <SEOImage
                src={IMAGES.hero.hero1}
                alt="Best Roofing Now - Trusted roofing contractor in Arboretum Charlotte NC"
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

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Need a Roofer in the Arboretum Area?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from South Charlotte&apos;s trusted roofing experts.
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

      {/* Service Areas */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving All of the Arboretum Area
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Arboretum Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {arboretumAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Areas We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {nearbyAreas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{area.name}</span>
                  </Link>
                ))}
              </div>
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
                Arboretum Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in the Arboretum area of Charlotte NC.
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
        pageType="other"
        city="Charlotte"
        slug="roofing-arboretum-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-arboretum-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roofing Arboretum"
      />

      <CTASection
        title="Ready to Work with the Arboretum's Trusted Roofer?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations for your Arboretum home."
      />
    </>
  );
}
