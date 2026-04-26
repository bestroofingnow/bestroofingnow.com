import { Metadata } from 'next';
import { Phone, Triangle } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-chimney-cricket-charlotte-nc`;
const QUESTION = 'What is a chimney cricket and does my Charlotte NC home need one?';
const ANSWER =
  "A chimney cricket (also called a chimney saddle) is a small triangular peaked roof structure built on the UPHILL side of a chimney to divert rainwater and snow around the chimney rather than against the back face. NC IRC §R1003.20 REQUIRES a cricket on any chimney wider than 30 inches measured along the slope (most masonry chimneys exceed this threshold — making crickets mandatory on most Charlotte NC homes with chimneys). Without a cricket, water and debris pool against the chimney's uphill face, causing: (1) flashing failure and roof leaks (chimney leaks are the #2 most common Charlotte roof leak source after pipe boots); (2) decking rot behind the chimney; (3) ice damming during winter cold snaps; (4) shingle premature wear from constant moisture; (5) interior chimney moisture damage. Three cricket types: (1) FRAMED LUMBER + SHINGLE COVER (most common, $400-$1,200 installed) — 2x4 frame with plywood deck and matching shingles; (2) SHEET METAL (aluminum or copper, $600-$2,500) — premium and longest-lasting; (3) FORMED CHIMNEY SADDLE (preformed for narrow chimneys, $300-$800). Required components for any cricket: (1) ice-and-water shield underlayment beneath cricket; (2) step flashing along chimney walls; (3) counterflashing built into chimney mortar joints; (4) shingle weave matching surrounding roof. Best Roofing Now installs code-compliant chimney crickets on every reroof at zero cricket-specific labor premium when chimney exceeds 30-inch threshold.";

const followUpFAQs = [
  {
    question: 'Is a chimney cricket required by code in Charlotte NC?',
    answer:
      "Yes — NC IRC §R1003.20 requires a cricket on any chimney wider than 30 inches measured along the roof slope. Specifically: 'Crickets shall be installed where the dimension parallel to the ridge is greater than 30 inches.' Most masonry chimneys (single-flue or double-flue) exceed 30 inches in width, making crickets mandatory by code on most Charlotte NC homes. Failure to install a cricket on a >30-inch chimney during reroof violates NC code and voids both shingle manufacturer warranty (GAF, CertainTeed, OC) and contractor workmanship warranty. Mecklenburg County permit office enforces this on reroof inspections. Pre-2010 Charlotte homes often have wide chimneys WITHOUT crickets — non-compliance with current code, requires retrofit during reroof.",
  },
  {
    question: 'How much does a chimney cricket cost in Charlotte NC?',
    answer:
      "Charlotte NC chimney cricket pricing by type: framed lumber + shingle cover (most common) — $400-$1,200 installed; sheet metal aluminum cricket — $600-$1,800 installed; copper cricket (premium) — $1,500-$3,500 installed; preformed saddle (narrow chimneys 24-30 inches) — $300-$800 installed. Cost typically includes: ice-and-water shield underlayment, step flashing, counterflashing, matching shingles, all labor. During reroof — cricket adds $300-$800 to total project (vs $400-$1,200 standalone) due to shared mobilization. Best ROI: install cricket during reroof when one is required by code or recommended due to leak history.",
  },
  {
    question: 'How do I tell if my Charlotte chimney has a cricket?',
    answer:
      "Three checks: (1) ground inspection — look at the back (uphill side) of your chimney from across the yard; you should see a small triangular peaked roof structure rising from the roof to the chimney back; if the chimney back meets the roof flat (no peaked structure), there's no cricket; (2) leak history — recurring water stain on interior wall near chimney is a classic 'no cricket' symptom; (3) attic inspection — look at the underside of decking immediately behind the chimney for water staining (very common when no cricket exists). Most pre-2010 Charlotte homes with wide chimneys lack crickets — requiring retrofit at next reroof.",
  },
  {
    question: 'Can I add a chimney cricket without reroofing in Charlotte NC?',
    answer:
      "Conditional yes — partial cricket retrofit is possible but limited and expensive: standalone cricket install $1,500-$3,500 (vs $300-$800 during reroof). Process requires removing surrounding shingles, installing cricket frame, applying ice-and-water shield, replacing flashing, weaving in matching shingles. Limitations: (1) shingle color match difficult on aged roofs; (2) doesn't address other roof age issues; (3) flashing seal not as durable without underlayment update around chimney. Best practice: schedule cricket install during your next reroof for code compliance + 1/3 the cost. If active leak from missing cricket, emergency retrofit is justified to prevent interior damage.",
  },
  {
    question: 'What\'s the difference between a chimney cricket and chimney flashing?',
    answer:
      "Chimney CRICKET is the structural triangular peaked roof element that diverts water/snow AROUND the chimney before water even reaches the chimney face. Chimney FLASHING is the metal sheet/tape system that SEALS the joint between the chimney face and surrounding shingles (regardless of whether cricket exists). Both are required by NC code on chimneys: cricket required for chimneys >30 inches wide (§R1003.20), flashing required on ALL chimneys (§R905.1.1). They work together: cricket reduces water volume hitting flashing, extending flashing lifespan from 15-20 years to 25-40 years. A code-compliant Charlotte chimney installation includes BOTH cricket (when required) AND step flashing + counterflashing.",
  },
];

export const metadata: Metadata = {
  title: 'What Is a Chimney Cricket and Does My Charlotte NC Home Need One?',
  description:
    "Chimney cricket = triangular peaked roof on uphill side of chimney. NC IRC §R1003.20 REQUIRES on chimneys >30 inches. Cost $300-$3,500. Prevents 2nd most common Charlotte leak.",
  keywords: [
    'what is a chimney cricket Charlotte NC',
    'chimney saddle Charlotte',
    'NC IRC R1003.20 cricket',
    'chimney cricket cost',
    'chimney leak Charlotte',
    'chimney flashing vs cricket',
    'chimney back leak',
    'cricket required code',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is a Chimney Cricket and Does My Charlotte NC Home Need One?',
    description: 'NC IRC §R1003.20 requires cricket on chimneys >30 inches.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsChimneyCricketPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is a Chimney Cricket?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is a Chimney Cricket and Does My Charlotte NC Home Need One?" description="Chimney cricket terminology and NC code requirements." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Chimney Cricket?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is a Chimney Cricket Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Chimney cricket — triangular peaked roof on uphill side of chimney',
          'NC IRC §R1003.20 REQUIRES cricket on chimneys wider than 30 inches',
          'Most masonry chimneys exceed 30 inches — cricket is mandatory',
          'Diverts water and snow AROUND chimney instead of pooling against back face',
          'Without cricket — chimney is #2 most common Charlotte leak source',
          'Framed lumber + shingle cricket — $400-$1,200 installed',
          'Sheet metal cricket (aluminum or copper) — $600-$3,500',
          'During reroof — adds only $300-$800 (vs $1,500-$3,500 standalone)',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Chimney Cricket?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Triangle className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Chimney Cricket Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is a Chimney Cricket and Does My Charlotte NC Home Need One?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Chimney Inspection</Button>
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

      <CTASection title="NC IRC §R1003.20 Code-Compliant Crickets" subtitle="Free chimney inspection identifies cricket presence and code compliance. Bundle cricket install with reroof for 1/3 the standalone cost. Prevents 2nd most common Charlotte leak." />
    </>
  );
}
