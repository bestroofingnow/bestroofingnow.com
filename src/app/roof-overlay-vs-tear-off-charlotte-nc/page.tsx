import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  HelpCircle,
  Layers,
  Phone,
  Scale,
  Shield,
  Star,
  ThumbsDown,
  ThumbsUp,
  XCircle,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Overlay vs Tear-Off',
  description:
    'Can you put a new roof over old shingles in Charlotte NC? Compare roof overlay vs tear-off costs, warranties, NC building code limits, and when each option makes sense.',
  keywords: [
    'can you put new roof over old roof',
    'roof overlay vs tear off',
    'reroofing over existing shingles charlotte nc',
    'second layer shingles',
    'roof overlay charlotte nc',
    'reroof vs tear off cost',
    'two layers of shingles nc',
    'roof overlay pros and cons',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-overlay-vs-tear-off-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Overlay vs Tear-Off | Charlotte NC Guide | Best Roofing Now',
    description:
      'Compare roof overlay vs tear-off in Charlotte NC. NC building code, cost comparison, warranty implications, and expert recommendations.',
    url: `${SITE_CONFIG.url}/roof-overlay-vs-tear-off-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero5,
        width: 1200,
        height: 630,
        alt: 'Roof overlay vs tear-off comparison - Charlotte NC guide by Best Roofing Now',
      },
    ],
  },
};

const comparisonTable = [
  {
    factor: 'Average Cost',
    overlay: '$4,500 - $9,000',
    tearOff: '$8,000 - $25,000',
    winner: 'overlay',
  },
  {
    factor: 'Warranty Coverage',
    overlay: 'Limited; many manufacturers void coverage',
    tearOff: 'Full manufacturer warranty available',
    winner: 'tearoff',
  },
  {
    factor: 'Expected Lifespan',
    overlay: '12-18 years',
    tearOff: '20-30 years (architectural shingles)',
    winner: 'tearoff',
  },
  {
    factor: 'Deck Inspection',
    overlay: 'Cannot inspect or repair decking',
    tearOff: 'Full inspection and repair of decking',
    winner: 'tearoff',
  },
  {
    factor: 'Weight on Structure',
    overlay: 'Adds 2-3 lbs per sq ft (doubles load)',
    tearOff: 'No additional structural load',
    winner: 'tearoff',
  },
  {
    factor: 'Insurance Acceptance',
    overlay: 'Some insurers charge higher premiums',
    tearOff: 'Fully accepted by all insurers',
    winner: 'tearoff',
  },
  {
    factor: 'Installation Time',
    overlay: '1-2 days (no tear-off needed)',
    tearOff: '2-4 days (includes tear-off and disposal)',
    winner: 'overlay',
  },
  {
    factor: 'Resale Value',
    overlay: 'May concern buyers and inspectors',
    tearOff: 'Clean install preferred by buyers',
    winner: 'tearoff',
  },
];

const overlayPros = [
  'Lower upfront cost (save $2,000-$5,000 on average)',
  'Faster installation with less disruption',
  'No tear-off debris or disposal fees',
  'Less noise and mess during installation',
];

const overlayCons = [
  'Hides existing damage to decking and underlayment',
  'Adds significant weight to your roof structure',
  'Shortened lifespan compared to tear-off replacement',
  'Many manufacturer warranties are voided or reduced',
  'Makes future problems harder and more expensive to diagnose',
  'May increase insurance premiums or affect coverage',
  'Cannot install ice and water shield underlayment',
  'Reduces resale value and can complicate home sales',
];

const tearOffPros = [
  'Full inspection of decking, allowing rot and damage repair',
  'Proper installation of ice and water shield underlayment',
  'Full manufacturer warranty coverage available',
  'Longer lifespan with better long-term value',
  'No additional weight on your roof structure',
  'Clean, fresh start with optimal ventilation',
  'Preferred by home inspectors and buyers',
  'Accepted by all insurance carriers at standard rates',
];

const tearOffCons = [
  'Higher upfront cost including tear-off and disposal',
  'Longer installation time (2-4 days vs 1-2 days)',
  'More noise and debris during the project',
  'Requires dumpster and debris disposal coordination',
];

const faqs = [
  {
    question: 'Can you put new shingles over old shingles?',
    answer:
      'Yes, you can install new shingles over one existing layer of asphalt shingles in North Carolina, but most contractors recommend against it. An overlay hides potential deck damage, adds excessive weight to your structure, shortens the new roof lifespan by 20-40%, and voids many manufacturer warranties. A full tear-off provides better long-term value and protection for Charlotte homes.',
  },
  {
    question: 'How many layers of shingles are allowed in North Carolina?',
    answer:
      'North Carolina building code allows a maximum of 2 layers of asphalt shingles on a roof. If your roof already has 2 layers, a complete tear-off down to the decking is required before installing new shingles. Many Charlotte building inspectors enforce this strictly during permit inspections, and exceeding 2 layers can result in failed inspections and code violations.',
  },
  {
    question: 'Is a roof overlay cheaper than a tear-off?',
    answer:
      'A roof overlay typically costs 25-40% less upfront than a full tear-off replacement in Charlotte, saving approximately $2,000-$5,000. However, overlays last 12-18 years compared to 20-30 years for a tear-off installation. When calculated per year of roof life, a tear-off often costs less in the long run. The overlay savings come from eliminating tear-off labor, dumpster rental, and disposal fees.',
  },
  {
    question: 'Does a roof overlay void the manufacturer warranty?',
    answer:
      'Many shingle manufacturers void or significantly reduce their warranty when shingles are installed over an existing layer. GAF, CertainTeed, and Owens Corning all have specific overlay limitations. Without a manufacturer-backed warranty, you lose protection against material defects. This is one of the strongest arguments for a full tear-off when replacing your Charlotte roof.',
  },
  {
    question: 'Does insurance cover a roof overlay?',
    answer:
      'Most insurance companies cover roof overlays, but some charge higher premiums or limit coverage for overlaid roofs. If storm damage occurs, adjusters may attribute damage to the overlay installation rather than the weather event, complicating your claim. Some Charlotte-area insurers require disclosure of multiple shingle layers. Check with your carrier before choosing an overlay.',
  },
  {
    question: 'How much weight does a second layer of shingles add?',
    answer:
      'A second layer of asphalt shingles adds approximately 2 to 3 pounds per square foot to your roof, effectively doubling the roofing load on your structure. For a typical 2,000 square foot Charlotte home, that adds 4,000-6,000 pounds of additional weight. Older homes built to minimum structural standards may not safely handle this extra load, especially when combined with snow or ice accumulation.',
  },
  {
    question: 'When is a roof overlay acceptable?',
    answer:
      'A roof overlay may be acceptable when your existing roof has only one layer, the decking is confirmed to be in good condition through attic inspection, you plan to sell the home within 5-10 years, and your budget absolutely cannot accommodate a tear-off. Even then, have a structural engineer confirm your roof can handle the additional weight. Most Charlotte roofers still recommend tear-off as the better option.',
  },
  {
    question: 'When is a tear-off required instead of an overlay?',
    answer:
      'A tear-off is required when your roof already has 2 layers of shingles, the existing shingles are curled or buckled, there are signs of deck damage or rot, you want full manufacturer warranty coverage, or your roof has active leaks. Charlotte building code mandates tear-off at 2 layers, and most reputable local contractors recommend it for any roof over 20 years old regardless of layer count.',
  },
];

export default function RoofOverlayVsTearOffCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Overlay vs Tear-Off', url: `${SITE_CONFIG.url}/roof-overlay-vs-tear-off-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <WebPageSchema
        name="Roof Overlay vs Tear-Off in Charlotte NC"
        description="Compare roof overlay vs tear-off options for Charlotte NC homeowners. NC building code, costs, warranties, and expert recommendations."
        url={`${SITE_CONFIG.url}/roof-overlay-vs-tear-off-charlotte-nc`}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roof-overlay-vs-tear-off-charlotte-nc`}
        pageName="Roof Overlay vs Tear-Off Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Roof Overlay vs Tear-Off' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero5}
            alt="Roof overlay vs tear-off comparison in Charlotte NC"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4" />
              <span className="text-sm font-semibold">Homeowner Decision Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Overlay vs Tear-Off
              <br className="hidden md:block" />
              <span className="text-blue-200">Charlotte NC Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Technically yes, you can put a new roof over old shingles. But most contractors recommend a full tear-off. NC building code allows a maximum of 2 shingle layers. Overlays hide damage and void some warranties.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Before you decide, understand the real cost differences, warranty implications, and building code
              requirements. This guide from our team with {SITE_CONFIG.roofsInstalled}+ roofs installed helps you make the right choice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-white !text-blue-800 hover:bg-blue-50"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get Expert Recommendation
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-800"
                icon={<Phone className="w-5 h-5" aria-hidden="true" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-200" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-200" />
                Veteran-Owned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Scale className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Side-by-Side Comparison</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Overlay vs Tear-Off: Full Comparison
              </h2>
              <p className="text-gray text-lg">
                See how overlay and tear-off stack up across every factor that matters for Charlotte homeowners.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-light rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left py-4 px-4 font-semibold">Factor</th>
                    <th className="text-left py-4 px-4 font-semibold">Overlay</th>
                    <th className="text-left py-4 px-4 font-semibold">Tear-Off</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr key={row.factor} className={index % 2 === 0 ? 'bg-white' : 'bg-light'}>
                      <td className="py-4 px-4 font-semibold text-dark">{row.factor}</td>
                      <td className={`py-4 px-4 text-sm ${row.winner === 'overlay' ? 'text-green-700 font-semibold' : 'text-gray'}`}>
                        {row.overlay}
                      </td>
                      <td className={`py-4 px-4 text-sm ${row.winner === 'tearoff' ? 'text-green-700 font-semibold' : 'text-gray'}`}>
                        {row.tearOff}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-blue-50 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-dark mb-1">Our Recommendation</p>
                  <p className="text-gray text-sm">
                    In most cases, we recommend a full tear-off for Charlotte homes. The ability to inspect and repair
                    decking, install proper underlayment, and receive full manufacturer warranty coverage makes
                    tear-off the better long-term investment. The upfront savings of an overlay rarely justify the risks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Pros and Cons Breakdown
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Overlay */}
              <div>
                <h3 className="text-xl font-bold text-dark mb-4 text-center">Roof Overlay</h3>
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-green-500 mb-4">
                  <h4 className="font-bold text-dark mb-3 flex items-center gap-2">
                    <ThumbsUp className="w-5 h-5 text-green-500" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {overlayPros.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-red-500">
                  <h4 className="font-bold text-dark mb-3 flex items-center gap-2">
                    <ThumbsDown className="w-5 h-5 text-red-500" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {overlayCons.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray text-sm">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tear-Off */}
              <div>
                <h3 className="text-xl font-bold text-dark mb-4 text-center">Full Tear-Off</h3>
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-green-500 mb-4">
                  <h4 className="font-bold text-dark mb-3 flex items-center gap-2">
                    <ThumbsUp className="w-5 h-5 text-green-500" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {tearOffPros.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-red-500">
                  <h4 className="font-bold text-dark mb-3 flex items-center gap-2">
                    <ThumbsDown className="w-5 h-5 text-red-500" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {tearOffCons.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray text-sm">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NC Building Code Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Shield className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">NC Building Code</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                North Carolina Building Code Requirements
              </h2>
              <p className="text-gray text-lg">
                Understanding NC building code helps you make an informed decision and avoid code violations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-dark mb-3">Maximum 2 Layers</h3>
                <p className="text-gray text-sm">
                  North Carolina adopts the International Building Code, which permits a maximum of 2 layers
                  of asphalt shingles. If your roof already has 2 layers, a complete tear-off is mandatory.
                  Mecklenburg County building inspectors verify layer count during permit inspections.
                </p>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-dark mb-3">Permits Required</h3>
                <p className="text-gray text-sm">
                  Both overlay and tear-off roof replacements require a building permit in Charlotte and
                  Mecklenburg County. The permit process includes inspection to verify code compliance,
                  including proper layer count, flashing, and ventilation requirements.
                </p>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-dark mb-3">Structural Considerations</h3>
                <p className="text-gray text-sm">
                  Building code requires that the roof structure can support the total load. A second layer
                  of shingles adds 2-3 lbs per square foot. For older Charlotte homes, a structural assessment
                  may be needed to confirm the framing can handle the additional weight.
                </p>
              </div>
              <div className="bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-dark mb-3">When Tear-Off Is Mandated</h3>
                <p className="text-gray text-sm">
                  NC code requires tear-off when existing shingles are severely deteriorated, the deck is damaged,
                  there are already 2 layers, or the existing roof is not asphalt shingles. Wood shake, tile,
                  and metal roofs cannot be overlaid with asphalt shingles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Not Sure Which Option Is Right?
              </h2>
              <p className="text-white/90">
                Our inspectors will assess your existing roof and give you an honest recommendation.
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
                Schedule Free Inspection
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
                Roof Overlay vs Tear-Off FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions Charlotte homeowners ask about overlays and tear-offs.
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

      {/* Related Pages */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Related Resources</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: 'Roof Replacement', href: '/services/roof-replacement', desc: 'Full replacement options and costs' },
                { title: 'Roofing Permits', href: '/roofing-permits-charlotte-nc', desc: 'Charlotte permit requirements' },
                { title: 'How Many Estimates?', href: '/how-many-roof-estimates-charlotte-nc', desc: 'Getting and comparing quotes' },
                { title: 'Signs You Need New Roof', href: '/signs-you-need-new-roof-charlotte-nc', desc: '10 warning signs to watch for' },
                { title: 'Replace Before Selling?', href: '/replace-roof-before-selling-charlotte-nc', desc: 'ROI and home sale impact' },
                { title: 'Financing Options', href: '/roof-financing-charlotte-nc', desc: 'Flexible payment plans available' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group bg-light rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-dark group-hover:text-primary transition-colors mb-1">
                    {link.title}
                  </h3>
                  <p className="text-gray text-sm">{link.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="service"
        city="Charlotte"
        slug="roof-overlay-vs-tear-off-charlotte-nc"
        count={4}
        title="Recent Roof Replacements in Charlotte, NC"
        subtitle="Browse completed tear-off and replacement projects by Best Roofing Now across the Charlotte metro area."
        schemaPageUrl={`${SITE_CONFIG.url}/roof-overlay-vs-tear-off-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roof Replacement"
      />

      <CTASection
        title="Get an Honest Overlay vs Tear-Off Assessment"
        subtitle="Our certified inspectors will evaluate your existing roof layers, decking condition, and structural capacity to recommend the right approach. Free inspections for all Charlotte area homeowners."
      />
    </>
  );
}
