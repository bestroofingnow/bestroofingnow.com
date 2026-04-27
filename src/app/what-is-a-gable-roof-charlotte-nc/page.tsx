import { Metadata } from 'next';
import { Phone, Triangle } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-gable-roof-charlotte-nc`;
const QUESTION = 'What is a gable roof and is it right for my Charlotte NC home?';
const ANSWER = "A gable roof is a triangular roof style with two sloping sides that meet at a central ridge, forming flat triangular walls (gables) at each end. It's the most common roof style in Charlotte NC, found on roughly 65% of homes built in the past 50 years across neighborhoods like Plaza Midwood, Dilworth, Ballantyne, and University City. Gable roofs cost less to build ($6,500-$13,000 for a 2,000 sq ft replacement), shed Charlotte's heavy summer rain efficiently, allow more attic space for storage or vaulted ceilings, and accept easy ventilation. However, they offer less wind resistance than hip roofs in severe storms.";

const followUpFAQs = [
  { question: 'How much does a gable roof cost to replace in Charlotte NC?', answer: "Gable roof replacement in Charlotte costs $6,500-$13,000 for a typical 2,000 sq ft home with architectural shingles ($4.00-$6.50 per sq ft installed). Gable roofs run 10-15% cheaper than hip roofs because of simpler framing — fewer rafters, no hip ridges, and less labor. Premium upgrades: metal standing seam ($11-$17/sq ft), synthetic slate ($13-$19/sq ft), or natural cedar shake ($9-$14/sq ft). Mecklenburg County permits add $75-$200 to total project cost." },
  { question: 'Are gable roofs safe in Charlotte thunderstorms?', answer: "Gable roofs are safe in typical Charlotte weather but have known weaknesses in severe storms. The vertical gable wall acts like a sail, catching wind and creating uplift pressure on the roof structure. NC building code (IRC 2018) requires gable end bracing for winds over 90 mph. Charlotte's average peak winds rarely exceed 60 mph, but during severe thunderstorms or hurricane remnants (Hugo 1989, Florence 2018), gable roofs see 30-40% more damage than hip roofs. Hurricane straps and gable end bracing are critical." },
  { question: 'What pitch should a Charlotte gable roof have?', answer: "Most Charlotte gable roofs use a 6/12 to 9/12 pitch (rise over 12 inches of run), balancing aesthetics, drainage, and attic space. Steeper pitches (9/12-12/12) appear on Tudor and Cape Cod homes in Myers Park and Dilworth, shedding rain quickly and providing usable attic. Lower pitches (4/12-6/12) suit ranch homes in Beverly Woods and modern designs in NoDa. NC code requires minimum 2/12 pitch for asphalt shingles; below that, you need rolled roofing or membrane systems." },
  { question: 'What are the disadvantages of gable roofs in Charlotte?', answer: "Gable roofs have three main drawbacks for Charlotte homeowners. First, wind vulnerability — the flat gable end catches wind, leading to peel-back damage in storms above 60 mph. Second, less efficient hip ventilation — though gable vents help, they create cross-flow that can pull conditioned air in summer. Third, insurance costs — some NC insurers charge 5-10% more for gable roofs vs. hip roofs in coastal-influenced regions. The fix: gable end bracing, hurricane straps, and proper ridge venting can mitigate most issues." },
  { question: 'Can I add dormers to my Charlotte gable roof?', answer: "Yes — gable roofs are ideal for dormer additions, popular on second-floor renovations in Plaza Midwood, NoDa, and Dilworth bungalows. Shed dormers ($8,000-$18,000) add room without changing the main roofline. Gable dormers ($10,000-$25,000) match the existing pitch and add architectural character. Charlotte permits require structural engineering for dormers over 50 sq ft, and you'll need to verify load paths to existing rafters. Most projects take 3-6 weeks including permit approval through Mecklenburg County." },
];

export const metadata: Metadata = {
  title: 'Gable Roof Guide for Charlotte NC',
  description: "What is a gable roof? Learn pros, cons, costs ($6,500-$13,000), pitch options, and whether it's right for your Charlotte NC home.",
  keywords: ['gable roof Charlotte NC', 'gable roof cost', 'gable vs hip roof', 'gable roof pitch', 'gable roof advantages', 'Charlotte roof styles', 'gable dormer Charlotte', 'gable roof replacement'],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Gable Roof Guide for Charlotte NC',
    description: 'Learn what a gable roof is, when it works for Charlotte homes, and how it compares to other styles.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function GableRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Gable Roof Guide', url: PAGE_URL }]} />
      <WebPageSchema name="Gable Roof Guide for Charlotte NC" description="Complete guide to gable roofs for Charlotte NC homeowners — costs, pitch options, dormer additions, and storm safety." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Gable Roof Guide', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Gable Roof Guide Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Triangular roof with two sloping sides meeting at central ridge',
          'Most common Charlotte roof style — found on 65% of area homes',
          'Replacement cost: $6,500-$13,000 for a 2,000 sq ft home',
          'Standard pitch: 6/12 to 9/12 for Charlotte rain shedding',
          'Costs 10-15% less than hip roofs due to simpler framing',
          'Allows easy attic ventilation through gable end vents',
          'Requires gable end bracing per NC IRC 2018 for winds over 90 mph',
          'Ideal for adding shed or gable dormers ($8,000-$25,000)',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Gable Roof Guide' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Triangle className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Style Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What is a gable roof and is it right for my Charlotte NC home?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Free Gable Roof Estimate</Button>
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

      <CTASection title="Considering a Gable Roof Replacement?" subtitle="Free Charlotte NC inspection — get expert guidance on pitch, materials, and storm-ready upgrades." />
    </>
  );
}
