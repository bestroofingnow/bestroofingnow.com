import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  XCircle,
  Shield,
  FileText,
  Star,
  AlertTriangle,
  Search,
  MessageSquare,
  Award,
  Users,
  DollarSign,
  Clock,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ArticleSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'How to Choose a Roofing Contractor Charlotte NC | 2026 Guide',
  description:
    'Expert guide to choosing a roofing contractor in Charlotte NC. Red flags to avoid, questions to ask, credentials to verify, and how to spot scams after storms.',
  keywords: [
    'how to choose roofing contractor Charlotte NC',
    'best roofing contractor Charlotte',
    'roofing contractor checklist Charlotte',
    'avoid roofing scams Charlotte NC',
    'roofing contractor questions Charlotte',
    'licensed roofer Charlotte NC',
    'roofing contractor credentials NC',
    'storm chaser roofers Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/how-to-choose-roofing-contractor-charlotte-nc`,
  },
  openGraph: {
    title: 'How to Choose a Roofing Contractor in Charlotte NC | Expert Guide',
    description:
      'Don\'t get scammed. Learn exactly what to look for when hiring a roofer in Charlotte.',
    url: `${SITE_CONFIG.url}/how-to-choose-roofing-contractor-charlotte-nc`,
    type: 'article',
  },
};

const contractorFAQs = [
  {
    question: 'What credentials should a Charlotte roofing contractor have?',
    answer:
      'At minimum: Valid NC General Contractor License, General Liability Insurance ($1M+), Workers Compensation Insurance, and a local business address. Better contractors also have manufacturer certifications (GAF Master Elite, CertainTeed SELECT, Owens Corning Preferred), BBB accreditation, and verifiable reviews on Google and other platforms.',
  },
  {
    question: 'How do I verify a roofing contractor\'s license in North Carolina?',
    answer:
      'Visit the NC Licensing Board website (nclbgc.org) and search by company name or license number. Any legitimate contractor will gladly provide their license number. If they hesitate or make excuses, that\'s a major red flag.',
  },
  {
    question: 'What are storm chaser roofers and why should I avoid them?',
    answer:
      'Storm chasers are out-of-state contractors who follow severe weather, going door-to-door after storms. They often use high-pressure tactics, demand large deposits, do substandard work, and disappear before problems surface. They won\'t be around for warranty claims. Always use local Charlotte contractors with established businesses.',
  },
  {
    question: 'How much deposit should I pay a roofing contractor?',
    answer:
      'Reputable Charlotte roofers typically require 10-30% deposit or payment for materials only. Never pay more than 50% upfront, and never pay in full before work is complete. Be wary of contractors demanding large cash deposits.',
  },
  {
    question: 'Should I get multiple roofing estimates in Charlotte?',
    answer:
      'Yes, get 3-5 estimates for comparison. But don\'t automatically choose the cheapest - compare scope of work, materials specified, warranty terms, and company credentials. The lowest bid often means cut corners or hidden costs later.',
  },
];

const greenFlags = [
  {
    icon: Shield,
    title: 'Proper Licensing & Insurance',
    description: 'NC contractor license, liability insurance ($1M+), and workers comp. Willing to show certificates.',
  },
  {
    icon: Award,
    title: 'Manufacturer Certifications',
    description: 'GAF Master Elite, CertainTeed SELECT, or Owens Corning Preferred Contractor status.',
  },
  {
    icon: Star,
    title: 'Strong Online Reviews',
    description: '4.5+ stars on Google with 50+ reviews. Consistent positive feedback over years.',
  },
  {
    icon: FileText,
    title: 'Detailed Written Estimates',
    description: 'Itemized quotes with materials, labor, timeline, and warranty terms clearly stated.',
  },
  {
    icon: Users,
    title: 'Local Presence',
    description: 'Physical office in Charlotte area, not just a PO Box. Been in business 5+ years locally.',
  },
  {
    icon: MessageSquare,
    title: 'Professional Communication',
    description: 'Returns calls promptly, answers questions thoroughly, doesn\'t pressure you to sign immediately.',
  },
];

const redFlags = [
  {
    title: 'Door-to-door after storms',
    description: 'Legitimate contractors don\'t need to knock on doors. They have enough referral business.',
  },
  {
    title: 'Demands large cash deposit',
    description: 'Especially if they want 50%+ upfront or insist on cash only. Scam indicator.',
  },
  {
    title: 'Offers to waive deductible',
    description: 'This is insurance fraud. Any contractor suggesting this should be avoided completely.',
  },
  {
    title: 'No physical address',
    description: 'Only has a cell phone and PO Box. No way to find them if problems arise.',
  },
  {
    title: 'Pressure to sign immediately',
    description: '"This price is only good today" or "I have a crew in the area right now."',
  },
  {
    title: 'Can\'t provide references',
    description: 'Legitimate contractors have happy customers willing to vouch for their work.',
  },
  {
    title: 'Unusually low bid',
    description: 'If one bid is 40%+ lower than others, they\'re cutting corners somewhere.',
  },
  {
    title: 'No written contract',
    description: 'Everything should be in writing. Verbal agreements offer no protection.',
  },
];

