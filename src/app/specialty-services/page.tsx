import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sun,
  ArrowRight,
  CheckCircle,
  Phone,
  Wind,
  Flame,
  Square,
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

export const metadata: Metadata = {
  title: 'Specialty Roofing Services Charlotte NC | Skylights, Ventilation & More',
  description:
    'Specialty roofing services in Charlotte NC. Skylight installation, roof ventilation, chimney services, and flat roof repair. VELUX certified. Free estimates!',
  keywords: [
    'skylight installation Charlotte NC',
    'roof ventilation Charlotte',
    'chimney repair Charlotte NC',
    'flat roof repair Charlotte',
    'VELUX skylight Charlotte',
    'attic ventilation Charlotte NC',
    'chimney flashing Charlotte',
    'specialty roofing Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/specialty-services`,
  },
  openGraph: {
    title: 'Specialty Roofing Services Charlotte NC | Skylights, Ventilation & More',
    description:
      'Specialty roofing services in Charlotte NC. Skylight installation, roof ventilation, chimney services, and flat roof repair.',
    url: `${SITE_CONFIG.url}/specialty-services`,
  },
};

// Specialty services to display
const specialtyServices = [
  {
    slug: 'skylight-installation',
    title: 'Skylight Installation',
    description: 'Add natural light to any room with professionally installed skylights. VELUX certified contractor for leak-free performance.',
    icon: Sun,
    highlights: ['VELUX certified', 'Fixed & venting options', 'Energy efficient'],
    benefits: 'Skylights can reduce lighting costs by up to 10% and make rooms feel larger and more open.',
  },
  {
    slug: 'roof-ventilation',
    title: 'Roof Ventilation',
    description: 'Proper attic ventilation extends roof life, reduces energy costs, and prevents moisture damage. Ridge vents, soffit vents, and powered solutions.',
    icon: Wind,
    highlights: ['Reduce energy costs', 'Extend roof life', 'Prevent ice dams'],
    benefits: 'Proper ventilation can reduce cooling costs by 10-15% and extend shingle life by 5-10 years.',
  },
  {
    slug: 'chimney-services',
    title: 'Chimney Services',
    description: 'Stop chimney leaks with expert flashing repair, cap installation, and waterproofing. One of the most common leak sources we repair.',
    icon: Flame,
    highlights: ['Flashing repair', 'Cap installation', 'Waterproofing'],
    benefits: 'Chimney leaks cause 15-20% of roof-related water damage. Prevention is far cheaper than repair.',
  },
  {
    slug: 'flat-roof-repair',
    title: 'Flat Roof Repair',
    description: 'Specialized flat roof expertise for TPO, EPDM, PVC, and modified bitumen systems. Repairs and coatings that extend roof life.',
    icon: Square,
    highlights: ['All flat roof types', 'Coating options', 'Ponding solutions'],
    benefits: 'Flat roof coatings can extend roof life by 10-15 years at a fraction of replacement cost.',
  },
];

const specialtyFAQs = [
  {
    question: 'Will a skylight leak?',
    answer: 'Not when properly installed! We\'re VELUX certified and use premium flashing kits designed for Charlotte\'s climate. Our skylights are warranted against leaks. The key is proper installation by trained professionals - that\'s what we provide.',
  },
  {
    question: 'How do I know if my attic has poor ventilation?',
    answer: 'Signs of poor ventilation include: excessive heat in upper floors during summer, ice dams forming in winter, curling or buckled shingles, mold or mildew in attic, higher than expected energy bills, and roof aging faster than expected. We offer free ventilation assessments.',
  },
  {
    question: 'Why do chimneys cause so many roof leaks?',
    answer: 'The chimney-roof intersection is one of the most vulnerable points on your roof. Flashing must handle thermal expansion, weather exposure, and maintain a seal against a masonry surface. Over time, flashing fails - but regular maintenance prevents most leaks.',
  },
  {
    question: 'Can you coat my flat roof instead of replacing it?',
    answer: 'Often yes! If your flat roof is structurally sound but showing age, a roof coating can extend its life by 10-15 years at 20-30% of replacement cost. We\'ll inspect your roof and give you an honest assessment of whether coating is a good option.',
  },
  {
    question: 'How much do skylights cost to install?',
    answer: 'Skylight installation in Charlotte typically costs $1,000-3,500 including the skylight and installation. Tubular skylights for tight spaces cost less ($500-1,200), while large or custom skylights may cost more. We provide free consultations to discuss options for your home.',
  },
  {
    question: 'Do you service commercial flat roofs?',
    answer: 'Yes! We service all types of commercial flat roofing systems including TPO, EPDM, PVC, modified bitumen, and built-up roofs. We also offer commercial maintenance programs to extend roof life and prevent emergency repairs.',
  },
];

