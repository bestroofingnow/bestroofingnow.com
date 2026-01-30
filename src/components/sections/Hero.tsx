import Image from 'next/image';
import { Star, Shield, Clock, Award } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { HeroCTA } from './HeroCTA';

// Tiny blur placeholder - minimal data for fastest parsing
const HERO_BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAA4ACgMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABv/EAB8QAAICAgIDAQAAAAAAAAAAAAECAwQABREhBhIxQf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AptNrLUdWSW1MsijgKnx/eMMB//Z';

const trustSignals = [
  { icon: Star, text: '5.0 Google Rating' },
  { icon: Shield, text: 'BBB A+ Accredited' },
  { icon: Award, text: '500+ Roofs Installed' },
  { icon: Clock, text: '24/7 Emergency' },
];

interface HeroProps {
  title?: string;
  subtitle?: string;
  showTrustBadges?: boolean;
  backgroundImage?: string;
  backgroundImageAlt?: string;
}

export function Hero({
  title = "Charlotte's Most Trusted Roofing Company",
  subtitle = "Family-owned, veteran-operated. Residential, commercial & industrial roofing — we treat every property like it's our own. Free inspections, honest assessments, and quality craftsmanship that lasts.",
  showTrustBadges = true,
  backgroundImage,
  backgroundImageAlt = "Charlotte NC roofing contractor - Best Roofing Now professional team installing residential roof",
}: HeroProps) {
  return (
    <section
      className="relative bg-gradient-to-br from-primary via-primary to-primary-dark overflow-hidden"
      itemScope
      itemType="https://schema.org/RoofingContractor"
      aria-label="Hero section - Best Roofing Now, Charlotte's top-rated roofing contractor"
    >
      {/* Hidden structured data for bots */}
      <meta itemProp="name" content="Best Roofing Now" />
      <meta itemProp="telephone" content="(704) 605-6047" />
      <meta itemProp="priceRange" content="$$" />
      <link itemProp="url" href="https://www.bestroofingnow.com" />

      {/* Static Background Shapes - HIDDEN on mobile for faster LCP */}
      <div className="absolute inset-0 overflow-hidden hidden md:block" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/10 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 rounded-full" />
      </div>

      {/* Background Pattern - HIDDEN on mobile for faster LCP */}
      <div className="absolute inset-0 opacity-10 hidden md:block" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Background Image - HIDDEN on mobile, only show on desktop for faster mobile LCP */}
      {backgroundImage && (
        <div className="absolute inset-0 hidden md:block">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
            fill
            className="object-cover opacity-20"
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 1px, (max-width: 1024px) 1024px, 1920px"
            quality={35}
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA_URL}
          />
        </div>
      )}

      <div className="container relative z-10">
        <div className="py-12 md:py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Trust Badge - simplified on mobile */}
            <div
              className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-3 md:mb-6"
              itemProp="aggregateRating"
              itemScope
              itemType="https://schema.org/AggregateRating"
            >
              <meta itemProp="ratingValue" content="5.0" />
              <meta itemProp="bestRating" content="5" />
              <meta itemProp="ratingCount" content={String(SITE_CONFIG.googleReviewCount)} />
              <div className="flex" role="img" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-white text-xs md:text-sm font-medium">
                5.0 · {SITE_CONFIG.customerCount}+ Customers
              </span>
            </div>

            {/* Headline - THE LCP ELEMENT - renders immediately */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6 leading-tight">
              {title}
            </h1>

            {/* Subheadline - shorter on mobile */}
            <p className="text-base md:text-xl text-white/90 mb-5 md:mb-8 leading-relaxed line-clamp-3 md:line-clamp-none">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <HeroCTA />

            {/* Trust Signals - Only first 2 on mobile for speed */}
            {showTrustBadges && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                {trustSignals.slice(0, 2).map((signal) => (
                  <div
                    key={signal.text}
                    className="flex items-center gap-1.5 md:gap-2 bg-white/15 rounded-lg px-2 md:px-4 py-2 md:py-3 md:hidden"
                  >
                    <signal.icon className="w-4 h-4 text-accent-light flex-shrink-0" aria-hidden="true" />
                    <span className="text-white text-xs font-medium">{signal.text}</span>
                  </div>
                ))}
                {/* All 4 on desktop */}
                {trustSignals.map((signal) => (
                  <div
                    key={`desktop-${signal.text}`}
                    className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 cursor-default hover:bg-white/20 transition-colors"
                  >
                    <signal.icon className="w-5 h-5 text-accent-light flex-shrink-0" aria-hidden="true" />
                    <span className="text-white text-sm font-medium">{signal.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Wave Divider - simplified SVG */}
      <div className="absolute bottom-0 left-0 right-0 h-8 md:h-auto" aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full md:h-auto"
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
