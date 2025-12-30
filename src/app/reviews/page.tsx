import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Quote, Phone, ArrowRight, ExternalLink } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Reviews | Charlotte Roofing Company Reviews',
  description:
    'Read reviews from real Charlotte homeowners about Best Roofing Now. 5-star rated roofing company with 100+ happy customers. See why we are Charlotte\'s most trusted roofers.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/reviews`,
  },
};

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Charlotte, NC',
    rating: 5,
    date: 'November 2024',
    title: 'Honest and Professional',
    text: 'James came out and looked at my roof after a storm. Three other companies told me I needed a full replacement. James showed me exactly what damage there was and said I only needed repairs. He could have made thousands more but chose to be honest. That is rare these days. Highly recommend!',
    service: 'Storm Damage Repair',
  },
  {
    name: 'Michael T.',
    location: 'Huntersville, NC',
    rating: 5,
    date: 'October 2024',
    title: 'Best Roofing Experience Ever',
    text: 'From the first phone call to the final cleanup, everything was perfect. They explained the entire process, showed up on time, finished ahead of schedule, and left our property spotless. The new roof looks amazing. Worth every penny.',
    service: 'Roof Replacement',
  },
  {
    name: 'Jennifer L.',
    location: 'Cornelius, NC',
    rating: 5,
    date: 'October 2024',
    title: 'Insurance Claim Experts',
    text: 'Our insurance initially denied our claim. Best Roofing Now stepped in, documented everything properly, met with the adjuster, and got our claim approved. They handled everything and we ended up with a beautiful new roof for just our deductible.',
    service: 'Insurance Claim',
  },
  {
    name: 'David R.',
    location: 'Matthews, NC',
    rating: 5,
    date: 'September 2024',
    title: 'True to Their Word',
    text: 'They said they would be here at 8am and they were. They said it would take 2 days and it did. They said cleanup would be thorough and it was. In a world of contractors who overpromise, these guys deliver exactly what they say.',
    service: 'Roof Replacement',
  },
  {
    name: 'Lisa K.',
    location: 'Concord, NC',
    rating: 5,
    date: 'September 2024',
    title: 'Emergency Roof Repair',
    text: 'Had a major leak during a storm at 10pm. Called Best Roofing Now and someone answered! They came out the next morning, tarped the roof, and had it fully repaired within 48 hours. Cannot thank them enough for their quick response.',
    service: 'Emergency Repair',
  },
  {
    name: 'Robert H.',
    location: 'Davidson, NC',
    rating: 5,
    date: 'August 2024',
    title: 'Family Business Values',
    text: 'You can tell this is a family business. James and his team treated our home like it was their own. They took time to explain everything, answered all our questions, and made sure we were completely satisfied before leaving.',
    service: 'Roof Inspection',
  },
  {
    name: 'Amanda S.',
    location: 'Mooresville, NC',
    rating: 5,
    date: 'August 2024',
    title: 'Great Communication',
    text: 'Best communication I have ever had with a contractor. They sent updates throughout the project, the project manager was always available, and they responded to texts within minutes. Made the whole process stress-free.',
    service: 'Roof Replacement',
  },
  {
    name: 'Thomas W.',
    location: 'Indian Trail, NC',
    rating: 5,
    date: 'July 2024',
    title: 'Veteran-Owned and It Shows',
    text: 'As a fellow veteran, I appreciate the discipline and professionalism this team brings. They run a tight ship, show up on time, work hard, and stand behind their work. This is how business should be done.',
    service: 'Commercial Roofing',
  },
  {
    name: 'Patricia M.',
    location: 'Gastonia, NC',
    rating: 5,
    date: 'July 2024',
    title: 'No Pressure, Just Help',
    text: 'Other roofing companies tried to pressure me into signing contracts on the spot. Best Roofing Now gave me an honest assessment, a detailed quote, and said to take my time deciding. That approach earned my business and my trust.',
    service: 'Roof Replacement',
  },
  {
    name: 'Chris B.',
    location: 'Mint Hill, NC',
    rating: 5,
    date: 'June 2024',
    title: 'Quality Work, Fair Price',
    text: 'Got three quotes for our roof. Best Roofing Now was not the cheapest, but their materials were better and their warranty was longer. Six months later, the roof still looks perfect. You get what you pay for.',
    service: 'Roof Replacement',
  },
];

const stats = [
  { value: '5.0', label: 'Google Rating' },
  { value: `${SITE_CONFIG.googleReviewCount}+`, label: 'Reviews' },
  { value: 'A+', label: 'BBB Rating' },
  { value: '100%', label: 'Satisfaction' },
];

export default function ReviewsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Reviews', url: `${SITE_CONFIG.url}/reviews` },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.houses.house1}
            alt="Beautiful home with new roof by Best Roofing Now"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-8 h-8 text-accent fill-current" />
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What Charlotte Homeowners Say About Us
            </h1>
            <p className="text-xl text-white/90">
              Do not just take our word for it. Read real reviews from real customers
              who trusted us with their homes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-light py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Links */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-dark font-semibold">Read our reviews on:</span>
            <a
              href={SITE_CONFIG.externalProfiles.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-light rounded-full hover:bg-primary/10 transition"
            >
              Google
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.externalProfiles.bbb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-light rounded-full hover:bg-primary/10 transition"
            >
              BBB
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-light rounded-full hover:bg-primary/10 transition"
            >
              Facebook
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.social.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-light rounded-full hover:bg-primary/10 transition"
            >
              Yelp
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.externalProfiles.nextdoor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-light rounded-full hover:bg-primary/10 transition"
            >
              Nextdoor
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-dark">{review.name}</h3>
                        <p className="text-sm text-gray">{review.location}</p>
                      </div>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-accent fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/20 mb-2" />
                  <h4 className="font-bold text-dark mb-2">{review.title}</h4>
                  <p className="text-gray">{review.text}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray">{review.date}</span>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Widget */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Recent Google Reviews
          </h2>
          <div className="max-w-4xl mx-auto">
            <iframe
              src="https://manage.bestroofingnow.com/reputation/widgets/review_widget/YnvUmp9cZqt5xmVLrnoq?widgetId=691f1dc6f44c6d6cf097352c"
              width="100%"
              height="600"
              frameBorder="0"
              className="rounded-xl shadow-lg"
              title="Customer Reviews"
            />
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            See the Work Behind the Reviews
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project1}
                alt="Completed roofing project"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.project3}
                alt="Roof replacement project"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.realProjects.drone1}
                alt="Aerial view of completed roof"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={IMAGES.houses.house1}
                alt="Beautiful home with new roof"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="section bg-light">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Are You a Happy Customer?
          </h2>
          <p className="text-gray text-lg mb-8 max-w-2xl mx-auto">
            We would love to hear about your experience! Leave us a review and help other
            homeowners find a roofing company they can trust.
          </p>
          <a
            href={SITE_CONFIG.externalProfiles.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Leave a Google Review
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free roof inspection and see why Charlotte homeowners trust Best Roofing Now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="btn bg-white text-primary hover:bg-light"
            >
              Request Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </>
  );
}
