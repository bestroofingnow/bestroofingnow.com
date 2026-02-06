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
  Building2,
  Droplets,
  Wrench,
  Thermometer,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Flat Roof Repair Charlotte NC',
  description:
    'Expert flat roof repair in Charlotte NC. We fix TPO, EPDM, PVC, and modified bitumen flat roofs. Leak detection, ponding water solutions, seam repairs. Free estimates!',
  keywords: [
    'flat roof repair Charlotte NC',
    'flat roof leak repair Charlotte',
    'commercial flat roof repair',
    'TPO roof repair Charlotte',
    'EPDM roof repair Charlotte NC',
    'ponding water flat roof',
    'flat roof seam repair',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/flat-roof-repair`,
  },
  openGraph: {
    title: 'Flat Roof Repair Charlotte NC | TPO, EPDM, PVC | Best Roofing Now',
    description: 'Expert flat roof repair services in Charlotte NC for commercial and residential properties.',
    url: `${SITE_CONFIG.url}/flat-roof-repair`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Flat roof repair in Charlotte NC' }],
  },
};

const repairTypes = [
  { icon: Droplets, title: 'Leak Detection & Repair', description: 'Advanced moisture detection to find and fix flat roof leaks at their source.' },
  { icon: Wrench, title: 'Seam & Membrane Repair', description: 'Re-weld TPO/PVC seams, patch EPDM membranes, fix membrane shrinkage.' },
  { icon: Thermometer, title: 'Ponding Water Solutions', description: 'Improve drainage with tapered insulation, drains, and slope corrections.' },
  { icon: Shield, title: 'Flashing Repairs', description: 'Fix edge metal, parapet walls, penetrations, and curb flashings.' },
  { icon: Building2, title: 'Blister & Bubble Repair', description: 'Cut out and patch membrane blisters before they become leaks.' },
  { icon: Clock, title: 'Emergency Flat Roof Repair', description: '24/7 emergency response for sudden flat roof failures and leaks.' },
];

const roofingSystems = [
  { name: 'TPO Roofing', description: 'Heat-welded seam repairs, membrane patches, and flashing replacement.' },
  { name: 'EPDM Rubber Roofing', description: 'Adhesive patches, seam tape repairs, and full membrane overlays.' },
  { name: 'PVC Roofing', description: 'Hot-air welded repairs, chemical-resistant membrane patching.' },
  { name: 'Modified Bitumen', description: 'Torch-applied patches, cold-applied repairs, cap sheet replacement.' },
  { name: 'Built-Up Roofing (BUR)', description: 'Flood coat repairs, gravel replacement, and multi-ply patching.' },
];

const faqs = [
  { question: 'How do I know if my flat roof needs repair?', answer: 'Signs include standing water after 48 hours, visible membrane damage, bubbles or blisters, interior water stains, higher energy bills, and separated seams. We offer free inspections to assess your flat roof.' },
  { question: 'How much does flat roof repair cost in Charlotte?', answer: 'Minor repairs typically cost $300-$1,000. Moderate repairs run $1,000-$3,000. Major repairs or partial replacements can be $3,000-$10,000+. We provide free estimates with detailed scope.' },
  { question: 'Can you repair any type of flat roof?', answer: 'Yes! We repair all flat roof systems including TPO, EPDM, PVC, modified bitumen, and built-up roofing. Our technicians are certified in all major commercial roofing systems.' },
  { question: 'Why does my flat roof have ponding water?', answer: 'Ponding is caused by inadequate slope, clogged drains, sagging deck, or improper installation. We can install tapered insulation, additional drains, or crickets to improve drainage.' },
  { question: 'How long do flat roof repairs last?', answer: 'Quality repairs can last 5-15 years depending on the issue and repair method. We use manufacturer-approved materials and techniques to maximize repair longevity.' },
  { question: 'Do you offer flat roof maintenance programs?', answer: 'Yes! Our maintenance programs include bi-annual inspections, drain cleaning, minor repairs, and detailed reports to extend your roof life and maintain warranty coverage.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Services', url: `${SITE_CONFIG.url}/services` },
  { name: 'Flat Roof Repair', url: `${SITE_CONFIG.url}/flat-roof-repair` },
];

export default function FlatRoofRepairPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Flat Roof Repair",
          description: "Expert flat roof repair services in Charlotte NC for TPO, EPDM, PVC, and modified bitumen roofing systems.",
          slug: "flat-roof-repair",
        }}
      />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/flat-roof-repair`} pageName="Flat Roof Repair Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Flat roof repair in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Commercial & Residential Flat Roofs</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Flat Roof Repair Charlotte NC
              <br className="hidden md:block" />
              <span className="text-accent-light">TPO, EPDM, PVC & More</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Expert repairs for all flat roof systems</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              From small leaks to major membrane failures, Best Roofing Now provides professional flat roof repair throughout Charlotte. We fix TPO, EPDM, PVC, modified bitumen, and built-up roofing systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />Licensed & Insured</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />Certified Installers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Flat Roof Repair Services</h2>
            <p className="text-gray text-lg">We diagnose and fix all types of flat roof problems.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairTypes.map((type) => (
              <div key={type.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{type.title}</h3>
                <p className="text-gray text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Flat Roof Systems We Repair</h2>
            <p className="text-gray text-lg">Certified technicians for all commercial roofing systems.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roofingSystems.map((system) => (
              <div key={system.name} className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-dark mb-2">{system.name}</h3>
                <p className="text-gray text-sm mb-4">{system.description}</p>
                <Link href="/commercial-roofing-services" className="text-primary font-semibold text-sm flex items-center gap-1 hover:underline">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Flat Roof Leaking?</h2>
              <p className="text-white/90">Get a free inspection and repair estimate today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Inspection</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="flat-roof-repair" count={4} title="Flat Roof Repair Projects" subtitle="Browse completed flat roof repairs." schemaPageUrl={`${SITE_CONFIG.url}/flat-roof-repair`} />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Flat Roof Repair FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Flat Roof Repair by Location</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Charlotte', 'Huntersville', 'Cornelius', 'Mooresville', 'Concord', 'Gastonia', 'Fort Mill', 'Rock Hill', 'Matthews', 'Davidson'].map((city) => (
              <Link key={city} href={`/commercial-roofing-${city.toLowerCase().replace(' ', '-')}-nc`} className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="text-primary font-semibold">{city}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need Flat Roof Repair?" subtitle="Get a free inspection and estimate from Charlotte's flat roof experts." />
    </>
  );
}
