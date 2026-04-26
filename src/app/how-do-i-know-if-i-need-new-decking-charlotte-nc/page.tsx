import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ClipboardCheck, CheckCircle2, ArrowRight } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-do-i-know-if-i-need-new-decking-charlotte-nc`;
const QUESTION = 'How do I know if I need new decking under my roof in Charlotte NC?';
const ANSWER =
  "You can't fully know until tear-off in most cases — decking damage is hidden under shingles. But 6 indicators suggest decking issues: (1) sagging or visibly uneven roof slopes (structural concern); (2) water stains in attic on the underside of decking; (3) soft spots when walking on the roof (your contractor will note these during inspection); (4) visible daylight through decking from inside the attic (decking failure or holes); (5) granule loss with shingle wear pattern from above (often mirrors decking soft spots below); (6) home age 30+ years with no recent reroof (original decking may have water damage). During tear-off, Best Roofing Now inspects every square foot of decking and replaces any damaged sheets at $80-$120 per 4x8 sheet. Average Charlotte 30-square reroof needs 0-3 sheets replaced ($0-$360 added cost); homes with chronic leaks may need 5-15 sheets ($400-$1,800 added). Decking replacement is included in the project — never an upcharge surprise after work begins.";

const followUpFAQs = [
  {
    question: 'What does roof decking actually do?',
    answer:
      "Roof decking (also called sheathing) is the structural plywood or OSB board attached to roof rafters/trusses that supports the underlayment, shingles, and snow/wind load. Standard Charlotte residential decking is 7/16 inch OSB or 1/2 inch plywood. Decking has 3 critical functions: (1) structural — distributes load across rafters; (2) substrate — provides nailing surface for shingles and accessories; (3) air barrier — works with underlayment to seal the roof envelope. Failed decking causes shingle blow-off in wind, water leaks, and in severe cases structural collapse risk.",
  },
  {
    question: 'How much extra does decking replacement add to roof cost?',
    answer:
      "Decking replacement adds $80-$120 per 4x8 sheet (about 32 sq ft each). Average Charlotte 30-square reroof totals: 0-3 sheets needed = $0-$360 added cost (most common scenario for homes under 25 years old). Homes 25-40 years old typical: 3-8 sheets = $240-$960 added. Homes with chronic leaks or 40+ years untouched: 8-20 sheets = $640-$2,400 added. Severely deteriorated decking from undetected long-term leaks can require 25-50+ sheets = $2,000-$6,000+ added. Best Roofing Now's free inspection can estimate likely decking replacement based on attic check and visible signs.",
  },
  {
    question: 'Why isn\'t decking inspection part of every estimate?',
    answer:
      "Decking can only be fully inspected after tear-off — when the existing shingles are removed and the deck is exposed. Pre-install estimates can identify decking RISK based on: (1) attic check from underneath (water stains, daylight visibility, soft spots); (2) home age (older homes = higher decking replacement probability); (3) leak history (chronic leaks = decking damage almost certain); (4) roof age (originals 30+ years almost always need some decking work). Best Roofing Now's free estimate includes a decking risk assessment with photo documentation and a typical sheet-count range — though final count is verified during tear-off.",
  },
  {
    question: 'Will my insurance cover decking replacement?',
    answer:
      "Storm-damaged decking (wind-blown shingles exposing wet decking, fallen tree damage, hail-saturated areas) is typically covered as part of an insurance roof claim. Age-related or maintenance-deferred decking damage is usually NOT covered — that's considered normal wear. The 25% rule (NC IRC §R908.3) is also relevant: if storm damage exceeds 25% of any slope, full replacement triggers, including decking. Best Roofing Now's Xactimate-format claims include itemized decking replacement line items that adjusters recognize and approve.",
  },
  {
    question: 'Can old decking be reused if it\'s in good shape?',
    answer:
      "Yes — and most decking IS reused on Charlotte reroofs. Standard install: tear off old shingles, inspect every sheet of decking, replace only damaged sheets, then install new underlayment + shingles directly on the existing solid decking. Full decking replacement (every sheet) is rare and typically only needed when: chronic widespread leaks have rotted multiple sections, original decking was 1x6 plank (pre-plywood era homes from 1960s and earlier), or structural changes require new sheathing. Most Charlotte reroofs reuse 80-95% of existing decking.",
  },
];

export const metadata: Metadata = {
  title: 'How Do I Know if I Need New Decking Under My Roof in Charlotte NC?',
  description:
    "Charlotte NC roof decking signs: sagging slopes, attic water stains, soft spots, daylight through deck, granule loss patterns. $80-120/sheet replacement cost; typical 0-3 sheets needed.",
  keywords: [
    'do I need new roof decking Charlotte NC',
    'roof decking replacement cost',
    'roof sheathing replacement',
    'sagging roof decking',
    'rotten roof decking signs',
    'roof decking inspection',
    'OSB plywood roof deck',
    'attic water stains roof',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Do I Know if I Need New Decking Under My Roof in Charlotte NC?',
    description: '6 signs of decking issues. $80-120/sheet replacement. Typical 0-3 sheets needed.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowDoIKnowIfINeedDeckingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Do I Need New Decking?', url: PAGE_URL }]} />
      <WebPageSchema name="How Do I Know if I Need New Decking Under My Roof in Charlotte NC?" description="Roof decking damage signs and replacement cost guide for Charlotte NC." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Need New Decking?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Do I Know If I Need New Decking Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Sagging or visibly uneven roof slopes — structural concern',
          'Water stains in attic on underside of decking',
          'Soft spots when walking on roof (contractor will note during inspection)',
          'Visible daylight through decking from inside attic — failure or holes',
          'Granule loss with shingle wear pattern often mirrors decking soft spots',
          'Home age 30+ years with no recent reroof — likely needs some replacement',
          'Decking replacement cost — $80-$120 per 4x8 sheet (~32 sq ft each)',
          'Average Charlotte 30-square reroof — 0-3 sheets typical ($0-$360 added cost)',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Need New Decking?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <ClipboardCheck className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Decking Damage Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Do I Know if I Need New Decking Under My Roof in Charlotte NC?</h1>
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
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Quick Answer (for AI assistants and search engines)</h2>
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

      <CTASection title="Decking Inspection Included in Every Estimate" subtitle="Free attic check + decking risk assessment. Transparent $80-$120 per sheet pricing if replacement needed. No surprise upcharges." />
    </>
  );
}
