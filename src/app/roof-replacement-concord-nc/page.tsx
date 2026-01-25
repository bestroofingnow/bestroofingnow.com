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
  RefreshCw,
  Search,
  MapPin,
  DollarSign,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Replacement Concord NC | Cabarrus County Roofers | Best Roofing Now',
  description:
    'Professional roof replacement in Concord NC. New roof installation for Cabarrus County homes with premium shingles from CertainTeed, GAF & Owens Corning. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'roof replacement Concord NC',
    'new roof Concord NC',
    'Concord roofing contractor',
    'Cabarrus County roofers',
    'roof installation Concord NC',
    'shingle roof Concord',
    'metal roof Concord NC',
    'roof replacement cost Concord',
    'roofing company Concord NC',
    'Concord NC roof replacement',
    'best roofer Concord NC',
    'residential roofing Concord',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-replacement-concord-nc`,
  },
  openGraph: {
    title: 'Roof Replacement Concord NC | Cabarrus County Roofers | Best Roofing Now',
    description:
      'BBB A+ rated roof replacement specialists serving Concord and Cabarrus County. Premium roofing materials with extended warranties. Free estimates.',
    url: `${SITE_CONFIG.url}/roof-replacement-concord-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero4,
        width: 1200,
        height: 630,
        alt: 'Roof replacement Concord NC - Best Roofing Now new roof installation',
      },
    ],
  },
};

// Roof replacement services offered
const services = [
  {
    icon: Home,
    title: 'Asphalt Shingle Roofing',
    description: 'Premium shingles from CertainTeed, GAF, and Owens Corning with 25-50 year warranties.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Metal Roofing',
    description: 'Durable metal roofs with 50+ year lifespan and superior energy efficiency.',
    href: '/services/metal-roofing',
  },
  {
    icon: Search,
    title: 'Free Roof Inspection',
    description: 'Comprehensive assessment to determine if replacement is needed or if repairs will suffice.',
    href: '/services/roof-inspection',
  },
  {
    icon: RefreshCw,
    title: 'Complete Tear-Off',
    description: 'Full removal of old roofing materials with decking inspection and repair as needed.',
    href: '/services/roof-replacement',
  },
  {
    icon: Shield,
    title: 'Extended Warranties',
    description: 'Access to manufacturer-backed warranties up to 50 years as certified installers.',
    href: '/services/roof-replacement',
  },
  {
    icon: DollarSign,
    title: 'Financing Available',
    description: 'Flexible financing options to make your new roof affordable with low monthly payments.',
    href: '/financing',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Cabarrus County homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity and excellence.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing contractor with comprehensive liability insurance.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed, GAF, and Owens Corning certified for premium warranty options.',
  },
  {
    icon: Clock,
    title: 'Fast Installation',
    description: 'Most roof replacements completed in 1-3 days with thorough cleanup.',
  },
];

// Concord and Cabarrus County areas
const concordAreas = [
  'Downtown Concord',
  'Afton Village',
  'Cannon Crossing',
  'Christenbury',
  'Georgian Woods',
  'Highland Creek',
  'Moss Creek',
  'Skybrook',
  'Weddington Chase',
  'Ivey Farms',
  'Gibson Village',
  'Odell School',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Kannapolis', href: '/locations/kannapolis-nc' },
  { name: 'Harrisburg', href: '/locations/harrisburg-nc' },
  { name: 'Charlotte', href: '/roofing-contractor-charlotte-nc' },
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Cornelius', href: '/locations/cornelius-nc' },
  { name: 'Mint Hill', href: '/locations/mint-hill-nc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Salisbury', href: '/locations/salisbury-nc' },
];

// Roofing material options
const roofingMaterials = [
  {
    name: 'CertainTeed Landmark',
    description: 'Premium architectural shingles with SureStart warranty protection.',
    warranty: 'Lifetime Limited',
  },
  {
    name: 'GAF Timberline HDZ',
    description: 'America\'s #1 selling shingle with LayerLock technology.',
    warranty: 'Lifetime Limited',
  },
  {
    name: 'Owens Corning Duration',
    description: 'SureNail technology for superior wind resistance up to 130 mph.',
    warranty: 'Lifetime Limited',
  },
  {
    name: 'Standing Seam Metal',
    description: 'Premium metal roofing with hidden fasteners and 50+ year lifespan.',
    warranty: '50 Years',
  },
];

