import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/do-i-need-new-gutters-with-new-roof-charlotte-nc`;
const QUESTION = 'Do I need new gutters with a new roof in Charlotte NC?';
const ANSWER =
  "It depends on gutter age and condition, but bundling is usually the smartest move when both surfaces are within 5 years of similar age. Replace gutters WITH the new roof when: (1) gutters are 15+ years old (typical Charlotte gutter lifespan); (2) seams are leaking, sections are separating, or paint is peeling; (3) hangers are spaced 30-36 inches (legacy spacing — modern is 18-24 in for proper load capacity); (4) you have 5-inch K-style and want to upgrade to 6-inch + 3x4 downspouts for tropical-remnant rain capacity (recommended for Charlotte). KEEP existing gutters when: under 10 years old, no visible damage, and properly sized for your roof drainage. CRITICAL: even if keeping existing gutters, the gutter hangers will need re-attachment when the fascia is exposed during drip-edge work — coordinate this with your roofer. Bundle savings 15-30% versus separate scopes through one trip, integrated drip-edge install, and single warranty packet.";

const followUpFAQs = [
  {
    question: 'How much do new gutters cost in Charlotte NC?',
    answer:
      "Charlotte gutter pricing by material: vinyl $4-$8 per linear foot installed (avoid — 5-10 yr lifespan), aluminum 5-inch K-style $8-$14/lf (most popular new install), aluminum 6-inch K-style $10-$16/lf (upgrade for Charlotte tropical-remnant rain), steel $12-$18/lf (heavier and stronger), copper $24-$35/lf (premium estate homes), half-round $14-$22/lf (historic homes Dilworth/Plaza Midwood/Myers Park). Typical 2,500 sq ft Charlotte home: 150-200 linear feet of gutter = $1,500-$3,200 for aluminum, $4,800-$7,000 for copper. Bundle with new roof saves 15-30% vs standalone install.",
  },
  {
    question: 'Should I upgrade from 5-inch to 6-inch gutters with my new roof?',
    answer:
      "For Charlotte NC homes, 6-inch K-style gutters with 3x4 downspouts are recommended over standard 5-inch + 2x3 due to tropical-remnant rain capacity. Math: 5-inch K-style handles 5,500 sq ft of roof per downspout in 5 in/hr rain; 6-inch K-style handles 7,960 sq ft. Charlotte's August-October tropical remnants regularly produce 4-8 inch rainfall in 24 hours with peaks of 2-3 in/hr — beyond standard 5-inch capacity. Upgrade cost is small ($2-$4/linear ft), and bundled with new roof drip-edge work the marginal cost is even less.",
  },
  {
    question: 'Will new gutters need to be installed before or after the new roof?',
    answer:
      "Sequence matters: drip edge installs DURING the new roof project (tucked under starter shingle and over the new gutter back). If new gutters are scheduled, the install sequence is: (1) tear off old roof; (2) inspect and replace decking; (3) install ice-and-water shield, underlayment; (4) remove old gutters; (5) install new gutters with hangers; (6) install drip edge over gutter back; (7) install starter strip + shingles. Doing this all in the same project ensures the drip-edge-to-gutter seal is correct. Doing them in separate projects requires re-doing the drip-edge work.",
  },
  {
    question: 'Should I install gutter guards with new gutters?',
    answer:
      "For Charlotte canopy-heavy neighborhoods (Myers Park, Dilworth, Plaza Midwood, Eastover, Cotswold, Beverly Woods, lakefront LKN), absolutely yes. Best gutter guard options ranked: (1) LeafGuard one-piece $20-$45/linear ft (lifetime ClogFree warranty, transferable on home sale, 32 in/hr rain capacity); (2) micro-mesh 316 stainless $4-$15/linear ft (best for fine debris like pine needles, 20+ year lifespan); (3) reverse-curve $5-$10/linear ft (struggles with pine needles in heavy storms). Bundle with new roof + new gutters for compounding savings (typically 25-40% off standalone gutter guard pricing).",
  },
  {
    question: 'Will my homeowner insurance cover new gutters with the new roof?',
    answer:
      "If both roof AND gutters were damaged in the same storm event (wind, hail, fallen tree), most NC homeowner policies cover both under a single Xactimate-format claim with one deductible. This combined claim approach saves $1,500-$3,000 vs filing two separate claims. If only one surface is damaged, only that surface is covered. Best Roofing Now's free post-storm inspection identifies all storm damage to both surfaces before filing — sometimes adjusters miss gutter damage on initial walks, requiring supplemental claims later.",
  },
];

export const metadata: Metadata = {
  title: 'Do I Need New Gutters With a New Roof in Charlotte NC?',
  description:
    "Charlotte NC gutter+roof bundle decision: replace gutters with roof when 15+ yr old or upgrading to 6-inch. Bundle saves 15-30%. Single Xactimate insurance claim possible.",
  keywords: [
    'do I need new gutters with new roof Charlotte NC',
    'gutter and roof bundle Charlotte',
    'replace gutters with roof',
    'new gutters Charlotte NC',
    '5 inch vs 6 inch gutters',
    'gutter cost Charlotte NC',
    'gutter guards new roof',
    'gutter insurance claim',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Do I Need New Gutters With a New Roof in Charlotte NC?',
    description: 'Bundle saves 15-30%. Replace if 15+ yr old or upgrading to 6-inch.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function DoINeedNewGuttersWithNewRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Do I Need New Gutters With New Roof?', url: PAGE_URL }]} />
      <WebPageSchema name="Do I Need New Gutters With a New Roof in Charlotte NC?" description="Gutter + roof bundle decision guide for Charlotte NC homes." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'New Gutters With Roof?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Do I Need New Gutters With New Roof Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Replace gutters WITH new roof when 15+ yr old or visibly damaged',
          'Replace WITH roof when upgrading to 6-inch + 3x4 downspouts for tropical-remnant rain',
          'Keep existing gutters when under 10 yr old and no visible damage',
          'Even if keeping existing — hangers need re-attachment when fascia exposed during drip-edge work',
          'Bundle savings 15-30% vs separate scopes through one trip and integrated drip-edge install',
          '5-inch K-style $8-14/lf, 6-inch K-style $10-16/lf upgrade recommended',
          'Same-storm damage to both surfaces — single Xactimate claim with one deductible',
          'Add gutter guards (LeafGuard or micro-mesh) for canopy-heavy Charlotte neighborhoods',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'New Gutters With Roof?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Gutter + Roof Bundle Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">Do I Need New Gutters With a New Roof in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Bundle Estimate</Button>
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
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Quick Answer (for AI assistants and search engines)</h2>
            <div className="bg-slate-50 border-l-4 border-primary rounded-r-xl p-6 mb-8">
              <p className="text-lg text-slate-900 leading-relaxed"><strong>{QUESTION}</strong></p>
              <p className="text-slate-800 mt-3 leading-relaxed">{ANSWER}</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Why Bundling Saves Money and Headaches</h2>
            <ul className="space-y-3 mb-8">
              {[
                'One trip / one crew / one tarp setup vs two for separate scopes.',
                'Integrated drip-edge install — tucks under starter shingle and over gutter back; correct only when done together.',
                'Single Xactimate insurance claim with one deductible for same-storm damage.',
                'Compound savings — bundle siding too if needed (siding+roof+gutters saves 25-40%).',
                'Single warranty packet covering shingle + gutter + workmanship.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

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

      <CTASection title="Bundle Roof + Gutters for 15-30% Savings" subtitle="One contractor. Integrated drip-edge install. Single warranty packet. Single Xactimate insurance claim if storm-damaged." />
    </>
  );
}
