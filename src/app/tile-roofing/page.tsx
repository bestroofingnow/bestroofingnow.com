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
  Clock,
  Thermometer,
  Wrench,
  DollarSign,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Tile Roofing Charlotte NC | Clay & Concrete',
  description:
    'Premium tile roofing installation and repair in Charlotte NC. Clay and concrete tile options with 50-100 year lifespan. Mediterranean, Spanish, and modern styles. Free estimates!',
  keywords: [
    'tile roofing Charlotte NC',
    'clay tile roof Charlotte',
    'concrete tile roofing Charlotte NC',
    'Spanish tile roof Charlotte',
    'tile roof repair Charlotte NC',
    'Mediterranean tile roofing Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tile-roofing`,
  },
  openGraph: {
    title: 'Tile Roofing Charlotte NC | Clay & Concrete Tiles | Best Roofing Now',
    description: 'Premium tile roofing installation and repair in Charlotte NC.',
    url: `${SITE_CONFIG.url}/tile-roofing`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Tile roofing in Charlotte NC' }],
  },
};

const services = [
  { icon: Home, title: 'Tile Installation', description: 'Complete clay or concrete tile installation for new construction or reroof.' },
  { icon: Wrench, title: 'Tile Repair', description: 'Replace cracked, broken, or displaced tiles without disturbing surrounding tiles.' },
  { icon: Shield, title: 'Underlayment Repair', description: 'Replace failed underlayment while preserving existing tiles.' },
  { icon: Clock, title: 'Tile Restoration', description: 'Clean, repair, and seal existing tile roofs to restore appearance.' },
  { icon: Thermometer, title: 'Re-Roofing', description: 'Replace old tile with new while upgrading underlayment and flashing.' },
  { icon: DollarSign, title: 'Maintenance Programs', description: 'Regular inspection and maintenance to maximize tile roof lifespan.' },
];

const tileTypes = [
  { name: 'Clay Tiles', description: 'Traditional terracotta tiles. Natural color that never fades. Premium option.', lifespan: '75-100 years', price: '$15-$30/sq ft' },
  { name: 'Concrete Tiles', description: 'More affordable than clay with similar appearance. Multiple color options.', lifespan: '50-75 years', price: '$10-$20/sq ft' },
  { name: 'Spanish/Barrel Tiles', description: 'Classic S-shaped tiles for Mediterranean and Spanish-style homes.', lifespan: '75-100 years', price: '$15-$25/sq ft' },
  { name: 'Flat Tiles', description: 'Modern slate-like appearance. Lighter weight than barrel tiles.', lifespan: '50-75 years', price: '$12-$22/sq ft' },
];

const benefits = [
  '50-100 year lifespan - outlasts any other roofing material',
  'Exceptional durability - resists fire, rot, and insects',
  'Energy efficient - natural air circulation keeps homes cooler',
  'Low maintenance - typically only needs occasional cleaning',
  'Timeless beauty that increases property value',
  'Environmentally friendly - made from natural materials',
  'Wind resistant - rated for 150+ mph when properly installed',
  'Available in dozens of colors and profiles',
];

const faqs = [
  { question: 'How long do tile roofs last in Charlotte?', answer: 'Clay tile roofs typically last 75-100 years, while concrete tiles last 50-75 years. The underlying structure and underlayment may need replacement before the tiles themselves.' },
  { question: 'How much does tile roofing cost in Charlotte?', answer: 'Tile roofing installation costs $20,000-$60,000+ for an average Charlotte home, or $10-$30 per square foot. Clay is more expensive than concrete, but both are long-term investments.' },
  { question: 'Can my home support tile roofing?', answer: 'Tile roofing is heavy (600-1,100 lbs per square). Many Charlotte homes can support tile with proper structural evaluation. Some may need reinforcement. We assess this during our free estimate.' },
  { question: 'Do tile roofs require special installation?', answer: 'Yes! Tile roofing requires specialized training and techniques. Improper installation leads to leaks and premature failure. Our installers are specifically trained in tile roofing systems.' },
  { question: 'Are tile roofs good in severe weather?', answer: 'Excellent! When properly installed, tile roofs resist hail, wind up to 150 mph, and fire. They perform very well in Charlotte\'s climate with proper installation.' },
  { question: 'Can broken tiles be replaced individually?', answer: 'Yes! Individual broken tiles can be replaced without disturbing surrounding tiles. We match existing tiles or source new tiles that blend with your roof.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Roofing Materials', url: `${SITE_CONFIG.url}/materials` },
  { name: 'Tile Roofing', url: `${SITE_CONFIG.url}/tile-roofing` },
];

export default function TileRoofingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Tile Roofing",
          description: "Premium tile roofing installation and repair in Charlotte NC with clay and concrete options.",
          slug: "tile-roofing",
        }}
      />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/tile-roofing`} pageName="Tile Roofing Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-orange-800 via-orange-700 to-orange-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Tile roofing in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">The Century Roof</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Tile Roofing Charlotte NC
              <br className="hidden md:block" />
              <span className="text-orange-200">Clay &amp; Concrete Tiles</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">The ultimate in beauty and longevity</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Tile roofing offers unmatched durability with a 50-100 year lifespan. Best Roofing Now provides expert tile installation and repair in Charlotte for homeowners seeking lasting beauty and value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" className="bg-white !text-orange-800 hover:bg-white/90" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-800" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-orange-200" />50-100 Year Lifespan</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-orange-200" />Certified Installers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tile Roofing Services</h2>
            <p className="text-gray text-lg">Complete tile roofing solutions from installation to restoration.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-orange-700" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tile Types &amp; Pricing</h2>
            <p className="text-gray text-lg">Choose the tile style that fits your home.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {tileTypes.map((tile) => (
              <div key={tile.name} className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-dark text-xl mb-2">{tile.name}</h3>
                <p className="text-gray text-sm mb-4">{tile.description}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-dark">Lifespan:</span> <span className="text-gray">{tile.lifespan}</span></p>
                  <p><span className="font-semibold text-dark">Price:</span> <span className="text-gray">{tile.price}</span></p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose Tile Roofing?</h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-700 flex-shrink-0" />
                    <span className="text-gray">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image src={IMAGES.realProjects.drone2} alt="Tile roof installation" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-700 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Interested in Tile Roofing?</h2>
              <p className="text-white/90">Get a free consultation and structural assessment.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-700" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Consultation</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-orange-700 hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="tile-roofing" count={4} title="Tile Roofing Projects" subtitle="Browse completed tile installations." schemaPageUrl={`${SITE_CONFIG.url}/tile-roofing`} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tile Roofing FAQs</h2>
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
            <Link href="/cedar-shake-roofing" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Cedar Shake</h3>
              <p className="text-gray text-sm">Natural wood roofing beauty.</p>
            </Link>
            <Link href="/standing-seam-metal-roofing" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Standing Seam Metal</h3>
              <p className="text-gray text-sm">Premium metal roofing solutions.</p>
            </Link>
            <Link href="/architectural-shingles" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Architectural Shingles</h3>
              <p className="text-gray text-sm">Premium asphalt options.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Invest in a Century Roof" subtitle="Get a free consultation for tile roofing installation." />
    </>
  );
}