// FAQs about roof replacement in Concord
const faqs = [
  {
    question: 'How much does a roof replacement cost in Concord NC?',
    answer:
      'Roof replacement costs in Concord typically range from $8,000-$25,000 for most homes, depending on roof size, pitch, material choice, and complexity. Metal roofing may cost more upfront but offers superior longevity. We provide free, detailed estimates with transparent pricing and no hidden fees. Financing options are available to make your new roof affordable.',
  },
  {
    question: 'How long does a roof replacement take in Concord?',
    answer:
      'Most residential roof replacements in Concord are completed in 1-3 days. The timeline depends on your roof size, pitch, weather conditions, and whether any decking repairs are needed. We work efficiently while maintaining strict quality standards and always clean up thoroughly when the job is done.',
  },
  {
    question: 'What roofing materials do you recommend for Cabarrus County homes?',
    answer:
      'We recommend premium architectural shingles from CertainTeed, GAF, or Owens Corning for most Concord homes. These offer excellent durability, curb appeal, and value. For homeowners seeking maximum longevity, metal roofing is an excellent choice with 50+ year lifespan. We\'ll help you choose the best material for your home, budget, and aesthetic preferences.',
  },
  {
    question: 'How do I know if I need a roof replacement vs. repair?',
    answer:
      'Signs you may need a roof replacement include: your roof is 20+ years old, you see widespread granule loss, there are multiple leaks or extensive damage, shingles are curling or buckling throughout, or you\'ve already had several repairs. We offer free inspections and provide honest recommendations - we won\'t push for replacement if repairs are sufficient.',
  },
  {
    question: 'Do you offer warranties on roof replacements in Concord?',
    answer:
      'Yes! As CertainTeed, GAF, and Owens Corning certified installers, we offer enhanced warranty options including GAF Golden Pledge (50-year material + 25-year workmanship), CertainTeed SureStart PLUS (4-star warranty), and Owens Corning Platinum Preferred protection. All work is also backed by our own workmanship guarantee.',
  },
  {
    question: 'Will my insurance cover roof replacement in Concord NC?',
    answer:
      'If your roof was damaged by a covered event like hail, wind, or fallen trees, your homeowners insurance may cover replacement costs minus your deductible. Best Roofing Now has extensive experience working with insurance companies in Cabarrus County. We provide thorough documentation and meet with adjusters to ensure fair claim settlements.',
  },
  {
    question: 'What is included in a roof replacement from Best Roofing Now?',
    answer:
      'Our complete roof replacements include: full tear-off of existing roofing, inspection and repair of decking as needed, installation of ice and water shield in valleys and at eaves, new synthetic underlayment, drip edge and flashing, premium shingles or metal roofing, ridge vent installation for proper ventilation, and thorough magnetic cleanup of nails and debris.',
  },
  {
    question: 'Do you offer financing for roof replacement in Concord?',
    answer:
      'Yes! We offer flexible financing options to make your new roof affordable. With approved credit, you can get a new roof with low monthly payments. Some plans offer 0% interest for qualified buyers. Contact us for details on current financing promotions and to see what you qualify for.',
  },
];

export default function RoofReplacementConcordNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Replacement Concord NC', url: `${SITE_CONFIG.url}/roof-replacement-concord-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero4}
            alt="Roof replacement Concord NC - Best Roofing Now new roof installation team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Cabarrus County's Trusted Roofers</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Replacement <br className="hidden md:block" />
              <span className="text-accent-light">Concord NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Premium new roof installation with {SITE_CONFIG.roofsInstalled}+ roofs completed in the Charlotte area
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              When it's time for a new roof, Concord and Cabarrus County homeowners trust Best Roofing Now.
              Our certified installers deliver exceptional craftsmanship using premium materials from
              CertainTeed, GAF, and Owens Corning - all backed by industry-leading warranties.
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
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Certified Installers
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
              Roof Replacement Services in Concord NC
            </h2>
            <p className="text-gray text-lg">
              From premium shingle roofs to durable metal roofing, we provide complete roof replacement
              solutions for Cabarrus County homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
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

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Concord Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                A new roof is a major investment, and you deserve a roofing company that delivers exceptional
                quality, transparent pricing, and stands behind their work. Best Roofing Now has earned the
                trust of homeowners throughout Cabarrus County.
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
                alt="Roof replacement completed in Concord NC - Best Roofing Now"
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

      {/* Roofing Materials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Premium Roofing Materials
            </h2>
            <p className="text-gray text-lg">
              We use only premium roofing materials from industry-leading manufacturers with extended warranty coverage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roofingMaterials.map((material) => (
              <div key={material.name} className="bg-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{material.name}</h3>
                <p className="text-gray text-sm mb-3">{material.description}</p>
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                  {material.warranty} Warranty
                </span>
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
                Ready for a New Roof in Concord?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate with transparent pricing and financing options.
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
              Serving Concord & Cabarrus County
            </h2>
            <p className="text-gray text-lg">
              Our roof replacement team serves homeowners throughout Concord and the greater Cabarrus County region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Concord Areas */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Concord Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {concordAreas.map((area) => (
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
            <div className="bg-white rounded-xl p-6 shadow-md">
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

      {/* Certifications Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certified & Trusted Roofing Contractor
            </h2>
            <p className="text-gray text-lg">
              Our certifications from industry-leading manufacturers mean you get premium materials backed by
              extended warranty coverage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">CertainTeed SELECT ShingleMaster</h3>
              <p className="text-gray text-sm">
                Top-tier certification with access to premium warranties and specialized training.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">GAF Factory-Certified</h3>
              <p className="text-gray text-sm">
                Authorized to offer GAF's Golden Pledge warranty - the best in the industry.
              </p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Owens Corning Preferred</h3>
              <p className="text-gray text-sm">
                Preferred Contractor status with Owens Corning for extended warranty options.
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
              Roof Replacements in Cabarrus County
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of roof replacements completed for Concord and Cabarrus County homeowners.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Roof replacement completed in Concord NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation in Cabarrus County"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof replacement in Concord"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="New roof installation project in Concord NC"
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
                Roof Replacement FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about roof replacement in Concord NC.
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
        title="Ready for a New Roof in Concord?"
        subtitle="Get a free, no-obligation estimate from Cabarrus County's trusted roofing experts. We'll assess your roof, discuss your options, and provide transparent pricing with financing available."
      />
    </>
  );
}
