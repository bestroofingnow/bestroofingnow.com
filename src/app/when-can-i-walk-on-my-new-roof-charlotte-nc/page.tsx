import { Metadata } from 'next';
import { Phone, Calendar } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/when-can-i-walk-on-my-new-roof-charlotte-nc`;
const QUESTION = 'When can I walk on my new roof after installation in Charlotte NC?';
const ANSWER = "Wait at least 30-90 days after a Charlotte NC shingle install before walking on your new roof, and even then avoid foot traffic unless absolutely necessary. The asphalt sealant strips on each shingle need sustained surface temperatures of 70 degrees F or higher to fully bond — a process that happens passively in Charlotte spring and summer sun. Foot traffic during this window can break the seal, dislodge granules, and accelerate UV aging by years. After curing, only walk on the roof for emergency inspection or repair, ideally on cool mornings (50-70 degrees F) wearing soft-soled shoes and stepping on lower thirds of shingles.";

const followUpFAQs = [
  { question: 'Why is walking on a new Charlotte roof a bad idea?', answer: "Asphalt shingles in Charlotte's UV-heavy climate develop their weather-shedding properties through three things: full sealant bond, granule embedment, and an intact mat surface. Foot traffic in the first 90 days can crack the still-curing asphalt, knock loose the ceramic granules that protect the underlying mat from UV, and lift sealant tabs that then fail to re-bond. Even after curing, every walk reduces your roof's lifespan because granule loss is permanent." },
  { question: 'What if I need to hang Christmas lights on my new Charlotte roof?', answer: "Use plastic shingle clips (around $8 for a 100-pack at Charlotte Lowe's or Home Depot) that slide under the shingle butt edge — they hold without nails or staples. Better yet, clip lights to the gutter face or fascia using all-in-one gutter clips so you never step on the roof at all. If you must access the roof, install in late November when Charlotte temperatures are typically 50-65 degrees F (cooler shingles are less likely to scuff), and walk only on roof valleys and the lower edge of each shingle course." },
  { question: 'Can my Charlotte HVAC tech walk on my new roof to service the unit?', answer: "If your air handler or condenser sits on a flat or low-slope section, yes — but ask the technician to use a foam pad or 4-foot square of plywood to distribute weight, especially within the first 90 days post-install. For attic-mounted units accessed via a roof hatch, the path is usually a low-slope section that handles foot traffic better. Schedule HVAC tune-ups for cool morning windows (April or October mornings in Charlotte) when the shingles are not soft and pliable." },
  { question: 'Does walking on my new Charlotte roof void the manufacturer warranty?', answer: "It can. GAF, Owens Corning, and CertainTeed warranties exclude damage from foot traffic, satellite dish installation, antenna mounting, and other non-roofer access. If you damage shingles by walking on them, the manufacturer will deny that portion of the warranty claim. Workmanship warranties from your Charlotte roofer typically also exclude post-install homeowner damage. Document the install with photos and avoid roof access except for paid professionals using proper precautions." },
  { question: 'When is it safe to walk on my Charlotte roof for inspection after a storm?', answer: "Wait until the roof is fully dry and the temperature is 50-70 degrees F, ideally early morning. Wet shingles are extremely slippery and the granules act like ball bearings on a damp surface. After major Charlotte storm events (May-July hail, August-October tropical winds), schedule a free professional inspection rather than climbing yourself — most reputable Charlotte roofers including ours offer no-cost storm damage assessments and the liability and skill required for safe roof walking is significant." },
];

export const metadata: Metadata = {
  title: 'When Can I Walk on My New Roof?',
  description: "When can I walk on my new roof in Charlotte NC? Wait 30-90 days for shingle sealant to cure. Foot traffic causes granule loss and accelerates aging.",
  keywords: ['when can i walk on new roof charlotte nc', 'walk on new shingle roof', 'shingle sealant cure time charlotte', 'new roof foot traffic damage', 'walking on new roof', 'charlotte roof care', 'shingle damage from walking', 'new roof maintenance'],
  alternates: { canonical: PAGE_URL },
  openGraph: { title: 'When Can I Walk on My New Roof?', description: 'Charlotte NC: wait 30-90 days for sealant cure. Foot traffic damages shingles.', url: PAGE_URL, type: 'article' },
};

export default function WhenCanIWalkOnMyNewRoofCharlotteNcPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'When Can I Walk on My New Roof?', url: PAGE_URL }]} />
      <WebPageSchema name="When Can I Walk on My New Roof?" description="Charlotte NC new roof care: 30-90 day sealant cure window and foot traffic damage prevention." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'When Can I Walk on My New Roof?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="New Roof Walking Cure Time Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Wait minimum 30-90 days after install before any roof walking',
          'Shingle sealant strips need 70F+ surface temps to bond',
          'Foot traffic breaks sealant and dislodges UV-protective granules',
          'Granule loss is permanent and accelerates roof aging',
          'Walk only on cool mornings (50-70F) wearing soft-soled shoes',
          'Step on lower third of shingles, never on ridge cap',
          'Use shingle clips for Christmas lights instead of climbing',
          'Schedule professional inspection rather than DIY roof access',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'When Can I Walk on My New Roof?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Calendar className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC New Roof Care</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">When can I walk on my new roof after installation in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Schedule Free Roof Inspection</Button>
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

      <CTASection title="Need a Charlotte Roof Inspection Done Safely?" subtitle="Skip the ladder — our team handles the climb so your shingles stay intact." />
    </>
  );
}
