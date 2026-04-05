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
  Droplets,
  Home,
  Wrench,
  Paintbrush,
  MapPin,
  Ruler,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocationSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Gutter Installation Matthews NC',
  description:
    'Professional gutter installation in Matthews NC. Custom seamless gutters, gutter guards, and expert repairs. BBB A+ rated. Free estimates. Call (704) 605-6047.',
  keywords: [
    'gutter installation matthews nc',
    'gutters matthews nc',
    'seamless gutters matthews nc',
    'gutter company matthews',
    'gutter repair matthews nc',
    'gutter guards matthews nc',
    'aluminum gutters matthews',
    'gutter replacement matthews nc',
    'gutter contractor matthews',
    'gutter installation near me matthews',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-installation-matthews-nc`,
  },
  openGraph: {
    title: 'Gutter Installation Matthews NC | Seamless Gutters | Best Roofing Now',
    description:
      'Professional seamless gutter installation in Matthews NC. Custom-fit gutters, gutter guards, and repairs. BBB A+ rated. Free estimates!',
    url: `${SITE_CONFIG.url}/gutter-installation-matthews-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero8,
        width: 1200,
        height: 630,
        alt: 'Professional gutter installation in Matthews NC - Best Roofing Now',
      },
    ],
  },
};

// Gutter services offered
const gutterServices = [
  {
    icon: Droplets,
    title: 'Seamless Gutter Installation',
    description: 'Custom seamless aluminum gutters made on-site to fit your Matthews home perfectly with no leak-prone joints.',
    href: '/services/gutter-installation',
  },
  {
    icon: Shield,
    title: 'Gutter Guard Installation',
    description: 'Premium gutter guards to keep leaves and debris out while allowing water to flow freely in Matthews\' wooded neighborhoods.',
    href: '/services/gutter-guards',
  },
  {
    icon: Wrench,
    title: 'Gutter Repair',
    description: 'Expert repair of leaks, sagging gutters, damaged sections, and downspout issues for Matthews homes.',
    href: '/services/gutter-repair',
  },
  {
    icon: Home,
    title: 'Gutter Replacement',
    description: 'Complete removal and replacement of old, damaged gutter systems with quality materials.',
    href: '/services/gutters',
  },
  {
    icon: Paintbrush,
    title: 'Color Options',
    description: 'Wide selection of colors to match or complement your Matthews home\'s exterior and trim.',
    href: '/services/gutter-installation',
  },
  {
    icon: Ruler,
    title: 'Custom Sizing',
    description: '5-inch and 6-inch gutters available with properly sized downspouts for your roof area.',
    href: '/services/gutters',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Droplets,
    title: 'Seamless Construction',
    description: 'Gutters fabricated on-site for a perfect fit with no joints to leak along the length.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and excellent reputation.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied customers.`,
  },
  {
    icon: Shield,
    title: 'Quality Materials',
    description: 'Heavy-gauge aluminum gutters that resist denting and last for decades.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC contractor with comprehensive liability coverage.',
  },
  {
    icon: Users,
    title: 'Expert Installation',
    description: 'Trained installers who ensure proper pitch, secure mounting, and optimal drainage.',
  },
];

// Matthews neighborhoods/areas
const matthewsAreas = [
  'Downtown Matthews',
  'McKee Farms',
  'Sardis Forest',
  'Weddington Chase',
  'Fullwood',
  'Matthews Township',
  'Stallings',
  'Windsor Park',
  'Crestdale',
  'Matthews Plantation',
  'Saddlewood',
  'Crown Point',
];

// Nearby cities
const nearbyCities = [
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Indian Trail', href: '/locations/indian-trail-nc' },
  { name: 'Weddington', href: '/locations/weddington-nc' },
  { name: 'Stallings', href: '/locations/stallings-nc' },
  { name: 'Monroe', href: '/locations/monroe-nc' },
];

// FAQs specific to gutter installation in Matthews
const faqs = [
  {
    question: 'How much does gutter installation cost in Matthews NC?',
    answer:
      'Gutter installation in Matthews typically costs $4-$12 per linear foot, depending on material and style. For an average home with 150-200 feet of gutters, total cost ranges from $600-$2,400. Factors affecting price include gutter size (5" vs 6"), number of corners and downspouts, accessibility, and whether gutter guards are included. We provide free estimates with transparent pricing for all Matthews neighborhoods.',
  },
  {
    question: 'What are seamless gutters and why are they better for Matthews homes?',
    answer:
      'Seamless gutters are custom-fabricated on-site from a continuous piece of aluminum, so there are no joints or seams along each run. Traditional sectional gutters have seams every 10 feet that can leak over time. For Matthews homes in established neighborhoods like McKee Farms and Sardis Forest with mature landscapes, seamless gutters dramatically reduce leak potential and look cleaner.',
  },
  {
    question: 'Should I get 5-inch or 6-inch gutters for my Matthews home?',
    answer:
      'For most Matthews homes, 5-inch gutters are sufficient. However, we recommend 6-inch gutters for homes with large roof areas, steep pitches, or in heavily wooded areas. Many properties in Sardis Forest, Fullwood, and Weddington Chase benefit from 6-inch gutters due to the mature tree cover. 6-inch gutters handle 40% more water than 5-inch gutters. We assess your needs during your free estimate.',
  },
  {
    question: 'Do I need gutter guards in Matthews NC?',
    answer:
      'Gutter guards are highly recommended in Matthews due to the abundant trees in the area. Neighborhoods like Sardis Forest, McKee Farms, and Fullwood have significant tree canopy that drops leaves, pine needles, and other debris into gutters. Quality gutter guards significantly reduce cleaning frequency and protect your home from water damage year-round.',
  },
  {
    question: 'How long do gutters last in Matthews NC?',
    answer:
      'Quality aluminum seamless gutters typically last 20-30 years in Matthews with proper maintenance. Factors affecting lifespan include material thickness, installation quality, and how well they are maintained. Heavy debris buildup and lack of cleaning can shorten their life. Our gutters are made from heavy-gauge aluminum for maximum durability in Matthews\' climate.',
  },
  {
    question: 'What colors are available for gutters in Matthews?',
    answer:
      'We offer a wide selection of gutter colors to match or complement your Matthews home. Popular choices include white, bronze, black, dark brown, and various shades of beige and gray. Whether you have a traditional home in downtown Matthews or a newer build in Weddington Chase, we can match colors to your exterior. The factory-applied finish resists fading.',
  },
  {
    question: 'How long does gutter installation take in Matthews?',
    answer:
      'Most gutter installations in Matthews are completed in a single day. Our team arrives with the portable gutter machine, fabricates your custom gutters on-site, and installs them along with downspouts and any accessories. Larger homes or those with complex rooflines may require an additional day. We provide a specific timeline during your estimate.',
  },
  {
    question: 'Do you also serve Stallings and Indian Trail near Matthews?',
    answer:
      'Yes! We provide gutter services throughout Matthews and all surrounding communities including Stallings, Indian Trail, Mint Hill, Weddington, and Monroe. We also serve the greater Charlotte metro area. Our team is familiar with the specific needs of homes in southeast Mecklenburg and Union County.',
  },
];

export default function GutterInstallationMatthewsNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Gutter Installation Matthews NC', url: `${SITE_CONFIG.url}/gutter-installation-matthews-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocationSchema
        location={{
          city: 'Matthews',
          state: 'NC',
          slug: 'matthews-nc',
          county: 'Mecklenburg',
        }}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/gutter-installation-matthews-nc`}
        pageName="Gutter Installation Matthews NC"
        city="Matthews"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How much does gutter installation cost in Matthews NC?',
            answer: 'Gutter installation in Matthews NC costs $6-$15 per linear foot for seamless aluminum gutters, averaging $1,200-$2,800 for most homes. Best Roofing Now serves Matthews with free estimates and transparent pricing.',
            speakableAnswer: 'Gutter installation in Matthews costs $6-15 per foot. Best Roofing Now offers free estimates. Call 704-605-6047.',
          },
          {
            question: 'Who installs gutters in Matthews NC?',
            answer: 'Best Roofing Now provides professional gutter installation in Matthews NC with a 5-star Google rating. This veteran-owned company installs seamless aluminum gutters made on-site with lifetime warranties.',
            speakableAnswer: 'Best Roofing Now installs gutters in Matthews with 5-star ratings. Call 704-605-6047 for a free estimate.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero8}
            alt="Professional gutter installation in Matthews NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Droplets className="w-4 h-4" />
              <span className="text-sm font-semibold">Custom Seamless Gutters</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Installation <br className="hidden md:block" />
              <span className="text-accent-light">Matthews NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Protect your Matthews home with custom seamless gutters from Charlotte&apos;s trusted experts
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now installs premium seamless gutters throughout Matthews and southeast Charlotte.
              From downtown Matthews to McKee Farms, Sardis Forest, and Weddington Chase, our custom-fabricated
              gutters are made on-site to fit your home perfectly with no leak-prone seams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Estimate
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
                Licensed & Insured
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
              Gutter Services in Matthews NC
            </h2>
            <p className="text-gray text-lg">
              From new seamless gutter installation to repairs and gutter guard systems, we provide
              complete gutter solutions to protect your Matthews home from water damage.
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
                Why Seamless Gutters Are the Smart Choice for Matthews Homes
              </h2>
              <p className="text-gray text-lg mb-6">
                With Charlotte receiving over 43 inches of rain annually, quality gutters are essential
                to protect your Matthews home&apos;s foundation, landscaping, and exterior from water damage.
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
                    <h3 className="font-bold text-dark">Perfect Fit</h3>
                    <p className="text-gray text-sm">Made to exact measurements of your Matthews home for optimal performance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Lower Maintenance</h3>
                    <p className="text-gray text-sm">Fewer crevices for debris to collect compared to sectional gutters</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-dark">Clean Appearance</h3>
                    <p className="text-gray text-sm">Sleek, uniform look that enhances your home&apos;s curb appeal</p>
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
              <Image
                src={IMAGES.services.gutters}
                alt="Seamless gutter installation in Matthews NC"
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
              Why Matthews Homeowners Choose Us for Gutters
            </h2>
            <p className="text-gray text-lg">
              Quality materials, expert installation, and outstanding customer service make Best Roofing Now
              the trusted choice for gutter installation in Matthews and southeast Charlotte.
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
                Need New Gutters in Matthews?
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
              Gutter Installation Throughout Matthews & Southeast Charlotte
            </h2>
            <p className="text-gray text-lg">
              We install seamless gutters throughout Matthews and surrounding southeast Charlotte communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Matthews Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Matthews Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {matthewsAreas.map((area) => (
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
                Gutter Installation FAQs - Matthews NC
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about gutter installation in Matthews.
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
        city="Matthews"
        slug="gutter-installation-matthews-nc"
      />

      <CityGeoSection
        city="Matthews"
        state="NC"
        citySlug="matthews-nc"
        service="Gutter Installation"
      />

      <CTASection
        title="Ready for New Gutters in Matthews?"
        subtitle="Contact us today for a free estimate on seamless gutter installation. We'll help protect your Matthews home from water damage with quality gutters built to last."
      />
    </>
  );
}
