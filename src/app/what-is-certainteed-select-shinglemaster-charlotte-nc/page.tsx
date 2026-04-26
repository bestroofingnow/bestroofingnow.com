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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-certainteed-select-shinglemaster-charlotte-nc`;
const QUESTION = 'What is CertainTeed SELECT ShingleMaster and why does it matter for my Charlotte NC roof?';
const ANSWER =
  "CertainTeed SELECT ShingleMaster is the highest-tier installer credential awarded by CertainTeed (the second-largest U.S. roofing manufacturer), held by less than 1% of CertainTeed contractors nationwide. To qualify, contractors must: (1) maintain proper licensing and insurance; (2) hold high BBB rating; (3) complete CertainTeed Master Shingle Applicator certification; (4) complete CertainTeed Quality Master training; (5) demonstrate 5+ years of CertainTeed installation experience; (6) pass annual quality audits. For Charlotte NC homeowners, hiring a SELECT ShingleMaster contractor unlocks 4 EXCLUSIVE warranty benefits: (1) 5-STAR INTEGRITY Roof System Warranty — 50-year non-prorated material + 25-year workmanship + 25-year tear-off (the strongest CertainTeed warranty); (2) 4-STAR INTEGRITY Roof System Warranty — 50-year material + 5-year workmanship; (3) SureStart PLUS extended workmanship coverage; (4) WIND coverage upgraded to 130 MPH (vs 110 standard). SELECT ShingleMaster contractors specialize in CertainTeed systems (Landmark, Landmark Pro, Landmark Premium, Presidential Shake, Belmont, Grand Manor luxury) — they cannot certify GAF or Owens Corning installs. Best Roofing Now holds CertainTeed SELECT ShingleMaster certification alongside GAF Master Elite, providing Charlotte homeowners with the strongest available warranty regardless of shingle brand chosen.";

const followUpFAQs = [
  {
    question: 'How do I verify a Charlotte NC contractor is CertainTeed SELECT ShingleMaster?',
    answer:
      "Two verification methods: (1) CertainTeed official website — visit certainteed.com/find-a-pro and enter contractor name + Charlotte NC zip; SELECT ShingleMaster contractors appear with 'SELECT ShingleMaster' badge; (2) request contractor's CertainTeed Certification ID number — every SELECT ShingleMaster has a unique ID that CertainTeed verifies by phone (1-800-233-8990). Red flags: contractor claims 'master' or 'select' but cannot provide ID, contractor not listed on certainteed.com, contractor lists 'SELECT' on website but not on CertainTeed's official directory. Best Roofing Now's CertainTeed SELECT ShingleMaster certification is verifiable on certainteed.com.",
  },
  {
    question: 'What\'s the difference between CertainTeed certification tiers?',
    answer:
      "Four CertainTeed certification tiers: (1) STANDARD CERTAINTEED CONTRACTOR — purchases CertainTeed materials, no special certification, basic 25-yr standard warranty only; (2) CERTAINTEED MASTER SHINGLE APPLICATOR — passed basic shingle install certification, can offer 4-Star Integrity warranty; (3) CERTAINTEED QUALITY MASTER — completed advanced training, can offer 4-Star + workmanship coverage extended; (4) SELECT SHINGLEMASTER (under 1% of CertainTeed contractors) — passed all certifications + state license + insurance + BBB rating + 5-year experience minimum + annual audits, can offer 5-Star Integrity (50/25/25 — the strongest CertainTeed warranty). Charlotte homeowners benefit significantly from choosing SELECT ShingleMaster.",
  },
  {
    question: 'What does the CertainTeed 5-Star Integrity warranty cover in Charlotte NC?',
    answer:
      "CertainTeed 5-Star Integrity (SELECT ShingleMaster exclusive) covers: (1) 50-year NON-PRORATED material defect coverage on all CertainTeed shingles AND accessories (RoofRunner underlayment, WinterGuard ice/water shield, Mountain Ridge ridge cap, Filtervent ridge vent, SwiftStart starter strip); (2) 25-YEAR workmanship coverage for installation defects; (3) 25-YEAR tear-off and disposal coverage; (4) 130 MPH wind coverage; (5) 100% transferable to new homeowner once within first 20 years (preserves resale). Real-world value: catastrophic shingle defect claim covered for total $15,000-$25,000 vs $0 from standard warranty. Even premature install issue covered for 25 years vs typical 1-5 yr from non-certified contractor.",
  },
  {
    question: 'What CertainTeed shingle lines are available with 5-Star Integrity warranty in Charlotte?',
    answer:
      "CertainTeed shingle lines covered by 5-Star Integrity warranty: LANDMARK ($95-$140/square material) — best-selling architectural shingle, 30-yr standard with 5-Star upgrade to 50-yr; LANDMARK PRO ($110-$160/square) — heavier weight, designer colors; LANDMARK PREMIUM ($130-$185/square) — heaviest standard architectural; PRESIDENTIAL SHAKE ($170-$240/square) — luxury wood-shake-look profile; PRESIDENTIAL TL ($200-$280/square) — triple-layer luxury; BELMONT ($150-$210/square) — slate-look profile; CARRIAGE HOUSE ($230-$320/square) — luxury slate-look; GRAND MANOR ($250-$350/square) — luxury triple-layer slate-look; GRAND MANOR SHANGLE ($280-$380/square) — premium designer profile. All lines available in 14-26 color options. Best Roofing Now installs all lines.",
  },
  {
    question: 'Should I choose CertainTeed or GAF for my Charlotte NC roof?',
    answer:
      "Both are excellent — choice depends on personal preference and aesthetic: GAF (largest US manufacturer) — Timberline HDZ best-seller, broader color palette, slightly faster availability in Charlotte market, Master Elite warranty (Golden Pledge 50/25/25); CERTAINTEED (second-largest) — Landmark equivalent quality, strong designer/luxury options (Presidential, Grand Manor), SELECT ShingleMaster warranty (5-Star Integrity 50/25/25 — equivalent to GAF Golden Pledge). Both manufacturers have similar lifespan, weatherability, and quality. Decision factors: (1) preferred color/profile (compare samples); (2) contractor preference (Best Roofing Now installs both); (3) regional availability and pricing (typically within 5%); (4) HOA requirements (some specify one brand). Either choice is excellent for Charlotte NC.",
  },
];

export const metadata: Metadata = {
  title: 'What Is CertainTeed SELECT ShingleMaster and Why Does It Matter for My Charlotte NC Roof?',
  description:
    "CertainTeed SELECT ShingleMaster = under 1% of contractors. Charlotte NC exclusive 5-Star Integrity warranty (50 yr material + 25 yr workmanship + 25 yr tear-off + 130 MPH wind).",
  keywords: [
    'what is CertainTeed SELECT ShingleMaster Charlotte NC',
    'CertainTeed SELECT contractor',
    'CertainTeed 5-Star Integrity warranty',
    'CertainTeed certified roofer',
    'Landmark shingle installer',
    'CertainTeed Quality Master',
    'best CertainTeed contractor',
    'SELECT ShingleMaster verification',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is CertainTeed SELECT ShingleMaster and Why Does It Matter for My Charlotte NC Roof?',
    description: 'Under 1% of CertainTeed contractors. 5-Star Integrity warranty 50/25/25.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function CertainTeedSelectPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is CertainTeed SELECT?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is CertainTeed SELECT ShingleMaster and Why Does It Matter for My Charlotte NC Roof?" description="CertainTeed SELECT ShingleMaster certification guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'CertainTeed SELECT?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is CertainTeed SELECT ShingleMaster Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'CertainTeed SELECT ShingleMaster — under 1% of CertainTeed contractors',
          'Required — license, insurance, BBB, Master Shingle Applicator + Quality Master + 5 yr exp + annual audits',
          'Exclusive 5-Star Integrity warranty — 50/25/25 (material/workmanship/tear-off)',
          'Wind coverage upgraded to 130 MPH (vs 110 standard)',
          '100% transferable to new homeowner once within first 20 years',
          'Covered shingle lines — Landmark, Presidential, Belmont, Carriage House, Grand Manor',
          'Verify on certainteed.com/find-a-pro',
          'Best Roofing Now is CertainTeed SELECT ShingleMaster certified',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'CertainTeed SELECT?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC CertainTeed SELECT Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is CertainTeed SELECT ShingleMaster and Why Does It Matter for My Charlotte NC Roof?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get SELECT ShingleMaster Quote</Button>
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

      <CTASection title="CertainTeed 5-Star Integrity Warranty Available" subtitle="Best Roofing Now is CertainTeed SELECT ShingleMaster certified — under 1% of contractors. Exclusive 50/25/25 5-Star Integrity warranty on every CertainTeed reroof." />
    </>
  );
}
