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
  title: 'Roofers Matthews NC | Local Experts',
  description:
    'Looking for trusted roofers in Matthews NC? Best Roofing Now offers expert residential and commercial roofing services in South Charlotte. BBB A+ rated, veteran-owned. Free estimates!',
  keywords: [
    'roofers matthews nc',
    'roofing contractors matthews nc',
    'local roofers matthews',
    'best roofers matthews nc',
    'matthews roofing contractors',
    'roofing company matthews nc',
    'roof contractors matthews',
    'matthews nc roofers',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofers-matthews-nc`,
  },
  openGraph: {
    title: 'Roofers Matthews NC | Local Roofing Contractors | Best Roofing Now',
    description:
      'Best Roofing Now - trusted roofers serving Matthews NC and South Charlotte. Licensed, insured, veteran-owned. 5-star rated with 500+ roofs installed.',
    url: `${SITE_CONFIG.url}/roofers-matthews-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Professional roofers in Matthews NC - Best Roofing Now',
      },
    ],
  },
};

// Credentials
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

// Services
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

// Matthews areas
const matthewsAreas = [
  'Downtown Matthews',
  'Sardis Woods',
  'Weddington',
  'Stallings',
  'McKee Road',
  'Sam Newell Road',
  'Idlewild Road',
  'Matthews Township Parkway',
  'Pleasant Plains Road',
  'Fullwood Lane',
];

// FAQs
const faqs = [
  {
    question: 'What should I look for when hiring roofers in Matthews NC?',
    answer:
      'When hiring roofers in Matthews, look for proper licensing, insurance, manufacturer certifications, and a strong local reputation. Best Roofing Now is BBB A+ rated, fully licensed and insured, and certified by major manufacturers.',
  },
  {
    question: 'Are you licensed roofers in North Carolina?',
    answer:
      'Yes, Best Roofing Now is a fully licensed roofing contractor in North Carolina. We maintain all required licenses and insurance to legally perform roofing work in Matthews and throughout the state.',
  },
  {
    question: 'Do you provide free estimates in Matthews?',
    answer:
      'Yes, we provide completely free, no-obligation estimates for all roofing projects in Matthews NC. Our estimates include detailed scope of work and transparent pricing.',
  },
  {
    question: 'How quickly can you start a roofing project in Matthews?',
    answer:
      'For most projects, we can begin within 1-2 weeks of contract signing. Emergency repairs are typically addressed within 24-48 hours. Matthews is just minutes from our Charlotte headquarters.',
  },
  {
    question: 'What warranties do your roofers offer?',
    answer:
      'We offer manufacturer warranties up to 50 years on materials and our own workmanship warranty. As certified installers, we can offer enhanced warranty options from CertainTeed, GAF, and Owens Corning.',
  },
  {
    question: 'Do you handle permits for Matthews roofing projects?',
    answer:
      'Yes, we handle all permitting requirements for roofing projects in Matthews and Mecklenburg County. Our team ensures all work meets local building codes and passes inspections.',
  },
];

export default function RoofersMatthewsNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofers Matthews NC', url: `${SITE_CONFIG.url}/roofers-matthews-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Matthews"
        state="NC"
        slug="roofers-matthews-nc"
        distance={12}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofers-matthews-nc`}
        pageName="Roofers Matthews NC"
        city="Matthews"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Professional roofers in Matthews NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Serving Matthews & South Charlotte</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofers Matthews NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Licensed Local Contractors</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Trusted roofing contractors serving Matthews with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is a BBB A+ rated, veteran-owned roofing company serving Matthews and
              South Charlotte. From residential repairs to commercial installations, our certified team
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
              Why Choose Our Matthews Roofers?
            </h2>
            <p className="text-gray text-lg">
              When you choose Best Roofing Now, you&apos;re choosing a team with the credentials,
              experience, and commitment to quality that Matthews homeowners deserve.
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
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Roofing Services in Matthews
              </h2>
              <p className="text-gray mb-6">
                Our certified roofers provide comprehensive roofing services throughout Matthews
                and South Charlotte. From minor repairs to complete replacements, we handle it all.
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

            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Matthews Areas We Serve
              </h2>
              <p className="text-gray mb-6">
                We provide roofing services throughout Matthews and surrounding South Charlotte communities.
              </p>
              <div className="flex flex-wrap gap-2">
                {matthewsAreas.map((area) => (
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
        city="Matthews"
        slug="roofers-matthews-nc"
        count={4}
        title="Recent Projects by Our Matthews Roofers"
        subtitle="Browse completed roofing projects from the Matthews area."
        schemaPageUrl={`${SITE_CONFIG.url}/roofers-matthews-nc`}
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

      <ServiceCityLinks
        city="Matthews"
        citySlug="matthews-nc"
        title="Complete Roofing Services in Matthews"
        subtitle="Our roofers offer comprehensive services for Matthews homes and businesses."
      />

      <RelatedCitiesLinks
        currentCity="Matthews"
        service="Roofing Contractors"
        serviceSlug="roofers"
        title="Roofers in Nearby Cities"
      />

      <CityGeoSection
        city="Matthews"
        state="NC"
        citySlug="matthews-nc"
        service="Roofers"
      />

      <CTASection
        title="Ready to Work with Matthews' Best Roofers?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll provide honest recommendations and transparent pricing."
      />
    </>
  );
}
