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
  Wrench,
  DollarSign,
  AlertTriangle,
  CloudRain,
  Home,
  TrendingUp,
  Layers,
  Search,
  FileText,
  Scale,
  Zap,
  ThumbsUp,
  BarChart3,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { EstimateButton } from '@/components/estimate';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Repair vs. Replacement Charlotte NC | Decision Guide (2026)',
  description:
    'Should you repair or replace your roof in Charlotte NC? Use our 5-question decision framework, cost comparison tables, and material-specific guidance to make the right choice. Free inspections from BBB A+ rated contractor.',
  keywords: [
    'roof repair vs replacement Charlotte NC',
    'should I repair or replace my roof Charlotte',
    'roof repair or replacement decision Charlotte NC',
    'when to replace roof Charlotte NC',
    'roof repair vs new roof Charlotte',
    'repair or replace roof cost Charlotte NC',
    'roof replacement vs repair guide Charlotte',
    'when is roof repair not enough Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-repair-vs-replacement-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Repair vs. Replacement Charlotte NC | Decision Guide (2026)',
    description:
      'Complete guide to deciding between roof repair and replacement in Charlotte NC. 5-question framework, 2026 cost comparisons, material-specific thresholds, and insurance guidance. Free inspections available.',
    url: `${SITE_CONFIG.url}/roof-repair-vs-replacement-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero10,
        width: 1200,
        height: 630,
        alt: 'Roof repair vs replacement Charlotte NC - decision guide by Best Roofing Now',
      },
    ],
  },
};

// Decision framework questions
const decisionFramework = [
  {
    number: '1',
    icon: Clock,
    question: 'How Old Is Your Roof?',
    repairAnswer: 'Under 15 years old with plenty of life remaining',
    replaceAnswer: 'Over 20 years old and approaching end of lifespan',
    detail: 'Most asphalt shingle roofs in Charlotte last 20 to 25 years. If your roof is less than 15 years old and the damage is limited, repair is almost always the smarter move. Once your roof passes 20 years, even minor issues can signal that the entire system is wearing out, and repairs become a short-term fix on a long-term problem.',
  },
  {
    number: '2',
    icon: Search,
    question: 'How Widespread Is the Damage?',
    repairAnswer: 'Localized to one area or a few shingles',
    replaceAnswer: 'Spread across multiple areas or the entire roof',
    detail: 'A few missing shingles after a storm or a single leak around a vent pipe is a straightforward repair. But if you are seeing damage in multiple locations, granule loss across large sections, or daylight through the roof deck in your attic, the underlying roofing system has likely deteriorated beyond what spot repairs can address.',
  },
  {
    number: '3',
    icon: Home,
    question: 'Are You Planning to Sell Soon?',
    repairAnswer: 'Not selling, or selling is 5+ years away',
    replaceAnswer: 'Selling within 1-3 years and want maximum ROI',
    detail: 'A new roof in Charlotte typically returns 60 to 70 percent of its cost at resale and can increase your home value by 4 to 6 percent. If you are selling soon, a new roof eliminates a major buyer objection and can help your home sell faster. If you are staying long-term, a well-executed repair may buy you several more years before replacement becomes necessary.',
  },
  {
    number: '4',
    icon: Wrench,
    question: 'Has Your Roof Been Repaired Before?',
    repairAnswer: 'First time needing repair, or one prior repair',
    replaceAnswer: 'Multiple repairs in the last few years',
    detail: 'If you are calling a roofer every year or two for a different issue, those repair costs add up quickly. Three or more repairs within five years is a strong signal that your roof has reached the point where ongoing patching is throwing money at a declining asset. A single replacement solves the problem permanently.',
  },
  {
    number: '5',
    icon: Shield,
    question: 'Is the Damage Covered by Insurance?',
    repairAnswer: 'Minor damage that does not meet your deductible',
    replaceAnswer: 'Storm or hail damage that qualifies for a full claim',
    detail: 'If a storm caused your damage and your insurance covers full replacement, taking advantage of that coverage is almost always the best financial decision. You get a brand-new roof for just your deductible. Best Roofing Now handles the entire insurance claim process, from documentation to adjuster meetings, to help you maximize your settlement.',
  },
];

// Repair types with links
const repairTypes = [
  {
    icon: Layers,
    title: 'Missing or Damaged Shingles',
    description: 'Wind, hail, or age can cause individual shingles to crack, curl, or blow off entirely. Replacing a handful of shingles is one of the most common and affordable roof repairs in Charlotte.',
    cost: '$200 - $800',
    href: '/missing-shingles-repair-charlotte-nc',
  },
  {
    icon: Wrench,
    title: 'Flashing Repairs',
    description: 'Flashing around chimneys, vents, walls, and skylights can corrode or pull away over time. Resealing or replacing flashing stops leaks at these vulnerable penetration points.',
    cost: '$200 - $600',
    href: '/roof-flashing-repair-charlotte-nc',
  },
  {
    icon: TrendingUp,
    title: 'Valley Repairs',
    description: 'Roof valleys channel heavy water flow where two slopes meet. Damaged valley flashing or worn shingles in valleys are a frequent source of leaks in Charlotte homes.',
    cost: '$300 - $1,000',
    href: '/roof-valley-repair-charlotte-nc',
  },
  {
    icon: CloudRain,
    title: 'Minor Leak Repair',
    description: 'Small leaks caught early can be patched quickly and affordably. The key is addressing them before water damages your decking, insulation, or interior ceilings and walls.',
    cost: '$150 - $500',
    href: '/roof-repair-charlotte-nc',
  },
  {
    icon: AlertTriangle,
    title: 'Flat Roof Repairs',
    description: 'Flat and low-slope roofs develop ponding, membrane tears, and seam failures. Targeted patches and recoating can extend their life significantly without full replacement.',
    cost: '$300 - $1,500',
    href: '/flat-roof-repair-charlotte-nc',
  },
  {
    icon: Shield,
    title: 'Chimney Flashing Repair',
    description: 'The intersection between your chimney and roof is one of the most leak-prone areas. Properly sealed chimney flashing prevents costly water intrusion into your home.',
    cost: '$300 - $800',
    href: '/chimney-flashing-repair-charlotte-nc',
  },
];

// Cost comparison data
const costComparison = [
  {
    category: 'Minor Repair (small leak, few shingles)',
    repairCost: '$300 - $1,500',
    replaceCost: 'N/A - repair is sufficient',
    fiveYearRepairCost: '$600 - $3,000',
    fiveYearReplaceCost: 'N/A',
    recommendation: 'Repair',
  },
  {
    category: 'Moderate Damage (flashing, valley, multiple areas)',
    repairCost: '$1,500 - $5,000',
    replaceCost: '$8,000 - $15,000',
    fiveYearRepairCost: '$3,000 - $10,000',
    fiveYearReplaceCost: '$8,000 - $15,000',
    recommendation: 'Depends on age',
  },
  {
    category: 'Major Damage (widespread, structural)',
    repairCost: '$5,000 - $8,000',
    replaceCost: '$8,000 - $15,000',
    fiveYearRepairCost: '$8,000 - $15,000+',
    fiveYearReplaceCost: '$8,000 - $15,000',
    recommendation: 'Replace',
  },
  {
    category: 'Aging Roof (20+ years, recurring issues)',
    repairCost: '$2,000 - $5,000/year',
    replaceCost: '$8,000 - $15,000',
    fiveYearRepairCost: '$10,000 - $25,000',
    fiveYearReplaceCost: '$8,000 - $15,000',
    recommendation: 'Replace',
  },
  {
    category: 'Premium/Large Home (3,000+ sq ft)',
    repairCost: '$2,000 - $7,000',
    replaceCost: '$15,000 - $30,000+',
    fiveYearRepairCost: '$4,000 - $15,000',
    fiveYearReplaceCost: '$15,000 - $30,000+',
    recommendation: 'Depends on age',
  },
];

// Material-specific thresholds
const materialThresholds = [
  {
    icon: Layers,
    material: 'Asphalt Shingles',
    lifespan: '20-25 years',
    repairThreshold: 'Under 15 years: repair localized damage',
    replaceThreshold: 'Over 20 years: consider full replacement',
    detail: 'Asphalt shingles are the most common roofing material in Charlotte. They perform well in our climate but degrade noticeably after 15 to 20 years. Look for widespread granule loss, curling edges, and cracked shingles as signs that repair is no longer sufficient.',
    href: '/asphalt-shingle-roofing-charlotte-nc',
  },
  {
    icon: Shield,
    material: 'Metal Roofing',
    lifespan: '40-70 years',
    repairThreshold: 'Repair loose panels, fasteners, or sealant failures',
    replaceThreshold: 'Rarely needs replacement within its lifespan',
    detail: 'Metal roofs are exceptionally durable and rarely require full replacement. Most metal roof issues in Charlotte involve loose fasteners, sealant deterioration around penetrations, or cosmetic dent repair from hail. These are straightforward repairs that preserve the roof for decades.',
    href: '/metal-roofing-services',
  },
  {
    icon: Home,
    material: 'Flat Roofing (TPO, EPDM)',
    lifespan: '15-30 years',
    repairThreshold: 'Coat or patch when damage is limited to small areas',
    replaceThreshold: 'Replace when membrane is brittle or has widespread seam failure',
    detail: 'Flat roofs on commercial buildings and some Charlotte homes can often be extended with a roof coating rather than full replacement. A quality elastomeric coating over an aging but structurally sound membrane can add 10 to 15 years of life at a fraction of the replacement cost.',
    href: '/flat-roof-coating-charlotte-nc',
  },
];

// Charlotte-specific factors
const charlotteFactors = [
  {
    icon: CloudRain,
    title: 'Storm Frequency',
    description: 'Charlotte averages 45 to 50 thunderstorm days per year, placing significant stress on roofing systems. Repeated storm exposure accelerates shingle wear and can turn minor damage into major problems if not addressed promptly.',
  },
  {
    icon: Zap,
    title: 'Hail Risk',
    description: 'The Charlotte metro area experiences regular hail events that can damage shingles, dent metal components, and crack ridge caps. Even small hail can loosen granules and shorten your roof\'s effective lifespan.',
  },
  {
    icon: FileText,
    title: 'HOA Requirements',
    description: 'Many Charlotte neighborhoods, from Ballantyne to Myers Park, have HOA covenants that dictate roofing materials, colors, and maintenance standards. Ensure any repair or replacement meets your HOA specifications to avoid fines or required redo work.',
  },
  {
    icon: Scale,
    title: 'NC Building Codes',
    description: 'North Carolina building codes require specific wind resistance ratings, underlayment standards, and installation methods. If your existing roof does not meet current code, a full replacement may be required rather than a repair that leaves non-compliant components in place.',
  },
];

// FAQs
const repairVsReplaceFAQs = [
  {
    question: 'How do I decide between roof repair and replacement in Charlotte NC?',
    answer:
      'The decision comes down to five key factors: roof age, extent of damage, your timeline for selling, repair history, and insurance coverage. If your roof is under 15 years old with localized damage, repair is usually the right choice. If your roof is over 20 years old, has widespread issues, or has needed multiple repairs recently, replacement is typically the better long-term investment. Best Roofing Now provides free inspections with honest recommendations based on your specific situation.',
  },
  {
    question: 'At what point does roof repair cost more than replacement in Charlotte?',
    answer:
      'As a general rule, when a single repair exceeds 30 percent of the cost of a full replacement, or when cumulative repairs over 3 to 5 years approach 50 percent of replacement cost, you are better off replacing the entire roof. For a typical Charlotte home, that means if repairs are approaching $4,000 to $5,000 and your roof is over 15 years old, it is time to seriously consider replacement.',
  },
  {
    question: 'Does a new roof increase home value in Charlotte NC?',
    answer:
      'Yes. A new roof in Charlotte typically increases home value by 4 to 6 percent and returns 60 to 70 percent of its cost at resale. Beyond the financial return, a new roof eliminates a major inspection concern for buyers, can reduce time on market, and often results in stronger offers. In competitive Charlotte neighborhoods like Myers Park, SouthPark, and Ballantyne, roof condition is one of the first things buyers evaluate.',
  },
  {
    question: 'How long can I extend my roof with repairs before I need to replace it?',
    answer:
      'Targeted repairs on a roof that is 10 to 15 years old can often add 5 to 10 additional years of service life. However, once your asphalt shingle roof passes 20 years, repairs become increasingly temporary. At that stage, you may get 1 to 3 years from each repair before the next issue appears. A free inspection from Best Roofing Now will give you an honest assessment of how much life your roof has left.',
  },
  {
    question: 'Will my insurance pay for roof replacement or just repair in Charlotte?',
    answer:
      'Insurance coverage depends on the cause and extent of damage, your policy type, and the age of your roof. If storm damage is widespread enough to warrant full replacement, most policies will cover it minus your deductible. Some policies pay replacement cost value while others pay actual cash value, which factors in depreciation. Best Roofing Now works directly with your insurance company to document damage and advocate for the maximum settlement your policy allows.',
  },
  {
    question: 'What are the signs I need a new roof instead of repairs in Charlotte NC?',
    answer:
      'Key signs that replacement is the better option include widespread granule loss in gutters and downspouts, multiple leaks in different areas of your home, shingles that are curling or buckling across large sections, visible sagging in the roof deck, daylight visible through the attic, and a roof age exceeding 20 years. If your roof shows three or more of these signs, repair is likely just postponing the inevitable.',
  },
  {
    question: 'Can I repair part of my roof and replace the rest in Charlotte?',
    answer:
      'Partial replacement, sometimes called a re-roof of one section, is possible but comes with trade-offs. Mismatched shingle colors, different wear rates between old and new sections, and potential warranty complications can be issues. In Charlotte, most roofing professionals recommend full replacement once more than 30 percent of the roof needs work. Best Roofing Now will assess your specific situation and give you an honest recommendation.',
  },
  {
    question: 'How much does roof repair cost compared to replacement in Charlotte NC in 2026?',
    answer:
      'In 2026, minor roof repairs in Charlotte range from $300 to $1,500, while major repairs run $1,500 to $5,000. A full roof replacement for a standard Charlotte home costs $8,000 to $15,000 with asphalt shingles, or $15,000 to $30,000 or more for larger homes or premium materials like metal or designer shingles. The best way to know your exact costs is to schedule a free inspection with Best Roofing Now for a detailed, no-obligation estimate.',
  },
];

export default function RoofRepairVsReplacementCharlotteNCPage() {
  return (
    <>
      <WebPageSchema
        name="Roof Repair vs. Replacement Charlotte NC | Decision Guide (2026)"
        description="Complete guide to deciding between roof repair and replacement in Charlotte NC. 5-question decision framework, 2026 cost comparisons, material-specific guidance, and insurance coverage information."
        url={`${SITE_CONFIG.url}/roof-repair-vs-replacement-charlotte-nc`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Guides', url: `${SITE_CONFIG.url}/guides` },
          { name: 'Repair vs. Replacement', url: `${SITE_CONFIG.url}/roof-repair-vs-replacement-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={repairVsReplaceFAQs} />
      <LocalBusinessSchema includeRating={false} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-repair-vs-replacement-charlotte-nc`}
        pageName="Roof Repair vs. Replacement Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'Should I repair or replace my roof in Charlotte NC?',
            answer: 'If your roof is under 15 years old with localized damage, repair is usually best. If it is over 20 years old with widespread issues or multiple prior repairs, replacement is the better investment. Best Roofing Now offers free inspections with honest recommendations.',
            speakableAnswer: 'Repair if your roof is under 15 years with minor damage. Replace if it is over 20 years with widespread problems. Call Best Roofing Now at 704-605-6047 for a free inspection.',
          },
          {
            question: 'How much does roof repair vs replacement cost in Charlotte NC?',
            answer: 'Minor repairs cost $300-$1,500. Major repairs cost $1,500-$5,000. Full replacement costs $8,000-$15,000 for a standard home, or $15,000-$30,000+ for larger or premium homes. Best Roofing Now provides free estimates.',
            speakableAnswer: 'Repairs range from $300-5,000. Replacement costs $8,000-15,000 for most homes. Call Best Roofing Now at 704-605-6047 for a free estimate.',
          },
          {
            question: 'When does it make sense to replace instead of repair a roof in Charlotte?',
            answer: 'Replace when repairs exceed 30% of replacement cost, the roof is over 20 years old, you have had multiple repairs in recent years, or damage is widespread across the entire roof. A new roof also adds 4-6% to Charlotte home values.',
            speakableAnswer: 'Replace when repair costs exceed 30% of replacement, your roof is over 20 years old, or damage is widespread. Call 704-605-6047 for guidance.',
          },
          {
            question: 'Does insurance cover roof replacement or just repair in Charlotte NC?',
            answer: 'Insurance typically covers full replacement when storm damage is widespread enough. Coverage depends on your policy type, roof age, and the cause of damage. Best Roofing Now handles insurance claims from start to finish.',
            speakableAnswer: 'Insurance often covers full replacement for storm damage. Best Roofing Now handles insurance claims. Call 704-605-6047 for help.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero10}
            alt="Roof repair vs replacement Charlotte NC - decision guide by Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Scale className="w-4 h-4" />
              <span className="text-sm font-semibold">Decision Guide | 2026 Edition</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Repair vs. Replacement in <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              How to Make the Right Decision for Your Home and Budget
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Not every roof problem requires a full replacement, and not every repair is worth the investment.
              This guide gives Charlotte homeowners a clear framework for making the right call, with real
              cost data, material-specific guidance, and honest advice from a contractor who has seen it all.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get a Free Inspection
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
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                Honest Recommendations
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-light" />
                {SITE_CONFIG.customerCount}+ Roofs Completed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Question Decision Framework */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <HelpCircle className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Decision Framework</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              The 5-Question Decision Framework
            </h2>
            <p className="text-gray text-lg">
              Before you spend a dollar on your roof, answer these five questions. They will tell you whether
              repair or replacement is the right financial decision for your Charlotte home. This is the same
              framework our team uses during every free inspection.
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {decisionFramework.map((item) => (
              <div
                key={item.number}
                className="bg-light rounded-xl p-6 md:p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark mb-3">{item.question}</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-semibold text-green-700">Repair:</span>
                          <p className="text-gray text-sm">{item.repairAnswer}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-semibold text-red-700">Replace:</span>
                          <p className="text-gray text-sm">{item.replaceAnswer}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray text-sm">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When Roof Repair Is the Right Choice */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-4 py-2 mb-4">
                <Wrench className="w-4 h-4" />
                <span className="text-sm font-semibold">When to Repair</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                When Roof Repair Is the Right Choice
              </h2>
              <p className="text-gray text-lg mb-6">
                Roof repair makes financial sense when the damage is contained, your roof still has years of life
                ahead, and the cost of fixing the problem is significantly less than replacing the entire roof.
                Charlotte homeowners with roofs under 15 years old and localized issues should almost always start
                with repair.
              </p>
              <p className="text-gray mb-6">
                Common scenarios where repair is the clear winner include storm damage that affected only one slope
                of your roof, a single leak around a plumbing vent or chimney, wind-lifted shingles in one section,
                or minor flashing deterioration. These are targeted problems with targeted solutions, and a quality
                repair will protect your home for years without the expense of a full tear-off and reinstallation.
              </p>
              <p className="text-gray mb-8">
                Budget constraints also play a role. If you cannot afford a full replacement right now but your roof
                is structurally sound, a well-executed repair buys you time to plan and save for eventual replacement.
                Best Roofing Now never pushes replacement when a repair is sufficient. We will tell you the truth about
                what your roof needs.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/roof-repair-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Roof Repair Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/missing-shingles-repair-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Missing Shingles
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/roof-flashing-repair-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Flashing Repair
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-dark mb-6">Common Repair Types &amp; Costs</h3>
              <div className="space-y-4">
                {repairTypes.map((type) => (
                  <Link
                    key={type.title}
                    href={type.href}
                    className="block bg-white rounded-xl p-5 hover:shadow-lg transition-all hover:-translate-y-1 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                        <type.icon className="w-5 h-5 text-green-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-dark group-hover:text-primary transition-colors">{type.title}</h4>
                          <span className="text-sm font-bold text-green-700 bg-green-50 px-2 py-1 rounded">{type.cost}</span>
                        </div>
                        <p className="text-gray text-sm">{type.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Replacement Is the Better Investment */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 relative">
              <Image
                src={IMAGES.houses.modern1}
                alt="New roof replacement Charlotte NC - modern home with new shingles"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-10 h-10 text-primary" />
                  <div>
                    <p className="font-bold text-dark">4-6% Value Increase</p>
                    <p className="text-sm text-gray">Average Charlotte Home ROI</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 rounded-full px-4 py-2 mb-4">
                <Home className="w-4 h-4" />
                <span className="text-sm font-semibold">When to Replace</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                When Replacement Is the Better Investment
              </h2>
              <p className="text-gray text-lg mb-6">
                There comes a point where continuing to repair an aging roof is like putting new tires on a car
                with a failing engine. If your Charlotte home has a roof over 20 years old with multiple problem
                areas, widespread shingle deterioration, or structural issues like sagging, replacement is not
                just a better investment &mdash; it is the only responsible decision.
              </p>
              <p className="text-gray mb-6">
                From a financial perspective, a new roof on a Charlotte home returns 60 to 70 percent of its cost
                at resale and increases your home value by 4 to 6 percent. For a median-priced Charlotte home,
                that can mean $15,000 to $25,000 in added value. A new roof also eliminates the cascading costs
                of interior water damage, mold remediation, and energy loss from a compromised roofing system.
              </p>
              <p className="text-gray mb-8">
                Replacement is the clear choice when your roof shows widespread granule loss, multiple leaks in
                different zones, sagging or soft spots in the deck, or when prior repairs have failed to resolve
                recurring problems. If you have had three or more repairs in the past five years, the numbers
                almost always favor a complete replacement.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray"><strong className="text-dark">Roof over 20 years old</strong> &mdash; approaching or past its designed lifespan</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray"><strong className="text-dark">Widespread damage</strong> &mdash; problems across multiple areas, not just one spot</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray"><strong className="text-dark">Multiple prior repairs</strong> &mdash; three or more repairs in the last five years</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray"><strong className="text-dark">Structural issues</strong> &mdash; sagging, soft spots, or visible deck deterioration</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/roof-replacement-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Roof Replacement
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/new-roof-installation-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  New Roof Installation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/sagging-roof-repair-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Sagging Roof Repair
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">2026 Cost Data</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Cost Comparison &mdash; Repair vs. Replace in 2026
            </h2>
            <p className="text-gray text-lg">
              The true cost of a roofing decision is not just what you pay today. It is what you pay over the
              next five years. This side-by-side comparison shows how repair and replacement costs stack up
              for Charlotte homeowners across different damage scenarios.
            </p>
          </div>

          {/* Cost Table */}
          <div className="max-w-5xl mx-auto mb-10">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-4 py-4 text-left font-semibold text-sm">Scenario</th>
                      <th className="px-4 py-4 text-left font-semibold text-sm">Repair Cost</th>
                      <th className="px-4 py-4 text-left font-semibold text-sm">Replace Cost</th>
                      <th className="px-4 py-4 text-left font-semibold text-sm">5-Year Repair Total</th>
                      <th className="px-4 py-4 text-left font-semibold text-sm">Recommendation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {costComparison.map((row, index) => (
                      <tr key={row.category} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-4 font-medium text-dark text-sm">{row.category}</td>
                        <td className="px-4 py-4 text-gray text-sm">{row.repairCost}</td>
                        <td className="px-4 py-4 text-gray text-sm">{row.replaceCost}</td>
                        <td className="px-4 py-4 text-gray text-sm">{row.fiveYearRepairCost}</td>
                        <td className="px-4 py-4 text-sm">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                            row.recommendation === 'Repair'
                              ? 'bg-green-100 text-green-800'
                              : row.recommendation === 'Replace'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {row.recommendation}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-4 py-4 text-sm text-gray">
                <strong>Note:</strong> All costs are estimates based on 2026 Charlotte market rates for a typical
                2,000 to 2,500 sq ft home. Actual costs vary based on roof size, materials, pitch, and accessibility.
                <Link href="/roof-repair-cost-charlotte-nc" className="text-primary font-semibold hover:text-accent ml-1">
                  See detailed repair costs
                </Link>{' '}
                |{' '}
                <Link href="/roof-replacement-cost-charlotte-nc" className="text-primary font-semibold hover:text-accent">
                  See detailed replacement costs
                </Link>
              </div>
            </div>
          </div>

          {/* Summary cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-dark mb-2">Minor Repairs</h3>
              <p className="text-2xl font-bold text-green-700 mb-1">$300 - $1,500</p>
              <p className="text-gray text-sm">Leaks, missing shingles, small patches</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <DollarSign className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-bold text-dark mb-2">Major Repairs</h3>
              <p className="text-2xl font-bold text-yellow-700 mb-1">$1,500 - $5,000</p>
              <p className="text-gray text-sm">Flashing, valleys, structural issues</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-dark mb-2">Full Replacement</h3>
              <p className="text-2xl font-bold text-primary mb-1">$8,000 - $15,000</p>
              <p className="text-gray text-sm">Standard home, architectural shingles</p>
            </div>
          </div>

          <div className="text-center">
            <EstimateButton variant="accent" size="lg" estimateType="residential">
              Get Your Free Repair vs. Replacement Estimate
            </EstimateButton>
            <p className="text-gray text-sm mt-4">
              No obligation &bull; Honest recommendations &bull; 100% free
            </p>
          </div>
        </div>
      </section>

      {/* Charlotte-Specific Factors */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <BarChart3 className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Local Factors</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Charlotte-Specific Factors That Affect Your Decision
            </h2>
            <p className="text-gray text-lg">
              Charlotte&apos;s climate, building regulations, and neighborhood requirements all influence whether
              repair or replacement is the right call. These local factors are often overlooked in generic
              roofing guides but make a real difference in your decision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {charlotteFactors.map((factor) => (
              <div
                key={factor.title}
                className="group p-6 bg-light rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
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
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/storm-damage-roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Storm Damage Repair
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/hail-damage-roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Hail Damage Repair
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Material-Specific Thresholds */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">By Material Type</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Material-Specific Repair vs. Replace Thresholds
            </h2>
            <p className="text-gray text-lg">
              Different roofing materials have different lifespans and repair economics. The decision point
              for asphalt shingles is very different from metal roofing or flat membrane systems. Here is
              how to evaluate each material type commonly found on Charlotte homes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {materialThresholds.map((material) => (
              <Link
                key={material.material}
                href={material.href}
                className="block bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group border-2 border-transparent hover:border-primary"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <material.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {material.material}
                </h3>
                <p className="text-sm text-primary font-semibold mb-4">Lifespan: {material.lifespan}</p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray text-sm"><strong className="text-green-700">Repair:</strong> {material.repairThreshold}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray text-sm"><strong className="text-red-700">Replace:</strong> {material.replaceThreshold}</p>
                  </div>
                </div>
                <p className="text-gray text-sm">{material.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Coverage Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold">Insurance Guide</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Insurance Coverage for Repair vs. Replacement
              </h2>
              <p className="text-gray text-lg mb-6">
                Understanding your insurance coverage can change the entire repair vs. replacement equation. If
                your damage qualifies for a full replacement claim, you may get a brand-new roof for just your
                deductible, making replacement the obvious financial choice.
              </p>
              <p className="text-gray mb-6">
                Insurance companies evaluate two key factors when determining coverage: the cause of damage and
                its extent. Storm damage, hail, wind, and fallen trees are covered events under most Charlotte
                homeowner policies. Normal wear and tear, neglected maintenance, and age-related deterioration
                are not. The distinction matters because it determines whether your insurer pays for repair of
                the specific damage or approves full replacement.
              </p>
              <p className="text-gray mb-6">
                Policy type also matters. Replacement cost value (RCV) policies pay for a new roof at current
                market rates. Actual cash value (ACV) policies deduct depreciation based on your roof&apos;s age,
                which can significantly reduce your payout on an older roof. Knowing your policy type before
                filing a claim helps you set realistic expectations.
              </p>
              <p className="text-gray mb-8">
                Best Roofing Now handles the entire insurance claim process. We document all damage with detailed
                photos and measurements, meet with your adjuster on-site, file supplements if the initial settlement
                is insufficient, and ensure you receive the maximum coverage your policy allows.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/insurance-claim-roofing-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Insurance Claim Help
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/roof-financing-charlotte-nc"
                  className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  Financing Options
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-light rounded-xl p-8">
              <h3 className="text-xl font-bold text-dark mb-6">Insurance Coverage at a Glance</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-dark mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Typically Covered
                  </h4>
                  <ul className="space-y-2 text-gray text-sm">
                    <li>Hail damage to shingles and metal components</li>
                    <li>Wind damage including lifted or missing shingles</li>
                    <li>Fallen tree or debris impact damage</li>
                    <li>Water damage from storm-related roof breaches</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-dark mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Typically Not Covered
                  </h4>
                  <ul className="space-y-2 text-gray text-sm">
                    <li>Normal wear and tear over time</li>
                    <li>Neglected maintenance and deferred repairs</li>
                    <li>Age-related deterioration and granule loss</li>
                    <li>Cosmetic damage that does not affect function</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-dark mb-2 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Policy Types
                  </h4>
                  <ul className="space-y-2 text-gray text-sm">
                    <li><strong>Replacement Cost Value (RCV):</strong> Pays for new roof at current prices</li>
                    <li><strong>Actual Cash Value (ACV):</strong> Deducts depreciation based on roof age</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Inspection-First Approach */}
      <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
                <Search className="w-4 h-4" />
                <span className="text-sm font-semibold">Start Here</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                The Inspection-First Approach
              </h2>
              <p className="text-xl text-white/90 mb-6">
                The single best thing you can do before deciding between repair and replacement is get a professional
                inspection from a contractor you trust. At Best Roofing Now, every engagement starts with a thorough,
                no-obligation inspection because we believe you deserve the full picture before spending a dime.
              </p>
              <p className="text-white/80 mb-6">
                During our free inspection, we climb on your roof and examine every component: shingles, flashing,
                valleys, ridge caps, vents, and the overall deck condition. We check your attic for signs of
                moisture intrusion, inadequate ventilation, and structural issues. We photograph everything and
                provide you with a detailed report of our findings.
              </p>
              <p className="text-white/80 mb-8">
                Most importantly, we give you an honest recommendation. If your roof needs a $400 repair, we
                tell you that. If it needs full replacement, we explain why. We never upsell, and we never
                recommend work you do not need. That honesty is why over {SITE_CONFIG.customerCount} Charlotte
                homeowners have trusted us with their roofs and why we maintain a {SITE_CONFIG.googleRating}-star
                Google rating across {SITE_CONFIG.googleReviewCount}+ reviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <EstimateButton variant="white" size="lg" estimateType="residential">
                  Schedule Your Free Inspection
                </EstimateButton>
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
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                  <ThumbsUp className="w-5 h-5 text-green-400" />
                  What Our Inspection Includes
                </h3>
                <ul className="space-y-3 text-white/80 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Complete exterior roof examination of shingles, flashing, valleys, and ridge line</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Attic inspection for moisture, ventilation, and structural integrity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Detailed photo documentation of all findings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Written report with repair vs. replacement recommendation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Itemized cost estimate for recommended work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Insurance claim guidance if storm damage is identified</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-white">{SITE_CONFIG.googleRating} Google Rating</p>
                    <p className="text-sm text-white/70">{SITE_CONFIG.googleReviewCount}+ verified reviews</p>
                  </div>
                </div>
              </div>
            </div>
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
                Roof Repair vs. Replacement FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions Charlotte homeowners ask about choosing between
                roof repair and replacement.
              </p>
            </div>
            <div className="space-y-4">
              {repairVsReplaceFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Related Roofing Guides &amp; Services
            </h2>
            <p className="text-gray">
              Explore detailed cost guides, service pages, and material comparisons to help you make
              an informed roofing decision.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/roof-repair-cost-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Repair Cost Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roof-replacement-cost-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Replacement Cost Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Roof Repair Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roof-replacement-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Roof Replacement Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/asphalt-shingle-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Asphalt Shingles
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/metal-roofing-services"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Metal Roofing
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/insurance-claim-roofing-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Insurance Claims
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/storm-damage-roof-repair-charlotte-nc"
              className="inline-flex items-center gap-2 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              Storm Damage Repair
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="roof-repair-vs-replacement-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roof-repair-vs-replacement-charlotte-nc`}
      />

      {/* Final CTA */}
      <CTASection
        title="Not Sure Whether to Repair or Replace?"
        subtitle="Get a free, no-obligation inspection from Charlotte's most trusted roofing contractor. We will examine your roof, explain exactly what we find, and give you an honest recommendation based on what makes the most financial sense for your home."
      />
    </>
  );
}
