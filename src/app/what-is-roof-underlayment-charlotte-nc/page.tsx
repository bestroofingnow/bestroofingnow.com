import { Metadata } from 'next';
import { Phone, Layers } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-roof-underlayment-charlotte-nc`;
const QUESTION = 'What is roof underlayment and which type is best for Charlotte NC?';
const ANSWER =
  "Roof underlayment is the waterproof or water-resistant barrier installed directly on roof decking BENEATH shingles or other primary roofing material. It's the secondary defense that prevents water intrusion when wind-driven rain bypasses shingles. NC IRC §R905.1.1 requires underlayment on all sloped roofs in North Carolina. Three types: (1) ASPHALT-SATURATED FELT (the legacy 15-lb or 30-lb 'tar paper') — $0.10-$0.20/sq ft, 15-25 yr lifespan, becomes brittle in Charlotte sun, only meets minimum code, NOT recommended for new installs; (2) SYNTHETIC UNDERLAYMENT (woven polypropylene/polyethylene like GAF Tiger Paw, CertainTeed RoofRunner, OC ProArmor, Owens Corning Deck Defense) — $0.30-$0.60/sq ft, 30-50 yr lifespan, 3-12x stronger than felt, walkable safety surface, UV-stable, BEST CHOICE for typical Charlotte reroof; (3) PEEL-AND-STICK ICE-AND-WATER SHIELD (self-adhered modified bitumen like Grace Ice & Water Shield, GAF StormGuard, OC WeatherLock G) — $0.80-$1.50/sq ft, 25-50 yr lifespan, completely waterproof, REQUIRED in valleys per NC code §R905.1.1 and HIGHLY RECOMMENDED at eaves (24+ inches up). Best practice for Charlotte: synthetic underlayment over entire roof + ice-and-water shield in valleys, eaves, and around all penetrations. Cost: $0 premium during proper reroof.";

const followUpFAQs = [
  {
    question: 'Is felt underlayment OK for Charlotte NC roofs?',
    answer:
      "Felt underlayment meets NC code minimum but is the WORST choice for Charlotte's climate. Problems: (1) becomes brittle in 90-100°F summer attic temps (common in Charlotte attics); (2) absorbs moisture and swells, causing telegraphing through shingles; (3) tears easily during install (5-15% waste vs 1-3% for synthetic); (4) NOT walkable safety surface (slip hazard for installers); (5) only 15-25 yr lifespan vs 30-50 yr for synthetic. Cost difference: felt $0.10-$0.20/sq ft vs synthetic $0.30-$0.60/sq ft = only $400-$1,000 premium for synthetic on typical Charlotte 30-square (3,000 sq ft) roof. Choose synthetic — the small upfront premium pays back many times over via longer life and better protection.",
  },
  {
    question: 'Where is ice-and-water shield required by NC code?',
    answer:
      "NC IRC §R905.1.1 requires ice-and-water shield self-adhered membrane in these specific locations on all sloped roofs: (1) all valleys (full length, both sides extending 18+ inches from valley center); (2) all penetrations (chimneys, plumbing vents, skylights, vent pipes — 6+ inches around perimeter); (3) all wall-roof intersections (where roof meets vertical wall); (4) low-slope sections under 4/12 pitch. NC code does NOT technically require ice-and-water shield at eaves (only required in IECC Climate Zone 4+ where Charlotte sits at borderline 3/4) but Best Roofing Now installs it at eaves on all reroofs as best practice for Charlotte's heavy August-October rain and occasional ice events.",
  },
  {
    question: 'Does underlayment really matter if my shingles are good?',
    answer:
      "Yes — underlayment is the most under-appreciated component of a roof system. Statistics: 60-70% of roof leaks DON'T originate from shingle failure but rather from (1) wind-driven rain bypassing shingles; (2) ice dam water backflow; (3) shingle nail penetrations; (4) flashing failures; (5) penetration boot deterioration. In every one of these failure modes, the underlayment is the LAST line of defense before water reaches your decking and home interior. A roof with great shingles but poor underlayment fails 5-15 years sooner than a roof with same shingles + synthetic + ice-and-water shield combo. Cost of upgrading underlayment during reroof: $400-$1,500. Cost of roof failure from bad underlayment: $5,000-$30,000 in interior damage.",
  },
  {
    question: 'Can I see what underlayment my Charlotte roof has?',
    answer:
      "Three methods: (1) attic visual — go into attic, look at the underside of decking; if you can see plywood directly with nails poking through, the underlayment is BETWEEN decking and shingles (felt or synthetic); the type isn't visible from below; (2) lift edge — gently lift a shingle bottom edge at the rake; black/tan paper-like = felt, white/gray plastic-like with brand name visible = synthetic, sticky black rubber with brand name = ice-and-water shield; (3) request reroof documentation from previous installer (if same homeowner) or check Mecklenburg County permit records. Best Roofing Now's free inspection includes underlayment identification on every visit.",
  },
  {
    question: 'Should I upgrade my underlayment if I\'m only repairing shingles?',
    answer:
      "Generally no — underlayment upgrade requires reroof (full shingle removal). Spot underlayment repair is possible during shingle replacement repair work but only for the specific affected area (usually 1-3 squares). For homes with 5+ years of shingle life remaining, repair existing underlayment in repair zones and plan synthetic + ice-and-water shield upgrade for next reroof. For homes with less than 5 years remaining shingle life, full reroof with underlayment upgrade is more economical than repair-then-reroof. Best Roofing Now's free inspection provides written repair-vs-reroof economic analysis.",
  },
];

export const metadata: Metadata = {
  title: 'What Is Roof Underlayment and Which Type Is Best for Charlotte NC?',
  description:
    "Roof underlayment = waterproof barrier under shingles. Charlotte NC best: synthetic $0.30-$0.60/sq ft (Tiger Paw, RoofRunner) + ice-and-water shield in valleys/penetrations per NC IRC §R905.1.1.",
  keywords: [
    'what is roof underlayment Charlotte NC',
    'synthetic vs felt underlayment',
    'ice and water shield NC code',
    'NC IRC R905.1.1 underlayment',
    'GAF Tiger Paw',
    'CertainTeed RoofRunner',
    'roof underlayment cost',
    'best underlayment Charlotte',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Roof Underlayment and Which Type Is Best for Charlotte NC?',
    description: 'Synthetic underlayment + ice-and-water shield in valleys.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsUnderlaymentPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is Roof Underlayment?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is Roof Underlayment and Which Type Is Best for Charlotte NC?" description="Roof underlayment guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Underlayment?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is Roof Underlayment Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Roof underlayment — waterproof barrier installed directly on decking under shingles',
          'NC IRC §R905.1.1 requires underlayment on all sloped roofs',
          'Asphalt-saturated felt — $0.10-$0.20/sq ft, 15-25 yr (legacy, NOT recommended)',
          'Synthetic underlayment (Tiger Paw, RoofRunner, ProArmor) — $0.30-$0.60/sq ft, 30-50 yr (BEST)',
          'Ice-and-water shield (Grace, StormGuard, WeatherLock G) — $0.80-$1.50/sq ft, 25-50 yr',
          'Required in valleys, around all penetrations, low-slope under 4/12',
          '60-70% of roof leaks originate from underlayment failures, not shingle failures',
          'Best Charlotte combo — synthetic over entire roof + ice-and-water in valleys/eaves',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Underlayment?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Underlayment Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is Roof Underlayment and Which Type Is Best for Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Underlayment Inspection</Button>
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

      <CTASection title="Synthetic Underlayment + Ice-and-Water Shield" subtitle="Best Roofing Now installs synthetic underlayment plus NC IRC §R905.1.1-compliant ice-and-water shield in valleys, eaves, and penetrations on every reroof. Free written estimate." />
    </>
  );
}
