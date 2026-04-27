import { Metadata } from 'next';
import { Phone, Droplets } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-roof-scupper-charlotte-nc`;
const QUESTION = 'What is a roof scupper and how does it work on Charlotte NC commercial buildings?';
const ANSWER =
  "A roof scupper is a drainage opening cut through a parapet wall that allows rainwater to exit a flat or low-slope commercial roof, channeling water out and away from the building envelope. On Charlotte NC commercial buildings (warehouses, retail strips, office buildings, churches), scuppers come in two types: primary scuppers handle normal rainfall drainage, while overflow (or secondary) scuppers sit 2-4 inches higher and act as an emergency relief if primary drains clog — required by NC State Building Code for buildings without internal drains. Scupper openings are sealed with metal sleeves (galvanized steel or aluminum) and integrated with the membrane system: TPO and PVC scuppers use heat-welded flashing, EPDM uses cured-rubber boots with seam tape, and modified bitumen uses torch-applied flashing. Mecklenburg County receives ~43 inches of rain annually with intense summer thunderstorms, so properly sized and sealed scuppers are critical — undersized or failed scuppers cause ponding water, membrane degradation, parapet wall saturation, and warranty voids. Commercial scupper repair or replacement runs $400-$1,500 per opening including membrane integration.";

const followUpFAQs = [
  {
    question: 'How are scuppers sized for Charlotte NC commercial buildings?',
    answer:
      "Scupper sizing follows NC State Building Code Chapter 15 and IPC 1108, calculated from roof drainage area and Charlotte 100-year storm rainfall intensity (~7.5 inches per hour for short duration). Typical primary scuppers measure 4x6, 6x6, or 6x12 inches, with overflow scuppers sized at least 50% larger. A 10,000 sq ft warehouse roof in Charlotte commonly uses two 6x6 primary scuppers plus two 6x12 overflow scuppers. Civil/structural engineer drainage calcs are required on permitted commercial reroofs in Mecklenburg County.",
  },
  {
    question: 'What causes scuppers to fail on Charlotte commercial roofs?',
    answer:
      "Five common scupper failure modes: (1) sealant separation at the membrane-to-sleeve flashing (most common — 5-8 year service life on poorly installed seams); (2) clogged scupper inlets from leaves, gravel ballast, HVAC debris (Charlotte oak/maple coverage worsens this); (3) corroded scupper sleeves (galvanized steel rusts in 15-20 years, aluminum lasts 30+); (4) parapet wall cracks above the scupper letting water bypass the drainage path; (5) undersized scuppers that overflow during summer thunderstorms causing ponding and membrane saturation.",
  },
  {
    question: 'Do all Charlotte NC commercial flat roofs need scuppers?',
    answer:
      "No — buildings can drain via internal roof drains piped through the building (common on tall office buildings and large warehouses), via scuppers through parapet walls (common on 1-3 story retail and industrial), or a combination. NC Building Code requires secondary/overflow drainage on all commercial buildings — so even buildings using internal drains need overflow scuppers as backup. Buildings without parapet walls drain via gutters and downspouts at the roof edge instead. Best Roofing Now evaluates drainage during every commercial inspection.",
  },
  {
    question: 'How much does scupper repair or replacement cost in Charlotte?',
    answer:
      "Charlotte NC commercial scupper costs (2025-2026): re-flash an existing scupper with new TPO/EPDM/PVC membrane integration $400-$800 per opening; replace scupper sleeve and re-flash $800-$1,500 per opening; new scupper cut into existing parapet (engineering, structural reinforcement, membrane integration) $1,500-$3,500 per opening. Cost depends on membrane type, sleeve material (galvanized vs aluminum vs copper), parapet wall thickness, and access. Typically bundled with annual commercial roof maintenance for cost efficiency.",
  },
  {
    question: 'Are scuppers covered under commercial roof warranties?',
    answer:
      "Yes — scupper flashing and membrane integration are covered under manufacturer NDL (No Dollar Limit) warranties from Carlisle Sure-Weld, Johns Manville, GAF EverGuard, Firestone-Holcim, and Mule-Hide when installed by an authorized commercial roofer like Best Roofing Now. Coverage requires: scupper flashing matches manufacturer-spec details, regular professional inspection (annual minimum), and documented cleaning of scupper inlets. Workmanship warranty from Best Roofing Now adds 5-10 years on top of manufacturer coverage. Damage from clogged scuppers or lack of maintenance is excluded.",
  },
];

export const metadata: Metadata = {
  title: 'What Is a Roof Scupper? Charlotte NC Guide',
  description:
    "Roof scupper: parapet drainage opening on Charlotte NC commercial roofs. Primary + overflow types, TPO/EPDM/PVC sealing, $400-$1,500 repair cost. NC Code compliant.",
  keywords: [
    'roof scupper Charlotte NC',
    'commercial roof scupper',
    'parapet drainage opening',
    'overflow scupper code',
    'TPO scupper flashing',
    'EPDM scupper repair',
    'commercial flat roof drainage',
    'Mecklenburg County roof drainage',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is a Roof Scupper? Charlotte NC Guide',
    description: 'Parapet drainage opening on commercial flat roofs. Primary + overflow types.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsRoofScupperPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is a Roof Scupper?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is a Roof Scupper? Charlotte NC Commercial Guide" description="Roof scupper drainage explained for Charlotte NC commercial building owners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Scupper?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is a Roof Scupper Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Drainage opening cut through a parapet wall on a flat commercial roof',
          'Two types: primary (normal rainfall) and overflow/secondary (emergency)',
          'NC State Building Code requires overflow drainage on all commercial buildings',
          'Sealed with galvanized, aluminum, or copper sleeves',
          'TPO and PVC use heat-welded flashing; EPDM uses cured boots; mod bit uses torch flashing',
          'Sized per IPC 1108 for Charlotte ~7.5 in/hr 100-year storm intensity',
          'Repair or re-flash typically $400-$1,500 per opening',
          'Covered under NDL warranty when installed by authorized commercial roofer',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Roof Scupper?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Droplets className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Commercial Drainage Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is a Roof Scupper and How Does It Work on Charlotte NC Commercial Buildings?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Commercial Inspection</Button>
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

      <CTASection title="Charlotte NC Commercial Scupper Specialists" subtitle="Authorized installer for Carlisle, JM, GAF, Firestone-Holcim, Mule-Hide. NC code-compliant scupper design, repair, and replacement on every commercial flat roof." />
    </>
  );
}
