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
  { value: new Date().getFullYear() - 2020, suffix: '+', label: 'Years Experience' },
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
              <div className="inline-flex items-center gap-2 mb-4">
                <Heart className="w-3.5 h-3.5 text-copper" aria-hidden="true" />
                <span className="eyebrow">Why Homeowners Choose Us</span>
              </div>

              <h2 className="heading-display text-[28px] sm:text-[32px] md:text-[40px] mb-5">
                We Tell the Truth—Even When It Costs Us a Sale
              </h2>

              <p className="text-slate text-[15px] md:text-[16px] leading-[1.65] mb-8 max-w-xl">
                James once told a customer she did not need a new roof. Three other
                companies said she did. She was so happy she cried. That is who we
                are—honest people who do the right thing.
              </p>

              {/* Editorial stat row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-8 pt-6 border-t border-line">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-[26px] md:text-[28px] font-medium text-copper leading-tight tabular">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[11.5px] tracking-[0.04em] text-mute mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2">
                {['CertainTeed Certified', 'GAF Certified', 'BBB A+ Accredited', 'Angi Super Service Award'].map((cert) => (
                  <div
                    key={cert}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream border border-line rounded-[2px] text-[11.5px] font-semibold text-navy"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-copper" aria-hidden="true" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </FadeInLeft>

          {/* Features Grid — editorial cards on cream */}
          <FadeInRight>
            <div className="grid sm:grid-cols-2 gap-px bg-line border border-line">
              {features.map((feature, index) => (
                <StaggerItem key={feature.title} index={index}>
                  <div className="px-6 py-7 bg-cream h-full hover:bg-white transition-colors group">
                    <feature.icon className="w-5 h-5 text-copper mb-4" aria-hidden="true" />
                    <h3 className="font-display font-medium text-navy text-[18px] tracking-[-0.01em] mb-2">{feature.title}</h3>
                    <p className="text-slate text-[13.5px] leading-[1.6]">{feature.description}</p>
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
