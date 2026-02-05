import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle, Clock, Shield, Users, FileText, Hammer, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Our Roofing Process | What to Expect',
  description: 'Learn what to expect during your roof replacement or repair. Our step-by-step process ensures quality results and a stress-free experience.',
  keywords: [
    'roofing process',
    'roof replacement steps',
    'what to expect roof installation',
    'roofing timeline',
    'Charlotte roofing company',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/process`,
  },
  openGraph: {
    title: 'Our Roofing Process | Best Roofing Now',
    description: 'Step-by-step guide to our professional roofing process.',
    url: `${SITE_CONFIG.url}/process`,
    type: 'website',
  },
};

const processSteps = [
  {
    number: 1,
    title: 'Free Inspection & Consultation',
    duration: '45-60 minutes',
    icon: FileText,
    description: 'Our certified inspector examines your roof thoroughly, documenting any issues with photos and measurements.',
    details: [
      'Complete exterior roof inspection',
      'Attic ventilation assessment',
      'Detailed photo documentation',
      'Discussion of findings and options',
      'No-obligation written estimate',
    ],
  },
  {
    number: 2,
    title: 'Proposal & Material Selection',
    duration: '1-2 days',
    icon: Users,
    description: 'We present detailed options and help you choose the best materials for your home and budget.',
    details: [
      'Review of roofing material options',
      'Color and style selection assistance',
      'Financing options discussion',
      'Warranty coverage explanation',
      'Contract review and signing',
    ],
  },
  {
    number: 3,
    title: 'Scheduling & Preparation',
    duration: '3-7 days before',
    icon: Clock,
    description: 'We coordinate the project timeline and handle all preparations including permits and material delivery.',
    details: [
      'Building permit acquisition',
      'Material ordering and delivery',
      'Scheduling with our installation crew',
      'Pre-installation checklist sent to you',
      'Neighbor notification (if needed)',
    ],
  },
  {
    number: 4,
    title: 'Installation Day',
    duration: '1-3 days',
    icon: Hammer,
    description: 'Our professional crew arrives on time and works efficiently to complete your new roof.',
    details: [
      'Crew arrives at scheduled time',
      'Protection of landscaping and property',
      'Removal of old roofing materials',
      'Deck inspection and repairs',
      'Installation of new roofing system',
    ],
  },
  {
    number: 5,
    title: 'Quality Inspection & Cleanup',
    duration: 'Same day',
    icon: Sparkles,
    description: 'We perform a thorough quality check and leave your property clean and debris-free.',
    details: [
      'Final quality inspection',
      'Magnetic nail sweep of entire property',
      'Debris removal and disposal',
      'Gutter cleaning',
      'Walk-through with homeowner',
    ],
  },
  {
    number: 6,
    title: 'Warranty Registration & Follow-Up',
    duration: '1-2 weeks after',
    icon: Shield,
    description: 'We handle all warranty paperwork and follow up to ensure your complete satisfaction.',
    details: [
      'Manufacturer warranty registration',
      'Workmanship warranty documentation',
      'Before/after photos provided',
      'Follow-up call to ensure satisfaction',
      'Ongoing support for any questions',
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Our Process', url: `${SITE_CONFIG.url}/process` },
        ]}
      />
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Our Process' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Roofing Process
            </h1>
            <p className="text-xl text-white/90 mb-8">
              We believe a great roofing experience starts with clear communication
              and a well-defined process. Here&apos;s exactly what to expect when you
              choose Best Roofing Now.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Start with Free Inspection
            </a>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {/* Connector line */}
                  {idx < processSteps.length - 1 && (
                    <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
                  )}

                  <div className="flex gap-6 mb-12">
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold relative z-10">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl shadow-md p-6 border border-gray-100">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-xl font-bold text-primary mb-1">
                            {step.title}
                          </h2>
                          <div className="flex items-center gap-2 text-gray text-sm">
                            <Clock className="w-4 h-4" aria-hidden="true" />
                            {step.duration}
                          </div>
                        </div>
                        <Icon className="w-8 h-8 text-accent" aria-hidden="true" />
                      </div>

                      <p className="text-gray mb-4">{step.description}</p>

                      <ul className="space-y-2">
                        {step.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="flex items-start gap-2 text-sm text-dark">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            What Sets Our Process Apart
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-primary mb-2">Dedicated Project Manager</h3>
              <p className="text-gray text-sm">
                One point of contact from start to finish. Your project manager
                keeps you informed every step of the way.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-primary mb-2">Written Everything</h3>
              <p className="text-gray text-sm">
                Every quote, warranty, and commitment in writing.
                No verbal promises—everything is documented.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-primary mb-2">Spotless Cleanup</h3>
              <p className="text-gray text-sm">
                We treat your property with respect. Multiple passes with
                magnetic nail sweepers ensure nothing is left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Expectations */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Typical Timeline
            </h2>

            <div className="bg-primary/5 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-primary mb-4">Roof Repair</h3>
                  <ul className="space-y-2 text-gray text-sm">
                    <li>• Inspection: Same or next day</li>
                    <li>• Quote: Within 24 hours</li>
                    <li>• Scheduling: 1-3 days</li>
                    <li>• Repair work: 1-4 hours</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-primary mb-4">Roof Replacement</h3>
                  <ul className="space-y-2 text-gray text-sm">
                    <li>• Inspection: Same or next day</li>
                    <li>• Quote: Within 48 hours</li>
                    <li>• Scheduling: 1-2 weeks</li>
                    <li>• Installation: 1-3 days</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray text-sm mt-6 text-center">
                * Timelines may vary based on weather, material availability, and project complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="other" city="Charlotte" slug="process" />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roofing Services"
      />

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            The first step is a free, no-obligation inspection. Schedule yours
            today and experience our professional process firsthand.
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
              Schedule Free Inspection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
