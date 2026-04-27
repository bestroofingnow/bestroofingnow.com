import { Metadata } from 'next';
import { Phone, Clock } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-long-does-roof-installation-take-charlotte-nc`;
const QUESTION = 'How long does roof installation take in Charlotte NC?';
const ANSWER = "Most Charlotte NC roof installations take 3-5 working days for a typical 30-square (3,000 sq ft) asphalt shingle home. Day 1 is tear-off and dump-trailer loading, day 2 covers any rotted decking replacement (0.5-1 day) and synthetic underlayment plus ice-and-water shield (0.5 day), days 3-4 are shingle installation and flashing (1-2 days), and the final 0.5 day is magnetic-sweep cleanup and final walkthrough. Charlotte spring storm season (May-July) and tropical remnants (August-October) commonly add 1-3 weather delay days, so allow a 1-week project window.";

const followUpFAQs = [
  { question: 'Does the size of my Charlotte home change the install timeline?', answer: "Yes. Squares (100 sq ft units) drive labor hours more than home footprint. A 20-square ranch in Plaza Midwood often finishes in 2 days, a 30-square two-story in Ballantyne runs 3-5 days, and a 50-60 square Lake Norman estate can take 7-10 days. Steep pitches (above 8/12) and complex hip-and-valley roofs add 25-40% to labor time because crews work slower with harness anchors and have more cuts per square." },
  { question: 'How does Charlotte weather affect my roof install schedule?', answer: "Charlotte averages 110+ days of measurable precipitation per year, concentrated May-July (afternoon thunderstorms) and August-October (tropical moisture). Reputable roofers will not dry-in or shingle a roof during sustained rain because trapped moisture causes mold and shingle adhesion failure. Plan for 1-3 weather rescheduling days during storm season. January-February cold snaps below 40 degrees F also pause work because shingle sealant strips will not bond properly." },
  { question: 'Can my Charlotte roof be installed in one day?', answer: "Smaller homes under 18 squares (around 1,800 sq ft of roof area) with simple gable layouts can absolutely be completed in a single day by a 5-7 person crew starting at 7am. This is common in NoDa bungalows, Wesley Heights cottages, and Belmont historic district homes. The crew tear-offs, decks-out, dries-in, and shingles before sunset. Larger or more complex roofs cannot safely compress into one day without compromising flashing quality." },
  { question: 'What happens if a Charlotte thunderstorm hits mid-install?', answer: "A professional crew will dry-in the entire exposed deck with synthetic underlayment and ice-and-water shield before the rain hits — usually 30-45 minutes of warning from radar gives them time. If a pop-up storm catches them, they tarp the open sections with 6-mil poly weighted with 2x4s. Your interior stays dry. Work resumes the next clear day. NC IRC R905 requires felt or synthetic underlayment to be installed before workers leave the site each day." },
  { question: 'Do I need to be home during my Charlotte roof installation?', answer: "No, you do not need to be home. Most Charlotte homeowners go to work as normal during the 3-5 day install. Your roofer will need access to a power outlet (exterior GFCI is ideal), a water spigot, and clear driveway space for the dump trailer and material delivery. Move cars to the street, take down wall art that could vibrate loose, and crate pets indoors. A pre-install walkthrough and post-install inspection are the only times your presence is helpful." },
];

export const metadata: Metadata = {
  title: 'How Long Does Roof Install Take?',
  description: "How long does roof installation take in Charlotte NC? Typical 3-5 days for 30-square home. Tear-off, decking, underlayment, shingles, cleanup timeline.",
  keywords: ['how long does roof installation take charlotte nc', 'roof install timeline charlotte', 'roof replacement days charlotte', 'roofing project length charlotte nc', 'shingle install time', 'roof tear off how long', 'charlotte roofing schedule', 'roof installation duration'],
  alternates: { canonical: PAGE_URL },
  openGraph: { title: 'How Long Does Roof Install Take?', description: 'Charlotte NC roof install timeline: 3-5 days typical, day-by-day breakdown.', url: PAGE_URL, type: 'article' },
};

export default function HowLongDoesRoofInstallationTakeCharlotteNcPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How Long Does Roof Installation Take?', url: PAGE_URL }]} />
      <WebPageSchema name="How Long Does Roof Install Take?" description="Charlotte NC roof installation timeline: 3-5 days typical with day-by-day phase breakdown." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How Long Does Roof Installation Take?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Roof Installation Timeline Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Tear-off existing shingles: 1 day',
          'Decking inspection and replacement: 0.5-1 day',
          'Synthetic underlayment + ice-and-water shield: 0.5 day',
          'Shingle installation and nailing: 1-2 days',
          'Flashing, ridge vent, and pipe boots: 0.5 day',
          'Magnetic-sweep cleanup and final walkthrough: 0.5 day',
          'Total typical timeline: 3-5 working days',
          'Charlotte weather delay buffer: add 1-3 days May-October',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'How Long Does Roof Installation Take?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Clock className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Process Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How long does roof installation take in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Your Install Timeline</Button>
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

      <CTASection title="Ready to Schedule Your Charlotte Roof Install?" subtitle="Free inspection, written timeline, and weather-contingency plan included." />
    </>
  );
}
