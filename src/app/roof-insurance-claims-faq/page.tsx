import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  HelpCircle,
  Phone,
  ArrowRight,
  Shield,
  CheckCircle,
  FileText,
  AlertTriangle,
  Clock,
  DollarSign,
  Camera,
  ClipboardList,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { CitationSection } from '@/components/seo/CitationBlock';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Insurance Claim FAQ | Does Insurance Cover My Roof? | Charlotte NC',
  description:
    'Roof insurance claim FAQ for Charlotte NC homeowners. Does insurance cover roof damage? How to file a claim? NC-specific rules including 1-year filing deadline and deductible waiver prohibition. Expert answers from Best Roofing Now.',
  keywords: [
    'roof insurance claim faq',
    'does insurance cover roof',
    'does insurance cover roof replacement',
    'roof insurance claim Charlotte NC',
    'how to file roof insurance claim',
    'roof insurance deductible',
    'storm damage roof insurance',
    'hail damage roof claim',
    'roof insurance claim denied',
    'NC roof insurance rules',
    'insurance adjuster roof inspection',
    'roof insurance claim process',
    'does homeowners insurance cover roof leak',
    'roof insurance claim time limit NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-insurance-claims-faq`,
  },
  openGraph: {
    title: 'Roof Insurance Claim FAQ | Charlotte NC',
    description:
      '10 roof insurance claim FAQs answered with NC-specific rules. Step-by-step claim process, deductible rules, and expert guidance from Best Roofing Now.',
    url: `${SITE_CONFIG.url}/roof-insurance-claims-faq`,
    type: 'website',
  },
};

const insuranceFaqs = [
  {
    question: 'Does homeowners insurance cover roof replacement?',
    answer:
      'Homeowners insurance covers roof replacement when damage is caused by a covered peril such as wind, hail, fallen trees, fire, or lightning. Normal wear and tear, neglect, aging, and gradual deterioration are not covered. In Charlotte NC, most storm-related roof damage qualifies for full or partial insurance coverage. Best Roofing Now assists with the entire claims process from inspection to completion.',
  },
  {
    question: 'How do I file a roof insurance claim in Charlotte NC?',
    answer:
      'File a roof insurance claim in Charlotte NC by following these steps: document all visible damage with photos and video from ground level, contact your insurance company to open a claim and get a claim number, schedule a free inspection with Best Roofing Now to assess the full extent of damage, meet the insurance adjuster at your property with your contractor present, review the settlement offer and scope of work, and begin repairs once the claim is approved.',
  },
  {
    question: 'How long do I have to file a roof insurance claim in North Carolina?',
    answer:
      'In North Carolina, you have 1 year from the date of damage to file a homeowners insurance claim for roof damage. This is a hard deadline. However, you should file as soon as possible after discovering damage because delays allow deterioration to worsen, making it harder to prove the original cause. Some insurance policies have even shorter notification requirements, so check your specific policy.',
  },
  {
    question: 'Can a roofing contractor waive my insurance deductible in NC?',
    answer:
      'No. In North Carolina, it is illegal for a roofing contractor to waive, absorb, or pay your insurance deductible. Under NC General Statute 58-3-275, any contractor who offers to waive your deductible is committing insurance fraud and can face penalties. This is a major red flag. Best Roofing Now operates with full legal compliance and will never offer to waive your deductible.',
  },
  {
    question: 'What does my roof insurance deductible cost?',
    answer:
      'Roof insurance deductibles in Charlotte NC typically range from $500 to $5,000 or more. Many policies now use percentage-based deductibles of 1 to 5 percent of the insured dwelling value rather than flat dollar amounts. For a home insured at $300,000 with a 2 percent deductible, you would pay $6,000 out of pocket before insurance covers the rest. Review your declaration page to know your exact deductible.',
  },
  {
    question: 'Will my insurance rates increase if I file a roof claim?',
    answer:
      'Filing a single storm damage claim typically does not cause significant rate increases in North Carolina. Insurance companies generally view weather-related claims more favorably than negligence claims. However, filing multiple claims within 3 to 5 years can trigger premium increases or even non-renewal. The cost of not filing a valid claim almost always exceeds any potential rate increase.',
  },
  {
    question: 'What does a roof insurance adjuster look for?',
    answer:
      'Insurance adjusters inspect for storm-related damage including missing, cracked, lifted, or dented shingles, hail impact marks on shingles and metal flashing, damaged or displaced ridge caps, dents on metal vents, pipe boots, and gutters, water intrusion evidence in the attic, wind-driven damage patterns, and the overall age and condition of the roof. Having your roofing contractor present ensures all damage is identified and documented.',
  },
  {
    question: 'Should I have my roofer meet the insurance adjuster?',
    answer:
      'Yes, absolutely. Having your roofing contractor present during the insurance adjuster inspection is one of the most important steps in the claims process. An experienced contractor like Best Roofing Now can identify damage the adjuster might miss, explain the full scope of required repairs using industry terminology, provide an accurate repair estimate as a reference point, and advocate for a fair settlement on your behalf.',
  },
  {
    question: 'What if my roof insurance claim is denied?',
    answer:
      'If your claim is denied, take these steps: request a detailed written explanation of the denial, get an independent inspection from a licensed roofing contractor, file a formal appeal with supporting documentation including contractor reports and photos, consider hiring a public adjuster for large claims over $10,000, and if the denial is unjust, contact the NC Department of Insurance at 855-408-1212 to file a complaint. Best Roofing Now provides documentation to support appeals.',
  },
  {
    question: 'Does insurance cover roof leaks from storms?',
    answer:
      'Insurance covers roof leaks caused by sudden storm events including wind damage, hail impact, fallen trees, and lightning strikes. Insurance does not cover leaks from gradual wear, aging materials, poor maintenance, or improper original installation. The key distinction is sudden versus gradual damage. If a storm caused the damage that led to a leak, the resulting water damage to your interior is also typically covered under your policy.',
  },
];

