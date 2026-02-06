import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  HelpCircle,
  Award,
  ClipboardCheck,
  Clock,
  DollarSign,
  FileText,
  Wrench,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Maintenance Program Charlotte NC',
  description:
    'Preventive roof maintenance programs in Charlotte NC. Annual inspections, drain cleaning, minor repairs, and detailed reports. Extend roof life and maintain warranty. Free consultation!',
  keywords: [
    'roof maintenance Charlotte NC',
    'roof maintenance program Charlotte',
    'preventive roof maintenance Charlotte',
    'commercial roof maintenance Charlotte NC',
    'roof inspection program Charlotte',
    'annual roof maintenance Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-maintenance`,
  },
  openGraph: {
    title: 'Roof Maintenance Program Charlotte NC | Preventive Care | Best Roofing Now',
    description: 'Preventive roof maintenance programs to extend roof life and maintain warranties.',
    url: `${SITE_CONFIG.url}/roof-maintenance`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Roof maintenance in Charlotte NC' }],
  },
};

const programFeatures = [
  { icon: ClipboardCheck, title: 'Bi-Annual Inspections', description: 'Comprehensive spring and fall inspections to catch problems early.' },
  { icon: Wrench, title: 'Minor Repairs Included', description: 'Small repairs are included to prevent costly major repairs.' },
  { icon: FileText, title: 'Detailed Reports', description: 'Photo documentation and written reports of roof condition.' },
  { icon: Shield, title: 'Warranty Maintenance', description: 'Keep manufacturer warranties valid with documented care.' },
  { icon: Clock, title: 'Priority Scheduling', description: 'Program members get priority for emergency calls and repairs.' },
  { icon: DollarSign, title: 'Cost Savings', description: 'Save 30-50% vs reactive repairs. Prevent costly emergencies.' },
];

const maintenanceChecklist = [
  'Inspect all roof membrane/shingles for damage',
  'Check and clean gutters and downspouts',
  'Clear debris from drains and scuppers',
  'Inspect flashings at walls, curbs, and penetrations',
  'Check sealants and caulking',
  'Inspect roof vents and HVAC curbs',
  'Look for ponding water issues',
  'Inspect attic ventilation',
  'Check for signs of pest damage',
  'Photo document all findings',
];

const programTiers = [
  { name: 'Basic', visits: '1x/year', includes: 'Annual inspection, report, minor debris removal', price: 'Starting at $250/year' },
  { name: 'Standard', visits: '2x/year', includes: 'Bi-annual inspections, minor repairs, gutter cleaning, priority scheduling', price: 'Starting at $450/year' },
  { name: 'Premium', visits: '4x/year', includes: 'Quarterly inspections, minor repairs included, drain maintenance, 24/7 emergency priority', price: 'Starting at $800/year' },
];

const faqs = [
  { question: 'Why do I need roof maintenance?', answer: 'Regular maintenance catches small problems before they become major repairs. Studies show proper maintenance extends roof life by 25-50% and maintains warranty coverage.' },
  { question: 'How often should my roof be inspected?', answer: 'We recommend twice yearly - spring (after winter) and fall (before winter). High-traffic roofs or older roofs may benefit from quarterly inspections.' },
  { question: 'What does roof maintenance include?', answer: 'Our programs include inspections, debris removal, drain cleaning, minor repairs, sealant touch-ups, and detailed photo reports documenting your roof\'s condition.' },
  { question: 'Will maintenance void my warranty?', answer: 'No - in fact, many warranties REQUIRE regular maintenance. Our documented maintenance helps keep your warranty valid and provides proof of proper care.' },
  { question: 'How much does a maintenance program cost?', answer: 'Programs start at $250/year for residential and $400/year for commercial. The cost depends on roof size, complexity, and chosen service level.' },
  { question: 'Can I do roof maintenance myself?', answer: 'Basic tasks like keeping gutters clear help, but professional maintenance includes trained inspection for hidden issues. We catch problems homeowners miss.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  { name: 'Roof Maintenance', url: `${SITE_CONFIG.url}/roof-maintenance` },
];

export default function RoofMaintenancePage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Roof Maintenance Program",
          description: "Preventive roof maintenance programs in Charlotte NC to extend roof life and maintain warranties.",
          slug: "roof-maintenance",
        }}
      />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/roof-maintenance`} pageName="Roof Maintenance Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Roof maintenance in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <ClipboardCheck className="w-4 h-4" />
              <span className="text-sm font-semibold">Extend Your Roof Life 25-50%</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Maintenance Program
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Preventive care that saves money and extends roof life</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              The smartest roofing investment you can make. Best Roofing Now&apos;s maintenance programs catch problems early, maintain your warranty, and extend your roof&apos;s lifespan by years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Consultation</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />Licensed & Insured</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />BBB A+ Rated</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Program Benefits</h2>
            <p className="text-gray text-lg">Why proactive maintenance beats reactive repairs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programFeatures.map((feature) => (
              <div key={feature.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{feature.title}</h3>
                <p className="text-gray text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Maintenance Program Options</h2>
            <p className="text-gray text-lg">Choose the level of protection that fits your needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {programTiers.map((tier, index) => (
              <div key={tier.name} className={`p-6 rounded-xl ${index === 1 ? 'bg-primary text-white' : 'bg-white'}`}>
                <h3 className={`font-bold text-2xl mb-2 ${index === 1 ? 'text-white' : 'text-dark'}`}>{tier.name}</h3>
                {index === 1 && <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded-full mb-4">Most Popular</span>}
                <p className={`text-sm mb-4 ${index === 1 ? 'text-white/90' : 'text-gray'}`}>{tier.visits} inspections</p>
                <p className={`text-sm mb-4 ${index === 1 ? 'text-white/80' : 'text-gray'}`}>{tier.includes}</p>
                <p className={`font-bold ${index === 1 ? 'text-white' : 'text-primary'}`}>{tier.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What We Inspect</h2>
              <p className="text-gray text-lg mb-6">Every maintenance visit includes a comprehensive checklist:</p>
              <ul className="space-y-3">
                {maintenanceChecklist.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image src={IMAGES.realProjects.drone1} alt="Roof maintenance inspection" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Protect Your Investment</h2>
              <p className="text-white/90">Start your maintenance program today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Started</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="roof-maintenance" count={4} title="Maintenance Projects" subtitle="Roofs we maintain throughout Charlotte." schemaPageUrl={`${SITE_CONFIG.url}/roof-maintenance`} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Maintenance FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Start Your Maintenance Program" subtitle="Protect your roof investment with proactive care." />
    </>
  );
}
