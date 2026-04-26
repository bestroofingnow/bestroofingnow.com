import { Metadata } from 'next';
import { Phone, Award } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/why-aluminum-best-for-lake-norman-waterfront-roofing-nc`;
const QUESTION = 'Why is aluminum the best metal roofing for Lake Norman waterfront homes in NC?';
const ANSWER =
  "Aluminum is the gold standard for Lake Norman NC waterfront roofing for 6 reasons: (1) 100% corrosion immune — aluminum doesn't rust or pit in marine/lake environments (steel can rust at coastal locations, copper develops accelerated patina, zinc can be affected); (2) lightweight — 0.7 lb per sq ft vs steel 1.5 lb (less structural load on lakefront cantilevered architecture); (3) salt-spray resistant — even minimal Lake Norman atmospheric moisture content above water doesn't cause corrosion; (4) PVDF Kynar 500 / Hylar 5000 finish 30-40 yr warranty (industry-leading paint adhesion); (5) wind resistant 150+ MPH (handles Lake Norman wind-fetch storms); (6) energy-efficient — reflective surface drops attic temps 20-40°F vs dark asphalt. Pricing: aluminum standing-seam $13-$17 per sq ft installed. Best Roofing Now installs aluminum on Lake Norman waterfront properties in Cornelius, Davidson, Huntersville, Mooresville, Denver, Sherrills Ford, and Troutman with full PVDF Kynar 30-40 year finish warranty and S-5! solar-clamp compatibility.";

const followUpFAQs = [
  {
    question: 'Will steel rust on a Lake Norman waterfront home?',
    answer:
      "Steel CAN rust at lakefront positions despite Galvalume coating, especially within 100 feet of water with constant atmospheric moisture. While most steel roofs perform well in inland Charlotte, lakefront positions accelerate the corrosion timeline. Galvalume-coated steel typically lasts 25-30 years inland but only 15-25 years at lakefront. Aluminum eliminates this concern entirely — typically lasting 50+ years at lakefront with no degradation. The cost premium ($2-$5/sq ft) is recovered through avoided early replacement.",
  },
  {
    question: 'Is aluminum heavier or lighter than asphalt shingles?',
    answer:
      "Aluminum standing-seam is significantly lighter than asphalt shingles: aluminum 0.7 lb per sq ft vs asphalt architectural shingles 2.5-4.0 lb per sq ft (roughly 4-5x heavier). This matters for Lake Norman lakefront homes with cantilevered architecture, deck structures, or older framing where weight is a concern. Aluminum's lightweight property also makes it ideal for asphalt-to-metal conversions without structural reinforcement (vs slate/tile conversions that require engineer-stamped drawings).",
  },
  {
    question: 'How does aluminum compare to copper for Lake Norman premium homes?',
    answer:
      "Both are excellent for Lake Norman waterfront — different aesthetic and budget tradeoffs. Aluminum: $13-$17/sq ft installed, available in 14+ PVDF Kynar colors, modern clean appearance, 50+ year lifespan. Copper: $24-$30/sq ft installed, develops natural patina over 5-15 years (green/brown/dark variations), historic and luxury aesthetic, 60-100+ year lifespan. Aluminum is more cost-effective and color-stable; copper is more premium and develops character. For most Lake Norman waterfront homes, aluminum delivers the same waterproofing performance at 50-60% the cost.",
  },
  {
    question: 'What aluminum panel profiles are best for Lake Norman wind?',
    answer:
      "Standing-seam aluminum with mechanically-seamed locks (rather than snap-lock) handles 150+ MPH winds typical of Lake Norman wind-fetch storms. Best profiles for waterfront: (1) double-locked standing seam — best wind resistance; (2) trapezoidal structural panel — large coverage with high wind rating; (3) batten-seam — historic look with modern wind performance. We recommend 1.5-inch or 2-inch seam height for waterfront positions. PVDF Kynar 500 finish in lakefront-appropriate colors (Cool Charcoal, Pewter, Slate Gray) is standard.",
  },
  {
    question: 'Do Lake Norman HOAs allow metal roofs?',
    answer:
      "Lake Norman HOA approval for metal roofs varies by community. Premier waterfront communities (The Peninsula, Skybrook, NorthBay) typically allow standing-seam metal in low-profile finishes (Cool Charcoal, Pewter, Slate Gray, Hunter Green). Production neighborhoods (Birkdale Village, Riverpointe, Vermillion) sometimes restrict metal entirely or limit to specific colors. Best Roofing Now coordinates HOA architectural-review-board (ARB) submission with physical material samples — typical 2-4 week review with 95%+ first-pass approval rate when properly submitted.",
  },
];

export const metadata: Metadata = {
  title: 'Why Is Aluminum the Best Metal Roofing for Lake Norman Waterfront Homes NC?',
  description:
    "Aluminum gold standard for Lake Norman waterfront NC: 100% corrosion immune, lightweight, salt-spray resistant, PVDF Kynar 30-40 yr warranty, 150+ MPH wind. $13-17/sq ft.",
  keywords: [
    'aluminum roofing Lake Norman NC',
    'best metal roof lakefront',
    'aluminum standing seam Lake Norman',
    'lakefront metal roofing',
    'PVDF Kynar finish',
    'salt-air immune roofing',
    'Cornelius Davidson Huntersville aluminum roof',
    'lake norman waterfront roof',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Why Aluminum Is the Best Metal Roofing for Lake Norman Waterfront Homes',
    description: '100% corrosion immune, lightweight, salt-spray resistant, 150+ MPH wind.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhyAluminumBestForLakeNormanPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Why Aluminum for Lake Norman?', url: PAGE_URL }]} />
      <WebPageSchema name="Why Is Aluminum the Best Metal Roofing for Lake Norman Waterfront Homes NC?" description="Aluminum waterfront roofing guide for Lake Norman NC." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Aluminum LKN?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Why Aluminum Best for Lake Norman Waterfront Roofing NC" city="Cornelius" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Cornelius" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          '100% corrosion immune — aluminum does not rust or pit in marine/lake environments',
          'Lightweight — 0.7 lb/sq ft vs steel 1.5 lb (4-5x lighter than asphalt)',
          'Salt-spray resistant — even minimal lakefront atmospheric moisture cannot corrode',
          'PVDF Kynar 500 / Hylar 5000 finish — 30-40 year warranty (industry-leading paint adhesion)',
          'Wind resistant 150+ MPH (handles Lake Norman wind-fetch storms)',
          'Energy efficient — drops attic temps 20-40°F vs dark asphalt',
          'Pricing $13-$17 per sq ft installed standing-seam',
          'Best Roofing Now installs in Cornelius, Davidson, Huntersville, Mooresville, Denver, Sherrills Ford, Troutman',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Aluminum for Lake Norman?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Lake Norman NC Waterfront Metal Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">Why Is Aluminum the Best Metal Roofing for Lake Norman Waterfront Homes NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Aluminum Roof Quote</Button>
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

      <CTASection title="Aluminum Built for Lake Norman" subtitle="100% corrosion immune. PVDF Kynar 30-40 yr finish warranty. S-5! solar-clamp compatible. Free lakefront aluminum estimate." />
    </>
  );
}
