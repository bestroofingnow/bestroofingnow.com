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
  MapPin,
  Wrench,
  FileText,
  Palette,
  Layers,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Asphalt Shingle Roofing Charlotte NC | CertainTeed & GAF',
  description:
    'Expert asphalt shingle roofing in Charlotte NC. CertainTeed and GAF certified installer offering architectural shingles, 3-tab, and designer options. BBB A+ rated, lifetime warranties available. Free estimates.',
  keywords: [
    'asphalt shingle roofing charlotte nc',
    'architectural shingles charlotte',
    'shingle roof replacement charlotte nc',
    'certainteed shingles charlotte',
    'gaf shingles charlotte nc',
    'shingle roof repair charlotte',
    'owens corning shingles charlotte nc',
    'residential shingle roofing charlotte',
    'shingle roof installation charlotte nc',
    'asphalt roof charlotte',
    'dimensional shingles charlotte nc',
    'shingle roofing contractors charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/asphalt-shingle-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Asphalt Shingle Roofing Charlotte NC | CertainTeed & GAF | Best Roofing Now',
    description:
      'CertainTeed and GAF certified asphalt shingle installation in Charlotte NC. Architectural shingles, designer options, and lifetime warranties. BBB A+ rated with free estimates.',
    url: `${SITE_CONFIG.url}/asphalt-shingle-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.houses.house1,
        width: 1200,
        height: 630,
        alt: 'Asphalt shingle roofing Charlotte NC - Best Roofing Now professional shingle installation',
      },
    ],
  },
};

// Shingle roofing services
const shingleServices = [
  {
    icon: Home,
    title: 'Shingle Roof Installation',
    description: 'Complete new roof installation with premium shingles from CertainTeed, GAF, and Owens Corning.',
    href: '/services/residential-roofing',
  },
  {
    icon: Layers,
    title: 'Architectural Shingles',
    description: 'Dimensional shingles that provide a premium look with enhanced durability and longer warranties.',
    href: '/services/residential-roofing',
  },
  {
    icon: Palette,
    title: 'Designer Shingles',
    description: 'Luxury shingles that replicate the look of slate, cedar shake, or tile at a fraction of the cost.',
    href: '/services/residential-roofing',
  },
  {
    icon: Wrench,
    title: 'Shingle Roof Repair',
    description: 'Fast, reliable repairs for missing, damaged, or leaking shingles. Same-day service available.',
    href: '/services/roof-repair',
  },
  {
    icon: Shield,
    title: 'Full Roof Replacement',
    description: 'Complete tear-off and replacement with premium materials and extended warranty options.',
    href: '/services/roof-replacement',
  },
  {
    icon: FileText,
    title: 'Storm Damage Claims',
    description: 'Insurance claim assistance for hail and wind damage to your shingle roof.',
    href: '/services/storm-damage',
  },
];

// Shingle types
const shingleTypes = [
  {
    title: '3-Tab Shingles',
    description: 'Traditional flat shingles offering economical protection. Best for budget-conscious projects.',
    warranty: '20-25 years',
    priceRange: '$',
  },
  {
    title: 'Architectural Shingles',
    description: 'Multi-layered dimensional shingles with enhanced aesthetics and durability. Most popular choice.',
    warranty: '30-50 years',
    priceRange: '$$',
  },
  {
    title: 'Designer Shingles',
    description: 'Premium luxury shingles replicating slate, shake, or tile. Maximum curb appeal and protection.',
    warranty: 'Lifetime',
    priceRange: '$$$',
  },
  {
    title: 'Impact-Resistant Shingles',
    description: 'Class 4 rated shingles designed to withstand hail. May qualify for insurance discounts.',
    warranty: '50 years - Lifetime',
    priceRange: '$$-$$$',
  },
];

// Brands we install
const shingleBrands = [
  {
    name: 'CertainTeed',
    certification: 'SELECT ShingleMaster',
    description: 'Premium shingles with industry-leading warranties. Landmark series is our most popular.',
  },
  {
    name: 'GAF',
    certification: 'Factory-Certified',
    description: 'America\'s #1 selling shingle brand. Timberline HDZ offers excellent value.',
  },
  {
    name: 'Owens Corning',
    certification: 'Preferred Contractor',
    description: 'TruDefinition Duration shingles with SureNail technology for superior wind resistance.',
  },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Award,
    title: 'Manufacturer Certified',
    description: 'CertainTeed SELECT ShingleMaster, GAF Factory-Certified, and Owens Corning Preferred.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star reviews from satisfied Charlotte homeowners.`,
  },
  {
    icon: Shield,
    title: 'Extended Warranties',
    description: 'Access to enhanced manufacturer warranties including 50-year and lifetime options.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability coverage.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: `${SITE_CONFIG.roofsInstalled}+ roofs installed in the Charlotte area since ${SITE_CONFIG.founded}.`,
  },
  {
    icon: Clock,
    title: 'Quick Installation',
    description: 'Most shingle roofs completed in 1-3 days with thorough cleanup.',
  },
];

