'use client';

import { Star } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';
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
    <section className="section bg-gradient-to-br from-primary via-primary to-primary-dark text-white overflow-hidden relative">
      {/* Static Background Elements - no JS animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <FadeInUp>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 fill-yellow-400 text-yellow-400 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {SITE_CONFIG.googleRating} Star Rating from {SITE_CONFIG.googleReviewCount}+ Reviews
            </h2>
            <p className="text-white/90 text-lg">
              Do not just take our word for it. Here is what Charlotte homeowners say about working with us.
            </p>
          </div>
        </FadeInUp>

        {/* Testimonial Carousel */}
        <FadeInUp delay={0.2}>
          <TestimonialCarousel
            testimonials={testimonials}
            autoPlay={true}
            autoPlayInterval={6000}
          />
        </FadeInUp>

        {/* Google Reviews Link */}
        <FadeInUp delay={0.4}>
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=Best+Roofing+Now+Charlotte+NC+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold py-3 px-6 rounded-lg hover:bg-white/90 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
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
