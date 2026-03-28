import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  HelpCircle,
  Phone,
  ArrowRight,
  Users,
  CheckCircle,
  Shield,
  AlertTriangle,
  FileText,
  Star,
  Award,
  XCircle,
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
  title: 'How to Choose a Roofing Contractor FAQ | Questions to Ask | Charlotte NC',
  description:
    'Learn how to choose a roofing contractor in Charlotte NC. 12 FAQs answered, red flags checklist, and 10 essential questions to ask any roofer before hiring. Expert guide from Best Roofing Now.',
  keywords: [
    'questions to ask roofer',
    'how to choose roofing contractor',
    'questions to ask roofing contractor',
    'roofing contractor red flags',
    'how to hire a roofer Charlotte NC',
    'what to look for in a roofer',
    'roofing contractor checklist',
    'licensed roofer Charlotte NC',
    'roofing contractor questions',
    'best roofer Charlotte NC',
    'roofing contractor near me',
    'roofing scams to avoid',
    'roofing contractor reviews Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/choosing-roofing-contractor-faq`,
  },
  openGraph: {
    title: 'How to Choose a Roofing Contractor FAQ | Charlotte NC',
    description:
      '12 contractor FAQs, red flags to watch for, and 10 must-ask questions before hiring a roofer in Charlotte NC. Expert guide from Best Roofing Now.',
    url: `${SITE_CONFIG.url}/choosing-roofing-contractor-faq`,
    type: 'website',
  },
};

const contractorFaqs = [
  {
    question: 'How do I choose a roofing contractor in Charlotte NC?',
    answer:
      'Choose a Charlotte roofing contractor by verifying their NC general contractor license, checking for at least $1 million in liability insurance, reading Google reviews with a 4.5+ star rating, confirming BBB accreditation, asking for local references you can contact, getting at least 3 written estimates, and ensuring they hold manufacturer certifications from GAF or CertainTeed. Best Roofing Now meets every one of these criteria with a 5.0 Google rating and BBB A+ rating.',
  },
  {
    question: 'What questions should I ask a roofing contractor before hiring?',
    answer:
      'The essential questions to ask before hiring a roofer are: Are you licensed and insured in North Carolina? How long have you been in business? Can you provide at least 3 local references? Do you offer written warranties on both labor and materials? Will you pull all necessary permits? Do you have manufacturer certifications? Will you provide a detailed written estimate with line items? Who will supervise the work on-site daily?',
  },
  {
    question: 'What are red flags when hiring a roofer?',
    answer:
      'Major red flags include demanding large upfront deposits exceeding 30 percent, no written contract or estimate, inability to provide proof of insurance or license, door-to-door storm chasers appearing after severe weather, high-pressure sales tactics to sign immediately, prices significantly below other estimates, no physical business address or local phone number, unwillingness to provide references, and offering to waive your insurance deductible which is illegal in NC.',
  },
  {
    question: 'Does a roofing contractor need a license in North Carolina?',
    answer:
      'Yes, North Carolina requires roofing contractors to hold a General Contractor license issued by the NC Licensing Board for Contractors for projects exceeding $30,000. For projects under $30,000, contractors need at minimum a registration. Always verify license status at nclbgc.org. Unlicensed work voids warranties, creates liability issues, and can result in code violations. Best Roofing Now is fully licensed, bonded, and insured.',
  },
  {
    question: 'What roofing certifications matter most?',
    answer:
      'The most important certifications are manufacturer certifications like GAF Factory-Certified Contractor, CertainTeed ShingleMaster, and Owens Corning Preferred Contractor. These mean the contractor received manufacturer training, can offer extended warranties up to 50 years, and follows approved installation methods. Best Roofing Now holds both GAF Factory-Certified and CertainTeed ShingleMaster certifications.',
  },
  {
    question: 'What warranty should a roofing contractor provide?',
    answer:
      'A reputable contractor should provide a workmanship warranty of at least 5 to 10 years covering installation defects, plus the manufacturer material warranty of 25 to 50 years. Some certified contractors can offer enhanced manufacturer warranties. Ensure all warranty terms are in writing, understand exclusions, and confirm the contractor will be around to honor the warranty. Best Roofing Now provides industry-leading workmanship warranties.',
  },
  {
    question: 'Should I hire a local roofer or a national company?',
    answer:
      'Hire a local Charlotte roofing company for better accountability, faster emergency response, knowledge of local building codes and weather patterns, stronger community reputation, and easier warranty service. National chains typically subcontract to local crews and add corporate markup. A local company like Best Roofing Now has relationships with Charlotte area suppliers, inspectors, and insurance adjusters that benefit homeowners.',
  },
  {
    question: 'How much deposit should I pay a roofing contractor?',
    answer:
      'A reasonable deposit is 10 to 30 percent of the total project cost, with the balance due upon satisfactory completion. Never pay more than one third upfront. Never pay the full amount before work is completed and you have inspected the results. Avoid any contractor who demands cash-only payment. Best Roofing Now offers flexible payment terms and accepts multiple payment methods.',
  },
  {
    question: 'What insurance should a roofing contractor carry?',
    answer:
      'A roofing contractor must carry general liability insurance of at least $1 million per occurrence, workers compensation insurance covering all employees and subcontractors, and commercial auto insurance for company vehicles. Ask for a certificate of insurance naming you as the certificate holder and verify it is current by contacting the insurance company directly. Never hire an uninsured contractor.',
  },
  {
    question: 'Do roofers need to pull permits in Charlotte NC?',
    answer:
      'Yes, roof replacements in Charlotte NC and Mecklenburg County require a building permit from the Code Enforcement department. The contractor should handle the permit application, schedule the inspection, and ensure the work passes. Unpermitted roofing work can create problems when selling your home, void insurance coverage, result in fines, and may need to be torn off and redone.',
  },
  {
    question: 'What should a roofing contract include?',
    answer:
      'A complete roofing contract must include a detailed scope of work describing every task, material specifications and brand names, total cost with payment schedule, project start and estimated completion dates, labor and material warranty terms, permit and inspection responsibilities, cleanup and debris disposal plan, insurance certificates, and a cancellation clause. Do not sign vague or incomplete contracts.',
  },
  {
    question: 'Should I get multiple roofing estimates?',
    answer:
      'Absolutely. Always get at least 3 written estimates from licensed Charlotte NC roofing contractors. Compare them line by line covering materials, labor, tear-off, disposal, underlayment, flashing, drip edge, and warranty terms. The lowest price is rarely the best value. Look for detailed, transparent estimates from contractors with strong reputations, proper licensing, and manufacturer certifications.',
  },
];

