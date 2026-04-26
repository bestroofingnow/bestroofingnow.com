import { Metadata } from 'next';
import { Phone, Grid3x3 } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-roof-decking-charlotte-nc`;
const QUESTION = 'What is roof decking and how do I know if mine needs replacement in Charlotte NC?';
const ANSWER =
  "Roof decking (also called sheathing) is the structural plywood or OSB (oriented strand board) layer attached to roof rafters/trusses, forming the SOLID base on which underlayment, shingles, and all other roof materials are installed. It bears the weight of the entire roof system plus snow, wind, and worker loads. NC IRC §R803 requires minimum 7/16-inch OSB or 15/32-inch plywood for asphalt-shingle roofs. Common Charlotte materials: 15/32-inch CDX plywood (premium, $25-$35/sheet, 50+ yr lifespan), 7/16-inch OSB (most common production builds, $15-$25/sheet, 30-50 yr lifespan), 5/8-inch plywood (heavy snow areas, $35-$45/sheet, premium upgrade). Replace decking when ANY of these 6 conditions: (1) sponginess underfoot when walked on (rotted/saturated); (2) visible holes or daylight from inside attic; (3) water staining covering 25%+ of decking surface; (4) extensive delamination (plywood layers separating); (5) widespread fungal or mold growth; (6) sagging between rafters indicating structural failure. Cost: partial decking replacement during reroof $80-$200 per 4x8 sheet installed, full decking replacement on 30-square Charlotte home $4,500-$12,000 (typically 5-15% of decking sheets need replacement on average reroof — adds $400-$1,500 to typical reroof). Best Roofing Now's free inspection includes decking condition assessment.";

const followUpFAQs = [
  {
    question: 'How much decking typically needs replacement during a Charlotte reroof?',
    answer:
      "On average Charlotte NC reroofs, 5-15% of decking sheets need replacement (typically 3-12 sheets out of 60-100 total sheets on a 30-square roof). Factors increasing replacement: (1) age 25+ years (legacy plywood quality); (2) ventilation problems (chronic moisture); (3) prior leak damage; (4) tree-shaded canopy areas (Plaza Midwood, Dilworth, Myers Park, Eastover, Cotswold, Beverly Woods); (5) lakefront LKN salt-air exposure; (6) chronic ice damming. Factors reducing replacement: (1) post-2010 OSB construction; (2) good ventilation; (3) no leak history; (4) intact gutters. Best Roofing Now's free inspection includes decking percentage estimate — typical add to reroof estimate $400-$1,500.",
  },
  {
    question: 'Can I just shingle over rotted decking in Charlotte NC?',
    answer:
      "Absolutely not — installing shingles over rotted decking is a major code violation and the most common cause of premature reroof failure. Risks: (1) NC IRC §R803 requires 'sound decking' as base for any new roofing material; (2) shingles fail to adhere properly to compromised substrate (warranty void); (3) nails don't grip in rotted wood (high blow-off risk in storms); (4) underlying decking continues rotting beneath new shingles, requiring full tear-off-and-replace within 5-10 years; (5) Mecklenburg County permit inspection will fail; (6) homeowner liability if structural failure causes injury. Always replace damaged decking during reroof — non-negotiable code requirement.",
  },
  {
    question: 'What\'s the difference between plywood and OSB roof decking?',
    answer:
      "PLYWOOD (CDX = Construction Douglas-fir Exterior, X-grade) — premium choice, $25-$35/sheet, 50+ year lifespan, better moisture resistance, more dimensional stability, slightly heavier (3.2 lb/sq ft for 15/32-inch). OSB (Oriented Strand Board) — most common production build choice, $15-$25/sheet, 30-50 year lifespan, more cost-effective ($10/sheet less), modern OSB matches plywood structural performance, more susceptible to swelling if exposed to moisture during construction. Best practice: use plywood for premium Charlotte reroofs, OSB acceptable for budget-conscious. Both meet NC IRC §R803 code if rated and installed per manufacturer specs.",
  },
  {
    question: 'How long does roof decking last in Charlotte NC?',
    answer:
      "Charlotte NC roof decking lifespan: CDX plywood 50+ years (longest, premium); 15/32-inch OSB 30-50 years (most common modern); 7/16-inch OSB 25-40 years (older code minimum); 1x6 lumber decking (pre-1960 homes) 75-100+ years (legacy material rarely seen now). Lifespan reducers: chronic ventilation problems (cuts 30-50% off lifespan), water leaks (concentrated rot in affected areas), high humidity zones (lakefront LKN), tree shade with prolonged moisture (north-facing canopy slopes). Decking typically outlives 1-2 shingle replacements (60-100+ year usable life with proper maintenance) — partial replacement during reroof is normal, full replacement is rare unless there's catastrophic failure.",
  },
  {
    question: 'Should I upgrade my decking to thicker plywood during a Charlotte reroof?',
    answer:
      "Conditional yes — upgrade considerations: (1) UPGRADE to 5/8-inch plywood if installing heavy slate, tile, or stone-coated steel ($800-$2,000 added cost — required by manufacturer specs); (2) UPGRADE to plywood from OSB if you have ventilation issues you can't fully fix ($300-$1,500 added cost); (3) UPGRADE to 15/32-inch from 7/16-inch only if specifically required for hurricane/wind code compliance in coastal areas (NOT typically required in Charlotte). For most Charlotte reroofs with standard architectural shingles or aluminum standing-seam, existing 7/16-inch or 15/32-inch decking is adequate. Best Roofing Now's free assessment recommends upgrade only when material/code requires.",
  },
];

export const metadata: Metadata = {
  title: 'What Is Roof Decking and How Do I Know If Mine Needs Replacement in Charlotte NC?',
  description:
    "Roof decking = plywood/OSB structural base. NC IRC §R803 requires 7/16-inch OSB or 15/32-inch plywood. Charlotte reroofs typically replace 5-15% of decking ($400-$1,500 add-on).",
  keywords: [
    'what is roof decking Charlotte NC',
    'roof sheathing replacement',
    'plywood vs OSB decking',
    'NC IRC R803 decking',
    'rotted decking replacement',
    'CDX plywood roof',
    'roof decking cost Charlotte',
    'decking inspection',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Roof Decking and How Do I Know If Mine Needs Replacement in Charlotte NC?',
    description: 'NC IRC §R803 requires sound decking. Typical Charlotte reroof: 5-15% replacement.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsRoofDeckingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is Roof Decking?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is Roof Decking and How Do I Know If Mine Needs Replacement in Charlotte NC?" description="Roof decking guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Decking?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is Roof Decking Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Roof decking — structural plywood/OSB layer on rafters/trusses, base for all roof materials',
          'NC IRC §R803 requires 7/16-inch OSB or 15/32-inch plywood minimum',
          '15/32-inch CDX plywood — $25-$35/sheet, 50+ yr (premium)',
          '7/16-inch OSB — $15-$25/sheet, 30-50 yr (most common production)',
          'Replace when — sponginess underfoot, daylight visible, 25%+ water staining',
          'Replace when — delamination, mold growth, sagging between rafters',
          'Typical Charlotte reroof — 5-15% of sheets need replacement ($400-$1,500)',
          'NEVER shingle over rotted decking — major NC code violation',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Decking?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Grid3x3 className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Decking Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is Roof Decking and How Do I Know If Mine Needs Replacement in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Decking Inspection</Button>
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

      <CTASection title="Decking Inspection Included Free" subtitle="Best Roofing Now's free inspection identifies decking condition and provides written estimate including any partial replacement needed. NC IRC §R803 code-compliant install." />
    </>
  );
}
