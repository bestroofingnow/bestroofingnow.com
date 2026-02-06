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
  title: 'Roofers Mt Holly NC | Local Experts',
  description:
    'Looking for trusted roofers in Mt Holly NC? Best Roofing Now offers expert residential and commercial roofing services. BBB A+ rated, veteran-owned, free estimates. Call today!',
  keywords: [
    'roofers mt holly nc',
    'roofing contractors mt holly nc',
    'local roofers mt holly',
    'best roofers mt holly nc',
    'mt holly roofing contractors',
    'roofing company mt holly nc',
    'roof contractors mt holly',
    'mt holly nc roofers',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofers-mt-holly-nc`,
  },
  openGraph: {
    title: 'Roofers Mt Holly NC | Local Roofing Contractors | Best Roofing Now',
    description:
      'Best Roofing Now - trusted roofers serving Mt Holly NC and Gaston County. Licensed, insured, veteran-owned. 5-star rated with 500+ roofs installed.',
    url: `${SITE_CONFIG.url}/roofers-mt-holly-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Professional roofers in Mt Holly NC - Best Roofing Now',
      },
    ],
  },
};

// Credentials and certifications
const credentials = [
  {
    icon: Award,
    title: 'BBB A+ Accredited',
    description: 'Accredited business with A+ rating and zero complaints.',
  },
  {
    icon: Shield,
    title: 'Fully Licensed',
    description: 'Licensed roofing contractor in North Carolina.',
  },
  {
    icon: CheckCircle,
    title: 'Fully Insured',
    description: 'Comprehensive liability and workers compensation coverage.',
  },
  {
    icon: Users,
    title: 'Manufacturer Certified',
    description: 'CertainTeed, GAF, and Owens Corning certified installers.',
  },
  {
    icon: Star,
    title: '5-Star Rated',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star reviews on Google.`,
  },
  {
    icon: Clock,
    title: 'Veteran-Owned',
    description: 'Proudly owned and operated by military veterans.',
  },
];

// Services provided
const services = [
  { name: 'Roof Replacement', href: '/services/roof-replacement' },
  { name: 'Roof Repair', href: '/services/roof-repair' },
  { name: 'Storm Damage Repair', href: '/services/storm-damage' },
  { name: 'Roof Inspection', href: '/services/roof-inspection' },
  { name: 'Commercial Roofing', href: '/services/commercial-roofing' },
  { name: 'Metal Roofing', href: '/metal-roofing-services' },
  { name: 'Gutter Installation', href: '/services/gutter-installation' },
  { name: 'Emergency Roofing', href: '/services/emergency-roofing' },
];

// Mt Holly neighborhoods
const mtHollyAreas = [
  'Downtown Mt Holly',
  'Catawba Heights',
  'Stanley',
  'Lucia',
  'Mountain Island',
  'Riverbend',
  'Tuckaseege Road',
  'NC-27 Corridor',
  'Rankin Lake',
  'South Main Street',
];

// FAQs
const faqs = [
  {
    question: 'What should I look for when hiring roofers in Mt Holly NC?',
    answer:
      'When hiring roofers in Mt Holly, look for proper licensing, insurance, manufacturer certifications, and a strong local reputation. Best Roofing Now is BBB A+ rated, fully licensed and insured, and certified by major manufacturers like CertainTeed and GAF.',
  },
  {
    question: 'Are you licensed roofers in North Carolina?',
    answer:
      'Yes, Best Roofing Now is a fully licensed roofing contractor in North Carolina. We maintain all required licenses, permits, and insurance to legally and safely perform roofing work in Mt Holly and throughout the state.',
  },
  {
    question: 'Do you provide free estimates in Mt Holly?',
    answer:
      'Yes, we provide completely free, no-obligation estimates for all roofing projects in Mt Holly NC. Our estimates include detailed scope of work, material specifications, and transparent pricing.',
  },
  {
    question: 'How quickly can you start a roofing project in Mt Holly?',
    answer:
      'For most projects, we can begin within 1-2 weeks of contract signing. Emergency repairs are typically addressed within 24-48 hours. We serve Mt Holly directly from our Charlotte headquarters.',
  },
  {
    question: 'What warranties do your roofers offer?',
    answer:
      'We offer comprehensive warranties including manufacturer warranties up to 50 years on materials and our own workmanship warranty. As certified installers, we can offer enhanced warranty options from CertainTeed, GAF, and Owens Corning.',
  },
  {
    question: 'Do you handle the permit process for Mt Holly roofing projects?',
    answer:
      'Yes, we handle all permitting requirements for roofing projects in Mt Holly and Gaston County. Our team ensures all work meets local building codes and passes required inspections.',
  },
];

export default function RoofersMtHollyNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofers Mt Holly NC', url: `${SITE_CONFIG.url}/roofers-mt-holly-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Mt Holly"
        state="NC"
        slug="roofers-mt-holly-nc"
        distance={15}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofers-mt-holly-nc`}
        pageName="Roofers Mt Holly NC"
        city="Mt Holly"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Professional roofers in Mt Holly NC - Best Roofing Now"
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
              Roofers Mt Holly NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Licensed Local Contractors</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Trusted roofing contractors serving Mt Holly with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is a BBB A+ rated, veteran-owned roofing company serving Mt Holly and
              Gaston County. From residential repairs to commercial installations, our certified team
              delivers quality workmanship backed by industry-leading warranties.
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
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Our Mt Holly Roofers?
            </h2>
            <p className="text-gray text-lg">
              When you choose Best Roofing Now, you&apos;re choosing a team with the credentials,
              experience, and commitment to quality that Mt Holly homeowners deserve.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((credential) => (
              <div
                key={credential.title}
                className="p-6 bg-light rounded-xl"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <credential.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{credential.title}</h3>
                <p className="text-gray text-sm">{credential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Areas Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Roofing Services in Mt Holly
              </h2>
              <p className="text-gray mb-6">
                Our certified roofers provide comprehensive roofing services throughout Mt Holly
                and Gaston County. From minor repairs to complete replacements, we handle it all.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <Wrench className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-dark">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Areas */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Mt Holly Areas We Serve
              </h2>
              <p className="text-gray mb-6">
                We provide roofing services throughout Mt Holly and surrounding Gaston County communities.
                No neighborhood is too far for our experienced team.
              </p>
              <div className="flex flex-wrap gap-2">
                {mtHollyAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-4 py-2 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <GeoProjectGalleryStrip
        pageType="location"
        city="Mt Holly"
        slug="roofers-mt-holly-nc"
        count={4}
        title="Recent Projects by Our Mt Holly Roofers"
        subtitle="Browse completed roofing projects from the Mt Holly area."
        schemaPageUrl={`${SITE_CONFIG.url}/roofers-mt-holly-nc`}
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
                Frequently Asked Questions
              </h2>
              <p className="text-gray text-lg">
                Questions about hiring roofers in Mt Holly NC? We have answers.
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
        subtitle="Our roofers offer comprehensive services for Mt Holly homes and businesses."
      />

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Mt Holly"
        service="Roofing Contractors"
        serviceSlug="roofers"
        title="Roofers in Nearby Cities"
      />

      <CityGeoSection
        city="Mt Holly"
        state="NC"
        citySlug="mt-holly-nc"
        service="Roofers"
      />

      <CTASection
        title="Ready to Work with Mt Holly's Best Roofers?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll provide honest recommendations and transparent pricing for your roofing project."
      />
    </>
  );
}
