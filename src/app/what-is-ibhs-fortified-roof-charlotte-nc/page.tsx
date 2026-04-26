import { Metadata } from 'next';
import { Phone, Shield } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-ibhs-fortified-roof-charlotte-nc`;
const QUESTION = 'What is an IBHS Fortified roof and how do I get one in Charlotte NC?';
const ANSWER =
  "IBHS Fortified Roof is a third-party certification program from the Insurance Institute for Business & Home Safety (IBHS) that designates roofs built or upgraded to a higher resilience standard than minimum building code. Fortified-certified roofs in Charlotte NC qualify for 10-30% homeowner insurance premium discounts from most major NC carriers (State Farm, Allstate, USAA, Liberty Mutual, Travelers, Nationwide, Erie, Farm Bureau). Three Fortified levels: (1) FORTIFIED ROOF (entry level) — sealed roof deck with self-adhered membrane covering ALL decking seams + enhanced 6-nail shingle pattern + drip edge + ring-shank or screw fasteners + impact-resistant rated shingles (Class 3+); (2) FORTIFIED SILVER — Roof level + reinforced gable end bracing + impact-resistant glazing on doors near gable ends; (3) FORTIFIED GOLD — Silver level + complete continuous load path connecting roof to foundation. Roof level certification is the most common (95%+ of Charlotte NC Fortified projects). Cost: Fortified roof upgrade adds $500-$2,500 to typical Charlotte reroof (vs standard install). Process: (1) hire IBHS-certified contractor (Best Roofing Now is certified); (2) install per Fortified standards; (3) Fortified Home Evaluator photo-documents construction; (4) IBHS issues Designation Certificate; (5) submit to insurance carrier for premium discount. Annual savings: typical Charlotte home $200-$700/year insurance reduction = 1-7 year payback on upgrade cost.";

const followUpFAQs = [
  {
    question: 'How much insurance discount does a Fortified roof give me in Charlotte NC?',
    answer:
      "NC homeowner insurance discount by Fortified level (varies by carrier): FORTIFIED ROOF 10-20% discount typical (some carriers offer 25-30%); FORTIFIED SILVER 15-25%; FORTIFIED GOLD 20-35%. Real-world Charlotte example: $2,800/year homeowner premium with 15% Fortified Roof discount = $420/year savings. Carriers honoring IBHS discount in NC: State Farm, Allstate, USAA, Liberty Mutual, Travelers, Nationwide, Erie, Farm Bureau, Auto-Owners, North Carolina Farm Bureau, Erie Insurance, Cincinnati Insurance. Carriers NOT typically honoring: some non-admitted/surplus lines carriers, captive carriers without NC Fortified program. Verify with your specific carrier before reroof — Best Roofing Now's free assessment includes carrier-specific discount estimation.",
  },
  {
    question: 'What\'s the cost difference between standard and Fortified roof in Charlotte NC?',
    answer:
      "Charlotte NC Fortified roof upgrade cost (vs standard install on typical 30-square home): SEALED DECK MEMBRANE — $400-$1,200 added (full peel-and-stick over all decking seams, beyond standard valley/eave coverage); ENHANCED FASTENING — $200-$500 added (6-nail pattern + ring-shank nails); CLASS 3+ IMPACT-RESISTANT SHINGLES — $300-$1,200 added (Class 3 minimum for Fortified Roof, Class 4 recommended for max insurance discount); FORTIFIED HOME EVALUATOR FEE — $200-$500 (third-party photo documentation); IBHS DESIGNATION FEE — $0-$50. Total Fortified upgrade: $1,100-$3,450 over standard reroof. Annual insurance savings $200-$700/year = 1-7 year payback. Best ROI for long-term homeowners (5+ year residence).",
  },
  {
    question: 'Can I retrofit my existing Charlotte NC roof to Fortified standard?',
    answer:
      "Conditional yes — full Fortified retrofit requires reroof (impossible to add sealed deck membrane without removing shingles). Partial retrofits are possible but provide LIMITED insurance benefit: (1) gable end bracing retrofit (Silver level component) — $1,500-$4,000, useful for older homes with weak gables; (2) impact-resistant shingle replacement during normal reroof cycle — qualifies for Class 4 impact discount ($200-$700/year) without full Fortified Roof certification; (3) ring-shank fastener upgrade during reroof — $200-$500 added. Best practice: schedule full Fortified Roof certification during your next reroof for maximum insurance benefit. Best Roofing Now's free reroof estimate includes Fortified pricing breakdown.",
  },
  {
    question: 'Is the IBHS Fortified program available throughout Charlotte NC?',
    answer:
      "Yes — IBHS Fortified program covers all of North Carolina (full state participation since 2010), including Mecklenburg County, Cabarrus, Union, Iredell, Gaston, Lincoln, and surrounding counties. Lake Norman waterfront areas (Cornelius, Davidson, Huntersville, Mooresville) particularly benefit due to higher wind exposure and elevated insurance rates pre-Fortified. Charlotte NC has 200+ IBHS-certified contractors including Best Roofing Now. Available evaluators: independently licensed Fortified Home Evaluators serve Charlotte metro typically within 1-2 weeks scheduling. Designation typically issued within 30-45 days of completed install. Insurance carriers process discount within 30 days of Designation Certificate submission.",
  },
  {
    question: 'What\'s the difference between Class 4 impact and IBHS Fortified roof?',
    answer:
      "CLASS 4 IMPACT RESISTANCE — UL 2218 standard testing certification for shingles ONLY (single-component certification), measures resistance to 2-inch steel ball impact at high velocity simulating large hail. Insurance discount: 10-30% from most NC carriers, varies by carrier. IBHS FORTIFIED ROOF — comprehensive whole-roof-system certification covering decking + sealed membrane + fastening + impact-resistant shingles + drip edge + verified install. Insurance discount: 15-30% typical NC. KEY DIFFERENCE: Class 4 covers shingle product only; Fortified covers entire roof assembly. Both qualify for insurance discounts (often stackable when both present). Best Roofing Now recommends combining both: install Class 4 shingles within Fortified Roof certification for maximum protection AND maximum insurance discount.",
  },
];

export const metadata: Metadata = {
  title: 'What Is an IBHS Fortified Roof and How Do I Get One in Charlotte NC?',
  description:
    "IBHS Fortified Roof = third-party hurricane-resilience certification. Charlotte NC 10-30% insurance discount ($200-$700/year savings). 3 levels: Roof, Silver, Gold. Upgrade cost $1,100-$3,450.",
  keywords: [
    'what is IBHS Fortified roof Charlotte NC',
    'Fortified roof certification',
    'IBHS Fortified insurance discount',
    'NC Fortified roof contractor',
    'Fortified Silver Gold',
    'sealed deck membrane',
    'Fortified Home Evaluator',
    'NC home insurance discount roof',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is an IBHS Fortified Roof and How Do I Get One in Charlotte NC?',
    description: 'Charlotte NC 10-30% insurance discount. 1-7 yr payback on upgrade.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsIBHSFortifiedPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is IBHS Fortified Roof?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is an IBHS Fortified Roof and How Do I Get One in Charlotte NC?" description="IBHS Fortified roof certification guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'IBHS Fortified?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is IBHS Fortified Roof Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'IBHS Fortified Roof — third-party certification beyond minimum code',
          'Charlotte NC insurance discount 10-30% (varies by carrier)',
          'Annual savings $200-$700/year typical Charlotte home',
          'FORTIFIED ROOF — sealed deck + 6-nail pattern + Class 3+ shingles + drip edge',
          'FORTIFIED SILVER — Roof + reinforced gable bracing + impact glazing',
          'FORTIFIED GOLD — Silver + continuous load path roof to foundation',
          'Upgrade cost $1,100-$3,450 over standard reroof',
          'Payback period 1-7 years; best for 5+ year homeowners',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'IBHS Fortified?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC IBHS Fortified Roof Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is an IBHS Fortified Roof and How Do I Get One in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Fortified Estimate</Button>
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

      <CTASection title="IBHS Fortified Roof Certification" subtitle="Best Roofing Now is IBHS-certified. Free Fortified pricing breakdown with carrier-specific insurance discount estimation. 1-7 year payback typical." />
    </>
  );
}
