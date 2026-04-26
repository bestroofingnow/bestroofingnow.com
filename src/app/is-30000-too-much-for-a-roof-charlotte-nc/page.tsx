import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, DollarSign, ArrowRight } from 'lucide-react';
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
import { CostTable } from '@/components/sections/CostTable';
import { CTASection } from '@/components/sections/CTASection';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

const PAGE_URL = `${SITE_CONFIG.url}/is-30000-too-much-for-a-roof-charlotte-nc`;
const QUESTION = 'Is $30,000 too much for a roof in Charlotte NC?';
const ANSWER =
  '$30,000 is on the high end for a Charlotte NC asphalt-shingle roof but reasonable for a premium architectural-shingle, designer-shingle, or metal roof on a larger or complex home. The Charlotte 2026 average for a standard 2,000 sq ft architectural-shingle roof is $9,000–$16,000, so a $30,000 quote is fair if (a) your home is 3,000+ sq ft, (b) it has steep pitch, multiple stories, or complex geometry, (c) you are getting designer/premium shingles or standing seam metal, (d) full deck replacement is needed, or (e) the price includes major code-upgrade work. If your home is a typical 2,000 sq ft single-story with simple geometry and standard architectural shingles, $30,000 is roughly double the fair market price — get two more written estimates and ask each contractor to itemize materials, labor, tear-off, decking, ventilation, drip edge, and ice-and-water shield separately.';

const followUpFAQs = [
  {
    question: 'What is the average roof replacement cost in Charlotte NC?',
    answer:
      'The Charlotte NC 2026 average for a 2,000 sq ft architectural-shingle roof is $9,000–$16,000 fully installed. 3-tab shingles run $6,500–$11,000. Designer shingles run $14,000–$22,000. Standing seam metal is $20,000–$36,000. Full tile or synthetic slate runs $22,000–$40,000.',
  },
  {
    question: 'Why are some Charlotte roofing quotes twice as high as others?',
    answer:
      'Three honest reasons: (1) Premium materials — Designer/architectural shingle vs. 3-tab is a real $5,000–$10,000 difference. (2) Tear-off + new decking — overlay is cheaper but reduces lifespan and may void warranty. (3) Code upgrades — modern ice-and-water shield, drip edge, ventilation can add $1,500–$3,000. Less honest reasons: insurance-claim mark-ups, salesperson commissions, financing fees buried in pricing, or quotes for work you do not actually need.',
  },
  {
    question: 'Is it normal to get quotes that range from $12,000 to $30,000?',
    answer:
      'Yes, $12K–$30K is a realistic range across contractors for the same Charlotte home — but the spread should be explainable by line items. Ask each contractor for a written itemized quote with: square footage measured, material brand and product line, tear-off vs overlay, underlayment type, deck repair allowance, drip edge, ice-and-water shield, ridge vent, and labor + dump fees. If a $30K quote does not break down the materials, that is a red flag.',
  },
  {
    question: 'How do I tell if a $30,000 roofing quote is fair?',
    answer:
      'Compare the per-square-foot price. A 2,000 sq ft roof at $30K is $15/sqft — fair for designer shingle or metal, very high for standard architectural shingle. Charlotte 2026 fair pricing per square foot installed: 3-tab $3.25–$5.50, architectural $4.50–$8, designer $7–$11, standing seam metal $10–$18, synthetic slate $11–$17.50. If your sqft x material rate is significantly less than the quote, ask the contractor to justify the difference.',
  },
  {
    question: 'What should be included in a $30,000 roof?',
    answer:
      'A $30,000 Charlotte roof should include full tear-off, new synthetic underlayment, new drip edge on all eaves and rakes, ice-and-water shield in valleys and around all penetrations, premium architectural or designer shingles (or standing seam metal), full ridge ventilation, new pipe boots, new step flashing, deck repair allowance, full cleanup and magnetic sweep, transferable manufacturer warranty (e.g., GAF Golden Pledge or CertainTeed SureStart PLUS), and a written workmanship warranty of at least 5–10 years.',
  },
  {
    question: 'Is financing on a $30,000 roof worth it?',
    answer:
      "Roof financing is worth it when the alternative is delaying repairs and risking interior water damage. Charlotte homeowners commonly use 0% promotional periods (typically 12–24 months) or fixed-rate financing of 5.99%–9.99% for 60–144 months. A $30,000 roof at 7.99% over 120 months is roughly $364/month. Best Roofing Now offers Enhancify financing with $0 down options and approval in minutes.",
  },
];

