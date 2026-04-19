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
  Home,
  Waves,
  MapPin,
  Anchor,
  Trees,
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
  title: 'Roofing The Farms Mooresville NC',
  description:
    'Roofing for The Farms in Mooresville NC on Brawley School Rd. Architectural shingles, metal accents, HOA-approved colors. BBB A+ rated, free estimates.',
  keywords: [
    'the farms mooresville roofing',
    'roofing the farms mooresville nc',
    'the farms roofer',
    'roof replacement the farms mooresville',
    'brawley school road roofing',
    'the village at the farms roofing',
    'mooresville 28117 roofing',
    'lake norman peninsula roofing',
    'the farms hoa roof colors',
    'architectural shingles the farms mooresville',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-the-farms-mooresville-nc`,
  },
  openGraph: {
    title: 'Roofing The Farms Mooresville NC | Brawley School Rd Roofer',
    description:
      'Trusted roofer for The Farms Mooresville on Brawley School Rd. Architectural shingles, synthetic slate, standing seam metal, ARC submissions, and storm repair for Lake Norman peninsula homes in 28117.',
    url: `${SITE_CONFIG.url}/roofing-the-farms-mooresville-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero13,
        width: 1200,
        height: 630,
        alt: 'Roofing The Farms Mooresville NC - Best Roofing Now Brawley School Road specialists',
      },
    ],
  },
};

// Roofing services for The Farms Mooresville
const services = [
  {
    title: 'Roof Replacement',
    description:
      'Full roof replacement for The Farms Mooresville homes built 2000-2015 that are now hitting the 20-25 year shingle replacement window. GAF, CertainTeed, and Owens Corning architectural shingles in HOA-approved colors.',
    benefits: ['Lifetime warranty', 'HOA color match', '20-25 yr cohort'],
    href: '/roof-replacement-mooresville-nc',
  },
  {
    title: 'Architectural Shingles',
    description:
      'Architectural (dimensional) shingles dominate The Farms roofscape. We install GAF Timberline HDZ, CertainTeed Landmark, and Owens Corning Duration in Brawley School Rd-friendly weatherwood, driftwood, and slate-tone palettes.',
    benefits: ['130 MPH wind rated', 'Algae resistant', 'ARC approved tones'],
    href: '/services/roof-replacement',
  },
  {
    title: 'Standing Seam Metal Accents',
    description:
      'Standing seam metal accents on porches, dormers, and bay windows are a growing trend at The Farms. We blend painted Galvalume metal with shingle fields for a transitional craftsman look that holds up to Lake Norman wind.',
    benefits: ['50+ yr lifespan', 'Wind resistant', 'Modern curb appeal'],
    href: '/metal-roofing-mooresville-nc',
  },
  {
    title: 'Synthetic Slate Upgrades',
    description:
      'Synthetic slate (DaVinci, Brava) is a popular upgrade at The Farms Mooresville for homes wanting heirloom looks without the weight. Class 4 impact rated and approved by the HOA architectural review.',
    benefits: ['Class 4 impact', '50 yr warranty', 'ARC favorite'],
    href: '/services/roof-replacement',
  },
  {
    title: 'Storm & Hail Damage Repair',
    description:
      'Lake Norman peninsula storms hit The Farms hard. We document hail strikes, file insurance claims, and restore storm-damaged roofs across Brawley School Rd. Same-week tarping and 24/7 emergency response in 28117.',
    benefits: ['Insurance liaison', '24/7 emergency', 'Same-week tarp'],
    href: '/storm-damage-roof-repair-mooresville-nc',
  },
  {
    title: 'Roof Repair & Maintenance',
    description:
      'From wind-lifted shingles to flashing leaks at chimneys and skylights, we fix it fast. Many The Farms homes need targeted repairs before a full replacement -- we honor that and only recommend what your roof actually needs.',
    benefits: ['Same-day quotes', 'Honest scope', 'Skylight specialists'],
    href: '/roof-repair-mooresville-nc',
  },
];

