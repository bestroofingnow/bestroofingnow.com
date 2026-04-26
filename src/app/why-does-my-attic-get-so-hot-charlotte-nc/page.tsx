import { Metadata } from 'next';
import { Phone, Thermometer } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/why-does-my-attic-get-so-hot-charlotte-nc`;
const QUESTION = 'Why does my attic get so hot in Charlotte NC?';
const ANSWER =
  "Your Charlotte NC attic gets dangerously hot (130-160°F in July-August) for 4 root causes: (1) inadequate ventilation — NC IRC §R806 requires 1:150 NFVA (1 sq ft net free vent area per 150 sq ft attic floor), but most older Charlotte homes have only ridge vents OR soffit vents (not both), creating no air circulation; (2) missing or compressed soffit vent intake — soffits painted shut, blocked by insulation, or never installed prevent cool air from entering; (3) dark roof color absorbing solar heat — black/dark-gray asphalt shingles reach 150-170°F surface temp; (4) low-R-value or compressed insulation — Charlotte requires R-38 minimum (R-49 preferred), but 60% of pre-2000 homes have R-19 to R-30, allowing attic heat to radiate through the ceiling. Solutions: balanced ventilation install (ridge + soffit + 1:300 NFVA minimum) costs $800-$2,500; radiant barrier under decking $1,500-$4,000 (reduces 30-50°F); blow-in insulation upgrade to R-49 $1,800-$4,500; ENERGY STAR cool-roof shingles $0 premium when included in reroof. Best Roofing Now's free inspection diagnoses your specific bottleneck and provides written estimate.";

const followUpFAQs = [
  {
    question: 'How hot can a Charlotte NC attic get in summer?',
    answer:
      "Charlotte attic temperatures during peak summer (July-August): properly ventilated and insulated attic 95-115°F (10-25°F above outdoor temp); poorly ventilated attic 130-160°F (40-65°F above outdoor — extreme dangerous heat); dark-roofed home with poor ventilation 145-175°F at peak. The 130-175°F range causes: shingle premature aging (5-10 yr lifespan loss), AC overworking (15-30% higher cooling bills), HVAC ducts in attic losing efficiency (lukewarm air at registers), wood decking thermal cycling fatigue, plywood delamination, and attic-stored items damage. NC summer attic heat is a serious problem affecting 60%+ of Charlotte homes.",
  },
  {
    question: 'How do I tell if my Charlotte attic ventilation is adequate?',
    answer:
      "Five tests: (1) calculation — measure attic floor sq ft, divide by 150 (or 300 if balanced), this is the required net free vent area in sq ft; (2) visual — look for BOTH ridge vent (continuous strip along peak) AND soffit vents (perforations in eaves) — most homes need both; (3) temperature check — use IR thermometer or place a thermometer in attic in July, if it reads 30°F+ above outdoor temp, ventilation is inadequate; (4) moisture check — feel rafters/decking in summer, condensation indicates ventilation failure; (5) smell — musty/stale = inadequate airflow. Best Roofing Now's free inspection includes ventilation audit with specific NC code-compliance recommendations.",
  },
  {
    question: 'Will adding more ventilation lower my Charlotte AC bill?',
    answer:
      "Yes — properly balanced attic ventilation reduces summer AC bills 8-15% in Charlotte NC. Mechanism: cooler attic = cooler ceiling drywall = less radiant heat into living space + cooler HVAC ducts (if ducts run through attic) = less cooling loss. Real-world example: typical Charlotte 2,500 sq ft home with $250 July-August AC bill saves $20-$38/month after ventilation upgrade — payback period 3-7 years on $800-$2,500 ventilation install. Combined with insulation upgrade and radiant barrier, total comfort improvement and 20-35% AC bill reduction. Duke Energy occasionally offers ventilation rebates (check current programs).",
  },
  {
    question: 'What\'s a radiant barrier and is it worth it in Charlotte NC?',
    answer:
      "A radiant barrier is a reflective foil installed on the underside of roof decking that reflects radiant heat back outward instead of absorbing into the attic. In Charlotte's hot summers, radiant barriers reduce attic temperature 30-50°F and AC load 5-12%. Cost: $1,500-$4,000 retrofit, $0 premium when included in reroof. Best when: (1) attic temps consistently 130°F+; (2) HVAC ducts run through attic; (3) home faces full south or southwest sun. Requires intact attic ventilation to work properly. Combined with proper ventilation and R-49 insulation, radiant barrier delivers maximum benefit. Best Roofing Now installs radiant barrier as part of reroof for $0 premium.",
  },
  {
    question: 'What roof color is coolest for Charlotte NC?',
    answer:
      "Coolest Charlotte NC roof colors (lowest summer surface temp and SRI - Solar Reflective Index): white 0.65-0.85 SRI (coolest, peak surface 100-120°F); light gray 0.40-0.55 SRI (very cool, 110-130°F); cool brown/cool blue ENERGY STAR shingles 0.25-0.35 SRI (cool, 120-140°F); medium gray 0.20-0.25 SRI (moderate, 130-150°F); dark gray 0.10-0.15 SRI (hot, 140-165°F); black 0.05-0.10 SRI (hottest, 150-175°F). For Charlotte, ENERGY STAR cool-roof shingles in any color reduce attic temp 5-15°F and AC bill 3-8% with no aesthetic compromise. Available from GAF Timberline Cool Series, CertainTeed Landmark Solaris, OC Duration Cool. No premium vs standard shingles.",
  },
];

export const metadata: Metadata = {
  title: 'Why Does My Attic Get So Hot in Charlotte NC?',
  description:
    "Charlotte NC attic 130-160°F summer = inadequate ventilation, missing soffit intake, dark roof, low insulation. Solutions: balanced vent $800-2,500, radiant barrier $1,500-4,000.",
  keywords: [
    'why is my attic so hot Charlotte NC',
    'attic temperature Charlotte',
    'attic ventilation Charlotte NC',
    'NC IRC R806 attic ventilation',
    'radiant barrier Charlotte',
    'cool roof Charlotte',
    'soffit vent Charlotte',
    'reduce attic heat NC',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Why Does My Attic Get So Hot in Charlotte NC?',
    description: 'Charlotte attics hit 130-160°F in summer. 4 root causes: ventilation, intake, dark roof, insulation.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhyAtticHotPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Why Is My Attic So Hot?', url: PAGE_URL }]} />
      <WebPageSchema name="Why Does My Attic Get So Hot in Charlotte NC?" description="Hot attic causes and solutions for Charlotte NC homes." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Hot Attic?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Why Does My Attic Get So Hot Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Inadequate ventilation — only ridge OR only soffit, not both balanced',
          'Missing soffit vent intake — painted shut or blocked by insulation',
          'Dark roof color absorbing solar heat (black 150-170°F surface)',
          'Low-R-value or compressed insulation (R-19 to R-30 vs required R-38+)',
          'NC IRC §R806 minimum — 1:150 NFVA (or 1:300 if balanced ridge+soffit)',
          'Solution — balanced ventilation install $800-$2,500',
          'Solution — radiant barrier $1,500-$4,000 (reduces 30-50°F)',
          'Solution — blow-in insulation R-49 upgrade $1,800-$4,500',
          'AC bill reduction — 8-15% from ventilation alone, 20-35% from full bundle',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Hot Attic?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Thermometer className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Attic Heat Diagnostic Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">Why Does My Attic Get So Hot in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Attic Ventilation Audit</Button>
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

      <CTASection title="Cool Your Attic. Cut Your AC Bill." subtitle="NC IRC §R806 code-compliant ventilation. Radiant barrier and R-49 insulation packages. 8-35% AC bill reduction. Free written estimate with diagnosis." />
    </>
  );
}
