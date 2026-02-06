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
  Wind,
  Palette,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG, ROOFING_BRANDS } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Architectural Shingles Charlotte NC',
  description:
    'Premium architectural shingle installation in Charlotte NC. GAF, CertainTeed, and Owens Corning certified installer. Dimensional shingles with 30-50 year warranties. Free estimates!',
  keywords: [
    'architectural shingles Charlotte NC',
    'dimensional shingles Charlotte',
    'laminated shingles Charlotte NC',
    'GAF shingles Charlotte',
    'CertainTeed shingles Charlotte NC',
    'Owens Corning shingles Charlotte',
    'premium shingles Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/architectural-shingles`,
  },
  openGraph: {
    title: 'Architectural Shingles Charlotte NC | GAF, CertainTeed, Owens Corning | Best Roofing Now',
    description: 'Premium architectural shingle installation in Charlotte NC.',
    url: `${SITE_CONFIG.url}/architectural-shingles`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Architectural shingles in Charlotte NC' }],
  },
};

const shingleBrands = [
  { name: 'GAF Timberline HDZ', warranty: 'Lifetime Limited', windRating: '130 mph', features: 'LayerLock technology, StainGuard Plus' },
  { name: 'CertainTeed Landmark', warranty: 'Lifetime Limited', windRating: '110 mph', features: 'NailTrak guides, StreakFighter algae resistance' },
  { name: 'Owens Corning Duration', warranty: 'Lifetime Limited', windRating: '130 mph', features: 'SureNail technology, TruDefinition color' },
  { name: 'GAF Timberline Ultra HD', warranty: 'Lifetime Limited', windRating: '130 mph', features: 'Ultra-dimensional wood-shake look' },
  { name: 'CertainTeed Presidential', warranty: '50 Year', windRating: '110 mph', features: 'Luxury shake appearance, triple-layer' },
];

const benefits = [
  { icon: Clock, title: '25-50 Year Lifespan', description: 'Architectural shingles last 25-50 years vs 15-20 for 3-tab shingles.' },
  { icon: Wind, title: 'Superior Wind Resistance', description: 'Rated for 110-130 mph winds with proper installation.' },
  { icon: Palette, title: 'Dimensional Appearance', description: 'Multi-layer construction creates shadow lines and depth.' },
  { icon: Shield, title: 'Better Protection', description: 'Heavier weight and multiple layers provide better waterproofing.' },
  { icon: Home, title: 'Increased Home Value', description: 'Premium appearance and warranties boost resale value.' },
  { icon: Award, title: 'Better Warranties', description: 'Lifetime limited warranties with wind and algae coverage.' },
];

const vsThreeTab = [
  { feature: 'Lifespan', architectural: '25-50 years', threeTab: '15-20 years' },
  { feature: 'Wind Rating', architectural: '110-130 mph', threeTab: '60-70 mph' },
  { feature: 'Appearance', architectural: 'Dimensional, shadow lines', threeTab: 'Flat, uniform' },
  { feature: 'Weight', architectural: '240-400 lbs/square', threeTab: '200-250 lbs/square' },
  { feature: 'Cost', architectural: '$4-$7/sq ft installed', threeTab: '$3-$5/sq ft installed' },
  { feature: 'Warranty', architectural: 'Lifetime limited', threeTab: '20-25 year' },
];

const faqs = [
  { question: 'What is the difference between architectural and 3-tab shingles?', answer: 'Architectural shingles have multiple layers creating a dimensional look, while 3-tab shingles are single-layer and flat. Architectural shingles are heavier, more durable, have better wind ratings, and last longer.' },
  { question: 'How much do architectural shingles cost in Charlotte?', answer: 'Architectural shingles typically cost $4-$7 per square foot installed, or $8,000-$15,000 for an average Charlotte home. Premium designer shingles cost $6-$10/sq ft.' },
  { question: 'Which brand of architectural shingles is best?', answer: 'GAF, CertainTeed, and Owens Corning all make excellent architectural shingles. As a certified installer for all three, we can recommend the best option for your specific needs and budget.' },
  { question: 'How long do architectural shingles last in North Carolina?', answer: 'With proper installation and ventilation, architectural shingles last 25-35 years in Charlotte\'s climate. Premium lines can last 40-50 years.' },
  { question: 'Are architectural shingles worth the extra cost?', answer: 'Yes! The 10-20 year longer lifespan, better appearance, and stronger warranties make architectural shingles the better value long-term. Most Charlotte homeowners now choose architectural over 3-tab.' },
  { question: 'What colors do architectural shingles come in?', answer: 'Dozens of colors from weathered wood tones to slate gray to charcoal black. We have samples to help you choose the perfect color to complement your home.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Roofing Materials', url: `${SITE_CONFIG.url}/materials` },
  { name: 'Architectural Shingles', url: `${SITE_CONFIG.url}/architectural-shingles` },
];

export default function ArchitecturalShinglesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Architectural Shingle Installation",
          description: "Premium architectural shingle installation in Charlotte NC from certified GAF, CertainTeed, and Owens Corning installers.",
          slug: "architectural-shingles",
        }}
      />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/architectural-shingles`} pageName="Architectural Shingles Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Architectural shingles in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Most Popular Roofing Choice</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Architectural Shingles
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Premium dimensional shingles with lifetime warranties</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Architectural shingles combine beautiful aesthetics with superior durability. As certified installers for GAF, CertainTeed, and Owens Corning, Best Roofing Now delivers premium shingle installations throughout Charlotte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />Lifetime Warranties</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />Certified Installer</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Architectural Shingles?</h2>
            <p className="text-gray text-lg">The smart choice for Charlotte homeowners.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Top Architectural Shingle Brands</h2>
            <p className="text-gray text-lg">We install the industry&apos;s best shingles with manufacturer-backed warranties.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shingleBrands.map((brand) => (
              <div key={brand.name} className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-dark text-lg mb-3">{brand.name}</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-dark">Warranty:</span> <span className="text-gray">{brand.warranty}</span></p>
                  <p><span className="font-semibold text-dark">Wind Rating:</span> <span className="text-gray">{brand.windRating}</span></p>
                  <p><span className="font-semibold text-dark">Features:</span> <span className="text-gray">{brand.features}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Architectural vs. 3-Tab Shingles</h2>
            <div className="bg-light rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 bg-primary text-white font-bold">
                <div className="p-4">Feature</div>
                <div className="p-4">Architectural</div>
                <div className="p-4">3-Tab</div>
              </div>
              {vsThreeTab.map((row, index) => (
                <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-light'}`}>
                  <div className="p-4 font-semibold text-dark">{row.feature}</div>
                  <div className="p-4 text-primary font-medium">{row.architectural}</div>
                  <div className="p-4 text-gray">{row.threeTab}</div>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Ready for Premium Shingles?</h2>
              <p className="text-white/90">Get a free estimate with material samples.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="architectural-shingles" count={4} title="Architectural Shingle Projects" subtitle="Browse completed shingle installations." schemaPageUrl={`${SITE_CONFIG.url}/architectural-shingles`} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Architectural Shingle FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Explore Our Brands</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ROOFING_BRANDS.slice(0, 3).map((brand) => (
              <Link key={brand.slug} href={`/brands/${brand.slug}`} className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-primary mb-2">{brand.name}</h3>
                <p className="text-gray text-sm">Learn about {brand.name} shingles and warranties.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Upgrade to Architectural Shingles" subtitle="Get a free estimate from Charlotte's certified shingle installers." />
    </>
  );
}
