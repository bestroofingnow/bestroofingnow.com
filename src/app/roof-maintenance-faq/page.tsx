import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Wrench,
  Phone,
  ArrowRight,
  HelpCircle,
  CheckCircle,
  Shield,
  Star,
  Calendar,
  AlertTriangle,
  Eye,
  Droplets,
  Leaf,
  Sun,
  Snowflake,
  ThermometerSun,
  Home,
  Search,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { CitationSection } from '@/components/seo/CitationBlock';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Maintenance FAQ | 12 Maintenance & Repair Questions Answered | Charlotte NC',
  description:
    'How to maintain your roof, seasonal maintenance checklists, damage signs, and when to call a pro. 12 expert maintenance FAQs for Charlotte NC homeowners from Best Roofing Now.',
  keywords: [
    'roof maintenance tips',
    'how to maintain roof',
    'roof inspection',
    'roof inspection Charlotte NC',
    'roof maintenance checklist',
    'roof damage signs',
    'roof maintenance schedule',
    'DIY roof maintenance',
    'when to call roofer',
    'roof leak repair Charlotte NC',
    'roof cleaning Charlotte NC',
    'gutter maintenance Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-maintenance-faq`,
  },
  openGraph: {
    title: 'Roof Maintenance FAQ | 12 Questions Answered | Charlotte NC',
    description:
      'Expert answers to 12 common roof maintenance questions including seasonal checklists, damage signs, and professional vs DIY guidance for Charlotte NC homeowners.',
    url: `${SITE_CONFIG.url}/roof-maintenance-faq`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.inspection,
        width: 1200,
        height: 630,
        alt: 'Roof maintenance FAQ - Best Roofing Now Charlotte NC',
      },
    ],
  },
};

