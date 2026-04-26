import { Metadata } from 'next';
import { Phone, Hammer } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-roof-flashing-charlotte-nc`;
const QUESTION = 'What is roof flashing and why does it matter for my Charlotte NC roof?';
const ANSWER =
  "Roof flashing is the metal sheeting (typically aluminum, galvanized steel, copper, or lead) installed at junctions, transitions, and penetrations on your roof to direct water AWAY from vulnerable seams. It's the #1 most important waterproofing component AFTER the shingles themselves — flashing failures cause approximately 22% of all Charlotte NC roof leaks (combining valley 12% + chimney 10% from leak source statistics). Charlotte NC homes typically have 7 types of flashing: (1) STEP FLASHING — L-shaped pieces at every shingle row where roof meets vertical wall (chimneys, dormers); (2) COUNTERFLASHING — caps step flashing, typically embedded in chimney mortar joints; (3) APRON FLASHING — straight metal at base of vertical walls and dormers; (4) VALLEY FLASHING — open-valley metal channel; (5) DRIP EDGE — L-shape at eaves and rakes per NC IRC §R905.2.8.5; (6) PIPE BOOT FLASHING — round flashing around plumbing/HVAC vent pipes (60% of all leaks); (7) SKYLIGHT FLASHING — perimeter system around skylight units. Material lifespans: aluminum 30-50 yr, galvanized steel 15-30 yr (rusts), copper 50-100+ yr, lead 50-75 yr. Best practice for Charlotte: replace ALL flashing during reroof (no extra labor when roof is opened up) — old flashing is rarely worth saving even if visually intact. Best Roofing Now's free inspection includes flashing condition assessment.";

const followUpFAQs = [
  {
    question: 'What\'s the difference between step flashing and counterflashing in Charlotte?',
    answer:
      "STEP FLASHING — small L-shaped metal pieces (typically 5x7 inches, aluminum or steel) installed at EACH SHINGLE ROW along the joint where the roof meets a vertical wall (chimneys, dormers, second-story walls). Each step flashing piece overlaps the one below it, creating layered water diversion. COUNTERFLASHING — larger metal cap that COVERS the top edge of step flashing and is embedded INTO the vertical wall (typically into chimney mortar joints, sealed with high-grade silicone). Together they form a 2-piece waterproofing system — water hitting the wall flows down, hits counterflashing, gets deflected outward over step flashing, then onto shingles for normal drainage. NEVER skip either — both required for proper sealing.",
  },
  {
    question: 'How do I tell if my Charlotte NC roof flashing is failing?',
    answer:
      "Six failure signs visible from ground or attic: (1) interior water staining at chimney walls, dormer-roof junctions, or skylights; (2) visible rust on galvanized steel flashing (orange-brown stains running down shingles below); (3) lifted or pulled-away flashing at chimney sides; (4) cracked sealant at counterflashing-mortar joints (visible from ladder); (5) gaps between flashing and chimney brick (water can pool/freeze here); (6) attic water staining concentrated near walls/penetrations. Charlotte's high UV and freeze-thaw stresses degrade sealants and flashings 30-50% faster than national average. Most pre-2010 Charlotte chimneys have failing flashing — Best Roofing Now's free inspection identifies condition.",
  },
  {
    question: 'Should I repair or replace flashing on my Charlotte NC roof?',
    answer:
      "Decision matrix: REPAIR when — (1) flashing is under 15 years old; (2) failure is isolated to one penetration; (3) underlying chimney/dormer is structurally sound; (4) cost $200-$800 per location. REPLACE when — (1) widespread failure on multiple flashings; (2) flashing is 20+ years old; (3) you're reroofing (always replace during reroof — $0 extra labor when roof opened up); (4) galvanized steel showing rust (won't last another 10 years even if patched). Replacement cost: chimney flashing replacement standalone $400-$1,800; replacement during reroof $200-$600 (cost difference due to mobilization sharing). Best Roofing Now provides written repair-vs-replace recommendation.",
  },
  {
    question: 'Can I caulk a flashing leak myself in Charlotte NC?',
    answer:
      "Strongly NOT recommended — caulk-only repair is the most common cause of WORSE eventual damage. Reasons: (1) caulk masks but doesn't fix underlying flashing failure, leak returns within 1-3 years often worse; (2) wrong caulk type (silicone, polyurethane, butyl) creates further sealing problems; (3) caulk traps moisture beneath, accelerating decking rot; (4) voids manufacturer warranty if applied incorrectly; (5) safety risk (CDC: 247,000+ ladder/roof fall ER visits annually). For temporary leak prevention before professional repair, roofing tar (3-4 in. wide bead) lasts 3-12 months but requires permanent fix. Best Roofing Now's professional flashing repair starts at $200-$800 with 1-3 yr warranty.",
  },
  {
    question: 'What flashing material is best for Charlotte NC?',
    answer:
      "Charlotte NC flashing material recommendations: (1) ALUMINUM (most common, $2-$5/linear ft material) — corrosion-immune, 30-50 yr lifespan, paintable, BEST CHOICE for typical Charlotte residential; (2) COPPER (premium, $8-$18/linear ft) — 50-100+ yr lifespan, develops natural patina, premium aesthetic for chimneys and visible locations, BEST for premium estates; (3) LEAD (specialty, $12-$25/linear ft) — 50-75 yr lifespan, best for chimney pipe boots and complex shapes; (4) GALVANIZED STEEL (legacy, $1-$3/linear ft) — only 15-30 yr lifespan due to rust, NOT recommended for new installs in Charlotte; (5) PAINTED STEEL (Galvalume, $3-$7/linear ft) — 25-40 yr, color-match capability. Avoid steel except as legacy repair.",
  },
];

export const metadata: Metadata = {
  title: 'What Is Roof Flashing and Why Does It Matter for My Charlotte NC Roof?',
  description:
    "Roof flashing = metal sheeting at junctions and penetrations. 22% of Charlotte leaks. 7 types: step, counter, apron, valley, drip edge, pipe boot, skylight. Aluminum 30-50 yr.",
  keywords: [
    'what is roof flashing Charlotte NC',
    'step flashing vs counterflashing',
    'chimney flashing Charlotte',
    'roof flashing repair cost',
    'aluminum vs copper flashing',
    'flashing failure signs',
    'NC roof flashing types',
    'pipe boot flashing',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Roof Flashing and Why Does It Matter for My Charlotte NC Roof?',
    description: '22% of Charlotte leaks. 7 types of flashing. Aluminum vs copper vs steel.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsRoofFlashingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is Roof Flashing?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is Roof Flashing and Why Does It Matter for My Charlotte NC Roof?" description="Roof flashing guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Flashing?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is Roof Flashing Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Roof flashing — metal sheeting at junctions, transitions, and penetrations',
          '22% of all Charlotte roof leaks come from flashing failures',
          'Step flashing — L-shaped pieces at each shingle row along walls',
          'Counterflashing — caps step flashing, embedded in chimney mortar',
          'Apron flashing, valley flashing, drip edge, pipe boot, skylight perimeter',
          'Aluminum (most common) — $2-$5/linear ft, 30-50 yr (BEST CHOICE)',
          'Copper (premium) — $8-$18/linear ft, 50-100+ yr',
          'Lead (specialty) — $12-$25/linear ft, 50-75 yr',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Flashing?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Hammer className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Flashing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is Roof Flashing and Why Does It Matter for My Charlotte NC Roof?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Flashing Inspection</Button>
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

      <CTASection title="Replace Flashing During Reroof for Maximum Value" subtitle="$0 extra labor for full flashing replacement when roof is opened up. Aluminum, copper, lead options. Free inspection identifies failure points before interior damage." />
    </>
  );
}
