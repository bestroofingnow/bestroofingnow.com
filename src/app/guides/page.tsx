import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight, Phone, FileText, DollarSign, Wrench, Shield, Users } from 'lucide-react';
import { SITE_CONFIG, ROOFING_GUIDES } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Roofing Guides & Resources | Best Roofing Now Charlotte NC',
  description: 'Expert roofing guides for Charlotte homeowners. Learn about roof costs, maintenance tips, insurance claims, and how to choose the right roofing contractor.',
  keywords: [
    'roofing guide Charlotte',
    'roof replacement guide',
    'roofing tips',
    'roof cost guide',
    'roofing resources',
  ],
  openGraph: {
    title: 'Roofing Guides & Resources | Best Roofing Now',
    description: 'Expert roofing guides and resources for Charlotte homeowners.',
    url: `${SITE_CONFIG.url}/guides`,
    type: 'website',
  },
};

const guideIcons: Record<string, typeof BookOpen> = {
  'roof-replacement-cost': DollarSign,
  'signs-you-need-new-roof': FileText,
  'how-long-does-roof-last': BookOpen,
  'roof-maintenance-tips': Wrench,
  'insurance-claim-guide': Shield,
  'choosing-roofing-contractor': Users,
};

export default function GuidesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Roofing Guides' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Roofing Guides & Resources
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert guidance to help you make informed decisions about your roof.
              From costs and maintenance to insurance claims and contractor selection,
              we&apos;ve got you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Talk to an Expert
              </a>
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-light"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOFING_GUIDES.map((guide) => {
              const Icon = guideIcons[guide.slug] || BookOpen;
              return (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="card hover:shadow-xl transition group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition">
                    {guide.title}
                  </h2>
                  <p className="text-gray mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:text-accent transition">
                    Read Guide
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Quick Roofing Tips
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-accent mb-2">1</div>
              <h3 className="font-bold text-dark mb-2">Inspect Twice Yearly</h3>
              <p className="text-gray text-sm">
                Check your roof every spring and fall for damage, missing shingles, or debris.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-accent mb-2">2</div>
              <h3 className="font-bold text-dark mb-2">Clean Your Gutters</h3>
              <p className="text-gray text-sm">
                Clogged gutters cause water damage. Clean them at least twice a year.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-accent mb-2">3</div>
              <h3 className="font-bold text-dark mb-2">Trim Nearby Trees</h3>
              <p className="text-gray text-sm">
                Overhanging branches can damage shingles and deposit debris on your roof.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-accent mb-2">4</div>
              <h3 className="font-bold text-dark mb-2">Act on Storm Damage</h3>
              <p className="text-gray text-sm">
                After severe weather, get a professional inspection to catch damage early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            More Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/materials" className="card hover:shadow-xl transition group text-center">
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent">
                Roofing Materials
              </h3>
              <p className="text-gray text-sm">
                Compare asphalt, metal, tile, slate, and more to find the right material for your home.
              </p>
            </Link>
            <Link href="/services" className="card hover:shadow-xl transition group text-center">
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent">
                Our Services
              </h3>
              <p className="text-gray text-sm">
                From repairs to full replacements, explore our comprehensive roofing services.
              </p>
            </Link>
            <Link href="/faq" className="card hover:shadow-xl transition group text-center">
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent">
                FAQ
              </h3>
              <p className="text-gray text-sm">
                Get answers to the most common questions about roofing in Charlotte.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have Questions? We&apos;re Here to Help
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our roofing experts are ready to answer your questions and provide
            personalized guidance for your roofing project.
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
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
