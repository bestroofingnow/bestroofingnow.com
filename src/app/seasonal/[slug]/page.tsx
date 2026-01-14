import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, CheckCircle, ArrowRight, Sun, Leaf, Snowflake, Flower, Calendar } from 'lucide-react';
import { SITE_CONFIG, SEASONAL_ROOFING } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

interface SeasonalPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SEASONAL_ROOFING.map((season) => ({
    slug: season.slug,
  }));
}

export async function generateMetadata({ params }: SeasonalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const season = SEASONAL_ROOFING.find((s) => s.slug === slug);

  if (!season) {
    return { title: 'Season Not Found' };
  }

  const ogImage = 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png';

  return {
    title: `${season.title} | Best Roofing Now`,
    description: season.description,
    keywords: season.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/seasonal/${slug}`,
    },
    openGraph: {
      title: season.title,
      description: season.description,
      url: `${SITE_CONFIG.url}/seasonal/${slug}`,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${season.title} - Best Roofing Now Charlotte NC`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: season.title,
      description: season.description,
      images: [ogImage],
    },
  };
}

const seasonIcons = {
  Spring: Flower,
  Summer: Sun,
  Fall: Leaf,
  Winter: Snowflake,
};

const seasonDetails: Record<string, {
  intro: string;
  services: { title: string; description: string }[];
  urgency: string;
}> = {
  'spring-roofing': {
    intro: 'Spring is the perfect time to assess winter damage and prepare your roof for the upcoming storm season. Charlotte\'s spring brings unpredictable weather, making early inspection crucial.',
    services: [
      {
        title: 'Post-Winter Inspection',
        description: 'We thoroughly inspect for ice dam damage, shingle lifting, and moisture intrusion that may have occurred over winter.',
      },
      {
        title: 'Storm Damage Repair',
        description: 'Spring storms can bring hail and high winds. We provide fast response to storm damage with insurance claim assistance.',
      },
      {
        title: 'Gutter Cleaning & Repair',
        description: 'Clear winter debris and ensure gutters are ready to handle spring rains effectively.',
      },
      {
        title: 'Preventive Maintenance',
        description: 'Address small issues before they become expensive problems during summer heat or fall storms.',
      },
    ],
    urgency: 'Schedule your spring inspection early—our calendar fills up quickly as homeowners prepare for storm season!',
  },
  'summer-roofing': {
    intro: 'Summer offers long days and dry conditions ideal for major roofing projects. It\'s peak season for roof replacements in Charlotte, so booking early is essential.',
    services: [
      {
        title: 'Roof Replacement',
        description: 'Extended daylight hours allow for efficient, uninterrupted installations. Complete most replacements in 1-3 days.',
      },
      {
        title: 'Energy Efficiency Upgrades',
        description: 'Beat the heat with cool roof materials, improved ventilation, and reflective coatings that reduce cooling costs.',
      },
      {
        title: 'Attic Ventilation',
        description: 'Proper ventilation is critical in summer heat. We assess and upgrade ridge vents, soffit vents, and fans.',
      },
      {
        title: 'Hurricane Season Prep',
        description: 'Ensure your roof is ready for Atlantic hurricane season with thorough inspection and reinforcement.',
      },
    ],
    urgency: 'Summer is our busiest season! Schedule your replacement 4-6 weeks in advance to secure your preferred dates.',
  },
  'fall-roofing': {
    intro: 'Fall provides ideal temperatures for shingle installation and is your last chance to address issues before winter. Don\'t let cold weather catch you unprepared.',
    services: [
      {
        title: 'Pre-Winter Inspection',
        description: 'Identify and fix vulnerabilities before freezing temperatures and snow arrive.',
      },
      {
        title: 'Shingle Replacement',
        description: 'Fall temperatures (40-85°F) are perfect for shingle adhesion. Cooler weather is easier on our crews too.',
      },
      {
        title: 'Gutter & Downspout Cleaning',
        description: 'Clear fallen leaves to prevent ice dam formation and water backup during winter.',
      },
      {
        title: 'Insulation Assessment',
        description: 'Ensure proper attic insulation to prevent heat loss and ice dam formation.',
      },
    ],
    urgency: 'Book fall services by October to ensure completion before the first freeze!',
  },
  'winter-roofing': {
    intro: 'While major installations slow down in winter, emergencies don\'t stop. We provide critical repair services and emergency response throughout the cold months.',
    services: [
      {
        title: 'Emergency Leak Repair',
        description: 'Active leaks can\'t wait for spring. We provide rapid response to prevent water damage.',
      },
      {
        title: 'Ice Dam Removal',
        description: 'Safe removal of ice dams that cause water backup and interior damage.',
      },
      {
        title: 'Emergency Tarping',
        description: 'Temporary protection for damaged roofs until permanent repairs can be made in better conditions.',
      },
      {
        title: 'Storm Damage Response',
        description: 'Winter storms can cause sudden damage. We\'re on call 24/7 for emergencies.',
      },
    ],
    urgency: 'Winter emergencies require immediate attention. Call our 24/7 hotline for same-day response!',
  },
};

export default async function SeasonalPage({ params }: SeasonalPageProps) {
  const { slug } = await params;
  const season = SEASONAL_ROOFING.find((s) => s.slug === slug);

  if (!season) {
    notFound();
  }

  const details = seasonDetails[slug];
  const Icon = seasonIcons[season.season as keyof typeof seasonIcons];
  const otherSeasons = SEASONAL_ROOFING.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Seasonal', href: '/seasonal' },
              { label: `${season.season} Roofing` },
            ]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Icon className="w-10 h-10" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {season.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {season.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call Now
              </a>
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-light"
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray leading-relaxed mb-8">
              {details?.intro}
            </p>

            {/* Why Now */}
            <div className="bg-primary/5 rounded-xl p-6 mb-8">
              <h2 className="font-bold text-primary text-lg mb-2">Why {season.season}?</h2>
              <p className="text-gray">{season.whyNow}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Tips */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {season.season} Roofing Tips
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {season.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-md">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-dark">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our {season.season} Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {details?.services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="py-8 bg-accent text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <p className="text-lg font-semibold">{details?.urgency}</p>
            </div>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-accent hover:bg-gray-100"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Other Seasons */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Year-Round Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherSeasons.map((s) => {
              const SeasonIcon = seasonIcons[s.season as keyof typeof seasonIcons];
              return (
                <Link
                  key={s.slug}
                  href={`/seasonal/${s.slug}`}
                  className="card hover:shadow-xl transition group"
                >
                  <SeasonIcon className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                    {s.season} Roofing
                  </h3>
                  <p className="text-gray text-sm mb-4">{s.description.slice(0, 80)}...</p>
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

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for {season.season} Roofing Service?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait until problems get worse. Schedule your {season.season.toLowerCase()} roofing
            service today and protect your home year-round.
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
