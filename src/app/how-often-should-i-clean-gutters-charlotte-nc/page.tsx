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

const PAGE_URL = `${SITE_CONFIG.url}/how-often-should-i-clean-gutters-charlotte-nc`;
const QUESTION = 'How often should I clean my gutters in Charlotte NC?';
const ANSWER =
  "Clean your gutters in Charlotte NC at least 2-3 times per year minimum: (1) early spring (March-April) — clear winter debris, oak catkins, sweetgum balls, and acorns before May-June hail belt and spring storms; (2) late fall (November-December) — clear oak, maple, and dogwood leaves before winter freeze cycles; (3) optional summer mid-season (July) for canopy-heavy neighborhoods (Plaza Midwood, Dilworth, Myers Park, Eastover, Cotswold, Beverly Woods, lakefront LKN). Charlotte's specific tree canopy (oak, loblolly pine, sweetgum, maple, dogwood) generates 2-3x more debris than typical suburban areas. Clogged gutters cause: foundation water damage ($5,000-$25,000 to remediate), basement flooding, roof rot at fascia/soffit, ice dams in winter, and pest infestation. Cost: $125-$300 per professional cleaning. Alternative: install LeafGuard or micro-mesh 316 stainless gutter guards ($4-$45 per linear foot) for 10-15 year cleanout-free protection.";

const followUpFAQs = [
  {
    question: 'Can I clean my own gutters or should I hire a pro?',
    answer:
      "DIY gutter cleaning is appropriate for: single-story homes with safe ladder access, no second-story tie-in, and homeowner comfort with heights. Hire a pro for: two-story+ homes (fall risk increases dramatically above 12 ft), homes with steep landscape grades, homes with electrical lines near gutters, or homeowners over age 55 (fall fatalities are highest in this demographic). Professional cleaning costs $125-$300 — far cheaper than the average $30,000+ ER bill from a fall.",
  },
  {
    question: 'What happens if I don\'t clean my gutters?',
    answer:
      "Five cascading problems from clogged gutters: (1) water back-up under shingles causes leaks at fascia and soffit ($800-$3,500 repair); (2) overflow saturates foundation and causes basement flooding ($5,000-$25,000 remediation); (3) ice dams form in winter when overflow refreezes at eaves ($1,500-$8,000 ice dam damage); (4) wood rot at fascia and soffit ($800-$2,500 to repair plus $400-$900 fascia replacement per slope); (5) pest habitat — clogged gutters attract carpenter bees, mosquitoes, rats, and birds.",
  },
  {
    question: 'Are gutter guards worth it in Charlotte NC?',
    answer:
      "For canopy-heavy Charlotte neighborhoods (Myers Park, Dilworth, Plaza Midwood, Eastover, Cotswold, Beverly Woods, lakefront LKN), gutter guards have strong ROI. Best options ranked: (1) LeafGuard one-piece $20-$45/linear ft (lifetime ClogFree warranty, 32 in/hr rainfall capacity, transferable on home sale); (2) micro-mesh 316 stainless $4-$15/linear ft (best for fine debris like pine needles, 20+ year lifespan); (3) reverse-curve $5-$10/linear ft (struggles in pine-needle areas). Payback period 5-12 years through avoided $125-$300 per cleaning costs (2-3x per year = $250-$900/year).",
  },
  {
    question: 'When is the worst time to skip gutter cleaning?',
    answer:
      "Three critical windows where skipping gutter cleaning causes the most damage: (1) before May-June hail belt and spring storms (clogged gutters back-up under shingles during heavy rain, causing leaks and decking rot); (2) before August-October tropical remnants (Florence, Idalia, Helene patterns dump 4-8 inches of rain in 24 hours); (3) before December-February freeze cycles (clogged gutters cause ice dams that back water under shingles). Skipping these 3 windows almost guarantees some form of water damage within 2-3 years.",
  },
  {
    question: 'Should gutter cleaning be combined with roof inspection?',
    answer:
      "Yes — Best Roofing Now offers combined gutter cleaning + free roof inspection at no additional charge. While our crew is on the ladder for gutters, they verify: shingle integrity (granule loss, lifted seams, missing pieces), pipe boot condition (8-12 yr typical lifespan), flashing reseal needs, ridge cap status, and fascia/soffit rot signs. This combo identifies maintenance needs before they become emergency repairs — typical early intervention saves $500-$2,500 in deferred repair costs.",
  },
];

export const metadata: Metadata = {
  title: 'How Often Should I Clean My Gutters in Charlotte NC?',
  description:
    "Clean Charlotte NC gutters 2-3x/year minimum: spring + fall + optional summer for canopy-heavy areas. Clogged gutters cause $5-25K foundation damage. $125-300 per cleaning, or install gutter guards.",
  keywords: [
    'how often clean gutters Charlotte NC',
    'gutter cleaning frequency',
    'when to clean gutters Charlotte',
    'gutter cleaning cost Charlotte',
    'do I need gutter guards',
    'clogged gutters damage',
    'Charlotte tree canopy gutters',
    'fall gutter cleaning Charlotte',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Often Should I Clean My Gutters in Charlotte NC?',
    description: '2-3x per year minimum. Spring + fall + optional summer for canopy areas.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowOftenCleanGuttersPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How Often Should I Clean Gutters?', url: PAGE_URL }]} />
      <WebPageSchema name="How Often Should I Clean My Gutters in Charlotte NC?" description="Gutter cleaning frequency guide for Charlotte NC homes." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How Often Clean Gutters?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Often Should I Clean Gutters Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Minimum 2-3 times per year for Charlotte NC homes',
          'Early spring (March-April) — clear winter debris before storm season',
          'Late fall (November-December) — clear leaves before winter freeze',
          'Optional summer (July) for canopy-heavy areas like Plaza Midwood, Dilworth, Myers Park',
          'Charlotte tree canopy (oak, pine, sweetgum, maple) generates 2-3x more debris than typical',
          'Cost — $125-$300 per professional cleaning',
          'Alternative — gutter guards $4-$45/linear ft for 10-15 yr cleanout-free protection',
          'Skipping cleaning causes $5,000-$25,000 in foundation, fascia, and ice-dam damage',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'How Often Clean Gutters?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Calendar className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Gutter Maintenance Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Often Should I Clean My Gutters in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Schedule Gutter Cleaning</Button>
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

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Why Gutter Cleaning Matters in Charlotte</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Charlotte\'s heavy oak/pine/sweetgum canopy generates 2-3x typical suburban debris.',
                'Clogged gutters cause $5,000-$25,000 in foundation water damage when ignored.',
                'Ice dams in winter form when overflow refreezes at eaves — back-up causes major leaks.',
                'Combined gutter cleaning + roof inspection catches issues before they become emergencies.',
                'Gutter guards (LeafGuard, micro-mesh) eliminate cleaning for 10-15 years.',
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

      <CTASection title="Cleaner Gutters, Healthier Roof" subtitle="Combined gutter cleaning + free roof inspection. Catches maintenance issues before they become emergency repairs." />
    </>
  );
}
