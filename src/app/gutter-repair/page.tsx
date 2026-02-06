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
  Droplets,
  Wrench,
  Home,
  AlertTriangle,
  ArrowDown,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Gutter Repair Charlotte NC',
  description:
    'Professional gutter repair in Charlotte NC. Fix leaking, sagging, and clogged gutters. Downspout repair, seam sealing, and gutter realignment. Free estimates!',
  keywords: [
    'gutter repair Charlotte NC',
    'leaking gutter repair Charlotte',
    'sagging gutter fix Charlotte NC',
    'downspout repair Charlotte',
    'gutter seam repair',
    'gutter cleaning Charlotte NC',
    'clogged gutter repair',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gutter-repair`,
  },
  openGraph: {
    title: 'Gutter Repair Charlotte NC | Fix Leaks & Sagging | Best Roofing Now',
    description: 'Professional gutter repair services in Charlotte NC. Fix leaks, sagging, and clogs.',
    url: `${SITE_CONFIG.url}/gutter-repair`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Gutter repair in Charlotte NC' }],
  },
};

const repairServices = [
  { icon: Droplets, title: 'Leak Repair', description: 'Seal leaking seams, joints, and corners to stop water from damaging your home.' },
  { icon: Wrench, title: 'Sagging Gutter Repair', description: 'Re-secure sagging gutters with new hangers and proper slope for drainage.' },
  { icon: ArrowDown, title: 'Downspout Repair', description: 'Fix disconnected, clogged, or damaged downspouts and extensions.' },
  { icon: Home, title: 'Section Replacement', description: 'Replace damaged gutter sections while preserving the rest of your system.' },
  { icon: AlertTriangle, title: 'Storm Damage Repair', description: 'Quick repairs for gutters damaged by storms, ice, or fallen debris.' },
  { icon: Shield, title: 'End Cap & Corner Repair', description: 'Fix or replace leaking end caps, miters, and corner pieces.' },
];

const problemSigns = [
  'Water dripping behind gutters during rain',
  'Gutters pulling away from fascia',
  'Visible rust spots or holes',
  'Water pooling near foundation',
  'Sagging sections that hold standing water',
  'Peeling paint on or below gutters',
  'Mildew or water stains on siding',
  'Overflowing during moderate rain',
];

const repairVsReplace = [
  { repair: 'Single leaking seam', replace: 'Multiple leaks throughout' },
  { repair: 'One sagging section', replace: 'Widespread sagging' },
  { repair: 'Minor rust spots', replace: 'Extensive rust or holes' },
  { repair: 'Clogged downspout', replace: 'Wrong size for your roof' },
  { repair: 'Loose hangers', replace: 'Outdated sectional gutters' },
];

const faqs = [
  { question: 'How much does gutter repair cost in Charlotte?', answer: 'Minor repairs like sealing a seam cost $75-$200. Moderate repairs like fixing sagging sections run $150-$400. Major repairs or section replacement cost $200-$600+. We provide free estimates.' },
  { question: 'Why are my gutters leaking at the seams?', answer: 'Seam leaks occur when old sealant fails, expansion/contraction loosens joints, or original installation was poor. We clean and reseal seams with professional-grade sealant for lasting repairs.' },
  { question: 'What causes gutters to sag?', answer: 'Sagging is caused by improper hanger spacing (should be every 2 feet), debris weight, ice accumulation, or rotted fascia. We fix the root cause along with the sagging.' },
  { question: 'Should I repair or replace my gutters?', answer: 'Repair if damage is isolated to a few areas. Replace if you have widespread issues, gutters are 20+ years old, or repairs would cost more than 50% of replacement. We give honest recommendations.' },
  { question: 'Can you repair seamless gutters?', answer: 'Yes! While seamless gutters have fewer joints, they can still develop leaks at corners, end caps, and where they connect to downspouts. We repair all gutter types.' },
  { question: 'Do you offer gutter cleaning with repairs?', answer: 'Yes, gutter cleaning is included with all repair services. Clean gutters are essential for proper function and help us identify all issues that need repair.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  { name: 'Gutter Repair', url: `${SITE_CONFIG.url}/gutter-repair` },
];

export default function GutterRepairPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Gutter Repair",
          description: "Professional gutter repair services in Charlotte NC. Fix leaking, sagging, and damaged gutters.",
          slug: "gutter-repair",
        }}
      />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/gutter-repair`} pageName="Gutter Repair Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Gutter repair in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Droplets className="w-4 h-4" />
              <span className="text-sm font-semibold">Fix Leaks & Protect Your Home</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Gutter Repair Charlotte NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Stop Leaks & Sagging</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Professional repairs to protect your home from water damage</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Leaking, sagging, or clogged gutters can cause serious damage to your foundation, siding, and landscaping. Best Roofing Now provides fast, affordable gutter repair throughout Charlotte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />Licensed & Insured</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />Same-Day Service</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gutter Repair Services</h2>
            <p className="text-gray text-lg">We fix all types of gutter problems quickly and affordably.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Signs Your Gutters Need Repair</h2>
              <p className="text-gray text-lg mb-6">Don&apos;t ignore these warning signs of gutter problems:</p>
              <ul className="space-y-3">
                {problemSigns.map((sign, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image src={IMAGES.realProjects.drone2} alt="Gutter inspection and repair" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Repair vs. Replace: Quick Guide</h2>
            <div className="bg-light rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 bg-primary text-white font-bold">
                <div className="p-4">Consider Repair</div>
                <div className="p-4">Consider Replacement</div>
              </div>
              {repairVsReplace.map((row, index) => (
                <div key={index} className={`grid grid-cols-2 ${index % 2 === 0 ? 'bg-white' : 'bg-light'}`}>
                  <div className="p-4 text-gray border-r border-gray-200">{row.repair}</div>
                  <div className="p-4 text-gray">{row.replace}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Gutters Need Repair?</h2>
              <p className="text-white/90">Get a free inspection and honest repair recommendation.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="gutter-repair" count={4} title="Gutter Repair Projects" subtitle="Browse completed gutter repairs." schemaPageUrl={`${SITE_CONFIG.url}/gutter-repair`} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gutter Repair FAQs</h2>
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
            <Link href="/gutter-guards" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Gutter Guards</h3>
              <p className="text-gray text-sm">Keep debris out and reduce gutter maintenance.</p>
            </Link>
            <Link href="/gutter-installation-huntersville-nc" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Gutter Installation</h3>
              <p className="text-gray text-sm">New seamless gutter installation and replacement.</p>
            </Link>
            <Link href="/fascia-soffit-repair" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Fascia & Soffit Repair</h3>
              <p className="text-gray text-sm">Repair damage to fascia where gutters attach.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Fix Your Gutters Today" subtitle="Get a free estimate for professional gutter repair in Charlotte." />
    </>
  );
}
