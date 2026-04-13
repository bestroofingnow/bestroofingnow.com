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
  title: 'Roofing Cotswold Charlotte NC',
  robots: { index: false, follow: true },
  description:
    'Trusted roofer in Cotswold Charlotte NC. Roofing for classic ranches, Cape Cods, and renovated homes. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roofing cotswold charlotte nc',
    'roofers cotswold charlotte',
    'cotswold charlotte roofing contractor',
    'east charlotte roofers cotswold',
    'cotswold roof repair',
    'cotswold roof replacement',
    'ranch home roofing cotswold',
    'architectural shingles cotswold charlotte',
    'best roofer cotswold charlotte',
    'cotswold charlotte roofing services',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-cotswold-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Cotswold Charlotte NC | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving Cotswold in east Charlotte NC. Architectural shingles for classic ranches, Cape Cods, and renovated homes. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-cotswold-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.neighborhoods.cotswold,
        width: 1200,
        height: 630,
        alt: 'Professional roofing services in Cotswold Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Expert roofing for Cotswold\'s classic 1950s-1960s ranches, Cape Cods, and renovated homes.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Professional roofing for Cotswold Village shops, restaurants, and commercial properties along Wendover Road.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Reliable repairs for Cotswold\'s aging roof systems including shingle, flat, and mixed-material sections.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full replacement with architectural shingles or metal accent roofing that transforms Cotswold\'s classic homes.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Thorough inspections for Cotswold homes with detailed reports on condition, ventilation, and remaining life.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration for Cotswold homes impacted by wind, hail, and falling debris.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Cotswold neighborhood homeowners.`,
  },
  {
    icon: Shield,
    title: 'Classic Home Expertise',
    description: 'Deep experience with 1950s-1960s ranches and Cape Cods, understanding their unique roofing needs.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Premium Materials',
    description: 'CertainTeed, GAF, and Owens Corning architectural shingles plus metal accent options.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when Cotswold homeowners need us most.',
  },
];

// Cotswold neighborhoods and areas
const cotswoldAreas = [
  'Cotswold',
  'Cotswold Village',
  'Wendover Road',
  'Sharon Amity Road',
  'Randolph Road',
  'Coltsgate Road',
  'Rama Road',
  'Mountainbrook Road',
  'Wyndham Road',
  'Tinkerbell Road',
  'Castlewood Road',
  'Coventry Road',
  'Ashbrook Road',
  'Greenleaf Avenue',
  'Beverley Drive',
  'Buckingham Road',
  'Balmoral Road',
  'Hertford Road',
  'Farmbrook Drive',
  'Woodlawn Road',
];

