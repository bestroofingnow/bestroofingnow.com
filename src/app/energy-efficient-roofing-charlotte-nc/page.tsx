import { Metadata } from 'next';
import Link from 'next/link';
import {
  Sun,
  Thermometer,
  Wind,
  Home,
  DollarSign,
  Award,
  CheckCircle,
  Phone,
  ArrowRight,
  Zap,
  Leaf,
  ShieldCheck,
} from 'lucide-react';
import { SEOImage } from '@/components/ui/SEOImage';
import { CTASection } from '@/components/sections/CTASection';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  SpeakableContentBlocks,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  FeaturedSnippetListAnswerSchema,
  FreeInspectionOfferSchema,
  HowToSchema,
} from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

const PAGE_URL = `${SITE_CONFIG.url}/energy-efficient-roofing-charlotte-nc`;

export const metadata: Metadata = {
  // New 2026-05-16 — May 11 priority #7 outstanding item. Topical cluster authority
  // for "Energy Efficiency & Eco-Friendly" was 21/100 (weakest cluster with real
  // commercial volume). Built as the local Charlotte pillar that links out to
  // existing supporting pages (SRI, metal-roof-cost, ridge-vent-installation,
  // solar-services). Replaces the disconnected WP blog post about energy-efficient
  // roofing options that we cannot edit.
  title: 'Energy-Efficient Roofing Charlotte NC | 2026 Guide',
  description:
    'Energy-efficient roofing in Charlotte NC: cool-roof shingles, metal, attic ventilation, R-49 insulation, solar integration. Save $200–$650/yr on AC.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Energy-Efficient Roofing Charlotte NC | 2026 Guide',
    description:
      'Five ways to make your Charlotte NC roof energy-efficient. Cool-roof, metal, ventilation, insulation, solar — with NC climate data and ROI.',
    url: PAGE_URL,
    type: 'article',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Energy-efficient roofing in Charlotte NC' }],
  },
};

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Energy-Efficient Roofing Charlotte NC', url: PAGE_URL },
];

// Direct-answer summary (Featured-Snippet target)
const SUMMARY_QUESTION = 'How do you make a Charlotte NC roof energy-efficient?';
const SUMMARY_ANSWER =
  "Five upgrades make a Charlotte NC roof energy-efficient: (1) cool-roof shingles with ENERGY STAR-rated reflective granules save $80–$500/yr on AC bills versus standard dark shingles; (2) metal roofing reflects 70–90% of solar radiation and cuts attic temperatures 20–40°F; (3) balanced attic ventilation to NC code IRC R806 (ridge + soffit at 1:300 net free area) drops attic temperature 20–40°F in Charlotte summers; (4) R-49 attic insulation (Climate Zone 3 IECC minimum) reduces heat transfer to living space; (5) solar-ready roof preparation enables PV with the 30% federal Residential Clean Energy Credit. Combined annual AC savings on a typical 2,000 sq ft Charlotte home: $250–$650 with full energy-efficient roof system.";

