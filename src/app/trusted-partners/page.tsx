import { Metadata } from 'next';
import Link from 'next/link';
import { Globe, Thermometer, Droplets, Zap, Trees, Paintbrush, HardHat, Shield, Home, Search, ExternalLink, CheckCircle, Users, Award } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import {
  BreadcrumbSchema,
  PartnerNetworkSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  SpeakableContentBlocks,
  WebPageSchema,
  FeaturedSnippetListAnswerSchema,
  FreeInspectionOfferSchema,
} from '@/components/seo/SchemaMarkup';
import { IMAGES } from '@/lib/images';
import { CTASection } from '@/components/sections/CTASection';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { PARTNERS, PARTNER_CATEGORIES, getNetworkRoofers, getLocalPartners, type Partner, type PartnerType } from '@/lib/partners';

export const metadata: Metadata = {
  title: 'Trusted Partners & Roofing Network | Home Service Professionals',
  description: 'Best Roofing Now partners with trusted roofing contractors nationwide and top-rated Charlotte home service professionals including HVAC, plumbing, electrical, and landscaping companies.',
  keywords: [
    'trusted roofers network',
    'Charlotte home service companies',
    'recommended HVAC Charlotte NC',
    'roofing network partners',
    'Charlotte home improvement referrals',
    'trusted home service professionals Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/trusted-partners`,
  },
  openGraph: {
    title: 'Trusted Partners & Roofing Network | Best Roofing Now',
  description: 'Our curated network of trusted roofing contractors and Charlotte-area home service professionals.',
  url: `${SITE_CONFIG.url}/trusted-partners`,
  type: 'website',
  },
};

const CATEGORY_ICONS: Record<PartnerType, React.ComponentType<{ className?: string }>> = {
  'roofing-network': Globe,
  'hvac': Thermometer,
  'plumbing': Droplets,
  'electrical': Zap,
  'landscaping': Trees,
  'painting': Paintbrush,
  'general-contractor': HardHat,
  'insurance': Shield,
  'real-estate': Home,
  'home-inspection': Search,
};

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-dark">{partner.name}</h3>
          <p className="text-sm text-gray-500">{partner.location}</p>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" aria-hidden="true" />
      </div>
      <p className="text-gray-600 mb-3">{partner.description}</p>
      <p className="text-sm text-primary font-medium mb-4">{partner.specialty}</p>
      <a
        href={partner.url}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
      >
        Visit {partner.name}
        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}

