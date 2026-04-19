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
  Gem,
  Home,
  MapPin,
  Trees,
  GraduationCap,
  Hammer,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
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
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import { LKNPartnershipsBlock } from '@/components/sections/LKNPartnershipsBlock';
import { LKNDataCitations } from '@/components/sections/LKNDataCitations';
import { LKNNeighborhoodGrid } from '@/components/sections/LKNNeighborhoodGrid';
import { LKNHowToBundle } from '@/components/seo/LKNHowToSchemas';
export const metadata: Metadata = {
  title: 'Roofing Davidson Pointe NC',
  description:
    'Trusted roofer for Davidson Pointe in Davidson NC 28036. Architectural shingles, Class 4 IR, synthetic slate, ARC-approved replacements for 25-30 yr roofs.',
  keywords: [
    'davidson pointe roofing',
    'davidson pointe roofer',
    'roof replacement davidson pointe',
    'roofing davidson pointe davidson nc',
    'davidson pointe hoa roofing',
    'roof repair davidson pointe',
    'architectural shingles davidson pointe',
    'class 4 impact resistant shingles davidson nc',
    'synthetic slate davidson pointe',
    'davidson 28036 roofer',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-davidson-pointe-davidson-nc`,
  },
  openGraph: {
    title: 'Roofing Davidson Pointe NC | Davidson 28036 Roofer',
    description:
      'Davidson Pointe roof replacement, repair, and ARC-approved upgrades along Davidson-Concord Rd and Griffith St. Specialists in 25-30 year roof cohort homes near Davidson College.',
    url: `${SITE_CONFIG.url}/roofing-davidson-pointe-davidson-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roofing Davidson Pointe Davidson NC - Best Roofing Now neighborhood specialists',
      },
    ],
  },
};

// Roofing services for Davidson Pointe homes
const services = [
  {
    title: 'Roof Replacement',
    description:
      'Full tear-off and re-roof for Davidson Pointe homes built in the 1995-2015 cohort. Many original 25-30 year architectural shingle roofs are now hitting end-of-life along Davidson-Concord Rd and Griffith St.',
    benefits: ['ARC compliant', '50-yr warranties', 'Tear-off + decking'],
    href: '/roof-replacement-davidson-nc',
  },
  {
    title: 'Architectural Shingles',
    description:
      'GAF Timberline HDZ and CertainTeed Landmark architectural shingles in traditional Davidson Pointe palettes -- Weathered Wood, Charcoal, Driftwood, and Pewter Gray. The dominant ARC-approved roof in the neighborhood.',
    benefits: ['Lifetime warranty', 'HOA palette match', 'Cohort proven'],
    href: '/services/roof-replacement',
  },
  {
    title: 'Class 4 Impact Resistant Shingles',
    description:
      'UL 2218 Class 4 IR shingles such as GAF Timberline AS II and CertainTeed Landmark IR. Increasingly popular on Davidson Pointe upgrades for hail resistance and homeowner insurance premium discounts in the 28036 zip code.',
    benefits: ['Hail rated', 'Insurance discount', 'ARC approved'],
    href: '/roof-replacement-davidson-nc',
  },
  {
    title: 'Synthetic Slate Upgrades',
    description:
      'DaVinci synthetic slate is the most premium ARC-approved roof on the rise in Davidson Pointe. Class 4 impact, 50-year lifespan, and a slate aesthetic that complements the brick and transitional architecture.',
    benefits: ['Class 4 hail', '50-year life', 'Premium curb appeal'],
    href: '/synthetic-slate-roofing-lake-norman-nc',
  },
  {
    title: 'Metal Roofing & Accents',
    description:
      'Pre-finished standing-seam metal accents on porches, dormers, and bay windows -- a favorite Davidson Pointe ARC accent paired with architectural shingle field roofs along Griffith St.',
    benefits: ['Wind 140+ MPH', 'Kynar 500 finish', 'Accent ready'],
    href: '/metal-roofing-davidson-nc',
  },
  {
    title: 'Roof Repair & Storm Damage',
    description:
      'Same-week leak repair, ridge cap replacement, pipe boot fixes, and storm patching for Davidson Pointe homes. Free hail and wind inspections after Lake Norman summer storms cross Davidson 28036.',
    benefits: ['Same-week service', 'Insurance liaison', 'Photo documented'],
    href: '/storm-damage-roof-repair-davidson-nc',
  },
];

