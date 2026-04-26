import { Metadata } from 'next';
import { Phone, Scale } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/should-i-use-metal-or-asphalt-roof-on-lake-norman-home-nc`;
const QUESTION = 'Should I use metal or asphalt roofing on my Lake Norman NC home?';
const ANSWER =
  "For Lake Norman NC homes, choose METAL (specifically aluminum standing-seam) for waterfront positions and PREMIUM ASPHALT (Class 4 impact-resistant or designer) for non-waterfront. Decision matrix: WATERFRONT POSITIONS — aluminum standing-seam is the gold standard ($13-$17/sq ft, 100% corrosion-immune, 50+ year lifespan, 150+ MPH wind, 75-85% resale ROI), copper for premier estates ($24-$30/sq ft, 60-100+ year lifespan, develops natural patina); NON-WATERFRONT LKN HOMES (200-1000+ feet from water) — Class 4 impact-resistant asphalt shingles ($7-$11/sq ft, 30-50 year lifespan, 10-30% NC IBHS Fortified insurance discount, 130-150 MPH wind) work well; designer shingles ($9-$14/sq ft) for premium aesthetic. The 50+ year lifecycle math favors metal: aluminum lasts 1.5-2x longer than asphalt, requires zero recoating, and adds the highest resale ROI. For Lake Norman waterfront where corrosion is a real concern, the cost premium for metal pays back through avoided early replacement.";

const followUpFAQs = [
  {
    question: 'Why does waterfront vs non-waterfront matter so much for Lake Norman roof material?',
    answer:
      "Waterfront atmospheric moisture (within 100-200 ft of water) accelerates steel corrosion even with Galvalume coating. Aluminum is 100% corrosion-immune so eliminates this concern. Non-waterfront LKN homes (200+ ft from water) have similar atmospheric conditions to inland Charlotte and don't require the aluminum premium. Other waterfront-specific factors: (1) wind-fetch exposure (150+ MPH wind ratings important); (2) cantilevered/over-water structures (lighter aluminum reduces structural load); (3) salt-crystal accumulation from boat traffic (washes off aluminum easily, can pit steel).",
  },
  {
    question: 'How much more does aluminum cost vs Class 4 asphalt at Lake Norman?',
    answer:
      "On a 40-50 sq Lake Norman home: Class 4 asphalt $20,000-$32,000 vs aluminum standing-seam $35,000-$70,000. Cost premium 40-100% upfront. BUT lifecycle math favors aluminum: aluminum lasts 50+ years (one cycle) vs Class 4 asphalt 30-50 years (need 1+ replacement cycle within 60 years). Plus aluminum has 75-85% resale ROI vs 65-75% for Class 4 asphalt. For waterfront homes, the 50-year total cost is typically lower for aluminum despite higher upfront.",
  },
  {
    question: 'Can I get the NC IBHS Fortified insurance discount with both materials?',
    answer:
      "Yes — both Class 4 asphalt and standing-seam metal qualify for the NC IBHS Fortified Roof Designation and 10-30% homeowner insurance discount. Requirements: (1) Fortified-certified installer (Best Roofing Now is certified); (2) Class 4 impact-resistant material (Class 4 asphalt qualifies, all standing-seam metal qualifies inherently); (3) sealed roof deck and enhanced fastening (6-nail pattern); (4) IBHS Fortified Home Evaluator photo documentation; (5) Designation submitted to insurance carrier. Most NC carriers (State Farm, Allstate, USAA, Liberty Mutual, Travelers, Nationwide, Erie, Farm Bureau) honor the discount.",
  },
  {
    question: 'What about the noise concern with metal roofs at Lake Norman?',
    answer:
      "The metal-roof-noise myth is debunked by acoustic testing. Modern metal installs include synthetic underlayment, attic insulation R-30 to R-49, and decking — these reduce sound to 52-57 dB during heavy rain (vs asphalt 50-55 dB). The 2-3 dB difference is barely perceptible and typically masked by ceiling drywall and insulation. Lake Norman homeowners who choose metal almost universally report no noise concerns after install. The myth comes from old metal-on-bare-decking installations (barn roofs) which aren't representative of modern residential metal roofing.",
  },
  {
    question: 'How do I decide between aluminum, copper, and zinc for a Lake Norman home?',
    answer:
      "Aluminum (most common Lake Norman waterfront choice) — $13-$17/sq ft, 50+ yr, available in 14+ PVDF Kynar colors, modern clean look, 100% corrosion immune. Copper ($24-$30/sq ft) — 60-100+ yr lifespan, develops natural patina (green/brown/dark variations over 5-15 yr), historic and luxury aesthetic, premier estate communities (Peninsula, Skybrook, NorthBay). Zinc ($19-$25/sq ft) — 60-100+ yr lifespan, modern architectural look, develops light patina (no green like copper), specialty look for contemporary lakefront. Most Lake Norman homeowners choose aluminum for the cost-performance balance.",
  },
];

export const metadata: Metadata = {
  title: 'Should I Use Metal or Asphalt Roof on My Lake Norman NC Home?',
  description:
    "Lake Norman NC roof material choice: aluminum standing-seam for waterfront ($13-17/sq ft), Class 4 asphalt for non-waterfront ($7-11/sq ft). 50-year lifecycle math favors metal.",
  keywords: [
    'metal vs asphalt Lake Norman NC',
    'best roof material Lake Norman',
    'Cornelius Davidson roof material',
    'aluminum vs asphalt lakefront',
    'lake norman waterfront roof choice',
    'Class 4 asphalt vs metal',
    'lakefront roofing decision',
    'lake norman home roof material',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Should I Use Metal or Asphalt Roof on My Lake Norman NC Home?',
    description: 'Aluminum standing-seam for waterfront. Class 4 asphalt for non-waterfront.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function MetalVsAsphaltLakeNormanPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Metal vs Asphalt Lake Norman?', url: PAGE_URL }]} />
      <WebPageSchema name="Should I Use Metal or Asphalt Roof on My Lake Norman NC Home?" description="Lake Norman NC roof material decision guide." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Metal vs Asphalt LKN?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Should I Use Metal or Asphalt Roof Lake Norman NC" city="Cornelius" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Cornelius" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'WATERFRONT positions — aluminum standing-seam $13-17/sq ft (gold standard, 100% corrosion immune)',
          'WATERFRONT premium estates — copper standing-seam $24-30/sq ft',
          'NON-WATERFRONT LKN — Class 4 impact-resistant asphalt $7-11/sq ft',
          'NON-WATERFRONT premium — designer shingles $9-14/sq ft',
          'Aluminum lifespan 50+ yr vs Class 4 asphalt 30-50 yr',
          'Both qualify for 10-30% NC IBHS Fortified insurance discount',
          'Metal resale ROI 75-85% vs asphalt 65-75%',
          'Metal noise myth debunked — only 2-3 dB louder than asphalt',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Metal vs Asphalt LKN?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Scale className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Lake Norman NC Material Decision Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">Should I Use Metal or Asphalt Roof on My Lake Norman NC Home?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free LKN Material Consultation</Button>
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

      <CTASection title="The Right Material for Your Lake Norman Home" subtitle="Aluminum standing-seam, Class 4 asphalt, or designer — choice depends on waterfront vs non-waterfront and budget. Free written estimate with material comparison." />
    </>
  );
}
