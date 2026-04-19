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
  Droplets,
  Home,
  Wrench,
  Paintbrush,
  MapPin,
  Ruler,
  Waves,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Gutter Installation Lake Wylie SC | Seamless Gutters & Guards',
  description:
    'Professional gutter installation in Lake Wylie SC. Custom seamless gutters, gutter guards, and repairs for waterfront homes. Heavy rainfall management & erosion prevention. Free estimates!',
  keywords: [
    'gutter installation lake wylie sc',
    'seamless gutters lake wylie',
    'gutter guards lake wylie sc',
    'gutter company lake wylie sc',
    'gutter repair lake wylie sc',
    'aluminum gutters lake wylie',
    'gutter replacement lake wylie sc',
    'gutter contractor lake wylie',
    'waterfront gutters lake wylie',
    'tega cay gutter installation',
    'york county gutter company',
    'lake wylie seamless gutters',
    'gutter guards lake wylie',
    'lake wylie gutter repair',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-installation-lake-wylie-sc`,
  },
  openGraph: {
    title: 'Gutter Installation Lake Wylie SC | Seamless Gutters & Guards',
    description:
      'Professional seamless gutter installation in Lake Wylie SC. Custom-fit gutters, gutter guards, and repairs for waterfront homes. BBB A+ rated. Free estimates!',
    url: `${SITE_CONFIG.url}/gutter-installation-lake-wylie-sc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero8,
        width: 1200,
        height: 630,
        alt: 'Professional gutter installation in Lake Wylie SC - Best Roofing Now',
      },
    ],
  },
};

// Gutter services offered
const gutterServices = [
  {
    icon: Droplets,
    title: 'Seamless Gutter Installation',
    description: 'Custom seamless aluminum gutters made on-site to fit your Lake Wylie home perfectly with no leak-prone joints.',
    href: '/services/gutter-installation',
  },
  {
    icon: Shield,
    title: 'Gutter Guard Installation',
    description: 'Premium gutter guards to keep leaves and debris out - critical for wooded lakefront properties.',
    href: '/services/gutter-guards',
  },
  {
    icon: Wrench,
    title: 'Gutter Repair',
    description: 'Expert repair of leaks, sagging gutters, damaged sections, and downspout issues across Lake Wylie.',
    href: '/services/gutter-repair',
  },
  {
    icon: Home,
    title: 'Gutter Replacement',
    description: 'Complete removal and replacement of old, damaged gutter systems with heavy-gauge materials.',
    href: '/services/gutters',
  },
  {
    icon: Paintbrush,
    title: 'Color Options',
    description: 'Wide selection of colors to match or complement your Lake Wylie home\'s exterior and trim.',
    href: '/services/gutter-installation',
  },
  {
    icon: Ruler,
    title: 'Custom Sizing',
    description: '5-inch and 6-inch gutters available. 6-inch recommended for Lake Wylie\'s heavy rainfall areas.',
    href: '/services/gutters',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Droplets,
    title: 'Waterfront Drainage Experts',
    description: 'We understand Lake Wylie\'s heavy rainfall patterns and design gutter systems for maximum water management.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and excellent reputation.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Lake Wylie customers.`,
  },
  {
    icon: Shield,
    title: 'Erosion Prevention',
    description: 'Properly designed gutters protect Lake Wylie lakefront properties from soil erosion and runoff damage.',
  },
  {
    icon: CheckCircle,
    title: 'SC Licensed & Insured',
    description: 'Fully licensed SC contractor with comprehensive liability coverage for York County work.',
  },
  {
    icon: Users,
    title: 'Expert Installation',
    description: 'Trained installers who ensure proper pitch, secure mounting, and optimal drainage for lakeside homes.',
  },
];

// Lake Wylie communities/areas
const lakeWylieAreas = [
  'The Palisades',
  'River Hills',
  'Reflection Pointe',
  'Tega Cay',
  'Camp Creek',
  'Lake Wylie Waterfront',
  'River District',
  'Clover',
  'Catawba Cove',
  'McLean',
  'Fort Mill',
  'Bethany Bend',
];

