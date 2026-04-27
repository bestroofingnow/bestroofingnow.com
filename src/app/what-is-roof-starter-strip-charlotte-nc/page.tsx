import { Metadata } from 'next';
import { Phone, Layers } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-roof-starter-strip-charlotte-nc`;
const QUESTION = 'What is roof starter strip and why does it matter for my Charlotte NC reroof?';
const ANSWER =
  "Roof starter strip is the first row of shingle material installed at the eaves and rakes BENEATH the visible field shingles. It contains a strip of factory-applied adhesive sealant on the bottom edge that bonds to the deck/drip edge, creating the critical FIRST waterproof seal that holds field shingles in place during high winds. Without proper starter strip, the field shingle bottom edge is unsealed — making it the #1 wind-blow-off point in storms. Brand-specific products: GAF Pro-Start ($35-$55/bundle, covers 105 lin ft), CertainTeed SwiftStart ($30-$50/bundle), Owens Corning ProEdge ($35-$55/bundle), Atlas Pinnacle Pro Starter ($30-$45/bundle). Total cost on typical 30-square Charlotte home: $250-$500 (4-7 bundles needed for 200-280 linear ft of perimeter). Starter strip is REQUIRED for all manufacturer warranties (GAF Master Elite Golden Pledge, CertainTeed SELECT 5-Star Integrity, OC Platinum Protection) — DIY-cut starter from regular shingles voids warranty. NC IRC §R905.2.5 requires manufacturer-specified starter strip on all asphalt-shingle reroofs in North Carolina. Best Roofing Now installs proper brand-matched starter strip on every reroof.";

const followUpFAQs = [
  {
    question: 'Can I use regular shingles cut down as starter strip in Charlotte NC?',
    answer:
      "Strongly NOT recommended — DIY-cut starter from regular shingles is the most common shortcut taken by unscrupulous contractors. Problems: (1) WARRANTY VOID — GAF, CertainTeed, OC top-tier warranties require factory starter strip product (cut shingles disqualify Golden Pledge, 5-Star Integrity, Platinum Protection); (2) WIND RESISTANCE — DIY-cut starter has no factory adhesive at the eave edge, dramatically reduces wind uplift rating from 130 MPH down to 60-90 MPH; (3) AESTHETICS — DIY-cut edges visible at eaves; (4) NC code violation — §R905.2.5 requires manufacturer-specified starter products. Cost savings of DIY starter: $200-$400. Cost of warranty loss: $5,000-$25,000. Always demand factory starter strip in your reroof contract.",
  },
  {
    question: 'How much starter strip does my Charlotte NC roof need?',
    answer:
      "Calculate starter strip needs: PERIMETER MEASUREMENT — measure total linear feet of eaves + rakes (typically 200-280 ft on 30-square Charlotte ranch home, 280-350 ft on two-story); BUNDLE COVERAGE — most starter strip bundles cover 105-120 linear feet (e.g., GAF Pro-Start 105 ft); QUANTITY — divide perimeter by bundle coverage, round up. Typical Charlotte home needs: small ranch (1,500 sq ft) — 2-3 bundles ($70-$165); medium (2,000-2,500 sq ft) — 3-5 bundles ($90-$275); large (3,000+ sq ft) — 5-7 bundles ($150-$385); estate (4,000+ sq ft) — 7-10 bundles ($210-$550). Material cost is ALWAYS included in proper reroof estimate as separate line item.",
  },
  {
    question: 'Why does starter strip matter for wind resistance in Charlotte NC?',
    answer:
      "Starter strip is the #1 wind defense at roof edges. Mechanism: (1) starter strip's factory adhesive bonds to drip edge/deck creating sealed first row; (2) field shingles install OVER starter, with their own sealant strip bonding to starter top surface; (3) double-bond at eaves resists wind uplift — Charlotte storm winds (60-90 MPH typical) flow over roof creating negative pressure beneath shingles; (4) without starter, shingles can be lifted and torn off by wind getting under bottom edge. Real-world impact: properly installed starter raises wind rating from 60 MPH (no starter) to 130-150 MPH (with factory starter + 6-nail pattern). Critical for Charlotte's exposure to May-July thunderstorms and August-October tropical remnants.",
  },
  {
    question: 'Is starter strip required at rakes too in Charlotte NC?',
    answer:
      "Yes — starter strip required at BOTH eaves AND rakes for proper installation. Coverage: EAVES (horizontal bottom edge of roof at gutters) — full perimeter, primary wind defense; RAKES (sloped edges at gable ends, sometimes called 'gable trim edges') — full length, secondary wind defense and aesthetic finishing. Some installers skip rake starter to save material — this is a corner-cutting move that voids manufacturer warranty and reduces wind resistance. Total starter coverage on typical Charlotte 30-square home: 200-280 linear ft (eaves + rakes combined). Best Roofing Now's reroof estimates always specify starter at both eaves and rakes per manufacturer specifications.",
  },
  {
    question: 'How do I verify my Charlotte NC contractor uses proper starter strip?',
    answer:
      "Three verification methods: (1) WRITTEN ESTIMATE — confirm contract specifies brand-name starter (GAF Pro-Start, CertainTeed SwiftStart, OC ProEdge) — NOT 'starter shingles' or 'cut shingles' or 'starter material'; (2) DELIVERY VERIFICATION — when materials arrive, verify starter bundles are factory-labeled (GAF Pro-Start has distinctive packaging); (3) INSTALL OBSERVATION — visit job site during install day, ask foreman to point out starter strip rolls (they install it FIRST before any field shingles); (4) DOCUMENTATION — request photos of starter installation included in completion package. Best Roofing Now provides starter installation photos as standard part of completion documentation for warranty registration purposes.",
  },
];

export const metadata: Metadata = {
  title: 'What Is Roof Starter Strip and Why Does It Matter for My Charlotte NC Reroof?',
  description:
    "Starter strip = first shingle row at eaves/rakes with factory adhesive. Required by NC IRC §R905.2.5 and all manufacturer warranties. GAF Pro-Start, CertainTeed SwiftStart, OC ProEdge.",
  keywords: [
    'what is roof starter strip Charlotte NC',
    'GAF Pro-Start starter',
    'CertainTeed SwiftStart',
    'OC ProEdge starter strip',
    'NC IRC R905.2.5 starter',
    'roof eave starter strip',
    'starter shingle wind resistance',
    'shingle warranty starter strip',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Roof Starter Strip and Why Does It Matter for My Charlotte NC Reroof?',
    description: 'First row at eaves/rakes with factory adhesive. NC IRC §R905.2.5 required.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsStarterStripPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is Starter Strip?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is Roof Starter Strip and Why Does It Matter for My Charlotte NC Reroof?" description="Starter strip guide for Charlotte NC reroofs." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Starter Strip?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is Roof Starter Strip Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Starter strip — first shingle row at eaves/rakes with factory adhesive sealant',
          'Creates critical first waterproof seal AND wind resistance',
          'NC IRC §R905.2.5 requires manufacturer-specified starter on all asphalt reroofs',
          'GAF Pro-Start, CertainTeed SwiftStart, OC ProEdge, Atlas Pinnacle Pro Starter',
          'Bundle coverage 105-120 linear ft, $30-$55/bundle',
          'Typical Charlotte 30-square home — 4-7 bundles ($90-$385)',
          'DIY-cut starter VOIDS manufacturer warranty (Golden Pledge, 5-Star, Platinum)',
          'Without starter — wind rating drops from 130 MPH to 60 MPH',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Starter Strip?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Starter Strip Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is Roof Starter Strip and Why Does It Matter for My Charlotte NC Reroof?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Code-Compliant Estimate</Button>
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

      <CTASection title="Factory Starter Strip Always Specified" subtitle="Best Roofing Now installs brand-matched factory starter (GAF Pro-Start, CertainTeed SwiftStart, OC ProEdge) on every reroof. Photo documentation included for warranty registration." />
    </>
  );
}
