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
  Heart,
  Hammer,
  DollarSign,
  FileCheck,
  Zap,
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
import { VoiceSearchFAQ } from '@/components/seo/PeopleAlsoAsk';
import { Button } from '@/components/ui/Button';
import { ServiceCityLinks } from '@/components/ui/ServiceCityLinks';
import { RelatedCitiesLinks } from '@/components/ui/RelatedCitiesLinks';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roofing Company Charlotte NC',
  description:
    'Best Roofing Now is Charlotte NC\'s top-rated veteran-owned roofing company. 5.0 Google rating, 62+ reviews, BBB A+ rated, 500+ roofs installed. GAF, CertainTeed & Owens Corning certified. Free estimates for residential & commercial roofing.',
  keywords: [
    'roofing company charlotte nc',
    'veteran owned roofing company charlotte',
    'family owned roofing company charlotte nc',
    'established roofing company charlotte',
    'roofing business charlotte nc',
    'local roofing company charlotte',
    'trusted roofing company charlotte nc',
    'roofing companies in charlotte',
    'charlotte roofing company near me',
    'reputable roofing company charlotte nc',
    'top rated roofing company charlotte nc',
    'bbb a+ roofing company charlotte',
    'roofing company lake norman',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-company-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Company Charlotte NC | Veteran-Owned | 5-Star Rated | Best Roofing Now',
    description:
      'Meet Best Roofing Now - Charlotte\'s veteran-owned, family-operated roofing company. 5.0 Google rating, BBB A+ rated, 500+ roofs installed. Free estimates.',
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
    title: 'Veteran-Owned & Operated',
    description: 'Proudly veteran-owned and operated with military values of integrity, discipline, and excellence in every project.',
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited by the Better Business Bureau with an A+ rating and zero complaints on file.',
  },
  {
    icon: Star,
    title: `${SITE_CONFIG.roofsInstalled}+ Roofs Completed`,
    description: `Over ${SITE_CONFIG.roofsInstalled} successful roofing projects completed throughout the Charlotte metro area and Lake Norman region.`,
  },
  {
    icon: BadgeCheck,
    title: 'Manufacturer Certified',
    description: 'Certified by CertainTeed, GAF, and Owens Corning for premium warranty coverage and expert installation.',
  },
];

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete residential roofing solutions including shingle, metal, and tile roofing systems for Charlotte homes.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, and comprehensive commercial roofing services for Charlotte businesses.',
    href: '/commercial-roofing-charlotte-nc',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, damaged shingles, and all roofing issues with same-day service available.',
    href: '/roof-repair-charlotte-nc',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Complete tear-off and replacement with premium materials and extended manufacturer warranties.',
    href: '/roof-replacement-charlotte-nc',
  },
  {
    icon: Search,
    title: 'Free Roof Inspection',
    description: 'Comprehensive free inspections with detailed reports, drone imagery, and honest recommendations.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: 'Emergency storm damage restoration and full insurance claim assistance for Charlotte homeowners.',
    href: '/storm-damage-roof-repair-charlotte-nc',
  },
];

// Why choose our company - enhanced
const whyChooseUs = [
  {
    icon: ThumbsUp,
    title: 'Proven Track Record',
    description: `${SITE_CONFIG.googleRating} Google rating with ${SITE_CONFIG.googleReviewCount}+ verified five-star reviews from satisfied Charlotte homeowners and businesses.`,
  },
  {
    icon: Heart,
    title: 'Family Business Values',
    description: 'A family-owned roofing company serving Charlotte and Lake Norman. Owner James Turner personally oversees every project.',
  },
  {
    icon: Briefcase,
    title: 'Professional Team',
    description: 'Experienced, background-checked crews who treat your property with the utmost respect and care.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofing company with comprehensive liability and workers comp insurance for your protection.',
  },
  {
    icon: Users,
    title: 'Local Ownership',
    description: 'Locally owned and operated by the Turner family - we live and work in the communities we serve.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when you need us most. Call anytime, day or night.',
  },
];