// Popular shingle colors in Charlotte
const popularColors = [
  'Weathered Wood',
  'Charcoal',
  'Driftwood',
  'Pewter Gray',
  'Barkwood',
  'Onyx Black',
  'Heather Blend',
  'Slate',
  'Moire Black',
  'Shakewood',
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
  'Montford',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Davidson', href: '/locations/davidson-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
];

// FAQs about asphalt shingle roofing
const faqs = [
  {
    question: 'How much does asphalt shingle roofing cost in Charlotte NC?',
    answer:
      'Asphalt shingle roof replacement in Charlotte typically costs $8,000-$25,000 for most homes, depending on roof size, pitch, and shingle choice. 3-tab shingles are most economical, while architectural shingles cost 15-25% more but offer better durability and aesthetics. Designer shingles can cost 30-50% more than architectural. We provide free, detailed estimates with transparent pricing.',
  },
  {
    question: 'What is the difference between 3-tab and architectural shingles?',
    answer:
      'Three-tab shingles are flat, single-layer shingles that provide basic protection. Architectural (dimensional) shingles have multiple layers that create depth and shadow, providing a more attractive appearance similar to wood or slate. Architectural shingles are also thicker, more durable, and carry longer warranties (30-50 years vs. 20-25 years for 3-tab). We recommend architectural shingles for most Charlotte homes.',
  },
  {
    question: 'What shingle brand do you recommend for Charlotte NC?',
    answer:
      'We recommend CertainTeed Landmark or GAF Timberline HDZ for most Charlotte homes. Both are high-quality architectural shingles with excellent warranties, color options, and durability for our climate. As certified installers for both brands, we can offer their extended warranty programs. For maximum hail protection, we recommend CertainTeed Landmark Impact or GAF Timberline AS II.',
  },
  {
    question: 'How long does asphalt shingle installation take?',
    answer:
      'Most residential shingle roof replacements in Charlotte are completed in 1-3 days. A typical 2,000 sq ft home can be completed in 1-2 days, while larger homes with complex rooflines may take 2-3 days. We work efficiently while maintaining quality standards and always complete thorough cleanup each day.',
  },
  {
    question: 'What warranties are available on asphalt shingles?',
    answer:
      'Warranty coverage depends on the shingle type and our certification level with each manufacturer. Standard warranties range from 25-50 years on materials. As a CertainTeed SELECT ShingleMaster and GAF Factory-Certified contractor, we can offer premium warranties including GAF Golden Pledge (50-year material + 25-year workmanship) and CertainTeed SureStart PLUS with full coverage for the first 10 years.',
  },
  {
    question: 'Should I get impact-resistant shingles in Charlotte?',
    answer:
      'Impact-resistant (Class 4) shingles are an excellent investment in Charlotte due to our occasional severe hail storms. These shingles are engineered to withstand hail impact without damage. Many insurance companies offer premium discounts (5-28%) for Class 4 rated roofs, which can offset the additional cost over time. We recommend Class 4 shingles like CertainTeed Landmark Impact or GAF Timberline AS II for maximum protection.',
  },
  {
    question: 'What colors are most popular for Charlotte homes?',
    answer:
      'The most popular shingle colors in Charlotte are Weathered Wood, Charcoal, Driftwood, and Pewter Gray. These neutral tones complement the various architectural styles common in Charlotte neighborhoods. We recommend choosing a color that complements your home\'s exterior and considering how dark colors absorb more heat. We can help you visualize colors and make the best choice during your free consultation.',
  },
  {
    question: 'How long do asphalt shingles last in Charlotte NC?',
    answer:
      'Quality architectural shingles typically last 25-30 years in Charlotte\'s climate, while premium options can last 30+ years with proper maintenance. Factors affecting lifespan include shingle quality, installation technique, attic ventilation, and maintenance. Charlotte\'s hot summers and occasional severe storms can accelerate wear, making proper installation and ventilation especially important. Regular inspections help catch issues early.',
  },
];

