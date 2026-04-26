import { Metadata } from 'next';
import { Phone, PanelBottom } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-soffit-charlotte-nc`;
const QUESTION = 'What is a soffit and what does it do for my Charlotte NC home?';
const ANSWER =
  "A soffit is the horizontal panel that covers the underside of your roof's eaves (the overhanging portion that extends beyond your exterior wall). Soffits serve 4 critical functions: (1) ATTIC INTAKE VENTILATION — perforated soffits or continuous soffit vents draw cool air INTO the attic to balance ridge vent exhaust per NC IRC §R806 (1:300 NFVA when balanced); (2) PROTECT EAVE STRUCTURE — covers the exposed rafter tails and roof framing from rain, debris, and pests; (3) PEST/BIRD/INSECT EXCLUSION — sealed soffit panels prevent wildlife entry into attic; (4) AESTHETIC FINISH — visual transition from siding to roofline. Materials: aluminum (most common, $4-$8/linear ft installed, 30+ yr lifespan, low-maintenance), vinyl ($3-$6/linear ft, 25-40 yr, flexes in wind), fiber-cement Hardie ($6-$12/linear ft, 50+ yr, premium fire-resistant), wood ($5-$10/linear ft, requires repaint every 5-7 yr). Soffit profiles: solid (no ventilation, used over interior soffits like porches), perforated (ventilated, standard at attic perimeter), continuous strip vent (best NFVA, premium). Charlotte common problems: rotted wood soffits in older homes ($800-$2,500 replacement), bird/squirrel entry through damaged soffits ($1,500-$5,000 attic remediation), insufficient ventilation causing hot attic ($800-$2,500 ventilation upgrade). Best Roofing Now's free inspection includes soffit condition and ventilation assessment.";

const followUpFAQs = [
  {
    question: 'How do I tell if my Charlotte NC soffit needs replacement?',
    answer:
      "Six replacement signs: (1) visible holes, gaps, or missing sections (immediate pest/water entry risk); (2) sagging or pulled-away panels (loosening fasteners); (3) wood rot visible (especially older homes with painted wood soffits); (4) chronic peeling paint despite repainting; (5) animal entry evidence (chewed openings from squirrels/birds); (6) clogged or painted-over perforations preventing ventilation (causes hot attic). Cost: vinyl/aluminum spot repair $200-$600, full perimeter replacement on typical Charlotte home $2,500-$6,500 (300-500 linear ft), Hardie premium upgrade $4,500-$10,000. Best Roofing Now bundles soffit replacement with reroof for combined savings.",
  },
  {
    question: 'What\'s the difference between soffit and fascia in Charlotte NC?',
    answer:
      "SOFFIT — the HORIZONTAL panel covering the UNDERSIDE of roof eaves (you look up to see soffit). FASCIA — the VERTICAL board mounted at the END of the rafters (the front-facing surface where gutters attach). Both are perimeter trim covering the structural framing. Common confusion: they meet at a 90-degree corner under the roof eave. Replacement is often done together since they share installation labor and visual continuity. Materials and pricing similar: aluminum $4-$10/linear ft, vinyl $3-$8/linear ft, fiber-cement Hardie $6-$15/linear ft. Both are inspected together during Best Roofing Now's free roof inspection.",
  },
  {
    question: 'Do my Charlotte NC soffits need to be vented?',
    answer:
      "Almost always yes — soffit ventilation is the INTAKE half of NC IRC §R806 attic ventilation requirement. Without soffit vents, ridge vents become useless (no air can flow IN to balance air flowing OUT). Required NFVA (net free vent area): 1:300 when ridge + soffit balanced (most efficient), 1:150 if only one type of vent (less efficient). Solid soffits (no ventilation) are appropriate for: porch ceilings, interior soffits over kitchens/bathrooms, completely separate roof zones. Perforated/continuous-vent soffits required at: all attic perimeter, garage attic perimeter, any roof zone with attic above. Charlotte common error: soffit perforations painted over during exterior repaint, blocking ventilation. Best Roofing Now's free inspection identifies blocked soffit vents.",
  },
  {
    question: 'How much does soffit replacement cost in Charlotte NC?',
    answer:
      "Charlotte NC soffit replacement pricing by material: aluminum (most common, perforated for ventilation) — $4-$8/linear ft installed, $1,200-$3,200 typical home (300-400 linear ft); vinyl — $3-$6/linear ft, $900-$2,400 typical home; fiber-cement Hardie (premium) — $6-$12/linear ft, $1,800-$4,800 typical home; wood (paint-grade pine or cedar) — $5-$10/linear ft, $1,500-$4,000 typical home (requires repaint every 5-7 yr). Installation includes removal of old, prep of underlying framing, new vent strip install if needed, J-channel and trim. Bundle with reroof for $300-$1,000 savings (shared mobilization).",
  },
  {
    question: 'Can I paint my own soffits in Charlotte NC?',
    answer:
      "Conditional yes — paint compatibility by material: ALUMINUM soffits — paint with quality 100% acrylic latex exterior paint, $50-$200 materials, 4-8 hr labor, 5-10 yr repaint cycle (do NOT paint over factory baked finish — adhesion problems); VINYL soffits — generally NOT recommended (paint adhesion poor, may void warranty); WOOD soffits — paint with high-quality oil-based primer + 100% acrylic latex topcoat, $100-$300 materials, requires every 5-7 yr; FIBER-CEMENT Hardie — paint with 100% acrylic latex, 10-15 yr cycle. Critical: do NOT paint perforated vents — clogs ventilation. Use cardboard masks over each perforation. Best Roofing Now offers professional soffit paint as part of repair/replacement service.",
  },
];

export const metadata: Metadata = {
  title: 'What Is a Soffit and What Does It Do for My Charlotte NC Home?',
  description:
    "Soffit = horizontal panel under roof eaves. Functions: NC IRC §R806 ventilation intake, eave protection, pest exclusion, aesthetic. Aluminum $4-8/ft, vinyl $3-6/ft, Hardie $6-12/ft.",
  keywords: [
    'what is a soffit Charlotte NC',
    'soffit replacement Charlotte',
    'soffit vs fascia',
    'perforated soffit ventilation',
    'soffit cost NC',
    'soffit material types',
    'aluminum vinyl Hardie soffit',
    'NC IRC soffit ventilation',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is a Soffit and What Does It Do for My Charlotte NC Home?',
    description: 'Horizontal panel under roof eaves. Critical for ventilation and pest exclusion.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsSoffitPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is a Soffit?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is a Soffit and What Does It Do for My Charlotte NC Home?" description="Soffit guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Soffit?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is a Soffit Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Soffit — horizontal panel covering the UNDERSIDE of roof eaves',
          'Function 1 — attic intake ventilation per NC IRC §R806',
          'Function 2 — protects rafter tails from rain, debris, pests',
          'Function 3 — pest/bird/insect exclusion from attic',
          'Function 4 — aesthetic finish at roofline',
          'Aluminum — $4-$8/linear ft (most common, low-maintenance)',
          'Vinyl — $3-$6/linear ft (budget, flexes)',
          'Fiber-cement Hardie — $6-$12/linear ft (premium, fire-resistant)',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Soffit?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <PanelBottom className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Soffit Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is a Soffit and What Does It Do for My Charlotte NC Home?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Soffit Inspection</Button>
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

      <CTASection title="Soffit Repair, Replace, and Ventilation" subtitle="Free soffit + ventilation inspection. Aluminum, vinyl, Hardie options. Bundle with reroof for $300-$1,000 savings. NC IRC §R806 code-compliant install." />
    </>
  );
}