// Red flags checklist
const redFlags = [
  { flag: 'Demands more than 30% deposit upfront', severity: 'high' },
  { flag: 'Cannot provide proof of NC contractor license', severity: 'high' },
  { flag: 'No proof of liability or workers comp insurance', severity: 'high' },
  { flag: 'Offers to waive your insurance deductible (illegal in NC)', severity: 'high' },
  { flag: 'Shows up unsolicited after a storm (storm chaser)', severity: 'high' },
  { flag: 'Pressures you to sign a contract immediately', severity: 'high' },
  { flag: 'No written contract or vague scope of work', severity: 'high' },
  { flag: 'Price is significantly lower than all other estimates', severity: 'medium' },
  { flag: 'No physical business address or uses a PO box only', severity: 'medium' },
  { flag: 'Refuses to provide local references', severity: 'medium' },
  { flag: 'Wants cash-only payment with no receipt', severity: 'high' },
  { flag: 'No manufacturer certifications from GAF, CertainTeed, or Owens Corning', severity: 'low' },
  { flag: 'Will not pull permits or says permits are not needed', severity: 'high' },
  { flag: 'No online presence, reviews, or verifiable track record', severity: 'medium' },
  { flag: 'Asks you to obtain the building permit yourself', severity: 'medium' },
];