// Virtual service for schema
const specialtyCategoryService = {
  slug: 'specialty-services',
  title: 'Specialty Roofing Services',
  description: 'Specialized roofing services including skylights, ventilation, chimney repair, and flat roof services for Charlotte NC.',
  keywords: ['skylight installation Charlotte NC', 'roof ventilation', 'chimney services', 'flat roof repair'],
  priceRange: '$400 - $3,500+',
};

export default function SpecialtyServicesPage() {
  const pageUrl = `${SITE_CONFIG.url}/specialty-services`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Specialty Roofing Services Charlotte NC | Skylights, Ventilation & More"
        description="Specialty roofing services in Charlotte NC. Skylight installation, roof ventilation, chimney services, and flat roof repair."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero11}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Specialty Services', url: pageUrl },
        ]}
      />
      <ServiceSchema service={specialtyCategoryService} />
      <FAQSchema faqs={specialtyFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Specialty Services', url: pageUrl },
        ]}
      />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[{ name: 'Specialty Services', href: '/specialty-services' }]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero.hero11}
            alt="Specialty roofing services in Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <Sun className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Specialty Roofing Services Charlotte NC
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Beyond basic roofing, we provide specialized services that enhance your home&apos;s comfort, efficiency, and protection.
              From beautiful skylights that flood rooms with natural light to proper ventilation that extends your roof&apos;s life,
              our specialty services solve problems most contractors can&apos;t.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <EstimateButton
                variant="accent"
                className="bg-accent hover:bg-accent-dark text-white"
              >
                Get Free Consultation
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

      {/* Services Grid */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">
            Our Specialty Services
          </h2>
          <p className="text-gray text-center max-w-2xl mx-auto mb-12">
            Expert solutions for unique roofing challenges. Each service is performed by trained specialists with the right tools and experience.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {specialtyServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
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
                      <div className="bg-accent/10 rounded-lg p-3 mb-4">
                        <p className="text-sm text-accent font-medium">{service.benefits}</p>
                      </div>
                      <span className="inline-flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
                        Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Specialty Services Matter */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Why Choose a Specialist?
            </h2>
            <div className="prose prose-lg max-w-none text-gray">
              <p>
                These aren&apos;t services every roofer can do well. Skylight installation requires understanding of roof structures,
                proper flashing techniques, and manufacturer certification. Ventilation work requires calculating proper airflow
                for your specific attic. Chimney work involves masonry interfaces that many roofers aren&apos;t trained to handle.
              </p>
              <p>
                Best Roofing Now invests in training and certification because we believe in doing things right:
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-light p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2">VELUX Certified Skylight Contractor</h3>
                  <p className="text-sm">
                    We&apos;ve completed VELUX&apos;s professional training program. Our skylights are installed exactly to manufacturer
                    specifications with proper flashing systems designed for Charlotte&apos;s climate.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2">Ventilation Calculation Expertise</h3>
                  <p className="text-sm">
                    We don&apos;t guess at ventilation. We calculate your attic&apos;s specific needs based on square footage, climate zone,
                    and existing conditions to design a balanced system that actually works.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2">Chimney & Flashing Specialists</h3>
                  <p className="text-sm">
                    We understand how masonry and roofing systems interact. Our chimney work includes proper step flashing,
                    counter-flashing, and cricket installation where needed to prevent leaks permanently.
                  </p>
                </div>
                <div className="bg-light p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2">Flat Roof System Training</h3>
                  <p className="text-sm">
                    Flat roofs are completely different from sloped roofs. Our team is trained in TPO, EPDM, PVC, and coating
                    systems to diagnose problems correctly and apply the right solutions.
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
            Specialty Services Throughout Charlotte Metro
          </h2>
          <p className="text-center text-gray max-w-2xl mx-auto mb-8">
            We provide specialty roofing services across Charlotte and all surrounding communities.
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
        faqs={specialtyFAQs}
        title="Specialty Services FAQ"
        subtitle="Common questions about skylights, ventilation, chimneys, and flat roofs in Charlotte NC"
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
              <p className="text-gray text-sm">Complete roofing services for repair, replacement, and installation.</p>
            </Link>
            <Link href="/services/soffit-fascia" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Soffit & Fascia</h3>
              <p className="text-gray text-sm">Protect your roof edge and improve ventilation with quality soffit work.</p>
            </Link>
            <Link href="/services/residential-roof-maintenance" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roof Maintenance</h3>
              <p className="text-gray text-sm">Annual maintenance programs that catch problems early and extend roof life.</p>
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
              VELUX Certified | Licensed & Insured | BBB A+ Rated
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need a Specialty Roofing Service?"
        subtitle="Get a free consultation from Charlotte's specialty roofing experts. We'll assess your needs and provide honest recommendations."
      />
    </>
  );
}
