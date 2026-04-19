import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Building,
  Calendar,
  CheckCircle,
  ClipboardCheck,
  Clock,
  DollarSign,
  FileText,
  HelpCircle,
  Phone,
  Shield,
  Star,
  UserCheck,
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
  title: 'Roofing Permits Charlotte NC',
  description:
    'Do you need a permit to replace a roof in Charlotte NC? Yes. Learn about Mecklenburg County roofing permits, costs ($100-$300), timeline, inspections, and why your contractor should pull the permit.',
  keywords: [
    'roofing permits charlotte nc',
    'do I need permit for roof replacement',
    'mecklenburg county roofing permit',
    'charlotte nc building permit roof',
    'roofing permit cost charlotte',
    'who pulls roofing permit',
    'roof replacement permit nc',
    'building permit for roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roofing-permits-charlotte-nc`,
  },
  openGraph: {
    title: 'Roofing Permits Charlotte NC | Complete Guide | Best Roofing Now',
    description:
      'Everything you need to know about roofing permits in Charlotte and Mecklenburg County. Costs, timeline, process, and requirements.',
    url: `${SITE_CONFIG.url}/roofing-permits-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero5,
        width: 1200,
        height: 630,
        alt: 'Roofing permits in Charlotte NC - complete guide by Best Roofing Now',
      },
    ],
  },
};

const permitSteps = [
  {
    step: 1,
    title: 'Contractor Submits Application',
    description:
      'Your licensed roofing contractor submits a building permit application to Mecklenburg County Code Enforcement. The application includes the property address, scope of work, material specifications, and the contractor license number.',
    timeline: 'Day 1',
  },
  {
    step: 2,
    title: 'County Reviews Application',
    description:
      'Mecklenburg County reviews the permit application to ensure the proposed work meets NC building code requirements. They verify the contractor license, check property records, and confirm the project scope is within code limits.',
    timeline: '1-3 business days',
  },
  {
    step: 3,
    title: 'Permit Issued',
    description:
      'Once approved, the county issues the building permit. The permit must be posted visibly at the job site before work begins. Most residential roofing permits in Charlotte are approved within 1-3 business days for straightforward replacements.',
    timeline: 'Same day as approval',
  },
  {
    step: 4,
    title: 'Roofing Work Performed',
    description:
      'The contractor performs the roof replacement according to the approved scope of work. All work must comply with the NC Residential Building Code, including proper underlayment, flashing, ventilation, and fastening requirements.',
    timeline: '1-5 days depending on scope',
  },
  {
    step: 5,
    title: 'Final Inspection Requested',
    description:
      'After the roof is completed, the contractor requests a final inspection from Mecklenburg County. The inspector verifies that the work matches the permit, meets code requirements, and was performed by a licensed contractor.',
    timeline: 'Scheduled within 1-3 business days',
  },
  {
    step: 6,
    title: 'Inspection Passed and Permit Closed',
    description:
      'The county inspector examines the completed roof, checking material installation, flashing, ventilation, and overall code compliance. Once passed, the permit is closed and the job is officially complete with a clean record.',
    timeline: 'Same day as inspection',
  },
];

const permitFacts = [
  { icon: DollarSign, label: 'Permit Cost', value: '$100 - $300', detail: 'Based on project scope and valuation' },
  { icon: Clock, label: 'Approval Time', value: '1-3 Business Days', detail: 'For standard residential re-roofing' },
  { icon: UserCheck, label: 'Who Pulls It', value: 'Your Contractor', detail: 'Licensed contractors handle the process' },
  { icon: ClipboardCheck, label: 'Inspections', value: '1 Final Inspection', detail: 'After work is completed' },
];

const consequences = [
  {
    title: 'Fines and Penalties',
    description: 'Mecklenburg County can levy fines for unpermitted work. Penalties increase if the violation is not corrected promptly.',
  },
  {
    title: 'Required Removal',
    description: 'In extreme cases, the county can require removal and reinstallation of the roof with a proper permit, doubling your cost.',
  },
  {
    title: 'Insurance Complications',
    description: 'Your homeowner insurance may deny claims related to unpermitted roof work, leaving you unprotected against storm damage.',
  },
  {
    title: 'Home Sale Problems',
    description: 'Unpermitted work shows up during title searches and home inspections. It can delay or kill a sale and reduce your home value.',
  },
  {
    title: 'Warranty Voidance',
    description: 'Manufacturer warranties may be voided if the roof was installed without required permits and inspections.',
  },
  {
    title: 'Code Violation on Record',
    description: 'An open or violated permit stays on your property record with Mecklenburg County until resolved, complicating future projects.',
  },
];

const faqs = [
  {
    question: 'Do I need a permit to replace my roof in Charlotte NC?',
    answer:
      'Yes, Charlotte and Mecklenburg County require a building permit for roof replacement. This applies to both full replacements and re-roofing over existing shingles. The permit ensures the work meets North Carolina building code requirements for materials, installation methods, and structural integrity. Your contractor should handle the entire permit process as part of the project.',
  },
  {
    question: 'How much does a roofing permit cost in Charlotte?',
    answer:
      'A roofing permit in Charlotte and Mecklenburg County typically costs between $100 and $300, depending on the project scope and property valuation. The exact fee is calculated based on the estimated project cost. Most reputable contractors include the permit fee in their overall estimate, so you should not need to pay it separately. Ask your contractor to confirm the permit cost is included.',
  },
  {
    question: 'How long does it take to get a roofing permit in Charlotte?',
    answer:
      'Standard residential roofing permits in Charlotte are typically approved within 1 to 3 business days after the application is submitted. Simple re-roofing permits may be approved same-day in some cases. More complex projects involving structural changes or commercial roofs may take longer. Your contractor submits the application and monitors the approval status.',
  },
  {
    question: 'Who is responsible for pulling the roofing permit?',
    answer:
      'Your roofing contractor should pull the building permit for your roof replacement. In Mecklenburg County, the permit applicant must hold a valid NC general contractor or roofing contractor license. If a contractor suggests that you pull the permit yourself or skip it entirely, that is a major red flag indicating they may be unlicensed or trying to avoid accountability.',
  },
  {
    question: 'What happens if I replace my roof without a permit?',
    answer:
      'Replacing your roof without a permit in Charlotte can result in fines from Mecklenburg County, insurance claim denials, warranty voidance, and problems selling your home. The county can require you to remove and reinstall the roof with proper permitting, effectively doubling your cost. Unpermitted work also shows up during title searches, potentially blocking future home sales.',
  },
  {
    question: 'Do I need a permit for a roof repair in Charlotte?',
    answer:
      'Minor roof repairs in Charlotte, such as replacing a few shingles or resealing flashing, generally do not require a permit. However, significant repairs covering more than 100 square feet or involving structural changes do require a permit. If you are unsure whether your repair needs a permit, your contractor can check with Mecklenburg County Code Enforcement to confirm.',
  },
  {
    question: 'What inspections are required for a roofing permit?',
    answer:
      'Residential roofing permits in Charlotte typically require one final inspection after the work is completed. The Mecklenburg County inspector verifies that the roof was installed according to code, checks material specifications, examines flashing and ventilation, and confirms the work matches the approved permit scope. Your contractor schedules the inspection after the job is finished.',
  },
  {
    question: 'Do I need HOA approval in addition to a permit?',
    answer:
      'If your Charlotte home is in an HOA community, you likely need HOA approval in addition to the Mecklenburg County building permit. HOAs typically regulate shingle color, style, and material to maintain neighborhood aesthetics. Submit your roofing plans to your HOA before work begins, as violations can result in fines and required changes. Your contractor can help with the HOA submission.',
  },
];

export default function RoofingPermitsCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roofing Permits Charlotte NC', url: `${SITE_CONFIG.url}/roofing-permits-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <WebPageSchema
        name="Roofing Permits in Charlotte NC"
        description="Complete guide to roofing permits in Charlotte and Mecklenburg County. Costs, timeline, process, and requirements."
        url={`${SITE_CONFIG.url}/roofing-permits-charlotte-nc`}
      />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/roofing-permits-charlotte-nc`}
        pageName="Roofing Permits Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Roofing Permits Charlotte NC' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage
            src={IMAGES.hero.hero5}
            alt="Roofing permits in Charlotte NC - complete guide"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-semibold">Permit Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roofing Permits
              <br className="hidden md:block" />
              <span className="text-blue-200">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Yes, Charlotte and Mecklenburg County require a building permit for roof replacement. Your contractor should pull the permit — if they suggest you do it yourself, that&apos;s a red flag.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              This guide covers the permit process, costs, timeline, inspections, and what happens if you skip
              the permit. From our team with {SITE_CONFIG.roofsInstalled}+ permitted roofs installed across the Charlotte metro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-white !text-blue-800 hover:bg-blue-50"
                icon={<Calendar className="w-5 h-5" aria-hidden="true" />}
              >
                Get a Permitted Estimate
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

      {/* Quick Facts */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <Building className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Quick Facts</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Charlotte Roofing Permit Quick Facts
              </h2>
              <p className="text-gray text-lg">
                Here is what you need to know about roofing permits in Charlotte and Mecklenburg County at a glance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {permitFacts.map((fact) => (
                <div key={fact.label} className="bg-light rounded-xl p-5 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <fact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-gray mb-1">{fact.label}</p>
                  <p className="font-bold text-dark text-lg">{fact.value}</p>
                  <p className="text-xs text-gray mt-1">{fact.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Step-by-Step</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                The Charlotte Roofing Permit Process
              </h2>
              <p className="text-gray text-lg">
                Here is what happens from permit application to final inspection when you replace your roof in Charlotte.
              </p>
            </div>

            <div className="space-y-6">
              {permitSteps.map((step) => (
                <div key={step.step} className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="font-bold text-dark">{step.title}</h3>
                      <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-semibold">
                        <Clock className="w-3 h-3" />
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-gray text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-dark mb-1">Best Roofing Now Handles Everything</p>
                  <p className="text-gray text-sm">
                    We handle the entire permit process for you, from application submission to final inspection
                    scheduling. The permit fee is included in our estimate, and we ensure every job passes
                    Mecklenburg County inspection on the first visit. You never have to visit a county office or
                    deal with permit paperwork.
                  </p>
                </div>
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
                Need a Fully Permitted Roof Replacement?
              </h2>
              <p className="text-white/90">
                We handle all permits, inspections, and code compliance so you do not have to.
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
                Schedule Free Estimate
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

      {/* Consequences of Skipping Permit */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 rounded-full px-4 py-2 mb-4">
                <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Warning</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                What Happens Without a Permit
              </h2>
              <p className="text-gray text-lg">
                Skipping the permit to save a few hundred dollars can cost thousands down the road.
                Here are the real consequences of unpermitted roof work in Charlotte.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {consequences.map((item) => (
                <div key={item.title} className="bg-red-50 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                      <p className="text-gray text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NC Contractor License Requirements */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <UserCheck className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Contractor Requirements</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                NC Contractor License Requirements
              </h2>
              <p className="text-gray text-lg">
                North Carolina has specific licensing requirements for roofing contractors. Here is what to verify.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-3">License Requirements</h3>
                <ul className="space-y-2">
                  {[
                    'NC General Contractor license required for projects over $30,000',
                    'Roofing contractors must register with the NC Licensing Board',
                    'Workers compensation insurance required for 3+ employees',
                    'General liability insurance minimum of $500,000 recommended',
                    'License number must appear on contracts and permits',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-dark mb-3">How to Verify</h3>
                <ul className="space-y-2">
                  {[
                    'Search the NC Licensing Board database online',
                    'Ask for the contractor license number directly',
                    'Request certificates of insurance and call the carrier',
                    'Check BBB accreditation and complaint history',
                    'Verify Google reviews and local references',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
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
                  <p className="font-semibold text-dark mb-1">HOA Requirements</p>
                  <p className="text-gray text-sm">
                    Many Charlotte neighborhoods have HOAs that require approval before roofing work begins.
                    HOA requirements typically cover shingle color, style, and material type. Submit your plans
                    to your HOA architectural review committee before your contractor pulls the permit. HOA approval
                    and building permits are separate processes, and you need both.
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
                Charlotte Roofing Permit FAQs
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions Charlotte homeowners ask about roofing permits and inspections.
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
                { title: 'Roof Replacement', href: '/services/roof-replacement', desc: 'Full replacement options and costs' },
                { title: 'How Many Estimates?', href: '/how-many-roof-estimates-charlotte-nc', desc: 'Getting and comparing quotes' },
                { title: 'Overlay vs Tear-Off', href: '/roof-overlay-vs-tear-off-charlotte-nc', desc: 'Compare replacement methods' },
                { title: 'Signs You Need New Roof', href: '/signs-you-need-new-roof-charlotte-nc', desc: '10 warning signs to watch for' },
                { title: 'Free Roof Inspection', href: '/roof-inspection-charlotte-nc', desc: 'Schedule a professional assessment' },
                { title: 'Roofing Handbook', href: '/charlotte-roofing-handbook', desc: 'Complete homeowner guide' },
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
        slug="roofing-permits-charlotte-nc"
        count={4}
        title="Recent Permitted Roof Projects in Charlotte, NC"
        subtitle="Browse completed and fully permitted roofing projects by Best Roofing Now across the Charlotte metro area."
        schemaPageUrl={`${SITE_CONFIG.url}/roofing-permits-charlotte-nc`}
      />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roofing Permits"
      />

      <CTASection
        title="Get a Fully Permitted Roof Replacement"
        subtitle="We handle all Mecklenburg County permits, inspections, and code compliance. Our estimates include permit fees with no hidden costs. Free estimates for all Charlotte area homeowners."
      />
    </>
  );
}