const maintenanceFAQs = [
  {
    question: 'How often should I have my roof professionally inspected?',
    answer:
      'Have your roof professionally inspected at least twice per year in Charlotte NC: once in spring (March to April) before storm season and once in fall (October to November) before winter. Additional inspections are recommended after any severe weather event including hailstorms, winds exceeding 60 mph, or heavy downpours. Professional inspections typically cost $150 to $400, but Best Roofing Now provides free inspections for all Charlotte-area homeowners. Regular inspections catch small issues before they become expensive repairs.',
  },
  {
    question: 'What does a roof inspection include?',
    answer:
      'A comprehensive roof inspection includes: exterior examination of shingles for cracking, curling, or missing pieces; checking flashing around chimneys, vents, skylights, and walls; inspecting gutters and downspouts for proper drainage; examining ridge caps and hip shingles; checking pipe boots and rubber seals; evaluating overall roof condition and age; interior attic inspection for leaks, moisture, mold, proper ventilation, and insulation levels; and a detailed report with photos, findings, and recommendations. Best Roofing Now inspections also include drone photography for a complete aerial view.',
  },
  {
    question: 'What is a seasonal roof maintenance checklist for Charlotte NC?',
    answer:
      'Charlotte NC seasonal roof maintenance includes: SPRING - clear debris from roof and gutters, check for winter storm damage, inspect flashing and seals, trim overhanging branches, check attic ventilation. SUMMER - look for heat damage and curling shingles, ensure attic insulation is adequate, check for algae or moss growth. FALL - clean gutters thoroughly, inspect for storm damage from hurricane season, check caulking around penetrations, ensure downspouts direct water away from foundation. WINTER - check for ice dam formation after freezing rain, remove heavy debris, inspect from inside attic for leaks.',
  },
  {
    question: 'How do I know if my roof is leaking?',
    answer:
      'Signs of a roof leak include: water stains or discoloration on ceilings or walls (yellowish-brown rings), peeling or bubbling paint, mold or mildew growth in the attic or on interior walls, musty odor in certain rooms, dripping sounds during rain, damp spots on the attic floor or insulation, sunlight visible through the attic roof boards, and unexplained increases in water bills (if the leak runs into walls). Even small leaks cause significant damage over time. If you notice any of these signs, contact Best Roofing Now for a free inspection before the damage spreads.',
  },
  {
    question: 'Should I clean moss and algae off my roof?',
    answer:
      'Yes, you should remove moss and algae from your roof. Moss retains moisture against shingles, accelerating deterioration and potentially lifting shingle edges, allowing water underneath. Algae (the dark streaks on roofs) is primarily cosmetic but can reduce energy efficiency by darkening the roof surface. Professional soft-wash cleaning costs $250 to $600 for most Charlotte homes. Never pressure wash asphalt shingles as it strips protective granules. Prevent regrowth by installing zinc or copper strips near the ridge, which release metal ions during rain. Algae-resistant shingles with copper granules prevent growth from the start.',
  },
  {
    question: 'How do I maintain my gutters to protect my roof?',
    answer:
      'Proper gutter maintenance is essential for roof health. Clean gutters at least twice per year (spring and fall) and after major storms. Remove leaves, twigs, and debris from gutters and downspouts. Check that gutters are securely fastened and properly sloped (1/4 inch drop per 10 feet) toward downspouts. Ensure downspouts extend at least 4 feet from the foundation. Inspect for rust, holes, or separated seams. Consider gutter guards ($7-$15 per linear foot) to reduce cleaning frequency. Clogged gutters cause water to back up under shingles, leading to roof rot and ice dams.',
  },
  {
    question: 'Can I walk on my roof safely?',
    answer:
      'Walking on your roof is generally not recommended for homeowners. Asphalt shingles are slippery, especially when wet, and foot traffic can damage granules and crack aging shingles. Roof falls are a leading cause of homeowner injuries. If you must inspect your roof, use binoculars from the ground or a drone camera. For close inspection, use a sturdy ladder to view edges and never walk on a wet, icy, or steep roof (over 6:12 pitch). Professional roofers have proper safety equipment, training, and insurance for roof access. Best Roofing Now offers free professional inspections so you never need to risk climbing on your roof.',
  },
  {
    question: 'What maintenance does a metal roof need?',
    answer:
      'Metal roofs require minimal maintenance compared to shingle roofs. Annual maintenance includes: removing debris (leaves, branches) that can trap moisture, checking and tightening any exposed fasteners, inspecting sealant around penetrations and transitions, cleaning gutters, checking for scratches or dents that could lead to corrosion, and ensuring no dissimilar metals are in contact (which causes galvanic corrosion). Professional inspection every 2 to 3 years is sufficient. Metal roofs do not need moss or algae treatment. Most metal roof maintenance can be done from a ladder without walking on the roof surface.',
  },
  {
    question: 'How do I prevent ice dams on my Charlotte NC roof?',
    answer:
      'While Charlotte NC rarely experiences severe ice dams, freezing rain events can create ice buildup. Prevention includes: ensuring proper attic insulation (R-38 minimum) to keep roof surface cold, maintaining adequate attic ventilation (1 sq ft of ventilation per 150 sq ft of attic floor), sealing attic air leaks around light fixtures, pipes, and ductwork, and keeping gutters clean so meltwater drains properly. If ice dams form, never chip ice off with tools as this damages shingles. Use calcium chloride ice melt in a stocking placed on the dam, or call a professional for safe steam removal.',
  },
  {
    question: 'When should I call a professional roofer instead of doing DIY?',
    answer:
      'Call a professional roofer for: any leak, even a small one, as the source is often far from where water appears inside; damage after storms (for proper insurance documentation); replacing more than a few shingles; any work involving flashing around chimneys, skylights, or walls; sagging or structural concerns; mold or rot discovery; anything on steep roofs (over 6:12 pitch); and any work requiring more than a basic ladder. DIY is appropriate for: cleaning gutters from a stable ladder, visual inspection from the ground, trimming branches that overhang the roof, and applying moss preventive strips. When in doubt, call Best Roofing Now for a free assessment.',
  },
  {
    question: 'How does Charlotte NC weather affect roof maintenance needs?',
    answer:
      'Charlotte NC weather creates unique maintenance demands. Hot, humid summers (90+ degrees, 70% humidity) promote algae and moss growth and accelerate UV degradation of shingles. The region averages 42 thunderstorm days per year with potential for hail, high winds, and heavy downpours. Hurricane remnants bring tropical storm-force winds 1 to 2 times per decade. Winter freezing rain events (5 to 10 per year) can cause ice buildup. Charlotte receives 43 inches of rain annually, testing drainage and waterproofing. This combination means Charlotte roofs require more frequent inspection and proactive maintenance than roofs in drier, milder climates.',
  },
  {
    question: 'How do I extend the life of my roof?',
    answer:
      'Extend your roof\'s lifespan with these proven steps: schedule professional inspections twice yearly (spring and fall), clean gutters regularly to prevent water backup, trim tree branches that overhang or touch the roof, address minor repairs immediately before they escalate, ensure proper attic ventilation and insulation, remove moss and algae promptly, keep the roof surface clear of debris, fix loose or damaged flashing right away, and document your roof\'s condition with dated photos for insurance purposes. These maintenance practices can add 5 to 10 years to your roof\'s lifespan and save thousands in premature replacement costs.',
  },
];

