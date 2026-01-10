'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface PeopleAlsoAskProps {
  title?: string;
  faqs: FAQItem[];
  className?: string;
}

// Expandable FAQ item component
function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors px-4 -mx-4"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

// Main People Also Ask component
export function PeopleAlsoAsk({ title = 'People Also Ask', faqs, className = '' }: PeopleAlsoAskProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 ${className}`}>
      <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
}

// Voice Search FAQ Section - displays FAQs optimized for voice search
interface VoiceSearchFAQProps {
  faqs: Array<{
    question: string;
    answer: string;
    keywords?: string[];
  }>;
  city?: string;
  className?: string;
}

export function VoiceSearchFAQ({ faqs, city, className = '' }: VoiceSearchFAQProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const title = city
    ? `Common Roofing Questions in ${city}`
    : 'Frequently Asked Roofing Questions';

  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          {title}
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Quick answers to your most common roofing questions
        </p>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openItems.has(index)}
              >
                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
                    openItems.has(index) ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.has(index) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 pb-4 border-t border-gray-100 pt-3">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured Snippet Box - Highlights key information for featured snippets
interface FeaturedSnippetBoxProps {
  title: string;
  content: string;
  type?: 'definition' | 'answer' | 'list';
  listItems?: string[];
  className?: string;
}

export function FeaturedSnippetBox({
  title,
  content,
  type = 'answer',
  listItems,
  className = ''
}: FeaturedSnippetBoxProps) {
  return (
    <div className={`bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg ${className}`}>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      {type === 'list' && listItems ? (
        <ul className="space-y-2">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">{index + 1}.</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700 leading-relaxed">{content}</p>
      )}
    </div>
  );
}

// Quick Answer Box - For voice search direct answers
interface QuickAnswerProps {
  question: string;
  answer: string;
  source?: string;
  className?: string;
}

export function QuickAnswer({ question, answer, source, className = '' }: QuickAnswerProps) {
  return (
    <div className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl ${className}`}>
      <div className="flex items-start gap-3">
        <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="font-medium text-white/90 text-sm mb-1">{question}</p>
          <p className="text-lg font-semibold">{answer}</p>
          {source && (
            <p className="text-white/70 text-xs mt-2">Source: {source}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PeopleAlsoAsk;
