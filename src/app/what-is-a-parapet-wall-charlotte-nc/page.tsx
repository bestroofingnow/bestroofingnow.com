import { Metadata } from 'next';
import { Phone, Building2 } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-parapet-wall-charlotte-nc`;
const QUESTION = 'What is a parapet wall and why is it on commercial buildings in Charlotte NC?';
const ANSWER =
  "A parapet wall is a short extension of an exterior wall that rises 18-48+ inches above the roofline at the building perimeter, common on Charlotte NC commercial buildings (warehouses, shopping centers, churches, office buildings, restaurants). Parapets serve four primary functions: (1) FIRE-rated separation between adjoining buildings (NC State Building Code requires parapets between attached commercial occupancies), (2) AESTHETIC concealment of HVAC equipment, drainage scuppers, and roof clutter from street view, (3) FALL PROTECTION for workers servicing the roof (OSHA-compliant guardrail when 42+ inches tall), and (4) WIND UPLIFT mitigation by deflecting wind load away from membrane edges. Parapet construction varies: CMU block (most common in Charlotte commercial), concrete tilt-up, brick veneer over wood/steel framing, or pre-engineered metal. Critical components include the coping cap (galvanized, aluminum, or copper top cover), through-wall flashing, weep holes, and the membrane termination — all of which must be properly detailed to prevent water infiltration that causes the #1 commercial roof failure: parapet wall leaks. Charlotte commercial parapet repairs run $35-$80 per linear foot for coping replacement and $80-$200/lf for full re-flash with membrane integration.";

const followUpFAQs = [
  {
    question: 'Why do parapet walls leak so often on Charlotte commercial buildings?',
    answer:
      "Parapet walls are the #1 source of commercial roof leaks because they have multiple failure points: (1) coping cap seams separate or sealants degrade after 5-10 years; (2) through-wall flashing was omitted or installed incorrectly during original construction; (3) coping cap fasteners back out and let water enter; (4) parapet face brick or CMU absorbs water that wicks down to the membrane termination; (5) HVAC penetrations through parapets are improperly flashed. Charlotte's wet/dry/freeze cycles (~43 inches rain + winter freezes) accelerate these failures. Annual professional inspection identifies issues before interior damage occurs.",
  },
  {
    question: 'What is parapet coping and why does it matter?',
    answer:
      "Parapet coping is the protective metal cap (galvanized steel, aluminum, copper, or stainless) that covers the top of the parapet wall to shed water away from both interior and exterior wall faces. SMACNA-spec coping has watertight standing-seam or snap-lock joints (NOT exposed-fastener overlap), proper drip edges on both sides, and concealed cleat fastening. Cheap exposed-fastener coping fails in 5-8 years; SMACNA-spec coping lasts 25-40+ years. Coping replacement on a 200-linear-foot Charlotte commercial parapet runs $7,000-$16,000 depending on metal type — much cheaper than fixing interior water damage from coping failure.",
  },
  {
    question: 'How is the membrane attached to a parapet wall?',
    answer:
      "On Charlotte commercial roofs, the single-ply membrane (TPO, EPDM, PVC) extends UP the interior face of the parapet wall, terminated mechanically at the top edge (typically 8-12 inches above the roof deck) using termination bar with caulk seal, then covered by the coping cap. TPO and PVC use heat-welded membrane corners and target patches; EPDM uses cured-rubber inside/outside corners with seam tape; modified bitumen uses torch-welded reinforced membrane. The wall flashing is the most labor-intensive part of any commercial reroof — proper detailing here determines whether the roof system meets NDL warranty requirements.",
  },
  {
    question: 'Are parapet walls required by code in Charlotte NC?',
    answer:
      "Parapet walls are required by NC State Building Code (Chapter 7) when commercial buildings of certain types share property lines or are within fire separation distances — the parapet provides fire-rated separation extending 30 inches to 3+ feet above the roof depending on construction type. Parapets are also required by OSHA when used as guardrails (42+ inches tall and structurally rated). Mecklenburg County permits review parapet design during commercial reroof permits. Even when not required, parapets are common on Charlotte commercial buildings for HVAC concealment and improved building aesthetics.",
  },
  {
    question: 'How much does parapet wall repair cost in Charlotte?',
    answer:
      "Charlotte NC commercial parapet repair costs (2025-2026): coping cap replacement $35-$80 per linear foot (galvanized) up to $80-$150/lf (copper); full parapet re-flash with new membrane termination $80-$200/lf; through-wall flashing retrofit $150-$300/lf (requires CMU/brick removal); structural parapet rebuild $250-$500/lf if CMU/brick is failing. A 200-linear-foot Charlotte parapet rebuild typically runs $50,000-$100,000+. Often bundled with full membrane reroof — incremental cost is much lower when scoped together. Best Roofing Now provides free commercial parapet inspections.",
  },
];

export const metadata: Metadata = {
  title: 'What Is a Parapet Wall? Charlotte NC Guide',
  description:
    "Parapet wall: short wall above the roofline on Charlotte NC commercial buildings. Fire, aesthetic, fall protection, wind functions. Repair $35-$200/lf. Code-compliant.",
  keywords: [
    'parapet wall Charlotte NC',
    'commercial parapet wall',
    'parapet coping cap',
    'parapet wall flashing',
    'commercial roof parapet',
    'parapet wall leaks',
    'NC building code parapet',
    'commercial roof termination',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is a Parapet Wall? Charlotte NC Guide',
    description: 'Short wall above roofline on commercial buildings. Fire, aesthetic, safety, wind functions.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsParapetWallPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is a Parapet Wall?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is a Parapet Wall? Charlotte NC Commercial Guide" description="Parapet walls explained for Charlotte NC commercial building owners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Parapet Wall?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is a Parapet Wall Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Short wall extending 18-48+ inches above the roofline at building perimeter',
          'Common on commercial: warehouses, retail, churches, office buildings',
          'Function 1: fire-rated separation between adjoining commercial buildings',
          'Function 2: aesthetic concealment of HVAC and roof equipment',
          'Function 3: OSHA fall protection when 42+ inches tall',
          'Function 4: wind uplift mitigation at membrane edge',
          'Built from CMU, concrete tilt-up, brick veneer, or pre-engineered metal',
          'Coping cap, through-wall flashing, and membrane termination must be SMACNA-spec',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Parapet Wall?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Commercial Parapet Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is a Parapet Wall and Why Is It on Commercial Buildings in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Commercial Inspection</Button>
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

      <CTASection title="Charlotte NC Commercial Parapet Specialists" subtitle="Coping cap replacement, through-wall flashing, membrane termination — SMACNA-spec details on every commercial reroof. Free parapet inspections in Mecklenburg County." />
    </>
  );
}
