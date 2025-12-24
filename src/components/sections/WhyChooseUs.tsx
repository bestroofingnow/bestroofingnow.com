'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
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
import { IMAGES } from '@/lib/images';
import { FadeInLeft, FadeInRight, AnimatedCounter, StaggerContainer, StaggerItem } from '@/components/ui/Animations';

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
  { value: SITE_CONFIG.googleReviewCount, suffix: '+', label: 'Happy Customers' },
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
              <motion.div
                className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="w-4 h-4" />
                <span className="text-sm font-semibold">Why Homeowners Choose Us</span>
              </motion.div>

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
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 bg-light rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  >
                    <div className="text-3xl font-bold text-primary">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-4">
                {['CertainTeed Certified', 'GAF Certified', 'Angi Super Service Award'].map((cert, i) => (
                  <motion.div
                    key={cert}
                    className="badge"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <CheckCircle className="w-4 h-4" />
                    {cert}
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInLeft>

          {/* Features Grid */}
          <FadeInRight>
            <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.1}>
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <motion.div
                    className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full group"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: 'spring' }}
                    >
                      <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <h3 className="font-bold text-dark mb-2">{feature.title}</h3>
                    <p className="text-gray text-sm">{feature.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
}