// Nearby cities
const nearbyCities = [
  { name: 'Charlotte, NC', href: '/gutter-installation-charlotte-nc' },
  { name: 'Tega Cay, SC', href: '/locations/tega-cay-sc' },
  { name: 'Fort Mill, SC', href: '/roofing-fort-mill-sc' },
  { name: 'Rock Hill, SC', href: '/roofing-rock-hill-sc' },
  { name: 'Clover, SC', href: '/locations/clover-sc' },
  { name: 'Gastonia, NC', href: '/roofing-gastonia-nc' },
];

// FAQs specific to gutter installation in Lake Wylie
const faqs = [
  {
    question: 'How much does gutter installation cost in Lake Wylie SC?',
    answer:
      'Gutter installation in Lake Wylie typically costs between $1,500 and $5,000 for most homes, depending on home size, gutter material, and complexity. Seamless aluminum gutters run $6-$15 per linear foot installed. Waterfront homes in Palisades or River Hills with larger rooflines may cost more. Gutter guard systems add $3-$8 per linear foot. We provide free estimates with transparent pricing - call (704) 605-6047.',
  },
  {
    question: 'Why are gutters especially important for Lake Wylie waterfront homes?',
    answer:
      'Lake Wylie waterfront homes face unique drainage challenges. Heavy rainfall combined with lakeside slopes means uncontrolled water runoff can cause serious foundation erosion, landscape damage, and basement flooding. Properly sized seamless gutters with adequate downspouts direct water safely away from your foundation. For lakefront properties, we often recommend 6-inch gutters to handle the heavy rain volumes common in the Lake Wylie area.',
  },
  {
    question: 'What size gutters do you recommend for Lake Wylie homes?',
    answer:
      'For most Lake Wylie homes, we recommend 6-inch gutters due to the heavy rainfall in the Charlotte metro area (43+ inches annually). Lake Wylie waterfront homes with large roof areas, steep pitches, or significant tree coverage especially benefit from 6-inch gutters, which handle 40% more water than standard 5-inch gutters. During your free estimate, we assess your specific needs and recommend the right size.',
  },
  {
    question: 'Do I need gutter guards in Lake Wylie SC?',
    answer:
      'Gutter guards are highly recommended for Lake Wylie homes, especially lakefront properties surrounded by hardwoods and pines. Without guards, pine needles, oak leaves, and debris from trees near the water quickly clog gutters, causing overflow and potential water damage to your foundation and landscaping. Quality gutter guards significantly reduce cleaning frequency and protect your home year-round.',
  },
  {
    question: 'How do gutters help prevent erosion on Lake Wylie properties?',
    answer:
      'Lake Wylie lakefront properties are particularly vulnerable to soil erosion because of sloped terrain toward the water. Properly installed gutters capture roof runoff and channel it through downspouts to designated drainage areas, preventing concentrated water flow that erodes soil, damages landscaping, and can undermine foundations. We design gutter systems specifically for Lake Wylie\'s topography.',
  },
  {
    question: 'Are you licensed to install gutters in South Carolina?',
    answer:
      'Yes, Best Roofing Now is fully licensed to perform gutter installation work in South Carolina. We maintain all required SC contractor licenses, $2M+ liability insurance, and workers compensation coverage. We serve Lake Wylie, Tega Cay, Fort Mill, Clover, and throughout York County. Our team understands local building requirements and ensures compliant installations.',
  },
];

export default function GutterInstallationLakeWylieSCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Lake Wylie SC', url: `${SITE_CONFIG.url}/roofing-lake-wylie-sc` },
          { name: 'Gutter Installation Lake Wylie SC', url: `${SITE_CONFIG.url}/gutter-installation-lake-wylie-sc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/gutter-installation-lake-wylie-sc`}
        pageName="Gutter Installation Lake Wylie SC"
        city="Lake Wylie"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does gutter installation cost in Lake Wylie SC?',
            answer: 'Gutter installation in Lake Wylie SC costs $1,500-$5,000 for most homes, or $6-$15 per linear foot for seamless aluminum gutters. Best Roofing Now serves Lake Wylie with free estimates and transparent pricing.',
            speakableAnswer: 'Gutter installation in Lake Wylie costs $1,500 to $5,000 for most homes. Best Roofing Now offers free estimates. Call 704-605-6047.',
          },
          {
            question: 'Who installs gutters in Lake Wylie SC?',
            answer: 'Best Roofing Now provides professional gutter installation in Lake Wylie SC with a 5-star Google rating. This veteran-owned company installs seamless aluminum gutters made on-site with lifetime warranties.',
            speakableAnswer: 'Best Roofing Now installs gutters in Lake Wylie with 5-star ratings. Call 704-605-6047 for a free estimate.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero8}
            alt="Professional gutter installation in Lake Wylie SC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Waves className="w-4 h-4" />
              <span className="text-sm font-semibold">Waterfront Gutter Experts | SC Licensed</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Installation <br className="hidden md:block" />
              <span className="text-accent-light">Lake Wylie SC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Protect your lakefront home with custom seamless gutters &amp; gutter guards
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now installs premium seamless gutters throughout Lake Wylie, Tega Cay, and the River District.
              Our custom-fabricated gutters are made on-site to fit your home perfectly, with heavy-gauge aluminum
              construction designed to handle Lake Wylie&apos;s heavy rainfall and protect against lakefront erosion.
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
                <Clock className="w-5 h-5 text-accent-light" />
                Same-Day Estimates
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                SC Licensed & Insured
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
              Gutter Services in Lake Wylie SC
            </h2>
            <p className="text-gray text-lg">
              From new seamless gutter installation to repairs and gutter guard systems, we provide
              complete gutter solutions to protect your Lake Wylie home from water damage and erosion.
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

      {/* Why Seamless Gutters Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Seamless Gutters Are Essential for Lake Wylie Homes
              </h2>
              <p className="text-gray text-lg mb-6">
                With the Charlotte metro receiving over 43 inches of rain annually and Lake Wylie properties
                facing additional runoff from lakeside slopes, quality gutters are essential to protect your
                home&apos;s foundation, landscaping, and prevent costly erosion.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">No Seams = No Leaks</h3>
                    <p className="text-gray text-sm">Custom fabricated on-site with no joints along the length</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Lakefront Erosion Prevention</h3>
                    <p className="text-gray text-sm">Directs water away from foundations on sloped lakeside properties</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Heavy Rainfall Capacity</h3>
                    <p className="text-gray text-sm">6-inch gutters available to handle Lake Wylie&apos;s heavy downpours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Clean Appearance</h3>
                    <p className="text-gray text-sm">Sleek, uniform look that enhances your lakefront home&apos;s curb appeal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Long-Lasting</h3>
                    <p className="text-gray text-sm">Heavy-gauge aluminum construction lasts 20-30 years</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <SEOImage
                src={IMAGES.services.gutters}
                alt="Seamless gutter installation in Lake Wylie SC"
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

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Lake Wylie Homeowners Choose Us for Gutters
            </h2>
            <p className="text-gray text-lg">
              Quality materials, expert installation, and understanding of lakefront drainage challenges make Best Roofing Now
              the trusted choice for gutter installation in the Lake Wylie area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="bg-light rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
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
                Need New Gutters in Lake Wylie?
              </h2>
              <p className="text-white/90">
                Get a free estimate for seamless gutters, gutter guards, or repairs.
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

      {/* Service Areas Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Gutter Installation Throughout Lake Wylie &amp; York County
            </h2>
            <p className="text-gray text-lg">
              We install seamless gutters throughout Lake Wylie, Tega Cay, Fort Mill, and surrounding communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Lake Wylie Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Lake Wylie Communities We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {lakeWylieAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
            <div className="bg-white rounded-xl p-6">
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
                Gutter Installation FAQs - Lake Wylie SC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about gutter installation in Lake Wylie SC.
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

      <GeoProjectGalleryStrip
        pageType="location"
        city="Lake Wylie"
        slug="gutter-installation-lake-wylie-sc"
      />

      <CityGeoSection
        city="Lake Wylie"
        state="SC"
        citySlug="lake-wylie-sc"
        service="Gutter Installation"
      />

      <CTASection
        title="Ready for New Gutters in Lake Wylie SC?"
        subtitle="Contact us today for a free estimate on seamless gutter installation. We'll help protect your Lake Wylie home from water damage and erosion with quality gutters built to last."
      />
    </>
  );
}