const fiveUpgrades = [
  {
    icon: Sun,
    title: '1. Cool-Roof Shingles (ENERGY STAR)',
    summary: 'Reflective granule coating drops surface temperature 50–80°F vs standard dark shingles.',
    detail:
      'Cool-roof shingles use specially engineered granules that reflect more solar heat without changing the shingle\'s look. ENERGY STAR certification requires minimum SRI 25 initial / 15 aged. Charlotte popular options: GAF Timberline Cool Series ($95–$140/sq), CertainTeed Landmark Solaris ($110–$155/sq), Owens Corning Duration Premium COOL ($120–$170/sq). Cost premium over standard shingles is typically $0–$20 per square. Even dark cool-roof colors (0.25–0.35 SRI) outperform standard dark shingles (0.05–0.15 SRI).',
    savings: '$80–$500/year AC savings · 5–12% summer cooling reduction',
    linkHref: '/what-is-solar-reflective-index-charlotte-nc',
    linkText: 'See full SRI / cool-roof guide →',
  },
  {
    icon: ShieldCheck,
    title: '2. Metal Roofing',
    summary: 'Reflects 70–90% of solar radiation, lasts 50+ years, qualifies for insurance discounts.',
    detail:
      'Standing-seam metal, metal shingles, and stone-coated steel all reflect significantly more solar heat than asphalt. White and light-colored metal roofs achieve SRI 0.55–0.85. Cool-pigment metal coatings reach SRI 0.40–0.55 even in darker colors. Class 4 impact-resistant metal qualifies for 10–30% NC insurance premium discounts (State Farm, Allstate, USAA, Farm Bureau, Erie, Nationwide). Lifespan 40–70 years versus 20–30 years for asphalt.',
    savings: '$200–$800/year AC + insurance discount · 50+ yr lifespan',
    linkHref: '/metal-roof-cost',
    linkText: 'See metal roof cost guide →',
  },
  {
    icon: Wind,
    title: '3. Balanced Attic Ventilation (IRC R806)',
    summary: 'Ridge + soffit ventilation at 1:300 NFA drops Charlotte attic temps 20–40°F.',
    detail:
      'North Carolina code IRC R806 requires 1 square foot of net free ventilation area for every 300 square feet of attic (with 50/50 split between ridge exhaust and soffit intake). Charlotte attics commonly hit 140–160°F in July–August with inadequate ventilation, cooking shingles from below and forcing your AC to fight a 60°+ temperature differential. Quality ridge vents (GAF Cobra, Air Vent ShingleVent II) with external baffles drop attic temp 20–40°F immediately.',
    savings: '10–15% AC bill reduction · extends shingle life 3–7 yrs',
    linkHref: '/ridge-vent-installation',
    linkText: 'See ridge vent guide →',
  },
  {
    icon: Home,
    title: '4. R-49 Attic Insulation (IECC Zone 3)',
    summary: 'Charlotte is Climate Zone 3 — IECC minimum R-49 attic insulation (about 14–18 inches blown).',
    detail:
      'Climate Zone 3 includes Charlotte, Concord, Statesville, and most of the metro. Federal IECC code requires R-49 minimum attic insulation for new construction; existing homes often have R-19 to R-30 (under-insulated). Adding R-19 to R-30 worth of blown-in cellulose or fiberglass typically costs $1.50–$3.50/sqft installed. Combined with ventilation, this is the single biggest energy ROI on most older Charlotte homes.',
    savings: '$150–$450/year total HVAC savings',
    linkHref: '/attic-insulation-cost-charlotte-nc',
    linkText: 'See attic insulation cost →',
  },
  {
    icon: Zap,
    title: '5. Solar-Ready Roof Preparation',
    summary: 'Reinforced structure, pre-planned penetrations, and S-5! clamps preserve warranties.',
    detail:
      'Federal Residential Clean Energy Credit covers 30% of solar installation through 2032 (phasing to 26% in 2033, 22% in 2034). Charlotte homeowners also qualify for Duke Energy net metering at retail rates and NC property-tax exemption on the system value. Solar-ready roof prep: reinforce decking for panel mounts, plan penetration locations, install S-5! non-penetrating clamp-mount on metal seams (preserves manufacturer warranty), or use GAF DecoTech / CertainTeed Apollo II integrated solar shingles on asphalt roofs.',
    savings: '30% federal tax credit · $1,200–$2,500/yr electricity offset',
    linkHref: '/solar-services',
    linkText: 'See solar roofing services →',
  },
];

const howToSteps: string[] = [
  'Audit current efficiency: schedule a free roof + attic inspection. Document current shingle SRI, attic temperature, ventilation NFA, insulation R-value, and HVAC duct location.',
  'Prioritize by ROI: in Charlotte\'s Climate Zone 3, ventilation + insulation usually has the fastest payback (1–3 years). Cool-roof shingles pay back over 5–8 years through AC savings.',
  'Time it with reroof: if your roof is 18+ years old, bundle the cool-roof upgrade with the planned reroof. Material premium is small ($0–$20/sq) compared to a standalone tear-off later.',
  'Verify code compliance: Charlotte building permit requires IRC R806 ventilation calculation and IECC R-49 attic insulation on reroof permits. Best Roofing Now files both with the permit.',
  'Document for tax credit: keep the Manufacturer\'s Certification Statement for ENERGY STAR cool-roof shingles. Claim on IRS Form 5695 (25C credit, 30% up to $1,200/year).',
];

