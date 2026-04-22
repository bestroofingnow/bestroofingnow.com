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
  SpeakableContentBlocks,
  FeaturedSnippetListAnswerSchema,
  FreeInspectionOfferSchema,
  WebPageSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Carmel Charlotte NC',
  robots: { index: false, follow: true },
  description:
    'Roofing contractor in Carmel, South Charlotte NC. Roof replacement, repair, and storm damage for established homes. BBB A+ rated. Free estimates.',
  keywords: [
    'roofing carmel charlotte nc',
    'roofer carmel charlotte',
    'carmel road roofing charlotte',
    'carmel roof replacement charlotte nc',
    'carmel roof repair charlotte',
    'roofing contractor carmel charlotte',
    'south charlotte roofing carmel',
    'carmel neighborhood roofer charlotte',
    'best roofer carmel charlotte nc',
    'carmel charlotte roofing services',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-carmel-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Carmel Charlotte NC | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving the Carmel area of South Charlotte. Expert care for established homes. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-carmel-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Carmel Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full roof replacement for Carmel-area homes with premium architectural shingles and manufacturer warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Expert repairs for aging roofs, leaks, wind damage, and worn components on established Carmel homes.',
    href: '/services/roof-repair',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Fast storm damage response with complete insurance claim management for Carmel homeowners.',
    href: '/services/storm-damage',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Thorough inspections with condition reports for maintenance, real estate, and insurance purposes.',
    href: '/services/roof-inspection',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Roofing services for Carmel-area businesses, offices, and commercial properties.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'Emergency Service',
    description: '24/7 emergency roofing for Carmel homeowners with urgent leaks or storm-related damage.',
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
    description: 'GAF Factory-Certified and CertainTeed ShingleMaster for warranty-backed quality installations.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability and workers\' comp coverage.',
  },
  {
    icon: Users,
    title: 'Established Home Expertise',
    description: 'Deep experience with the 1980s-2000s homes common throughout the Carmel Road corridor.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Carmel homeowners need urgent help.',
  },
];

const carmelAreas = [
  'Carmel',
  'Carmel Road',
  'Carmel Country Club',
  'Carmel Commons',
  'Carmel Village',
  'Quail Hollow',
  'Pineville-Matthews Road',
  'Rea Road',
  'Colony Road',
  'Johnston Road',
  'Park Road',
  'South Charlotte',
];

