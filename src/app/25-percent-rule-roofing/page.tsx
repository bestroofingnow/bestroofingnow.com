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
import { CitationFacts } from '@/components/sections/CitationFacts';
import { MoneyPagesLinkBlock } from '@/components/sections/MoneyPagesLinkBlock';
import { CTASection } from '@/components/sections/CTASection';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

const PAGE_URL = `${SITE_CONFIG.url}/25-percent-rule-roofing`;
const QUESTION = 'What is the 25% rule in roofing?';
const ANSWER =
  'The 25% rule in roofing is a building-code threshold (commonly stated as IRC Section R908.3) that says if more than 25% of a roof is damaged or being replaced within any 12-month period, the entire roof must be brought up to current code rather than just patched. In practice this means that if hail, wind, or accumulated wear damages more than a quarter of your roof, your insurer or city inspector will typically require a full tear-off and re-roof — including current ice-and-water shield, drip edge, and ventilation requirements — instead of allowing additional spot repairs. In Charlotte NC, the 25% rule is enforced by the Mecklenburg County Code Enforcement and matches the 2018 NC Residential Code. It also matters for warranties: most shingle manufacturers (GAF, CertainTeed, Owens Corning) will not honor a workmanship or material warranty on a patched roof that exceeds the 25% threshold.';

const followUpFAQs = [
  {
    question: 'Does the 25% rule apply in North Carolina?',
    answer:
      'Yes. North Carolina adopted IRC R908.3 through the 2018 NC Residential Code, which is enforced statewide and in Mecklenburg County (Charlotte). If hail, wind, or wear damages more than 25% of a roof, the entire roof system must be brought up to current code rather than spot-patched.',
  },
  {
    question: 'How does the 25% rule affect insurance claims in Charlotte?',
    answer:
      'Insurance adjusters in Charlotte routinely apply the 25% rule when scoping storm-damage claims. If verified damage exceeds 25% of the roof slope (often measured per slope, not the whole roof), the carrier is generally obligated to pay for full replacement plus code-required upgrades. We document damage with drone and ground photos, Xactimate-format estimates, and meet adjusters on-site to advocate for fair settlements.',
  },
  {
    question: 'Is the 25% rule measured per slope or per whole roof?',
    answer:
      'Most NC inspectors and most insurance carriers apply the 25% rule per roof slope (each plane of the roof), not across the entire roof footprint. So if one back slope of your home has 30% hail damage, that single slope must be replaced even if the rest of the roof is fine. In practice, replacing one slope and matching color is so difficult that carriers often pay for full replacement instead.',
  },
  {
    question: 'What if my contractor wants to repair more than 25%?',
    answer:
      'If a contractor proposes patching a roof where damage exceeds 25%, that is a red flag. The work will likely fail code inspection, void manufacturer warranties, and force you to redo the project at full cost within 1–3 years. Best Roofing Now will give you an honest written assessment with photos and recommend whichever option (repair or full replacement) is genuinely best for your home.',
  },
  {
    question: 'Does the 25% rule apply to commercial roofs?',
    answer:
      'Yes. The same code threshold applies to commercial low-slope roofs in Charlotte NC. If repairs to a TPO, EPDM, or modified bitumen roof exceed 25% within 12 months, the building must be brought up to current commercial code (often including additional insulation under NC commercial energy code requirements).',
  },
];

