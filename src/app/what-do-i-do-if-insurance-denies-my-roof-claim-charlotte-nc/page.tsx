import { Metadata } from 'next';
import { Phone, AlertTriangle } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/what-do-i-do-if-insurance-denies-my-roof-claim-charlotte-nc`;
const QUESTION = 'What do I do if my insurance denies my roof claim in Charlotte NC?';
const ANSWER =
  "If your insurance denies your roof claim in Charlotte NC, take these 5 steps in order: (1) request the written denial letter — N.C. Gen. Stat. §58-3-100 requires NC carriers to provide written denial reasons; (2) review the denial reason carefully (most common: 'wear and tear' or 'maintenance' rather than 'storm-driven'); (3) order a Best Roofing Now Xactimate-format independent inspection ($200-$450) — about 30-40% of denied claims are overturned with proper supplemental documentation; (4) file a SUPPLEMENTAL claim with new evidence (NOAA storm event verification, photo documentation of storm-specific damage patterns, code-upgrade requirements, our Xactimate estimate); (5) if still denied, INVOKE THE APPRAISAL CLAUSE in your policy (most NC homeowner policies include this) — brings in a neutral third-party appraiser to resolve disputes. Final option: file a complaint with the NC Department of Insurance (ncdoi.gov) for unfair claim handling. Best Roofing Now provides free claim review for denied claims and helps with the supplemental filing process. Most denied claims have valid grounds for reversal — don't accept the first 'no' as final.";

const followUpFAQs = [
  {
    question: 'Why do insurance companies deny roof claims in Charlotte NC?',
    answer:
      "Top 5 denial reasons in Charlotte NC: (1) 'wear and tear' — adjuster classifies damage as age-related not storm-driven (most common, often disputable); (2) 'pre-existing damage' — adjuster believes damage existed before the storm (counter with NOAA storm event timeline); (3) 'maintenance failure' — claims policyholder didn't maintain roof properly (counter with maintenance documentation); (4) 'cosmetic damage only' — denies for issues that don't affect waterproofing (often valid for hail dents on metal); (5) 'below deductible' — claim doesn't exceed your wind/hail deductible (verify deductible math; lakefront percentage-based deductibles can equal $5,000-$25,000+).",
  },
  {
    question: 'What is the appraisal clause in my insurance policy?',
    answer:
      "The appraisal clause is a dispute resolution mechanism in most NC homeowner policies (check your policy under 'Conditions' or 'Loss Settlement'). When invoked: (1) you choose an independent appraiser (Best Roofing Now's HAAG-credentialed inspector qualifies); (2) the carrier chooses an independent appraiser; (3) the two appraisers select an umpire (neutral third party); (4) appraisers value the loss; (5) if appraisers disagree, the umpire decides; (6) the decision is BINDING on both you and the carrier. Cost: each side pays their own appraiser ($300-$1,500), umpire fee split 50/50 ($500-$2,500). Worth it for claims over $5,000.",
  },
  {
    question: 'Can I sue my insurance company for denying a roof claim?',
    answer:
      "Yes — but litigation is expensive and slow (12-36 months). Better options first: (1) supplemental filing with new evidence; (2) appraisal clause invocation (binding, faster, cheaper); (3) NC Department of Insurance complaint (free, sometimes prompts carrier reconsideration); (4) public adjuster engagement (10-15% contingency fee, advocates on your behalf). Litigation works best for claim values over $25,000 with clear evidence of bad faith denial. NC's bad faith insurance law (N.C. Gen. Stat. §75-1.1, Unfair and Deceptive Trade Practices) allows recovery of treble damages plus attorney's fees in successful cases.",
  },
  {
    question: 'How long do I have to dispute a denied insurance claim in NC?',
    answer:
      "NC has multiple deadlines that all matter: (1) carrier response — typically 30 days to respond to your supplemental filing per NC Department of Insurance regulations; (2) lawsuit filing — 3 years from claim denial under N.C. Gen. Stat. §1-52(1) for breach of contract claims; (3) appraisal clause — typically 60-180 days from denial per most policy terms (check your policy); (4) bad faith claims — 3 years from carrier's bad faith conduct under §1-52(5). Don't wait — start the supplemental process immediately while evidence is fresh and witnesses are available.",
  },
  {
    question: 'Should I hire a public adjuster for a denied roof claim?',
    answer:
      "Public adjusters work on contingency (typically 10-15% of recovered settlement) and advocate exclusively for you (vs the carrier-employed adjuster who works for the insurance company). Worth hiring when: (1) claim value exceeds $25,000; (2) clear evidence of underpaid or denied legitimate damage; (3) you don't have time to manage the supplemental process; (4) carrier is being unresponsive or hostile. Best Roofing Now coordinates with public adjusters when needed but often resolves denials directly through Xactimate-format supplemental documentation without the contingency fee. NC public adjusters must be licensed — verify at ncdoi.gov.",
  },
];

export const metadata: Metadata = {
  title: 'What Do I Do if My Insurance Denies My Roof Claim in Charlotte NC?',
  description:
    "If insurance denies Charlotte NC roof claim: get written denial letter, order Xactimate independent inspection, file supplemental, invoke appraisal clause. 30-40% overturn rate.",
  keywords: [
    'insurance denied my roof claim Charlotte NC',
    'roof insurance claim denial',
    'appraisal clause roof claim',
    'NC Department of Insurance complaint',
    'supplemental insurance claim roof',
    'public adjuster Charlotte NC',
    'storm damage claim denial',
    'wear and tear claim denial',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'What Do I Do if My Insurance Denies My Roof Claim in Charlotte NC?',
    description: '5-step dispute process: written denial, supplemental, appraisal clause, NCDOI.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function InsuranceDeniedClaimPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Insurance Denied Claim?', url: PAGE_URL }]} />
      <WebPageSchema name="What Do I Do if My Insurance Denies My Roof Claim in Charlotte NC?" description="Charlotte NC insurance roof claim denial dispute guide." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Claim Denied?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="What Do I Do if Insurance Denies My Roof Claim Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Step 1 — request written denial letter (N.C. Gen. Stat. §58-3-100 requires it)',
          'Step 2 — review denial reason (wear and tear vs storm-driven is most common)',
          'Step 3 — order Best Roofing Now Xactimate independent inspection ($200-$450)',
          'Step 4 — file supplemental claim with NOAA storm verification, photo evidence',
          'Step 5 — invoke appraisal clause in your policy (binding third-party arbitration)',
          'Final option — NC Department of Insurance complaint (ncdoi.gov)',
          '30-40% of denied claims overturned with proper supplemental documentation',
          'Don\'t accept first denial as final',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Claim Denied?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Claim Dispute Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">What Do I Do if My Insurance Denies My Roof Claim in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Free Claim Denial Review</Button>
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

      <CTASection title="Don't Accept the First 'No'" subtitle="Free claim denial review. 30-40% overturn rate with Xactimate supplemental documentation. Appraisal clause guidance." />
    </>
  );
}
