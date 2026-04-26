import { Metadata } from 'next';
import { Phone, Sun } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-solar-reflective-index-charlotte-nc`;
const QUESTION = 'What is Solar Reflective Index (SRI) and how does it affect my Charlotte NC roof?';
const ANSWER =
  "Solar Reflective Index (SRI) is the industry-standard measurement of how well a roof surface reflects solar heat (rather than absorbing it). SRI scale runs 0-100+: 0 = standard black surface (absorbs nearly all heat), 100 = standard white surface (reflects nearly all heat), some highly reflective coatings exceed 100 SRI. ENERGY STAR cool-roof shingles must meet minimum 25 SRI initial / 15 SRI after 3 years aging. For Charlotte NC homeowners, SRI matters because Charlotte's hot summers (90-100°F July-August averages) cause dark roofs (0.05-0.15 SRI) to reach 150-175°F surface temperature, significantly increasing AC load. Higher SRI roofs reduce: (1) ATTIC TEMPERATURE — 5-15°F reduction with cool-roof vs standard shingles; (2) AC LOAD — 5-12% lower summer cooling bills; (3) URBAN HEAT ISLAND — collective neighborhood benefit. Charlotte popular cool-roof shingles by SRI: white shingles 0.65-0.85 SRI (highest reflectance), light gray ENERGY STAR 0.40-0.55, cool brown/cool blue ENERGY STAR 0.25-0.35, medium gray standard 0.20-0.25, dark gray 0.10-0.15, black 0.05-0.10. Cool-roof shingles available: GAF Timberline Cool Series ($95-$140/sq), CertainTeed Landmark Solaris ($110-$155/sq), OC Duration Premium COOL ($120-$170/sq). Cost premium: typically $0-$20/square over standard color. Federal tax credit: 25C residential energy credit covers 30% (up to $1,200) of cool-roof material cost.";

const followUpFAQs = [
  {
    question: 'How much does a cool roof reduce my AC bill in Charlotte NC?',
    answer:
      "Charlotte NC cool-roof savings (ENERGY STAR cool-roof shingles vs standard dark shingles): typical 2,000 sq ft single-story home — $80-$240/year AC bill reduction (5-12% summer cooling savings); 2,500 sq ft two-story home — $120-$360/year savings; 3,500+ sq ft larger home — $200-$500/year savings. Greatest savings on: (1) homes with HVAC ducts running through hot attic; (2) homes facing south or southwest sun exposure; (3) homes with single-story footprint (more roof per AC load); (4) homes with low-R-value insulation. Combined with attic ventilation upgrade and R-49 insulation, total summer cooling savings 15-25% per year.",
  },
  {
    question: 'Are cool roofs available in normal colors for Charlotte NC?',
    answer:
      "Yes — modern cool-roof shingles available in 8-22 color options matching standard architectural shingles. ENERGY STAR cool-roof color examples: Driftwood (light brown), Weathered Wood (gray-brown), Birchwood (cream-tan), Sun Burst Yellow (terracotta), Cool Cottage (medium gray), Slate (gray-blue), Cool Granite (dark gray with reflective granules). KEY INSIGHT: even DARK cool-roof shingles (0.25-0.35 SRI) significantly outperform standard dark shingles (0.05-0.15 SRI) due to specially formulated reflective granule coatings. You can have cool-roof benefits without choosing white or light shingles. GAF Timberline Cool Series, CertainTeed Landmark Solaris, OC Duration Premium COOL all offer dark color options.",
  },
  {
    question: 'Is the Charlotte NC tax credit for cool roof worth claiming?',
    answer:
      "Yes — Federal 25C Residential Energy Efficient Property Credit covers 30% of cool-roof MATERIAL cost (not labor), capped at $1,200 lifetime. Real-world Charlotte example: Class 4 ENERGY STAR cool-roof shingles material cost $4,500 on 30-square reroof; tax credit = $1,200 max (30% would be $1,350 but $1,200 cap applies). Tax credit also includes other home efficiency upgrades (windows, doors, insulation) sharing the $1,200 annual cap. Filing requirements: keep Manufacturer's Certification Statement for cool-roof shingles, claim on IRS Form 5695. Best Roofing Now provides Manufacturer's Certificate of Compliance for tax credit documentation.",
  },
  {
    question: 'Should I choose light or dark colored shingles in Charlotte NC?',
    answer:
      "Both have merits — Charlotte NC color choice considerations: LIGHT COLORS (cream, tan, light gray) — best SRI 0.40-0.85, lowest AC bill, highest reflectance, may show dirt/algae streaks faster, may not match HOA aesthetic preferences, premium curb appeal in modern/coastal designs. DARK COLORS (dark gray, brown, black) — lowest SRI 0.05-0.15 (or 0.25-0.35 for cool versions), traditional/historic aesthetic, best for shaded north-facing roofs (less heat absorption matters), classic Charlotte residential look. Cool-roof solution: choose dark color in cool-roof line (GAF Cool Series, CertainTeed Solaris, OC Premium COOL) to get traditional aesthetic + 0.25-0.35 SRI vs 0.05-0.15 standard dark.",
  },
  {
    question: 'Does an HOA in Charlotte allow cool roof shingles?',
    answer:
      "Almost always yes — most Charlotte NC HOAs allow ENERGY STAR cool-roof shingles in any of their approved colors. Cool-roof shingles look identical to standard architectural shingles (same texture, profile, color choices) — only the granule coating chemistry differs. Most HOAs (Ballantyne, Highland Creek, Skybrook, Stonecroft, Providence Plantation, Northstone, Birkdale, etc.) approve cool-roof options without special HOA application required. Verify with your specific HOA architecture review committee before reroof. Best Roofing Now provides HOA-compatible written estimate with ENERGY STAR cool-roof options in your HOA-approved colors.",
  },
];

export const metadata: Metadata = {
  title: 'What Is Solar Reflective Index (SRI) and How Does It Affect My Charlotte NC Roof?',
  description:
    "SRI = solar reflectance measurement (0-100+). Charlotte NC cool-roof shingles save $80-$500/year AC bill, 5-12% summer cooling reduction. Federal 25C tax credit 30% (up to $1,200).",
  keywords: [
    'what is Solar Reflective Index SRI Charlotte NC',
    'cool roof shingles Charlotte',
    'ENERGY STAR cool roof',
    'GAF Timberline Cool Series',
    'CertainTeed Landmark Solaris',
    'OC Duration Premium COOL',
    'cool roof tax credit 25C',
    'Charlotte AC bill reduction',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Solar Reflective Index (SRI) and How Does It Affect My Charlotte NC Roof?',
    description: 'Cool-roof shingles save $80-$500/year AC bill in Charlotte.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsSRIPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is SRI?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is Solar Reflective Index (SRI) and How Does It Affect My Charlotte NC Roof?" description="SRI cool-roof guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'SRI?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is Solar Reflective Index Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Solar Reflective Index (SRI) — measure of solar reflectance, scale 0-100+',
          '0 SRI = black (absorbs heat); 100 SRI = white (reflects heat)',
          'ENERGY STAR cool-roof minimum 25 SRI initial / 15 SRI after 3 yr aging',
          'Charlotte cool-roof savings — $80-$500/year AC bill reduction',
          'White shingles 0.65-0.85 SRI; light gray 0.40-0.55; cool dark 0.25-0.35',
          'Standard dark 0.05-0.15 SRI (worst for hot Charlotte summers)',
          'Cool-roof shingle lines — GAF Cool Series, CertainTeed Solaris, OC Premium COOL',
          'Federal 25C tax credit — 30% of material cost (up to $1,200)',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'SRI?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Sun className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Solar Reflective Index Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is Solar Reflective Index (SRI) and How Does It Affect My Charlotte NC Roof?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Cool-Roof Estimate</Button>
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

      <CTASection title="ENERGY STAR Cool-Roof Shingles Available" subtitle="Best Roofing Now installs GAF Cool Series, CertainTeed Solaris, OC Premium COOL. Federal 25C tax credit documentation provided. HOA-compatible color options." />
    </>
  );
}
