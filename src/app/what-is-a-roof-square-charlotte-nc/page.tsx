import { Metadata } from 'next';
import { Phone, ClipboardCheck } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-roof-square-charlotte-nc`;
const QUESTION = 'What is a roof square in Charlotte NC roofing?';
const ANSWER =
  "A roof 'square' is the standard roofing measurement unit equal to 100 square feet (a 10 ft x 10 ft area). Roofers use squares to estimate material quantity and labor — for example, a typical 30-square Charlotte home means 3,000 sq ft of roof surface area (different from the home's interior square footage, which is typically 1,800-2,800 sq ft for a 30-square roof). Why this matters for homeowners: roofing materials are sold by the square (3 bundles of architectural shingles cover 1 square), labor is priced per square, and warranty coverage is typically calculated by square. Charlotte NC residential typical sizes: starter homes 18-22 squares, mid-size homes 25-35 squares (most common), large homes 40-50 squares, premium estates 50-70+ squares. Always ask your roofing contractor for the square count on the estimate — this is the most useful comparison number across multiple bids.";

const followUpFAQs = [
  {
    question: 'How do I figure out how many squares my Charlotte NC roof has?',
    answer:
      "Three methods to estimate your roof square count: (1) measurement — walk the perimeter of your home, multiply length x width for footprint, then multiply by 1.1-1.4 (depending on roof pitch — steeper roofs have more surface area than footprint); (2) interior sq ft estimate — typical 30-square roof = 1,800-2,800 sq ft interior (varies by ceiling height, garage configuration, additions); (3) Best Roofing Now's free measurement during inspection — accurate to within 5%. For insurance claims and contractor estimates, professional measurement is essential.",
  },
  {
    question: 'What does a typical Charlotte NC roof cost per square?',
    answer:
      "Charlotte NC roofing pricing per square in 2026: 3-tab basic shingles $400-$600 per square, architectural shingles $500-$900 per square (most popular), Class 4 impact-resistant $700-$1,100 per square, designer/luxury shingles $900-$1,400 per square, standing-seam metal $900-$3,000 per square (varies by material), real slate $2,000-$3,500 per square, copper $2,400-$3,000 per square. Multiply by your roof square count for total: example 30-sq home with architectural shingles = $15,000-$27,000.",
  },
  {
    question: 'How does roof pitch affect square measurements?',
    answer:
      "Roof pitch (slope steepness) increases the actual roof surface area beyond the home's footprint. Pitch ratios and surface area multipliers: 4/12 pitch (typical Charlotte starter home) = 1.05x footprint; 6/12 pitch (most Charlotte residential) = 1.12x; 8/12 pitch (steeper traditional) = 1.20x; 10/12 pitch (Cape Cod and Tudor styles) = 1.30x; 12/12 pitch (very steep, A-frame, Victorian) = 1.41x. So a 2,000 sq ft footprint home with 8/12 pitch roof = 2,400 sq ft of actual roof surface = 24 squares.",
  },
  {
    question: 'Why is the square more useful than total cost for comparing estimates?',
    answer:
      "Per-square pricing lets you compare apples-to-apples across estimates. Three contractor estimates might show different total prices but similar per-square pricing — the difference is roof complexity (more valleys, dormers, chimneys = more flashing/labor) or scope difference (one includes ridge vent, another doesn't). Ask each estimate for: total roof squares, per-square material cost, per-square labor cost, and adders (decking replacement at $80-$120/sheet, ridge vent at $7-$15/linear ft, etc.). The contractor with cleaner per-square pricing structure is usually the better partner.",
  },
  {
    question: 'How many bundles of shingles cover one square in Charlotte NC?',
    answer:
      "Standard architectural shingles: 3 bundles cover 1 square (33.3 sq ft per bundle). Older 3-tab shingles: 3 bundles per square as well. Designer/luxury shingles: typically 4 bundles per square (heavier weight, smaller exposure). Cedar shake: 4-5 bundles per square (depending on grade). Slate: 1 bundle ≈ 1/3 square (heavier individual tiles). Best Roofing Now orders 5-10% additional material as 'waste factor' to account for cuts at valleys, hips, ridges, and any damaged shingles during install — leftover material stays with you for future spot repairs.",
  },
];

export const metadata: Metadata = {
  title: 'What Is a Roof Square in Charlotte NC Roofing?',
  description:
    "A roof 'square' = 100 sq ft (10x10 ft area). Charlotte NC homes: starter 18-22 sq, mid-size 25-35 sq, large 40-50 sq, estate 50-70+ sq. Per-square pricing $400-$3,000.",
  keywords: [
    'what is a roof square Charlotte NC',
    'roof square measurement',
    'roofing square explained',
    'how to measure roof squares',
    'roof pitch and squares',
    'shingles per square',
    'roof estimate squares',
    'Charlotte roofing terminology',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is a Roof Square in Charlotte NC Roofing?',
    description: 'A roof square = 100 sq ft. Standard roofing measurement unit explained.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsARoofSquarePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is a Roof Square?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is a Roof Square in Charlotte NC Roofing?" description="Roof square measurement unit explained for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Roof Square?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is a Roof Square Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'A roof "square" = 100 square feet (10 ft x 10 ft area)',
          'Standard measurement unit roofers use for material and labor',
          'Charlotte starter homes — 18-22 squares typical',
          'Charlotte mid-size homes — 25-35 squares (most common)',
          'Charlotte large homes — 40-50 squares',
          'Charlotte premium estates — 50-70+ squares',
          'Architectural shingles — 3 bundles cover 1 square',
          'Per-square pricing is the best apples-to-apples comparison across estimates',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Roof Square?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <ClipboardCheck className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roofing Terminology Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is a Roof Square in Charlotte NC Roofing?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Roof Measurement</Button>
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

      <CTASection title="Free Accurate Roof Measurement" subtitle="Best Roofing Now provides free precise roof measurement during inspection — accurate to within 5%. Per-square pricing for honest comparison." />
    </>
  );
}
