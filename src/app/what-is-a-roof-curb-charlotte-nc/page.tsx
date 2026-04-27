import { Metadata } from 'next';
import { Phone, Square } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-roof-curb-charlotte-nc`;
const QUESTION = 'What is a roof curb and where is it used in Charlotte NC?';
const ANSWER =
  "A roof curb is a raised perimeter framing structure (typically wood-framed with sheet metal cap) that surrounds rooftop equipment penetrations such as HVAC units, exhaust fans, skylights, and solar panel mounts. Curbs serve 4 critical functions: (1) WATERPROOF MOUNTING — provides flat, code-compliant surface for equipment installation while keeping water OUT of the roof penetration; (2) FLASHING SURFACE — gives roofer a vertical wall to apply step flashing and counterflashing for waterproof seal; (3) STRUCTURAL LOAD SUPPORT — distributes equipment weight across multiple rafters/joists; (4) VIBRATION ISOLATION — separates equipment vibration from roof structure. Used on both Charlotte NC residential (skylights, kitchen exhaust fans, attic ventilators) and commercial (rooftop HVAC units, exhaust fans, smoke vents). Heights typically 8-12 inches above roof surface (NC IRC §R905 requires minimum 8-inch curb height for waterproof flashing clearance). Cost: pre-fabricated metal curb for HVAC unit $400-$1,500 installed; custom wood-framed curb for skylight $300-$800 installed; commercial RTU curb $800-$3,500. Failures: rotted wood framing (most common, $400-$1,500 repair), failed sealant at metal cap (water entry $300-$1,200), inadequate height for flashing (improper original install). Best Roofing Now's free inspection includes curb condition assessment.";

const followUpFAQs = [
  {
    question: 'What roof penetrations need a curb in Charlotte NC?',
    answer:
      "Five common Charlotte NC penetrations requiring curbs: (1) HVAC ROOFTOP UNITS (commercial and large residential) — typically 8-14 inch curb height with vibration isolators; (2) SKYLIGHTS — 4-8 inch curb height integrated with frame (Velux, Wasco, Sun-Tek standard products include curb); (3) KITCHEN EXHAUST FANS — 8-12 inch curb for grease venting (commercial restaurants required by NFPA 96 code); (4) ATTIC POWER VENTILATORS — small 4-6 inch curb often integrated with vent product; (5) SOLAR PANEL MOUNTS — 4-6 inch curb for ballasted commercial systems (residential typically uses penetration mounts instead). Penetrations NOT typically requiring curbs: small plumbing vents (use pipe boots), single-pipe exhausts (use roof flashing), antennas (use specialty mounts).",
  },
  {
    question: 'How much does a roof curb cost in Charlotte NC?',
    answer:
      "Charlotte NC roof curb pricing by application: SKYLIGHT CURB (4-8 inch height, residential) — $300-$800 installed during reroof, $500-$1,200 standalone retrofit; HVAC ROOFTOP UNIT CURB (8-14 inch height, residential or small commercial) — $400-$1,500 installed; LARGE COMMERCIAL HVAC CURB — $800-$3,500 installed (RTU 5-20 ton with vibration isolators); KITCHEN EXHAUST CURB (8-12 inch with NFPA 96 grease containment) — $1,200-$3,500 installed; CUSTOM WOOD-FRAMED CURB (specialty equipment) — $500-$2,000 installed. Costs include: framing material, sheet metal cap, flashing integration, sealant, fasteners. Bundle with reroof for $200-$600 labor savings.",
  },
  {
    question: 'Can a failed roof curb cause leaks in Charlotte NC?',
    answer:
      "Yes — curb failures are a top-10 commercial roof leak source in Charlotte NC. Common failure modes: (1) ROTTED WOOD FRAMING (most common, 10-25 yr lifespan in Charlotte humid climate) — wood framing degrades from constant moisture exposure; (2) FAILED SEALANT at metal cap-to-shingle joint (5-15 yr lifespan) — UV degrades polyurethane and silicone sealants; (3) RUSTED METAL CAP (galvanized steel only) — 8-20 yr lifespan in Charlotte; (4) INADEQUATE FLASHING coverage from improper original install. Leak indicators: water staining inside building near curbed equipment, equipment vibration loosening seals, visible gaps in cap-to-shingle junction. Best Roofing Now's free inspection identifies curb failures before interior damage.",
  },
  {
    question: 'Should I replace my roof curb during a Charlotte NC reroof?',
    answer:
      "Conditional yes — recommendations: REPLACE during reroof when — (1) curb is 15+ years old; (2) wood framing shows any rot or moisture damage; (3) curb height is below 8 inches (current NC IRC code minimum); (4) you're upgrading the HVAC/skylight equipment anyway; (5) sealant is visibly failing. KEEP existing during reroof when — (1) curb is under 10 years old in good condition; (2) framing is sound and dry; (3) sheet metal cap is intact; (4) sealant is fresh. Replacement during reroof costs $200-$1,000 added vs $500-$3,500 standalone (significant savings). Best Roofing Now's reroof estimate includes curb assessment with replace-vs-keep recommendation.",
  },
  {
    question: 'What\'s the difference between a roof curb and a roof flashing?',
    answer:
      "ROOF CURB — STRUCTURAL element (raised wooden or metal frame) that creates a separate elevated platform on the roof for equipment mounting; provides waterproofing, vibration isolation, and code-compliant flashing surface. ROOF FLASHING — WATERPROOFING element (sheet metal pieces) that seals joints between dissimilar surfaces (roof to wall, roof to chimney, roof to penetration). They work TOGETHER: a curb provides the structural surface; flashing seals the curb-to-shingle junction. Most roof penetrations need BOTH (curb structure + flashing seal). Some small penetrations (plumbing vents, single pipes) use specialty flashing only without curb (pipe boots).",
  },
];

export const metadata: Metadata = {
  title: 'What Is a Roof Curb and Where Is It Used in Charlotte NC?',
  description:
    "Roof curb = raised perimeter framing around HVAC, skylights, fans. NC IRC §R905 requires 8-inch min height. Cost $300-$3,500 by application. Bundle with reroof for savings.",
  keywords: [
    'what is a roof curb Charlotte NC',
    'HVAC roof curb',
    'skylight curb Charlotte',
    'roof curb cost NC',
    'commercial RTU curb',
    'kitchen exhaust curb',
    'roof curb vs flashing',
    'NC roof curb code',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is a Roof Curb and Where Is It Used in Charlotte NC?',
    description: 'Raised framing around HVAC, skylights, fans.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsRoofCurbPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is a Roof Curb?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is a Roof Curb and Where Is It Used in Charlotte NC?" description="Roof curb guide for Charlotte NC homeowners and building owners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Curb?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is a Roof Curb Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Roof curb — raised perimeter framing around rooftop equipment penetrations',
          'Functions — waterproof mounting, flashing surface, structural load, vibration isolation',
          'Used on HVAC units, skylights, exhaust fans, solar panel mounts',
          'NC IRC §R905 requires 8-inch minimum curb height',
          'Skylight curb — $300-$800 installed during reroof',
          'HVAC RTU curb — $400-$3,500 by size',
          'Wood framing 10-25 yr lifespan in Charlotte humid climate',
          'Bundle with reroof for $200-$600 labor savings',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Roof Curb?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Square className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Curb Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is a Roof Curb and Where Is It Used in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Roof Curb Inspection</Button>
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

      <CTASection title="NC IRC §R905 Code-Compliant Roof Curbs" subtitle="Free curb inspection identifies wood rot, sealant failure, and undersized installations. Replace during reroof for $200-$600 labor savings. HVAC, skylight, exhaust, solar applications." />
    </>
  );
}
