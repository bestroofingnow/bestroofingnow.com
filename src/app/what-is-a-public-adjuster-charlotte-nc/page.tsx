import { Metadata } from 'next';
import { Phone, Briefcase } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-public-adjuster-charlotte-nc`;
const QUESTION = 'What is a public adjuster and do I need one for my Charlotte NC insurance claim?';
const ANSWER =
  "A public adjuster is a state-licensed insurance professional who works EXCLUSIVELY for the homeowner (NOT the insurance carrier) to negotiate insurance claim settlements. Public adjusters are licensed by the NC Department of Insurance under N.C. Gen. Stat. §58-33A and typically charge 8-15% of the final claim payout (regulated maximum). Three types of insurance adjusters in NC: (1) STAFF ADJUSTER — employed by the insurance carrier (works for THEIR interest); (2) INDEPENDENT ADJUSTER — contracted by carrier (works for THEIR interest); (3) PUBLIC ADJUSTER — hired by homeowner (works for YOUR interest). For Charlotte NC homeowners, public adjusters help when: (1) CLAIM EXCEEDS $50,000 — fee economics work for larger claims; (2) CARRIER LOWBALL OFFER — initial carrier offer is significantly below contractor estimate; (3) COMPLEX CLAIM — multi-trade damage, hidden damage, total loss; (4) TIME CONSTRAINTS — homeowner can't manage claim process; (5) CARRIER DISPUTING coverage. Public adjusters DON'T help when: (1) claim under $20,000 (fees eat too much benefit); (2) straightforward single-trade claim; (3) you have qualified contractor providing Xactimate scoping (Best Roofing Now's claim specialists provide most public-adjuster services included with reroof). Charlotte NC public adjuster verification: NC Department of Insurance license lookup at ncdoi.gov.";

const followUpFAQs = [
  {
    question: 'How much does a public adjuster charge in Charlotte NC?',
    answer:
      "NC public adjuster fees are regulated by N.C. Gen. Stat. §58-33A and capped: STANDARD claims (non-catastrophe) — maximum 15% of total claim payout typical contracts 8-12%; CATASTROPHE claims (declared disaster zone) — maximum 10% per state regulation during emergency periods. Charlotte NC examples: $50,000 claim × 10% public adjuster fee = $5,000 fee (homeowner net $45,000); $25,000 claim × 12% = $3,000 fee (homeowner net $22,000); $100,000 claim × 8% = $8,000 fee (homeowner net $92,000). Fee math: public adjuster typically increases claim 30-50% over carrier initial offer, so fee is paid from the INCREASE — homeowner net is still significantly higher than accepting initial carrier offer.",
  },
  {
    question: 'Should I use a public adjuster or just my Charlotte NC roofer?',
    answer:
      "Decision matrix: USE YOUR ROOFER ALONE when — (1) claim under $30,000; (2) single-trade roof damage only; (3) Best Roofing Now (or similar GAF Master Elite/CertainTeed SELECT/OC Platinum certified contractor) provides Xactimate scoping; (4) carrier offer is reasonable (within 15% of contractor estimate). USE A PUBLIC ADJUSTER when — (1) claim exceeds $50,000; (2) multi-trade damage with significant interior repairs; (3) carrier lowball (under 60% of contractor estimate); (4) coverage dispute; (5) total loss situations. USE BOTH when — (1) claim is large AND complex; (2) homeowner can't manage process; (3) public adjuster handles negotiations while contractor scopes work. Best Roofing Now's free claim review recommends optimal approach for your specific situation.",
  },
  {
    question: 'Are public adjusters legal in Charlotte NC?',
    answer:
      "Yes — public adjusters are licensed and regulated under NC Gen. Stat. §58-33A (Public Adjuster Licensing Act). NC requirements: (1) state license issued by NC Department of Insurance; (2) pre-licensing education (40 hours); (3) state exam passing score; (4) bond posting ($20,000 minimum); (5) annual continuing education (24 hours); (6) clean criminal background check; (7) ethics standards. Verification: search NC Department of Insurance license lookup at ncdoi.gov before hiring. Red flags: unlicensed 'consultant' offering claim services (illegal), fees exceeding regulatory maximum, contracts requiring upfront payment, contracts that can't be cancelled, offers to 'eat your deductible' (illegal under NC §58-24-10).",
  },
  {
    question: 'How do I find a reputable public adjuster in Charlotte NC?',
    answer:
      "Five-step vetting process: (1) NC LICENSE VERIFICATION — search ncdoi.gov for active license, no disciplinary actions; (2) NAPIA MEMBERSHIP — National Association of Public Insurance Adjusters membership indicates ethics commitment (napia.com); (3) BBB RATING — A or A+ rating with minimal complaints; (4) REFERENCE CHECK — request and contact 3+ recent client references in Charlotte NC area; (5) CONTRACT REVIEW — fee structure clearly stated, cancellation rights specified, scope of services defined. AVOID: door-to-door public adjusters following storms (often unlicensed or outside-state), public adjusters demanding upfront payment, contracts requiring binding arbitration only. Best Roofing Now can refer reputable Charlotte-area public adjusters when needed for large claims.",
  },
  {
    question: 'What\'s the difference between a public adjuster and an attorney for Charlotte NC claims?',
    answer:
      "PUBLIC ADJUSTER (NC §58-33A licensed) — handles claim NEGOTIATION with insurance carrier; typical fee 8-15% of payout; appropriate for non-litigated claim disputes; cannot represent in court. ATTORNEY (NC Bar licensed) — handles LITIGATION when carrier wrongfully denies claim or breaches contract; typical fee 33-40% of recovery; appropriate when carrier has denied valid claim, alleged fraud, or breached duty of good faith; can represent in court. Use PUBLIC ADJUSTER first for: simple negotiation disputes, lowball offers, coverage interpretation. Use ATTORNEY when: carrier has denied claim entirely, alleged homeowner fraud, breached good-faith duty, claim exceeds $200,000. Most Charlotte NC claims resolve at public-adjuster level; only 5-10% require attorney escalation.",
  },
];

export const metadata: Metadata = {
  title: 'What Is a Public Adjuster and Do I Need One for My Charlotte NC Insurance Claim?',
  description:
    "Public adjuster = state-licensed pro who works for homeowner (not carrier). NC §58-33A regulated, 8-15% fee. Best for $50K+ claims. Verify license at ncdoi.gov.",
  keywords: [
    'what is a public adjuster Charlotte NC',
    'NC public adjuster',
    'public adjuster fee NC',
    'NC §58-33A public adjuster',
    'find public adjuster Charlotte',
    'insurance claim help Charlotte',
    'public adjuster vs attorney',
    'roof claim adjuster',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is a Public Adjuster and Do I Need One for My Charlotte NC Insurance Claim?',
    description: 'State-licensed pro working for homeowner. Best for $50K+ claims.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsPublicAdjusterPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is a Public Adjuster?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is a Public Adjuster and Do I Need One for My Charlotte NC Insurance Claim?" description="Public adjuster guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Public Adjuster?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is a Public Adjuster Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Public adjuster — state-licensed pro who works for homeowner (not carrier)',
          'NC §58-33A regulated, fees capped at 15% standard / 10% catastrophe',
          'Best for claims exceeding $50,000',
          'Best for multi-trade damage or carrier lowball offers',
          'Verify license at NC Department of Insurance (ncdoi.gov)',
          'Attorney needed instead for denied claims or breach of good faith',
          'For claims under $30K — qualified roofer (Best Roofing Now) typically sufficient',
          'AVOID — unlicensed consultants, deductible rebating, upfront payment demands',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Public Adjuster?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Briefcase className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Public Adjuster Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is a Public Adjuster and Do I Need One for My Charlotte NC Insurance Claim?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Claim Review</Button>
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

      <CTASection title="Free Claim Review — Decide Smart" subtitle="Best Roofing Now's claim specialists provide most public-adjuster services included with reroof. Free recommendation on optimal approach for your claim size and complexity." />
    </>
  );
}
