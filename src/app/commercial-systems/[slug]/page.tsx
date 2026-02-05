import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, CheckCircle, Clock, Building2, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, COMMERCIAL_SYSTEMS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

interface CommercialSystemPageProps {
  params: Promise<{ slug: string }>;
}

// Canonical URL mappings for commercial system slugs that have competing static keyword pages
const systemCanonicals: Record<string, string> = {
  'tpo-roofing': '/tpo-roofing-charlotte-nc',
  'epdm-roofing': '/epdm-roofing-charlotte-nc',
};

export async function generateStaticParams() {
  return COMMERCIAL_SYSTEMS.map((system) => ({
    slug: system.slug,
  }));
}

export async function generateMetadata({ params }: CommercialSystemPageProps): Promise<Metadata> {
  const { slug } = await params;
  const system = COMMERCIAL_SYSTEMS.find((s) => s.slug === slug);

  if (!system) {
    return { title: 'System Not Found' };
  }

  const ogImage = 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png';

  return {
    title: `${system.fullName} | Commercial Charlotte`,
    description: `${system.description} Professional ${system.name} installation and repair in Charlotte NC.`,
    keywords: system.keywords,
    alternates: {
      canonical: systemCanonicals[slug]
        ? `${SITE_CONFIG.url}${systemCanonicals[slug]}`
        : `${SITE_CONFIG.url}/commercial-systems/${slug}`,
    },
    openGraph: {
      title: `${system.fullName} | Best Roofing Now Charlotte`,
      description: system.description,
      url: `${SITE_CONFIG.url}/commercial-systems/${slug}`,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${system.fullName} in Charlotte NC - Best Roofing Now`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${system.fullName} | Best Roofing Now Charlotte`,
      description: system.description,
      images: [ogImage],
    },
  };
}

export default async function CommercialSystemPage({ params }: CommercialSystemPageProps) {
  const { slug } = await params;
  const system = COMMERCIAL_SYSTEMS.find((s) => s.slug === slug);

  if (!system) {
    notFound();
  }

  const otherSystems = COMMERCIAL_SYSTEMS.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Commercial Systems', href: '/commercial-systems' },
              { label: system.name },
            ]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-10 h-10" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {system.fullName}
            </h1>
            <p className="text-xl text-white/90 mb-6">
              {system.description}
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" aria-hidden="true" />
                <span>Lifespan: <strong>{system.lifespan}</strong></span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Get {system.name} Quote
              </a>
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-light"
              >
                Schedule Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Benefits of {system.name}
              </h2>
              <ul className="space-y-4">
                {system.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-lg text-dark">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-light rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Quick Facts
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray uppercase tracking-wide mb-1">Expected Lifespan</div>
                  <div className="text-2xl font-bold text-dark">{system.lifespan}</div>
                </div>
                <div>
                  <div className="text-sm text-gray uppercase tracking-wide mb-1">Best For</div>
                  <div className="text-dark">{system.bestFor}</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray mb-4">
                  Ready for a {system.name} assessment?
                </p>
                <a
                  href={`tel:${SITE_CONFIG.phoneClean}`}
                  className="btn btn-primary w-full"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call for Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our {system.name} Installation Process
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bold text-primary mb-2">Assessment</h3>
              <p className="text-gray text-sm">Complete roof inspection and specifications</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bold text-primary mb-2">Proposal</h3>
              <p className="text-gray text-sm">Detailed quote with material options</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bold text-primary mb-2">Installation</h3>
              <p className="text-gray text-sm">Professional installation by certified crews</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-bold text-primary mb-2">Warranty</h3>
              <p className="text-gray text-sm">Documentation and maintenance plans</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {system.name} FAQs
            </h2>

            <div className="space-y-6">
              <div className="bg-light rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">
                  How long does {system.name} installation take?
                </h3>
                <p className="text-gray text-sm">
                  Installation time varies based on roof size and complexity. Most commercial
                  {system.name} installations take 3-10 days. We work to minimize disruption
                  to your business operations.
                </p>
              </div>

              <div className="bg-light rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">
                  Can {system.name} be installed over existing roofing?
                </h3>
                <p className="text-gray text-sm">
                  In some cases, yes. We&apos;ll assess your existing roof condition during
                  our inspection to determine if a recover is possible, which can save
                  time and money.
                </p>
              </div>

              <div className="bg-light rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">
                  What warranty comes with {system.name}?
                </h3>
                <p className="text-gray text-sm">
                  Warranty options vary by manufacturer and system. Most {system.name}
                  systems come with 15-30 year warranties. We&apos;ll explain all warranty
                  options during your consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Systems */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Other Commercial Systems
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherSystems.map((s) => (
              <Link
                key={s.slug}
                href={`/commercial-systems/${s.slug}`}
                className="card hover:shadow-xl transition group"
              >
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                  {s.name}
                </h3>
                <p className="text-gray text-sm mb-4">{s.description.slice(0, 80)}...</p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/commercial-systems" className="btn btn-outline">
              View All Commercial Systems
            </Link>
          </div>
        </div>
      </section>

      {/* Project Gallery Strip */}
      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug={slug} />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Commercial Roofing"
      />

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a {system.name} Roof?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free commercial roof assessment and {system.name} quote from
            our experienced team.
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
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
