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
  Sun,
  Droplets,
  Wrench,
  Home,
  Zap,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Skylight Installation Charlotte NC',
  description:
    'Professional skylight installation and repair in Charlotte NC. VELUX certified installers. Bring natural light into your home with leak-free skylight installation. Free estimates!',
  keywords: [
    'skylight installation Charlotte NC',
    'skylight repair Charlotte',
    'VELUX skylight installer Charlotte',
    'skylight replacement Charlotte NC',
    'leaking skylight repair',
    'sun tunnel installation Charlotte',
    'roof window installation',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/skylight-installation`,
  },
  openGraph: {
    title: 'Skylight Installation Charlotte NC | VELUX Certified | Best Roofing Now',
    description: 'Professional skylight installation and repair services in Charlotte NC.',
    url: `${SITE_CONFIG.url}/skylight-installation`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Skylight installation in Charlotte NC' }],
  },
};

const skylightServices = [
  { icon: Sun, title: 'Skylight Installation', description: 'New skylight installation with proper flashing, insulation, and interior finishing.' },
  { icon: Wrench, title: 'Skylight Repair', description: 'Fix leaking skylights, replace seals, repair flashing, and solve condensation issues.' },
  { icon: Home, title: 'Skylight Replacement', description: 'Upgrade old skylights to modern energy-efficient units with better sealing.' },
  { icon: Droplets, title: 'Leak Repair', description: 'Diagnose and permanently fix skylight leaks at flashing, seals, or glass.' },
  { icon: Zap, title: 'Sun Tunnel Installation', description: 'Tubular skylights to bring light into interior rooms without traditional skylights.' },
  { icon: Shield, title: 'Flashing Replacement', description: 'Replace failed skylight flashing with proper step and counter flashing.' },
];

const skylightTypes = [
  { name: 'Fixed Skylights', description: 'Non-opening skylights that provide natural light. Most affordable option.', price: '$500-$1,500' },
  { name: 'Venting Skylights', description: 'Manual or electric opening skylights for ventilation and light.', price: '$1,000-$2,500' },
  { name: 'Solar-Powered Skylights', description: 'Electric venting skylights powered by solar panel. No wiring needed.', price: '$1,500-$3,000' },
  { name: 'Sun Tunnels', description: 'Tubular skylights that bring light to interior rooms through reflective tubes.', price: '$500-$1,200' },
];

const benefits = [
  'Increase natural light by up to 30%',
  'Reduce daytime electricity usage',
  'Improve ventilation with venting models',
  'Add value to your home',
  'Create dramatic architectural features',
  'Qualify for energy tax credits (solar models)',
];

const faqs = [
  { question: 'How much does skylight installation cost in Charlotte?', answer: 'Basic fixed skylight installation costs $1,200-$2,500 including materials and labor. Venting skylights run $2,000-$4,000. Sun tunnels are $800-$1,500. Prices vary by size, type, and roof complexity.' },
  { question: 'Will a skylight make my roof leak?', answer: 'Not when properly installed. Leaks come from improper flashing or installation. We use manufacturer-approved flashing kits and follow strict installation protocols. All our skylights come with a 10-year leak-free warranty.' },
  { question: 'Can you install a skylight on any roof?', answer: 'Skylights work best on roofs with 15-60 degree pitch. Very flat or very steep roofs may need special considerations. We assess your roof during the free estimate to recommend the best options.' },
  { question: 'How long does skylight installation take?', answer: 'Most skylight installations take 4-8 hours in a single day. This includes cutting the opening, installing the skylight and flashing, and basic interior finishing. Drywall and painting are additional.' },
  { question: 'Why is my skylight leaking?', answer: 'Common causes include failed seals, improper flashing, condensation (not a true leak), and age deterioration. We diagnose the exact cause and provide a permanent repair solution.' },
  { question: 'What brand skylights do you install?', answer: 'We primarily install VELUX skylights, the industry leader with the best warranties and leak-free track record. We can also install other brands per customer request.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  { name: 'Skylight Installation', url: `${SITE_CONFIG.url}/skylight-installation` },
];

export default function SkylightInstallationPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Skylight Installation",
          description: "Professional skylight installation and repair services in Charlotte NC. VELUX certified installers.",
          slug: "skylight-installation",
        }}
      />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/skylight-installation`} pageName="Skylight Installation Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Skylight installation in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Sun className="w-4 h-4" />
              <span className="text-sm font-semibold">Bring Natural Light Inside</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Skylight Installation
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Professional skylight installation & repair</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Transform dark rooms with natural light. Best Roofing Now provides expert skylight installation and repair throughout Charlotte. VELUX certified installers with leak-free installation guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />10-Year Leak-Free Warranty</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />VELUX Certified</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Skylight Services</h2>
            <p className="text-gray text-lg">Complete skylight installation, repair, and replacement.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skylightServices.map((service) => (
              <div key={service.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
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
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Skylight Types & Pricing</h2>
            <p className="text-gray text-lg">Options for every budget and need.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skylightTypes.map((type) => (
              <div key={type.name} className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-dark mb-2">{type.name}</h3>
                <p className="text-gray text-sm mb-4">{type.description}</p>
                <p className="text-primary font-bold">{type.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Benefits of Skylights</h2>
              <p className="text-gray text-lg mb-6">Skylights do more than add light - they transform your living space.</p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image src={IMAGES.realProjects.drone1} alt="Skylight on residential roof" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Ready for More Natural Light?</h2>
              <p className="text-white/90">Get a free estimate for skylight installation or repair.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="skylight-installation" count={4} title="Skylight Projects" subtitle="Browse completed skylight installations." schemaPageUrl={`${SITE_CONFIG.url}/skylight-installation`} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Skylight FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-light rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Brighten Your Home with Skylights" subtitle="Get a free consultation and estimate from Charlotte's skylight experts." />
    </>
  );
}
