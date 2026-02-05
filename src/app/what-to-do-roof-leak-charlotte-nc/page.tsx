import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Droplets,
  Camera,
  Shield,
  Clock,
  Home,
  FileText,
  XCircle,
  Lightbulb,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ArticleSchema,
} from '@/components/seo/SchemaMarkup';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'What to Do When You Find a Roof Leak | Charlotte NC Emergency Guide',
  description:
    'Found a roof leak in your Charlotte home? Follow this step-by-step emergency guide. What to do first, how to minimize damage, and when to call for emergency roof repair.',
  keywords: [
    'roof leak what to do Charlotte NC',
    'found roof leak Charlotte',
    'emergency roof leak Charlotte',
    'roof leaking inside house Charlotte',
    'ceiling leak Charlotte NC',
    'water coming through roof Charlotte',
    'roof leak emergency response',
    'how to stop roof leak temporarily',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/what-to-do-roof-leak-charlotte-nc`,
  },
  openGraph: {
    title: 'What to Do When You Find a Roof Leak | Charlotte NC Emergency Guide',
    description:
      'Step-by-step guide for Charlotte homeowners dealing with a roof leak. Immediate actions, damage prevention, and when to call for emergency repair.',
    url: `${SITE_CONFIG.url}/what-to-do-roof-leak-charlotte-nc`,
    type: 'article',
  },
};

const leakFAQs = [
  {
    question: 'I just found water dripping from my ceiling. What should I do first?',
    answer:
      'First, place a bucket or container under the drip to catch water. Move furniture and electronics away from the area. If the ceiling is bulging with water, carefully puncture it with a screwdriver to release water into a bucket - this prevents ceiling collapse. Then call a roofer for emergency service.',
  },
  {
    question: 'Should I go on the roof to find and fix the leak myself?',
    answer:
      'No, never go on your roof during or after rain - it\'s extremely dangerous when wet. The leak source is also often not directly above where water appears inside. Call a professional who has safety equipment and experience locating leaks.',
  },
  {
    question: 'Will my homeowners insurance cover the roof leak?',
    answer:
      'It depends on the cause. Insurance typically covers sudden damage from storms, fallen trees, or hail. It usually doesn\'t cover leaks from normal wear, lack of maintenance, or gradual deterioration. Document everything with photos before any repairs.',
  },
  {
    question: 'How quickly can I get emergency roof repair in Charlotte?',
    answer:
      'Best Roofing Now offers emergency tarping and temporary repairs within 1-4 hours for active leaks in the Charlotte area. We prioritize emergencies to prevent further water damage to your home. Call 704-605-6047 for immediate assistance.',
  },
  {
    question: 'Can a small roof leak cause major damage?',
    answer:
      'Yes, even small leaks can cause significant damage over time including mold growth (within 24-48 hours), rotted decking and rafters, damaged insulation, ruined drywall, and electrical hazards. Addressing leaks quickly is essential.',
  },
];

const immediateSteps = [
  {
    step: 1,
    title: 'Contain the Water',
    icon: Droplets,
    actions: [
      'Place buckets, pots, or containers under drips',
      'Use towels to absorb water on floors',
      'If water is pooling on ceiling, puncture it carefully to drain into a bucket',
    ],
    warning: null,
  },
  {
    step: 2,
    title: 'Protect Your Belongings',
    icon: Home,
    actions: [
      'Move furniture away from the leak area',
      'Remove electronics and valuables',
      'Roll up rugs and carpets',
      'Cover items you can\'t move with plastic sheets',
    ],
    warning: null,
  },
  {
    step: 3,
    title: 'Document Everything',
    icon: Camera,
    actions: [
      'Take photos and videos of the leak and damage',
      'Document water stains, wet areas, and damaged items',
      'Note the date, time, and weather conditions',
      'Keep all receipts for emergency supplies',
    ],
    warning: 'This documentation is critical for insurance claims',
  },
  {
    step: 4,
    title: 'Call for Emergency Help',
    icon: Phone,
    actions: [
      'Call a professional roofer for emergency service',
      'Describe the severity and location of the leak',
      'Ask about emergency tarping services',
      'Don\'t wait - water damage compounds quickly',
    ],
    warning: null,
  },
];

const doNotList = [
  {
    action: 'Don\'t go on your roof',
    reason: 'Wet roofs are extremely slippery and dangerous. Let professionals handle it.',
  },
  {
    action: 'Don\'t ignore "small" leaks',
    reason: 'Small leaks become big problems. Mold can start growing within 24-48 hours.',
  },
  {
    action: 'Don\'t use roofing tar as a permanent fix',
    reason: 'It\'s a temporary solution at best and can make proper repairs more difficult.',
  },
  {
    action: 'Don\'t wait for the rain to stop',
    reason: 'Call for help immediately. Emergency tarping can be done in rain.',
  },
  {
    action: 'Don\'t throw away damaged items yet',
    reason: 'Insurance adjusters may need to see damage before you dispose of items.',
  },
];

const commonLeakSources = [
  {
    source: 'Damaged or Missing Shingles',
    description: 'Wind, hail, or age can damage shingles allowing water entry.',
    signs: 'Visible damage from ground, granules in gutters',
  },
  {
    source: 'Failed Flashing',
    description: 'Metal flashing around chimneys, vents, and skylights can corrode or separate.',
    signs: 'Leaks near chimneys or vents, rust stains',
  },
  {
    source: 'Clogged Gutters',
    description: 'Backed-up water can seep under shingles and into the roof deck.',
    signs: 'Water stains on fascia, overflowing gutters',
  },
  {
    source: 'Ice Dams',
    description: 'Ice buildup at roof edges forces water under shingles.',
    signs: 'Icicles at roofline, leaks during/after cold weather',
  },
  {
    source: 'Pipe Boot Failure',
    description: 'Rubber boots around plumbing vents crack with age and sun exposure.',
    signs: 'Leaks in bathroom or kitchen areas',
  },
  {
    source: 'Roof Valley Issues',
    description: 'Valleys where two roof planes meet are high-stress, high-water-flow areas.',
    signs: 'Leaks after heavy rain, visible debris in valleys',
  },
];

export default function WhatToDoRoofLeakPage() {
  const pageUrl = `${SITE_CONFIG.url}/what-to-do-roof-leak-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="What to Do When You Find a Roof Leak | Charlotte NC"
        description="Emergency guide for Charlotte homeowners dealing with roof leaks."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'What to Do: Roof Leak', url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'What to Do: Roof Leak', url: pageUrl },
        ]}
      />
      <ArticleSchema
        post={{
          title: 'What to Do When You Find a Roof Leak in Charlotte NC',
          description: 'Emergency step-by-step guide for handling roof leaks.',
          slug: 'what-to-do-roof-leak-charlotte-nc',
          datePublished: '2026-01-27',
          dateModified: '2026-01-27',
        }}
      />
      <FAQSchema faqs={leakFAQs} />

      {/* Hero Section - Emergency Style */}
      <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={IMAGES.hero.hero25}
            alt="Emergency roof leak repair"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[{ label: 'What to Do: Roof Leak' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span>Emergency Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              What to Do When You Find a Roof Leak
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              Charlotte NC Emergency Response Guide
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Found water dripping from your ceiling? Don&apos;t panic. Follow these steps to
              minimize damage while help is on the way.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-white text-red-700 hover:bg-gray-100 text-lg px-8 py-4 font-bold"
              >
                <Phone className="w-5 h-5" />
                Emergency: {SITE_CONFIG.phone}
              </a>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-5 h-5" />
                <span>1-4 Hour Response Time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Steps Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              Immediate Steps When You Find a Leak
            </h2>
            <p className="text-gray text-center mb-12">
              Follow these steps in order to minimize damage to your Charlotte home.
            </p>
            <div className="space-y-8">
              {immediateSteps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-bold text-dark">{step.title}</h3>
                    </div>
                    <ul className="space-y-2 mb-3">
                      {step.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start gap-2 text-gray">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                    {step.warning && (
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
                        <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0" />
                        <span className="text-amber-800 text-sm">{step.warning}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Call Box */}
      <section className="py-8 bg-red-600 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Phone className="w-10 h-10" />
              <div>
                <p className="text-xl font-bold">Need Emergency Help Right Now?</p>
                <p className="text-white/80">We respond to Charlotte emergencies within 1-4 hours</p>
              </div>
            </div>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4 font-bold"
            >
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      {/* What NOT to Do */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              What NOT to Do When You Have a Roof Leak
            </h2>
            <p className="text-gray text-center mb-8">
              Avoid these common mistakes that can make the situation worse.
            </p>
            <div className="space-y-4">
              {doNotList.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.action}</h3>
                      <p className="text-gray text-sm">{item.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Leak Sources */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              Common Sources of Roof Leaks in Charlotte
            </h2>
            <p className="text-gray text-center mb-8">
              Understanding where leaks come from can help you communicate with your roofer.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {commonLeakSources.map((source, index) => (
                <div key={index} className="card">
                  <h3 className="font-bold text-primary mb-2">{source.source}</h3>
                  <p className="text-gray text-sm mb-3">{source.description}</p>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-gray font-medium">Signs:</span>
                    <span className="text-gray">{source.signs}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Tips */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Insurance Claim Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4">What Insurance Typically Covers:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Storm damage (wind, hail, fallen trees)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Sudden accidental damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Interior water damage from covered events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Emergency tarping to prevent further damage</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">What Insurance Usually Doesn&apos;t Cover:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Normal wear and tear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Neglected maintenance issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Gradual deterioration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>Pre-existing damage</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white/10 rounded-xl p-6">
              <p className="text-white/90">
                <strong>Pro Tip:</strong> Best Roofing Now helps Charlotte homeowners with insurance
                claims. We document damage properly, provide detailed estimates, and can meet with
                your adjuster to ensure fair coverage.
              </p>
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
              {leakFAQs.map((faq, index) => (
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

      {/* Related Resources */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/roof-repair-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Roof Repair Services Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  Professional leak repair and emergency services for Charlotte homes.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/guides/insurance-claim-guide"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Insurance Claim Guide
                </h3>
                <p className="text-gray text-sm">
                  Step-by-step guide to filing a roof insurance claim in Charlotte.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="other"
        city="Charlotte"
        slug="what-to-do-roof-leak-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/what-to-do-roof-leak-charlotte-nc`}
      />

      {/* CTA Section */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="What To Do Roof Leak"

      />

      <CTASection
        title="Dealing with a Roof Leak Right Now?"
        subtitle="Don't wait - water damage gets worse by the hour. Call Best Roofing Now for emergency service in Charlotte. We respond within 1-4 hours."
      />
    </>
  );
}
