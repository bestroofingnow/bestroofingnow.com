import { Metadata } from 'next';
import Image from 'next/image';
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
  title: 'Roofing Providence Crossing Charlotte NC',
  robots: { index: false, follow: true },
  description:
    'Roofing contractor in Providence Crossing, Charlotte NC. Roof replacement, repair, and storm damage. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing providence crossing charlotte nc',
    'roofer providence crossing charlotte',
    'providence crossing roof replacement',
    'providence crossing roof repair charlotte nc',
    'roofing contractor providence crossing',
    'providence road roofing charlotte',
    'south charlotte roofing providence crossing',
    'providence crossing neighborhood roofer',
    'best roofer providence crossing charlotte',
    'providence crossing charlotte roofing services',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-providence-crossing-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Providence Crossing Charlotte NC | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving Providence Crossing in South Charlotte. Roof replacement and repair for 1990s-2000s homes. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-providence-crossing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Providence Crossing Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

const services = [
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full roof replacement for Providence Crossing homes with premium shingles and manufacturer warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Expert repairs for aging roofs, leaks, missing shingles, and flashing issues common in 1990s-2000s homes.',
    href: '/services/roof-repair',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Fast storm damage restoration with insurance claim assistance for Providence Crossing homeowners.',
    href: '/services/storm-damage',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Comprehensive roof inspections with detailed reports for maintenance planning and home sales.',
    href: '/services/roof-inspection',
  },
  {
    icon: Building2,
    title: 'HOA Compliant Roofing',
    description: 'We handle HOA material approvals and ensure your roof meets Providence Crossing community standards.',
    href: '/services/residential-roofing',
  },
  {
    icon: Shield,
    title: 'Emergency Service',
    description: '24/7 emergency roofing for Providence Crossing homeowners with urgent storm damage or leaks.',
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
    title: 'Local Knowledge',
    description: 'Deep experience with Providence Crossing\'s 1990s-2000s homes and their specific roofing needs.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing when Providence Crossing homeowners need us most.',
  },
];

const providenceCrossingAreas = [
  'Providence Crossing',
  'Providence Road',
  'Providence Plantation',
  'Providence Country Club',
  'Rea Road',
  'Sardis Road',
  'Colony Road',
  'Old Providence Road',
  'Sharon Road',
  'Providence Downs',
  'Highgate',
  'South Charlotte',
];