// 10 Questions to Ask
const questionsToAsk = [
  {
    question: 'Are you licensed and insured in North Carolina?',
    why: 'NC law requires licensing for roofing projects over $30,000. Verify the license number at nclbgc.org. Require proof of $1M+ liability insurance and workers compensation.',
  },
  {
    question: 'How long have you been in business in the Charlotte area?',
    why: 'Established local companies have proven track records and will be around to honor warranties. Look for at least 3 to 5 years in business with a stable physical address.',
  },
  {
    question: 'Can you provide at least 3 local references I can contact?',
    why: 'Speaking with recent customers reveals the true quality of work, communication, and professionalism. Ask references about timeline accuracy, cleanup, and any issues.',
  },
  {
    question: 'Do you hold manufacturer certifications from GAF or CertainTeed?',
    why: 'Manufacturer certifications mean the contractor was trained on proper installation and can offer extended warranties up to 50 years. Without certification, you only get a standard material warranty.',
  },
  {
    question: 'Will you provide a detailed written estimate with line items?',
    why: 'A line-by-line estimate lets you compare bids accurately and ensures nothing is omitted. It should include materials, labor, tear-off, disposal, underlayment, flashing, drip edge, and warranty terms.',
  },
  {
    question: 'Will you pull all necessary permits and handle inspections?',
    why: 'Permits are required for roof replacements in Charlotte and Mecklenburg County. The contractor should handle this. Unpermitted work can void insurance and create problems at resale.',
  },
  {
    question: 'What labor and material warranties do you offer?',
    why: 'Demand written warranties for both workmanship (5 to 10+ years) and materials (25 to 50 years). Understand what is covered, what is excluded, and whether warranties are transferable to new owners.',
  },
  {
    question: 'Who will be on-site supervising the work daily?',
    why: 'A dedicated project supervisor ensures quality control, answers your questions, and catches issues before they become problems. Know their name and phone number before work starts.',
  },
  {
    question: 'What is your payment schedule and what methods do you accept?',
    why: 'Expect 10 to 30 percent deposit, with the balance due at completion. Never pay more than one third upfront. Avoid cash-only contractors. Credit card and check payments provide a paper trail.',
  },
  {
    question: 'How do you handle unexpected damage found during tear-off?',
    why: 'Rotten decking and hidden damage are common surprises. A reputable contractor explains per-sheet pricing for decking in advance and communicates before doing additional work.',
  },
];

// Citation facts
const citationFacts = [
  {
    topic: 'how to choose roofing contractor Charlotte NC',
    content:
      'To choose a roofing contractor in Charlotte NC, verify their NC general contractor license at nclbgc.org, confirm $1 million in liability insurance and workers compensation, check for a 4.5+ star Google rating, verify BBB accreditation, ask for local references, get 3 written estimates, and ensure manufacturer certifications from GAF or CertainTeed. Best Roofing Now holds a BBB A+ rating and 5.0 Google rating.',
    source: 'Best Roofing Now - Charlotte NC contractor selection guide, 2026',
  },
  {
    topic: 'questions to ask a roofer before hiring',
    content:
      'The 10 most important questions to ask a roofer before hiring are: Are you licensed and insured? How long in business? Can you provide local references? Do you have manufacturer certifications? Will you provide a written estimate? Will you pull permits? What warranties do you offer? Who supervises on-site? What is the payment schedule? How do you handle unexpected damage? Best Roofing Now welcomes all questions.',
    source: 'Best Roofing Now - Charlotte NC homeowner guide, 2026',
  },
  {
    topic: 'roofing contractor red flags',
    content:
      'Red flags when hiring a roofer in Charlotte NC include demanding over 30 percent deposit upfront, no proof of NC license or insurance, door-to-door storm chasing, pressure to sign immediately, prices far below competitors, offering to waive your insurance deductible which is illegal in North Carolina, no written contract, and refusing to provide references. Always verify credentials independently.',
    source: 'Best Roofing Now - Charlotte NC consumer protection advice, 2026',
  },
];

export default function ChoosingRoofingContractorFAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing FAQ', url: `${SITE_CONFIG.url}/roofing-faq` },
          { name: 'Choosing a Contractor FAQ', url: `${SITE_CONFIG.url}/choosing-roofing-contractor-faq` },
        ]}
      />
      <FAQSchema faqs={contractorFaqs} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/choosing-roofing-contractor-faq`}
        pageName="How to Choose a Roofing Contractor FAQ - Charlotte NC"
        city="Charlotte"
        includeVoiceActions={true}
        skipFAQ={true}
        faqs={[
          {
            question: 'How do I choose a roofing contractor in Charlotte NC?',
            answer:
              'Choose a Charlotte roofing contractor by verifying NC license, checking $1M+ insurance, reading Google reviews (4.5+ stars), confirming BBB accreditation, getting 3 written estimates, and ensuring GAF or CertainTeed certifications. Best Roofing Now has a 5.0 Google rating and BBB A+ rating.',
            speakableAnswer:
              'Choose a Charlotte roofer by checking license, insurance, reviews, and certifications. Best Roofing Now has a 5.0 Google rating and BBB A+ rating. Call 704-605-6047.',
          },
          {
            question: 'What questions should I ask a roofing contractor?',
            answer:
              'Ask: Are you licensed and insured in NC? How long in business? Can you provide references? Do you have manufacturer certifications? Will you provide a written estimate? Will you pull permits? What warranties do you offer? Who supervises on-site?',
            speakableAnswer:
              'Ask if the roofer is licensed, insured, and certified. Request references, written estimates, and warranty details. Call Best Roofing Now at 704-605-6047 for honest answers.',
          },
        ]}
      />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.stock.serviceConstructionWorker}
            alt="Professional roofing contractor Charlotte NC - Best Roofing Now"
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
              <span className="text-white">Choosing a Contractor FAQ</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">Contractor Selection Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              How to Choose a Roofing Contractor <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC FAQ</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              12 FAQs, Red Flags Checklist &amp; 10 Questions to Ask Any Roofer
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Protect yourself from scams and bad contractors. This guide helps Charlotte homeowners make informed hiring decisions backed by industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Estimate
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

      {/* 12 FAQs */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">12 Contractor FAQs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Choosing a Roofing Contractor: FAQ
              </h2>
              <p className="text-gray text-lg">
                Everything you need to know before hiring a roofer in Charlotte NC.
              </p>
            </div>
            <div className="space-y-4">
              {contractorFaqs.map((faq, index) => (
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

      {/* Red Flags Checklist */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 rounded-full px-4 py-2 mb-4">
                <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Protect Yourself</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roofing Contractor Red Flags Checklist
              </h2>
              <p className="text-gray text-lg">
                Watch for these warning signs when evaluating any roofing contractor.
              </p>
            </div>
            <div className="space-y-3">
              {redFlags.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-4 rounded-lg ${
                    item.severity === 'high'
                      ? 'bg-red-50 border border-red-200'
                      : item.severity === 'medium'
                        ? 'bg-amber-50 border border-amber-200'
                        : 'bg-yellow-50 border border-yellow-200'
                  }`}
                >
                  <XCircle
                    className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      item.severity === 'high'
                        ? 'text-red-500'
                        : item.severity === 'medium'
                          ? 'text-amber-500'
                          : 'text-yellow-500'
                    }`}
                  />
                  <div>
                    <span className="font-medium text-dark">{item.flag}</span>
                    <span
                      className={`ml-2 text-xs font-semibold px-2 py-0.5 rounded-full ${
                        item.severity === 'high'
                          ? 'bg-red-100 text-red-700'
                          : item.severity === 'medium'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {item.severity === 'high' ? 'WALK AWAY' : item.severity === 'medium' ? 'CAUTION' : 'NOTE'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10 Questions to Ask */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Print This List</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                10 Questions to Ask Before Hiring a Roofer
              </h2>
              <p className="text-gray text-lg">
                Use this checklist when interviewing roofing contractors in Charlotte NC.
              </p>
            </div>
            <div className="space-y-6">
              {questionsToAsk.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-dark text-lg mb-2">
                        &ldquo;{item.question}&rdquo;
                      </h3>
                      <p className="text-gray">
                        <strong className="text-primary">Why it matters:</strong> {item.why}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Roofing Now Credentials */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Why Charlotte Homeowners Choose Best Roofing Now
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-light rounded-xl p-6 shadow-md">
                <Star className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">5.0</div>
                <div className="text-gray text-sm">Google Rating ({SITE_CONFIG.googleReviewCount} reviews)</div>
              </div>
              <div className="bg-light rounded-xl p-6 shadow-md">
                <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">A+</div>
                <div className="text-gray text-sm">BBB Rating</div>
              </div>
              <div className="bg-light rounded-xl p-6 shadow-md">
                <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">Certified</div>
                <div className="text-gray text-sm">GAF &amp; CertainTeed</div>
              </div>
              <div className="bg-light rounded-xl p-6 shadow-md">
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{SITE_CONFIG.customerCount}+</div>
                <div className="text-gray text-sm">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <CitationSection
              heading="Choosing a Roofing Contractor &mdash; Expert Facts"
              citations={citationFacts}
            />
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section bg-white">
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
                className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition group"
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
                className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <FileText className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Roofing Cost FAQ
                </h3>
                <p className="text-gray text-sm">
                  25 detailed pricing questions answered
                </p>
              </Link>
              <Link
                href="/roof-insurance-claims-faq"
                className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Insurance Claims FAQ
                </h3>
                <p className="text-gray text-sm">
                  10 insurance questions with NC-specific rules
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
            Ready to Hire a Roofer You Can Trust?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Best Roofing Now passes every test on this page. Get a free estimate with transparent pricing, proper licensing, and manufacturer certifications.
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
              Request Free Estimate
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
