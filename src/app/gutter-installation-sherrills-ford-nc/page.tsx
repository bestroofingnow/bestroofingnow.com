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
  Home,
  Search,
  MapPin,
  Droplets,
  Wrench,
  Leaf,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Gutter Installation Sherrills Ford',
  description:
    'Need gutter installation in Sherrills Ford NC? Best Roofing Now installs seamless gutters, gutter guards, and downspouts for Lake Norman homes. Protect your foundation from water damage. BBB A+ rated, veteran-owned. Free estimates!',
  keywords: [
    'gutter installation sherrills ford nc',
    'seamless gutters sherrills ford',
    'gutter guards sherrills ford nc',
    'gutter replacement sherrills ford',
    'lake norman gutter installation',
    'catawba county gutters',
    'gutter company sherrills ford nc',
    'rain gutters sherrills ford',
    'gutter repair sherrills ford nc',
    'downspout installation sherrills ford',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-installation-sherrills-ford-nc`,
  },
  openGraph: {
    title: 'Gutter Installation Sherrills Ford NC | Seamless Gutters | Best Roofing Now',
    description:
      'Professional gutter installation in Sherrills Ford NC. Seamless gutters, gutter guards, and downspout systems for Lake Norman homes. Free estimates!',
    url: `${SITE_CONFIG.url}/gutter-installation-sherrills-ford-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.gutters,
        width: 1200,
        height: 630,
        alt: 'Gutter installation services in Sherrills Ford NC - Best Roofing Now',
      },
    ],
  },
};

// Gutter services
const gutterServices = [
  {
    icon: Droplets,
    title: 'Seamless Gutters',
    description: 'Custom-formed seamless aluminum gutters that eliminate leaks and enhance your home\'s curb appeal.',
    href: '/services/gutter-services',
  },
  {
    icon: Leaf,
    title: 'Gutter Guards',
    description: 'Keep leaves and debris out with professional gutter guard installation for low-maintenance protection.',
    href: '/services/gutter-services',
  },
  {
    icon: Home,
    title: 'Downspout Systems',
    description: 'Properly sized and positioned downspouts to direct water away from your Lake Norman home\'s foundation.',
    href: '/services/gutter-services',
  },
  {
    icon: Wrench,
    title: 'Gutter Repair',
    description: 'Fix sagging, leaking, or damaged gutters to restore proper water drainage from your roof.',
    href: '/services/gutter-services',
  },
  {
    icon: Shield,
    title: 'Copper Gutters',
    description: 'Premium copper gutter systems that add elegance and lasting durability to upscale properties.',
    href: '/services/gutter-services',
  },
  {
    icon: Search,
    title: 'Gutter Inspection',
    description: 'Free gutter assessments to identify drainage issues and recommend the right solutions.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Lake Norman homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with attention to detail on every gutter installation.',
  },
  {
    icon: CheckCircle,
    title: 'Seamless Technology',
    description: 'Custom-formed seamless gutters fabricated on-site for a perfect fit with no leak points.',
  },
  {
    icon: Clock,
    title: 'Quick Installation',
    description: 'Most gutter installations completed in a single day with minimal disruption to your home.',
  },
  {
    icon: Users,
    title: 'Waterfront Experts',
    description: 'We understand the heavy rainfall drainage needs of Lake Norman waterfront properties.',
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
    question: 'How much does gutter installation cost in Sherrills Ford NC?',
    answer:
      'Seamless gutter installation in Sherrills Ford typically costs $6-$15 per linear foot, depending on material and home size. A typical home costs $1,200-$3,500 for a complete system. Gutter guards add $3-$8 per linear foot. We provide free estimates with all costs detailed upfront.',
  },
  {
    question: 'What type of gutters are best for Lake Norman homes?',
    answer:
      'For Lake Norman waterfront homes, we recommend 6-inch seamless aluminum gutters with oversized downspouts. The larger size handles the heavy rainfall common in the area. For premium homes, copper gutters offer both beauty and exceptional durability. Gutter guards are strongly recommended near wooded lakefront lots.',
  },
  {
    question: 'Do I need gutter guards in Sherrills Ford?',
    answer:
      'Gutter guards are highly recommended for Sherrills Ford homes, especially those near trees on the western shore of Lake Norman. Pine needles, leaves, and debris quickly clog unprotected gutters, leading to water overflow and potential foundation damage. Guards dramatically reduce maintenance needs.',
  },
  {
    question: 'How long do seamless gutters last?',
    answer:
      'Seamless aluminum gutters last 20-30 years with proper maintenance. Copper gutters can last 50+ years. Gutter guards extend the life of any system by preventing debris buildup and reducing the frequency of cleaning. We use heavy-gauge materials for maximum durability on Lake Norman properties.',
  },
  {
    question: 'Can you replace gutters during a roof replacement?',
    answer:
      'Yes, and we highly recommend it. Installing new gutters during a roof replacement is more efficient and cost-effective. The drip edge and flashing integrate properly with new gutters, and you avoid any risk of damage to existing gutters during the roofing work.',
  },
  {
    question: 'Why are properly sized gutters important for waterfront homes?',
    answer:
      'Lake Norman waterfront properties experience heavier rainfall runoff due to wind-driven rain from the lake. Undersized gutters overflow during storms, causing foundation erosion, landscape damage, and potential basement flooding. We size every system to handle peak rainfall conditions for your specific property.',
  },
  {
    question: 'Do you offer gutter repair in Sherrills Ford?',
    answer:
      'Yes! We repair sagging gutters, fix leaks at seams, replace damaged sections, reattach loose hangers, and unclog downspouts. If repair costs approach 50% of replacement costs, we\'ll recommend a new system for better long-term value.',
  },
];

export default function GutterInstallationSherrillsFordNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gutter Installation Sherrills Ford NC', url: `${SITE_CONFIG.url}/gutter-installation-sherrills-ford-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/gutter-installation-sherrills-ford-nc`}
        pageName="Gutter Installation Sherrills Ford NC"
        city="Sherrills Ford"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.gutters}
            alt="Professional gutter installation in Sherrills Ford NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Professional Gutter Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Installation <br className="hidden md:block" />
              <span className="text-accent-light">Sherrills Ford NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Seamless gutters and gutter guards for Lake Norman homes
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Protect your Sherrills Ford home from water damage with professional gutter installation from Best Roofing Now.
              We install custom seamless gutters, gutter guards, and downspout systems designed to handle
              Lake Norman&apos;s heavy rainfall and keep your foundation safe.
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
                <Clock className="w-5 h-5 text-green-400" />
                Same-Day Installation Available
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
              Gutter Services in Sherrills Ford NC
            </h2>
            <p className="text-gray text-lg">
              From seamless gutter installation to gutter guard protection, we provide complete gutter solutions
              for Sherrills Ford homes and Lake Norman waterfront properties.
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
                Why Choose Best Roofing Now for Gutters in Sherrills Ford
              </h2>
              <p className="text-gray text-lg mb-8">
                Properly installed gutters are your home&apos;s first line of defense against water damage.
                Our team sizes and installs gutter systems specifically for Sherrills Ford&apos;s rainfall
                patterns and Lake Norman&apos;s unique drainage challenges.
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
                alt="Best Roofing Now - Gutter installation experts in Sherrills Ford NC"
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
                Need New Gutters in Sherrills Ford?
              </h2>
              <p className="text-white/90">
                Get a free estimate for seamless gutter installation and gutter guard protection.
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

      {/* Service Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Gutter Installation Across Sherrills Ford & Lake Norman
            </h2>
            <p className="text-gray text-lg">
              We install gutters for homeowners throughout Sherrills Ford and the Lake Norman region.
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
                Gutter Installation FAQs for Sherrills Ford
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about gutter installation in Sherrills Ford NC.
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
        slug="gutter-installation-sherrills-ford-nc"
      />

      <CityGeoSection
        city="Sherrills Ford"
        state="NC"
        citySlug="sherrills-ford-nc"
        service="Gutter Installation"
      />

      <CTASection
        title="Protect Your Sherrills Ford Home with New Gutters"
        subtitle="Get a free, no-obligation estimate for seamless gutter installation. Keep water away from your foundation and protect your Lake Norman investment."
      />
    </>
  );
}
