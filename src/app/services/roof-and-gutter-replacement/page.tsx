import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, ArrowRight, Home, Droplets, DollarSign, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { ServiceSchema, BreadcrumbSchema, FAQSchema, WebPageSchema } from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Roof and Gutter Replacement Charlotte NC | Save with Bundle Pricing',
  description: 'Get roof and gutter replacement together in Charlotte NC and save. One contractor, one timeline, one warranty. Free estimates, financing available. Call (704) 605-6047.',
  keywords: [
    'roof and gutter replacement Charlotte NC',
    'roof and gutter installation Charlotte',
    'roof gutter combo Charlotte NC',
    'roofing and gutter contractor Charlotte',
    'roof and gutter replacement cost Charlotte',
    'roofing and gutter company near me',
    'new roof and gutters Charlotte',
    'roof gutter package Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/roof-and-gutter-replacement`,
  },
  openGraph: {
    title: 'Roof and Gutter Replacement Charlotte NC | Bundle & Save',
    description: 'Complete roof and gutter replacement from one trusted contractor. Save time and money with bundle pricing.',
    url: `${SITE_CONFIG.url}/services/roof-and-gutter-replacement`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'Roof and gutter replacement services Charlotte NC',
      },
    ],
  },
};

const bundleFAQs = [
  {
    question: 'Why should I replace my roof and gutters at the same time?',
    answer: 'Replacing your roof and gutters together offers several advantages: 1) You save money with bundle pricing since we\'re already set up at your property. 2) New gutters are installed after the roof, ensuring perfect alignment and proper flashing. 3) You have one point of contact, one warranty, and one project timeline. 4) The drip edge and gutter integration is seamless, preventing future water intrusion issues.',
  },
  {
    question: 'How much does roof and gutter replacement cost in Charlotte?',
    answer: 'In Charlotte, combined roof and gutter replacement typically costs $10,000 to $30,000+ depending on home size, roof complexity, and materials chosen. Roof replacement alone averages $8,000-$25,000 and gutters $1,000-$2,500. Our bundle pricing provides savings of 10-15% compared to separate projects. We offer free estimates with detailed breakdowns and financing options.',
  },
  {
    question: 'How long does roof and gutter replacement take?',
    answer: 'A combined roof and gutter project typically takes 2-4 days for most Charlotte homes. Day 1-2 focuses on roof tear-off and installation, with gutters installed on the final day after the roof is complete. This ensures proper alignment and drainage. Weather can affect timing, but we communicate throughout the project.',
  },
  {
    question: 'Do you offer financing for roof and gutter replacement?',
    answer: 'Yes! We offer flexible financing options for combined roof and gutter projects including 0% interest plans for qualified buyers. A larger project often qualifies for better financing terms. During your free consultation, we\'ll discuss payment options that fit your budget and help make your exterior renovation affordable.',
  },
  {
    question: 'What warranty do I get on roof and gutter replacement?',
    answer: 'You receive comprehensive warranties on both components: manufacturer warranties up to 50 years on roofing materials (CertainTeed, GAF), plus our workmanship warranty covering installation. Seamless aluminum gutters include a 20-year warranty. Having one contractor means seamless warranty service for your entire exterior protection system.',
  },
  {
    question: 'Can you match my new gutters to my new roof color?',
    answer: 'Absolutely! We offer aluminum gutters in 20+ colors to complement your new roof and home exterior. During your consultation, we bring samples so you can see color combinations against your actual home. Popular Charlotte choices include white, brown, and custom colors matching trim or shingle tones.',
  },
  {
    question: 'What if only my roof or gutters need replacement?',
    answer: 'We\'ll always give you an honest assessment. If your gutters are in good condition (under 15 years old, no leaks or damage), we may recommend keeping them. Conversely, if your roof has years of life left but gutters are failing, we can replace just the gutters. We only recommend what you actually need.',
  },
  {
    question: 'Do you install gutter guards with new roof and gutter packages?',
    answer: 'Yes! Many Charlotte homeowners add gutter guards to their roof and gutter package for maintenance-free protection. We offer several guard styles including micro-mesh for pine needle areas. Adding guards during installation is more cost-effective than retrofitting later.',
  },
];

const bundleBenefits = [
  {
    icon: DollarSign,
    title: 'Bundle Savings',
    description: 'Save 10-15% compared to separate roof and gutter projects. One mobilization, one cleanup, better pricing.',
  },
  {
    icon: Clock,
    title: 'Single Timeline',
    description: 'Your entire exterior is protected in 2-4 days. No waiting months between projects.',
  },
  {
    icon: Shield,
    title: 'Seamless Integration',
    description: 'Gutters installed after roof completion ensures perfect drip edge alignment and flashing.',
  },
  {
    icon: Award,
    title: 'One Warranty',
    description: 'Single point of contact for all warranty claims. No finger-pointing between contractors.',
  },
];

