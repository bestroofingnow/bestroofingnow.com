import Image from 'next/image';
import { Star, Shield, Clock, Award } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { HeroCTA } from './HeroCTA';

// Low-quality blur placeholder for hero background images
const HERO_BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgIBBAMBAAAAAAAAAAAAAQIDBAAFERIhBhMxQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGREAAwEBAQAAAAAAAAAAAAAAAAECAxEh/9oADAMBEQEEPwDKtLo6uo6nBTjuSViZVDOqFiATsT1neSOr4zGpxSqCKyIwf//Z';

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
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark overflow-hidden">
      {/* Static Background Shapes - decorative */}
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={60}
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA_URL}
          />
        </div>
      )}

      <div className="container relative z-10">
        <div className="py-16 md:py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Trust Badge - CSS animation */}
            <div
              className="inline-flex items-center gap-2 bg-white/15 md:bg-white/10 md:backdrop-blur-sm rounded-full px-4 py-2 mb-4 md:mb-6 animate-fade-in-up"
              style={{ animationDelay: '0s' }}
            >
              <div className="flex" role="img" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-white text-sm font-medium">
                Rated 5.0 by {SITE_CONFIG.customerCount}+ Happy Customers
              </span>
            </div>

            {/* Headline - CSS animation */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight animate-fade-in-up"
              style={{ animationDelay: '0.05s' }}
            >
              {title}
            </h1>

            {/* Subheadline - CSS animation */}
            <p
              className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              {subtitle}
            </p>

            {/* CTA Buttons - CSS animation */}
            <HeroCTA />

            {/* Trust Signals - CSS animation */}
            {showTrustBadges && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {trustSignals.map((signal, i) => (
                  <div
                    key={signal.text}
                    className="flex items-center gap-2 bg-white/15 md:bg-white/10 md:backdrop-blur-sm rounded-lg px-3 md:px-4 py-2 md:py-3 cursor-default hover:bg-white/20 transition-colors animate-fade-in-up"
                    style={{ animationDelay: `${0.2 + i * 0.05}s` }}
                  >
                    <signal.icon className="w-4 h-4 md:w-5 md:h-5 text-accent-light flex-shrink-0" aria-hidden="true" />
                    <span className="text-white text-xs md:text-sm font-medium">{signal.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
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
