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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-class-4-impact-resistance-charlotte-nc`;
const QUESTION = 'What is Class 4 impact resistance and is it worth it for my Charlotte NC roof?';
const ANSWER =
  "Class 4 impact resistance is the highest UL 2218 rating for asphalt-shingle hail damage resistance, certified by Underwriters Laboratories testing. The UL 2218 standard drops a 2-inch steel ball from 20 feet onto the shingle surface — Class 4 shingles must show NO cracking on either side after 2 strikes (Class 1 shingles fail at 1.25-inch ball, Class 2 at 1.5-inch, Class 3 at 1.75-inch). For Charlotte NC homeowners, Class 4 shingles provide 3 critical benefits: (1) HAIL DAMAGE RESISTANCE — Charlotte sees 1-3 hailstorms per year (typically 0.75-1.5 inch hail, occasional 2+ inch events), Class 4 shingles withstand most hail without claim-triggering damage; (2) NC INSURANCE DISCOUNT — most major NC carriers (State Farm, Allstate, USAA, Liberty Mutual, Travelers, Nationwide, Erie, Farm Bureau) offer 10-30% homeowner premium discount for verified Class 4 install; (3) EXTENDED LIFESPAN — Class 4 shingles typically last 5-10 years longer than Class 1-3 due to enhanced asphalt mat and reinforced fiberglass. Charlotte popular Class 4 lines: GAF Timberline ARMORShield II ($120-$160/square), CertainTeed Landmark IR ($110-$150/square), OC TruDefinition Duration STORM ($120-$170/square), Atlas StormMaster Slate ($130-$180/square). Cost premium vs standard architectural: $300-$1,200 added on typical 30-square Charlotte home. Insurance discount payback: $200-$700/year savings = 1-6 year payback. Best Roofing Now installs all major Class 4 lines.";

const followUpFAQs = [
  {
    question: 'How does Class 4 hail testing work?',
    answer:
      "UL 2218 standard testing protocol: (1) shingle sample placed on standard plywood substrate; (2) 2-inch diameter steel ball dropped from 20 feet (creates impact equivalent to 90 MPH terminal velocity, simulating large hail); (3) shingle struck twice in same location at high precision; (4) sample inspected for cracking, splitting, or fracture on BOTH the surface AND underside (test fails if either side cracks); (5) certification awarded only if PASSING SAMPLE — no cracking on either side. Compared to lower classes: Class 1 (1.25-inch ball, 12 ft drop), Class 2 (1.5-inch, 15 ft), Class 3 (1.75-inch, 17 ft), Class 4 (2-inch, 20 ft). Class 4 testing is 2.5x more demanding than Class 1.",
  },
  {
    question: 'How much does Class 4 impact resistance cost in Charlotte NC?',
    answer:
      "Charlotte NC Class 4 shingle pricing: standard architectural Class 1-3 — $90-$140/square material; Class 4 impact-resistant — $120-$180/square material (premium $30-$40/square or 25-35% over standard). On 30-square Charlotte home, Class 4 upgrade adds approximately $900-$1,200 in material cost over standard, plus same labor. Total reroof cost: standard 30-sq Charlotte home $11,250-$15,750; Class 4 upgrade $14,250-$19,500. Insurance discount payback: $200-$700/year savings means 1-6 year payback period. Best for: long-term Charlotte homeowners (5+ year residence), homes in known hail-prone microclimates (north Mecklenburg, lakefront LKN), homes with high insurance premiums.",
  },
  {
    question: 'Will my Charlotte NC insurance carrier give me a Class 4 discount?',
    answer:
      "Most major NC carriers do — verify with your specific agent before reroof. Carriers honoring NC Class 4 discount: STATE FARM 15-25%, ALLSTATE 10-20%, USAA 15-30% (best discount), LIBERTY MUTUAL 10-15%, TRAVELERS 10-20%, NATIONWIDE 10-15%, ERIE INSURANCE 15-25%, NC FARM BUREAU 10-20%, AUTO-OWNERS 10-15%. Carriers NOT typically honoring: some non-admitted/surplus lines carriers, captive carriers without Class 4 program. Required documentation: Manufacturer's Certificate of Class 4 Compliance + contractor invoice showing specific Class 4 line installed (Best Roofing Now provides both). Discount typically applies within 30 days of submission.",
  },
  {
    question: 'Are Class 4 shingles really hail-proof in Charlotte?',
    answer:
      "Hail-RESISTANT, not hail-PROOF — Class 4 shingles withstand most Charlotte hail (0.75-1.75 inch typical) without claim-triggering damage but very large hail (2.5+ inch, rare in Charlotte) can still cause damage. Real-world performance data: Class 4 shingles experience 70-85% fewer hail damage claims than Class 1-3 shingles in same hail event. After major hail event in your Charlotte neighborhood: Class 1-3 shingles often show widespread bruising and granule loss requiring full reroof; Class 4 shingles typically pass inspection with no claim. Important: Class 4 protection only valid if installed within manufacturer specifications (proper fastening, underlayment) — Best Roofing Now's Master Elite/SELECT/Platinum certifications ensure proper install.",
  },
  {
    question: 'Should I choose Class 4 or IBHS Fortified Roof for Charlotte?',
    answer:
      "Best answer: BOTH — they stack for maximum benefit. Class 4 is a SHINGLE-LEVEL certification (single product). IBHS Fortified Roof is a WHOLE-ROOF-SYSTEM certification (decking, underlayment, fastening, drip edge, plus impact-resistant shingles). Combined approach: install Class 4 impact-resistant shingles WITHIN an IBHS Fortified Roof certification. Benefits: (1) maximum hail resistance from Class 4 shingles; (2) maximum wind/storm resistance from Fortified system; (3) STACKED insurance discount potential (some carriers honor both, total 25-45% premium discount); (4) maximum protection for long-term resilience. Cost: combined upgrade adds $1,400-$4,000 over standard reroof. Best for: long-term homeowners in Charlotte's hail-prone climate.",
  },
];

export const metadata: Metadata = {
  title: 'What Is Class 4 Impact Resistance and Is It Worth It for My Charlotte NC Roof?',
  description:
    "Class 4 = highest UL 2218 hail rating (2-inch steel ball, 20 ft drop, no cracking). Charlotte NC 10-30% insurance discount. Cost premium $300-$1,200. Payback 1-6 years.",
  keywords: [
    'what is Class 4 impact resistance Charlotte NC',
    'Class 4 shingles Charlotte',
    'UL 2218 hail rating',
    'Class 4 insurance discount NC',
    'GAF ARMORShield',
    'CertainTeed Landmark IR',
    'OC Duration STORM',
    'hail resistant shingles Charlotte',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Class 4 Impact Resistance and Is It Worth It for My Charlotte NC Roof?',
    description: 'Highest UL 2218 hail rating. NC 10-30% insurance discount.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsClass4Page() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is Class 4 Impact?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is Class 4 Impact Resistance and Is It Worth It for My Charlotte NC Roof?" description="Class 4 impact-resistant shingle guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Class 4?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is Class 4 Impact Resistance Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Class 4 — highest UL 2218 hail impact rating (2-inch ball, 20 ft drop)',
          'NC insurance discount 10-30% from most major carriers',
          'Annual savings $200-$700/year typical Charlotte home',
          'Cost premium $300-$1,200 over standard architectural',
          'Charlotte popular lines — GAF ARMORShield II, CertainTeed Landmark IR, OC Duration STORM, Atlas StormMaster',
          'Payback period 1-6 years',
          '70-85% fewer hail claims than Class 1-3 shingles',
          'Best stacked with IBHS Fortified Roof for maximum benefit',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Class 4?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Class 4 Hail Resistance Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is Class 4 Impact Resistance and Is It Worth It for My Charlotte NC Roof?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Class 4 Estimate</Button>
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

      <CTASection title="Class 4 Impact-Resistant Shingles Available" subtitle="Best Roofing Now installs all major Class 4 lines (GAF, CertainTeed, OC, Atlas). Free written estimate with carrier-specific insurance discount estimation. Stacks with IBHS Fortified." />
    </>
  );
}
