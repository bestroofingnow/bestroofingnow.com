import { Metadata } from 'next';
import { Phone, Wind } from 'lucide-react';
import {
  BreadcrumbSchema,
  QAPageSchema,
  FAQSchema,
  SpeakableContent,
  WebPageSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  SpeakableContentBlocks,
  FeaturedSnippetListAnswerSchema,
  FreeInspectionOfferSchema,
} from '@/components/seo/SchemaMarkup';
import { CTASection } from '@/components/sections/CTASection';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

const PAGE_URL = `${SITE_CONFIG.url}/how-much-does-attic-ventilation-cost-charlotte-nc`;
const QUESTION = 'How much does attic ventilation cost in Charlotte NC?';
const ANSWER =
  "Charlotte NC attic ventilation cost ranges $400-$3,500 depending on system type and complexity. Pricing by system: ridge vent only $400-$900 (continuous strip along roof peak — exhaust); soffit vent only $300-$800 (perforated panels in eaves — intake); BALANCED ridge + soffit (most code-compliant) $800-$2,500; gable vent $200-$600 (older homes, less effective); turbine vent $150-$400 each (mostly obsolete); powered attic ventilator $400-$1,200 (electric or solar — useful supplement); whole-house fan $1,200-$3,500 (premium, full-house cooling). Add-ons: vent baffles to keep insulation off vents $200-$500; insulation upgrade R-49 $1,800-$4,500 (often needed alongside ventilation); radiant barrier $1,500-$4,000 (combine with ventilation for max benefit). NC IRC §R806 requires 1:150 NFVA (or 1:300 if ridge+soffit balanced). Best Roofing Now's free inspection includes ventilation calculation and code-compliance audit. Often bundled with reroof at zero ventilation labor premium.";

const followUpFAQs = [
  {
    question: 'What\'s the difference between ridge vent and gable vent in Charlotte?',
    answer:
      "Ridge vent (continuous strip along roof peak) is the modern code-preferred system — works on convection (hot air rises out, cool air enters through soffits), no electricity required, distributes airflow evenly across attic, $400-$900 install. Gable vent (rectangular opening in gable end wall) is the older legacy system — works on cross-ventilation between gables, less effective at peak heat removal, allows weather/insect intrusion, $200-$600 each. Modern Charlotte builds use ridge + soffit balanced ventilation. Older homes (pre-1990) often have gable vents only — upgrading to ridge + soffit during reroof is highly recommended.",
  },
  {
    question: 'Are powered attic ventilators worth the cost in Charlotte NC?',
    answer:
      "Conditional yes — useful as supplement, not a replacement for passive ventilation. Solar-powered models ($400-$800) are the best ROI option (no electric bill, runs when needed, no attic wiring). Electric models ($300-$600 + $50/yr operation) work continuously but consume electricity. Best for: Charlotte homes with insufficient passive ventilation that can't be expanded (some hip-roof designs), homes with inadequate soffit intake. NOT a substitute for proper ridge + soffit ventilation — adding a power vent without fixing intake just creates suction that pulls conditioned air from living space (raising AC bill). Best Roofing Now's audit identifies whether power ventilation is right for your home.",
  },
  {
    question: 'Can I install attic ventilation myself in Charlotte NC?',
    answer:
      "Strongly NOT recommended — DIY ventilation install is one of the highest fail-rate roofing DIYs. Risks: (1) improper cuts in roof decking creating leak paths; (2) inadequate flashing causing storm leaks; (3) unbalanced system (too much intake or too much exhaust) creating moisture problems; (4) NC code non-compliance affecting future home sale; (5) voiding shingle manufacturer warranty if not installed per spec; (6) safety risk (fall from roof or attic). Cost difference: DIY materials $200-$600 + 8-16 hours labor + risk vs professional install $800-$2,500 with warranty. Best Roofing Now offers free inspection and code-compliant install with manufacturer warranty preservation.",
  },
  {
    question: 'How long does ventilation install take in Charlotte NC?',
    answer:
      "Installation timeline by system: ridge vent only — 4-6 hours (1 day); soffit vent only — 6-10 hours (1 day); balanced ridge + soffit — 1-2 days; powered attic ventilator — 2-4 hours; whole-house fan — 4-8 hours; combined ventilation + insulation upgrade — 2-3 days; combined ventilation + radiant barrier + insulation — 3-5 days. Add 2-4 weeks for scheduling lead time during peak season (April-October) or 1 week off-season. When bundled with reroof, ventilation install adds 0-1 day to total project. Most Charlotte ventilation upgrades are completed in a single day with minimal homeowner disruption.",
  },
  {
    question: 'Will Duke Energy give me a rebate for ventilation in Charlotte?',
    answer:
      "Sometimes — Duke Energy NC offers rotating rebate programs that occasionally include attic ventilation, attic insulation, and cool-roof shingles. Current programs (verify at duke-energy.com/rebates): up to $200 attic insulation rebate (R-30+ to R-49), up to $300 cool-roof shingle rebate (ENERGY STAR), occasional whole-house fan rebates. Federal tax credit: 25C residential energy credit covers 30% (up to $1,200) of insulation costs through 2032. Ventilation alone rarely qualifies but typically pairs with rebate-eligible insulation. Best Roofing Now provides Manufacturer's Certification Statements for tax credit documentation.",
  },
];

