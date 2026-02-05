import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Layers,
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  Award,
  Thermometer,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { FAQ } from '@/components/sections/FAQ';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ServiceSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { SITE_CONFIG, LOCATIONS } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Siding Services Charlotte NC | Installation, Repair & Replacement',
  description:
    'Professional siding services in Charlotte NC. James Hardie fiber cement, vinyl siding installation and repair. Transform your home\'s exterior. Free estimates!',
  keywords: [
    'siding services Charlotte NC',
    'siding installation Charlotte',
    'siding repair Charlotte NC',
    'James Hardie siding Charlotte',
    'vinyl siding Charlotte',
    'fiber cement siding Charlotte NC',
    'siding contractor near me',
    'siding company Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/siding-services`,
  },
  openGraph: {
    title: 'Siding Services Charlotte NC | Installation & Repair',
    description:
      'Professional siding services in Charlotte NC. James Hardie fiber cement, vinyl siding installation and repair.',
    url: `${SITE_CONFIG.url}/siding-services`,
  },
};

// Siding services to display
const sidingServices = [
  {
    slug: 'siding-installation',
    title: 'Siding Installation',
    description: 'Transform your home with new siding. James Hardie certified installer for fiber cement, plus vinyl and engineered wood options.',
    icon: '🏡',
    highlights: ['James Hardie certified', 'Energy efficient', 'Color variety'],
  },
  {
    slug: 'siding-repair',
    title: 'Siding Repair',
    description: 'Fix damaged sections with expert color matching. Storm damage, rot, and impact repairs completed quickly.',
    icon: '🔧',
    highlights: ['Color matching', 'Storm damage repair', 'Fast turnaround'],
  },
  {
    slug: 'soffit-fascia',
    title: 'Soffit & Fascia',
    description: 'Protect your roof edge and improve ventilation with quality soffit and fascia installation and repair.',
    icon: '🏠',
    highlights: ['Roof protection', 'Proper ventilation', 'Low maintenance'],
  },
];

const sidingFAQs = [
  {
    question: 'How much does new siding cost in Charlotte NC?',
    answer: 'Siding costs in Charlotte vary by material: vinyl siding averages $4-8 per square foot installed, fiber cement (James Hardie) runs $8-14 per square foot, and engineered wood is $6-12 per square foot. A typical 2,000 sq ft home costs $8,000-28,000 for complete re-siding depending on material choice.',
  },
  {
    question: 'What is the best siding for Charlotte\'s climate?',
    answer: 'Fiber cement siding (James Hardie) is ideal for Charlotte\'s humid climate - it resists moisture, insects, rot, and fire while maintaining its appearance for 50+ years. Insulated vinyl siding is also excellent for energy efficiency. We help you choose based on your priorities and budget.',
  },
  {
    question: 'How long does siding installation take?',
    answer: 'Most siding installations in Charlotte take 3-7 days depending on home size and complexity. We work efficiently while protecting your landscaping and property. Weather can affect timelines, but we communicate clearly throughout the process.',
  },
  {
    question: 'Can you match my existing siding for repairs?',
    answer: 'In most cases, yes. We have access to extensive color libraries and manufacturer archives. For older discontinued colors, we can often find close matches or discuss options like painting or partial replacements that blend seamlessly.',
  },
  {
    question: 'Does new siding improve energy efficiency?',
    answer: 'Yes! Modern siding, especially insulated vinyl and fiber cement with house wrap, can reduce energy loss by 20-30%. This translates to lower heating and cooling bills. New siding also seals gaps and cracks that let conditioned air escape.',
  },
  {
    question: 'What is the ROI on new siding?',
    answer: 'New siding offers one of the best returns on investment for home improvements. Fiber cement siding recoup about 75-80% of costs at resale, while vinyl siding returns about 70-75%. Plus, you enjoy the benefits while living in your home.',
  },
];

// Virtual service for schema
const sidingCategoryService = {
  slug: 'siding-services',
  title: 'Siding Services',
  description: 'Complete siding services including installation, repair, and soffit/fascia work for Charlotte NC homes.',
  keywords: ['siding services Charlotte NC', 'siding installation', 'siding repair', 'James Hardie'],
  priceRange: '$5,000 - $28,000+',
};

