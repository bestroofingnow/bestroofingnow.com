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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-a-flat-roof-charlotte-nc`;
const QUESTION = 'What is a flat roof and what materials work best in Charlotte NC?';
const ANSWER = "A flat roof is a low-slope roof with a pitch of 1/4-inch to 2-inches per foot — appearing flat from the ground but designed with subtle slope for water drainage. In Charlotte NC, flat roofs are common on Uptown commercial buildings, modern residential homes in NoDa and Plaza Midwood, additions on older homes, and mixed-use developments in South End. The best materials for Charlotte's climate are TPO (thermoplastic polyolefin) at $5.50-$8.50 per sq ft for energy-efficient white reflective surfaces, modified bitumen at $4-$7 per sq ft for proven durability, and EPDM rubber at $4.50-$7 per sq ft for budget-friendly 25-30 year lifespans. Avoid built-up tar-and-gravel — it fails fast in Charlotte's UV and humidity.";

const followUpFAQs = [
  { question: 'How much does a flat roof cost in Charlotte NC?', answer: "Flat roof installation in Charlotte ranges $4-$10 per sq ft installed depending on material. For a 2,000 sq ft flat roof: TPO runs $11,000-$17,000, EPDM rubber $9,000-$14,000, modified bitumen $8,000-$14,000, and PVC membrane $12,000-$20,000. Commercial buildings in Uptown often use 60-mil TPO at $7-$9 per sq ft for 25-30 year warranties. Residential additions and modern NoDa homes typically use 45-mil EPDM. Mecklenburg County permits add $100-$300, and tear-off of existing failed flat roofs adds $1.50-$3 per sq ft." },
  { question: 'Which flat roof material is best for Charlotte humidity?', answer: "TPO (thermoplastic polyolefin) is the top choice for Charlotte's hot humid climate. White TPO reflects 80%+ of solar heat, reducing attic temperatures 30-50 degrees on summer days when Charlotte hits 95°F. This cuts AC costs 10-20% on commercial buildings. TPO is heat-welded at seams, eliminating the seam failures common in EPDM during humid conditions. Modified bitumen works well for residential additions but absorbs heat. Avoid built-up roofing (BUR) and tar-and-gravel — Charlotte's UV degrades them within 10-15 years vs. 25+ for TPO." },
  { question: 'Do flat roofs leak more than pitched roofs in Charlotte?', answer: "Flat roofs leak more often than pitched roofs in Charlotte primarily because water doesn't shed as quickly during heavy rains (Charlotte averages 4+ inches per month June-August). Common leak points: seams between membrane sheets, penetrations around HVAC units and skylights, drain assemblies, and parapet wall flashings. With proper installation and annual inspection, modern flat roofs (TPO, PVC) match pitched roof reliability. Drain maintenance is critical — clogged scuppers cause 60% of flat roof failures in Charlotte. Inspect drains every spring and fall." },
  { question: 'How long do flat roofs last in Charlotte NC?', answer: "Flat roof lifespans in Charlotte vary by material: TPO 20-30 years, EPDM rubber 25-30 years, PVC 20-30 years, modified bitumen 15-20 years, and built-up roofing (BUR) 15-25 years. Charlotte's UV exposure (averaging 200+ sunny days/year) and freeze-thaw cycles (10-20 days below freezing in winter) shorten lifespans 15-20% vs. milder climates. Proper drainage design, white reflective coatings, and annual inspections can extend any flat roof system 5-10 years. Most commercial property owners in Uptown plan for 25-year replacement cycles." },
  { question: 'Where do I see flat roofs in Charlotte neighborhoods?', answer: "Flat roofs are everywhere in Charlotte if you know where to look. Uptown and South End feature flat roofs on virtually all commercial high-rises, mixed-use buildings, and modern apartments. NoDa and Plaza Midwood have growing numbers of modernist single-family homes with flat or near-flat roofs. Industrial corridors near Camp North End use flat roofs almost exclusively. Residential additions on bungalows in Dilworth and Elizabeth often use flat roofs to keep additions below the existing roofline. Lake Norman has occasional modernist lakefront homes with flat roof sections." },
];

export const metadata: Metadata = {
  title: 'Flat Roof Guide for Charlotte NC',
  description: "What is a flat roof? Learn best materials (TPO, EPDM), costs ($4-$10/sq ft), and lifespans for Charlotte NC commercial and modern homes.",
  keywords: ['flat roof Charlotte NC', 'TPO roofing Charlotte', 'EPDM rubber roof', 'flat roof cost Charlotte', 'commercial flat roof', 'modified bitumen Charlotte', 'flat roof materials', 'low slope roofing'],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Flat Roof Guide for Charlotte NC',
    description: 'Learn what a flat roof is and which materials (TPO, EPDM, modified bitumen) work best for Charlotte NC humidity.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function FlatRoofPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Flat Roof Guide', url: PAGE_URL }]} />
      <WebPageSchema name="Flat Roof Guide for Charlotte NC" description="Complete guide to flat roofs for Charlotte NC commercial and residential buildings — best materials, costs, and lifespans." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Flat Roof Guide', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Flat Roof Guide Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Low-slope roof with 1/4-inch to 2-inch per foot pitch for drainage',
          'TPO (white reflective) — best for Charlotte heat at $5.50-$8.50/sq ft',
          'EPDM rubber — budget option at $4.50-$7/sq ft, 25-30 year lifespan',
          'Modified bitumen — durable residential choice at $4-$7/sq ft',
          'Common on Uptown commercial and NoDa modern residential buildings',
          'White TPO reduces Charlotte attic heat 30-50°F in summer',
          'Avoid tar-and-gravel built-up roofing — fails fast in Charlotte UV',
          'Drain maintenance prevents 60% of Charlotte flat roof failures',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Flat Roof Guide' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Square className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Roof Style Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What is a flat roof and what materials work best in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Free Flat Roof Estimate</Button>
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

      <CTASection title="Need a Flat Roof Estimate in Charlotte?" subtitle="Free TPO, EPDM, and modified bitumen quotes for commercial and modern residential properties throughout Mecklenburg County." />
    </>
  );
}
