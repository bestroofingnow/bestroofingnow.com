import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Shield, CheckCircle, Award, FileText, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { EstimateButton } from '@/components/estimate';
import { BreadcrumbSchema, AllWarrantiesSchema } from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Roofing Warranty Information | Best Roofing Now Charlotte NC',
  description: 'Understand roofing warranties including manufacturer warranties, workmanship guarantees, and extended coverage options. Best Roofing Now Charlotte NC.',
  keywords: [
    'roofing warranty',
    'roof warranty Charlotte',
    'GAF warranty',
    'CertainTeed warranty',
    'roofing guarantee',
    'workmanship warranty',
  ],
  openGraph: {
    title: 'Roofing Warranty Information | Best Roofing Now',
    description: 'Complete guide to understanding roofing warranties and coverage options.',
    url: `${SITE_CONFIG.url}/warranty`,
    type: 'website',
  },
};

export default function WarrantyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Warranty Information', url: `${SITE_CONFIG.url}/warranty` },
        ]}
      />
      <AllWarrantiesSchema />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Warranty Information' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-10 h-10" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Roofing Warranty Information
            </h1>
            <p className="text-xl text-white/90 mb-8">
              A quality roof is a major investment. Understanding your warranty
              coverage helps protect that investment for decades to come.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Ask About Warranty Options
            </a>
          </div>
        </div>
      </section>

      {/* Types of Warranties */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Types of Roofing Warranties
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Manufacturer Warranty */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Manufacturer Warranty</h3>
              <p className="text-gray mb-4">
                Covers defects in roofing materials. If shingles fail prematurely due to
                manufacturing defects, the manufacturer will replace them.
              </p>
              <h4 className="font-bold text-dark mb-2">Typical Coverage:</h4>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                  25-50 year material warranty
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                  Pro-rated after initial period
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                  Covers material defects only
                </li>
              </ul>
            </div>

            {/* Workmanship Warranty */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Workmanship Warranty</h3>
              <p className="text-gray mb-4">
                Covers installation errors. If problems arise from how the roof was installed,
                your contractor covers the repair.
              </p>
              <h4 className="font-bold text-dark mb-2">Our Coverage:</h4>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                  Industry-leading workmanship guarantee
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                  Covers installation defects
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                  Labor included in coverage
                </li>
              </ul>
            </div>

            {/* Extended Warranty */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Extended Warranty</h3>
              <p className="text-gray mb-4">
                Premium protection that combines material and workmanship coverage
                under one comprehensive warranty.
              </p>
              <h4 className="font-bold text-dark mb-2">Benefits:</h4>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                  Up to 50-year non-prorated coverage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                  Transferable to new homeowner
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                  Single point of contact for claims
                </li>
              </ul>
            </div>

            {/* No Dollar Limit */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-yellow-600" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">NDL (No Dollar Limit)</h3>
              <p className="text-gray mb-4">
                The gold standard in roofing warranties. Full replacement cost coverage
                with no depreciation for the warranty period.
              </p>
              <h4 className="font-bold text-dark mb-2">Premium Protection:</h4>
              <ul className="space-y-2 text-gray text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                  Full replacement value
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                  No pro-rating for entire term
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                  Includes labor and materials
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Certifications */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our Manufacturer Certifications
          </h2>
          <p className="text-gray text-center max-w-2xl mx-auto mb-8">
            As a certified installer for major manufacturers, we can offer enhanced
            warranty options not available from uncertified contractors.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <h3 className="text-xl font-bold text-primary mb-3">GAF Certified</h3>
              <p className="text-gray text-sm mb-4">
                Access to GAF&apos;s Golden Pledge® warranty with 50-year non-prorated
                coverage and 25-year workmanship coverage.
              </p>
              <Link href="/materials/asphalt-shingles" className="text-primary font-semibold text-sm hover:text-accent">
                Learn About GAF →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <h3 className="text-xl font-bold text-primary mb-3">CertainTeed SELECT</h3>
              <p className="text-gray text-sm mb-4">
                CertainTeed&apos;s SureStart PLUS™ warranty with enhanced coverage and
                transferability.
              </p>
              <Link href="/materials/asphalt-shingles" className="text-primary font-semibold text-sm hover:text-accent">
                Learn About CertainTeed →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <h3 className="text-xl font-bold text-primary mb-3">Owens Corning Preferred</h3>
              <p className="text-gray text-sm mb-4">
                Preferred Contractor status enables enhanced warranty options including
                Platinum Protection.
              </p>
              <Link href="/materials/asphalt-shingles" className="text-primary font-semibold text-sm hover:text-accent">
                Learn About Owens Corning →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Voids Warranty */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              What Can Void Your Warranty?
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 mb-8">
              <h3 className="font-bold text-red-700 mb-4">Common Warranty Voidance Causes:</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start gap-3">
                  <span className="font-bold">•</span>
                  <span><strong>Improper installation</strong> by uncertified contractors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">•</span>
                  <span><strong>Lack of ventilation</strong> causing premature aging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">•</span>
                  <span><strong>Power washing</strong> which can damage shingles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">•</span>
                  <span><strong>Installing over existing layers</strong> without manufacturer approval</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">•</span>
                  <span><strong>Failure to maintain</strong> (letting debris accumulate, ignoring issues)</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6">
              <h3 className="font-bold text-green-700 mb-4">Protect Your Warranty:</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Choose certified installers like Best Roofing Now</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Keep documentation of installation and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Schedule annual professional inspections</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Address repairs promptly with qualified professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Warranty FAQs
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary mb-2">
                  Is the warranty transferable if I sell my home?
                </h3>
                <p className="text-gray text-sm">
                  Most manufacturer warranties are transferable to the new homeowner,
                  which adds value to your home. Some may have a transfer fee or
                  time limit. We&apos;ll explain your specific warranty terms.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary mb-2">
                  What&apos;s the difference between prorated and non-prorated?
                </h3>
                <p className="text-gray text-sm">
                  A prorated warranty reduces coverage over time—a 25-year warranty
                  might only cover 50% of costs at year 15. Non-prorated provides
                  full coverage for the entire term.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary mb-2">
                  Do I need to register my warranty?
                </h3>
                <p className="text-gray text-sm">
                  Most manufacturers require warranty registration within 30-60 days
                  of installation. We handle this paperwork for you and provide
                  copies for your records.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-primary mb-2">
                  What if my contractor goes out of business?
                </h3>
                <p className="text-gray text-sm">
                  Workmanship warranties are only as good as the company backing them.
                  That&apos;s why choosing an established, reputable contractor like
                  Best Roofing Now—serving Charlotte since 2019—matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get the Best Warranty Protection
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our manufacturer certifications allow us to offer premium warranty options
            that protect your investment for decades. Ask about our warranty packages.
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
