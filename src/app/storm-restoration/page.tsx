import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CloudRain,
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  FileText,
  Clock,
  AlertTriangle,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { FAQ } from '@/components/sections/FAQ';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  ServiceSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { SITE_CONFIG, LOCATIONS } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';

export const metadata: Metadata = {
  title: 'Storm Damage Restoration Charlotte NC | Insurance Claim Experts',
  description:
    'Storm damage restoration and insurance claim assistance in Charlotte NC. 24/7 emergency response, hail & wind damage repair, full restoration services. We handle your claim!',
  keywords: [
    'storm damage restoration Charlotte NC',
    'roof storm damage Charlotte',
    'insurance claim roofing Charlotte',
    'hail damage roof repair Charlotte NC',
    'wind damage roof Charlotte',
    'emergency roof repair Charlotte',
    'storm damage contractor Charlotte',
    'building restoration Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/storm-restoration`,
  },
  openGraph: {
    title: 'Storm Damage Restoration Charlotte NC | Insurance Claim Experts',
    description:
      'Storm damage restoration and insurance claim assistance in Charlotte NC. 24/7 emergency response and full restoration.',
    url: `${SITE_CONFIG.url}/storm-restoration`,
  },
};

// Storm services to display
const stormServices = [
  {
    slug: 'storm-damage',
    title: 'Storm Damage Repair',
    description: 'Expert assessment and repair of hail, wind, and storm damage. Free inspections after any major storm.',
    icon: '🌧️',
    highlights: ['Free inspection', 'All damage types', 'Fast response'],
  },
  {
    slug: 'insurance-claims',
    title: 'Insurance Claim Assistance',
    description: 'We handle your entire insurance claim process. Documentation, adjuster meetings, and settlement advocacy.',
    icon: '📋',
    highlights: ['Full documentation', 'Adjuster liaison', 'Claim advocacy'],
  },
  {
    slug: 'emergency-roofing',
    title: 'Emergency Services',
    description: '24/7 emergency response for active leaks and storm damage. Rapid tarping and temporary repairs.',
    icon: '🚨',
    highlights: ['24/7 response', '1-4 hour arrival', 'Damage prevention'],
  },
  {
    slug: 'building-restoration',
    title: 'Building Restoration',
    description: 'Complete exterior restoration for storm, fire, and water damage. Single point of contact for full recovery.',
    icon: '🏗️',
    highlights: ['Full restoration', 'All exteriors', 'Insurance coordination'],
  },
];

const stormFAQs = [
  {
    question: 'How do I know if my roof has storm damage?',
    answer: 'Signs of storm damage include: missing or damaged shingles, dents in metal vents or gutters, granules in gutters or downspouts, cracked or bruised shingles (soft spots), damage to siding or window screens, and fallen tree limbs. After any significant storm, we recommend a free professional inspection.',
  },
  {
    question: 'Should I file an insurance claim for roof damage?',
    answer: 'If you have significant storm damage, usually yes. Many homeowners leave money on the table by not filing claims. We provide free inspections and honest assessments - if the damage doesn\'t warrant a claim, we\'ll tell you. If it does, we handle the entire process.',
  },
  {
    question: 'Will filing a storm damage claim raise my insurance rates?',
    answer: 'Storm damage claims are typically considered "Acts of God" and usually don\'t affect your rates like at-fault claims do. Your policy exists to protect you from events like this. We can discuss your specific situation during your free inspection.',
  },
  {
    question: 'What if my insurance company denies my claim?',
    answer: 'We help appeal denied claims with additional documentation, photos, and evidence. Our thorough initial documentation often helps overturn denials. We can also work with public adjusters if needed to fight for fair settlements.',
  },
  {
    question: 'How quickly can you respond to storm emergencies?',
    answer: 'Our emergency team responds within 1-4 hours depending on conditions and demand. We prioritize active leaks and exposed areas to prevent further damage. Call our 24/7 emergency line: (704) 605-6047.',
  },
  {
    question: 'Do I have to pay anything upfront for insurance work?',
    answer: 'For approved insurance claims, you typically only pay your deductible. We work directly with your insurance company and receive payment from them after repairs are complete. No large upfront costs for most insurance projects.',
  },
];

