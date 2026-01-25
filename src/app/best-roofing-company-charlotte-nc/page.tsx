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
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Best Roofing Company Charlotte NC | BBB A+ Rated',
  description:
    'Looking for the best roofing company in Charlotte NC? Best Roofing Now is BBB A+ rated, veteran-owned, with 500+ roofs completed. 5-star Google reviews. Free estimates available.',
  keywords: [
    'best roofing company charlotte nc',
    'best roofers in charlotte',
    'top rated roofing company charlotte',
    'best roofing contractor charlotte nc',
    'highest rated roofers charlotte',
    'best roofing charlotte nc',
    'top roofing companies charlotte',
    'best rated roofing company charlotte',
    'charlotte best roofing company',
    '#1 roofing company charlotte nc',
    'best local roofers charlotte',
    'most trusted roofing company charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/best-roofing-company-charlotte-nc`,
  },
  openGraph: {
    title: 'Best Roofing Company Charlotte NC | BBB A+ Rated',
    description:
      'BBB A+ rated, veteran-owned roofing company serving Charlotte NC. 5-star Google reviews and 500+ roofs completed. Free estimates for all roofing services.',
    url: `${SITE_CONFIG.url}/best-roofing-company-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero3,
        width: 1200,
        height: 630,
        alt: 'Best roofing company Charlotte NC - Best Roofing Now team',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete home roofing solutions with premium shingles, metal, and tile options.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Expert commercial roofing including TPO, EPDM, and flat roof systems.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, damage, and general wear.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with industry-leading warranties.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Free Roof Inspections',
    description: 'Comprehensive inspections with detailed reports - always free.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency restoration and insurance claim assistance.',
    href: '/services/storm-damage',
  },
];

// What makes us the best
const whyWereTheBest = [
  {
    icon: Award,
    title: 'BBB A+ Rating',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints on record.',
  },
  {
    icon: Star,
    title: '5-Star Google Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ verified 5-star reviews from satisfied Charlotte homeowners.`,
  },
  {
    icon: Shield,
    title: 'Veteran-Owned Values',
    description: 'Military values of integrity, discipline, and excellence in every project we complete.',
  },
  {
    icon: ThumbsUp,
    title: '500+ Roofs Completed',
    description: 'Proven track record with over 500 successful roofing projects in the Charlotte area.',
  },
  {
    icon: Users,
    title: 'Manufacturer Certified',
    description: 'CertainTeed SELECT, GAF Factory-Certified, and Owens Corning Preferred Contractor.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock emergency services because roof problems do not wait for business hours.',
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

// FAQs about best roofing company
const faqs = [
  {
    question: 'What makes Best Roofing Now the best roofing company in Charlotte NC?',
    answer:
      'Best Roofing Now has earned our reputation as Charlotte\'s best roofing company through consistent excellence: BBB A+ rating with zero complaints, 5-star Google reviews from 60+ customers, veteran-owned values, 500+ successful projects, and certifications from CertainTeed, GAF, and Owens Corning. We combine quality workmanship with honest pricing and exceptional customer service.',
  },
  {
    question: 'How do I know if a roofing company is reputable in Charlotte?',
    answer:
      'Look for these key indicators: BBB accreditation and rating, verified Google reviews (not just star count, but actual feedback), proper NC licensing and insurance, manufacturer certifications, years in business, and transparency about pricing. Best Roofing Now meets all these criteria and welcomes you to verify our credentials.',
  },
  {
    question: 'Does Best Roofing Now offer warranties on roofing work?',
    answer:
      'Yes! As a CertainTeed SELECT ShingleMaster, GAF Factory-Certified, and Owens Corning Preferred Contractor, we offer industry-leading warranties. This includes manufacturer warranties up to 50 years on materials plus our own workmanship warranty. We can offer enhanced options like GAF Golden Pledge (50 years material + 25 years workmanship).',
  },
  {
    question: 'How much does the best roofing company in Charlotte charge?',
    answer:
      'Quality roofing is an investment, and we provide competitive, transparent pricing. Roof repairs typically range from $200-$1,500, while full replacements range from $8,000-$25,000 for most homes. We provide detailed written estimates with no hidden fees. Being the "best" doesn\'t mean most expensive - it means best value for quality work.',
  },
  {
    question: 'Can I see examples of your roofing work in Charlotte?',
    answer:
      'Absolutely! We have an extensive portfolio of completed projects throughout Charlotte and surrounding areas. Visit our Projects page to see before and after photos, or ask us for references from homeowners in your specific neighborhood. We\'re proud of our work and happy to showcase it.',
  },
  {
    question: 'How quickly can you complete a roofing project?',
    answer:
      'Most residential roof replacements are completed in 1-3 days. Repairs are often same-day or next-day. We provide accurate timelines during your estimate and communicate throughout the project. Our experienced crews work efficiently while maintaining the highest quality standards.',
  },
  {
    question: 'Do you help with insurance claims for roof damage?',
    answer:
      'Yes, we have extensive experience with insurance claims in Charlotte. We provide thorough documentation, meet with adjusters, and advocate for fair settlements. Many homeowners don\'t realize their roof damage is covered by insurance - we help you navigate the process and maximize your claim.',
  },
  {
    question: 'What areas does the best roofing company in Charlotte serve?',
    answer:
      'We serve all of Charlotte and the Greater Charlotte metro area including Huntersville, Cornelius, Davidson, Mooresville, Matthews, Mint Hill, Pineville, Concord, Gastonia, and into South Carolina including Rock Hill and Fort Mill. If you\'re within about 30 miles of Charlotte, we can help.',
  },
];

export default function BestRoofingCompanyCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Best Roofing Company Charlotte NC', url: `${SITE_CONFIG.url}/best-roofing-company-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero3}
            alt="Best roofing company Charlotte NC - Best Roofing Now professional team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Best Roofing Company <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Charlotte&apos;s #1 rated roofing company with {SITE_CONFIG.roofsInstalled}+ roofs completed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now has earned our reputation as the best roofing company in Charlotte through
              exceptional quality, honest pricing, and outstanding customer service. BBB A+ rated with
              5-star reviews and manufacturer certifications that ensure the best warranties available.
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
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're The Best Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why We&apos;re Charlotte&apos;s Best Roofing Company
            </h2>
            <p className="text-gray text-lg">
              Our commitment to excellence has made us the most trusted roofing company in Charlotte.
              Here&apos;s what sets us apart from the competition.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyWereTheBest.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
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

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roofing Services from Charlotte&apos;s Best
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to complete replacements, our expert team handles all your roofing needs
              with the quality and care you deserve.
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

      {/* Social Proof Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Best roofing company Charlotte NC - completed project aerial view"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">{SITE_CONFIG.roofsInstalled}+</p>
                  <p className="text-sm text-gray">Roofs Completed</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Proven Excellence in Every Project
              </h2>
              <p className="text-gray text-lg mb-6">
                Being the best roofing company in Charlotte is not just a claim - it&apos;s a commitment we
                prove with every project. Our track record speaks for itself with hundreds of satisfied
                customers, perfect ratings, and industry recognition.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-light rounded-lg">
                  <Award className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark">BBB A+ Accredited</h4>
                    <p className="text-sm text-gray">Zero complaints, highest rating possible</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-light rounded-lg">
                  <Star className="w-10 h-10 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark">5.0 Google Rating</h4>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ verified reviews from real customers</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-light rounded-lg">
                  <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark">Manufacturer Certified</h4>
                    <p className="text-sm text-gray">CertainTeed, GAF, and Owens Corning certified</p>
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
                Ready to Work with Charlotte&apos;s Best?
              </h2>
              <p className="text-white/90">
                Experience the difference of working with a truly top-rated roofing company.
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
              Serving All of Charlotte & Surrounding Areas
            </h2>
            <p className="text-gray text-lg">
              The best roofing company in Charlotte serves homeowners throughout the Greater Charlotte metro.
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
              Our Work Speaks for Itself
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects throughout Charlotte.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Best roofing company Charlotte - completed residential project"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Top rated Charlotte roofing company - CertainTeed installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Charlotte's best roofing company - quality workmanship"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project5}
                alt="Best roofers in Charlotte NC - completed project"
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
                Best Roofing Company FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about choosing the best roofing company in Charlotte.
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

      {/* Final CTA */}
      <CTASection
        title="Experience the Best Roofing Company in Charlotte"
        subtitle="Get a free, no-obligation estimate from our certified team. Discover why hundreds of Charlotte homeowners have chosen Best Roofing Now."
      />
    </>
  );
}