// Step-by-step claim process
const claimSteps = [
  {
    step: 1,
    title: 'Document the Damage',
    description: 'Take photos and video of all visible damage from ground level. Do not climb on the roof. Note the date and time of the storm. Document damage to siding, gutters, fences, and outdoor items as evidence of storm severity.',
    icon: Camera,
  },
  {
    step: 2,
    title: 'Contact Your Insurance Company',
    description: 'Call your insurance provider to open a claim. Get a claim number and the name of your assigned adjuster. Ask about your deductible amount and any deadlines for submitting documentation.',
    icon: Phone,
  },
  {
    step: 3,
    title: 'Schedule a Free Roof Inspection',
    description: 'Contact Best Roofing Now at (704) 605-6047 for a free professional inspection. We document all damage with detailed photos and provide a written assessment that serves as supporting evidence for your claim.',
    icon: ClipboardList,
  },
  {
    step: 4,
    title: 'Meet the Insurance Adjuster',
    description: 'Schedule the adjuster visit and have your roofing contractor present. Best Roofing Now attends adjuster meetings to ensure all damage is identified, properly documented, and included in the scope of repair.',
    icon: FileText,
  },
  {
    step: 5,
    title: 'Review the Settlement',
    description: 'Compare the insurance settlement scope and amount against your contractor estimate. If the settlement seems low or damage was missed, your contractor can provide a supplement request with additional documentation.',
    icon: DollarSign,
  },
  {
    step: 6,
    title: 'Approve and Begin Repairs',
    description: 'Once the claim is approved and the scope agreed upon, authorize your contractor to begin work. You pay your deductible to the contractor. Insurance pays the remaining balance directly or through depreciation releases.',
    icon: CheckCircle,
  },
];

