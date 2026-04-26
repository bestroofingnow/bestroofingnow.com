import { Metadata } from 'next';
import { Phone, Wind } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-is-wind-uplift-rating-charlotte-nc`;
const QUESTION = 'What is wind uplift rating and what does my Charlotte NC roof need?';
const ANSWER =
  "Wind uplift rating is the maximum sustained wind speed (in MPH) that a shingle is certified to withstand without lifting, tearing, or blowing off the roof. Ratings are tested per ASTM D7158 (the industry standard) and certified by Underwriters Laboratories. Common ratings: 60 MPH (legacy 3-tab shingles, mostly obsolete), 110 MPH (standard architectural shingles, NC code minimum), 130 MPH (premium architectural and most Class 4 impact-resistant shingles), 150 MPH (specialty hurricane-rated shingles for coastal NC). For Charlotte NC homeowners, 110 MPH is code-minimum but 130 MPH is HIGHLY recommended because: (1) Charlotte sees 60-80 MPH gusts during May-July severe thunderstorms; (2) Charlotte sees occasional 70-90 MPH gusts during August-October tropical remnants (Hurricanes Helene, Florence, Matthew impacted region); (3) Lake Norman areas (Cornelius, Davidson, Huntersville) experience higher wind exposure due to open-water fetch; (4) tornadoes have struck Mecklenburg County (rare but documented). Premium 130 MPH lines available in Charlotte: GAF Timberline HDZ ($95-$140/sq), CertainTeed Landmark Pro ($110-$160/sq), OC TruDefinition Duration ($90-$140/sq). Cost premium vs 110 MPH minimum: typically $0-$20/square (most modern architectural shingles meet 130 MPH). Best practice: choose 130 MPH minimum + proper 6-nail fastening pattern + ring-shank nails for maximum wind resistance. Best Roofing Now installs all wind-rated systems with code-compliant fastening.";

const followUpFAQs = [
  {
    question: 'How is wind uplift testing performed?',
    answer:
      "ASTM D7158 wind testing protocol: (1) shingle samples installed on standard plywood substrate using manufacturer-specified nail pattern (typically 4-nail for 110 MPH or 6-nail for 130+ MPH); (2) test panel placed in wind tunnel; (3) progressively higher wind speeds applied until shingle failure (lifting, tearing, blow-off); (4) failure speed recorded; (5) certification awarded for 'Class' rating (Class A = 110 MPH, Class D = 90 MPH, Class F = 110 MPH, Class G = 120 MPH, Class H = 150 MPH per latest standard). Most modern architectural shingles certify to 130 MPH equivalent. KEY INSIGHT: rating only valid if installed per manufacturer fastening pattern — non-spec install voids wind warranty.",
  },
  {
    question: 'What\'s the difference between 4-nail and 6-nail fastening in Charlotte NC?',
    answer:
      "4-NAIL FASTENING — manufacturer-default for code-minimum 110 MPH wind rating; nails placed at standard locations on shingle. 6-NAIL FASTENING — required for 130+ MPH wind rating upgrade; 2 additional nails placed in 'enhanced wind zone' near top edge of shingle. Cost difference: 6-nail uses 50% more nails ($150-$300 added on typical 30-square Charlotte reroof), takes 10-15% longer to install. Wind benefit: 6-nail pattern increases wind resistance from 110 MPH to 130-150 MPH (depending on shingle line). Best practice for Charlotte: 6-nail pattern as standard install + ring-shank fasteners for maximum hold. Most premium Charlotte reroofs (Best Roofing Now standard) include 6-nail at no upcharge — verify your contractor specifies 6-nail.",
  },
  {
    question: 'Are 110 MPH shingles enough for Charlotte NC weather?',
    answer:
      "Code-minimum yes, but borderline insufficient for Charlotte's storm exposure. 110 MPH wind rating handles most Charlotte storms (typical thunderstorm gusts 40-60 MPH) but is at-or-near-failure during: severe thunderstorm gusts 60-80 MPH (May-July), tropical remnant winds 70-90 MPH (August-October), occasional tornado-spawning supercells 80-100+ MPH. Real-world: Charlotte homeowners with 110 MPH shingles experience 2-5x more wind-loss claims than 130 MPH neighbors after severe storms. Cost difference is minimal ($0-$20/square) for 130 MPH upgrade — Best Roofing Now strongly recommends 130 MPH as Charlotte minimum. For Lake Norman waterfront, 150 MPH specialty hurricane-rated shingles preferred (open-water wind fetch increases exposure 20-30%).",
  },
  {
    question: 'Will wind upgrade reduce my Charlotte NC insurance premium?',
    answer:
      "Yes — most NC carriers offer wind-rating-based discounts: STANDARD 110 MPH shingles — no discount (code-baseline only); 130 MPH wind-rated shingles — 5-10% wind/storm peril discount typical; 150 MPH wind-rated shingles — 10-15% discount; IBHS FORTIFIED ROOF (with 130+ MPH and other criteria) — 15-30% comprehensive discount. Combined discount potential: 130 MPH shingle + Class 4 impact + IBHS Fortified can stack to 30-45% total premium reduction. Annual savings on typical Charlotte $2,800/year homeowner premium: $140-$1,260. Best Roofing Now's free assessment includes wind-rating recommendation with specific carrier discount estimation.",
  },
  {
    question: 'Can wind damage existing 110 MPH shingles in Charlotte NC?',
    answer:
      "Yes — Charlotte NC commonly sees wind damage to 110 MPH shingles after severe storms: TYPICAL DAMAGE — 1-5 lifted/missing shingles after 60-70 MPH gusts; SIGNIFICANT DAMAGE — 5-25 lifted shingles after 80-90 MPH (tropical remnants); CATASTROPHIC DAMAGE — full sections blown off after 90+ MPH (rare tornado-spawning storms). Insurance claim threshold: typically 5+ damaged shingles in adjoining area or 25%+ of single roof slope — qualifies for full reroof claim approval. Most pre-2010 Charlotte homes have 110 MPH shingles approaching end-of-life — upgrade to 130 MPH during next reroof for significantly improved storm resistance. Best Roofing Now provides post-storm inspection ($0 cost) with damage documentation for insurance claim filing.",
  },
];

export const metadata: Metadata = {
  title: 'What Is Wind Uplift Rating and What Does My Charlotte NC Roof Need?',
  description:
    "Wind uplift rating = max MPH shingles withstand. NC code minimum 110 MPH. Charlotte recommended 130 MPH (storms, tropical remnants). Lake Norman 150 MPH for waterfront. Insurance discount 5-15%.",
  keywords: [
    'what is wind uplift rating Charlotte NC',
    'wind rating shingles Charlotte',
    'ASTM D7158 wind test',
    '110 MPH vs 130 MPH shingles',
    '6-nail fastening pattern',
    'NC wind code roof',
    'Lake Norman wind rating',
    'wind insurance discount NC',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Is Wind Uplift Rating and What Does My Charlotte NC Roof Need?',
    description: 'Charlotte recommended 130 MPH. Insurance discount 5-15%.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function WhatIsWindUpliftPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'What Is Wind Uplift Rating?', url: PAGE_URL }]} />
      <WebPageSchema name="What Is Wind Uplift Rating and What Does My Charlotte NC Roof Need?" description="Wind uplift rating guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Wind Rating?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Is Wind Uplift Rating Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Wind uplift rating — max sustained wind MPH shingles withstand without failure',
          'ASTM D7158 industry-standard testing certification',
          '60 MPH (legacy 3-tab); 110 MPH (NC code minimum); 130 MPH (recommended Charlotte); 150 MPH (Lake Norman waterfront)',
          'Charlotte storm exposure — 60-90 MPH gusts during May-July and August-October',
          '6-nail fastening required for 130+ MPH rating (vs 4-nail standard 110)',
          '130 MPH cost premium typically $0-$20/square (most modern architectural)',
          'NC insurance discount 5-15% for 130-150 MPH shingles',
          'Stacks with Class 4 impact and IBHS Fortified for 30-45% total premium reduction',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Wind Rating?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Wind className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Wind Uplift Rating Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Is Wind Uplift Rating and What Does My Charlotte NC Roof Need?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Wind-Rated Estimate</Button>
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

      <CTASection title="130 MPH Wind-Rated Standard for Charlotte" subtitle="Best Roofing Now installs 130 MPH wind-rated shingles with 6-nail pattern and ring-shank fasteners as standard. Lake Norman waterfront 150 MPH option. Insurance discount stacks." />
    </>
  );
}
