import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Home,
  Building2,
  Wrench,
  RefreshCw,
  Search,
  AlertTriangle,
  CloudRain,
  Droplets,
  Layers,
  Settings,
  Sun,
  Wind,
  Flame,
  PanelTop,
  Square,
  ArrowRight,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG, SERVICES } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Services Charlotte NC | Roofing Contractor Near Me',
  description:
    'Professional roofing services from Charlotte\'s #1 roofing contractor. Roof repair, replacement, storm damage, inspections, gutters & siding. 5-star rated, 500+ roofs installed. Free estimates!',
  keywords: [
    'roofing services Charlotte NC',
    'roofing contractor Charlotte',
    'roofing contractor near me',
    'roof repair Charlotte',
    'roof replacement Charlotte NC',
    'residential roofing Charlotte',
    'commercial roofing Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Wrench,
  RefreshCw,
  Search,
  AlertTriangle,
  CloudRain,
  Droplets,
  Layers,
  Settings,
  Sun,
  Wind,
  Flame,
  PanelTop,
  Square,
};

// Service categories for organized display
const serviceCategories = [
  {
    name: 'Core Roofing Services',
    description: 'Our primary roofing services for residential and commercial properties',
    slugs: ['residential-roofing', 'commercial-roofing', 'roof-repair', 'roof-replacement', 'roof-inspection', 'emergency-roofing'],
  },
  {
    name: 'Storm Damage & Insurance',
    description: 'Expert storm damage assessment and insurance claim assistance',
    slugs: ['storm-damage'],
  },
  {
    name: 'Maintenance Programs',
    description: 'Preventive maintenance to extend your roof life and protect your investment',
    slugs: ['residential-roof-maintenance', 'commercial-roof-maintenance'],
  },
  {
    name: 'Exterior Services',
    description: 'Complete exterior protection including gutters, siding, and trim',
    slugs: ['gutters', 'siding', 'soffit-fascia'],
  },
  {
    name: 'Specialty Services',
    description: 'Specialized roofing services for unique needs',
    slugs: ['skylight-installation', 'roof-ventilation', 'chimney-services', 'flat-roof-repair'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Services', url: `${SITE_CONFIG.url}/services` },
        ]}
      />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Services', href: '/services' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero.roofTeam}
            alt="Best Roofing Now team working on a roof"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Roofing Contractor Services in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90">
              Charlotte's #1 rated roofing contractor with 500+ roofs installed. From minor repairs to complete roof replacements, we provide
              comprehensive roofing solutions for residential and commercial
              properties. 5-star rated, veteran-owned, BBB A+ accredited.
            </p>
          </div>
        </div>
      </section>

      {/* Categorized Services */}
      {serviceCategories.map((category) => {
        const categoryServices = category.slugs
          .map((slug) => SERVICES.find((s) => s.slug === slug))
          .filter(Boolean);

        if (categoryServices.length === 0) return null;

        return (
          <section key={category.name} className="section bg-light odd:bg-white">
            <div className="container">
              <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
                  {category.name}
                </h2>
                <p className="text-gray text-base md:text-lg">{category.description}</p>
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 ${categoryServices.length > 2 ? 'lg:grid-cols-3' : ''} gap-4 md:gap-6`}>
                {categoryServices.map((service) => {
                  if (!service) return null;
                  const Icon = iconMap[service.icon] || Home;

                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full"
                    >
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base md:text-lg font-bold text-dark mb-1 md:mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray text-sm mb-3 md:mb-4 line-clamp-2">{service.description}</p>
                          <div className="flex items-center text-primary font-medium text-sm group-hover:text-accent transition-colors">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <CTASection />
    </>
  );
}
