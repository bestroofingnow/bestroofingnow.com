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
  Home,
  Droplets,
  Wrench,
  Wind,
  Bug,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Fascia & Soffit Repair Charlotte NC',
  description:
    'Professional fascia and soffit repair & replacement in Charlotte NC. Fix rotted wood, damaged aluminum, and improve ventilation. Protect your roof edge. Free estimates!',
  keywords: [
    'fascia repair Charlotte NC',
    'soffit repair Charlotte NC',
    'fascia replacement Charlotte',
    'soffit replacement Charlotte',
    'rotted fascia repair',
    'aluminum soffit installation',
    'wood fascia repair Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/fascia-soffit-repair`,
  },
  openGraph: {
    title: 'Fascia & Soffit Repair Charlotte NC | Best Roofing Now',
    description: 'Professional fascia and soffit repair and replacement services in Charlotte NC.',
    url: `${SITE_CONFIG.url}/fascia-soffit-repair`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Fascia and soffit repair in Charlotte NC' }],
  },
};

const services = [
  { icon: Wrench, title: 'Fascia Repair', description: 'Fix rotted, warped, or damaged fascia boards to restore roof edge protection.' },
  { icon: Home, title: 'Fascia Replacement', description: 'Complete fascia board replacement with wood, aluminum, or composite materials.' },
  { icon: Wind, title: 'Soffit Repair', description: 'Repair damaged soffit panels and restore proper attic ventilation.' },
  { icon: Shield, title: 'Soffit Replacement', description: 'Replace old soffit with vented aluminum or vinyl for improved airflow.' },
  { icon: Bug, title: 'Pest Damage Repair', description: 'Fix damage from woodpeckers, squirrels, and other pests.' },
  { icon: Droplets, title: 'Water Damage Repair', description: 'Address fascia and soffit damage caused by gutter overflow or ice dams.' },
];

const materials = [
  { name: 'Wood Fascia', description: 'Traditional painted wood. Classic look, requires maintenance.', price: '$4-$8/linear ft' },
  { name: 'Aluminum Fascia', description: 'Low maintenance, won\'t rot. Available in many colors.', price: '$6-$12/linear ft' },
  { name: 'Composite Fascia', description: 'Wood look without rot. Premium durability.', price: '$8-$15/linear ft' },
  { name: 'Vinyl Soffit', description: 'Affordable, low maintenance. Vented options available.', price: '$4-$8/linear ft' },
  { name: 'Aluminum Soffit', description: 'Durable, won\'t warp. Better ventilation options.', price: '$6-$12/linear ft' },
];

const damageSignes = [
  'Peeling or flaking paint on fascia',
  'Visible rot or soft spots in wood',
  'Gaps between fascia and roof edge',
  'Pests entering attic through soffit',
  'Sagging or warped fascia boards',
  'Water stains on soffit panels',
  'Missing or damaged soffit vents',
  'Gutters pulling away from fascia',
];

const faqs = [
  { question: 'What is the difference between fascia and soffit?', answer: 'Fascia is the vertical board at the roof edge where gutters attach. Soffit is the horizontal panel underneath the roof overhang. Both protect your roof structure and attic.' },
  { question: 'How much does fascia and soffit repair cost in Charlotte?', answer: 'Repairs typically cost $300-$1,500 depending on extent. Full replacement runs $1,500-$5,000+ for an average home. Wood is cheapest, aluminum is mid-range, and composite is premium.' },
  { question: 'Why is my fascia rotting?', answer: 'Common causes include clogged gutters overflowing onto fascia, ice dams, improper flashing, old age, and lack of maintenance. We fix the root cause along with the fascia.' },
  { question: 'Can you match my existing fascia color?', answer: 'Yes! We offer fascia and soffit in dozens of colors to match your home. For painted wood, we can match any color.' },
  { question: 'Do I need vented soffit?', answer: 'Yes! Vented soffit is essential for attic ventilation. It allows air to enter the attic and exit through ridge vents, preventing moisture buildup and extending roof life.' },
  { question: 'Can you repair fascia without replacing gutters?', answer: 'Usually yes. We carefully remove and reinstall gutters to access fascia. However, if gutters are old or damaged, this is an ideal time to replace both.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  { name: 'Fascia & Soffit Repair', url: `${SITE_CONFIG.url}/fascia-soffit-repair` },
];

export default function FasciaSoffitRepairPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Fascia and Soffit Repair",
          description: "Professional fascia and soffit repair and replacement services in Charlotte NC.",
          slug: "fascia-soffit-repair",
        }}
      />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/fascia-soffit-repair`} pageName="Fascia Soffit Repair Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Fascia and soffit repair in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Home className="w-4 h-4" />
              <span className="text-sm font-semibold">Protect Your Roof Edge</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Fascia &amp; Soffit Repair
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Expert repair and replacement for your roof edge</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Damaged fascia and soffit can lead to water damage, pest infestations, and poor attic ventilation. Best Roofing Now provides professional fascia and soffit repair throughout Charlotte.
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Fascia &amp; Soffit Services</h2>
            <p className="text-gray text-lg">Complete repair and replacement for your home&apos;s roof edge.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Signs You Need Fascia or Soffit Repair</h2>
              <p className="text-gray text-lg mb-6">Watch for these warning signs of fascia and soffit damage:</p>
              <ul className="space-y-3">
                {damageSignes.map((sign, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image src={IMAGES.realProjects.drone1} alt="Fascia and soffit inspection" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Material Options &amp; Pricing</h2>
            <p className="text-gray text-lg">Choose the right material for your home and budget.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material) => (
              <div key={material.name} className="bg-light p-6 rounded-xl">
                <h3 className="font-bold text-dark mb-2">{material.name}</h3>
                <p className="text-gray text-sm mb-4">{material.description}</p>
                <p className="text-primary font-bold">{material.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Damaged Fascia or Soffit?</h2>
              <p className="text-white/90">Get a free inspection and repair estimate today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="fascia-soffit-repair" count={4} title="Fascia & Soffit Projects" subtitle="Browse completed fascia and soffit repairs." schemaPageUrl={`${SITE_CONFIG.url}/fascia-soffit-repair`} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Fascia &amp; Soffit FAQs</h2>
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
            <Link href="/gutter-repair" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Gutter Repair</h3>
              <p className="text-gray text-sm">Fix sagging, leaking, or damaged gutters.</p>
            </Link>
            <Link href="/siding-services" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Siding Services</h3>
              <p className="text-gray text-sm">Complete siding installation and repair.</p>
            </Link>
            <Link href="/ventilation" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Ventilation</h3>
              <p className="text-gray text-sm">Improve attic ventilation and extend roof life.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Protect Your Roof Edge" subtitle="Get a free estimate for fascia and soffit repair or replacement." />
    </>
  );
}