const followUpFAQs = [
  {
    question: 'What is the most energy-efficient roofing material for Charlotte NC?',
    answer:
      'Standing-seam metal roofing with cool-pigment coating is the most energy-efficient option for Charlotte NC homes — reflects 70–90% of solar radiation, drops attic temp 20–40°F, and lasts 50+ years. Best balance of efficiency and cost for most Charlotte homeowners is ENERGY STAR cool-roof asphalt shingles (GAF Timberline Cool Series, CertainTeed Landmark Solaris, OC Duration Premium COOL) — only $0–$20/sq more than standard shingles, $80–$500/yr AC savings, available in 8–22 traditional colors.',
  },
  {
    question: 'How much does an energy-efficient roof cost in Charlotte NC?',
    answer:
      'A 2,000 sq ft Charlotte NC home with full energy-efficient upgrade typically costs: ENERGY STAR cool-roof asphalt shingles $10,000–$17,500 installed (vs $8,500–$15,000 standard) — premium $1,500–$2,500; ridge vent + soffit balanced ventilation $800–$1,800; R-49 blown attic insulation top-up $1,500–$3,500. Total energy package premium $4,000–$7,800 over a standard reroof. Federal 25C tax credit returns 30% (up to $1,200) of cool-roof material cost.',
  },
  {
    question: 'Do cool-roof shingles work in Charlotte NC\'s humidity?',
    answer:
      'Yes — modern ENERGY STAR cool-roof shingles include algae-resistant granules (Scotchgard-like coating) specifically rated for the humid Southeast. GAF Cool Series, CertainTeed Landmark Solaris, and OC Duration Premium COOL all carry 10–15 year algae-resistance warranties. Charlotte\'s 70%+ summer humidity is the same conditions these products are tested under at the Carolina coast.',
  },
  {
    question: 'Does an energy-efficient roof increase my Charlotte home\'s resale value?',
    answer:
      'Yes — Charlotte NC real-estate data shows energy-efficient roofs increase resale value 4–7% on average versus standard roofs. Buyers value: documented utility bill savings, manufacturer transferable warranty, Class 4 impact-resistance for insurance discounts, and ENERGY STAR certification. Standing-seam metal roofs in particular show 85% cost recovery on 50-year roof on resale per Remodeling magazine\'s Cost vs Value report (Charlotte metro).',
  },
  {
    question: 'Is the 30% federal solar tax credit available in 2026 Charlotte NC?',
    answer:
      'Yes — the federal Residential Clean Energy Credit (Internal Revenue Code Section 25D) covers 30% of solar PV installation through 2032, phasing to 26% in 2033 and 22% in 2034. Available to Charlotte NC homeowners with no income cap. Separate from the 25C credit (30% up to $1,200) for cool-roof shingles, attic insulation, and other home efficiency upgrades. Both can be claimed in the same tax year (combined cap applies separately).',
  },
  {
    question: 'How long does an energy-efficient roof last in Charlotte NC?',
    answer:
      'ENERGY STAR cool-roof asphalt shingles: 25–50 years (Limited Lifetime warranty). Standing-seam metal: 40–70 years. Concrete tile: 75–100 years. Synthetic slate: 50+ years. Charlotte UV index averages 7–9 from April–September which accelerates standard shingle granule loss; cool-roof shingles include UV-stabilized polymer in the granule bond that adds 3–7 years to expected service life.',
  },
];

