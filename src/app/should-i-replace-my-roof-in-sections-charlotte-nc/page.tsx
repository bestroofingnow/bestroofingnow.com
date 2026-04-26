import { Metadata } from 'next';
import { Phone, Layers } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/should-i-replace-my-roof-in-sections-charlotte-nc`;
const QUESTION = 'Should I replace my roof in sections or all at once in Charlotte NC?';
const ANSWER =
  "Replace your Charlotte NC roof all at once in almost every situation — partial/sectional replacement is rarely the right call for 5 reasons: (1) color match is impossible — even same-brand same-color shingles installed years apart show visible age difference (sun bleaching, granule wear); (2) NC IRC §R908.3 25% rule — if total damage exceeds 25% of any slope, full replacement is required; (3) warranty implications — manufacturer warranties typically cover full-roof installations, not section patches (mixed-age roofs often void warranty); (4) economy of scale — full reroof is 30-50% cheaper per square than two separate section replacements; (5) insurance coverage — most NC carriers pay for full replacement when storm damage exceeds 25% threshold rather than negotiating partial. EXCEPTION: section replacement IS appropriate when (a) damage is isolated to one slope of a multi-slope roof under 5 years old, (b) the matching shingle is still in production, AND (c) you're willing to accept visible color difference for budget reasons. Best Roofing Now's free inspection determines the right scope honestly — sometimes a $1,500 section repair is the right call, sometimes full replacement is.";

const followUpFAQs = [
  {
    question: 'Why does color matching matter so much for partial roof replacement?',
    answer:
      "Asphalt shingles fade significantly in the first 2-5 years from UV exposure (most noticeable in dark colors like Charcoal, Hunter Green, Black). New shingles installed next to 5-year-old shingles can look 30-50% darker — visible from the street, especially noticeable on prominent slopes. Even matching the exact same SKU from the same manufacturer doesn't solve this because manufacturing dye lots vary. Section replacement creates a visible 'patchwork' appearance that hurts curb appeal and resale value (5-10% home value impact).",
  },
  {
    question: 'When does NC code require full roof replacement vs sectional?',
    answer:
      "NC IRC §R908.3 (the 25% rule) requires full replacement when more than 25% of a roof slope is damaged within any 12-month period. Insurance carriers typically apply this per slope (not whole-roof footprint) — so 30% damage to a single back slope triggers full replacement obligation under the policy. Best Roofing Now's Xactimate-format documentation calculates damage percentage per slope and identifies which scope qualifies under NC code.",
  },
  {
    question: 'Is partial roof replacement ever a good idea?',
    answer:
      "Three scenarios where partial replacement makes sense: (1) one slope only, under 5 years from original install, with matching shingle still in production (storm damaged just the back slope, rest is essentially new); (2) you're planning to sell within 1-2 years and don't want to invest in full replacement (buyer typically replaces); (3) budget constraints force phasing the project across 2-3 years (top slope this year, side slopes next year). All 3 require accepting visible color difference and reduced warranty coverage.",
  },
  {
    question: 'Can I do half the roof now and the other half in a few years?',
    answer:
      "Technically yes but rarely advisable. Three issues: (1) color match will be visibly different at 2-5 year gap; (2) you pay 30-50% more total than a single full reroof (no economy of scale); (3) most manufacturer warranties don't cover phased installations as a single roof. The exception is genuine financial necessity — phasing keeps the home dry and protected even if aesthetics suffer. Best Roofing Now offers PowerPay 60-120 month financing as an alternative ($300-$650/month for typical 30-square home) — usually a better choice than phasing.",
  },
  {
    question: 'Will insurance pay for a full replacement if only part is damaged?',
    answer:
      "Often yes — when the 25% rule (NC IRC §R908.3) applies, insurance must pay for full replacement to bring the roof up to current code. Even when damage is just under 25%, insurance carriers sometimes pay for full replacement because matching aged shingle color is so difficult that adjusters recognize partial replacement isn't a viable repair. Best Roofing Now's Xactimate-format claims include language requesting full replacement when matching is impossible — about 60-70% approval rate on these requests.",
  },
];

export const metadata: Metadata = {
  title: 'Should I Replace My Roof in Sections or All at Once in Charlotte NC?',
  description:
    "Replace Charlotte NC roof all at once in almost every case: color match impossible, NC 25% rule triggers full replacement, warranty issues with section patches, 30-50% cost savings.",
  keywords: [
    'replace roof in sections Charlotte NC',
    'partial roof replacement',
    'full roof vs section replacement',
    'NC 25 percent rule roof',
    'roof slope replacement',
    'phased roof replacement',
    'one slope roof replacement',
    'half roof replacement',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Should I Replace My Roof in Sections or All at Once in Charlotte NC?',
    description: 'Almost always all at once. Color match, NC 25% rule, warranty, economy of scale.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function ShouldIReplaceInSectionsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Replace Roof in Sections?', url: PAGE_URL }]} />
      <WebPageSchema name="Should I Replace My Roof in Sections or All at Once in Charlotte NC?" description="Sectional vs full roof replacement decision guide for Charlotte NC." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Sectional vs Full?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Should I Replace My Roof in Sections Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Color match impossible — even same-brand same-color shingles fade visibly over 2-5 years',
          'NC IRC §R908.3 25% rule — over 25% damage triggers required full replacement',
          'Warranty implications — manufacturer warranties cover full-roof, not section patches',
          'Economy of scale — full reroof 30-50% cheaper per square than two section replacements',
          'Insurance coverage — most NC carriers pay full replacement above 25% threshold',
          'EXCEPTION: one slope, under 5 years, matching shingle still in production',
          'Phasing alternative — PowerPay 60-120 month financing typically better than splitting roof',
          'Best Roofing Now free inspection determines right scope honestly',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Sectional vs Full?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Replacement Scope Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">Should I Replace My Roof in Sections or All at Once in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Honest Scope Assessment</Button>
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

      <CTASection title="Honest Scope. Honest Pricing." subtitle="Free inspection identifies if section replacement or full reroof is the right call. PowerPay 60-120 month financing if budget is the issue." />
    </>
  );
}
