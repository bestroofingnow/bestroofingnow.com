import { Metadata } from 'next';
import { Phone, FileCheck } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-do-i-get-a-roofing-permit-charlotte-nc`;
const QUESTION = 'How do I get a roofing permit in Charlotte NC?';
const ANSWER =
  "Charlotte NC roofing permits are issued by the City of Charlotte Code Enforcement Division for properties inside city limits, or by Mecklenburg County Land Use & Environmental Services Agency (LUESA) for unincorporated areas. Your licensed roofing contractor handles the entire permit process — homeowners almost never apply directly. Permit requirements: REQUIRED for all reroofs (full tear-off and replace), structural decking work, ventilation system changes, and any work involving load-bearing roof modifications. NOT REQUIRED for repairs under $1,500-$3,000 (varies by jurisdiction), shingle patching of less than 100 sq ft, gutter cleaning/repair, minor flashing repair. Permit cost: City of Charlotte residential reroof permit $150-$350 typical (varies by job value); Mecklenburg County unincorporated $125-$300; commercial reroof $300-$1,500+ (depends on building size and type). Process: (1) contractor obtains permit BEFORE work begins (2-5 business days for issuance); (2) work performed per NC IRC §R905 / §R806 / §R905.2.8.5 code requirements; (3) inspection scheduled when roof is 'dried-in' (underlayment installed but before shingles) — required for some jurisdictions; (4) FINAL INSPECTION after completion — inspector verifies code compliance; (5) permit closed in city/county records (important for future home sale documentation). Best Roofing Now handles all permitting for Charlotte NC reroofs at $0 homeowner labor.";

const followUpFAQs = [
  {
    question: 'Do I need a permit to reroof my Charlotte NC home?',
    answer:
      "Yes — Charlotte NC requires permits for all reroofs (full tear-off and replace) per City of Charlotte Code Enforcement and Mecklenburg County LUESA. Permit-required work includes: full reroof (tear-off and replace), partial reroof exceeding 100 sq ft, structural decking replacement, ventilation system installation/changes (ridge vent install, soffit vent retrofit), pitch changes, dormer modifications. Permit-NOT-required work: shingle repair under 100 sq ft, pipe boot replacement, single-flashing repair, gutter work, isolated leak repair. Penalty for unpermitted reroof: $500-$5,000 fine, required tear-off-and-redo at homeowner expense, complications during home sale (city records show no permit on file), homeowner insurance refusal of future claims if work was code non-compliant.",
  },
  {
    question: 'How much does a Charlotte NC roofing permit cost?',
    answer:
      "Charlotte NC roofing permit pricing varies by jurisdiction and project value: CITY OF CHARLOTTE residential reroof — $150-$350 (typical $200 for $15K-$25K reroof); CITY OF CHARLOTTE commercial reroof — $300-$1,500+ (based on building square footage); MECKLENBURG COUNTY (unincorporated) residential — $125-$300; UNION COUNTY (Indian Trail, Matthews, Stallings, Waxhaw) — $150-$400; CABARRUS COUNTY (Concord, Harrisburg, Kannapolis) — $150-$350; IREDELL COUNTY (Mooresville, Statesville) — $125-$300; LINCOLN COUNTY (Denver) — $100-$250. Permit cost is typically passed through on contractor estimate as separate line item. Best Roofing Now's Charlotte estimates show permit cost transparently — no hidden markup.",
  },
  {
    question: 'What happens during a Charlotte NC roof permit inspection?',
    answer:
      "Two-stage inspection process: (1) DRIED-IN INSPECTION (some jurisdictions, optional in others) — inspector visits after underlayment installed but BEFORE shingles to verify: synthetic underlayment installed, ice-and-water shield in valleys per NC IRC §R905.1.1, drip edge per NC IRC §R905.2.8.5, decking condition acceptable; (2) FINAL INSPECTION — inspector visits after completion to verify: shingles installed per manufacturer specifications, pipe boots properly sealed, chimney flashing/cricket per NC IRC §R1003.20 (if chimney >30 inches), ventilation per NC IRC §R806, ridge cap properly installed. Pass = permit closed and recorded in city/county database; Fail = corrective work + re-inspection ($50-$150 re-inspection fee). Best Roofing Now passes inspections on first attempt 99%+ of jobs.",
  },
  {
    question: 'Can my Charlotte NC reroof be done without a permit?',
    answer:
      "Strongly NOT recommended — unpermitted reroof creates 5 problems: (1) CITY/COUNTY FINES — $500-$5,000 penalty when discovered (typical during future home sale); (2) RIP-AND-REDO REQUIREMENT — code violation may require tear-off-and-replace at homeowner expense; (3) HOME SALE COMPLICATIONS — buyer's title search reveals no permit on file, may force homeowner to pay for retroactive permitting + inspection; (4) INSURANCE REFUSAL — carriers may refuse to cover future damage if discovered work was code non-compliant; (5) MANUFACTURER WARRANTY VOID — GAF/CertainTeed/OC require code-compliant install for warranty validity. Only work permit-exempt: minor repairs under 100 sq ft, single pipe boot replacement, gutter cleaning. Best Roofing Now NEVER performs reroofs without permit.",
  },
  {
    question: 'How long does it take to get a Charlotte NC roofing permit?',
    answer:
      "Charlotte NC permit issuance timeline: CITY OF CHARLOTTE residential reroof — 2-5 business days (online application via City portal); MECKLENBURG COUNTY residential — 2-5 business days; UNION/CABARRUS/IREDELL/LINCOLN counties — 3-7 business days (smaller offices, slower turnaround); EMERGENCY storm-damage permits — same-day or 24-hour expedited (most NC jurisdictions offer expedited storm permits during declared disaster events); COMMERCIAL reroof permits — 5-15 business days (additional plan review required). Best Roofing Now manages permitting timeline as part of project schedule — most Charlotte residential reroofs receive permits within the project lead time so install schedule isn't delayed.",
  },
];

export const metadata: Metadata = {
  title: 'How Do I Get a Roofing Permit in Charlotte NC?',
  description:
    "Charlotte NC roofing permits issued by City of Charlotte or Mecklenburg County. Required for all reroofs. Cost $125-$1,500+. Best Roofing Now handles permitting at $0 homeowner labor.",
  keywords: [
    'how to get roofing permit Charlotte NC',
    'Charlotte NC roof permit',
    'Mecklenburg County roof permit',
    'roof permit cost Charlotte',
    'NC roofing permit requirements',
    'roof permit inspection',
    'unpermitted roof penalty',
    'commercial roof permit Charlotte',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Do I Get a Roofing Permit in Charlotte NC?',
    description: 'Required for all reroofs. Best Roofing Now handles permitting.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowToGetRoofingPermitPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How to Get a Roofing Permit?', url: PAGE_URL }]} />
      <WebPageSchema name="How Do I Get a Roofing Permit in Charlotte NC?" description="Roofing permit guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roofing Permit?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Do I Get a Roofing Permit Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Charlotte NC permits issued by City of Charlotte or Mecklenburg County LUESA',
          'Licensed contractor handles entire permit process (homeowners do not apply)',
          'Required for all reroofs and structural work',
          'NOT required for minor repairs under 100 sq ft, pipe boot, gutter work',
          'City of Charlotte residential — $150-$350 typical',
          'Mecklenburg County unincorporated — $125-$300',
          'Issuance time — 2-5 business days residential, 5-15 days commercial',
          'Final inspection verifies NC IRC §R905 / §R806 / §R905.2.8.5 / §R1003.20 code compliance',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Roofing Permit?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <FileCheck className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roofing Permit Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Do I Get a Roofing Permit in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Estimate (Permit Included)</Button>
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

      <CTASection title="Permitting Included — $0 Homeowner Effort" subtitle="Best Roofing Now handles all Charlotte NC permitting through City of Charlotte and Mecklenburg County. Final inspection passing rate 99%+. NC IRC code compliant install guaranteed." />
    </>
  );
}
