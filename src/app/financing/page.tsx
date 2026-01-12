import { Metadata } from 'next';
import Image from 'next/image';
import {
  DollarSign,
  CheckCircle,
  Clock,
  CreditCard,
  Shield,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { LazyFinancingIframe } from '@/components/ui/LazyFinancingIframe';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Financing Charlotte NC | Easy Payment Options | 0% APR',
  description:
    'Flexible roof financing options in Charlotte NC. Low monthly payments, quick approval, and 0% APR options available. Get the roof you need without breaking the bank.',
  keywords: [
    'roof financing Charlotte NC',
    'roofing payment plans',
    '0 APR roof financing',
    'affordable roof replacement',
    'roof loan Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/financing`,
  },
  openGraph: {
    title: 'Roof Financing Options | Best Roofing Now Charlotte',
    description: 'Affordable roof financing with 0% APR options. Quick approval, low monthly payments. Get your new roof today with flexible payment plans.',
    url: `${SITE_CONFIG.url}/financing`,
    type: 'website',
  },
};

const financingOptions = [
  {
    title: '0% APR for 12 Months',
    description: 'No interest if paid in full within 12 months. Perfect for planned replacements.',
    features: [
      'No interest charges',
      'Fixed monthly payments',
      'Quick approval process',
      'No prepayment penalties',
    ],
  },
  {
    title: 'Low Monthly Payments',
    description: 'Spread your roof investment over time with affordable monthly payments.',
    features: [
      'Terms up to 144 months',
      'Payments as low as $99/month',
      'Competitive interest rates',
      'Flexible payment dates',
    ],
  },
  {
    title: 'Same-Day Approval',
    description: 'Know your options quickly so you can protect your home without delay.',
    features: [
      'Soft credit check available',
      'Decision in minutes',
      'Multiple lender options',
      'No obligation to proceed',
    ],
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Quick & Easy Process',
    description: 'Apply in minutes and get a decision the same day.',
  },
  {
    icon: Shield,
    title: 'No Pressure',
    description: 'Explore your options with no obligation to move forward.',
  },
  {
    icon: CreditCard,
    title: 'Multiple Options',
    description: 'We work with several lenders to find the best fit for you.',
  },
  {
    icon: DollarSign,
    title: 'Protect Your Savings',
    description: 'Keep your emergency fund intact while still getting a quality roof.',
  },
];

const faqs = [
  {
    question: 'What credit score do I need to qualify?',
    answer: 'We work with lenders who serve a wide range of credit profiles. Even if your credit is not perfect, we may have options available. The best way to find out is to apply, as soft credit checks do not affect your score.',
  },
  {
    question: 'How long does approval take?',
    answer: 'Most applications receive a decision within minutes. In some cases, additional documentation may be needed, which can extend the process by a day or two.',
  },
  {
    question: 'Can I pay off my loan early?',
    answer: 'Yes! All of our financing options allow early payoff without prepayment penalties. Pay off your balance whenever it works for you.',
  },
  {
    question: 'What is the minimum project size for financing?',
    answer: 'Most of our financing options are available for projects starting at $1,000. Larger projects may qualify for better rates and terms.',
  },
  {
    question: 'Does applying affect my credit score?',
    answer: 'Initial pre-qualification uses a soft credit check that does not affect your score. A hard inquiry only occurs if you choose to accept an offer and proceed with the application.',
  },
];

export default function FinancingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Financing', url: `${SITE_CONFIG.url}/financing` },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero.hero23}
            alt="Affordable roof financing options"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-semibold">Flexible Financing Options</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Get a New Roof Without Breaking the Bank
            </h1>
            <p className="text-xl text-white/90">
              Your roof protects everything you love. Do not let budget concerns stop you from
              getting the protection you need. We offer flexible financing options to fit any budget.
            </p>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Financing Options That Work for You
            </h2>
            <p className="text-gray text-lg">
              We partner with trusted lenders to offer multiple financing options.
              Find the one that fits your budget and timeline.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {financingOptions.map((option) => (
              <div
                key={option.title}
                className="p-8 bg-white rounded-xl shadow-lg border-2 border-transparent hover:border-primary transition"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{option.title}</h3>
                <p className="text-gray mb-6">{option.description}</p>
                <ul className="space-y-3">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.houses.house1}
                alt="Affordable roof financing Charlotte NC - home with financed new roof installation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.houses.house2}
                alt="Roof financing options Charlotte - residential roofing project with payment plans"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.houses.modern1}
                alt="0% interest roof financing Charlotte NC - modern home with quality roofing"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.houses.house3}
                alt="Flexible roof payment plans Charlotte - completed roof replacement with financing"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Finance Your Roof?
            </h2>
            <p className="text-gray text-lg">
              Smart homeowners know that protecting their home should not mean draining their savings.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-white rounded-xl shadow-md text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Now - PowerPay Integration */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Apply for Financing Now
            </h2>
            <p className="text-white/90 text-lg mb-4">
              Check your rate in seconds with no impact to your credit score.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-100 px-4 py-2 rounded-full text-sm font-semibold">
              <Shield className="w-4 h-4" />
              Soft Credit Pull - Won&apos;t Hurt Your Credit
            </div>
          </div>
          <div className="max-w-4xl mx-auto p-4 md:p-8">
            <LazyFinancingIframe
              src="https://getpowerpay.com/financing/roofing/?d=16995"
              title="PowerPay Roof Financing Application"
              minHeight={600}
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Financing FAQs
            </h2>
            <p className="text-gray text-lg">
              Common questions about our financing options.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                <p className="text-gray">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-dark mb-2">Get a Free Estimate</h3>
              <p className="text-gray text-sm">
                We inspect your roof and provide a detailed quote with no obligation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-dark mb-2">Apply for Financing</h3>
              <p className="text-gray text-sm">
                Complete a simple application and get a decision in minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-dark mb-2">Choose Your Plan</h3>
              <p className="text-gray text-sm">
                Select the payment option that works best for your budget.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-dark mb-2">Get Your New Roof</h3>
              <p className="text-gray text-sm">
                We install your roof while you make easy monthly payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
