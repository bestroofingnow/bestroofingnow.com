import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, CheckCircle, AlertTriangle, ArrowRight, Home } from 'lucide-react';
import { SITE_CONFIG, ROOF_TYPES } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { EstimateButton } from '@/components/estimate';

interface RoofTypePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ROOF_TYPES.map((roofType) => ({
    slug: roofType.slug,
  }));
}

export async function generateMetadata({ params }: RoofTypePageProps): Promise<Metadata> {
  const { slug } = await params;
  const roofType = ROOF_TYPES.find((r) => r.slug === slug);

  if (!roofType) {
    return { title: 'Roof Type Not Found' };
  }

  const ogImage = 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png';

  return {
    title: `${roofType.name} | Roof Styles Charlotte NC | Best Roofing Now`,
    description: `${roofType.description} Expert ${roofType.name.toLowerCase()} repair, installation, and replacement in Charlotte NC.`,
    keywords: roofType.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/roof-types/${slug}`,
    },
    openGraph: {
      title: `${roofType.name} | Best Roofing Now Charlotte`,
      description: roofType.description,
      url: `${SITE_CONFIG.url}/roof-types/${slug}`,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${roofType.name} roofing in Charlotte NC - Best Roofing Now`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${roofType.name} | Best Roofing Now Charlotte`,
      description: roofType.description,
      images: [ogImage],
    },
  };
}

export default async function RoofTypePage({ params }: RoofTypePageProps) {
  const { slug } = await params;
  const roofType = ROOF_TYPES.find((r) => r.slug === slug);

  if (!roofType) {
    notFound();
  }

  const otherTypes = ROOF_TYPES.filter((r) => r.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Roof Types', href: '/roof-types' },
              { label: roofType.shortName },
            ]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Home className="w-10 h-10" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {roofType.name}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {roofType.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Get Expert Help
              </a>
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-light"
              >
                Schedule Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Characteristics */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Key Characteristics
              </h2>
              <ul className="space-y-4">
                {roofType.characteristics.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-lg text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-light rounded-xl p-6">
                <h3 className="font-bold text-primary text-lg mb-3">Best For</h3>
                <p className="text-gray">{roofType.bestFor}</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-yellow-800 mb-2">Important Consideration</h3>
                    <p className="text-yellow-700 text-sm">{roofType.considerations}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for This Roof Type */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our {roofType.shortName} Roof Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Inspection & Assessment</h3>
              <p className="text-gray text-sm mb-4">
                Thorough inspection of your {roofType.name.toLowerCase()} to identify issues,
                assess condition, and recommend solutions.
              </p>
              <Link href="/services/roof-inspection" className="text-primary font-semibold text-sm hover:text-accent">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Repair Services</h3>
              <p className="text-gray text-sm mb-4">
                Expert repairs for {roofType.name.toLowerCase()} including leak repair,
                shingle replacement, and structural fixes.
              </p>
              <Link href="/services/roof-repair" className="text-primary font-semibold text-sm hover:text-accent">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">Full Replacement</h3>
              <p className="text-gray text-sm mb-4">
                Complete {roofType.name.toLowerCase()} replacement with quality materials
                and expert installation.
              </p>
              <Link href="/services/roof-replacement" className="text-primary font-semibold text-sm hover:text-accent">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Common Questions About {roofType.name}
            </h2>

            <div className="space-y-6">
              <div className="bg-light rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">
                  How long does a {roofType.name.toLowerCase()} last?
                </h3>
                <p className="text-gray text-sm">
                  With proper maintenance, a {roofType.name.toLowerCase()} typically lasts 20-50 years
                  depending on the roofing material used and local climate conditions.
                </p>
              </div>

              <div className="bg-light rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">
                  Can you convert my roof to a {roofType.name.toLowerCase()}?
                </h3>
                <p className="text-gray text-sm">
                  Roof conversions are possible but require structural assessment.
                  Contact us for a consultation to discuss feasibility and costs.
                </p>
              </div>

              <div className="bg-light rounded-xl p-6">
                <h3 className="font-bold text-primary mb-2">
                  What materials work best with {roofType.name.toLowerCase()}?
                </h3>
                <p className="text-gray text-sm">
                  Most roofing materials including asphalt shingles, metal, and tile
                  work well with {roofType.name.toLowerCase()}. We&apos;ll recommend the best option
                  for your specific situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Roof Types */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Explore Other Roof Types
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherTypes.map((type) => (
              <Link
                key={type.slug}
                href={`/roof-types/${type.slug}`}
                className="card hover:shadow-xl transition group"
              >
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                  {type.name}
                </h3>
                <p className="text-gray text-sm mb-4">{type.description.slice(0, 100)}...</p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/roof-types" className="btn btn-outline">
              View All Roof Types
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help with Your {roofType.shortName} Roof?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our experts specialize in all roof types. Get a free inspection and
            honest assessment of your {roofType.name.toLowerCase()}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-accent hover:bg-light text-lg px-8"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <EstimateButton
              variant="accent"
              size="lg"
              className="px-8"
            >
              Get Free Instant Estimate
            </EstimateButton>
          </div>
        </div>
      </section>
    </>
  );
}
