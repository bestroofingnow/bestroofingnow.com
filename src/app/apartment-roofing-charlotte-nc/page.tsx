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
  Building2,
  FileCheck,
  Hammer,
  Layers,
  AlertTriangle,
  DollarSign,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Apartment Roofing Charlotte NC | Multi-Family Experts',
  description:
    'Expert apartment roofing services in Charlotte NC. Multi-family roofing specialists, apartment complex roof repair and replacement. Property management approved. Free estimates.',
  keywords: [
    'apartment roofing Charlotte NC',
    'apartment complex roofing Charlotte',
    'multi-family roofing Charlotte NC',
    'apartment roof repair Charlotte',
    'apartment building roof replacement',
    'property management roofing Charlotte',
    'apartment complex roofer Charlotte',
    'multi-unit roofing contractor Charlotte',
    'rental property roofing Charlotte NC',
    'apartment maintenance roofing Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/apartment-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Apartment Roofing Charlotte NC | Multi-Family Experts',
    description:
      'BBB A+ rated apartment roofing experts in Charlotte NC. Multi-family specialists, property management approved, complete apartment roofing services. Free estimates.',
    url: `${SITE_CONFIG.url}/apartment-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero4,
        width: 1200,
        height: 630,
        alt: 'Professional apartment roofing services in Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Apartment-specific services
const apartmentServices = [
  {
    icon: Building2,
    title: 'Full Complex Re-Roofing',
    description: 'Complete roof replacement for apartment complexes with phased scheduling to minimize tenant disruption.',
  },
  {
    icon: Layers,
    title: 'Flat Roof Systems',
    description: 'TPO, EPDM, and modified bitumen installation for multi-story apartment buildings.',
  },
  {
    icon: Hammer,
    title: 'Emergency Leak Repair',
    description: 'Fast response for urgent repairs to protect tenants and prevent property damage.',
  },
  {
    icon: FileCheck,
    title: 'Property Management Support',
    description: 'Seamless coordination with property managers, owners, and maintenance teams.',
  },
  {
    icon: AlertTriangle,
    title: 'Preventive Maintenance',
    description: 'Regular inspection programs to catch issues early and extend roof lifespan.',
  },
  {
    icon: DollarSign,
    title: 'Budget Planning',
    description: 'Multi-year capital planning assistance for property owners and management companies.',
  },
];

// Why choose us for apartments
const whyChooseUs = [
  {
    icon: Award,
    title: 'Multi-Family Experience',
    description: 'Proven track record with apartment complexes from 10 to 500+ units.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from Charlotte property owners.`,
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Comprehensive liability coverage essential for multi-family properties.',
  },
  {
    icon: CheckCircle,
    title: 'Minimal Disruption',
    description: 'We work around tenant schedules and maintain safe, clean job sites.',
  },
  {
    icon: Users,
    title: 'Dedicated PM',
    description: 'Assigned project manager for seamless property management communication.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency',
    description: 'Round-the-clock emergency response for tenant-occupied properties.',
  },
];

// Charlotte areas with apartment complexes
const apartmentAreas = [
  'University City',
  'South End',
  'Uptown Charlotte',
  'NoDa',
  'Plaza Midwood',
  'SouthPark',
  'Ballantyne',
  'Steele Creek',
  'Pineville',
  'Matthews',
  'Huntersville',
  'Mooresville',
  'Concord',
  'Gastonia',
  'Rock Hill',
  'Fort Mill',
];

// FAQs about apartment roofing
const faqs = [
  {
    question: 'How do you minimize disruption to apartment tenants during roofing?',
    answer:
      "Tenant comfort is a top priority. We work in phases across the property, provide advance notice to affected units, maintain clear pathways to entrances, and complete thorough daily cleanup. For larger complexes, we create detailed schedules showing which buildings are affected each day so property managers can communicate with tenants.",
  },
  {
    question: 'Can you roof an occupied apartment building?',
    answer:
      "Absolutely. We routinely roof occupied multi-family properties. Our crews are trained to work safely around tenants, minimize noise during quiet hours when possible, and keep all work areas secure. We coordinate closely with property management to address any tenant concerns quickly.",
  },
  {
    question: 'What roofing systems do you recommend for apartment buildings?',
    answer:
      "The best system depends on your building's design and budget. For flat roofs, we commonly install TPO (energy-efficient white membrane), EPDM rubber roofing, or modified bitumen. For pitched roofs, architectural shingles offer the best value for multi-family properties. We'll assess your buildings and recommend the most cost-effective solution.",
  },
  {
    question: 'Do you work with property management companies?',
    answer:
      "Yes, we work with major property management firms across Charlotte including Greystar, MAA, Lincoln Property Company, and many regional companies. We understand their approval processes, documentation requirements, and reporting expectations. Our project managers are experienced in property management communication protocols.",
  },
  {
    question: 'How much does apartment complex roofing cost?',
    answer:
      "Costs vary based on property size, roof type, and material choice. Flat roofing typically ranges from $4-$10 per square foot. For large complexes, we offer phased project options to spread costs over multiple budget years. We provide detailed proposals with multiple options so you can choose what works for your budget.",
  },
  {
    question: 'Do you handle emergency roof repairs for apartments?',
    answer:
      "Yes, we offer 24/7 emergency response for apartment properties. When leaks affect occupied units, fast response is critical to prevent water damage and protect tenant safety. Our emergency team can typically respond within 1-4 hours to secure the affected area and prevent further damage.",
  },
  {
    question: 'Can you help with insurance claims after storm damage?',
    answer:
      "We have extensive experience with commercial property insurance claims. We document all damage thoroughly, prepare detailed scope reports, meet with insurance adjusters, and advocate for fair settlements. For apartment complexes, we understand the urgency of quick claims resolution to protect tenants.",
  },
  {
    question: 'Do you offer preventive maintenance programs?',
    answer:
      "Yes, we offer annual inspection and maintenance programs for apartment properties. Regular maintenance catches small issues before they become expensive repairs, extends roof lifespan by years, and helps you budget more accurately for capital expenditures. Ask about our property management maintenance contracts.",
  },
];

