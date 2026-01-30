import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, AlertTriangle, Wrench } from 'lucide-react';
import { SITE_CONFIG, ROOFING_PROBLEMS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Common Roofing Problems | Best Roofing Now Charlotte NC',
  description: 'Expert solutions for common roofing problems including leaks, storm damage, missing shingles, and more. Fast repairs in Charlotte NC.',
  keywords: [
    'roofing problems',
    'roof leak repair',
    'storm damage roof',
    'missing shingles',
    'Charlotte roof repair',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/problems`,
  },
  openGraph: {
    title: 'Common Roofing Problems | Best Roofing Now',
    description: 'Solutions for every roofing problem. Expert repairs in Charlotte NC.',
    url: `${SITE_CONFIG.url}/problems`,
    type: 'website',
  },
};

export default function ProblemsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Roofing Problems' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Common Roofing Problems
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Every roofing problem has a solution. From minor leaks to major storm
              damage, our experts diagnose and fix issues quickly to protect your
              Charlotte home.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Emergency Repair Hotline
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

      {/* Problems Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOFING_PROBLEMS.map((problem) => (
              <Link
                key={problem.slug}
                href={`/problems/${problem.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                  {problem.name}
                </h2>
                <p className="text-gray text-sm mb-4">
                  {problem.description.slice(0, 120)}...
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Get Solution
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-8 bg-red-600 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <AlertTriangle className="w-10 h-10" aria-hidden="true" />
              <div>
                <h2 className="text-xl font-bold">Roof Emergency?</h2>
                <p className="text-white/90">We offer 24/7 emergency repair services</p>
              </div>
            </div>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-red-600 hover:bg-gray-100"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call Now: {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Why Act Fast */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Why You Shouldn&apos;t Ignore Roofing Problems
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary text-lg mb-3">Water Damage Escalates</h3>
                <p className="text-gray text-sm">
                  A small leak can lead to mold, rot, and structural damage. What starts
                  as a $200 repair can become a $20,000 problem if ignored.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary text-lg mb-3">Insurance Complications</h3>
                <p className="text-gray text-sm">
                  Delaying repairs after storm damage can void your insurance claim.
                  Document damage immediately and act fast.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary text-lg mb-3">Energy Costs Increase</h3>
                <p className="text-gray text-sm">
                  Damaged roofing compromises insulation, causing your HVAC to work
                  harder and driving up energy bills.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary text-lg mb-3">Property Value Drops</h3>
                <p className="text-gray text-sm">
                  Visible roof problems are red flags for buyers. Maintaining your
                  roof protects your home&apos;s resale value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our Problem-Solving Process
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-primary mb-2">Inspect</h3>
                <p className="text-gray text-sm">Thorough assessment to identify all issues</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-primary mb-2">Diagnose</h3>
                <p className="text-gray text-sm">Determine root cause, not just symptoms</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-primary mb-2">Quote</h3>
                <p className="text-gray text-sm">Clear, upfront pricing with no surprises</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-primary mb-2">Repair</h3>
                <p className="text-gray text-sm">Quality repairs backed by warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don&apos;t Wait Until It Gets Worse
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a free inspection today. We&apos;ll identify problems early
            and provide honest recommendations to protect your home.
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
              <Wrench className="w-5 h-5" aria-hidden="true" />
              Schedule Free Inspection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
