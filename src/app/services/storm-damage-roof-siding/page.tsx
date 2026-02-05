import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, ArrowRight, AlertTriangle, CloudRain, Shield, FileText, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { ServiceSchema, BreadcrumbSchema, FAQSchema, WebPageSchema } from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { EstimateButton } from '@/components/estimate';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

export const metadata: Metadata = {
  title: 'Storm Damage Roof and Siding Repair Charlotte NC | Insurance Claim Experts',
  description: 'Storm damage to your roof and siding? We handle complete restoration and insurance claims in Charlotte NC. 24/7 emergency service. Free inspection. Call (704) 605-6047.',
  keywords: [
    'storm damage roof and siding Charlotte NC',
    'hail damage roof siding repair Charlotte',
    'wind damage roofing siding Charlotte',
    'storm damage restoration Charlotte NC',
    'insurance claim roofer siding Charlotte',
    'roof siding storm repair near me',
    'exterior storm damage Charlotte',
    'hail damage contractor Charlotte NC',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/storm-damage-roof-siding`,
  },
  openGraph: {
    title: 'Storm Damage Roof & Siding Repair Charlotte NC | Insurance Experts',
    description: 'Complete storm damage restoration for your roof and siding. We handle the insurance process from start to finish.',
    url: `${SITE_CONFIG.url}/services/storm-damage-roof-siding`,
    type: 'website',
    images: [
      {
        url: IMAGES.projects.stormDamage1,
        width: 1200,
        height: 630,
        alt: 'Storm damage roof and siding repair Charlotte NC',
      },
    ],
  },
};

const stormFAQs = [
  {
    question: 'Should I file one insurance claim for both roof and siding damage?',
    answer: 'Yes, typically you should file a single comprehensive claim covering all storm damage. This ensures your deductible only applies once, and the adjuster can assess everything together. We document all roof and siding damage in one thorough inspection report, making the claims process smoother.',
  },
  {
    question: 'How do I know if my roof and siding have storm damage?',
    answer: 'Roof damage signs: missing/damaged shingles, granules in gutters, dents in metal components, exposed underlayment. Siding damage signs: cracks, holes, dents (hail), loose or missing panels, water stains. Much storm damage isn\'t visible from the ground—our free inspection documents damage you might miss.',
  },
  {
    question: 'Will my insurance cover both roof and siding damage from a storm?',
    answer: 'Most homeowner policies cover storm damage to both roof and siding from the same weather event. We help you maximize your claim by documenting all damage thoroughly. Our experience with Charlotte insurance adjusters ensures nothing gets overlooked.',
  },
  {
    question: 'How long do I have to file a storm damage claim in Charlotte?',
    answer: 'Most insurance policies allow 1-2 years to file, but we strongly recommend filing within 30 days of the storm. Quick action prevents further damage and strengthens your claim with fresh evidence. Charlotte sees multiple severe storms yearly—document damage promptly.',
  },
  {
    question: 'Do you meet with insurance adjusters for roof and siding claims?',
    answer: 'Absolutely! Meeting with adjusters is a key part of our storm damage service. We walk them through all documented damage on both roof and siding, ensure nothing is missed, and advocate for fair assessment. This often results in better settlements for Charlotte homeowners.',
  },
  {
    question: 'What if my insurance only approves roof repair but not siding?',
    answer: 'We help you appeal partial approvals with additional documentation. Sometimes damage isn\'t initially apparent, or certain siding types show damage differently than adjusters expect. Our detailed photos and reports often help overturn these partial denials.',
  },
  {
    question: 'How much does storm damage repair for roof and siding cost?',
    answer: 'Costs vary widely based on damage extent. Minor repairs might run $1,000-$5,000, while full replacement of both can reach $30,000-$50,000+ for larger homes. For storm damage, you typically only pay your deductible—insurance covers the rest. We provide free damage assessments.',
  },
  {
    question: 'Can you match my existing siding color after storm damage?',
    answer: 'We work hard to match existing siding colors. For partial siding damage, we source matching materials from major manufacturers. If exact matches aren\'t available (discontinued colors), insurance typically covers replacement of entire affected sections for a uniform appearance.',
  },
];

const stormServices = [
  {
    icon: CloudRain,
    title: 'Emergency Tarping',
    description: 'Immediate protection to prevent further damage. Available 24/7 for active storm events.',
  },
  {
    icon: FileText,
    title: 'Damage Documentation',
    description: 'Thorough photo documentation and detailed reports ready for your insurance claim.',
  },
  {
    icon: Shield,
    title: 'Insurance Advocacy',
    description: 'We meet with adjusters, file supplements, and fight for fair claim settlements.',
  },
  {
    icon: Clock,
    title: 'Complete Restoration',
    description: 'Professional roof and siding restoration to pre-storm condition or better.',
  },
];

export default function StormDamageRoofSidingPage() {
  const pageUrl = `${SITE_CONFIG.url}/services/storm-damage-roof-siding`;

  // Create a combined service object for schema
  const combinedService = {
    slug: 'storm-damage-roof-siding',
    title: 'Storm Damage Roof & Siding Repair',
    shortTitle: 'Storm Damage',
    description: 'Complete storm damage restoration for roof and siding in Charlotte NC. Expert insurance claim assistance included.',
    keywords: ['storm damage roof siding', 'hail damage Charlotte NC'],
    icon: 'CloudRain',
  };

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name="Storm Damage Roof and Siding Repair Charlotte NC | Best Roofing Now"
        description="Complete storm damage restoration for roof and siding with expert insurance claim assistance."
        url={pageUrl}
        primaryImage={IMAGES.projects.stormDamage1}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Services', url: `${SITE_CONFIG.url}/services` },
          { name: 'Storm Damage Roof & Siding', url: pageUrl },
        ]}
      />
      <ServiceSchema service={combinedService} />
      <FAQSchema faqs={stormFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Services', url: `${SITE_CONFIG.url}/services` },
          { name: 'Storm Damage Roof & Siding', url: pageUrl },
        ]}
      />

      {/* Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Services', href: '/services' },
              { name: 'Storm Damage Roof & Siding', href: '/services/storm-damage-roof-siding' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.projects.stormDamage1}
            alt="Storm damage roof and siding repair Charlotte NC"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <AlertTriangle className="w-4 h-4" />
              24/7 Emergency Service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Storm Damage Roof & Siding Repair in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Hail, wind, or fallen trees damaged your roof and siding? We handle complete restoration and work directly with your insurance company—one contractor, one claim, one solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phoneClean}`}
                variant="primary"
                className="bg-accent hover:bg-accent-dark"
                icon={<Phone className="w-5 h-5" />}
              >
                Emergency: {SITE_CONFIG.phone}
              </Button>
              <EstimateButton
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Free Storm Damage Inspection
              </EstimateButton>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="bg-accent text-white py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 flex-shrink-0" />
              <span className="font-semibold">Recent storm in your area?</span>
              <span className="hidden sm:inline">Don't wait—document damage now before it worsens.</span>
            </div>
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-accent">
              Schedule Free Inspection
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Complete Storm Damage Restoration
            </h2>
            <p className="text-gray text-lg">
              From emergency response to final restoration, we handle your entire storm damage project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stormServices.map((service, index) => (
              <div key={index} className="bg-light rounded-xl p-6">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-dark mb-2">{service.title}</h3>
                <p className="text-gray text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storm Damage Types */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Types of Storm Damage We Repair
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Hail Damage</h3>
              <p className="text-gray mb-4">
                Charlotte experiences significant hail events. Hail can dent metal roofing, crack shingles, damage siding, and compromise your exterior's weather protection.
              </p>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Shingle bruising and granule loss
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Vinyl and fiber cement siding cracks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Gutter and downspout denting
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Wind Damage</h3>
              <p className="text-gray mb-4">
                Severe thunderstorms and occasional hurricanes bring damaging winds to Charlotte. High winds can lift shingles, tear siding, and expose your home to water intrusion.
              </p>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Lifted or missing shingles
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Blown-off siding panels
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Fascia and soffit damage
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark mb-4">Fallen Tree/Debris Damage</h3>
              <p className="text-gray mb-4">
                Charlotte's mature trees can become hazards during storms. Fallen branches and trees cause catastrophic damage requiring immediate response.
              </p>
              <ul className="space-y-2 text-sm text-gray">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Emergency tarping and board-up
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Structural damage assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Complete roof and siding restoration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Process */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                We Handle Your Insurance Claim
              </h2>
              <p className="text-gray mb-6">
                Filing storm damage claims for both roof and siding can be overwhelming. Our team manages the entire process, ensuring you get fair compensation for all damage.
              </p>
              <ol className="space-y-6">
                {[
                  { step: 1, title: 'Free Damage Inspection', desc: 'We thoroughly document all roof and siding damage with photos and detailed reports.' },
                  { step: 2, title: 'Claim Filing Assistance', desc: 'We help you file your claim with complete documentation for maximum coverage.' },
                  { step: 3, title: 'Adjuster Meeting', desc: 'We meet with your insurance adjuster to walk through all damage and advocate for you.' },
                  { step: 4, title: 'Supplement Support', desc: 'If additional damage is found or items are missed, we file supplemental claims.' },
                  { step: 5, title: 'Quality Restoration', desc: 'Once approved, we restore your roof and siding to pre-storm condition or better.' },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">{item.title}</h4>
                      <p className="text-gray text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-light rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-6">What We Document for Your Claim</h3>
              <ul className="space-y-4">
                {[
                  'Date-stamped photos of all roof damage',
                  'Detailed photos of siding impact points',
                  'Measurements of affected areas',
                  'Material identification and specifications',
                  'Written damage assessment report',
                  'Repair/replacement cost estimates',
                  'Evidence supporting storm causation',
                  'Supplemental documentation if needed',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-gray">
                  <strong className="text-primary">Important:</strong> Our thorough documentation often results in higher claim approvals. We've helped Charlotte homeowners secure proper settlements when initial claims were underpaid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Related Storm Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/storm-damage" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group">
              <CloudRain className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark group-hover:text-primary">Storm Damage</h3>
              <p className="text-gray text-sm mt-2">Roof-focused storm damage repair and insurance claims.</p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link href="/services/emergency-roofing" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group">
              <AlertTriangle className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark group-hover:text-primary">Emergency Roofing</h3>
              <p className="text-gray text-sm mt-2">24/7 emergency response for active leaks and damage.</p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link href="/services/insurance-claims" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group">
              <FileText className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark group-hover:text-primary">Insurance Claims</h3>
              <p className="text-gray text-sm mt-2">Expert assistance with all storm damage claims.</p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
            <Link href="/services/building-restoration" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all group">
              <Shield className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-bold text-dark group-hover:text-primary">Building Restoration</h3>
              <p className="text-gray text-sm mt-2">Complete exterior restoration for major damage.</p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={stormFAQs}
        title="Storm Damage Roof & Siding FAQ"
        subtitle="Common questions about storm damage restoration in Charlotte"
      />

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="storm-damage-roof-siding" />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Storm Damage Repair"
      />

      {/* CTA */}
      <CTASection
        title="Storm Damage? We're Here to Help"
        subtitle="Free inspection, honest assessment, and complete insurance claim support. Call now for immediate assistance."
      />
    </>
  );
}