// Why Davidson Pointe homeowners choose us
const whyChooseUs = [
  {
    icon: Home,
    title: 'Davidson Pointe Cohort Specialists',
    description:
      'We have replaced dozens of Davidson Pointe roofs from the 1995-2015 build era. We know the framing, deck condition, ridge vent gaps, and pipe boot failures common across this cohort.',
  },
  {
    icon: Award,
    title: 'GAF Master Elite + CertainTeed ShingleMaster',
    description:
      'Top 2% of GAF roofers nationwide and CertainTeed ShingleMaster certified -- the credentials Davidson Pointe ARC submissions look for and the manufacturer warranties your roof deserves.',
  },
  {
    icon: Shield,
    title: 'ARC Submission Experience',
    description:
      'We package Davidson Pointe HOA architectural review submissions with material specs, color samples, and installation details so your replacement is approved without back-and-forth delays.',
  },
  {
    icon: Trees,
    title: 'Mature Landscaping Protection',
    description:
      'Davidson Pointe lots feature mature oaks, dogwoods, and crepe myrtles. Our crews tarp landscaping, magnetic-sweep driveways, and stage materials to protect what your family has grown for 20+ years.',
  },
  {
    icon: GraduationCap,
    title: 'Davidson College Town Standards',
    description:
      'Davidson is a small, tight-knit college town. Our trucks are clean, our crews are quiet, and we respect the school-zone routes near Davidson Elementary, Bailey Middle, and William Amos Hough High.',
  },
  {
    icon: Gem,
    title: 'Proven on Brick + Transitional Homes',
    description:
      'Davidson Pointe is dominated by traditional brick Colonials and transitional new construction. We match shingle weight, shadow line, and color tone to your home\'s architecture rather than installing a generic field roof.',
  },
];

