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
  Hammer,
  FileCheck,
  DollarSign,
  Zap,
  Layers,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import EstimateButton from '@/components/estimate/EstimateButton';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { VoiceSearchFAQ } from '@/components/seo/PeopleAlsoAsk';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES, CITY_COORDINATES } from '@/lib/images';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { GeoTaggedProjectImage } from '@/components/ui/GeoTaggedProjectImage';
import { getGeoImages } from '@/lib/geo-images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Charlotte NC | 500+ Roofs',
  description:
    'Best Roofing Now is Charlotte NC\'s #1 rated roofing company. 5.0 Google rating, BBB A+ rated, veteran-owned. Residential & commercial roofing, repairs, replacements, inspections. 500+ roofs completed. Free estimates! Call (704) 605-6047.',
  keywords: [
    'roofing charlotte nc',
    'roofing services charlotte nc',
    'charlotte nc roofing services',
    'roofing in charlotte north carolina',
    'charlotte roofing solutions',
    'full service roofing charlotte',
    'roof services charlotte nc',
    'residential commercial roofing charlotte',
    'roofing work charlotte nc',
    'professional roofing charlotte nc',
    'best roofing company charlotte nc',
    'roof replacement charlotte nc',
    'roof repair charlotte nc',
    'roof inspection charlotte nc',
    'new roof cost charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Charlotte NC | #1 Rated Roofer | Best Roofing Now',
    description:
      '#1 rated roofing company in Charlotte NC. BBB A+ rated, veteran-owned with 500+ roofs completed. Complete residential & commercial roofing services. Free estimates!',
    url: `${SITE_CONFIG.url}/roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional roofing Charlotte NC - Best Roofing Now team completing a roof installation',
      },
    ],
  },
};

// Comprehensive roofing services
const roofingServices = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Charlotte homes including asphalt shingles, architectural shingles, metal roofing, tile, and slate. We handle everything from starter homes to luxury estates in Myers Park and Ballantyne.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, built-up roofing, and commercial roof repairs for Charlotte businesses, offices, retail centers, and industrial facilities of all sizes.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, flashing issues, damaged vents, sagging areas, and all types of residential and commercial roof damage in Charlotte.',
    href: '/services/roof-repair',
  },
  {
    icon: Hammer,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials and manufacturer-backed warranties up to 50 years. We handle permits, disposal, and final inspection.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections with detailed reports, high-resolution photos, drone imagery, and honest assessments. Perfect before buying or selling a Charlotte home.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: '24/7 emergency storm damage restoration with full insurance claim assistance. Charlotte experiences frequent hail, wind, and severe thunderstorms that damage roofs.',
    href: '/services/storm-damage',
  },
  {
    icon: FileCheck,
    title: 'Insurance Claims Assistance',
    description: 'Expert help navigating insurance claims for storm damage and covered repairs. We document damage, meet with adjusters, and advocate for fair settlements on your behalf.',
    href: '/services/storm-damage',
  },
  {
    icon: Shield,
    title: 'Roof Maintenance Programs',
    description: 'Preventive maintenance programs with bi-annual inspections to extend roof life, catch small issues before they grow, and maintain your manufacturer warranty coverage.',
    href: '/services/roof-repair',
  },
];

// Why Charlotte homeowners choose us
const whyChooseUs = [
  {
    icon: Star,
    title: '#1 Rated in Charlotte',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews make us the top-rated roofing company in Charlotte NC.`,
  },
  {
    icon: Award,
    title: 'BBB A+ Accredited',
    description: 'Better Business Bureau A+ rating with zero complaints. We stand behind every job we do.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned & Operated',
    description: 'Military values of integrity, excellence, and service guide everything we do at Best Roofing Now.',
  },
  {
    icon: CheckCircle,
    title: 'Fully Licensed & Insured',
    description: 'NC licensed roofing contractor with comprehensive liability and workers compensation insurance.',
  },
  {
    icon: Users,
    title: 'Manufacturer Certified',
    description: 'CertainTeed ShingleMaster, GAF Factory-Certified Contractor.',
  },
  {
    icon: ThumbsUp,
    title: 'Transparent Pricing',
    description: 'Detailed written estimates with no hidden fees. We honor our quotes and never surprise you.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock availability for roofing emergencies throughout Charlotte and surrounding areas.',
  },
  {
    icon: FileCheck,
    title: 'Industry-Leading Warranties',
    description: 'Up to 50-year manufacturer warranties plus our own workmanship guarantee on every project.',
  },
];