export default function TrustedPartnersPage() {
  const networkRoofers = getNetworkRoofers();
  const localPartners = getLocalPartners();

  const allPartnersForSchema = PARTNERS.map(p => ({
    name: p.name,
  url: p.url,
  description: p.description,
  location: p.location,
  serviceType: p.serviceType,
  }));

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Trusted Partners', url: `${SITE_CONFIG.url}/trusted-partners` },
        ]}
      />
      <PartnerNetworkSchema partners={allPartnersForSchema} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/trusted-partners`}
        pageName="Trusted Partners & Roofing Network"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <WebPageSchema
        name="Trusted Partners & Roofing Network | Best Roofing Now Charlotte NC"
        url={`${SITE_CONFIG.url}/trusted-partners`}
        description="Best Roofing Now's trusted partner network: nationwide roofing contractors for out-of-area referrals plus top-rated Charlotte home service professionals (HVAC, plumbing, electrical, landscaping, painting, solar, pest control, gutter cleaning) we recommend after 2,000+ Charlotte projects."
        primaryImage={IMAGES.hero.hero1}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Trusted Partners', url: `${SITE_CONFIG.url}/trusted-partners` },
        ]}
      />
      <FeaturedSnippetListAnswerSchema
        question="Who are Best Roofing Now's trusted home-service partners in Charlotte NC?"
        directAnswer="Best Roofing Now maintains a curated trusted-partner network for Charlotte homeowners across 8 home service categories — these are companies we've worked alongside on 2,000+ Charlotte projects and recommend without referral fee: (1) HVAC contractors for attic ventilation/insulation coordination; (2) plumbers for plumbing-stack flashing leaks; (3) electricians for solar attic fan and skylight wiring; (4) landscapers for tree-near-roof trimming and gutter-discharge drainage; (5) painters for fascia/soffit/exterior; (6) solar installers for S-5! clamp-mount systems on standing-seam metal; (7) pest control for carpenter bee/woodpecker/squirrel exclusion at soffit; (8) gutter cleaning services. Plus a nationwide network of trusted roofing contractors for out-of-area referrals when Charlotte homeowners need work outside our service area."
        items={[
          'HVAC contractors — attic ventilation/insulation coordination, ridge vent + soffit balance',
          'Plumbers — plumbing-stack flashing leaks, vent stack reseat',
          'Electricians — solar attic fan wiring, skylight electrical, ridge-mount lightning protection',
          'Landscapers — tree trim within 10 ft of roof, gutter-discharge drainage routing',
          'Painters — fascia, soffit, trim, exterior color refresh after a reroof',
          'Solar installers — S-5! non-penetrating clamp-mount on standing-seam metal preserves warranty',
          'Pest control — carpenter bee, woodpecker, squirrel exclusion at soffit and rafter tail',
          'Gutter cleaning services — twice-yearly maintenance for canopy-heavy Charlotte neighborhoods',
        ]}
        pageUrl={`${SITE_CONFIG.url}/trusted-partners`}
      />
      <FreeInspectionOfferSchema />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Trusted Partners' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-10 h-10" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Trusted Partners & Roofing Network
            </h1>
            <p className="speakable-intro text-xl text-white/90 mb-8">
              Best Roofing Now maintains a curated trusted-partner network across 8 home service
              categories — companies we've worked alongside on 2,000+ Charlotte projects and
              recommend without referral fee. Whether you need an HVAC contractor for ridge vent
              coordination, an electrician for skylight wiring, a tree service for storm-prep
              trimming, or a trusted out-of-area roofer in another state, we've personally vetted
              every partner. Charlotte service area includes Ballantyne, SouthPark, Steele Creek,
              University City, and the Lake Norman towns of Huntersville, Cornelius, Davidson, and
              Mooresville.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Recommend Section */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why We Maintain a Partner Network
            </h2>
            <p className="text-lg text-gray-600">
              Home ownership involves more than just your roof. Over the years,
  our customers have asked us to recommend HVAC companies, plumbers,
  electricians, and other tradespeople they can trust. We only refer
              companies that share our commitment to quality workmanship, honest
              pricing, and outstanding customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-lg text-dark mb-2">Personally Vetted</h3>
              <p className="text-gray-600 text-sm">
                Every partner has been reviewed for quality, reputation, and
                customer satisfaction before being added to our network.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-lg text-dark mb-2">Quality Standards</h3>
              <p className="text-gray-600 text-sm">
                We partner with companies that maintain proper licensing, insurance,
  and a track record of excellence in their trade.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-lg text-dark mb-2">Customer Focused</h3>
              <p className="text-gray-600 text-sm">
                These businesses share our values of transparency, fair pricing,
  and treating every customer like family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nationwide Roofing Network */}
      {networkRoofers.length > 0 && (
        <section className="py-16">
          <div className="container">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-primary" aria-hidden="true" />
              <h2 className="text-3xl font-bold text-primary">
                Nationwide Roofing Network
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl">
              Moving out of the Charlotte area? Need a roofer in another state?
              These are reputable roofing contractors we trust outside our
              service area. Each company has been vetted for quality,
  reputation, and customer satisfaction.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {networkRoofers.map((partner) => (
                <PartnerCard key={`${partner.name}-${partner.location}`} partner={partner} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local Home Service Partners - grouped by category */}
      {PARTNER_CATEGORIES.filter(cat => cat.type !== 'roofing-network').map((category) => {
        const partners = localPartners.filter(p => p.serviceType === category.type);
        if (partners.length === 0) return null;

        const IconComponent = CATEGORY_ICONS[category.type];

        return (
          <section key={category.type} className="py-16 border-t border-gray-100">
            <div className="container">
              <div className="flex items-center gap-3 mb-4">
                <IconComponent className="w-8 h-8 text-primary" aria-hidden="true" />
                <h2 className="text-3xl font-bold text-primary">
                  {category.label}
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                {category.description}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners.map((partner) => (
                  <PartnerCard key={`${partner.name}-${partner.location}`} partner={partner} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Where to Find Us */}
      <section className="py-16 bg-light border-t border-gray-100">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">
            Where to Find Best Roofing Now
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            We are listed on all major business directories and review platforms.
            Check out our verified profiles below.
          </p>
          <DirectoryCitations
            pageType="partners"
            maxLinks={6}
            variant="inline"
            title="Verified Profiles"
            className="justify-center"
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
