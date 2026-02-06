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
  Clock,
  AlertTriangle,
  CloudRain,
  Home,
  FileText,
  Truck,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Emergency Roof Tarping Charlotte NC',
  description:
    '24/7 emergency roof tarping in Charlotte NC. Immediate temporary protection after storm damage. Prevent further water damage while waiting for repairs. Call now!',
  keywords: [
    'emergency roof tarping Charlotte NC',
    'roof tarp service Charlotte',
    'emergency roof cover Charlotte',
    'storm damage tarping Charlotte NC',
    'temporary roof repair Charlotte',
    '24/7 roof tarping service',
    'roof tarp installation',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/emergency-roof-tarping`,
  },
  openGraph: {
    title: 'Emergency Roof Tarping Charlotte NC | 24/7 Service | Best Roofing Now',
    description: '24/7 emergency roof tarping to protect your home from further damage.',
    url: `${SITE_CONFIG.url}/emergency-roof-tarping`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Emergency roof tarping in Charlotte NC' }],
  },
};

const tarpingServices = [
  { icon: Clock, title: '24/7 Emergency Response', description: 'We respond within hours, day or night, to protect your home from further damage.' },
  { icon: CloudRain, title: 'Storm Damage Tarping', description: 'Immediate coverage for hail, wind, and fallen tree damage.' },
  { icon: Home, title: 'Residential Tarping', description: 'Protect your home and belongings while permanent repairs are scheduled.' },
  { icon: Shield, title: 'Commercial Tarping', description: 'Large-scale tarping for commercial and industrial buildings.' },
  { icon: FileText, title: 'Insurance Documentation', description: 'Photos and documentation for your insurance claim.' },
  { icon: Truck, title: 'Same-Day Service', description: 'Emergency tarping completed same-day in most cases.' },
];

const whenToTarp = [
  'Storm has damaged or removed shingles',
  'Tree or debris has punctured your roof',
  'Visible holes or gaps in roofing material',
  'Active water intrusion during rain',
  'Waiting for insurance adjuster inspection',
  'Roof damage discovered before scheduled repairs',
  'Fire damage has compromised roof integrity',
];

const faqs = [
  { question: 'How quickly can you tarp my roof?', answer: 'We offer 24/7 emergency response and can typically arrive within 2-4 hours for urgent situations. Same-day tarping is completed for most calls received before 2 PM.' },
  { question: 'How much does emergency roof tarping cost?', answer: 'Emergency roof tarping typically costs $200-$800 depending on roof size, pitch, and damage extent. Most insurance policies cover emergency tarping as part of storm damage claims.' },
  { question: 'Will insurance cover emergency roof tarping?', answer: 'Yes! Most homeowner policies cover emergency tarping as "loss mitigation" - protecting your home from further damage. In many cases, there\'s no deductible for the tarp service itself.' },
  { question: 'How long does a roof tarp last?', answer: 'A properly installed roof tarp provides protection for 30-90 days. We use heavy-duty tarps secured with 2x4 battens to withstand wind and weather until permanent repairs are made.' },
  { question: 'Do I need tarping or can I wait for repairs?', answer: 'If there\'s any chance of rain before repairs, tarping is essential. Water damage from a delayed tarp can cost thousands more than the tarp service and may not be covered by insurance.' },
  { question: 'What information do you need for emergency tarping?', answer: 'Your address, description of damage, roof type/pitch if known, and insurance information. We can assess damage on arrival and provide documentation for your claim.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Emergency Services', url: `${SITE_CONFIG.url}/emergency` },
  { name: 'Roof Tarping', url: `${SITE_CONFIG.url}/emergency-roof-tarping` },
];

export default function EmergencyRoofTarpingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Emergency Roof Tarping",
          description: "24/7 emergency roof tarping services in Charlotte NC to protect your home from further damage.",
          slug: "emergency-roof-tarping",
        }}
      />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/emergency-roof-tarping`} pageName="Emergency Roof Tarping Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Emergency roof tarping in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-semibold">24/7 EMERGENCY SERVICE</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Emergency Roof Tarping
              <br className="hidden md:block" />
              <span className="text-yellow-300">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Immediate protection when your roof is compromised</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Don&apos;t let storm damage lead to interior water damage. Best Roofing Now provides 24/7 emergency roof tarping throughout Charlotte to protect your home while you wait for permanent repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="primary" size="lg" className="bg-white !text-red-600 hover:bg-white/90" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call Now: {SITE_CONFIG.phone}</Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Request Tarping</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-yellow-300" />2-4 Hour Response</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-yellow-300" />Insurance Accepted</span>
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Emergency Tarping Services</h2>
            <p className="text-gray text-lg">Fast, professional roof protection when you need it most.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tarpingServices.map((service) => (
              <div key={service.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-gray text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">When Do You Need Roof Tarping?</h2>
              <p className="text-gray text-lg mb-6">Don&apos;t wait for rain to cause interior damage. Tarp your roof immediately if:</p>
              <ul className="space-y-3">
                {whenToTarp.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image src={IMAGES.realProjects.drone2} alt="Storm damaged roof needing tarping" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Roof Emergency? Call Now!</h2>
              <p className="text-white/90">24/7 emergency response - we&apos;ll protect your home today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-red-600 hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Our Emergency Tarping Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold text-dark mb-2">You Call</h3>
                <p className="text-gray text-sm">Call our 24/7 emergency line and describe the damage.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold text-dark mb-2">We Respond</h3>
                <p className="text-gray text-sm">Our crew arrives within 2-4 hours with equipment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold text-dark mb-2">We Tarp</h3>
                <p className="text-gray text-sm">Heavy-duty tarp installed and secured properly.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold text-dark mb-2">Documentation</h3>
                <p className="text-gray text-sm">Photos and report provided for insurance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="emergency-roof-tarping" count={4} title="Emergency Tarping Projects" subtitle="Recent emergency roof tarping jobs." schemaPageUrl={`${SITE_CONFIG.url}/emergency-roof-tarping`} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Emergency Tarping FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Related Emergency Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/emergency" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Emergency Roofing</h3>
              <p className="text-gray text-sm">Complete emergency roofing services for urgent situations.</p>
            </Link>
            <Link href="/services/storm-damage-roof-siding" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Storm Damage Repair</h3>
              <p className="text-gray text-sm">Full storm damage repair and insurance claim assistance.</p>
            </Link>
            <Link href="/hail-damage-roof-repair" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Hail Damage Repair</h3>
              <p className="text-gray text-sm">Specialized hail damage assessment and repair.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Roof Damaged? We're Here 24/7" subtitle="Call now for immediate emergency roof tarping service." />
    </>
  );
}