// Nearby areas served
const nearbyAreas = [
  { name: 'Elizabeth', href: '/roofing-elizabeth-charlotte-nc' },
  { name: 'Myers Park', href: '/roofing-myers-park-charlotte-nc' },
  { name: 'Plaza Midwood', href: '/roofing-plaza-midwood-charlotte-nc' },
  { name: 'SouthPark', href: '/roofing-southpark-charlotte-nc' },
  { name: 'Dilworth', href: '/roofing-dilworth-charlotte-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Matthews', href: '/roofing-matthews-nc' },
  { name: 'Mint Hill', href: '/roofing-mint-hill-nc' },
  { name: 'Eastover', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Beverly Woods', href: '/roofing-beverly-woods-charlotte-nc' },
];

// FAQs specific to Cotswold
const faqs = [
  {
    question: 'What roofing services do you offer in Cotswold Charlotte NC?',
    answer:
      'Best Roofing Now provides complete roofing services in Cotswold including roof repair, roof replacement, new roof installation, storm damage repair, emergency services, and comprehensive inspections. We specialize in roofing for 1950s-1960s ranches, Cape Cods, and the growing number of renovated and rebuilt homes in the neighborhood.',
  },
  {
    question: 'How much does a roof replacement cost in Cotswold?',
    answer:
      'Roof replacement costs in Cotswold typically range from $9,000-$28,000 depending on home size (most are 1,800-3,500 sq ft), roof complexity, and material choice. Renovated homes with added square footage or complexity may be on the higher end. We provide detailed, transparent estimates for every project.',
  },
  {
    question: 'What roofing materials work best for Cotswold homes?',
    answer:
      'Cotswold\'s 1950s-1960s ranches and Cape Cods look fantastic with premium architectural shingles from CertainTeed Landmark, GAF Timberline HDZ, or Owens Corning Duration. Many homeowners renovating or rebuilding in Cotswold are also adding metal accent roofing for a modern touch that complements the neighborhood\'s village character.',
  },
  {
    question: 'Do many Cotswold homes need roof replacement?',
    answer:
      'Yes, Cotswold homes built in the 1950s-1960s have gone through multiple roof cycles. If your current roof is 20+ years old, we recommend a professional inspection. Many Cotswold homeowners use replacement as an opportunity to upgrade from basic 3-tab shingles to dimensional architectural shingles for improved appearance and durability.',
  },
  {
    question: 'How long does a roof replacement take in Cotswold?',
    answer:
      'Most Cotswold homes require 1-3 days for complete roof replacement, as many are single-story ranches or modest Cape Cods with straightforward roof designs. Renovated or rebuilt homes with added complexity may require additional time. We work efficiently while maintaining the highest quality standards.',
  },
  {
    question: 'Is Cotswold in a historic district with roofing restrictions?',
    answer:
      'Cotswold is not a designated historic district, which gives homeowners more flexibility in material and color choices. However, we still recommend selecting roofing materials that complement the neighborhood\'s charming village character and your home\'s architectural style for maximum curb appeal and resale value.',
  },
  {
    question: 'What warranty do you provide for Cotswold roofing projects?',
    answer:
      'We offer comprehensive warranty coverage including manufacturer warranties up to 50 years on materials and our own workmanship warranty. As certified installers for CertainTeed, GAF, and Owens Corning, we can offer enhanced warranties like GAF Golden Pledge and CertainTeed SureStart PLUS.',
  },
  {
    question: 'Do you handle insurance claims for storm damage in Cotswold?',
    answer:
      'Absolutely. Cotswold\'s mature trees make homes susceptible to wind and debris damage during Carolina storms. We provide thorough documentation, work directly with insurance adjusters, and ensure your claim covers proper restoration with quality materials that enhance your home\'s value.',
  },
];

export default function RoofingCotswoldCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Cotswold Charlotte NC', url: `${SITE_CONFIG.url}/roofing-cotswold-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.neighborhoods.cotswold}
            alt="Professional roofing contractor in Cotswold Charlotte NC - Best Roofing Now crew"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | East Charlotte Experts</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Cotswold <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Trusted Roofing for Cotswold's Charming Village Neighborhood
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is the trusted choice for Cotswold homeowners. We specialize in roofing for
              classic 1950s-1960s ranches, Cape Cods, and renovated homes, delivering expert craftsmanship
              with premium materials that protect and enhance this charming east Charlotte community.
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

      {/* Cotswold-Specific Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Quality Roofing for Cotswold's Classic and Renovated Homes
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Cotswold is one of east Charlotte's most charming neighborhoods, known for its village feel,
                walkable streets, and a wonderful mix of classic 1950s-1960s homes alongside thoughtfully
                renovated and rebuilt properties. Homes range from 1,800 to 3,500 square feet with values
                from $350K to $700K, attracting families and professionals who love the neighborhood's character.
              </p>
              <p>
                Roofing Cotswold homes requires understanding the neighborhood's diverse housing stock. From
                original ranches with their characteristic low-pitched roofs to Cape Cods with steep dormers
                and newly built homes with modern roof lines, our team has the experience to handle it all
                with premium materials and expert installation.
              </p>
              <p>
                Whether you own a classic ranch near Cotswold Village, a charming Cape Cod on Wendover Road,
                or a renovated home along Sharon Amity, Best Roofing Now delivers roofing solutions that
                protect your investment and complement the welcoming, village-like character that makes
                Cotswold one of Charlotte's most sought-after neighborhoods.
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
              Roofing Services in Cotswold Charlotte
            </h2>
            <p className="text-gray text-lg">
              From classic ranch re-roofs to modern upgrades on renovated homes, our certified contractors
              deliver quality roofing for Cotswold's diverse housing stock.
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
                Why Cotswold Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Cotswold homeowners choose us because we understand classic Charlotte homes and the
                neighborhood's unique village character. Our combination of experience, premium materials,
                and reliable craftsmanship makes us the trusted roofer for this charming east Charlotte community.
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
                src={IMAGES.neighborhoods.cotswold}
                alt="Best Roofing Now - Trusted roofing contractor in Cotswold Charlotte NC"
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
                Need a Trusted Roofer in Cotswold?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte's trusted neighborhood roofing experts.
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
              Serving All of Cotswold
            </h2>
            <p className="text-gray text-lg">
              We provide expert roofing services throughout Cotswold and surrounding Charlotte neighborhoods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Cotswold Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Cotswold Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {cotswoldAreas.map((neighborhood) => (
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
              Roofing Materials for Cotswold Homes
            </h2>
            <p className="text-gray text-lg">
              We offer materials that complement Cotswold's classic architecture and meet the
              needs of both original and renovated homes in the neighborhood.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Architectural Shingles</h3>
              <p className="text-gray text-sm">
                CertainTeed Landmark, GAF Timberline HDZ, and Owens Corning Duration shingles that upgrade Cotswold's classic ranches and Cape Cods with dimensional beauty.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Metal Accent Roofing</h3>
              <p className="text-gray text-sm">
                Standing seam metal for dormers, porches, and accent areas that add modern character to renovated Cotswold homes while providing superior durability.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Impact-Resistant Options</h3>
              <p className="text-gray text-sm">
                Class 4 impact-resistant shingles that protect against hail and storm damage, potentially qualifying Cotswold homeowners for insurance premium discounts.
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
              Our Work in Cotswold
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects in Cotswold and surrounding Charlotte neighborhoods.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed roof replacement in Cotswold Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed architectural shingle installation in Cotswold"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof project in Cotswold Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Professional roofing work on Cotswold home"
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
                Cotswold Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roofing services in Cotswold Charlotte NC.
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
        slug="roofing-cotswold-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-cotswold-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roofing Cotswold"
      />

      <CTASection
        title="Ready for Expert Roofing in Cotswold?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide recommendations tailored to your Cotswold home."
      />
    </>
  );
}