// FAQs for Davidson Pointe (voice-search friendly first sentence each)
const faqs = [
  {
    question: 'Who is the best roofer for Davidson Pointe in Davidson NC?',
    answer:
      'Best Roofing Now is the trusted Davidson Pointe roofer in 28036. We are GAF Master Elite, CertainTeed ShingleMaster, and BBB A+ rated, and we have completed dozens of replacements on Davidson Pointe homes across the Davidson-Concord Rd and Griffith St area. We handle the Davidson Pointe HOA ARC submission for you and protect mature landscaping during every project.',
  },
  {
    question: 'How much does a roof replacement cost at Davidson Pointe?',
    answer:
      'A roof replacement at Davidson Pointe typically runs $14,000 to $26,000 for architectural shingles on a 2,500-3,800 sq ft home, $22,000 to $38,000 for Class 4 impact-resistant shingles, and $55,000 to $95,000 for DaVinci synthetic slate. Pricing varies with roof pitch, deck condition, and tear-off layers. Davidson Pointe homes valued $550K-$850K generally see strong appraisal value from a premium re-roof.',
  },
  {
    question: 'Why are so many Davidson Pointe roofs being replaced right now?',
    answer:
      'Davidson Pointe was built primarily between 1995 and 2015, which means the original architectural shingle roofs are now 10-30 years old and most are hitting their end-of-life replacement window. Lake Norman heat, hail events, and UV exposure on south-facing slopes accelerate granule loss. We are actively replacing 25-30 year cohort roofs across the neighborhood every month.',
  },
  {
    question: 'Does Davidson Pointe HOA require ARC approval for a new roof?',
    answer:
      'Yes, the Davidson Pointe HOA requires Architectural Review Committee (ARC) approval before any roof replacement or material change. The ARC reviews shingle color, material type, and accent metal finishes to ensure they fit the neighborhood\'s traditional brick and transitional palette. We prepare the full ARC packet for you with manufacturer specs, color chips, and installer credentials.',
  },
  {
    question: 'What roofing materials are approved at Davidson Pointe?',
    answer:
      'Davidson Pointe ARC generally approves architectural asphalt shingles in traditional palettes (Weathered Wood, Charcoal, Driftwood, Pewter Gray), Class 4 impact-resistant shingles, DaVinci synthetic slate, and standing-seam metal accents on porches and dormers. Bright colors, three-tab shingles, and full metal field roofs are typically not approved.',
  },
  {
    question: 'How long does a roof replacement take at Davidson Pointe?',
    answer:
      'Most Davidson Pointe roof replacements are completed in 1-2 days for architectural shingles and 3-5 days for synthetic slate. We protect your driveway, mature landscaping, and HVAC units, and we magnetic-sweep the property at the end of every workday. Homes near Davidson Elementary or William Amos Hough High are scheduled around school traffic patterns.',
  },
  {
    question: 'Do you offer Class 4 impact resistant shingles for Davidson Pointe homes?',
    answer:
      'Yes, Class 4 impact resistant shingles are one of the fastest-growing upgrades at Davidson Pointe. Products like GAF Timberline AS II and CertainTeed Landmark IR carry UL 2218 Class 4 ratings and qualify for homeowner insurance premium discounts in 28036 with most major carriers. They also stand up to the hail events that periodically hit the Lake Norman / Davidson corridor.',
  },
  {
    question: 'Can you handle insurance claims after a Lake Norman storm?',
    answer:
      'Yes, we handle the full insurance claim process for Davidson Pointe homeowners after hail or wind damage. We provide a free inspection, document damage with drone photography and ground photos, file the claim paperwork, and meet your insurance adjuster on-site at your Davidson Pointe home. We work with all major carriers in 28036 and Mecklenburg County.',
  },
  {
    question: 'How quickly can you start a Davidson Pointe roof project?',
    answer:
      'For most Davidson Pointe roof replacements, we can be on-site within 1-3 weeks of ARC approval. Emergency repairs and active leaks are scheduled within 24-72 hours. We are based in the Lake Norman corridor, so our crews and supply yards are close to Davidson, which keeps our response times short for 28036 homeowners.',
  },
  {
    question: 'Are you familiar with the streets and layout of Davidson Pointe?',
    answer:
      'Yes, we work throughout Davidson Pointe regularly -- including the streets along Davidson-Concord Rd and the connectors off Griffith St. We are familiar with the cul-de-sacs, the walking access to downtown Davidson and Davidson College, and the school zones for Davidson Elementary, Bailey Middle, and William Amos Hough High. We know how to stage trucks and dumpsters without blocking neighbors.',
  },
];

export default function RoofingDavidsonPointeDavidsonPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Davidson NC', url: `${SITE_CONFIG.url}/roofing-davidson-nc` },
          { name: 'Roofing Davidson Pointe Davidson NC', url: `${SITE_CONFIG.url}/roofing-davidson-pointe-davidson-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-davidson-pointe-davidson-nc`}
        pageName="Roofing Davidson Pointe Davidson NC"
        city="Davidson"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/roofing-davidson-pointe-davidson-nc`} city={"Davidson"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold">Davidson Pointe Neighborhood Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Davidson Pointe <br className="hidden md:block" />
              <span className="text-blue-300">Davidson NC 28036</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              The trusted roofer for Davidson Pointe homes along Davidson-Concord Rd and Griffith St
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Davidson Pointe is one of Davidson&apos;s established residential neighborhoods, with 400+ traditional
              brick and transitional homes built primarily between 1995 and 2015. Many of those original
              architectural shingle roofs are now in the 25-30 year replacement window. Best Roofing Now is the
              cohort specialist for Davidson Pointe -- ARC-approved replacements, Class 4 IR upgrades, and
              synthetic slate installations on the streets you live on.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-blue-500 hover:bg-blue-400 text-white"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Request Davidson Pointe Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-300" />
                GAF Master Elite
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-300" />
                Class 4 IR Certified
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-300" />
                Davidson Pointe ARC Experience
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Davidson Pointe */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Davidson Pointe Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-4">
                Davidson Pointe is an established residential community in the Town of Davidson, set along the
                Davidson-Concord Rd / Griffith St corridor in Mecklenburg County&apos;s 28036 zip code. The
                neighborhood includes 400+ single-family homes -- mostly traditional brick Colonial and
                transitional new construction with mature landscaping that has matured beautifully over the past
                two decades.
              </p>
              <p className="text-gray text-lg mb-6">
                Davidson Pointe families are walkable to downtown Davidson and Davidson College, just 5-10
                minutes from Lake Norman access points, and zoned for Davidson Elementary, Bailey Middle, and
                William Amos Hough High. With most original roofs now 10-30 years old, Davidson Pointe is one of
                the most active neighborhoods in 28036 for roof replacements -- and Best Roofing Now is the
                local specialist homeowners turn to first.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">400+</p>
                  <p className="text-sm text-gray">Single-Family Homes</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">$550K-$850K</p>
                  <p className="text-sm text-gray">Median Home Value</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">1995-2015</p>
                  <p className="text-sm text-gray">Build Era</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">28036</p>
                  <p className="text-sm text-gray">Davidson Zip Code</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.hero.hero1}
                alt="Roofing Davidson Pointe Davidson NC traditional brick neighborhood"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">25-30 yr</p>
                <p className="text-sm text-white/90">Cohort Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="section bg-blue-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.googleRating}</p>
              <p className="text-sm text-gray">Google Rating</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">GAF Master Elite</p>
              <p className="text-sm text-gray">Top 2% of Contractors</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.bbbRating}</p>
              <p className="text-sm text-gray">BBB Rating</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{SITE_CONFIG.yearsInBusiness}+ Years</p>
              <p className="text-sm text-gray">Serving Davidson + Lake Norman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Services for Davidson Pointe Homes
            </h2>
            <p className="text-gray text-lg">
              Architectural shingles, Class 4 IR, synthetic slate, metal accents, and storm-damage repair --
              every service Davidson Pointe homes need, delivered by a local 28036 roofer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-dark text-xl mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {benefit}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center text-primary font-medium text-sm mt-4">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              How Much Does a Roof Cost at Davidson Pointe?
            </h2>
            <p className="text-gray text-lg text-center mb-10 max-w-3xl mx-auto">
              Davidson Pointe roof replacement costs depend on home size, material, and tear-off complexity.
              Most homes in the neighborhood are 2,500 to 3,800 square feet. Below are typical 2026 ranges for
              the most common Davidson Pointe roof choices.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">Architectural Shingles</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$14K-$26K</p>
                <p className="text-gray text-sm mb-3">
                  GAF Timberline HDZ or CertainTeed Landmark in ARC-approved Davidson Pointe palettes. The most
                  common cohort replacement on the street.
                </p>
                <ul className="space-y-1 text-sm text-gray">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Lifetime limited warranty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>130+ MPH wind rating</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 ring-2 ring-blue-600">
                <h3 className="font-bold text-dark text-lg mb-2">Class 4 IR Shingles</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$22K-$38K</p>
                <p className="text-gray text-sm mb-3">
                  UL 2218 Class 4 hail-rated shingles. Qualifies for homeowner insurance discounts across most
                  carriers in the 28036 zip code.
                </p>
                <ul className="space-y-1 text-sm text-gray">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Hail and impact rated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Insurance premium savings</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-2">DaVinci Synthetic Slate</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$55K-$95K</p>
                <p className="text-gray text-sm mb-3">
                  Premium ARC-approved synthetic slate for Davidson Pointe homeowners who want a 50-year roof
                  with a slate aesthetic on brick architecture.
                </p>
                <ul className="space-y-1 text-sm text-gray">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Class 4 hail rated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>50-year manufacturer warranty</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray text-center mt-8">
              Need a precise number for your home? See our{' '}
              <Link href="/lake-norman-roofing-costs-2026" className="text-primary font-medium hover:underline">
                2026 Lake Norman roofing cost guide
              </Link>{' '}
              or{' '}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                request a free Davidson Pointe estimate
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* HOA / ARC Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Davidson Pointe HOA &amp; ARC Approval for Roofing
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              The Davidson Pointe HOA Architectural Review Committee (ARC) reviews all exterior changes,
              including roof color, material, and accent metal. Approval is required before any work begins.
              We&apos;ve walked dozens of Davidson Pointe homeowners through this process and we handle the full
              packet for you.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-dark text-lg mb-3">What the ARC Reviews</h3>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Shingle manufacturer, line, and weight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Color match to traditional Davidson Pointe palette</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Accent metal finish on porches and dormers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Material upgrades (Class 4 IR, synthetic slate)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-dark text-lg mb-3">What We Submit For You</h3>
                <ul className="space-y-2 text-gray text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Manufacturer color chips and product spec sheets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Photos of your existing roof and accent details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Installer credentials (GAF Master Elite, license, insurance)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Project timeline and protection plan for landscaping</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-100 rounded-xl p-6 mt-6">
              <p className="text-sm text-dark">
                <strong>Davidson Pointe color tip:</strong> The most commonly approved palettes are Weathered
                Wood, Charcoal, Driftwood, and Pewter Gray. Bright colors and three-tab shingles are typically
                not approved. We bring physical color chips to your home so you can compare against your brick
                and trim before submitting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 25-30 Year Cohort Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Why Many Davidson Pointe Homes Are Replacing Roofs Now
            </h2>
            <p className="text-gray text-lg mb-8 text-center">
              Davidson Pointe was built primarily between 1995 and 2015. Most of those original roofs were
              architectural shingles with a real-world Lake Norman lifespan of 20-30 years. The math is simple
              -- the neighborhood is now in the heart of its replacement window.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Granule Loss &amp; UV Damage</h3>
                <p className="text-gray text-sm">
                  Davidson&apos;s long, hot summers and high UV index slowly bake the asphalt and erode shingle
                  granules. South-facing slopes on Davidson Pointe homes show this first -- bald spots,
                  exposed mat, and dark streaks are early warning signs.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Hail &amp; Wind Events</h3>
                <p className="text-gray text-sm">
                  Periodic Lake Norman hail and wind events knock granules loose, fracture shingles, and lift
                  ridge caps. Davidson Pointe homes that have weathered multiple storm cycles are usually past
                  due even if leaks haven&apos;t started yet. We document damage for insurance claims.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Pipe Boots &amp; Flashing</h3>
                <p className="text-gray text-sm">
                  Rubber pipe boots are the #1 leak point on 25-30 year cohort roofs. Davidson Pointe homes
                  built in the late 90s and early 2000s typically have 2-4 boots that are now cracked and
                  failing. Flashing around chimneys and skylights also degrades on this cohort.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-dark text-lg mb-3">Insurance &amp; Resale Value</h3>
                <p className="text-gray text-sm">
                  Some carriers in Mecklenburg County are tightening underwriting on roofs older than 20-25
                  years. A new roof at Davidson Pointe protects your insurance eligibility and significantly
                  improves resale value -- often returning 60-70% of the project cost at sale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Free Davidson Pointe Roof Inspection
              </h2>
              <p className="text-white/90">
                We&apos;ll walk your roof, photograph the issues, and tell you exactly where you stand on the
                25-30 year cohort.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-700"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Inspection
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-blue-700 hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Best Roofing Now is Davidson Pointe's Trusted Roofer */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Best Roofing Now Is Davidson Pointe&apos;s Trusted Roofer
            </h2>
            <p className="text-gray text-lg">
              We are based in the Lake Norman corridor and we work in Davidson every week. Davidson Pointe
              homeowners choose us because we are credentialed, local, and accountable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Around Davidson Pointe */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Service Areas Near Davidson Pointe
            </h2>
            <p className="text-gray text-lg text-center mb-10">
              Davidson Pointe sits at the heart of Davidson 28036, walkable to downtown and Davidson College,
              5-10 minutes from Lake Norman. We serve the whole Davidson and Lake Norman corridor from this
              base.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/roofing-davidson-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <MapPin className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Davidson NC</h3>
                <p className="text-gray text-sm mb-3">Full-service roofing across all Davidson neighborhoods and 28036.</p>
                <span className="inline-flex items-center text-primary font-medium text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/roofing-river-run-davidson-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <Hammer className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing River Run Davidson</h3>
                <p className="text-gray text-sm mb-3">Country club and gated community roofing on Davidson-Concord Rd.</p>
                <span className="inline-flex items-center text-primary font-medium text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/roofing-lake-norman-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <Home className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Lake Norman NC</h3>
                <p className="text-gray text-sm mb-3">Full roofing services across the entire Lake Norman region.</p>
                <span className="inline-flex items-center text-primary font-medium text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/roof-replacement-davidson-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <Shield className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roof Replacement Davidson</h3>
                <p className="text-gray text-sm mb-3">Full tear-off and re-roof for the 25-30 year Davidson cohort.</p>
                <span className="inline-flex items-center text-primary font-medium text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/roof-repair-davidson-nc" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <Hammer className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roof Repair Davidson</h3>
                <p className="text-gray text-sm mb-3">Same-week leak repair, ridge caps, pipe boots, and storm patches.</p>
                <span className="inline-flex items-center text-primary font-medium text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/lake-norman-roofing-guide" className="group bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <Gem className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Lake Norman Roofing Guide</h3>
                <p className="text-gray text-sm mb-3">In-depth guide for materials, costs, and HOA processes around LKN.</p>
                <span className="inline-flex items-center text-primary font-medium text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Davidson Pointe Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Hyper-local answers for Davidson Pointe homeowners in Davidson NC 28036.
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

      {/* Cross-Link Strip */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Related Davidson + Lake Norman Resources
            </h2>
            <p className="text-gray">
              Explore more from our Davidson and Lake Norman roofing library.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link href="/roofing-davidson-nc" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-100 transition">Roofing Davidson NC</Link>
            <Link href="/roofing-river-run-davidson-nc" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-100 transition">Roofing River Run Davidson</Link>
            <Link href="/roofing-lake-norman-nc" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-100 transition">Roofing Lake Norman NC</Link>
            <Link href="/lake-norman-roofing-guide" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-100 transition">Lake Norman Roofing Guide</Link>
            <Link href="/roof-repair-davidson-nc" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-100 transition">Roof Repair Davidson</Link>
            <Link href="/roof-replacement-davidson-nc" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-100 transition">Roof Replacement Davidson</Link>
            <Link href="/metal-roofing-davidson-nc" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-100 transition">Metal Roofing Davidson</Link>
            <Link href="/synthetic-slate-roofing-lake-norman-nc" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-100 transition">Synthetic Slate Lake Norman</Link>
            <Link href="/storm-damage-roof-repair-davidson-nc" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-100 transition">Storm Damage Davidson</Link>
            <Link href="/lake-norman-roofing-costs-2026" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-100 transition">2026 LKN Roofing Costs</Link>
            <Link href="/services/roof-replacement" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-100 transition">Roof Replacement Services</Link>
            <Link href="/contact" className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-100 transition">Contact Best Roofing Now</Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="location" city="Davidson" slug="roofing-davidson-pointe-davidson-nc" />

      <CityGeoSection
        city="Davidson"
        state="NC"
        citySlug="davidson-nc"
        service="Roofing"
      />

      <LKNNeighborhoodGrid currentCity="Davidson" currentSlug="roofing-davidson-pointe-davidson-nc" />
      <LKNPartnershipsBlock city={"Davidson"} />
      <LKNDataCitations city={"Davidson"} />
      <CTASection
        title="Get Your Davidson Pointe Roof Replacement Quote"
        subtitle="If your Davidson Pointe roof is approaching the 25-30 year mark, schedule a free on-site inspection. We'll walk your roof, document the condition, prepare your Davidson Pointe HOA ARC packet, and give you a detailed proposal -- with no pressure and no upsell."
      />
    </>
  );
}
