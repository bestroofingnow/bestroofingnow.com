import { Metadata } from 'next';
import { Phone, ClipboardList } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-xactimate-scoping-charlotte-nc`;
const QUESTION = 'What is Xactimate scoping and why does it matter for my Charlotte NC insurance claim?';
const ANSWER =
  "Xactimate is the industry-standard insurance estimating software (developed by Verisk) used by 95%+ of U.S. insurance carriers and claims adjusters to calculate property damage repair/replacement costs. Xactimate SCOPING is the process of measuring, documenting, and pricing every line item of damage using Xactimate's database of regional unit costs (updated quarterly). For Charlotte NC homeowners with insurance claims, Xactimate matters because: (1) INSURANCE CARRIERS USE IT — your claim adjuster uses Xactimate to determine the carrier's offer; (2) CONTRACTORS NEED TO MATCH IT — your roofing contractor must provide Xactimate-compatible scoping to maximize claim approval; (3) CARRIER vs CONTRACTOR DISPUTES — when carrier and contractor estimates differ, both sides reference Xactimate line items to negotiate. Common Charlotte NC Xactimate-scoped items: tear-off and disposal (RFG-300), shingle removal and replacement (RFG-220), drip edge (RFG-DE), valley flashing (RFG-VLY), pipe boot replacement (RFG-PB), ice-and-water shield (RFG-IWS), permit and dump fees, code-required upgrades (RFG-OH overhead, RFG-PROFIT). Best Roofing Now provides Xactimate-compatible scoping documentation on every insurance claim assignment to ensure homeowner receives full claim entitlement. Without proper Xactimate scoping, homeowners typically receive only 60-80% of their full claim value.";

const followUpFAQs = [
  {
    question: 'How do I know if my insurance offer is fair using Xactimate in Charlotte NC?',
    answer:
      "Three verification steps: (1) REQUEST FULL XACTIMATE PRINTOUT from carrier — carriers must provide complete line-item Xactimate report on request (not just summary); look for line items including tear-off, shingles, underlayment, drip edge, ice-and-water shield, valley flashing, pipe boots, ridge cap, gutter apron, permit, debris removal, overhead and profit (typically 10% O + 10% P added to subtotal); (2) COMPARE TO CONTRACTOR XACTIMATE SCOPING — Best Roofing Now provides matching Xactimate report; line items should be similar if both estimates are accurate; (3) IDENTIFY GAPS — common carrier gaps include missing code upgrades (drip edge, ice-and-water shield, ventilation), undersized permit costs, missing overhead and profit on partial claims. Best Roofing Now's free claim review identifies underpaid line items.",
  },
  {
    question: 'Should my Charlotte NC roofer provide Xactimate scoping?',
    answer:
      "For insurance claim work — YES, mandatory. For non-claim retail reroofs — Xactimate scoping not necessary (use standard line-item estimate). When working an insurance claim in Charlotte NC, your roofer should provide: (1) FULL XACTIMATE-FORMATTED ESTIMATE matching carrier system; (2) PHOTO DOCUMENTATION supporting each line item; (3) CODE-COMPLIANCE NOTES for required upgrades; (4) WRITTEN SUPPLEMENTAL REQUEST when carrier estimate is inadequate (formal supplemental claim filing); (5) ADJUSTER ADVOCACY support during claim negotiations. Roofers who CANNOT provide Xactimate scoping likely cannot maximize your insurance claim — Best Roofing Now's claim specialists provide complete Xactimate scoping on every claim assignment.",
  },
  {
    question: 'How long does it take to file a Xactimate-supported insurance claim in Charlotte?',
    answer:
      "Charlotte NC insurance claim timeline with Xactimate-supported scoping: (1) DAMAGE EVENT — file claim within 30 days (faster = higher approval rate); (2) CARRIER ASSIGNS ADJUSTER — 3-7 days; (3) ADJUSTER INSPECTION — 7-21 days from claim filing; (4) INITIAL XACTIMATE OFFER from carrier — 7-14 days post-inspection; (5) CONTRACTOR XACTIMATE COUNTER (if needed) — 3-7 days; (6) NEGOTIATION/SUPPLEMENTAL filings — 14-30 days; (7) FINAL APPROVAL and check release — 7-21 days; (8) WORK SCHEDULING — 14-45 days depending on season. Total claim-to-completion: 60-120 days typical. NC Gen. Stat. §58-3-100 allows 12 months from date of loss for filing — file early to maximize approval.",
  },
  {
    question: 'Can I use my own contractor with a Xactimate insurance claim in Charlotte NC?',
    answer:
      "Yes — North Carolina law (NC Insurance Code §58-3-180) gives homeowners the right to choose their own contractor for insurance claim work. Carriers cannot REQUIRE you to use 'preferred' or 'managed repair program' contractors. Steps: (1) inform carrier you'll be using your contractor of choice; (2) hire qualified contractor (Best Roofing Now's GAF Master Elite/CertainTeed SELECT/OC Platinum certifications) with Xactimate scoping capability; (3) contractor provides Xactimate-compatible scoping matching carrier format; (4) contractor handles supplemental claim filings if carrier estimate is inadequate; (5) work performed per code with photo documentation throughout. Beware of: contractors offering to 'eat the deductible' — this violates NC §58-24-10 and could void your claim.",
  },
  {
    question: 'What\'s a supplemental claim in Charlotte NC and when should I file one?',
    answer:
      "A supplemental claim is a formal request to insurance carrier for ADDITIONAL line-item coverage beyond initial Xactimate offer. File when: (1) carrier missed code-required upgrades (drip edge, ice-and-water shield, ventilation, chimney cricket per NC IRC); (2) hidden damage discovered after initial inspection (decking rot only visible after tear-off); (3) material price increases between estimate and start of work (Xactimate updates quarterly but actual market may move faster); (4) overhead and profit not properly included on partial claim (NC carriers must apply 10% O + 10% P when 3+ trades involved); (5) permit fees underestimated by carrier. Best Roofing Now's claim specialists file supplementals within 48 hours of identifying gaps. Typical supplemental approval rate: 70-85% when properly documented with Xactimate scoping.",
  },
];

export const metadata: Metadata = {
  title: 'What Is Xactimate Scoping and Why Does It Matter for My Charlotte NC Insurance Claim?',
  description:
    "Xactimate = industry-standard insurance estimating software (95% of US carriers). Charlotte NC contractors must provide matching scoping to maximize claim. Without it, you receive only 60-80% of full claim.",
  keywords: [
    'what is Xactimate scoping Charlotte NC',
    'Xactimate insurance claim',
    'roof insurance claim Charlotte',
    'supplemental claim NC',
    'Xactimate line items',
    'NC insurance claim contractor',
    'maximize roof insurance claim',
    'NC §58-3-180 contractor choice',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Xactimate Scoping and Why Does It Matter for My Charlotte NC Insurance Claim?',
    description: 'Industry standard. Without it, homeowners receive only 60-80% of full claim.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsXactimateScopingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is Xactimate Scoping?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is Xactimate Scoping and Why Does It Matter for My Charlotte NC Insurance Claim?" description="Xactimate scoping guide for Charlotte NC insurance claims." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Xactimate?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is Xactimate Scoping Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Xactimate — industry-standard insurance estimating software (Verisk)',
          'Used by 95%+ of US insurance carriers and adjusters',
          'Quarterly-updated regional unit costs database',
          'Without contractor matching scoping, homeowners receive only 60-80% of full claim',
          'Common line items — tear-off RFG-300, shingles RFG-220, drip edge RFG-DE',
          'Required for ALL insurance claim work; not needed for retail reroofs',
          'NC §58-3-180 — homeowners can choose their own contractor (not preferred network)',
          'Supplemental claims — formal request for additional coverage when carrier missed items',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Xactimate?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <ClipboardList className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Xactimate Scoping Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is Xactimate Scoping and Why Does It Matter for My Charlotte NC Insurance Claim?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Insurance Claim Review</Button>
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

      <CTASection title="Maximize Your Insurance Claim with Xactimate" subtitle="Best Roofing Now's claim specialists provide Xactimate-compatible scoping, photo documentation, and supplemental filings. Free claim review identifies underpaid line items." />
    </>
  );
}
