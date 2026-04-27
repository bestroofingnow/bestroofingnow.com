import { Metadata } from 'next';
import { Phone, Home } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-hip-roof-charlotte-nc`;
const QUESTION = 'What is a hip roof and what are its advantages for Charlotte NC homes?';
const ANSWER = "A hip roof is a roof style with four sloping sides that meet at a ridge or peak, with no vertical gable ends. For Charlotte NC homes, hip roofs offer superior wind resistance (up to 40% better than gable roofs in storms), making them ideal for the region's summer thunderstorms and occasional tropical remnants. They typically last 25-30 years with architectural shingles, cost $7,500-$15,000 to replace on a 2,000 sq ft Charlotte home, and qualify for North Carolina insurance discounts of 5-15%. You'll see hip roofs throughout Myers Park, Eastover, and traditional Beverly Woods neighborhoods.";

const followUpFAQs = [
  { question: 'How much does a hip roof cost to replace in Charlotte NC?', answer: "Hip roof replacement in Charlotte typically runs $7,500-$15,000 for a 2,000 sq ft home with architectural shingles ($4.50-$7.50 per sq ft installed). Premium materials like metal or synthetic slate range $18,000-$35,000. Hip roofs cost 10-15% more than gable roofs of the same square footage because they require more materials and labor for the four sloping planes and additional hip rafters. Charlotte permits run $75-$200 depending on project scope." },
  { question: 'Are hip roofs better than gable roofs for Charlotte storms?', answer: "Yes — hip roofs perform significantly better in Charlotte's severe weather. Studies by the Insurance Institute for Business & Home Safety show hip roofs withstand wind speeds 40% higher than gable roofs because their aerodynamic four-sided design has no flat vertical wall to catch wind. This matters during Charlotte's spring/summer thunderstorms (60+ mph gusts) and remnants of Atlantic hurricanes. Many NC insurers offer 5-15% premium discounts for hip roof homes, especially in Mecklenburg County." },
  { question: 'What materials work best for hip roofs in Charlotte?', answer: "Architectural asphalt shingles (GAF Timberline HDZ, CertainTeed Landmark) dominate Charlotte hip roofs at $4.50-$7.50 per sq ft installed with 25-30 year lifespans. Standing seam metal ($12-$18/sq ft) excels on hip roofs because clean ridge lines simplify panel installation, lasting 50+ years. Synthetic slate (DaVinci, Brava) at $14-$20/sq ft is popular in historic Dilworth and Myers Park where slate aesthetics matter. Avoid 3-tab shingles — they void manufacturer wind warranties below 70 mph." },
  { question: 'Do hip roofs have ventilation issues in Charlotte humidity?', answer: "Hip roofs need careful ventilation planning because they have less ridge length than gable roofs of the same size, limiting passive ridge vent capacity. In Charlotte's humid climate (averaging 70%+ summer humidity), inadequate attic ventilation causes shingle blistering, deck rot, and mold within 5-7 years. Solutions include hip ridge vents (specialty product), additional powered attic fans, or solar-powered vents. NC code requires 1 sq ft of ventilation per 150 sq ft of attic space." },
  { question: 'Where do I see hip roofs in Charlotte neighborhoods?', answer: "Hip roofs are common throughout Charlotte's traditional neighborhoods. Myers Park and Eastover feature classic 1920s-1940s hip roof Colonials and Tudors. Beverly Woods and Cotswold have ranch-style hip roofs from the 1950s-1960s. Lake Norman communities (Cornelius, Davidson, Huntersville) use hip roofs on French Country and Mediterranean-style waterfront homes. New construction in Ballantyne, Providence Crossing, and SouthPark increasingly favors hip roofs for their wind-resistance benefits and timeless curb appeal." },
];

export const metadata: Metadata = {
  title: 'Hip Roof Guide for Charlotte NC',
  description: "What is a hip roof? Learn advantages, costs ($7,500-$15,000), wind resistance benefits, and best materials for Charlotte NC homes.",
  keywords: ['hip roof Charlotte NC', 'hip roof advantages', 'hip roof cost Charlotte', 'hip vs gable roof', 'hip roof wind resistance', 'hip roof materials', 'Charlotte roof styles', 'hip roof replacement'],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Hip Roof Guide for Charlotte NC',
    description: 'Learn what a hip roof is and why Charlotte homeowners choose them for storm protection and insurance savings.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HipRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Hip Roof Guide', url: PAGE_URL }]} />
      <WebPageSchema name="Hip Roof Guide for Charlotte NC" description="Complete guide to hip roofs for Charlotte NC homeowners — advantages, costs, materials, and storm performance." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Hip Roof Guide', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Hip Roof Guide Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Four sloping sides meeting at ridge or peak — no vertical gable ends',
          '40% better wind resistance than gable roofs in Charlotte storms',
          'Replacement cost: $7,500-$15,000 for a 2,000 sq ft Charlotte home',
          'Lifespan: 25-30 years with architectural asphalt shingles',
          'Qualifies for 5-15% NC homeowners insurance discount',
          'Common in Myers Park, Eastover, Beverly Woods, and Lake Norman',
          'Costs 10-15% more than gable roofs due to extra materials',
          'Requires specialty hip ridge vents for proper Charlotte humidity ventilation',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Hip Roof Guide' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Home className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Style Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What is a hip roof and what are its advantages for Charlotte NC homes?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Free Hip Roof Estimate</Button>
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

      <CTASection title="Ready for a Storm-Resistant Hip Roof?" subtitle="Free Charlotte NC inspection and estimate — qualify for insurance discounts with proper installation." />
    </>
  );
}
