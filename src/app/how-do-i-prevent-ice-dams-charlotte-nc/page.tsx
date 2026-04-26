import { Metadata } from 'next';
import { Phone, Snowflake } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-do-i-prevent-ice-dams-charlotte-nc`;
const QUESTION = 'How do I prevent ice dams on my Charlotte NC roof?';
const ANSWER =
  "Prevent ice dams on your Charlotte NC roof with this 5-step bundle: (1) install ice-and-water shield self-adhered membrane along eaves extending 24-36 inches up from the eave edge (Charlotte not technically required by NC IRC but highly recommended for north Mecklenburg/Davidson/Cornelius/Huntersville/Lake Norman areas — $0.80-$1.50/sq ft, included in proper reroof); (2) upgrade attic insulation to R-49 to keep roof deck cold and prevent snow-melt from warm attic air ($1,800-$4,500 blow-in); (3) install balanced ridge + soffit ventilation per NC IRC §R806 1:300 NFVA to maintain cold attic temperature ($800-$2,500); (4) verify drip edge presence and condition (NC IRC §R905.2.8.5 required); (5) install heat cable at eaves and gutters as backup for known ice-dam zones ($300-$1,200, typically only needed in north Mecklenburg cold-snap zones). Charlotte sees ice dams 1-3 times per decade during January-February cold snaps — most common in Davidson, Cornelius, Huntersville, north Mecklenburg, and Lake Norman areas where temperatures can hit 15-25°F for 3-5 consecutive days. Ice dams cause $5,000-$25,000 in interior damage when they fail (drywall, insulation, hardwood floors, electrical) — prevention is far cheaper than repair. Best Roofing Now's free inspection includes ice-dam-risk assessment and prevention plan.";

const followUpFAQs = [
  {
    question: 'Does Charlotte NC really get ice dams?',
    answer:
      "Yes — Charlotte NC sees ice dams 1-3 times per decade during severe cold snaps, with frequency increasing in north Mecklenburg/Davidson/Cornelius/Huntersville/Lake Norman areas (where temperatures can hit 15-25°F for 3-5 consecutive days during January-February polar vortex events). Recent significant ice events: January 2014 (-1°F low), February 2015 (severe ice storm), January 2018 (4°F low), January 2025 (10°F sustained cold). While less frequent than Northern climates, Charlotte ice dams happen and cause significant damage when they do because most homes lack proper preventive infrastructure (only ~30% of pre-2010 Charlotte homes have ice-and-water shield underlayment).",
  },
  {
    question: 'What\'s the cost of ice dam prevention vs ice dam damage repair in Charlotte?',
    answer:
      "Prevention bundle cost: ice-and-water shield underlayment $400-$1,500 (during reroof), R-49 insulation upgrade $1,800-$4,500, balanced ventilation $800-$2,500, heat cable $300-$1,200 (optional). Total prevention: $3,300-$9,700 (or $1,500-$4,000 if bundled with reroof). Damage repair cost when ice dam fails: drywall replacement $2,000-$8,000, insulation replacement $1,500-$4,000, hardwood floor refinish/replace $3,000-$15,000, electrical inspection/repair $500-$3,000, interior paint $1,500-$5,000, mold remediation $2,000-$10,000. Total typical ice dam damage: $10,000-$45,000. Prevention pays for itself many times over.",
  },
  {
    question: 'Can I install heat cable myself in Charlotte NC?',
    answer:
      "Conditional yes — basic heat cable installation is DIY-feasible but has limits. Materials cost $100-$300, install time 4-8 hours. DIY-suitable: simple eave runs on single-story homes, basic gutter heat cable. NOT DIY-recommended: gable-roof complex routing, electrical panel work, multi-story homes, ground-fault outlet install (electrician required), homes with ice-and-water shield (heat cable defeats waterproof underlayment if installed incorrectly). Best practice: have heat cable installed during reroof when ice-and-water shield is being placed (combined install $300-$800). Operating cost: $20-$80 per cold snap depending on length and duration.",
  },
  {
    question: 'How do I know if my Charlotte attic has enough insulation to prevent ice dams?',
    answer:
      "Three checks: (1) measure insulation depth — 16+ inches of blown cellulose or fiberglass = R-49 (current code, ice-dam-prevention adequate); 11-15 inches = R-30 to R-38 (older code, marginal); under 10 inches = R-19 to R-25 (insufficient, high ice-dam risk); (2) winter inspection — after a snow event, look at your roof from outside; if snow melts unevenly with bare patches between still-snow areas (especially over warm-air-leaking sections), insulation is inadequate; (3) infrared thermography — Best Roofing Now's free inspection includes IR camera scan that shows attic insulation gaps and air leak hot spots. Most Charlotte homes built before 2000 have R-19 to R-30 (need upgrade for ice-dam prevention).",
  },
  {
    question: 'What should I do if I currently have an ice dam on my Charlotte roof?',
    answer:
      "Emergency response steps: (1) DO NOT chip the ice off with a hammer or pick (damages shingles and decking); (2) DO NOT apply rock salt or fertilizer (corrodes metal, kills landscape, damages shingles); (3) safely remove snow from the lower 3-4 ft of roof using a roof rake from the ground (reduces water available for ice-dam expansion); (4) place pantyhose filled with calcium chloride ice melt across the dam perpendicular to the roof to create a water channel; (5) call Best Roofing Now's emergency service immediately for steam removal (only safe professional method) and interior leak mitigation; (6) document interior damage with photos for insurance claim. Best Roofing Now offers same-day emergency ice dam response.",
  },
];

export const metadata: Metadata = {
  title: 'How Do I Prevent Ice Dams on My Charlotte NC Roof?',
  description:
    "Charlotte NC ice dam prevention: ice-and-water shield, R-49 insulation, balanced ventilation, drip edge, heat cable. Bundle $1,500-$9,700 prevents $10K-$45K damage.",
  keywords: [
    'how to prevent ice dams Charlotte NC',
    'ice dam prevention',
    'ice and water shield',
    'attic insulation ice dam',
    'heat cable Charlotte NC',
    'Lake Norman ice dam',
    'Davidson Cornelius ice dam',
    'roof rake ice dam',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Do I Prevent Ice Dams on My Charlotte NC Roof?',
    description: '5-step prevention bundle. Charlotte sees ice dams 1-3x per decade, mostly north Mecklenburg/LKN.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function IceDamPreventionPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How to Prevent Ice Dams?', url: PAGE_URL }]} />
      <WebPageSchema name="How Do I Prevent Ice Dams on My Charlotte NC Roof?" description="Ice dam prevention guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Prevent Ice Dams?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Do I Prevent Ice Dams Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Install ice-and-water shield 24-36 in. up from eaves ($0.80-$1.50/sq ft)',
          'Upgrade attic insulation to R-49 ($1,800-$4,500 blow-in)',
          'Install balanced ridge + soffit ventilation NC IRC §R806 ($800-$2,500)',
          'Verify drip edge per NC IRC §R905.2.8.5',
          'Install heat cable as backup ($300-$1,200, north Mecklenburg cold zones)',
          'Charlotte ice dams — 1-3x per decade, mostly north Mecklenburg/LKN',
          'Damage cost when ice dam fails — $10,000-$45,000 interior repair',
          'Prevention bundle — $3,300-$9,700 ($1,500-$4,000 if bundled with reroof)',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Prevent Ice Dams?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Snowflake className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Ice Dam Prevention Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Do I Prevent Ice Dams on My Charlotte NC Roof?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Ice Dam Risk Assessment</Button>
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

      <CTASection title="Prevent $10K-$45K of Ice Dam Damage" subtitle="Free risk assessment with infrared insulation scan. Bundle prevention with reroof for $1,500-$4,000. North Mecklenburg/LKN specialty." />
    </>
  );
}
