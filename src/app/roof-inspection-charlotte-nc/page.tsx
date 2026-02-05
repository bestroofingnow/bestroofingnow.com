import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  ArrowRight,
  Clock,
  ClipboardCheck,
  CloudRain,
  Home,
  DollarSign,
  AlertTriangle,
  Camera,
  FileText,
  HelpCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ServiceSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof Inspection Charlotte NC | Free',
  description:
    'Schedule your FREE roof inspection in Charlotte NC today. Comprehensive inspections include drone technology, detailed reports, and expert recommendations. No obligation. Call (704) 605-6047.',
  keywords: [
    'roof inspection charlotte nc',
    'free roof inspection charlotte',
    'roof inspection near me',
    'roof inspector charlotte nc',
    'charlotte roof inspection services',
    'roof assessment charlotte',
    'roof condition report charlotte nc',
    'professional roof inspection charlotte',
    'annual roof inspection charlotte',
    'storm damage roof inspection',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-inspection-charlotte-nc`,
  },
  openGraph: {
    title: 'Roof Inspection Charlotte NC | Free Roof Inspections | Best Roofing Now',
    description:
      'Get a FREE comprehensive roof inspection in Charlotte NC. Drone technology, detailed reports, no obligation. BBB A+ rated. Call (704) 605-6047.',
    url: `${SITE_CONFIG.url}/roof-inspection-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.services.inspection,
        width: 1200,
        height: 630,
        alt: 'Free roof inspection in Charlotte NC by Best Roofing Now',
      },
    ],
  },
};

// Roof inspection FAQs optimized for featured snippets
const inspectionFAQs = [
  {
    question: 'How much does a roof inspection cost in Charlotte NC?',
    answer:
      'At Best Roofing Now, roof inspections in Charlotte NC are completely FREE with no obligation. We believe homeowners deserve to know their roof\'s condition before making any decisions. Our free inspection includes a comprehensive assessment, photos, and a detailed written report. Some companies charge $100-$300 for inspections, but we waive this fee because we\'re confident in our honest, no-pressure approach.',
  },
  {
    question: 'How long does a roof inspection take in Charlotte?',
    answer:
      'A thorough roof inspection in Charlotte typically takes 30-60 minutes, depending on your roof\'s size and complexity. Our inspectors examine every component: shingles, flashing, vents, gutters, soffits, and attic ventilation. We use drone technology for hard-to-reach areas, which allows us to complete inspections efficiently while capturing detailed imagery. You\'ll receive your report the same day.',
  },
  {
    question: 'What do roof inspectors look for during an inspection?',
    answer:
      'Professional roof inspectors examine: shingle condition (cracking, curling, missing granules), flashing around chimneys and vents, gutter condition and drainage, soffit and fascia damage, attic ventilation, signs of water damage or leaks, structural integrity of the roof deck, and any storm damage from hail or wind. We document everything with photos and provide detailed recommendations.',
  },
  {
    question: 'How often should I get my roof inspected in Charlotte?',
    answer:
      'In Charlotte NC, we recommend annual roof inspections, plus inspections after any significant storm. Charlotte\'s climate - with hot summers, occasional ice storms, and frequent thunderstorms - can stress roofing materials. Annual inspections catch small issues before they become expensive repairs. If your roof is over 15 years old, semi-annual inspections are wise.',
  },
  {
    question: 'Should I get a roof inspection before buying a home in Charlotte?',
    answer:
      'Absolutely! A pre-purchase roof inspection in Charlotte is essential before buying a home. The roof is one of the most expensive components to replace ($8,000-$25,000+). Our inspection reveals the roof\'s true condition, remaining lifespan, and any needed repairs. This information is valuable for negotiations and helps you avoid unexpected expenses after closing.',
  },
  {
    question: 'Do you inspect roofs after storms in Charlotte?',
    answer:
      'Yes, we provide priority storm damage inspections for Charlotte homeowners. After hail, wind, or severe weather, we can typically inspect your roof within 24-48 hours. We document all damage thoroughly for insurance claims, including date-stamped photos and detailed measurements. This documentation is crucial for getting fair insurance settlements.',
  },
  {
    question: 'What happens if damage is found during my roof inspection?',
    answer:
      'If our inspection reveals damage, we provide you with honest options - not sales pressure. For minor issues, we\'ll explain what repairs are needed and their approximate cost. For significant damage, we\'ll discuss whether repair or replacement makes more sense. If storm damage is found, we help with the insurance claim process. There\'s never any obligation.',
  },
  {
    question: 'Can you inspect my roof for solar panel installation?',
    answer:
      'Yes, we offer roof assessments for solar panel installation in Charlotte. Before installing solar panels, it\'s essential to ensure your roof is in good condition and can support the additional equipment for 25+ years. We\'ll evaluate your roof\'s structural integrity, remaining lifespan, and any repairs needed before solar installation.',
  },
];

