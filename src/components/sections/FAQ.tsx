'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { HOMEPAGE_FAQ } from '@/lib/constants';

interface FAQProps {
  faqs?: { question: string; answer: string }[];
  title?: string;
  subtitle?: string;
}

export function FAQ({
  faqs = HOMEPAGE_FAQ,
  title = 'Frequently Asked Questions',
  subtitle = "Get answers to common questions about roofing services, costs, and our process.",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-light">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <HelpCircle className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-semibold">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {title}
            </h2>
            <p className="text-gray text-lg">{subtitle}</p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  aria-label={`${openIndex === index ? 'Collapse' : 'Expand'} answer to: ${faq.question}`}
                >
                  <span id={`faq-question-${index}`} className="font-semibold text-dark pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200',
                      openIndex === index && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={cn(
                    'overflow-hidden transition-all duration-200',
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  )}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="px-6 pb-6 text-gray leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <p className="text-gray mb-4">Still have questions?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Contact us for a free consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