export const metadata: Metadata = {
  title: 'Is $30,000 Too Much for a Roof in Charlotte NC? (2026 Pricing)',
  description:
    "Is a $30K roof quote fair? 2026 Charlotte pricing by material and home size, plus what your $30K should include. Free second-opinion estimates from Best Roofing Now.",
  keywords: [
    'is 30000 too much for a roof',
    'is $30,000 too much for a roof',
    'fair roof replacement price charlotte',
    'roof replacement quote charlotte nc',
    'how much is a roof charlotte nc',
    'average roof cost charlotte',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Is $30,000 Too Much for a Charlotte NC Roof? Honest Pricing Breakdown',
    description: '2026 Charlotte pricing by material and home size, plus what should be included in a $30K quote.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function Is30kTooMuchPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Is $30,000 Too Much for a Roof?', url: PAGE_URL },
        ]}
      />
      <WebPageSchema
        name="Is $30,000 Too Much for a Roof in Charlotte NC? (2026 Pricing)"
        description="Honest 2026 Charlotte pricing breakdown — when $30K is fair, when it is overpriced, and what should be included."
        url={PAGE_URL}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Is $30,000 Too Much for a Roof?', url: PAGE_URL },
        ]}
      />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/is-30000-too-much-for-a-roof-charlotte-nc`}
        pageName="Is $30,000 Too Much for a Roof in Charlotte NC?"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Architectural shingles 30-square Charlotte home — typically $11,000-$22,000 (under $30K)',
          'Class 4 impact-resistant 30-square home — $15,500-$20,000 (under $30K)',
          'Designer/luxury shingles 30-square home — $19,000-$26,000 (right around $30K)',
          'Standing seam metal 30-square home — $27,000-$48,000 ($30K is reasonable for steel/aluminum)',
          'Slate or tile 30-square home — $60,000-$105,000 ($30K is far below for premium materials)',
          'Larger 40-50 sq estate — $30K is reasonable for any architectural-class material',
          'Storm damage with insurance — your out-of-pocket is the deductible, not the full $30K',
          'Get 2-3 written estimates with line items — compare scope and warranty, not just total price',
        ]}
        pageUrl={`${SITE_CONFIG.url}/is-30000-too-much-for-a-roof-charlotte-nc`}
      />
      <FreeInspectionOfferSchema />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Is $30K Too Much for a Roof?' }]}
            className="mb-4 text-white/70"
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">2026 Charlotte Pricing Reality Check</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              Is $30,000 Too Much for a Roof in Charlotte NC?
            </h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">
              Short answer: usually yes for a standard roof — but it can be fair for a large or
              premium one. Here is the 2026 Charlotte breakdown so you can tell which one you
              are looking at.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Get a Free Second Opinion
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

      {/* Direct Answer */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-50 border-l-4 border-primary rounded-r-xl p-6 mb-10">
              <p className="text-lg font-bold text-slate-900 mb-2">{QUESTION}</p>
              <p className="text-slate-800 leading-relaxed">{ANSWER}</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              When $30,000 IS Fair
            </h2>
            <ul className="space-y-2 mb-8 list-disc list-inside text-slate-700">
              <li>Home is 3,000+ sq ft (or has steep multi-story geometry).</li>
              <li>Material is designer-grade shingle, standing seam metal, or synthetic slate.</li>
              <li>Full tear-off PLUS deck replacement is needed.</li>
              <li>Code-upgrade work (drip edge, ice-and-water, ventilation) is itemized.</li>
              <li>Warranty includes transferable manufacturer coverage (GAF Golden Pledge, CertainTeed SureStart PLUS).</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              When $30,000 IS Too Much
            </h2>
            <ul className="space-y-2 mb-8 list-disc list-inside text-slate-700">
              <li>Home is a standard 2,000 sq ft single-story with simple geometry.</li>
              <li>Material is standard architectural shingle (Timberline HDZ, Landmark, Duration).</li>
              <li>Quote does not break down materials, labor, tear-off, decking, ventilation, drip edge.</li>
              <li>Salesperson is pushing for a same-day signature with "today only" pricing.</li>
              <li>Insurance is paying part — and the contractor refuses to disclose the supplement amount.</li>
            </ul>
          </div>
        </div>
      </section>

      <CostTable
        title="Charlotte NC Roof Replacement Pricing Reality (2026)"
        subtitle="Fair-market pricing by material — based on a typical 2,000 sq ft Charlotte home."
        city="Charlotte"
        itemName="Roof Replacement"
        pageUrl={PAGE_URL}
        description="2026 Charlotte fair-market roof replacement pricing benchmarks for comparing quotes."
        rows={[
          {
            label: '3-Tab Asphalt Shingles',
            unit: 'per 2,000 sq ft',
            low: 6500,
            high: 11000,
            notes: '$3.25–$5.50/sqft. Budget option, 15–20 yr lifespan.',
          },
          {
            label: 'Architectural Shingles (Timberline HDZ, Landmark, Duration)',
            unit: 'per 2,000 sq ft',
            low: 9000,
            high: 16000,
            notes: '$4.50–$8/sqft. Most popular Charlotte choice.',
          },
          {
            label: 'Designer / Premium Shingles',
            unit: 'per 2,000 sq ft',
            low: 14000,
            high: 22000,
            notes: '$7–$11/sqft. Slate-look, shake-look profiles.',
          },
          {
            label: 'Standing Seam Metal',
            unit: 'per 2,000 sq ft',
            low: 20000,
            high: 36000,
            notes: '$10–$18/sqft. 50+ yr lifespan.',
          },
          {
            label: 'Synthetic Slate / Composite',
            unit: 'per 2,000 sq ft',
            low: 22000,
            high: 35000,
            notes: '$11–$17.50/sqft. Class 4 impact rated.',
          },
          {
            label: 'Concrete or Clay Tile',
            unit: 'per 2,000 sq ft',
            low: 24000,
            high: 40000,
            notes: '$12–$20/sqft. 50+ yr lifespan.',
          },
        ]}
        footnote="Steep pitch, multiple stories, dormers, valleys, skylights, and decking replacement add 10–25%. Code-required upgrades add $1,500–$3,000."
      />

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
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
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20 text-center">
              <p className="text-slate-800 mb-3">
                <strong>Have a $30K quote in hand?</strong> Send it to us — we will give you a free
                second-opinion written estimate with full line-item itemization.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Get a free second opinion
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CitationFacts service="Roof Replacement" city="Charlotte" state="NC" />

      <MoneyPagesLinkBlock
        title="Compare Pricing Across Materials and Services"
        subtitle="Use our 2026 Charlotte cost guides to verify any quote you receive."
        maxLinks={9}
      />

      <CTASection
        title="Want a Free Second Opinion on Your Roof Quote?"
        subtitle="No pressure, no upsells. We'll give you an honest, itemized written estimate so you can compare apples to apples — and we'll tell you straight if you should keep your existing quote."
      />
    </>
  );
}
