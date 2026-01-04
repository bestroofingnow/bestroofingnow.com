import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG, HOMEPAGE_FAQ } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing FAQs | Common Roofing Questions Charlotte NC',
  description:
    'Get answers to common roofing questions in Charlotte NC. Learn about roof repair, replacement, insurance claims, materials, and more from Best Roofing Now.',
  keywords: [
    'roofing questions Charlotte',
    'roof repair FAQ',
    'roof replacement questions',
    'roofing insurance claims FAQ',
    'Charlotte roofing help',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/faq`,
  },
  openGraph: {
    title: 'Roofing FAQs | Best Roofing Now Charlotte',
    description: 'Get answers to common roofing questions. Expert advice on roof repair, replacement, insurance claims, and materials from Charlotte\'s trusted roofers.',
    url: `${SITE_CONFIG.url}/faq`,
    type: 'website',
  },
};

const faqCategories = [
  {
    title: 'General Roofing',
    faqs: [
      {
        question: 'How long does a typical roof last?',
        answer: 'The lifespan of a roof depends on the material. Asphalt shingles typically last 20-30 years, while metal roofing can last 40-70 years. Factors like weather exposure, maintenance, and installation quality also affect longevity. We recommend annual inspections to maximize your roof\'s lifespan.',
      },
      {
        question: 'How do I know if I need a new roof or just repairs?',
        answer: 'Signs you may need replacement include: roof age over 20 years, widespread shingle damage, multiple leaks, sagging roof deck, or significant storm damage. Minor issues like a few missing shingles or isolated leaks can often be repaired. We provide honest assessments and will tell you if repairs are sufficient.',
      },
      {
        question: 'What roofing materials do you work with?',
        answer: 'We install asphalt shingles, architectural shingles, metal roofing, flat roofing systems (TPO, EPDM, modified bitumen), and specialty materials. We are certified by CertainTeed and GAF, allowing us to offer enhanced warranties on their products.',
      },
      {
        question: 'How long does a roof replacement take?',
        answer: 'Most residential roof replacements are completed in 1-3 days, depending on size and complexity. Factors like weather, roof accessibility, and the need for structural repairs can extend the timeline. We will give you a specific estimate after inspection.',
      },
    ],
  },
  {
    title: 'Insurance Claims',
    faqs: [
      {
        question: 'Do you work with insurance companies?',
        answer: 'Yes! We are insurance claim experts. We document all damage thoroughly, communicate directly with your adjuster, and fight to ensure you receive fair compensation. Our experience helps homeowners navigate the claims process smoothly.',
      },
      {
        question: 'Will you help me file an insurance claim?',
        answer: 'Absolutely. We handle the entire process from initial damage documentation to meeting with adjusters to final claim approval. We know what insurance companies look for and how to present your claim for maximum coverage.',
      },
      {
        question: 'What if my insurance claim is denied?',
        answer: 'We help homeowners appeal denied claims. Often, denials result from incomplete documentation or miscommunication. We can provide additional evidence, request re-inspection, or help you understand your policy coverage and options.',
      },
      {
        question: 'Do I have to pay anything out of pocket for storm damage repairs?',
        answer: 'Your out-of-pocket cost is typically your insurance deductible. We work directly with your insurance to cover repair or replacement costs. Be wary of any contractor who offers to waive or cover your deductible, as this is often illegal.',
      },
    ],
  },
  {
    title: 'Pricing & Financing',
    faqs: [
      {
        question: 'How much does a new roof cost?',
        answer: 'Roof costs vary based on size, material, complexity, and local factors. In the Charlotte area, most residential roof replacements range from $8,000 to $25,000+. We provide free, detailed estimates with no hidden fees or surprise charges.',
      },
      {
        question: 'Do you offer financing?',
        answer: 'Yes, we offer flexible financing options including 0% APR for 12 months, low monthly payment plans, and same-day approval. We work with multiple lenders to find options that fit your budget.',
      },
      {
        question: 'Do you provide free estimates?',
        answer: 'Yes! We provide completely free roof inspections and estimates. There is no obligation, no high-pressure sales tactics, and no hidden fees. We believe in earning your business through honesty and quality.',
      },
    ],
  },
  {
    title: 'Our Company',
    faqs: [
      {
        question: 'Are you licensed and insured?',
        answer: 'Yes, we are fully licensed in North Carolina and carry comprehensive liability insurance and workers\' compensation coverage. This protects you from any liability if an accident occurs on your property.',
      },
      {
        question: 'What warranties do you offer?',
        answer: 'We offer manufacturer warranties on materials (up to 50 years with GAF and CertainTeed), plus our own workmanship warranty. As certified installers, we can offer enhanced warranty options not available through non-certified contractors.',
      },
      {
        question: 'What areas do you serve?',
        answer: 'We serve the greater Charlotte metropolitan area including Charlotte, Huntersville, Cornelius, Davidson, Mooresville, Concord, Matthews, Mint Hill, Indian Trail, Gastonia, and surrounding communities.',
      },
      {
        question: 'Do you offer 24/7 emergency service?',
        answer: 'Yes! Roofing emergencies do not wait for business hours, and neither do we. Call us anytime for emergency repairs, tarping, and storm damage response. We are here when you need us.',
      },
    ],
  },
  {
    title: 'The Process',
    faqs: [
      {
        question: 'What should I expect during a roof inspection?',
        answer: 'Our inspector will examine your roof from the ground and attic (if accessible), check for damage, wear, and potential issues, and take photos to document findings. We will explain everything we find and answer all your questions.',
      },
      {
        question: 'How do you protect my property during installation?',
        answer: 'We use tarps and plywood to protect landscaping, siding, and outdoor fixtures. Our magnetic rollers collect nails and debris. We perform thorough cleanup daily and a final inspection to ensure your property is left clean.',
      },
      {
        question: 'Will someone be on-site during the entire project?',
        answer: 'Yes, a project manager oversees every job from start to finish. They are your point of contact for questions, ensure work meets our quality standards, and keep you informed of progress.',
      },
    ],
  },
];

export default function FAQPage() {
  // Flatten all FAQs for schema
  const allFaqs = faqCategories.flatMap((category) => category.faqs);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'FAQ', url: `${SITE_CONFIG.url}/faq` },
        ]}
      />
      <FAQSchema faqs={allFaqs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.services.inspection}
            alt="Professional roof inspection"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Frequently Asked Questions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Your Roofing Questions, Answered
            </h1>
            <p className="text-xl text-white/90">
              We believe in educating homeowners so you can make informed decisions about your roof.
              Here are answers to the questions we hear most often.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-light py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dark">
              <strong>Do not see your question?</strong> We are happy to help.
            </p>
            <div className="flex gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn btn-primary"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
              <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category) => (
              <div key={category.title} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-primary/20">
                  {category.title}
                </h2>
                <div className="space-y-6">
                  {category.faqs.map((faq) => (
                    <div
                      key={faq.question}
                      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
                    >
                      <h3 className="font-bold text-dark mb-3 flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        {faq.question}
                      </h3>
                      <p className="text-gray pl-8">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We are here to help. Contact us anytime and we will give you honest, straightforward
            answers about your roofing needs.
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
