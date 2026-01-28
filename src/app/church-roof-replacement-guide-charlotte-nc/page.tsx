import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Church,
  DollarSign,
  Clock,
  Shield,
  Users,
  Heart,
  FileText,
  Calendar,
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
  title: 'Church Roof Replacement Guide Charlotte NC | Congregation-Friendly Solutions',
  description:
    'Church roof replacement in Charlotte NC: Financing options, minimal disruption to services, historic preservation. Trusted by Charlotte congregations.',
  keywords: [
    'church roofing Charlotte NC',
    'church roof replacement Charlotte',
    'religious building roofing Charlotte',
    'church roof repair Charlotte NC',
    'steeple repair Charlotte',
    'historic church roofing Charlotte',
    'church roofing financing Charlotte',
    'nonprofit roofing Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/church-roof-replacement-guide-charlotte-nc`,
  },
  openGraph: {
    title: 'Church Roof Replacement Guide | Charlotte NC Congregations',
    description:
      'Complete guide to church roofing in Charlotte. Financing, scheduling around services, and protecting your sacred space.',
    url: `${SITE_CONFIG.url}/church-roof-replacement-guide-charlotte-nc`,
    type: 'article',
  },
};

const churchFAQs = [
  {
    question: 'How much does church roof replacement cost in Charlotte?',
    answer:
      'Church roof replacement in Charlotte typically costs $10-$25 per square foot depending on roof type, complexity, and materials. For a 10,000 sq ft church roof, expect $100,000-$250,000. Steeples and complex architectural features add cost. We offer financing options specifically for nonprofit organizations.',
  },
  {
    question: 'Can you work around our church service schedule?',
    answer:
      'Absolutely. We understand that Sunday services, Wednesday gatherings, and special events are non-negotiable. We schedule major work around your services and can even pause work for funerals, weddings, and other events. We\'ll create a timeline that respects your congregation\'s needs.',
  },
  {
    question: 'Do you offer financing for churches and nonprofits?',
    answer:
      'Yes. We work with lenders who specialize in nonprofit and religious organization financing. Options include traditional loans, capital campaign support, phased payment plans, and 0% introductory rates. We also help churches document work for grant applications.',
  },
  {
    question: 'Can you preserve our historic church\'s architectural character?',
    answer:
      'Yes. We have experience with historic preservation requirements and can source period-appropriate materials. For churches on the National Register or in historic districts, we understand the approval process and work with preservation commissions. We can match slate, copper, and other traditional materials.',
  },
  {
    question: 'How do you handle the unique challenges of church roofs?',
    answer:
      'Church roofs often have steeples, multiple roof lines, valleys, and complex architecture. We use specialized equipment for steep steeples, understand the structural considerations of vaulted ceilings, and have experience with the various roof types found on religious buildings (slate, tile, metal, shingle).',
  },
];

const uniqueChallenges = [
  {
    challenge: 'Steeples & Bell Towers',
    solution: 'Specialized equipment and experienced crews for high, steep work. Proper fall protection and crane access when needed.',
  },
  {
    challenge: 'Multiple Roof Sections',
    solution: 'Systematic approach addressing each section while maintaining water-tight integrity throughout the project.',
  },
  {
    challenge: 'Historic Materials',
    solution: 'Access to period-appropriate slate, copper, and tile. Understanding of historic preservation requirements.',
  },
  {
    challenge: 'Budget Constraints',
    solution: 'Flexible financing, phased replacement options, and help with grant documentation.',
  },
  {
    challenge: 'Service Schedules',
    solution: 'Work scheduled around services. Pause for events. Respect for sacred space.',
  },
  {
    challenge: 'Large Interior Spans',
    solution: 'Understanding of structural implications. Protection for interior finishes during work.',
  },
];

const roofingOptions = [
  {
    type: 'Architectural Shingles',
    bestFor: 'Most church buildings',
    lifespan: '25-30 years',
    cost: '$8-$12/sq ft',
    notes: 'Most cost-effective for typical church buildings.',
  },
  {
    type: 'Metal Roofing',
    bestFor: 'Long-term value, modern buildings',
    lifespan: '40-60 years',
    cost: '$12-$20/sq ft',
    notes: 'Excellent for flat or low-slope sections.',
  },
  {
    type: 'Slate',
    bestFor: 'Historic churches',
    lifespan: '75-150 years',
    cost: '$20-$40/sq ft',
    notes: 'Authentic for historic preservation.',
  },
  {
    type: 'Copper',
    bestFor: 'Steeples, accents',
    lifespan: '100+ years',
    cost: '$25-$50/sq ft',
    notes: 'Traditional for steeple caps and flashing.',
  },
  {
    type: 'Synthetic Slate/Shake',
    bestFor: 'Historic look, lower budget',
    lifespan: '30-50 years',
    cost: '$12-$18/sq ft',
    notes: 'Looks authentic at lower cost and weight.',
  },
];