export default function RoofAndGutterPage() {
  const pageUrl = `${SITE_CONFIG.url}/services/roof-and-gutter-replacement`;

  // Create a combined service object for schema
  const combinedService = {
    slug: 'roof-and-gutter-replacement',
    title: 'Roof and Gutter Replacement',
    shortTitle: 'Roof & Gutters',
    description: 'Complete roof and gutter replacement services in Charlotte NC. Save with bundle pricing when you replace both together.',
    keywords: ['roof and gutter replacement', 'roofing and gutters Charlotte NC'],
    icon: 'Home',
  };

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Roof and Gutter Replacement Charlotte NC | Best Roofing Now"
        description="Complete roof and gutter replacement from one trusted contractor. Bundle pricing saves you money."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero1}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Services', url: `${SITE_CONFIG.url}/services` },
          { name: 'Roof & Gutter Replacement', url: pageUrl },
        ]}
      />
      <ServiceSchema service={combinedService} />
      <FAQSchema faqs={bundleFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Services', url: `${SITE_CONFIG.url}/services` },
          { name: 'Roof & Gutter Replacement', url: pageUrl },
        ]}
      />

      {/* Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Services', href: '/services' },
              { name: 'Roof & Gutter Replacement', href: '/services/roof-and-gutter-replacement' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero.hero1}
            alt="Roof and gutter replacement services Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <DollarSign className="w-4 h-4" />
              Bundle & Save 10-15%
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Roof and Gutter Replacement in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Replace your roof and gutters together with one trusted contractor. Save money, time, and hassle with our complete exterior protection packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <EstimateButton
                variant="accent"
                className="bg-accent hover:bg-accent-dark text-white"
              >
                Get Free Bundle Estimate
              </EstimateButton>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" />}
              >
                {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bundle Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why Replace Your Roof and Gutters Together?
            </h2>
            <p className="text-gray text-lg">
              Smart Charlotte homeowners combine these projects for maximum savings and seamless protection.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bundleBenefits.map((benefit, index) => (
              <div key={index} className="bg-light rounded-xl p-6">
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-dark mb-2">{benefit.title}</h3>
                <p className="text-gray text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Roof and Gutter Replacement Cost in Charlotte
              </h2>
              <p className="text-gray mb-6">
                Understanding your investment helps you plan and budget. Here's what Charlotte homeowners typically pay for combined roof and gutter replacement:
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-dark">Small Home (1,000-1,500 sq ft)</span>
                    <span className="text-primary font-bold">$10,000 - $16,000</span>
                  </div>
                  <p className="text-gray text-sm">Includes basic shingles, 100-150 ft of gutters</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-primary">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-dark">Average Home (1,500-2,500 sq ft)</span>
                    <span className="text-primary font-bold">$15,000 - $25,000</span>
                  </div>
                  <p className="text-gray text-sm">Most common range for Charlotte homes</p>
                  <div className="mt-2 inline-block bg-accent/10 text-accent text-xs font-semibold px-2 py-1 rounded">
                    Most Popular
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-dark">Large Home (2,500+ sq ft)</span>
                    <span className="text-primary font-bold">$22,000 - $35,000+</span>
                  </div>
                  <p className="text-gray text-sm">Premium materials, complex roofs, 200+ ft gutters</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-6">What's Included in Your Bundle</h3>
              <ul className="space-y-4">
                {[
                  'Complete roof tear-off and disposal',
                  'New synthetic underlayment',
                  'Ice and water shield in valleys',
                  'Premium CertainTeed or GAF shingles',
                  'New drip edge and flashings',
                  'Seamless aluminum gutters (custom fit)',
                  'Hidden gutter hangers',
                  'Downspout installation',
                  'Thorough cleanup with magnet sweeps',
                  'Final inspection and walkthrough',
                  'Manufacturer warranty registration',
                  'Workmanship warranty',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" className="w-full">
                  Get Your Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Roof & Gutter Replacement Process
            </h2>
            <p className="text-gray text-lg">
              From consultation to final inspection, here's how we deliver a complete exterior transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: 1, title: 'Free Inspection', desc: 'We assess both your roof and gutters, providing honest recommendations.' },
              { step: 2, title: 'Custom Quote', desc: 'Detailed bundle pricing with material options and financing.' },
              { step: 3, title: 'Material Selection', desc: 'Choose shingle colors and gutter styles that complement your home.' },
              { step: 4, title: 'Installation', desc: 'Roof first, then gutters. Complete in 2-4 days for most homes.' },
              { step: 5, title: 'Final Walkthrough', desc: 'We inspect together and register your warranties.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Individual Services
          </h2>
          <p className="text-center text-gray max-w-2xl mx-auto mb-8">
            Need just one service? We also offer roof-only and gutter-only options.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/roof-replacement" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group">
              <Home className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark group-hover:text-primary">Roof Replacement</h3>
              <p className="text-gray text-sm mt-2">Complete roof replacement with premium materials.</p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link href="/services/gutter-installation" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group">
              <Droplets className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark group-hover:text-primary">Gutter Installation</h3>
              <p className="text-gray text-sm mt-2">Custom seamless gutters for your home.</p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link href="/services/gutter-guards" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group">
              <Shield className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark group-hover:text-primary">Gutter Guards</h3>
              <p className="text-gray text-sm mt-2">Eliminate gutter cleaning forever.</p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link href="/services/siding" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group">
              <Home className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark group-hover:text-primary">Siding Services</h3>
              <p className="text-gray text-sm mt-2">Complete your exterior with new siding.</p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={bundleFAQs}
        title="Roof & Gutter Replacement FAQ"
        subtitle="Common questions about combining roof and gutter replacement in Charlotte"
      />

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="roof-and-gutter-replacement" />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roof & Gutter Replacement"
      />

      {/* CTA */}
      <CTASection
        title="Ready to Protect Your Home?"
        subtitle="Get a free estimate for roof and gutter replacement. No pressure, just honest advice and bundle savings."
      />
    </>
  );
}
