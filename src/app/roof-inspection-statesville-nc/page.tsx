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
  Search,
  MapPin,
  FileText,
  Camera,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
export const metadata: Metadata = {
  title: 'Roof Inspection Statesville NC',
  description:
    'Free roof inspection in Statesville NC. Best Roofing Now provides comprehensive roof inspections with detailed photo reports for Iredell County homes. BBB A+ rated, veteran-owned. Schedule your free inspection today!',
  keywords: [
    'roof inspection statesville nc',
    'free roof inspection statesville',
    'roof inspection near me statesville',
    'statesville roof inspection',
    'iredell county roof inspection',
    'roof condition report statesville',
    'roof inspection company statesville nc',
    'home roof inspection statesville',
    'certified roof inspector statesville',
    'roof assessment statesville nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-inspection-statesville-nc`,
  },
  openGraph: {
    title: 'Roof Inspection Statesville NC | Free Inspections | Best Roofing Now',
    description:
      'Free comprehensive roof inspections in Statesville NC. Detailed photo reports, certified inspectors, no obligation. BBB A+ rated, veteran-owned. Schedule today!',
    url: `${SITE_CONFIG.url}/roof-inspection-statesville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Roof inspection services in Statesville NC - Best Roofing Now',
      },
    ],
  },
};

// Inspection services
const inspectionServices = [
  {
    icon: Search,
    title: 'Full Roof Inspection',
    description: 'Comprehensive inspection of all roofing components including shingles, flashing, vents, and structure.',
    href: '/services/roof-inspection',
  },
  {
    icon: Camera,
    title: 'Photo Documentation',
    description: 'Detailed photos of your entire roof condition including any damage or areas of concern.',
    href: '/services/roof-inspection',
  },
  {
    icon: FileText,
    title: 'Written Report',
    description: 'Detailed written condition report with findings, recommendations, and estimated repair costs.',
    href: '/services/roof-inspection',
  },
  {
    icon: Home,
    title: 'Pre-Purchase Inspection',
    description: 'Thorough roof assessment before buying a home in Statesville to avoid costly surprises.',
    href: '/services/roof-inspection',
  },
  {
    icon: Building2,
    title: 'Commercial Inspection',
    description: 'Professional inspections for Iredell County commercial and industrial roofs.',
    href: '/commercial-roofing-statesville-nc',
  },
  {
    icon: Shield,
    title: 'Insurance Inspection',
    description: 'Post-storm damage inspections with documentation formatted for insurance claims.',
    href: '/storm-damage-roof-repair-statesville-nc',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: CheckCircle,
    title: 'Free Inspections',
    description: 'Completely free roof inspections with no obligation to hire us for repairs.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied homeowners across the region.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Honest, no-pressure inspections backed by military values of integrity.',
  },
  {
    icon: Users,
    title: 'Certified Inspectors',
    description: 'CertainTeed, GAF, and Owens Corning certified for accurate manufacturer assessments.',
  },
  {
    icon: Clock,
    title: 'Quick Scheduling',
    description: 'Most inspections scheduled within 24-48 hours of your call to our office.',
  },
];

// Local areas
const localAreas = [
  'Downtown Statesville',
  'Historic District',
  'Signal Hill',
  'Brookdale',
  'Fourth Creek',
  'Cool Springs',
  'West End',
  'Northview',
  'Southview',
  'Amity Hill',
  'Scotts Creek',
  'Elmwood',
];

// Nearby cities
const nearbyCities = [
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Troutman', href: '/roofing-troutman-nc' },
  { name: 'Hickory', href: '/locations/hickory-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Lake Norman', href: '/roofing-lake-norman-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
];

// FAQs
const faqs = [
  {
    question: 'Is the roof inspection really free in Statesville?',
    answer:
      'Yes, our roof inspections in Statesville are completely free with absolutely no obligation. We believe every homeowner deserves to know their roof\'s condition. After the inspection, you will receive a detailed report with photos and recommendations. Whether you choose to work with us or not is entirely your decision.',
  },
  {
    question: 'What does a roof inspection include in Statesville?',
    answer:
      'Our comprehensive inspection covers all roofing components: shingles (condition, granule loss, curling, cracking), flashing around chimneys, vents, and skylights, gutters and downspouts, ridge cap condition, soffit and fascia, attic ventilation, and visible structural elements. We document everything with photos and provide a written report.',
  },
  {
    question: 'How long does a roof inspection take in Statesville?',
    answer:
      'A typical residential roof inspection in Statesville takes 30-60 minutes, depending on your roof\'s size and complexity. Larger homes, historic properties, or roofs with multiple levels may take up to 90 minutes. We take the time needed to thoroughly assess every component.',
  },
  {
    question: 'How often should I have my Statesville roof inspected?',
    answer:
      'We recommend annual roof inspections for Statesville homes, ideally in spring or fall. Additionally, you should schedule an inspection after any significant storm event, if you notice signs of damage (leaks, missing shingles), before buying or selling a home, or when your roof approaches 15-20 years of age.',
  },
  {
    question: 'Do you inspect historic home roofs in downtown Statesville?',
    answer:
      'Yes, we have experience inspecting historic properties in downtown Statesville and the Historic District. Our inspectors understand the unique materials and construction methods used in older homes and can identify issues specific to aging roof systems while recommending appropriate repair or replacement options.',
  },
  {
    question: 'Can you inspect my roof before I buy a house in Statesville?',
    answer:
      'Absolutely! Pre-purchase roof inspections are one of our most valuable services for Statesville homebuyers. We provide a detailed assessment of the roof\'s remaining lifespan, any needed repairs, and estimated costs. This information helps you make informed buying decisions and negotiate fairly.',
  },
  {
    question: 'What happens if you find damage during my Statesville roof inspection?',
    answer:
      'If we find damage, we will explain the issue, show you photos, and discuss your options. For minor issues, a repair may be all that is needed. For significant damage, we will provide a repair or replacement estimate. If storm damage is found, we can assist with filing an insurance claim. There is never any pressure to make immediate decisions.',
  },
  {
    question: 'Do you provide inspection reports for insurance companies?',
    answer:
      'Yes, our inspection reports are formatted to meet insurance company requirements. We include detailed photos, descriptions of damage, measurements, and professional assessments. Many Statesville homeowners use our reports to support their insurance claims after storm events.',
  },
];

export default function RoofInspectionStatesvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Inspection Statesville NC', url: `${SITE_CONFIG.url}/roof-inspection-statesville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-inspection-statesville-nc`}
        pageName="Roof Inspection Statesville NC"
        city="Statesville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Roof inspection services in Statesville NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Search className="w-4 h-4" />
              <span className="text-sm font-semibold">Free Roof Inspections</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Inspection <br className="hidden md:block" />
              <span className="text-accent-light">Statesville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Free comprehensive roof inspections with detailed photo reports
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Know the true condition of your Statesville roof with a free, no-obligation inspection from
              Best Roofing Now. Our certified inspectors provide detailed photo reports and honest
              recommendations with zero pressure. Schedule your free inspection today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Inspection
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
                100% Free, No Obligation
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
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
              Roof Inspection Services in Statesville NC
            </h2>
            <p className="text-gray text-lg">
              From routine inspections to pre-purchase assessments and storm damage documentation,
              our certified inspectors provide thorough evaluations for every situation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspectionServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
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

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Statesville Homeowners Trust Our Inspections
              </h2>
              <p className="text-gray text-lg mb-8">
                Our roof inspections are thorough, honest, and completely free. We believe every Statesville
                homeowner deserves to know their roof's condition without any pressure or obligation.
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
                src={IMAGES.realProjects.drone1}
                alt="Professional roof inspection in Statesville NC by Best Roofing Now"
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
                Want to Know Your Roof's Condition?
              </h2>
              <p className="text-white/90">
                Schedule a free, no-obligation roof inspection for your Statesville home today.
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
                Schedule Free Inspection
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

      {/* Local Area Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Roof Inspections for Statesville & Iredell County Homes
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Regular roof inspections are one of the smartest investments a Statesville homeowner can make.
                North Carolina's climate, with hot humid summers and severe thunderstorms, takes a toll on
                roofing materials over time. Catching problems early through routine inspections can save you
                thousands in repair costs and extend your roof's lifespan significantly.
              </p>
              <p>
                Statesville's diverse housing stock, from beautifully preserved historic homes in the downtown
                district to modern construction in growing neighborhoods, means our inspectors see every type of
                roof condition. Whether your home is 100 years old or brand new, a professional inspection gives
                you peace of mind and actionable information about your roof's health.
              </p>
              <p>
                Best Roofing Now's certified inspectors bring manufacturer-level expertise to every Statesville
                inspection. Our CertainTeed, GAF, and Owens Corning certifications mean we can accurately
                assess warranty eligibility and recommend the most cost-effective solutions for any issues we find.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Inspections Throughout Statesville & Iredell County
            </h2>
            <p className="text-gray text-lg">
              We provide free roof inspections to homeowners throughout Statesville and surrounding communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Statesville Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {localAreas.map((area) => (
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
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Cities We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {nearbyCities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.href}
                    className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Service Areas
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
                Roof Inspection FAQs for Statesville
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof inspections in Statesville NC.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="location"
        city="Statesville"
        slug="roof-inspection-statesville-nc"
      />

      <CityGeoSection
        city="Statesville"
        state="NC"
        citySlug="statesville-nc"
        service="Roof Inspection"
      />


      <LKNPartnershipsBlock city={"Statesville"} />
      <LKNDataCitations city={"Statesville"} />
      <CTASection
        title="Schedule Your Free Statesville Roof Inspection"
        subtitle="Know your roof's true condition with a free, no-obligation inspection from our certified team. Detailed photo report included."
      />
    </>
  );
}
