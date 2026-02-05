import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sun,
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  Award,
  Zap,
  Home,
  Building2,
  Leaf,
  DollarSign,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/components/sections/FAQ';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ServiceSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations, TrustBadges } from '@/components/ui/DirectoryCitations';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Solar Roofing Charlotte NC',
  description:
    'Solar roofing solutions in Charlotte NC. Expert solar panel roof integration, solar-ready roof installations, and roof repairs for solar systems. GAF certified. Free consultations!',
  keywords: [
    'solar roofing Charlotte NC',
    'solar panel roof installation Charlotte',
    'solar roof contractor Charlotte',
    'solar-ready roofing Charlotte NC',
    'solar panel integration roofing',
    'roof for solar panels Charlotte',
    'solar energy roofing contractor',
    'solar roof repair Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/solar-services`,
  },
  openGraph: {
    title: 'Solar Roofing Charlotte NC | Solar Panel Integration',
    description:
      'Solar roofing solutions in Charlotte NC. Expert solar panel roof integration and solar-ready installations.',
    url: `${SITE_CONFIG.url}/solar-services`,
  },
};

// Solar roofing services
const solarServices = [
  {
    title: 'Solar-Ready Roof Installation',
    description: 'New roof installations designed and reinforced for future solar panel mounting. Proper flashing and penetration planning included.',
    icon: Home,
    highlights: ['Reinforced structure', 'Pre-planned penetrations', 'Optimal orientation'],
  },
  {
    title: 'Solar Panel Roof Integration',
    description: 'Expert coordination with solar installers to ensure proper mounting, flashing, and waterproofing around panel attachments.',
    icon: Sun,
    highlights: ['Waterproof mounting', 'Proper flashing', 'Warranty protection'],
  },
  {
    title: 'Roof Repair for Solar Systems',
    description: 'Specialized repairs for roofs with existing solar panels. We work around panels or coordinate removal/reinstallation.',
    icon: Zap,
    highlights: ['Panel coordination', 'Leak repair', 'Re-roofing under panels'],
  },
  {
    title: 'Commercial Solar Roofing',
    description: 'Large-scale solar-ready roofing for commercial buildings. TPO and metal systems optimized for solar mounting.',
    icon: Building2,
    highlights: ['Flat roof systems', 'Ballasted mounting', 'Energy efficiency'],
  },
];

// Solar roofing FAQs
const solarFAQs = [
  {
    question: 'Do you install solar panels?',
    answer: 'Best Roofing Now specializes in the roofing component of solar installations - we prepare roofs for solar, ensure proper mounting and flashing, and repair roofs with existing solar systems. For the actual solar panel installation, we partner with certified solar installers in Charlotte. This ensures you get roofing experts for your roof and solar experts for your panels.',
  },
  {
    question: 'Should I replace my roof before installing solar panels?',
    answer: 'If your roof is more than 10-15 years old or showing signs of wear, we strongly recommend replacing it before solar installation. Solar panels last 25-30 years, and removing them for a roof replacement mid-way is expensive (typically $1,500-$3,000 for removal and reinstallation). A new roof before solar saves money long-term and ensures your warranty remains intact.',
  },
  {
    question: 'What roofing materials are best for solar panels?',
    answer: 'Standing seam metal roofing is ideal for solar because panels can be attached with clamps (no roof penetrations). Asphalt shingles work well with proper flashing around mounting points. Tile and slate require special mounting systems. We assess your specific situation and recommend the best approach for your home and solar goals.',
  },
  {
    question: 'Will solar panel mounting damage my roof or void my warranty?',
    answer: 'When properly installed with correct flashing and sealants, solar panel mounts should not damage your roof or cause leaks. However, improper installation can void your roofing warranty. Best Roofing Now ensures all penetrations are properly flashed and sealed to manufacturer specifications, protecting both your roof and warranty.',
  },
  {
    question: 'Can you repair a roof leak around solar panels?',
    answer: 'Yes, we specialize in repairing leaks around solar panel mounting points. Common issues include failed sealants, improper flashing, or damage from installation. We can often repair without removing panels, but for extensive work, we coordinate with solar companies for temporary panel removal.',
  },
  {
    question: 'What is a solar-ready roof?',
    answer: 'A solar-ready roof is designed with future solar installation in mind. This includes reinforced decking in optimal locations, proper roof orientation, pre-planned conduit pathways, and documentation for the solar installer. Going solar-ready during a roof replacement adds minimal cost but saves significantly when you\'re ready to add panels.',
  },
];

// Service for schema
const solarCategoryService = {
  slug: 'solar-services',
  title: 'Solar Roofing Charlotte NC',
  description: 'Solar roofing solutions in Charlotte NC. Expert solar panel roof integration, solar-ready installations, and roof repairs for solar systems. GAF certified contractor.',
  keywords: ['solar roofing Charlotte NC', 'solar roof contractor', 'solar panel roof integration'],
  priceRange: '$8,000 - $30,000+',
};