// What Makes Best Roofing Now Different
const differentiators = [
  {
    icon: Shield,
    title: 'Veteran-Owned & Operated',
    description: 'Founded on military values of integrity, discipline, and attention to detail. We bring that same commitment to every roofing project in Charlotte.',
  },
  {
    icon: Heart,
    title: 'Family Business Serving Lake Norman & Charlotte',
    description: 'Best Roofing Now is a family business with deep roots in the Charlotte and Lake Norman communities. We treat every customer like a neighbor.',
  },
  {
    icon: Users,
    title: 'Owner on Every Job Site',
    description: 'James Turner, owner of Best Roofing Now, personally oversees every roofing project. You won\'t deal with salespeople - you\'ll work directly with the owner.',
  },
  {
    icon: Star,
    title: `${SITE_CONFIG.googleRating} Google Rating with ${SITE_CONFIG.googleReviewCount}+ Reviews`,
    description: `Our perfect ${SITE_CONFIG.googleRating} Google rating across ${SITE_CONFIG.googleReviewCount}+ verified reviews reflects our unwavering commitment to customer satisfaction.`,
  },
  {
    icon: Award,
    title: 'BBB A+ Rated with Zero Complaints',
    description: `Better Business Bureau A+ accredited with zero complaints. We've earned the highest possible rating through honest business practices.`,
  },
  {
    icon: Hammer,
    title: `${SITE_CONFIG.roofsInstalled}+ Roofs Installed`,
    description: `With over ${SITE_CONFIG.roofsInstalled} roofs completed across Charlotte and surrounding areas, our experience ensures quality results on every project.`,
  },
];

// Project portfolio highlights
const projectHighlights = [
  {
    title: 'Residential Projects',
    description: 'Complete roof replacements, repairs, and new construction for Charlotte homes in every neighborhood from Myers Park to Ballantyne.',
    stats: '400+',
    label: 'Homes Protected',
    image: IMAGES.realProjects.certainteed1,
  },
  {
    title: 'Commercial Projects',
    description: 'Office buildings, retail centers, warehouses, churches, and multi-family properties throughout the Charlotte metro.',
    stats: '100+',
    label: 'Businesses Served',
    image: IMAGES.commercial.office,
  },
];

