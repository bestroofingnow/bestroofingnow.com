import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  ArrowRight,
  HelpCircle,
  Award,
  Clock,
  DollarSign,
  CreditCard,
  Percent,
  Calculator,
  FileCheck,
  BadgeCheck,
  MapPin,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Financing Charlotte NC | 0% Interest Options | Best Roofing Now',
  description:
    'Affordable roof financing in Charlotte NC with 0% interest options. Easy approval, low monthly payments, and flexible terms. Get a new roof today with payments as low as $99/month.',
  keywords: [
    'roof financing Charlotte NC',
    'roofing payment plans Charlotte',
    'finance new roof Charlotte',
    '0 interest roof financing Charlotte',
    'roof replacement financing Charlotte NC',
    'affordable roofing Charlotte',
    'monthly payment roofing Charlotte',
    'roofing loans Charlotte NC',
    'no credit check roofing Charlotte',
    'easy approval roof financing Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-financing-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Financing Charlotte NC | 0% Interest Options',
    description:
      'Affordable roof financing options for Charlotte homeowners. 0% interest available, easy approval, and flexible payment plans. Get a new roof with monthly payments that fit your budget.',
    url: `${SITE_CONFIG.url}/roof-financing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero23,
        width: 1200,
        height: 630,
        alt: 'Roof financing Charlotte NC - Affordable payment plans from Best Roofing Now',
      },
    ],
  },
};

// Financing options
const financingOptions = [
  {
    icon: Percent,
    title: '0% Interest for 18 Months',
    description: 'Qualified buyers can enjoy 0% APR financing for 18 months. Pay off your roof with no interest charges.',
    highlight: 'Most Popular',
  },
  {
    icon: CreditCard,
    title: 'Low Monthly Payments',
    description: 'Payments starting as low as $99/month depending on project size. Make your new roof affordable.',
    highlight: null,
  },
  {
    icon: Clock,
    title: 'Extended Terms Available',
    description: 'Terms from 12 to 144 months to find the monthly payment that fits your budget.',
    highlight: null,
  },
  {
    icon: FileCheck,
    title: 'Quick & Easy Approval',
    description: 'Apply in minutes with a simple online application. Most approvals within hours, not days.',
    highlight: 'Same Day Approval',
  },
  {
    icon: DollarSign,
    title: 'No Prepayment Penalties',
    description: 'Pay off your loan early without any fees. Save on interest by paying ahead of schedule.',
    highlight: null,
  },
  {
    icon: BadgeCheck,
    title: 'Credit Options for All',
    description: 'We work with multiple lenders to find options for good credit, fair credit, and everyone in between.',
    highlight: null,
  },
];

// Application process
const applicationProcess = [
  {
    step: '1',
    title: 'Get Your Free Estimate',
    description: 'We provide a detailed quote for your roofing project with no obligation. Know exactly what your roof will cost.',
  },
  {
    step: '2',
    title: 'Apply Online in Minutes',
    description: 'Fill out a simple online application. No hard credit pull for pre-qualification - just basic information.',
  },
  {
    step: '3',
    title: 'Receive Your Approval',
    description: 'Most applications are approved the same day. We\'ll review your options and find the best terms for you.',
  },
  {
    step: '4',
    title: 'Choose Your Plan',
    description: 'Select the financing terms that work for your budget - interest rate, monthly payment, and loan length.',
  },
  {
    step: '5',
    title: 'We Install Your Roof',
    description: 'Our certified team completes your roof installation with premium materials and expert craftsmanship.',
  },
  {
    step: '6',
    title: 'Make Convenient Payments',
    description: 'Pay monthly through easy online payments. Set up autopay and never miss a payment.',
  },
];

// Why choose us for financing
const whyChooseUs = [
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'Trusted by Charlotte homeowners with an A+ BBB rating for honest, ethical business practices.',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: `${SITE_CONFIG.googleReviewCount}+ five-star Google reviews from satisfied customers across Charlotte.`,
  },
  {
    icon: Shield,
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no surprises. We clearly explain all financing terms and costs.',
  },
  {
    icon: CheckCircle,
    title: 'Premium Materials',
    description: 'Financing includes the same top-quality materials we use on every job - no shortcuts.',
  },
  {
    icon: Calculator,
    title: 'Multiple Lender Options',
    description: 'We partner with several lenders to find the best rates and terms for your situation.',
  },
  {
    icon: Clock,
    title: 'Fast Installation',
    description: 'Once approved, we can typically schedule your installation within 1-2 weeks.',
  },
];

// Sample monthly payments
const paymentExamples = [
  { amount: '$10,000', monthly12: '$833', monthly36: '$286', monthly60: '$175' },
  { amount: '$15,000', monthly12: '$1,250', monthly36: '$429', monthly60: '$263' },
  { amount: '$20,000', monthly12: '$1,667', monthly36: '$572', monthly60: '$350' },
  { amount: '$25,000', monthly12: '$2,083', monthly36: '$715', monthly60: '$438' },
];

// FAQs about roof financing
const faqs = [
  {
    question: 'What credit score do I need for roof financing in Charlotte?',
    answer:
      'We work with multiple lenders who have different requirements. While excellent credit gets the best rates (typically 700+), we have options for fair credit (640-699) and even some programs for scores below 640. The best way to know your options is to apply - the pre-qualification doesn\'t affect your credit score.',
  },
  {
    question: 'Is there really 0% interest financing available?',
    answer:
      'Yes! We offer 0% APR financing for qualified buyers for periods up to 18 months. This promotional rate requires good credit and full repayment within the promotional period. It\'s a great option if you can pay off your roof quickly without interest charges.',
  },
  {
    question: 'How long does the financing approval take?',
    answer:
      'Most applications receive a decision within hours, often within minutes. The online application takes just 5-10 minutes to complete. Once approved, we can typically schedule your installation within 1-2 weeks.',
  },
  {
    question: 'What is the typical monthly payment for a roof replacement?',
    answer:
      'Monthly payments depend on your loan amount and terms. For a typical Charlotte roof replacement ($12,000-$18,000), monthly payments range from $150-$400 depending on the loan term you choose. Longer terms mean lower payments but more interest over time.',
  },
  {
    question: 'Can I finance just roof repairs or only full replacements?',
    answer:
      'We offer financing for both repairs and full replacements. However, financing is typically most beneficial for larger projects ($5,000+) where spreading the cost makes sense. Smaller repairs may be easier to handle with other payment methods.',
  },
  {
    question: 'Are there any prepayment penalties?',
    answer:
      'No. Our financing options have no prepayment penalties. You can pay off your loan early at any time without any additional fees. This saves you money on interest if you come into extra funds.',
  },
  {
    question: 'What information do I need to apply for roof financing?',
    answer:
      'The application process is simple. You\'ll need basic personal information (name, address, SSN), employment details, and income information. The whole application takes about 5-10 minutes to complete online.',
  },
  {
    question: 'Do you offer financing for commercial roofing projects?',
    answer:
      'Yes, we have commercial financing options available for businesses in Charlotte. Commercial terms may differ from residential financing. Contact us to discuss your commercial project and financing options.',
  },
];

export default function RoofFinancingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Financing Charlotte NC', url: `${SITE_CONFIG.url}/roof-financing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src={IMAGES.hero.hero23}
            alt="Roof financing Charlotte NC - Affordable payment options"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-semibold">0% Interest Options Available</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Financing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Get a new roof today with affordable monthly payments as low as $99/month
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Don't let budget concerns delay protecting your home. Best Roofing Now offers flexible financing options with 0% interest promotions, easy approval, and terms that fit your budget. Apply in minutes and get approved the same day.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Calculator className="w-5 h-5" aria-hidden="true" />}
              >
                Get Your Free Quote
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

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Percent className="w-5 h-5 text-accent-light" />
                0% Interest Available
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                Same Day Approval
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                No Hidden Fees
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Rating
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Flexible Roof Financing Options
            </h2>
            <p className="text-gray text-lg">
              We partner with trusted lenders to offer Charlotte homeowners affordable ways to finance their new roof or major repairs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {financingOptions.map((option) => (
              <div
                key={option.title}
                className="relative p-6 bg-light rounded-xl hover:shadow-lg transition-all"
              >
                {option.highlight && (
                  <span className="absolute -top-3 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    {option.highlight}
                  </span>
                )}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{option.title}</h3>
                <p className="text-gray text-sm">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Examples Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Sample Monthly Payments
            </h2>
            <p className="text-gray text-lg">
              See how affordable a new roof can be with our financing options. Payments vary based on credit approval and terms.
            </p>
          </div>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Loan Amount</th>
                  <th className="px-6 py-4 text-center font-semibold">12 Months</th>
                  <th className="px-6 py-4 text-center font-semibold">36 Months</th>
                  <th className="px-6 py-4 text-center font-semibold">60 Months</th>
                </tr>
              </thead>
              <tbody>
                {paymentExamples.map((example, index) => (
                  <tr key={example.amount} className={index % 2 === 0 ? 'bg-light' : 'bg-white'}>
                    <td className="px-6 py-4 font-bold text-dark">{example.amount}</td>
                    <td className="px-6 py-4 text-center text-gray">{example.monthly12}/mo</td>
                    <td className="px-6 py-4 text-center text-gray">{example.monthly36}/mo</td>
                    <td className="px-6 py-4 text-center text-gray">{example.monthly60}/mo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray text-sm mt-6">
            *Sample payments are estimates based on 0% APR promotional rates. Actual payments may vary based on credit approval, loan terms, and interest rates. Contact us for personalized payment options.
          </p>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Easy Application Process
            </h2>
            <p className="text-gray text-lg">
              Getting approved for roof financing is quick and simple. Here's how it works.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationProcess.map((step) => (
              <div
                key={step.title}
                className="p-6 bg-light rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-2">{step.title}</h3>
                    <p className="text-gray text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready to Finance Your New Roof?
              </h2>
              <p className="text-white/90">
                Get a free quote and explore your financing options. No obligation, no pressure.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Free Quote
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-accent hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={IMAGES.realProjects.certainteed1}
                alt="Quality roof financing in Charlotte NC by Best Roofing Now"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-dark">5.0 Rating</p>
                    <p className="text-sm text-gray">{SITE_CONFIG.googleReviewCount}+ Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Finance Your Roof with Best Roofing Now?
              </h2>
              <p className="text-gray text-lg mb-8">
                We're not just a lender - we're your complete roofing partner. When you finance with us, you get the same top-quality materials, expert installation, and industry-leading warranties that have made us Charlotte's trusted roofing company.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                      <p className="text-gray text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Roof Financing Available Throughout Charlotte
            </h2>
            <p className="text-gray text-lg">
              Our financing options are available to homeowners throughout the Greater Charlotte metro area.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-4">Charlotte Neighborhoods</h3>
              <p className="text-gray text-sm">
                Myers Park, Dilworth, South End, Ballantyne, University City, SouthPark, and all Charlotte neighborhoods
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-4">Lake Norman Area</h3>
              <p className="text-gray text-sm">
                Huntersville, Cornelius, Davidson, Mooresville, Denver, and the Lake Norman region
              </p>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-4">Greater Charlotte</h3>
              <p className="text-gray text-sm">
                Matthews, Mint Hill, Pineville, Gastonia, Concord, Fort Mill SC, Rock Hill SC, and more
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roof Financing FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to common questions about financing your roof in Charlotte.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Finance Your New Roof?"
        subtitle="Get a free estimate and explore your financing options. With 0% interest promotions and flexible payment plans, a new roof is more affordable than you think."
      />
    </>
  );
}
