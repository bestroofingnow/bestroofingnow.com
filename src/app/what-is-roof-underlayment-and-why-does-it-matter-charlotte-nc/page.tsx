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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-roof-underlayment-and-why-does-it-matter-charlotte-nc`;
const QUESTION = 'What is roof underlayment and why does it matter in Charlotte NC?';
const ANSWER =
  "Roof underlayment is the secondary water-resistant barrier installed between the roof decking and the shingles — it's your roof's backup waterproofing layer if shingles fail or wind-driven rain gets past them. In Charlotte NC, modern synthetic underlayment is required for manufacturer top-tier warranty validity. Three underlayment types: (1) Felt #15 (legacy, asphalt-saturated paper) — $0.10-$0.20/sq ft, 5-10 yr lifespan in Charlotte humidity, NOT recommended; (2) synthetic underlayment (Tyvek/Titanium PSU30, GAF Tiger Paw, OC ProArmor) — $0.30-$0.50/sq ft, 30-50+ yr lifespan, REQUIRED for top-tier warranties; (3) ice-and-water shield (Grace Ice & Water, GAF WeatherWatch) — $0.40-$0.80/sq ft, peel-and-stick rubberized membrane installed at eaves (3-6 ft from edge in NC), valleys, and around all penetrations. The cost difference between cheap felt and proper synthetic + ice-and-water is only $300-$700 on a typical 30-square Charlotte reroof — but losing the 50-year warranty is a $5,000-$15,000 mistake. Best Roofing Now uses synthetic underlayment + ice-and-water shield as the standard spec on every install.";

const followUpFAQs = [
  {
    question: 'Why is synthetic underlayment better than felt #15 in Charlotte?',
    answer:
      "Synthetic underlayment outperforms felt #15 in 5 ways critical to Charlotte humidity: (1) lifespan 30-50+ years vs felt 5-10 years; (2) tear strength 3-5x higher than felt (resists install damage and wind uplift); (3) waterproof vs water-resistant (felt absorbs moisture and breaks down); (4) UV resistant for 60-90 days exposure during install (felt becomes brittle in sun within 2-3 weeks); (5) lighter weight reduces installer fatigue and improves install quality. Manufacturer top-tier warranties (GAF Golden Pledge, CertainTeed 5-Star Plus, OC Platinum) REQUIRE synthetic underlayment — felt installs disqualify from premium warranty coverage.",
  },
  {
    question: 'Where is ice-and-water shield required in Charlotte NC?',
    answer:
      "NC IRC §R905.1.2 requires ice-and-water shield in 4 critical locations: (1) eaves — 3-6 feet from the gutter edge (varies by climate zone, Charlotte standard is 3 ft minimum, 6 ft recommended for north Mecklenburg / Lake Norman ice-event areas); (2) valleys — full length where two roof slopes meet; (3) penetrations — around chimneys, skylights, plumbing vents, and HVAC curbs; (4) low-slope sections — any pitch under 4/12. Best Roofing Now's standard install includes ice-and-water shield in all 4 locations as part of every reroof at no upcharge.",
  },
  {
    question: 'Can I save money by using cheaper underlayment in Charlotte?',
    answer:
      "Don't — the savings is too small and the cost is too high. Felt #15 saves $300-$700 vs synthetic on a typical 30-square Charlotte reroof. But it loses: (1) 50-year top-tier manufacturer warranty (worth $5,000-$15,000 in coverage value); (2) 5-10 year roof lifespan in Charlotte humid climate (forces earlier reroof costing $11,000-$22,000); (3) install quality (felt tears under foot traffic, leaving uncovered areas). The 'savings' is the most expensive long-term choice. Always insist on synthetic underlayment.",
  },
  {
    question: 'How thick is roof underlayment in Charlotte?',
    answer:
      "Underlayment is typically thin (15-30 mil thick) but the spec matters more than thickness. Standard synthetic underlayment specs: Tyvek/Titanium PSU30 (30 mil, 30-yr warranty), GAF Tiger Paw (similar 30 mil, comes in GAF system bundle), Owens Corning ProArmor (30 mil, comes in OC system bundle), Atlas Summit (30 mil budget option). Premium synthetic with breathable membrane: $0.50-$0.70/sq ft, allows attic moisture to escape upward. Ice-and-water shield is thicker (40-60 mil rubberized) and self-seals around fasteners — the only roof material that adheres permanently to decking.",
  },
  {
    question: 'Does Best Roofing Now use synthetic underlayment standard?',
    answer:
      "Yes — synthetic underlayment + ice-and-water shield at all required locations is included in every Best Roofing Now reroof at no upcharge. Standard spec: GAF Tiger Paw (with GAF Master Elite Golden Pledge installs), CertainTeed RoofRunner (with CertainTeed SELECT 5-Star Plus installs), Owens Corning ProArmor (with OC Platinum installs), or Tyvek/Titanium PSU30 (universal premium synthetic). Plus Grace Ice & Water or GAF WeatherWatch ice-and-water shield 3-6 ft from eaves, full valley length, and around all penetrations. Specifications match the manufacturer top-tier warranty requirements at every brand.",
  },
];

export const metadata: Metadata = {
  title: 'What Is Roof Underlayment and Why Does It Matter in Charlotte NC?',
  description:
    "Roof underlayment is the waterproof barrier under shingles. Synthetic ($0.30-0.50/sq ft) lasts 30-50 yr vs felt 5-10 yr. Ice-and-water shield required at eaves/valleys per NC code.",
  keywords: [
    'what is roof underlayment Charlotte NC',
    'synthetic underlayment vs felt',
    'ice and water shield Charlotte',
    'roof underlayment types',
    'GAF Tiger Paw underlayment',
    'OC ProArmor underlayment',
    'Tyvek roof underlayment',
    'underlayment cost Charlotte',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Roof Underlayment and Why Does It Matter in Charlotte NC?',
    description: 'Synthetic underlayment + ice-and-water shield critical for warranty validity.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsRoofUnderlaymentPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is Roof Underlayment?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is Roof Underlayment and Why Does It Matter in Charlotte NC?" description="Roof underlayment guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Underlayment?', url: PAGE_URL }]} />
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
          'Roof underlayment — secondary waterproof barrier between decking and shingles',
          'Felt #15 (legacy, NOT recommended) — $0.10-0.20/sq ft, 5-10 yr lifespan',
          'Synthetic underlayment (Tyvek, Tiger Paw, ProArmor) — $0.30-0.50/sq ft, 30-50+ yr',
          'Ice-and-water shield (Grace, GAF WeatherWatch) — $0.40-0.80/sq ft, peel-and-stick',
          'NC IRC §R905.1.2 requires ice-and-water shield at eaves, valleys, penetrations, low-slope sections',
          'Synthetic underlayment REQUIRED for top-tier manufacturer warranty validity',
          'Cost difference cheap-vs-proper only $300-$700 on 30-sq home',
          'Losing 50-yr warranty is $5,000-$15,000 mistake — always insist on synthetic',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Underlayment?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <ClipboardCheck className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Underlayment Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is Roof Underlayment and Why Does It Matter in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Estimate w/ Synthetic Standard</Button>
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

      <CTASection title="Synthetic Underlayment + Ice-and-Water Shield Standard" subtitle="Every Best Roofing Now reroof includes synthetic underlayment and ice-and-water shield at no upcharge. Required for 50-year warranty validity." />
    </>
  );
}
