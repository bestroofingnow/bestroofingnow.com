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

const PAGE_URL = `${SITE_CONFIG.url}/what-time-do-roofers-start-work-charlotte-nc`;
const QUESTION = 'What time do roofers start work in Charlotte NC?';
const ANSWER = "Most Charlotte NC roofers start work between 7am and 5pm Monday through Friday during standard spring and fall seasons. Many HOAs in Ballantyne, Myers Park, Eastover, Providence Plantation, and SouthPark restrict construction noise to 8am-5pm weekdays only, with no weekend work permitted. From June through August, Charlotte crews typically shift to a 6am-2pm schedule to finish before peak heat (when surface temperatures exceed 150 degrees F and shingles become too soft to walk on). Charlotte city ordinance allows construction noise from 7am-9pm but most professional roofers respect neighborhood norms and finish by 5pm.";

const followUpFAQs = [
  { question: 'Do Charlotte HOAs really restrict roofing work hours?', answer: "Yes. Many of Charlotte's premier neighborhoods including Ballantyne Country Club, Eastover, Foxcroft, Myers Park, Providence Plantation, and Piper Glen have HOA rules that restrict construction noise to 8am-5pm Monday-Friday and either prohibit or restrict Saturday work entirely. Sunday work is almost universally banned. Some Lake Norman gated communities (The Peninsula, The Point, Trump National) require advance HOA notification and may restrict to 9am-4pm. Always check your CCRs and notify HOA management before scheduling." },
  { question: 'Why do Charlotte roofers start so early in summer?', answer: "Charlotte summer surface temperatures on a south-facing dark shingle roof regularly hit 165-180 degrees F by 1pm in July and August. Soft hot shingles scuff under boot pressure, factory tar lines smear, and OSHA heat-illness rules require mandatory water breaks every 15 minutes above 91 degrees F ambient. Starting at 6am gives crews 7-8 productive hours before they have to come down. The early start also means less afternoon thunderstorm exposure during Charlotte's peak storm season." },
  { question: 'Can my Charlotte roofer work on weekends?', answer: "Saturday work is common and generally legal under Charlotte city noise ordinance (which allows 7am-9pm construction noise daily). However, many neighborhoods restrict weekend work via HOA rules — particularly upscale areas in south Charlotte and Lake Norman. Sunday work is rare even where legal because most Charlotte crews observe a no-Sunday policy out of respect for neighbors. Discuss weekend scheduling at contract signing so you can verify HOA compatibility before the dump trailer arrives." },
  { question: 'Will my Charlotte roofer wake up the neighborhood?', answer: "Roofing creates 80-95 dB at the source, which is loud — comparable to a garbage disposal or motorcycle. Most Charlotte neighborhoods sleep through 7am starts because the noise is consistent rather than startling, but pneumatic nail guns and tear-off shoveling can wake light sleepers. Professional Charlotte roofers will hand-deliver door hangers to neighbors 1-2 days before the start date noting the install dates, hours, and a phone number for concerns — a courtesy most homeowners appreciate." },
  { question: 'What time does roofing work end in Charlotte each day?', answer: "Standard Charlotte roofing days end between 4pm and 6pm to allow magnetic-sweep cleanup, tarp securing, and tool loadout before sunset. In June Charlotte sunset is around 8:50pm but crews almost never work past 5pm because of heat fatigue. In December sunset is around 5:15pm so crews wrap up by 4:30pm. Most Charlotte HOAs require all visible construction activity to cease by 5pm regardless of remaining daylight. Per NC IRC R905, the deck must be fully dried-in with felt or synthetic before crews leave." },
];

export const metadata: Metadata = {
  title: 'What Time Do Roofers Start?',
  description: "What time do roofers start in Charlotte NC? Typically 7am-5pm M-F. HOAs may restrict to 8am-5pm. Summer crews start 6am to beat heat.",
  keywords: ['what time roofers start charlotte nc', 'roofing work hours charlotte', 'charlotte roofer schedule', 'roofing noise ordinance charlotte', 'hoa construction hours charlotte', 'roofer start time', 'charlotte roof install hours', 'roofing summer schedule'],
  alternates: { canonical: PAGE_URL },
  openGraph: { title: 'What Time Do Roofers Start?', description: 'Charlotte NC roofers: 7am-5pm M-F standard, 6am summer start, HOA rules vary.', url: PAGE_URL, type: 'article' },
};

export default function WhatTimeDoRoofersStartWorkCharlotteNcPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Time Do Roofers Start?', url: PAGE_URL }]} />
      <WebPageSchema name="What Time Do Roofers Start?" description="Charlotte NC roofer work hours, HOA restrictions, summer schedule shifts, and noise ordinance details." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Time Do Roofers Start?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Roofer Work Hours Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Standard hours: 7am-5pm Monday through Friday',
          'HOA restricted areas (Ballantyne, Myers Park, Eastover): 8am-5pm only',
          'Summer schedule shift: 6am-2pm to beat 165F surface heat',
          'Charlotte noise ordinance allows 7am-9pm construction',
          'Saturday work common, Sunday work rare',
          'Lake Norman gated communities may restrict to 9am-4pm',
          'NC IRC R905 requires dry-in before crews leave each day',
          'Daily wrap-up 30-60 minutes before sunset',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'What Time Do Roofers Start?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Sun className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Schedule Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What time do roofers start work in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Schedule Around Your Hours</Button>
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

      <CTASection title="Book a Roof Install on Your Schedule" subtitle="HOA-aware scheduling, neighbor courtesy notices, and hour-by-hour project plans." />
    </>
  );
}
