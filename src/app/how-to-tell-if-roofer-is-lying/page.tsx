import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';
import {
  BreadcrumbSchema,
  QAPageSchema,
  FAQSchema,
  SpeakableContent,
  WebPageSchema,
  HowToSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  SpeakableContentBlocks,
  FeaturedSnippetListAnswerSchema,
  FreeInspectionOfferSchema,
} from '@/components/seo/SchemaMarkup';
import { CitationFacts } from '@/components/sections/CitationFacts';
import { MoneyPagesLinkBlock } from '@/components/sections/MoneyPagesLinkBlock';
import { CTASection } from '@/components/sections/CTASection';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

const PAGE_URL = `${SITE_CONFIG.url}/how-to-tell-if-roofer-is-lying`;
const QUESTION = 'How can I tell if a roofer is lying to me?';
const ANSWER =
  'You can tell a roofer is lying by checking 7 verifiable facts they cannot fake: (1) NC General Contractor license — search ncbelb.org for the license number; (2) BBB profile and accreditation status with rating and complaint history; (3) Manufacturer certifications — verify on the GAF, CertainTeed, or Owens Corning installer locator websites; (4) Workers comp + general liability insurance certificates dated within the last 12 months; (5) Local business address (not a UPS box) you can drive to; (6) Real Google/Facebook reviews with photos and a 3+ year review history (not all 5-stars in one month); (7) Written estimate on company letterhead with itemized materials, brand SKUs, and warranty details. If a contractor refuses to provide any of these, will not let you photograph their license/insurance, or pressures you to sign immediately, those are nearly always signs of dishonesty. Charlotte storm-chaser fraud peaks after every hail or wind event — verify before you sign.';

const redFlags = [
  {
    flag: 'Door-to-door storm chaser with no local address',
    why: 'NC requires a permanent business address for licensing. No address = no license = no warranty if anything goes wrong.',
  },
  {
    flag: '"This price is only good today"',
    why: 'Real roofing quotes are good for 30+ days. Pressure tactics force sign-on-the-spot decisions to avoid you discovering inflated pricing or unlicensed status.',
  },
  {
    flag: 'Asks for a large deposit (>15%) before any materials are delivered',
    why: 'Reputable Charlotte roofers ask for 0–10% to start, with most due on delivery and completion. Large deposits often disappear with the contractor.',
  },
  {
    flag: 'Cannot show NC GC license number',
    why: 'NC requires a General Contractor license for work over $30,000. Verify at ncbelb.org/licensee/search.',
  },
  {
    flag: 'Says insurance "always" pays for full replacement',
    why: 'Storm-damage insurance claims depend on documented damage and the 25% rule. Anyone promising guaranteed full replacement is misrepresenting how claims work.',
  },
  {
    flag: 'Wants to climb your roof and "discover" damage you did not know about',
    why: 'Insurance fraud red flag. Honest roofers document existing damage with photos and never fabricate or expand damage to inflate a claim.',
  },
  {
    flag: 'Cannot produce manufacturer certification documents',
    why: 'Certified-installer status is required to issue extended manufacturer warranties (e.g., GAF Golden Pledge). Verify directly on gaf.com, certainteed.com, owenscorning.com.',
  },
  {
    flag: 'Refuses to put quote and warranty in writing',
    why: 'Verbal-only contracts are not enforceable for material warranties or workmanship guarantees. Always require written, signed documentation.',
  },
  {
    flag: 'Brand-new business with no reviews',
    why: 'Storm chasers form LLCs after each major event. Look for 3+ years of reviews with photos, and search the Mecklenburg County business registration date.',
  },
  {
    flag: 'Disposes of "damaged" shingles before insurance adjuster sees them',
    why: 'Insurance adjusters need to see and document damage to approve a claim. Disposing of evidence before inspection is fraud and can void your claim.',
  },
];