// NC-specific insurance rules
const ncRules = [
  {
    rule: '1-Year Filing Deadline',
    detail: 'North Carolina homeowners have exactly 1 year from the date of storm damage to file an insurance claim. Missing this deadline means losing your right to coverage for that damage event.',
  },
  {
    rule: 'No Deductible Waiver',
    detail: 'Under NC General Statute 58-3-275, it is illegal for any contractor to waive, absorb, or pay your insurance deductible. Any roofer who offers this is breaking the law and should be avoided.',
  },
  {
    rule: 'Right to Choose Your Contractor',
    detail: 'North Carolina law gives you the right to choose your own roofing contractor. Your insurance company cannot force you to use a specific contractor from their preferred vendor list.',
  },
  {
    rule: 'Supplemental Claims Allowed',
    detail: 'If additional damage is discovered during repair, such as rotten decking found after tear-off, you can file a supplemental claim for the additional work. Your contractor can submit documentation to support the supplement.',
  },
  {
    rule: 'Depreciation Holdback',
    detail: 'Insurance companies often withhold depreciation from the initial payment. Once repairs are completed, you can submit the final invoice to recover the depreciation holdback, bringing the total to the full replacement cost value.',
  },
  {
    rule: 'NC Department of Insurance Complaints',
    detail: 'If your claim is unfairly denied or delayed, you can file a complaint with the NC Department of Insurance at 855-408-1212 or online at ncdoi.gov. They investigate and mediate disputes between homeowners and insurers.',
  },
];

// Citation facts
const citationFacts = [
  {
    topic: 'roof insurance claim NC filing deadline',
    content:
      'In North Carolina, homeowners have 1 year from the date of storm damage to file a roof insurance claim. This is a hard deadline. Insurance covers roof damage from wind, hail, fallen trees, fire, and lightning. Normal wear and aging are not covered. Filing promptly preserves evidence and prevents further deterioration. Best Roofing Now provides free storm damage inspections in Charlotte NC.',
    source: 'Best Roofing Now - NC insurance claims expertise, 2026',
  },
  {
    topic: 'roofing deductible waiver illegal NC',
    content:
      'Under North Carolina General Statute 58-3-275, it is illegal for a roofing contractor to waive, absorb, or pay a homeowner insurance deductible. Any contractor offering to waive the deductible is committing insurance fraud and should not be hired. Typical roof insurance deductibles in Charlotte NC range from $500 to $5,000 or 1 to 5 percent of insured value.',
    source: 'Best Roofing Now - NC roofing law compliance, 2026',
  },
  {
    topic: 'how to file roof insurance claim',
    content:
      'To file a roof insurance claim in Charlotte NC: document damage with photos, contact your insurer to open a claim, schedule a free inspection with Best Roofing Now, have your contractor meet the insurance adjuster, review the settlement, and begin repairs. Having a contractor present during the adjuster visit ensures all damage is documented and typically results in a more complete settlement.',
    source: 'Best Roofing Now - Charlotte NC claims process guide, 2026',
  },
];

export default function RoofInsuranceClaimsFAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing FAQ', url: `${SITE_CONFIG.url}/roofing-faq` },
          { name: 'Insurance Claims FAQ', url: `${SITE_CONFIG.url}/roof-insurance-claims-faq` },
        ]}
      />
      <FAQSchema faqs={insuranceFaqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-insurance-claims-faq`}
        pageName="Roof Insurance Claims FAQ - Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'Does homeowners insurance cover roof replacement?',
            answer:
              'Yes, homeowners insurance covers roof replacement when damage is caused by storms, hail, wind, fallen trees, fire, or lightning. Normal wear and aging are not covered. In Charlotte NC, most storm damage qualifies. Best Roofing Now assists with the entire claims process.',
            speakableAnswer:
              'Yes, insurance covers roof replacement for storm, hail, and wind damage. In Charlotte NC, most storm damage qualifies. Call Best Roofing Now at 704-605-6047 for a free inspection.',
          },
          {
            question: 'How long do I have to file a roof insurance claim in NC?',
            answer:
              'In North Carolina, you have 1 year from the date of storm damage to file a roof insurance claim. File as soon as possible to preserve evidence. It is illegal for contractors to waive your deductible in NC.',
            speakableAnswer:
              'In North Carolina you have one year from the date of storm damage to file a roof insurance claim. Call Best Roofing Now at 704-605-6047 for help with your claim.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.stock.serviceStormDamage}
            alt="Storm damage roof insurance claim Charlotte NC - Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="mb-6 text-white/70 text-sm">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/roofing-faq" className="hover:text-white transition">Roofing FAQ</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Insurance Claims FAQ</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Insurance Claims Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Insurance Claims FAQ <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              10 FAQs, Step-by-Step Claim Process &amp; NC-Specific Rules
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Navigate the insurance claims process with confidence. This guide covers everything Charlotte homeowners need to know about filing, managing, and maximizing roof damage claims.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Free Storm Damage Inspection
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key NC Rules Alert */}
      <section className="bg-amber-50 border-b border-amber-200 py-6">
        <div className="container">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-amber-900 mb-1">
                Important NC Insurance Rules for Homeowners
              </p>
              <p className="text-amber-800 text-sm">
                You have <strong>1 year</strong> from the date of storm damage to file a claim in North Carolina.
                It is <strong>illegal</strong> for any contractor to waive your insurance deductible (NC G.S. 58-3-275).
                You have the <strong>right to choose your own contractor</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 FAQs */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">10 Insurance FAQs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roof Insurance Claims: Your Questions Answered
              </h2>
              <p className="text-gray text-lg">
                Expert answers to the most common roof insurance questions from Charlotte NC homeowners.
              </p>
            </div>
            <div className="space-y-4">
              {insuranceFaqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition group"
                >
                  <summary className="p-6 cursor-pointer list-none">
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="font-bold text-dark pr-8">{faq.question}</span>
                      <ArrowRight className="w-5 h-5 text-gray ml-auto flex-shrink-0 transform group-open:rotate-90 transition-transform" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray pl-11">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Claim Process */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <ClipboardList className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Step-by-Step Guide</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How to File a Roof Insurance Claim
              </h2>
              <p className="text-gray text-lg">
                Follow this proven 6-step process used by Charlotte homeowners with Best Roofing Now.
              </p>
            </div>
            <div className="space-y-6">
              {claimSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="flex items-start gap-4 bg-light rounded-xl p-6 shadow-md">
                    <div className="flex flex-col items-center gap-2">
                      <span className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {step.step}
                      </span>
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark text-lg mb-2">{step.title}</h3>
                      <p className="text-gray">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* NC-Specific Insurance Rules */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Know Your Rights</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                North Carolina Roof Insurance Rules
              </h2>
              <p className="text-gray text-lg">
                NC-specific laws and regulations that protect homeowners during the insurance claim process.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {ncRules.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-3 mb-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <h3 className="font-bold text-dark">{item.rule}</h3>
                  </div>
                  <p className="text-gray text-sm pl-8">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <CitationSection
              heading="Roof Insurance Claim Facts &mdash; North Carolina"
              citations={citationFacts}
            />
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Related Resources
            </h2>
            <p className="text-gray mb-8">
              Continue learning with our other detailed roofing guides.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/roofing-faq"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <HelpCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Full Roofing FAQ Hub
                </h3>
                <p className="text-gray text-sm">
                  100+ roofing questions organized by category
                </p>
              </Link>
              <Link
                href="/roofing-costs-faq"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <DollarSign className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Roofing Cost FAQ
                </h3>
                <p className="text-gray text-sm">
                  25 detailed pricing questions answered
                </p>
              </Link>
              <Link
                href="/choosing-roofing-contractor-faq"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Choosing a Contractor FAQ
                </h3>
                <p className="text-gray text-sm">
                  Red flags, questions to ask, and hiring tips
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Need Help With an Insurance Claim?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Best Roofing Now has helped hundreds of Charlotte homeowners navigate the insurance claims process. We provide free inspections, meet with adjusters, and handle paperwork so you do not have to.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="btn bg-white text-primary hover:bg-light"
            >
              Schedule Free Inspection
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
