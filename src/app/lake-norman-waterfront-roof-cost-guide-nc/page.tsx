import { Metadata } from 'next';
import { Phone, DollarSign } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/lake-norman-waterfront-roof-cost-guide-nc`;
const QUESTION = 'How much does a Lake Norman waterfront roof cost in NC?';
const ANSWER =
  "Lake Norman waterfront roof replacement in NC typically costs 15-30% more than comparable inland Charlotte projects due to: (1) lakefront access challenges (boom truck or specialized lift required for some properties); (2) salt-air corrosion mitigation requirements (aluminum or copper preferred over steel); (3) larger home sizes typical of waterfront (40-70 sq vs 30 sq Charlotte average); (4) HOA architectural review for lakefront communities (The Peninsula, Skybrook, NorthBay); (5) structural reinforcement for cantilevered architecture common on lakefront homes. Typical Lake Norman waterfront pricing for 40-50 sq home: architectural shingles $15,000-$25,000, Class 4 impact-resistant $20,000-$32,000, designer/luxury shingles $25,000-$42,000, standing-seam aluminum $35,000-$70,000 (recommended), copper standing-seam $60,000-$150,000+. Best Roofing Now serves all Lake Norman waterfront communities with free written estimates, structural engineering coordination, and HOA ARB submission.";

const followUpFAQs = [
  {
    question: 'Why is Lake Norman waterfront roofing more expensive than inland Charlotte?',
    answer:
      "Five cost premiums for Lake Norman waterfront vs inland Charlotte: (1) larger home sizes (40-70 sq waterfront vs 25-35 sq Charlotte average) — proportional cost; (2) salt-air mitigation requires aluminum/copper instead of cheaper steel ($2-$5/sq ft premium); (3) lakefront access — some properties require boom truck or specialized lift; (4) HOA ARB submission and approval coordination (2-4 week review); (5) structural reinforcement for cantilevered or lakefront-engineered architecture. Total premium typically 15-30% over comparable inland project.",
  },
  {
    question: 'Which Lake Norman communities have the highest roof costs?',
    answer:
      "Premier waterfront communities with the highest typical roof costs: The Peninsula (Cornelius — gated, custom estates $1.5M-$10M+), NorthBay (Cornelius — luxury waterfront), Skybrook (Huntersville — high-end golf community), Sailview (Davidson — premium waterfront), Birkdale Village waterfront sections (Huntersville). Premier estate communities frequently use slate, copper, or premium standing-seam metal — these can run $80,000-$300,000+ for typical 50-70 sq estate home. Production waterfront neighborhoods (Riverpointe, Vermillion) typically use upgraded architectural or Class 4 shingles at $20,000-$40,000.",
  },
  {
    question: 'Does Lake Norman insurance cover waterfront roof damage?',
    answer:
      "Yes — Lake Norman homeowner insurance covers wind, hail, and storm damage like inland Charlotte, BUT lakefront positions often have: (1) percentage-based wind/hail deductibles (1-5% of dwelling coverage rather than fixed dollar amount — can equal $5,000-$25,000+ on premium homes); (2) higher base premiums due to lakefront exposure; (3) some carriers limit coverage on cantilevered or over-water structures. Best Roofing Now's free post-storm inspection identifies all storm damage and Xactimate-format documentation that lakefront adjusters recognize. We work with all major NC carriers including State Farm, Allstate, USAA, Liberty Mutual, Travelers, and Erie.",
  },
  {
    question: 'Can I finance a Lake Norman waterfront roof replacement?',
    answer:
      "Yes — Best Roofing Now offers PowerPay financing for Lake Norman waterfront roof projects: 0% APR for 12-24 months on qualified credit, or extended 60-120 month terms with competitive APR. Typical $40,000 waterfront aluminum standing-seam reroof: $400-$650/month on 84-month term. Lakefront homeowners also commonly use: (1) home equity loans (deductible interest if used for home improvement); (2) HELOC for tax-flexible draw; (3) cash-out refinance combined with other improvements. Insurance claim work requires no financing if covered.",
  },
  {
    question: 'How long do Lake Norman roof replacements take?',
    answer:
      "Typical Lake Norman waterfront roof replacement: 3-7 days for architectural shingles on 40-50 sq home, 5-10 days for Class 4 or designer shingles, 7-14 days for standing-seam aluminum, 10-20 days for copper standing-seam, 14-30 days for slate or tile (with structural engineering coordination upfront). We deploy 6-8 person crews for residential lakefront projects with specialized lift or boom truck access when needed. Best scheduling windows: October-November (ideal weather) and March-April (pre-storm season). Storm-damage emergencies scheduled same-week regardless of season.",
  },
];

export const metadata: Metadata = {
  title: 'How Much Does a Lake Norman Waterfront Roof Cost in NC?',
  description:
    "Lake Norman waterfront roof costs 15-30% more than inland Charlotte. 40-50 sq home: architectural $15-25K, Class 4 $20-32K, aluminum standing-seam $35-70K, copper $60-150K+.",
  keywords: [
    'Lake Norman waterfront roof cost NC',
    'lakefront roof replacement cost',
    'Cornelius Davidson Huntersville roof cost',
    'aluminum waterfront roof cost',
    'lake norman roofing cost',
    'lakefront roofing financing',
    'Mooresville waterfront roof',
    'Lake Norman hoa roof approval',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Much Does a Lake Norman Waterfront Roof Cost in NC?',
    description: '15-30% premium over inland Charlotte. 40-50 sq home $15K-$150K+ by material.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function LakeNormanWaterfrontCostPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Lake Norman Waterfront Roof Cost?', url: PAGE_URL }]} />
      <WebPageSchema name="How Much Does a Lake Norman Waterfront Roof Cost in NC?" description="Lake Norman waterfront roof cost guide for NC lakefront homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'LKN Waterfront Cost?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="Lake Norman Waterfront Roof Cost Guide NC" city="Cornelius" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Cornelius" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Lake Norman waterfront premium 15-30% over comparable inland Charlotte',
          'Architectural shingles 40-50 sq home — $15,000-$25,000',
          'Class 4 impact-resistant — $20,000-$32,000',
          'Designer/luxury shingles — $25,000-$42,000',
          'Standing-seam aluminum (recommended for waterfront) — $35,000-$70,000',
          'Copper standing-seam (premium estate) — $60,000-$150,000+',
          'Slate restoration (luxury) — $80,000-$300,000+',
          'Premium waterfront communities — Peninsula, NorthBay, Skybrook, Sailview',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'LKN Waterfront Cost?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Lake Norman NC Waterfront Pricing Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Much Does a Lake Norman Waterfront Roof Cost in NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Lakefront Estimate</Button>
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

      <CTASection title="Lakefront-Class Roofing for Lake Norman" subtitle="Aluminum standing-seam, copper, or premium architectural. Lakefront access expertise. HOA ARB coordination. Free written estimate." />
    </>
  );
}
