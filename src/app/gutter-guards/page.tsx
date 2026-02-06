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
  Leaf,
  Droplets,
  Clock,
  DollarSign,
  Home,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Gutter Guards Charlotte NC | LeafFilter',
  description:
    'Professional gutter guard installation in Charlotte NC. Keep leaves and debris out. Micro-mesh, screen, and foam options. Never clean gutters again! Free estimates.',
  keywords: [
    'gutter guards Charlotte NC',
    'gutter protection Charlotte',
    'leaf guard Charlotte NC',
    'gutter screens Charlotte',
    'micro mesh gutter guards Charlotte',
    'LeafFilter Charlotte NC',
    'gutter cover installation',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-guards`,
  },
  openGraph: {
    title: 'Gutter Guards Charlotte NC | Never Clean Gutters Again | Best Roofing Now',
    description: 'Professional gutter guard installation to keep debris out of your gutters.',
    url: `${SITE_CONFIG.url}/gutter-guards`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Gutter guards in Charlotte NC' }],
  },
};

const guardTypes = [
  { name: 'Micro-Mesh Guards', description: 'Fine stainless steel mesh blocks even small debris like pine needles and shingle grit.', effectiveness: 'Excellent', price: '$15-$30/ft installed', bestFor: 'Heavy tree coverage' },
  { name: 'Screen Guards', description: 'Metal or plastic screens that cover gutter opening. Good value option.', effectiveness: 'Good', price: '$6-$12/ft installed', bestFor: 'Moderate debris' },
  { name: 'Reverse Curve', description: 'Solid covers that use surface tension to guide water into gutters.', effectiveness: 'Very Good', price: '$12-$25/ft installed', bestFor: 'Heavy rain areas' },
  { name: 'Foam Inserts', description: 'Foam blocks that sit inside gutters. DIY-friendly but less durable.', effectiveness: 'Fair', price: '$3-$6/ft installed', bestFor: 'Budget option' },
];

const benefits = [
  { icon: Leaf, title: 'No More Cleaning', description: 'Eliminate dangerous ladder climbing and tedious gutter cleaning.' },
  { icon: Droplets, title: 'Prevents Clogs', description: 'Keep water flowing freely and prevent overflow damage.' },
  { icon: Shield, title: 'Protects Gutters', description: 'Reduce rust and corrosion from sitting debris.' },
  { icon: Home, title: 'Prevents Damage', description: 'Stop water damage to fascia, foundation, and landscaping.' },
  { icon: Clock, title: 'Low Maintenance', description: 'Occasional rinse is all that\'s needed to keep guards clear.' },
  { icon: DollarSign, title: 'Saves Money', description: 'Eliminate $100-$300 annual gutter cleaning costs.' },
];

const idealFor = [
  'Homes surrounded by trees',
  'Multi-story homes (dangerous to clean)',
  'Vacation homes or rental properties',
  'Elderly homeowners',
  'Busy homeowners who don\'t want the hassle',
  'Homes with basement flooding issues',
];

const faqs = [
  { question: 'Do gutter guards really work?', answer: 'Yes! Quality micro-mesh guards block 99%+ of debris. Lower-cost screens block most leaves but may let smaller debris through. We help you choose the right type for your situation.' },
  { question: 'How much do gutter guards cost in Charlotte?', answer: 'Gutter guards cost $6-$30 per linear foot installed, depending on type. An average home costs $800-$3,000. Micro-mesh is most expensive but most effective.' },
  { question: 'Will gutter guards void my gutter warranty?', answer: 'Most gutter warranties are not affected by guard installation. However, improper installation can cause issues. We install properly to protect your investment.' },
  { question: 'Do gutter guards work with heavy rain?', answer: 'Quality guards handle even heavy Charlotte storms. Micro-mesh and reverse curve designs are specifically engineered for high water volume. We can demonstrate flow capacity.' },
  { question: 'Can gutter guards be installed on existing gutters?', answer: 'Yes! We install guards on existing gutters. We\'ll inspect your gutters, make any needed repairs, and install guards for a complete protection system.' },
  { question: 'What maintenance do gutter guards need?', answer: 'Minimal! An occasional rinse with a hose removes surface debris. We recommend annual inspection. This is far less than regular gutter cleaning.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Gutter Services', url: `${SITE_CONFIG.url}/gutter-installation-huntersville-nc` },
  { name: 'Gutter Guards', url: `${SITE_CONFIG.url}/gutter-guards` },
];

export default function GutterGuardsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Gutter Guard Installation",
          description: "Professional gutter guard installation in Charlotte NC to keep debris out of your gutters.",
          slug: "gutter-guards",
        }}
      />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/gutter-guards`} pageName="Gutter Guards Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Gutter guards in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-semibold">Never Clean Gutters Again</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Guards Charlotte NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Keep Debris Out</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Professional gutter protection installation</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Stop the endless cycle of gutter cleaning. Best Roofing Now installs premium gutter guards that keep leaves, pine needles, and debris out while letting water flow freely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />Licensed & Insured</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />Lifetime Warranty Options</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Benefits of Gutter Guards</h2>
            <p className="text-gray text-lg">Why thousands of Charlotte homeowners choose gutter protection.</p>
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
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gutter Guard Types</h2>
            <p className="text-gray text-lg">We install all types to match your needs and budget.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {guardTypes.map((guard) => (
              <div key={guard.name} className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-dark text-xl mb-2">{guard.name}</h3>
                <p className="text-gray text-sm mb-4">{guard.description}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-dark">Effectiveness:</span> <span className="text-gray">{guard.effectiveness}</span></p>
                  <p><span className="font-semibold text-dark">Price:</span> <span className="text-gray">{guard.price}</span></p>
                  <p><span className="font-semibold text-dark">Best For:</span> <span className="text-gray">{guard.bestFor}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Gutter Guards Are Ideal For</h2>
              <ul className="space-y-3">
                {idealFor.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image src={IMAGES.realProjects.drone1} alt="Gutter guards installed on home" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Tired of Cleaning Gutters?</h2>
              <p className="text-white/90">Get a free estimate for gutter guard installation.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="gutter-guards" count={4} title="Gutter Guard Projects" subtitle="Browse completed gutter guard installations." schemaPageUrl={`${SITE_CONFIG.url}/gutter-guards`} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gutter Guard FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Related Gutter Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/gutter-installation-huntersville-nc" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Gutter Installation</h3>
              <p className="text-gray text-sm">New seamless gutter systems.</p>
            </Link>
            <Link href="/gutter-repair" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Gutter Repair</h3>
              <p className="text-gray text-sm">Fix leaks, sagging, and damage.</p>
            </Link>
            <Link href="/fascia-soffit-repair" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Fascia & Soffit</h3>
              <p className="text-gray text-sm">Repair and replacement services.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Protect Your Gutters from Debris" subtitle="Get a free estimate for professional gutter guard installation." />
    </>
  );
}
