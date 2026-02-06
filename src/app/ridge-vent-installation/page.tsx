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
  Wind,
  Thermometer,
  Home,
  DollarSign,
  Clock,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Ridge Vent Installation Charlotte NC',
  description:
    'Professional ridge vent installation in Charlotte NC. Improve attic ventilation, reduce energy costs, and extend roof life. Paired with soffit vents for optimal airflow. Free estimates!',
  keywords: [
    'ridge vent installation Charlotte NC',
    'ridge vent Charlotte',
    'roof ventilation Charlotte NC',
    'attic ventilation Charlotte',
    'ridge vent replacement Charlotte',
    'roof vent installation Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/ridge-vent-installation`,
  },
  openGraph: {
    title: 'Ridge Vent Installation Charlotte NC | Roof Ventilation | Best Roofing Now',
    description: 'Professional ridge vent installation for proper attic ventilation.',
    url: `${SITE_CONFIG.url}/ridge-vent-installation`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Ridge vent installation in Charlotte NC' }],
  },
};

const benefits = [
  { icon: Thermometer, title: 'Reduces Attic Heat', description: 'Hot air escapes through the ridge, keeping attic 20-40° cooler in summer.' },
  { icon: DollarSign, title: 'Lower Energy Bills', description: 'Cooler attic = less AC strain = lower cooling costs.' },
  { icon: Clock, title: 'Extends Roof Life', description: 'Proper ventilation prevents moisture damage and shingle deterioration.' },
  { icon: Wind, title: 'Prevents Moisture', description: 'Year-round ventilation prevents condensation and mold growth.' },
  { icon: Home, title: 'Invisible Design', description: 'Low profile blends with your roofline - no ugly box vents.' },
  { icon: Shield, title: 'Weather Resistant', description: 'External baffles prevent rain and snow infiltration.' },
];

const howItWorks = [
  { step: 1, title: 'Air Enters', description: 'Fresh air enters through soffit vents at the eaves.' },
  { step: 2, title: 'Air Rises', description: 'As air warms in the attic, it naturally rises toward the peak.' },
  { step: 3, title: 'Air Exits', description: 'Warm, moist air escapes through the ridge vent.' },
  { step: 4, title: 'Continuous Flow', description: 'This creates continuous airflow that keeps your attic healthy.' },
];

const ventTypes = [
  { name: 'Shingle-Over Ridge Vent', description: 'Most popular. Covered by cap shingles for seamless look.', price: '$8-$15/linear ft' },
  { name: 'Aluminum Ridge Vent', description: 'Durable metal option for metal roofs or exposed applications.', price: '$10-$18/linear ft' },
  { name: 'External Baffle Vent', description: 'Best weather protection with external wind baffles.', price: '$12-$20/linear ft' },
];

const faqs = [
  { question: 'What is a ridge vent?', answer: 'A ridge vent is installed along the peak of your roof, allowing hot air to escape from your attic. Combined with soffit vents, it creates natural airflow that keeps your attic cool and dry.' },
  { question: 'How much does ridge vent installation cost in Charlotte?', answer: 'Ridge vent installation typically costs $400-$800 for an average home, or $8-$20 per linear foot. Cost depends on ridge length, roof pitch, and vent type.' },
  { question: 'Can ridge vents be added to an existing roof?', answer: 'Yes! We can add ridge vents to existing roofs. We cut a slot along the ridge, install the vent, and cover with cap shingles. It\'s often done during roof replacement for best results.' },
  { question: 'Do I need both ridge vents and soffit vents?', answer: 'Yes! Ridge vents need intake air from soffit vents to work properly. We assess your entire ventilation system and ensure proper balance for optimal airflow.' },
  { question: 'Are ridge vents better than box vents?', answer: 'Generally yes. Ridge vents provide more uniform ventilation across the entire attic and have a cleaner appearance. They also have no moving parts to fail.' },
  { question: 'Will ridge vents leak in heavy rain?', answer: 'Quality ridge vents with external baffles prevent water infiltration even in heavy Charlotte storms. Proper installation is key - we follow manufacturer specifications.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Ventilation', url: `${SITE_CONFIG.url}/ventilation` },
  { name: 'Ridge Vent Installation', url: `${SITE_CONFIG.url}/ridge-vent-installation` },
];

export default function RidgeVentInstallationPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Ridge Vent Installation",
          description: "Professional ridge vent installation in Charlotte NC for proper attic ventilation.",
          slug: "ridge-vent-installation",
        }}
      />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/ridge-vent-installation`} pageName="Ridge Vent Installation Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Ridge vent installation in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Wind className="w-4 h-4" />
              <span className="text-sm font-semibold">Improve Your Attic Ventilation</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Ridge Vent Installation
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Proper ventilation for a healthier, longer-lasting roof</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Ridge vents are the most effective way to ventilate your attic. Best Roofing Now installs quality ridge vents that reduce energy costs, prevent moisture damage, and extend your roof&apos;s lifespan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Benefits of Ridge Vents</h2>
            <p className="text-gray text-lg">Why ridge vents are the best choice for attic ventilation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">How Ridge Vents Work</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {howItWorks.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{item.step}</div>
                  <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ridge Vent Types</h2>
            <p className="text-gray text-lg">We install all types to match your roof and budget.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ventTypes.map((vent) => (
              <div key={vent.name} className="bg-light p-6 rounded-xl">
                <h3 className="font-bold text-dark text-xl mb-2">{vent.name}</h3>
                <p className="text-gray text-sm mb-4">{vent.description}</p>
                <p className="text-primary font-bold">{vent.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Improve Your Attic Ventilation</h2>
              <p className="text-white/90">Get a free ventilation assessment and estimate.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Assessment</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="ridge-vent-installation" count={4} title="Ridge Vent Projects" subtitle="Browse completed ridge vent installations." schemaPageUrl={`${SITE_CONFIG.url}/ridge-vent-installation`} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ridge Vent FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Related Ventilation Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/ventilation" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Ventilation</h3>
              <p className="text-gray text-sm">Complete ventilation solutions.</p>
            </Link>
            <Link href="/fascia-soffit-repair" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Soffit Vents</h3>
              <p className="text-gray text-sm">Intake ventilation for balanced airflow.</p>
            </Link>
            <Link href="/services/roof-inspection" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Inspection</h3>
              <p className="text-gray text-sm">Assess your ventilation needs.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Ventilate Your Attic Properly" subtitle="Get a free assessment and ridge vent installation estimate." />
    </>
  );
}
