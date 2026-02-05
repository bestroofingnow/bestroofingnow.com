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
  Heart,
  Hammer,
  FileCheck,
  Zap,
  DollarSign,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import EstimateButton from '@/components/estimate/EstimateButton';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Best Roofing Company Charlotte NC | #1 Rated | BBB A+',
  description:
    `Best Roofing Now is the best roofing company in Charlotte NC. ${SITE_CONFIG.googleRating} Google rating, ${SITE_CONFIG.googleReviewCount}+ 5-star reviews, BBB A+ rated, veteran-owned, ${SITE_CONFIG.roofsInstalled}+ roofs completed. GAF, CertainTeed & Owens Corning certified. Free estimates.`,
  keywords: [
    'best roofing company charlotte nc',
    'top rated roofing company charlotte',
    '#1 roofing company charlotte nc',
    'highest rated roofing company charlotte',
    'best roofing company charlotte 2025',
    'charlotte roofing company rankings',
    'award winning roofing company charlotte',
    'bbb a+ roofing company charlotte nc',
    'top 10 roofing companies charlotte',
    'roofing company comparison charlotte',
    'who is the best roofer in charlotte',
    '5 star roofing company charlotte nc',
    'best roofer charlotte nc',
    'best rated roofing company charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/best-roofing-company-charlotte-nc`,
  },
  openGraph: {
    title: 'Best Roofing Company Charlotte NC | #1 Rated | BBB A+ | Best Roofing Now',
    description:
      `The best roofing company in Charlotte NC. ${SITE_CONFIG.googleRating} Google rating, BBB A+ rated, veteran-owned, ${SITE_CONFIG.roofsInstalled}+ roofs completed. Free estimates for all roofing services.`,
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
    description: 'Complete home roofing solutions with premium shingles, metal, and tile options from the best roofers in Charlotte.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Expert commercial roofing including TPO, EPDM, and flat roof systems for Charlotte businesses.',
    href: '/commercial-roofing-charlotte-nc',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, damage, and general wear - same-day service available.',
    href: '/roof-repair-charlotte-nc',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with industry-leading warranties from the best roofing company in Charlotte.',
    href: '/roof-replacement-charlotte-nc',
  },
  {
    icon: Search,
    title: 'Free Roof Inspections',
    description: 'Comprehensive inspections with detailed reports and drone imagery - always free, no obligation.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency restoration and full insurance claim assistance from Charlotte\'s best-rated roofers.',
    href: '/storm-damage-roof-repair-charlotte-nc',
  },
];

// What makes us the best - enhanced with stronger evidence
const whyWereTheBest = [
  {
    icon: Star,
    title: `Perfect ${SITE_CONFIG.googleRating} Google Rating`,
    description: `${SITE_CONFIG.googleReviewCount}+ verified 5-star reviews from real Charlotte homeowners and businesses. Our perfect rating proves we deliver the best results, every time.`,
  },
  {
    icon: Award,
    title: 'BBB A+ Rating - Zero Complaints',
    description: 'Better Business Bureau A+ accredited with zero complaints on record. The highest possible trust rating from America\'s most respected business watchdog.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned & Operated',
    description: 'Military values of integrity, discipline, and excellence in every project. A unique differentiator that most Charlotte roofing companies simply cannot match.',
  },
  {
    icon: Hammer,
    title: `${SITE_CONFIG.roofsInstalled}+ Completed Projects`,
    description: `Over ${SITE_CONFIG.roofsInstalled} successful roofing projects across Charlotte and surrounding areas. Our experience ensures the best outcome for your home or business.`,
  },
  {
    icon: Users,
    title: 'Owner on Every Job Site',
    description: 'James Turner, owner of Best Roofing Now, personally oversees every project. You work directly with the owner, not a salesperson.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Availability',
    description: 'Round-the-clock emergency services because Charlotte\'s best roofing company is always ready when you need us most.',
  },
];

