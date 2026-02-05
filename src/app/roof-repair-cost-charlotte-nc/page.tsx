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
  MapPin,
  Wrench,
  DollarSign,
  Zap,
  Layers,
  Calculator,
  AlertTriangle,
  CloudRain,
  Home,
  TrendingUp,
  FileText,
  ThumbsUp,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import EstimateButton from '@/components/estimate/EstimateButton';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Repair Cost Charlotte NC | 2026 Pricing Guide | Best Roofing Now',
  description:
    'How much does roof repair cost in Charlotte NC? 2026 pricing guide: minor repairs $150-$500, moderate $500-$1,500, major $1,500-$5,000+. Free estimates, transparent pricing, no hidden fees. Licensed & insured.',
  keywords: [
    'roof repair cost charlotte nc',
    'how much does roof repair cost charlotte',
    'roof repair cost near me',
    'minor roof repair cost nc',
    'roof leak repair cost charlotte',
    'roof repair pricing charlotte nc',
    'shingle repair cost charlotte',
    'roof repair estimate charlotte nc',
    'emergency roof repair cost charlotte',
    'affordable roof repair charlotte nc',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-repair-cost-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Repair Cost Charlotte NC | 2026 Pricing Guide | Best Roofing Now',
    description:
      'How much does roof repair cost in Charlotte NC? 2026 pricing guide with transparent pricing. Minor repairs from $150, free estimates, no hidden fees. Licensed & insured.',
    url: `${SITE_CONFIG.url}/roof-repair-cost-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.repairs,
        width: 1200,
        height: 630,
        alt: 'Roof repair cost Charlotte NC - Best Roofing Now transparent pricing guide',
      },
    ],
  },
};

// Repair cost breakdown types
const repairCostTypes = [
  {
    icon: CloudRain,
    title: 'Leak Repair',
    priceRange: '$150 - $500',
    description: 'The most common roof repair in Charlotte. Includes locating the source of the leak, patching the affected area, and sealing to prevent future water intrusion.',
  },
  {
    icon: Layers,
    title: 'Shingle Replacement',
    priceRange: '$200 - $800',
    description: 'Replace damaged, cracked, or missing shingles to restore your roof\u2019s protection. Price depends on the number of shingles and area affected.',
  },
  {
    icon: Wrench,
    title: 'Flashing Repair',
    priceRange: '$200 - $600',
    description: 'Fix chimney flashing, vent flashing, or wall flashing to stop water intrusion at vulnerable roof intersections and penetration points.',
  },
  {
    icon: TrendingUp,
    title: 'Valley Repair',
    priceRange: '$300 - $1,000',
    description: 'Repair damaged roof valleys where two slopes meet. Valleys channel heavy water flow and are prone to wear, leaks, and debris buildup.',
  },
  {
    icon: Shield,
    title: 'Ridge Cap Repair',
    priceRange: '$250 - $750',
    description: 'Replace worn, cracked, or blown-off ridge caps along the peak of your roof to prevent water penetration and wind damage.',
  },
  {
    icon: AlertTriangle,
    title: 'Sagging / Structural Repair',
    priceRange: '$1,000 - $5,000+',
    description: 'Address underlying roof deck damage, sagging rafters, or structural issues. These repairs are critical and may require decking replacement.',
  },
];

// Factors affecting roof repair cost
const costFactors = [
  {
    icon: Layers,
    title: 'Roof Material Type',
    description: 'Asphalt shingle repairs are the most affordable. Metal, tile, and slate roofs cost more to repair due to specialized materials and labor requirements.',
  },
  {
    icon: TrendingUp,
    title: 'Roof Pitch & Accessibility',
    description: 'Steeper roofs require additional safety equipment and take longer to work on. Two-story or multi-level homes also add to the cost due to increased ladder and staging needs.',
  },
  {
    icon: AlertTriangle,
    title: 'Extent of Damage',
    description: 'A small patch or single shingle replacement costs far less than repairing a large section. The more widespread the damage, the higher the repair cost.',
  },
  {
    icon: Home,
    title: 'Underlying Deck Damage',
    description: 'If the plywood decking beneath your shingles is rotted or damaged, it must be replaced before new roofing is installed, significantly increasing the total cost.',
  },
  {
    icon: Clock,
    title: 'Time of Year',
    description: 'Emergency repairs during storms or peak season (spring/summer) may cost more. Scheduling repairs in fall or winter can sometimes save money when contractors have more availability.',
  },
  {
    icon: Shield,
    title: 'Insurance Coverage',
    description: 'Storm damage, hail, and fallen trees may be covered by homeowner\u2019s insurance. Filing a claim can significantly reduce your out-of-pocket roof repair cost.',
  },
];

// Why choose us benefits
const whyChooseUs = [
  {
    icon: ThumbsUp,
    title: 'Honest Assessments',
    description: 'We tell you the truth \u2014 whether a repair is enough or if replacement makes more sense. No upselling, just honest recommendations.',
  },
  {
    icon: CheckCircle,
    title: 'Free Roof Inspections',
    description: 'Every repair starts with a thorough free inspection. We identify all issues so you understand exactly what needs fixing before any work begins.',
  },
  {
    icon: FileText,
    title: 'Transparent Written Estimates',
    description: 'You receive a detailed written estimate with itemized costs. No surprise fees, no hidden charges \u2014 the price we quote is the price you pay.',
  },
  {
    icon: Shield,
    title: 'Insurance Claim Assistance',
    description: 'We help you navigate the insurance claim process, providing documentation, photos, and direct communication with your adjuster.',
  },
  {
    icon: Zap,
    title: 'Same-Day Emergency Service',
    description: 'Roof leaking right now? Our emergency repair team can respond the same day to stop the damage and protect your home.',
  },
  {
    icon: Award,
    title: 'Workmanship Warranty',
    description: 'All repairs are backed by our workmanship warranty. If the repair fails, we come back and fix it at no additional cost.',
  },
];

// Charlotte areas served
const charlotteAreas = [
  'Myers Park',
  'Dilworth',
  'South End',
  'NoDa',
  'Plaza Midwood',
  'Ballantyne',
  'University City',
  'Steele Creek',
  'South Charlotte',
  'Uptown Charlotte',
  'Cotswold',
  'Eastover',
];

// Nearby cities served
const nearbyCities = [
  { name: 'Huntersville', href: '/locations/huntersville-nc' },
  { name: 'Mooresville', href: '/locations/mooresville-nc' },
  { name: 'Concord', href: '/locations/concord-nc' },
  { name: 'Gastonia', href: '/locations/gastonia-nc' },
  { name: 'Rock Hill, SC', href: '/locations/rock-hill-sc' },
  { name: 'Fort Mill, SC', href: '/locations/fort-mill-sc' },
  { name: 'Matthews', href: '/locations/matthews-nc' },
  { name: 'Mount Holly', href: '/locations/mount-holly-nc' },
];

// FAQs about roof repair cost
const faqs = [
  {
    question: 'How much does a typical roof repair cost in Charlotte NC?',
    answer:
      'A typical roof repair in Charlotte NC costs between $150 and $1,500 depending on the type and extent of the damage. Minor repairs like small leaks or single shingle replacements run $150-$500. Moderate repairs involving flashing, valleys, or multiple shingle areas cost $500-$1,500. Major structural repairs can exceed $5,000. Best Roofing Now provides free inspections and written estimates so you know the exact cost before work begins.',
  },
  {
    question: 'Does homeowner insurance cover roof repairs?',
    answer:
      'Homeowner insurance typically covers roof repairs caused by sudden, accidental events like storms, hail, fallen trees, and wind damage. It usually does not cover damage from normal wear and tear, neglected maintenance, or age-related deterioration. Best Roofing Now works directly with insurance companies and can help you file a claim, provide documentation, and communicate with your adjuster to maximize your coverage.',
  },
  {
    question: 'How do I know if I need roof repair or replacement?',
    answer:
      'You likely need only a repair if the damage is localized to one area, your roof is less than 15 years old, and you have just 1-2 issues. You should consider full replacement if your roof is over 20 years old, repairs would cost more than 30% of a new roof, you have multiple leaks in different areas, or there is widespread shingle deterioration. Our free inspection will help you make the right decision.',
  },
  {
    question: 'Can I get a roof repair estimate for free?',
    answer:
      'Yes, Best Roofing Now provides 100% free roof repair estimates in Charlotte NC and surrounding areas. We conduct a thorough inspection of your roof, identify all issues, and provide a detailed written estimate with itemized costs. There is no obligation, no pressure, and no hidden fees. Call us or submit a request online to schedule your free estimate.',
  },
  {
    question: 'How long does a roof repair take?',
    answer:
      'Most minor roof repairs in Charlotte are completed in 1-3 hours. Moderate repairs like flashing replacement or valley work typically take 3-6 hours or a half day. Major repairs involving structural work or large sections may require 1-3 days. We always provide a time estimate upfront and work efficiently to minimize disruption to your daily routine.',
  },
  {
    question: 'What is the most common roof repair in Charlotte?',
    answer:
      'The most common roof repair in Charlotte NC is leak repair, often caused by damaged or missing shingles, deteriorated flashing around chimneys and vents, or clogged valleys. Charlotte\u2019s mix of summer storms, heavy rain, and occasional hail makes leak repairs a frequent need for homeowners. Catching leaks early typically costs $150-$500 and prevents much more expensive water damage to your home\u2019s interior.',
  },
  {
    question: 'Is it cheaper to repair a roof in winter?',
    answer:
      'Roof repairs can sometimes be less expensive in fall and winter because it is the off-peak season for roofing contractors in Charlotte. With lower demand, contractors may offer more competitive pricing and faster scheduling. However, weather conditions must be suitable for safe, quality work. Best Roofing Now offers competitive pricing year-round and will never compromise quality regardless of the season.',
  },
  {
    question: 'How much does emergency roof repair cost?',
    answer:
      'Emergency roof repair in Charlotte typically costs $300-$1,500 depending on the severity and scope of the damage. Emergency service may carry a premium over scheduled repairs due to the urgency, after-hours availability, and immediate response required. Best Roofing Now offers same-day emergency service to stop active leaks and prevent further damage to your home. Temporary tarping may be included at no extra charge for active emergencies.',
  },
];

export default function RoofRepairCostCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Repair Cost Charlotte NC', url: `${SITE_CONFIG.url}/roof-repair-cost-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-repair-cost-charlotte-nc`}
        pageName="Roof Repair Cost Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.repairs}
            alt="Roof repair cost Charlotte NC - Best Roofing Now transparent pricing"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Calculator className="w-4 h-4" />
              <span className="text-sm font-semibold">Transparent Pricing | No Hidden Fees</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Repair Cost <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              2026 Pricing Guide &mdash; Know What to Expect Before You Call
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Wondering how much roof repair costs in Charlotte? Best Roofing Now believes in complete transparency.
              From minor leak repairs starting at $150 to major structural work, we provide honest assessments,
              free inspections, and written estimates with no surprise costs.
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
                <DollarSign className="w-5 h-5 text-accent-light" />
                Free Estimates
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                Licensed &amp; Insured
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                No Surprise Costs
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Cost Breakdown Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Repair Cost Breakdown
            </h2>
            <p className="text-gray text-lg">
              Here&apos;s what common roof repairs cost in Charlotte NC in 2026. Prices vary based on
              materials, roof accessibility, and the extent of damage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairCostTypes.map((type) => (
              <div
                key={type.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-1">
                  {type.title}
                </h3>
                <p className="text-xl font-bold text-primary mb-2">{type.priceRange}</p>
                <p className="text-gray text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factors Affecting Cost Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Factors That Affect Roof Repair Cost
            </h2>
            <p className="text-gray text-lg">
              No two roof repairs are the same. These are the key factors that influence what you&apos;ll
              pay for roof repair in Charlotte NC.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costFactors.map((factor) => (
              <div
                key={factor.title}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <factor.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {factor.title}
                </h3>
                <p className="text-gray text-sm">{factor.description}</p>
              </div>
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
                Why Charlotte Homeowners Trust Best Roofing Now for Roof Repairs
              </h2>
              <p className="text-gray text-lg mb-8">
                When it comes to roof repair costs, trust matters. We believe every homeowner deserves
                honest pricing, quality workmanship, and a contractor who stands behind their work.
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
                src={IMAGES.projects.closeup1}
                alt="Roof repair in Charlotte NC - Best Roofing Now quality workmanship"
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
                    <p className="font-bold text-dark">Transparent Pricing</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.roofsInstalled}+ Roofs Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-bold">2026 CHARLOTTE PRICING</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Roof Repair Cost Ranges at a Glance
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Quick reference pricing for roof repairs in Charlotte NC &mdash; get an idea of what to budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Minor Repairs</h3>
              <p className="text-3xl font-bold text-accent mb-2">$150 - $500</p>
              <p className="text-white/80 text-sm">Small leaks, patches, single shingle replacement</p>
              <ul className="text-white/60 text-xs mt-3 space-y-1 text-left">
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /> Leak detection &amp; patching</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /> 1-5 shingle replacement</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /> Minor sealant repairs</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20 ring-2 ring-accent">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Moderate Repairs</h3>
              <p className="text-3xl font-bold text-accent mb-2">$500 - $1,500</p>
              <p className="text-white/80 text-sm">Flashing, valleys, multiple shingle areas</p>
              <ul className="text-white/60 text-xs mt-3 space-y-1 text-left">
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /> Flashing replacement</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /> Valley repairs</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /> Ridge cap replacement</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Major Repairs</h3>
              <p className="text-3xl font-bold text-accent mb-2">$1,500 - $5,000+</p>
              <p className="text-white/80 text-sm">Structural damage, large sections, deck replacement</p>
              <ul className="text-white/60 text-xs mt-3 space-y-1 text-left">
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /> Decking replacement</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /> Structural reinforcement</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /> Large section re-roofing</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <EstimateButton variant="white" size="lg" className="text-lg px-10" estimateType="residential">
              Get Your Free Repair Estimate
            </EstimateButton>
            <p className="text-white/60 text-sm mt-4">
              No obligation &bull; Instant results &bull; 100% free
            </p>
          </div>
        </div>
      </section>

      {/* Repair vs. Replacement Guide Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Calculator className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Decision Guide</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Repair vs. Replacement: When Does Each Make Sense?
            </h2>
            <p className="text-gray text-lg">
              Not sure whether to repair or replace? Here&apos;s a straightforward guide to help you make the
              most cost-effective decision for your Charlotte home.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Repair Column */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800">Repair Your Roof If...</h3>
                  <p className="text-green-600 text-sm">More cost-effective in these situations</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Damage is localized</strong> &mdash; confined to one area or a few shingles, not spread across the entire roof</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Roof is less than 15 years old</strong> &mdash; your roof still has significant life remaining</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Only 1-2 issues found</strong> &mdash; isolated leak, a few missing shingles, or one area of damaged flashing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Repair costs are under 30%</strong> of full replacement cost</span>
                </li>
              </ul>
            </div>

            {/* Replacement Column */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-800">Replace Your Roof If...</h3>
                  <p className="text-red-600 text-sm">Replacement saves money long-term</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Repairs exceed 30% of replacement cost</strong> &mdash; at this point, investing in a new roof is the better value</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Roof is 20+ years old</strong> &mdash; most asphalt shingle roofs in Charlotte reach end-of-life around 20-25 years</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Multiple leaks in different areas</strong> &mdash; widespread issues indicate systemic roof failure</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Widespread shingle deterioration</strong> &mdash; curling, granule loss, or cracking across large areas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray mb-4">
              Not sure which option is right for you? Our free inspection will give you a clear answer.
            </p>
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
            >
              Schedule Your Free Inspection
            </Button>
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
              Roof Repair Services Across the Charlotte Region
            </h2>
            <p className="text-gray text-lg">
              We provide affordable, transparent roof repair pricing throughout Greater Charlotte and surrounding communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Neighborhoods</h3>
              <div className="flex flex-wrap gap-2">
                {charlotteAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block bg-light px-3 py-1 rounded-full text-sm text-gray border border-gray-200"
                  >
                    {area}
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

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roof Repair Cost FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions about roof repair costs in Charlotte NC.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Related Roofing Services
            </h2>
            <p className="text-gray">
              Explore our full range of roofing services and cost guides in Charlotte NC.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/roof-replacement-cost-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Roof Replacement Cost
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roof-inspection-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Roof Inspection Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/emergency-roof-repair-huntersville-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Emergency Roof Repair
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/storm-damage-roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Storm Damage Roof Repair
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/residential-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Residential Roofing Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="roof-repair-cost-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roof-repair-cost-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready to Find Out Your Roof Repair Cost?"
        subtitle="Get a free, no-obligation estimate for your roof repair in Charlotte NC. Our team will inspect your roof, explain exactly what needs fixing, and provide transparent pricing with no hidden fees."
      />
    </>
  );
}
