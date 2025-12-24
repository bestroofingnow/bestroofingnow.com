'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/ui/Animations';

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
        <FadeInUp>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {title}
            </h2>
            <p className="text-gray text-lg">{subtitle}</p>
          </div>
        </FadeInUp>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {displayedServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Home;

            return (
              <StaggerItem key={service.slug}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group h-full"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray text-sm mb-4">{service.description}</p>
                        <div className="flex items-center text-primary font-medium text-sm group-hover:text-accent transition-colors">
                          Learn More
                          <motion.span
                            className="ml-1"
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* View All Link */}
        {!showAll && SERVICES.length > limit && (
          <FadeInUp delay={0.5}>
            <div className="text-center mt-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                >
                  View All Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </FadeInUp>
        )}
      </div>
    </section>
  );
}
