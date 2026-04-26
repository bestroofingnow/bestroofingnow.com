import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-time-of-year-best-to-replace-roof-charlotte-nc`;
const QUESTION = 'What time of year is best to replace a roof in Charlotte NC?';
const ANSWER =
  "The best time to replace a roof in Charlotte NC is fall (September-November) — temperatures are 60-75°F (ideal for shingle self-sealing), humidity drops, rain probability is lowest, and you beat the holiday/winter rush. Second-best is spring (April-May) before May-June hail belt and August-October tropical remnant seasons. Late summer (July-August) is workable but heat slows crews and roof surface temperatures hit 150°F+. Winter (December-February) is least ideal — shingles need 40°F minimum surface temperature for proper self-sealing, requiring hand-applied mastic-seal exception below that. PRICING ADVANTAGE: scheduling January-March (off-season) saves 5-15% versus peak summer-fall pricing. Best Roofing Now schedules year-round and uses cold-weather mastic-seal techniques when needed.";

const followUpFAQs = [
  {
    question: 'Can roof replacement happen in winter in Charlotte NC?',
    answer:
      "Yes — Charlotte's mild winters (typical December-February daytime highs 45-55°F) allow roof replacement most weeks. Below 40°F surface temperature, we use hand-applied mastic-seal techniques (Karnak 19, Henry 208R, Geocel 2300) to ensure proper shingle bonding. We avoid installing during active rain, snow, or sub-32°F temperatures. Winter scheduling actually has 3 advantages: (1) faster crew availability (no peak-season backlog); (2) 5-15% off-season pricing; (3) attic ventilation work is more comfortable for crews.",
  },
  {
    question: 'Should I wait to replace my roof if my current one isn\'t leaking?',
    answer:
      "Don't wait until failure. Reactive replacement after leaks costs 2-4x more than proactive replacement: emergency tarp dispatch fees, accelerated crew premiums, dump fees during peak season, and $3,000-$25,000 in interior water damage. The best window is 1-3 years before expected end of useful life — pricing is typical, scheduling is flexible, and there's no water damage. Best Roofing Now's free inspection identifies your roof's remaining lifespan with photo documentation.",
  },
  {
    question: 'How long are typical Charlotte NC roof scheduling lead times?',
    answer:
      "Lead times vary by season: (1) January-March (off-season) — 1-2 weeks typical; (2) April-May (pre-storm) — 2-4 weeks; (3) June-August (peak summer) — 4-6 weeks; (4) September-November (peak fall) — 3-5 weeks; (5) December (holiday) — 2-3 weeks except week-of-Christmas. Storm-damage emergency replacements are scheduled same-week for active leaks regardless of season. Best Roofing Now never overbooks — we'd rather quote 4-week scheduling than promise 1-week and miss.",
  },
  {
    question: 'Is fall really the best time, or just the most popular?',
    answer:
      "Fall (September-November) is genuinely best for 4 measurable reasons: (1) 60-75°F surface temps allow optimal shingle self-sealing within 24-48 hours of install; (2) humidity drops to 40-50% (vs 70%+ in summer) — better for ice-and-water shield adhesion; (3) lowest annual rain probability (avg 8 rain days/month vs 12-15 in summer); (4) shingles installed in fall have a full winter+spring to fully bond before peak May-June hail season. The downside: it's also when everyone else schedules, so lead times are longer.",
  },
  {
    question: 'Should I replace my roof before or after a storm?',
    answer:
      "Always before. Pre-storm replacement gives you choice of materials, scheduling, and contractor — and the new roof typically survives the storm intact (a properly installed Class 4 impact-resistant shingle handles 1.5-2 inch hail). Post-storm replacement is reactive, more expensive (storm-chasers inflate prices), and may force unwanted compromises (limited material availability, peak-season scheduling). If you're already in the 25-year wear window for an old roof, replace BEFORE the next major Charlotte storm — Florence 2018, Idalia 2023, and Helene 2024 have shown the pattern.",
  },
];

export const metadata: Metadata = {
  title: 'What Time of Year Is Best to Replace a Roof in Charlotte NC?',
  description:
    "Best time of year for roof replacement in Charlotte NC: fall (Sep-Nov) ideal, spring (Apr-May) second-best, winter (Jan-Mar) saves 5-15%. Year-round scheduling with cold-weather mastic-seal options.",
  keywords: [
    'best time of year to replace roof Charlotte NC',
    'when to schedule roof replacement',
    'best season for roofing',
    'fall roof replacement Charlotte',
    'winter roofing Charlotte NC',
    'roof scheduling lead times',
    'off-season roofing pricing',
    'spring roof replacement',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Time of Year Is Best to Replace a Roof in Charlotte NC?',
    description: 'Fall ideal, spring second-best, winter saves 5-15% off-season. Year-round scheduling.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatTimeOfYearBestToReplaceRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Best Time of Year to Replace Roof?', url: PAGE_URL }]} />
      <WebPageSchema name="What Time of Year Is Best to Replace a Roof in Charlotte NC?" description="Seasonal timing guide for roof replacement in Charlotte NC." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Best Time of Year?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Time of Year Best to Replace Roof Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Fall (September-November) — IDEAL: 60-75°F, low humidity, low rain probability',
          'Spring (April-May) — second-best: before May-June hail belt and August-October tropical remnants',
          'Late summer (July-August) — workable but heat slows crews; 150°F+ roof surface temps',
          'Winter (December-February) — least ideal but workable with mastic-seal exception below 40°F',
          'Off-season pricing — January-March saves 5-15% vs peak summer-fall',
          'Lead times — 1-2 wk off-season, 4-6 wk peak summer, 3-5 wk peak fall',
          'Replace BEFORE storms, not after — pre-storm gives choice; post-storm is reactive',
          'Storm-damage emergencies scheduled same-week regardless of season',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Best Time of Year to Replace Roof?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Calendar className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Seasonal Timing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Time of Year Is Best to Replace a Roof in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Off-Season Pricing</Button>
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

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Why Timing Matters</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Shingle self-sealing requires 40°F minimum surface temperature; below that needs mastic-seal exception.',
                'Off-season scheduling (Jan-Mar) saves 5-15% on labor with shorter lead times.',
                'Pre-storm replacement gives material/contractor choice; post-storm forces compromises.',
                'Fall installation has a full winter+spring to bond before May-June hail season.',
                'Insurance claims often require new-roof installation within 90-180 days of approval.',
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
                <strong>Want off-season pricing?</strong> Schedule your January-March install now for 5-15% savings versus peak season.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                Schedule Free Estimate <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Schedule When It Works for You" subtitle="Year-round scheduling. Off-season pricing. Pre-storm planning. Same-week emergency response." />
    </>
  );
}