// Inspection checklist items
const inspectionChecklist = [
  { item: 'Shingle condition assessment', description: 'Check for cracking, curling, missing granules, and lifted edges' },
  { item: 'Flashing inspection', description: 'Examine all flashing around chimneys, vents, skylights, and walls' },
  { item: 'Gutter and downspout evaluation', description: 'Assess drainage, clogs, and proper water flow' },
  { item: 'Soffit and fascia check', description: 'Look for rot, damage, and proper ventilation' },
  { item: 'Attic ventilation assessment', description: 'Ensure proper airflow to prevent heat and moisture buildup' },
  { item: 'Roof deck inspection', description: 'Check for sagging, soft spots, or structural issues' },
  { item: 'Pipe boot and vent assessment', description: 'Inspect rubber boots and seals around penetrations' },
  { item: 'Valley inspection', description: 'Examine valleys where water flows for proper drainage' },
  { item: 'Ridge cap evaluation', description: 'Check ridge caps for damage and proper sealing' },
  { item: 'Moss and algae check', description: 'Identify organic growth that can damage shingles' },
];

// Types of inspections
const inspectionTypes = [
  {
    icon: Calendar,
    title: 'Annual Maintenance Inspection',
    description: 'Proactive yearly inspections to catch small issues before they become expensive problems. Ideal for extending your roof\'s lifespan.',
    benefit: 'Prevent costly repairs',
  },
  {
    icon: CloudRain,
    title: 'Storm Damage Inspection',
    description: 'Thorough assessment after hail, wind, or severe weather. Complete documentation for insurance claims with date-stamped photos.',
    benefit: 'Maximize insurance claims',
  },
  {
    icon: Home,
    title: 'Pre-Purchase Inspection',
    description: 'Essential for homebuyers. Know exactly what you\'re buying and use findings in purchase negotiations.',
    benefit: 'Make informed decisions',
  },
  {
    icon: FileText,
    title: 'Insurance Claim Inspection',
    description: 'Detailed documentation to support your insurance claim. We meet with adjusters and advocate for fair settlements.',
    benefit: 'Expert claim support',
  },
];

// Inspection process steps
const inspectionProcess = [
  {
    step: 1,
    title: 'Schedule Your Free Inspection',
    description: 'Call or fill out our form to book a convenient time. We offer same-day and next-day appointments for most Charlotte areas.',
  },
  {
    step: 2,
    title: 'Comprehensive Roof Assessment',
    description: 'Our certified inspector examines every component of your roof, using drone technology for detailed aerial views of hard-to-reach areas.',
  },
  {
    step: 3,
    title: 'Photo Documentation',
    description: 'We capture high-resolution photos of your entire roof, documenting current conditions and any areas of concern.',
  },
  {
    step: 4,
    title: 'Detailed Written Report',
    description: 'Receive a comprehensive report with photos, findings, and honest recommendations - delivered the same day.',
  },
  {
    step: 5,
    title: 'No-Obligation Consultation',
    description: 'We review the findings with you, answer questions, and provide options if any work is needed. Zero pressure, ever.',
  },
];

