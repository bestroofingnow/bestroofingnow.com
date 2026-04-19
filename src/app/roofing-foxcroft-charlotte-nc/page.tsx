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
  title: 'Roofing Foxcroft Charlotte NC | Estates',
  description:
    'Trusted roofer in Foxcroft Charlotte NC. Estate roofing with slate, cedar shake, and copper for luxury homes. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing foxcroft charlotte nc',
    'roofers foxcroft',
    'foxcroft roofing contractor',
    'estate roofing charlotte',
    'foxcroft roof repair',
    'foxcroft roof replacement',
    'luxury roofing foxcroft',
    'slate roofing foxcroft charlotte',
    'best roofer foxcroft charlotte',
    'foxcroft east roofing services',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-foxcroft-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Foxcroft Charlotte NC | Estate Roofing | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor specializing in estate homes in Foxcroft Charlotte NC. Slate, cedar shake, copper accents. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-foxcroft-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Foxcroft Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Estate Roofing',
    description: 'Premium roofing solutions for Foxcroft\'s grand Colonial, Georgian, and Tudor estates on expansive lots.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Expert roofing for commercial properties along the Carmel Road and SouthPark corridors near Foxcroft.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Meticulous repairs for slate, cedar shake, and architectural shingle roofs on luxury estates.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full replacement with natural slate, cedar shake, designer shingles, or copper roofing systems.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Comprehensive inspections for Foxcroft estates with detailed condition reports and material assessments.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration using premium materials that preserve your estate\'s architectural integrity.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Foxcroft homeowners.`,
  },
  {
    icon: Shield,
    title: 'Estate Expertise',
    description: 'Specialized in high-end materials including natural slate, cedar shake, copper, and designer shingles.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance for large estates.',
  },
  {
    icon: Users,
    title: 'Premium Materials',
    description: 'Access to the finest roofing materials from CertainTeed, GAF, DaVinci, and specialty slate suppliers.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Foxcroft homeowners need us most.',
  },
];

// Foxcroft neighborhoods and areas
const foxcroftNeighborhoods = [
  'Foxcroft',
  'Foxcroft East',
  'Barclay Downs',
  'Sharon Lane',
  'Carmel Road Corridor',
  'Mountainbrook',
  'Lansdowne',
  'Morrocroft',
  'Morrocroft Estates',
  'Cameron Wood',
  'Quail Hollow Road',
  'Colony Road',
  'Fairfield Road',
  'Sharon Road West',
  'Carnegie Boulevard',
  'Park South Drive',
  'Baltusrol Lane',
  'Pellyn Wood',
  'Dovecrest Drive',
  'Brookhaven Drive',
];

// Nearby areas served
const nearbyAreas = [
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'Quail Hollow', href: '/roofing-quail-hollow-charlotte-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Ballantyne', href: '/roofing-ballantyne-charlotte-nc' },
  { name: 'Beverly Woods', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Barclay Downs', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Cotswold', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Luxury Roofing', href: '/luxury-roofing-charlotte-nc' },
  { name: 'Providence Road', href: '/roofing-contractor-charlotte-nc' },
];

