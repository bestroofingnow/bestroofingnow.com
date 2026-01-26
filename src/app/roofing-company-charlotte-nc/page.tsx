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
  ThumbsUp,
  BadgeCheck,
  Building,
  Briefcase,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { VoiceSearchFAQ } from '@/components/seo/PeopleAlsoAsk';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Company Charlotte NC | Veteran-Owned & Family Operated',
  description:
    'Best Roofing Now is a veteran-owned, family-operated roofing company in Charlotte NC. Established business with strong values, BBB A+ rated. Meet the Turner family and our commitment to your home.',
  keywords: [
    'roofing company charlotte nc',
    'veteran owned roofing company charlotte',
    'family owned roofing company charlotte nc',
    'established roofing company charlotte',
    'roofing business charlotte nc',
    'local roofing company charlotte',
    'trusted roofing company charlotte nc',
    'roofing companies in charlotte',
    'charlotte roofing company about us',
    'reputable roofing company charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-company-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Company Charlotte NC | Veteran-Owned & Family Operated',
    description:
      'Meet Best Roofing Now - a veteran-owned, family-operated roofing company serving Charlotte NC. Established with strong values, BBB A+ rated.',
    url: `${SITE_CONFIG.url}/roofing-company-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Best Roofing Now - Trusted roofing company in Charlotte NC',
      },
    ],
  },
};

// Company credentials
const companyCredentials = [
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated with military values of integrity, discipline, and excellence.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited by the Better Business Bureau with an A+ rating and zero complaints on file.',
  },
  {
    icon: Star,
    title: '500+ Roofs Completed',
    description: 'Over 500 successful roofing projects completed throughout the Charlotte metro area.',
  },
  {
    icon: BadgeCheck,
    title: 'Manufacturer Certified',
    description: 'Certified by CertainTeed, GAF, and Owens Corning for premium warranty coverage.',
  },
];

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete residential roofing solutions including shingle, metal, and tile roofing systems.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, and comprehensive commercial roofing services.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, damaged shingles, and all roofing issues.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Complete tear-off and replacement with premium materials and extended warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Comprehensive free inspections with detailed reports and honest recommendations.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and full insurance claim assistance.',
    href: '/services/storm-damage',
  },
];

// Why choose our company
const whyChooseUs = [
  {
    icon: ThumbsUp,
    title: 'Proven Track Record',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star reviews from satisfied Charlotte homeowners and businesses.`,
  },
  {
    icon: Building,
    title: 'Established Company',
    description: 'An established roofing company with deep roots in the Charlotte community.',
  },
  {
    icon: Briefcase,
    title: 'Professional Team',
    description: 'Experienced, background-checked crews who treat your property with respect.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing company with comprehensive liability and workers comp insurance.',
  },
  {
    icon: Users,
    title: 'Local Ownership',
    description: 'Locally owned and operated - we live and work in the communities we serve.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when you need us most.',
  },
];