const nearbyAreas = [
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'Matthews', href: '/roofing-matthews-nc' },
  { name: 'Mint Hill', href: '/roofing-mint-hill-nc' },
  { name: 'Weddington', href: '/roofing-weddington-nc' },
  { name: 'Pineville', href: '/roofing-pineville-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

const faqs = [
  {
    question: 'What roofing services do you offer in Providence Crossing?',
    answer:
      'Best Roofing Now provides full roofing services in Providence Crossing including roof replacement, roof repair, storm damage restoration, emergency services, and comprehensive inspections. We specialize in the 1990s-2000s homes that make up the majority of this South Charlotte neighborhood.',
  },
  {
    question: 'How old are most roofs in Providence Crossing?',
    answer:
      'Most Providence Crossing homes were built between 1990 and 2005, making roofs 20-35 years old. Many homes in this area are at or past the typical lifespan for standard architectural shingles (25-30 years), making them prime candidates for roof replacement.',
  },
  {
    question: 'How much does a roof replacement cost in Providence Crossing?',
    answer:
      'Roof replacement in Providence Crossing typically costs $8,000-$16,000 depending on home size, roof complexity, and material choice. Homes in the $350K-$650K range common in this area typically have 2,000-3,000 sq ft roof areas. We provide free, detailed estimates for every project.',
  },
  {
    question: 'Do you handle HOA approvals in Providence Crossing?',
    answer:
      'Yes, we work with Providence Crossing and nearby community HOAs to handle the full approval process. We prepare material samples, color selections, and documentation for architectural review boards, ensuring your new roof meets all community requirements.',
  },
  {
    question: 'What materials do you recommend for Providence Crossing homes?',
    answer:
      'For Providence Crossing homes, we recommend quality architectural shingles like GAF Timberline HDZ or CertainTeed Landmark Pro. These provide excellent value, 30+ year warranties, and an attractive upgrade from the original shingles. We also offer premium options for homeowners looking to enhance curb appeal.',
  },
  {
    question: 'Do you help with insurance claims for storm damage?',
    answer:
      'Absolutely. We have extensive experience with insurance claims for storm damage in Providence Crossing. We document all damage thoroughly, meet with adjusters on your property, and advocate for fair settlements that properly cover the cost of repairs or replacement.',
  },
  {
    question: 'How long does a roof replacement take?',
    answer:
      'Most Providence Crossing roof replacements are completed in 1-2 days for standard-sized homes. Larger homes or those with complex roof designs may take 2-3 days. We work efficiently and keep job sites clean throughout the project.',
  },
  {
    question: 'Do you offer financing for roof replacement?',
    answer:
      'Yes, we offer flexible financing options to make roof replacement affordable for Providence Crossing homeowners. We understand that an unexpected roof replacement can be a significant expense and provide payment plans to fit your budget. Contact us for current financing options.',
  },
];

export default function RoofingProvidenceCrossingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Providence Crossing Charlotte NC', url: `${SITE_CONFIG.url}/roofing-providence-crossing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-providence-crossing-charlotte-nc`}
        pageName="Roofing Providence Crossing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Professional roofing contractor in Providence Crossing Charlotte NC - Best Roofing Now"
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
              Roofing Providence Crossing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Trusted Roofing for Providence Crossing Homeowners
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now serves Providence Crossing and the surrounding Providence Road
              corridor with expert roofing services. With many homes in this area now 20-35
              years old, we help homeowners make smart decisions about repair, maintenance,
              and replacement.
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
              Expert Roofing for Providence Crossing Homes
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Providence Crossing is an established South Charlotte neighborhood along the
                Providence Road corridor, featuring well-maintained homes in the $350K-$650K
                range built primarily during the 1990s and early 2000s. This desirable area
                offers proximity to great schools, shopping, and easy access to SouthPark and
                Ballantyne.
              </p>
              <p>
                With homes now 20-35 years old, many Providence Crossing roofs have reached
                or exceeded the typical lifespan of their original architectural shingles.
                Best Roofing Now helps homeowners in this area navigate the decision between
                ongoing repairs and a strategic full replacement that adds value and protection.
              </p>
              <p>
                Our team provides honest, professional assessments for Providence Crossing
                homeowners. We never pressure unnecessary replacements, and we always recommend
                the most cost-effective solution for your specific situation. When replacement
                is the right choice, we deliver premium materials and certified installation
                at competitive prices.
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
              Roofing Services in Providence Crossing
            </h2>
            <p className="text-gray text-lg">
              Complete roofing solutions for Providence Crossing and the Providence Road corridor.
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
                Why Providence Crossing Homeowners Choose Us
              </h2>
              <p className="text-gray text-lg mb-8">
                Providence Crossing homeowners choose Best Roofing Now for our honest assessments,
                quality work, and deep knowledge of the homes in this South Charlotte neighborhood.
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
              <Image
                src={IMAGES.hero.hero1}
                alt="Best Roofing Now - Roofing contractor in Providence Crossing Charlotte NC"
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
                Need a Roofer in Providence Crossing?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate for your Providence Crossing home.
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
              Serving Providence Crossing &amp; Surrounding Areas
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Providence Crossing Areas</h3>
              <div className="flex flex-wrap gap-2">
                {providenceCrossingAreas.map((area) => (
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
                Providence Crossing Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing in Providence Crossing Charlotte NC.
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
        slug="roofing-providence-crossing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-providence-crossing-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roofing Providence Crossing"
      />

      <CTASection
        title="Ready for Expert Roofing in Providence Crossing?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations for your Providence Crossing home."
      />
    </>
  );
}