// Signs you need an inspection
const inspectionSigns = [
  'Your roof is 15+ years old',
  'Missing, cracked, or curling shingles',
  'Granules in gutters or downspouts',
  'Water stains on ceilings or walls',
  'Daylight visible through the attic',
  'Sagging areas on the roof',
  'Higher than normal energy bills',
  'Recent severe storm in your area',
  'Buying or selling a home',
  'Visible moss or algae growth',
];

// Service object for schema
const inspectionService = {
  slug: 'roof-inspection-charlotte-nc',
  title: 'Free Roof Inspection Charlotte NC',
  description:
    'Comprehensive free roof inspections in Charlotte NC. Drone technology, detailed reports, and expert recommendations. No obligation, no pressure.',
};

export default function RoofInspectionCharlottePage() {
  const pageUrl = `${SITE_CONFIG.url}/roof-inspection-charlotte-nc`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Roof Inspection Charlotte NC | Free Roof Inspections | Best Roofing Now"
        description="Schedule your FREE roof inspection in Charlotte NC. Comprehensive inspections with drone technology, detailed reports, and expert recommendations. No obligation."
        url={pageUrl}
        primaryImage={IMAGES.services.inspection}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Inspection Charlotte NC', url: pageUrl },
        ]}
      />
      <ServiceSchema service={inspectionService} />
      <FAQSchema faqs={inspectionFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Roof Inspection Charlotte NC', url: pageUrl },
        ]}
      />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Roof Inspection Charlotte NC', href: '/roof-inspection-charlotte-nc' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.services.inspection}
            alt="Free roof inspection in Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green-500/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <DollarSign className="w-4 h-4" />
              100% FREE - No Obligation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Roof Inspection Charlotte NC
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Get a FREE comprehensive roof inspection from Charlotte&apos;s most trusted roofing
              company. Our certified inspectors use drone technology and provide detailed reports
              with photos. No sales pressure - just honest assessments to protect your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-accent hover:bg-accent-dark"
                icon={<Calendar className="w-5 h-5" />}
              >
                Schedule Free Inspection
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                size="lg"
                icon={<Phone className="w-5 h-5" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                5.0 Google Rating ({SITE_CONFIG.googleReviewCount}+ reviews)
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                BBB A+ Rated
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                {SITE_CONFIG.roofsInstalled}+ Roofs Inspected
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Free Inspection Banner */}
      <section className="bg-green-600 text-white py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Search className="w-6 h-6 flex-shrink-0" />
              <span className="font-semibold">
                Schedule your FREE roof inspection today - Same-day appointments available!
              </span>
            </div>
            <Button
              href="/contact"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What&apos;s Included in Your Free Roof Inspection
            </h2>
            <p className="text-gray text-lg">
              Our comprehensive inspection covers every component of your roofing system. Nothing
              is overlooked - we inspect what others miss.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {inspectionChecklist.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-light rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">{item.item}</h3>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Inspections */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Types of Roof Inspections We Offer
            </h2>
            <p className="text-gray text-lg">
              Whether you need routine maintenance, storm damage assessment, or a pre-purchase
              inspection, we have you covered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspectionTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <type.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{type.title}</h3>
                <p className="text-gray text-sm mb-4">{type.description}</p>
                <span className="inline-flex items-center text-sm font-semibold text-accent">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {type.benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Inspection Process */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Roof Inspection Process
              </h2>
              <p className="text-gray text-lg mb-8">
                From scheduling to receiving your detailed report, we make the inspection process
                simple and transparent. Here is how it works:
              </p>
              <ol className="space-y-6">
                {inspectionProcess.map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">{item.title}</h4>
                      <p className="text-gray text-sm mt-1">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative">
              <Image
                src={IMAGES.services.droneInspection}
                alt="Drone roof inspection in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Drone Technology</p>
                    <p className="text-sm text-gray">Aerial views of every angle</p>
                  </div>
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
                Ready for Your Free Roof Inspection?
              </h2>
              <p className="text-white/90">
                Same-day appointments available. No obligation, no pressure - just honest answers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent"
                icon={<Calendar className="w-5 h-5" />}
              >
                Schedule Free Inspection
              </Button>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="bg-white !text-accent hover:bg-white/90"
                size="lg"
                icon={<Phone className="w-5 h-5" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Free Inspections */}
      <section className="section bg-primary/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Professional roof assessment in Charlotte NC"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why We Offer Free Roof Inspections
              </h2>
              <p className="text-gray text-lg mb-6">
                Many homeowners put off roof inspections because they worry about cost or being
                pressured into unnecessary work. We believe everyone deserves to know their
                roof&apos;s condition - that&apos;s why our inspections are 100% free.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">No Obligation</strong>
                    <p className="text-gray">
                      Get a complete assessment with zero commitment. Our goal is to educate, not sell.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Thorough Assessment</strong>
                    <p className="text-gray">
                      The same detailed inspection whether you choose us or not. We never cut corners.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Honest Recommendations</strong>
                    <p className="text-gray">
                      We tell you the truth, even if it means we do not make a sale. That is our promise.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-dark">Written Report with Photos</strong>
                    <p className="text-gray">
                      Receive documentation you can use for insurance, negotiations, or future reference.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need an Inspection */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Signs You Need a Roof Inspection
            </h2>
            <p className="text-gray text-lg">
              Not sure if you need an inspection? If any of these apply to you, schedule your
              free inspection today.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {inspectionSigns.map((sign, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-light rounded-lg"
              >
                <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-dark text-sm font-medium">{sign}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Calendar className="w-5 h-5" />}
            >
              Schedule Your Free Inspection
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Why Charlotte Homeowners Trust Our Roof Inspections
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Same-Day Appointments</h3>
              <p className="text-gray text-sm">
                Fast scheduling with same-day and next-day appointments available.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Drone Technology</h3>
              <p className="text-gray text-sm">
                Aerial inspections capture every detail without walking on your roof.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Detailed Reports</h3>
              <p className="text-gray text-sm">
                Comprehensive written reports with photos delivered the same day.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">BBB A+ Rated</h3>
              <p className="text-gray text-sm">
                5.0 Google rating with {SITE_CONFIG.googleReviewCount}+ reviews. Veteran-owned and trusted.
              </p>
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
                <HelpCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Roof Inspection FAQ
              </h2>
              <p className="text-gray text-lg">
                Answers to the most common questions about roof inspections in Charlotte NC.
              </p>
            </div>
            <div className="space-y-4">
              {inspectionFAQs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/services/roof-repair"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <Search className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Repair</h3>
              <p className="text-gray text-sm">
                Fast, reliable repairs for leaks, storm damage, and general wear.
              </p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link
              href="/services/roof-replacement"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <Home className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Replacement</h3>
              <p className="text-gray text-sm">
                Full roof replacement with premium materials and manufacturer warranties.
              </p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link
              href="/storm-damage-roof-repair-charlotte"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <CloudRain className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Storm Damage</h3>
              <p className="text-gray text-sm">
                Expert storm damage assessment and insurance claim assistance.
              </p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <DirectoryCitations
              pageType="service"
              maxLinks={3}
              variant="inline"
              title="Verified Business"
            />
            <p className="text-sm text-gray-500">
              Free Inspections | Licensed &amp; Insured | BBB A+ Rated
            </p>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip
        pageType="main-service-area"
        city="Charlotte"
        slug="roof-inspection-charlotte-nc"
        count={4}
        title="Recent Roofing Projects in Charlotte, NC"
        subtitle="Browse completed roofing projects from the Charlotte area by Best Roofing Now."
        schemaPageUrl={`${SITE_CONFIG.url}/roof-inspection-charlotte-nc`}
      />

      {/* Final CTA */}

      <CityGeoSection

        city="Charlotte"

        state="NC"

        citySlug="charlotte-nc"

        service="Roof Inspection"

      />

      <CTASection
        title="Schedule Your Free Roof Inspection Today"
        subtitle="Get a comprehensive assessment of your roof's condition with no obligation. Same-day appointments available for Charlotte homeowners."
      />
    </>
  );
}
