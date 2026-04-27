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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-an-ndl-warranty-charlotte-nc`;
const QUESTION = 'What is an NDL warranty and why is it important for Charlotte NC commercial roofs?';
const ANSWER =
  "An NDL (No Dollar Limit) warranty is the strongest commercial roofing warranty available, covering BOTH materials AND labor for full repair regardless of the cost — no maximum dollar cap. Standard commercial warranties typically cap repair coverage at the original installation cost, which is essentially worthless 15-25 years later when materials and labor have inflated. NDL warranties are issued by major manufacturers (Carlisle SynTec, Firestone Building Products, GAF Commercial, CertainTeed Commercial, Versico, Johns Manville) for 5-30 year terms (most common 15-20 years) on commercial single-ply membrane systems (TPO, EPDM, PVC, modified bitumen). Charlotte NC NDL eligibility requirements: (1) MANUFACTURER-CERTIFIED INSTALLER (Best Roofing Now is certified for Carlisle, Firestone, GAF Commercial, CertainTeed Commercial); (2) MANUFACTURER-SPECIFIED MEMBRANE thickness (typically 60-mil minimum for NDL); (3) FULL SYSTEM install (membrane + insulation + accessories all from same manufacturer); (4) THIRD-PARTY INSPECTION by manufacturer's tech rep at install; (5) ANNUAL MAINTENANCE inspection during warranty period. NDL premium: typically $0.50-$1.50/sq ft over standard warranty (e.g., $10,000-$30,000 added on 20,000 sq ft commercial reroof). Real-world value: typical NDL claim covers $20,000-$200,000 in repairs over warranty period — far exceeding upfront premium.";

const followUpFAQs = [
  {
    question: 'What does NDL warranty actually cover in Charlotte NC?',
    answer:
      "NDL coverage scope: COVERED — material defects (membrane delamination, accelerated aging), workmanship defects (failed seams, inadequate flashing), labor for repair (all manufacturer-required labor regardless of cost), system component failures (membrane, insulation, fasteners, adhesives, accessories from same manufacturer), wind damage up to manufacturer-rated speed (typically 90-110 MPH residential, 130 MPH commercial wind upgrade). NOT COVERED — homeowner-caused damage (foot traffic damage, equipment installation), acts of God beyond rated wind speed (severe tornadoes, hurricanes exceeding 110 MPH), code-required upgrades during repair (separate cost), maintenance items (cleaning, debris removal). KEY: NDL covers REPAIR not replacement — if damage exceeds repair feasibility, system replacement is owner responsibility.",
  },
  {
    question: 'How much does NDL warranty add to Charlotte NC commercial roof cost?',
    answer:
      "Charlotte NC NDL warranty premium pricing: 60-MIL TPO with 15-yr NDL — adds $0.50-$1.00/sq ft over standard 60-mil TPO with manufacturer warranty (e.g., $10,000-$20,000 added on 20,000 sq ft); 60-MIL TPO with 20-yr NDL — adds $0.75-$1.50/sq ft (e.g., $15,000-$30,000 added); 80-MIL TPO with 25-yr NDL — adds $1.00-$2.00/sq ft (premium upgrade); EPDM 60-mil with 20-yr NDL — adds $0.50-$1.25/sq ft; PVC 60-mil with 20-yr NDL — adds $0.75-$1.50/sq ft. ROI math: typical Charlotte commercial roof requires $15,000-$50,000 in repairs over 15-20 year period; NDL covers all of these without owner cost. Premium pays back many times over.",
  },
  {
    question: 'Can I get NDL warranty as a small Charlotte NC business owner?',
    answer:
      "Yes — NDL warranties available for buildings as small as 5,000 sq ft (some manufacturers offer NDL on smaller buildings down to 2,500 sq ft). Cost-benefit by building size: SMALL BUILDING 5,000-10,000 sq ft — NDL premium $5,000-$15,000, typical lifetime savings $10,000-$30,000 (positive ROI but moderate); MEDIUM 10,000-25,000 sq ft — NDL premium $10,000-$40,000, lifetime savings $25,000-$80,000 (strong ROI); LARGE 25,000+ sq ft — NDL premium $25,000-$100,000+, lifetime savings $75,000-$300,000+ (excellent ROI). Best Roofing Now's free commercial assessment includes NDL pricing for your specific building.",
  },
  {
    question: 'What\'s the difference between NDL warranty and standard manufacturer warranty in Charlotte?',
    answer:
      "STANDARD MANUFACTURER WARRANTY — covers material defects only, owner pays for labor to repair, dollar cap typically equals original install cost (becomes worthless over time as materials/labor inflate), no third-party verification required. NDL WARRANTY — covers BOTH material AND labor, no dollar cap (covers full repair cost regardless), requires manufacturer-certified installer + third-party inspection + annual maintenance. Real-world example: 15-year-old commercial roof with $30,000 hail damage — Standard warranty: covers $5,000-$10,000 in materials, owner pays $20,000-$25,000 labor; NDL warranty: covers full $30,000 repair, owner pays $0 (just maintenance fees during warranty period). NDL is dramatically better protection — recommended for all Charlotte commercial reroofs.",
  },
  {
    question: 'How do I maintain my NDL warranty in Charlotte NC?',
    answer:
      "NDL maintenance requirements (varies by manufacturer): (1) ANNUAL INSPECTION by manufacturer-certified contractor (Best Roofing Now provides annual NDL inspections for $0.05-$0.15/sq ft per visit); (2) DOCUMENTED REPAIRS using only manufacturer-approved materials and methods; (3) MAINTAIN CLEAR DRAINAGE — no debris accumulation in scuppers/drains (warranty void if drainage failure causes damage); (4) NO UNAUTHORIZED MODIFICATIONS — equipment installs require manufacturer-approval; (5) IMMEDIATE LEAK NOTIFICATION — report any leaks within 30 days (warranty may void if delayed reporting causes additional damage); (6) ANNUAL MAINTENANCE LOG submission to manufacturer (Best Roofing Now handles this paperwork). Average annual maintenance cost: $1,000-$5,000 per Charlotte commercial building — small price for NDL coverage value.",
  },
];

export const metadata: Metadata = {
  title: 'What Is an NDL Warranty and Why Is It Important for Commercial Roofs?',
  description:
    "NDL (No Dollar Limit) warranty = strongest commercial roofing warranty. Covers material AND labor with no cost cap. 5-30 yr terms. Premium $0.50-$2/sq ft. Far exceeds upfront cost.",
  keywords: [
    'what is NDL warranty Charlotte NC',
    'No Dollar Limit warranty',
    'commercial roof NDL Charlotte',
    'Carlisle NDL warranty',
    'Firestone NDL warranty',
    'GAF Commercial NDL',
    'NDL vs standard warranty',
    'commercial roof warranty NC',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is an NDL Warranty and Why Is It Important for Commercial Roofs?',
    description: 'Strongest commercial warranty. Covers material AND labor.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsNDLWarrantyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is NDL Warranty?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is an NDL Warranty and Why Is It Important for Commercial Roofs?" description="NDL warranty guide for Charlotte NC commercial buildings." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'NDL Warranty?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is an NDL Warranty Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'NDL — No Dollar Limit warranty, strongest commercial roofing coverage',
          'Covers BOTH materials AND labor with no cost cap',
          '5-30 year terms (most common 15-20 yr)',
          'Major manufacturers — Carlisle SynTec, Firestone, GAF Commercial, CertainTeed, Versico, Johns Manville',
          'Requires manufacturer-certified installer + 3rd-party inspection + annual maintenance',
          'Covers TPO, EPDM, PVC, modified bitumen single-ply systems',
          'NDL premium $0.50-$2/sq ft over standard warranty',
          'Lifetime claim value typically 5-10x premium cost',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'NDL Warranty?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Commercial NDL Warranty Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is an NDL Warranty and Why Is It Important for Charlotte NC Commercial Roofs?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free NDL Pricing</Button>
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

      <CTASection title="NDL Warranties from 5 Authorized Manufacturers" subtitle="Best Roofing Now is Carlisle SynTec, Firestone, GAF Commercial, CertainTeed Commercial, Versico certified. NDL pricing on every commercial reroof. Annual maintenance program included." />
    </>
  );
}