// Best Roofing Company Comparison Checklist
const comparisonChecklist = [
  { criteria: '5-Star Google Reviews', us: true, description: `Perfect ${SITE_CONFIG.googleRating} rating with ${SITE_CONFIG.googleReviewCount}+ verified reviews` },
  { criteria: 'BBB A+ Rating', us: true, description: 'A+ accredited with zero complaints on file' },
  { criteria: 'Licensed & Insured', us: true, description: 'Fully NC licensed with comprehensive liability and workers comp' },
  { criteria: 'Manufacturer Certifications', us: true, description: 'GAF, CertainTeed SELECT, and Owens Corning certified' },
  { criteria: 'Written Warranties', us: true, description: 'Up to 50-year manufacturer warranties plus workmanship guarantee' },
  { criteria: 'Local Charlotte Presence', us: true, description: 'Located at 10130 Mallard Creek Rd, Charlotte NC 28262' },
  { criteria: 'Transparent Pricing', us: true, description: 'Detailed written estimates with no hidden fees or surprise costs' },
  { criteria: 'Free Inspections', us: true, description: 'Comprehensive inspections with drone imagery - always free' },
];

// Customer testimonials - enhanced for "best" positioning
const testimonials = [
  {
    name: 'Michael R.',
    location: 'Myers Park, Charlotte',
    rating: 5,
    text: 'After getting quotes from 5 different roofing companies in Charlotte, we chose Best Roofing Now and it was the best decision we made. Their quality, price, and professionalism were unmatched. Truly the best roofing company in Charlotte.',
  },
  {
    name: 'Sarah T.',
    location: 'Ballantyne, Charlotte',
    rating: 5,
    text: 'I searched for the best roofing company in Charlotte NC and every review pointed to Best Roofing Now. They delivered beyond our expectations - transparent pricing, beautiful work, and James was on-site every day. 10/10 recommend.',
  },
  {
    name: 'David L.',
    location: 'South End, Charlotte',
    rating: 5,
    text: 'As a property manager with 8 commercial buildings, I need the best roofer in Charlotte I can rely on. Best Roofing Now has handled all my properties with excellent results every single time. They are simply the best.',
  },
  {
    name: 'Jennifer K.',
    location: 'Huntersville, NC',
    rating: 5,
    text: 'James and his team at Best Roofing Now are the best roofers we have ever worked with. Veteran-owned, family values, and the quality speaks for itself. Our neighbors have already hired them too after seeing our new roof.',
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

// FAQs about best roofing company - enhanced with 8 targeted questions
const faqs = [
  {
    question: 'Who is the best roofing company in Charlotte NC?',
    answer:
      `Best Roofing Now is widely recognized as the best roofing company in Charlotte NC. With a perfect ${SITE_CONFIG.googleRating} Google rating from ${SITE_CONFIG.googleReviewCount}+ verified reviews, BBB A+ accreditation with zero complaints, and over ${SITE_CONFIG.roofsInstalled} completed roofing projects, our track record speaks for itself. As a veteran-owned company with certifications from CertainTeed, GAF, and Owens Corning, we combine integrity with expertise that Charlotte homeowners and businesses trust.`,
  },
  {
    question: 'What should I look for in the best roofing company?',
    answer:
      'The best roofing company should have: a perfect or near-perfect Google rating with numerous verified reviews, BBB A+ accreditation, proper state licensing and insurance, manufacturer certifications (which enable the best warranties), an established local presence, transparent pricing, free inspections, and a proven track record of completed projects. Best Roofing Now meets every single one of these criteria and goes further with owner involvement on every project.',
  },
  {
    question: 'Is Best Roofing Now the best rated roofer in Charlotte?',
    answer:
      `Yes, Best Roofing Now holds a perfect ${SITE_CONFIG.googleRating} Google rating with ${SITE_CONFIG.googleReviewCount}+ verified reviews, making us one of the highest-rated roofing companies in the Charlotte metro area. Combined with our BBB A+ rating (with zero complaints), manufacturer certifications from three major brands, and veteran-owned status, we consistently earn the trust and top ratings from Charlotte homeowners and businesses.`,
  },
  {
    question: 'How many 5-star reviews does Best Roofing Now have?',
    answer:
      `Best Roofing Now has ${SITE_CONFIG.googleReviewCount}+ five-star reviews on Google, maintaining a perfect ${SITE_CONFIG.googleRating} average rating. Every review comes from a verified Charlotte-area customer who experienced our quality workmanship, transparent pricing, and exceptional customer service firsthand. We encourage you to read our reviews on Google to see why Charlotte homeowners consistently call us the best roofing company in the area.`,
  },
  {
    question: 'What makes Best Roofing Now different from other Charlotte roofers?',
    answer:
      'Several factors set Best Roofing Now apart as Charlotte\'s best roofing company: (1) We are veteran-owned, bringing military values of integrity and excellence. (2) Owner James Turner personally oversees every project. (3) We are one of few Charlotte roofers certified by all three major manufacturers: CertainTeed, GAF, and Owens Corning. (4) Our BBB A+ rating has zero complaints. (5) We offer a free instant estimate tool - a Charlotte first. (6) Our family business values mean we treat every home like our own.',
  },
  {
    question: 'Does the best roofing company in Charlotte offer warranties?',
    answer:
      'Yes, Best Roofing Now offers industry-leading warranties that most Charlotte roofing companies cannot match. As a CertainTeed SELECT ShingleMaster, GAF Factory-Certified Contractor, and Owens Corning Preferred Contractor, we can offer manufacturer warranties up to 50 years on materials. We also provide our own workmanship warranty. Options like GAF Golden Pledge (50 years material + 25 years workmanship) are available because of our elite certification status.',
  },
  {
    question: 'How do I get a free roof inspection from the best roofer in Charlotte?',
    answer:
      `Getting a free roof inspection from Best Roofing Now is easy. Call us at ${SITE_CONFIG.phone}, visit our website to schedule online, or use our instant estimate tool for an immediate price range. Our certified inspectors will thoroughly examine your roof, provide detailed photos and a written report, and give you honest recommendations with no pressure to buy. Every inspection is 100% free with no obligation.`,
  },
  {
    question: 'Why are veteran-owned roofing companies considered more trustworthy?',
    answer:
      'Veteran-owned roofing companies like Best Roofing Now bring military values of discipline, integrity, attention to detail, and a commitment to excellence that directly translate to superior roofing work. Veterans are trained to follow strict procedures, maintain high standards, and never cut corners. Our military background means we treat every roofing project with the same seriousness and dedication that served us in the armed forces, resulting in consistently higher quality work and customer satisfaction.',
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
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/best-roofing-company-charlotte-nc`}
        pageName="Best Roofing Company Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

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
              <span className="text-sm font-semibold">#1 Rated | BBB A+ | Veteran-Owned | {SITE_CONFIG.roofsInstalled}+ Roofs</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Best Roofing Company <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Charlotte&apos;s #1 Rated Roofing Company | {SITE_CONFIG.googleRating} Google Rating | {SITE_CONFIG.googleReviewCount}+ 5-Star Reviews
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now has earned our reputation as the best roofing company in Charlotte NC through
              a perfect {SITE_CONFIG.googleRating} Google rating, BBB A+ accreditation with zero complaints,
              and over {SITE_CONFIG.roofsInstalled} successfully completed roofing projects. As a veteran-owned,
              family-operated company, owner James Turner personally oversees every project to ensure the highest
              quality results backed by industry-leading warranties from CertainTeed, GAF, and Owens Corning.
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
                {SITE_CONFIG.googleRating} Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Licensed &amp; Insured
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Why We&apos;re #1</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Best Roofing Now is Charlotte&apos;s Best Roofing Company
            </h2>
            <p className="text-gray text-lg">
              Our commitment to excellence has made us the most trusted and highest-rated roofing company
              in Charlotte NC. Here&apos;s the evidence that sets us apart from every competitor.
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

      {/* How to Identify the Best Roofing Company - Comparison Checklist */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <BadgeCheck className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Roofing Company Comparison</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How to Identify the Best Roofing Company in Charlotte NC
              </h2>
              <p className="text-gray text-lg">
                Use this checklist to compare roofing companies in Charlotte. Best Roofing Now meets every
                criteria that defines a truly excellent roofing company.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-4">
                <div className="grid grid-cols-12 gap-4 font-bold">
                  <div className="col-span-5 md:col-span-4">Criteria</div>
                  <div className="col-span-2 text-center">Best Roofing Now</div>
                  <div className="col-span-5 md:col-span-6">Our Credentials</div>
                </div>
              </div>
              {comparisonChecklist.map((item, index) => (
                <div
                  key={item.criteria}
                  className={`grid grid-cols-12 gap-4 p-4 items-center ${index % 2 === 0 ? 'bg-white' : 'bg-light'}`}
                >
                  <div className="col-span-5 md:col-span-4 font-semibold text-dark text-sm md:text-base">{item.criteria}</div>
                  <div className="col-span-2 text-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                  </div>
                  <div className="col-span-5 md:col-span-6 text-gray text-sm">{item.description}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray mb-4">
                Best Roofing Now checks every box. Can your current roofer say the same?
              </p>
              <EstimateButton variant="primary" size="lg" className="text-lg px-8">
                Get Your Free Estimate from Charlotte&apos;s Best
              </EstimateButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roofing Services from Charlotte&apos;s Best
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to complete replacements, the best roofing company in Charlotte NC handles
              all your roofing needs with unmatched quality and care.
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

          {/* Internal Links */}
          <div className="mt-10 text-center">
            <p className="text-gray mb-4">More from Charlotte&apos;s best roofing company:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/roofing-company-charlotte-nc" className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm">
                Roofing Company Charlotte <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/roofing-contractors-charlotte-nc" className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm">
                Roofing Contractors <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/commercial-roofing-charlotte-nc" className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm">
                Commercial Roofing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/metal-roofing-charlotte-nc" className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm">
                Metal Roofing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/emergency-roof-repair-charlotte-nc" className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm">
                Emergency Roof Repair <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Enhanced */}
      <section className="section bg-light">
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
                Proven Excellence: Why {SITE_CONFIG.roofsInstalled}+ Charlotte Families Trust Us
              </h2>
              <p className="text-gray text-lg mb-6">
                Being the best roofing company in Charlotte NC is not just a claim - it&apos;s a commitment we
                prove with every single project. Our track record of {SITE_CONFIG.roofsInstalled}+ completed roofs,
                a perfect {SITE_CONFIG.googleRating} rating, and BBB A+ accreditation speaks louder than any advertisement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <Award className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark">BBB A+ Accredited - Zero Complaints</h4>
                    <p className="text-sm text-gray">The highest rating possible from America&apos;s most trusted business watchdog</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <Star className="w-10 h-10 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark">{SITE_CONFIG.googleRating} Google Rating - {SITE_CONFIG.googleReviewCount}+ Reviews</h4>
                    <p className="text-sm text-gray">Every review from a verified Charlotte-area customer</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark">Veteran-Owned - Military Values</h4>
                    <p className="text-sm text-gray">Integrity, discipline, and excellence in every roofing project</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <BadgeCheck className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark">Triple Manufacturer Certified</h4>
                    <p className="text-sm text-gray">CertainTeed SELECT, GAF Factory-Certified, Owens Corning Preferred</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section - Enhanced */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">{SITE_CONFIG.googleReviewCount}+ 5-Star Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Charlotte Homeowners Call Us the Best Roofing Company
            </h2>
            <p className="text-gray text-lg">
              Read what real Charlotte homeowners and businesses say about working with the best roofing
              company in the area. Every review is from a verified customer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-light rounded-xl shadow-md p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-3 bg-light rounded-full px-6 py-3 shadow-md">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-bold text-dark">{SITE_CONFIG.googleRating} Average</span>
              <span className="text-gray">| {SITE_CONFIG.googleReviewCount}+ Google Reviews</span>
            </div>
            <div className="mt-4">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Read All Reviews
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Estimate CTA */}
      <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-bold">CHARLOTTE&apos;S FIRST</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Instant Roofing Estimate from Charlotte&apos;s Best
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get an instant price range for your roofing project in seconds. No waiting, no phone tag,
              no obligation. The best roofing company in Charlotte makes it easy.
            </p>
            <EstimateButton variant="white" size="lg" className="text-lg px-10">
              Get Your Instant Estimate
            </EstimateButton>
            <p className="text-white/60 text-sm mt-4">
              No obligation &bull; Instant results &bull; 100% free
            </p>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready to Work with Charlotte&apos;s Best Roofing Company?
              </h2>
              <p className="text-white/90">
                Experience the difference of working with a truly top-rated, veteran-owned roofing company.
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
              The Best Roofing Company Serving All of Charlotte
            </h2>
            <p className="text-gray text-lg">
              Charlotte&apos;s best roofing company serves homeowners and businesses throughout the Greater Charlotte metro area.
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
              Our Best Work Speaks for Itself
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of {SITE_CONFIG.roofsInstalled}+ completed roofing projects throughout Charlotte - proof that we are the best roofing company in the area.
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
                Best Roofing Company Charlotte NC FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about choosing the best roofing company in Charlotte NC.
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
        slug="best-roofing-company-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/best-roofing-company-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Experience the Best Roofing Company in Charlotte NC"
        subtitle={`Get a free, no-obligation estimate from our certified team. Discover why ${SITE_CONFIG.roofsInstalled}+ Charlotte homeowners and businesses have chosen Best Roofing Now as their trusted roofing company. Owner James Turner personally stands behind every project.`}
      />
    </>
  );
}