// Certification badges
const certifications = [
  {
    name: 'GAF Factory-Certified Contractor',
    description: 'Authorized to offer GAF\'s premium warranty coverage including Golden Pledge and Silver Pledge warranties.',
  },
  {
    name: 'CertainTeed ShingleMaster',
    description: 'Highest level of CertainTeed certification for expert installation and premium warranty eligibility.',
  },
  {
    name: 'BBB A+ Accredited',
    description: 'Better Business Bureau A+ rating with zero complaints, demonstrating our commitment to customer satisfaction.',
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

// FAQs about the company - enhanced with 8 targeted questions
const faqs = [
  {
    question: 'What is the top-rated roofing company in Charlotte NC?',
    answer:
      `Best Roofing Now is consistently rated as the top roofing company in Charlotte NC, holding a perfect ${SITE_CONFIG.googleRating} Google rating with ${SITE_CONFIG.googleReviewCount}+ verified reviews. We are also BBB A+ accredited with zero complaints, and have completed over ${SITE_CONFIG.roofsInstalled} roofing projects throughout Charlotte and the Lake Norman region. Our veteran-owned values and manufacturer certifications from CertainTeed, GAF, and Owens Corning set us apart from every other roofing company in Charlotte.`,
  },
  {
    question: 'How do I choose between roofing companies in Charlotte?',
    answer:
      'When comparing roofing companies in Charlotte NC, look for these key factors: BBB accreditation and rating, verified Google reviews (quality matters more than quantity), proper NC licensing and insurance, manufacturer certifications (which enable better warranties), years of experience, transparent pricing, and whether the owner is involved in your project. Best Roofing Now meets all these criteria - and our owner James Turner personally oversees every project.',
  },
  {
    question: 'Is Best Roofing Now a local Charlotte roofing company?',
    answer:
      'Yes, Best Roofing Now is a locally owned and operated roofing company based in Charlotte NC. Our office is located at 10130 Mallard Creek Rd, Suite 300, Charlotte, NC 28262. We are a family business serving Charlotte and the Lake Norman region, and our owner James Turner lives in the community. Unlike out-of-town storm chasers, we are permanent members of the Charlotte business community and stand behind every roof we install.',
  },
  {
    question: 'What services does Best Roofing Now offer?',
    answer:
      'Best Roofing Now is a full-service roofing company offering residential roofing, commercial roofing, roof repair, roof replacement, roof inspection, storm damage restoration, emergency roofing services, metal roofing, flat roofing, gutter services, and siding installation. We work with all roofing materials including asphalt shingles, metal, tile, TPO, EPDM, PVC, modified bitumen, and slate. We also provide free roof inspections and assist with insurance claims.',
  },
  {
    question: 'Does Best Roofing Now offer financing?',
    answer:
      'Yes, Best Roofing Now offers flexible financing options for roofing projects in Charlotte NC. We understand that a new roof is a significant investment, and we work with multiple financing partners to offer competitive rates and terms that fit your budget. We also accept all major credit cards and can work with your insurance company on covered claims. Contact us for details on current financing offers.',
  },
  {
    question: 'What areas does your roofing company serve?',
    answer:
      'Best Roofing Now serves all of Charlotte NC and the Greater Charlotte metro area including Myers Park, Dilworth, Ballantyne, South End, NoDa, University City, SouthPark, and all Charlotte neighborhoods. We also serve the Lake Norman communities of Huntersville, Cornelius, Davidson, and Mooresville, plus Matthews, Mint Hill, Pineville, Concord, Gastonia, and into South Carolina including Rock Hill and Fort Mill.',
  },
  {
    question: 'How long has Best Roofing Now been in Charlotte?',
    answer:
      `Best Roofing Now was founded in ${SITE_CONFIG.founded} and has been serving Charlotte and the surrounding communities for ${SITE_CONFIG.yearsInBusiness}+ years. In that time, we have completed over ${SITE_CONFIG.roofsInstalled} roofing projects, earned a ${SITE_CONFIG.googleRating} Google rating with ${SITE_CONFIG.googleReviewCount}+ reviews, achieved BBB A+ accreditation, and become certified installers for CertainTeed, GAF, and Owens Corning. Our growth is a testament to our commitment to quality and customer satisfaction.`,
  },
  {
    question: 'What makes a roofing company trustworthy?',
    answer:
      'A trustworthy roofing company should have: a verifiable physical address (not just a P.O. box), proper state licensing and insurance, BBB accreditation, positive Google reviews from real customers, manufacturer certifications, transparent written estimates, and a history of completed projects in your area. Best Roofing Now checks every box - we are BBB A+ rated, have a perfect 5.0 Google rating, hold certifications from three major manufacturers, and our owner personally stands behind every project.',
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
      <LocalBusinessSchema includeRating={true} />
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
              <span className="text-sm font-semibold">Veteran-Owned | BBB A+ Rated | {SITE_CONFIG.roofsInstalled}+ Roofs Installed</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Company <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Charlotte&apos;s Most Trusted Roofing Company with {SITE_CONFIG.roofsInstalled}+ Roofs Completed &amp; a {SITE_CONFIG.googleRating} Google Rating
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is Charlotte&apos;s premier veteran-owned, family-operated roofing company. Owner James Turner
              personally oversees every project, ensuring military-grade quality and attention to detail. With a BBB A+ rating,
              {SITE_CONFIG.googleReviewCount}+ five-star Google reviews, and certifications from CertainTeed, GAF, and Owens Corning,
              we deliver exceptional roofing services backed by the industry&apos;s best warranties.
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
                Licensed &amp; Insured
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
                <span className="text-sm font-semibold">About Our Roofing Company</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                A Veteran-Owned Roofing Company Charlotte NC Trusts
              </h2>
              <p className="text-gray text-lg mb-6">
                Best Roofing Now is more than just a roofing company - we&apos;re your neighbors committed to
                protecting Charlotte homes and businesses. Founded by James Turner, a veteran who brought military
                values of integrity, discipline, and excellence to the roofing industry, our family-operated
                company has grown to become one of Charlotte&apos;s most respected roofing contractors.
              </p>
              <p className="text-gray mb-8">
                With over {SITE_CONFIG.roofsInstalled} roofs completed throughout Charlotte and a BBB A+ rating with zero complaints,
                we&apos;ve built our reputation on quality workmanship, honest assessments, and treating every
                customer like family. Our certifications from industry leaders like CertainTeed, GAF, and Owens
                Corning mean you get premium materials backed by the best warranties available. James personally
                oversees every project - from the initial inspection to the final walkthrough.
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
                    <p className="font-bold text-dark">{SITE_CONFIG.roofsInstalled}+ Roofs</p>
                    <p className="text-sm text-gray">Completed in Charlotte</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Heart className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">What Makes Us Different</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Makes Best Roofing Now Different from Other Roofing Companies in Charlotte
            </h2>
            <p className="text-gray text-lg">
              In a city with hundreds of roofing companies, Best Roofing Now stands apart through our veteran-owned
              values, family commitment, and proven track record of excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-xl hover:shadow-lg transition-all"
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
      <section className="section bg-white">
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

          {/* Additional Service Links */}
          <div className="mt-10 text-center">
            <p className="text-gray mb-4">Explore more of our roofing services:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/metal-roofing-charlotte-nc" className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm">
                Metal Roofing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/flat-roof-contractors-charlotte-nc" className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm">
                Flat Roof Contractors <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/roofing-contractors-charlotte-nc" className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm">
                Roofing Contractors <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/best-roofing-company-charlotte-nc" className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm">
                Best Roofing Company <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/emergency-roof-repair-charlotte-nc" className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm">
                Emergency Roof Repair <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/industrial-roofing-charlotte-nc" className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm">
                Industrial Roofing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Portfolio Highlights Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Hammer className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Project Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {SITE_CONFIG.roofsInstalled}+ Roofing Projects Completed Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              From residential homes in Myers Park to commercial buildings in Uptown, our roofing company
              has protected properties across every neighborhood in Charlotte NC.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projectHighlights.map((project) => (
              <div key={project.title} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={`${project.title} by Best Roofing Now - roofing company Charlotte NC`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg">
                    <p className="text-2xl font-bold">{project.stats}</p>
                    <p className="text-xs">{project.label}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-2">{project.title}</h3>
                  <p className="text-gray">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View Our Full Project Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certification Badges Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <BadgeCheck className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Industry Certifications</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Manufacturer-Certified Roofing Company in Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our certifications from the industry&apos;s top manufacturers mean better warranties, proven expertise,
              and access to premium roofing materials for your home or business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-light rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{cert.name}</h3>
                <p className="text-gray text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Company Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Best Roofing Now as Your Roofing Company?
            </h2>
            <p className="text-gray text-lg">
              Discover why Charlotte homeowners and businesses choose our roofing company for all their
              roofing needs - from simple repairs to complete replacements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-xl">
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
      <section className="section bg-white">
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
              Don&apos;t just take our word for it - hear from homeowners who trusted Best Roofing Now with their roofing projects.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-light rounded-xl shadow-md p-6">
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
            <div className="inline-flex items-center gap-2 bg-light rounded-full px-6 py-3 shadow-md">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-dark">{SITE_CONFIG.googleRating} Average Rating</span>
              <span className="text-gray">from {SITE_CONFIG.googleReviewCount}+ Google Reviews</span>
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
              <span className="text-sm font-bold">INSTANT ESTIMATE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Get Your Free Roofing Estimate in Seconds
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Use Charlotte&apos;s first instant roofing estimate tool - no waiting, no phone tag, no obligation.
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
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Your Local Roofing Company Serving All of Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              Our roofing company serves homeowners and businesses throughout the Greater Charlotte region
              and Lake Norman area.
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

      {/* FAQ Section with Voice Search Optimization */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roofing Company Charlotte NC FAQs
              </h2>
              <p className="text-gray text-lg">
                Quick answers to common questions about our roofing company and services in Charlotte NC.
              </p>
            </div>
            {/* Voice Search Optimized FAQ Component */}
            <VoiceSearchFAQ
              faqs={faqs}
              city="Charlotte"
              className="bg-light rounded-xl p-6 shadow-md"
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

      <GeoProjectGalleryStrip
        pageType="main-service-area"
        city="Charlotte"
        slug="roofing-company-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-company-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Roofing Company"

      />

      <CTASection
        title="Ready to Work with Charlotte's Most Trusted Roofing Company?"
        subtitle="Get a free, no-obligation estimate from our certified team. Owner James Turner will personally assess your roof and provide honest recommendations tailored to your needs and budget."
      />
    </>
  );
}
