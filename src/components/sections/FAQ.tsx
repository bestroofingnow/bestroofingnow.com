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
    <section
      className="section bg-white"
      aria-labelledby="faq-section-title"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Editorial section header */}
          <header className="mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-copper" aria-hidden="true" />
              <span className="eyebrow">FAQ</span>
            </div>
            <h2
              id="faq-section-title"
              className="heading-display text-[28px] sm:text-[32px] md:text-[40px] mb-3"
            >
              {title}
            </h2>
            <p className="text-slate text-[15px] md:text-[16px] leading-[1.65] max-w-2xl">
              {subtitle}
            </p>
          </header>

          {/* FAQ Accordion - JSON-LD schema is handled separately via FAQSchema component */}
          <div className="border-t border-line" role="list">
            {faqs.map((faq, index) => (
              <article
                key={index}
                className="border-b border-line"
                role="listitem"
              >
                <button
                  className="w-full flex items-center justify-between py-5 text-left group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  aria-label={`${openIndex === index ? 'Collapse' : 'Expand'} answer to: ${faq.question}`}
                >
                  <span
                    id={`faq-question-${index}`}
                    className="font-display font-medium text-navy text-[17px] md:text-[18px] pr-4 group-hover:text-copper transition-colors"
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 text-mute flex-shrink-0 transition-transform duration-200',
                      openIndex === index && 'rotate-180 text-copper'
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={cn(
                    'overflow-hidden transition-[max-height] duration-200',
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  )}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="pb-5 pr-8 text-slate text-[14.5px] leading-[1.65]">
                    {faq.answer}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <p className="text-slate text-[14px] mb-3">Still have questions?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 text-navy text-[12.5px] font-semibold uppercase tracking-[0.08em] hover:text-copper transition-colors"
            >
              Contact us for a free consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
