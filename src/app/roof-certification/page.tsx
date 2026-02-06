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
  FileText,
  Home,
  Clock,
  Search,
  ClipboardCheck,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Certification Charlotte NC',
  description:
    'Professional roof certification for real estate transactions in Charlotte NC. HAAG certified inspectors. Detailed reports for buyers, sellers, and lenders. Fast turnaround!',
  keywords: [
    'roof certification Charlotte NC',
    'roof certification for home sale Charlotte',
    'real estate roof inspection Charlotte',
    'roof condition report Charlotte NC',
    'roof certification letter Charlotte',
    'HAAG certified roof inspector Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-certification`,
  },
  openGraph: {
    title: 'Roof Certification Charlotte NC | Real Estate Inspections | Best Roofing Now',
    description: 'Professional roof certification for real estate transactions in Charlotte NC.',
    url: `${SITE_CONFIG.url}/roof-certification`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Roof certification in Charlotte NC' }],
  },
};

const certificationUses = [
  { icon: Home, title: 'Home Sales', description: 'Provide buyers confidence or negotiate repairs before closing.' },
  { icon: FileText, title: 'Loan Requirements', description: 'Satisfy lender requirements for mortgage approval.' },
  { icon: Shield, title: 'Insurance Renewals', description: 'Document roof condition for insurance underwriting.' },
  { icon: Clock, title: 'Warranty Transfers', description: 'Document condition for warranty transfer to new owner.' },
  { icon: Search, title: 'Pre-Purchase', description: 'Know what you\'re buying before making an offer.' },
  { icon: ClipboardCheck, title: 'Estate Settlement', description: 'Document property condition for estate purposes.' },
];

const whatWeInspect = [
  'Roof covering material condition and remaining life',
  'Flashing at walls, chimneys, and penetrations',
  'Ventilation adequacy',
  'Gutters and drainage',
  'Signs of leaks or water damage',
  'Attic inspection (when accessible)',
  'Structural concerns',
  'Code compliance issues',
];

const reportIncludes = [
  'Overall roof condition rating',
  'Estimated remaining useful life',
  'Photos documenting current condition',
  'List of any deficiencies found',
  'Recommendations for repairs if needed',
  'Estimated repair costs',
  'Certification letter for real estate transactions',
];

const faqs = [
  { question: 'What is a roof certification?', answer: 'A roof certification is a professional assessment of your roof\'s condition, including estimated remaining life. It\'s used for real estate transactions, insurance, and loan requirements.' },
  { question: 'How much does roof certification cost in Charlotte?', answer: 'Roof certifications typically cost $150-$350 depending on roof size and complexity. This includes inspection and written certification letter.' },
  { question: 'How long does a roof certification take?', answer: 'The inspection takes 30-60 minutes. You\'ll receive your certification letter within 24-48 hours, or same-day for urgent real estate needs.' },
  { question: 'How long is a roof certification valid?', answer: 'Most certifications are valid for 90 days to 1 year depending on the purpose. Real estate certifications are typically valid through closing.' },
  { question: 'Are your inspectors certified?', answer: 'Yes! Our inspectors hold HAAG certification, the industry standard for forensic roof inspection. We\'re also licensed roofing contractors.' },
  { question: 'What if problems are found during certification?', answer: 'We\'ll document all issues and provide repair estimates. You can have us make repairs to achieve certification, or provide the report as-is for negotiation.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  { name: 'Roof Certification', url: `${SITE_CONFIG.url}/roof-certification` },
];

export default function RoofCertificationPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Roof Certification",
          description: "Professional roof certification for real estate transactions in Charlotte NC.",
          slug: "roof-certification",
        }}
      />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/roof-certification`} pageName="Roof Certification Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Roof certification in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-semibold">HAAG Certified Inspectors</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Certification
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Professional certification for real estate transactions</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Whether you&apos;re buying, selling, or refinancing, Best Roofing Now provides professional roof certifications with HAAG certified inspectors. Fast turnaround for time-sensitive real estate deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Schedule Certification</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />HAAG Certified</span>
              <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-accent-light" />24-48 Hour Turnaround</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">When You Need Roof Certification</h2>
            <p className="text-gray text-lg">Common situations requiring professional roof certification.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationUses.map((use) => (
              <div key={use.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <use.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{use.title}</h3>
                <p className="text-gray text-sm">{use.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What We Inspect</h2>
              <ul className="space-y-3">
                {whatWeInspect.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Your Report Includes</h2>
              <ul className="space-y-3">
                {reportIncludes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Our Certification Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold text-dark mb-2">Schedule</h3>
                <p className="text-gray text-sm">Book your inspection online or by phone.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold text-dark mb-2">Inspect</h3>
                <p className="text-gray text-sm">HAAG certified inspector examines your roof.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold text-dark mb-2">Document</h3>
                <p className="text-gray text-sm">Photos and detailed notes compiled.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold text-dark mb-2">Certify</h3>
                <p className="text-gray text-sm">Receive certification within 24-48 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Need a Roof Certification?</h2>
              <p className="text-white/90">Fast turnaround for real estate transactions.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Schedule Now</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="roof-certification" count={4} title="Recent Certifications" subtitle="Roofs we've certified throughout Charlotte." schemaPageUrl={`${SITE_CONFIG.url}/roof-certification`} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Certification FAQs</h2>
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

      <section className="section bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/roof-inspection" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Inspection</h3>
              <p className="text-gray text-sm">Free comprehensive roof inspections.</p>
            </Link>
            <Link href="/roof-maintenance" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Maintenance</h3>
              <p className="text-gray text-sm">Preventive maintenance programs.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Repair</h3>
              <p className="text-gray text-sm">Address issues found in certification.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Get Your Roof Certified" subtitle="Professional certification with fast turnaround for real estate needs." />
    </>
  );
}