// Why The Farms homeowners choose us
const whyChooseUs = [
  {
    icon: MapPin,
    title: 'Brawley School Rd Locals',
    description:
      'We work The Farms, The Point, The Peninsula, and the entire Brawley School Rd corridor weekly. Our crews know 28117, the school zone traffic, and the HOA cadence.',
  },
  {
    icon: Home,
    title: 'HOA & ARC Experience',
    description:
      'The Farms HOA architectural review committee requires color samples, material specs, and submitted plans. We package everything for fast ARC approval.',
  },
  {
    icon: Award,
    title: 'GAF Master Elite Certified',
    description:
      'Top 2% of US roofers. GAF Master Elite status unlocks the Golden Pledge 50-year warranty for The Farms homeowners -- transferable when you sell.',
  },
  {
    icon: Waves,
    title: 'Lake Norman Wind Specialists',
    description:
      'The Farms sits on the Lake Norman peninsula and gets full lake-effect wind. We install with hand-nailed accuracy and 130+ MPH wind ratings.',
  },
  {
    icon: Shield,
    title: 'Insurance Claim Pros',
    description:
      'We work directly with your carrier on storm and hail claims at The Farms. Detailed damage docs, scope alignment, and Xactimate-friendly estimates.',
  },
  {
    icon: Trees,
    title: 'Mature Landscape Protection',
    description:
      'The Farms has 20+ year mature landscaping. Our crews tarp, board, and clean with magnetic sweeps so your azaleas, mulch beds, and pool stay pristine.',
  },
];

// FAQs hyper-local to The Farms Mooresville
const faqs = [
  {
    question: 'Who is the best roofer at The Farms in Mooresville NC?',
    answer:
      'Best Roofing Now is the top-rated roofer serving The Farms in Mooresville NC. We hold a 5-star Google rating, BBB A+ accreditation, and GAF Master Elite certification (top 2% nationally). Our crews work The Farms and the Brawley School Rd corridor every week, so we know the HOA, the architectural review process, and the Lake Norman peninsula wind exposure that drives material choice. Call us for a free roof inspection at any home in The Farms or The Village at the Farms.',
  },
  {
    question: 'How much does a roof replacement cost at The Farms Mooresville?',
    answer:
      'A typical roof replacement at The Farms Mooresville runs $14,500 to $32,000 for architectural shingles on a 2,800-4,500 sq ft home, depending on roof pitch, layers to tear off, and shingle line. Synthetic slate or DaVinci composite upgrades range $35,000-$65,000. Standing seam metal accent work adds $4,000-$12,000. Townhomes in The Village at the Farms typically run $9,000-$16,000. Get a free, itemized quote and see our full Mooresville roofing cost guide.',
  },
  {
    question: 'Does The Farms HOA require ARC approval for a new roof?',
    answer:
      'Yes. The Farms HOA architectural review committee (ARC) requires written approval before any roof color, material, or profile change. You typically submit a roofing application with manufacturer specs, a physical color sample, and the contractor name 30 days before work. Best Roofing Now prepares the entire ARC submission package for The Farms homeowners at no charge -- including spec sheets, warranty docs, and color chips.',
  },
  {
    question: 'What roofing colors are approved at The Farms?',
    answer:
      'The Farms HOA generally approves earth-tone shingle colors that complement the brick and craftsman exteriors common along Brawley School Rd. Approved colors include weatherwood, driftwood, pewter, charcoal, slatestone gray, and barkwood. Bright or untraditional colors (red, blue, green) are typically not approved. Best Roofing Now brings physical color samples to your home and submits the chosen color to the ARC for you.',
  },
  {
    question: 'How long do shingle roofs last at The Farms Mooresville?',
    answer:
      'Architectural shingle roofs at The Farms Mooresville typically last 22-28 years. Because most of The Farms was built between 2000 and 2015, a large cohort of homes is now in the 20-25 year replacement window. Lake Norman peninsula sun exposure, summer thunderstorms, and occasional hail accelerate granule loss. We recommend a free roof inspection once your roof passes year 18 to plan the replacement before leaks start.',
  },
  {
    question: 'Can I install metal accents at The Farms?',
    answer:
      'Yes -- metal roofing accents on porches, dormers, and bay windows are increasingly approved by The Farms HOA when the color matches the shingle palette. Standing seam in matte black, dark bronze, or charcoal is the most commonly approved finish. Full metal roofs (entire home) are evaluated case-by-case. Best Roofing Now installs both shingle and metal accent combinations across The Farms Mooresville and the Brawley School Rd peninsula.',
  },
  {
    question: 'Will my insurance cover hail damage at The Farms?',
    answer:
      'Yes -- if your homeowners policy has open-peril coverage (most standard policies do), hail and wind damage at The Farms is generally covered. After a storm, we provide a free documented inspection with photos, measurements, and a hail-strike map. We work directly with your adjuster, align scopes, and handle the entire insurance claim process. Most The Farms homeowners only pay their deductible.',
  },
  {
    question: 'What is the best roofing material for Lake Norman peninsula homes?',
    answer:
      'For Lake Norman peninsula homes like those at The Farms Mooresville, we recommend a Class 4 impact-rated architectural shingle (GAF Timberline HDZ Reflector Series, CertainTeed Landmark IR) or a synthetic slate composite. Both handle Lake Norman wind, qualify for insurance impact-resistance discounts, and meet The Farms HOA standards. Standing seam metal is excellent for accents but is reviewed case-by-case by the ARC for full-roof installs.',
  },
  {
    question: 'How quickly can roof repairs be done at The Farms?',
    answer:
      'Emergency roof repairs at The Farms Mooresville are typically completed within 24-48 hours. We dispatch a crew the same day for active leaks, tarp the area, and schedule the full repair within the week. For non-emergency repairs (missing shingles, minor flashing work), most jobs are completed within 5-7 business days. Call our 24/7 line at ' +
      SITE_CONFIG.phone +
      ' for any urgent issue in 28117.',
  },
  {
    question: 'Does Best Roofing Now serve The Village at the Farms townhomes?',
    answer:
      'Yes. Best Roofing Now services The Village at the Farms townhomes as well as the single-family homes throughout The Farms Mooresville. Townhome roofs require coordination with the HOA management and adjacent units -- we handle all communication, tarp neighboring units during tear-off, and time the project to minimize disruption. Most townhome replacements complete in 2-3 days.',
  },
];

export default function RoofingTheFarmsMooresvillePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Mooresville NC', url: `${SITE_CONFIG.url}/roofing-mooresville-nc` },
          { name: 'Roofing The Farms Mooresville NC', url: `${SITE_CONFIG.url}/roofing-the-farms-mooresville-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-the-farms-mooresville-nc`}
        pageName="Roofing The Farms Mooresville NC"
        city="Mooresville"
      />
      <VoiceSearchActionSchema />
      <LKNHowToBundle pageUrl={`${SITE_CONFIG.url}/roofing-the-farms-mooresville-nc`} city={"Mooresville"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold">The Farms Mooresville | Brawley School Rd</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing The Farms <br className="hidden md:block" />
              <span className="text-blue-300">Mooresville NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Trusted roofer for The Farms on the Lake Norman peninsula in 28117
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              The Farms is one of Mooresville&apos;s most established master-planned communities, built primarily
              between 2000 and 2015 along Brawley School Rd on the Lake Norman peninsula. With many homes now
              hitting the 20-25 year roof replacement cohort, Best Roofing Now is the trusted The Farms roofer
              for architectural shingle replacements, synthetic slate upgrades, standing seam metal accents,
              and HOA-compliant ARC submissions.
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
                Free The Farms Roof Inspection
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
                <MapPin className="w-5 h-5 text-blue-300" />
                28117 Local Crews
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-300" />
                130+ MPH Wind Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-300" />
                GAF Master Elite
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About The Farms */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why The Farms Homeowners Choose Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-4">
                The Farms in Mooresville is a 1,000+ home master-planned community on the Lake Norman peninsula
                along Brawley School Rd. Built largely between 2000 and 2015, The Farms features traditional
                brick, transitional, and craftsman architecture set among mature landscaping, walking trails,
                a community pool, clubhouse, and tennis courts. Median home values in The Farms now range from
                $575K to $950K, with lakefront-access lots commanding a premium.
              </p>
              <p className="text-gray text-lg mb-6">
                Because most of The Farms was built within the same window, a large cohort of homes is now
                arriving at the 20-25 year shingle replacement mark at the same time. Best Roofing Now is the
                Brawley School Rd specialist for these projects -- handling the HOA architectural review
                committee submission, color matching, mature landscape protection, and Lake Norman wind-rated
                installation that The Farms Mooresville homeowners expect.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">$575K-$950K</p>
                  <p className="text-sm text-gray">Median Home Values</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">1,000+</p>
                  <p className="text-sm text-gray">Homes in The Farms</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">2000-2015</p>
                  <p className="text-sm text-gray">Build Era</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-700">28117</p>
                  <p className="text-sm text-gray">Iredell County Zip</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.hero.hero13}
                alt="Roofing The Farms Mooresville NC architectural shingle replacement Brawley School Rd"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white rounded-xl shadow-lg p-4">
                <p className="font-bold text-2xl">130+</p>
                <p className="text-sm text-white/90">MPH Wind Rated</p>
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
              <p className="text-sm text-gray">Serving Lake Norman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roofing Services for The Farms Mooresville Homes
            </h2>
            <p className="text-gray text-lg">
              From full architectural shingle replacements to standing seam metal accents and synthetic slate
              upgrades, we install the materials The Farms HOA approves and Lake Norman peninsula weather demands.
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

      {/* Roof Cost Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              How Much Does a Roof Cost at The Farms Mooresville?
            </h2>
            <p className="text-gray text-lg text-center mb-10 max-w-3xl mx-auto">
              Roofing costs at The Farms vary by home size, pitch, material, and tear-off complexity. Below is
              what The Farms Mooresville homeowners typically pay in 2026 for a complete replacement on the
              Lake Norman peninsula. For a precise quote, see our{' '}
              <Link href="/roofing-cost-mooresville-nc" className="text-blue-700 underline">
                Mooresville roofing cost guide
              </Link>{' '}
              or our{' '}
              <Link href="/lake-norman-roofing-costs-2026" className="text-blue-700 underline">
                2026 Lake Norman roofing cost report
              </Link>
              .
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-bold text-dark text-lg mb-2">Architectural Shingles</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$14,500 - $32,000</p>
                <p className="text-gray text-sm">
                  GAF Timberline HDZ, CertainTeed Landmark, or Owens Corning Duration on a 2,800-4,500 sq ft
                  home in The Farms. Includes tear-off, ice &amp; water shield, drip edge, and Master Elite
                  warranty.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-bold text-dark text-lg mb-2">Class 4 Impact-Resistant Shingles</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$18,500 - $38,000</p>
                <p className="text-gray text-sm">
                  GAF Timberline HDZ Reflector Series or CertainTeed Landmark IR. Often qualifies for an
                  insurance discount on Lake Norman peninsula homes in 28117.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-bold text-dark text-lg mb-2">Synthetic Slate / Composite</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$35,000 - $65,000</p>
                <p className="text-gray text-sm">
                  DaVinci or Brava synthetic slate. Heirloom looks, Class 4 impact, 50-year warranty. Popular
                  ARC-approved upgrade at The Farms Mooresville.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-bold text-dark text-lg mb-2">Standing Seam Metal Accents</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$4,000 - $12,000</p>
                <p className="text-gray text-sm">
                  Painted Galvalume standing seam on porches, dormers, or bay windows. Adds 50+ years of life
                  and a transitional craftsman look common at The Farms.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-bold text-dark text-lg mb-2">The Village at the Farms Townhomes</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$9,000 - $16,000</p>
                <p className="text-gray text-sm">
                  Townhome roofs in The Village at the Farms section. We coordinate with the HOA management
                  and adjacent units for a 2-3 day completion.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-bold text-dark text-lg mb-2">Targeted Repair</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">$450 - $2,800</p>
                <p className="text-gray text-sm">
                  Wind-lifted shingle replacement, chimney flashing, skylight reseal, or storm damage patch
                  before a full replacement is needed at The Farms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOA & ARC Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              The Farms HOA &amp; ARC Requirements for Roofing
            </h2>
            <p className="text-gray text-lg text-center mb-10">
              Like most Brawley School Rd master-planned communities, The Farms HOA requires architectural
              review committee (ARC) approval before any new roof color, material, or profile change.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <Hammer className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-dark text-lg mb-2">Submit Before You Tear Off</h3>
                <p className="text-gray text-sm">
                  The Farms ARC typically requires submission 30 days before work starts. Best Roofing Now
                  prepares the package -- material spec sheet, manufacturer warranty, color sample chip, and
                  contractor license -- at no charge to The Farms Mooresville homeowners.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-dark text-lg mb-2">Approved Color Palette</h3>
                <p className="text-gray text-sm">
                  Earth-tone shingles dominate The Farms approved list: weatherwood, driftwood, pewter,
                  charcoal, slatestone gray, and barkwood. Bright or non-traditional colors are typically
                  denied. We bring physical samples to your home before submitting.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <Shield className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-dark text-lg mb-2">Material Standards</h3>
                <p className="text-gray text-sm">
                  Architectural (dimensional) shingles are the default at The Farms. Synthetic slate
                  (DaVinci, Brava) is widely approved as an upgrade. Standing seam metal accents are usually
                  approved when the color matches the shingle field.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <Trees className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-dark text-lg mb-2">Site &amp; Landscape Protection</h3>
                <p className="text-gray text-sm">
                  The Farms HOA expects job-site cleanliness. We tarp landscape beds, board pool surrounds,
                  protect mature azaleas, run magnetic sweeps daily, and stage the dumpster off the street
                  per HOA guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Best Roofing Now Is The Farms&apos; Trusted Roofer
            </h2>
            <p className="text-gray text-lg">
              Hiring a roofer for The Farms Mooresville is a long-term decision. Our crews live and work the
              Brawley School Rd corridor and bring the certifications, experience, and care that matches the
              community standard.
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

      {/* Mid-Page CTA */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready for a New Roof at The Farms?
              </h2>
              <p className="text-white/90">
                Free inspection, free ARC submission package, and a no-pressure quote for your Brawley School
                Rd home.
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

      {/* 20-25 Year Cohort Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Why Many The Farms Homes Are Replacing Roofs Now
            </h2>
            <p className="text-gray text-lg text-center mb-10">
              The Farms Mooresville was built primarily between 2000 and 2015 -- which means the original
              architectural shingle roofs are now hitting the 20-25 year replacement window. If your roof is
              from the early 2000s build cycle, here&apos;s what to watch for.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-lg mb-3">Granule Loss</h3>
                <p className="text-gray text-sm">
                  Bald spots, granules in gutters, and exposed asphalt mat. Lake Norman peninsula sun
                  accelerates this on south-facing slopes at The Farms. A telltale sign your shingles are
                  near end-of-life.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-lg mb-3">Curling &amp; Cupping</h3>
                <p className="text-gray text-sm">
                  Shingle edges lifting or center swelling. Once curling starts, wind uplift accelerates and
                  leaks follow within 1-2 storm seasons. Common at year 22+ on The Farms homes.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-lg mb-3">Skylight &amp; Flashing Leaks</h3>
                <p className="text-gray text-sm">
                  Skylight rubber gaskets and chimney flashing typically fail by year 18-22. Many The Farms
                  homeowners get a leak that signals the entire roof is due -- not just one repair.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-lg mb-3">Hail &amp; Wind Strikes</h3>
                <p className="text-gray text-sm">
                  Lake Norman peninsula thunderstorms and 60+ MPH wind events leave cumulative damage.
                  Insurance often covers a full replacement if your aged shingles are also storm-damaged.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-lg mb-3">Algae Streaking</h3>
                <p className="text-gray text-sm">
                  Black streaks on north-facing slopes. Older shingles lack algae-resistant copper granules.
                  New GAF and CertainTeed shingles have StainGuard Plus warranties up to 25 years.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark text-lg mb-3">Resale Timing</h3>
                <p className="text-gray text-sm">
                  Selling soon? A new roof at The Farms returns 60-70% of cost at sale and removes the #1
                  inspection deal-killer in 28117. Best Roofing Now offers transferable Master Elite
                  warranties that boost buyer confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Service Areas Near The Farms
            </h2>
            <p className="text-gray text-lg">
              In addition to The Farms Mooresville, our crews serve neighboring Lake Norman peninsula
              communities and the broader Brawley School Rd corridor across Iredell County.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/roofing-mooresville-nc" className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <MapPin className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Mooresville NC</h3>
              <p className="text-gray text-sm mb-3">All of Mooresville, including 28115, 28117, and 28125 zips</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-the-point-mooresville-nc" className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <Anchor className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing The Point Mooresville</h3>
              <p className="text-gray text-sm mb-3">Luxury lakefront roofing for The Point peninsula community</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-lake-norman-nc" className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <Waves className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roofing Lake Norman NC</h3>
              <p className="text-gray text-sm mb-3">Full Lake Norman peninsula coverage including Brawley School Rd</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roof-replacement-mooresville-nc" className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <Hammer className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roof Replacement Mooresville</h3>
              <p className="text-gray text-sm mb-3">Complete roof replacement service across 28117 Mooresville</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roof-repair-mooresville-nc" className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <Shield className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Roof Repair Mooresville</h3>
              <p className="text-gray text-sm mb-3">Targeted roof repairs across The Farms and 28117</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/storm-damage-roof-repair-mooresville-nc" className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <Waves className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Storm Damage Mooresville</h3>
              <p className="text-gray text-sm mb-3">Emergency Lake Norman peninsula storm response in The Farms</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
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
                The Farms Mooresville Roofing FAQs
              </h2>
              <p className="text-gray text-lg">
                Hyper-local answers for The Farms homeowners on Brawley School Rd in 28117. Lake Norman High
                school zone, Iredell County.
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

      {/* Related Links */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Explore More Lake Norman Resources
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/lake-norman-roofing-guide" className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <Waves className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Lake Norman Roofing Guide</h3>
              <p className="text-gray text-sm mb-3">20K-word resource for Lake Norman peninsula homeowners</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Read Guide <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/metal-roofing-mooresville-nc" className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <Shield className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Metal Roofing Mooresville</h3>
              <p className="text-gray text-sm mb-3">Standing seam metal accents and full roofs in 28117</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/roofing-cost-mooresville-nc" className="group bg-light rounded-xl p-6 hover:shadow-lg transition-all">
              <Calendar className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">Mooresville Roofing Costs</h3>
              <p className="text-gray text-sm mb-3">Detailed 2026 cost breakdowns for The Farms area</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                See Pricing <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="location" city="Mooresville" slug="roofing-the-farms-mooresville-nc" />

      <CityGeoSection
        city="Mooresville"
        state="NC"
        citySlug="mooresville-nc"
        service="Roofing"
      />

      <LKNNeighborhoodGrid currentCity="Mooresville" currentSlug="roofing-the-farms-mooresville-nc" />
      <LKNPartnershipsBlock city={"Mooresville"} />
      <LKNDataCitations city={"Mooresville"} />

      <CTASection
        title="Get Your Free The Farms Roof Inspection"
        subtitle="Best Roofing Now is the trusted The Farms Mooresville roofer for Brawley School Rd homeowners on the Lake Norman peninsula. Free inspection, free HOA ARC submission package, and a no-pressure quote -- whether you need a targeted repair or a full replacement on your 28117 home."
      />
    </>
  );
}
