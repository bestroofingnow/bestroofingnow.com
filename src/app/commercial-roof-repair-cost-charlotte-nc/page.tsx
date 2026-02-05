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
  Building2,
  MapPin,
  Wrench,
  Factory,
  Warehouse,
  DollarSign,
  Ruler,
  Zap,
  Thermometer,
  Truck,
  Layers,
  Calculator,
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
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Commercial Roof Repair Cost Charlotte NC | 2026 Pricing',
  description:
    'Commercial roof repair cost in Charlotte NC: TPO $3-$8/sq ft, EPDM $3-$7/sq ft, metal $5-$12/sq ft. Full pricing guide with free estimates.',
  keywords: [
    'commercial roof repair cost charlotte nc',
    'commercial roofing cost per square foot charlotte',
    'flat roof repair cost charlotte',
    'commercial roof maintenance cost',
    'TPO roof repair cost',
    'commercial roof repair charlotte nc',
    'EPDM roof repair cost charlotte',
    'PVC roof repair cost charlotte nc',
    'commercial roofing repair pricing',
    'flat roof repair cost per square foot',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/commercial-roof-repair-cost-charlotte-nc`,
  },
  openGraph: {
    title: 'Commercial Roof Repair Cost Charlotte NC | 2026 Pricing | Best Roofing Now',
    description:
      'Commercial roof repair cost in Charlotte NC: TPO $3-$8/sq ft, EPDM $3-$7/sq ft, PVC $4-$9/sq ft, metal $5-$12/sq ft. Emergency repairs, maintenance contracts & full pricing guide. Free estimates.',
    url: `${SITE_CONFIG.url}/commercial-roof-repair-cost-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.commercial.flatRoof,
        width: 1200,
        height: 630,
        alt: 'Commercial roof repair cost Charlotte NC - Best Roofing Now commercial roofing project',
      },
    ],
  },
};

// Cost by roofing system
const costBySystem = [
  {
    icon: Layers,
    title: 'TPO Repair',
    priceRange: '$3-$8/sq ft',
    description: 'Membrane patches, seam re-welding, flashing repairs. The most popular commercial roofing system in Charlotte with predictable repair costs.',
  },
  {
    icon: Shield,
    title: 'EPDM Repair',
    priceRange: '$3-$7/sq ft',
    description: 'Rubber membrane patches, adhesive resealing, seam reinforcement. Durable and cost-effective repairs for aging EPDM roofs.',
  },
  {
    icon: Thermometer,
    title: 'PVC Repair',
    priceRange: '$4-$9/sq ft',
    description: 'Heat-welded patches, drainage improvements, chemical-resistant membrane repairs. Ideal for restaurants and facilities with rooftop grease exposure.',
  },
  {
    icon: Wrench,
    title: 'Metal Roof Repair',
    priceRange: '$5-$12/sq ft',
    description: 'Panel replacement, fastener tightening, sealant application, rust treatment. Standing seam and corrugated metal repair services.',
  },
  {
    icon: Building2,
    title: 'BUR Repair',
    priceRange: '$4-$10/sq ft',
    description: 'Blister repair, re-coating, gravel replacement, felt layer patching. Multi-layer built-up roofing restoration for older commercial buildings.',
  },
  {
    icon: Factory,
    title: 'Modified Bitumen',
    priceRange: '$3-$8/sq ft',
    description: 'Torch-applied patches, seam repair, cap sheet replacement. Reliable repairs for this popular Charlotte commercial roofing system.',
  },
];

// Repair scope and pricing
const repairScopes = [
  {
    icon: Zap,
    title: 'Emergency Leak Stop',
    priceRange: '$500-$2,000',
    description: 'Temporary patch to stop active leaks immediately. 24/7 emergency response to protect your inventory, equipment, and business operations.',
  },
  {
    icon: Wrench,
    title: 'Spot Repairs',
    priceRange: '$1,000-$5,000',
    description: 'Localized damage repair, small area patches, individual flashing replacement. Targeted fixes for isolated problem areas.',
  },
  {
    icon: Ruler,
    title: 'Section Repair',
    priceRange: '$5,000-$15,000',
    description: 'Larger area replacement, multiple penetration repairs, extensive flashing work. Addresses widespread damage in a defined roof section.',
  },
  {
    icon: Truck,
    title: 'Drainage Repair',
    priceRange: '$2,000-$8,000',
    description: 'Fix ponding water issues, add drains, improve slope, clear or replace internal drainage systems. Prevents long-term structural damage.',
  },
  {
    icon: Layers,
    title: 'Full Membrane Overlay',
    priceRange: '$8-$14/sq ft',
    description: 'New membrane installed over existing when substrate is sound. A cost-effective alternative to full tear-off replacement.',
  },
  {
    icon: Calendar,
    title: 'Preventive Maintenance',
    priceRange: '$0.05-$0.15/sq ft/year',
    description: 'Annual inspections, minor repairs, gutter cleaning, drain maintenance. The most cost-effective way to extend commercial roof life.',
  },
];

