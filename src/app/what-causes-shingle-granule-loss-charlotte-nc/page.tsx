import { Metadata } from 'next';
import { Phone, Droplets } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-causes-shingle-granule-loss-charlotte-nc`;
const QUESTION = 'What causes shingle granule loss on my Charlotte NC roof?';
const ANSWER =
  "Shingle granules are the small ceramic-coated rocks adhered to the asphalt mat surface — they protect the shingle from UV degradation, provide fire resistance, and add color. Granule loss is the #1 indicator of shingle aging in Charlotte NC. Five primary causes: (1) NORMAL AGING — granules naturally loosen over time as asphalt mat dries and ages (typical 25-year shingle loses granules progressively over its lifespan, accelerating after year 15-20); (2) HAIL DAMAGE — Charlotte's 1-3 hailstorms per year can dislodge granules in localized impact patterns (visible as 'bruising' or scattered bare spots); (3) UV DEGRADATION — intense Charlotte summer UV breaks down granule adhesion accelerating loss 30-50% faster than northern climates; (4) FOOT TRAFFIC — homeowners or contractors walking on shingles dislodges granules (especially on hot 130-150°F summer days when asphalt is soft); (5) PRESSURE WASHING — DIY pressure washing instantly removes 5-15 years of granules (NEVER pressure wash — voids GAF/CertainTeed/OC manufacturer warranties). Where to look for granule loss: gutters and downspout discharge points (sand-like accumulation indicates active loss), valleys (water flow concentrates loss), south-facing slopes (UV-heaviest exposure). Acceptable loss: light scattering throughout 25-year roof life. Concerning loss: bare patches showing exposed asphalt mat, heavy gutter accumulation (more than 1 cup of granules per cleaning), localized hail-pattern damage. Best Roofing Now's free inspection includes granule loss assessment with documented photos.";

const followUpFAQs = [
  {
    question: 'How much granule loss is normal in Charlotte NC?',
    answer:
      "Charlotte NC granule loss progression by roof age: YEARS 1-3 (newly installed) — visible 'fresh' granules washing off (loose granules from manufacturing process settle, normal); YEARS 4-10 — minimal loss, gutters show only trace granule accumulation; YEARS 10-15 — slight progressive loss, occasional cup of granules in gutter cleaning; YEARS 15-20 — noticeable loss in heavily UV-exposed areas (south-facing slopes), 1-2 cups per gutter cleaning; YEARS 20-25 — significant loss with bare patches beginning, heavy gutter accumulation; YEARS 25+ — widespread bare patches, asphalt mat exposed, replacement needed. ABNORMAL loss at any age: localized bald spots, hail-strike patterns, sudden heavy gutter accumulation after specific event = inspection recommended (potential warranty claim or storm damage).",
  },
  {
    question: 'Does granule loss in my Charlotte NC gutter mean I need a new roof?',
    answer:
      "Conditional yes — gutter granule accumulation is the most reliable indicator of roof aging. Quantity-based decision: TRACE granules (less than 1/4 cup per cleaning) — normal aging, no action needed; LIGHT (1/4-1 cup) — monitor annually, plan reroof in 5-10 years; MODERATE (1-2 cups) — schedule full inspection, reroof likely needed within 2-5 years; HEAVY (2+ cups) — reroof needed within 1-2 years to prevent decking damage; SUDDEN HEAVY accumulation (after specific storm event) — file insurance claim for storm damage. Best Roofing Now's free inspection visually grades granule loss and provides written reroof timeline recommendation based on overall roof condition (not just granules).",
  },
  {
    question: 'Can I fix granule loss on my Charlotte NC roof?',
    answer:
      "Generally no — granule loss is irreversible. Once granules are gone, the asphalt mat is permanently exposed and will degrade rapidly under UV exposure. Spot-repair myth: granule replacement products exist (sold in tubes for color matching) but only patch small isolated areas (post-repair around new pipe boots). They do NOT meaningfully extend overall shingle life or restore weather protection. Real solution paths: (1) ACCEPT current granule loss and plan reroof timing based on remaining shingle life; (2) FULL REROOF if loss is widespread or accelerating; (3) PROACTIVE replacement before losing manufacturer warranty (typical 25-year warranty becomes prorated after year 15-20, full warranty value lost by year 20-25).",
  },
  {
    question: 'Will hail damage cause granule loss in Charlotte NC?',
    answer:
      "Yes — Charlotte hail damage causes both visible and hidden granule loss. VISIBLE damage: localized 'bruise' patterns where hailstones struck (granules dislodged in 0.5-2 inch diameter circles), exposed asphalt mat in impact zones. HIDDEN damage: nearby granules loosened from adhesive bond (will continue falling for weeks-months after storm), accelerated overall aging in struck areas. Insurance claim threshold: typically 5-8 hail strikes per 100 sq ft (per insurance adjuster guidelines) — qualifies for full reroof claim. Charlotte hail seasons: May-July (severe thunderstorm season), occasional fall hail with weather fronts. Best practice after Charlotte hailstorm: schedule professional inspection within 1-2 weeks (Best Roofing Now provides free post-storm inspection with photo documentation for insurance claim).",
  },
  {
    question: 'Are some Charlotte NC shingle brands more granule-loss-resistant?',
    answer:
      "Yes — manufacturer engineering significantly affects granule retention. Most resistant (best granule adhesion): GAF Timberline HDZ with proprietary 'StainGuard Plus' (best in industry), Owens Corning TruDefinition Duration with 'SureNail Strip' technology (15+ year granule warranty), CertainTeed Landmark Pro with enhanced StreakFighter granules. Mid-tier: Atlas StormMaster, IKO Cambridge, Tamko Heritage. Least resistant: budget 3-tab shingles (legacy lines, mostly discontinued), no-name imports. Premium architectural shingles (top-tier brands) typically retain 90%+ of granules at year 15 vs 70-80% for budget shingles. Cost premium for top-tier brands: only $5-$15/square more material — minor expense for major longevity improvement. Best Roofing Now installs all major top-tier brands.",
  },
];

export const metadata: Metadata = {
  title: 'What Causes Shingle Granule Loss on My Charlotte NC Roof?',
  description:
    "Shingle granule loss causes: normal aging, hail damage, UV degradation, foot traffic, pressure washing. Check Charlotte NC gutters for accumulation. Heavy = reroof needed.",
  keywords: [
    'what causes shingle granule loss Charlotte NC',
    'roof granules in gutter',
    'shingle aging signs',
    'hail damage granule loss',
    'pressure wash granule loss',
    'roof granule replacement',
    'shingle UV degradation',
    'when reroof Charlotte signs',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Causes Shingle Granule Loss on My Charlotte NC Roof?',
    description: '5 causes: normal aging, hail, UV, foot traffic, pressure washing.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatCausesGranuleLossPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Causes Granule Loss?', url: PAGE_URL }]} />
      <WebPageSchema name="What Causes Shingle Granule Loss on My Charlotte NC Roof?" description="Shingle granule loss guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Granule Loss?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Causes Shingle Granule Loss Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Cause 1 — normal aging (progressive over 25-year shingle life)',
          'Cause 2 — hail damage (Charlotte 1-3 storms/yr, localized impact patterns)',
          'Cause 3 — UV degradation (Charlotte 30-50% faster than northern climates)',
          'Cause 4 — foot traffic (especially hot summer days when asphalt soft)',
          'Cause 5 — pressure washing (NEVER do — voids GAF/CertainTeed/OC warranty)',
          'Inspect gutters and downspouts for sand-like accumulation',
          'Trace = normal; 1+ cups per cleaning = reroof needed within 2-5 years',
          'Sudden heavy after storm = file insurance claim',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Granule Loss?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Droplets className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Granule Loss Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Causes Shingle Granule Loss on My Charlotte NC Roof?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Granule Loss Inspection</Button>
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

      <CTASection title="Free Granule Loss Assessment" subtitle="Best Roofing Now's free inspection visually grades granule loss with photo documentation. Written reroof timeline based on actual condition. Top-tier brands GAF/CertainTeed/OC available." />
    </>
  );
}
