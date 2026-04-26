import { Metadata } from 'next';
import { Phone, Scale } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-rcv-vs-acv-insurance-charlotte-nc`;
const QUESTION = 'What is RCV vs ACV insurance and which is better for my Charlotte NC roof claim?';
const ANSWER =
  "RCV (Replacement Cost Value) and ACV (Actual Cash Value) are the two main NC homeowner insurance settlement types — the difference dramatically affects your roof claim payout. RCV pays the FULL CURRENT COST to replace damaged property with new materials of like kind and quality (no depreciation deducted). ACV pays the DEPRECIATED CURRENT VALUE — the original cost minus depreciation based on age. For a 15-year-old asphalt shingle roof in Charlotte NC: RCV pays $20,000 (full reroof cost); ACV pays $8,000-$12,000 (after 50-60% depreciation for 15/25-year shingle life). RCV is dramatically better — typically 1.5-3x more payout. How RCV typically works: (1) carrier pays ACV upfront (depreciated value); (2) homeowner completes repair; (3) carrier releases withheld depreciation amount upon proof of completion (called 'recoverable depreciation'). Most NC homeowner policies are RCV by default, but check your declarations page — older policies and some condo/HO-6 policies may be ACV-only. RCV vs ACV cost difference: typical NC RCV policy premium $50-$200/year more than equivalent ACV — well worth it for the claim difference. Best Roofing Now's free claim review verifies your RCV/ACV status and helps maximize recoverable depreciation collection.";

const followUpFAQs = [
  {
    question: 'How do I tell if my Charlotte NC home insurance is RCV or ACV?',
    answer:
      "Three verification methods: (1) DECLARATIONS PAGE — look for 'Replacement Cost' or 'Actual Cash Value' under coverage details; most NC HO-3 (homeowners) policies are RCV by default, HO-2 and HO-8 are typically ACV; (2) POLICY DOCUMENT — search for 'Loss Settlement' or 'Settlement Provisions' section; specifies RCV or ACV with depreciation calculation method; (3) CALL YOUR INSURANCE AGENT — directly ask 'Is my dwelling coverage RCV or ACV?' Get answer in writing via email. Most Charlotte NC policies are RCV but verify yours specifically. RCV-converted-to-ACV policies (called 'modified ACV') exist when roof exceeds certain age (typically 15-20 years) — verify this clause in your policy.",
  },
  {
    question: 'How does depreciation calculation work for Charlotte NC roof claims?',
    answer:
      "Depreciation is calculated as: (Current Roof Age ÷ Expected Lifespan) × Original Replacement Cost. Charlotte NC examples: 25-year shingles aged 5 years = 20% depreciation; aged 10 years = 40%; aged 15 years = 60%; aged 20 years = 80%; aged 25+ years = 100% (fully depreciated, ACV = $0). For RCV claim: carrier pays $20,000 total (e.g., $12,000 ACV upfront + $8,000 recoverable depreciation released after work completion). For ACV-only claim: carrier pays only $8,000-$12,000 (depreciated value), homeowner covers remaining $8,000-$12,000 out-of-pocket. RCV vs ACV difference on 15-year-old roof: $8,000 in homeowner's pocket. This is why RCV coverage is critical — verify yours.",
  },
  {
    question: 'Can I switch from ACV to RCV mid-policy in Charlotte NC?',
    answer:
      "Generally no during active policy term — RCV vs ACV is set at policy renewal, not mid-term. If you discover ACV-only coverage and have an active claim, you cannot upgrade for that claim. For future protection: (1) request RCV upgrade at next policy renewal (typical $50-$200/year premium increase); (2) if denied due to roof age, address roof concerns first then request upgrade; (3) consider switching carriers (some carriers offer RCV on roofs that competitors won't). For ACTIVE claims with ACV coverage: maximize ACV recovery by ensuring carrier uses HIGHEST current cost basis (Xactimate scoping with current Charlotte material/labor pricing) — even with ACV, accurate scoping increases payout 20-40%. Best Roofing Now's free claim review identifies ACV-vs-RCV coverage and maximizes recovery either way.",
  },
  {
    question: 'What is recoverable depreciation in a Charlotte NC roof claim?',
    answer:
      "Recoverable depreciation is the WITHHELD AMOUNT between ACV (initial payment) and RCV (full claim value) that carrier releases AFTER work is completed and proof submitted. Process: (1) Carrier issues ACV check upfront (e.g., $12,000 of $20,000 total claim); (2) Homeowner completes work using ACV check + own funds (or financed); (3) Contractor provides 'work completed' documentation (final invoice, photos, manufacturer certification) to carrier; (4) Carrier releases recoverable depreciation check ($8,000 in this example); (5) Homeowner net = $20,000 (full RCV value). CRITICAL: most carriers require completion within 180-365 days of initial claim; failure to complete within deadline forfeits recoverable depreciation. Best Roofing Now ensures timely completion and provides all required documentation for recoverable depreciation collection.",
  },
  {
    question: 'Should I pay extra for RCV coverage on my Charlotte NC home insurance?',
    answer:
      "Almost always yes — RCV vs ACV cost-benefit math: ANNUAL PREMIUM DIFFERENCE — typical $50-$200/year extra for RCV coverage; CLAIM PAYOUT DIFFERENCE on aged roof — $5,000-$25,000 more recovery on 15-25 year roof claim. Payback math: even one major roof claim during 25-year ownership pays back 25-100x the cumulative premium difference. For Charlotte NC homeowners with: (1) roof aged 5+ years — RCV is essential; (2) high-value home — RCV protects investment; (3) hail/storm-prone neighborhoods (north Mecklenburg, west Charlotte) — RCV protects against frequent claims; (4) limited cash reserves — RCV ensures full reroof funded by claim. ACV may be acceptable only for: brand-new roofs (under 5 yr) where depreciation is minimal, owner-occupied short-term (less than 5 yr planned) where claim probability is low.",
  },
];

export const metadata: Metadata = {
  title: 'What Is RCV vs ACV Insurance and Which Is Better for My Charlotte NC Roof Claim?',
  description:
    "RCV pays full replacement cost; ACV pays depreciated value. Charlotte NC 15-year roof: RCV $20K vs ACV $8-12K. RCV premium $50-$200/yr extra. Verify on declarations page.",
  keywords: [
    'what is RCV vs ACV Charlotte NC',
    'replacement cost value insurance',
    'actual cash value roof claim',
    'recoverable depreciation NC',
    'NC home insurance RCV ACV',
    'roof depreciation calculation',
    'Charlotte insurance claim payout',
    'NC HO-3 RCV coverage',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is RCV vs ACV Insurance and Which Is Better for My Charlotte NC Roof Claim?',
    description: 'RCV pays full replacement cost; ACV pays depreciated value.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsRCVvsACVPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is RCV vs ACV?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is RCV vs ACV Insurance and Which Is Better for My Charlotte NC Roof Claim?" description="RCV vs ACV insurance guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'RCV vs ACV?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is RCV vs ACV Insurance Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'RCV (Replacement Cost Value) — pays full current cost, no depreciation',
          'ACV (Actual Cash Value) — pays depreciated value (original cost minus age)',
          'Charlotte 15-year roof — RCV $20K vs ACV $8-$12K (1.5-3x difference)',
          'Most NC HO-3 (homeowners) policies are RCV by default',
          'HO-2, HO-8, condo HO-6 often ACV-only — verify your declarations page',
          'RCV premium $50-$200/year extra — well worth it for claim payout',
          'Recoverable depreciation released AFTER work completion (180-365 day deadline)',
          'Best Roofing Now ensures timely completion + documentation for full recovery',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'RCV vs ACV?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Scale className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC RCV vs ACV Insurance Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is RCV vs ACV Insurance and Which Is Better for My Charlotte NC Roof Claim?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Claim Coverage Review</Button>
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

      <CTASection title="Maximize Your RCV Recoverable Depreciation" subtitle="Best Roofing Now ensures timely work completion (180-365 day deadline) + provides all carrier-required documentation for full RCV recovery. Free claim coverage review." />
    </>
  );
}
