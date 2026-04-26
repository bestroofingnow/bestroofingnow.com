import { Metadata } from 'next';
import { Phone, DollarSign } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-much-does-roof-decking-replacement-cost-charlotte-nc`;
const QUESTION = 'How much does roof decking replacement cost in Charlotte NC?';
const ANSWER =
  "Roof decking replacement in Charlotte NC costs $80-$120 per 4x8 sheet (32 sq ft per sheet) installed during a reroof project. Typical Charlotte 30-square home decking replacement scenarios: 0-3 sheets for under-25-year-old homes ($0-$360 added cost — most common); 3-8 sheets for 25-40 year homes ($240-$960 added); 8-20 sheets for chronic-leak or 40+ year homes ($640-$2,400 added); 25-50+ sheets for severely deteriorated decking from undetected long-term leaks ($2,000-$6,000+ added). Standard residential decking is 7/16 inch OSB or 1/2 inch plywood. Rare full-decking replacement (every sheet) only needed when chronic widespread leaks have rotted multiple sections, or original 1x6 plank decking from pre-1960s homes requires modern sheathing. Best Roofing Now's free inspection includes a decking risk assessment based on attic check and visible signs — though final sheet count is verified during tear-off when decking is fully exposed.";

const followUpFAQs = [
  {
    question: 'Is decking replacement always needed during a Charlotte roof replacement?',
    answer:
      "No — most Charlotte reroofs reuse 80-95% of existing decking. Standard install: tear off old shingles, inspect every sheet of decking, replace ONLY damaged sheets, then install new underlayment + shingles directly on the existing solid decking. Full decking replacement is rare — typically only needed when (1) chronic widespread leaks have rotted multiple sections, (2) original decking is 1x6 plank (pre-1960s homes), (3) structural changes require new sheathing, or (4) home is very old (50+ years) with original deteriorating decking.",
  },
  {
    question: 'What signs indicate I need new decking?',
    answer:
      "Six indicators suggest decking issues: (1) sagging or visibly uneven roof slopes (structural concern); (2) water stains in attic on underside of decking; (3) soft spots when walking on roof; (4) visible daylight through decking from inside attic; (5) granule loss with shingle wear pattern (often mirrors decking soft spots); (6) home age 30+ years with no recent reroof. Best Roofing Now's free inspection identifies these signs from the attic and provides a decking risk assessment with photo documentation.",
  },
  {
    question: 'Will my insurance cover decking replacement during a reroof?',
    answer:
      "Storm-damaged decking (wind-blown shingles exposing wet decking, fallen tree damage, hail-saturated areas) is typically covered as part of an insurance roof claim. Age-related decking damage is usually NOT covered — that's considered normal wear. The 25% rule (NC IRC §R908.3) is also relevant: if storm damage exceeds 25% of any slope, full replacement triggers, including any necessary decking. Best Roofing Now's Xactimate-format claims include itemized decking replacement line items that adjusters recognize and approve.",
  },
  {
    question: 'What\'s the difference between OSB and plywood decking in Charlotte?',
    answer:
      "Both are common Charlotte residential decking materials. OSB (Oriented Strand Board, 7/16 inch standard): cheaper $25-$40 per 4x8 sheet wholesale, slightly less moisture-resistant, standard for new construction since the 1980s, fine for properly ventilated roofs with intact underlayment. Plywood (1/2 inch CDX): more expensive $35-$55 per sheet wholesale, more moisture-resistant, better for chronic-leak repair zones, often required by manufacturer warranty for premium tier installations. Best Roofing Now matches existing decking material when replacing partial sheets to maintain consistent expansion behavior.",
  },
  {
    question: 'Can decking be replaced without removing the whole roof?',
    answer:
      "Limited yes — small isolated decking replacement (1-2 sheets at chronic leak point) can be done without full reroof, but it's expensive per-sheet ($300-$500) due to setup, shingle removal/replacement around the work zone, and accessibility. Full-roof decking replacement during a reroof is far more economical at $80-$120 per sheet because the shingles are already off and labor is bundled. If you need decking work outside of a reroof, Best Roofing Now's free inspection determines whether spot replacement or partial reroof is the better economic choice.",
  },
];

export const metadata: Metadata = {
  title: 'How Much Does Roof Decking Replacement Cost in Charlotte NC?',
  description:
    "Roof decking replacement in Charlotte NC: $80-$120 per 4x8 sheet during reroof. Typical 30-sq home: 0-3 sheets ($0-$360) under 25 yr; 8-20 sheets ($640-$2,400) older homes.",
  keywords: [
    'roof decking replacement cost Charlotte NC',
    'OSB plywood roof deck cost',
    'rotten decking replacement',
    'roof sheathing cost Charlotte',
    'decking sheet pricing',
    'roof decking inspection',
    'how much for new decking',
    'partial decking replacement',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Much Does Roof Decking Replacement Cost in Charlotte NC?',
    description: '$80-$120 per 4x8 sheet during reroof. Typical 0-3 sheets needed.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowMuchDeckingReplacementPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Decking Replacement Cost?', url: PAGE_URL }]} />
      <WebPageSchema name="How Much Does Roof Decking Replacement Cost in Charlotte NC?" description="Roof decking replacement cost guide for Charlotte NC homes." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Decking Cost?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Much Does Roof Decking Replacement Cost Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Per-sheet pricing — $80-$120 per 4x8 sheet (32 sq ft) during reroof',
          '0-3 sheets typical for under-25-year-old homes ($0-$360 added cost)',
          '3-8 sheets for 25-40 year homes ($240-$960 added)',
          '8-20 sheets for chronic-leak or 40+ year homes ($640-$2,400 added)',
          '25-50+ sheets for severely deteriorated decking ($2,000-$6,000+ added)',
          'Standard residential decking — 7/16 inch OSB or 1/2 inch plywood',
          'Most Charlotte reroofs reuse 80-95% of existing decking',
          'Final count verified during tear-off when decking is fully exposed',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Decking Cost?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Decking Pricing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Much Does Roof Decking Replacement Cost in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Decking Risk Assessment</Button>
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

      <CTASection title="Transparent Decking Pricing" subtitle="$80-$120 per sheet — no surprise upcharges. Final count verified during tear-off. Most Charlotte homes need 0-3 sheets." />
    </>
  );
}
