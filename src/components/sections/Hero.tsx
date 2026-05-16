import Image from 'next/image';
import { Shield, Clock, Award, Star } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { HeroCTA } from './HeroCTA';
import { HeroLeadCard } from './HeroLeadCard';
import { HeroImageRotator } from './HeroImageRotator';
import { StarRatingCSS } from '@/components/ui/StarRating';

const HERO_BLUR_DATA_URL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAA4ACgMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABv/EAB8QAAICAgIDAQAAAAAAAAAAAAECAwQABREhBhIxQf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AptNrLUdWSW1MsijgKnx/eMMB//Z';

const trustSignals = [
  { icon: Star, text: '5.0 Google Rating' },
  { icon: Shield, text: 'BBB A+ Accredited' },
  { icon: Award, text: '500+ Roofs Installed' },
  { icon: Clock, text: '24/7 Emergency' },
];

const heroStats: Array<[string, string]> = [
  ['500+', 'Roofs installed'],
  ['5+ yr', 'In business'],
  ['5.0★', 'Google rating'],
  ['24/7', 'Emergency'],
];

interface HeroProps {
  title?: string;
  subtitle?: string;
  showTrustBadges?: boolean;
  backgroundImage?: string;
  backgroundImages?: string[];
  backgroundImageAlt?: string;
  rotationInterval?: number;
}

export function Hero({
  title = "Charlotte's Most Trusted Roofing Company",
  subtitle = "Family-owned, veteran-operated. Residential, commercial & industrial roofing — we treat every property like it's our own. Free inspections, honest assessments, and quality craftsmanship that lasts.",
  showTrustBadges = true,
  backgroundImage,
  backgroundImages,
  backgroundImageAlt = 'Charlotte NC roofing contractor - Best Roofing Now professional team installing residential roof',
  rotationInterval = 6000,
}: HeroProps) {
  const hasRotator = Boolean(backgroundImages && backgroundImages.length > 1);
  const totalReviews =
    SITE_CONFIG.googleReviewCount + SITE_CONFIG.facebookReviewCount + SITE_CONFIG.nextdoorRecommendations;

  return (
    <section
      className="relative bg-navy-deep text-white overflow-hidden"
      itemScope
      itemType="https://schema.org/RoofingContractor"
      aria-label="Hero section - Best Roofing Now, Charlotte's top-rated roofing contractor"
    >
      {/* Hidden structured data for bots */}
      <meta itemProp="name" content="Best Roofing Now" />
      <meta itemProp="telephone" content="(704) 605-6047" />
      <meta itemProp="priceRange" content="$$" />
      <link itemProp="url" href="https://www.bestroofingnow.com" />

      {/* Editorial gradient base */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(135deg, #081134 0%, #0E1F57 100%)',
        }}
      />

      {/* Background image overlay — desktop only, very low opacity for editorial feel */}
      {hasRotator ? (
        <div className="absolute inset-0 hidden md:block opacity-30" aria-hidden="true">
          <HeroImageRotator
            images={backgroundImages!}
            interval={rotationInterval}
            alt={backgroundImageAlt}
          />
        </div>
      ) : backgroundImage ? (
        <div className="absolute inset-0 hidden md:block opacity-20" aria-hidden="true">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 1px, 1920px"
            quality={45}
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA_URL}
          />
        </div>
      ) : null}

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-center py-12 md:py-16 lg:py-20">
          {/* Left: editorial column */}
          <div>
            {/* Rating badge — gold pill */}
            <div
              className="inline-flex flex-wrap items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-full mb-5 md:mb-6"
              style={{
                background: 'rgba(216,168,82,0.12)',
                border: '1px solid rgba(216,168,82,0.35)',
              }}
              itemProp="aggregateRating"
              itemScope
              itemType="https://schema.org/AggregateRating"
            >
              <meta itemProp="ratingValue" content="5.0" />
              <meta itemProp="bestRating" content="5" />
              <meta itemProp="ratingCount" content={String(totalReviews)} />
              <StarRatingCSS className="text-[12px] text-gold" ariaLabel="5 star Google rating" />
              <span className="text-gold text-[11px] md:text-[12px] font-semibold tracking-wide">
                {SITE_CONFIG.googleRating} · {SITE_CONFIG.googleReviewCount}+ reviews · 500+ roofs installed
              </span>
            </div>

            {/* Headline — Fraunces display */}
            <h1 className="font-display font-normal text-white text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.98] tracking-[-0.025em] mb-5 md:mb-6">
              {title}
            </h1>

            {/* Subhead */}
            <p className="text-[15px] md:text-[17px] text-white/80 leading-[1.55] max-w-xl mb-7 md:mb-9">
              {subtitle}
            </p>

            {/* CTAs */}
            <HeroCTA />

            {/* Stat row — divider + tabular numerals */}
            {showTrustBadges && (
              <div className="hidden md:grid grid-cols-4 gap-6 lg:gap-8 pt-6 mt-2 border-t border-white/15">
                {heroStats.map(([value, label]) => (
                  <div key={label}>
                    <div
                      className="font-display text-[24px] lg:text-[26px] font-medium leading-tight text-copper-light"
                    >
                      {value}
                    </div>
                    <div className="text-[11.5px] tracking-[0.04em] text-white/60 mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Mobile trust strip — preserved from original */}
            {showTrustBadges && (
              <div className="grid grid-cols-2 gap-2 mt-6 md:hidden">
                {trustSignals.slice(0, 2).map((signal) => (
                  <div
                    key={signal.text}
                    className="flex items-center gap-1.5 bg-white/10 rounded-[2px] px-2 py-2"
                  >
                    <signal.icon className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
                    <span className="text-white text-xs font-medium">{signal.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: lead form card — desktop only (existing HeroCTA covers mobile) */}
          <div className="hidden lg:block">
            <HeroLeadCard />
          </div>
        </div>
      </div>
    </section>
  );
}
