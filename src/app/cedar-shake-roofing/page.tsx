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
  TreeDeciduous,
  Clock,
  Home,
  Wrench,
  Droplets,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Cedar Shake Roofing Charlotte NC',
  description:
    'Premium cedar shake roofing installation and repair in Charlotte NC. Natural beauty, 40-50 year lifespan, and excellent insulation. Expert installation for luxury homes. Free estimates!',
  keywords: [
    'cedar shake roofing Charlotte NC',
    'cedar shake roof installation Charlotte',
    'cedar shingle roofing Charlotte NC',
    'wood shake roof Charlotte',
    'cedar roof repair Charlotte NC',
    'cedar shake replacement Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/cedar-shake-roofing`,
  },
  openGraph: {
    title: 'Cedar Shake Roofing Charlotte NC | Natural Wood Roofing | Best Roofing Now',
    description: 'Premium cedar shake roofing installation and repair in Charlotte NC.',
    url: `${SITE_CONFIG.url}/cedar-shake-roofing`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Cedar shake roofing in Charlotte NC' }],
  },
};

const services = [
  { icon: Home, title: 'New Installation', description: 'Complete cedar shake roof installation for new construction or reroof.' },
  { icon: Wrench, title: 'Cedar Roof Repair', description: 'Repair split, curled, or missing cedar shakes.' },
  { icon: TreeDeciduous, title: 'Shake Replacement', description: 'Replace damaged sections while preserving your existing roof.' },
  { icon: Shield, title: 'Preservation Treatment', description: 'Oil treatments and preservatives to extend cedar life.' },
  { icon: Droplets, title: 'Moss & Algae Removal', description: 'Gentle cleaning to remove growth without damaging shakes.' },
  { icon: Clock, title: 'Restoration', description: 'Restore weathered cedar roofs to like-new condition.' },
];

const benefits = [
  'Timeless natural beauty that improves with age',
  '40-50 year lifespan with proper maintenance',
  'Excellent natural insulation (2x better than asphalt)',
  'Increases property value significantly',
  'Eco-friendly, sustainable, biodegradable',
  'Natural resistance to insects and UV damage',
  'Unique appearance - no two roofs are alike',
  'Suitable for historic and luxury homes',
];

const cedarTypes = [
  { name: 'Cedar Shakes', description: 'Hand-split for rustic, textured appearance. Thicker and more irregular.', lifespan: '40-50 years', price: '$15-$25/sq ft' },
  { name: 'Cedar Shingles', description: 'Machine-cut for uniform, refined look. Smoother surface.', lifespan: '35-45 years', price: '$12-$20/sq ft' },
  { name: 'Treated Cedar', description: 'Fire-retardant and preservative treated for enhanced durability.', lifespan: '45-55 years', price: '$18-$30/sq ft' },
];

const faqs = [
  { question: 'How long do cedar shake roofs last in Charlotte?', answer: 'With proper maintenance, cedar shake roofs last 40-50 years in Charlotte. Regular cleaning, treatment, and prompt repairs are essential for longevity.' },
  { question: 'How much does cedar shake roofing cost in Charlotte?', answer: 'Cedar shake installation typically costs $15,000-$45,000 for an average Charlotte home, or $12-$30 per square foot depending on shake quality and installation complexity.' },
  { question: 'Do cedar roofs require a lot of maintenance?', answer: 'Cedar roofs require more maintenance than asphalt - annual inspections, periodic cleaning, and treatment every 3-5 years. However, this maintenance extends life significantly.' },
  { question: 'Are cedar shake roofs fire-resistant?', answer: 'Natural cedar has moderate fire resistance. We offer fire-retardant treated cedar that meets Class A, B, or C fire ratings, often required by insurance and building codes.' },
  { question: 'Can you repair individual cedar shakes?', answer: 'Yes! Individual damaged shakes can be replaced without disturbing the surrounding roof. This makes repairs economical and extends overall roof life.' },
  { question: 'Is cedar roofing environmentally friendly?', answer: 'Yes! Cedar is a renewable resource, biodegradable, and requires less energy to manufacture than other roofing materials. It\'s one of the most eco-friendly roofing choices.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Roofing Materials', url: `${SITE_CONFIG.url}/materials` },
  { name: 'Cedar Shake Roofing', url: `${SITE_CONFIG.url}/cedar-shake-roofing` },
];

export default function CedarShakeRoofingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Cedar Shake Roofing",
          description: "Premium cedar shake roofing installation and repair in Charlotte NC.",
          slug: "cedar-shake-roofing",
        }}
      />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/cedar-shake-roofing`} pageName="Cedar Shake Roofing Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Cedar shake roofing in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <TreeDeciduous className="w-4 h-4" />
              <span className="text-sm font-semibold">Natural Wood Roofing</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Cedar Shake Roofing
              <br className="hidden md:block" />
              <span className="text-amber-200">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Timeless natural beauty for luxury homes</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Cedar shake roofing offers unmatched natural beauty and a 40-50 year lifespan. Best Roofing Now provides expert cedar shake installation, repair, and restoration throughout Charlotte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" className="bg-white !text-amber-800 hover:bg-white/90" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-amber-800" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-amber-200" />40-50 Year Lifespan</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-amber-200" />Expert Installers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Cedar Shake Services</h2>
            <p className="text-gray text-lg">Complete cedar roofing solutions from installation to restoration.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-amber-700" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose Cedar Shake?</h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0" />
                    <span className="text-gray">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image src={IMAGES.realProjects.drone1} alt="Cedar shake roof" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Cedar Types & Pricing</h2>
            <p className="text-gray text-lg">Choose the cedar style that fits your home.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cedarTypes.map((type) => (
              <div key={type.name} className="bg-light p-6 rounded-xl">
                <h3 className="font-bold text-dark text-xl mb-2">{type.name}</h3>
                <p className="text-gray text-sm mb-4">{type.description}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-dark">Lifespan:</span> <span className="text-gray">{type.lifespan}</span></p>
                  <p><span className="font-semibold text-dark">Price:</span> <span className="text-gray">{type.price}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Interested in Cedar Shake Roofing?</h2>
              <p className="text-white/90">Get a free consultation and estimate.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-amber-700" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Consultation</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-amber-700 hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="cedar-shake-roofing" count={4} title="Cedar Shake Projects" subtitle="Browse completed cedar shake installations." schemaPageUrl={`${SITE_CONFIG.url}/cedar-shake-roofing`} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Cedar Shake FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Explore Other Premium Materials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/tile-roofing" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Tile Roofing</h3>
              <p className="text-gray text-sm">Clay and concrete tile options.</p>
            </Link>
            <Link href="/standing-seam-metal-roofing" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Standing Seam Metal</h3>
              <p className="text-gray text-sm">Premium metal roofing solutions.</p>
            </Link>
            <Link href="/architectural-shingles" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Architectural Shingles</h3>
              <p className="text-gray text-sm">Premium asphalt shingle options.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Experience Natural Cedar Beauty" subtitle="Get a free consultation for cedar shake roofing." />
    </>
  );
}
