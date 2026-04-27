import { Metadata } from 'next';
import { Phone, Layers } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-roof-insulation-r-value-charlotte-nc`;
const QUESTION = 'What is roof insulation R-value and what does my Charlotte NC home need?';
const ANSWER = "R-value is the measure of a material's thermal resistance, or its ability to slow heat transfer. The higher the R-value, the better the insulation. The North Carolina Residential Code (based on the IRC and adopted by Mecklenburg County) requires a minimum of R-38 for ceiling and attic insulation in Charlotte's Climate Zone 4A, with R-49 strongly preferred for new builds and re-roofs. Common materials include blown-in cellulose (R-3.5 per inch), fiberglass batt (R-3.2 per inch), and spray foam (R-6.5 per inch closed-cell). Costs range $1.50-$4.50 per square foot installed, and proper R-value can cut Charlotte AC bills 10-20% during summer.";

const followUpFAQs = [
  { question: 'Is blown-in cellulose or fiberglass batt better for a Charlotte attic?', answer: "Blown-in cellulose is generally better for retrofit Charlotte attics because it fills every gap, settles around wiring and joists, and resists summer humidity well. Fiberglass batts are easier and cheaper for new construction with clean joist bays. For a typical 2,000 sq ft Mecklenburg County home, blown-in cellulose to R-49 runs about $2,200-$3,200, while fiberglass batts run $1,500-$2,400. Cellulose also has higher fire resistance and better sound dampening." },
  { question: 'How do I know if my current Charlotte NC roof insulation is enough?', answer: "Open the attic hatch and measure the depth of insulation in inches. R-38 in cellulose is about 11 inches deep, and R-49 is about 14 inches. If your insulation is below the top of the joists (typically 8-10 inches deep) or compressed and matted, it's likely R-19 to R-30, which is far below NC code. Cold spots, ice dams in winter, and uneven AC bills are also strong indicators that Charlotte homeowners need to top off insulation." },
  { question: 'Can I add insulation without replacing my existing roof?', answer: "Absolutely. Adding insulation is independent of roof replacement and can be done any time of year in Charlotte. A blown-in cellulose top-up over existing fiberglass batts is the most common upgrade, costing $0.80-$1.80 per sq ft. Just make sure soffit baffles are installed first to preserve attic ventilation, otherwise you'll trap moisture and shorten shingle life. Many Charlotte homeowners pair insulation upgrades with attic air sealing for maximum savings." },
  { question: 'Does NC code require R-38 or R-49 for re-roofs in Charlotte?', answer: "The 2018 NC Residential Code (currently enforced by Mecklenburg County) requires a minimum R-38 in attic ceilings for Climate Zone 4A, which covers Charlotte and the surrounding region. R-49 is required for new construction in 2023 IECC adoption areas and is strongly recommended for any re-roof or remodel because the cost difference is small ($300-$700) and the energy savings recoup it within 3-5 years on Duke Energy bills." },
  { question: 'Will adding attic insulation lower my Charlotte AC bills?', answer: "Yes, dramatically. Most Charlotte homes built before 2010 have R-19 to R-30 insulation, well below the R-38 minimum. Topping off to R-49 typically reduces summer cooling costs by 10-20%, saving the average Mecklenburg homeowner $180-$420 per year on Duke Energy bills. Combined with proper attic ventilation and a radiant barrier, savings can exceed 25% during July and August peak heat." },
];

export const metadata: Metadata = {
  title: 'Roof Insulation R-Value Charlotte NC',
  description: "What roof insulation R-value means and what your Charlotte NC home needs. NC code R-38 minimum, R-49 preferred, cellulose vs fiberglass costs.",
  keywords: ['roof insulation r-value charlotte nc', 'attic insulation charlotte', 'r-38 r-49 charlotte', 'nc residential code insulation', 'blown in cellulose charlotte', 'fiberglass batt charlotte', 'attic insulation cost charlotte', 'energy savings charlotte nc'],
  alternates: { canonical: PAGE_URL },
  openGraph: { title: 'Roof Insulation R-Value Charlotte NC', description: 'NC code requirements, material options, and cost ranges for attic insulation in Charlotte NC.', url: PAGE_URL, type: 'article' },
};

export default function RoofInsulationRValuePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Insulation R-Value?', url: PAGE_URL }]} />
      <WebPageSchema name="Roof Insulation R-Value Charlotte NC" description="Charlotte NC homeowner guide to roof insulation R-value, NC code requirements, material options, and cost ranges." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Insulation R-Value?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Roof Insulation R-Value Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'R-value measures a material thermal resistance — higher is better',
          'NC Residential Code requires R-38 minimum in Charlotte attics',
          'R-49 strongly preferred for new builds and re-roofs',
          'Blown-in cellulose: R-3.5 per inch, $1.20-$2.00 per sq ft',
          'Fiberglass batt: R-3.2 per inch, $0.80-$1.50 per sq ft',
          'Spray foam closed-cell: R-6.5 per inch, $2.50-$4.50 per sq ft',
          'Charlotte Climate Zone 4A — designed for hot humid summers',
          'Proper R-value cuts AC bills 10-20% in Mecklenburg County',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Insulation R-Value?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Energy Efficiency Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What is roof insulation R-value and what does my Charlotte NC home need?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get a Free Attic Inspection</Button>
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

      <CTASection title="Upgrade Your Charlotte Attic Insulation" subtitle="Free attic inspection and R-value assessment across Mecklenburg County. Cut Duke Energy bills 10-20%." />
    </>
  );
}
