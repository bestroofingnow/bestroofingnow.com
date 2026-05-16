'use client';

import { Star, Quote } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { FadeInUp } from '@/components/ui/Animations';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Charlotte, NC',
    rating: 5,
    text: "We dealt with Banning and James both were quick to respond and extremely helpful. They were able to get the insurance company to cover all the repairs and a whole new roof for both the house and the shed. The team of installers arrived on time, went right to work like a well-oiled machine, and completed the job quickly.",
    service: 'Roof Replacement',
  },
  {
    name: 'Mike T.',
    location: 'Huntersville, NC',
    rating: 5,
    text: "Best Roofing Now is exactly what their name says - the best! James was honest about what we needed and didn't try to upsell us. His crew was professional, cleaned up everything, and our new roof looks amazing. Highly recommend!",
    service: 'Residential Roofing',
  },
  {
    name: 'Jennifer L.',
    location: 'Concord, NC',
    rating: 5,
    text: "After a bad storm damaged our roof, we called several companies. Best Roofing Now was the only one who didn't try to scare us into buying more than we needed. They handled our insurance claim perfectly and we're so grateful.",
    service: 'Storm Damage',
  },
  {
    name: 'Robert K.',
    location: 'Matthews, NC',
    rating: 5,
    text: "As a commercial property owner, I've worked with many roofing companies. Best Roofing Now stands out for their professionalism and expertise. They maintain our flat roof and respond quickly whenever we have issues.",
    service: 'Commercial Roofing',
  },
  {
    name: 'David R.',
    location: 'Davidson, NC',
    rating: 5,
    text: "James told me I didn't need a new roof when three other companies said I did. He saved me thousands of dollars and earned a customer for life. That's the kind of honesty you rarely find.",
    service: 'Roof Inspection',
  },
  {
    name: 'Amanda S.',
    location: 'Mooresville, NC',
    rating: 5,
    text: "From the first call to the final cleanup, everything was perfect. They showed up when they said they would, finished on time, and left our property spotless. The new roof looks incredible!",
    service: 'Roof Replacement',
  },
];

export function Testimonials() {
  return (
    <section className="section bg-cream text-ink overflow-hidden relative">
      <div className="container relative z-10">
        {/* Editorial section header */}
        <FadeInUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
            <div>
              <div className="eyebrow mb-3">Reviews</div>
              <h2 className="heading-display text-[28px] sm:text-[32px] md:text-[40px] max-w-2xl">
                {SITE_CONFIG.googleRating} Star Rating from {SITE_CONFIG.googleReviewCount}+ Reviews
              </h2>
              <p className="text-slate text-[15px] md:text-[16px] leading-[1.65] mt-3 max-w-xl">
                Do not just take our word for it. Here is what Charlotte homeowners say about working with us.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1" role="img" aria-label={`${SITE_CONFIG.googleRating} star rating`}>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="text-[12px] text-slate mt-1">
                {SITE_CONFIG.googleRating} · Google · {SITE_CONFIG.googleReviewCount}+ reviews
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Testimonial Grid — editorial cards, white on cream */}
        <FadeInUp delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.slice(0, 6).map((t, idx) => (
              <div
                key={idx}
                className="relative bg-white p-7 rounded-[4px] flex flex-col"
              >
                <Quote className="absolute top-5 right-5 w-7 h-7 text-copper opacity-25" aria-hidden="true" />
                <div className="flex gap-0.5 mb-3.5" role="img" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-slate text-[14.5px] leading-[1.55] mb-6 flex-1">
                  {t.text}
                </p>
                <div className="flex items-end justify-between gap-2 pt-4 border-t border-line">
                  <div>
                    <p className="font-semibold text-navy text-[13.5px]">{t.name}</p>
                    <p className="text-mute text-[12px] mt-0.5">{t.location}</p>
                  </div>
                  <span className="text-[10px] tracking-[0.14em] uppercase text-mute font-semibold whitespace-nowrap">
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>

        {/* Google Reviews Link */}
        <FadeInUp delay={0.4}>
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=Best+Roofing+Now+Charlotte+NC+reviews"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-navy text-white font-semibold py-3.5 px-6 rounded-[2px] uppercase tracking-[0.08em] text-[12.5px] hover:bg-navy-deep transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Read All Google Reviews
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
