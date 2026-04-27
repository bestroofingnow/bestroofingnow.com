import { Metadata } from 'next';
import { Phone, Castle } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-mansard-roof-charlotte-nc`;
const QUESTION = 'What is a mansard roof and how is it different from other styles in Charlotte NC?';
const ANSWER = "A mansard roof is a four-sided roof with two slopes on every side — a very steep (often near-vertical) lower slope and a nearly flat upper slope, creating a distinctive French Second Empire silhouette. Unlike a hip roof (single slope per side) or gambrel (two slopes on only two sides), a mansard wraps the double-slope around all four sides, maximizing usable attic space as a full additional floor. In Charlotte NC, mansard roofs are rare on residential homes but appear on French-inspired estates in Eastover and Myers Park, plus mid-century commercial buildings in Uptown and SouthPark. Replacement costs run $14,000-$28,000 for a 2,000 sq ft home due to specialty materials and complex framing.";

const followUpFAQs = [
  { question: 'How much does a mansard roof cost in Charlotte NC?', answer: "Mansard roof replacement in Charlotte ranges $14,000-$28,000 for a 2,000 sq ft home — roughly double a standard gable roof. The premium reflects three factors: specialty steep-slope shingles or slate ($7-$14 per sq ft installed), complex framing at the slope transition (additional $3,000-$5,000 in labor), and required dormer integration. Slate or synthetic slate mansards (most authentic) cost $25,000-$45,000. Metal mansards are uncommon. Mecklenburg County permits run $150-$400 due to the structural complexity, and engineering review may be required for heritage-style designs." },
  { question: 'How is a mansard different from a hip or gambrel roof?', answer: "Three key differences. A hip roof has one continuous slope per side meeting at a ridge — simple and aerodynamic. A gambrel has two slopes per side but only on two sides (front and back), with flat gable ends — like a barn. A mansard combines both: double slopes on all four sides with no gable ends, creating a near-vertical lower wall that functions as a full living-space floor. Mansards offer the most usable interior space (up to 60% more than equivalent hip roofs) but cost the most and require the most maintenance." },
  { question: 'Where do I see mansard roofs in Charlotte?', answer: "Residential mansard roofs are rare in Charlotte but exist on French Second Empire and French Country estates in Eastover, Myers Park, and the Plaza Midwood historic district — typically homes built between 1920-1940 or new luxury construction over $2 million. Commercial mansards are more common: several Uptown office buildings from the 1970s-1980s feature mansard facades (a popular era trend), plus mid-century retail buildings in SouthPark. Lake Norman luxury custom homes occasionally include partial mansard sections on towers or wings for European architectural character." },
  { question: 'What materials work for mansard roofs in Charlotte?', answer: "Mansard roofs require materials rated for steep slope (60+ degrees) on the lower section. Best options for Charlotte: natural slate ($14-$25/sq ft, lifespan 75-150 years) for authentic period homes; synthetic slate like DaVinci Roofscapes ($13-$19/sq ft, 50-year warranty) for modern installations; standing seam metal ($12-$18/sq ft) for contemporary mansards; and architectural shingles rated for steep slope ($5-$8/sq ft) for budget-conscious replacements. Avoid 3-tab shingles entirely — they fail within 5-7 years on near-vertical slopes due to inadequate adhesion." },
  { question: 'Are mansard roofs good for Charlotte weather?', answer: "Mansard roofs perform reasonably well in Charlotte's climate but have specific vulnerabilities. The flat upper section can pool water during heavy summer rains (Charlotte averages 43 inches annually), leading to membrane failures every 15-20 years if not properly designed with adequate slope (minimum 1/4-inch per foot). The steep lower section sheds water excellently and resists wind well due to its near-vertical orientation. NC IRC code requires extra fastening on steep slopes — typically 6 nails per shingle vs. 4 on standard slopes. Annual inspection is essential due to material complexity." },
];

export const metadata: Metadata = {
  title: 'Mansard Roof Guide for Charlotte NC',
  description: "What is a mansard roof? Learn how it differs from hip and gambrel roofs, costs ($14,000-$28,000), and where to find them in Charlotte NC.",
  keywords: ['mansard roof Charlotte NC', 'French Second Empire roof', 'mansard vs hip roof', 'mansard roof cost', 'Charlotte luxury roofing', 'Eastover mansard', 'mansard slate roof', 'historic Charlotte roofs'],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Mansard Roof Guide for Charlotte NC',
    description: 'Learn what a mansard roof is, how it differs from hip and gambrel styles, and where to find them in Charlotte.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function MansardRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Mansard Roof Guide', url: PAGE_URL }]} />
      <WebPageSchema name="Mansard Roof Guide for Charlotte NC" description="Complete guide to mansard roofs for Charlotte NC homeowners — French Second Empire styles, costs, materials, and how they compare to other roof styles." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Mansard Roof Guide', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Mansard Roof Guide Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Four-sided roof with two slopes on every side — near-vertical lower, flat upper',
          'Maximum usable attic space — 60% more than equivalent hip roof',
          'Different from hip (single slope per side) and gambrel (two sides only)',
          'Replacement cost: $14,000-$28,000 for 2,000 sq ft Charlotte home',
          'Found on French estates in Eastover, Myers Park, Plaza Midwood',
          'Common on Uptown and SouthPark commercial buildings from 1970s-80s',
          'Best materials: slate, synthetic slate, or steep-slope architectural shingles',
          'Flat upper section requires careful waterproofing for Charlotte rains',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Mansard Roof Guide' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Castle className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Style Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What is a mansard roof and how is it different from other styles in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Free Mansard Roof Estimate</Button>
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

      <CTASection title="Own a Charlotte Mansard or French-Style Home?" subtitle="Free specialty roof inspection — we work with slate, synthetic slate, and steep-slope materials throughout Mecklenburg County." />
    </>
  );
}