export default function EnergyEfficientRoofingCharlottePage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema
        name="Energy-Efficient Roofing Charlotte NC | 2026 Guide"
        description="Charlotte NC pillar guide to energy-efficient roofing: cool-roof shingles, metal, ventilation, insulation, and solar integration with NC climate data and ROI."
        url={PAGE_URL}
        primaryImage={IMAGES.hero.hero3}
        breadcrumb={breadcrumbItems}
      />
      <FAQSchema faqs={followUpFAQs} />
      <FeaturedSnippetListAnswerSchema
        question={SUMMARY_QUESTION}
        directAnswer={SUMMARY_ANSWER}
        items={fiveUpgrades.map((u) => `${u.title} — ${u.summary}`)}
        pageUrl={PAGE_URL}
      />
      <HowToSchema
        title="How to Make a Charlotte NC Roof Energy-Efficient (5 Steps)"
        description="The five-step planning sequence Best Roofing Now uses to design an energy-efficient roof for Charlotte NC homes."
        steps={howToSteps}
      />
      <FreeInspectionOfferSchema />
      <SpeakableContentBlocks city="Charlotte" includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Energy-Efficient Roofing Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-slate-800 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero3} alt="Energy-efficient roofing in Charlotte NC — cool roof shingles with reflective granules" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/80 rounded-full px-4 py-2 mb-4">
              <Leaf className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">ENERGY STAR · IRC R806 · IECC Zone 3</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Energy-Efficient Roofing
              <br className="hidden md:block" />
              <span className="text-emerald-300">Charlotte NC · 2026 Guide</span>
            </h1>
            <p className="speakable-intro text-xl md:text-2xl text-white/90 mb-6">
              Five upgrades that cut your Charlotte AC bill $250–$650 per year.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Cool-roof shingles, metal roofing, balanced attic ventilation to NC code IRC R806,
              R-49 insulation (IECC Climate Zone 3), and solar-ready preparation. Built around
              real Charlotte climate data — 90–100°F July averages, 70%+ summer humidity,
              UV index 7–9 — not generic energy advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<CheckCircle className="w-5 h-5" aria-hidden="true" />}>
                Free Energy Audit
              </Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Direct-answer summary (Featured-Snippet target) */}
      <section className="bg-light py-12 border-b border-gray-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-2">Direct Answer</p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{SUMMARY_QUESTION}</h2>
            <p className="speakable-answer text-gray text-lg leading-relaxed">{SUMMARY_ANSWER}</p>
          </div>
        </div>
      </section>

      {/* The Five Upgrades */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">The Five Energy-Efficient Roof Upgrades</h2>
              <p className="text-gray text-lg">In ROI order for Charlotte NC homes. Most start saving money the first summer after install.</p>
            </div>
            <div className="space-y-8">
              {fiveUpgrades.map((upgrade) => {
                const Icon = upgrade.icon;
                return (
                  <article key={upgrade.title} className="bg-light rounded-2xl p-6 md:p-8 border border-gray-100">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-emerald-100 text-emerald-700 rounded-xl p-3 flex-shrink-0">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">{upgrade.title}</h3>
                        <p className="text-emerald-700 font-medium text-sm">{upgrade.savings}</p>
                      </div>
                    </div>
                    <p className="text-gray font-semibold mb-3">{upgrade.summary}</p>
                    <p className="text-gray leading-relaxed mb-4">{upgrade.detail}</p>
                    <Link href={upgrade.linkHref} className="inline-flex items-center gap-1 text-primary font-semibold hover:underline">
                      {upgrade.linkText}
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* NC Climate Data Context */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Thermometer className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Charlotte NC Climate Data</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Energy Efficiency Matters More in Charlotte</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Summer Heat (Jun–Sep)</h3>
                <p className="text-gray text-sm">Average highs 88–92°F, July–August 90–100°F. Standard dark shingle roofs reach <strong>150–175°F surface temperature</strong>. Cool-roof shingles cap surface temp at 110–130°F.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">UV Index (Apr–Sep)</h3>
                <p className="text-gray text-sm">UV index <strong>7–9</strong> from April through September — accelerates granule degradation. Cool-roof shingles include UV-stabilized polymer adding 3–7 years of useful life.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Humidity</h3>
                <p className="text-gray text-sm">Summer humidity averages <strong>70–85%</strong>. Without proper ventilation, attic moisture creates mold and accelerates decking rot. IRC R806 1:300 NFA addresses this.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Climate Zone</h3>
                <p className="text-gray text-sm">Mecklenburg County is <strong>IECC Climate Zone 3A</strong> (warm-humid). Code minimum: R-49 attic insulation, IRC R806 1:300 ventilation. Most pre-2009 homes are under-insulated.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Cooling Degree Days</h3>
                <p className="text-gray text-sm">Charlotte averages <strong>1,800–2,200 CDD/year</strong>. Every 1°F reduction in attic temp lowers AC runtime ~1.5% — energy-efficient roofs cut 1,500–2,500 AC kWh/yr.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Electricity Rate</h3>
                <p className="text-gray text-sm">Duke Energy Carolinas residential rate <strong>$0.13–$0.15/kWh</strong> (2026). Combined with high cooling load, every percentage point of AC reduction = real Charlotte dollars.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Credits & Incentives */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-4">
                <DollarSign className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">2026 Tax Credits & Rebates</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Charlotte NC Energy-Efficient Roof Incentives</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Federal 25C Energy Efficient Home Improvement Credit</h3>
                <p className="text-gray text-sm leading-relaxed">30% of material cost (up to $1,200/year combined cap) for ENERGY STAR cool-roof shingles, attic insulation, and high-efficiency HVAC. Keep the Manufacturer&apos;s Certification Statement; claim on IRS Form 5695. Real-world example: $4,500 cool-roof shingle material on a 30-sq reroof = $1,200 credit (cap binds).</p>
              </div>
              <div className="bg-light rounded-xl p-6 border border-emerald-200">
                <h3 className="font-bold text-primary mb-2">Federal 25D Residential Clean Energy Credit (Solar)</h3>
                <p className="text-gray text-sm leading-relaxed">30% of solar PV installation cost through 2032, phasing to 26% (2033), 22% (2034). No income cap, no $1,200 limit. Separate from 25C — both can be claimed the same year on Form 5695.</p>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">Duke Energy Net Metering (NC)</h3>
                <p className="text-gray text-sm leading-relaxed">Charlotte homes with PV systems credit exported electricity at retail rates (1:1 net metering) under Duke Energy&apos;s Schedule NM. Applies through 2027 for new installations under current Public Staff settlement.</p>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">NC Property-Tax Exemption (Solar)</h3>
                <p className="text-gray text-sm leading-relaxed">North Carolina General Statute § 105-275(45) excludes 80% of solar PV system value from property-tax assessment — the energy upgrade does not raise your county property-tax bill proportionally.</p>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-2">NC Insurance Premium Discounts (Class 4)</h3>
                <p className="text-gray text-sm leading-relaxed">Class 4 impact-resistant roofs (UL 2218) qualify for 10–30% homeowner premium discounts with State Farm, Allstate, USAA, Farm Bureau, Erie, and Nationwide in NC. Compounding with energy savings on a metal roof, total annual benefit can exceed $1,000/yr.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Energy-Efficient Roofing FAQs</h2>
              <p className="text-gray">Charlotte NC-specific answers — not generic.</p>
            </div>
            <div className="space-y-4">
              {followUpFAQs.map((faq) => (
                <details key={faq.question} className="bg-white rounded-xl p-6 border border-gray-100 group">
                  <summary className="font-bold text-primary cursor-pointer flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <ArrowRight className="w-5 h-5 flex-shrink-0 group-open:rotate-90 transition-transform" aria-hidden="true" />
                  </summary>
                  <p className="text-gray text-sm leading-relaxed mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Free Charlotte Energy Roof Audit"
        subtitle="On-site evaluation of current shingle SRI, attic temperature, ventilation NFA, and insulation R-value — with a prioritized upgrade plan and 2026 pricing."
        placement="energy-efficient-pillar"
      />
    </>
  );
}
