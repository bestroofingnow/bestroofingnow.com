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
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofers Statesville NC',
  description:
    'Looking for roofers in Statesville NC? Best Roofing Now is a BBB A+ rated, veteran-owned roofing company serving Statesville and Iredell County. Licensed, insured, certified installers. Free estimates for all roofing services.',
  keywords: [
    'roofers statesville nc',
    'roofer statesville nc',
    'roofing contractors statesville',
    'best roofers statesville nc',
    'local roofers statesville',
    'iredell county roofers',
    'statesville roofing contractors',
    'roofer near me statesville nc',
    'licensed roofer statesville',
    'top rated roofers statesville nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofers-statesville-nc`,
  },
  openGraph: {
    title: 'Roofers Statesville NC | BBB A+ Rated | Best Roofing Now',
    description:
      'Top-rated roofers serving Statesville NC and Iredell County. BBB A+ rated, veteran-owned, licensed and insured. Free estimates for roof repair, replacement, and installation.',
    url: `${SITE_CONFIG.url}/roofers-statesville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional roofers in Statesville NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Statesville homes from shingle to metal and tile roofing systems.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, and flat roof systems for Iredell County commercial properties and businesses.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, storm damage, and general wear in Statesville.',
    href: '/roof-repair-statesville-nc',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials and manufacturer-backed warranties.',
    href: '/roof-replacement-statesville-nc',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections with detailed condition reports for Statesville properties.',
    href: '/roof-inspection-statesville-nc',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage',
    description: 'Emergency storm damage restoration and insurance claim assistance for Statesville homeowners.',
    href: '/storm-damage-roof-repair-statesville-nc',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied customers across the region.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Quick turnaround times and 24/7 emergency services for Iredell County homeowners.',
  },
];

// Statesville area communities
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

// Nearby cities served
const nearbyCities = [
  { name: 'Mooresville', href: '/roofing-mooresville-nc' },
  { name: 'Troutman', href: '/roofing-troutman-nc' },
  { name: 'Hickory', href: '/locations/hickory-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Lake Norman', href: '/roofing-lake-norman-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
];

// FAQs
const faqs = [
  {
    question: 'What makes Best Roofing Now the best roofer in Statesville NC?',
    answer:
      'Best Roofing Now stands out in Statesville with our BBB A+ rating, veteran-owned values, and over ' + SITE_CONFIG.googleReviewCount + ' five-star Google reviews. Our CertainTeed, GAF, and Owens Corning certifications mean we offer premium warranty options that most local roofers cannot match. We combine Charlotte-level expertise with personalized service for every Iredell County homeowner.',
  },
  {
    question: 'Are you licensed and insured to work in Statesville NC?',
    answer:
      'Yes, Best Roofing Now is fully licensed as a roofing contractor in North Carolina and carries comprehensive general liability insurance and workers\' compensation coverage. We are happy to provide proof of insurance and licensing upon request. Our team follows all Iredell County building codes and permit requirements.',
  },
  {
    question: 'How do I choose the right roofer in Statesville?',
    answer:
      'When choosing a roofer in Statesville, look for proper NC licensing, adequate insurance coverage, manufacturer certifications, a strong BBB rating, and verified Google reviews. Avoid roofers who demand large upfront payments or lack written contracts. Best Roofing Now meets all these criteria and provides free, transparent written estimates.',
  },
  {
    question: 'Do you serve all neighborhoods in Statesville?',
    answer:
      'Yes, we serve every neighborhood in Statesville including Downtown, Historic District, Signal Hill, Brookdale, Fourth Creek, Cool Springs, West End, Northview, Southview, Amity Hill, Scotts Creek, and Elmwood. We also serve surrounding Iredell County communities along the I-77 and I-40 corridors.',
  },
  {
    question: 'What certifications do your Statesville roofers hold?',
    answer:
      'Our roofing team holds certifications from CertainTeed, GAF, and Owens Corning - the three leading shingle manufacturers in North America. These certifications require ongoing training and quality standards, and they allow us to offer enhanced warranty coverage that uncertified roofers cannot provide to Statesville homeowners.',
  },
  {
    question: 'How long does a typical roofing project take in Statesville?',
    answer:
      'Most residential roof replacements in Statesville are completed in 1-3 days, depending on size and complexity. Roof repairs typically take a few hours to one day. Historic homes in downtown Statesville may require additional time for specialized materials or techniques. We always provide a timeline estimate before starting work.',
  },
  {
    question: 'Do you offer financing for roofing projects in Statesville?',
    answer:
      'Yes, we offer flexible financing options to make roofing projects affordable for Statesville homeowners. We partner with trusted lending providers to offer competitive rates and manageable monthly payments. Contact us for details on current financing programs available in your area.',
  },
  {
    question: 'What warranty do you offer on roofing work in Statesville?',
    answer:
      'We provide a comprehensive workmanship warranty on all our roofing projects in Statesville. Additionally, our manufacturer certifications from CertainTeed, GAF, and Owens Corning allow us to offer extended material warranties of up to 50 years. The specific warranty depends on the materials and system you choose.',
  },
];

export default function RoofersStatesvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofers Statesville NC', url: `${SITE_CONFIG.url}/roofers-statesville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofers-statesville-nc`}
        pageName="Roofers Statesville NC"
        city="Statesville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Professional roofers in Statesville NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated Roofers</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofers Statesville NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Trusted Iredell County Roofers</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Veteran-owned roofing company with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Looking for reliable roofers in Statesville NC? Best Roofing Now is a BBB A+ rated, veteran-owned
              roofing company serving Statesville and Iredell County. Our certified installers deliver expert
              craftsmanship with premium materials and industry-leading warranties.
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
              Roofing Services We Offer in Statesville
            </h2>
            <p className="text-gray text-lg">
              Our Statesville roofers provide comprehensive roofing services for residential and commercial
              properties throughout Iredell County.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
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
                Why Choose Our Roofers for Your Statesville Home
              </h2>
              <p className="text-gray text-lg mb-8">
                With so many roofers to choose from, Statesville homeowners trust Best Roofing Now for our
                proven track record, transparent pricing, and commitment to quality craftsmanship on every
                Iredell County project.
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
                alt="Best Roofing Now - Trusted roofers serving Statesville NC"
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
                Need a Reliable Roofer in Statesville?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Iredell County's top-rated roofing company.
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

      {/* Local Area Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Your Local Roofers in Statesville & Iredell County
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Best Roofing Now is proud to be one of the most trusted roofers serving Statesville NC, the
                county seat of Iredell County. Located at the intersection of I-77 and I-40, Statesville is a
                growing community of approximately 30,000 residents with a beautiful mix of historic and modern
                homes that all deserve quality roofing protection.
              </p>
              <p>
                Our team understands the specific roofing needs of Statesville properties. The area's climate
                brings hot, humid summers and occasional severe thunderstorms that can damage roofs. Historic
                homes in downtown Statesville require special care and period-appropriate materials, while newer
                developments benefit from the latest roofing technology. Whatever your home needs, our certified
                installers have the expertise to deliver outstanding results.
              </p>
              <p>
                As a veteran-owned company, we bring military discipline and integrity to every roofing project
                in Statesville. From your first call to the final inspection, you will experience professionalism
                and honest communication. That is why Iredell County homeowners continue to choose Best Roofing Now
                as their trusted roofer.
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
              Roofers Serving Statesville & Surrounding Areas
            </h2>
            <p className="text-gray text-lg">
              Our roofing team serves homeowners and businesses throughout Statesville and Iredell County.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Statesville Area Communities</h3>
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
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Statesville Roofer FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about finding the right roofer in Statesville NC.
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
        slug="roofers-statesville-nc"
      />

      <CityGeoSection
        city="Statesville"
        state="NC"
        citySlug="statesville-nc"
        service="Roofers"
      />

      <CTASection
        title="Ready to Hire Statesville's Most Trusted Roofers?"
        subtitle="Get a free, no-obligation estimate from our certified roofing team. We'll assess your roof and provide honest recommendations for your Iredell County home."
      />
    </>
  );
}
