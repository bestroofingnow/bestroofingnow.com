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
  Wrench,
  MapPin,
  Zap,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Owens Corning Roofing Charlotte NC | Preferred Contractor | Best Roofing Now',
  description:
    'Owens Corning Preferred Contractor in Charlotte NC. Install Duration and TruDefinition shingles with Platinum Protection warranty. BBB A+ rated, veteran-owned roofing company.',
  keywords: [
    'owens corning roofing charlotte nc',
    'owens corning shingles charlotte',
    'owens corning preferred contractor charlotte',
    'owens corning duration shingles charlotte nc',
    'owens corning platinum warranty charlotte',
    'owens corning roofer near me',
    'trudefinition duration shingles charlotte',
    'owens corning roof installation charlotte',
    'pink panther roofing charlotte',
    'owens corning contractor charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/owens-corning-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Owens Corning Roofing Charlotte NC | Preferred Contractor | Best Roofing Now',
    description:
      'Owens Corning Preferred Contractor in Charlotte NC. Install Duration shingles with Platinum Protection warranty. BBB A+ rated, veteran-owned.',
    url: `${SITE_CONFIG.url}/owens-corning-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Owens Corning roofing installation Charlotte NC - Best Roofing Now preferred contractor',
      },
    ],
  },
};

// Owens Corning Products offered
const owensCorningProducts = [
  {
    icon: Home,
    title: 'TruDefinition Duration Shingles',
    description: 'Award-winning shingles with SureNail Technology for superior wind resistance up to 130 MPH.',
    href: '/contact',
  },
  {
    icon: Shield,
    title: 'Platinum Protection Warranty',
    description: 'Lifetime limited warranty on shingles plus 50-year workmanship coverage from Owens Corning.',
    href: '/contact',
  },
  {
    icon: Award,
    title: 'Duration FLEX Shingles',
    description: 'Flexible polymer-modified asphalt for superior durability and impact resistance.',
    href: '/contact',
  },
  {
    icon: Zap,
    title: 'Duration STORM Shingles',
    description: 'Highest wind resistance rating (SureNail Technology) for severe weather protection.',
    href: '/contact',
  },
  {
    icon: Wrench,
    title: 'Total Protection System',
    description: 'Complete roofing system with underlayment, ventilation, and ice barrier products.',
    href: '/services/roof-replacement',
  },
  {
    icon: Home,
    title: 'COOL Roof Collection',
    description: 'Energy-efficient shingles that reflect solar heat and reduce cooling costs.',
    href: '/contact',
  },
];

// Why choose Owens Corning
const whyChooseOwensCorning = [
  {
    icon: Award,
    title: 'Preferred Contractor Network',
    description: 'Best Roofing Now is an Owens Corning Preferred Contractor with proven expertise.',
  },
  {
    icon: Shield,
    title: 'Platinum Protection',
    description: 'Lifetime material warranty plus 50-year workmanship coverage backed by Owens Corning.',
  },
  {
    icon: Star,
    title: 'SureNail Technology',
    description: 'Patented nailing zone delivers 130 MPH wind warranty and faster installation.',
  },
  {
    icon: CheckCircle,
    title: 'TruDefinition Colors',
    description: 'Premium color palette with greater color depth and dimension than ordinary shingles.',
  },
  {
    icon: Clock,
    title: 'Proven Performance',
    description: 'Over 80 years of roofing innovation from a trusted Fortune 500 company.',
  },
  {
    icon: Zap,
    title: 'Energy Star Rated',
    description: 'COOL Roof shingles help reduce energy costs and qualify for tax credits.',
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

// FAQs about Owens Corning roofing
const faqs = [
  {
    question: 'What is an Owens Corning Preferred Contractor?',
    answer:
      'An Owens Corning Preferred Contractor is a roofing professional who has met Owens Corning\'s standards for installation expertise, proper licensing, adequate insurance, and a commitment to customer satisfaction. This status allows us to offer enhanced warranty options including the Platinum Protection warranty with lifetime material coverage and 50-year workmanship protection backed directly by Owens Corning.',
  },
  {
    question: 'What is the Owens Corning Platinum Protection warranty?',
    answer:
      'The Platinum Protection warranty is Owens Corning\'s premium warranty package. It includes a Lifetime limited warranty on shingles, 50 years of coverage on workmanship backed by Owens Corning (not just the contractor), and extended coverage on accessories. This comprehensive warranty is only available through Owens Corning Preferred Contractors like Best Roofing Now.',
  },
  {
    question: 'What is SureNail Technology and why does it matter?',
    answer:
      'SureNail Technology is Owens Corning\'s patented nailing zone that provides exceptional grip and 130 MPH wind warranty. The fabric strip creates a visible nailing line for accurate installation and delivers up to 40% better nail pull-through resistance than standard shingles. For Charlotte homeowners concerned about storm damage, SureNail provides peace of mind that your roof can handle severe weather.',
  },
  {
    question: 'How do Duration shingles compare to other brands?',
    answer:
      'Owens Corning Duration shingles are consistently rated among the best asphalt shingles available. They feature SureNail Technology for superior wind resistance, TruDefinition colors for enhanced curb appeal, and a lighter weight design that\'s easier on your roof structure. Independent testing shows Duration shingles outperform competitors in wind uplift, nail pull-through, and tear strength.',
  },
  {
    question: 'How much does an Owens Corning roof cost in Charlotte?',
    answer:
      'An Owens Corning Duration roof in Charlotte typically ranges from $8,000 to $18,000+ for most homes, depending on size, pitch, and complexity. Premium options like Duration STORM or COOL Roof shingles are at the higher end but offer additional benefits. We provide free estimates with transparent pricing and flexible financing options.',
  },
  {
    question: 'What colors are available in Owens Corning shingles?',
    answer:
      'Owens Corning offers an extensive TruDefinition color palette including popular options like Onyx Black, Estate Gray, Brownwood, Sierra Gray, Teak, and Desert Tan. Their patented color technology creates greater color depth and dimension. We can show you samples and completed projects in your preferred colors to help you choose.',
  },
  {
    question: 'Are Owens Corning shingles good for hot climates like Charlotte?',
    answer:
      'Yes! Owens Corning offers COOL Roof shingles specifically designed for hot climates. These Energy Star-rated shingles reflect more solar energy to help reduce cooling costs by up to 15%. They\'re available in multiple colors and may qualify for energy efficiency tax credits. Regular Duration shingles also perform well in Charlotte\'s climate with their durable construction.',
  },
  {
    question: 'Why is the Pink Panther associated with Owens Corning?',
    answer:
      'The Pink Panther has been Owens Corning\'s mascot since 1980. While originally representing their pink fiberglass insulation, the character has become synonymous with quality building materials. When you see the Pink Panther, you know you\'re getting proven, reliable products from a company that stands behind their work - just like Best Roofing Now.',
  },
];

export default function OwensCorningRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Owens Corning Roofing Charlotte NC', url: `${SITE_CONFIG.url}/owens-corning-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Owens Corning roofing installation Charlotte NC - Best Roofing Now preferred contractor"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Owens Corning Preferred Contractor</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Owens Corning Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Preferred Contractor with Platinum Protection warranty coverage
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is your trusted Owens Corning Preferred Contractor in Charlotte. We install
              award-winning Duration shingles with SureNail Technology and back every installation with
              the comprehensive Platinum Protection warranty. Experience the quality that comes with
              80+ years of roofing innovation.
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
                Preferred Contractor
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                Platinum Protection
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

      {/* Owens Corning Products Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Owens Corning Roofing Products We Install
            </h2>
            <p className="text-gray text-lg">
              From TruDefinition Duration shingles to complete roofing systems, we install the full range
              of Owens Corning products with certified expertise and premium warranty coverage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {owensCorningProducts.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray text-sm mb-3">{product.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Owens Corning Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Owens Corning from a Preferred Contractor
              </h2>
              <p className="text-gray text-lg mb-8">
                As an Owens Corning Preferred Contractor, Best Roofing Now has been vetted for installation
                expertise and commitment to quality. This means you get premium products installed correctly
                the first time, backed by comprehensive warranty protection that covers both materials and labor.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseOwensCorning.map((item) => (
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
                src={IMAGES.realProjects.drone2}
                alt="Owens Corning Duration roof installation completed by Best Roofing Now in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <Award className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-dark">Preferred Contractor</p>
                    <p className="text-sm text-gray">Platinum Protection Warranty</p>
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
                Ready for Award-Winning Duration Shingles?
              </h2>
              <p className="text-white/90">
                Get a free estimate for Owens Corning roofing with Platinum Protection warranty coverage.
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
              <span className="text-sm font-semibold">Installation Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Owens Corning Roofing Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              We install Owens Corning roofing products throughout Charlotte and the surrounding metro area
              with certified expertise and premium warranty coverage.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Neighborhoods */}
            <div className="bg-light rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods We Serve</h3>
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

      {/* Project Gallery */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Owens Corning Roof Installations in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed Owens Corning roofing projects throughout the Charlotte area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project2}
                alt="Owens Corning Duration roof installation in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project4}
                alt="Completed Owens Corning roofing project in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of Owens Corning roof project in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project5}
                alt="Professional Owens Corning roofing work in Charlotte area"
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
                Owens Corning Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about Owens Corning roofing products and installation in Charlotte NC.
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
        slug="owens-corning-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/owens-corning-roofing-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready for Your New Owens Corning Roof?"
        subtitle="Get a free, no-obligation estimate for Owens Corning Duration shingles with Platinum Protection warranty. Our certified team will assess your roof and provide honest recommendations."
      />
    </>
  );
}
