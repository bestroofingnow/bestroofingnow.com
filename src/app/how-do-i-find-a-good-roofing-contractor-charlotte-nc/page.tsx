import { Metadata } from 'next';
import { Phone, Award } from 'lucide-react';
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

const PAGE_URL = `${SITE_CONFIG.url}/how-do-i-find-a-good-roofing-contractor-charlotte-nc`;
const QUESTION = 'How do I find a good roofing contractor in Charlotte NC?';
const ANSWER =
  "Find a good Charlotte NC roofing contractor with this 8-step verification process: (1) verify NC General Contractor license at the NC Licensing Board for General Contractors website (Best Roofing Now is NC GCL #87344); (2) demand certificate of insurance directly from the carrier (not just a faxed copy) — minimum $2M general liability + workers comp; (3) check BBB accreditation and complaint history (Best Roofing Now is BBB A+); (4) verify manufacturer top-tier credentials directly with GAF (Master Elite top 2% nationwide), CertainTeed (SELECT ShingleMaster top tier), Owens Corning (Platinum Preferred); (5) read Google reviews carefully — look for patterns, not isolated bad reviews; (6) demand written estimates with itemized line items, not lump-sum prices; (7) refuse pressure to sign on the spot — legitimate contractors give you 24-72 hours to review; (8) reject offers to 'cover' or 'rebate' your insurance deductible (illegal under N.C. Gen. Stat. §58-24-10). Get 2-3 estimates from contractors that pass all 8 verification steps before deciding. Free Best Roofing Now inspection includes all credentials and references on request.";

const followUpFAQs = [
  {
    question: 'What are the biggest red flags when choosing a Charlotte roofing contractor?',
    answer:
      "Top 8 red flags: (1) door-to-door sales pressure especially after storms (storm chasers); (2) deductible-rebating offers (illegal under N.C. Gen. Stat. §58-24-10 — risks your claim); (3) cash-only or large upfront deposit demands (legitimate contractors offer financing or 50% on completion); (4) no NC license or insurance certificate available; (5) significantly lower pricing than 2 other estimates (cutting corners); (6) no manufacturer certification credentials; (7) no physical office address (PO box only); (8) no warranty offered or vague warranty terms. Any 2+ red flags from a single contractor = walk away.",
  },
  {
    question: 'How many estimates should I get for a Charlotte roof replacement?',
    answer:
      "Get 3 estimates from contractors that pass the 8-step verification (NC license, $2M+ insurance, BBB accredited, manufacturer top-tier credentials). Compare: (1) total price (within 10-20% is normal — wider variation indicates scope difference, not better deal); (2) line-item materials (synthetic underlayment vs felt #15, ice-and-water shield extent, ridge vent type); (3) warranty options (manufacturer top-tier vs basic, transferability); (4) timeline (1-2 days reasonable for typical 30-square home); (5) communication quality during the estimate process. The cheapest estimate is rarely the best — focus on credential + scope match.",
  },
  {
    question: 'Is the cheapest roofer the best choice in Charlotte?',
    answer:
      "Almost never. The cheapest Charlotte roofing estimate is typically 15-30% below the median for one or more reasons: (1) using cheaper underlayment (felt #15 vs synthetic) — cuts $200-$400 but loses 5-10 yr warranty validity; (2) skipping ice-and-water shield — cuts $300-$700 but invites future leaks; (3) using non-certified installers — cuts $500-$1,500 in labor but loses 50-yr top-tier warranty; (4) cutting corners on flashing reseat or ridge vent install. The 'savings' typically result in $5,000-$25,000 in repair costs within 5-10 years. Choose the median-priced contractor with strongest credentials, not the cheapest.",
  },
  {
    question: 'How do I verify a Charlotte roofer\'s manufacturer certifications?',
    answer:
      "Direct manufacturer verification: (1) GAF Master Elite — search at gaf.com under 'Find a Roofer' filter for Master Elite credential (top 2% nationwide); (2) CertainTeed SELECT ShingleMaster — search at certainteed.com under 'Find a Pro' filter for SELECT ShingleMaster credential; (3) Owens Corning Platinum Preferred — search at owenscorning.com under 'Roofing Contractor Network'. Best Roofing Now appears on all 3 directories. NEVER accept just a contractor's claim of certification — always verify directly with the manufacturer database.",
  },
  {
    question: 'Should I work with a national roofing chain or local Charlotte contractor?',
    answer:
      "Local Charlotte roofing contractors typically deliver better outcomes than national chains for 4 reasons: (1) accountability — local owners care about reputation in their community; (2) faster response — emergency tarp dispatch in 1-4 hours by zone vs national 24-72 hr; (3) NC-specific code expertise (NC IRC §R806 ventilation, NC IBHS Fortified, N.C. Gen. Stat. insurance law); (4) longer-term relationship for warranty service over 50-year warranty period. Best Roofing Now is veteran-owned, BBB A+, GAF Master Elite, and serves Charlotte and the Lake Norman region exclusively.",
  },
];

export const metadata: Metadata = {
  title: 'How Do I Find a Good Roofing Contractor in Charlotte NC?',
  description:
    "Find good Charlotte NC roofer: 8-step verification (NC license, $2M+ insurance, BBB A+, manufacturer top-tier creds, written estimates, no pressure, reject deductible-rebating).",
  keywords: [
    'how to find good roofing contractor Charlotte NC',
    'good roofer Charlotte',
    'reliable Charlotte roofer',
    'verify Charlotte roofing license',
    'NC roofing contractor red flags',
    'best Charlotte roofers',
    'how to choose roofer NC',
    'storm chaser warning signs',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How Do I Find a Good Roofing Contractor in Charlotte NC?',
    description: '8-step verification to find a trustworthy Charlotte NC roofing contractor.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowToFindGoodContractorPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Find Good Roofer?', url: PAGE_URL }]} />
      <WebPageSchema name="How Do I Find a Good Roofing Contractor in Charlotte NC?" description="8-step contractor verification guide for Charlotte NC homeowners." url={PAGE_URL} breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }, { name: 'Find Good Roofer?', url: PAGE_URL }]} />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <SpeakableContent />
      <AISearchOptimizationBundle pageUrl={PAGE_URL} pageName="How Do I Find a Good Roofing Contractor Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Verify NC General Contractor license at NC Licensing Board for General Contractors website',
          'Demand certificate of insurance from carrier directly — $2M+ general liability + workers comp',
          'Check BBB accreditation and complaint history (Best Roofing Now is BBB A+)',
          'Verify manufacturer top-tier credentials directly (GAF Master Elite, CT SELECT, OC Platinum)',
          'Read Google reviews for patterns not isolated complaints',
          'Demand written estimates with itemized line items, not lump-sum',
          'Refuse signing pressure — legitimate contractors give 24-72 hr to review',
          'Reject deductible-rebating (illegal under N.C. Gen. Stat. §58-24-10)',
        ]}
        pageUrl={PAGE_URL}
      />
      <FreeInspectionOfferSchema />

      <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Find Good Roofer?' }]} className="mb-4 text-white/70" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Contractor Vetting Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">How Do I Find a Good Roofing Contractor in Charlotte NC?</h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">{ANSWER}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">Get Best Roofing Now Estimate</Button>
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

      <CTASection title="Why Charlotte Trusts Best Roofing Now" subtitle="NC GCL #87344, BBB A+, GAF Master Elite (top 2%), CertainTeed SELECT ShingleMaster, OC Platinum Preferred, veteran-owned. All 8 verification steps welcome." />
    </>
  );
}