export default function ApartmentRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Apartment Roofing Charlotte NC', url: `${SITE_CONFIG.url}/apartment-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero4}
            alt="Professional apartment roofing services in Charlotte NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Multi-Family Experts | BBB A+ Rated</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Apartment Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Multi-family roofing specialists for Charlotte apartment communities
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is Charlotte's trusted partner for apartment and multi-family roofing.
              From 10-unit properties to large complexes, we deliver professional results while minimizing
              disruption to your tenants and operations.
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
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-light" />
                24/7 Emergency
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Apartment-Specific Intro */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Charlotte's Multi-Family Roofing Professionals
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Apartment and multi-family roofing demands a contractor who understands the stakes. When
                your roof protects dozens or hundreds of tenants and represents a major capital investment,
                you need a partner with proven multi-family experience.
              </p>
              <p>
                Best Roofing Now has completed roofing projects for apartment complexes throughout the
                Charlotte metro area, from boutique properties to large communities. We work seamlessly
                with property management companies, asset managers, and building owners.
              </p>
              <p>
                Our phased approach minimizes tenant disruption while our dedicated project managers
                keep property management informed at every step. From emergency repairs to complete
                re-roofing projects, we have the expertise and capacity to handle your multi-family needs.
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
              Apartment Roofing Services
            </h2>
            <p className="text-gray text-lg">
              Complete roofing solutions for Charlotte apartment communities and multi-family properties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apartmentServices.map((service) => (
              <div
                key={service.title}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
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

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Property Managers Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Managing apartment roofing projects requires a contractor who understands property
                management needs. We deliver professional results with the communication and
                documentation you require.
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
                src={IMAGES.commercial.warehouse}
                alt="Apartment roofing project by Best Roofing Now in Charlotte NC"
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
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Management Benefits */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Property Management Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-4 text-lg">For Property Managers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Dedicated project manager for single point of contact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Daily progress reports with photos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Tenant communication templates provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Flexible scheduling around property events</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-4 text-lg">For Property Owners</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Detailed capital planning assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Phased project options for budget management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Comprehensive warranty documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray">Energy-efficient roofing options available</span>
                  </li>
                </ul>
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
                Need Apartment Roofing in Charlotte?
              </h2>
              <p className="text-white/90">
                Get a free property assessment from our multi-family roofing specialists.
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
                Schedule Free Assessment
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

      {/* Areas Served Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Apartment Communities We Serve
            </h2>
            <p className="text-gray text-lg">
              We provide apartment roofing services throughout the Charlotte metro area.
            </p>
          </div>
          <div className="bg-light rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {apartmentAreas.map((area) => (
                <span
                  key={area}
                  className="inline-block bg-white px-4 py-2 rounded-full text-sm text-gray border border-gray-200"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-center text-gray mt-6 text-sm">
              Serving apartment communities of all sizes throughout the greater Charlotte region.
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Multi-Family Roofing Projects
            </h2>
            <p className="text-gray text-lg">
              See examples of our apartment and multi-family roofing work in Charlotte.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project2}
                alt="Apartment roof replacement in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.commercial.office}
                alt="Multi-family roofing project in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of apartment roofing project"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project4}
                alt="Completed apartment roof in Charlotte"
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
                Apartment Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about apartment and multi-family roofing in Charlotte.
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

      {/* Final CTA */}
      <CTASection
        title="Ready for Professional Apartment Roofing?"
        subtitle="Get a free assessment from Charlotte's trusted multi-family roofing experts. We understand property management needs and deliver results with minimal disruption."
      />
    </>
  );
}
