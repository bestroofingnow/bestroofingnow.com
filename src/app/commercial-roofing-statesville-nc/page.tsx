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
  Search,
  MapPin,
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
  title: 'Commercial Roofing Statesville NC',
  description:
    'Need commercial roofing in Statesville NC? Best Roofing Now provides TPO, EPDM, flat roof, and metal roofing for Iredell County businesses. BBB A+ rated, veteran-owned. Free estimates!',
  keywords: [
    'commercial roofing statesville nc',
    'commercial roofer statesville',
    'flat roof repair statesville nc',
    'tpo roofing statesville',
    'epdm roofing statesville nc',
    'iredell county commercial roofing',
    'commercial roof repair statesville',
    'business roofing statesville nc',
    'commercial roofing contractor statesville',
    'industrial roofing statesville nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-roofing-statesville-nc`,
  },
  openGraph: {
    title: 'Commercial Roofing Statesville NC | TPO, EPDM, Flat Roof | Best Roofing Now',
    description:
      'Expert commercial roofing in Statesville NC. TPO, EPDM, flat roof, and metal systems for Iredell County businesses. BBB A+ rated, veteran-owned. Free estimates!',
    url: `${SITE_CONFIG.url}/commercial-roofing-statesville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Commercial roofing services in Statesville NC - Best Roofing Now',
      },
    ],
  },
};

// Commercial services
const commercialServices = [
  {
    icon: Building2,
    title: 'TPO Roofing',
    description: 'Energy-efficient single-ply TPO membrane systems for Statesville commercial buildings.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Shield,
    title: 'EPDM Roofing',
    description: 'Durable rubber membrane roofing ideal for low-slope Iredell County commercial properties.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Home,
    title: 'Metal Roof Systems',
    description: 'Standing seam and metal panel systems for warehouses, offices, and retail spaces.',
    href: '/metal-roofing-statesville-nc',
  },
  {
    icon: Wrench,
    title: 'Flat Roof Repair',
    description: 'Expert repair of flat and low-slope commercial roofs including ponding and leak issues.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Search,
    title: 'Roof Assessment',
    description: 'Free comprehensive commercial roof inspections with detailed condition reports.',
    href: '/roof-inspection-statesville-nc',
  },
  {
    icon: Clock,
    title: 'Maintenance Programs',
    description: 'Preventive maintenance plans to extend your commercial roof\'s lifespan and prevent costly repairs.',
    href: '/services/commercial-roofing',
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
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied commercial and residential clients.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive commercial liability insurance.',
  },
  {
    icon: Users,
    title: 'Commercial Experts',
    description: 'Experienced team trained in all major commercial roofing systems and materials.',
  },
  {
    icon: Clock,
    title: 'Minimal Disruption',
    description: 'We work around your business schedule to minimize operational disruption.',
  },
];

// Local areas
const localAreas = [
  'Downtown Statesville',
  'Signal Hill',
  'I-77 Corridor',
  'I-40 Corridor',
  'Statesville Industrial Park',
  'West End',
  'Broad Street',
  'Center Street',
  'Garner Bagnal Boulevard',
  'Turnersburg Highway',
  'Amity Hill',
  'Brookdale',
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
    question: 'What commercial roofing systems do you install in Statesville?',
    answer:
      'We install all major commercial roofing systems in Statesville including TPO (Thermoplastic Polyolefin), EPDM (rubber membrane), modified bitumen, built-up roofing (BUR), standing seam metal, and metal panel systems. We assess your building\'s specific needs and recommend the most cost-effective, durable solution.',
  },
  {
    question: 'How much does commercial roofing cost in Statesville NC?',
    answer:
      'Commercial roofing costs in Statesville vary based on the system, building size, and complexity. TPO and EPDM systems typically cost $5-$12 per square foot installed. Metal commercial roofing ranges from $8-$18 per square foot. We provide free, detailed estimates for all Iredell County commercial properties.',
  },
  {
    question: 'Can you work around our business hours in Statesville?',
    answer:
      'Absolutely. We understand that business operations cannot stop for roofing work. We regularly schedule commercial roofing projects around business hours, working early mornings, evenings, or weekends when needed. Our goal is to complete your project with minimal disruption to your Statesville business.',
  },
  {
    question: 'Do you offer commercial roof maintenance programs?',
    answer:
      'Yes, we offer customized preventive maintenance programs for Statesville commercial buildings. Regular inspections and maintenance can extend your roof\'s lifespan by years, prevent costly emergency repairs, and maintain warranty compliance. Our programs include bi-annual inspections, debris removal, and minor repairs.',
  },
  {
    question: 'How long does a commercial roof last in Statesville?',
    answer:
      'Commercial roof lifespan varies by material: TPO membranes last 20-30 years, EPDM lasts 25-30 years, metal roofing lasts 40-60+ years, and modified bitumen lasts 15-25 years. Proper installation and regular maintenance are key to achieving maximum lifespan in Iredell County\'s climate.',
  },
  {
    question: 'Do you handle commercial roof insurance claims in Statesville?',
    answer:
      'Yes, we have extensive experience with commercial roof insurance claims in Iredell County. We provide thorough damage documentation, detailed reports, and work directly with insurance adjusters. Many commercial roofs qualify for insurance coverage after storm events common along the I-77/I-40 corridor.',
  },
  {
    question: 'What is TPO roofing and is it good for Statesville businesses?',
    answer:
      'TPO (Thermoplastic Polyolefin) is a single-ply reflective membrane that is energy-efficient, durable, and cost-effective for flat and low-slope commercial roofs. It is excellent for Statesville businesses because it reflects solar heat (reducing cooling costs), resists UV degradation, and handles North Carolina\'s weather well.',
  },
  {
    question: 'Can you repair my existing commercial roof in Statesville?',
    answer:
      'Yes, we repair all types of commercial roofing systems in Statesville. Many commercial roofs can be repaired rather than replaced, saving significant cost. We provide honest assessments and will recommend repair when it makes sense, or replacement when the roof has reached the end of its useful life.',
  },
];

export default function CommercialRoofingStatesvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing Statesville NC', url: `${SITE_CONFIG.url}/commercial-roofing-statesville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/commercial-roofing-statesville-nc`}
        pageName="Commercial Roofing Statesville NC"
        city="Statesville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero2}
            alt="Commercial roofing services in Statesville NC - Best Roofing Now"
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
              <span className="text-accent-light">Statesville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              TPO, EPDM, and metal roofing for Iredell County businesses
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides expert commercial roofing services for Statesville businesses, warehouses,
              and industrial facilities. From new installations to repairs and maintenance, our team delivers
              quality commercial roofing solutions that protect your investment and minimize downtime.
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
              Commercial Roofing Services in Statesville
            </h2>
            <p className="text-gray text-lg">
              From new installations to repairs and maintenance, we provide comprehensive commercial roofing
              solutions for Iredell County businesses.
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
                Why Statesville Businesses Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Your commercial roof protects your business, employees, and inventory. Statesville business
                owners trust Best Roofing Now for our commercial expertise, transparent pricing, and
                commitment to minimal disruption.
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
                src={IMAGES.realProjects.drone1}
                alt="Commercial roofing by Best Roofing Now in Statesville NC"
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
                Need Commercial Roofing in Statesville?
              </h2>
              <p className="text-white/90">
                Get a free commercial roof assessment and estimate from Iredell County's trusted roofing contractor.
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

      {/* Local Area Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Commercial Roofing for Statesville & Iredell County Businesses
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                As the county seat of Iredell County and a hub along the I-77/I-40 corridor, Statesville is
                home to a thriving business community that includes retail centers, office buildings, warehouses,
                manufacturing facilities, and restaurants. Each commercial property has unique roofing needs,
                and Best Roofing Now has the expertise to serve them all.
              </p>
              <p>
                Commercial roofing in Statesville faces challenges from the area's climate, including heavy
                rainfall, severe thunderstorms, and extreme summer heat. Our team recommends energy-efficient
                systems like TPO for flat-roof buildings, durable EPDM for industrial facilities, and standing
                seam metal for businesses wanting maximum longevity and curb appeal.
              </p>
              <p>
                We understand that your business cannot shut down for roofing work. Best Roofing Now plans
                every commercial project to minimize disruption, working around your schedule and ensuring
                your operations continue smoothly. From small retail shops on Broad Street to large industrial
                facilities along the highway corridors, we deliver quality commercial roofing solutions.
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
              Commercial Roofing Throughout Statesville & Iredell County
            </h2>
            <p className="text-gray text-lg">
              We provide commercial roofing services to businesses throughout Statesville and Iredell County.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Statesville Commercial Areas</h3>
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
                Commercial Roofing FAQs for Statesville
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about commercial roofing in Statesville NC.
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
        slug="commercial-roofing-statesville-nc"
      />

      <CityGeoSection
        city="Statesville"
        state="NC"
        citySlug="statesville-nc"
        service="Commercial Roofing"
      />


      <LKNPartnershipsBlock city={"Statesville"} />
      <LKNDataCitations city={"Statesville"} />
      <CTASection
        title="Ready to Protect Your Statesville Business?"
        subtitle="Get a free commercial roof assessment and estimate. We'll recommend the best roofing system for your Iredell County business and work around your schedule."
      />
    </>
  );
}
