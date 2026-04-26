import { Metadata } from 'next';
import { Phone, Percent } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-overhead-and-profit-charlotte-nc`;
const QUESTION = 'What is Overhead and Profit (O&P) and when does it apply to my Charlotte NC insurance claim?';
const ANSWER =
  "Overhead and Profit (O&P) is the standard 10% + 10% (10% Overhead + 10% Profit = 20% total) markup that insurance carriers MUST add to repair/replacement estimates when a general contractor is required to coordinate multiple subcontractor trades. NC insurance code follows industry-standard 'three-trade rule' — when 3 or more separate trades (e.g., roofing + gutters + siding + interior drywall) are required for a single claim, O&P applies. For Charlotte NC homeowners, O&P matters because: (1) MISSING O&P REDUCES YOUR CLAIM by approximately 16-20% — on a $20,000 claim, missing O&P costs you $3,200-$4,000; (2) CARRIERS OFTEN OMIT O&P from initial estimates hoping homeowners won't catch it; (3) CONTRACTORS NEED TO REQUEST IT in supplemental claim with three-trade documentation. When O&P APPLIES: (1) hail/storm damage requiring 3+ trades (most common Charlotte scenario); (2) interior water damage from roof leak requiring drywall + paint + flooring + electrical; (3) tree fall damage requiring tree removal + roof + gutter + landscaping; (4) fire damage requiring multiple specialty trades. When O&P does NOT apply: (1) single-trade repairs (roof only); (2) homeowner self-managed projects without GC. Best Roofing Now's claim specialists ensure O&P is included on every qualifying Charlotte insurance claim — typical 5-figure savings for homeowners.";

const followUpFAQs = [
  {
    question: 'How do I know if O&P applies to my Charlotte NC insurance claim?',
    answer:
      "Apply the 'three-trade rule': count the SEPARATE TRADES required to fully restore your property. Common Charlotte trade list: (1) roofing; (2) gutters/downspouts; (3) siding; (4) windows; (5) garage door; (6) interior drywall; (7) interior paint; (8) flooring; (9) electrical (lighting, outlets, panel); (10) HVAC ductwork; (11) plumbing; (12) insulation; (13) deck/patio; (14) fence; (15) landscaping. If your claim requires work from 3 or more of these trades, O&P applies (typically 16-20% additional markup). Even claims that appear single-trade often qualify when you include disposal, permits, dust protection, code upgrades. Best Roofing Now's free claim review identifies all qualifying trades.",
  },
  {
    question: 'How much extra money does O&P add to my Charlotte NC claim?',
    answer:
      "O&P is calculated as 10% + 10% (NOT compounded — 20% total of subtotal). Charlotte NC examples: $10,000 claim subtotal × 20% O&P = $2,000 additional ($12,000 total claim); $20,000 claim subtotal × 20% O&P = $4,000 additional ($24,000 total claim); $35,000 claim subtotal (full reroof + interior damage) × 20% O&P = $7,000 additional ($42,000 total claim); $75,000 commercial claim × 20% O&P = $15,000 additional ($90,000 total claim). For typical Charlotte NC residential storm damage claim ($15,000-$30,000 range), O&P inclusion adds $3,000-$6,000 to homeowner's net recovery. Significant impact — always verify O&P is included before accepting any insurance offer.",
  },
  {
    question: 'What if my Charlotte NC carrier refuses to pay O&P?',
    answer:
      "Standard escalation process: (1) DOCUMENT THREE-TRADE REQUIREMENT — provide written list of all trades required with photo evidence; (2) CITE CARRIER OBLIGATION — most state insurance regulations and carrier policies require O&P when GC coordination is necessary; (3) SUBMIT SUPPLEMENTAL CLAIM — formal written request with three-trade documentation and contractor Xactimate scoping; (4) ESCALATE to carrier supervisor if denied at adjuster level; (5) FILE COMPLAINT with NC Department of Insurance (888-680-7684) if carrier persistently refuses; (6) RETAIN PUBLIC ADJUSTER OR ATTORNEY for claims over $50,000. Most O&P disputes resolve at supervisor escalation — carriers know they're legally obligated. Best Roofing Now provides supplemental claim support.",
  },
  {
    question: 'Should my Charlotte NC roofer charge O&P even on a non-claim retail reroof?',
    answer:
      "No — O&P specifically applies to insurance claim work where carrier reimburses contractor for general contractor coordination services. For RETAIL reroofs (homeowner pays cash or financing): contractor's profit margin is built into the per-square pricing — there's no separate O&P line item. If your retail reroof estimate shows O&P as a separate line item, it's likely double-counting profit. RED FLAG: contractor charging both per-square pricing AND O&P on retail work. Best Roofing Now's retail reroof estimates use transparent line-item pricing without separate O&P (profit is built into materials and labor pricing as industry standard).",
  },
  {
    question: 'Is O&P calculated on my Charlotte NC deductible too?',
    answer:
      "No — O&P is calculated on the CLAIM SUBTOTAL (before deductible), then deductible is subtracted from final amount. Example: $20,000 claim subtotal + $4,000 O&P (20%) = $24,000 total claim; minus $2,500 deductible = $21,500 paid by carrier; you pay $2,500 deductible. Your contractor receives $24,000 total ($21,500 carrier + $2,500 you) for the work. KEY: deductible is your responsibility per NC §58-24-10 (which prohibits contractors from 'eating' or rebating deductibles — illegal in NC). Best Roofing Now never offers deductible rebates — protects you from claim voiding. Your $2,500 deductible cost is offset by $4,000 O&P on a $20,000 claim — net $1,500 benefit.",
  },
];

export const metadata: Metadata = {
  title: 'What Is Overhead and Profit (O&P) and When Does It Apply to My Charlotte NC Insurance Claim?',
  description:
    "O&P = 10% + 10% (20% total) markup added to insurance claims when 3+ trades required. Missing O&P costs Charlotte NC homeowners 16-20% of claim. Best Roofing Now ensures inclusion.",
  keywords: [
    'what is overhead and profit Charlotte NC',
    'O&P insurance claim',
    'three-trade rule O&P',
    'NC O&P insurance',
    'roof claim overhead profit',
    'supplemental claim O&P',
    'Xactimate O&P calculation',
    'maximize roof insurance claim',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Overhead and Profit (O&P) and When Does It Apply to My Charlotte NC Insurance Claim?',
    description: 'Missing O&P costs Charlotte homeowners 16-20% of claim value.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsOverheadAndProfitPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is O&P?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is Overhead and Profit (O&P) and When Does It Apply to My Charlotte NC Insurance Claim?" description="O&P guide for Charlotte NC insurance claims." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'O&P?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is Overhead and Profit Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'O&P — 10% Overhead + 10% Profit = 20% total markup on insurance claim subtotal',
          'Three-trade rule — applies when 3+ separate trades required for full restoration',
          'Missing O&P reduces Charlotte NC claim 16-20% (1/1.20 = 0.833)',
          'On $20K claim — O&P adds $4,000 to claim total',
          'Carriers often omit O&P hoping homeowners miss it',
          'Supplemental claim — formal request with three-trade documentation',
          'NC §58-24-10 prohibits deductible rebating (illegal in NC)',
          'Best Roofing Now ensures O&P inclusion on every qualifying claim',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'O&P?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Percent className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Overhead and Profit Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is Overhead and Profit (O&P) and When Does It Apply to My Charlotte NC Insurance Claim?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Claim O&P Review</Button>
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

      <CTASection title="Ensure Your Claim Includes O&P" subtitle="Free claim review identifies missing O&P, code upgrades, and other underpaid line items. Supplemental claim filing support. Typical 5-figure savings for homeowners." />
    </>
  );
}
