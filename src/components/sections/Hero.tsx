'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Star, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

const trustSignals = [
  { icon: Star, text: '5.0 Google Rating' },
  { icon: Shield, text: 'BBB A+ Accredited' },
  { icon: Clock, text: '24/7 Emergency' },
  { icon: Award, text: 'Veteran-Founded' },
];

interface HeroProps {
  title?: string;
  subtitle?: string;
  showTrustBadges?: boolean;
  backgroundImage?: string;
}

export function Hero({
  title = "Charlotte's Most Trusted Roofing Company",
  subtitle = "Family-owned, veteran-operated. We treat every home like it's our own. Free inspections, honest assessments, and quality craftsmanship that lasts.",
  showTrustBadges = true,
  backgroundImage,
}: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.8 + i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark overflow-hidden">
      {/* Static Background Shapes - decorative (no continuous animations for better performance) */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/10 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full hidden md:block" />
      </div>

      {/* Background Pattern - decorative */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Background Image - LCP element */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Best Roofing Now - Professional roofing team"
            fill
            className="object-cover opacity-20"
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={75}
          />
        </div>
      )}

      <div className="container relative z-10">
        <motion.div
          className="py-20 lg:py-28"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-3xl">
            {/* Trust Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <div className="flex" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white text-sm font-medium">
                Rated 5.0 by {SITE_CONFIG.customerCount}+ Happy Customers
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {title}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/90 mb-8 leading-relaxed"
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/30"
                >
                  Get Free Roof Inspection
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  href={`tel:${SITE_CONFIG.phoneClean}`}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  icon={<Phone className="w-5 h-5" />}
                >
                  {SITE_CONFIG.phone}
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Signals */}
            {showTrustBadges && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trustSignals.map((signal, i) => (
                  <motion.div
                    key={signal.text}
                    custom={i}
                    variants={badgeVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 cursor-default hover:bg-white/20 transition-colors"
                  >
                    <signal.icon className="w-5 h-5 text-accent-light flex-shrink-0" />
                    <span className="text-white text-sm font-medium">{signal.text}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Wave Divider - decorative */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
