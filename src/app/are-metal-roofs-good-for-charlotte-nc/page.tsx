import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Award, CheckCircle2, ArrowRight } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/are-metal-roofs-good-for-charlotte-nc`;
const QUESTION = 'Are metal roofs good for Charlotte NC homes?';
const ANSWER =
  "Yes — metal roofs are excellent for Charlotte NC homes for 6 reasons: (1) lifespan 50+ years (vs 25-50 for asphalt) — typically the LAST roof you buy; (2) hail resistance Class 4 rated for 1.5-2 inch hail (Charlotte hail belt protection); (3) wind resistance 150+ MPH (NC code minimum is 110 MPH); (4) 75-85% resale ROI on appraisal (best total return of any roofing material); (5) energy efficiency — reflective surfaces drop attic temps 20-40°F vs dark asphalt; (6) NC IBHS Fortified Class 4 unlocks 10-30% homeowner insurance discount. Standing-seam metal pricing $9-$30 per sq ft installed depending on material: 26-gauge steel SMP $9-$12, 24-gauge steel PVDF Kynar $11-$14, aluminum $13-$17 (lakefront LKN salt-air immune), zinc $19-$25 (modern architectural), copper $24-$30 (historic and luxury). Best Roofing Now installs all 4 metals with PVDF Kynar 30-40 yr finish warranties, S-5! solar-clamp compatibility, and floating clip systems for proper thermal expansion (1/8 inch per 10 feet).";

const followUpFAQs = [
  {
    question: 'Are metal roofs noisy in Charlotte NC rainstorms?',
    answer:
      "Modern metal roofing is NOT significantly noisier than asphalt. The myth comes from old metal-on-bare-decking installations (barn roofs). Modern installs include: synthetic underlayment, attic insulation (typically R-30 to R-49), and decking — these reduce sound to comparable or lower than asphalt. Independent acoustic testing shows modern metal roofs at 52-57 dB during heavy rain, vs asphalt at 50-55 dB. The 2-3 dB difference is barely perceptible and often masked by ceiling drywall and insulation.",
  },
  {
    question: 'Will a metal roof attract lightning in Charlotte storms?',
    answer:
      "No — metal roofs do NOT attract lightning. Lightning strikes the highest, closest path to ground based on elevation and topology, NOT material conductivity. In fact, metal roofs are SAFER in lightning strikes because they conduct the strike energy across the entire roof surface and dissipate it harmlessly to ground (asphalt shingles can ignite from strike heat). Insurance carriers do not differentiate premium for metal vs asphalt based on lightning. Charlotte gets 30-40 thunderstorm days per year on average.",
  },
  {
    question: 'What\'s the best metal roof for Lake Norman lakefront Charlotte homes?',
    answer:
      "Aluminum is the best choice for Lake Norman lakefront properties (Cornelius, Davidson, Huntersville, Mooresville, Denver, Sherrills Ford). Aluminum is 100% salt-air immune — it doesn't rust or corrode in marine environments. Steel can rust at coastal locations, copper develops accelerated patina, and zinc is sometimes affected. Standard aluminum standing-seam pricing $13-$17/sq ft installed with PVDF Kynar 500 finish for 30-40 year warranty. Lakefront homes also benefit from 150+ MPH wind ratings during Lake Norman wind-fetch storms.",
  },
  {
    question: 'How much more does a metal roof cost vs asphalt in Charlotte NC?',
    answer:
      "Metal costs roughly 2-3x more upfront vs architectural asphalt: 30-square Charlotte home asphalt $11,000-$22,000 vs metal $27,000-$48,000 (steel/aluminum). Premium metals (zinc, copper): $57,000-$120,000+. BUT metal lifecycle cost is typically lower over 50 years: asphalt requires 2 reroofs ($35K-$80K total) vs metal lasting one cycle ($30K-$50K total). Plus 75-85% resale ROI on metal vs 60-70% on asphalt = $5,000-$15,000 additional appraisal value. Best total ROI in roofing material categories.",
  },
  {
    question: 'Does Charlotte HOA approval allow metal roofs?',
    answer:
      "Most Charlotte HOAs allow metal roofs in low-profile finishes — Charcoal, Pewter, Slate Gray, Hunter Green, Terra Cotta — but restrict bright or unusual colors. Premium estate communities (Eastover, Foxcroft, Quail Hollow, The Peninsula) typically allow standing-seam metal as a premium upgrade. Production HOA neighborhoods (Ballantyne, Providence, Steele Creek production builds) sometimes restrict metal entirely or limit to historic-styled stone-coated steel. Best Roofing Now coordinates HOA architectural-review-board (ARB) submission with material samples; typical 2-4 week review with 95%+ first-pass approval rate.",
  },
];

export const metadata: Metadata = {
  title: 'Are Metal Roofs Good for Charlotte NC Homes?',
  description:
    "Yes — metal roofs are excellent for Charlotte NC: 50+ yr lifespan, Class 4 hail resistance, 150+ MPH wind, 75-85% resale ROI, 10-30% insurance discount. $9-30/sq ft installed.",
  keywords: [
    'are metal roofs good for Charlotte NC',
    'metal roof Charlotte NC',
    'standing seam metal Charlotte',
    'metal roof cost Charlotte',
    'metal roof noise',
    'metal roof lightning',
    'aluminum roof Lake Norman',
    'metal vs asphalt Charlotte NC',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Are Metal Roofs Good for Charlotte NC Homes?',
    description: 'Yes — 50+ yr lifespan, Class 4 hail, 150+ MPH wind, 75-85% resale ROI.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function AreMetalRoofsGoodPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Are Metal Roofs Good for Charlotte NC?', url: PAGE_URL }]} />
      <WebPageSchema name="Are Metal Roofs Good for Charlotte NC Homes?" description="Metal roof analysis for Charlotte NC homes." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Are Metal Roofs Good?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Are Metal Roofs Good for Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Lifespan 50+ years vs 25-50 for asphalt — typically last roof you buy',
          'Class 4 hail resistance — 1.5-2 inch hail protection',
          'Wind resistance 150+ MPH (NC code min 110 MPH)',
          '75-85% resale ROI — best total return of any roofing material',
          'Energy efficiency — drops attic temps 20-40°F vs dark asphalt',
          'NC IBHS Fortified Class 4 — 10-30% homeowner insurance discount',
          '26-gauge steel $9-12/sq ft, 24-gauge $11-14, aluminum $13-17, zinc $19-25, copper $24-30',
          'Aluminum salt-air immune — best for Lake Norman lakefront',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Are Metal Roofs Good?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Metal Roofing Analysis</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">Are Metal Roofs Good for Charlotte NC Homes?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Metal Roof Estimate</Button>
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

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Why Metal Performs Well in Charlotte Climate</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Charlotte hail belt (NOAA 3-5 hail days/year) — Class 4 metal handles 1.5-2 inch hail without dent.',
                'August-October tropical remnants — 150+ MPH wind ratings handle Florence/Idalia/Helene patterns.',
                'Humid summers — metal does not rot, mold, or attract algae like asphalt.',
                'Lakefront salt air (Lake Norman) — aluminum is 100% corrosion-immune.',
                'Energy efficiency — reflective surface drops attic temps 20-40°F vs dark asphalt.',
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
          </div>
        </div>
      </section>

      <CTASection title="The Last Roof You'll Ever Buy" subtitle="50+ year lifespan. Class 4 hail. 150+ MPH wind. 10-30% NC insurance discount. Free metal roof estimate." />
    </>
  );
}
