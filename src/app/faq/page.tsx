import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  HelpCircle,
  Phone,
  ArrowRight,
  DollarSign,
  FileText,
  Calendar,
  Package,
  Cloud,
  Building2,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema, FAQSchema, VoiceSearchFAQSchema } from '@/components/seo/SchemaMarkup';
import { VoiceSearchFAQ } from '@/components/seo/PeopleAlsoAsk';
import { SITE_CONFIG, FAQ_CATEGORIES, ALL_FAQS, VOICE_SEARCH_FAQS as VOICE_FAQS } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing FAQs | 36 Common Roofing Questions Answered | Charlotte NC',
  description:
    'Get answers to 36 common roofing questions about pricing, insurance claims, materials, weather damage, and more. Expert advice from Charlotte\'s trusted roofers at Best Roofing Now.',
  keywords: [
    'roofing questions Charlotte',
    'roof repair FAQ',
    'roof replacement questions',
    'roofing insurance claims FAQ',
    'Charlotte roofing help',
    'roof cost FAQ',
    'storm damage roofing FAQ',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/faq`,
  },
  openGraph: {
    title: 'Roofing FAQs | 36 Questions Answered | Best Roofing Now Charlotte',
    description: 'Comprehensive answers to roofing questions about costs, insurance, materials, weather damage, and more from Charlotte\'s trusted roofing experts.',
    url: `${SITE_CONFIG.url}/faq`,
    type: 'website',
  },
};

// Map icon names to components
const iconMap: Record<string, React.ElementType> = {
  DollarSign,
  FileText,
  Calendar,
  Package,
  Cloud,
  Building2,
};

// Category order for display
const categoryOrder = ['pricing', 'insurance', 'process', 'materials', 'weather', 'company'] as const;

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'FAQ', url: `${SITE_CONFIG.url}/faq` },
        ]}
      />
      <FAQSchema faqs={ALL_FAQS} />
      <VoiceSearchFAQSchema />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.services.inspection}
            alt="Professional roof inspection Charlotte NC - Best Roofing Now certified roofing contractor FAQ"
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
            <p className="text-xl text-white/90 mb-4">
              We believe in educating homeowners so you can make informed decisions about your roof.
              Here are answers to the {ALL_FAQS.length} questions we hear most often, organized by topic.
            </p>
            <p className="text-white/80">
              Covering pricing, insurance claims, materials, weather damage, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-light py-6 border-b border-gray-200 sticky top-0 z-20">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categoryOrder.map((key) => {
              const category = FAQ_CATEGORIES[key];
              const Icon = iconMap[category.icon];
              return (
                <a
                  key={key}
                  href={`#${key}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all text-sm font-medium text-dark"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {category.title}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-white py-6">
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
              <Link href="/contact" className="btn bg-light text-primary hover:bg-gray-200">
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
            {categoryOrder.map((key) => {
              const category = FAQ_CATEGORIES[key];
              const Icon = iconMap[category.icon];
              return (
                <div key={key} id={key} className="mb-16 last:mb-0 scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-primary/20">
                    {Icon && (
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    <h2 className="text-2xl font-bold text-primary">
                      {category.title}
                    </h2>
                    <span className="ml-auto text-sm text-gray bg-light px-3 py-1 rounded-full">
                      {category.faqs.length} questions
                    </span>
                  </div>
                  <div className="space-y-4">
                    {category.faqs.map((faq, index) => (
                      <details
                        key={index}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition group"
                      >
                        <summary className="p-6 cursor-pointer list-none">
                          <div className="flex items-start gap-3">
                            <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="font-bold text-dark pr-8">{faq.question}</span>
                            <ArrowRight className="w-5 h-5 text-gray ml-auto flex-shrink-0 transform group-open:rotate-90 transition-transform" />
                          </div>
                        </summary>
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-gray pl-8">{faq.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Stats */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Why Charlotte Homeowners Trust Our Expertise
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">{ALL_FAQS.length}+</div>
                <div className="text-gray text-sm">Questions Answered</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">5.0</div>
                <div className="text-gray text-sm">Google Rating</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">A+</div>
                <div className="text-gray text-sm">BBB Rating</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-gray text-sm">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Search Optimized FAQs */}
      <section className="section">
        <div className="container">
          <VoiceSearchFAQ
            faqs={VOICE_FAQS.slice(0, 6)}
            city="Charlotte"
          />
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

      {/* Related Resources */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/guides/roof-replacement-cost"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <DollarSign className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Roof Replacement Cost Guide
                </h3>
                <p className="text-gray text-sm">
                  Detailed breakdown of roofing costs in Charlotte NC
                </p>
              </Link>
              <Link
                href="/guides/insurance-claim-guide"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <FileText className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Insurance Claim Guide
                </h3>
                <p className="text-gray text-sm">
                  Step-by-step guide to filing roof damage claims
                </p>
              </Link>
              <Link
                href="/guides/signs-you-need-new-roof"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition group"
              >
                <HelpCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-dark mb-2 group-hover:text-primary transition">
                  Signs You Need a New Roof
                </h3>
                <p className="text-gray text-sm">
                  10 warning signs your roof needs replacement
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
