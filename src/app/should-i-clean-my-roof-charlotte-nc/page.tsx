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

const PAGE_URL = `${SITE_CONFIG.url}/should-i-clean-my-roof-charlotte-nc`;
const QUESTION = 'Should I clean my roof in Charlotte NC?';
const ANSWER =
  "Yes — clean your Charlotte NC roof when you see black streaks (algae), green moss patches, or visible debris accumulation. Charlotte's humid subtropical climate accelerates algae growth (Gloeocapsa magma) on asphalt shingles, especially in canopy-shaded north-facing slopes (Plaza Midwood, Dilworth, Myers Park, Eastover, Cotswold, Beverly Woods, lakefront LKN). Use the ARMA-approved soft-wash method ONLY: 50/50 sodium hypochlorite + water + surfactant applied with low-pressure pump (NEVER pressure wash — voids GAF/CertainTeed/OC warranties by dislodging granules). Cost: light algae streaks $400-$800, moderate algae plus light moss $800-$1,200, heavy moss with shingle penetration $1,200-$1,800. Prevention: install 4-inch zinc or copper ridge strips ($200-$500) — rainwater leaches metal ions inhibiting algae for 10-15 years. NEVER DIY pressure washing — and never walk on a wet algae-covered roof (extreme slip risk). Best Roofing Now provides ARMA-approved soft-wash service Charlotte-wide.";

const followUpFAQs = [
  {
    question: 'How often should I clean my Charlotte NC roof?',
    answer:
      "Charlotte NC roof cleaning frequency: light algae prevention 1x every 5-7 years for non-canopy areas; 1x every 3-5 years for canopy-shaded north slopes (Plaza Midwood, Dilworth, Myers Park, Eastover, Cotswold, Beverly Woods, lakefront LKN). Moss removal as-needed when visible patches appear (typically every 7-10 years for affected areas). Zinc/copper ridge strip installation reduces frequency to once every 10-15 years. Annual visual inspection identifies whether cleaning is needed.",
  },
  {
    question: 'Can pressure washing damage my Charlotte roof?',
    answer:
      "Yes — pressure washing causes 4 types of damage: (1) granule loss (the protective ceramic granules that give shingles UV protection get blasted off — exposes asphalt mat to UV degradation, shortens lifespan 5-15 years); (2) shingle uplift (high-pressure water gets under shingles and breaks the sealant strip); (3) lead/copper flashing damage (high pressure can crack soldered seams); (4) skylight gasket damage. Pressure washing voids GAF, CertainTeed, and OC manufacturer warranties — even one DIY pressure wash is enough to lose 50-year coverage.",
  },
  {
    question: 'Is roof cleaning the same as gutter cleaning in Charlotte?',
    answer:
      "No — they're separate services with different pricing and frequency. Gutter cleaning ($125-$300, 2-3x per year minimum) clears leaves and debris from gutters and downspouts. Roof cleaning ($400-$1,800, every 5-10 years) removes algae, moss, and stains from shingles. Both can be done in the same visit for combined savings (typical 15-25% off vs separate trips). Best Roofing Now offers combined gutter + roof cleaning + free inspection package.",
  },
  {
    question: 'Will a clean roof improve my home value?',
    answer:
      "Yes — a clean roof improves curb appeal and supports home value, particularly important if you're listing for sale. A streaky, algae-covered roof signals 'old' or 'neglected' to potential buyers even if the roof is structurally sound. Soft-wash cleaning costs $400-$1,800 and recovers 1-3% of home value (typically $4,000-$15,000 on a $400K Charlotte home). Cleaning before listing is high-ROI. For homes with 5+ year remaining roof lifespan, cleaning is far better than full replacement before sale.",
  },
  {
    question: 'Are zinc and copper ridge strips effective in Charlotte?',
    answer:
      "Yes — zinc and copper ridge strips are highly effective algae preventers in Charlotte's humid climate. Mechanism: rainwater flowing over the metal strip leaches small amounts of zinc or copper ions down the roof slope, inhibiting algae growth on the shingles below. Cost: zinc $4-$8/linear ft installed ($200-$500 typical home), copper $8-$15/linear ft installed ($400-$1,000 typical home). Lifespan: 10-15 years effectiveness for zinc, 20-30 years for copper. Bundle with new roof install for compounding savings (no labor premium for adding ridge strips during reroof).",
  },
];

export const metadata: Metadata = {
  title: 'Should I Clean My Roof in Charlotte NC?',
  description:
    "Yes — clean Charlotte NC roof when you see algae streaks or moss. ARMA-approved soft-wash $400-$1,800. NEVER pressure wash (voids warranty). Zinc/copper strip prevention.",
  keywords: [
    'should I clean my roof Charlotte NC',
    'roof cleaning Charlotte',
    'algae streaks roof',
    'moss removal roof Charlotte',
    'soft wash roof cleaning',
    'zinc copper ridge strip',
    'pressure wash roof damage',
    'ARMA roof cleaning method',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Should I Clean My Roof in Charlotte NC?',
    description: 'Yes — ARMA-approved soft-wash $400-1,800. Never pressure wash.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function ShouldICleanMyRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Should I Clean My Roof?', url: PAGE_URL }]} />
      <WebPageSchema name="Should I Clean My Roof in Charlotte NC?" description="Roof cleaning guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Clean My Roof?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Should I Clean My Roof Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Yes — when you see black streaks, green moss, or visible debris',
          'ARMA-approved soft-wash method only — 50/50 sodium hypochlorite + water + surfactant',
          'NEVER pressure wash — voids GAF/CertainTeed/OC warranties',
          'Light algae cost — $400-$800',
          'Moderate algae + light moss — $800-$1,200',
          'Heavy moss with shingle penetration — $1,200-$1,800',
          'Prevention — 4-inch zinc/copper ridge strips $200-$500 for 10-15 yr inhibition',
          'Most affected Charlotte areas — Plaza Midwood, Dilworth, Myers Park, Eastover, Cotswold, Beverly Woods, LKN',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Clean My Roof?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Droplets className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Cleaning Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">Should I Clean My Roof in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Roof Cleaning Quote</Button>
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

      <CTASection title="ARMA-Approved Soft-Wash Cleaning" subtitle="Preserves manufacturer warranty. $400-$1,800 by scope. Zinc/copper ridge strip prevention 10-15 yr." />
    </>
  );
}
