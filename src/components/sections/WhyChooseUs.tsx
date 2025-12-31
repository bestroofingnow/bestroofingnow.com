'use client';

import {
  Shield,
  Award,
  Users,
  ThumbsUp,
  Clock,
  DollarSign,
  CheckCircle,
  Heart
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { FadeInLeft, FadeInRight, AnimatedCounter, StaggerItem } from '@/components/ui/Animations';

const features = [
  {
    icon: Shield,
    title: 'Veteran-Founded',
    description: 'Fred served in the military. Now he and his son James use those same values to protect your home.',
  },
  {
    icon: Users,
    title: 'Father & Son Team',
    description: 'Fred and James own this company. When you call, you talk to real people who care.',
  },
  {
    icon: ThumbsUp,
    title: 'No Pushy Sales',
    description: "We teach you about your roof. We give honest advice, not high-pressure sales.",
  },
  {
    icon: Award,
    title: 'BBB A+ Rated',
    description: 'The Better Business Bureau gave us their top rating. We promise you will be happy.',
  },
  {
    icon: Clock,
    title: '24/7 Help',
    description: "Storms and leaks can happen anytime. Call us day or night. We are here to help.",
  },
  {
    icon: DollarSign,
    title: 'Insurance Help',
    description: 'We work with your insurance company. We help you get the money you deserve.',
  },
];

const stats = [
  { value: 5, suffix: '.0', label: 'Google Rating' },
  { value: SITE_CONFIG.customerCount, suffix: '+', label: 'Happy Customers' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Satisfaction' },
];

export function WhyChooseUs() {
  return (
    <section className="section overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <FadeInLeft>
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4 transition-transform hover:scale-105">
                <Heart className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Why Homeowners Choose Us</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                We Tell the Truth—Even When It Costs Us a Sale
              </h2>

              <p className="text-gray text-lg mb-8">
                James once told a customer she did not need a new roof. Three other
                companies said she did. She was so happy she cried. That is who we
                are—honest people who do the right thing.
              </p>

              {/* Animated Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 bg-light rounded-xl transition-all hover:scale-105 hover:shadow-lg animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl font-bold text-primary">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-4">
                {['CertainTeed Certified', 'GAF Certified', 'Angi Super Service Award'].map((cert, i) => (
                  <div
                    key={cert}
                    className="badge transition-transform hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                  >
                    <CheckCircle className="w-4 h-4" aria-hidden="true" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </FadeInLeft>

          {/* Features Grid */}
          <FadeInRight>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <StaggerItem key={feature.title} index={index}>
                  <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full group hover:-translate-y-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-dark mb-2">{feature.title}</h3>
                    <p className="text-gray text-sm">{feature.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
}
