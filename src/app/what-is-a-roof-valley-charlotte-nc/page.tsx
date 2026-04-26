import { Metadata } from 'next';
import { Phone, GitMerge } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-roof-valley-charlotte-nc`;
const QUESTION = 'What is a roof valley and why does it matter for my Charlotte NC home?';
const ANSWER =
  "A roof valley is the V-shaped angle where two sloped roof sections meet, forming a channel that funnels rainwater off the roof. Roof valleys handle 30-60% of total roof water runoff (concentrated in just 3-6% of roof area), making them the #1 most leak-prone area on any pitched roof — especially in Charlotte NC where 4-8 inch rainfall events during August-October tropical remnants overload poorly designed valleys. Three types: (1) OPEN valley — exposed metal flashing (aluminum, galvanized steel, or copper) running the full length, shingles cut back 3 inches on each side ($8-$15/linear ft installed, longest lifespan 30+ yr, best for high-water-volume valleys); (2) CLOSED-CUT valley — shingles from one slope run continuous through valley, shingles from other slope cut to a clean line 2 inches off center ($5-$10/linear ft, 20-25 yr lifespan, most common Charlotte residential); (3) WOVEN valley — shingles from both slopes interweave (oldest method, $5-$10/linear ft, 15-20 yr lifespan, increasingly rare due to leak risk). All valley types REQUIRE underlying ice-and-water shield self-adhered membrane (mandatory per NC IRC §R905.1.1) for waterproof backup. Best Roofing Now's free inspection identifies valley condition and water-handling capacity for your specific roof.";

const followUpFAQs = [
  {
    question: 'How do I tell if my Charlotte roof valley is leaking?',
    answer:
      "Six leak signs: (1) interior ceiling stains aligned with valley path (water tracks down rafters from valley failure point); (2) attic decking water staining radiating from valley; (3) exposed nails or lifted shingles along valley edges visible from ground; (4) granule loss accumulation in valley (gutters at valley termination show 5x normal granule volume); (5) green/black streaking or moss growth in valley (indicates poor drainage); (6) visible gaps between cut-line shingles and valley center. Charlotte's heavy August-October rains typically expose valley failures within 1-2 storms — schedule inspection immediately if you see any signs.",
  },
  {
    question: 'How much does roof valley repair cost in Charlotte NC?',
    answer:
      "Charlotte NC roof valley repair pricing: minor cut-line repair (resealing 3-5 shingles) $250-$600; valley shingle replacement (20-30 ft of valley) $450-$1,200; full open valley flashing replacement (typical home with 2-4 valleys, 40-80 linear ft total) $800-$2,500; full valley rebuild including ice-and-water shield underlayment $1,500-$4,000 per valley; complete reroof with all-new valleys (most cost-effective if roof is over 15 yr old) $12,000-$45,000. Valley repair can extend roof life 5-10 years if rest of roof is sound; full reroof is more cost-effective if roof shows widespread aging.",
  },
  {
    question: 'Should I choose open or closed-cut valley for my Charlotte reroof?',
    answer:
      "Choose OPEN valley when: (1) roof has high pitch differential between slopes (water concentration high); (2) valley collects from over 1,000 sq ft of upper roof; (3) you want maximum 30+ year lifespan; (4) home is in heavy-canopy Charlotte area (Plaza Midwood, Dilworth, Myers Park) where leaves accumulate (open metal sheds debris better); (5) higher-end aesthetic with metal accent. Choose CLOSED-CUT valley when: (1) standard Charlotte residential pitch and water volume; (2) clean monolithic shingle aesthetic preferred; (3) budget-conscious (saves $3-$5/linear ft); (4) most common production-build choice. Best Roofing Now's free assessment recommends the right valley type per your specific roof.",
  },
  {
    question: 'Can ice-and-water shield prevent valley leaks in Charlotte?',
    answer:
      "Yes — ice-and-water shield is the #1 most important valley waterproofing component in Charlotte NC and is REQUIRED by NC IRC §R905.1.1 in all valleys regardless of climate zone. Mechanism: 36-inch self-adhered modified bitumen membrane bonds directly to decking, seals around nail penetrations, blocks any water that bypasses the visible shingles. Brands: Grace Ice & Water Shield (industry leader), Owens Corning WeatherLock G, GAF StormGuard, CertainTeed WinterGuard. Cost: $0.80-$1.50/sq ft (included in proper reroof). NEVER let a contractor skip ice-and-water shield in valleys — it's the most important waterproofing layer and code violation otherwise.",
  },
  {
    question: 'How long does a roof valley last in Charlotte NC?',
    answer:
      "Charlotte NC roof valley lifespan by type: open metal aluminum valley 30-50 years (matches metal roofing lifespan); open metal copper valley 60-100+ years (lifetime install); closed-cut shingle valley 20-25 years (matches asphalt shingle lifespan); woven valley 15-20 years (shorter due to interweaving stress); ice-and-water shield underlayment 25-50 years (manufacturer warranty). Valleys typically fail BEFORE the surrounding shingles if not installed with proper underlayment, especially in canopy areas where leaf debris traps moisture. Inspection every 5 years extends valley life by catching minor issues before they cause interior damage.",
  },
];

export const metadata: Metadata = {
  title: 'What Is a Roof Valley and Why Does It Matter for My Charlotte NC Home?',
  description:
    "Roof valley = V-shape where slopes meet, handles 30-60% of roof runoff. Charlotte NC types: open metal $8-15/ft, closed-cut $5-10/ft. Ice-and-water shield required NC IRC §R905.1.1.",
  keywords: [
    'what is a roof valley Charlotte NC',
    'roof valley types',
    'open valley vs closed valley',
    'roof valley repair cost',
    'roof valley leak Charlotte',
    'ice water shield valley',
    'NC roof valley code',
    'metal roof valley flashing',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is a Roof Valley and Why Does It Matter for My Charlotte NC Home?',
    description: 'Roof valley = V-shape where slopes meet, handles 30-60% of roof runoff.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsRoofValleyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is a Roof Valley?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is a Roof Valley and Why Does It Matter for My Charlotte NC Home?" description="Roof valley terminology and importance for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Valley?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is a Roof Valley Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Roof valley — V-shaped channel where two sloped roof sections meet',
          'Handles 30-60% of total roof runoff (concentrated in 3-6% of roof area)',
          '#1 most leak-prone area — especially in Charlotte heavy-rain climate',
          'OPEN valley — exposed metal flashing $8-15/ft, 30+ yr (highest performance)',
          'CLOSED-CUT valley — shingles trimmed to line $5-10/ft, 20-25 yr (most common)',
          'WOVEN valley — interwoven shingles $5-10/ft, 15-20 yr (rare, leak risk)',
          'Ice-and-water shield REQUIRED per NC IRC §R905.1.1 in all valleys',
          'Most leak-prone area — handles concentrated water flow off both slopes',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Roof Valley?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <GitMerge className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Valley Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is a Roof Valley and Why Does It Matter for My Charlotte NC Home?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Valley Inspection</Button>
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

      <CTASection title="Valley Leaks Are Charlotte's #1 Roof Failure Point" subtitle="Free valley inspection with leak risk assessment. NC IRC §R905.1.1 ice-and-water shield install. Open metal, closed-cut, or full reroof options." />
    </>
  );
}