const verificationSteps = [
  'Ask for the NC General Contractor license number and verify it on ncbelb.org/licensee/search',
  'Look up the company on bbb.org/us/nc/charlotte and check accreditation, rating, and complaint history',
  'Verify manufacturer certifications on gaf.com/find-a-roofer, certainteed.com/findapro, or owenscorning.com/roofing/contractor',
  'Request a current Certificate of Insurance for general liability and workers compensation',
  'Drive to the listed business address and confirm it is a real office, not a virtual mailbox',
  'Read 20+ Google reviews with photos and check that they span at least 2 years',
  'Require a written, itemized estimate listing material brand and SKU, square footage, tear-off, decking allowance, and warranty terms',
];

const followUpFAQs = [
  {
    question: 'How do I check if a Charlotte roofer is licensed?',
    answer:
      'Visit ncbelb.org/licensee/search and enter the company name or license number. NC requires a General Contractor license for any roofing project over $30,000. Best Roofing Now holds NC General Contractor License #87344, which is publicly verifiable.',
  },
  {
    question: 'What insurance should a Charlotte roofer carry?',
    answer:
      'A reputable Charlotte roofer must carry both general liability insurance (typically $1M minimum) and workers compensation insurance for every employee on your roof. Ask for a current Certificate of Insurance (COI) listing your name and address as Certificate Holder. If a contractor cannot produce a COI dated within the last 12 months, walk away.',
  },
  {
    question: 'What is a roofing storm chaser?',
    answer:
      'A storm chaser is an out-of-state contractor who follows hail and wind events, signs as many homeowners as possible, then leaves before warranty work is needed. Storm chasers commonly target Charlotte after major weather events. Red flags include unmarked vehicles, license plates from other states, urgency tactics, and no permanent local address.',
  },
  {
    question: 'How can I report a dishonest roofer in Charlotte NC?',
    answer:
      'File a complaint with: the NC Licensing Board for General Contractors at ncbelb.org/file-a-complaint, the BBB at bbb.org, the NC Attorney General at ncdoj.gov/file-a-complaint, and the Charlotte/Mecklenburg County Code Enforcement office. If contractor fraud caused property damage, also file a police report.',
  },
  {
    question: 'Should I get multiple roofing estimates?',
    answer:
      'Yes. Best practice is 3 written estimates from 3 different licensed Charlotte roofers. Pricing should fall within roughly 20% of each other; if one is dramatically higher or lower, ask for itemization to understand why. Beware quotes that include only a single line-item ("complete roof replacement: $X") without breakdown.',
  },
];

export const metadata: Metadata = {
  title: 'How to Tell if a Roofer Is Lying (10 Red Flags + Verify)',
  description:
    "10 verifiable red flags that mean a Charlotte roofer is lying — plus a 7-step verification checklist with official NC license, BBB, and manufacturer cert lookups.",
  keywords: [
    'how to tell if a roofer is lying',
    'how to spot a dishonest roofer',
    'roofing scam red flags',
    'storm chaser roofer charlotte',
    'verify roofer license nc',
    'roofing fraud charlotte',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'How to Tell if a Roofer Is Lying — 10 Red Flags & Verification Checklist',
    description: 'Spot dishonest roofers fast. 10 red flags + 7-step verification using NC license, BBB, and manufacturer cert databases.',
    url: PAGE_URL,
    type: 'article',
  },
};

export default function HowToTellIfRooferIsLyingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'How to Tell if a Roofer Is Lying', url: PAGE_URL },
        ]}
      />
      <WebPageSchema
        name="How to Tell if a Roofer Is Lying (10 Red Flags + Verify)"
        description="10 verifiable red flags + 7-step verification checklist using NC license, BBB, and manufacturer cert lookups."
        url={PAGE_URL}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'How to Tell if a Roofer Is Lying', url: PAGE_URL },
        ]}
      />
      <QAPageSchema question={QUESTION} answer={ANSWER} />
      <FAQSchema faqs={followUpFAQs} />
      <HowToSchema
        title="How to Verify a Charlotte NC Roofer Is Legitimate"
        description="Seven steps Charlotte homeowners can take to verify a roofer's license, insurance, certifications, and reputation before signing any contract."
        steps={verificationSteps}
        totalTime="PT30M"
      />
      <SpeakableContent />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/how-to-tell-if-roofer-is-lying`}
        pageName="How to Tell if a Roofer Is Lying"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <FeaturedSnippetListAnswerSchema
        question={QUESTION}
        directAnswer={ANSWER}
        items={[
          'Verify NC general contractor license at the NC Licensing Board for General Contractors',
          'Demand certificate of insurance directly from the carrier (not just a faxed copy)',
          'Check BBB accreditation status and read complaint history',
          'Verify manufacturer certifications directly with GAF, CertainTeed, or Owens Corning',
          'Refuse pressure to sign on the spot — legitimate contractors give you time to review',
          'Demand written estimates with itemized line items, not lump-sum prices',
          'Reject offers to "cover" or "rebate" your insurance deductible (illegal under N.C. Gen. Stat. §58-24-10)',
          'Check Google reviews carefully — look for patterns of unreasonable complaints, not isolated bad reviews',
        ]}
        pageUrl={`${SITE_CONFIG.url}/how-to-tell-if-roofer-is-lying`}
      />
      <FreeInspectionOfferSchema />

      {/* Hero */}
      <section className="bg-gradient-to-br from-red-700 via-red-700 to-red-900 text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'How to Tell if a Roofer Is Lying' }]}
            className="mb-4 text-white/70"
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-yellow-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Charlotte NC Homeowner Verification Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              How to Tell if a Roofer Is Lying
            </h1>
            <p className="speakable-intro text-xl text-white/90 mb-6">
              {ANSWER}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Get an Honest Free Estimate
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-red-700"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              10 Red Flags Your Roofer Is Lying
            </h2>
            <ol className="space-y-4">
              {redFlags.map((rf, idx) => (
                <li
                  key={rf.flag}
                  className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5 flex items-start gap-4"
                >
                  <span className="text-red-600 font-bold text-lg flex-shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-bold text-slate-900">{rf.flag}</p>
                    <p className="text-slate-700 mt-1 text-sm">{rf.why}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Verification Steps */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 mb-3">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold uppercase tracking-wide">7-Step Verification</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                How to Verify Any Charlotte NC Roofer (in 30 Minutes)
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Do these 7 things before you sign anything. They are free, take about 30 minutes,
                and rule out the vast majority of dishonest roofers.
              </p>
            </div>
            <ol className="space-y-3">
              {verificationSteps.map((step, idx) => (
                <li
                  key={step}
                  className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex items-start gap-4"
                >
                  <span className="w-9 h-9 rounded-full bg-primary text-white font-bold flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-slate-800 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              Follow-up Questions
            </h2>
            <div className="space-y-4">
              {followUpFAQs.map((faq) => (
                <details
                  key={faq.question}
                  className="bg-slate-50 rounded-xl p-5 border border-slate-200 group"
                >
                  <summary className="font-bold text-dark cursor-pointer list-none flex items-start justify-between gap-4">
                    <span>{faq.question}</span>
                    <span
                      className="text-primary transition-transform group-open:rotate-45 text-2xl leading-none"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="text-gray-700 mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20 text-center">
              <p className="text-slate-800 mb-3">
                <strong>Want a contractor that passes all 7 verification steps?</strong> Best
                Roofing Now is NC GC License #87344, BBB A+ accredited, GAF and CertainTeed certified,
                veteran-owned, and based at 10130 Mallard Creek Rd in Charlotte. Verify us yourself.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                See our credentials &amp; team
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CitationFacts city="Charlotte" state="NC" />

      <MoneyPagesLinkBlock
        title="Charlotte Roofing Services from a Verified, Licensed Contractor"
        subtitle="NC GC License #87344 • BBB A+ • Veteran-Owned • 5.0 Google Rating"
        maxLinks={9}
      />

      <CTASection
        title="Get an Honest Estimate from a Verified Charlotte Roofer"
        subtitle="Same-day inspections, written quotes with full itemization, no pressure to sign on the spot. The fact that you found this page means you already have great instincts — let us prove ours match."
      />
    </>
  );
}
