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
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Myers Park Charlotte NC | Luxury Home Roofers | Best Roofing Now',
  description:
    'Looking for a trusted roofer in Myers Park Charlotte NC? Best Roofing Now specializes in luxury home roofing with premium materials for large estates. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing myers park charlotte nc',
    'roofers myers park',
    'myers park roofing contractor',
    'luxury home roofers charlotte',
    'myers park roof repair',
    'myers park roof replacement',
    'estate roofing charlotte',
    'premium roofing myers park',
    'best roofer myers park charlotte',
    'myers park charlotte roofing services',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-myers-park-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Myers Park Charlotte NC | Luxury Home Roofers | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor specializing in luxury homes in Myers Park Charlotte NC. Premium materials for large estates. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-myers-park-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.neighborhoods.myersPark,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Myers Park Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Estate Roofing',
    description: 'Premium roofing solutions for Myers Park\'s grand estates with luxury materials and expert installation.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Expert roofing for Myers Park\'s boutique shops, offices, and commercial properties.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Meticulous repairs for leaks, missing shingles, and storm damage on luxury homes.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full replacement with designer shingles, slate, tile, or premium metal roofing.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Comprehensive inspections for Myers Park estates with detailed condition reports.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration with premium materials and expert craftsmanship.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Myers Park homeowners.`,
  },
  {
    icon: Shield,
    title: 'Luxury Expertise',
    description: 'Experienced with high-end materials including slate, tile, copper, and designer shingles.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Premium Materials',
    description: 'Access to the finest roofing materials from CertainTeed, GAF, and specialty suppliers.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Myers Park homeowners need us most.',
  },
];

// Myers Park neighborhoods and areas
const myersParkNeighborhoods = [
  'Myers Park',
  'Queens Road West',
  'Queens Road East',
  'Providence Road',
  'Colville Road',
  'Roswell Avenue',
  'Cherokee Road',
  'Hermitage Road',
  'Huntington Place',
  'Myers Park Country Club',
  'Barclay Downs',
  'Park Road',
  'Selwyn Avenue',
  'Sharon Road',
  'Colony Road',
  'Sterling Road',
  'Beverley Drive',
  'Granville Road',
  'Wellesley Avenue',
  'Hempstead Place',
];

// Nearby areas served
const nearbyAreas = [
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Dilworth', href: '/roofing-dilworth-charlotte-nc' },
  { name: 'Eastover', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'South End', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Elizabeth', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Cotswold', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Foxcroft', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Quail Hollow', href: '/roofing-southpark-charlotte-nc' },
];

// FAQs specific to Myers Park
const faqs = [
  {
    question: 'What roofing services do you offer in Myers Park Charlotte NC?',
    answer:
      'Best Roofing Now provides complete luxury roofing services in Myers Park including roof repair, roof replacement, new roof installation, storm damage repair, emergency services, and comprehensive inspections. We specialize in premium materials including designer shingles, slate, tile, and copper accents.',
  },
  {
    question: 'Do you specialize in luxury home roofing in Myers Park?',
    answer:
      'Yes, Best Roofing Now has extensive experience with Myers Park\'s magnificent estates and luxury homes. We understand the high standards expected in this prestigious neighborhood and offer premium materials, expert craftsmanship, and meticulous attention to detail that matches the quality of these exceptional properties.',
  },
  {
    question: 'How much does a roof replacement cost in Myers Park?',
    answer:
      'Roof replacement costs in Myers Park typically range from $15,000-$50,000+ depending on home size, roof complexity, and material choice. Many Myers Park estates feature larger footprints and premium materials like slate, tile, or designer shingles. We provide detailed, transparent estimates for every project.',
  },
  {
    question: 'What premium roofing materials do you offer for Myers Park homes?',
    answer:
      'We offer the finest roofing materials including CertainTeed Grand Manor and Carriage House shingles, GAF Grand Sequoia designer shingles, natural slate, clay and concrete tile, standing seam copper and metal roofing, and premium synthetic options. We help you select materials that complement your home\'s architecture.',
  },
  {
    question: 'How long does a roof replacement take on a Myers Park estate?',
    answer:
      'Large Myers Park estates typically require 3-7 days for complete roof replacement, depending on size, roof complexity, and material type. Premium materials like slate or tile may require additional time. We work efficiently while maintaining the highest quality standards.',
  },
  {
    question: 'Do you work with Myers Park HOAs and architectural review boards?',
    answer:
      'Yes, we have extensive experience working with Myers Park HOAs and neighborhood architectural review committees. We understand the approval processes and can help you select materials and colors that meet community guidelines while enhancing your home\'s curb appeal.',
  },
  {
    question: 'What warranty do you provide on Myers Park roofing projects?',
    answer:
      'We offer comprehensive warranty coverage including manufacturer warranties up to 50 years on materials (lifetime on some premium products) and our own workmanship warranty. As certified installers, we can offer enhanced warranties like GAF Golden Pledge and CertainTeed SureStart PLUS.',
  },
  {
    question: 'Do you handle insurance claims for storm damage in Myers Park?',
    answer:
      'Absolutely. We have extensive experience with insurance claims for storm damage on luxury properties in Myers Park. We provide thorough documentation, work directly with adjusters, and advocate for settlements that cover proper restoration with premium materials matching your home\'s existing quality.',
  },
];