export default function SidingServicesPage() {
  const pageUrl = `${SITE_CONFIG.url}/siding-services`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Siding Services Charlotte NC | Installation & Repair"
        description="Professional siding services in Charlotte NC. James Hardie fiber cement, vinyl siding installation and repair."
        url={pageUrl}
        primaryImage={IMAGES.services.siding}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Siding Services', url: pageUrl },
        ]}
      />
      <ServiceSchema service={sidingCategoryService} />
      <FAQSchema faqs={sidingFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Siding Services', url: pageUrl },
        ]}
      />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[{ name: 'Siding Services', href: '/siding-services' }]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.services.siding}
            alt="Professional siding services in Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <Layers className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Siding Services Charlotte NC
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Transform your home&apos;s exterior with professional siding services from Charlotte&apos;s trusted contractor.
              James Hardie certified installer for fiber cement siding, plus vinyl and engineered wood options.
              Boost curb appeal, improve energy efficiency, and protect your home for decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <EstimateButton
                variant="accent"
                className="bg-accent hover:bg-accent-dark text-white"
              >
                Get Free Estimate
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

      {/* Intro Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Complete Siding Solutions for Charlotte Homes
            </h2>
            <p className="text-lg text-gray leading-relaxed mb-8 text-center">
              Your home&apos;s siding does more than look good - it protects your investment from Charlotte&apos;s humidity, storms, and temperature extremes.
              Best Roofing Now provides comprehensive siding services using premium materials that stand up to our climate while enhancing your home&apos;s beauty and value.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-dark mb-2">Weather Protection</h3>
                <p className="text-gray text-sm">Shield your home from moisture, wind, and UV damage</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <Thermometer className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-dark mb-2">Energy Efficiency</h3>
                <p className="text-gray text-sm">Reduce heating and cooling costs by up to 20-30%</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-dark mb-2">Certified Installer</h3>
                <p className="text-gray text-sm">James Hardie preferred contractor for fiber cement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">
            Our Siding Services
          </h2>
          <p className="text-gray text-center max-w-2xl mx-auto mb-12">
            From complete re-siding to targeted repairs, we provide everything your home&apos;s exterior needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {sidingServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-light rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <span className="text-4xl block mb-4">{service.icon}</span>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="section bg-primary/5">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Siding Materials We Install
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">James Hardie Fiber Cement</h3>
              <p className="text-gray mb-4">
                The gold standard for durability. Resists rot, fire, insects, and UV damage.
                50-year lifespan with ColorPlus technology that resists fading.
              </p>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Fire resistant</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Won&apos;t rot or warp</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> 15-year color warranty</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Vinyl Siding</h3>
              <p className="text-gray mb-4">
                Affordable, low-maintenance, and available in countless colors and styles.
                Insulated vinyl options add energy efficiency.
              </p>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Budget-friendly</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Never needs painting</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Many style options</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Engineered Wood</h3>
              <p className="text-gray mb-4">
                Real wood beauty with enhanced durability. LP SmartSide and similar products
                offer the look of natural wood without the maintenance.
              </p>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Natural wood look</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Impact resistant</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Paintable</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Charlotte Homes Need Quality Siding */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Why Quality Siding Matters in Charlotte
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                Charlotte&apos;s climate is tough on home exteriors. Hot, humid summers promote mold and mildew growth.
                Severe thunderstorms bring hail and wind-driven rain. Winter temperature swings cause expansion and contraction
                that can crack inferior siding materials.
              </p>
              <p>
                Quality siding installed by experienced professionals creates a weathertight envelope around your home:
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-light p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2">Moisture Protection</h3>
                  <p className="text-sm">
                    Properly installed siding with house wrap prevents water intrusion that causes rot, mold, and structural damage.
                    Critical in Charlotte&apos;s 43+ inches of annual rainfall.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2">Energy Savings</h3>
                  <p className="text-sm">
                    New siding seals air leaks and, with added insulation, can reduce HVAC costs by 20-30%.
                    Especially impactful during Charlotte&apos;s hot summers.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2">Curb Appeal</h3>
                  <p className="text-sm">
                    First impressions matter. New siding dramatically improves your home&apos;s appearance and can increase
                    property value by 5-10% or more.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2">Low Maintenance</h3>
                  <p className="text-sm">
                    Modern siding materials require minimal upkeep - no more scraping, priming, and painting every few years.
                    Just occasional cleaning keeps them looking new.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Siding Services Throughout Charlotte Metro
          </h2>
          <p className="text-center text-gray max-w-2xl mx-auto mb-8">
            We provide professional siding services across the Charlotte metropolitan area and surrounding communities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {LOCATIONS.slice(0, 18).map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white rounded-lg p-3 text-center hover:bg-primary hover:text-white transition-colors group"
              >
                <span className="text-sm font-medium">
                  {location.city}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/locations" className="text-primary font-semibold hover:text-accent">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        faqs={sidingFAQs}
        title="Siding Services FAQ"
        subtitle="Common questions about siding installation and repair in Charlotte NC"
      />

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Related Exterior Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/gutter-services" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Gutter Services</h3>
              <p className="text-gray text-sm">Complete your exterior with seamless gutters that complement your new siding.</p>
            </Link>
            <Link href="/services/roof-replacement" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Replacement</h3>
              <p className="text-gray text-sm">Coordinate roof and siding work for a complete exterior transformation.</p>
            </Link>
            <Link href="/services/building-restoration" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Building Restoration</h3>
              <p className="text-gray text-sm">Complete exterior restoration for storm or fire damage.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <DirectoryCitations pageType="service" maxLinks={3} variant="inline" title="Verified Business" />
            <p className="text-sm text-gray-500">
              James Hardie Certified | Licensed & Insured | BBB A+ Rated
            </p>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="siding-services" />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Siding Services"
      />

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Home?"
        subtitle="Get a free siding consultation and estimate. See how new siding can enhance your home's beauty and protection."
      />
    </>
  );
}
