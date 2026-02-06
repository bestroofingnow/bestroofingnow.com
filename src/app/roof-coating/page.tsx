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
  Thermometer,
  Clock,
  DollarSign,
  Building2,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { BreadcrumbSchema, FAQSchema, ServiceSchema, AISearchOptimizationBundle, VoiceSearchActionSchema } from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roof Coating Charlotte NC | Commercial',
  description:
    'Professional roof coating services in Charlotte NC. Silicone, acrylic, and elastomeric coatings extend roof life 10-20 years. Reduce energy costs. Free estimates!',
  keywords: [
    'roof coating Charlotte NC',
    'silicone roof coating Charlotte',
    'commercial roof coating Charlotte NC',
    'elastomeric roof coating Charlotte',
    'reflective roof coating Charlotte',
    'flat roof coating Charlotte NC',
    'roof restoration Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/roof-coating`,
  },
  openGraph: {
    title: 'Roof Coating Charlotte NC | Silicone & Elastomeric | Best Roofing Now',
    description: 'Professional roof coating services to extend roof life and reduce energy costs.',
    url: `${SITE_CONFIG.url}/roof-coating`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Roof coating in Charlotte NC' }],
  },
};

const coatingTypes = [
  { name: 'Silicone Coating', description: 'Best for ponding water areas. UV stable, highly reflective, and waterproof.', lifespan: '15-20 years', bestFor: 'Flat roofs with ponding' },
  { name: 'Acrylic Coating', description: 'Budget-friendly option for sloped roofs with good drainage.', lifespan: '10-15 years', bestFor: 'Sloped metal, BUR, mod-bit' },
  { name: 'Elastomeric Coating', description: 'Flexible coating that bridges cracks and handles thermal movement.', lifespan: '10-15 years', bestFor: 'Older roofs with minor cracking' },
  { name: 'Polyurethane Coating', description: 'Extremely durable, great for high-traffic roofs.', lifespan: '15-20 years', bestFor: 'High-traffic, industrial' },
];

const benefits = [
  { icon: Clock, title: 'Extends Roof Life', description: 'Add 10-20 years to your existing roof without full replacement.' },
  { icon: Thermometer, title: 'Reduces Energy Costs', description: 'Reflective coatings reduce cooling costs by 20-40%.' },
  { icon: DollarSign, title: 'Fraction of Replacement Cost', description: 'Coating costs 50-70% less than full roof replacement.' },
  { icon: Droplets, title: 'Seamless Waterproofing', description: 'Monolithic membrane seals all seams and penetrations.' },
  { icon: Shield, title: 'UV Protection', description: 'Protects membrane from UV degradation.' },
  { icon: Building2, title: 'Minimal Business Disruption', description: 'No tear-off, no mess, quieter installation.' },
];

const candidateRoofs = [
  'TPO, EPDM, or PVC with 5+ years remaining life',
  'Metal roofs with surface rust or fading',
  'Modified bitumen or built-up roofs',
  'Spray foam roofs needing recoat',
  'Roofs with minor leaks or weathering',
  'Roofs where full replacement isn\'t in budget',
];

const faqs = [
  { question: 'How much does roof coating cost in Charlotte?', answer: 'Roof coating typically costs $3-$7 per square foot, or $15,000-$50,000 for an average commercial building. This is 50-70% less than full replacement.' },
  { question: 'How long does roof coating last?', answer: 'Quality silicone coatings last 15-20 years. Acrylic and elastomeric coatings last 10-15 years. Recoating can extend life further.' },
  { question: 'Can you coat any roof?', answer: 'Most flat and low-slope roofs can be coated if they have sufficient remaining life. Roofs with major structural issues or extensive damage may need replacement instead.' },
  { question: 'What\'s the difference between silicone and acrylic coating?', answer: 'Silicone handles ponding water and is more UV stable. Acrylic is more affordable but requires good drainage. We assess your roof to recommend the best option.' },
  { question: 'Will coating fix my roof leaks?', answer: 'Coating can seal minor leaks and weathered areas. Major leaks from structural issues need repair before coating. We inspect and repair problem areas before applying coating.' },
  { question: 'How long does coating installation take?', answer: 'Most commercial coatings are completed in 2-5 days depending on roof size. The roof is walkable within 24 hours of application.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Commercial Roofing', url: `${SITE_CONFIG.url}/commercial-roofing-services` },
  { name: 'Roof Coating', url: `${SITE_CONFIG.url}/roof-coating` },
];

export default function RoofCoatingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Roof Coating",
          description: "Professional roof coating services in Charlotte NC to extend roof life and reduce energy costs.",
          slug: "roof-coating",
        }}
      />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/roof-coating`} pageName="Roof Coating Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Roof coating in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Extend Your Roof Life 10-20 Years</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Roof Coating Charlotte NC
              <br className="hidden md:block" />
              <span className="text-accent-light">Commercial Roof Restoration</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">Extend roof life at a fraction of replacement cost</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Don&apos;t replace your roof when coating can extend its life by 10-20 years. Best Roofing Now provides professional silicone, acrylic, and elastomeric roof coatings for Charlotte commercial buildings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />Licensed & Insured</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />Certified Applicators</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Benefits of Roof Coating</h2>
            <p className="text-gray text-lg">Why smart building owners choose coating over replacement.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Coating Types</h2>
            <p className="text-gray text-lg">We apply the right coating for your specific roof.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {coatingTypes.map((coating) => (
              <div key={coating.name} className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-dark text-xl mb-2">{coating.name}</h3>
                <p className="text-gray text-sm mb-4">{coating.description}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-dark">Lifespan:</span> <span className="text-gray">{coating.lifespan}</span></p>
                  <p><span className="font-semibold text-dark">Best For:</span> <span className="text-gray">{coating.bestFor}</span></p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Is Your Roof a Candidate?</h2>
              <p className="text-gray text-lg mb-6">Roof coating works best for these situations:</p>
              <ul className="space-y-3">
                {candidateRoofs.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image src={IMAGES.realProjects.drone2} alt="Commercial roof coating" width={600} height={450} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Extend Your Roof&apos;s Life</h2>
              <p className="text-white/90">Get a free assessment to see if coating is right for your roof.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Assessment</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="roof-coating" count={4} title="Roof Coating Projects" subtitle="Browse completed roof coatings." schemaPageUrl={`${SITE_CONFIG.url}/roof-coating`} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Roof Coating FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Related Commercial Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/commercial-roofing-services" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Commercial Roofing</h3>
              <p className="text-gray text-sm">Full commercial roofing services.</p>
            </Link>
            <Link href="/flat-roof-repair" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Flat Roof Repair</h3>
              <p className="text-gray text-sm">Repair leaks and damage on flat roofs.</p>
            </Link>
            <Link href="/roof-maintenance" className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-primary mb-2">Roof Maintenance</h3>
              <p className="text-gray text-sm">Preventive maintenance programs.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Save Money with Roof Coating" subtitle="Get a free assessment from Charlotte's commercial roofing experts." />
    </>
  );
}
