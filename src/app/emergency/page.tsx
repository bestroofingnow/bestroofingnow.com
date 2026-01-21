import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, AlertTriangle, Clock, Shield, CheckCircle, Zap } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: '24/7 Emergency Roof Repair Charlotte NC | Best Roofing Now',
  description: 'Emergency roof repair available 24/7 in Charlotte NC. Storm damage, active leaks, fallen trees - we respond fast to protect your home. Call now!',
  keywords: [
    'emergency roof repair Charlotte',
    '24/7 roofing',
    'storm damage repair',
    'emergency roofer near me',
    'urgent roof leak repair',
  ],
  openGraph: {
    title: '24/7 Emergency Roof Repair | Best Roofing Now Charlotte',
    description: 'Fast response emergency roofing services in Charlotte NC.',
    url: `${SITE_CONFIG.url}/emergency`,
    type: 'website',
  },
};

const emergencyTypes = [
  {
    title: 'Storm Damage',
    description: 'High winds, hail, and severe storms can cause immediate damage requiring urgent attention.',
    icon: '⚡',
  },
  {
    title: 'Active Roof Leaks',
    description: 'Water actively entering your home causes damage by the minute. We stop leaks fast.',
    icon: '💧',
  },
  {
    title: 'Fallen Trees/Debris',
    description: 'Tree limbs or debris on your roof create immediate risks and need professional removal.',
    icon: '🌳',
  },
  {
    title: 'Fire Damage',
    description: 'After fire department clearance, we secure and protect your roof from further damage.',
    icon: '🔥',
  },
  {
    title: 'Structural Collapse',
    description: 'Sagging or collapsed roof sections require immediate professional assessment.',
    icon: '🏠',
  },
  {
    title: 'Missing Roof Sections',
    description: 'Large areas of missing shingles or exposed decking need urgent weatherproofing.',
    icon: '🔧',
  },
];

export default function EmergencyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Emergency Services', url: `${SITE_CONFIG.url}/emergency` },
        ]}
      />
      {/* Emergency Hero */}
      <section className="bg-red-600 text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Emergency Services' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-10 h-10 animate-pulse" aria-hidden="true" />
              <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                24/7 AVAILABLE
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Emergency Roof Repair
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Roof emergencies don&apos;t wait for business hours. Our emergency response
              team is available 24 hours a day, 7 days a week to protect your
              Charlotte home from further damage.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-red-600 hover:bg-gray-100 text-lg px-8 animate-pulse"
            >
              <Phone className="w-6 h-6" aria-hidden="true" />
              CALL NOW: {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-8 bg-dark text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-accent" aria-hidden="true" />
              <div>
                <div className="text-3xl font-bold">1-2 Hours</div>
                <div className="text-white/70 text-sm">Average Response Time</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-accent" aria-hidden="true" />
              <div>
                <div className="text-3xl font-bold">24/7/365</div>
                <div className="text-white/70 text-sm">Always Available</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-accent" aria-hidden="true" />
              <div>
                <div className="text-3xl font-bold">Licensed</div>
                <div className="text-white/70 text-sm">& Fully Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            We Handle All Roof Emergencies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyTypes.map((emergency, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="text-4xl mb-4">{emergency.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{emergency.title}</h3>
                <p className="text-gray text-sm">{emergency.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our Emergency Response Process
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-primary mb-2">You Call</h3>
              <p className="text-gray text-sm">Call our 24/7 emergency line and speak with a real person immediately.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-primary mb-2">We Respond</h3>
              <p className="text-gray text-sm">Our emergency crew is dispatched and arrives within 1-2 hours.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-primary mb-2">We Secure</h3>
              <p className="text-gray text-sm">Emergency tarping and temporary repairs to stop further damage.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold text-primary mb-2">We Follow Up</h3>
              <p className="text-gray text-sm">Schedule permanent repairs and assist with insurance claims.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Checklist */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              While You Wait: Emergency Checklist
            </h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6 mb-8">
              <h3 className="font-bold text-yellow-800 mb-4">Do This Now:</h3>
              <ul className="space-y-3 text-yellow-800">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Stay safe</strong> - Don&apos;t go on the roof or into areas with active leaks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Move valuables</strong> - Relocate furniture and belongings from leak areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Contain water</strong> - Use buckets and towels to minimize interior damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Document everything</strong> - Take photos and videos for insurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>Turn off electricity</strong> - If water is near electrical fixtures</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
              <h3 className="font-bold text-red-700 mb-4">Don&apos;t Do This:</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-red-600">✕</span>
                  <span>Don&apos;t climb on the roof - leave it to professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-red-600">✕</span>
                  <span>Don&apos;t sign anything with storm chasers who show up unsolicited</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-red-600">✕</span>
                  <span>Don&apos;t attempt DIY repairs that could worsen the situation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-red-600">✕</span>
                  <span>Don&apos;t wait to call your insurance company</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Help */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              We Help with Insurance Claims
            </h2>
            <p className="text-gray mb-8">
              Emergency roof damage is stressful enough. We work directly with your
              insurance company, document all damage thoroughly, and help ensure you
              receive fair compensation for repairs.
            </p>
            <Link href="/guides/insurance-claim-guide" className="btn btn-outline">
              Read Our Insurance Claim Guide
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-red-600 text-white">
        <div className="container text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4 animate-pulse" aria-hidden="true" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Roof Emergency? Call Now!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait for the damage to get worse. Our emergency team is standing
            by 24/7 to protect your home.
          </p>
          <a
            href={`tel:${SITE_CONFIG.phoneClean}`}
            className="btn bg-white text-red-600 hover:bg-gray-100 text-xl px-12 py-4"
          >
            <Phone className="w-6 h-6" aria-hidden="true" />
            {SITE_CONFIG.phone}
          </a>
          <p className="mt-4 text-white/70 text-sm">
            Average response time: 1-2 hours
          </p>
        </div>
      </section>
    </>
  );
}
