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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-owens-corning-platinum-preferred-charlotte-nc`;
const QUESTION = 'What is Owens Corning Platinum Preferred and why does it matter for my Charlotte NC roof?';
const ANSWER =
  "Owens Corning Platinum Preferred is the highest-tier installer credential awarded by Owens Corning (a major U.S. roofing manufacturer best known for the Pink Panther brand and Duration shingle line), held by approximately the top 1% of OC contractors nationwide. To qualify, contractors must: (1) maintain proper licensing and insurance; (2) hold strong BBB rating; (3) complete OC Total Protection Roofing System training; (4) demonstrate 5+ years installation experience; (5) maintain customer satisfaction ratings; (6) renew certification annually. For Charlotte NC homeowners, hiring a Platinum Preferred contractor unlocks 4 EXCLUSIVE warranty benefits: (1) PLATINUM Protection Warranty — 50-year non-prorated material + lifetime workmanship + lifetime tear-off (the strongest OC warranty); (2) PREFERRED Protection Warranty — 50-year material + 10-year workmanship; (3) STANDARD Protection — 30-50 year material only; (4) WIND coverage upgraded to 130 MPH (vs 110 standard). Platinum Preferred contractors install Owens Corning systems exclusively for OC warranty purposes (TruDefinition Duration, Duration FLEX, Duration STORM, Duration MAX, Duration Premium COOL, Berkshire Collection luxury) — they cannot certify GAF or CertainTeed installs. Best Roofing Now holds Owens Corning Platinum Preferred certification alongside GAF Master Elite and CertainTeed SELECT ShingleMaster, providing Charlotte homeowners with the strongest available warranty regardless of shingle brand.";

const followUpFAQs = [
  {
    question: 'How do I verify a Charlotte NC contractor is Owens Corning Platinum Preferred?',
    answer:
      "Two verification methods: (1) Owens Corning official website — visit owenscorning.com/roofing/contractor-locator and enter contractor name + Charlotte NC zip; Platinum Preferred contractors appear with the 'Platinum Preferred' badge; (2) request contractor's OC Certification ID number — every Platinum Preferred contractor has a unique ID that OC verifies by phone (1-800-GET-PINK). Red flags: contractor claims 'Platinum' but cannot provide ID, contractor not listed on owenscorning.com, contractor lists 'OC certified' but not specifically 'Platinum Preferred'. Best Roofing Now's Owens Corning Platinum Preferred certification is verifiable on owenscorning.com.",
  },
  {
    question: 'What\'s the difference between Owens Corning certification tiers?',
    answer:
      "Three OC certification tiers: (1) STANDARD OC PURCHASER — buys Owens Corning materials, no special certification, basic 30-50 yr standard warranty only; (2) OC PREFERRED CONTRACTOR — passed initial training, can offer Preferred Protection (50/10/0 warranty); (3) OC PLATINUM PREFERRED (top 1%) — passed all OC certifications + state license + insurance + BBB rating + 5-year experience + annual renewal + customer satisfaction maintenance, can offer Platinum Protection warranty (50/lifetime/lifetime — strongest OC warranty). The Platinum Protection warranty is exclusively available from Platinum Preferred contractors and offers LIFETIME workmanship/tear-off coverage (industry-leading).",
  },
  {
    question: 'What does the OC Platinum Protection warranty cover in Charlotte NC?',
    answer:
      "Owens Corning Platinum Protection (Platinum Preferred exclusive) covers: (1) 50-year NON-PRORATED material defect coverage on all OC Duration shingles AND accessories (ProArmor synthetic underlayment, WeatherLock G ice/water shield, ProEdge starter strip, VentSure ridge vent, Hip & Ridge); (2) LIFETIME workmanship coverage for installation defects (industry-leading — typical contractors offer 1-25 yr); (3) LIFETIME tear-off and disposal coverage; (4) 130 MPH wind coverage; (5) 100% transferable to new homeowner once within first 20 years (preserves resale). Real-world value: catastrophic shingle defect at year 30 covered for total $20,000-$35,000 replacement vs $0 from standard warranty. Lifetime workmanship is the strongest in the industry.",
  },
  {
    question: 'What Owens Corning shingle lines are available with Platinum Protection in Charlotte?',
    answer:
      "Owens Corning shingle lines covered by Platinum Protection: TRUDEFINITION DURATION ($90-$140/square material) — best-selling SureNail strip technology; DURATION FLEX ($110-$160/square) — Class 4 impact-resistant for hail damage; DURATION STORM ($120-$170/square) — Class 4 impact + 130 MPH wind for storm zones; DURATION MAX ($130-$180/square) — heaviest standard architectural; DURATION PREMIUM COOL ($120-$170/square) — ENERGY STAR cool-roof shingle for AC bill reduction; BERKSHIRE COLLECTION ($170-$240/square) — luxury slate-look profile; OAKRIDGE ($85-$125/square) — entry-level architectural. All lines available in 8-22 color options. Charlotte popular: TruDefinition Duration FLEX (Class 4 impact for hail discount), Duration Premium COOL (cool-roof for hot summers).",
  },
  {
    question: 'Should I choose Owens Corning, GAF, or CertainTeed for my Charlotte NC roof?',
    answer:
      "All three are excellent — choice depends on personal preference: GAF — best-seller (Timberline HDZ), broader color palette, fastest Charlotte availability, Master Elite Golden Pledge warranty (50/25/25); CERTAINTEED — strong designer/luxury options (Presidential, Grand Manor), SELECT ShingleMaster 5-Star Integrity (50/25/25 — equivalent to GAF Golden Pledge); OWENS CORNING — SureNail strip tech for wind resistance, Duration FLEX best Class 4 impact for hail, Platinum Preferred Platinum Protection warranty (50/LIFETIME/LIFETIME — STRONGEST workmanship coverage in industry). Decision factors: (1) preferred color/profile; (2) hail risk preference (OC Duration FLEX best for impact); (3) workmanship coverage preference (OC offers lifetime); (4) budget. Best Roofing Now is certified for ALL THREE — choice is yours.",
  },
];

export const metadata: Metadata = {
  title: 'What Is Owens Corning Platinum Preferred and Why Does It Matter for My Charlotte NC Roof?',
  description:
    "OC Platinum Preferred = top 1% of OC contractors. Charlotte NC exclusive Platinum Protection (50 yr material + LIFETIME workmanship + LIFETIME tear-off + 130 MPH wind).",
  keywords: [
    'what is Owens Corning Platinum Preferred Charlotte NC',
    'OC Platinum Preferred contractor',
    'OC Platinum Protection warranty',
    'Owens Corning certified roofer',
    'TruDefinition Duration installer',
    'best OC contractor NC',
    'Owens Corning warranty tiers',
    'OC Platinum verification',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Owens Corning Platinum Preferred and Why Does It Matter for My Charlotte NC Roof?',
    description: 'Top 1% of OC contractors. Platinum Protection 50/LIFETIME/LIFETIME warranty.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function OCPlatinumPreferredPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is OC Platinum Preferred?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is Owens Corning Platinum Preferred and Why Does It Matter for My Charlotte NC Roof?" description="OC Platinum Preferred certification guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'OC Platinum Preferred?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is Owens Corning Platinum Preferred Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'OC Platinum Preferred — top 1% of OC contractors nationwide',
          'Required — license, insurance, BBB, OC training + 5 yr exp + annual customer satisfaction renewal',
          'Exclusive Platinum Protection warranty — 50-year material + LIFETIME workmanship + LIFETIME tear-off',
          'Wind coverage upgraded to 130 MPH (vs 110 standard)',
          '100% transferable to new homeowner once within first 20 years',
          'Covered shingle lines — TruDefinition Duration, FLEX, STORM, MAX, Premium COOL, Berkshire',
          'Verify on owenscorning.com/roofing/contractor-locator',
          'Best Roofing Now is OC Platinum Preferred certified',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'OC Platinum Preferred?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC OC Platinum Preferred Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is Owens Corning Platinum Preferred and Why Does It Matter for My Charlotte NC Roof?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get OC Platinum Quote</Button>
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

      <CTASection title="OC Platinum Protection Warranty Available" subtitle="Best Roofing Now is Owens Corning Platinum Preferred — top 1% of contractors. Exclusive 50/LIFETIME/LIFETIME Platinum Protection warranty on every OC reroof." />
    </>
  );
}
