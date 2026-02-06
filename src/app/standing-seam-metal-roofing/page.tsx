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
  Zap,
  Clock,
  Home,
  Thermometer,
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
  title: 'Standing Seam Metal Roofing Charlotte',
  description:
    'Premium standing seam metal roofing in Charlotte NC. 50+ year lifespan, energy efficient, and virtually maintenance-free. Residential and commercial installation. Free estimates!',
  keywords: [
    'standing seam metal roof Charlotte NC',
    'standing seam roof installation Charlotte',
    'metal roof Charlotte NC',
    'standing seam roofing contractor',
    'premium metal roofing Charlotte',
    'snap lock metal roof Charlotte',
    'mechanically seamed metal roof',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/standing-seam-metal-roofing`,
  },
  openGraph: {
    title: 'Standing Seam Metal Roofing Charlotte NC | Premium Installation | Best Roofing Now',
    description: 'Premium standing seam metal roofing installation in Charlotte NC.',
    url: `${SITE_CONFIG.url}/standing-seam-metal-roofing`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero3, width: 1200, height: 630, alt: 'Standing seam metal roofing in Charlotte NC' }],
  },
};

const benefits = [
  { icon: Clock, title: '50+ Year Lifespan', description: 'Standing seam roofs last 50-70 years with minimal maintenance - 2-3x longer than shingles.' },
  { icon: Thermometer, title: 'Energy Efficient', description: 'Reflective coatings reduce cooling costs by 25-40% in Charlotte\'s hot summers.' },
  { icon: Shield, title: 'Superior Durability', description: 'Withstands 140+ mph winds, resists hail, and won\'t crack, rot, or warp.' },
  { icon: Zap, title: 'Solar Ready', description: 'Perfect platform for solar panel installation with clamp-on mounting systems.' },
  { icon: Home, title: 'Architectural Appeal', description: 'Clean, modern lines that complement any architectural style.' },
  { icon: DollarSign, title: 'Long-Term Value', description: 'Higher upfront cost offset by decades of no-replacement durability.' },
];

const panelTypes = [
  { name: 'Snap-Lock Panels', description: 'Concealed fastener system that snaps together. Ideal for most residential applications.', gauge: '24-26 gauge', warranty: '30-40 year paint warranty' },
  { name: 'Mechanically Seamed', description: 'Double-lock seam for maximum weather resistance. Best for low-slope and commercial.', gauge: '22-24 gauge', warranty: '40-50 year warranty' },
  { name: 'Nail Strip Panels', description: 'Budget-friendly option with exposed fasteners at panel edges.', gauge: '26-29 gauge', warranty: '20-30 year warranty' },
];

const colorOptions = [
  'Matte Black', 'Charcoal Gray', 'Slate Blue', 'Forest Green', 'Galvalume Silver',
  'Copper Penny', 'Dark Bronze', 'Colonial Red', 'Stone White', 'Clay',
];

const faqs = [
  { question: 'How much does standing seam metal roofing cost in Charlotte?', answer: 'Standing seam typically costs $12-$22 per square foot installed ($1,200-$2,200 per roofing square). This is 2-3x more than shingles but lasts 2-3x longer with virtually no maintenance.' },
  { question: 'Is standing seam metal roofing worth the cost?', answer: 'For homeowners who plan to stay long-term, yes. The 50+ year lifespan means you\'ll likely never replace your roof again. Energy savings, insurance discounts, and zero maintenance further offset the cost.' },
  { question: 'Are standing seam roofs noisy in rain?', answer: 'No! When properly installed with solid decking and underlayment, standing seam roofs are no louder than shingle roofs. The solid substrate absorbs sound.' },
  { question: 'Can standing seam metal go over existing shingles?', answer: 'Sometimes, but we typically don\'t recommend it. Tear-off ensures proper inspection of decking, better installation, and longer life. We\'ll assess your specific situation.' },
  { question: 'What colors are available for standing seam?', answer: 'We offer 30+ colors including popular choices like matte black, charcoal, galvalume, and copper. Kynar 500/Hylar 5000 finishes come with 30-40 year color warranties.' },
  { question: 'How long does standing seam installation take?', answer: 'Most residential standing seam installations take 3-7 days depending on roof size and complexity. We fabricate panels on-site for perfect fit.' },
];

const breadcrumbItems = [
  { name: 'Home', url: SITE_CONFIG.url },
  { name: 'Metal Roofing', url: `${SITE_CONFIG.url}/metal-roofing-services` },
  { name: 'Standing Seam', url: `${SITE_CONFIG.url}/standing-seam-metal-roofing` },
];

export default function StandingSeamMetalRoofingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        service={{
          title: "Standing Seam Metal Roofing",
          description: "Premium standing seam metal roofing installation in Charlotte NC with 50+ year lifespan.",
          slug: "standing-seam-metal-roofing",
        }}
      />
      <AISearchOptimizationBundle pageUrl={`${SITE_CONFIG.url}/standing-seam-metal-roofing`} pageName="Standing Seam Metal Roofing Charlotte NC" city="Charlotte" />
      <VoiceSearchActionSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image src={IMAGES.hero.hero3} alt="Standing seam metal roofing in Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6 text-white/80" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Premium Metal Roofing</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Standing Seam Metal Roofing
              <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">The last roof you&apos;ll ever need</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Standing seam metal roofing delivers unmatched durability, energy efficiency, and curb appeal. Best Roofing Now provides expert installation with on-site panel fabrication for a perfect, leak-free fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Get Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>Call {SITE_CONFIG.phone}</Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />5.0 Rating ({SITE_CONFIG.googleReviewCount}+ reviews)</span>
              <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent-light" />50+ Year Warranty</span>
              <span className="flex items-center gap-2"><Award className="w-5 h-5 text-accent-light" />Certified Installers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Standing Seam?</h2>
            <p className="text-gray text-lg">The gold standard in residential and commercial metal roofing.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Panel Types</h2>
            <p className="text-gray text-lg">We install all standing seam panel systems.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {panelTypes.map((panel) => (
              <div key={panel.name} className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-dark text-xl mb-2">{panel.name}</h3>
                <p className="text-gray text-sm mb-4">{panel.description}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-dark">Gauge:</span> <span className="text-gray">{panel.gauge}</span></p>
                  <p><span className="font-semibold text-dark">Warranty:</span> <span className="text-gray">{panel.warranty}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Popular Colors</h2>
            <p className="text-gray text-lg">30+ color options with Kynar 500 finish for lasting beauty.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {colorOptions.map((color) => (
              <span key={color} className="bg-light px-4 py-2 rounded-full text-gray font-medium">{color}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Ready for Your Forever Roof?</h2>
              <p className="text-white/90">Get a free standing seam metal roofing estimate.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>Free Estimate</Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} className="bg-white !text-accent hover:bg-white/90" size="lg" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>{SITE_CONFIG.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="standing-seam-metal-roofing" count={4} title="Standing Seam Projects" subtitle="Browse completed standing seam installations." schemaPageUrl={`${SITE_CONFIG.url}/standing-seam-metal-roofing`} />

      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Common Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Standing Seam FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Standing Seam by Location</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Charlotte', 'Huntersville', 'Cornelius', 'Davidson', 'Mooresville', 'Concord', 'Fort Mill', 'Rock Hill'].map((city) => (
              <Link key={city} href={`/metal-roofing-${city.toLowerCase().replace(' ', '-')}-nc`} className="bg-light p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <span className="text-primary font-semibold">{city}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Upgrade to Standing Seam Metal" subtitle="Get a free consultation from Charlotte's metal roofing experts." />
    </>
  );
}
