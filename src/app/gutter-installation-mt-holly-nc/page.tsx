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
  Droplets,
  Home,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceAreaPageSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Gutter Installation Mt Holly NC',
  description:
    'Need new gutters in Mt Holly NC? Best Roofing Now installs seamless aluminum and copper gutters with gutter guards. Protect your home from water damage. Free estimates!',
  keywords: [
    'gutter installation mt holly nc',
    'seamless gutters mt holly nc',
    'gutter replacement mt holly',
    'gutter contractors mt holly nc',
    'new gutters mt holly nc',
    'gutter guards mt holly',
    'gutter company mt holly nc',
    'gutter installation near me mt holly',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-installation-mt-holly-nc`,
  },
  openGraph: {
    title: 'Gutter Installation Mt Holly NC | Seamless Gutters | Best Roofing Now',
    description:
      'Professional gutter installation in Mt Holly NC. Seamless aluminum, copper, and steel gutters with gutter guard options. Protect your home today.',
    url: `${SITE_CONFIG.url}/gutter-installation-mt-holly-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Gutter installation in Mt Holly NC - Best Roofing Now',
      },
    ],
  },
};

// Gutter services
const gutterServices = [
  {
    icon: Droplets,
    title: 'Seamless Gutters',
    description: 'Custom-fabricated seamless aluminum gutters that reduce leaks and enhance curb appeal.',
  },
  {
    icon: Shield,
    title: 'Gutter Guards',
    description: 'Keep debris out and reduce maintenance with quality gutter protection systems.',
  },
  {
    icon: Home,
    title: 'Gutter Replacement',
    description: 'Full gutter system replacement including downspouts and hangers.',
  },
  {
    icon: CheckCircle,
    title: 'Downspout Installation',
    description: 'Proper downspout placement to direct water away from your foundation.',
  },
  {
    icon: Award,
    title: 'Copper Gutters',
    description: 'Premium copper gutter systems for distinctive homes seeking lasting elegance.',
  },
  {
    icon: Droplets,
    title: 'Gutter Repair',
    description: 'Fix sagging, leaking, or damaged gutters before they cause bigger problems.',
  },
];

// Benefits of new gutters
const benefits = [
  'Protects your foundation from water damage',
  'Prevents basement flooding and moisture issues',
  'Reduces soil erosion around your home',
  'Prevents fascia and soffit rot',
  'Protects landscaping from water runoff',
  'Increases curb appeal and home value',
];

// FAQs
const faqs = [
  {
    question: 'How much do new gutters cost in Mt Holly NC?',
    answer:
      'Gutter installation in Mt Holly typically costs $1,200 to $4,000 for most homes, depending on linear footage, material choice, and complexity. Seamless aluminum is most popular, while copper gutters are a premium option.',
  },
  {
    question: 'What size gutters do I need?',
    answer:
      'Most Mt Holly homes use 5-inch K-style gutters, though 6-inch gutters may be recommended for homes with large roof areas or steep pitches. We\'ll assess your home and recommend the right size.',
  },
  {
    question: 'Are seamless gutters worth it?',
    answer:
      'Yes! Seamless gutters have fewer joints, meaning fewer potential leak points. They\'re custom-fabricated on-site to fit your home perfectly and generally last longer than sectional gutters.',
  },
  {
    question: 'Do you install gutter guards?',
    answer:
      'Yes, we offer several gutter guard options to reduce maintenance and prevent clogs. Gutter guards are especially valuable in Mt Holly where trees can drop significant debris.',
  },
  {
    question: 'How long do gutters last?',
    answer:
      'Aluminum gutters typically last 20-30 years, while copper gutters can last 50+ years. Proper installation and maintenance are key to maximizing gutter lifespan.',
  },
  {
    question: 'Can you match my existing gutter color?',
    answer:
      'Yes! We offer gutters in a wide range of colors to match or complement your home\'s exterior. We\'ll help you choose the perfect color for your Mt Holly home.',
  },
];

export default function GutterInstallationMtHollyNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gutter Installation', url: `${SITE_CONFIG.url}/services/gutter-installation` },
          { name: 'Mt Holly NC', url: `${SITE_CONFIG.url}/gutter-installation-mt-holly-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Mt Holly"
        state="NC"
        slug="gutter-installation-mt-holly-nc"
        distance={15}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/gutter-installation-mt-holly-nc`}
        pageName="Gutter Installation Mt Holly NC"
        city="Mt Holly"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Gutter installation in Mt Holly NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Mt Holly & Gaston County</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Installation Mt Holly NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Protect Your Home from Water</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Seamless gutters custom-fitted to your Mt Holly home
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Protect your home from water damage with quality gutter installation from
              Best Roofing Now. We install seamless aluminum, copper, and steel gutters
              throughout Mt Holly and Gaston County.
            </p>

            {/* CTA Buttons */}
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

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed & Insured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Gutter Services in Mt Holly NC
            </h2>
            <p className="text-gray text-lg">
              From seamless aluminum to premium copper, we offer complete gutter solutions
              for Mt Holly homes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gutterServices.map((service) => (
              <div
                key={service.title}
                className="p-6 bg-light rounded-xl"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-gray text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why New Gutters Matter for Mt Holly Homes
              </h2>
              <p className="text-gray text-lg mb-6">
                Gutters protect your home&apos;s foundation, siding, and landscaping from water damage.
                With Mt Holly&apos;s significant rainfall, properly functioning gutters are essential.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Gutter installation project in Mt Holly NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
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
                Need New Gutters in Mt Holly?
              </h2>
              <p className="text-white/90">
                Get a free estimate for seamless gutter installation.
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
                Get Free Estimate
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

      {/* Project Gallery */}
      <GeoProjectGalleryStrip
        pageType="service"
        city="Mt Holly"
        slug="gutter-installation-mt-holly-nc"
        count={4}
        title="Gutter Projects in Mt Holly"
        subtitle="Browse completed gutter installation projects from the Mt Holly area."
        schemaPageUrl={`${SITE_CONFIG.url}/gutter-installation-mt-holly-nc`}
      />

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
                Gutter Installation FAQs
              </h2>
              <p className="text-gray text-lg">
                Questions about gutters in Mt Holly NC? We have answers.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service City Links */}
      <ServiceCityLinks
        city="Mt Holly"
        citySlug="mt-holly-nc"
        title="Complete Roofing Services in Mt Holly"
        subtitle="Beyond gutters, we offer comprehensive roofing solutions."
      />

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Mt Holly"
        service="Gutter Installation"
        serviceSlug="gutter-installation"
        title="Gutter Installation in Nearby Cities"
      />

      <CityGeoSection
        city="Mt Holly"
        state="NC"
        citySlug="mt-holly-nc"
        service="Gutter Installation"
      />

      <CTASection
        title="Protect Your Mt Holly Home with New Gutters"
        subtitle="Get a free estimate for seamless gutter installation. Keep water away from your foundation and protect your investment."
      />
    </>
  );
}
