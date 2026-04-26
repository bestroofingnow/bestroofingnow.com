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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-roof-inspection-report-charlotte-nc`;
const QUESTION = 'What is a roof inspection report and what should it include in Charlotte NC?';
const ANSWER =
  "A roof inspection report is the written documentation of a professional roof assessment, typically including 8 essential sections: (1) PROPERTY IDENTIFICATION — address, date of inspection, inspector name/credentials, weather conditions; (2) ROOF SPECIFICATIONS — material type (asphalt shingle, metal, tile), measured square footage and pitch, roof age (estimated), number of roof sections/slopes; (3) STRUCTURAL ASSESSMENT — decking condition, rafter/truss visual assessment from attic, sagging or deformation notes; (4) MATERIAL CONDITION — shingle wear (granule loss, curling, lifting), missing/damaged sections, color-matched repairs visible; (5) FLASHING & PENETRATIONS — chimney flashing, pipe boots, skylight perimeters, valley flashing, drip edge presence; (6) VENTILATION — attic ventilation type and adequacy per NC IRC §R806, intake/exhaust balance; (7) PHOTO DOCUMENTATION — typically 30-100+ photos covering all roof sections, defects, and reference shots; (8) RECOMMENDATIONS — repair-vs-replace recommendation with line-item cost estimates. Charlotte NC inspection report uses: home sale documentation (FHA/VA loans require), insurance claim filing, contractor bid comparison, future maintenance planning. Cost: standalone roof inspection $150-$450 (paid by homebuyer); FREE with Best Roofing Now's reroof estimate (no obligation). Always request WRITTEN report — verbal inspection has no legal documentation value.";

const followUpFAQs = [
  {
    question: 'How long does a Charlotte NC roof inspection take?',
    answer:
      "Charlotte NC roof inspection duration: BASIC visual ground/ladder assessment — 30-45 minutes (limited to visible exterior); STANDARD inspection (Best Roofing Now's free service) — 30-60 minutes (combination of ground, drone, ladder, and attic assessment with photo documentation); INFRARED THERMAL inspection (premium) — 60-90 minutes (uses thermal camera to detect hidden moisture inside walls/ceilings); 4-POINT INSPECTION (insurance/lender required) — 90-120 minutes (covers roof + electrical + plumbing + HVAC); HAIL DAMAGE forensic inspection — 90-180 minutes (detailed measurement and documentation for insurance claim). Most Charlotte residential inspections complete in 60 minutes with full report delivered within 24-48 hours.",
  },
  {
    question: 'How much does a roof inspection cost in Charlotte NC?',
    answer:
      "Charlotte NC roof inspection pricing: STANDALONE basic inspection $150-$300 (visual ground/ladder, basic written report); STANDALONE comprehensive inspection $250-$450 (drone, attic, full photo documentation, written report with cost estimates); INFRARED THERMAL inspection $300-$650 (thermal moisture detection); 4-POINT INSPECTION (insurance/lender) $200-$500 (roof + electrical + plumbing + HVAC); HAIL DAMAGE FORENSIC inspection $300-$800 (detailed for insurance claim). FREE INSPECTIONS — most quality Charlotte roofing contractors (including Best Roofing Now) offer free inspection with no obligation if you're considering reroof or repair (estimate provided, decision yours). Free inspection equivalent to $250-$450 paid service.",
  },
  {
    question: 'When do I need a roof inspection in Charlotte NC?',
    answer:
      "Six situations requiring roof inspection: (1) HOME PURCHASE — pre-purchase inspection identifies condition issues to negotiate price (recommended even if home inspector inspected roof); (2) HOME SALE — pre-listing inspection documents condition for buyer confidence and FHA/VA loan compliance; (3) STORM EVENT — within 1-2 weeks after major hail or wind storm to document damage for insurance claim; (4) ANNUAL MAINTENANCE — homes 10+ years old benefit from annual professional inspection (catches small issues before failure); (5) INSURANCE RENEWAL — some carriers require inspection certification for roofs over 15-20 years old; (6) PRE-FINANCING — refinance, HELOC, FHA Title I home improvement loan often require roof certification. Best Roofing Now's free inspection covers most needs.",
  },
  {
    question: 'What\'s the difference between a roofer\'s inspection and a home inspector\'s inspection?',
    answer:
      "ROOFER INSPECTION (Best Roofing Now's free service) — performed by roofing professional with material-specific expertise, identifies repair-vs-replace economics, provides accurate cost estimates, knows manufacturer warranty implications, can identify subtle wear patterns. Better for: actionable maintenance/repair decisions. HOME INSPECTOR INSPECTION — performed by general home inspector during home purchase, covers entire home (roof is one of 10-15 sections), uses general visual assessment without specialty roofing knowledge, typically NO cost estimates. Better for: overall home condition during purchase. RECOMMENDATION: get BOTH for home purchase — home inspector for general condition + roofer for detailed roof-specific assessment with cost estimates.",
  },
  {
    question: 'Should I save my Charlotte NC roof inspection reports?',
    answer:
      "Yes — keep all roof inspection reports indefinitely for 5 reasons: (1) WARRANTY DOCUMENTATION — manufacturer warranties (GAF, CertainTeed, OC) often require maintenance records for claim approval; (2) INSURANCE CLAIMS — pre-storm inspection documents condition before claim event; (3) HOME SALE — provides documentation to buyers, supports asking price; (4) MAINTENANCE TRACKING — compare year-over-year condition changes (granule loss progression, flashing degradation); (5) CONTRACTOR ACCOUNTABILITY — written records hold installers accountable for warranty workmanship. Storage: digital PDF in cloud (Dropbox, Google Drive, Apple iCloud) plus printed copy in home file. Best Roofing Now provides PDF reports plus 5-year archive of all inspection records on customer portal.",
  },
];

export const metadata: Metadata = {
  title: 'What Is a Roof Inspection Report and What Should It Include in Charlotte NC?',
  description:
    "Charlotte NC roof inspection report: 8 sections (property ID, specs, structure, material, flashing, ventilation, 30-100+ photos, recommendations). Cost $150-$650 or FREE with Best Roofing Now.",
  keywords: [
    'what is a roof inspection report Charlotte NC',
    'Charlotte roof inspection cost',
    'free roof inspection Charlotte',
    '4-point inspection NC',
    'roof inspection home purchase',
    'infrared roof inspection',
    'hail damage forensic inspection',
    'roof inspection report sample',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is a Roof Inspection Report and What Should It Include in Charlotte NC?',
    description: '8 essential sections. Cost $150-$650 or FREE with reroof estimate.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsRoofInspectionReportPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is a Roof Inspection Report?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is a Roof Inspection Report and What Should It Include in Charlotte NC?" description="Roof inspection report guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Inspection Report?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is a Roof Inspection Report Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Section 1 — property ID, date, inspector credentials, weather',
          'Section 2 — roof specifications (material, square footage, pitch, age)',
          'Section 3 — structural assessment (decking, rafters, sagging)',
          'Section 4 — material condition (shingle wear, missing pieces, repairs)',
          'Section 5 — flashing and penetrations (chimney, pipe boots, valleys)',
          'Section 6 — ventilation (NC IRC §R806 compliance)',
          'Section 7 — photo documentation (30-100+ photos)',
          'Section 8 — recommendations with line-item cost estimates',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Inspection Report?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <FileText className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Inspection Report Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is a Roof Inspection Report and What Should It Include in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Inspection Report</Button>
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

      <CTASection title="Free Comprehensive Roof Inspection Report" subtitle="Best Roofing Now's free inspection delivers $250-$450 equivalent value: drone, attic, infrared, 30+ photos, written report, line-item estimates. No obligation." />
    </>
  );
}