// Customer testimonials
const testimonials = [
  {
    name: 'Michael R.',
    location: 'Myers Park, Charlotte',
    rating: 5,
    text: 'Best Roofing Now is by far the best roofing company in Charlotte. Professional from start to finish, and the quality of work exceeded our expectations. Highly recommend!',
  },
  {
    name: 'Sarah T.',
    location: 'Ballantyne, Charlotte',
    rating: 5,
    text: 'We got quotes from several roofing companies in Charlotte NC and Best Roofing Now stood out with their transparency and professionalism. The roof looks amazing!',
  },
  {
    name: 'David L.',
    location: 'South End, Charlotte',
    rating: 5,
    text: 'As a property manager, I need a reliable roofing company I can trust. Best Roofing Now has handled multiple properties for me with excellent results every time.',
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

// FAQs about the company
const faqs = [
  {
    question: 'What makes Best Roofing Now the best roofing company in Charlotte NC?',
    answer:
      'Best Roofing Now stands out as Charlotte\'s premier roofing company through our combination of veteran-owned values, BBB A+ accreditation, 500+ completed roofs, and manufacturer certifications from CertainTeed, GAF, and Owens Corning. Our commitment to quality, transparency, and customer satisfaction has earned us a 5-star Google rating and the trust of homeowners throughout the Charlotte area.',
  },
  {
    question: 'Is Best Roofing Now a licensed and insured roofing company?',
    answer:
      'Absolutely. Best Roofing Now is a fully licensed roofing company in North Carolina. We carry comprehensive general liability insurance and workers\' compensation coverage for all our employees. This protects you from any liability during your roofing project. We\'re happy to provide proof of licensing and insurance upon request.',
  },
  {
    question: 'How long has your roofing company been serving Charlotte NC?',
    answer:
      'Best Roofing Now is an established roofing company with years of experience serving the Charlotte metro area. We\'ve completed over 500 roofing projects for residential and commercial clients throughout Charlotte and surrounding communities. Our track record of excellence and customer satisfaction speaks for itself.',
  },
  {
    question: 'Does your roofing company offer free estimates in Charlotte?',
    answer:
      'Yes! Best Roofing Now provides completely free, no-obligation estimates for all roofing services throughout Charlotte and the surrounding areas. Our certified inspectors will thoroughly examine your roof, identify any issues, and provide a detailed written proposal with transparent pricing. There\'s absolutely no pressure to hire us after receiving your estimate.',
  },
  {
    question: 'What types of roofing services does your company offer?',
    answer:
      'As a full-service roofing company, we handle all residential and commercial roofing needs including roof replacement, roof repair, new construction, storm damage restoration, roof inspections, and emergency services. We work with all roofing materials including asphalt shingles, metal roofing, tile, flat roof systems (TPO, EPDM, PVC), slate, and more.',
  },
  {
    question: 'Why should I choose a local roofing company in Charlotte NC?',
    answer:
      'Choosing a local roofing company like Best Roofing Now means you\'re working with professionals who understand Charlotte\'s specific climate challenges, building codes, and community standards. We\'re invested in our community, stand behind our work, and will be here for warranty service and future needs. Unlike out-of-town contractors, we\'re not going anywhere.',
  },
  {
    question: 'Does your roofing company help with insurance claims?',
    answer:
      'Yes, we have extensive experience helping Charlotte homeowners navigate insurance claims for storm damage and other covered roofing issues. Our team provides detailed documentation, meets with insurance adjusters on your behalf, and advocates for fair settlements. Many Charlotte roofs qualify for insurance coverage, and we help maximize your claim.',
  },
  {
    question: 'What areas does your roofing company serve near Charlotte?',
    answer:
      'Our roofing company serves all of Charlotte and the greater metro area including Myers Park, Dilworth, Ballantyne, South End, NoDa, University City, and all Charlotte neighborhoods. We also serve nearby cities including Huntersville, Matthews, Cornelius, Davidson, Mooresville, Pineville, Concord, Gastonia, and into South Carolina including Rock Hill and Fort Mill.',
  },
];

export default function RoofingCompanyCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Company Charlotte NC', url: `${SITE_CONFIG.url}/roofing-company-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-company-charlotte-nc`}
        pageName="Roofing Company Charlotte NC"
        includeVoiceActions={true}
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Best Roofing Now - Trusted roofing company in Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4 text-accent-light" />
              <span className="text-sm font-semibold">Veteran-Owned | BBB A+ Rated | Established Company</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Company <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Your Trusted Local Roofing Company with {SITE_CONFIG.roofsInstalled}+ Roofs Completed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is Charlotte&apos;s most trusted roofing company. As a veteran-owned, BBB A+ rated
              company, we deliver exceptional roofing services backed by manufacturer certifications and our
              commitment to quality craftsmanship.
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
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About the Company Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Building className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">About Our Company</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                An Established Roofing Company You Can Trust
              </h2>
              <p className="text-gray text-lg mb-6">
                Best Roofing Now is more than just a roofing company - we&apos;re your neighbors committed to
                protecting Charlotte homes and businesses. As a veteran-owned company, we bring military values
                of integrity, discipline, and excellence to every roofing project.
              </p>
              <p className="text-gray mb-8">
                With over 500 roofs completed throughout Charlotte and a BBB A+ rating with zero complaints,
                we&apos;ve built our reputation on quality workmanship, honest assessments, and treating every
                customer like family. Our certifications from industry leaders like CertainTeed, GAF, and Owens
                Corning mean you get premium materials backed by the best warranties available.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {companyCredentials.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 bg-light rounded-lg">
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
                alt="Best Roofing Now - Established roofing company in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-dark">500+ Roofs</p>
                    <p className="text-sm text-gray">Completed in Charlotte</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive Roofing Services in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              As a full-service roofing company, we handle all your residential and commercial roofing needs
              with expert craftsmanship and premium materials.
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

      {/* Why Choose Our Company Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Best Roofing Now?
            </h2>
            <p className="text-gray text-lg">
              Discover why Charlotte homeowners and businesses trust our roofing company for all their
              roofing needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Customer Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Charlotte Customers Say About Our Roofing Company
            </h2>
            <p className="text-gray text-lg">
              Don&apos;t just take our word for it - hear from homeowners who trusted us with their roofing projects.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-dark">5.0 Average Rating</span>
              <span className="text-gray">from {SITE_CONFIG.googleReviewCount}+ Google Reviews</span>
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
                Looking for a Reliable Roofing Company in Charlotte?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte&apos;s most trusted roofing company.
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
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Your Local Roofing Company Serving All of Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our roofing company serves homeowners and businesses throughout the Greater Charlotte region.
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

      {/* FAQ Section with Voice Search Optimization */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roofing Company FAQs
              </h2>
              <p className="text-gray text-lg">
                Quick answers to common questions about our roofing company and services in Charlotte NC.
              </p>
            </div>
            {/* Voice Search Optimized FAQ Component */}
            <VoiceSearchFAQ
              faqs={faqs}
              city="Charlotte"
              className="bg-white rounded-xl p-6 shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Cross-Reference to Main Services */}
      <section className="py-8 bg-primary/5 border-t border-primary/10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray text-center md:text-left">
              Looking for our complete service offerings?
            </p>
            <Link
              href="/roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              View All Roofing Services in Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service City Links */}
      <ServiceCityLinks
        city="Charlotte"
        citySlug="charlotte-nc"
        title="Our Complete Roofing Services"
        subtitle="From repairs to replacements, we offer comprehensive roofing solutions in Charlotte."
      />

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Charlotte"
        service="Roofing Company"
        serviceSlug="roofing"
        title="Trusted Roofing Company Serving Nearby Cities"
      />

      {/* Final CTA */}
      <CTASection
        title="Ready to Work with Charlotte's Most Trusted Roofing Company?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your needs and budget."
      />
    </>
  );
}
