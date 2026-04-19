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
  Layers,
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
  title: 'Commercial Roofing Sherrills Ford',
  description:
    'Need commercial roofing in Sherrills Ford NC? Best Roofing Now installs and repairs TPO, EPDM, flat roofs, and metal systems for Catawba County businesses. BBB A+ rated, veteran-owned. Free commercial roof estimates!',
  keywords: [
    'commercial roofing sherrills ford nc',
    'commercial roofer sherrills ford',
    'flat roof sherrills ford nc',
    'tpo roofing sherrills ford',
    'epdm roofing sherrills ford nc',
    'commercial roof repair sherrills ford',
    'catawba county commercial roofing',
    'lake norman commercial roofer',
    'metal roof commercial sherrills ford',
    'commercial roofing contractor sherrills ford nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-roofing-sherrills-ford-nc`,
  },
  openGraph: {
    title: 'Commercial Roofing Sherrills Ford NC | TPO, EPDM, Flat Roofs | Best Roofing Now',
    description:
      'Expert commercial roofing in Sherrills Ford NC and Catawba County. TPO, EPDM, flat roof systems, and metal roofing for businesses. BBB A+ rated. Free estimates!',
    url: `${SITE_CONFIG.url}/commercial-roofing-sherrills-ford-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.commercial,
        width: 1200,
        height: 630,
        alt: 'Commercial roofing services in Sherrills Ford NC - Best Roofing Now',
      },
    ],
  },
};

// Commercial roofing services
const commercialServices = [
  {
    icon: Layers,
    title: 'TPO Roofing',
    description: 'Energy-efficient single-ply TPO membrane systems ideal for flat and low-slope commercial buildings.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'EPDM Roofing',
    description: 'Durable rubber membrane roofing with superior weather resistance for Catawba County businesses.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Building2,
    title: 'Flat Roof Systems',
    description: 'Complete flat roof installation, repair, and maintenance for commercial properties.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Home,
    title: 'Metal Commercial Roofs',
    description: 'Standing seam and metal panel systems for warehouses, retail, and industrial buildings.',
    href: '/services/metal-roofing',
  },
  {
    icon: Wrench,
    title: 'Commercial Repairs',
    description: 'Fast commercial roof repairs to minimize business disruption in Sherrills Ford and Lake Norman.',
    href: '/services/roof-repair',
  },
  {
    icon: Search,
    title: 'Roof Assessments',
    description: 'Free commercial roof inspections with infrared moisture detection and detailed condition reports.',
    href: '/services/roof-inspection',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied commercial and residential clients.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Military discipline and integrity applied to every commercial roofing project.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC commercial roofing contractor with comprehensive insurance coverage.',
  },
  {
    icon: Clock,
    title: 'Minimal Disruption',
    description: 'We work around your business schedule to minimize operational interruptions.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Certified technicians with specialized training in commercial roofing systems.',
  },
];

// Sherrills Ford area communities
const localAreas = [
  'Sherrills Ford',
  'Lake Norman Waterfront',
  'Catawba County',
  'Terrell',
  'Claremont',
  'Maiden',
  'Conover',
  'Newton',
  'Hickory',
  'Denver',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Denver', href: '/roofing-denver-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Hickory', href: '/locations/hickory-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs
const faqs = [
  {
    question: 'What commercial roofing systems do you install in Sherrills Ford?',
    answer:
      'We install all major commercial roofing systems including TPO (Thermoplastic Polyolefin), EPDM (rubber membrane), modified bitumen, built-up roofing (BUR), standing seam metal, and PVC membrane systems. We assess each building\'s needs and recommend the best system for your Catawba County business.',
  },
  {
    question: 'How much does commercial roofing cost in Sherrills Ford NC?',
    answer:
      'Commercial roofing costs vary significantly based on system type, building size, and complexity. TPO and EPDM systems typically cost $5-$10 per square foot. Metal commercial roofs range from $8-$20 per square foot. We provide detailed free estimates for all Sherrills Ford commercial projects.',
  },
  {
    question: 'Do you offer commercial roof maintenance programs?',
    answer:
      'Yes, we offer preventive maintenance programs for commercial buildings in the Sherrills Ford and Lake Norman area. Regular maintenance extends your roof\'s lifespan, catches small issues before they become expensive repairs, and helps maintain your manufacturer warranty. Programs include bi-annual inspections and priority service.',
  },
  {
    question: 'Can you work around our business hours in Sherrills Ford?',
    answer:
      'Absolutely. We understand that roof work can disrupt your operations. We offer flexible scheduling including evenings, weekends, and phased installation to minimize impact on your Catawba County business. We will work with you to find the schedule that causes the least disruption.',
  },
  {
    question: 'How long does a commercial roof last in Sherrills Ford?',
    answer:
      'Commercial roof lifespans depend on the system: TPO lasts 20-30 years, EPDM 25-30 years, metal 40-60+ years, and built-up roofing 20-30 years. Proper installation and regular maintenance are key to achieving maximum lifespan, especially in the Lake Norman climate.',
  },
  {
    question: 'Do you provide warranties on commercial roofing?',
    answer:
      'Yes, we provide comprehensive warranties on all commercial roofing projects. These include manufacturer material warranties (up to 30 years for TPO and EPDM) and our own workmanship warranty. As certified installers, we can offer enhanced warranty packages.',
  },
  {
    question: 'What commercial properties do you serve near Sherrills Ford?',
    answer:
      'We serve all types of commercial properties in the Sherrills Ford and Catawba County area including office buildings, warehouses, retail centers, restaurants, churches, medical facilities, multi-family buildings, and industrial facilities. No project is too large or too small.',
  },
];

export default function CommercialRoofingSherrillsFordNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing Sherrills Ford NC', url: `${SITE_CONFIG.url}/commercial-roofing-sherrills-ford-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/commercial-roofing-sherrills-ford-nc`}
        pageName="Commercial Roofing Sherrills Ford NC"
        city="Sherrills Ford"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.commercial}
            alt="Commercial roofing services in Sherrills Ford NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Commercial Roofing Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Commercial Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Sherrills Ford NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              TPO, EPDM, and flat roof systems for Catawba County businesses
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert commercial roofing services for businesses throughout Sherrills Ford
              and the Lake Norman corridor. From TPO and EPDM installations to metal roof systems, our certified
              team delivers quality commercial solutions with minimal disruption to your operations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Commercial Estimate
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
              Commercial Roofing Services in Sherrills Ford
            </h2>
            <p className="text-gray text-lg">
              From single-ply membrane systems to metal roofing, we install and maintain commercial
              roofing solutions for Catawba County and Lake Norman businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialServices.map((service) => (
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
                Why Sherrills Ford Businesses Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Your commercial roof protects your business, your inventory, and your employees. Trust a
                contractor with the expertise, certifications, and track record to get it right the first time.
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
                src={IMAGES.services.commercial}
                alt="Best Roofing Now - Commercial roofing contractor in Sherrills Ford NC"
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
                Need Commercial Roofing in Sherrills Ford?
              </h2>
              <p className="text-white/90">
                Get a free commercial roof assessment and detailed estimate for your business.
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

      {/* Service Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Roofing Across Sherrills Ford & Catawba County
            </h2>
            <p className="text-gray text-lg">
              We serve commercial properties throughout Sherrills Ford, Catawba County, and the Lake Norman business corridor.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Sherrills Ford Area Communities</h3>
              <div className="flex flex-wrap gap-2">
                {localAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-light rounded-xl p-6">
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
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Commercial Roofing FAQs for Sherrills Ford
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about commercial roofing in Sherrills Ford NC.
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
        city="Denver"
        slug="commercial-roofing-sherrills-ford-nc"
      />

      <CityGeoSection
        city="Sherrills Ford"
        state="NC"
        citySlug="sherrills-ford-nc"
        service="Commercial Roofing"
      />


      <LKNPartnershipsBlock city={"Sherrills Ford"} />
      <LKNDataCitations city={"Sherrills Ford"} />
      <CTASection
        title="Get a Commercial Roofing Estimate for Sherrills Ford"
        subtitle="Free assessments and detailed estimates for commercial roofing projects. Protect your Catawba County business with expert roofing solutions."
      />
    </>
  );
}
