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
  CloudRain,
  Search,
  MapPin,
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
  title: 'Residential Roofing Charlotte NC | Expert Home Roofers',
  description:
    'Expert residential roofing services in Charlotte NC. Best Roofing Now specializes in home roof repair, replacement, and installation. BBB A+ rated, veteran-owned. Free estimates.',
  keywords: [
    'residential roofing charlotte nc',
    'home roofing charlotte',
    'house roofing charlotte nc',
    'residential roofers charlotte',
    'home roof repair charlotte nc',
    'residential roof replacement charlotte',
    'house roof installation charlotte nc',
    'home roofing contractors charlotte',
    'residential roofing services charlotte',
    'best residential roofers charlotte nc',
    'affordable home roofing charlotte',
    'quality residential roofing charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/residential-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Residential Roofing Charlotte NC | Expert Home Roofers',
    description:
      'Expert residential roofing services in Charlotte NC. BBB A+ rated, veteran-owned. Specializing in home roof repair, replacement, and installation. Free estimates.',
    url: `${SITE_CONFIG.url}/residential-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero4,
        width: 1200,
        height: 630,
        alt: 'Residential roofing Charlotte NC - Best Roofing Now home roofing experts',
      },
    ],
  },
};

// Residential roofing services
const residentialServices = [
  {
    icon: Layers,
    title: 'Asphalt Shingle Roofing',
    description: 'Premium architectural and 3-tab shingles from CertainTeed, GAF, and Owens Corning.',
    href: '/services/residential-roofing',
  },
  {
    icon: Home,
    title: 'Metal Roofing',
    description: 'Durable standing seam and metal shingle options for long-lasting protection.',
    href: '/services/residential-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, flashing, and storm damage.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Full Roof Replacement',
    description: 'Complete tear-off and replacement with new underlayment and ventilation.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspections',
    description: 'Comprehensive inspections with detailed reports - always free.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency restoration and insurance claim assistance for storm damage.',
    href: '/services/storm-damage',
  },
];

// Why choose us for residential roofing
const whyChooseUs = [
  {
    icon: Home,
    title: 'Home Roofing Specialists',
    description: 'We specialize in residential roofing, understanding the unique needs of Charlotte homeowners.',
  },
  {
    icon: Star,
    title: '5-Star Rated',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star reviews from Charlotte homeowners we've helped.`,
  },
  {
    icon: Shield,
    title: 'Premium Warranties',
    description: 'Industry-leading warranties including GAF Golden Pledge and CertainTeed SureStart PLUS.',
  },
  {
    icon: Award,
    title: 'Manufacturer Certified',
    description: 'CertainTeed SELECT, GAF Factory-Certified Contractor.',
  },
  {
    icon: Users,
    title: 'Veteran-Owned',
    description: 'Military values of integrity and excellence in every home roofing project.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Most residential roof replacements completed in just 1-3 days.',
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
  'Montford',
  'Chantilly',
  'Commonwealth',
  'Sedgefield',
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

// FAQs about residential roofing
const faqs = [
  {
    question: 'How much does residential roofing cost in Charlotte NC?',
    answer:
      'Residential roofing costs in Charlotte vary based on several factors. Roof repairs typically range from $200-$1,500, while full roof replacements range from $8,000-$25,000 for most homes. Factors affecting cost include roof size (square footage), pitch/slope, material choice, number of layers to remove, and any structural repairs needed. We provide free, detailed estimates.',
  },
  {
    question: 'What is the best roofing material for homes in Charlotte NC?',
    answer:
      'For Charlotte\'s climate, architectural asphalt shingles are the most popular choice, offering excellent durability, weather resistance, and value. Metal roofing is increasingly popular for its longevity (40-70 years) and energy efficiency. For historic homes in neighborhoods like Myers Park or Dilworth, we can match existing materials. We\'ll help you choose the best option for your home and budget.',
  },
  {
    question: 'How long does a residential roof last in Charlotte?',
    answer:
      'Roof lifespan in Charlotte depends on the material: 3-tab shingles last 15-20 years, architectural shingles 25-30 years, premium shingles like CertainTeed Landmark 30+ years, and metal roofing 40-70 years. Charlotte\'s hot summers and occasional severe storms can affect longevity. Regular maintenance and prompt repairs can extend your roof\'s life significantly.',
  },
  {
    question: 'How long does it take to replace a residential roof?',
    answer:
      'Most residential roof replacements in Charlotte are completed in 1-3 days. A typical 2,000-3,000 square foot home usually takes 1-2 days. Larger homes, complex roof designs, or homes with multiple layers to remove may take 3-5 days. Weather can also affect timing. We provide accurate timelines during your free estimate.',
  },
  {
    question: 'Do I need to be home during my roof replacement?',
    answer:
      'No, you don\'t need to be home during your residential roof replacement. Many Charlotte homeowners continue their normal routines while we work. We just ask that you move vehicles away from the work area and secure any pets. We\'ll keep you updated on progress and notify you when the work is complete.',
  },
  {
    question: 'What warranties do you offer on residential roofing?',
    answer:
      'We offer comprehensive warranties on residential roofing. As certified installers for CertainTeed, GAF, and Owens Corning, we can provide manufacturer warranties up to 50 years on materials plus our own workmanship warranty. Premium options include GAF Golden Pledge (50 years material + 25 years workmanship) and CertainTeed SureStart PLUS.',
  },
  {
    question: 'Does homeowners insurance cover roof replacement?',
    answer:
      'Homeowners insurance typically covers roof replacement if the damage was caused by a covered peril like wind, hail, or fallen trees. Normal wear and tear is usually not covered. We have extensive experience helping Charlotte homeowners with insurance claims and can meet with adjusters, provide documentation, and advocate for fair settlements.',
  },
  {
    question: 'What signs indicate I need residential roof repair or replacement?',
    answer:
      'Watch for these signs: missing or damaged shingles, granules in gutters, visible leaks or water stains, daylight through roof boards, sagging areas, moss or algae growth, and age (20+ years for shingles). If you notice any of these, schedule a free inspection. Catching problems early can save you from more expensive repairs later.',
  },
];

export default function ResidentialRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Residential Roofing Charlotte NC', url: `${SITE_CONFIG.url}/residential-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero4}
            alt="Residential roofing Charlotte NC - Best Roofing Now home roofing experts at work"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Home className="w-4 h-4" />
              <span className="text-sm font-semibold">Home Roofing Experts | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Residential Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Expert home roofing services with {SITE_CONFIG.roofsInstalled}+ roofs completed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now specializes in residential roofing throughout Charlotte NC. From shingle repairs
              to complete roof replacements, our certified installers deliver exceptional quality with premium
              materials and industry-leading warranties for your home.
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
                <Home className="w-5 h-5 text-accent-light" />
                Home Specialists
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
              Complete Residential Roofing Services
            </h2>
            <p className="text-gray text-lg">
              We offer comprehensive roofing solutions for Charlotte homeowners, from minor repairs to
              complete roof replacements with premium materials.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialServices.map((service) => (
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
                Why Charlotte Homeowners Choose Us for Residential Roofing
              </h2>
              <p className="text-gray text-lg mb-8">
                Your home is your biggest investment, and your roof protects everything inside it. That&apos;s
                why Charlotte homeowners trust Best Roofing Now for their residential roofing needs.
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
                src={IMAGES.houses.house1}
                alt="Residential roofing Charlotte NC - beautiful home with new roof"
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
              Premium Roofing Materials for Your Home
            </h2>
            <p className="text-gray text-lg">
              We use only the highest quality materials from trusted manufacturers, ensuring your home
              gets the best protection and longest-lasting results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">CertainTeed Shingles</h3>
              <p className="text-gray text-sm mb-4">
                Premium Landmark series with SureStart PLUS warranty coverage up to 50 years.
              </p>
              <p className="text-primary font-semibold text-sm">ShingleMaster Certified</p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">GAF Timberline</h3>
              <p className="text-gray text-sm mb-4">
                America&apos;s #1 selling shingle with Golden Pledge warranty protection.
              </p>
              <p className="text-primary font-semibold text-sm">Factory-Certified Contractor</p>
            </div>
            <div className="bg-light rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Owens Corning Duration</h3>
              <p className="text-gray text-sm mb-4">
                SureNail technology for superior wind resistance and protection.
              </p>
              <p className="text-primary font-semibold text-sm">Preferred Contractor</p>
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
                Need Residential Roofing in Charlotte?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte&apos;s home roofing experts.
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
              Residential Roofing Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              We serve homeowners in all Charlotte neighborhoods and surrounding communities.
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
              Recent Residential Roofing Projects
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed home roofing projects in Charlotte.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.houses.house2}
                alt="Residential roofing project in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Home roofing Charlotte - CertainTeed shingle installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.houses.modern1}
                alt="Modern residential roofing in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed residential roof replacement Charlotte"
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
                Residential Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about residential roofing in Charlotte NC.
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
        pageType="main-service-area"
        city="Charlotte"
        slug="residential-roofing-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/residential-roofing-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Residential Roofing"

      />

      <CTASection
        title="Ready for Expert Residential Roofing in Charlotte?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your home's roof and provide honest recommendations tailored to your needs and budget."
      />
    </>
  );
}
