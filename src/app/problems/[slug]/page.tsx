import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, CheckCircle, AlertTriangle, ArrowRight, Wrench, XCircle } from 'lucide-react';
import { SITE_CONFIG, ROOFING_PROBLEMS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { EstimateButton } from '@/components/estimate';

interface ProblemPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ROOFING_PROBLEMS.map((problem) => ({
    slug: problem.slug,
  }));
}

export async function generateMetadata({ params }: ProblemPageProps): Promise<Metadata> {
  const { slug } = await params;
  const problem = ROOFING_PROBLEMS.find((p) => p.slug === slug);

  if (!problem) {
    return { title: 'Problem Not Found' };
  }

  const ogImage = 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png';

  return {
    title: `${problem.title} | Best Roofing Now`,
    description: problem.description,
    keywords: problem.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/problems/${slug}`,
    },
    openGraph: {
      title: problem.title,
      description: problem.description,
      url: `${SITE_CONFIG.url}/problems/${slug}`,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${problem.title} - Best Roofing Now Charlotte NC`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: problem.title,
      description: problem.description,
      images: [ogImage],
    },
  };
}

export default async function ProblemPage({ params }: ProblemPageProps) {
  const { slug } = await params;
  const problem = ROOFING_PROBLEMS.find((p) => p.slug === slug);

  if (!problem) {
    notFound();
  }

  const otherProblems = ROOFING_PROBLEMS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Roofing Problems', href: '/problems' },
              { label: problem.shortName },
            ]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-10 h-10" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {problem.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {problem.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Get Emergency Help
              </a>
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-light"
              >
                Schedule Repair
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Causes and Signs */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Common Causes */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Common Causes
              </h2>
              <ul className="space-y-4">
                {problem.causes.map((cause, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-dark">{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Warning Signs */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Warning Signs to Watch For
              </h2>
              <ul className="space-y-4">
                {problem.signs.map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-dark">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Our Solution
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-lg text-dark leading-relaxed mb-6">
                    {problem.solution}
                  </p>
                  <h3 className="font-bold text-primary mb-4">What to Expect:</h3>
                  <ul className="space-y-2 text-gray">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                      Free inspection and assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                      Clear, upfront pricing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                      Quality materials and workmanship
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                      Warranty-backed repairs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Why Choose Best Roofing Now?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">24/7</span>
              </div>
              <h3 className="font-bold text-primary mb-2">Emergency Response</h3>
              <p className="text-gray text-sm">
                We&apos;re available around the clock for urgent roofing emergencies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">A+</span>
              </div>
              <h3 className="font-bold text-primary mb-2">BBB Accredited</h3>
              <p className="text-gray text-sm">
                A+ rated with hundreds of 5-star reviews from Charlotte homeowners.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">✓</span>
              </div>
              <h3 className="font-bold text-primary mb-2">Warranty Backed</h3>
              <p className="text-gray text-sm">
                All repairs come with our workmanship warranty for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary mb-2">
                  How quickly can you respond to {problem.name.toLowerCase()}?
                </h3>
                <p className="text-gray text-sm">
                  For emergencies, we offer same-day response. For non-urgent repairs,
                  we typically schedule inspections within 24-48 hours.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary mb-2">
                  Will my insurance cover this repair?
                </h3>
                <p className="text-gray text-sm">
                  Many roofing issues, especially storm damage, are covered by homeowner&apos;s
                  insurance. We work directly with insurance companies and can help with your claim.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary mb-2">
                  How much does {problem.name.toLowerCase()} repair cost?
                </h3>
                <p className="text-gray text-sm">
                  Costs vary based on extent of damage. We provide free inspections and
                  detailed quotes before any work begins. No surprises, no hidden fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Problems */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Other Roofing Problems We Solve
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProblems.map((p) => (
              <Link
                key={p.slug}
                href={`/problems/${p.slug}`}
                className="card hover:shadow-xl transition group"
              >
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                  {p.name}
                </h3>
                <p className="text-gray text-sm mb-4">{p.description.slice(0, 100)}...</p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/problems" className="btn btn-outline">
              View All Problems
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Fix Your {problem.name}?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don&apos;t let {problem.name.toLowerCase()} damage your home further.
            Contact us now for fast, professional repairs.
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
