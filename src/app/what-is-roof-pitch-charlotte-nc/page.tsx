import { Metadata } from 'next';
import { Phone, ClipboardCheck } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-roof-pitch-charlotte-nc`;
const QUESTION = 'What is roof pitch and what does it mean for Charlotte NC homes?';
const ANSWER =
  "Roof pitch is the steepness of a roof slope, expressed as inches of vertical rise per 12 inches of horizontal run (e.g., '6/12' means 6 inches up for every 12 inches across). Common Charlotte NC residential pitches: 4/12 (typical starter ranch and many production builds), 6/12 (most common Charlotte residential — moderate slope, good drainage), 8/12 (steeper traditional and Tudor styles), 10/12 to 12/12 (Cape Cod, Tudor, Victorian, A-frame). Pitch matters for 5 reasons: (1) cost — steeper roofs cost 15-40% more to install due to safety equipment and labor speed; (2) material compatibility — pitch under 4/12 requires special low-slope materials (TPO, EPDM, modified bitumen — not standard shingles); (3) actual surface area — steeper pitch increases the actual roof square count vs the home's footprint (1.05x at 4/12, 1.41x at 12/12); (4) drainage performance — steeper roofs shed water and snow faster, reducing leak risk; (5) shingle requirements — 4/12 to 12/12 is the standard pitch range for asphalt shingles per manufacturer specs. Best Roofing Now's free inspection includes pitch measurement for accurate estimating.";

const followUpFAQs = [
  {
    question: 'How do I measure my roof\'s pitch?',
    answer:
      "Three methods: (1) ladder + level method — climb to the gable end, place a 12-inch level horizontally against the roof slope, measure the vertical distance from the level to the roof at the level's far end (that distance ÷ 12 is the pitch ratio); (2) interior measurement — measure the height of the gable wall and the horizontal width of the home, calculate ratio; (3) phone app — apps like 'Roof Pitch' or 'Pitch Gauge' use phone gyroscope (less accurate but no climbing); (4) free Best Roofing Now inspection — most accurate measurement included in every estimate. Most Charlotte residential roofs are 4/12 to 8/12.",
  },
  {
    question: 'What is the minimum pitch for asphalt shingles in Charlotte NC?',
    answer:
      "Standard asphalt shingles require minimum 4/12 pitch per manufacturer specs (GAF, CertainTeed, OC). Below 4/12, asphalt shingles void warranty due to inadequate water shedding. Solutions for low-slope roofs (under 4/12): (1) modified asphalt shingle install with double-layer ice-and-water shield (some manufacturers allow down to 2/12 with this method); (2) TPO single-ply membrane ($5-$12/sq ft); (3) EPDM rubber membrane ($4-$10/sq ft); (4) modified bitumen torch-down ($6-$12/sq ft). Most Charlotte production homes use 4/12 to 6/12 pitch — clearly within asphalt shingle range.",
  },
  {
    question: 'How does roof pitch affect roof replacement cost?',
    answer:
      "Steeper pitch increases reroof cost in 3 ways: (1) labor speed — crews work slower with safety harnesses on steep slopes (8/12+ adds 15-25% to labor); (2) safety equipment — anchors, rope-grabs, scaffold for very steep (10/12+) adds $500-$2,000 setup; (3) actual square count — steeper roof has more surface than footprint (4/12 = 1.05x, 6/12 = 1.12x, 8/12 = 1.20x, 10/12 = 1.30x, 12/12 = 1.41x). Total cost premium for steep vs moderate: 8/12 vs 6/12 adds 10-15%, 10/12 vs 6/12 adds 20-30%, 12/12+ vs 6/12 adds 30-50%.",
  },
  {
    question: 'Can I change my roof pitch during a replacement?',
    answer:
      "Technically yes but rarely worth it. Changing roof pitch requires: (1) full structural redesign with engineer-stamped drawings ($3,000-$10,000); (2) new framing/trusses to match the new pitch ($10,000-$50,000+); (3) typically full house construction permit (vs reroof permit); (4) often new HVAC, electrical, and plumbing modifications in the affected attic. Total cost for pitch change: $30,000-$150,000+ on top of the reroof. Almost never economically justified — the benefit (better drainage, more attic space, aesthetic) doesn't typically pay back. Better to choose a roof material that works well with your existing pitch.",
  },
  {
    question: 'What roof pitch is best for Charlotte\'s climate?',
    answer:
      "6/12 to 8/12 is the sweet spot for Charlotte NC climate: (1) sheds tropical-remnant heavy rain effectively (4-8 inches in 24 hours during August-October); (2) avoids snow accumulation on the rare ice events (north Mecklenburg/LKN benefit); (3) provides reasonable attic space for ventilation and HVAC; (4) compatible with all major shingle, metal, and tile materials; (5) moderate cost premium vs 4/12 (only 5-10% more); (6) holds up to August-October tropical remnant wind better than steeper roofs. Most Charlotte production builds use 4/12 to 6/12 pitch — adequate but 6/12 is preferred when buildable.",
  },
];

export const metadata: Metadata = {
  title: 'What Is Roof Pitch and What Does It Mean for Charlotte NC Homes?',
  description:
    "Roof pitch = inches rise per 12 inches run. Charlotte typical 4/12-8/12. Pitch affects cost (steeper +15-40%), material compatibility, surface area (1.05x to 1.41x footprint).",
  keywords: [
    'what is roof pitch Charlotte NC',
    'roof pitch ratio',
    'how to measure roof pitch',
    'minimum pitch asphalt shingles',
    'low-slope roofing',
    'steep roof pitch cost',
    'Charlotte residential roof pitch',
    'roof slope explained',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Roof Pitch and What Does It Mean for Charlotte NC Homes?',
    description: 'Roof pitch terminology explained for Charlotte NC homeowners.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsRoofPitchPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is Roof Pitch?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is Roof Pitch and What Does It Mean for Charlotte NC Homes?" description="Roof pitch terminology and impact for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Pitch?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is Roof Pitch Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Roof pitch — inches of vertical rise per 12 inches horizontal run',
          'Charlotte typical residential pitch — 4/12 (starter), 6/12 (most common), 8/12 (traditional)',
          'Steep pitch — 10/12 to 12/12 (Cape Cod, Tudor, Victorian)',
          'Cost premium — steeper roofs 15-40% more than moderate pitch',
          'Material requirements — under 4/12 needs TPO/EPDM/modified bitumen, not standard shingles',
          'Actual surface area — 1.05x footprint at 4/12, 1.41x at 12/12',
          'Drainage performance — steeper sheds water/snow faster',
          'Best Charlotte sweet spot — 6/12 to 8/12 for climate compatibility',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Roof Pitch?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <ClipboardCheck className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Pitch Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is Roof Pitch and What Does It Mean for Charlotte NC Homes?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Roof Pitch Measurement</Button>
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

      <CTASection title="Free Pitch Measurement Included" subtitle="Best Roofing Now measures your exact roof pitch during inspection — accurate estimating for material compatibility and labor pricing." />
    </>
  );
}