const citationFacts = [
  {
    topic: 'roof maintenance schedule Charlotte NC',
    content:
      'Charlotte NC homeowners should have their roof professionally inspected twice per year: in spring (March-April) before the region\'s storm season of 42 annual thunderstorm days, and in fall (October-November) before winter freezing rain events. Additional inspections are recommended after any hailstorm or wind event exceeding 60 mph. Regular maintenance extends roof lifespan by 5-10 years.',
    source: 'Best Roofing Now - Charlotte NC maintenance data, 2026',
  },
  {
    topic: 'roof leak signs Charlotte NC',
    content:
      'Common signs of a roof leak in Charlotte NC include water stains on ceilings (yellowish-brown rings), peeling paint, mold or mildew growth, musty odors, and visible daylight through attic roof boards. Charlotte\'s 43 inches of annual rainfall and 42 thunderstorm days per year make leak detection and prompt repair essential. Even small leaks can cause $1,500-$9,000 in mold remediation costs if left unaddressed.',
    source: 'Best Roofing Now - Charlotte NC roof damage data, 2026',
  },
  {
    topic: 'roof moss algae removal Charlotte NC',
    content:
      'Professional soft-wash roof cleaning costs $250-$600 for a typical Charlotte NC home. Charlotte\'s 70% average humidity promotes algae growth, visible as dark streaks on roofs. Moss retains moisture and can lift shingle edges, causing water intrusion. Never pressure wash asphalt shingles. Zinc or copper ridge strips prevent regrowth. Algae-resistant shingles with copper granules are the most effective long-term solution.',
    source: 'Best Roofing Now - Charlotte NC roof cleaning data, 2026',
  },
];

