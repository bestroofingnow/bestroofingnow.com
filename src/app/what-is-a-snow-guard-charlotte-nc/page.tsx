import { Metadata } from 'next';
import { Phone, Snowflake } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-snow-guard-charlotte-nc`;
const QUESTION = 'What is a snow guard and do I need one in Charlotte NC?';
const ANSWER =
  "A snow guard is a small pad, fence, or bar attached to a metal roof that prevents accumulated snow and ice from sliding off in dangerous sheets — instead causing it to melt in place or release in small, harmless amounts. Snow guards are STANDARD in northern states and high-elevation NC mountains but are RARE in Charlotte NC because Charlotte averages only 3-5 inches of total annual snowfall (NOAA). However, snow guards ARE recommended on Charlotte-area metal roofs in three specific cases: (1) standing-seam metal homes in north Mecklenburg (Cornelius, Davidson, Huntersville) where lake-effect microclimate can produce 6-12 inch accumulations 1-2 times per decade; (2) any metal roof above an entrance, walkway, gas meter, HVAC unit, or driveway (liability/safety); (3) metal roofs with skylights, solar panels, or vent stacks where sliding snow could damage equipment. Charlotte snow guard installed cost: $8-$25 per pad ($300-$1,200 typical home), or $15-$45 per linear foot for continuous bar systems. Without snow guards, 6 inches of wet snow sliding off a 2,000 sq ft metal roof releases 12,000+ lbs of weight in seconds.";

const followUpFAQs = [
  {
    question: 'What types of snow guards work best on Charlotte NC metal roofs?',
    answer:
      "Three main snow guard types for Charlotte NC: (1) pad-style (Berger SnoBlox, S-5! ColorGard pads) — small individual clips $8-$25 each, glued or clamped to standing seams, best for 4-6 inch typical Charlotte snowfall and aesthetic neutrality; (2) bar-style (S-5! ColorGard, Sno Gem ColorRail) — continuous horizontal pipe/bar $15-$45 per linear ft, best for above entrances/walkways and properties needing maximum holding, suitable for the rare 8-12 inch lake-effect events in Lake Norman; (3) fence-style (multi-row pipe rails) — heaviest duty $25-$60 per linear ft, overkill for Charlotte except commercial buildings with parapets or LKN waterfront homes wanting belt-and-suspenders. S-5! clamp-on systems do NOT penetrate the roof (no leak risk) and are highly recommended for standing-seam metal roofs.",
  },
  {
    question: 'Do I need snow guards on my Charlotte NC asphalt shingle roof?',
    answer:
      "Almost never — snow guards are designed for metal, slate, and clay tile roofs where snow slides easily on smooth surfaces. Asphalt shingles have rough granular texture that grips snow naturally and prevents large slides. In Charlotte NC, where total annual snowfall averages 3-5 inches and individual events rarely exceed 4 inches, snow guards on asphalt shingles offer essentially zero benefit. Exceptions: (1) very steep asphalt roofs (12/12+ pitch) above entry doors — small adhesive snow stops $50-$150 total can prevent slick-snow slides during the rare 6+ inch event; (2) synthetic slate (DaVinci, Brava) and synthetic shake roofs — same slide risk as real slate, snow guards recommended above walkways.",
  },
  {
    question: 'What does snow guard installation cost in Charlotte NC?',
    answer:
      "Charlotte NC snow guard installed pricing: (1) pad-style adhesive (small homes, low risk) — $8-$25 per pad, typical 30-50 pad install $300-$1,200 total; (2) pad-style clamp-on (S-5! systems, no penetrations) — $15-$35 per clamp + pad, typical $600-$2,500 total; (3) continuous bar-style (above entrances/walkways) — $15-$45 per linear ft installed, typical 40-100 linear ft project $600-$4,500; (4) full perimeter bar system (LKN waterfront luxury home, max protection) — $35-$60 per linear ft, $3,500-$12,000+ total. New construction install adds 30-50% less than retrofit. Total cost depends on roof pitch, panel system, and bar/pad density (closer spacing = more holding power).",
  },
  {
    question: 'Where should snow guards be installed on my Charlotte NC home?',
    answer:
      "Priority install locations for Charlotte NC snow guards: (1) MUST INSTALL — directly above entry doors, garage doors, walkways, driveways, gas meters, HVAC condensers, and any high-traffic zone (liability + equipment damage risk); (2) HIGHLY RECOMMENDED — above skylights, solar panels, plumbing vents, satellite dishes (sliding snow can rip these off and dent panels); (3) RECOMMENDED FOR LAKE NORMAN HOMES — full eave perimeter on lakefront standing-seam roofs (Cornelius, Davidson, Huntersville) where rare 8-12 inch lake-effect snow events occur; (4) OPTIONAL — north slopes and steep pitches (12/12+) where snow accumulates and sheds aggressively. Installation pattern: rows 12-18 inches apart, staggered, starting 12-18 inches above the eave.",
  },
  {
    question: 'Will snow guards damage my Charlotte NC metal roof or void the warranty?',
    answer:
      "Modern clamp-on snow guards (S-5! ColorGard, Sno Gem ColorRail) attach to standing seams using setscrews that grip the seam metal WITHOUT penetrating the roof — zero leak risk and zero warranty impact. Adhesive pad-style guards use 3M VHB tape rated 30+ year exterior bond — also no leak risk. AVOID screw-through snow guards on standing seam (creates 30-100+ leak points and voids most metal roof warranties from MBCI, ATAS, Drexel). Manufacturers approve clamp-on systems: McElroy Metal, MBCI, Drexel, ATAS all explicitly approve S-5! brand clamp systems with no warranty impact. Always verify your specific panel system + clamp compatibility before install — Best Roofing Now confirms compatibility on every Charlotte snow guard quote.",
  },
];

export const metadata: Metadata = {
  title: 'What Is a Snow Guard? Charlotte NC Need-to-Know',
  description:
    "Snow guards prevent dangerous snow slides off metal roofs. Rare in Charlotte (3-5 inch annual avg) but critical above entrances and on Lake Norman metal roofs. Install $8-$45/ft.",
  keywords: [
    'what is a snow guard Charlotte NC',
    'snow guard metal roof Charlotte',
    'S-5 ColorGard Charlotte',
    'snow stop installation NC',
    'metal roof snow slide prevention',
    'Lake Norman metal roof snow guards',
    'standing seam snow guard',
    'snow guard cost Charlotte',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is a Snow Guard? Charlotte NC Need-to-Know',
    description: 'Snow guard pads/bars for Charlotte NC metal roofs above entrances and Lake Norman homes.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsSnowGuardPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is a Snow Guard?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is a Snow Guard? Charlotte NC Need-to-Know" description="Snow guard terminology and when Charlotte NC metal roofs need them." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Snow Guard?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is a Snow Guard Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Snow guard — pad/bar/fence on metal roof preventing dangerous snow slides',
          'Charlotte averages only 3-5 inches annual snowfall (NOAA) — rare need',
          'REQUIRED above entrances, walkways, gas meters, HVAC units (safety)',
          'RECOMMENDED on Lake Norman metal roofs (lake-effect 6-12 inch events)',
          'Pad-style — $8-$25 per pad, typical home $300-$1,200',
          'Bar-style — $15-$45 per linear ft, above entrances $600-$4,500',
          'S-5! clamp-on systems — zero penetrations, zero warranty impact',
          'Almost never needed on asphalt shingles (granular texture grips snow)',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Snow Guard?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Snowflake className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Snow Guard Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is a Snow Guard and Do I Need One in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Snow Guard Quote</Button>
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

      <CTASection title="Charlotte NC Snow Guard Installation" subtitle="Targeted snow guard install above entrances, HVAC, and Lake Norman lakefront metal roofs. S-5! clamp-on systems with zero roof penetrations and zero warranty impact." />
    </>
  );
}