export default function AsphaltShingleRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Asphalt Shingle Roofing Charlotte NC', url: `${SITE_CONFIG.url}/asphalt-shingle-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.houses.house1}
            alt="Asphalt shingle roofing Charlotte NC - Best Roofing Now professional shingle installation"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">CertainTeed & GAF Certified</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Asphalt Shingle Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium shingles with lifetime warranties from Charlotte's trusted roofers
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is a certified installer for CertainTeed, GAF, and Owens Corning - the industry's
              top shingle manufacturers. From architectural shingles to designer options, we provide expert
              installation backed by the best warranties in the industry.
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
                Certified Installer
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Lifetime Warranties
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
              Asphalt Shingle Services in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              From new installations to repairs and storm damage restoration, we offer complete
              asphalt shingle roofing solutions for Charlotte homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shingleServices.map((service) => (
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

      {/* Shingle Types Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Asphalt Shingle Options for Your Home
            </h2>
            <p className="text-gray text-lg">
              We offer a full range of asphalt shingles to match your style, budget, and protection needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shingleTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-dark">{type.title}</h3>
                  <span className="text-accent font-bold">{type.priceRange}</span>
                </div>
                <p className="text-gray text-sm mb-4">{type.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-sm text-primary font-semibold">
                    Warranty: {type.warranty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Premium Shingle Brands We Install
            </h2>
            <p className="text-gray text-lg">
              As a certified installer for the industry's top manufacturers, we offer premium products
              with enhanced warranty protection.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {shingleBrands.map((brand) => (
              <div key={brand.name} className="bg-light rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2">{brand.name}</h3>
                <p className="text-accent font-semibold mb-4">{brand.certification}</p>
                <p className="text-gray text-sm">{brand.description}</p>
              </div>
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
                Why Charlotte Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Our manufacturer certifications mean you get the best products installed correctly,
                with access to premium warranty options not available from non-certified contractors.
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
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation in Charlotte NC"
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

      {/* Popular Colors */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Popular Shingle Colors in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse our most requested shingle colors that complement Charlotte's diverse architecture.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {popularColors.map((color) => (
              <span
                key={color}
                className="inline-block bg-light px-4 py-2 rounded-full text-dark font-medium border border-gray-200"
              >
                {color}
              </span>
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
                Ready for a New Shingle Roof?
              </h2>
              <p className="text-white/90">
                Get a free estimate and see samples of our shingle options in person.
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
                Free Estimate
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
              Shingle Roofing Across Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              We install and repair asphalt shingle roofs throughout the Greater Charlotte metro area.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>

            {/* Nearby Cities */}
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
                Asphalt Shingle Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about asphalt shingle roofing in Charlotte NC.
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
        pageType="other"
        city="Charlotte"
        slug="asphalt-shingle-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/asphalt-shingle-roofing-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Asphalt Shingle Roofing"

      />

      <CTASection
        title="Ready for a Beautiful New Shingle Roof?"
        subtitle="Get a free estimate from Charlotte's trusted shingle roofing experts. We'll help you choose the perfect shingles for your home and budget, backed by the best warranties in the industry."
      />
    </>
  );
}
