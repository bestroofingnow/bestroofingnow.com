import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-long-does-roof-replacement-take-charlotte-nc`;
const QUESTION = 'How long does roof replacement take in Charlotte NC?';
const ANSWER =
  "Roof replacement in Charlotte NC typically takes 1-2 days for a standard 25-35 square architectural shingle home, 2-3 days for a larger 40-60 square home, and 5-10 days for slate, tile, or copper standing-seam metal on premier estate homes. The timeline breakdown for a typical residential reroof: Day 1 — landscape protection, full tear-off (4-6 hours), decking inspection and any rotted-deck replacement (30-90 minutes), ice-and-water shield install at eaves and valleys, synthetic underlayment field-out, drip edge install. Day 2 — starter strip, shingle install with sealed nail patterns (typical pace 8-12 squares per crew per hour), ridge vent installation, magnetic nail sweep cleanup, walk-through with homeowner. Weather can extend timelines — we never install in active rain or below 40°F surface temperature (mastic-seal exception below). Best Roofing Now schedules around your work, school, and weekend timing to minimize disruption.";

const followUpFAQs = [
  {
    question: 'What factors affect how long my roof replacement takes?',
    answer:
      "Six main factors: (1) roof size — measured in 'squares' (100 sq ft each); (2) roof complexity — number of slopes, valleys, dormers, chimneys, skylights (each adds 30-60 min of flashing work); (3) decking condition — visible rot adds 1-4 hours per slope; (4) material — architectural shingles are fastest, slate and tile take 5-10x longer; (5) weather — rain or temperature below 40°F pauses installation; (6) crew size — Best Roofing Now typically deploys 4-6 person crews on residential, 8-12 on commercial.",
  },
  {
    question: 'Can you complete a roof replacement in one day?',
    answer:
      "Yes — most 20-25 square Charlotte ranches and starter homes complete in a single 8-10 hour day with a full 6-person crew. Larger 30+ square homes or homes with complex roofing details (multiple valleys, dormers, chimneys, or skylights) typically need 2 days. We start tear-off at 7am to maximize daylight and complete shingle installation before sunset, with cleanup the same day. We never leave a home with exposed decking overnight.",
  },
  {
    question: 'How long does a slate or metal roof installation take?',
    answer:
      "Slate roof replacement: 5-10 days for a typical 30-square home (slate is heavier, requires copper step flashing, individual hand-hung tiles, and engineer-stamped structural reinforcement if converting from asphalt). Standing-seam metal: 3-5 days for steel/aluminum, 5-8 days for copper or zinc (requires custom panel fabrication and specialized seam-locking). Tile roofing: 4-8 days for clay or concrete (heavy material requiring battens, hurricane clips, and bird-stop closures).",
  },
  {
    question: 'Will I need to leave my home during roof replacement?',
    answer:
      "No. Most homeowners stay home during roof replacement. Be aware: (1) noise — hammer drops, nail guns, and tear-off can be loud (work hours typically 7am-6pm); (2) dust — pre-existing dust may shake loose into attic and HVAC; (3) limited driveway access — our trailer and dump container will be there during work; (4) pets and small children may be unsettled by the noise. Many homeowners use the day to run errands or work from a coffee shop. We never block access to the front door or emergency exits.",
  },
  {
    question: 'What happens if it rains during my roof replacement?',
    answer:
      "We never install roofing in active rain. If unexpected rain occurs mid-install: (1) we immediately tarp the exposed area with 12-mil reinforced tarp and 2x4 batten frame to prevent water intrusion; (2) work pauses until conditions clear; (3) we resume the next dry workday and complete installation. We monitor 7-day weather forecasts before scheduling and reschedule pre-emptively if rain probability exceeds 60%. Schedule slippage from weather is rare (5-10% of projects).",
  },
];

export const metadata: Metadata = {
  title: 'How Long Does Roof Replacement Take in Charlotte NC?',
  description:
    "How long does roof replacement take in Charlotte NC? 1-2 days for typical 25-35 sq home, 2-3 days for 40-60 sq, 5-10 days for slate/tile/copper. Day-by-day breakdown.",
  keywords: [
    'how long does roof replacement take Charlotte NC',
    'roof replacement timeline',
    'roof install duration',
    'how many days roof replacement',
    'roof replacement schedule',
    'shingle install time Charlotte',
    'metal roof install time',
    'slate roof install duration',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Long Does Roof Replacement Take in Charlotte NC?',
    description: '1-2 days typical, 5-10 days for slate/tile. Day-by-day breakdown from Best Roofing Now.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowLongDoesRoofReplacementTakePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How Long Does Roof Replacement Take?', url: PAGE_URL }]} />
      <WebPageSchema name="How Long Does Roof Replacement Take in Charlotte NC?" description="Timeline for roof replacement in Charlotte NC by material and home size." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How Long Does Roof Replacement Take?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Long Does Roof Replacement Take Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Standard 25-35 square architectural shingle home — 1-2 days',
          'Larger 40-60 square home — 2-3 days',
          'Slate, tile, or copper standing-seam metal estate home — 5-10 days',
          'Day 1 typically — landscape protection, tear-off, decking inspection, ice-and-water shield, underlayment',
          'Day 2 typically — starter strip, shingle install, ridge vent, magnetic nail sweep cleanup, walkthrough',
          'Weather pauses install — no work in active rain or below 40°F surface temperature',
          'Crew size — 4-6 residential, 8-12 commercial',
          'You can stay home during install — work hours typically 7am-6pm',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'How Long Does Roof Replacement Take?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Clock className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Project Timeline Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Long Does Roof Replacement Take in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Project Timeline Estimate</Button>
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

            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">What Best Roofing Now Does to Stay on Schedule</h2>
            <ul className="space-y-3 mb-8">
              {[
                '7-day weather monitoring with proactive rescheduling if rain probability exceeds 60%.',
                '4-6 person residential crews and 8-12 person commercial crews — no understaffing.',
                'Tear-off start at 7am to maximize daylight on Day 1 of multi-day projects.',
                'Pre-stocked materials delivered before crew arrives (no mid-day material runs).',
                'Magnetic nail sweep cleanup at end of every workday (no nails left in driveway overnight).',
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
                <strong>Need a specific project timeline for your home?</strong> Free 48-hour inspection includes day-by-day timeline estimate based on your roof size and complexity.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                Schedule Free Inspection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Plan Your Project With Confidence" subtitle="Free written timeline estimate with day-by-day breakdown for your specific home." />
    </>
  );
}