// Why choose us for commercial roof repair
const whyChooseUs = [
  {
    icon: Building2,
    title: 'Commercial Specialists',
    description: 'We are a dedicated commercial roofing company, not a residential contractor doing commercial on the side. Our crews train specifically for commercial systems.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description: 'Active leak at 2 AM? Our emergency crews respond around the clock to protect your business from water damage and lost revenue.',
  },
  {
    icon: Calendar,
    title: 'Maintenance Contract Programs',
    description: 'Proactive maintenance programs that catch problems early, extend roof life, and provide predictable annual budgeting for property managers.',
  },
  {
    icon: Calculator,
    title: 'Budget Planning Assistance',
    description: 'We help property managers and business owners plan for roof expenses with detailed condition reports and multi-year capital planning.',
  },
  {
    icon: Shield,
    title: 'Insurance & Warranty Claims',
    description: 'Full support navigating insurance claims and manufacturer warranty processes. We document damage thoroughly and advocate for maximum coverage.',
  },
  {
    icon: Award,
    title: 'Manufacturer-Certified Crews',
    description: 'Factory-certified installers for GAF, Carlisle, Firestone, Johns Manville, and more. Certified repairs protect your existing manufacturer warranties.',
  },
];

// Charlotte commercial areas served
const commercialAreas = [
  'Uptown Charlotte',
  'SouthPark',
  'Ballantyne',
  'University City',
  'Airport/CLT Area',
  'Steele Creek',
  'Northlake',
  'South End',
  'NoDa',
  'Arrowood Industrial',
  'Freedom Drive Corridor',
  'I-77 Corridor',
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

// FAQs about commercial roof repair costs
const faqs = [
  {
    question: 'How much does commercial roof repair cost per square foot in Charlotte?',
    answer:
      'Commercial roof repair costs in Charlotte range from $3 to $12 per square foot depending on the roofing system. TPO and EPDM repairs average $3-$8/sq ft, PVC runs $4-$9/sq ft, and metal roof repairs cost $5-$12/sq ft. Emergency leak repairs typically range from $500-$2,000 as a flat rate. Factors affecting cost include damage extent, roof accessibility, material type, and whether the work is emergency or scheduled.',
  },
  {
    question: 'Is it cheaper to repair or replace a commercial roof?',
    answer:
      'Repair is almost always cheaper in the short term at $3-$12/sq ft for affected areas versus $8-$18/sq ft for full replacement. However, if your roof is over 20 years old or has widespread damage, replacement may be more cost-effective long-term. A good rule of thumb: if repair costs exceed 30-40% of replacement cost, or if you are making frequent repairs, replacement provides better value. We offer free assessments to help you make the right financial decision.',
  },
  {
    question: 'How often should a commercial roof be inspected?',
    answer:
      'Commercial roofs should be inspected at least twice per year, ideally in spring and fall, plus after any major storm event. Charlotte experiences severe thunderstorms, occasional hail, and hurricanes that can cause hidden damage. Regular inspections catch small problems when they cost $500-$2,000 to fix rather than $15,000-$50,000 when they become major failures. Our maintenance contracts include bi-annual inspections and priority scheduling.',
  },
  {
    question: 'Does commercial property insurance cover roof repairs?',
    answer:
      'Commercial property insurance typically covers roof repairs caused by sudden, accidental events like storms, hail, fallen trees, or fire. It generally does not cover damage from normal wear and tear, neglect, or lack of maintenance. Most policies have deductibles ranging from $1,000-$10,000. We work directly with insurance adjusters, provide detailed documentation, and advocate for fair claim settlements on behalf of our clients.',
  },
  {
    question: 'What is the cheapest commercial roofing system to repair?',
    answer:
      'EPDM rubber roofing is typically the cheapest to repair at $3-$7 per square foot. Repairs often involve simple adhesive patches that can be applied quickly. TPO is also affordable at $3-$8/sq ft. Modified bitumen falls in a similar range. Metal roofing tends to be the most expensive to repair at $5-$12/sq ft due to specialized materials and skills required. However, the cheapest repair is always the one you prevent through regular maintenance.',
  },
  {
    question: 'Can commercial roof repairs be tax deductible?',
    answer:
      'Yes, commercial roof repairs are generally tax deductible as a business expense in the year they are incurred under IRS guidelines. Repairs that maintain the roof in its current condition (patches, seam repairs, leak fixes) are typically deductible as operating expenses. However, major improvements or full replacements may need to be capitalized and depreciated over 39 years. Consult your tax professional for your specific situation, as the 2026 tax code may offer additional deductions for energy-efficient improvements.',
  },
  {
    question: 'How long do commercial roof repairs last?',
    answer:
      'Quality commercial roof repairs typically last 5-15 years depending on the repair type, materials used, and ongoing maintenance. Properly welded TPO and PVC patches can last the remaining life of the membrane. EPDM adhesive repairs last 5-10 years. Metal roof repairs with quality sealants last 7-12 years. The key to longevity is using manufacturer-specified materials, certified installation techniques, and following up with regular maintenance inspections.',
  },
  {
    question: 'What should I look for in a commercial roofing maintenance contract?',
    answer:
      'A good commercial roofing maintenance contract should include bi-annual inspections (spring and fall), written condition reports with photos, minor repair coverage, gutter and drain cleaning, priority emergency response, and transparent pricing. Look for contractors who are manufacturer-certified, carry adequate insurance ($1M+ general liability), and provide detailed documentation. Our maintenance contracts at $0.05-$0.15/sq ft per year include all of these features plus 24/7 emergency response.',
  },
];

export default function CommercialRoofRepairCostCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roof Repair Cost Charlotte NC', url: `${SITE_CONFIG.url}/commercial-roof-repair-cost-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/commercial-roof-repair-cost-charlotte-nc`}
        pageName="Commercial Roof Repair Cost Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.commercial.flatRoof}
            alt="Commercial roof repair cost Charlotte NC - Best Roofing Now commercial roofing project"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-semibold">TPO | EPDM | PVC | Metal | BUR</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Commercial Roof Repair Cost <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              2026 Commercial Roofing Price Guide for Property Managers &amp; Business Owners
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now provides transparent commercial roof repair pricing for Charlotte businesses.
              From emergency leak stops at $500 to full membrane overlays, we deliver honest estimates
              and manufacturer-certified repairs that protect your investment and your bottom line.
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
                Transparent Pricing
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                Licensed &amp; Insured
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Free Estimates
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                Manufacturer Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cost by Roofing System Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Commercial Roof Repair Cost by Roofing System
            </h2>
            <p className="text-gray text-lg">
              Repair costs vary significantly by roofing system. Here are 2026 per-square-foot repair costs
              for the most common commercial roofing systems in Charlotte NC.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costBySystem.map((system) => (
              <div
                key={system.title}
                className="p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <system.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-1">
                  {system.title}
                </h3>
                <p className="text-accent font-bold text-lg mb-2">{system.priceRange}</p>
                <p className="text-gray text-sm">{system.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Scope & Pricing Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Repair Scope &amp; Pricing Guide
            </h2>
            <p className="text-gray text-lg">
              Commercial roof repair costs depend on the scope of work needed. From emergency leak stops
              to preventive maintenance contracts, here&apos;s what Charlotte property managers can expect to pay.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairScopes.map((scope) => (
              <div
                key={scope.title}
                className="group p-6 bg-white rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <scope.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">
                  {scope.title}
                </h3>
                <p className="text-accent font-bold text-lg mb-2">{scope.priceRange}</p>
                <p className="text-gray text-sm">{scope.description}</p>
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
                Why Charlotte&apos;s Commercial Properties Trust Best Roofing Now
              </h2>
              <p className="text-gray text-lg mb-8">
                Commercial roof repair demands contractors who understand flat roofing systems, commercial building codes,
                and the urgency of protecting business operations. We are commercial roofing specialists, not residential
                roofers doing commercial work on the side.
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
                src={IMAGES.commercial.office}
                alt="Commercial roof repair project in Charlotte NC - office building roofing"
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
                    <p className="font-bold text-dark">Commercial Specialists</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.roofsInstalled}+ Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair vs. Replace Cost Comparison */}
      <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 mb-4">
              <Calculator className="w-4 h-4" />
              <span className="text-sm font-bold">COST COMPARISON</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Repair vs. Re-Coat vs. Replace: What Makes Financial Sense?
            </h2>
            <p className="text-xl text-white/90 mb-2">
              Understanding when to repair, re-coat, or replace your commercial roof can save tens of thousands of dollars.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Repair</h3>
              <p className="text-3xl font-bold text-accent mb-2">$3-$12/sq ft</p>
              <p className="text-white/80 text-sm">for affected areas only</p>
              <p className="text-white/60 text-xs mt-2">Best if roof &lt; 15 years old, localized damage</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Re-Coat</h3>
              <p className="text-3xl font-bold text-accent mb-2">$2.50-$5.50/sq ft</p>
              <p className="text-white/80 text-sm">full roof surface</p>
              <p className="text-white/60 text-xs mt-2">Best if substrate is sound, extends life 10-15 years</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Replace</h3>
              <p className="text-3xl font-bold text-accent mb-2">$8-$18/sq ft</p>
              <p className="text-white/80 text-sm">full roof tear-off and installation</p>
              <p className="text-white/60 text-xs mt-2">Best if roof &gt; 20 years, widespread damage, energy upgrade</p>
            </div>
          </div>

          <div className="text-center">
            <EstimateButton variant="white" size="lg" className="text-lg px-10" estimateType="commercial">
              Get Your Free Repair vs. Replace Assessment
            </EstimateButton>
            <p className="text-white/60 text-sm mt-4">
              No obligation - Instant results - 100% free
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance Contract ROI Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Calculator className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Maintenance ROI</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                How Maintenance Contracts Save You Thousands
              </h2>
              <p className="text-gray text-lg mb-6">
                A proactive maintenance contract at $0.05-$0.15 per square foot per year is the single best investment
                a commercial property owner can make. Here&apos;s the math for a typical 10,000 sq ft commercial roof:
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-light rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-dark">Annual Maintenance Cost: $500-$1,500/year</p>
                      <p className="text-gray text-sm">Includes bi-annual inspections, minor repairs, drain cleaning, and detailed condition reports.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-light rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-dark">Replacement Cost Avoided: $30,000-$120,000+</p>
                      <p className="text-gray text-sm">Without maintenance, premature replacement costs 20-80x more than annual maintenance fees.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-light rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-dark">Extends Roof Life 5-10 Years</p>
                      <p className="text-gray text-sm">Regular maintenance catches problems early when repairs cost $500-$2,000 instead of $15,000-$50,000.</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Ask About Maintenance Contracts
              </Button>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.commercial.warehouse}
                alt="Commercial roof maintenance contract - proactive roof care in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                <p className="text-2xl font-bold text-primary mb-1">20-80x ROI</p>
                <p className="text-sm text-gray">Maintenance costs vs. premature replacement savings for Charlotte commercial properties</p>
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
              Commercial Roof Repair Across the Charlotte Region
            </h2>
            <p className="text-gray text-lg">
              We serve commercial properties throughout the Greater Charlotte area, from Uptown office buildings
              to industrial parks and suburban retail centers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Charlotte Commercial Areas */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Charlotte Commercial Areas</h3>
              <div className="flex flex-wrap gap-2">
                {commercialAreas.map((area) => (
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
                Commercial Roof Repair Cost FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about commercial roof repair costs and pricing in Charlotte NC.
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
              Related Commercial Roofing Services
            </h2>
            <p className="text-gray">
              Explore our full range of commercial roofing solutions and cost guides in Charlotte NC.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/commercial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/flat-roof-coating-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Flat Roof Coating Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/industrial-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Industrial Roofing Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/commercial-roofing-contractors-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Commercial Roofing Contractors
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roof-repair-cost-charlotte-nc"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Roof Repair Cost Charlotte
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="commercial-roof-repair-cost-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/commercial-roof-repair-cost-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Ready to Get an Honest Commercial Roof Repair Estimate?"
        subtitle="Get a free, no-obligation estimate for your commercial roof repair. Our team will assess your building, provide transparent pricing, and help you decide whether repair, re-coat, or replacement makes the most financial sense for your property."
      />
    </>
  );
}
