import { Metadata } from 'next';
import { Phone, Square } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-modified-bitumen-roofing-charlotte-nc`;
const QUESTION = 'What is modified bitumen roofing and is it good for Charlotte NC commercial buildings?';
const ANSWER = "Modified bitumen (mod-bit) is an asphalt-based roofing membrane reinforced with polymers, either APP (atactic polypropylene) for plastic-like flexibility or SBS (styrene-butadiene-styrene) for rubber-like elasticity. It is applied as 2-ply or 3-ply rolled sheets using torch-down, hot-mop asphalt, cold adhesive, or self-adhered methods. Modified bitumen is excellent for low-slope (under 2:12) Charlotte NC commercial buildings, offering 15-25 year lifespan, strong puncture resistance, and proven UV durability in our hot summers. Cost runs $6-$12 per sq ft installed, making it more affordable than TPO or PVC for Mecklenburg County warehouses, retail, and apartment buildings.";

const followUpFAQs = [
  { question: 'Is modified bitumen better than TPO for Charlotte commercial roofs?', answer: "Each has trade-offs. Modified bitumen offers superior puncture and foot-traffic resistance (perfect for Charlotte rooftop HVAC service), 15-25 year lifespan, and lower upfront cost ($6-$12 per sq ft). TPO is lighter, has higher reflective Energy Star ratings (cuts Charlotte AC bills 5-15%), and runs $7-$14 per sq ft for 60-mil systems. For Mecklenburg County warehouses with heavy mechanical loads, mod-bit wins. For retail strips with lots of solar gain, TPO often wins. Many Charlotte commercial roofers offer both." },
  { question: 'What is the difference between APP and SBS modified bitumen?', answer: "APP (atactic polypropylene) modified bitumen is plastic-like, more rigid, and applied with a torch (torch-down) — best for hotter climates like Charlotte where the membrane needs to resist softening. SBS (styrene-butadiene-styrene) is rubber-like, more flexible, and can be applied with hot asphalt, cold adhesive, or self-adhered — best where torches are restricted (over occupied buildings or Charlotte historic districts). Both deliver similar 15-25 year lifespans when properly installed." },
  { question: 'How much does a modified bitumen roof cost in Charlotte NC?', answer: "Modified bitumen roof installation in Charlotte NC runs $6-$12 per sq ft depending on the system, deck condition, and accessory work. A typical 10,000 sq ft Charlotte warehouse re-roof with 2-ply SBS modified bitumen runs $65,000-$95,000 including tear-off, insulation, base sheet, cap sheet, flashing, and warranty. Cool-roof granulated cap sheets and torch-down APP systems run toward the higher end. Most Charlotte commercial mod-bit roofs come with 15-20 year material warranties." },
  { question: 'How long does a modified bitumen roof last in Charlotte?', answer: "A properly installed 2-ply or 3-ply modified bitumen roof in Charlotte NC lasts 15-25 years. SBS systems generally outlast APP in our climate due to better flexibility through Charlotte's freeze-thaw cycles. Annual inspections, prompt seam repairs, and a granulated reflective cap sheet (or aluminum roof coating reapplied every 5-7 years) extend useful life by another 5-10 years. Most failures in Charlotte come from poor flashing details around HVAC curbs and parapet walls, not the membrane itself." },
  { question: 'Can modified bitumen be installed over an existing flat roof in Charlotte?', answer: "Yes, in many cases. NC building code (and Mecklenburg County) allows up to two roofing layers on commercial low-slope roofs, so a single existing built-up or modified bitumen layer can often have a new mod-bit recover installed on top. This saves $1.50-$3.50 per sq ft on tear-off and disposal. However, the existing roof must be dry, structurally sound, and pass a moisture survey. A complete tear-off is required if water is trapped in the insulation or if the deck shows damage." },
];

export const metadata: Metadata = {
  title: 'Modified Bitumen Roofing Charlotte NC',
  description: "What modified bitumen roofing is and whether it's right for Charlotte NC commercial buildings. APP vs SBS, costs $6-$12/sq ft, 15-25 year lifespan.",
  keywords: ['modified bitumen roofing charlotte nc', 'mod bit roof charlotte', 'app sbs roofing', 'commercial flat roof charlotte', 'torch down roofing charlotte', 'low slope roofing mecklenburg', 'commercial roofer charlotte nc', 'warehouse roofing charlotte'],
  alternates: { canonical: PAGE_URL },
  openGraph: { title: 'Modified Bitumen Roofing Charlotte NC', description: 'APP vs SBS modified bitumen roofing for Charlotte NC commercial buildings. Costs, lifespan, and comparison to TPO.', url: PAGE_URL, type: 'article' },
};

export default function ModifiedBitumenRoofingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Modified Bitumen?', url: PAGE_URL }]} />
      <WebPageSchema name="Modified Bitumen Roofing Charlotte NC" description="Charlotte NC commercial guide to modified bitumen roofing: APP vs SBS, installation methods, cost, and 15-25 year lifespan." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Modified Bitumen?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Modified Bitumen Roofing Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Asphalt-based membrane reinforced with APP or SBS polymers',
          'APP — plastic-like, torch-down applied, best for hot climates',
          'SBS — rubber-like, flexible, hot-mop or self-adhered',
          'Applied as 2-ply or 3-ply rolled sheets',
          'Ideal for low-slope (under 2:12) commercial buildings',
          '15-25 year lifespan with proper Charlotte NC installation',
          'Cost $6-$12 per sq ft installed in Mecklenburg County',
          'Common for warehouses, retail, and apartment buildings',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Modified Bitumen?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Square className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Commercial Roofing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What is modified bitumen roofing and is it good for Charlotte NC commercial buildings?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Request Commercial Roof Quote</Button>
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

      <CTASection title="Modified Bitumen Roof Quotes in Charlotte" subtitle="APP and SBS modified bitumen installation and recover for commercial buildings across Mecklenburg County." />
    </>
  );
}
