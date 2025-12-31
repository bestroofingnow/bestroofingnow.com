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
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';

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
};

interface ServicesProps {
  title?: string;
  subtitle?: string;
  showAll?: boolean;
  limit?: number;
}

export function Services({
  title = 'Our Roofing Services',
  subtitle = 'Comprehensive roofing solutions for residential and commercial properties. From repairs to complete replacements, we do it all.',
  showAll = true,
  limit = 6,
}: ServicesProps) {
  const displayedServices = showAll ? SERVICES : SERVICES.slice(0, limit);

  return (
    <section className="section bg-light overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            {title}
          </h2>
          <p className="text-gray text-base md:text-lg">{subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayedServices.map((service) => {
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

        {/* View All Link */}
        {!showAll && SERVICES.length > limit && (
          <div className="text-center mt-8 md:mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent hover:scale-105 transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
