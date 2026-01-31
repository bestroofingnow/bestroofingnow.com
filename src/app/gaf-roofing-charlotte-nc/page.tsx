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
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'GAF Roofing Charlotte NC | Factory-Certified Contractor | Best Roofing Now',
  description:
    'Looking for GAF roofing in Charlotte NC? Best Roofing Now is a GAF Factory-Certified contractor offering Timberline HDZ shingles with Golden Pledge warranty. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'gaf roofing charlotte nc',
    'gaf shingles charlotte',
    'gaf certified contractor charlotte',
    'gaf timberline charlotte nc',
    'gaf golden pledge warranty charlotte',
    'gaf factory certified roofer charlotte',
    'gaf hdz shingles charlotte nc',
    'gaf roofing contractor near me',
    'gaf master elite charlotte',
    'gaf roof installation charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gaf-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'GAF Roofing Charlotte NC | Factory-Certified Contractor | Best Roofing Now',
    description:
      'GAF Factory-Certified contractor in Charlotte NC. Install Timberline HDZ shingles with Golden Pledge warranty coverage. BBB A+ rated, veteran-owned.',
    url: `${SITE_CONFIG.url}/gaf-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'GAF roofing installation Charlotte NC - Best Roofing Now certified contractor',
      },
    ],
  },
};

// GAF Products offered
const gafProducts = [
  {
    icon: Home,
    title: 'Timberline HDZ Shingles',
    description: 'America\'s #1 selling shingle with LayerLock technology and StrikeZone nailing area.',
    href: '/gaf-timberline-shingles-charlotte-nc',
  },
  {
    icon: Shield,
    title: 'Golden Pledge Warranty',
    description: '50-year material warranty plus 25-year workmanship coverage - the best in the industry.',
    href: '/contact',
  },
  {
    icon: Award,
    title: 'Timberline NS Shingles',
    description: 'Natural shadow effect with dimensional beauty at an affordable price point.',
    href: '/gaf-timberline-shingles-charlotte-nc',
  },
  {
    icon: Home,
    title: 'GAF Camelot II',
    description: 'Ultra-premium designer shingles with the look of slate at a fraction of the cost.',
    href: '/contact',
  },
  {
    icon: Wrench,
    title: 'GAF Roof System',
    description: 'Complete roofing system with Deck-Armor, Cobra vents, and Starter Strip Plus.',
    href: '/services/roof-replacement',
  },
  {
    icon: Shield,
    title: 'StainGuard Plus',
    description: 'Time-release algae-fighting technology keeps your roof looking new for 25 years.',
    href: '/contact',
  },
];

// Why choose GAF
const whyChooseGAF = [
  {
    icon: Award,
    title: 'Factory-Certified Contractor',
    description: 'Best Roofing Now is GAF Factory-Certified, meeting rigorous installation standards.',
  },
  {
    icon: Shield,
    title: 'Golden Pledge Warranty',
    description: '50-year material + 25-year workmanship warranty - only available from certified contractors.',
  },
  {
    icon: Star,
    title: '#1 Selling Shingles',
    description: 'GAF Timberline is America\'s best-selling shingle for over 20 consecutive years.',
  },
  {
    icon: CheckCircle,
    title: 'LayerLock Technology',
    description: 'Mechanical fusion creates the strongest bond between shingle layers.',
  },
  {
    icon: Clock,
    title: 'Lifetime Protection',
    description: 'GAF shingles are engineered to last with Class A fire rating and high wind resistance.',
  },
  {
    icon: Award,
    title: 'StainGuard Plus',
    description: '25-year limited warranty against blue-green algae staining on your roof.',
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

// FAQs about GAF roofing
const faqs = [
  {
    question: 'What does it mean to be a GAF Factory-Certified contractor?',
    answer:
      'GAF Factory-Certified contractors have met GAF\'s stringent standards for installation training, proper licensing, adequate insurance, and a proven track record of quality work. This certification allows us to offer GAF\'s enhanced warranty options including the Golden Pledge warranty with 25-year workmanship coverage. Only about 7% of roofing contractors nationwide achieve this certification.',
  },
  {
    question: 'What is the GAF Golden Pledge warranty?',
    answer:
      'The GAF Golden Pledge warranty is the strongest warranty in the roofing industry. It includes a 50-year non-prorated material warranty plus 25 years of workmanship coverage backed by GAF itself - not just the contractor. This means GAF will pay for any repairs due to installation defects for 25 years. This warranty is only available through GAF Factory-Certified contractors like Best Roofing Now.',
  },
  {
    question: 'Why are GAF Timberline shingles so popular in Charlotte?',
    answer:
      'GAF Timberline shingles are America\'s #1 selling shingle for good reason. They offer excellent protection against Charlotte\'s hot summers and storm season, with Class A fire rating, high wind resistance up to 130 MPH, and StainGuard Plus algae protection. The LayerLock technology provides superior bond strength, and the dimensional appearance adds curb appeal that enhances home value.',
  },
  {
    question: 'How much does a GAF roof cost in Charlotte NC?',
    answer:
      'A GAF Timberline roof replacement in Charlotte typically ranges from $8,000 to $20,000+ for most homes, depending on roof size, pitch, and complexity. Premium options like Timberline HDZ with Golden Pledge warranty are at the higher end but provide the best value long-term. We provide free, detailed estimates with transparent pricing and financing options available.',
  },
  {
    question: 'What GAF shingle colors are best for Charlotte homes?',
    answer:
      'Popular GAF shingle colors in Charlotte include Weathered Wood, Charcoal, Hickory, Barkwood, and Pewter Gray. For Charlotte\'s hot climate, lighter colors like Weathered Wood and Pewter Gray can help reduce heat absorption. We provide samples and can show you completed projects in your preferred colors to help you decide.',
  },
  {
    question: 'How long does a GAF roof installation take?',
    answer:
      'Most GAF roof installations in Charlotte are completed in 1-3 days, depending on roof size and complexity. This includes complete tear-off of the old roof, inspection and repair of the decking, installation of GAF underlayment and accessories, and finally the Timberline shingles. We work efficiently while maintaining the highest quality standards.',
  },
  {
    question: 'Does GAF make good shingles for storm protection?',
    answer:
      'Yes, GAF shingles offer excellent storm protection. Timberline HDZ shingles have a 130 MPH wind warranty and meet the highest impact resistance standards. The LayerLock technology creates a stronger bond that resists wind uplift. For Charlotte homeowners concerned about storms, GAF shingles are an excellent choice backed by comprehensive warranty coverage.',
  },
  {
    question: 'What is StainGuard Plus and do I need it?',
    answer:
      'StainGuard Plus is GAF\'s advanced algae-fighting technology that releases copper over time to prevent ugly blue-green algae stains. In Charlotte\'s humid climate, algae growth on roofs is common and can make your home look old and neglected. StainGuard Plus comes standard on most GAF Timberline shingles and includes a 25-year limited warranty against algae discoloration.',
  },
];

export default function GAFRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'GAF Roofing Charlotte NC', url: `${SITE_CONFIG.url}/gaf-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="GAF roofing installation Charlotte NC - Best Roofing Now certified contractor"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">GAF Factory-Certified Contractor</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              GAF Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Factory-Certified GAF contractor with Golden Pledge warranty coverage
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is your trusted GAF Factory-Certified roofing contractor in Charlotte. We install
              America's #1 selling shingles - GAF Timberline - with the industry's strongest warranty protection.
              Get the peace of mind that comes with professional installation and 50-year material coverage.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free GAF Estimate
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
                <Shield className="w-5 h-5 text-accent-light" />
                Golden Pledge Warranty
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

      {/* GAF Products Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              GAF Roofing Products We Install
            </h2>
            <p className="text-gray text-lg">
              From Timberline HDZ to complete roofing systems, we install the full range of GAF products
              with certified expertise and industry-leading warranty coverage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gafProducts.map((product) => (
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

      {/* Why Choose GAF Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose GAF Roofing from a Certified Contractor
              </h2>
              <p className="text-gray text-lg mb-8">
                As a GAF Factory-Certified contractor, Best Roofing Now meets the highest standards for
                installation quality, licensing, and insurance. This certification allows us to offer GAF's
                premium warranty options that protect your investment for decades.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseGAF.map((item) => (
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
                src={IMAGES.realProjects.drone1}
                alt="GAF Timberline roof installation completed by Best Roofing Now in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <Award className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-dark">GAF Factory-Certified</p>
                    <p className="text-sm text-gray">Golden Pledge Warranty</p>
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
                Ready for America's #1 Selling Shingles?
              </h2>
              <p className="text-white/90">
                Get a free estimate for GAF Timberline shingles with Golden Pledge warranty coverage.
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
              <span className="text-sm font-semibold">GAF Installation Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              GAF Roofing Installation Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              We install GAF roofing products throughout Charlotte and the surrounding metro area with
              certified expertise and warranty coverage.
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
              GAF Roof Installations in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed GAF roofing projects throughout the Charlotte area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="GAF Timberline HDZ roof installation in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Completed GAF roofing project in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of GAF roof project in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional GAF roofing work in Charlotte area"
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
                GAF Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about GAF roofing products and installation in Charlotte NC.
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
        title="Ready for Your New GAF Roof?"
        subtitle="Get a free, no-obligation estimate for GAF Timberline shingles with Golden Pledge warranty. Our certified team will assess your roof and provide honest recommendations."
      />
    </>
  );
}