export const metadata: Metadata = {
  title: 'How Much Does Attic Ventilation Cost in Charlotte NC?',
  description:
    "Charlotte NC attic ventilation cost: ridge vent $400-900, soffit $300-800, balanced ridge+soffit $800-2,500, power vent $400-1,200, whole-house fan $1,200-3,500. NC code compliant.",
  keywords: [
    'attic ventilation cost Charlotte NC',
    'ridge vent cost Charlotte',
    'soffit vent cost',
    'balanced attic ventilation NC',
    'powered attic ventilator cost',
    'whole house fan cost Charlotte',
    'attic ventilation install',
    'NC IRC R806 ventilation',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Much Does Attic Ventilation Cost in Charlotte NC?',
    description: 'Charlotte attic ventilation $400-$3,500 by system. Balanced ridge+soffit $800-2,500.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function AtticVentilationCostPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Attic Ventilation Cost?', url: PAGE_URL }]} />
      <WebPageSchema name="How Much Does Attic Ventilation Cost in Charlotte NC?" description="Attic ventilation pricing guide for Charlotte NC homes." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Vent Cost?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Much Does Attic Ventilation Cost Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Ridge vent only — $400-$900 (continuous peak strip)',
          'Soffit vent only — $300-$800 (eave intake)',
          'BALANCED ridge + soffit — $800-$2,500 (code-preferred)',
          'Gable vent — $200-$600 (older homes, less effective)',
          'Turbine vent — $150-$400 each (mostly obsolete)',
          'Powered attic ventilator (electric or solar) — $400-$1,200',
          'Whole-house fan — $1,200-$3,500 (premium)',
          'NC IRC §R806 requires 1:150 NFVA (or 1:300 if balanced)',
          'Often bundled with reroof at zero ventilation labor premium',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Vent Cost?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Wind className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Attic Ventilation Pricing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Much Does Attic Ventilation Cost in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Ventilation Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-50 border-l-4 border-primary rounded-r-xl p-6 mb-8">
              <p className="text-lg text-slate-900 leading-relaxed"><strong>{QUESTION}</strong></p>
              <p className="text-slate-800 mt-3 leading-relaxed">{ANSWER}</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Follow-up Questions</h2>
            <div className="space-y-4">
              {followUpFAQs.map((faq) => (
                <details key={faq.question} className="bg-white rounded-xl shadow-sm p-5 border border-slate-200 group">
                  <summary className="font-bold text-dark cursor-pointer list-none flex items-start justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="text-primary transition-transform group-open:rotate-45 text-2xl leading-none" aria-hidden="true">+</span>
                  </summary>
                  <p className="text-gray-700 mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="NC Code-Compliant Ventilation Install" subtitle="Free written estimate with calculated NFVA. Bundle with reroof at zero ventilation labor premium. Manufacturer warranty preservation guaranteed." />
    </>
  );
}
