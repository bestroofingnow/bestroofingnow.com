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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-gaf-master-elite-charlotte-nc`;
const QUESTION = 'What is GAF Master Elite and why does it matter for my Charlotte NC roof?';
const ANSWER =
  "GAF Master Elite is the highest-tier installer credential awarded by GAF (the largest U.S. roofing manufacturer), held by only the TOP 2% of roofing contractors nationwide. To qualify, contractors must: (1) maintain proper licensing and insurance in their state; (2) hold a verified BBB rating; (3) attend ongoing GAF training and certification courses; (4) demonstrate consistent quality installation history; (5) renew certification annually. For Charlotte NC homeowners, hiring a Master Elite contractor unlocks 4 EXCLUSIVE warranty benefits unavailable from non-certified installers: (1) GOLDEN PLEDGE warranty — 50-year non-prorated material + 25-year workmanship + 25-year tear-off coverage (vs 10 yr standard); (2) SILVER PLEDGE warranty — 50-year material + 10-year workmanship; (3) SYSTEM PLUS warranty — 50-year material + 10-year tear-off; (4) WIND coverage upgraded to 130 MPH (vs 110 MPH standard). Master Elite contractors install only GAF systems (Timberline HDZ, Camelot II, Glenwood, Grand Sequoia, etc.) — they cannot certify CertainTeed or Owens Corning installs. Best Roofing Now holds GAF Master Elite certification, providing Charlotte homeowners with the strongest available warranty protection. Other top-tier credentials: CertainTeed SELECT ShingleMaster, Owens Corning Platinum Preferred — covered separately.";

const followUpFAQs = [
  {
    question: 'How do I verify a Charlotte NC contractor is GAF Master Elite?',
    answer:
      "Two verification methods: (1) GAF official website — visit gaf.com/roofing-contractor-search and enter contractor name + Charlotte NC zip; certified Master Elite contractors appear with 'Master Elite' badge prominently displayed on their listing; (2) request contractor's GAF Certification ID number — every Master Elite contractor has a unique ID that GAF can verify by phone (1-800-GAF-ROOF). Red flags: contractor claims 'Master Elite' but cannot provide ID, contractor not listed on GAF site, contractor lists multiple manufacturers as 'master certified' (each manufacturer has separate certification), business name doesn't match GAF listing exactly. Best Roofing Now's GAF Master Elite certification is verifiable on gaf.com.",
  },
  {
    question: 'What\'s the difference between GAF Master Elite and standard GAF contractors?',
    answer:
      "Three certification tiers from GAF: (1) STANDARD GAF DEALER — purchases GAF materials, no special certification, can offer only basic 10-25 yr standard warranty; (2) GAF CERTIFIED — passed basic GAF training, can offer System Plus (50/10/0 warranty); (3) GAF MASTER ELITE (top 2% nationally) — passed all GAF certifications + state license + insurance + BBB rating + annual renewal, can offer Golden Pledge (50/25/25 warranty), Silver Pledge (50/10), and System Plus. The Golden Pledge warranty is exclusively available from Master Elite contractors and is the strongest residential roofing warranty in North America. Charlotte homeowners benefit significantly from choosing Master Elite over standard installers.",
  },
  {
    question: 'What does the GAF Golden Pledge warranty actually cover in Charlotte NC?',
    answer:
      "GAF Golden Pledge (Master Elite exclusive) covers: (1) 50-year NON-PRORATED material defect coverage on all shingles AND accessories (Tiger Paw underlayment, StormGuard ice/water shield, Timbertex ridge cap, Cobra ridge vent, Pro-Start starter strip); (2) 25-YEAR workmanship coverage for installation defects (typical only 1-5 yr from non-certified contractors); (3) 25-YEAR tear-off and disposal coverage (rare elsewhere); (4) 130 MPH wind coverage (vs 110 standard); (5) 100% transferable to new homeowner once within first 20 years (preserves resale value). Real-world scenario: if a major shingle defect appears at year 15, GAF replaces material at NO COST to homeowner AND covers labor (workmanship coverage) AND covers tear-off — total saving $15,000-$25,000 vs standard warranty.",
  },
  {
    question: 'Is GAF Master Elite worth the premium price in Charlotte NC?',
    answer:
      "Generally yes — Master Elite contractor pricing is typically 5-15% above non-certified Charlotte installers. Value math: Master Elite premium on $20,000 reroof = $1,000-$3,000 added cost. Warranty value comparison: Golden Pledge potentially saves $15,000-$25,000 if catastrophic shingle defect occurs (industry data shows 3-7% of all asphalt shingle batches eventually develop manufacturer defects requiring claim). Even without defect claim, 25-year workmanship warranty alone is worth $5,000-$15,000 vs standard 1-5 yr coverage. ROI: nearly any defect or premature install issue pays back the premium 5-25x. Best for: long-term homeowners (10+ yr planned residence) where warranty value compounds; less critical for short-term flip homes (5-yr or less ownership).",
  },
  {
    question: 'Can a GAF Master Elite contractor install non-GAF roofing in Charlotte?',
    answer:
      "Yes — GAF Master Elite certification is GAF-specific but contractors are not contractually limited to only installing GAF. Most Master Elite contractors (including Best Roofing Now) also install: CertainTeed (often holding parallel SELECT ShingleMaster certification), Owens Corning (often holding Platinum Preferred), Atlas, IKO, Tamko, and metal/specialty systems. Important: GAF Golden Pledge / Silver Pledge / System Plus warranties only apply to GAF systems installed by Master Elite contractor. If you choose CertainTeed installed by Best Roofing Now, you receive CertainTeed's SELECT ShingleMaster warranty (4-Star or 5-Star Integrity Roof System) — different but equivalent strong warranty. Always confirm warranty matches your chosen system.",
  },
];

export const metadata: Metadata = {
  title: 'What Is GAF Master Elite and Why Does It Matter for My Charlotte NC Roof?',
  description:
    "GAF Master Elite = top 2% of US roofing contractors. Charlotte NC exclusive Golden Pledge warranty (50 yr material + 25 yr workmanship + 25 yr tear-off + 130 MPH wind). Best Roofing Now certified.",
  keywords: [
    'what is GAF Master Elite Charlotte NC',
    'GAF Master Elite contractor Charlotte',
    'GAF Golden Pledge warranty',
    'top 2% GAF contractor',
    'GAF certified roofer Charlotte',
    'GAF Master Elite verification',
    'best GAF contractor NC',
    'GAF warranty tiers',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is GAF Master Elite and Why Does It Matter for My Charlotte NC Roof?',
    description: 'Top 2% of US roofing contractors. Exclusive Golden Pledge 50/25/25 warranty.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsGAFMasterElitePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is GAF Master Elite?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is GAF Master Elite and Why Does It Matter for My Charlotte NC Roof?" description="GAF Master Elite certification guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'GAF Master Elite?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is GAF Master Elite Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'GAF Master Elite — highest-tier credential, top 2% of US contractors',
          'Required — proper licensing, insurance, BBB rating, ongoing training, annual renewal',
          'Exclusive Golden Pledge warranty — 50/25/25 (material/workmanship/tear-off)',
          'Wind coverage upgraded to 130 MPH (vs 110 standard)',
          '100% transferable to new homeowner once within first 20 years',
          'Verify on gaf.com/roofing-contractor-search',
          'Premium pricing 5-15% above non-certified — pays back 5-25x via warranty value',
          'Best Roofing Now is GAF Master Elite certified',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'GAF Master Elite?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC GAF Master Elite Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is GAF Master Elite and Why Does It Matter for My Charlotte NC Roof?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Master Elite Quote</Button>
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

      <CTASection title="GAF Golden Pledge Warranty Available" subtitle="Best Roofing Now is GAF Master Elite certified — top 2% of US contractors. Exclusive 50/25/25 Golden Pledge warranty available on every GAF reroof. Free written estimate." />
    </>
  );
}
