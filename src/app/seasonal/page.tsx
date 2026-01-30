import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, Sun, Leaf, Snowflake, Flower } from 'lucide-react';
import { SITE_CONFIG, SEASONAL_ROOFING } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Seasonal Roofing Services | Best Roofing Now Charlotte NC',
  description: 'Year-round roofing services in Charlotte NC. Spring inspections, summer replacements, fall maintenance, and winter emergency repairs.',
  keywords: [
    'seasonal roofing',
    'spring roof inspection',
    'summer roof replacement',
    'fall roof maintenance',
    'winter roof repair',
    'Charlotte roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/seasonal`,
  },
  openGraph: {
    title: 'Seasonal Roofing Services | Best Roofing Now',
    description: 'Expert roofing services for every season in Charlotte NC.',
    url: `${SITE_CONFIG.url}/seasonal`,
    type: 'website',
  },
};

const seasonIcons = {
  Spring: Flower,
  Summer: Sun,
  Fall: Leaf,
  Winter: Snowflake,
};

const seasonColors = {
  Spring: 'bg-green-50 text-green-600',
  Summer: 'bg-yellow-50 text-yellow-600',
  Fall: 'bg-orange-50 text-orange-600',
  Winter: 'bg-blue-50 text-blue-600',
};

export default function SeasonalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Seasonal Roofing' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Seasonal Roofing Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Charlotte&apos;s changing seasons bring unique challenges for your roof.
              From spring storm cleanup to winter emergency repairs, we&apos;re here
              year-round to protect your home.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Schedule Seasonal Service
            </a>
          </div>
        </div>
      </section>

      {/* Seasons Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {SEASONAL_ROOFING.map((season) => {
              const Icon = seasonIcons[season.season as keyof typeof seasonIcons];
              const colorClass = seasonColors[season.season as keyof typeof seasonColors];
              return (
                <Link
                  key={season.slug}
                  href={`/seasonal/${season.slug}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 border border-gray-100"
                >
                  <div className={`w-14 h-14 ${colorClass} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition">
                    {season.season} Roofing
                  </h2>
                  <p className="text-gray mb-4">
                    {season.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Year-Round Service */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Year-Round Roofing Protection
            </h2>
            <p className="text-gray mb-8">
              Your roof works 24/7/365 to protect your home. That&apos;s why we offer
              services tailored to each season&apos;s unique demands.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <Flower className="w-10 h-10 text-green-500 mx-auto mb-3" aria-hidden="true" />
                <h3 className="font-bold text-primary mb-2">Spring</h3>
                <p className="text-gray text-sm">Post-winter inspections & storm prep</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <Sun className="w-10 h-10 text-yellow-500 mx-auto mb-3" aria-hidden="true" />
                <h3 className="font-bold text-primary mb-2">Summer</h3>
                <p className="text-gray text-sm">Replacements & energy efficiency upgrades</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <Leaf className="w-10 h-10 text-orange-500 mx-auto mb-3" aria-hidden="true" />
                <h3 className="font-bold text-primary mb-2">Fall</h3>
                <p className="text-gray text-sm">Winter prep & gutter cleaning</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <Snowflake className="w-10 h-10 text-blue-500 mx-auto mb-3" aria-hidden="true" />
                <h3 className="font-bold text-primary mb-2">Winter</h3>
                <p className="text-gray text-sm">Emergency repairs & ice dam removal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Roof */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              When is the Best Time for Roof Work?
            </h2>

            <div className="bg-primary/5 rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-primary mb-2">For Roof Replacement:</h3>
                  <p className="text-gray">
                    <strong>Spring and Fall</strong> offer the best conditions—mild temperatures
                    allow shingles to seal properly, and you avoid summer heat and winter cold.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-primary mb-2">For Inspections:</h3>
                  <p className="text-gray">
                    <strong>Spring (post-winter)</strong> and <strong>Fall (pre-winter)</strong>
                    are ideal times to catch damage before it worsens.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-primary mb-2">For Emergency Repairs:</h3>
                  <p className="text-gray">
                    <strong>Any time!</strong> We provide 24/7 emergency services year-round.
                    Don&apos;t wait—water damage gets worse every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Seasonal Roof Care?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need a spring inspection, summer replacement, or winter
            emergency repair, we&apos;re here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-accent hover:bg-light text-lg px-8"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
