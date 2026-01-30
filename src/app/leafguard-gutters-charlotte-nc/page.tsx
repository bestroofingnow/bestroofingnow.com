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
  Clock,
  Droplets,
  MapPin,
  Leaf,
  Home,
  Wrench,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import YouTubeShort from '@/components/sections/YouTubeShort';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'LeafGuard Gutters Charlotte NC | Clog-Free Guarantee | Best Roofing Now',
  description:
    'LeafGuard gutter installation in Charlotte NC. One-piece seamless design with clog-free guarantee. Never clean gutters again! Professional installation with lifetime warranty. Free estimates.',
  keywords: [
    'leafguard gutters charlotte nc',
    'leafguard gutter installation',
    'leafguard charlotte',
    'clog free gutters charlotte nc',
    'leafguard warranty charlotte',
    'one piece gutter system charlotte',
    'leafguard reviews charlotte nc',
    'leafguard cost charlotte nc',
    'leafguard brand gutters charlotte',
    'never clean gutters charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/leafguard-gutters-charlotte-nc`,
  },
  openGraph: {
    title: 'LeafGuard Gutters Charlotte NC | Clog-Free Guarantee | Best Roofing Now',
    description:
      'LeafGuard one-piece gutter system in Charlotte NC. Clog-free guarantee with lifetime warranty. Never clean your gutters again!',
    url: `${SITE_CONFIG.url}/leafguard-gutters-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero5,
        width: 1200,
        height: 630,
        alt: 'LeafGuard gutter installation Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// LeafGuard Features
const leafguardFeatures = [
  {
    icon: Leaf,
    title: 'One-Piece Design',
    description: 'LeafGuard\'s patented one-piece design combines the gutter and hood into a single seamless unit.',
    benefits: ['No seams to leak', 'Stronger than sectional', 'Custom fit to your home', 'Handles heavy rainfall'],
  },
  {
    icon: Shield,
    title: 'Clog-Free Guarantee',
    description: 'LeafGuard guarantees your gutters will never clog, or they\'ll clean them for free.',
    benefits: ['Lifetime clog-free guarantee', 'No more gutter cleaning', 'Protected water flow', 'Debris slides off'],
  },
  {
    icon: Droplets,
    title: 'Liquid Adhesion Technology',
    description: 'The curved hood design uses surface tension to draw water in while debris falls away.',
    benefits: ['Water clings to hood', 'Debris falls to ground', 'Works in heavy rain', 'Proven engineering'],
  },
  {
    icon: Home,
    title: 'Protect Your Home',
    description: 'Proper gutter function protects your foundation, landscaping, and prevents water damage.',
    benefits: ['Foundation protection', 'Prevents basement flooding', 'Protects landscaping', 'Reduces erosion'],
  },
];

// Why choose LeafGuard
const whyChooseLeafguard = [
  {
    icon: Award,
    title: 'Patented One-Piece Design',
    description: 'The only gutter system built with the hood as part of the gutter - not an add-on.',
  },
  {
    icon: Shield,
    title: 'Clog-Free Guarantee',
    description: 'Lifetime guarantee that your gutters will never clog or LeafGuard cleans them free.',
  },
  {
    icon: Droplets,
    title: 'Handles 32" of Rain/Hour',
    description: 'Engineered to handle the heaviest rainfall - far exceeding Charlotte\'s typical storms.',
  },
  {
    icon: Wrench,
    title: 'ScratchGuard Paint Finish',
    description: 'Baked-on finish resists scratches and never needs painting.',
  },
  {
    icon: Clock,
    title: 'Lifetime Warranty',
    description: 'Fully transferable lifetime warranty covers paint, materials, and workmanship.',
  },
  {
    icon: CheckCircle,
    title: 'Professional Installation',
    description: 'Factory-trained installers ensure proper pitch and secure mounting.',
  },
];

// Problems LeafGuard solves
const problemsSolved = [
  {
    title: 'Dangerous Ladder Climbing',
    description: 'Never risk climbing a ladder to clean gutters again. Stay safely on the ground.',
  },
  {
    title: 'Clogged & Overflowing Gutters',
    description: 'Leaves, pine needles, and debris are shed before they can enter and clog the gutter.',
  },
  {
    title: 'Water Damage & Foundation Issues',
    description: 'Properly functioning gutters direct water away from your foundation.',
  },
  {
    title: 'Ice Dams in Winter',
    description: 'Reduced debris means better water flow, minimizing ice dam formation.',
  },
  {
    title: 'Pest & Mosquito Breeding',
    description: 'No standing water or debris means no habitat for pests and mosquitoes.',
  },
  {
    title: 'Constant Maintenance',
    description: 'Eliminate the hassle and expense of regular gutter cleaning.',
  },
];

// Charlotte neighborhoods served
const charlotteNeighborhoods = [
  'Myers Park',
  'Dilworth',
  'South End',
  'NoDa',
  'Plaza Midwood',
  'Ballantyne',
  'University City',
  'Cotswold',
  'Elizabeth',
  'Eastover',
  'SouthPark',
  'Uptown Charlotte',
  'Wesley Heights',
  'Fourth Ward',
  'Cherry',
  'Madison Park',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Pineville', href: '/locations/pineville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
  { name: 'Indian Trail', href: '/locations/indian-trail-nc' },
];

// FAQs about LeafGuard gutters
const faqs = [
  {
    question: 'How is LeafGuard different from gutter guards?',
    answer:
      'LeafGuard is fundamentally different from gutter guards. Traditional gutter guards are add-ons attached to existing gutters, leaving seams and gaps where debris can enter. LeafGuard is a one-piece system where the protective hood is built directly into the gutter - there is no separate guard. This patented design is manufactured as a single unit, eliminating the weaknesses of add-on systems.',
  },
  {
    question: 'What is the LeafGuard clog-free guarantee?',
    answer:
      'LeafGuard provides a lifetime clog-free guarantee. If your LeafGuard gutters ever clog, they will clean them for free. This guarantee is backed by the manufacturer and is fully transferable if you sell your home. The guarantee covers debris buildup that prevents water from flowing properly through the gutter system.',
  },
  {
    question: 'How much does LeafGuard cost in Charlotte NC?',
    answer:
      'LeafGuard typically costs between $20-$45 per linear foot installed in Charlotte, depending on factors like home height, roof complexity, and accessibility. While this is more than basic gutters with add-on guards, LeafGuard\'s one-piece design and lifetime warranty provide long-term value. We provide free estimates with no obligation.',
  },
  {
    question: 'Does LeafGuard work with heavy rain in Charlotte?',
    answer:
      'Absolutely! LeafGuard is engineered to handle up to 32 inches of rain per hour - far exceeding even the most intense Charlotte thunderstorms. The curved hood design uses liquid adhesion (surface tension) to guide water into the gutter while debris slides harmlessly over the edge. Independent testing confirms LeafGuard\'s superior performance in heavy rainfall.',
  },
  {
    question: 'What colors are available for LeafGuard gutters?',
    answer:
      'LeafGuard is available in over 20 colors with a baked-on ScratchGuard paint finish that never needs painting. Popular choices in Charlotte include white, almond, bronze, and various shades of gray and brown. The paint finish is warrantied for the life of the system and resists scratching, fading, and peeling.',
  },
  {
    question: 'How long does LeafGuard installation take?',
    answer:
      'Most LeafGuard installations are completed in one day. Our factory-trained installers custom-form each section on-site to ensure a perfect fit with no seams. The installation process includes removing your old gutters, installing the new LeafGuard system with proper pitch, and thoroughly cleaning up the work area.',
  },
  {
    question: 'Will LeafGuard work with my existing roof?',
    answer:
      'LeafGuard works with virtually any roof type and pitch. The system is custom-formed on-site to match your home\'s specific requirements. Whether you have asphalt shingles, metal roofing, tile, or any other material, LeafGuard can be installed to complement your home\'s appearance and provide clog-free protection.',
  },
  {
    question: 'What warranty does LeafGuard offer?',
    answer:
      'LeafGuard offers a comprehensive lifetime warranty that covers the paint finish, materials, and workmanship. The warranty is fully transferable to new homeowners if you sell your home, adding value to your property. Additionally, the clog-free guarantee ensures your gutters will perform as promised for as long as you own your home.',
  },
];

export default function LeafGuardGuttersCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'LeafGuard Gutters Charlotte NC', url: `${SITE_CONFIG.url}/leafguard-gutters-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero5}
            alt="LeafGuard gutter installation Charlotte NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-semibold">Never Clean Gutters Again</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              LeafGuard Gutters <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              One-piece seamless design with clog-free guarantee
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now installs LeafGuard, the only gutter system with a built-in hood
              that keeps debris out while letting water flow freely. The patented one-piece design
              is guaranteed to never clog - or we clean it for free. Stop climbing ladders and
              protect your home with Charlotte's best gutter solution.
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
                <Leaf className="w-5 h-5 text-accent-light" />
                Clog-Free Guarantee
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                Lifetime Warranty
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                BBB A+ Rated
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* LeafGuard Features Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              The LeafGuard Difference
            </h2>
            <p className="text-gray text-lg">
              LeafGuard's patented one-piece design sets it apart from every other gutter
              protection system. See why Charlotte homeowners choose LeafGuard.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {leafguardFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose LeafGuard Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Homeowners Choose LeafGuard
              </h2>
              <p className="text-gray text-lg mb-8">
                With Charlotte's mix of pine trees, oaks, and heavy thunderstorms, keeping gutters
                clear is a constant battle. LeafGuard's one-piece design eliminates clogging and
                the dangerous, time-consuming task of gutter cleaning. It's the permanent solution
                to gutter problems.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseLeafguard.map((item) => (
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
                src={IMAGES.services.gutters}
                alt="LeafGuard one-piece gutter system installed on Charlotte home"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-dark">Clog-Free Guarantee</p>
                    <p className="text-sm text-gray">Lifetime Warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Solved Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <CheckCircle className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Problems Solved</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Say Goodbye to Gutter Problems
            </h2>
            <p className="text-gray text-lg">
              LeafGuard eliminates the frustrations and dangers of traditional gutters.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemsSolved.map((problem) => (
              <div key={problem.title} className="p-6 bg-light rounded-xl">
                <h3 className="font-bold text-dark mb-2">{problem.title}</h3>
                <p className="text-gray text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <YouTubeShort
        videoId="CXaG6atl-nE"
        title="The $10,000 Gutter Mistake"
        heading="Watch: The $10,000 Gutter Mistake"
        description="See the damage clogged gutters cause — and why LeafGuard prevents it."
      />

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready to Never Clean Gutters Again?
              </h2>
              <p className="text-white/90">
                Get a free estimate for LeafGuard with lifetime warranty and clog-free guarantee.
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
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Installation Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              LeafGuard Installation Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              We install LeafGuard gutter systems throughout Charlotte and the surrounding metro area
              with professional installation and full warranty coverage.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
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
                LeafGuard Gutter FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about LeafGuard gutters and installation in Charlotte NC.
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

      {/* Related Links */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">Related Services</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services/gutters"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-primary/10 transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-primary" />
                <span className="text-dark">Gutter Services</span>
              </Link>
              <Link
                href="/services/gutter-guards"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-primary/10 transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-primary" />
                <span className="text-dark">Gutter Guard Installation</span>
              </Link>
              <Link
                href="/services/gutter-cleaning"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-primary/10 transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-primary" />
                <span className="text-dark">Gutter Cleaning</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-primary/10 transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-primary" />
                <span className="text-dark">Get a Free Estimate</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Never Clean Your Gutters Again?"
        subtitle="Get a free, no-obligation estimate for LeafGuard gutters. Our team will assess your home and show you how LeafGuard can protect your property with clog-free performance guaranteed."
      />
    </>
  );
}