// Charlotte roofing cost data
const costOverview = [
  {
    service: 'Roof Repair',
    range: '$200 - $1,500',
    details: 'Leak fixes, missing shingles, flashing repair',
  },
  {
    service: 'Partial Roof Replacement',
    range: '$3,000 - $8,000',
    details: 'Section replacement, valley repair, chimney re-flash',
  },
  {
    service: 'Full Roof Replacement (Shingle)',
    range: '$8,000 - $18,000',
    details: 'Architectural shingles, full tear-off, new underlayment',
  },
  {
    service: 'Full Roof Replacement (Premium)',
    range: '$15,000 - $35,000',
    details: 'Metal, tile, slate, or designer shingles',
  },
  {
    service: 'Roof Inspection',
    range: 'FREE',
    details: 'Full inspection, photos, written report, honest assessment',
  },
  {
    service: 'Storm Damage Repair',
    range: 'Often $0 (Insurance)',
    details: 'Insurance claim assistance, documentation, adjuster meeting',
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
  'Providence Plantation',
  'Stonehaven',
  'Sharon Woods',
  'Foxcroft',
  'Steele Creek',
  'Highland Creek',
  'Piper Glen',
  'Ardrey Kell',
  'Marvin Ridge',
  'Berewick',
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

// Customer testimonials
const testimonials = [
  {
    name: 'Michael R.',
    location: 'Myers Park, Charlotte',
    rating: 5,
    text: 'Best Roofing Now replaced our entire roof after storm damage. They handled the insurance claim, kept us informed throughout the process, and the final result exceeded our expectations. Truly the best roofing company in Charlotte!',
  },
  {
    name: 'Sarah T.',
    location: 'Ballantyne, Charlotte',
    rating: 5,
    text: 'We got quotes from several roofing companies in Charlotte and Best Roofing Now stood out for their professionalism and transparent pricing. No surprise charges, excellent communication, and beautiful workmanship.',
  },
  {
    name: 'David & Linda K.',
    location: 'Dilworth, Charlotte',
    rating: 5,
    text: 'After years of dealing with roof leaks, we finally found a roofing company we trust. Their team diagnosed the problem correctly the first time and fixed it permanently. Highly recommend their roofing services!',
  },
];

// PAA-targeting FAQs - 8 questions for featured snippet optimization
const faqs = [
  {
    question: 'How much does a new roof cost in Charlotte NC?',
    answer:
      'A new roof in Charlotte NC typically costs between $8,000 and $18,000 for standard architectural shingles on an average-sized home (1,500-2,500 sq ft). Premium materials like metal roofing range from $15,000 to $35,000. Factors that affect cost include roof size, pitch, material choice, number of layers to remove, and structural repairs needed. Best Roofing Now provides free, detailed estimates with transparent pricing and no hidden fees. Many Charlotte homeowners also qualify for insurance coverage if their roof was damaged by hail or storms.',
  },
  {
    question: 'What is the best roofing company in Charlotte?',
    answer:
      `Best Roofing Now is consistently rated the #1 roofing company in Charlotte NC. With a perfect ${SITE_CONFIG.googleRating} Google rating from ${SITE_CONFIG.googleReviewCount}+ verified reviews, BBB A+ accreditation with zero complaints, and veteran-owned values of integrity and excellence, Best Roofing Now has earned the trust of over ${SITE_CONFIG.roofsInstalled} Charlotte homeowners. We are certified by CertainTeed (ShingleMaster), GAF (Factory-Certified), and Owens Corning (Preferred Contractor), allowing us to offer industry-leading warranties up to 50 years. Call ${SITE_CONFIG.phone} for a free estimate.`,
  },
  {
    question: 'How often should you replace your roof in North Carolina?',
    answer:
      'In North Carolina, most asphalt shingle roofs last 20-25 years, though Charlotte\'s hot summers, heavy rainfall, and occasional hail storms can shorten that lifespan. Three-tab shingles may only last 15-20 years, while architectural shingles typically last 25-30 years. Metal roofs can last 40-70 years, and tile or slate roofs can exceed 50 years. Signs you need replacement include curling or missing shingles, granule loss in gutters, visible daylight through the roof deck, and your roof approaching 20 years old. Best Roofing Now offers free inspections to assess your roof\'s condition and remaining life.',
  },
  {
    question: 'Does Charlotte get enough hail to damage roofs?',
    answer:
      'Yes, Charlotte NC experiences significant hail storms, particularly during spring and summer months (March through August). The Charlotte metro area averages 2-4 hail events per year, with some storms producing hail up to golf ball size. Hail damage can crack shingles, dislodge granules, dent flashing, and compromise your roof\'s waterproof barrier. Even small hail (pea-sized) can cause cumulative damage over time. Best Roofing Now provides free hail damage inspections and helps Charlotte homeowners file insurance claims when damage is found. If you suspect hail damage, call us at ' + SITE_CONFIG.phone + ' for a free assessment.',
  },
  {
    question: 'How do I find a reliable roofer in Charlotte NC?',
    answer:
      'To find a reliable roofer in Charlotte NC, follow these steps: (1) Verify they hold a valid NC General Contractor license, (2) Check their BBB rating and Google reviews - look for companies with 4.5+ stars and 50+ reviews, (3) Ask for proof of liability insurance and workers compensation coverage, (4) Get at least 3 written estimates for comparison, (5) Ask about manufacturer certifications like GAF, CertainTeed, or Owens Corning, (6) Verify they have a local office and physical address in Charlotte. Best Roofing Now meets all these criteria with our BBB A+ rating, ' + SITE_CONFIG.googleReviewCount + '+ five-star reviews, full licensing, and Charlotte office at ' + SITE_CONFIG.address.full + '.',
  },
  {
    question: 'What type of roof is best for Charlotte NC weather?',
    answer:
      'The best roof type for Charlotte NC weather depends on your budget and priorities. Architectural asphalt shingles are the most popular choice, offering excellent wind resistance (up to 130 mph), impact resistance from hail, and a 25-30 year lifespan at an affordable price point. Metal roofing is growing in popularity for Charlotte homes because it handles heat, wind (up to 140 mph), and hail exceptionally well while lasting 40-70 years. For luxury homes, synthetic slate or tile provides superior durability. Best Roofing Now recommends shingles rated for Class 4 impact resistance for Charlotte homes due to our hail risk. We help homeowners choose the right material based on their home style, budget, and HOA requirements.',
  },
  {
    question: 'Do I need a permit for a new roof in Charlotte NC?',
    answer:
      'Yes, Charlotte NC requires a building permit for roof replacement projects. The City of Charlotte\'s Planning, Design & Development department issues roofing permits, which typically cost $100-$300 depending on the project scope. The permit ensures work meets the NC Residential Building Code and local Charlotte building standards. As a licensed roofing contractor, Best Roofing Now handles all permit applications, scheduling of inspections, and final sign-off as part of our roof replacement service. You don\'t need to worry about any paperwork - we take care of everything from start to finish.',
  },
  {
    question: 'How long does roof replacement take in Charlotte?',
    answer:
      'Most residential roof replacements in Charlotte are completed in 1-3 days, depending on size and complexity. A standard 2,000 sq ft home with a straightforward gable roof typically takes 1-2 days. Larger homes (3,000+ sq ft), steep or complex roof designs, and projects requiring structural repairs may take 3-5 days. Factors that can extend the timeline include weather delays (Charlotte receives 43 inches of rain annually), multiple roof layers requiring removal, extensive decking replacement, and custom material installations. Best Roofing Now provides a detailed timeline before starting work and keeps you informed of progress throughout the project.',
  },
];

export default function RoofingCharlotteNCPage() {
  const inlineImages = getGeoImages({ pageType: 'main-service-area', city: 'Charlotte', count: 3, seed: 'roofing-charlotte-nc-inline' });

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Charlotte NC', url: `${SITE_CONFIG.url}/roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-charlotte-nc`}
        pageName="Roofing Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'Who is the best roofing company in Charlotte NC?',
            answer: 'Best Roofing Now is Charlotte\'s #1 rated roofing company with 5-star Google reviews, BBB A+ accreditation, and veteran-owned values. They are certified by CertainTeed, GAF, and Owens Corning for premium warranties up to 50 years. Over 500 Charlotte roofs completed. Call (704) 605-6047 for a free estimate.',
            speakableAnswer: 'Best Roofing Now is Charlotte\'s #1 rated roofing company. 5-star rated, BBB A+, veteran-owned with 500+ roofs completed. Call 704-605-6047.',
          },
          {
            question: 'What roofing services are available in Charlotte NC?',
            answer: 'Charlotte roofing services from Best Roofing Now include: roof repairs, complete roof replacement, roof inspections, storm damage restoration, emergency 24/7 repairs, metal roofing, commercial roofing, gutter installation, and insurance claim assistance. They work with all roof types - shingles, metal, flat, tile, and slate.',
            speakableAnswer: 'Best Roofing Now offers roof repair, replacement, inspections, storm damage restoration, 24/7 emergency service, and insurance help in Charlotte.',
          },
          {
            question: 'How much does roofing cost in Charlotte NC?',
            answer: 'Roofing costs in Charlotte vary by project. Repairs cost $200-$5,000. Full roof replacement averages $8,000-$25,000 for most homes. Best Roofing Now provides free estimates with transparent pricing and offers financing options. Storm damage is often covered by insurance.',
            speakableAnswer: 'Roofing in Charlotte costs $200 to $5,000 for repairs, $8,000 to $25,000 for replacement. Best Roofing Now offers free estimates and financing.',
          },
          {
            question: 'Does Best Roofing Now offer free roof inspections in Charlotte?',
            answer: 'Yes, Best Roofing Now provides completely free roof inspections throughout Charlotte NC and surrounding areas. Their certified inspectors examine your roof, document issues with photos, and provide honest recommendations. There is no obligation to proceed - they earn your business through quality and transparency.',
            speakableAnswer: 'Yes, Best Roofing Now offers free roof inspections in Charlotte. They document issues with photos and provide honest recommendations with no obligation.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Professional roofing Charlotte NC - Best Roofing Now team installing a new roof"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">#1 Rated Roofing Company in Charlotte | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Charlotte&apos;s #1 rated roofing company with {SITE_CONFIG.roofsInstalled}+ roofs completed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now delivers premium roofing services throughout Charlotte NC. From expert repairs
              to complete replacements, our certified team provides exceptional quality backed by industry-leading
              warranties, a BBB A+ rating, and {SITE_CONFIG.googleReviewCount}+ five-star reviews. As a veteran-owned
              company, we bring military-grade discipline and integrity to every roofing project.
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
                {SITE_CONFIG.googleRating} Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
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

      {/* Services Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Roofing Services in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to complete roof replacements, Best Roofing Now handles all your roofing needs
              with expert craftsmanship and premium materials. We serve residential and commercial properties
              throughout the Charlotte metro area, including{' '}
              <Link href="/roof-replacement-charlotte-nc" className="text-primary hover:text-accent underline">roof replacements</Link>,{' '}
              <Link href="/roof-repair-charlotte-nc" className="text-primary hover:text-accent underline">roof repairs</Link>,{' '}
              and <Link href="/services/roof-inspection" className="text-primary hover:text-accent underline">inspections</Link>.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roofingServices.map((service) => (
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

      {/* Charlotte Roofing Cost Overview Section */}
      <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-bold">TRANSPARENT PRICING</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Charlotte Roofing Cost Overview
            </h2>
            <p className="text-xl text-white/90">
              Know what to expect before you call. Here are typical roofing costs in Charlotte NC for 2025.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {costOverview.map((item) => (
              <div key={item.service} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold mb-2 text-white">{item.service}</h3>
                <p className="text-2xl font-bold text-accent mb-2">{item.range}</p>
                <p className="text-white/70 text-sm">{item.details}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <EstimateButton variant="white" size="lg" className="text-lg px-10">
              Get Your Instant Estimate
            </EstimateButton>
            <p className="text-white/60 text-sm mt-4">
              No obligation - Instant results - 100% free
            </p>
          </div>
        </div>
      </section>

      {/* Why Charlotte Homeowners Choose Best Roofing Now Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-4">
                When you need roofing services in Charlotte NC, you deserve a company that puts quality
                and integrity first. Best Roofing Now has earned our reputation as Charlotte&apos;s #1 rated
                roofing company through exceptional workmanship, honest assessments, and dedicated customer service.
              </p>

              {/* Social Proof Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <p className="text-2xl font-bold text-primary">{SITE_CONFIG.googleReviewCount}+</p>
                  <p className="text-xs text-gray">Google Reviews</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <p className="text-2xl font-bold text-primary">{SITE_CONFIG.googleRating}</p>
                  <p className="text-xs text-gray">Star Rating</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <p className="text-2xl font-bold text-primary">{SITE_CONFIG.roofsInstalled}+</p>
                  <p className="text-xs text-gray">Roofs Installed</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <p className="text-2xl font-bold text-primary">A+</p>
                  <p className="text-xs text-gray">BBB Rating</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.slice(0, 6).map((item) => (
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
              {inlineImages[0] && (
                <GeoTaggedProjectImage
                  image={inlineImages[0]}
                  width={600}
                  height={450}
                  className="rounded-xl shadow-lg"
                  context={{ serviceName: 'Roofing Charlotte NC' }}
                  includeSchema={true}
                  schemaPageUrl={`${SITE_CONFIG.url}/roofing-charlotte-nc`}
                />
              )}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-dark">#1 Rated</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ 5-Star Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional trust factors */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {whyChooseUs.slice(6, 8).map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray">{item.description}</p>
                </div>
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
                Need Quality Roofing in Charlotte NC?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte&apos;s #1 rated roofing company.
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

      {/* Detailed Roofing Services Content Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Charlotte NC Roofing: Everything You Need to Know
            </h2>

            <div className="space-y-8">
              {/* Residential Roofing */}
              <div className="bg-light rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Home className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">Residential Roofing in Charlotte NC</h3>
                </div>
                <div className="md:flex gap-6">
                  <div className="flex-1">
                    <p className="text-gray mb-4">
                      Charlotte&apos;s diverse neighborhoods - from the historic homes of Dilworth and Myers Park to the newer
                      construction in Ballantyne and Steele Creek - each have unique roofing requirements. Best Roofing Now
                      specializes in all residential roofing systems including architectural asphalt shingles, standing seam
                      metal roofing, synthetic slate, cedar shakes, and tile roofing. We understand Charlotte&apos;s HOA
                      requirements and can help you choose materials that meet both architectural guidelines and your budget.
                    </p>
                    <Link href="/services/residential-roofing" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent">
                      Explore Residential Roofing Services <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  {inlineImages[1] && (
                    <div className="mt-4 md:mt-0 md:w-48 flex-shrink-0">
                      <GeoTaggedProjectImage
                        image={inlineImages[1]}
                        width={192}
                        height={144}
                        className="rounded-lg w-full object-cover"
                        context={{ serviceName: 'Residential roofing' }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Commercial Roofing */}
              <div className="bg-light rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">Commercial Roofing in Charlotte NC</h3>
                </div>
                <p className="text-gray mb-4">
                  Charlotte&apos;s booming commercial real estate market demands reliable roofing contractors who understand
                  the unique challenges of commercial buildings. We install and maintain TPO, EPDM, PVC, modified bitumen,
                  built-up roofing (BUR), and commercial metal roofing systems. Whether you own a retail center in SouthPark,
                  an office building Uptown, or a warehouse in Steele Creek, our{' '}
                  <Link href="/commercial-roofing-charlotte-nc" className="text-primary hover:text-accent underline">commercial roofing team</Link>{' '}
                  delivers quality results on schedule.
                </p>
                <Link href="/services/commercial-roofing" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent">
                  Explore Commercial Roofing Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Roof Repair */}
              <div className="bg-light rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">Roof Repair in Charlotte NC</h3>
                </div>
                <p className="text-gray mb-4">
                  Charlotte&apos;s weather can be tough on roofs. From summer thunderstorms and hail to winter ice and wind,
                  damage can occur at any time. Our{' '}
                  <Link href="/roof-repair-charlotte-nc" className="text-primary hover:text-accent underline">Charlotte roof repair services</Link>{' '}
                  cover leak detection and repair, missing or damaged shingle replacement, flashing repair, pipe boot replacement,
                  ridge cap repair, valley repair, soffit and fascia repair, and emergency tarping. We diagnose the problem correctly
                  the first time and provide a permanent fix - not a temporary patch.
                </p>
                <Link href="/services/roof-repair" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent">
                  Learn About Roof Repair <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Roof Replacement */}
              <div className="bg-light rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Hammer className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">Roof Replacement in Charlotte NC</h3>
                </div>
                <p className="text-gray mb-4">
                  When repair is no longer cost-effective, our{' '}
                  <Link href="/roof-replacement-charlotte-nc" className="text-primary hover:text-accent underline">Charlotte roof replacement service</Link>{' '}
                  provides a complete solution. We handle permit acquisition, full tear-off of old materials, deck inspection and repair,
                  installation of ice and water shield, synthetic underlayment, new drip edge, new shingles or your chosen material,
                  proper ventilation, and final cleanup. Our manufacturer certifications allow us to offer extended warranties up to
                  50 years, including GAF Golden Pledge and CertainTeed SureStart PLUS coverage.
                </p>
                <Link href="/roof-replacement-charlotte-nc" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent">
                  Learn About Roof Replacement <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Roof Inspection */}
              <div className="bg-light rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-dark">Roof Inspection in Charlotte NC</h3>
                </div>
                <p className="text-gray mb-4">
                  Our free roof inspections include a thorough examination of shingles, flashing, vents, gutters, soffit,
                  fascia, and interior attic spaces. We use drone technology for hard-to-reach areas and provide a detailed
                  written report with high-resolution photos documenting our findings. Whether you&apos;re buying a home, selling
                  a home, or just want to know your roof&apos;s condition, our honest inspections give you the information you
                  need to make informed decisions.
                </p>
                <Link href="/services/roof-inspection" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent">
                  Schedule Free Inspection <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
              Roofing Services Across Greater Charlotte
            </h2>
            <p className="text-gray text-lg">
              Best Roofing Now proudly serves homeowners and businesses throughout the Charlotte metro area
              and surrounding communities in both North Carolina and South Carolina.
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

      {/* Customer Testimonials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 fill-primary" aria-hidden="true" />
              <span className="text-sm font-semibold">Customer Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Charlotte Homeowners Say About Our Roofing
            </h2>
            <p className="text-gray text-lg">
              With {SITE_CONFIG.googleReviewCount}+ five-star reviews, our commitment to quality roofing and
              customer satisfaction speaks for itself.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Read More Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certified Roofing Excellence in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our certifications from industry-leading manufacturers mean you get premium materials backed by
              extended warranty coverage that protects your investment for decades.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">CertainTeed ShingleMaster</h3>
              <p className="text-gray text-sm">
                Top-tier certification with access to SureStart Plus extended warranties and specialized training.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">GAF Factory-Certified</h3>
              <p className="text-gray text-sm">
                Authorized to offer GAF&apos;s Golden Pledge warranty - the strongest in the roofing industry.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">BBB A+ Accredited</h3>
              <p className="text-gray text-sm">
                Better Business Bureau A+ rating with zero complaints. Committed to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geo-Tagged Project Gallery */}
      <GeoProjectGalleryStrip
        pageType="main-service-area"
        city="Charlotte"
        slug="roofing-charlotte-nc"
        count={8}
        title="Recent Roofing Projects in Charlotte NC"
        subtitle="Browse our portfolio of completed roofing projects throughout the Charlotte area."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-charlotte-nc`}
        includeSchema={true}
      />

      {/* FAQ Section with Voice Search Optimization */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roofing Charlotte NC FAQs
              </h2>
              <p className="text-gray text-lg">
                Quick answers to your most common roofing questions in Charlotte NC.
              </p>
            </div>
            {/* Voice Search Optimized FAQ Component */}
            <VoiceSearchFAQ
              faqs={faqs}
              city="Charlotte"
              className="bg-white rounded-xl p-6"
            />
          </div>
        </div>
      </section>

      {/* Related Roofing Pages - Strong Internal Linking */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Explore More Roofing Services in Charlotte
            </h2>
            <p className="text-gray">
              Find the specific roofing service you need from Charlotte&apos;s #1 rated roofing company.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/roof-replacement-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Roof Replacement Charlotte NC
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Roof Repair Charlotte NC
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roofers-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Roofers Charlotte NC
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roofing-contractor-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Roofing Contractor Charlotte NC
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/commercial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing Charlotte NC
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/metal-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Metal Roofing Charlotte NC
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/locations/charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Charlotte NC Service Area
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service City Links - Internal Linking */}
      <ServiceCityLinks
        city="Charlotte"
        citySlug="charlotte-nc"
        title="Complete Roofing Services in Charlotte NC"
        subtitle="From repairs to replacements, we offer comprehensive roofing solutions for Charlotte homes and businesses."
      />

      {/* Related Cities Links */}
      <RelatedCitiesLinks
        currentCity="Charlotte"
        service="Roofing Services"
        serviceSlug="roofing"
        title="Roofing Services in Nearby Cities"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Roofing"

      />

      <CTASection
        title="Ready for Quality Roofing in Charlotte NC?"
        subtitle="Get a free, no-obligation estimate from Charlotte's #1 rated roofing company. Our certified team will assess your roof and provide honest recommendations tailored to your needs and budget."
      />
    </>
  );
}
