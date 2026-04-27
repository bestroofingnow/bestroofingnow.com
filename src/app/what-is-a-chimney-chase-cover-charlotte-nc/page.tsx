import { Metadata } from 'next';
import { Phone, Box } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-chimney-chase-cover-charlotte-nc`;
const QUESTION = 'What is a chimney chase cover and when does it need replacement in Charlotte NC?';
const ANSWER =
  "A chimney chase cover is the metal cap that sits on top of a framed-and-sided chimney chase (the wood-framed structure surrounding a prefab metal fireplace flue, common on post-1980 Charlotte NC homes — distinct from masonry brick chimneys which use crown coatings instead). The cover prevents rain, snow, debris, birds, and squirrels from entering the chase cavity. Three material tiers: (1) GALVANIZED STEEL — most common, $200-$500 installed, 8-15 yr lifespan, rusts inevitably (look for orange streaks on siding); (2) STAINLESS STEEL — premium, $400-$900 installed, 25-50 yr lifespan, no rust; (3) COPPER — luxury, $800-$2,000 installed, 50-100+ yr lifespan, develops natural patina. Replace your Charlotte NC chase cover when you see: rust streaks running down siding (corrosion), water staining inside upper interior wall (cover failure), visible holes/cracks in cover, sagging center (water pooling damage), chimney chase interior moisture during inspection. Most pre-2000 Charlotte homes have galvanized steel covers approaching end-of-life. Best Roofing Now's free inspection includes chase cover assessment with stainless steel upgrade pricing.";

const followUpFAQs = [
  {
    question: 'How is a chimney chase cover different from a chimney crown in Charlotte NC?',
    answer:
      "CHIMNEY CHASE COVER — metal cap (galvanized, stainless, or copper) that sits ON TOP of a framed-and-sided wood chase surrounding a prefab metal flue (common on Charlotte homes built 1980-2010). CHIMNEY CROWN — concrete or mortar cap poured ON TOP of a masonry brick chimney with terracotta clay or metal flue tile (older Charlotte homes pre-1980, custom construction). They serve the same purpose (waterproof the chimney top) but use entirely different materials, installation methods, and pricing. Crown repair $400-$1,500; crown rebuild $800-$3,500. Chase cover replacement $200-$2,000 by material. Most modern Charlotte homes have chase covers, not crowns.",
  },
  {
    question: 'How much does chimney chase cover replacement cost in Charlotte NC?',
    answer:
      "Charlotte NC chase cover replacement pricing: GALVANIZED STEEL — $200-$500 installed (cheapest, 8-15 yr life, rusts); STAINLESS STEEL 304 — $400-$900 installed (premium standard, 25-50 yr life, no rust); STAINLESS STEEL 316 marine grade — $600-$1,200 installed (best for lakefront LKN, 40-60 yr life); COPPER — $800-$2,000 installed (luxury, 50-100+ yr life, patinas). Cost includes: cover fabrication to exact chimney dimensions, removal of old cover, installation with proper sealant, top-edge counterflashing reinforcement. Often bundled with reroof at $100-$300 labor savings. Best Roofing Now strongly recommends stainless 304 minimum for Charlotte (avoids cyclical galvanized replacement).",
  },
  {
    question: 'How do I tell if my Charlotte NC chimney chase cover is failing?',
    answer:
      "Five failure signs: (1) RUST STREAKS on siding directly below chase cover (galvanized steel corrosion, indicates active rust-through); (2) WATER STAINING on upper interior walls or ceilings near chimney (cover compromised, water entering chase); (3) VISIBLE HOLES OR CRACKS in cover (look from second-floor window or with binoculars); (4) SAGGING CENTER of cover (improper pitch causing water pooling, accelerates rust); (5) DEBRIS BUILDUP visible on cover surface (poor drainage). Most galvanized covers fail within 8-15 years of install. If your Charlotte home is 15+ years old with original galvanized cover, replacement is likely needed within 2-5 years.",
  },
  {
    question: 'Should I replace my chase cover during a Charlotte NC reroof?',
    answer:
      "Strongly yes — bundling chase cover replacement with reroof saves 15-25% vs separate projects. Reasons: (1) shared labor mobilization (truck, equipment, dumpster); (2) crew already on roof with fall safety in place; (3) coordinated flashing where chase meets roof shingles; (4) single-day completion vs separate scheduling; (5) one-warranty coordination. Cost during reroof: stainless steel chase cover adds only $250-$700 to reroof estimate (vs $400-$900 standalone). For Charlotte homes with galvanized covers approaching end-of-life: ALWAYS upgrade to stainless during reroof — eliminates next replacement cycle.",
  },
  {
    question: 'Can I install a chase cover myself in Charlotte NC?',
    answer:
      "Strongly NOT recommended — DIY chase cover install has 4 major problems: (1) FABRICATION — covers must be custom-fabricated to exact chimney dimensions ±1/8 inch (improper fit voids waterproofing); (2) SAFETY — chimney is the highest point on roof, fall risk is extreme (CDC: 247,000+ ladder/roof fall ER visits annually); (3) SEALANT specification — wrong sealant type causes premature failure; (4) TOP-EDGE FLASHING integration — must coordinate with chimney top edge for waterproof seal. Cost difference: DIY materials $100-$200 + safety risk vs professional install $200-$2,000 with warranty. Best Roofing Now provides custom-fabricated chase covers with 5-25 yr workmanship warranty.",
  },
];

export const metadata: Metadata = {
  title: 'What Is a Chimney Chase Cover and When Does It Need Replacement?',
  description:
    "Chimney chase cover = metal cap on framed chimney chase (post-1980 Charlotte homes). Galvanized 8-15 yr, stainless 25-50 yr, copper 50-100+ yr. Cost $200-$2,000.",
  keywords: [
    'what is a chimney chase cover Charlotte NC',
    'chimney chase cover replacement',
    'galvanized chase cover rust',
    'stainless steel chase cover',
    'copper chase cover Charlotte',
    'chimney chase vs crown',
    'chase cover cost NC',
    'chimney waterproofing',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is a Chimney Chase Cover and When Does It Need Replacement?',
    description: 'Galvanized 8-15 yr, stainless 25-50 yr, copper 50-100+ yr.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function ChimneyChaseCoverPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Chimney Chase Cover?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is a Chimney Chase Cover and When Does It Need Replacement?" description="Chimney chase cover guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Chase Cover?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is a Chimney Chase Cover Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Chimney chase cover — metal cap on framed-and-sided chimney chase',
          'Common on post-1980 Charlotte NC homes (vs masonry crown on older homes)',
          'Galvanized steel — $200-$500, 8-15 yr lifespan, rusts inevitably',
          'Stainless steel — $400-$900, 25-50 yr lifespan (recommended)',
          'Copper — $800-$2,000, 50-100+ yr lifespan, luxury',
          'Failure signs — rust streaks on siding, water staining, holes, sagging',
          'Bundle with reroof saves 15-25% vs standalone replacement',
          'NEVER DIY — custom fabrication and roof safety required',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Chase Cover?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Box className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Chimney Chase Cover Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is a Chimney Chase Cover and When Does It Need Replacement in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Chase Cover Inspection</Button>
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

      <CTASection title="Stainless Steel Upgrade Eliminates Rust Cycle" subtitle="Bundle chase cover replacement with reroof for 15-25% savings. Custom-fabricated stainless or copper covers with 5-25 year warranty. Free inspection." />
    </>
  );
}
