import { Metadata } from 'next';
import { Phone, CircleDot } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-roof-boot-charlotte-nc`;
const QUESTION = 'What is a roof boot and why does my Charlotte NC roof have one?';
const ANSWER =
  "A roof boot (also called a pipe boot, vent boot, plumbing boot, or vent flashing) is the round flashing-and-rubber-gasket assembly that seals around plumbing vent pipes, HVAC vent stacks, and other round penetrations through your roof. A typical Charlotte NC home has 3-8 pipe boots: 1-3 plumbing waste vents, 1-2 furnace/HVAC exhausts, 0-2 bath fan vents, 0-1 dryer vent. Roof boots are the #1 most common roof leak source — they cause approximately 60% of all Charlotte residential roof leaks because the rubber/EPDM gasket cracks from UV exposure after only 8-12 years (vs the surrounding shingles which last 20-30 years). Three boot types: (1) STANDARD RUBBER BOOT (1-piece molded EPDM rubber over aluminum base) — $20-$40 material, $150-$350 installed, 8-12 yr lifespan, the standard but failure-prone option; (2) LIFETIME LEAD BOOT (1.5-lb lead sheet folded around pipe and counterflashed) — $80-$150 material, $250-$500 installed, 50+ yr lifespan, premium upgrade; (3) ULTIMATE PIPE FLASHING (Oatey/Quick-Flash with EPDM + secondary metal collar) — $50-$80 material, $200-$450 installed, 20-30 yr lifespan, mid-tier balance. Best practice for Charlotte: upgrade ALL pipe boots to lead during reroof (adds $400-$1,200 to total project for 50+ year leak protection — eliminates the #1 leak source for the rest of your roof's life).";

const followUpFAQs = [
  {
    question: 'How do I tell if my Charlotte NC pipe boot is failing?',
    answer:
      "Five failure signs: (1) visible cracks in the rubber gasket around the pipe (look from ground with binoculars, or have professional inspect — typical at 8-12 yr); (2) the rubber appears dry, gray, or chalky (UV degradation); (3) interior ceiling stain in the room directly below or 2-15 ft offset from a known pipe location; (4) attic water staining on rafters near pipe penetrations; (5) the rubber pulled away from the pipe (creates large gap). Charlotte's intense UV exposure causes pipe boot failure 30-50% faster than national average. If your boots are 8+ years old, they're likely candidates for replacement. Best Roofing Now's free inspection includes pipe boot condition assessment.",
  },
  {
    question: 'How much does roof boot replacement cost in Charlotte NC?',
    answer:
      "Charlotte NC roof boot replacement pricing: single rubber boot replacement $150-$350 (most common service call); upgrade to lead boot single $250-$500 (50+ yr replacement); upgrade to ultimate flashing single $200-$450 (20-30 yr); replace all 3-8 boots on typical home at one visit $450-$2,500 (volume discount); during reroof — boot upgrade adds $400-$1,200 total ($0 labor premium since roof is already opened up). Best ROI: replace ALL boots during reroof with lead — eliminates #1 leak source for the entire 25-30 year shingle lifespan. Avoids the typical 2-3 boot replacement service calls during a roof's life.",
  },
  {
    question: 'Can I replace a roof boot myself in Charlotte NC?',
    answer:
      "Generally not recommended — DIY pipe boot replacement is technically possible ($30-$60 materials) but risks: (1) safety risk (CDC: 247,000+ ladder/roof fall ER visits annually); (2) requires lifting surrounding shingles without breaking sealant strip (often impossible on aged shingles); (3) improper installation creates worse leak than original failure; (4) voids manufacturer shingle warranty if not done per spec; (5) doesn't include underlayment inspection (often the actual failure point). Best Roofing Now's professional service: $150-$350 single boot, includes underlayment inspection, 1-3 year warranty. Worth the modest premium for safety and warranty.",
  },
  {
    question: 'Why do roof boots fail so often in Charlotte NC?',
    answer:
      "Charlotte NC accelerates roof boot failure beyond national average due to: (1) intense UV exposure (NC's high UV index degrades EPDM rubber 30-50% faster than northern climates); (2) extreme summer attic temperatures (140-170°F surface temps during July-August bake the rubber); (3) freeze-thaw cycles in winter (rare but rubber expansion/contraction worsens cracks); (4) tree pollen and acidic rain (chemical degradation); (5) wildlife (squirrels and birds occasionally chew exposed rubber). Lead boots are immune to ALL of these failure modes — explaining why Best Roofing Now strongly recommends lead boot upgrade during every Charlotte reroof.",
  },
  {
    question: 'What\'s the difference between a roof boot and a roof vent?',
    answer:
      "Roof BOOT (pipe boot/vent flashing) is the WATERPROOF SEAL around a pipe or vent that already exists penetrating the roof — it's flashing/gasket only, no airflow function. Roof VENT (ridge vent, soffit vent, gable vent, turbine vent, powered attic ventilator) is an OPENING in the roof that ALLOWS AIRFLOW into and out of the attic per NC IRC §R806 ventilation requirements. Common confusion: 'plumbing vent' refers to the PIPE itself (which is the plumbing system's pressure equalization), and the BOOT is what seals around that pipe where it exits the roof. Both boots and vents are failure points but are independent systems with different repair processes.",
  },
];

export const metadata: Metadata = {
  title: 'What Is a Roof Boot and Why Does My Charlotte NC Roof Have One?',
  description:
    "Roof boot = flashing/gasket sealing pipes through roof. #1 cause of Charlotte NC leaks (60%). Rubber 8-12 yr, lead 50+ yr. Replace cost $150-$2,500. Upgrade to lead during reroof.",
  keywords: [
    'what is a roof boot Charlotte NC',
    'pipe boot Charlotte',
    'plumbing vent flashing',
    'roof boot replacement cost',
    'lead pipe boot upgrade',
    'EPDM pipe boot failure',
    'pipe boot leak Charlotte',
    'roof penetration sealing',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is a Roof Boot and Why Does My Charlotte NC Roof Have One?',
    description: '#1 cause of Charlotte NC leaks. Upgrade to lead for 50+ yr.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsRoofBootPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is a Roof Boot?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is a Roof Boot and Why Does My Charlotte NC Roof Have One?" description="Roof boot terminology and importance for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Boot?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is a Roof Boot Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Roof boot — flashing-and-rubber-gasket assembly sealing pipe penetrations',
          'Typical Charlotte home has 3-8 boots (plumbing, HVAC, bath fan, dryer)',
          '#1 cause of Charlotte residential roof leaks — 60% of all leaks',
          'Standard rubber boot — $150-$350 installed, 8-12 yr lifespan',
          'Lead boot — $250-$500 installed, 50+ yr lifespan (PREMIUM, recommended)',
          'Ultimate pipe flashing — $200-$450 installed, 20-30 yr lifespan',
          'Charlotte UV degrades rubber boots 30-50% faster than national average',
          'Best ROI — upgrade all boots to lead during reroof for 50+ yr leak protection',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Roof Boot?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <CircleDot className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Boot Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is a Roof Boot and Why Does My Charlotte NC Roof Have One?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Boot Inspection</Button>
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

      <CTASection title="Eliminate the #1 Leak Source" subtitle="Lead boot upgrade during reroof = 50+ year leak protection. Single boot service $150-$500. Free pipe boot condition inspection on every visit." />
    </>
  );
}
