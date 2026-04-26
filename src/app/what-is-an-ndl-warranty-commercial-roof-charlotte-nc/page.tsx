import { Metadata } from 'next';
import { Phone, Shield } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-an-ndl-warranty-commercial-roof-charlotte-nc`;
const QUESTION = 'What is an NDL warranty on a commercial roof in Charlotte NC?';
const ANSWER =
  "An NDL (No Dollar Limit) warranty on a commercial roof in Charlotte NC is a manufacturer warranty with NO aggregate cap on covered repair or replacement costs over the warranty term — meaning the manufacturer covers 100% of the warranted defect repair costs regardless of total dollar amount, up to the warranty length (typically 15-30 years). This contrasts with limited warranties that cap total payouts at a fixed dollar amount or prorate value over time. NDL warranties are available ONLY through authorized commercial installers (Best Roofing Now is authorized for Carlisle Sure-Weld, Johns Manville, Firestone-Holcim, GAF EverGuard, and Mule-Hide). Coverage typically includes: membrane defects, seam integrity, manufacturer-spec accessories (insulation, fasteners, edge metal), and labor for warranty claims. Coverage typically excludes: workmanship by non-authorized contractors, ponding water beyond design tolerance, chemical exposure beyond spec, vandalism, and normal wear. NDL warranty is the gold standard for commercial roofing — building owners should never accept a non-NDL warranty on a commercial reroof from an authorized installer.";

const followUpFAQs = [
  {
    question: 'Which commercial roof manufacturers offer NDL warranties in Charlotte?',
    answer:
      "Five major commercial roof manufacturers offer NDL warranties through Best Roofing Now (authorized installer for all 5): Carlisle Sure-Weld 20-30 yr NDL (industry-leading wind warranty), Johns Manville JM TPO/EPDM 20-yr NDL (PVKEE topcoat option for chemical exposure), Firestone-Holcim RubberGard / UltraPly 20-30 yr NDL (QuickSeam splice tape for monolithic seams), GAF EverGuard 20-30 yr NDL (Energy Guard ISO insulation system), Mule-Hide 15-20 yr (cost-competitive entry tier).",
  },
  {
    question: 'How is NDL different from limited or prorated commercial warranties?',
    answer:
      "Three warranty tiers in commercial roofing: (1) NDL (No Dollar Limit) — manufacturer covers 100% of warranted defect costs over term length, no aggregate cap; (2) Limited NDL — covers 100% of costs but caps at original system value (often equivalent in practice); (3) Limited Prorated — coverage decreases over time (e.g., 100% years 1-5, 75% years 5-10, 50% years 10-15). NDL is the strongest — many commercial property insurance carriers and SBA lenders REQUIRE NDL coverage. Limited prorated warranties leave building owners exposed to large out-of-pocket costs as the warranty ages.",
  },
  {
    question: 'What does an NDL warranty NOT cover?',
    answer:
      "Standard NDL exclusions: (1) workmanship by non-authorized contractors (any post-install work voids coverage if done by unauthorized installer); (2) ponding water beyond design tolerance (most warranties allow 24-48 hour ponding, beyond that the system must be drainage-corrected); (3) chemical exposure beyond manufacturer spec (cleaning chemicals, kitchen grease without PVKEE topcoat); (4) vandalism, fire, falling objects (covered by property insurance not warranty); (5) lack of regular professional maintenance (most warranties require documented annual or bi-annual maintenance); (6) modifications without manufacturer notification (HVAC additions, solar mounts, satellite dishes).",
  },
  {
    question: 'How long does the NDL warranty registration take?',
    answer:
      "Typical NDL warranty registration timeline: (1) install completed and final inspection passes; (2) Best Roofing Now submits warranty registration packet to manufacturer (typically 2-3 business days); (3) manufacturer issues warranty certificate within 14-30 days; (4) certificate is delivered to building owner via email and printed copy. The warranty is effective from install completion date, not registration date. Building owners should keep the warranty certificate with property records and provide a copy to insurance carrier and any commercial mortgage lender.",
  },
  {
    question: 'Can I transfer my commercial NDL warranty when selling the building?',
    answer:
      "Yes — most commercial NDL warranties are transferable to the new building owner with manufacturer notification. Process: (1) seller submits transfer request to manufacturer typically within 30-60 days of property closing; (2) manufacturer verifies the building roof has been maintained per warranty requirements (annual inspection records); (3) transfer fee applies ($250-$1,500 typical depending on manufacturer); (4) new warranty certificate issued in new owner's name. Transferable NDL coverage adds 5-10% to commercial property appraisal value because it reduces buyer risk on a major building system.",
  },
];

export const metadata: Metadata = {
  title: 'What Is an NDL Warranty on a Commercial Roof in Charlotte NC?',
  description:
    "NDL (No Dollar Limit) warranty: manufacturer covers 100% of warranted commercial roof defect costs over 15-30 yr term, no aggregate cap. Required for SBA loans and most insurance.",
  keywords: [
    'NDL warranty commercial roof Charlotte NC',
    'no dollar limit warranty',
    'commercial roof warranty types',
    'Carlisle Sure-Weld NDL',
    'JM TPO warranty',
    'GAF EverGuard NDL',
    'commercial warranty transfer',
    'TPO EPDM warranty Charlotte',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is an NDL Warranty on a Commercial Roof in Charlotte NC?',
    description: 'Manufacturer covers 100% of defect costs over 15-30 yr term, no cap.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsNDLWarrantyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is an NDL Warranty?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is an NDL Warranty on a Commercial Roof in Charlotte NC?" description="NDL commercial roof warranty explained for Charlotte NC building owners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'NDL Warranty?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is an NDL Warranty Commercial Roof Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'NDL = No Dollar Limit — no aggregate cap on covered defect costs',
          'Term length typically 15-30 years',
          'Available only through authorized commercial installers',
          'Carlisle Sure-Weld 20-30 yr NDL — industry-leading wind warranty',
          'Johns Manville JM 20-yr NDL — PVKEE topcoat for chemical exposure',
          'Firestone-Holcim RubberGard 20-30 yr NDL — QuickSeam tape',
          'GAF EverGuard 20-30 yr NDL — Energy Guard ISO insulation',
          'Mule-Hide 15-20 yr NDL — cost-competitive entry tier',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'NDL Warranty?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Commercial Warranty Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is an NDL Warranty on a Commercial Roof in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Commercial Estimate</Button>
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

      <CTASection title="NDL Warranties on Every Commercial Install" subtitle="Authorized installer for Carlisle, JM, Firestone-Holcim, GAF, Mule-Hide. 15-30 year NDL coverage on all commercial reroofs." />
    </>
  );
}