export default function SolarServicesPage() {
  const pageUrl = `${SITE_CONFIG.url}/solar-services`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Solar Roofing Charlotte NC | Solar Panel Integration | Best Roofing Now"
        description="Solar roofing solutions in Charlotte NC. Expert solar panel roof integration and solar-ready installations."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero10}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Solar Roofing Charlotte NC', url: pageUrl },
        ]}
      />
      <ServiceSchema service={solarCategoryService} />
      <FAQSchema faqs={solarFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Solar Roofing Charlotte NC', url: pageUrl },
        ]}
      />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[{ name: 'Solar Roofing Charlotte NC', href: '/solar-services' }]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-accent text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero.hero10}
            alt="Solar roofing installation in Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <Sun className="w-4 h-4" />
                Solar-Ready Roofing
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <Shield className="w-4 h-4" />
                GAF Certified
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-full">
                <Leaf className="w-4 h-4" />
                Energy Efficient
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Solar Roofing Charlotte NC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Expert Roof Preparation &amp; Solar Panel Integration
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl">
              Thinking about solar panels? Your roof is the foundation. Best Roofing Now provides
              solar-ready roof installations, expert solar panel integration, and specialized repairs
              for roofs with existing solar systems throughout Charlotte.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                size="lg"
                className="bg-white !text-primary hover:bg-white/90"
                icon={<Phone className="w-5 h-5" />}
              >
                Call: {SITE_CONFIG.phone}
              </Button>
              <EstimateButton
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Free Solar Roof Consultation
              </EstimateButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container">
          <TrustBadges />
        </div>
      </section>

      {/* Intro Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Your Roof is the Foundation for Solar Success
            </h2>
            <p className="text-lg text-gray leading-relaxed mb-8">
              Before investing in solar panels, your roof needs to be in excellent condition and properly
              prepared. Best Roofing Now partners with Charlotte&apos;s leading solar installers to ensure
              your roof is optimized for solar - from new solar-ready installations to repairs on existing
              solar roofs. We handle the roofing; they handle the panels.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <DollarSign className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="font-bold text-primary">Save Money</p>
                <p className="text-gray text-sm">Replace before solar to avoid costly panel removal</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <Shield className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="font-bold text-primary">Protect Warranty</p>
                <p className="text-gray text-sm">Proper installation preserves roof warranty</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <Zap className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="font-bold text-primary">Maximize Output</p>
                <p className="text-gray text-sm">Optimal roof angle and condition for solar</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <Leaf className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="font-bold text-primary">Go Green</p>
                <p className="text-gray text-sm">Support sustainable energy in Charlotte</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Our Solar Roofing Services
          </h2>
          <p className="text-gray text-center max-w-2xl mx-auto mb-12">
            From preparing your roof for solar to repairing roofs with existing panels, we&apos;re your solar roofing experts.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solarServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-light rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* When to Replace Before Solar */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Should You Replace Your Roof Before Installing Solar?
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Replace First If:
                  </h3>
                  <ul className="space-y-3 text-gray">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      Roof is more than 10-15 years old
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      Visible wear, missing shingles, or damage
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      Planning to stay in home 15+ years
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      Want to maximize solar panel lifespan
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      Current roof has ventilation issues
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
                    <Sun className="w-5 h-5 text-accent" />
                    Solar-Ready Benefits:
                  </h3>
                  <ul className="space-y-3 text-gray">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Avoid $1,500-$3,000 panel removal costs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Roof and panels age together (25-30 years)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Reinforced mounting areas included
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Optimal orientation and slope
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Full warranty protection maintained
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray mb-4">
                  Not sure about your roof&apos;s condition? We offer free inspections to assess solar-readiness.
                </p>
                <Link
                  href="/services/roof-inspection"
                  className="inline-flex items-center text-primary font-semibold hover:text-accent"
                >
                  Schedule Free Roof Inspection
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={solarFAQs}
        title="Solar Roofing FAQ"
        subtitle="Common questions about solar panels and roofing in Charlotte"
      />

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/roofing-services" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roofing Services</h3>
              <p className="text-gray text-sm">Complete residential and commercial roofing for Charlotte homes and businesses.</p>
            </Link>
            <Link href="/services/metal-roofing" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Metal Roofing</h3>
              <p className="text-gray text-sm">Standing seam metal roofs - ideal for solar panel mounting with no penetrations.</p>
            </Link>
            <Link href="/services/roof-replacement" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Replacement</h3>
              <p className="text-gray text-sm">Full roof replacement with solar-ready options and premium materials.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <DirectoryCitations pageType="service" maxLinks={4} variant="inline" title="Verified Business Profiles" />
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="solar-services" />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Solar Services"
      />

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-accent to-primary text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Go Solar? Start with Your Roof.
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free roof assessment to determine if your roof is solar-ready or needs
              replacement before panel installation. We&apos;ll help you plan for maximum savings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="secondary"
                size="lg"
                className="bg-white !text-primary hover:bg-white/90"
                icon={<Phone className="w-5 h-5" />}
              >
                Call {SITE_CONFIG.phone}
              </Button>
              <EstimateButton
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Free Solar Roof Consultation
              </EstimateButton>
            </div>

            <p className="mt-6 text-white/80 text-sm">
              Serving Charlotte, Huntersville, Matthews, Concord, and 60+ communities across NC &amp; SC
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