export default function RoofMaintenanceFAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'FAQ', url: `${SITE_CONFIG.url}/faq` },
          { name: 'Roof Maintenance FAQ', url: `${SITE_CONFIG.url}/roof-maintenance-faq` },
        ]}
      />
      <FAQSchema faqs={maintenanceFAQs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-maintenance-faq`}
        pageName="Roof Maintenance FAQ - Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How often should I inspect my roof?',
            answer:
              'Inspect your roof professionally twice per year in Charlotte NC: spring (March-April) and fall (October-November). Also inspect after severe storms. Best Roofing Now offers free inspections for Charlotte homeowners.',
            speakableAnswer:
              'Have your roof inspected twice a year in Charlotte, in spring and fall. Call Best Roofing Now at 704-605-6047 for a free roof inspection.',
          },
          {
            question: 'How do I maintain my roof?',
            answer:
              'Maintain your roof by scheduling twice-yearly inspections, cleaning gutters, trimming overhanging branches, addressing repairs promptly, ensuring attic ventilation, and removing moss or algae. Regular maintenance extends roof life by 5-10 years.',
            speakableAnswer:
              'Maintain your roof with twice-yearly inspections, clean gutters, and prompt repairs. Call 704-605-6047 for a free maintenance assessment.',
          },
          {
            question: 'How do I know if my roof is leaking?',
            answer:
              'Signs of a roof leak include water stains on ceilings, peeling paint, mold growth, musty odors, and visible daylight through the attic. Even small leaks cause significant damage. Get a free inspection from Best Roofing Now.',
            speakableAnswer:
              'Look for water stains, peeling paint, mold, or musty smells. Call Best Roofing Now at 704-605-6047 for a free leak inspection.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.services.inspection}
            alt="Roof maintenance and inspection guide - Charlotte NC by Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-semibold">Roof Maintenance FAQ</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Maintenance FAQ: <br className="hidden md:block" />
              <span className="text-accent-light">12 Questions Answered</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Seasonal Checklists, Damage Signs, DIY vs Pro &amp; Charlotte NC Climate Tips
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Proper maintenance extends your roof&apos;s life by 5 to 10 years and saves thousands. This guide answers 12 essential maintenance questions for Charlotte NC homeowners, from seasonal checklists to knowing when to call a professional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Search className="w-5 h-5" aria-hidden="true" />}
              >
                Schedule Free Inspection
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

            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                {SITE_CONFIG.googleRating} Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                Free Inspections
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                {SITE_CONFIG.customerCount}+ Roofs Maintained
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white py-8 border-b border-gray-100 sticky top-0 z-20">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#seasonal-checklist" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <Calendar className="w-4 h-4" /> Seasonal Checklist
            </a>
            <a href="#damage-signs" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <Eye className="w-4 h-4" /> Damage Signs
            </a>
            <a href="#diy-vs-pro" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <Wrench className="w-4 h-4" /> DIY vs Pro
            </a>
            <a href="#all-faqs" className="inline-flex items-center gap-1.5 bg-light px-4 py-2 rounded-lg text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
              <HelpCircle className="w-4 h-4" /> All 12 FAQs
            </a>
          </div>
        </div>
      </section>

      {/* Seasonal Maintenance Checklist */}
      <section id="seasonal-checklist" className="section bg-white scroll-mt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Charlotte NC Seasonal Roof Maintenance Checklist
            </h2>
            <p className="text-gray text-lg text-center mb-8">
              Follow this quarterly checklist to keep your roof in top condition year-round.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-light rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-dark text-lg">Spring (Mar-May)</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    'Schedule professional inspection',
                    'Clear debris from roof surface',
                    'Clean gutters and downspouts',
                    'Check flashing around chimneys and vents',
                    'Inspect for winter storm damage',
                    'Trim branches within 6 feet of roof',
                    'Check attic ventilation is clear',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-light rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Sun className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-dark text-lg">Summer (Jun-Aug)</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    'Look for curling or blistering shingles',
                    'Check attic temperature (should be within 10-15 F of outside)',
                    'Inspect for algae or moss growth',
                    'Ensure attic fans are working',
                    'Check for pest damage or nesting',
                    'Monitor after severe thunderstorms',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-light rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-dark text-lg">Fall (Sep-Nov)</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    'Schedule professional inspection',
                    'Deep clean gutters (leaf season)',
                    'Inspect for hurricane season damage',
                    'Re-caulk around penetrations if needed',
                    'Check downspout extensions',
                    'Verify attic insulation is adequate',
                    'Remove fallen leaves from valleys',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-light rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Snowflake className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-dark text-lg">Winter (Dec-Feb)</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    'Check for ice dam formation after freezing rain',
                    'Remove heavy debris or branches from storms',
                    'Inspect from inside attic for leaks',
                    'Ensure gutters are draining (not frozen)',
                    'Watch for icicle formation at eaves',
                    'Check for condensation in attic',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Damage Signs Visual Guide */}
      <section id="damage-signs" className="section bg-light scroll-mt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              Roof Damage Warning Signs
            </h2>
            <p className="text-gray text-lg text-center mb-8">
              Know what to look for to catch problems early and prevent costly repairs.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { sign: 'Water stains on ceilings or walls', where: 'Interior', urgency: 'Act Now', color: 'red' },
                { sign: 'Daylight visible through attic roof boards', where: 'Attic', urgency: 'Act Now', color: 'red' },
                { sign: 'Sagging or dipping roof sections', where: 'Exterior', urgency: 'Act Now', color: 'red' },
                { sign: 'Missing or blown-off shingles', where: 'Exterior', urgency: 'This Week', color: 'orange' },
                { sign: 'Curling, cracking, or buckling shingles', where: 'Exterior', urgency: 'This Week', color: 'orange' },
                { sign: 'Granule accumulation in gutters', where: 'Gutters', urgency: 'This Month', color: 'yellow' },
                { sign: 'Cracked or deteriorated flashing', where: 'Exterior', urgency: 'This Week', color: 'orange' },
                { sign: 'Moss or algae growth on roof surface', where: 'Exterior', urgency: 'This Season', color: 'yellow' },
                { sign: 'Peeling paint on overhangs or soffits', where: 'Exterior', urgency: 'This Month', color: 'yellow' },
                { sign: 'Higher than normal energy bills', where: 'Bills', urgency: 'This Month', color: 'yellow' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                    item.color === 'red' ? 'bg-red-500' :
                    item.color === 'orange' ? 'bg-orange-500' : 'bg-yellow-500'
                  }`} />
                  <div className="flex-1">
                    <span className="text-dark font-medium text-sm">{item.sign}</span>
                    <span className="text-xs text-gray block">{item.where}</span>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${
                    item.color === 'red' ? 'bg-red-100 text-red-700' :
                    item.color === 'orange' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.urgency}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Damage Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DIY vs Pro Guide */}
      <section id="diy-vs-pro" className="section bg-white scroll-mt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              DIY vs Professional Maintenance
            </h2>
            <p className="text-gray text-lg text-center mb-8">
              Know which tasks are safe to handle yourself and which require professional expertise.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-light rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                  <Home className="w-5 h-5 text-green-500" />
                  Safe for DIY
                </h3>
                <ul className="space-y-3">
                  {[
                    'Visual inspection from the ground with binoculars',
                    'Cleaning gutters from a stable ladder',
                    'Trimming tree branches near the roof',
                    'Checking attic for daylight or moisture',
                    'Applying moss preventive strips',
                    'Clearing debris from roof valleys (from ladder)',
                    'Monitoring for new water stains inside',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-light rounded-xl p-6 border-l-4 border-primary">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Call a Professional
                </h3>
                <ul className="space-y-3">
                  {[
                    'Any active leak, even a small one',
                    'Storm damage assessment (for insurance)',
                    'Replacing shingles or flashing',
                    'Work around chimneys, skylights, or vents',
                    'Sagging or structural concerns',
                    'Mold or rot discovery in attic',
                    'Any work on steep roofs (over 6:12 pitch)',
                    'Comprehensive annual inspection',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All 12 FAQs */}
      <section id="all-faqs" className="section bg-light scroll-mt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
              All 12 Roof Maintenance Questions
            </h2>
            <p className="text-gray text-lg text-center mb-8">
              Expert answers to the most important roof maintenance questions for Charlotte NC homeowners.
            </p>
            <div className="space-y-4">
              {maintenanceFAQs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition group"
                >
                  <summary className="p-6 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-bold text-dark pr-8">{faq.question}</span>
                      <ArrowRight className="w-5 h-5 text-gray ml-auto flex-shrink-0 transform group-open:rotate-90 transition-transform" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray pl-8">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <CitationSection
              heading="Roof Maintenance Facts &mdash; Charlotte NC"
              citations={citationFacts}
            />
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/faq"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <HelpCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Main FAQ Hub
                </h3>
                <p className="text-gray text-sm">
                  All roofing questions organized by topic
                </p>
              </Link>
              <Link
                href="/when-to-replace-roof-faq"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <Calendar className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Replacement Timing FAQ
                </h3>
                <p className="text-gray text-sm">
                  When to repair vs replace your roof
                </p>
              </Link>
              <Link
                href="/roofing-costs-2026"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <Wrench className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  2026 Cost Guide
                </h3>
                <p className="text-gray text-sm">
                  Complete pricing for repairs and maintenance
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Keep Your Roof in Peak Condition"
        subtitle="Schedule a free professional inspection with Best Roofing Now. We will assess every aspect of your roof, identify potential issues, and give you an honest maintenance plan to maximize your roof's lifespan."
      />
    </>
  );
}
