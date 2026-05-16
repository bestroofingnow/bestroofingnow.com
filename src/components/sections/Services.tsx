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
    <section className="section bg-white overflow-hidden">
      <div className="container">
        {/* Editorial section header — 2-col split */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-end mb-10 md:mb-12">
          <div>
            <div className="eyebrow mb-3">Services</div>
            <h2 className="heading-display text-[28px] sm:text-[34px] md:text-[44px]">
              {title}
            </h2>
          </div>
          <p className="text-slate text-[15px] md:text-[16px] leading-[1.65] md:max-w-md">
            {subtitle}
          </p>
        </div>

        {/* Services grid — hairline borders, tag prefix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-line">
          {displayedServices.map((service, i) => {
            const Icon = iconMap[service.icon] || Home;
            const tag = String(i + 1).padStart(2, '0');
            const isLastCol = (i + 1) % 3 === 0;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group block px-6 py-7 md:px-7 md:py-8 border-b border-line lg:border-r ${
                  isLastCol ? 'lg:border-r-0' : ''
                } hover:bg-cream transition-colors`}
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-display italic text-copper text-[26px] font-light leading-none">
                    {tag}
                  </span>
                  <Icon className="w-5 h-5 text-mute group-hover:text-copper transition-colors" aria-hidden="true" />
                </div>
                <h3 className="font-display font-medium text-navy text-[19px] md:text-[20px] tracking-[-0.01em] mb-2.5 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate text-[13.5px] leading-[1.6] mb-4 line-clamp-3">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-navy text-[11.5px] font-semibold uppercase tracking-[0.08em] group-hover:text-copper transition-colors">
                  Learn more
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* View All Link */}
        {!showAll && SERVICES.length > limit && (
          <div className="text-center mt-10 md:mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-navy font-semibold text-[12.5px] uppercase tracking-[0.08em] hover:text-copper transition-colors"
            >
              View All Services
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
