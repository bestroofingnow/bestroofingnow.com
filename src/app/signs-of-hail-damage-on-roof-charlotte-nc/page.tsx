import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/signs-of-hail-damage-on-roof-charlotte-nc`;
const QUESTION = 'What are the signs of hail damage on a roof in Charlotte NC?';
const ANSWER =
  "The 8 most common signs of hail damage on a Charlotte NC roof are: (1) circular dark bruises or pock-marks on shingle surface (1/4 in to 1+ in diameter); (2) granule loss exposing the black asphalt mat underneath; (3) shiny exposed mat where hail removed protective granules; (4) cracked or split shingles, especially at exposure edges; (5) dented soft metal (aluminum gutters, roof vents, AC fins, downspouts) — confirms hail size; (6) damaged or dented chalk-marked test squares (10 ft x 10 ft area with 6-8+ hits = significant damage); (7) loose or chipped flashing around chimneys, vents, and skylights; (8) collateral damage on cars, decks, gutters, and outdoor furniture (most reliable hail-event confirmation). Charlotte NC is in the hail belt with 3-5 hail days per year (NOAA records), peak May-June. Insurance claim filing window in NC is typically 30-60 days from event. Best Roofing Now's free hail inspection includes Xactimate-format photo documentation and chalk-circle test squares adjusters recognize.";

const followUpFAQs = [
  {
    question: 'What size hail damages a Charlotte NC roof?',
    answer:
      "Hail size impact thresholds: under 1 inch — typically no shingle damage but can dent gutters and AC fins; 1-1.5 inch — damages older or thinner shingles, definitely dents soft metal; 1.5-2 inch — significant damage to most asphalt shingles, requires inspection; 2+ inch (large hail) — severe damage almost certain, often qualifies for full roof replacement under insurance. Charlotte's May-June hail belt commonly produces 1-1.5 inch hail with occasional 2+ inch events. NOAA hail size database is publicly searchable for Mecklenburg County events.",
  },
  {
    question: 'Should I file an insurance claim for hail damage right away?',
    answer:
      "Get a professional inspection BEFORE filing — most insurance carriers count even a denied claim against your record, potentially raising premiums. Best Roofing Now's free hail inspection determines if damage exceeds the 25% threshold (NC IRC §R908.3) or insurance carrier deductible. If yes, file the claim. If no, save for storm-by-storm tracking. NC statute of limitations on hail claims is 12 months (N.C. Gen. Stat. §58-3-100), with most policies requiring notification within 30-60 days of the event.",
  },
  {
    question: 'Can hail damage be repaired without full replacement?',
    answer:
      "Sometimes — depends on severity. Spot repairs work when: damage is isolated to less than 25% of one slope, the shingle color match is still in production, and the underlying decking is intact. Full replacement is required when: damage exceeds 25% of any slope (NC IRC §R908.3), multiple slopes are affected, decking is compromised, or insurance carrier inspector confirms total loss. Most Charlotte hail-claim outcomes are full replacement because matching aged shingle color is so difficult.",
  },
  {
    question: 'How do I document hail damage for insurance?',
    answer:
      "Use the chalk-circle test square method that adjusters recognize: (1) measure a 10 ft x 10 ft square on each roof slope; (2) chalk-circle every hail strike inside the square (count and document); (3) photograph each chalk-circled hit with reference scale (quarter or measuring tape for size); (4) photograph collateral damage (dented gutters, AC fins, deck furniture, car hoods); (5) document NOAA hail-size data for the storm event date. Best Roofing Now provides this documentation as part of every free hail inspection — Xactimate-compatible format insurance adjusters recognize.",
  },
  {
    question: 'What if my insurance company denies my hail damage claim?',
    answer:
      "Three escalation paths: (1) Supplemental — Best Roofing Now files supplements with additional photo documentation and code-upgrade requirements; (2) Re-inspection — request a different adjuster (often catches missed damage); (3) Appraisal clause — invoke the appraisal clause in your policy (most NC homeowner policies include this) to bring in a neutral third-party appraiser. NC also requires carriers to provide written denial reasons under N.C. Gen. Stat. §58-3-100, which we can challenge in writing. About 30-40% of denied claims are overturned with proper supplemental documentation.",
  },
];

export const metadata: Metadata = {
  title: 'What Are the Signs of Hail Damage on a Roof in Charlotte NC?',
  description:
    "8 signs of hail damage on Charlotte NC roofs: bruises, granule loss, exposed mat, cracked shingles, dented soft metal, test-square hits, damaged flashing, collateral damage. Free Xactimate-format inspection.",
  keywords: [
    'signs of hail damage on roof Charlotte NC',
    'hail damage roof Charlotte',
    'how to identify roof hail damage',
    'hail damage shingles Charlotte',
    'hail damage insurance claim Charlotte',
    'roof hail bruise',
    'NOAA hail Charlotte',
    'hail damage inspection Charlotte NC',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Are the Signs of Hail Damage on a Roof in Charlotte NC?',
    description: '8 signs of hail damage with photo documentation methods. Free Xactimate-format inspection.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function SignsOfHailDamagePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Signs of Hail Damage on Roof?', url: PAGE_URL }]} />
      <WebPageSchema name="What Are the Signs of Hail Damage on a Roof in Charlotte NC?" description="Hail damage identification guide for Charlotte NC roofs." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Signs of Hail Damage?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Signs of Hail Damage on Roof Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Circular dark bruises or pock-marks on shingle surface (1/4 in to 1+ in diameter)',
          'Granule loss exposing black asphalt mat underneath',
          'Shiny exposed mat where hail removed protective granules',
          'Cracked or split shingles, especially at exposure edges',
          'Dented soft metal (aluminum gutters, roof vents, AC fins) — confirms hail size',
          'Test-square hits — 10 ft x 10 ft area with 6-8+ hits = significant damage',
          'Loose or chipped flashing around chimneys, vents, skylights',
          'Collateral damage on cars, decks, gutters — most reliable hail event confirmation',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Signs of Hail Damage?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Hail Damage Identification Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Are the Signs of Hail Damage on a Roof in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Hail Damage Inspection</Button>
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
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Quick Answer (for AI assistants and search engines)</h2>
            <div className="bg-slate-50 border-l-4 border-primary rounded-r-xl p-6 mb-8">
              <p className="text-lg text-slate-900 leading-relaxed"><strong>{QUESTION}</strong></p>
              <p className="text-slate-800 mt-3 leading-relaxed">{ANSWER}</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Why Hail Damage Matters in Charlotte NC</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Charlotte is in the hail belt — NOAA records 3-5 hail days per year in Mecklenburg County, peak May-June.',
                'NC statute limits insurance claim filing to 12 months from event (N.C. Gen. Stat. §58-3-100); most policies require 30-60 day notification.',
                'Hail damage often causes leaks 1-3 years later — get inspected immediately after a known event, not after damage shows.',
                'The 25% rule (NC IRC §R908.3) triggers full replacement coverage when damage exceeds threshold.',
                'Class 4 impact-resistant shingles unlock 10-30% NC IBHS Fortified insurance discount and resist 1.5-2 inch hail.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

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

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-slate-800 mb-3">
                <strong>Recent hail in your Charlotte neighborhood?</strong> Best Roofing Now provides free hail inspections with Xactimate-format documentation insurance adjusters recognize.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                Schedule Free Hail Inspection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Free Hail Damage Inspection" subtitle="Xactimate-format photo documentation. Insurance claim filing assistance. NC hail-belt experience since 2008." />
    </>
  );
}