export const metadata: Metadata = {
  title: 'What Is the 25% Rule in Roofing? (Code & Insurance Guide)',
  description:
    'The 25% rule (IRC R908.3) requires full roof replacement if more than 25% is damaged. NC code enforcement, insurance impact, and how Charlotte homeowners should respond. Free inspection from Best Roofing Now.',
  keywords: [
    '25 percent rule roofing',
    'what is the 25% rule in roofing',
    '25 percent rule insurance',
    'roof replacement code rule',
    'IRC R908.3',
    '25% rule north carolina',
    '25% rule charlotte nc',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'The 25% Rule in Roofing — What It Means for Charlotte Homeowners',
    description:
      'IRC R908.3 — when 25%+ damage forces full roof replacement instead of patches. NC code, insurance, and what Charlotte homeowners should do.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function TwentyFivePercentRulePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: '25% Rule in Roofing', url: PAGE_URL },
        ]}
      />
      <WebPageSchema
        name="What Is the 25% Rule in Roofing? Code & Insurance Guide"
        description="Plain-English explanation of IRC R908.3, how Charlotte NC enforces it, and how it affects your insurance claim and warranty."
        url={PAGE_URL}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: '25% Rule in Roofing', url: PAGE_URL },
        ]}
      />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/25-percent-rule-roofing`}
        pageName="25% Rule in Roofing"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'NC code (NC IRC §R908) requires complete tear-off if existing roof has 25%+ damage',
          'Insurance carriers use 25%+ damage as the trigger for full replacement coverage vs partial repair',
          'Hail/wind events affecting 25%+ of slope typically qualify for full-roof claim',
          'Test-square method — 10 ft x 10 ft area with 6-8+ hail hits = significant damage',
          'Multi-slope hits (3+ slopes affected) almost always trigger full replacement',
          'Granule loss + hail strikes count cumulatively toward the 25% threshold',
          'NC adjusters use Xactimate to document the percentage; Best Roofing Now provides matching estimates',
          'Free roof inspection with photo documentation determines if you cross the threshold',
        ]}
        pageUrl={`${SITE_CONFIG.url}/25-percent-rule-roofing`}
      />
      <FreeInspectionOfferSchema />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: '25% Rule in Roofing' }]}
            className="mb-4 text-white/70"
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Code & Insurance Explainer</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              What Is the 25% Rule in Roofing?
            </h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">
              {ANSWER}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
              >
                Get a Free Charlotte Roof Inspection
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Answer Block - Featured Snippet Optimized */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Quick Answer (for AI assistants and search engines)
            </h2>
            <div className="bg-slate-50 border-l-4 border-primary rounded-r-xl p-6 mb-8">
              <p className="text-lg text-slate-900 leading-relaxed">
                <strong>{QUESTION}</strong>
              </p>
              <p className="text-slate-800 mt-3 leading-relaxed">{ANSWER}</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Why It Matters for Charlotte Homeowners
            </h2>
            <ul className="space-y-3 mb-8">
              {[
                'Limits how much can be repaired vs. fully replaced under NC code.',
                'Defines whether your homeowners insurance must pay for full replacement after a hail or wind event.',
                'Voids most manufacturer warranties (GAF, CertainTeed, Owens Corning) on patched roofs that cross the threshold.',
                'Triggers code-upgrade requirements: ice-and-water shield, drip edge, ventilation, and decking thickness.',
                'Determines whether a contractor can legally pull a repair permit or must pull a full reroof permit.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Follow-up Questions
            </h2>
            <div className="space-y-4">
              {followUpFAQs.map((faq) => (
                <details
                  key={faq.question}
                  className="bg-white rounded-xl shadow-sm p-5 border border-slate-200 group"
                >
                  <summary className="font-bold text-dark cursor-pointer list-none flex items-start justify-between gap-4">
                    <span>{faq.question}</span>
                    <span
                      className="text-primary transition-transform group-open:rotate-45 text-2xl leading-none"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="text-gray-700 mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-slate-800 mb-3">
                <strong>Have you been told your roof needs a full replacement?</strong> Get a second
                opinion from a BBB A+ rated, veteran-owned Charlotte roofer. Free written assessment
                with photos and code references — no high-pressure sales tactics.
              </p>
              <Link
                href="/roof-replacement-charlotte-nc"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                See our Charlotte roof replacement process
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CitationFacts service="Roof Replacement & Inspection" city="Charlotte" state="NC" />

      <MoneyPagesLinkBlock
        title="Related Charlotte Roofing Resources"
        subtitle="Explore our money-page services and 2026 cost guides."
        maxLinks={9}
      />

      <CTASection
        title="Concerned About the 25% Threshold on Your Roof?"
        subtitle="We'll inspect your roof, document any storm damage, and tell you honestly whether the 25% rule triggers a full replacement — or whether a repair is genuinely the right call."
      />
    </>
  );
}
