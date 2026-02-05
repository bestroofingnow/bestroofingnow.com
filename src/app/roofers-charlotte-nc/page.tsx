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
  FileCheck,
  ClipboardCheck,
  ListChecks,
  DollarSign,
  ThumbsUp,
  AlertTriangle,
  BookOpen,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { MeetTheFamily } from '@/components/sections/MeetTheFamily';
import { TURNER_NOTES } from '@/lib/turner-family';
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
  title: 'Roofers Charlotte NC | 5-Star',
  description:
    'Looking for trusted roofers in Charlotte NC? Best Roofing Now is 5-star rated with 62+ Google reviews, BBB A+ accredited, veteran-owned. Licensed NC roofers with 500+ roofs completed. Free estimates! Call (704) 605-6047.',
  keywords: [
    'roofers charlotte nc',
    'roofers near me charlotte',
    'local roofers charlotte nc',
    'charlotte roofers near me',
    'find roofers charlotte',
    'hire roofers charlotte nc',
    'roofers in my area charlotte',
    'nearby roofers charlotte nc',
    'charlotte area roofers',
    'neighborhood roofers charlotte',
    'roofers close to me charlotte',
    'local roofing experts charlotte nc',
    'best roofers charlotte nc',
    'trusted roofers charlotte',
    'how to find a roofer charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofers-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofers Charlotte NC | Top-Rated Local Roofers | Best Roofing Now',
    description:
      'Find experienced local roofers serving Charlotte NC. 5-star rated, BBB A+ accredited, veteran-owned. Licensed and insured roofing professionals with 500+ roofs completed. Free estimates.',
    url: `${SITE_CONFIG.url}/roofers-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero2,
        width: 1200,
        height: 630,
        alt: 'Professional roofers Charlotte NC - Best Roofing Now team at work',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for Charlotte homes including shingle, metal, tile, and slate roofing for any style or budget.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, and commercial roof repairs for Charlotte businesses and commercial properties.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, flashing damage, and all types of roof issues.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials, extended warranties up to 50 years, and permit handling.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections with detailed reports, high-resolution photos, and honest assessments.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: '24/7 emergency storm damage restoration with full insurance claim documentation and adjuster meetings.',
    href: '/services/storm-damage',
  },
];

// How to choose a roofer checklist
const rooferChecklist = [
  {
    icon: FileCheck,
    title: 'Verify NC General Contractor License',
    description: 'North Carolina requires roofing contractors to hold a valid General Contractor license. Ask for the license number and verify it through the NC Licensing Board for General Contractors at nclbgc.org.',
  },
  {
    icon: Star,
    title: 'Check BBB Rating and Google Reviews',
    description: 'Look for roofers with a BBB accreditation (A or A+ rating) and strong Google reviews (4.5+ stars with 50+ reviews). This indicates a track record of customer satisfaction and ethical business practices.',
  },
  {
    icon: Shield,
    title: 'Ask for Proof of Insurance',
    description: 'Require both general liability insurance ($1M minimum) and workers compensation coverage. This protects you from financial liability if a worker is injured or your property is damaged during the project.',
  },
  {
    icon: DollarSign,
    title: 'Get at Least 3 Written Estimates',
    description: 'Compare detailed written estimates from at least 3 Charlotte roofers. Beware of quotes that are significantly lower than others - this may indicate cut corners, inferior materials, or hidden fees.',
  },
  {
    icon: Award,
    title: 'Ask About Manufacturer Certifications',
    description: 'Certifications from GAF, CertainTeed, or Owens Corning mean the roofer has passed training requirements and can offer enhanced warranty options. Only 2% of roofers achieve top-tier certifications.',
  },
  {
    icon: MapPin,
    title: 'Check for Local Office / Physical Address',
    description: 'Hire roofers with a verifiable physical address in the Charlotte area. Storm chasers and out-of-town contractors often disappear after collecting payment, leaving you without warranty support.',
  },
];

// Why choose us points
const whyChooseUs = [
  {
    icon: Star,
    title: '5-Star Rated',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte homeowners. Perfect ${SITE_CONFIG.googleRating} rating.`,
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Accredited with the Better Business Bureau with an A+ rating and zero complaints filed.',
  },
  {
    icon: Shield,
    title: 'Veteran-Owned',
    description: 'Proudly veteran-owned and operated. Military values of integrity, discipline, and excellence in every project.',
  },
  {
    icon: CheckCircle,
    title: 'Licensed & Insured',
    description: 'Fully licensed NC roofers with comprehensive general liability and workers compensation insurance.',
  },
  {
    icon: Users,
    title: 'Certified Installers',
    description: 'CertainTeed SELECT ShingleMaster, GAF Factory-Certified, and Owens Corning Preferred Contractor.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services with 1-4 hour response times throughout Charlotte.',
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
  'Steele Creek',
  'Highland Creek',
  'Providence Plantation',
  'Foxcroft',
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

// PAA-targeting FAQs - 8 questions
const faqs = [
  {
    question: 'How do I find trustworthy roofers in Charlotte NC?',
    answer:
      `To find trustworthy roofers in Charlotte NC, start by checking Google reviews (look for 4.5+ stars with 50+ reviews), verify BBB accreditation and rating, confirm NC General Contractor licensing, and ask for proof of insurance. Get at least 3 written estimates and check for manufacturer certifications. Best Roofing Now meets every criteria: ${SITE_CONFIG.googleRating} Google rating with ${SITE_CONFIG.googleReviewCount}+ reviews, BBB A+ accreditation, full NC licensing, comprehensive insurance, and certifications from CertainTeed, GAF, and Owens Corning. We also have a physical Charlotte office at ${SITE_CONFIG.address.full}.`,
  },
  {
    question: 'What should I look for when hiring a roofer?',
    answer:
      'When hiring a roofer, verify these six essentials: (1) Valid NC General Contractor license - check at nclbgc.org, (2) General liability insurance of at least $1 million and workers compensation coverage, (3) Strong online reputation with BBB accreditation and 4.5+ Google star rating, (4) Manufacturer certifications from GAF, CertainTeed, or Owens Corning for enhanced warranties, (5) Local Charlotte-area office with a physical address (not just a P.O. box), and (6) Detailed written estimates with clear scope of work, materials specified, timeline, and warranty information. Avoid roofers who demand large upfront deposits or only accept cash.',
  },
  {
    question: 'How much do roofers charge in Charlotte?',
    answer:
      'Charlotte roofers typically charge $200-$1,500 for minor repairs, $3,000-$8,000 for partial replacements, and $8,000-$25,000 for full residential roof replacements with architectural shingles. Metal roofing costs $15,000-$35,000. Prices vary based on roof size, pitch, material choice, and project complexity. Storm damage repairs are often covered by homeowner insurance with minimal out-of-pocket costs. Best Roofing Now provides free, detailed estimates with transparent pricing. Call ' + SITE_CONFIG.phone + ' for your free estimate.',
  },
  {
    question: 'Are Charlotte roofers licensed?',
    answer:
      'In North Carolina, roofing contractors must hold a valid General Contractor license issued by the NC Licensing Board for General Contractors (NCLBGC) for projects over $30,000. You can verify any contractor\'s license at nclbgc.org. Some smaller repair companies may operate under a home improvement license, but for major roof work, always verify the General Contractor license. Best Roofing Now is fully licensed in North Carolina with comprehensive liability and workers compensation insurance.',
  },
  {
    question: 'What questions should I ask a roofer before hiring?',
    answer:
      'Ask these essential questions before hiring a Charlotte roofer: (1) Are you licensed in NC? What is your license number? (2) Do you carry general liability and workers comp insurance? Can I see certificates? (3) What manufacturer certifications do you hold? (4) How long have you been operating in Charlotte? (5) Can you provide references from recent Charlotte projects? (6) What warranty do you offer on labor and materials? (7) Will you handle the building permit? (8) What is your estimated timeline? (9) What is your payment schedule? (10) Do you offer financing options? A reputable roofer will answer all these questions openly.',
  },
  {
    question: 'Should I get multiple roofing estimates?',
    answer:
      'Yes, you should always get at least 3 written estimates from different Charlotte roofers before making a decision. This allows you to compare pricing, materials, warranties, and professionalism. Be wary of estimates that are significantly below others - this often indicates inferior materials, shortcuts, or hidden costs. Each estimate should detail the scope of work, specific materials to be used, project timeline, warranty terms, and total cost. Best Roofing Now provides detailed, transparent estimates with no hidden fees or pressure to sign immediately.',
  },
  {
    question: 'What is the difference between a roofer and a roofing contractor?',
    answer:
      'In Charlotte NC, a "roofer" typically refers to the skilled tradespeople who physically install and repair roofs, while a "roofing contractor" is the licensed business entity that manages roofing projects, obtains permits, carries insurance, and provides warranties. When you hire Best Roofing Now, you get both: a licensed roofing contractor with experienced, trained roofers. The roofing contractor is responsible for project management, quality control, permit compliance, insurance, and warranty coverage. Always hire a licensed roofing contractor rather than an unlicensed individual for any significant roofing work.',
  },
  {
    question: 'How do I report a bad roofer in North Carolina?',
    answer:
      'If you have a complaint about a roofer in North Carolina, you have several options: (1) File a complaint with the NC Licensing Board for General Contractors (NCLBGC) at nclbgc.org if the contractor is licensed, (2) File a complaint with the Better Business Bureau (BBB) at bbb.org, (3) Contact the NC Attorney General\'s Consumer Protection Division at ncdoj.gov, (4) File a complaint with the NC Department of Justice consumer services, (5) Leave an honest review on Google and other platforms to warn other homeowners. For contractors operating without a license, report them to the NCLBGC for investigation. This is why choosing a reputable, licensed roofer like Best Roofing Now is so important.',
  },
];

export default function RoofersCharlotteNCPage() {
  const inlineImages = getGeoImages({ pageType: 'main-service-area', city: 'Charlotte', count: 2, seed: 'roofers-charlotte-nc-inline' });

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofers Charlotte NC', url: `${SITE_CONFIG.url}/roofers-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofers-charlotte-nc`}
        pageName="Roofers Charlotte NC"
        includeVoiceActions={true}
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero2}
            alt="Professional roofers Charlotte NC - Best Roofing Now crew installing a new roof"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">{SITE_CONFIG.googleRating}-Star Rated | {SITE_CONFIG.googleReviewCount}+ Reviews | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofers <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Charlotte&apos;s most trusted roofers with {SITE_CONFIG.roofsInstalled}+ roofs completed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Looking for reliable roofers in Charlotte NC? Best Roofing Now provides 5-star rated roofing services
              throughout Charlotte and the surrounding metro area. From{' '}
              <Link href="/roof-repair-charlotte-nc" className="text-accent-light hover:text-white underline">repairs</Link> to{' '}
              <Link href="/roof-replacement-charlotte-nc" className="text-accent-light hover:text-white underline">complete replacements</Link>,
              our certified roofers deliver exceptional quality backed by industry-leading warranties
              and our BBB A+ rating.
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

      {/* How to Choose a Roofer Section - Featured Snippet Target */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Expert Guide</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How to Choose a Roofer in Charlotte NC
              </h2>
              <p className="text-gray text-lg">
                Hiring the wrong roofer can cost you thousands. Use this checklist to find a trustworthy
                Charlotte roofer who will do quality work at a fair price.
              </p>
            </div>

            <div className="space-y-4">
              {rooferChecklist.map((item, index) => (
                <div key={item.title} className="bg-light rounded-xl p-6 flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-dark">{item.title}</h3>
                    </div>
                    <p className="text-gray text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Best Roofing Now Meets All Criteria */}
            <div className="mt-8 bg-primary/5 border-2 border-primary/20 rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-bold text-dark">Best Roofing Now Meets Every Criteria</h3>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray">NC Licensed Contractor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray">BBB A+ Accredited</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ 5-Star Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray">Full Liability + Workers Comp</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray">GAF, CertainTeed, Owens Corning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray">Charlotte Office: {SITE_CONFIG.address.street}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray">Veteran-Owned & Operated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray">{SITE_CONFIG.roofsInstalled}+ Roofs Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray">Free Estimates - No Pressure</span>
                </div>
              </div>
              <div className="mt-6">
                <EstimateButton variant="primary" size="lg">
                  Get Your Free Estimate Today
                </EstimateButton>
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
              Complete Roofing Services from Charlotte&apos;s Best Roofers
            </h2>
            <p className="text-gray text-lg">
              Our team of experienced Charlotte roofers handles all your roofing needs with expert
              craftsmanship and premium materials. We serve both{' '}
              <Link href="/services/residential-roofing" className="text-primary hover:text-accent underline">residential</Link> and{' '}
              <Link href="/services/commercial-roofing" className="text-primary hover:text-accent underline">commercial</Link> properties.
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

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Homeowners Trust Our Roofers
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need roofers in Charlotte NC, you want a team you can trust. Best Roofing
                Now has built our reputation on quality workmanship, honest assessments, and putting
                our customers first. With {SITE_CONFIG.roofsInstalled}+ roofs completed across the Charlotte metro area,
                we have the experience to handle any roofing project.
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
              <GeoTaggedProjectImage
                image={inlineImages[0]}
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
                context={{ serviceName: 'Roofers', pageTitle: 'Roofers Charlotte NC' }}
                includeSchema={true}
                schemaPageUrl={`${SITE_CONFIG.url}/roofers-charlotte-nc`}
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-dark">{SITE_CONFIG.googleRating} Rating</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Google Reviews</p>
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
                Looking for Reliable Roofers in Charlotte?
              </h2>
              <p className="text-white/90">
                Get a free, no-obligation estimate from Charlotte&apos;s most trusted roofing team.
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

      {/* Contractor Comparison Checklist */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <ListChecks className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Comparison Guide</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Charlotte Roofer Comparison Checklist
              </h2>
              <p className="text-gray text-lg">
                Use this checklist when comparing roofing estimates to make sure you&apos;re getting the best value.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 divide-y divide-gray-200">
                {[
                  { item: 'NC General Contractor License verified', critical: true },
                  { item: 'General liability insurance ($1M+ coverage)', critical: true },
                  { item: 'Workers compensation insurance', critical: true },
                  { item: 'BBB accredited with A or A+ rating', critical: false },
                  { item: '4.5+ star Google rating with 50+ reviews', critical: false },
                  { item: 'Manufacturer certifications (GAF, CertainTeed, Owens Corning)', critical: false },
                  { item: 'Local Charlotte office / physical address', critical: false },
                  { item: 'Detailed written estimate with material specs', critical: true },
                  { item: 'Clear warranty terms (material + workmanship)', critical: true },
                  { item: 'Permits included in the estimate', critical: false },
                  { item: 'References from recent Charlotte projects', critical: false },
                  { item: 'No large upfront deposit required (over 30%)', critical: true },
                ].map((check, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 hover:bg-light transition-colors">
                    <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 ${check.critical ? 'bg-red-100' : 'bg-primary/10'}`}>
                      {check.critical ? (
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                      ) : (
                        <CheckCircle className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <span className="text-gray text-sm flex-1">{check.item}</span>
                    {check.critical && (
                      <span className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-1 rounded">CRITICAL</span>
                    )}
                  </div>
                ))}
              </div>
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
              Charlotte Roofers Serving All Metro Areas
            </h2>
            <p className="text-gray text-lg">
              Our professional roofers serve homeowners and businesses throughout the Greater Charlotte region,
              including all neighborhoods and surrounding cities.
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

      {/* Certifications Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certified Charlotte Roofers You Can Trust
            </h2>
            <p className="text-gray text-lg">
              Our certifications from industry-leading manufacturers mean you get premium materials backed by
              extended warranty coverage that other roofers simply cannot offer.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">CertainTeed SELECT ShingleMaster</h3>
              <p className="text-gray text-sm">
                Top-tier certification with access to premium SureStart PLUS warranties and specialized training.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">GAF Factory-Certified</h3>
              <p className="text-gray text-sm">
                Authorized to offer GAF&apos;s Golden Pledge warranty - the strongest warranty in the roofing industry.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Owens Corning Preferred</h3>
              <p className="text-gray text-sm">
                Preferred Contractor status with Owens Corning for extended warranty options up to 50 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery - Geo-Tagged */}
      <GeoProjectGalleryStrip
        pageType="main-service-area"
        city="Charlotte"
        slug="roofers-charlotte-nc"
        count={4}
        title="Recent Projects by Charlotte's Best Roofers"
        subtitle="See our latest completed roofing work across the Charlotte metro area."
        schemaPageUrl={`${SITE_CONFIG.url}/roofers-charlotte-nc`}
      />

      {/* Meet the Turner Family */}
      <MeetTheFamily variant="full" />

      {/* Personal Note from James */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-primary/5 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-primary">JT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">A Note from James Turner, Owner</h3>
                <p className="text-gray italic mb-4">
                  &ldquo;{TURNER_NOTES.james.onCommunity}&rdquo;
                </p>
                <p className="text-gray">
                  When you hire Best Roofing Now, you&apos;re not just getting roofers - you&apos;re getting a family
                  that cares about Charlotte as much as you do. We&apos;ve been here for 15 years, raised our kids here,
                  and built our business on the simple principle that your roof should protect what matters most.
                </p>
                <p className="text-primary font-semibold mt-4">
                  Call us today at {SITE_CONFIG.phone} - I&apos;d love to hear from you.
                </p>
              </div>
            </div>
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
                Charlotte Roofers FAQs
              </h2>
              <p className="text-gray text-lg">
                Quick answers to common questions about hiring roofers in Charlotte NC.
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

      {/* Related Roofing Pages */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Explore More Roofing Services in Charlotte
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Roofing Charlotte NC
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
              href="/commercial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing Charlotte NC
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

      {/* Service City Links */}
      <ServiceCityLinks
        city="Charlotte"
        citySlug="charlotte-nc"
        title="Roofing Services in Charlotte NC"
        subtitle="Looking for a specific roofing service? Our Charlotte roofers offer comprehensive solutions for every roofing need."
      />

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Charlotte"
        service="Roofers"
        serviceSlug="roofers"
        title="Trusted Roofers in Nearby Cities"
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Roofers"

      />

      <CTASection
        title="Ready to Work with Charlotte's Top-Rated Roofers?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your needs and budget."
      />
    </>
  );
}
