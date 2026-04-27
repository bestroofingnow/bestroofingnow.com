import { Metadata } from 'next';
import { Phone, Volume2 } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/can-i-stay-home-during-reroof-charlotte-nc`;
const QUESTION = 'Can I stay home during a reroof in Charlotte NC?';
const ANSWER = "Yes, you can absolutely stay home during a Charlotte NC reroof — most homeowners do. Plan for noise levels of 80-95 dB during tear-off and nailing (similar to a motorcycle or garbage disposal), shut off your HVAC during peak install hours to prevent debris ingestion through attic vents, expect 3-5 days of disruption from 7am-5pm, and accommodate work-from-home calls by scheduling Zoom meetings before 9am or after 5pm. For premium comfort during the noisy days, many Charlotte homeowners book a downtown hotel (Le Meridien, The Ivey's, Ritz-Carlton) for 2-3 nights and let the crew work undisturbed.";

const followUpFAQs = [
  { question: 'How loud is a Charlotte reroof actually?', answer: "Sustained 80-95 dB at ground level inside the house, peaking during nail gun work and tear-off shoveling. For comparison: a garbage disposal is 80 dB, a motorcycle 95 dB, and a chainsaw 110 dB. The noise is constant from 7am to about 4pm with short breaks. Pets, infants, and noise-sensitive household members will struggle. Charlotte homes with hardwood floors and high ceilings (common in Plaza Midwood and Dilworth bungalows) amplify the sound more than carpeted Ballantyne homes with insulated drop ceilings." },
  { question: 'Should I shut off my AC during a Charlotte reroof?', answer: "Yes, during active tear-off and dry-in (typically days 1-2). Tear-off creates dust and shingle granules that can be sucked into attic-mounted air handlers and gable vents, contaminating your duct system. Shut the HVAC off when the crew arrives and turn it back on at 5pm after they leave. In Charlotte July and August, this means a hot interior — pre-cool to 68 degrees F before they start, close blinds, and use ceiling fans. Or book a hotel for the hottest install days." },
  { question: 'Can I work from home during my Charlotte reroof?', answer: "Yes, with realistic expectations. Schedule Zoom calls before 9am or after 5pm. Use noise-canceling headphones (AirPods Pro or Bose QC45) and a directional mic. Position your desk in an interior room away from the work area — basements, walk-in closets, and pantries make good temporary offices in Charlotte homes. Warn meeting attendees in advance. For intense focus work or recorded video, plan to work from a Charlotte coffee shop (Amelie's, Not Just Coffee) or coworking space (Hygge, Industrious) instead." },
  { question: 'Is it safe for kids and pets to stay home during a Charlotte reroof?', answer: "Generally yes, but with precautions. Keep kids and pets indoors away from the work zone — falling shingles, nails, and debris make the perimeter a hazard. The dump trailer and ladders create attractive nuisances for curious children. Crate dogs in an interior room with white noise to mask the booms. Cats often hide on their own. Consider a doggy daycare for the noisiest days. Charlotte daycare options like Camp Bow Wow Ballantyne and PetSuites SouthPark book up — schedule ahead." },
  { question: 'When is a Charlotte hotel stay worth the cost during a reroof?', answer: "Hotel stays make sense for: households with young infants who nap during the day, anyone with migraines or PTSD-related noise sensitivity, work-from-home professionals with critical client meetings, peak summer installs when AC is shut off, and anyone in compact homes (under 2,000 sq ft) where escape rooms are limited. Charlotte hotels in the $150-300/night range (AC Hotel SouthPark, Hyatt Centric SouthPark, JW Marriott Charlotte) provide a much better experience for 2-3 nights than enduring 80-95 dB at home." },
];

export const metadata: Metadata = {
  title: 'Can I Stay Home During Reroof?',
  description: "Can I stay home during a reroof in Charlotte NC? Yes — plan for 80-95 dB noise, AC shutoff, work-from-home limits. Hotel option for premium comfort.",
  keywords: ['can i stay home during reroof charlotte nc', 'reroof noise level', 'staying home during roof replacement', 'charlotte reroof comfort', 'work from home roof install', 'reroof ac shutoff', 'roof replacement disruption', 'charlotte roof install living'],
  alternates: { canonical: PAGE_URL },
  openGraph: { title: 'Can I Stay Home During Reroof?', description: 'Charlotte NC: yes, you can stay home — but plan for noise, AC shutoff, and work-from-home limits.', url: PAGE_URL, type: 'article' },
};

export default function CanIStayHomeDuringReroofCharlotteNcPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Can I Stay Home During Reroof?', url: PAGE_URL }]} />
      <WebPageSchema name="Can I Stay Home During Reroof?" description="Charlotte NC reroof comfort guide: noise levels, AC management, work-from-home tips, hotel alternatives." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Can I Stay Home During Reroof?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Stay Home During Reroof Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Yes — most Charlotte homeowners stay home during reroof',
          'Noise level: 80-95 dB at ground level, similar to a motorcycle',
          'Shut off HVAC during tear-off and dry-in (days 1-2)',
          'Disruption window: 7am-5pm for 3-5 working days',
          'Schedule Zoom calls before 9am or after 5pm',
          'Crate pets indoors with white noise to mask booms',
          'Keep kids and pets out of the work perimeter',
          'Hotel option: 2-3 nights at SouthPark hotels for premium comfort',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Can I Stay Home During Reroof?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Volume2 className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Comfort Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">Can I stay home during a reroof in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Plan Your Reroof Comfort</Button>
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

      <CTASection title="Make Your Charlotte Reroof As Painless As Possible" subtitle="Detailed prep checklist, daily start-time confirmations, and same-day cleanup every evening." />
    </>
  );
}
