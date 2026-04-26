import { Metadata } from 'next';
import { Phone, ClipboardList } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/when-should-i-replace-my-gutters-charlotte-nc`;
const QUESTION = 'When should I replace my gutters in Charlotte NC?';
const ANSWER =
  "Replace your Charlotte NC gutters when 3 or more of these 8 indicators are present: (1) age — aluminum gutters at 20+ yr (typical lifespan 20-30), galvanized steel at 15+ yr (15-25), copper at 50+ yr (50-100); (2) widespread sagging — multiple sections with visible drooping or pulled fasteners; (3) recurring separation at joints/seams (especially seamless gutter end caps and miters); (4) visible rust holes (galvanized steel only — aluminum doesn't rust); (5) water staining or rot on fascia/soffit boards behind gutters (water bypassing failing gutters); (6) chronic overflow even when clean (undersized or improper pitch); (7) multiple sections with hail/storm damage from previous events; (8) reroofing simultaneously (combine reroof + gutter for cost savings). Cost: aluminum seamless 5-inch K-style $7-$12/linear ft installed, 6-inch K-style $9-$15/linear ft (recommended for Charlotte heavy rain), copper $25-$45/linear ft, half-round $12-$22/linear ft. Typical Charlotte home (160-200 linear ft of gutter): aluminum $1,400-$3,000, copper $4,000-$9,000. Best Roofing Now's free inspection includes gutter assessment with repair-vs-replace economic analysis.";

const followUpFAQs = [
  {
    question: 'How long do gutters last in Charlotte NC?',
    answer:
      "Charlotte NC gutter lifespan by material: aluminum seamless 20-30 years (most common, 0.027-0.032 gauge); galvanized steel 15-25 years (rusts eventually, less common in modern installs); copper 50-100+ years (premium, develops natural patina); zinc 50-80 years (specialty modern look); vinyl 5-15 years (cheap, brittles in sun, not recommended for Charlotte UV); painted steel 25-40 years (Galvalume coating). Lifespan is reduced by: heavy debris (lakeside or canopy areas), failure to clean (debris weight pulls fasteners), winter freeze cycles (rare in Charlotte but happens), and clear physical damage (tree branches, hail).",
  },
  {
    question: 'Should I get 5-inch or 6-inch gutters in Charlotte NC?',
    answer:
      "Choose 5-INCH for: typical Charlotte ranch home or 1,500-2,500 sq ft single-story; budget-conscious replacement; standard production-build aesthetic. Choose 6-INCH for: 2,500+ sq ft homes (handles 40-50% more water flow); homes with steep pitch or large roof slopes (water concentrates); Charlotte areas with heavy August-October tropical remnant rain; lakefront/Lake Norman wind-driven rain exposure; HOA aesthetic preferences. Cost difference: 6-inch typically adds $2-$4/linear ft over 5-inch (total $300-$800 premium on average home). 6-inch is highly recommended for any Charlotte home with chronic overflow issues or in heavy-canopy areas.",
  },
  {
    question: 'Can I replace just damaged gutter sections in Charlotte?',
    answer:
      "Yes — partial replacement works when: (1) damage is isolated to 1-3 sections (not widespread); (2) existing gutters are under 15 years old with intact remainder; (3) you can match exact gutter style (K-style, half-round, etc.) and color from original installer or stock supplier; (4) seamless gutters allow new section to be fabricated on-site to match. Cost: partial repair $200-$800 per section. Avoid partial replacement when: (1) entire system is over 20 yr old (rest will fail soon); (2) you're reroofing (combine for savings); (3) more than 30% of total gutter length is damaged (full replace is more economical).",
  },
  {
    question: 'Should I match new gutters to my reroof in Charlotte NC?',
    answer:
      "Strongly yes — bundling reroof + gutter replacement saves 10-25% vs separate projects. Reasons: (1) shared mobilization (truck, crew, dumpster, staging); (2) single permit and inspection (vs 2 permits); (3) gutter removal/reinstall labor can be reused; (4) drip edge installation coordinates with gutter top edge for waterproof seal; (5) coordinated warranty coverage from one installer; (6) financing covers both in single loan. Most Charlotte homeowners who reroof and have gutters older than 15 years should bundle — savings are $1,500-$4,500 vs separate projects.",
  },
  {
    question: 'What\'s the difference between K-style and half-round gutters in Charlotte?',
    answer:
      "K-STYLE (most common Charlotte choice) — flat back attaches directly to fascia, decorative front profile mimics crown molding, available in 5-inch and 6-inch widths, holds 30-50% more water than equivalent half-round, $7-$15/linear ft aluminum. Best for traditional Charlotte ranch/colonial/Cape Cod styles. HALF-ROUND — semi-circular tube hung on brackets standing off fascia, classic/historic aesthetic, less debris accumulation (rounder profile), $12-$25/linear ft aluminum or $20-$45/linear ft copper. Best for historic neighborhoods (Dilworth, Plaza Midwood Tudor revival, Eastover historic, Wesley Heights). Most Charlotte production builds use K-style.",
  },
];

export const metadata: Metadata = {
  title: 'When Should I Replace My Gutters in Charlotte NC?',
  description:
    "Replace Charlotte NC gutters when 3+ of 8 signs present: age 20+ yr, sagging, joint separation, rust, fascia rot, overflow. Aluminum $1,400-$3,000, copper $4,000-$9,000.",
  keywords: [
    'when replace gutters Charlotte NC',
    'gutter replacement signs',
    'gutter lifespan Charlotte',
    '5 inch vs 6 inch gutters',
    'K-style vs half-round gutters',
    'aluminum gutter replacement cost',
    'copper gutter Charlotte',
    'reroof gutter bundle',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'When Should I Replace My Gutters in Charlotte NC?',
    description: '8 signs when to replace Charlotte NC gutters. Aluminum $1,400-$3,000.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhenReplaceGuttersPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'When to Replace Gutters?', url: PAGE_URL }]} />
      <WebPageSchema name="When Should I Replace My Gutters in Charlotte NC?" description="Gutter replacement timing guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'When Replace Gutters?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="When Should I Replace My Gutters Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Age — aluminum 20+ yr, galvanized steel 15+ yr, copper 50+ yr',
          'Widespread sagging — multiple sections with drooping or pulled fasteners',
          'Recurring separation at joints/seams — especially miters and end caps',
          'Visible rust holes (galvanized steel only)',
          'Fascia/soffit water staining behind gutters',
          'Chronic overflow even when clean (undersized or improper pitch)',
          'Multiple sections with hail/storm damage',
          'Reroofing simultaneously — bundle for 10-25% savings',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'When Replace Gutters?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <ClipboardList className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Gutter Replacement Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">When Should I Replace My Gutters in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Gutter Assessment</Button>
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

      <CTASection title="Repair vs Replace? We'll Tell You Honestly." subtitle="Free gutter assessment with written economic analysis. Bundle with reroof for 10-25% savings. 5-inch and 6-inch K-style and half-round options." />
    </>
  );
}
