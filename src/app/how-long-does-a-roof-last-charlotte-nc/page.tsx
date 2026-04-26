import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-long-does-a-roof-last-charlotte-nc`;
const QUESTION = 'How long does a roof last in Charlotte NC?';
const ANSWER =
  "A roof in Charlotte NC lasts 15-100+ years depending on material: 3-tab asphalt shingles 15-25 years, architectural asphalt shingles 25-50 years, Class 4 impact-resistant shingles 30-50 years, designer/luxury shingles 30-50 years, standing-seam metal 50+ years, stone-coated steel 50 years, synthetic slate 50 years, real slate 75-150 years, clay tile 50-100 years, and cedar shake 25-40 years. Charlotte's humid subtropical climate (hot summers, mild winters, hail belt May-June, tropical remnants Aug-Oct) typically reduces lifespans 10-20% versus manufacturer rated specs. Best Roofing Now's free inspection identifies your current roof's condition and remaining lifespan with photo documentation.";

const followUpFAQs = [
  {
    question: 'What shortens a roof\'s lifespan in Charlotte NC?',
    answer:
      "Charlotte's climate accelerates wear in 6 ways: (1) UV exposure — bakes shingle granules off (Charlotte gets 213 sunny days/year on average); (2) attic temperatures hitting 150°F+ in July without proper NC IRC §R806 ventilation; (3) hail damage during the May-June hail belt (NOAA records 3-5 hail days/year in Mecklenburg); (4) wind from spring squall lines and August-October tropical remnants; (5) algae and moss growth in canopy-shaded areas (Plaza Midwood, Dilworth, Myers Park, Eastover, Cotswold); (6) freeze-thaw fastener pop in north Mecklenburg / Lake Norman during December-February.",
  },
  {
    question: 'How can I extend my roof\'s lifespan?',
    answer:
      'Five proven extensions: (1) annual or biannual professional maintenance (catches issues early; 1:5 cost ratio versus emergency repair); (2) NC IRC §R806 balanced ventilation (drops attic temps 20-40°F, extends shingle life 3-7 years); (3) zinc or copper ridge strips ($200-$500) prevent algae for 10-15 years; (4) regular gutter cleaning to prevent water back-up; (5) tree trim within 10 feet of roof to reduce debris and impact damage. Required by GAF Golden Pledge, CertainTeed 5-Star, and OC Platinum manufacturer warranties.',
  },
  {
    question: 'How do I know my roof\'s actual age?',
    answer:
      "Three reliable methods: (1) check your home's closing documents or insurance binder (often lists roof age); (2) request a free Best Roofing Now inspection — we can usually estimate within 2-3 years from shingle wear patterns, granule loss, and pipe boot condition; (3) check building permit records at Mecklenburg County Code Enforcement (most reroofs after 2000 are documented). For homes you've owned 10+ years and never replaced, the original roof is likely the home-build age.",
  },
  {
    question: 'What\'s the difference between manufacturer warranty period and actual lifespan?',
    answer:
      'Manufacturer warranties (e.g., GAF 50-year Golden Pledge, CertainTeed 50-year 5-Star Plus, OC Platinum) cover defects in materials and workmanship — not normal wear or weather damage. The actual lifespan in Charlotte is typically 5-15 years shorter than the warranty period due to climate stress. A "50-year shingle" in Charlotte typically performs 35-45 years before needing replacement, with the underlayment, flashing, and pipe boots requiring replacement at 25-35 years.',
  },
  {
    question: 'Should I replace my roof before it fails completely?',
    answer:
      "Yes — proactive replacement at 80-90% of expected lifespan is far cheaper than reactive replacement after failure. Failure symptoms (active leaks, multi-zone damage, ceiling stains) typically incur $3,000-$25,000 in interior water damage and forced emergency timing (2-4x normal pricing for tarps, dump fees, and crew premiums). Best Roofing Now's free inspection identifies the right replacement window for your specific roof.",
  },
];

export const metadata: Metadata = {
  title: 'How Long Does a Roof Last in Charlotte NC?',
  description:
    "How long does a roof last in Charlotte NC? Asphalt 25-50 yr, metal 50+, slate 75-150. Climate factors, lifespan extension tips, and free inspection from Best Roofing Now.",
  keywords: [
    'how long does a roof last Charlotte NC',
    'roof lifespan Charlotte',
    'shingle roof lifespan',
    'metal roof lifespan Charlotte',
    'slate roof lifespan',
    'roof age Charlotte NC',
    'when does my roof need replacement',
    'roof life expectancy NC',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Long Does a Roof Last in Charlotte NC? | Best Roofing Now',
    description:
      'Roof lifespan in Charlotte NC by material. Climate impact, extension tips, free inspection from BBB A+ veteran-owned roofer.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowLongDoesARoofLastPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'How Long Does a Roof Last in Charlotte NC?', url: PAGE_URL },
        ]}
      />
      <WebPageSchema
        name="How Long Does a Roof Last in Charlotte NC?"
        description="Roof lifespan by material in Charlotte NC, climate factors, extension tips, free inspection."
        url={PAGE_URL}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'How Long Does a Roof Last in Charlotte NC?', url: PAGE_URL },
        ]}
      />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Long Does a Roof Last Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          '3-tab asphalt shingles — 15-25 years in Charlotte humid climate',
          'Architectural asphalt shingles — 25-50 years (most popular Charlotte residential choice)',
          'Class 4 impact-resistant shingles — 30-50 years + 10-30% NC insurance discount',
          'Designer/luxury shingles — 30-50 years (GAF Grand Sequoia, CertainTeed Presidential, OC Berkshire)',
          'Standing-seam metal (steel/aluminum/zinc/copper) — 50+ years',
          'Synthetic slate (DaVinci, Brava, CeDUR) — 50 years with no structural reinforcement needed',
          'Real slate (Vermont, Pennsylvania, Buckingham) — 75-150 years',
          'Clay tile / Mediterranean — 50-100 years; cedar shake 25-40 years in Charlotte humid climate',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'How Long Does a Roof Last?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Clock className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Lifespan Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Long Does a Roof Last in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get a Free Roof Age Assessment</Button>
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

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Why Lifespan Matters for Charlotte Homeowners</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Knowing your roof age helps plan budget and timing for replacement (proactive saves 30-50% vs reactive emergency).',
                'Insurance coverage (RCV vs ACV) often caps at 20+ year roof age; older roofs may pay only depreciated value on storm claims.',
                'Real estate sale and refinance lenders require roof certifications showing 2-5+ years remaining lifespan.',
                'Manufacturer warranty validity depends on proper maintenance and ventilation throughout the roof\'s life.',
                'Choosing a longer-lifespan material (metal, slate) often pays back through avoided 2nd or 3rd reroof cycles.',
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
                <strong>Wondering about your roof&apos;s remaining lifespan?</strong> Get a free written assessment with photo documentation from a BBB A+, GAF Master Elite Charlotte roofer.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                Schedule Free Inspection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Find Out Your Roof Lifespan" subtitle="Free 48-hour inspection. Photo report within 24-48 hours. No pressure, no obligation." />
    </>
  );
}
