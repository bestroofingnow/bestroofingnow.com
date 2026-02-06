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
  Building2,
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
  title: 'Commercial Roofing Mt Holly NC',
  description:
    'Commercial roofing services in Mt Holly NC. Best Roofing Now installs TPO, EPDM, metal, and flat roofing systems for businesses. Licensed, insured. Free estimates!',
  keywords: [
    'commercial roofing mt holly nc',
    'commercial roof repair mt holly',
    'flat roof mt holly nc',
    'tpo roofing mt holly nc',
    'commercial roofing contractors mt holly',
    'business roofing mt holly nc',
    'industrial roofing mt holly',
    'commercial roof replacement mt holly',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-roofing-mt-holly-nc`,
  },
  openGraph: {
    title: 'Commercial Roofing Mt Holly NC | TPO, EPDM, Flat Roofs | Best Roofing Now',
    description:
      'Expert commercial roofing in Mt Holly NC. TPO, EPDM, metal, and modified bitumen systems. Licensed contractors serving Gaston County businesses.',
    url: `${SITE_CONFIG.url}/commercial-roofing-mt-holly-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Commercial roofing in Mt Holly NC - Best Roofing Now',
      },
    ],
  },
};

// Commercial roofing systems
const roofingSystems = [
  {
    title: 'TPO Roofing',
    description: 'Energy-efficient single-ply membrane ideal for flat and low-slope commercial roofs.',
    popular: true,
  },
  {
    title: 'EPDM Roofing',
    description: 'Durable rubber membrane with excellent weather resistance and long lifespan.',
    popular: false,
  },
  {
    title: 'Metal Roofing',
    description: 'Standing seam and metal panel systems for commercial and industrial buildings.',
    popular: false,
  },
  {
    title: 'Modified Bitumen',
    description: 'Multi-layer asphalt system offering excellent durability and waterproofing.',
    popular: false,
  },
  {
    title: 'Built-Up Roofing (BUR)',
    description: 'Traditional multi-ply system with proven performance for flat roofs.',
    popular: false,
  },
  {
    title: 'Roof Coatings',
    description: 'Extend your roof\'s life with reflective coatings that reduce energy costs.',
    popular: false,
  },
];

// Commercial services
const commercialServices = [
  {
    icon: Building2,
    title: 'New Construction',
    description: 'Complete roofing systems for new commercial buildings in Mt Holly.',
  },
  {
    icon: Wrench,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with modern, efficient roofing systems.',
  },
  {
    icon: Clock,
    title: 'Repairs & Maintenance',
    description: 'Fast repairs and preventive maintenance to minimize business disruption.',
  },
  {
    icon: Shield,
    title: 'Roof Inspections',
    description: 'Comprehensive inspections to identify issues before they become costly.',
  },
];

// FAQs
const faqs = [
  {
    question: 'What commercial roofing systems do you install in Mt Holly?',
    answer:
      'We install all major commercial roofing systems including TPO, EPDM, PVC, modified bitumen, built-up roofing (BUR), metal roofing, and roof coatings. We\'ll recommend the best system for your building and budget.',
  },
  {
    question: 'How much does commercial roofing cost in Mt Holly NC?',
    answer:
      'Commercial roofing costs vary based on roof size, system type, and building requirements. TPO and EPDM typically run $5-10 per square foot installed. We provide detailed, transparent estimates for every project.',
  },
  {
    question: 'Can you work around our business hours?',
    answer:
      'Yes! We understand that business disruption is costly. We can schedule work during off-hours, weekends, or in phases to minimize impact on your Mt Holly business operations.',
  },
  {
    question: 'Do you offer commercial roof maintenance programs?',
    answer:
      'Yes, we offer preventive maintenance programs for Mt Holly businesses. Regular inspections and minor repairs can significantly extend your roof\'s lifespan and prevent costly emergency repairs.',
  },
  {
    question: 'What warranties do you offer on commercial roofing?',
    answer:
      'We offer manufacturer warranties up to 30 years on materials and our own workmanship warranty. Many commercial systems also qualify for NDL (No Dollar Limit) warranties through major manufacturers.',
  },
  {
    question: 'How long does commercial roof installation take?',
    answer:
      'Installation time depends on roof size and system complexity. Small commercial roofs may take 3-5 days, while larger projects can take 2-4 weeks. We provide detailed timelines during the estimate process.',
  },
];

export default function CommercialRoofingMtHollyNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/services/commercial-roofing` },
          { name: 'Mt Holly NC', url: `${SITE_CONFIG.url}/commercial-roofing-mt-holly-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ServiceAreaPageSchema
        city="Mt Holly"
        state="NC"
        slug="commercial-roofing-mt-holly-nc"
        distance={15}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/commercial-roofing-mt-holly-nc`}
        pageName="Commercial Roofing Mt Holly NC"
        city="Mt Holly"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Commercial roofing in Mt Holly NC - Best Roofing Now"
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
              Commercial Roofing Mt Holly NC
              <br className="hidden md:block" />
              <span className="text-accent-light">TPO, EPDM & Flat Roof Experts</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Professional commercial roofing for Mt Holly businesses
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert commercial roofing services throughout Mt Holly
              and Gaston County. From new installations to repairs and maintenance, our certified
              team delivers quality solutions for businesses of all sizes.
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
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Roofing Systems Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Roofing Systems
            </h2>
            <p className="text-gray text-lg">
              We install and maintain all major commercial roofing systems for Mt Holly businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roofingSystems.map((system) => (
              <div
                key={system.title}
                className={`p-6 rounded-xl ${system.popular ? 'bg-primary text-white' : 'bg-light'}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`font-bold text-xl ${system.popular ? 'text-white' : 'text-dark'}`}>
                    {system.title}
                  </h3>
                  {system.popular && (
                    <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className={system.popular ? 'text-white/90' : 'text-gray'}>
                  {system.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/commercial-roofing-services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Learn More About Commercial Systems
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Services in Mt Holly
            </h2>
            <p className="text-gray text-lg">
              Complete commercial roofing solutions from installation to maintenance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialServices.map((service) => (
              <div key={service.title} className="text-center p-6 bg-white rounded-xl">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-gray text-sm">{service.description}</p>
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
                Need Commercial Roofing in Mt Holly?
              </h2>
              <p className="text-white/90">
                Get a free estimate for your business or commercial property.
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
        slug="commercial-roofing-mt-holly-nc"
        count={4}
        title="Commercial Projects in Mt Holly"
        subtitle="Browse commercial roofing projects from the Mt Holly area."
        schemaPageUrl={`${SITE_CONFIG.url}/commercial-roofing-mt-holly-nc`}
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
                Commercial Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Questions about commercial roofing in Mt Holly? We have answers.
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
        subtitle="Beyond commercial, we offer comprehensive roofing solutions."
      />

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Mt Holly"
        service="Commercial Roofing"
        serviceSlug="commercial-roofing"
        title="Commercial Roofing in Nearby Cities"
      />

      <CityGeoSection
        city="Mt Holly"
        state="NC"
        citySlug="mt-holly-nc"
        service="Commercial Roofing"
      />

      <CTASection
        title="Expert Commercial Roofing in Mt Holly"
        subtitle="Get a free estimate for your commercial roofing project. We work around your schedule to minimize business disruption."
      />
    </>
  );
}