// FAQs specific to Foxcroft
const faqs = [
  {
    question: 'What roofing services do you offer in Foxcroft Charlotte NC?',
    answer:
      'Best Roofing Now provides complete estate roofing services in Foxcroft including roof repair, roof replacement, new roof installation, storm damage repair, emergency services, and comprehensive inspections. We specialize in premium materials including natural slate, cedar shake, architectural shingles, and copper accents that complement Foxcroft\'s grand estates.',
  },
  {
    question: 'Do you specialize in estate roofing in Foxcroft?',
    answer:
      'Yes, Best Roofing Now has extensive experience with Foxcroft\'s magnificent estates, many situated on 1-5 acre lots. We understand the exacting standards expected in Charlotte\'s most exclusive neighborhood and offer premium materials, expert craftsmanship, and meticulous attention to detail worthy of these exceptional Colonial, Georgian, French Country, and English Tudor properties.',
  },
  {
    question: 'How much does a roof replacement cost in Foxcroft?',
    answer:
      'Roof replacement costs in Foxcroft typically range from $15,000-$60,000+ depending on estate size, roof complexity, and material choice. Many Foxcroft homes feature expansive footprints on large lots with premium materials like natural slate, cedar shake, or copper accents. We provide detailed, transparent estimates for every project.',
  },
  {
    question: 'What premium roofing materials do you offer for Foxcroft estates?',
    answer:
      'We offer the finest roofing materials including natural Vermont and Welsh slate, premium cedar shake, CertainTeed Grand Manor and Carriage House shingles, GAF Grand Sequoia designer shingles, standing seam copper roofing, clay and concrete tile, and premium synthetic alternatives. We help you select materials that complement your estate\'s architecture.',
  },
  {
    question: 'How long does a roof replacement take on a Foxcroft estate?',
    answer:
      'Large Foxcroft estates typically require 4-10 days for complete roof replacement, depending on estate size, roof complexity, and material type. Natural slate and cedar shake installations may require additional time for proper installation. We work efficiently while maintaining the highest quality standards these properties deserve.',
  },
  {
    question: 'Do you work with Foxcroft HOAs and architectural review boards?',
    answer:
      'Yes, we have extensive experience working with Foxcroft neighborhood associations and architectural review committees. We understand the stringent approval processes in Charlotte\'s most exclusive neighborhood and can help you select materials and colors that meet community guidelines while enhancing your estate\'s curb appeal and property value.',
  },
  {
    question: 'What warranty do you provide on Foxcroft roofing projects?',
    answer:
      'We offer comprehensive warranty coverage including manufacturer warranties up to 50 years on materials (lifetime on some premium products) and our own workmanship warranty. As certified installers, we can offer enhanced warranties like GAF Golden Pledge and CertainTeed SureStart PLUS for Foxcroft estate projects.',
  },
  {
    question: 'Do you handle insurance claims for storm damage in Foxcroft?',
    answer:
      'Absolutely. We have extensive experience with insurance claims for storm damage on luxury estates in Foxcroft. We provide thorough documentation, work directly with adjusters, and advocate for settlements that cover proper restoration with premium materials matching your estate\'s existing quality and architectural character.',
  },
];

