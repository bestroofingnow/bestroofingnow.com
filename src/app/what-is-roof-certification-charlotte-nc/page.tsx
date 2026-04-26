import { Metadata } from 'next';
import { Phone, Stamp } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-roof-certification-charlotte-nc`;
const QUESTION = 'What is roof certification and when do I need one in Charlotte NC?';
const ANSWER =
  "A roof certification is a written professional opinion stating the expected REMAINING USEFUL LIFE of a roof, typically issued in 2-year increments (e.g., 'roof certified for 2 years', 'roof certified for 5 years'). Certifications are NOT warranties — they're educated assessments based on visual inspection, material age, condition assessment, and contractor expertise. For Charlotte NC homeowners, certifications matter in 6 specific situations: (1) HOME PURCHASE/SALE — buyers often request certification when roof is over 10 yr old to confirm condition; (2) FHA LOAN — FHA-insured loans require minimum 2-year certification on roofs over 5 years old; (3) VA LOAN — VA loans require 2-3 year certification; (4) HOMEOWNER INSURANCE — some carriers require certification for roofs over 15-20 years to renew policy; (5) REFINANCE — lenders may require certification on aged roofs; (6) HELOC — home equity line lenders sometimes require. Cost: standalone certification $200-$650 typical Charlotte (paid by buyer or seller depending on contract); certification + estimate combination FREE with Best Roofing Now reroof discussion. Certification typically valid for 30 days from issue (longer for FHA/VA at 90-180 days). Required content: contractor signature, license number, date of inspection, certified period (2/3/5 yr typical), conditions noted, recommended repairs (if any). Best Roofing Now provides FHA/VA-compliant certifications.";

const followUpFAQs = [
  {
    question: 'What\'s the difference between a roof certification and a roof inspection?',
    answer:
      "ROOF INSPECTION — comprehensive assessment of current condition, identifies defects and recommends repairs, documents with photos and written report; useful for homeowner decision-making and maintenance planning. ROOF CERTIFICATION — narrower professional opinion stating expected remaining useful life (typically 2-5 years); used for transactions and lender requirements; based on inspection findings but distilled into a 'certify for X years' statement. Most roof certifications include the underlying inspection report. Best Roofing Now's certification service includes BOTH the inspection report AND the certification statement at one visit. Pricing: inspection alone $150-$450; certification alone $200-$650; bundled inspection + certification $250-$700.",
  },
  {
    question: 'How long is a roof certification valid in Charlotte NC?',
    answer:
      "Charlotte NC roof certification validity by purpose: HOME PURCHASE TRANSACTION — 30-90 days typical (buyer wants recent assessment); FHA LOAN — 90-180 days from inspection date (per FHA HUD Handbook 4000.1 requirements); VA LOAN — 180 days typical (VA appraiser discretion); HOMEOWNER INSURANCE — annual update typically required; CONVENTIONAL LENDER — 30-60 days typical. The CERTIFIED PERIOD (2-5 years) is the contractor's professional opinion of remaining roof useful life — NOT the validity period of the certification document. Example: certification issued today certifies roof for next 3 years (until 2029); document itself is valid for FHA loan if used within 90 days (until July 2026).",
  },
  {
    question: 'Will my Charlotte NC roof pass FHA certification at 15 years old?',
    answer:
      "Conditional yes — FHA does NOT have a maximum roof age, only a minimum 2-year remaining useful life requirement. A 15-year-old Charlotte NC roof CAN pass FHA certification if: (1) shingles show minimal granule loss; (2) no widespread curling or lifting; (3) flashing intact; (4) no active leaks; (5) decking sound. Most properly-installed Charlotte NC roofs at 15 years pass with 2-3 year certification. Fail conditions: extensive granule loss, multiple missing shingles, failed pipe boots, sagging decking, active leaks. If your roof fails certification, options: (1) repair noted issues then re-certify ($500-$2,500 repair + re-inspection); (2) full reroof and certify post-install (FHA approves immediately on new roof). Best Roofing Now provides written 'pass/fail' with repair-or-replace recommendation.",
  },
  {
    question: 'Who pays for the roof certification in a Charlotte NC home sale?',
    answer:
      "Negotiable — common Charlotte NC contract structures: (1) BUYER PAYS — buyer requests certification as part of due diligence (typical when buyer's lender requires); (2) SELLER PAYS — seller proactively certifies before listing to reassure buyers (eliminates negotiation friction, helps faster sale); (3) SPLIT — contract specifies $X allowance for certification (typical $250-$650 split 50/50); (4) FHA/VA SPECIFIC — buyer's loan requires FHA/VA appraiser inspection that may include roof certification as separate $250-$650 line item. Best practice for sellers: get pre-listing certification ($250-$650 cost) — eliminates buyer surprise during due diligence and often justifies higher asking price. Best Roofing Now provides certifications for buyers, sellers, and listing agents.",
  },
  {
    question: 'What if my Charlotte NC roof certification recommends repairs?',
    answer:
      "Three response paths when certification notes recommended repairs: (1) MAKE REPAIRS BEFORE TRANSACTION — homeowner pays $300-$2,500 for noted repairs, contractor re-inspects and issues clean certification; preserves transaction timeline; (2) NEGOTIATE WITH BUYER — credit buyer the repair cost at closing; buyer handles repairs post-close; faster closing but buyer assumes risk; (3) FULL REROOF — if certification notes major issues, full reroof eliminates concerns and provides fresh 25-year warranty (best for homes with roofs 20+ years old where repair-vs-replace economics favor replace). Best Roofing Now's certification includes written repair-vs-replace recommendation with line-item cost estimates for both paths — homeowner choice.",
  },
];

export const metadata: Metadata = {
  title: 'What Is Roof Certification and When Do I Need One in Charlotte NC?',
  description:
    "Roof certification = professional opinion of remaining useful life (2-5 yr). Charlotte NC needed for FHA/VA loans, home purchase, insurance renewal. Cost $200-$650 standalone.",
  keywords: [
    'what is roof certification Charlotte NC',
    'roof certification cost Charlotte',
    'FHA roof certification',
    'VA roof certification',
    'home sale roof certification',
    'roof certification vs inspection',
    'NC roof certification requirements',
    'Charlotte roof life certification',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Roof Certification and When Do I Need One in Charlotte NC?',
    description: 'Professional opinion of remaining useful life. FHA/VA loans require.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsRoofCertificationPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is Roof Certification?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is Roof Certification and When Do I Need One in Charlotte NC?" description="Roof certification guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Certification?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is Roof Certification Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Roof certification — written professional opinion of remaining useful life (2-5 yr typical)',
          'NOT a warranty — based on visual inspection and contractor expertise',
          'Required for FHA-insured loans on roofs over 5 years old',
          'Required for VA loans (2-3 year minimum certification)',
          'Often required by insurance carriers for roofs over 15-20 years',
          'Standalone cost — $200-$650 in Charlotte NC',
          'FREE with Best Roofing Now reroof estimate discussion',
          'Document validity 30-180 days; certified period 2-5 years',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Roof Certification?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Stamp className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Certification Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is Roof Certification and When Do I Need One in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Roof Certification</Button>
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

      <CTASection title="FHA/VA-Compliant Roof Certifications" subtitle="Best Roofing Now provides 2-5 year roof certifications for home sales, FHA/VA loans, refinancing, and insurance renewal. Bundled with free inspection report." />
    </>
  );
}
