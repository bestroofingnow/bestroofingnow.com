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
  Flame,
  Droplets,
  Wrench,
  Home,
  AlertTriangle,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Chimney Flashing Repair Charlotte NC',
  description:
    'Expert chimney flashing repair in Charlotte NC. Stop leaks around your chimney with professional step flashing, counter flashing, and cricket installation. Free estimates!',
  keywords: [
    'chimney flashing repair Charlotte NC',
    'chimney leak repair Charlotte',
    'roof flashing repair Charlotte',
    'chimney flashing replacement',
    'step flashing repair Charlotte NC',
    'chimney cricket installation',
    'leaking chimney repair',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/chimney-flashing-repair`,
  },
  openGraph: {
    title: 'Chimney Flashing Repair Charlotte NC | Stop Chimney Leaks | Best Roofing Now',
    description: 'Professional chimney flashing repair to stop leaks around your chimney.',
    url: `${SITE_CONFIG.url}/chimney-flashing-repair`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Chimney flashing repair in Charlotte NC' }],
  },
};

const flashingServices = [
  { icon: Wrench, title: 'Step Flashing Repair', description: 'Replace damaged or missing step flashing along chimney sides where it meets the roof.' },
  { icon: Shield, title: 'Counter Flashing Repair', description: 'Fix or replace counter flashing embedded in chimney mortar joints.' },
  { icon: Droplets, title: 'Base Flashing Repair', description: 'Repair the L-shaped base flashing at the bottom of the chimney.' },
  { icon: Home, title: 'Cricket Installation', description: 'Install chimney crickets to divert water around wide chimneys.' },
  { icon: Flame, title: 'Mortar Joint Sealing', description: 'Seal and repair mortar joints where flashing is embedded.' },
  { icon: AlertTriangle, title: 'Emergency Leak Repair', description: 'Fast response for active chimney leaks causing interior water damage.' },
];

const leakSigns = [
  'Water stains on ceiling or walls near chimney',
  'Damp or musty smell in attic near chimney',
  'Visible rust on flashing',
  'Gaps between flashing and chimney masonry',
  'Missing or lifted step flashing',
  'Cracked or deteriorated caulk/sealant',
  'Water pooling behind chimney on roof',
  'Efflorescence (white staining) on chimney brick',
];

const faqs = [
  { question: 'What causes chimney flashing to fail?', answer: 'Common causes include age deterioration, thermal expansion/contraction, improper installation, settling of the home, storm damage, and deteriorating mortar joints. Most flashing lasts 15-25 years before needing replacement.' },
  { question: 'How much does chimney flashing repair cost in Charlotte?', answer: 'Minor repairs typically cost $200-$500. Full flashing replacement runs $500-$1,500 depending on chimney size. Cricket installation adds $300-$800. We provide free estimates.' },
  { question: 'Can you repair flashing without replacing my roof?', answer: 'Yes! Chimney flashing repair is a standalone service. We carefully remove surrounding shingles, repair or replace the flashing, and reinstall the shingles without disturbing the rest of your roof.' },
  { question: 'What is a chimney cricket and do I need one?', answer: 'A cricket (or saddle) is a peaked structure that diverts water around wide chimneys. Building code typically requires crickets for chimneys wider than 30 inches. They prevent water pooling and extend flashing life.' },
  { question: 'How long does chimney flashing repair take?', answer: 'Most repairs take 2-4 hours. Complete flashing replacement takes 4-6 hours. Cricket installation may add 2-3 hours. We complete most jobs in a single day.' },
  { question: 'Should I use a roofer or mason for chimney flashing?', answer: 'A roofer is typically best for flashing work since it integrates with your roofing system. However, if you have damaged mortar joints or chimney masonry, you may need a mason first, then a roofer for the flashing.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  { name: 'Chimney Flashing Repair', url: `${SITE_CONFIG.url}/chimney-flashing-repair` },
];

export default function ChimneyFlashingRepairPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Chimney Flashing Repair",
          description: "Professional chimney flashing repair services in Charlotte NC to stop leaks and protect your home.",
          slug: "chimney-flashing-repair",
        }}
      />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/chimney-flashing-repair`} pageName="Chimney Flashing Repair Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Chimney flashing repair in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Flame className="w-4 h-4" />
              <span className="text-sm font-semibold">Stop Chimney Leaks</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Chimney Flashing Repair
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Expert flashing repair to stop leaks at the source</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Chimney flashing failures are one of the most common causes of roof leaks. Best Roofing Now provides professional chimney flashing repair and replacement throughout Charlotte to protect your home from water damage.
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Chimney Flashing Services</h2>
            <p className="text-gray text-lg">Complete chimney flashing repair and replacement.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashingServices.map((service) => (
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Signs Your Chimney Flashing Needs Repair</h2>
              <p className="text-gray text-lg mb-6">Don&apos;t ignore these warning signs of chimney flashing failure:</p>
              <ul className="space-y-3">
                {leakSigns.map((sign, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image src={IMAGES.realProjects.drone2} alt="Chimney flashing inspection" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Chimney Leaking?</h2>
              <p className="text-white/90">Get a free inspection and permanent repair solution.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Inspection</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="chimney-flashing-repair" count={4} title="Chimney Flashing Projects" subtitle="Browse completed chimney flashing repairs." schemaPageUrl={`${SITE_CONFIG.url}/chimney-flashing-repair`} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Chimney Flashing FAQs</h2>
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

      <section className="section bg-light">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/roof-repair" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Repair</h3>
              <p className="text-gray text-sm">Complete roof repair services for all roofing systems.</p>
            </Link>
            <Link href="/services/roof-inspection" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Inspection</h3>
              <p className="text-gray text-sm">Free comprehensive roof inspections with detailed reports.</p>
            </Link>
            <Link href="/skylight-installation" className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Skylight Services</h3>
              <p className="text-gray text-sm">Skylight installation, repair, and flashing services.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Stop Your Chimney Leak" subtitle="Get a free inspection and professional chimney flashing repair." />
    </>
  );
}