export default function RoofingFoxcroftCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Foxcroft Charlotte NC', url: `${SITE_CONFIG.url}/roofing-foxcroft-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero1}
            alt="Professional roofing contractor in Foxcroft Charlotte NC - Best Roofing Now crew"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Estate Roofing Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Foxcroft <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Estate Roofing for Charlotte's Most Exclusive Neighborhood
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is the trusted choice for Foxcroft's discerning homeowners. We specialize in
              premium roofing for grand Colonial estates, French Country manors, and English Tudor homes,
              using only the finest materials and delivering craftsmanship worthy of Charlotte's most
              prestigious addresses.
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

      {/* Foxcroft-Specific Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Premium Estate Roofing for Foxcroft's Grand Properties
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Foxcroft is Charlotte's most exclusive residential enclave, where magnificent estates on
                1-5 acre lots represent the pinnacle of Southern luxury living. Established from the 1960s
                through the 1980s, many Foxcroft homes have been meticulously renovated or rebuilt to
                modern standards while preserving their timeless architectural character.
              </p>
              <p>
                Whether you own a stately Colonial estate, an elegant French Country manor on Sharon Lane,
                a distinguished Georgian home in Foxcroft East, or a classic English Tudor along the Carmel
                Road corridor, our team delivers premium roofing solutions that protect your substantial
                investment while enhancing your property's distinguished appearance.
              </p>
              <h3>Foxcroft's Unique Roofing Challenges</h3>
              <p>
                Foxcroft's tree canopy — one of the densest in Charlotte — creates specific roofing
                concerns. Mature oaks and hickories drop heavy limbs during summer storms, and the
                shade-heavy lots promote moss and algae growth on north-facing roof slopes. Homes
                along Baltusrol Lane and Pellyn Wood sit beneath particularly heavy canopy, requiring
                roofing materials rated for algae resistance (look for the AR designation on shingles)
                and regular debris clearing from valleys and gutters.
              </p>
              <p>
                Many original Foxcroft roofs were natural slate, installed when the neighborhood was
                developed in the 1960s-70s. After 50-60 years, these slate roofs reach end-of-life and
                homeowners face a choice: re-slate at $25-$45 per square foot (installed) or transition
                to high-end synthetic slate like DaVinci Roofscapes at roughly half the cost while
                maintaining the estate aesthetic. We help Foxcroft homeowners navigate this decision with
                honest material comparisons and samples brought directly to your property.
              </p>
              <p>
                Foxcroft's architectural review process requires pre-approval for exterior changes including
                roof replacements. We handle the approval paperwork, provide material samples and color
                boards for committee review, and coordinate timelines so work begins promptly after approval.
                Most Foxcroft projects require 2-3 weeks advance scheduling during peak season (March-October).
              </p>
              <p>
                We offer Foxcroft homeowners access to the finest roofing materials available, including
                natural slate from Vermont and Wales, premium cedar shake, designer architectural shingles,
                and hand-crafted copper accents. Our certified installers are trained to handle the complex
                roof designs and luxury materials these exceptional estates demand.
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
              Estate Roofing Services in Foxcroft
            </h2>
            <p className="text-gray text-lg">
              From premium roof replacements to meticulous repairs, our certified contractors deliver
              exceptional quality for Foxcroft's most distinguished estates.
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
                Why Foxcroft Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Foxcroft homeowners choose us because we understand what it takes to work on Charlotte's
                most exclusive properties. Our combination of premium materials, estate-level craftsmanship,
                and impeccable service matches the exacting standards of this distinguished neighborhood.
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
                src={IMAGES.hero.hero1}
                alt="Best Roofing Now - Trusted roofing contractor in Foxcroft Charlotte NC"
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
                Need an Estate Roofing Contractor in Foxcroft?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte's premier estate roofing specialists.
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
              Serving All of Foxcroft
            </h2>
            <p className="text-gray text-lg">
              We provide estate roofing services throughout Foxcroft and surrounding Charlotte neighborhoods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Foxcroft Neighborhoods */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Foxcroft Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {foxcroftNeighborhoods.map((neighborhood) => (
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
              Premium Roofing Materials for Foxcroft Estates
            </h2>
            <p className="text-gray text-lg">
              We offer the finest roofing materials available, ensuring your Foxcroft estate receives
              a roof worthy of its distinguished character and architectural heritage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Natural Slate & Cedar Shake</h3>
              <p className="text-gray text-sm">
                Authentic Vermont and Welsh slate, premium cedar shake, and hand-split wood shingles for estates demanding timeless elegance.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Designer Architectural Shingles</h3>
              <p className="text-gray text-sm">
                CertainTeed Grand Manor, GAF Grand Sequoia, and other premium architectural shingles that mimic the beauty of natural materials.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Copper & Metal Accents</h3>
              <p className="text-gray text-sm">
                Standing seam copper roofing, copper gutters, dormers, and metal accents that add distinguished character to grand estates.
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
              Our Work in Foxcroft
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed estate roofing projects in Foxcroft and surrounding neighborhoods.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.project1}
                alt="Completed estate roof replacement in Foxcroft Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed designer shingle installation in Foxcroft"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof project in Foxcroft"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <SEOImage
                src={IMAGES.realProjects.drone2}
                alt="Professional roofing work on Foxcroft estate"
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
                Foxcroft Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about estate roofing services in Foxcroft Charlotte NC.
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
        slug="roofing-foxcroft-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-foxcroft-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Roofing Foxcroft"

      />

      <CTASection
        title="Ready to Work with Foxcroft's Estate Roofing Experts?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide recommendations worthy of your Foxcroft estate."
      />
    </>
  );
}