export default function RoofingMyersParkCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Myers Park Charlotte NC', url: `${SITE_CONFIG.url}/roofing-myers-park-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.neighborhoods.myersPark}
            alt="Professional roofing contractor in Myers Park Charlotte NC - Best Roofing Now crew"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Luxury Home Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Myers Park <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Luxury Home Roofing for Charlotte's Most Prestigious Neighborhood
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is the trusted choice for Myers Park's discerning homeowners. We specialize in
              premium roofing for grand estates and luxury homes, using only the finest materials and delivering
              craftsmanship that matches the excellence of this iconic Charlotte neighborhood.
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

      {/* Myers Park-Specific Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Premium Roofing Services for Myers Park's Grand Estates
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Myers Park represents the pinnacle of Charlotte elegance, with its stately tree-lined boulevards,
                magnificent estates, and timeless architectural beauty. At Best Roofing Now, we understand that
                homes in this prestigious neighborhood deserve nothing less than exceptional roofing services.
              </p>
              <p>
                Whether you own a grand Georgian estate on Queens Road, a stunning Tudor on Providence Road,
                or a beautiful Colonial on Cherokee Road, our team delivers premium roofing solutions that
                protect your investment while enhancing your home's distinguished appearance.
              </p>
              <p>
                We offer Myers Park homeowners access to the finest roofing materials available, including
                natural slate, clay tile, designer architectural shingles, and copper accents. Our certified
                installers are trained to handle complex roof designs and luxury materials with the precision
                and care these exceptional homes require.
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
              Luxury Roofing Services in Myers Park
            </h2>
            <p className="text-gray text-lg">
              From premium roof replacements to meticulous repairs, our certified contractors deliver
              exceptional quality for Myers Park's most distinguished homes.
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
                Why Myers Park Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Myers Park homeowners choose us because we understand what it takes to work on Charlotte's
                finest properties. Our combination of premium materials, expert craftsmanship, and impeccable
                service matches the standards of this exceptional neighborhood.
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
                src={IMAGES.neighborhoods.myersPark}
                alt="Best Roofing Now - Trusted roofing contractor in Myers Park Charlotte NC"
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
                Need a Luxury Roofing Contractor in Myers Park?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte's premier luxury home roofers.
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
              Serving All of Myers Park
            </h2>
            <p className="text-gray text-lg">
              We provide luxury roofing services throughout Myers Park and surrounding Charlotte neighborhoods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Myers Park Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Myers Park Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {myersParkNeighborhoods.map((neighborhood) => (
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
              Premium Roofing Materials for Myers Park Estates
            </h2>
            <p className="text-gray text-lg">
              We offer the finest roofing materials available, ensuring your Myers Park home receives
              a roof worthy of its distinguished character.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Designer Shingles</h3>
              <p className="text-gray text-sm">
                CertainTeed Grand Manor, GAF Grand Sequoia, and other premium architectural shingles that mimic slate and wood shake.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Natural Slate & Tile</h3>
              <p className="text-gray text-sm">
                Authentic natural slate and clay tile roofing for homeowners seeking timeless elegance and century-long durability.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Copper & Metal Accents</h3>
              <p className="text-gray text-sm">
                Standing seam copper roofing, copper gutters, and metal accents that add distinguished character to luxury homes.
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
              Our Work in Myers Park
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed luxury roofing projects in Myers Park and surrounding neighborhoods.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed luxury home roof replacement in Myers Park Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed designer shingle installation in Myers Park"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof project in Myers Park"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Professional roofing work on Myers Park estate"
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
                Myers Park Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about luxury roofing services in Myers Park Charlotte NC.
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

      {/* Final CTA */}
      <CTASection
        title="Ready to Work with Myers Park's Luxury Home Roofing Experts?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide recommendations worthy of your Myers Park estate."
      />
    </>
  );
}