// Virtual service for schema
const stormCategoryService = {
  slug: 'storm-restoration',
  title: 'Storm Damage Restoration',
  description: 'Complete storm damage restoration and insurance claim services for Charlotte NC homes and businesses.',
  keywords: ['storm damage Charlotte NC', 'insurance claims roofing', 'emergency roof repair', 'building restoration'],
  priceRange: 'Often covered by insurance',
};

export default function StormRestorationPage() {
  const pageUrl = `${SITE_CONFIG.url}/storm-restoration`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Storm Damage Restoration Charlotte NC | Insurance Claim Experts"
        description="Storm damage restoration and insurance claim assistance in Charlotte NC. 24/7 emergency response and full restoration."
        url={pageUrl}
        primaryImage={IMAGES.services.stormDamage}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Restoration', url: pageUrl },
        ]}
      />
      <ServiceSchema service={stormCategoryService} />
      <FAQSchema faqs={stormFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Storm Restoration', url: pageUrl },
        ]}
      />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[{ name: 'Storm Restoration', href: '/storm-restoration' }]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.services.stormDamage}
            alt="Storm damage restoration services in Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <CloudRain className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Storm Damage Restoration Charlotte NC
            </h1>
            <p className="text-xl text-white/90 mb-8">
              When storms strike Charlotte, you need a contractor who responds fast and handles everything - from emergency tarping
              to insurance claims to complete restoration. Best Roofing Now has helped hundreds of families recover from storm damage.
              24/7 emergency response. Insurance claim experts. Full restoration services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <EstimateButton
                variant="accent"
                className="bg-accent hover:bg-accent-dark text-white"
              >
                Free Storm Inspection
              </EstimateButton>
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
                icon={<Phone className="w-5 h-5" />}
              >
                24/7 Emergency: {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert Banner */}
      <section className="bg-red-600 text-white py-4">
        <div className="container">
          <div className="flex items-center justify-center gap-4 text-center">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="font-semibold">
              Storm damage? Call our 24/7 emergency line: <a href={`tel:${SITE_CONFIG.phoneClean}`} className="underline">{SITE_CONFIG.phone}</a>
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Your Partner Through Storm Recovery
            </h2>
            <p className="text-lg text-gray leading-relaxed mb-8 text-center">
              Charlotte averages 25+ severe thunderstorm days per year, plus occasional hurricanes and tornadoes.
              When your home is damaged, you need more than just repairs - you need someone who handles everything
              so you can focus on your family. We&apos;re that partner.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-dark mb-2">24/7 Response</h3>
                <p className="text-gray text-sm">Emergency team on call day and night</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-dark mb-2">Insurance Experts</h3>
                <p className="text-gray text-sm">We handle your entire claim</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-dark mb-2">Full Restoration</h3>
                <p className="text-gray text-sm">Roof, siding, gutters & more</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-dark mb-2">Fair Settlements</h3>
                <p className="text-gray text-sm">We fight for proper coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">
            Storm Damage & Insurance Services
          </h2>
          <p className="text-gray text-center max-w-2xl mx-auto mb-12">
            From emergency response to final restoration, we provide complete storm recovery services.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {stormServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-light rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{service.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Process */}
      <section className="section bg-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              How Our Insurance Claim Process Works
            </h2>
            <p className="text-lg text-gray text-center mb-10">
              We&apos;ve helped hundreds of Charlotte homeowners navigate insurance claims. Here&apos;s how we make it easy:
            </p>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Free Storm Damage Inspection</h3>
                  <p className="text-gray">
                    We thoroughly inspect your roof, gutters, siding, and all exterior components. We document every bit of damage
                    with detailed photos and measurements - the same documentation adjusters need.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Claim Filing Assistance</h3>
                  <p className="text-gray">
                    We help you file your claim with complete documentation. Our detailed reports often result in faster approval
                    and better coverage. We know what insurance companies need to see.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Adjuster Meeting</h3>
                  <p className="text-gray">
                    We meet with your insurance adjuster on-site to review all damage together. Having a roofing expert present
                    ensures nothing is missed and the scope of work is accurate.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Settlement Advocacy</h3>
                  <p className="text-gray">
                    If your claim is underpaid or denied, we fight for you. We supplement claims with additional documentation
                    and work with public adjusters when needed to get fair settlements.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm flex gap-6 items-start">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">5</div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Quality Restoration</h3>
                  <p className="text-gray">
                    Once approved, we complete all repairs to pre-storm condition or better. You only pay your deductible -
                    we collect the rest directly from your insurance company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Storm Damage */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Types of Storm Damage We Repair
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-3">Hail Damage</h3>
              <p className="text-gray text-sm mb-4">
                Hail dents and bruises shingles, creating weak spots that lead to leaks. We identify all hail impacts
                and document them for insurance claims.
              </p>
              <ul className="text-sm text-gray space-y-1">
                <li>• Dented vents and flashing</li>
                <li>• Bruised/cracked shingles</li>
                <li>• Granule loss</li>
              </ul>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-3">Wind Damage</h3>
              <p className="text-gray text-sm mb-4">
                High winds lift, crack, and blow off shingles. Even partial lift can break the seal and compromise
                your roof&apos;s protection.
              </p>
              <ul className="text-sm text-gray space-y-1">
                <li>• Missing shingles</li>
                <li>• Lifted edges</li>
                <li>• Damaged ridge caps</li>
              </ul>
            </div>
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-bold text-dark mb-3">Fallen Debris</h3>
              <p className="text-gray text-sm mb-4">
                Trees and branches cause immediate visible damage. We assess structural impact and repair both
                the roof and underlying decking.
              </p>
              <ul className="text-sm text-gray space-y-1">
                <li>• Tree impact damage</li>
                <li>• Punctured roof deck</li>
                <li>• Structural repairs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Storm Restoration Throughout Charlotte Metro
          </h2>
          <p className="text-center text-gray max-w-2xl mx-auto mb-8">
            We provide storm damage restoration across Charlotte and all surrounding communities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {LOCATIONS.slice(0, 18).map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white rounded-lg p-3 text-center hover:bg-primary hover:text-white transition-colors group"
              >
                <span className="text-sm font-medium">
                  {location.city}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/locations" className="text-primary font-semibold hover:text-accent">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        faqs={stormFAQs}
        title="Storm Damage & Insurance FAQ"
        subtitle="Common questions about storm damage restoration and insurance claims in Charlotte NC"
      />

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/roofing-services" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Roofing Services</h3>
              <p className="text-gray text-sm">Complete roofing services for repair, replacement, and installation.</p>
            </Link>
            <Link href="/gutter-services" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Gutter Services</h3>
              <p className="text-gray text-sm">Storm-damaged gutters repaired or replaced with seamless systems.</p>
            </Link>
            <Link href="/siding-services" className="bg-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-dark mb-2 group-hover:text-primary">Siding Services</h3>
              <p className="text-gray text-sm">Wind and hail damaged siding repaired with expert color matching.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <DirectoryCitations pageType="service" maxLinks={3} variant="inline" title="Verified Business" />
            <p className="text-sm text-gray-500">
              Insurance Claim Specialists | Licensed & Insured | BBB A+ Rated
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Storm Damage? We're Here to Help"
        subtitle="Get a free storm damage inspection and let us handle your insurance claim. Fast response, expert restoration, zero hassle."
      />
    </>
  );
}
