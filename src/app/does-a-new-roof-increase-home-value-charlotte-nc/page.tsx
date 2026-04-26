import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/does-a-new-roof-increase-home-value-charlotte-nc`;
const QUESTION = 'Does a new roof increase home value in Charlotte NC?';
const ANSWER =
  "Yes — a new roof in Charlotte NC adds $12,000-$15,000 in home value on average (per the 2024 Cost vs Value Report) and increases sale closing speed by 10-15 fewer days on market. ROI by material: architectural asphalt shingle 60-70% cost recovery on appraisal, Class 4 impact-resistant 65-75%, designer/luxury shingles 55-65%, standing-seam metal 75-85%, real slate 85-95% (premium homes only). Beyond appraisal, a new roof helps with: (1) FHA/VA loan approval (lenders require 2-5+ years remaining roof lifespan via certification); (2) homeowner insurance underwriting (older roofs trigger ACV vs RCV coverage); (3) buyer confidence (visible major systems make pricing easier); (4) closing speed (no negotiating roof credits or escrow holdbacks). Best Roofing Now provides FHA/VA roof certifications ($200-$450) and pre-sale roof inspections to maximize your return.";

const followUpFAQs = [
  {
    question: 'How much does a new roof actually add to my Charlotte home value?',
    answer:
      "Per the 2024 Remodeling Cost vs Value Report (Charlotte NC region): asphalt shingle reroof adds $12,000-$15,000 average appraisal value with 60-70% cost recovery. Metal roof recovery is higher (75-85%) but also costs more upfront. The actual home-value lift depends on: (1) roof material vs neighborhood norms; (2) buyer's market vs seller's market timing; (3) home age (older homes benefit more from roof refresh); (4) overall home condition (a new roof on a poorly maintained home is less impactful). Best appraisal lift comes from matching neighborhood material standards.",
  },
  {
    question: 'Should I replace my roof before selling my Charlotte home?',
    answer:
      "Replace your roof before selling if: (1) the roof is 18-25+ years old (visible age concerns most buyers); (2) the roof has chronic leaks or known issues that will surface during inspection; (3) FHA/VA loans dominate your buyer demographic (Charlotte averages 30-40% FHA/VA buyers); (4) you can wait 2-4 weeks for replacement before listing. Don't replace if: roof is under 15 years old, no known issues, and a quick sale is the priority. Get a pre-sale roof certification ($200-$450) instead — proves remaining lifespan to buyers and lenders without the full reroof cost.",
  },
  {
    question: 'What\'s the ROI difference between roof materials at Charlotte resale?',
    answer:
      "Cost-vs-value recovery by material: 3-tab asphalt 50-60%, architectural asphalt 60-70% (most common), Class 4 impact-resistant 65-75% (insurance discount also adds buyer appeal), designer/luxury 55-65% (best for high-end neighborhoods), standing-seam metal 75-85% (best total ROI but limited to homes where metal fits aesthetic), real slate 85-95% (only on $1M+ premier estate homes). The HIDDEN ROI is closing speed — homes with new roofs sell 10-15 days faster on average, reducing carry costs and price-reduction risk.",
  },
  {
    question: 'How does roof age affect homeowner insurance coverage?',
    answer:
      "Roof age is the #1 factor in NC homeowner insurance roof claims: (1) under 10 years — full RCV (replacement cost value) coverage; (2) 10-15 years — typically RCV with some carriers requiring inspection; (3) 15-20 years — split coverage (some carriers drop to ACV); (4) 20+ years — most carriers move to ACV (actual cash value, depreciated) or require Class 4 upgrade for full coverage; (5) 25+ years — many carriers refuse new policies entirely. Replacing your roof before age 20 maintains full RCV coverage and avoids policy non-renewals.",
  },
  {
    question: 'Do FHA and VA loans require a new roof?',
    answer:
      "FHA and VA loans require the roof to have at least 2-5 years of remaining lifespan as confirmed by a certification from a licensed contractor. HAAG-credentialed inspectors (Best Roofing Now's standard) provide certifications accepted by all FHA/VA lenders ($200-$450, 24-48 hr turnaround). If your roof has under 2 years remaining lifespan, FHA/VA financing is typically denied — you'll need a roof replacement before closing OR a buyer using conventional financing (no roof age requirement). Charlotte averages 30-40% FHA/VA buyers, so this matters for most home sales.",
  },
];

export const metadata: Metadata = {
  title: 'Does a New Roof Increase Home Value in Charlotte NC?',
  description:
    "Yes — new roof adds $12-15K Charlotte home value (2024 Cost vs Value), 60-95% ROI by material, 10-15 fewer days on market, FHA/VA approval, full RCV insurance coverage.",
  keywords: [
    'does a new roof increase home value Charlotte NC',
    'new roof ROI Charlotte',
    'roof replacement before selling',
    'FHA VA roof certification Charlotte',
    'home value roof age',
    'cost vs value roof Charlotte',
    'roof appraisal value',
    'sell home with old roof',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Does a New Roof Increase Home Value in Charlotte NC?',
    description: 'New roof adds $12-15K Charlotte home value with 60-95% ROI by material.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function DoesNewRoofIncreaseHomeValuePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Does a New Roof Increase Home Value?', url: PAGE_URL }]} />
      <WebPageSchema name="Does a New Roof Increase Home Value in Charlotte NC?" description="ROI of new roof for Charlotte NC home value." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'New Roof Home Value?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Does a New Roof Increase Home Value Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Adds $12,000-$15,000 home value on average (2024 Cost vs Value Report)',
          'Sells 10-15 fewer days on market vs older roof',
          'Architectural asphalt — 60-70% ROI on appraisal',
          'Class 4 impact-resistant — 65-75% ROI plus insurance discount appeal',
          'Standing-seam metal — 75-85% ROI (best total)',
          'Real slate (premium homes) — 85-95% ROI',
          'FHA/VA loan requires 2-5 yr remaining lifespan certification',
          'Full RCV insurance coverage requires roof under 20 years old',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'New Roof Home Value?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <TrendingUp className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Home Value ROI Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">Does a New Roof Increase Home Value in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Pre-Sale Roof Certification</Button>
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

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Why Roof Age Matters for Home Value</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Buyers fund inspections that flag aged roofs — leads to negotiation, escrow holdbacks, or sale collapse.',
                'FHA/VA loans (30-40% of Charlotte buyers) require certified 2-5 yr remaining roof lifespan.',
                'Insurance carriers move from RCV to ACV at 20-year roof age, lowering buyer protection.',
                'New roofs sell homes 10-15 days faster — reducing carrying costs and price reduction risk.',
                'Pre-sale certifications ($200-$450) are far cheaper than full reroof ($11-26K) when roof is still healthy.',
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
                <strong>Selling soon?</strong> Get a free pre-sale roof inspection — sometimes a $200-$450 certification protects your sale better than a $20K replacement.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                Schedule Pre-Sale Inspection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Maximize Your Home Value" subtitle="Free pre-sale roof inspection. HAAG-credentialed FHA/VA certifications. Honest repair-vs-replace recommendation." />
    </>
  );
}
