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

const PAGE_URL = `${SITE_CONFIG.url}/how-long-does-tpo-roof-last-charlotte-nc`;
const QUESTION = 'How long does a TPO roof last in Charlotte NC?';
const ANSWER =
  "TPO (thermoplastic polyolefin) commercial roofs in Charlotte NC last 20-30 years depending on quality, attachment method, and maintenance. Specifics: 60-mil TPO mechanically attached lasts 20-25 years; 60-mil fully adhered lasts 25-30 years; 80-mil fully adhered with R-30 insulation lasts 25-30 years. NDL (no-dollar-limit) warranties from authorized manufacturers match installed lifespan: Carlisle Sure-Weld 20-30 yr, Johns Manville JM TPO 20-yr, GAF EverGuard 20-30 yr, Firestone-Holcim UltraPly 20-25 yr. Charlotte's humid subtropical climate is well-suited to TPO — no plasticizer migration concerns (unlike older PVC), reflective white surface reduces UV degradation. Lifespan extension via silicone restoration coating ($2-$5/sq ft) adds 10-15 years before full replacement needed. Best Roofing Now installs 60-mil reinforced TPO standard with hot-air welded seams forming a monolithic membrane stronger than the field.";

const followUpFAQs = [
  {
    question: 'What can shorten TPO roof lifespan in Charlotte?',
    answer:
      'Five factors that shorten TPO lifespan: (1) ponding water beyond 48 hours (causes membrane stress and seam failure); (2) chemical exposure (kitchen grease vents, HVAC condensate, cleaning chemicals); (3) foot traffic without walk pads (HVAC service routes); (4) UV degradation in older 45-mil systems (60-mil minimum recommended); (5) seam failures from improper hot-air welding (DIY or unauthorized installer). Best Roofing Now uses 60-mil reinforced TPO with hot-air welded seams that exceed the field membrane in tear strength.',
  },
  {
    question: 'How does TPO compare to EPDM for Charlotte commercial roofs?',
    answer:
      "TPO and EPDM both perform well in Charlotte with different tradeoffs: TPO has reflective white surface (10-15% lower cooling costs), better seam strength via hot-air welding, slightly shorter 20-30 yr lifespan; EPDM has 25-40 yr proven lifespan (60+ year track record), darker surface absorbs heat, glued or taped seams that are more failure-prone. Choice depends on building use: TPO for retail/office (energy savings matter), EPDM for warehouses (longer lifespan). Both are available with 15-30 yr NDL warranties.",
  },
  {
    question: 'Can I extend my TPO roof past 30 years?',
    answer:
      "Yes — silicone or acrylic restoration coatings extend TPO 10-15 years at $2-$5 per sq ft (vs $5-$12 for full TPO replacement). The roof must be: (1) structurally sound (no saturated insulation — verified by infrared moisture survey); (2) seams in good condition (no widespread separation); (3) under 25 years old at coating; (4) ponding water resolved through cricket installation. Coatings preserve manufacturer warranty when applied per spec, defer capital expenditure 10-15 years, and qualify for Duke Energy commercial rebates.",
  },
  {
    question: 'What maintenance keeps a TPO roof at maximum lifespan?',
    answer:
      "Annual or semi-annual professional maintenance extends TPO lifespan 5-10 years: (1) seam inspection — check every linear foot for separation; (2) drain and gutter clearing — Charlotte tropical-remnant rain demands clear drainage; (3) flashing and pitch-pocket inspection at HVAC penetrations; (4) walk-pad verification at HVAC service routes; (5) blister and ponding-water check; (6) photographic reporting for warranty documentation. Best Roofing Now offers commercial maintenance contracts at $0.05-$0.15 per sq ft per year.",
  },
  {
    question: 'How do I know when my TPO roof needs replacement?',
    answer:
      "Five replacement triggers: (1) age 20-30+ years (most TPO systems show wear here); (2) widespread seam failures requiring repeated repair; (3) saturated insulation discovered during infrared moisture survey (indicates failed waterproofing); (4) chronic leaks despite repeated repair attempts; (5) NDL warranty expiration without renewal eligibility. Best Roofing Now's commercial inspection ($350-$900 with infrared moisture survey) determines if replacement, coating, or continued maintenance is the best economic path forward.",
  },
];

export const metadata: Metadata = {
  title: 'How Long Does a TPO Roof Last in Charlotte NC?',
  description:
    "TPO commercial roof lifespan in Charlotte NC: 60-mil mechanically attached 20-25 yr, fully adhered 25-30 yr, 80-mil with R-30 25-30 yr. NDL warranties 15-30 yr. Coating extends 10-15 yr.",
  keywords: [
    'how long does TPO roof last Charlotte NC',
    'TPO roof lifespan',
    'commercial TPO replacement timing',
    'TPO vs EPDM lifespan',
    'TPO maintenance Charlotte',
    'extend TPO with coating',
    'TPO warranty Charlotte',
    'commercial roof lifespan',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Long Does a TPO Roof Last in Charlotte NC?',
    description: '20-30 years depending on attachment and thickness. NDL warranties match.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowLongTPOLastsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'How Long Does TPO Last?', url: PAGE_URL }]} />
      <WebPageSchema name="How Long Does a TPO Roof Last in Charlotte NC?" description="TPO lifespan and replacement timing for Charlotte NC commercial roofs." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'TPO Lifespan?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Long Does TPO Roof Last Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          '60-mil mechanically attached — 20-25 years',
          '60-mil fully adhered — 25-30 years',
          '80-mil fully adhered with R-30 — 25-30 years',
          'Carlisle Sure-Weld NDL — 20-30 yr warranty matches installed lifespan',
          'JM TPO NDL — 20-yr warranty',
          'GAF EverGuard NDL — 20-30 yr warranty',
          'Silicone restoration coating extends TPO 10-15 yr at $2-5/sq ft',
          'Annual maintenance ($0.05-0.15/sq ft) extends lifespan 5-10 years',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'TPO Lifespan?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Clock className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Commercial TPO Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Long Does a TPO Roof Last in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Commercial Estimate</Button>
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

      <CTASection title="Maximize Your TPO Roof Lifespan" subtitle="Annual maintenance contracts. Silicone restoration coatings. NDL warranties from Carlisle, JM, Firestone-Holcim, GAF, Mule-Hide." />
    </>
  );
}