const questionsToAsk = [
  {
    question: 'How long have you been in business in Charlotte?',
    whyItMatters: 'Local track record matters. 5+ years shows stability.',
  },
  {
    question: 'Can I see your NC contractor license and insurance certificates?',
    whyItMatters: 'Protects you from liability if workers are injured on your property.',
  },
  {
    question: 'What manufacturer certifications do you hold?',
    whyItMatters: 'Certifications mean better training, materials access, and warranty options.',
  },
  {
    question: 'Do you use subcontractors or your own crew?',
    whyItMatters: 'Their own crews typically mean better quality control.',
  },
  {
    question: 'What warranty do you offer on labor?',
    whyItMatters: 'Manufacturer warranties cover materials; labor warranty covers installation.',
  },
  {
    question: 'Can you provide 3 recent local references?',
    whyItMatters: 'Talk to actual customers about their experience.',
  },
  {
    question: 'What is your payment schedule?',
    whyItMatters: 'Reasonable: deposit, progress payment, final on completion.',
  },
  {
    question: 'How do you handle unexpected issues discovered during work?',
    whyItMatters: 'Good contractors communicate before charging for additional work.',
  },
];

const verificationSteps = [
  {
    step: 1,
    title: 'Check NC Contractor License',
    action: 'Visit nclbgc.org and search by company name',
  },
  {
    step: 2,
    title: 'Verify Insurance',
    action: 'Request certificate of insurance; call the insurance company to confirm it\'s active',
  },
  {
    step: 3,
    title: 'Check BBB Rating',
    action: 'Search bbb.org for complaints and rating history',
  },
  {
    step: 4,
    title: 'Read Google Reviews',
    action: 'Look for patterns in reviews, both positive and negative',
  },
  {
    step: 5,
    title: 'Verify Manufacturer Certifications',
    action: 'Check manufacturer websites for certified contractor listings',
  },
  {
    step: 6,
    title: 'Call References',
    action: 'Ask about communication, quality, timeline, and any issues',
  },
];

export default function HowToChooseRoofingContractorPage() {
  const pageUrl = `${SITE_CONFIG.url}/how-to-choose-roofing-contractor-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="How to Choose a Roofing Contractor Charlotte NC"
        description="Expert guide to choosing a roofing contractor in Charlotte NC."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'How to Choose a Roofing Contractor', url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'How to Choose a Roofing Contractor', url: pageUrl },
        ]}
      />
      <ArticleSchema
        post={{
          title: 'How to Choose a Roofing Contractor in Charlotte NC',
          description: 'Complete guide to finding a trustworthy roofer in Charlotte.',
          slug: 'how-to-choose-roofing-contractor-charlotte-nc',
          datePublished: '2026-01-28',
          dateModified: '2026-01-28',
        }}
      />
      <FAQSchema faqs={contractorFAQs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={IMAGES.hero.hero25}
            alt="Professional roofing contractor Charlotte NC"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[{ label: 'How to Choose a Roofing Contractor' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Search className="w-4 h-4" />
              <span>Homeowner Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              How to Choose a Roofing Contractor in Charlotte NC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              Don&apos;t Get Scammed: The Complete 2026 Guide
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Learn exactly what credentials to verify, questions to ask, and red flags to avoid
              when hiring a roofer in Charlotte. Protect your home and your wallet.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                Talk to a Trusted Roofer
              </a>
              <EstimateButton
                className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Green Flags Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Signs of a Trustworthy Roofing Contractor
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Look for these positive indicators when evaluating Charlotte roofers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {greenFlags.map((flag, index) => (
              <div key={index} className="card border-l-4 border-green-500 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <flag.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">{flag.title}</h3>
                    <p className="text-gray text-sm">{flag.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="section bg-red-50">
        <div className="container">
          <div className="text-center mb-12">
            <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-dark mb-4">
              Red Flags: Warning Signs of Roofing Scams
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              If you see any of these, walk away immediately.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {redFlags.map((flag, index) => (
              <div key={index} className="bg-white rounded-xl p-4 flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-dark">{flag.title}</h3>
                  <p className="text-gray text-sm">{flag.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions to Ask */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              8 Questions to Ask Every Roofing Contractor
            </h2>
            <div className="space-y-4">
              {questionsToAsk.map((item, index) => (
                <div key={index} className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">&ldquo;{item.question}&rdquo;</h3>
                      <p className="text-gray text-sm">
                        <span className="font-medium">Why it matters:</span> {item.whyItMatters}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verification Checklist */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Verification Checklist: 6 Steps Before You Hire
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {verificationSteps.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                    <p className="text-gray text-sm">{item.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Box */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Why Charlotte Homeowners Choose Best Roofing Now
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <Award className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Fully Certified</h3>
                <p className="text-white/80 text-sm">
                  NC Licensed, Insured, BBB A+, CertainTeed SELECT, GAF Certified
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Star className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">5.0 Google Rating</h3>
                <p className="text-white/80 text-sm">
                  Hundreds of 5-star reviews from Charlotte homeowners
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Users className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Local & Veteran-Owned</h3>
                <p className="text-white/80 text-sm">
                  Charlotte-based since 2019. We live and work in your community.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white"
              >
                <Phone className="w-5 h-5" />
                {SITE_CONFIG.phone}
              </a>
              <Link href="/reviews" className="btn bg-white text-primary hover:bg-gray-100">
                Read Our Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {contractorFAQs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white border rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition">
                    <h3 className="font-bold text-dark pr-4">{faq.question}</h3>
                    <ArrowRight className="w-5 h-5 text-primary transform group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-gray">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work with a Contractor You Can Trust?"
        subtitle="Best Roofing Now meets every standard in this guide. Get a free estimate from Charlotte's most trusted roofing company."
      />
    </>
  );
}
