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
  BookOpen,
  Scale,
  AlertTriangle,
  ListChecks,
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
  title: 'Roofing Contractor Charlotte NC | Licensed & Certified | GAF CertainTeed',
  description:
    'Licensed roofing contractor in Charlotte NC. GAF Factory-Certified, CertainTeed SELECT ShingleMaster, Owens Corning Preferred. 5.0 Google rating, BBB A+ rated, veteran-owned. NC General Contractor license. 500+ roofs completed. Free estimates! Call (704) 605-6047.',
  keywords: [
    'roofing contractor charlotte nc',
    'licensed roofing contractor charlotte',
    'certified roofing contractor charlotte nc',
    'gaf certified contractor charlotte',
    'certainteed contractor charlotte nc',
    'owens corning preferred contractor charlotte',
    'insured roofing contractor charlotte nc',
    'bonded roofing contractor charlotte',
    'nc licensed roofer charlotte',
    'manufacturer certified roofer charlotte nc',
    'general contractor roofing charlotte',
    'warranty backed roofing contractor charlotte',
    'best roofing contractor charlotte nc',
    'roofing contractor near me charlotte',
    'local roofing contractor charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-contractor-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Contractor Charlotte NC | Licensed & Insured | Best Roofing Now',
    description:
      'BBB A+ rated, veteran-owned roofing contractor serving Charlotte NC. Licensed and insured with 500+ roofs installed. GAF, CertainTeed, Owens Corning certified. Free estimates.',
    url: `${SITE_CONFIG.url}/roofing-contractor-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Professional roofing contractor Charlotte NC - Best Roofing Now team at work',
      },
    ],
  },
};

// Services offered
const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for homes including shingle, metal, tile, and slate roofing with extended warranty options.',
    href: '/services/residential-roofing',
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'TPO, EPDM, flat roof systems, and commercial roof repairs for businesses of all sizes throughout Charlotte.',
    href: '/services/commercial-roofing',
  },
  {
    icon: Wrench,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, flashing damage, and storm damage with honest assessments.',
    href: '/services/roof-repair',
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement with premium materials and manufacturer-backed warranties up to 50 years.',
    href: '/services/roof-replacement',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Free comprehensive inspections with detailed reports, photos, drone imagery, and honest recommendations.',
    href: '/services/roof-inspection',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Repair',
    description: '24/7 emergency storm damage restoration with complete insurance claim assistance and documentation.',
    href: '/services/storm-damage',
  },
];

// NC Licensing requirements
const licensingRequirements = [
  {
    title: 'NC General Contractor License',
    description: 'North Carolina requires roofing contractors working on projects over $30,000 to hold a valid General Contractor license. This license is issued by the NC Licensing Board for General Contractors (NCLBGC) and requires passing an exam, demonstrating financial responsibility, and maintaining continuous education.',
  },
  {
    title: 'Licensing Board Verification',
    description: 'You can verify any roofing contractor\'s license status through the NC Licensing Board website at nclbgc.org. Look up the contractor by name or license number to confirm their license is active and in good standing with no disciplinary actions.',
  },
  {
    title: 'Insurance Requirements',
    description: 'Licensed roofing contractors in NC are required to carry general liability insurance and workers compensation insurance. Best Roofing Now maintains comprehensive coverage including $2M general liability and full workers comp for all employees.',
  },
  {
    title: 'Building Permits',
    description: 'Charlotte NC requires building permits for roof replacement projects. Licensed roofing contractors handle the permit application process, ensure work meets NC Residential Building Code requirements, and arrange final inspections.',
  },
];

// Questions to ask your roofing contractor
const contractorQuestions = [
  {
    question: 'What is your NC General Contractor license number?',
    why: 'Verifies they are legally allowed to perform roofing work in North Carolina. You can look up the number at nclbgc.org.',
  },
  {
    question: 'Can you provide proof of liability and workers comp insurance?',
    why: 'Protects you from financial liability if workers are injured or property is damaged during the project.',
  },
  {
    question: 'What manufacturer certifications do you hold?',
    why: 'Certifications from GAF, CertainTeed, or Owens Corning enable better warranty coverage. Only 2% of contractors achieve top-tier status.',
  },
  {
    question: 'What specific warranty do you offer on materials and labor?',
    why: 'Understand exactly what is covered, for how long, and what could void the warranty. Get warranty terms in writing.',
  },
  {
    question: 'Will you handle the building permit and inspections?',
    why: 'A professional contractor handles all permitting. Unpermitted work can cause problems when selling your home.',
  },
  {
    question: 'What is the detailed scope of work and timeline?',
    why: 'A detailed written scope prevents misunderstandings and ensures all aspects of the job are covered in the price.',
  },
  {
    question: 'What materials will you use? Can I see specifications?',
    why: 'Know exactly what materials are going on your roof. Compare brands, grades, and specifications between contractor quotes.',
  },
  {
    question: 'What is your payment schedule?',
    why: 'Reputable contractors never require more than 30% upfront. Full payment should only be due upon satisfactory completion.',
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
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied Charlotte homeowners.`,
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
    description: 'CertainTeed SELECT ShingleMaster, GAF Factory-Certified, and Owens Corning Preferred.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency roofing services when you need us most.',
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

// Enhanced FAQs - 8 PAA-targeting questions
const faqs = [
  {
    question: 'What makes a good roofing contractor in Charlotte?',
    answer:
      `A good roofing contractor in Charlotte should have: (1) A valid NC General Contractor license verified at nclbgc.org, (2) BBB accreditation with an A or A+ rating, (3) Strong Google reviews (4.5+ stars with 50+ reviews), (4) Comprehensive insurance (liability + workers comp), (5) Manufacturer certifications from GAF, CertainTeed, or Owens Corning for enhanced warranties, (6) A local Charlotte office with a physical address, (7) Transparent pricing with detailed written estimates, and (8) A track record of completed projects. Best Roofing Now exceeds all these standards with a ${SITE_CONFIG.googleRating} Google rating, ${SITE_CONFIG.googleReviewCount}+ reviews, BBB A+ accreditation, and ${SITE_CONFIG.roofsInstalled}+ completed roofs.`,
  },
  {
    question: 'How much does a roofing contractor charge in Charlotte NC?',
    answer:
      'Roofing contractor costs in Charlotte NC vary by project type. Roof repairs typically range from $200-$1,500 for minor issues. Partial roof replacements cost $3,000-$8,000. Full residential roof replacements with architectural shingles range from $8,000-$18,000 for average-sized homes (1,500-2,500 sq ft). Premium materials like metal roofing cost $15,000-$35,000. Factors affecting price include roof size, pitch, material choice, number of old layers to remove, and structural repair needs. Best Roofing Now provides free, detailed estimates with transparent pricing and no hidden fees. Call ' + SITE_CONFIG.phone + ' for your free estimate.',
  },
  {
    question: 'Do roofing contractors in NC need to be licensed?',
    answer:
      'Yes, North Carolina requires roofing contractors to hold a valid General Contractor license issued by the NC Licensing Board for General Contractors (NCLBGC) for any project over $30,000. This license requires passing a comprehensive exam, demonstrating financial responsibility, carrying insurance, and completing continuing education. You can verify any contractor\'s license at nclbgc.org. Hiring an unlicensed contractor puts you at risk for substandard work, no warranty protection, and potential legal liability. Best Roofing Now is fully licensed in North Carolina.',
  },
  {
    question: 'What is the best time of year to hire a roofing contractor in Charlotte?',
    answer:
      'The best time to hire a roofing contractor in Charlotte NC is during the fall (September-November) or spring (March-May). These seasons offer mild temperatures ideal for proper shingle adhesion and comfortable working conditions. However, emergency roof repairs should never wait regardless of season. Summer (June-August) is the busiest season for Charlotte roofing contractors, so booking during spring or fall often means shorter wait times and potentially better scheduling. Winter (December-February) is also a viable option for Charlotte since temperatures rarely stay below freezing for extended periods. Best Roofing Now serves Charlotte year-round with flexible scheduling.',
  },
  {
    question: 'How do I verify a roofing contractor\'s license in NC?',
    answer:
      'To verify a roofing contractor\'s license in North Carolina, visit the NC Licensing Board for General Contractors website at nclbgc.org. Click on "Verify a License" and search by the contractor\'s name or license number. The search results will show: (1) License status (active, expired, revoked), (2) License type and classification, (3) Any disciplinary actions or complaints, (4) Insurance verification. You should always verify a contractor\'s license before signing any contract. If the contractor cannot provide a license number or their license is not active, do not hire them. Best Roofing Now\'s license can be verified at nclbgc.org.',
  },
  {
    question: 'What should a roofing contract include?',
    answer:
      'A professional roofing contract from a Charlotte contractor should include: (1) Full contractor name, address, phone number, and NC license number, (2) Detailed scope of work including removal, materials, and installation methods, (3) Specific materials listed by manufacturer, product name, and color, (4) Project timeline with estimated start and completion dates, (5) Total cost with a payment schedule (never more than 30% upfront), (6) Warranty details for both materials and workmanship, (7) Permit responsibility (contractor should handle), (8) Cleanup and debris removal terms, (9) Change order process, and (10) Cancellation policy. Best Roofing Now provides comprehensive contracts that cover all these elements.',
  },
  {
    question: 'How long should a roofing project take?',
    answer:
      'A typical residential roof replacement in Charlotte takes 1-3 days depending on the size and complexity. Here is a general timeline: Permit approval takes 1-3 business days. Tear-off and inspection of the existing roof takes 1 day. Installation of new underlayment, flashing, and roofing material takes 1-2 days. Final cleanup and inspection takes half a day. Larger homes (3,000+ sq ft), steep or complex designs, and projects requiring structural repairs may take 3-5 days total. Weather delays (Charlotte averages 43 inches of rain) can extend timelines. Best Roofing Now provides detailed timelines with each estimate and keeps homeowners informed throughout the project.',
  },
  {
    question: 'What warranty should a roofing contractor offer?',
    answer:
      'A reputable Charlotte roofing contractor should offer both a workmanship warranty and a manufacturer material warranty. Workmanship warranties from the contractor typically cover 5-25 years and protect against installation errors. Material warranties from manufacturers range from 25-50 years for shingles and up to lifetime for metal roofing. Best Roofing Now offers the strongest warranties available: GAF Golden Pledge (50-year material + 25-year workmanship), CertainTeed SureStart PLUS (50-year material + 25-year workmanship), and Owens Corning extended coverage. These enhanced warranties are only available through manufacturer-certified contractors like Best Roofing Now.',
  },
];

export default function RoofingContractorCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Contractor Charlotte NC', url: `${SITE_CONFIG.url}/roofing-contractor-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-contractor-charlotte-nc`}
        pageName="Roofing Contractor Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero1}
            alt="Professional roofing contractor Charlotte NC - Best Roofing Now crew installing a new roof"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">BBB A+ Rated | NC Licensed | Veteran-Owned</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Contractor <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Charlotte&apos;s most trusted roofing contractor with {SITE_CONFIG.roofsInstalled}+ roofs installed
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now is a licensed and insured roofing contractor serving Charlotte and the surrounding
              areas. From{' '}
              <Link href="/roof-repair-charlotte-nc" className="text-accent-light hover:text-white underline">roof repairs</Link>{' '}
              to{' '}
              <Link href="/roof-replacement-charlotte-nc" className="text-accent-light hover:text-white underline">complete replacements</Link>,
              our certified team delivers exceptional quality backed by industry-leading warranties from
              GAF, CertainTeed, and Owens Corning.
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

      {/* NC Roofing Contractor Licensing Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Scale className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">NC Licensing Guide</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                NC Roofing Contractor Licensing Requirements
              </h2>
              <p className="text-gray text-lg">
                Understanding North Carolina&apos;s licensing requirements helps you hire a legitimate, qualified
                roofing contractor and avoid scams. Here&apos;s what you need to know.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {licensingRequirements.map((req) => (
                <div key={req.title} className="bg-light rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FileCheck className="w-5 h-5 text-primary flex-shrink-0" />
                    <h3 className="font-bold text-dark">{req.title}</h3>
                  </div>
                  <p className="text-gray text-sm">{req.description}</p>
                </div>
              ))}
            </div>

            {/* Verification CTA */}
            <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="font-bold text-dark mb-2">Verify Before You Hire</h3>
                <p className="text-gray text-sm">
                  Always verify your roofing contractor&apos;s license before signing a contract. You can check
                  Best Roofing Now&apos;s license and any other contractor at the NC Licensing Board website.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
                <span className="text-sm font-bold text-green-600">Best Roofing Now: VERIFIED</span>
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
              Complete Roofing Services in Charlotte NC
            </h2>
            <p className="text-gray text-lg">
              From minor repairs to complete roof replacements, our certified contractors handle all your roofing
              needs with expert craftsmanship and premium materials.
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

      {/* Questions to Ask Your Roofing Contractor Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Expert Guide</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Questions to Ask Your Roofing Contractor
              </h2>
              <p className="text-gray text-lg">
                Before hiring a roofing contractor in Charlotte NC, ask these essential questions to ensure
                you&apos;re working with a qualified, trustworthy professional.
              </p>
            </div>

            <div className="space-y-4">
              {contractorQuestions.map((item, index) => (
                <div key={item.question} className="bg-light rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-2">&ldquo;{item.question}&rdquo;</h3>
                      <p className="text-gray text-sm">
                        <span className="font-semibold text-primary">Why this matters: </span>
                        {item.why}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Best Roofing Now CTA */}
            <div className="mt-8 bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Best Roofing Now Answers Every Question with Confidence
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                We are fully licensed, BBB A+ accredited, manufacturer certified, and transparent about every
                aspect of our work. We welcome these questions because we have nothing to hide.
              </p>
              <EstimateButton variant="white" size="lg">
                Get Your Free Estimate Today
              </EstimateButton>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Charlotte Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                When you need a roofing contractor in Charlotte NC, you want a company you can trust. Best Roofing
                Now has built our reputation on honesty, quality workmanship, and putting customers first. With{' '}
                {SITE_CONFIG.roofsInstalled}+ roofs completed, we have the experience to handle any project.
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
                  <p className="text-xs text-gray">Roofs Completed</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <p className="text-2xl font-bold text-primary">A+</p>
                  <p className="text-xs text-gray">BBB Rating</p>
                </div>
              </div>

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
                src={IMAGES.realProjects.drone1}
                alt="Best Roofing Now - Trusted roofing contractor in Charlotte NC with completed roof project"
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
                Need a Roofing Contractor in Charlotte?
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
              Serving All of Charlotte NC & Surrounding Areas
            </h2>
            <p className="text-gray text-lg">
              Our roofing contractors serve homeowners and businesses throughout the Greater Charlotte metro area.
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
              Certified & Trusted Roofing Contractor
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
                Authorized to offer GAF&apos;s Golden Pledge warranty - the best in the industry.
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

      {/* Project Gallery */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Work Across Charlotte
            </h2>
            <p className="text-gray text-lg">
              Browse our portfolio of completed roofing projects throughout the Charlotte area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed residential roof replacement in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="CertainTeed shingle installation by Best Roofing Now in Charlotte"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone2}
                alt="Aerial view of completed roof project in Charlotte NC"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Professional roofing contractor work in Charlotte area"
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
                Roofing Contractor FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about hiring a roofing contractor in Charlotte NC.
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
            <p className="text-gray">
              Find the specific roofing service you need from Charlotte&apos;s most trusted contractor.
            </p>
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
              href="/roofers-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Roofers Charlotte NC
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
        title="Complete Roofing Contractor Services in Charlotte NC"
        subtitle="From repairs to replacements, we offer comprehensive roofing solutions for Charlotte homes and businesses."
      />

      {/* Related Cities */}
      <RelatedCitiesLinks
        currentCity="Charlotte"
        service="Roofing Contractor"
        serviceSlug="roofing-contractor"
        title="Licensed Roofing Contractors in Nearby Cities"
      />

      <GeoProjectGalleryStrip
        pageType="main-service-area"
        city="Charlotte"
        slug="roofing-contractor-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-contractor-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Roofing Contractor"

      />

      <CTASection
        title="Ready to Work with Charlotte's Best Roofing Contractor?"
        subtitle="Get a free, no-obligation estimate from our certified team. We'll assess your roof and provide honest recommendations tailored to your needs and budget."
      />
    </>
  );
}
