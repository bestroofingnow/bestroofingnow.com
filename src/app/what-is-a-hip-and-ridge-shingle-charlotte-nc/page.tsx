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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-hip-and-ridge-shingle-charlotte-nc`;
const QUESTION = 'What is a hip and ridge shingle and why does my Charlotte NC roof need them?';
const ANSWER = "Hip and ridge shingles are pre-formed accent shingles designed specifically to cap the hip and ridge lines of a roof, where two slopes meet. They are roughly 30-40% thicker than standard 3-tab or architectural field shingles, with a tapered profile that bends cleanly over the roof peak without cracking. On Charlotte NC homes, products like GAF TimberTex, CertainTeed Mountain Ridge, and Owens Corning Hip & Ridge are required by manufacturers to validate enhanced wind warranties (130 mph) and to allow proper ridge ventilation. Cost typically runs $7-$12 per linear foot installed, and they are essential for any 30 to 50 year architectural shingle roof in Mecklenburg County.";

const followUpFAQs = [
  { question: 'Can I just cut up regular shingles for the ridge instead?', answer: "Technically yes, but it voids most enhanced manufacturer warranties (GAF Golden Pledge, CertainTeed SureStart Plus, OC Platinum). Cut field shingles crack at the bend on cold Charlotte mornings, do not seal properly along the ridge vent, and lack the thicker exposure that resists wind uplift. NC's wind requirements (110-130 mph for Mecklenburg County) make purpose-built hip and ridge caps the only code-recommended option for new shingle roofs." },
  { question: 'Do hip and ridge shingles work with ridge vents?', answer: "Yes, and they are required for proper ridge ventilation systems. The ridge vent (typically GAF Cobra, CertainTeed Ridge Vent, or OC VentSure) is installed first along the cut-open ridge slot, then hip and ridge shingles are nailed over the top to weatherproof the vent while allowing hot attic air to escape. In Charlotte's hot summers, this combo can drop attic temps 20-30°F and extend shingle life by 3-5 years." },
  { question: 'How much does it cost to replace just the hip and ridge caps?', answer: "Replacing only the ridge and hip caps on a typical 2,500 sq ft Charlotte home (with roughly 60-90 linear feet of ridges and hips) runs $600-$1,400 for materials and labor. This is a common repair when caps blow off in storms but the field shingles are still intact. Most reputable Charlotte roofers will color-match GAF, CertainTeed, or Owens Corning ridge caps to your existing field shingles." },
  { question: 'What color hip and ridge shingles should I choose?', answer: "Always match the field shingle color, or use the manufacturer's recommended pairing. GAF TimberTex, CertainTeed Mountain Ridge, and OC Hip & Ridge all come in coordinating colors for each architectural shingle line (Charcoal, Weathered Wood, Driftwood, Pewter Gray, etc.). On Charlotte luxury homes in Myers Park, Eastover, and Lake Norman, designer thick-cut ridge caps add depth and a custom look that boosts curb appeal." },
  { question: 'How long do hip and ridge shingles last?', answer: "Quality hip and ridge shingles from GAF, CertainTeed, and Owens Corning carry the same lifetime limited warranty as the matching architectural field shingles, typically 30-50 years. In Charlotte's climate (UV exposure, summer thunderstorms, occasional ice), real-world lifespan is usually 25-35 years before the granules thin and the caps need replacement. Annual inspections after major storms catch missing caps early before water reaches the ridge vent." },
];

export const metadata: Metadata = {
  title: 'Hip and Ridge Shingles Charlotte NC',
  description: "What hip and ridge shingles are and why your Charlotte NC roof needs them. GAF TimberTex, CertainTeed Mountain Ridge, OC pricing, warranty rules.",
  keywords: ['hip and ridge shingles charlotte nc', 'ridge cap shingles charlotte', 'gaf timbertex charlotte', 'certainteed mountain ridge', 'owens corning hip ridge', 'ridge vent shingles charlotte', 'roof ridge cap cost', 'shingle warranty charlotte nc'],
  alternates: { canonical: PAGE_URL },
  openGraph: { title: 'Hip and Ridge Shingles Charlotte NC', description: 'Pre-formed accent shingles for the roof ridge. Brands, costs, warranty rules in Charlotte NC.', url: PAGE_URL, type: 'article' },
};

export default function HipAndRidgeShinglePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Hip & Ridge Shingles?', url: PAGE_URL }]} />
      <WebPageSchema name="Hip and Ridge Shingles Charlotte NC" description="Guide to hip and ridge shingles for Charlotte NC roofs: GAF, CertainTeed, OC products, warranties, and pricing." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Hip & Ridge Shingles?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Hip and Ridge Shingles Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Pre-formed accent shingles designed for hip and ridge lines',
          '30-40% thicker than standard field shingles for clean bending',
          'GAF TimberTex pairs with Timberline HDZ architectural shingles',
          'CertainTeed Mountain Ridge pairs with Landmark series',
          'Owens Corning Hip & Ridge pairs with Duration shingles',
          'Required for enhanced 130 mph wind warranties in Mecklenburg County',
          'Installed over ridge vents to allow proper attic ventilation',
          'Cost $7-$12 per linear foot installed in Charlotte NC',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Hip & Ridge Shingles?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Triangle className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roofing Materials Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What is a hip and ridge shingle and why does my Charlotte NC roof need them?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get a Free Roof Inspection</Button>
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

      <CTASection title="Need New Ridge Caps in Charlotte NC?" subtitle="Free inspection and color-matched GAF, CertainTeed, or Owens Corning hip and ridge installation across Mecklenburg County." />
    </>
  );
}
