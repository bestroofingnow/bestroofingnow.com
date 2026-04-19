import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import Link from 'next/link';
import {
  Home,
  Building2,
  Wrench,
  RefreshCw,
  Search,
  AlertTriangle,
  CloudRain,
  Droplets,
  Layers,
  Settings,
  Sun,
  Wind,
  Flame,
  PanelTop,
  Square,
  ArrowRight,
  FileText,
  Shield,
  CheckCircle,
  HelpCircle,
  Clock,
  Calendar,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  WebPageSchema,
  CollectionPageSchema,
  FAQSchema,
  SpeakableContentBlocks,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SITE_CONFIG, SERVICES } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Roofing Services Charlotte NC | Residential, Commercial, Emergency',
  description:
    'Full-service roofing, gutter, and siding services in Charlotte NC and Lake Norman. Residential and commercial, 24/7 emergency, insurance claims, maintenance programs.',
  keywords: [
    'roofing services charlotte nc',
    'roofing services near me',
    'full service roofing company charlotte',
    'complete roofing solutions charlotte nc',
    'roof repair services charlotte',
    'residential roofing services charlotte',
    'commercial roofing services charlotte',
    'roofing maintenance services charlotte nc',
    'emergency roofing charlotte',
    'lake norman roofing services',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
  openGraph: {
    title: 'Roofing Services Charlotte NC | Best Roofing Now',
    description: 'Full range of roofing, gutter, and siding services for Charlotte NC and Lake Norman — residential, commercial, emergency, and maintenance.',
    url: `${SITE_CONFIG.url}/services`,
    type: 'website',
    images: [{ url: IMAGES.hero.roofTeam, width: 1200, height: 630, alt: 'Best Roofing Now roofing services in Charlotte NC' }],
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Wrench,
  RefreshCw,
  Search,
  AlertTriangle,
  CloudRain,
  Droplets,
  Layers,
  Settings,
  Sun,
  Wind,
  Flame,
  PanelTop,
  Square,
  FileText,
  Shield,
};

// Service categories for organized display
const serviceCategories = [
  {
    name: 'Core Roofing Services',
    description: 'Our primary roofing services for residential and commercial properties',
    slugs: ['residential-roofing', 'commercial-roofing', 'roof-repair', 'roof-replacement', 'roof-inspection', 'emergency-roofing', 'metal-roofing'],
  },
  {
    name: 'Storm Damage & Insurance',
    description: 'Expert storm damage assessment, insurance claim assistance, and building restoration',
    slugs: ['storm-damage', 'insurance-claims', 'building-restoration'],
  },
  {
    name: 'Maintenance Programs',
    description: 'Preventive maintenance to extend your roof life and protect your investment',
    slugs: ['residential-roof-maintenance', 'commercial-roof-maintenance'],
  },
  {
    name: 'Gutter Services',
    description: 'Complete gutter solutions including installation, repair, cleaning, and protection',
    slugs: ['gutters', 'gutter-installation', 'gutter-repair', 'gutter-cleaning', 'gutter-guards'],
  },
  {
    name: 'Siding Services',
    description: 'Professional siding installation, repair, and exterior protection',
    slugs: ['siding', 'siding-installation', 'siding-repair', 'soffit-fascia'],
  },
  {
    name: 'Specialty Services',
    description: 'Specialized roofing services including skylights, ventilation, and chimney work',
    slugs: ['skylight-installation', 'roof-ventilation', 'chimney-services', 'flat-roof-repair'],
  },
];

const whatYoullFind = [
  'Residential and commercial coverage across every service category',
  '24/7 emergency dispatch (tarping, active-leak stabilization, storm response)',
  'Manufacturer-certified installation (GAF Master Elite, CertainTeed SELECT, OC Platinum)',
  'Insurance claim documentation support with every storm-damage job',
  'Preventive maintenance programs for residential and commercial properties',
  'Free, no-obligation inspections on every project type',
];

interface UrgencyBucket {
  icon: typeof AlertTriangle;
  title: string;
  responseTime: string;
  typicalServices: string;
  startHere: string;
}

const urgencyGuide: UrgencyBucket[] = [
  {
    icon: AlertTriangle,
    title: 'Emergency (Active leak, storm damage, fallen tree)',
    responseTime: 'Same-day to 4 hours — 24/7 dispatch',
    typicalServices: 'Emergency tarping, active-leak repair, storm damage triage, fallen-tree removal coordination',
    startHere: '/services/emergency-roofing',
  },
  {
    icon: Calendar,
    title: 'Scheduled Project (Replacement, install, major repair)',
    responseTime: '3–6 weeks lead time peak season, 1–2 weeks off-season',
    typicalServices: 'Roof replacement, new construction, commercial flat systems, gutter installation, siding, skylight install',
    startHere: '/services/roof-replacement',
  },
  {
    icon: Clock,
    title: 'Preventive Maintenance (Recurring program)',
    responseTime: '2x per year scheduled visits',
    typicalServices: 'Residential and commercial PM programs, seasonal inspections, gutter cleaning, minor flashing and sealant refresh',
    startHere: '/services/residential-roof-maintenance',
  },
  {
    icon: FileText,
    title: 'Insurance Claim (Hail, wind, tropical remnant damage)',
    responseTime: 'Free inspection within 24–48 hours; Xactimate estimate within 3–5 business days',
    typicalServices: 'Damage documentation, adjuster meetings, Xactimate-compatible estimates, RCV/ACV policy review',
    startHere: '/services/insurance-claims',
  },
];

const faqs = [
  { question: 'What areas does Best Roofing Now serve?', answer: 'We serve 45+ cities across 12 counties in NC and SC — Mecklenburg (Charlotte, Huntersville, Cornelius, Davidson, Matthews, Mint Hill, Pineville), Cabarrus (Concord, Kannapolis, Harrisburg), Union (Monroe, Indian Trail, Waxhaw, Stallings, Weddington), Gaston, Iredell (Mooresville, Statesville), Lincoln (Denver, Lincolnton), Catawba, Rowan, Cleveland, Stanly in NC, plus York SC (Rock Hill, Fort Mill, Tega Cay) and Lancaster SC (Indian Land). Our Charlotte and Denver NC headquarters put crews within 30 minutes of every city. See /locations for the full list.' },
  { question: 'How fast can you respond to an emergency roofing call?', answer: 'For Mecklenburg County and the immediate Charlotte metro, typical emergency tarping response is under 3 hours. For Lake Norman, Cabarrus, Union, and eastern Gaston counties: 3–6 hours. For outer service areas (Statesville, Hickory, Salisbury, Shelby, Lancaster SC): same-day or next-morning. Emergency dispatch runs 24/7/365 from our Charlotte and Denver NC HQs — call (704) 605-6047.' },
  { question: 'Do you charge for roof inspections?', answer: 'No. Roof inspections are free for every residential and commercial property in our service area — whether you are considering repair, replacement, storm damage assessment, pre-purchase inspection for a home sale, or insurance claim documentation. We provide photo-documented inspection reports with a line-item estimate. There is no obligation to proceed with work after the inspection.' },
  { question: 'Can you bundle multiple services (roof + gutters + siding) in one project?', answer: 'Yes — and it is usually the most cost-effective approach. Bundling tear-off and install of roofing, gutters, soffit, fascia, and siding in a single project reduces setup costs, crew mobilization time, and material delivery fees. We routinely complete full exterior refreshes (roof + gutters + siding + trim) for Charlotte and Lake Norman homeowners in 5–10 business days. Ask for a bundled estimate to compare vs sequencing projects separately.' },
  { question: 'Do you service residential and commercial properties?', answer: 'Yes, both. Residential: full range from repairs through full replacements across all material types (asphalt, metal, tile, slate, cedar shake, synthetic). Commercial: TPO, EPDM, PVC, modified bitumen single-ply and multi-ply systems, standing seam metal, roof coatings, and NDL manufacturer-certified installs for Carlisle SynTec, Johns Manville, Firestone/Holcim, and Mule-Hide. Our commercial team works on retail, medical, industrial, HOA clubhouses, schools, churches, and municipal buildings.' },
  { question: 'How do I know what service I actually need?', answer: 'Start with a free inspection — we will diagnose the issue and recommend the minimum scope that actually solves it, not the maximum scope we could sell. Common findings: what looked like "need replacement" was really a $600 flashing repair; what looked like "minor leak" was widespread underlayment failure requiring full replacement. Our estimators photograph every issue and provide a line-item estimate so you can see exactly what we found and what we propose.' },
  { question: 'What certifications does Best Roofing Now hold?', answer: 'Residential shingle: GAF Master Elite (top 2% of US contractors), CertainTeed SELECT ShingleMaster, Owens Corning Platinum Preferred. Commercial: authorized installer for Carlisle SynTec, Johns Manville Peak Advantage, Firestone/Holcim UltraLoyalty, and Mule-Hide. Licensing: NC General Contractor, SC General Contractor, fully insured with $2M general liability. Accreditations: BBB A+, veteran-owned, 5.0 Google rating across 500+ reviews.' },
  { question: 'Do you provide insurance claim assistance for storm damage?', answer: 'Yes, on every storm damage job. Our services include: photo documentation of all damage with geo-tagged photos, Xactimate-compatible written estimates, adjuster meeting on-site for claim defense, RCV vs ACV policy review, engineering reports when hail-density sampling is disputed, and supplemental claim filing for items missed on initial adjustment. We work with State Farm, Allstate, Nationwide, USAA, Farm Bureau NC, Erie, Liberty Mutual, Travelers, and most other NC carriers.' },
];

export default function ServicesPage() {
  const pageUrl = `${SITE_CONFIG.url}/services`;

  const items = SERVICES.map((s) => ({
    name: s.title,
    url: `${SITE_CONFIG.url}/services/${s.slug}`,
    description: s.description,
  }));

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Services', url: pageUrl },
        ]}
      />
      <WebPageSchema
        name="Roofing Services Charlotte NC | Best Roofing Now"
        description="Full-service roofing, gutter, and siding services in Charlotte NC and Lake Norman. Residential and commercial, 24/7 emergency, insurance claims, maintenance programs."
        url={pageUrl}
        primaryImage={IMAGES.hero.roofTeam}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Services', url: pageUrl },
        ]}
      />
      <CollectionPageSchema
        name="Roofing Services"
        description="Full catalog of roofing, gutter, and siding services offered by Best Roofing Now across Charlotte NC and Lake Norman."
        url={pageUrl}
        items={items}
      />
      <FAQSchema faqs={faqs} />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Roofing Services" />
      <VoiceSearchActionSchema />

      {/* Visual Breadcrumbs */}
      <div className="bg-light border-b border-gray-200">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: 'Services', href: '/services' },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SEOImage
            src={IMAGES.hero.roofTeam}
            alt="Best Roofing Now team working on a roof"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Roofing Contractor Services in Charlotte, NC
            </h1>
            <p className="speakable-intro text-xl text-white/90">
              Best Roofing Now delivers a full range of roofing, gutter, and siding services across Charlotte NC and Lake Norman — residential and commercial, 24/7 emergency response, manufacturer-certified installation (GAF Master Elite, CertainTeed SELECT ShingleMaster, Owens Corning Platinum Preferred), and comprehensive insurance claim support. 500+ roofs installed, 5-star rated, BBB A+ accredited, veteran-owned.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="btn btn-accent text-lg">
                Call {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="btn bg-white/10 text-white border border-white/30 hover:bg-white/20 text-lg">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Best Roofing Now delivers a full range of roofing, gutter, and siding services across the Charlotte metropolitan area. Whether your home needs a minor leak repair or a complete roof-to-gutter system replacement, our veteran-owned crew handles every phase of the job — from initial inspection through final cleanup. We hold certifications from GAF, CertainTeed, and Owens Corning, which means our installations qualify for manufacturer-backed warranty coverage that generic contractors cannot offer.
              </p>
              <p>
                Our service catalog covers residential shingle and metal roofing, flat and low-slope commercial systems (TPO, EPDM, PVC), storm-damage restoration with full insurance-claim support, preventive maintenance programs, seamless gutter installation, and exterior siding work including soffit and fascia. Every project starts with a free, no-obligation inspection so you know exactly what your property needs before any work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Services Cover</h2>
              <p className="text-gray text-lg">Six capabilities that run across every service category.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {whatYoullFind.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Decision Guide */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Start Here by Urgency</h2>
            <p className="text-gray text-lg">Four decision buckets based on how fast you need service — pick yours and we&apos;ll route you to the right starting page.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {urgencyGuide.map((bucket) => (
              <Link
                key={bucket.title}
                href={bucket.startHere}
                className="bg-light rounded-xl p-6 border border-gray-100 hover:shadow-lg transition group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <bucket.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-dark text-base">{bucket.title}</h3>
                </div>
                <p className="text-xs text-primary font-semibold mb-2">
                  Response: {bucket.responseTime}
                </p>
                <p className="text-gray-700 text-sm mb-3">
                  {bucket.typicalServices}
                </p>
                <p className="text-primary font-medium text-sm group-hover:text-accent">
                  Start here →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categorized Services */}
      {serviceCategories.map((category) => {
        const categoryServices = category.slugs
          .map((slug) => SERVICES.find((s) => s.slug === slug))
          .filter(Boolean);

        if (categoryServices.length === 0) return null;

        return (
          <section key={category.name} className="section bg-light odd:bg-white">
            <div className="container">
              <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
                  {category.name}
                </h2>
                <p className="text-gray text-base md:text-lg">{category.description}</p>
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 ${categoryServices.length > 2 ? 'lg:grid-cols-3' : ''} gap-4 md:gap-6`}>
                {categoryServices.map((service) => {
                  if (!service) return null;
                  const Icon = iconMap[service.icon] || Home;

                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full"
                    >
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base md:text-lg font-bold text-dark mb-1 md:mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray text-sm mb-3 md:mb-4 line-clamp-2">{service.description}</p>
                          <div className="flex items-center text-primary font-medium text-sm group-hover:text-accent transition-colors">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* FAQs */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Services &amp; Coverage</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Roofing Services FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-dark mb-2">{faq.question}</h3>
                  <p className="text-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
