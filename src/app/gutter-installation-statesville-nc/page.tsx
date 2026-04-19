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
  Droplets,
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
  title: 'Gutter Installation Statesville NC',
  description:
    'Need gutter installation in Statesville NC? Best Roofing Now installs seamless gutters, gutter guards, and downspout systems in Iredell County. BBB A+ rated, veteran-owned. Free estimates!',
  keywords: [
    'gutter installation statesville nc',
    'seamless gutters statesville',
    'gutter replacement statesville nc',
    'gutter guards statesville',
    'gutter company statesville nc',
    'iredell county gutter installation',
    'gutter repair statesville nc',
    'rain gutters statesville',
    'gutter installation near me statesville',
    'gutter contractors statesville nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-installation-statesville-nc`,
  },
  openGraph: {
    title: 'Gutter Installation Statesville NC | Seamless Gutters | Best Roofing Now',
    description:
      'Professional gutter installation in Statesville NC. Seamless gutters, gutter guards, and downspout systems. BBB A+ rated, veteran-owned. Free estimates!',
    url: `${SITE_CONFIG.url}/gutter-installation-statesville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Gutter installation services in Statesville NC - Best Roofing Now',
      },
    ],
  },
};

// Gutter services
const gutterServices = [
  {
    icon: Droplets,
    title: 'Seamless Gutters',
    description: 'Custom-fabricated seamless aluminum gutters for leak-free water management on your Statesville home.',
    href: '/services/gutters',
  },
  {
    icon: Shield,
    title: 'Gutter Guards',
    description: 'Premium leaf protection systems that keep debris out and water flowing freely year-round.',
    href: '/services/gutters',
  },
  {
    icon: Home,
    title: 'Downspout Systems',
    description: 'Properly sized and positioned downspouts to direct water safely away from your foundation.',
    href: '/services/gutters',
  },
  {
    icon: Wrench,
    title: 'Gutter Repair',
    description: 'Fast repair of sagging, leaking, or damaged gutters to restore proper drainage.',
    href: '/services/gutters',
  },
  {
    icon: Building2,
    title: 'Commercial Gutters',
    description: 'Heavy-duty gutter systems for Statesville commercial and industrial buildings.',
    href: '/commercial-roofing-statesville-nc',
  },
  {
    icon: Search,
    title: 'Free Inspection',
    description: 'Complimentary gutter assessment to identify issues and recommend the best solution.',
    href: '/roof-inspection-statesville-nc',
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
    description: 'Fully licensed NC contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Expert Installers',
    description: 'Trained gutter specialists who ensure proper pitch and secure mounting on every job.',
  },
  {
    icon: Clock,
    title: 'Quick Installation',
    description: 'Most gutter installations completed in just one day for Statesville homeowners.',
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
    question: 'How much does gutter installation cost in Statesville NC?',
    answer:
      'Seamless gutter installation in Statesville typically costs $6-$15 per linear foot, depending on the material (aluminum, copper, or steel) and the complexity of your roofline. A typical home with 150-200 linear feet of gutters costs $1,000-$3,000. Gutter guards add $3-$8 per linear foot. We provide free estimates with transparent pricing.',
  },
  {
    question: 'Why are seamless gutters better than sectional gutters?',
    answer:
      'Seamless gutters are custom-fabricated on-site to fit your Statesville home perfectly, eliminating the joints and seams where sectional gutters commonly leak. They are stronger, more attractive, lower maintenance, and last longer. Seamless gutters are the industry standard for professional installations.',
  },
  {
    question: 'Do I need gutter guards in Statesville NC?',
    answer:
      'Gutter guards are highly recommended for Statesville homes, especially those surrounded by trees. Iredell County has abundant deciduous trees that shed leaves each fall, clogging unprotected gutters. Gutter guards dramatically reduce maintenance while ensuring proper water flow during heavy rains.',
  },
  {
    question: 'How often should gutters be cleaned in Statesville?',
    answer:
      'Without gutter guards, Statesville gutters should be cleaned at least twice a year - in late fall after leaves drop and in spring. Homes near heavy tree cover may need quarterly cleaning. With quality gutter guards, cleaning frequency drops to once a year or less.',
  },
  {
    question: 'What size gutters do Statesville homes need?',
    answer:
      'Most Statesville residential homes use standard 5-inch K-style gutters with 2x3-inch downspouts. Larger homes, steep roofs, or areas with heavy rainfall may need 6-inch gutters with 3x4-inch downspouts. We assess your roof size, pitch, and local rainfall patterns to recommend the right size.',
  },
  {
    question: 'Can you install gutters on my existing roof in Statesville?',
    answer:
      'Yes, gutters can be installed on any existing roof. We also commonly install new gutters during roof replacement projects, which is the ideal time since we can ensure proper integration with the new roofing system. Whether it is a standalone gutter project or part of a larger roofing job, we handle it all.',
  },
  {
    question: 'What color options are available for gutters?',
    answer:
      'Our seamless aluminum gutters come in over 25 color options to match your Statesville home\'s exterior. Popular choices include white, brown, black, charcoal, and cream. The factory-applied finish resists fading and peeling for years. We will help you choose the perfect color during your free consultation.',
  },
  {
    question: 'How long do seamless gutters last in Statesville?',
    answer:
      'Quality seamless aluminum gutters typically last 20-30 years in Statesville with proper maintenance. Copper gutters can last 50+ years. The longevity depends on material quality, proper installation, and regular maintenance. Our professional installation ensures your gutters perform optimally for their full lifespan.',
  },
];

export default function GutterInstallationStatesvilleNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gutter Installation Statesville NC', url: `${SITE_CONFIG.url}/gutter-installation-statesville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/gutter-installation-statesville-nc`}
        pageName="Gutter Installation Statesville NC"
        city="Statesville"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Gutter installation services in Statesville NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Seamless Gutter Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Installation <br className="hidden md:block" />
              <span className="text-accent-light">Statesville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Seamless gutters and gutter guards for Iredell County homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Protect your Statesville home's foundation and landscaping with professionally installed seamless
              gutters from Best Roofing Now. We custom-fabricate gutters on-site for a perfect fit, and offer
              premium gutter guard systems to minimize maintenance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Gutter Estimate
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
              Gutter Services in Statesville NC
            </h2>
            <p className="text-gray text-lg">
              From seamless gutter installation to gutter guards and repairs, we keep your Statesville
              home protected from water damage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gutterServices.map((service) => (
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
                Why Statesville Homeowners Choose Best Roofing Now for Gutters
              </h2>
              <p className="text-gray text-lg mb-8">
                Proper gutter installation requires precision and expertise. Best Roofing Now ensures your
                gutters are pitched correctly, securely mounted, and sized appropriately for your Statesville
                home's specific needs.
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
                alt="Best Roofing Now - Professional gutter installation in Statesville NC"
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
                Need New Gutters in Statesville?
              </h2>
              <p className="text-white/90">
                Get a free estimate for seamless gutter installation from Iredell County's trusted contractor.
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
              Gutter Solutions for Statesville & Iredell County
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Statesville receives approximately 48 inches of rainfall annually, making properly functioning
                gutters essential for protecting your home's foundation, siding, and landscaping. Without
                quality gutters, rainwater can erode soil around your foundation, cause basement flooding, and
                damage your home's exterior.
              </p>
              <p>
                Many homes in Statesville's established neighborhoods like the Historic District and Fourth
                Creek have aging gutter systems that are past their prime. Sagging, leaking, or undersized
                gutters fail to manage water effectively and can cause more harm than good. Upgrading to
                professionally installed seamless gutters is one of the best investments you can make for your
                Statesville home.
              </p>
              <p>
                Best Roofing Now custom-fabricates seamless gutters on-site using our portable gutter machine,
                ensuring a perfect fit for every Statesville home we serve. Combined with premium gutter guards,
                your new gutter system will provide years of reliable, low-maintenance water management.
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
              Gutter Installation Throughout Statesville & Iredell County
            </h2>
            <p className="text-gray text-lg">
              We install gutters for homeowners throughout Statesville and the surrounding communities.
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
                Gutter Installation FAQs for Statesville
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about gutter installation in Statesville NC.
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
        slug="gutter-installation-statesville-nc"
      />

      <CityGeoSection
        city="Statesville"
        state="NC"
        citySlug="statesville-nc"
        service="Gutter Installation"
      />


      <LKNPartnershipsBlock city={"Statesville"} />
      <LKNDataCitations city={"Statesville"} />
      <CTASection
        title="Ready for New Gutters on Your Statesville Home?"
        subtitle="Get a free, no-obligation estimate for seamless gutter installation. We'll assess your home and recommend the perfect gutter system for your needs."
      />
    </>
  );
}
