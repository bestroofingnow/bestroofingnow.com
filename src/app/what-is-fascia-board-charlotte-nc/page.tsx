import { Metadata } from 'next';
import { Phone, Square } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-fascia-board-charlotte-nc`;
const QUESTION = 'What is fascia board and why does my Charlotte NC roof have one?';
const ANSWER =
  "Fascia board is the VERTICAL trim board mounted at the END of your roof rafters/trusses, forming the front-facing surface where your gutters attach. It's the visible 'face' of your roof edge between the soffit (underside of eave) and the bottom edge of shingles. Fascia serves 4 critical functions: (1) GUTTER ATTACHMENT POINT — provides the structural surface for gutter spike fasteners or hidden hangers; (2) RAFTER PROTECTION — covers and protects exposed rafter/truss ends from rain, sun, and pests; (3) AESTHETIC ROOFLINE — visual finish where roof meets siding (50-90% of viewable roof edge from ground); (4) DRIP EDGE BACKING — provides solid surface for NC IRC §R905.2.8.5 required drip edge attachment. Materials: aluminum-wrapped wood (most common Charlotte combo, $5-$10/linear ft installed, 30+ yr lifespan, low-maintenance), painted wood (cedar, pine — $4-$8/linear ft, requires repaint every 5-7 yr, 25-40 yr lifespan), fiber-cement Hardie ($7-$15/linear ft, 50+ yr lifespan, fire-resistant premium), PVC composite ($8-$14/linear ft, 30-50 yr, no rot). Charlotte common problems: rotted wood fascia from clogged gutter overflow ($800-$2,500 replacement), bird/squirrel damage at fascia-soffit junction, paint peeling on south-facing exposures, gutter spike pull-out from rotted fascia. Best Roofing Now's free inspection includes fascia condition assessment.";

const followUpFAQs = [
  {
    question: 'How do I tell if my Charlotte NC fascia board needs replacement?',
    answer:
      "Six replacement signs: (1) visible rot, soft spots, or crumbling wood (typical at gutter discharge points where overflow saturates wood); (2) chronic peeling paint despite repainting (water saturation underneath); (3) sagging gutters with pulled-out fasteners (fascia no longer holds spikes); (4) visible insect damage (carpenter ants, termites in soft fascia); (5) animal damage from squirrels or woodpeckers; (6) widespread water staining. Cost: spot repair (1-3 sections) $300-$800, full perimeter replacement on typical Charlotte home $2,500-$6,500, premium Hardie upgrade $4,000-$9,000. Best Roofing Now bundles fascia replacement with reroof for combined savings.",
  },
  {
    question: 'What\'s the difference between fascia and soffit in Charlotte NC?',
    answer:
      "FASCIA — the VERTICAL board mounted at the END of rafters (front-facing surface where gutters attach). SOFFIT — the HORIZONTAL panel covering the UNDERSIDE of roof eaves (you look up to see soffit). Both are perimeter trim covering the structural framing. They meet at a 90-degree corner under the roof eave. Replacement is often done together since they share installation labor and visual continuity. Materials and pricing similar: aluminum $4-$10/linear ft, vinyl $3-$8/linear ft, fiber-cement Hardie $6-$15/linear ft. Both are inspected together during Best Roofing Now's free roof inspection.",
  },
  {
    question: 'Should I aluminum-wrap my wood fascia in Charlotte NC?',
    answer:
      "Conditional yes — aluminum-wrap considerations: WHEN APPROPRIATE — sound wood underneath, no active rot, want to extend life and eliminate repaint maintenance ($1,200-$3,500 typical home). WHEN NOT APPROPRIATE — already rotted wood (wrapping over rot accelerates damage by trapping moisture), recently replaced wood with quality paint, historic homes where original wood aesthetic is required. Best practice: REPLACE rotted sections with new wood, then aluminum-wrap entire perimeter for maximum lifespan. Total cost: rot replacement $500-$1,500 + aluminum wrap $1,200-$3,500 = $1,700-$5,000 vs full replacement $2,500-$6,500. Wrap saves money for sound wood.",
  },
  {
    question: 'How much does fascia replacement cost in Charlotte NC?',
    answer:
      "Charlotte NC fascia replacement pricing by material: aluminum-wrapped wood (most common, low-maintenance) — $5-$10/linear ft installed, $1,500-$4,000 typical home (300-400 linear ft); painted wood (cedar/pine) — $4-$8/linear ft, $1,200-$3,200 typical home (requires repaint every 5-7 yr); fiber-cement Hardie (premium, fire-resistant) — $7-$15/linear ft, $2,100-$6,000 typical home; PVC composite (no-rot) — $8-$14/linear ft, $2,400-$5,600 typical home. Includes removal of old, prep of underlying rafter ends, new fascia install, paint or wrap finish. Bundle with reroof or gutter replacement for $300-$1,000 savings (shared mobilization).",
  },
  {
    question: 'Can I paint my own fascia board in Charlotte NC?',
    answer:
      "Conditional yes — DIY fascia paint by material: WOOD fascia — paint with high-quality oil-based primer + 100% acrylic latex topcoat, $100-$300 materials, requires 5-7 yr repaint cycle, 4-12 hr labor; ALUMINUM-WRAPPED — generally NOT needed (factory-baked finish lasts 30+ yr); FIBER-CEMENT Hardie — paint with 100% acrylic latex, 10-15 yr cycle, $150-$400 materials; PVC composite — paint OK but not necessary (UV-stable). Critical: address ANY rot or soft spots BEFORE painting (paint over rot accelerates damage). For multi-story homes, professional paint service recommended ($800-$2,500) due to safety risk. Best Roofing Now offers professional fascia paint as part of repair service.",
  },
];

export const metadata: Metadata = {
  title: 'What Is Fascia Board and Why Does My Charlotte NC Roof Have One?',
  description:
    "Fascia = vertical board at end of rafters where gutters attach. Charlotte materials: aluminum-wrapped $5-10/ft, wood $4-8/ft, Hardie $7-15/ft, PVC $8-14/ft. NC IRC drip edge backing.",
  keywords: [
    'what is fascia board Charlotte NC',
    'fascia replacement Charlotte',
    'fascia vs soffit',
    'aluminum wrap fascia',
    'wood fascia rot',
    'fascia cost NC',
    'Hardie fascia',
    'gutter attachment fascia',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Fascia Board and Why Does My Charlotte NC Roof Have One?',
    description: 'Vertical board where gutters attach. Charlotte materials and pricing.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsFasciaPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is Fascia Board?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is Fascia Board and Why Does My Charlotte NC Roof Have One?" description="Fascia board guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Fascia?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is Fascia Board Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Fascia — vertical trim board at END of roof rafters/trusses',
          'Function 1 — gutter attachment point (spike or hidden hanger fasteners)',
          'Function 2 — protects rafter/truss ends from rain, sun, pests',
          'Function 3 — aesthetic roofline finish',
          'Function 4 — backing surface for NC IRC §R905.2.8.5 drip edge',
          'Aluminum-wrapped wood — $5-$10/linear ft (most common Charlotte)',
          'Painted wood — $4-$8/linear ft (requires repaint 5-7 yr)',
          'Fiber-cement Hardie — $7-$15/linear ft (premium, fire-resistant)',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Fascia?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Square className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Fascia Board Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is Fascia Board and Why Does My Charlotte NC Roof Have One?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Fascia Inspection</Button>
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

      <CTASection title="Fascia Repair, Replace, and Wrap" subtitle="Free fascia inspection identifies rot and assesses gutter mounting condition. Aluminum-wrap, replacement, and Hardie upgrade options. Bundle with reroof for $300-$1,000 savings." />
    </>
  );
}
