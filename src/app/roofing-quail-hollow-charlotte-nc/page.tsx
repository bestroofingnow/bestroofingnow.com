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
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Quail Hollow Charlotte NC',
  description:
    'Trusted roofer in Quail Hollow Charlotte NC. Premium roofing for golf estates with slate, tile, and designer shingles. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing quail hollow charlotte nc',
    'roofers quail hollow',
    'quail hollow roofing contractor',
    'golf estate roofing charlotte',
    'quail hollow roof repair',
    'quail hollow roof replacement',
    'luxury roofing quail hollow',
    'slate roofing quail hollow charlotte',
    'best roofer quail hollow charlotte',
    'quail hollow estates roofing services',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-quail-hollow-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Quail Hollow Charlotte NC | Golf Estate Roofer | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor specializing in golf estate homes in Quail Hollow Charlotte NC. Slate, tile, designer shingles. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-quail-hollow-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Quail Hollow Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Golf Estate Roofing',
    description: 'Premium roofing solutions for Quail Hollow\'s brick colonials, Mediterranean villas, and custom homes.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Expert roofing for commercial properties along the Sharon Road and Rea Road corridors near Quail Hollow.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Meticulous repairs for slate, tile, designer shingles, and architectural shingle roofs on golf estates.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full replacement with natural slate, clay tile, designer shingles, or premium metal roofing systems.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Comprehensive inspections for Quail Hollow estates with detailed condition reports and material assessments.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration using premium materials that preserve your estate\'s architectural character.',
    href: '/services/storm-damage',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Quail Hollow homeowners.`,
  },
  {
    icon: Shield,
    title: 'Golf Estate Expertise',
    description: 'Specialized in high-end materials including slate, tile, copper, and designer shingles for prestigious homes.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance for luxury estates.',
  },
  {
    icon: Users,
    title: 'Premium Materials',
    description: 'Access to the finest roofing materials from CertainTeed, GAF, DaVinci, and specialty tile suppliers.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Quail Hollow homeowners need us most.',
  },
];

// Quail Hollow neighborhoods and areas
const quailHollowNeighborhoods = [
  'Quail Hollow',
  'Quail Hollow Estates',
  'Quail Hollow Country Club',
  'Sharon Road Corridor',
  'Rea Road',
  'Gleneagles Road',
  'Ballantyne Road',
  'Park Road South',
  'Quail Acres',
  'Quail Ridge',
  'Providence Plantation',
  'Mountainbrook',
  'Colony Road',
  'Pineville-Matthews Road',
  'Carmel Road',
  'Fairview Road',
  'Sardis Road',
  'Rama Road',
  'Sharon View Road',
  'McMullen Creek',
];

// Nearby areas served
const nearbyAreas = [
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'Foxcroft', href: '/roofing-foxcroft-charlotte-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'Pineville', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Beverly Woods', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Cotswold', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Luxury Roofing', href: '/luxury-roofing-charlotte-nc' },
  { name: 'Piper Glen', href: '/roofing-piper-glen-charlotte-nc' },
];

// FAQs specific to Quail Hollow
const faqs = [
  {
    question: 'What roofing services do you offer in Quail Hollow Charlotte NC?',
    answer:
      'Best Roofing Now provides complete luxury roofing services in Quail Hollow including roof repair, roof replacement, new roof installation, storm damage repair, emergency services, and comprehensive inspections. We specialize in premium materials including natural slate, clay tile, designer shingles, and architectural shingles that complement Quail Hollow\'s prestigious estates.',
  },
  {
    question: 'Do you specialize in golf estate roofing in Quail Hollow?',
    answer:
      'Yes, Best Roofing Now has extensive experience with Quail Hollow\'s magnificent golf estates and luxury homes surrounding the world-renowned Quail Hollow Club, home of the Wells Fargo Championship and Presidents Cup. We understand the high standards expected in this prestigious community and offer premium materials, expert craftsmanship, and meticulous attention to detail.',
  },
  {
    question: 'How much does a roof replacement cost in Quail Hollow?',
    answer:
      'Roof replacement costs in Quail Hollow typically range from $12,000-$45,000+ depending on home size, roof complexity, and material choice. Many Quail Hollow estates feature larger footprints with premium materials like slate, tile, or designer shingles. Homes valued at $2M+ may require specialized materials that increase project costs. We provide detailed, transparent estimates.',
  },
  {
    question: 'What premium roofing materials do you offer for Quail Hollow homes?',
    answer:
      'We offer the finest roofing materials including CertainTeed Grand Manor and Carriage House shingles, GAF Grand Sequoia designer shingles, natural slate, clay and concrete tile, DaVinci synthetic slate and shake, standing seam copper and metal roofing, and premium synthetic options. We help you select materials that complement your home\'s brick colonial, Mediterranean, or custom architecture.',
  },
  {
    question: 'How long does a roof replacement take on a Quail Hollow estate?',
    answer:
      'Quail Hollow estates typically require 3-7 days for complete roof replacement, depending on home size, roof complexity, and material type. Premium materials like slate or tile may require additional time for proper installation. We work efficiently while maintaining the highest quality standards these distinguished properties deserve.',
  },
  {
    question: 'Do you work with Quail Hollow HOAs and architectural review boards?',
    answer:
      'Yes, we have extensive experience working with Quail Hollow neighborhood associations and architectural review committees. We understand the approval processes in this prestigious golf community and can help you select materials and colors that meet community guidelines while enhancing your home\'s curb appeal and property value.',
  },
  {
    question: 'What warranty do you provide on Quail Hollow roofing projects?',
    answer:
      'We offer comprehensive warranty coverage including manufacturer warranties up to 50 years on materials (lifetime on some premium products) and our own workmanship warranty. As certified installers, we can offer enhanced warranties like GAF Golden Pledge and CertainTeed SureStart PLUS for Quail Hollow estate projects.',
  },
  {
    question: 'Do you handle insurance claims for storm damage in Quail Hollow?',
    answer:
      'Absolutely. We have extensive experience with insurance claims for storm damage on luxury properties in Quail Hollow. We provide thorough documentation, work directly with adjusters, and advocate for settlements that cover proper restoration with premium materials matching your estate\'s existing quality and architectural character.',
  },
];

export default function RoofingQuailHollowCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Quail Hollow Charlotte NC', url: `${SITE_CONFIG.url}/roofing-quail-hollow-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Professional roofing contractor in Quail Hollow Charlotte NC - Best Roofing Now crew"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Golf Estate Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Quail Hollow <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Golf Estate Roofing for Charlotte's Most Prestigious Club Community
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is the trusted choice for Quail Hollow's distinguished homeowners. We specialize in
              premium roofing for brick colonials, Mediterranean villas, and custom homes surrounding the
              world-renowned Quail Hollow Club, delivering craftsmanship worthy of this iconic community.
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
                Premium Materials
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quail Hollow-Specific Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Premium Roofing Services for Quail Hollow's Golf Estates
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Quail Hollow is one of Charlotte's most prestigious addresses, home to the world-renowned
                Quail Hollow Club where the Wells Fargo Championship and Presidents Cup have put this
                community on the international stage. Established from the 1960s through the 1990s,
                Quail Hollow's estates range from $500K to well over $2M, featuring generous lots and
                distinguished architectural styles.
              </p>
              <p>
                Whether you own a stately brick colonial on Gleneagles Road, an elegant Mediterranean
                villa in Quail Hollow Estates, or a custom home along the Sharon Road corridor, our team
                delivers premium roofing solutions that protect your substantial investment while enhancing
                your property's distinguished curb appeal.
              </p>
              <p>
                We offer Quail Hollow homeowners access to the finest roofing materials available, including
                natural slate, clay and concrete tile, designer architectural shingles, and copper accents.
                Our certified installers are trained to handle the complex roof designs and luxury materials
                these exceptional golf estates demand.
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
              Luxury Roofing Services in Quail Hollow
            </h2>
            <p className="text-gray text-lg">
              From premium roof replacements to meticulous repairs, our certified contractors deliver
              exceptional quality for Quail Hollow's most distinguished golf estates.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
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
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Quail Hollow Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Quail Hollow homeowners choose us because we understand what it takes to work on Charlotte's
                most prestigious golf estates. Our combination of premium materials, expert craftsmanship,
                and impeccable service matches the standards of this world-renowned community.
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
                src={IMAGES.hero.hero1}
                alt="Best Roofing Now - Trusted roofing contractor in Quail Hollow Charlotte NC"
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
                Need a Golf Estate Roofing Contractor in Quail Hollow?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte's premier golf estate roofing specialists.
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
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Serving All of Quail Hollow
            </h2>
            <p className="text-gray text-lg">
              We provide luxury roofing services throughout Quail Hollow and surrounding Charlotte neighborhoods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Quail Hollow Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Quail Hollow Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {quailHollowNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Nearby Areas We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {nearbyAreas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="flex items-center gap-2 text-gray hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>{area.name}</span>
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

      {/* Premium Materials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Premium Roofing Materials for Quail Hollow Estates
            </h2>
            <p className="text-gray text-lg">
              We offer the finest roofing materials available, ensuring your Quail Hollow estate receives
              a roof worthy of its distinguished character and golf course setting.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Designer Shingles</h3>
              <p className="text-gray text-sm">
                CertainTeed Grand Manor, GAF Grand Sequoia, and other premium designer shingles that mimic natural slate and wood shake.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Natural Slate & Tile</h3>
              <p className="text-gray text-sm">
                Authentic natural slate and clay tile roofing for homeowners seeking timeless elegance and century-long durability on their golf estates.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Copper & Metal Accents</h3>
              <p className="text-gray text-sm">
                Standing seam copper roofing, copper gutters, and metal accents that add distinguished character to Quail Hollow's luxury homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Work in Quail Hollow
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed luxury roofing projects in Quail Hollow and surrounding neighborhoods.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed luxury home roof replacement in Quail Hollow Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed designer shingle installation in Quail Hollow"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof project in Quail Hollow"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Professional roofing work on Quail Hollow estate"
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
                Quail Hollow Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about luxury roofing services in Quail Hollow Charlotte NC.
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
        pageType="other"
        city="Charlotte"
        slug="roofing-quail-hollow-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-quail-hollow-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Roofing Quail Hollow"

      />

      <CTASection
        title="Ready to Work with Quail Hollow's Golf Estate Roofing Experts?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide recommendations worthy of your Quail Hollow estate."
      />
    </>
  );
}
