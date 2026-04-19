import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BarChart3,
  Calendar,
  CheckCircle,
  ClipboardList,
  DollarSign,
  HelpCircle,
  Home,
  Phone,
  Search,
  Shield,
  Star,
  TrendingUp,
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
  title: 'Replace Roof Before Selling?',
  description:
    'Should you replace your roof before selling your Charlotte NC home? A new roof adds $12,000-$15,000 in value with 61-65% ROI. Learn when to replace, offer credit, or sell as-is.',
  keywords: [
    'should I replace roof before selling',
    'new roof before selling house charlotte nc',
    'roof replacement ROI',
    'does new roof increase home value charlotte',
    'roof replacement for home sale',
    'new roof return on investment',
    'selling house with old roof',
    'roof condition home sale charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/replace-roof-before-selling-charlotte-nc`,
  },
  openGraph: {
    title: 'Replace Roof Before Selling? | Charlotte NC Guide | Best Roofing Now',
    description:
      'Should you replace your roof before selling in Charlotte NC? ROI data, decision framework, and expert advice for home sellers.',
    url: `${SITE_CONFIG.url}/replace-roof-before-selling-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero5,
        width: 1200,
        height: 630,
        alt: 'Replace roof before selling your Charlotte NC home - guide by Best Roofing Now',
      },
    ],
  },
};

const decisionOptions = [
  {
    title: 'Replace the Roof',
    icon: CheckCircle,
    color: 'green',
    borderColor: 'border-green-500',
    iconColor: 'text-green-500',
    bgColor: 'bg-green-100',
    when: [
      'Roof is visibly damaged with missing or curling shingles',
      'Roof is over 20 years old and shows clear aging',
      'Home inspection will likely flag the roof as a major issue',
      'FHA or VA buyers need a sound roof for loan approval',
      'Your market is competitive and curb appeal matters',
      'Roof damage is severe enough to scare off buyers',
    ],
    result: 'A new roof removes a major negotiation point, broadens your buyer pool, and can increase sale price by $12,000-$15,000.',
  },
  {
    title: 'Offer Credit at Closing',
    icon: DollarSign,
    color: 'blue',
    borderColor: 'border-blue-500',
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-100',
    when: [
      'Roof has 5-10 years of life remaining',
      'You want to avoid the hassle and delay of replacement',
      'Buyers want to choose their own contractor or materials',
      'Your home is priced to account for roof condition',
      'The market favors sellers and buyers have fewer options',
      'Roof is functional but cosmetically worn',
    ],
    result: 'A credit of $5,000-$10,000 lets buyers handle the roof on their terms while keeping your sale moving forward.',
  },
  {
    title: 'Sell As-Is',
    icon: Home,
    color: 'amber',
    borderColor: 'border-amber-500',
    iconColor: 'text-amber-500',
    bgColor: 'bg-amber-100',
    when: [
      'Roof is in acceptable condition with 10+ years remaining',
      'You are selling to investors or cash buyers',
      'You need to close quickly and cannot wait for replacement',
      'The roof passes basic inspection requirements',
      'You price the home to reflect the roof condition',
      'Your market is hot enough that condition matters less',
    ],
    result: 'Selling as-is avoids upfront costs but may result in lower offers, longer time on market, or buyer requests for concessions.',
  },
];

const roiData = [
  { label: 'Average Charlotte Roof Replacement Cost', value: '$8,000 - $15,000' },
  { label: 'Average Value Added to Home', value: '$12,000 - $15,000' },
  { label: 'Return on Investment (ROI)', value: '61% - 65%' },
  { label: 'National Average ROI (Remodeling Magazine)', value: '61.1%' },
  { label: 'Curb Appeal Impact', value: 'High - first thing buyers see' },
  { label: 'Days on Market Reduction', value: '10-15 fewer days on average' },
];

const inspectorChecklist = [
  { item: 'Age of the roof', detail: 'Inspectors note the installation date and compare to expected lifespan for the material type' },
  { item: 'Missing or damaged shingles', detail: 'Any visible damage is flagged as a repair or replacement need in the report' },
  { item: 'Signs of leaks or water damage', detail: 'Stains on attic sheathing, ceiling, or walls indicate active or past roof leaks' },
  { item: 'Condition of flashing', detail: 'Deteriorated flashing around vents, chimneys, and valleys is a common failure point' },
  { item: 'Proper ventilation', detail: 'Inadequate attic ventilation shortens roof life and causes moisture problems' },
  { item: 'Gutter condition', detail: 'Excess granules in gutters indicate shingle deterioration nearing end of life' },
  { item: 'Structural integrity', detail: 'Sagging or uneven rooflines signal potential structural issues that concern buyers' },
  { item: 'Number of shingle layers', detail: 'Multiple layers suggest previous overlay work and may indicate deferred maintenance' },
];

const faqs = [
  {
    question: 'Does a new roof increase home value?',
    answer:
      'Yes, a new roof increases home value by an average of $12,000 to $15,000, representing a 61-65% return on investment according to Remodeling Magazine data. In Charlotte NC, where curb appeal significantly influences buyer interest, a new roof can also reduce days on market by 10-15 days. Buyers perceive a new roof as one less major expense to worry about after purchase.',
  },
  {
    question: 'What is the ROI on a new roof when selling a house?',
    answer:
      'The national average ROI on a new asphalt shingle roof is 61.1% according to the 2024 Remodeling Magazine Cost vs Value report. In Charlotte NC, the ROI can reach 65% or higher in competitive markets where move-in ready homes command premium prices. While you do not recover 100% of the cost, the roof pays for itself through faster sale, fewer negotiations, and broader buyer appeal.',
  },
  {
    question: 'Do home buyers care about roof age?',
    answer:
      'Home buyers absolutely care about roof age, and it is one of the first questions most buyers and their agents ask. A roof over 15 years old raises concerns about remaining lifespan, potential repair costs, and insurance complications. In Charlotte, some insurance companies refuse to write new policies on roofs over 20 years old, which can directly block a sale if the buyer cannot obtain coverage.',
  },
  {
    question: 'Will a bad roof kill a home sale?',
    answer:
      'A bad roof can absolutely kill a home sale. Roof issues are among the top reasons buyers walk away from a deal after inspection. A damaged or aging roof signals deferred maintenance, creates insurance obstacles, and can cause FHA and VA loan denials. Even cash buyers will use roof condition to negotiate significant price reductions. In Charlotte, roof condition is a deal breaker for roughly 1 in 5 transactions.',
  },
  {
    question: 'Can I offer a roof credit instead of replacing it?',
    answer:
      'Yes, offering a credit at closing is a common alternative to replacing the roof before selling. Typical roof credits in Charlotte range from $5,000 to $10,000 depending on roof condition and replacement cost. Credits let buyers choose their own contractor and materials. However, credits may not satisfy FHA or VA loan requirements if the roof does not meet minimum condition standards.',
  },
  {
    question: 'What do home inspectors look for on a roof?',
    answer:
      'Home inspectors examine shingle condition, flashing integrity, signs of leaks or water damage, attic ventilation, gutter health, structural integrity, and the number of existing shingle layers. They note the estimated age of the roof and flag any items that need repair or replacement. In Charlotte, inspectors pay special attention to storm damage indicators given the region frequent severe weather events.',
  },
  {
    question: 'What are FHA and VA roof requirements?',
    answer:
      'FHA and VA loans require that the roof has at least 2 years of remaining useful life and shows no active leaks. The roof must be weathertight with no missing shingles, deteriorated flashing, or visible damage. If the roof fails these requirements, the lender will not approve the loan until repairs are made. This is especially important in Charlotte where many first-time buyers use FHA and VA financing.',
  },
  {
    question: 'How should I price my home if the roof needs replacing?',
    answer:
      'If your roof needs replacing, price your home to reflect the cost by reducing the asking price by the estimated replacement amount minus the value a new roof would add. For example, if replacement costs $12,000 and adds $10,000 in value, reduce your price by approximately $5,000-$8,000. Work with your Charlotte real estate agent to position the pricing transparently, as buyers will discover roof issues during inspection.',
  },
];

export default function ReplaceRoofBeforeSellingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Replace Roof Before Selling?', url: `${SITE_CONFIG.url}/replace-roof-before-selling-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <WebPageSchema
        name="Should You Replace Your Roof Before Selling in Charlotte NC"
        description="Decision guide for Charlotte NC home sellers: replace the roof, offer credit, or sell as-is. ROI data and expert advice."
        url={`${SITE_CONFIG.url}/replace-roof-before-selling-charlotte-nc`}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/replace-roof-before-selling-charlotte-nc`}
        pageName="Replace Roof Before Selling Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Replace Roof Before Selling?' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero5}
            alt="Should you replace your roof before selling in Charlotte NC"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">Home Seller&apos;s Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Replace Your Roof
              <br className="hidden md:block" />
              <span className="text-blue-200">Before Selling?</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              A new roof can increase home value by $12,000-$15,000 on average, with a 61-65% ROI. Replace if your roof threatens the sale, the lender requires it, or visible damage reduces curb appeal.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              This guide helps Charlotte home sellers decide whether to replace, offer a credit, or sell as-is
              based on roof condition, market conditions, and buyer financing requirements. From our team
              with {SITE_CONFIG.roofsInstalled}+ roofs installed across the Charlotte metro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/roof-inspection-charlotte-nc"
                variant="primary"
                size="lg"
                className="bg-white !text-blue-800 hover:bg-blue-50"
                icon={<Search className="w-5 h-5" aria-hidden="true" />}
              >
                Get Pre-Sale Roof Inspection
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

      {/* ROI Data Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <BarChart3 className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">ROI Data</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                New Roof ROI for Charlotte Home Sellers
              </h2>
              <p className="text-gray text-lg">
                Here is what the data says about the financial impact of a new roof on your Charlotte home sale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {roiData.map((item) => (
                <div key={item.label} className="bg-light rounded-xl p-5 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray">{item.label}</p>
                    <p className="font-bold text-dark text-lg">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-blue-50 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-dark mb-1">Charlotte Market Context</p>
                  <p className="text-gray text-sm">
                    Charlotte&apos;s real estate market remains competitive, with buyers increasingly prioritizing
                    move-in ready homes. A new roof signals that the home has been well-maintained and removes
                    one of the largest potential negotiation items. In multiple-offer situations, homes with
                    new roofs often win over comparable homes with aging roofs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Your Decision Framework
              </h2>
              <p className="text-gray text-lg">
                Three options for handling your roof before listing. Choose based on roof condition, timeline, and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {decisionOptions.map((option) => (
                <div key={option.title} className={`bg-white rounded-xl p-6 shadow-md border-t-4 ${option.borderColor}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${option.bgColor} rounded-lg flex items-center justify-center`}>
                      <option.icon className={`w-5 h-5 ${option.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-dark">{option.title}</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray mb-3">Best when:</p>
                  <ul className="space-y-2 mb-4">
                    {option.when.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray text-sm">
                        <ArrowRight className={`w-4 h-4 ${option.iconColor} flex-shrink-0 mt-0.5`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-light rounded-lg p-3">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Result:</span> {option.result}
                    </p>
                  </div>
                </div>
              ))}
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
                Selling Your Charlotte Home?
              </h2>
              <p className="text-white/90">
                Get a free pre-sale roof inspection with a detailed condition report you can share with buyers.
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
                Schedule Pre-Sale Inspection
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

      {/* Home Inspector Checklist */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <ClipboardList className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Inspection Checklist</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                What Home Inspectors Check on Your Roof
              </h2>
              <p className="text-gray text-lg">
                Know what buyers will discover during inspection so you can address issues proactively.
              </p>
            </div>

            <div className="space-y-4">
              {inspectorChecklist.map((item, index) => (
                <div key={index} className="bg-light rounded-xl p-5 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Search className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">{item.item}</h3>
                    <p className="text-gray text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FHA/VA Requirements */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 rounded-full px-4 py-2 mb-4">
                <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Loan Requirements</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                FHA and VA Roof Requirements
              </h2>
              <p className="text-gray text-lg">
                If your buyer uses FHA or VA financing, the roof must meet specific condition standards or the loan will not close.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-blue-500">
                <h3 className="text-lg font-bold text-dark mb-4">FHA Loan Requirements</h3>
                <ul className="space-y-3">
                  {[
                    'Roof must have at least 2 years of remaining useful life',
                    'No active leaks or evidence of moisture intrusion',
                    'No missing, damaged, or curling shingles',
                    'Flashing must be intact around all penetrations',
                    'No more than 3 layers of roofing material',
                    'Appraiser must certify roof condition in report',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-green-500">
                <h3 className="text-lg font-bold text-dark mb-4">VA Loan Requirements</h3>
                <ul className="space-y-3">
                  {[
                    'Roof must be in good repair and weathertight',
                    'No active or recent leaks visible',
                    'Sufficient remaining useful life (typically 2+ years)',
                    'Adequate attic ventilation and insulation',
                    'No structural deficiencies in roof framing',
                    'VA appraiser has final say on acceptability',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-amber-50 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-dark mb-1">Important for Charlotte Sellers</p>
                  <p className="text-gray text-sm">
                    Charlotte has a large military community and many first-time homebuyers who use FHA and VA loans.
                    If your roof does not meet these requirements, you exclude a significant portion of potential buyers.
                    A pre-sale inspection helps you know where you stand before listing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Selling Your Home with Roof Questions
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions Charlotte home sellers ask about roof replacement and home value.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Related Resources</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: 'Free Roof Inspection', href: '/roof-inspection-charlotte-nc', desc: 'Get a pre-sale assessment' },
                { title: 'Roof Replacement', href: '/services/roof-replacement', desc: 'Full replacement options and costs' },
                { title: 'How Many Estimates?', href: '/how-many-roof-estimates-charlotte-nc', desc: 'Getting and comparing quotes' },
                { title: 'Signs You Need New Roof', href: '/signs-you-need-new-roof-charlotte-nc', desc: '10 warning signs to watch for' },
                { title: 'Financing Options', href: '/roof-financing-charlotte-nc', desc: 'Flexible payment plans available' },
                { title: 'Insurance Claims', href: '/insurance-claim-roofing-charlotte-nc', desc: 'Storm damage claim help' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
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
        slug="replace-roof-before-selling-charlotte-nc"
        count={4}
        title="Recent Roof Replacements in Charlotte, NC"
        subtitle="Browse completed roof replacement projects by Best Roofing Now across the Charlotte metro area."
        schemaPageUrl={`${SITE_CONFIG.url}/replace-roof-before-selling-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roof Replacement"
      />

      <CTASection
        title="Get a Free Pre-Sale Roof Assessment"
        subtitle="Our certified inspectors will evaluate your roof condition and give you an honest recommendation on whether to replace, repair, or sell as-is. Free for all Charlotte area home sellers."
      />
    </>
  );
}
