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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-epdm-roof-membrane-charlotte-nc`;
const QUESTION = 'What is EPDM roof membrane and is it good for Charlotte NC commercial buildings?';
const ANSWER =
  "EPDM (Ethylene Propylene Diene Monomer) is a synthetic single-ply rubber roofing membrane developed in the 1960s — the most-installed commercial roofing material in U.S. history with 60+ year proven performance track record. EPDM is highly suited for Charlotte NC commercial buildings because: (1) LIFESPAN — 25-40 years (often outperforms TPO and PVC in real-world Charlotte data); (2) UV STABILITY — naturally UV-resistant carbon black formulation handles intense Charlotte summer sun; (3) FLEXIBILITY — remains pliable in temperature extremes (Charlotte 15°F winter to 100°F summer); (4) COST EFFECTIVENESS — $4-$10/sq ft installed (less than TPO $5-$12 or PVC $6-$13); (5) PROVEN durability — 60+ year track record on parapet-walled buildings (data superior to newer membranes). Three install methods: (1) FULLY ADHERED — bonded to insulation with adhesive (best wind, no exposed seams, $7-$10/sq ft); (2) MECHANICALLY ATTACHED — fastened with screws and washers through membrane (most common, $5-$8/sq ft); (3) BALLASTED — held down with stone ballast (least common modern, $4-$7/sq ft). Color options: BLACK (standard, absorbs heat) or WHITE (cool-roof variant, ENERGY STAR rated). Best Roofing Now installs EPDM with NDL warranty eligibility from Carlisle, Firestone, Versico, and other major manufacturers.";

const followUpFAQs = [
  {
    question: 'How does EPDM compare to TPO for Charlotte NC commercial roofs?',
    answer:
      "EPDM vs TPO comparison: LIFESPAN — EPDM 25-40 yr vs TPO 20-30 yr (EPDM longer proven track record); COST — EPDM $4-$10/sq ft vs TPO $5-$12/sq ft (EPDM cheaper); SEAMS — EPDM uses chemical adhesive splice or seam tape vs TPO hot-air welded (TPO seams stronger but EPDM seams easier to repair); UV RESISTANCE — both excellent (EPDM black absorbs heat, white EPDM and TPO offer cool-roof options); REPAIR — EPDM easier to repair locally; FLEXIBILITY — EPDM remains pliable in cold (better for occasional Charlotte January cold snaps). DECISION: choose EPDM for parapet-walled buildings, low-budget projects, easy-repair priority. Choose TPO for cool-roof requirements, high foot traffic, modern aesthetics. Both qualify for NDL warranty.",
  },
  {
    question: 'How much does EPDM cost in Charlotte NC?',
    answer:
      "Charlotte NC EPDM installed pricing by attachment method: BALLASTED EPDM — $4-$7/sq ft (cheapest, requires structural capacity for ballast load 10-15 lb/sq ft); MECHANICALLY ATTACHED — $5-$8/sq ft (most common, fastened with screws and 3-inch washers); FULLY ADHERED — $7-$10/sq ft (best wind, premium aesthetic, no exposed fasteners). On typical 20,000 sq ft Charlotte commercial building: ballasted $80,000-$140,000; mechanically attached $100,000-$160,000; fully adhered $140,000-$200,000. Includes: tear-off existing roof ($1-$2/sq ft), insulation board ($1.50-$3/sq ft for typical R-25), EPDM membrane ($1.50-$3/sq ft), labor ($2-$5/sq ft).",
  },
  {
    question: 'Can EPDM seams fail in Charlotte NC humid climate?',
    answer:
      "Yes — EPDM seam failure is the #1 EPDM leak source in humid climates like Charlotte NC. Failure modes: (1) ADHESIVE SPLICE FAILURE — chemical adhesive degrades over 15-25 years (the original EPDM membrane outlasts the seams); (2) SEAM TAPE FAILURE — newer butyl/acrylic tape lasts longer but eventually delaminates; (3) THERMAL EXPANSION/CONTRACTION cycling stresses seams over time; (4) ROOF TRAFFIC over seams accelerates wear. Prevention: annual professional inspection, seam re-cover treatment at year 15-20, proper original install with manufacturer-specified adhesive. Repair: failed seam re-stripped, re-glued with current spec adhesive ($2-$5/linear ft repair). Best Roofing Now's commercial maintenance program inspects all seams annually.",
  },
  {
    question: 'Is EPDM good for Charlotte NC restaurants and grease applications?',
    answer:
      "No — EPDM is NOT recommended for restaurant grease exhaust applications. EPDM is incompatible with petroleum-based oils and animal fats which dissolve EPDM rubber, causing premature failure. Better alternatives for Charlotte restaurants: (1) PVC SINGLE-PLY MEMBRANE ($6-$13/sq ft) — chemically resistant to grease and oils, primary choice for restaurants; (2) MODIFIED BITUMEN ($6-$12/sq ft) — asphalt-based, resistant to most oils but degrades from acetic acid (vinegar plumes from food prep); (3) METAL ROOFING ($10-$18/sq ft) — completely chemical-resistant, longest-lasting option for grease-heavy commercial. EPDM acceptable for: office buildings, retail, industrial without grease, schools, churches, hospitals. Best Roofing Now's free commercial assessment recommends membrane based on building usage.",
  },
  {
    question: 'Can EPDM be re-coated to extend life in Charlotte NC?',
    answer:
      "Yes — EPDM restoration coatings extend roof life 10-15 years at $3-$6/sq ft (vs $5-$10/sq ft for full replacement). Two coating types: (1) ACRYLIC COATING — water-based, lowest cost, 7-10 yr lifespan; best for occupied buildings (low odor); (2) SILICONE COATING — moisture-cure, premium, 10-15 yr lifespan; best for ponding water applications. Coating ELIGIBILITY: structurally sound EPDM with no widespread saturated insulation (under 25% wet area), under 20-25 years old with no widespread membrane failure. NOT eligible: saturated insulation requiring tear-off, widespread seam failure, multiple layer system. Best Roofing Now's free commercial inspection includes coat-vs-replace economic analysis.",
  },
];

export const metadata: Metadata = {
  title: 'What Is EPDM Roof Membrane and Is It Good for Charlotte NC Commercial?',
  description:
    "EPDM = synthetic single-ply rubber roofing membrane. 25-40 yr lifespan, $4-$10/sq ft. Charlotte NC commercial choice for parapet-walled buildings, easy repair, cost-effectiveness.",
  keywords: [
    'what is EPDM roof membrane Charlotte NC',
    'EPDM commercial roof Charlotte',
    'EPDM vs TPO Charlotte',
    'EPDM rubber roof cost',
    'EPDM seam failure',
    'fully adhered EPDM',
    'mechanically attached EPDM',
    'EPDM restoration coating',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is EPDM Roof Membrane and Is It Good for Charlotte NC Commercial?',
    description: '25-40 yr lifespan, $4-$10/sq ft. Charlotte commercial choice.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsEPDMPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is EPDM?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is EPDM Roof Membrane and Is It Good for Charlotte NC Commercial?" description="EPDM membrane guide for Charlotte NC commercial buildings." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'EPDM?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is EPDM Roof Membrane Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'EPDM — Ethylene Propylene Diene Monomer synthetic rubber single-ply membrane',
          '60+ year proven performance track record',
          'Lifespan — 25-40 years (often outperforms TPO/PVC in Charlotte real-world data)',
          'Cost — $4-$10/sq ft installed (cheaper than TPO $5-$12 or PVC $6-$13)',
          'Fully adhered $7-$10, mechanically attached $5-$8, ballasted $4-$7',
          'Black (heat-absorbing) or White (cool-roof ENERGY STAR)',
          'Major manufacturers — Carlisle, Firestone, Versico (NDL warranty eligible)',
          'NOT recommended for restaurants/grease applications (use PVC instead)',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'EPDM?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Commercial EPDM Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is EPDM Roof Membrane and Is It Good for Charlotte NC Commercial Buildings?</h1>
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

      <CTASection title="EPDM with NDL Warranty Available" subtitle="Best Roofing Now installs EPDM from Carlisle, Firestone, Versico with NDL warranty eligibility. Free inspection includes coat-vs-replace economic analysis." />
    </>
  );
}
