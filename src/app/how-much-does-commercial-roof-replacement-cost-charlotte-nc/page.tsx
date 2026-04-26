import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, DollarSign, ArrowRight } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-much-does-commercial-roof-replacement-cost-charlotte-nc`;
const QUESTION = 'How much does a commercial roof replacement cost in Charlotte NC?';
const ANSWER =
  "Commercial roof replacement in Charlotte NC costs $4-$30 per sq ft installed depending on system. For a typical 20,000 sq ft commercial building: silicone restoration coating $40,000-$100,000 (extends existing roof 10-15 yr, defers full capex), EPDM rubber single-ply $80,000-$200,000, TPO single-ply $100,000-$240,000 (most popular new install with 20-30 yr NDL warranty), modified bitumen $120,000-$240,000, built-up tar-and-gravel $100,000-$200,000, PVC single-ply $140,000-$280,000 (chemical/grease resistance for restaurants/manufacturing), standing seam metal $180,000-$600,000+ (50+ yr lifespan). Best Roofing Now is authorized for Carlisle Sure-Weld, Johns Manville, Firestone-Holcim, GAF EverGuard, and Mule-Hide commercial systems with 15-30 year NDL (no-dollar-limit) warranties. Free written commercial estimates with itemized line items including system, insulation R-value, attachment method, edge metal, and warranty options. Most commercial estimates take 5-7 business days to deliver due to infrared moisture survey requirements.";

const followUpFAQs = [
  {
    question: 'What factors most affect commercial roof replacement cost in Charlotte?',
    answer:
      "Six main cost factors: (1) system choice — TPO 60-mil baseline, others scale up/down; (2) attachment method — mechanically attached (cheapest), fully adhered (mid), ballasted (highest); (3) insulation R-value — current NC commercial energy code typically requires R-25 to R-30; (4) edge metal — stock vs custom-bent profiles for parapets and drip; (5) tear-off vs overlay — tear-off doubles the labor; (6) HVAC penetrations and complexity — drains, scuppers, conduit, equipment curbs. Best Roofing Now's commercial estimate isolates each factor so you can value-engineer the project.",
  },
  {
    question: 'Can I just coat my existing commercial roof instead of replacing?',
    answer:
      "Often yes — silicone or acrylic restoration coatings extend existing TPO, EPDM, modified bitumen, or metal roofs 10-15 years at $2-$5 per sq ft (vs $5-$30 per sq ft for full replacement). The roof must be: (1) structurally sound (no saturated insulation — verified by infrared moisture survey); (2) under 25 years old; (3) free of major delamination or membrane failure; (4) acceptable to insurance carrier as a 'maintenance expense' for tax treatment. Coatings preserve manufacturer warranty (when applied per spec), defer capital expenditure, and qualify for Duke Energy commercial rebates.",
  },
  {
    question: 'How long does a commercial roof replacement take in Charlotte NC?',
    answer:
      "Typical 20,000 sq ft commercial reroof: 7-14 days for single-ply systems (TPO/EPDM/PVC), 14-21 days for built-up or modified bitumen, 21-35 days for standing-seam metal. We deploy 8-12 person crews for commercial projects. Tenant disruption is minimized through: phased work (zone-by-zone if needed), off-hours options (weekends, evenings), pre-coordinated parking and dumpster placement, daily progress communication with property managers, and silent crew protocols where required.",
  },
  {
    question: 'Does Best Roofing Now provide commercial NDL warranties?',
    answer:
      "Yes — we are authorized commercial installers for Carlisle Sure-Weld (20-30 yr NDL), Johns Manville JM TPO/EPDM (20-yr NDL), Firestone-Holcim RubberGard (20-30 yr NDL), GAF EverGuard (20-30 yr NDL), and Mule-Hide (15-20 yr NDL warranties). Authorized installer status is REQUIRED to issue manufacturer NDL warranties — non-authorized contractors can install the same materials but cannot offer the long-term coverage. NDL means 'no dollar limit' — full replacement coverage with no aggregate cap.",
  },
  {
    question: 'How do commercial roof insurance claims work in Charlotte?',
    answer:
      "Commercial roof claims after wind/hail/storm events follow a different process than residential: (1) drone and ground photo documentation of all damage; (2) Xactimate-format estimates with line items adjusters recognize; (3) coordination with property managers and building owners separately when insurance has multiple-party interests; (4) NDL warranty preservation during repairs; (5) supplemental filing for missed damage. Best Roofing Now works with all major commercial carriers including The Hartford, Liberty Mutual Commercial, Travelers, Nationwide, and Zurich. Building owner typically pays only the deductible.",
  },
];

export const metadata: Metadata = {
  title: 'How Much Does a Commercial Roof Replacement Cost in Charlotte NC?',
  description:
    "Commercial roof replacement Charlotte NC: $4-$30/sq ft. 20K sq ft building: $40K coating, $80-200K EPDM, $100-240K TPO, $180-600K standing-seam metal. NDL warranties 15-30 yr.",
  keywords: [
    'commercial roof replacement cost Charlotte NC',
    'commercial roofing cost',
    'TPO replacement cost',
    'flat roof replacement cost commercial',
    'warehouse roof cost',
    'office roof replacement Charlotte',
    'commercial roof estimate',
    'NDL warranty commercial roof',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Much Does a Commercial Roof Replacement Cost in Charlotte NC?',
    description: '$4-$30/sq ft by system. 20K sq ft building: $40K-$600K range.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowMuchCommercialRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Commercial Roof Cost?', url: PAGE_URL }]} />
      <WebPageSchema name="How Much Does a Commercial Roof Replacement Cost in Charlotte NC?" description="Commercial roof replacement cost guide for Charlotte NC." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Commercial Roof Cost?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Much Does Commercial Roof Replacement Cost Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Silicone restoration coating — $2-$5/sq ft ($40K for 20K sq ft building)',
          'EPDM rubber single-ply — $4-$10/sq ft ($80-$200K for 20K sq ft)',
          'TPO single-ply — $5-$12/sq ft ($100-$240K for 20K sq ft, most popular)',
          'Modified bitumen — $6-$12/sq ft ($120-$240K for 20K sq ft)',
          'Built-up tar-and-gravel — $5-$10/sq ft ($100-$200K for 20K sq ft)',
          'PVC single-ply — $7-$14/sq ft ($140-$280K for 20K sq ft)',
          'Standing seam metal — $9-$30+/sq ft ($180-$600K+ for 20K sq ft)',
          'NDL warranties 15-30 yr from Carlisle, JM, Firestone-Holcim, GAF, Mule-Hide',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Commercial Roof Cost?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Commercial Pricing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Much Does a Commercial Roof Replacement Cost in Charlotte NC?</h1>
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

      <CTASection title="Free Commercial Roof Estimate" subtitle="Itemized line items, infrared moisture survey on existing systems, NDL warranty options 15-30 years from authorized manufacturers." />
    </>
  );
}