const nearbyAreas = [
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'Pineville', href: '/roofing-pineville-nc' },
  { name: 'Matthews', href: '/roofing-matthews-nc' },
  { name: 'Dilworth', href: '/roofing-dilworth-charlotte-nc' },
  { name: 'Weddington', href: '/roofing-weddington-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

const faqs = [
  {
    question: 'What roofing services do you offer in the Carmel area?',
    answer:
      'Best Roofing Now provides complete roofing services in the Carmel area of South Charlotte including roof replacement, roof repair, storm damage restoration, emergency services, and comprehensive inspections. We serve both residential and commercial properties throughout the Carmel Road corridor.',
  },
  {
    question: 'How old are most roofs in the Carmel area?',
    answer:
      'The Carmel area features homes built from the 1980s through the 2000s, with roofs ranging from 20-40+ years old. Many homes, especially those built in the 1980s and 1990s, are well past the typical lifespan of their original shingles and are strong candidates for replacement.',
  },
  {
    question: 'How much does a roof replacement cost in the Carmel area?',
    answer:
      'Roof replacement in the Carmel area typically costs $8,000-$18,000 depending on home size, roof complexity, and material choice. Homes in the $350K-$700K range common in this area have varied roof sizes. We provide free, detailed estimates with transparent pricing.',
  },
  {
    question: 'Do you work with Carmel Country Club and area HOAs?',
    answer:
      'Yes, we have experience working with Carmel Country Club and other HOA communities in the Carmel area. We handle material submissions, color selections, and architectural review documentation to ensure your new roof complies with community standards.',
  },
  {
    question: 'What roofing materials work best for Carmel homes?',
    answer:
      'For most Carmel-area homes, premium architectural shingles like GAF Timberline HDZ or CertainTeed Landmark Pro provide excellent value, curb appeal, and 30+ year warranties. Homes near Carmel Country Club may benefit from designer shingles or other premium options that enhance the property\'s appearance.',
  },
  {
    question: 'Do you handle insurance claims for storm damage in Carmel?',
    answer:
      'Absolutely. We have extensive experience managing insurance claims for storm damage in the Carmel area. We provide thorough documentation, attend adjuster meetings, and advocate for fair settlements that cover quality repairs or replacement materials.',
  },
  {
    question: 'How long does a roof replacement take in the Carmel area?',
    answer:
      'Most Carmel-area roof replacements are completed in 1-3 days depending on home size and roof complexity. We schedule work to minimize disruption and maintain clean, safe job sites throughout the process.',
  },
  {
    question: 'Do you offer financing options?',
    answer:
      'Yes, we offer flexible financing to make roof replacement affordable for Carmel homeowners. Whether you need to spread payments over time or coordinate with an insurance claim, we have options to fit your financial situation. Contact us to learn about current programs.',
  },
];

export default function RoofingCarmelCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Carmel Charlotte NC', url: `${SITE_CONFIG.url}/roofing-carmel-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-carmel-charlotte-nc`}
        pageName="Roofing Carmel Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <WebPageSchema
        name="Roofing Carmel Charlotte NC | Best Roofing Now"
        url={`${SITE_CONFIG.url}/roofing-carmel-charlotte-nc`}
        description="Roofing contractor serving the Carmel Road corridor in South Charlotte NC. Roof replacement, repair, storm damage."
        primaryImage={IMAGES.hero.hero1}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Carmel Charlotte NC', url: `${SITE_CONFIG.url}/roofing-carmel-charlotte-nc` },
        ]}
      />
      <FeaturedSnippetListAnswerSchema
        question="What roofing services do Carmel-corridor Charlotte homeowners need most?"
        directAnswer="The Carmel Road corridor includes a mix of 1980s-2000s established homes whose original roofs are now 25-40 years old. The most common services are full architectural-shingle replacement, wood-shake/cedar replacement, pipe-boot and flashing repairs, hail/wind storm assessments with Xactimate, and gutter upsizing for canopy rainfall."
        items={[
          'Full architectural-shingle replacement of original 25-yr 3-tab and early-architectural roofs',
          'Repair and replacement of 1980s wood-shake and cedar roofs (now well past their 25-30 year Piedmont lifespan)',
          'Pipe-boot, valley, and chimney-flashing repairs (8-12 year EPDM pipe-boot failure window)',
          'Hail and wind storm damage assessments with Xactimate-format documentation for State Farm, Allstate, USAA, Travelers, and Liberty Mutual',
          'Gutter repair and 6-inch+ upsizing to handle Piedmont rainfall intensity from mature oak/maple/sweetgum canopy',
        ]}
        pageUrl={`${SITE_CONFIG.url}/roofing-carmel-charlotte-nc`}
      />
      <FreeInspectionOfferSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero1}
            alt="Professional roofing contractor in Carmel Charlotte NC - Best Roofing Now"
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
              Roofing Carmel <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Trusted Roofing for the Carmel Road Corridor of South Charlotte
            </p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now serves homeowners along the Carmel Road corridor in South Charlotte. The
              Carmel area mixes 1980s-2000s established homes — many on their original architectural
              shingles or aging wood shake — putting most properties in the prime replacement window. We
              hold GAF Master Elite, CertainTeed SELECT, and Owens Corning Platinum Preferred certifications
              (50-year non-prorated warranties), respond inside 2-4 hours for Mecklenburg storm calls, and
              provide free inspections with adjuster-format Xactimate photo documentation.
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
              Expert Roofing for the Carmel Road Corridor
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                The Carmel area of South Charlotte stretches along the Carmel Road corridor from
                SouthPark to Pineville, encompassing established neighborhoods, the prestigious
                Carmel Country Club, and a mix of residential communities built from the 1980s
                through the 2000s. Homes in this area typically range from $350K to $700K and
                feature diverse architectural styles from Colonial to Contemporary.
              </p>
              <p>
                At Best Roofing Now, we understand the unique challenges of roofing established
                homes in the Carmel area. Many of these properties have experienced multiple
                decades of Charlotte weather, including severe thunderstorms, occasional hail,
                and the wear and tear of hot, humid summers. Our team assesses each home
                individually and provides honest recommendations.
              </p>
              <p>
                Whether your Carmel-area home needs a few shingle repairs, a complete roof
                replacement, or storm damage restoration, we bring certified expertise, premium
                materials, and transparent pricing to every project.
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
              Roofing Services in the Carmel Area
            </h2>
            <p className="text-gray text-lg">
              Complete roofing solutions for homes and businesses along the Carmel Road corridor.
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
                Why Carmel Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Homeowners throughout the Carmel area choose us for our honest assessments,
                quality craftsmanship, and deep experience with established South Charlotte homes.
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
                alt="Best Roofing Now - Trusted roofing contractor in Carmel Charlotte NC"
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
                Need a Roofer in the Carmel Area?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate for your Carmel-area home today.
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
              Serving Carmel &amp; Surrounding Areas
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Carmel Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {carmelAreas.map((area) => (
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
                Carmel Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in the Carmel area of Charlotte NC.
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
        slug="roofing-carmel-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-carmel-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roofing Carmel"
      />

      <CTASection
        title="Ready to Work with Carmel's Trusted Roofer?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations for your Carmel-area home."
      />
    </>
  );
}
