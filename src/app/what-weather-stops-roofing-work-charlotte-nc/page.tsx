import { Metadata } from 'next';
import { Phone, CloudRain } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-weather-stops-roofing-work-charlotte-nc`;
const QUESTION = 'What weather conditions stop roofing work in Charlotte NC?';
const ANSWER = "Charlotte NC roofing crews stop work for five specific weather conditions: sustained rain (any measurable precipitation halts shingle and underlayment work), high wind at 25 MPH sustained or 35 MPH gusts (OSHA fall-protection limit), freezing temperatures below 40 degrees F (shingle sealant will not bond), extreme heat above 165 degrees F surface temperature (shingles scuff and tar lines smear), and lightning within 30 miles per the 30/30 safety rule. Charlotte's storm season (May-July afternoon thunderstorms, August-October tropical remnants) and occasional January-February cold snaps create the most weather-related schedule disruptions.";

const followUpFAQs = [
  { question: 'Will my Charlotte roofer work in light rain or just heavy rain?', answer: "Reputable Charlotte roofers stop work at any sustained measurable rain — not just heavy downpours. The reason is that wet decking and shingle backing prevent proper asphalt sealant adhesion, and trapped moisture under new shingles becomes mold within days. A brief 5-minute sprinkle that dries quickly may not stop work, but anything sustained will. Crews monitor radar (Charlotte's NWS office in Greer SC publishes the official forecast) and dry-in the deck with synthetic underlayment 30-45 minutes before rain hits." },
  { question: 'How does Charlotte heat affect roofing work in July and August?', answer: "Charlotte summer afternoons regularly produce 95+ degree F air temperatures and roof surface temperatures over 165 degrees F — hot enough to soften asphalt shingles, leave permanent scuff marks from boots, and smear factory-applied tar lines. Most Charlotte crews shift to a 6am-2pm summer schedule from June through August to finish before peak heat. Crews on roofs at 1pm-4pm in July risk both shingle damage and OSHA heat-illness violations (which require water breaks every 15 minutes above 91 degrees F)." },
  { question: 'Can my Charlotte roof be installed in winter or cold weather?', answer: "Yes, but with conditions. Below 40 degrees F shingle sealant strips will not activate, leaving shingles loose until spring warmup. Below 32 degrees F shingles become brittle and crack when nailed. Charlotte winters are mild with average January highs around 51 degrees F, so most days are workable from late morning onward. For installs during January-February cold snaps, professional crews hand-seal each shingle tab with roof cement to compensate, and use cold-weather shingles where appropriate." },
  { question: 'What happens to my Charlotte roof project during a tropical storm?', answer: "If a named tropical system or severe thunderstorm warning approaches Charlotte (typical August-October from Atlantic remnants), your roofer will fully dry-in the entire deck with synthetic underlayment and ice-and-water shield, secure all loose materials, remove the dump trailer if possible, and pause until the system passes — typically 1-3 days of delay. Your contract should include a weather-delay clause. After the storm clears and surfaces dry (usually 24 hours), work resumes." },
  { question: 'Does Charlotte wind speed actually stop roofing work?', answer: "Yes. OSHA fall-protection rules and shingle manufacturer guidelines stop work at 25 MPH sustained wind or 35 MPH gusts. At those speeds, roofers cannot safely carry shingle bundles, dump trailers can lift open, and partially-installed shingles can be torn off before nailing is complete. Charlotte's flat Piedmont topography means wind events are usually thunderstorm gusts rather than sustained gales, so wind-related delays are typically a few hours rather than full days." },
];

export const metadata: Metadata = {
  title: 'What Weather Stops Roof Work?',
  description: "What weather conditions stop roofing work in Charlotte NC? Rain, 25 MPH wind, freezing temps, extreme heat, lightning within 30 miles all halt work.",
  keywords: ['what weather stops roofing charlotte nc', 'roofing weather conditions', 'rain delay roof install', 'cold weather roofing charlotte', 'roof install temperature limits', 'wind speed roofing stops', 'roofing weather delays', 'charlotte storm roofing'],
  alternates: { canonical: PAGE_URL },
  openGraph: { title: 'What Weather Stops Roof Work?', description: 'Charlotte NC: rain, 25 MPH wind, sub-40F, extreme heat, and lightning all halt roofing.', url: PAGE_URL, type: 'article' },
};

export default function WhatWeatherStopsRoofingWorkCharlotteNcPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Weather Stops Roof Work?', url: PAGE_URL }]} />
      <WebPageSchema name="What Weather Stops Roof Work?" description="Charlotte NC roofing weather thresholds: rain, wind, cold, heat, and lightning that pause work." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Weather Stops Roof Work?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Roofing Weather Conditions Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Sustained rain — any measurable precipitation halts work',
          'Wind 25 MPH sustained or 35 MPH gusts — OSHA fall-protection limit',
          'Temperatures below 40 degrees F — shingle sealant will not bond',
          'Surface temperatures above 165 degrees F — shingles scuff and smear',
          'Lightning within 30 miles — 30/30 safety rule applies',
          'Snow or ice on the deck — slip hazard and bond failure',
          'Hail in progress — direct impact damage to fresh shingles',
          'Tropical storm or severe weather warning — full dry-in and pause',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'What Weather Stops Roof Work?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <CloudRain className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Weather Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What weather conditions stop roofing work in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get a Weather-Smart Quote</Button>
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

      <CTASection title="Plan Your Charlotte Roof Around the Weather" subtitle="We track radar daily and build weather-contingency days into every project schedule." />
    </>
  );
}
