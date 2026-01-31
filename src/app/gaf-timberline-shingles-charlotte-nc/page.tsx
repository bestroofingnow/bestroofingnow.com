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
  Home,
  Palette,
  MapPin,
  Zap,
  Wind,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'GAF Timberline Shingles Charlotte NC | HDZ & NS | Best Roofing Now',
  description:
    'GAF Timberline HDZ and NS shingles installed in Charlotte NC. America\'s #1 selling shingle with LayerLock technology, StainGuard Plus, and 130 MPH wind warranty. Factory-Certified contractor.',
  keywords: [
    'gaf timberline shingles charlotte nc',
    'timberline hdz charlotte',
    'gaf timberline hdz shingles charlotte',
    'timberline ns shingles charlotte nc',
    'gaf timberline colors charlotte',
    'timberline shingles cost charlotte',
    'layerlock technology shingles',
    'stainGuard plus shingles charlotte',
    'gaf hdz installation charlotte nc',
    'timberline roof charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gaf-timberline-shingles-charlotte-nc`,
  },
  openGraph: {
    title: 'GAF Timberline Shingles Charlotte NC | HDZ & NS | Best Roofing Now',
    description:
      'GAF Timberline HDZ and NS shingles installed by Factory-Certified contractor in Charlotte NC. LayerLock technology, StainGuard Plus, and 130 MPH wind warranty.',
    url: `${SITE_CONFIG.url}/gaf-timberline-shingles-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'GAF Timberline shingles installation Charlotte NC - Best Roofing Now',
      },
    ],
  },
};

// Timberline product lines
const timberlineProducts = [
  {
    icon: Shield,
    title: 'Timberline HDZ',
    description: 'Premium line with LayerLock technology, StrikeZone nailing, and 130 MPH wind warranty.',
    features: ['LayerLock Technology', 'StrikeZone Nailing Area', 'StainGuard Plus', '130 MPH Wind Warranty'],
  },
  {
    icon: Home,
    title: 'Timberline NS',
    description: 'Natural shadow effect with dimensional beauty at an excellent value.',
    features: ['Natural Shadow Effect', 'Dimensional Appearance', 'StainGuard Protection', 'Affordable Value'],
  },
  {
    icon: Zap,
    title: 'Timberline UHDZ',
    description: 'Ultra-premium with enhanced curb appeal and the thickest, most durable construction.',
    features: ['Ultra HD Design', 'Premium Thickness', 'Maximum Durability', 'Enhanced Curb Appeal'],
  },
  {
    icon: Star,
    title: 'Timberline Cool Series',
    description: 'Energy-efficient shingles that reflect solar energy and reduce cooling costs.',
    features: ['Solar Reflective', 'Energy Star Rated', 'Reduces AC Costs', 'Available in Colors'],
  },
];

// Popular Timberline colors for Charlotte
const popularColors = [
  { name: 'Weathered Wood', description: 'Warm gray-brown blend popular in Charlotte neighborhoods' },
  { name: 'Charcoal', description: 'Classic dark gray that complements any home style' },
  { name: 'Hickory', description: 'Rich brown tones inspired by native hardwoods' },
  { name: 'Barkwood', description: 'Natural brown shades for traditional homes' },
  { name: 'Pewter Gray', description: 'Cool gray perfect for modern architecture' },
  { name: 'Shakewood', description: 'Cedar-inspired look with rustic charm' },
  { name: 'Slate', description: 'Deep blue-gray for sophisticated appearance' },
  { name: 'Mission Brown', description: 'Warm earth tones for Mediterranean styles' },
];

// Why choose Timberline
const whyChooseTimberline = [
  {
    icon: Award,
    title: '#1 Selling Shingle in America',
    description: 'GAF Timberline has been America\'s best-selling shingle for over 20 years running.',
  },
  {
    icon: Shield,
    title: 'LayerLock Technology',
    description: 'Mechanical fusion creates the strongest bond between shingle layers for durability.',
  },
  {
    icon: Wind,
    title: '130 MPH Wind Warranty',
    description: 'HDZ shingles withstand extreme winds - critical for Charlotte storm season.',
  },
  {
    icon: CheckCircle,
    title: 'StainGuard Plus',
    description: '25-year algae protection keeps your roof looking new in Charlotte\'s humid climate.',
  },
  {
    icon: Palette,
    title: 'Beautiful Color Options',
    description: 'Extensive color palette designed to complement any home architectural style.',
  },
  {
    icon: Clock,
    title: 'Lifetime Protection',
    description: 'Lifetime limited warranty plus Golden Pledge option for workmanship coverage.',
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

// FAQs about GAF Timberline shingles
const faqs = [
  {
    question: 'What is the difference between Timberline HDZ and Timberline NS?',
    answer:
      'Timberline HDZ is the premium line featuring LayerLock technology for a mechanical bond between layers, StrikeZone nailing area for faster and more accurate installation, and a 130 MPH wind warranty. Timberline NS (Natural Shadow) offers excellent dimensional appearance and performance at a lower price point but without the LayerLock technology. Both include StainGuard algae protection. For Charlotte\'s storm-prone climate, we often recommend HDZ for its superior wind resistance.',
  },
  {
    question: 'What is LayerLock technology?',
    answer:
      'LayerLock is GAF\'s patented technology that mechanically fuses the shingle layers together during manufacturing. This creates a stronger, more durable shingle that resists wind uplift and delamination better than traditionally laminated shingles. The result is enhanced performance in high winds and severe weather - particularly important for Charlotte homeowners during storm season.',
  },
  {
    question: 'How much do GAF Timberline shingles cost in Charlotte?',
    answer:
      'A GAF Timberline roof replacement in Charlotte typically ranges from $8,000 to $20,000+ for most homes. Timberline NS is generally at the lower end of the range, while Timberline HDZ and UHDZ are at the higher end due to their enhanced features. Factors affecting cost include roof size, pitch, complexity, and whether you opt for the Golden Pledge warranty. We provide free, detailed estimates.',
  },
  {
    question: 'What colors does GAF Timberline come in?',
    answer:
      'GAF Timberline shingles are available in an extensive color palette including Weathered Wood, Charcoal, Hickory, Barkwood, Pewter Gray, Shakewood, Slate, Mission Brown, and many more. Popular choices in Charlotte include Weathered Wood and Charcoal. We can show you samples and photos of completed projects in your preferred colors.',
  },
  {
    question: 'Does StainGuard Plus really prevent algae stains?',
    answer:
      'Yes! StainGuard Plus is GAF\'s advanced algae-fighting technology that includes specially designed copper-containing granules that release slowly over time to prevent blue-green algae growth. It comes with a 25-year limited warranty against algae discoloration. In Charlotte\'s humid climate where algae growth is common, StainGuard Plus is essential for maintaining your roof\'s appearance.',
  },
  {
    question: 'How long do GAF Timberline shingles last?',
    answer:
      'GAF Timberline shingles are designed for decades of performance and come with a Lifetime limited warranty. In Charlotte\'s climate with proper installation and ventilation, homeowners can expect 25-30+ years of service. Regular maintenance and prompt repairs of any damage can help maximize your roof\'s lifespan.',
  },
  {
    question: 'What warranty coverage is available for Timberline shingles?',
    answer:
      'GAF Timberline shingles come with a Lifetime limited warranty on materials. When installed by a GAF Factory-Certified contractor like Best Roofing Now, you can upgrade to the Golden Pledge warranty which adds 25 years of workmanship coverage backed by GAF itself - not just the contractor. This is the strongest warranty in the roofing industry.',
  },
  {
    question: 'Are Timberline shingles good for Charlotte\'s climate?',
    answer:
      'Absolutely. GAF Timberline shingles are excellent for Charlotte\'s climate. The 130 MPH wind warranty (HDZ) provides protection during severe thunderstorms, StainGuard Plus prevents algae in our humid summers, and the Class A fire rating adds safety. For homes seeking energy efficiency, the Timberline Cool Series reflects solar energy to reduce cooling costs.',
  },
];

export default function GAFTimberlineShinglesCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'GAF Roofing Charlotte NC', url: `${SITE_CONFIG.url}/gaf-roofing-charlotte-nc` },
          { name: 'GAF Timberline Shingles Charlotte NC', url: `${SITE_CONFIG.url}/gaf-timberline-shingles-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="GAF Timberline shingles installation Charlotte NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">America's #1 Selling Shingle</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              GAF Timberline Shingles <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Timberline HDZ & NS with LayerLock technology and StainGuard Plus
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now installs America's most trusted shingles - GAF Timberline HDZ and NS.
              Featuring LayerLock technology for superior wind resistance, StainGuard Plus for algae
              protection, and beautiful color options that enhance your home's curb appeal. Backed by
              the industry's strongest warranty when installed by our certified team.
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
                <Award className="w-5 h-5 text-accent-light" />
                GAF Factory-Certified
              </span>
              <span className="flex items-center gap-2">
                <Wind className="w-5 h-5 text-accent-light" />
                130 MPH Wind Warranty
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                StainGuard Plus
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Timberline Product Lines Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              GAF Timberline Product Lines
            </h2>
            <p className="text-gray text-lg">
              Choose from multiple Timberline product lines to find the perfect balance of performance,
              appearance, and value for your Charlotte home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {timberlineProducts.map((product) => (
              <div
                key={product.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-xl mb-2">{product.title}</h3>
                    <p className="text-gray">{product.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Colors Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Palette className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Color Options</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Popular Timberline Colors in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Choose from an extensive color palette designed to complement any home style.
              These are some of the most popular choices among Charlotte homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularColors.map((color) => (
              <div key={color.name} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark mb-1">{color.name}</h3>
                <p className="text-gray text-sm">{color.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray mb-4">
              Want to see these colors in person? We provide free samples and can show you completed projects.
            </p>
            <Button
              href="/contact"
              variant="primary"
              icon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            >
              Request Color Samples
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Timberline Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Homeowners Choose Timberline
              </h2>
              <p className="text-gray text-lg mb-8">
                GAF Timberline shingles have been America's #1 selling shingles for over 20 years.
                They combine proven performance with beautiful aesthetics, making them the trusted
                choice for Charlotte homeowners who want the best protection for their investment.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseTimberline.map((item) => (
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
                src={IMAGES.realProjects.project1}
                alt="GAF Timberline shingles installed on Charlotte home"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-dark">LayerLock Technology</p>
                    <p className="text-sm text-gray">130 MPH Wind Warranty</p>
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
                Ready for Timberline Shingles?
              </h2>
              <p className="text-white/90">
                Get a free estimate for GAF Timberline HDZ or NS shingles with Golden Pledge warranty.
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
              Timberline Shingle Installation Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              We install GAF Timberline shingles throughout Charlotte and the surrounding metro area
              with certified expertise and industry-leading warranty coverage.
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

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Timberline Shingle Projects in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed GAF Timberline installations throughout the Charlotte area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="GAF Timberline HDZ shingles installation in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Completed Timberline roofing project in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of Timberline shingle project in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Professional Timberline shingle installation in Charlotte area"
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
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                GAF Timberline Shingles FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about GAF Timberline shingles and installation in Charlotte NC.
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

      {/* Related Links */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">Related GAF Roofing Information</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/gaf-roofing-charlotte-nc"
                className="inline-flex items-center gap-2 px-4 py-2 bg-light rounded-lg hover:bg-primary/10 transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-primary" />
                <span className="text-dark">GAF Roofing Charlotte NC</span>
              </Link>
              <Link
                href="/services/roof-replacement"
                className="inline-flex items-center gap-2 px-4 py-2 bg-light rounded-lg hover:bg-primary/10 transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-primary" />
                <span className="text-dark">Roof Replacement Services</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-light rounded-lg hover:bg-primary/10 transition-colors"
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
        title="Ready for America's #1 Selling Shingles?"
        subtitle="Get a free, no-obligation estimate for GAF Timberline HDZ or NS shingles. Our certified team will help you choose the right product and color for your home."
      />
    </>
  );
}
