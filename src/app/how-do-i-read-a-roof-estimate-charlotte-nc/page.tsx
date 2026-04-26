import { Metadata } from 'next';
import { Phone, FileText } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-do-i-read-a-roof-estimate-charlotte-nc`;
const QUESTION = 'How do I read a roof estimate and what should it include in Charlotte NC?';
const ANSWER =
  "A complete Charlotte NC roof estimate should include 12 line-item sections allowing apples-to-apples comparison across multiple bids: (1) MEASUREMENT — total squares (100 sq ft units) with HOVER/EagleView satellite report attached; (2) TEAR-OFF — labor and disposal cost ($50-$150/square); (3) DECKING — base allowance for sheet replacement ($80-$200/sheet beyond) PLUS estimated quantity (typical 5-15% of total sheets); (4) UNDERLAYMENT — synthetic underlayment specification (Tiger Paw, RoofRunner, ProArmor — NOT felt) at $0.30-$0.60/sq ft; (5) ICE-AND-WATER SHIELD — valley + eave + penetration coverage per NC IRC §R905.1.1; (6) DRIP EDGE — perimeter linear feet per NC IRC §R905.2.8.5; (7) SHINGLES — specific brand, model, color, warranty tier specified (e.g., 'GAF Timberline HDZ 30-yr Charcoal with Golden Pledge warranty'); (8) FASTENERS — 6-nail pattern, ring-shank specification; (9) PIPE BOOTS — quantity and lead vs rubber upgrade option; (10) FLASHING — chimney, valley, step, counterflashing replacement; (11) RIDGE VENT and HIP/RIDGE CAP — material and ventilation NFVA per NC IRC §R806; (12) PERMIT, DUMP FEES, OVERHEAD AND PROFIT (insurance claims only). Avoid bids with 'lump sum' pricing — always demand line-item breakdown. Best Roofing Now's free written estimates include all 12 sections plus HOVER measurement PDF and warranty registration documentation.";

const followUpFAQs = [
  {
    question: 'What red flags should I look for in a Charlotte NC roof estimate?',
    answer:
      "Eight major red flags: (1) LUMP SUM PRICING — 'reroof for $X' without line-item breakdown (hides corner-cutting); (2) MISSING SHINGLE BRAND/MODEL — vague 'high-quality architectural shingles' (could be cheapest budget line); (3) NO UNDERLAYMENT specification — assume felt (legacy, NOT recommended); (4) MISSING ICE-AND-WATER SHIELD — required by NC IRC §R905.1.1; (5) MISSING DRIP EDGE — required by NC IRC §R905.2.8.5; (6) NO PERMIT line item (skipping permit voids manufacturer warranty); (7) DEDUCTIBLE-REBATING offer (illegal under NC §58-24-10); (8) PAYMENT REQUIRED IN FULL UPFRONT (legitimate contractors require 25-50% deposit, balance on completion). Best Roofing Now's transparent estimates include all 12 line items with no hidden charges.",
  },
  {
    question: 'How do I compare 3 Charlotte NC roof estimates?',
    answer:
      "Apples-to-apples comparison framework: (1) NORMALIZE measurement — verify all 3 estimates measure same square count (request HOVER PDF from each); (2) MATCH shingle brand/model/warranty tier — 'GAF Timberline HDZ 30-yr' is comparable to 'CertainTeed Landmark Pro 30-yr' but not to 'GAF Royal Sovereign 25-yr' (cheaper); (3) VERIFY underlayment — synthetic for all (not felt); (4) CONFIRM ice-and-water shield coverage — minimum valleys + eaves + penetrations; (5) COMPARE warranty offering — Master Elite Golden Pledge / SELECT 5-Star Integrity / Platinum Protection (top tier) vs standard manufacturer warranty; (6) CHECK accessories — pipe boot upgrade, ridge ventilation, drip edge type; (7) ADD-ON COSTS — what additional charges apply if decking exceeds estimate (varies $80-$200/sheet). Lowest price isn't always best — compare total VALUE.",
  },
  {
    question: 'What\'s the typical deposit and payment schedule for a Charlotte NC reroof?',
    answer:
      "Charlotte NC standard payment schedule: (1) DEPOSIT 25-50% of total — paid at contract signing (covers materials and scheduling commitment); (2) PROGRESS PAYMENT 25-30% — sometimes required after tear-off + decking work (mid-project); (3) FINAL BALANCE 25-50% — paid upon completion and homeowner walk-through approval. AVOID: contractors demanding 100% upfront (high-risk), contractors demanding more than 50% deposit, contractors offering 'pay-after-completion' on full amount (often unscrupulous, will increase final invoice). Insurance claims: typical structure is ACV upfront from insurance, recoverable depreciation released after work completion. Best Roofing Now offers PowerPay 0% financing as alternative to staged payments.",
  },
  {
    question: 'Should I always get the lowest bid for my Charlotte NC reroof?',
    answer:
      "No — lowest bid is often LOWEST QUALITY. Hidden costs of low bids: (1) cheapest shingles (15-25 yr lifespan vs 30-50 yr for premium); (2) felt underlayment vs synthetic ($400-$1,000 cheaper but 30-50% shorter life); (3) standard warranty vs Master Elite Golden Pledge (lose 20+ years of coverage); (4) skip ice-and-water shield in valleys (NC code violation); (5) reuse old flashing (vs replace during reroof); (6) standard rubber pipe boots vs lead (8-12 yr vs 50+ yr lifespan); (7) contractor lacks proper insurance/license (homeowner liability if injury). True cost comparison: cheapest bid often costs $5,000-$15,000 MORE over 25-year roof life through premature replacement and ongoing repairs. Choose mid-tier or premium contractors (Best Roofing Now: GAF Master Elite + CertainTeed SELECT + OC Platinum certified) for best long-term value.",
  },
  {
    question: 'How long should I take to decide on a Charlotte NC roof estimate?',
    answer:
      "Decision timeline: NORMAL situations (no active leak, no storm damage) — 1-3 weeks reasonable for getting 2-3 estimates, comparing apples-to-apples, checking references, verifying licenses; URGENT situations (active leak, storm damage) — 3-7 days reasonable, prioritize licensed Master Elite/SELECT/Platinum certified contractors over price-only comparison; EMERGENCY situations (interior damage actively occurring) — same-day emergency tarp service ($250-$650) buys time to get proper estimates. AVOID: contractor pressure tactics ('this price only good today', 'storm chasers' going door-to-door after hailstorms — typically out-of-state with poor warranty support). NC §58-24-10 prohibits deductible rebating — any contractor offering this is illegitimate. Best Roofing Now's estimates are good for 30 days with no pressure tactics.",
  },
];

export const metadata: Metadata = {
  title: 'How Do I Read a Roof Estimate and What Should It Include in Charlotte NC?',
  description:
    "Charlotte NC roof estimate must include 12 line items: measurement, tear-off, decking, underlayment, ice-and-water shield, drip edge, shingles, fasteners, boots, flashing, ridge, permit + O&P.",
  keywords: [
    'how to read a roof estimate Charlotte NC',
    'roof estimate line items',
    'compare Charlotte roof bids',
    'roof estimate red flags',
    'Charlotte reroof pricing breakdown',
    'roof estimate sample',
    'NC roof contract terms',
    'roofing estimate transparency',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Do I Read a Roof Estimate and What Should It Include in Charlotte NC?',
    description: '12 line items for apples-to-apples comparison.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowToReadRoofEstimatePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How to Read a Roof Estimate?', url: PAGE_URL }]} />
      <WebPageSchema name="How Do I Read a Roof Estimate and What Should It Include in Charlotte NC?" description="Roof estimate guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Read Estimate?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Do I Read a Roof Estimate Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Item 1 — measurement (squares + HOVER PDF)',
          'Item 2 — tear-off labor and disposal ($50-$150/square)',
          'Item 3 — decking allowance + per-sheet rate ($80-$200/sheet)',
          'Item 4 — synthetic underlayment specification (NOT felt)',
          'Item 5 — ice-and-water shield per NC IRC §R905.1.1',
          'Item 6 — drip edge per NC IRC §R905.2.8.5',
          'Item 7 — specific shingle brand, model, color, warranty tier',
          'Items 8-12 — fasteners, pipe boots, flashing, ridge, permit + O&P',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Read Estimate?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <FileText className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Estimate Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Do I Read a Roof Estimate and What Should It Include in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Transparent Estimate</Button>
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

      <CTASection title="Apples-to-Apples Estimates Always" subtitle="Best Roofing Now provides transparent 12-line-item estimates with HOVER measurement PDF, specific brand/model/warranty, and 30-day price guarantee. No pressure tactics." />
    </>
  );
}
