import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Palette, CheckCircle2, ArrowRight } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-color-roof-should-i-choose-charlotte-nc`;
const QUESTION = 'What color roof should I choose for my Charlotte NC home?';
const ANSWER =
  "The best roof color for a Charlotte NC home depends on 4 factors: (1) home architectural style — traditional brick colonials look best in Weathered Wood, Charcoal, or Driftwood; modern farmhouses pair with Pewter or Slate Gray; Mediterranean villas need terracotta clay tile or Brava synthetic; Craftsman bungalows match Hunter Green or warm browns; (2) HOA-approved palette — most Charlotte HOAs (Ballantyne, Providence, Quail Hollow, Foxcroft) restrict to 4-8 approved colors per neighborhood; (3) climate — lighter colors (Cool Charcoal, Pewter, Driftwood) reflect Charlotte's intense summer sun and drop attic temps 5-10°F vs darker colors; (4) resale value — neutral grays and earth tones (Charcoal, Weathered Wood, Driftwood, Pewter) appeal to the broadest buyer pool and add 1-3% home value vs bold or unusual colors. Best Roofing Now brings physical samples to every consultation — never decide from photos alone.";

const followUpFAQs = [
  {
    question: 'What roof colors are most popular in Charlotte NC?',
    answer:
      "The 5 most popular Charlotte roof colors in 2026: (1) Weathered Wood (warm gray-brown — works on 70%+ of Charlotte home styles); (2) Charcoal (deep gray — modern and traditional); (3) Driftwood (light gray-brown — great for brick); (4) Pewter (medium cool gray — modern farmhouses); (5) Slate Gray (deep cool gray — contemporary). All 5 are available in GAF Timberline HDZ, CertainTeed Landmark, and OC TruDefinition Duration libraries. We bring physical samples of all 5 to consultations for direct comparison against your home's brick, paint, and trim.",
  },
  {
    question: 'Should I match my roof to my brick or paint?',
    answer:
      "Match the roof to the dominant exterior material (typically brick on Charlotte homes). Three rules: (1) cool brick (gray, white, light tan) pairs with cool roof colors (Charcoal, Pewter, Slate Gray); (2) warm brick (red, orange, deep brown) pairs with warm roof colors (Weathered Wood, Driftwood, Hunter Green); (3) avoid matching the roof to trim or shutter color — creates a flat appearance. The roof should be 1-2 shades darker than the brick for the most balanced look.",
  },
  {
    question: 'Do darker roofs really cost more in summer cooling?',
    answer:
      'Yes. Dark roof colors (Black, Hunter Green, deep Charcoal) absorb 70-90% of solar radiation vs light colors (Cool Charcoal, Pewter, Driftwood) at 40-50%. Charlotte attic temperatures with dark shingles hit 150°F+ in July; light reflective shingles drop that 20-30°F. Real-world cooling cost difference: $80-$200/year for a typical 30-square Charlotte home. Energy Star rated cool-roof shingles (CertainTeed Presidential Solaris, GAF Timberline CS) reduce summer cooling 10-15% vs standard dark colors.',
  },
  {
    question: 'How do I get my HOA to approve my roof color choice?',
    answer:
      "Charlotte HOAs (FirstService Residential, CAMS, AMG, RealManage management firms) require ARB approval before roof work. Submit: (1) physical shingle sample (we bring samples to consultation); (2) manufacturer color name and code (e.g., 'GAF Timberline HDZ Charcoal #C-32'); (3) photo of similar home in same community using the color (we have a library); (4) installer credentials (Best Roofing Now is GAF Master Elite, CertainTeed SELECT, OC Platinum). Typical 2-4 week ARB review with 99%+ first-pass approval rate from Best Roofing Now submissions.",
  },
  {
    question: 'Will roof color affect my home\'s resale value?',
    answer:
      "Yes — but it's marginal vs other factors. Neutral colors (Weathered Wood, Charcoal, Pewter, Driftwood) add 1-3% appraisal value vs bold or unusual colors. The bigger value drivers are: roof age (newer = higher), material quality (architectural vs 3-tab), warranty transferability (top-tier transferable warranty adds 5-10%), and visible install quality (no missing shingles, clean ridge cap line). Color matters most for buyer first impression and avoiding HOA hassles for the next owner.",
  },
];

export const metadata: Metadata = {
  title: 'What Color Roof Should I Choose for My Charlotte NC Home?',
  description:
    "What color roof works best in Charlotte NC? Match brick, consider HOA palette, climate impact (lighter saves $80-200/yr cooling), and resale value. Physical samples brought to every consultation.",
  keywords: [
    'what color roof should I choose Charlotte NC',
    'best roof color for Charlotte',
    'roof color matching brick',
    'cool roof shingle colors',
    'HOA approved roof colors Charlotte',
    'popular roof colors NC',
    'roof color for resale value',
    'Charlotte roof color guide',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Color Roof Should I Choose for My Charlotte NC Home?',
    description: 'Roof color guide for Charlotte NC: brick matching, HOA palette, climate impact, resale value.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatColorRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Color Roof Should I Choose?', url: PAGE_URL }]} />
      <WebPageSchema name="What Color Roof Should I Choose for My Charlotte NC Home?" description="Roof color guide for Charlotte NC homes." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Color Roof?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Color Roof Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Match the roof to dominant exterior material — typically brick on Charlotte homes',
          'Cool brick (gray, white, light tan) → cool roof (Charcoal, Pewter, Slate Gray)',
          'Warm brick (red, orange, brown) → warm roof (Weathered Wood, Driftwood, Hunter Green)',
          'Roof 1-2 shades darker than brick for most balanced look',
          'Lighter colors (Cool Charcoal, Pewter) save $80-200/year on summer cooling',
          'Most popular 2026 Charlotte colors — Weathered Wood, Charcoal, Driftwood, Pewter, Slate Gray',
          'HOA palette restrictions — Ballantyne/Providence/Quail Hollow/Foxcroft typically 4-8 approved colors',
          'Neutral colors add 1-3% resale value vs bold/unusual colors',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'What Color Roof?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Palette className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Color Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Color Roof Should I Choose for My Charlotte NC Home?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">See Physical Color Samples</Button>
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

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Why Roof Color Matters in Charlotte NC</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Color is the most visible roof decision — affects curb appeal and resale.',
                'HOA-restricted neighborhoods limit options to 4-8 approved colors per community.',
                'Lighter colors reflect Charlotte sun and reduce attic temperatures 20-30°F.',
                'Matching brick and trim creates the most balanced exterior aesthetic.',
                'Physical samples beat photos — color appears 30-50% darker on a house than on a swatch.',
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
                <strong>See your colors in person before deciding.</strong> Best Roofing Now brings physical samples to every consultation — compare directly against your brick, paint, and trim.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                Schedule Color Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Choose the Right Color With Confidence" subtitle="Physical samples brought to every consultation. HOA approval coordinated. Free color consultation." />
    </>
  );
}