const planningSteps = [
  {
    step: 1,
    title: 'Assessment & Inspection',
    description: 'Free professional inspection to understand current condition and recommend solutions.',
  },
  {
    step: 2,
    title: 'Budget Planning',
    description: 'Detailed estimate with financing options. We can help with grant applications.',
  },
  {
    step: 3,
    title: 'Board/Committee Presentation',
    description: 'We can present options to your building committee or board.',
  },
  {
    step: 4,
    title: 'Schedule Coordination',
    description: 'Timeline built around your service and event schedule.',
  },
  {
    step: 5,
    title: 'Congregation Communication',
    description: 'We provide updates and information you can share with members.',
  },
  {
    step: 6,
    title: 'Project Execution',
    description: 'Professional installation with respect for your sacred space.',
  },
];

export default function ChurchRoofReplacementGuidePage() {
  const pageUrl = `${SITE_CONFIG.url}/church-roof-replacement-guide-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Church Roof Replacement Guide Charlotte NC"
        description="Complete guide to church roofing for Charlotte congregations."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/commercial-roofing-services` },
          { name: 'Church Roof Replacement Guide', url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/commercial-roofing-services` },
          { name: 'Church Roof Replacement Guide', url: pageUrl },
        ]}
      />
      <ArticleSchema
        post={{
          title: 'Church Roof Replacement Guide: Charlotte NC Congregations',
          description: 'Complete guide to church roofing in Charlotte NC.',
          slug: 'church-roof-replacement-guide-charlotte-nc',
          datePublished: '2026-02-01',
          dateModified: '2026-02-01',
        }}
      />
      <FAQSchema faqs={churchFAQs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={IMAGES.hero.hero26}
            alt="Church roofing Charlotte NC"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Commercial Roofing', href: '/commercial-roofing-services' },
              { label: 'Church Roof Replacement Guide' },
            ]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <Church className="w-4 h-4" />
              <span>Religious Building Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Church Roof Replacement Guide
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              Protecting Your Sacred Space in Charlotte NC
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Your church building is more than a structure - it&apos;s a gathering place for your
              congregation. We understand the unique needs of religious buildings and work with
              respect for your mission, budget, and schedule.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                Free Church Roof Assessment
              </a>
              <EstimateButton
                className="btn bg-white text-slate-800 hover:bg-gray-100 text-lg px-8 py-4"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-8 bg-light border-b">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-bold text-dark mb-2">
              We Understand Church Roofing is Different
            </h2>
            <p className="text-gray">
              Limited budgets, volunteer decision-makers, service schedules, historic preservation,
              and the sacred nature of your space - we&apos;ve worked with Charlotte congregations
              for years and understand these realities.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Challenges */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Church Roofing Challenges &amp; Our Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {uniqueChallenges.map((item, index) => (
              <div key={index} className="card">
                <h3 className="font-bold text-primary mb-2">{item.challenge}</h3>
                <p className="text-gray text-sm">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roofing Options */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Roofing Options for Churches
          </h2>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Material</th>
                  <th className="p-4 text-left">Best For</th>
                  <th className="p-4 text-center">Lifespan</th>
                  <th className="p-4 text-center">Cost</th>
                </tr>
              </thead>
              <tbody>
                {roofingOptions.map((option, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{option.type}</td>
                    <td className="p-4 text-gray text-sm">{option.bestFor}</td>
                    <td className="p-4 text-center">{option.lifespan}</td>
                    <td className="p-4 text-center">{option.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              How We Work with Churches
            </h2>
            <div className="space-y-6">
              {planningSteps.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <h3 className="text-lg font-bold text-dark mb-1">{item.title}</h3>
                    <p className="text-gray">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <DollarSign className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Financing for Churches &amp; Nonprofits</h2>
            </div>
            <p className="text-center text-white/90 mb-8">
              We understand that church budgets often depend on donations and capital campaigns.
              We offer flexible options:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Financing Options</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Nonprofit-specific loan programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>0% introductory rates available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Phased payment plans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Extended terms up to 12 years</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">We Can Help With</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Grant application documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Capital campaign estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Board/committee presentations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Multiple bid comparisons</span>
                  </li>
                </ul>
              </div>
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
              {churchFAQs.map((faq, index) => (
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

      {/* Related Pages */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Related Commercial Roofing Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/church-roofing-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Church Roofing Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  Our complete church roofing services for Charlotte congregations.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/commercial-roofing-charlotte-nc"
                className="card hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition">
                  Commercial Roofing Charlotte NC
                </h3>
                <p className="text-gray text-sm">
                  Full commercial roofing services for all building types.
                </p>
                <span className="text-primary text-sm font-medium mt-2 inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Protect Your Church Building?"
        subtitle="Best Roofing Now has helped Charlotte congregations of all sizes with roofing projects. Schedule a free assessment and let's discuss your needs."
      />
    </>
  );
}
