import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import {
  CheckCircle,
  Phone,
  Calendar,
  Shield,
  Star,
  Award,
  HelpCircle,
  ArrowRight,
  FileText,
  Users,
  Palette,
  Home,
} from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
  SpeakableContentBlocks,
  WebPageSchema,
  FeaturedSnippetListAnswerSchema,
  FreeInspectionOfferSchema,
} from '@/components/seo/SchemaMarkup';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'HOA-Approved Roofing Charlotte NC',
  description:
    'HOA-approved roofing for Charlotte NC communities. Architectural review board (ARB) packet preparation, color/style matching, and approved-installer credentials. Ballantyne, SouthPark, Providence, Quail Hollow.',
  keywords: [
    'HOA approved roofing Charlotte NC',
    'HOA roof replacement Charlotte',
    'architectural review board roofing',
    'HOA shingle approval Charlotte',
    'community association roofing Charlotte NC',
    'HOA color matching shingles',
    'HOA approved roofer near me',
    'Ballantyne HOA roofing',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/hoa-approved-roofing-charlotte-nc`,
  },
  openGraph: {
    title: 'HOA-Approved Roofing Charlotte NC | Best Roofing Now',
    description:
      'HOA-approved roofing for Charlotte communities. ARB packet preparation, color/style matching, approved-installer credentials.',
    url: `${SITE_CONFIG.url}/hoa-approved-roofing-charlotte-nc`,
    type: 'website',
    images: [
      {
        url: IMAGES.hero.hero1,
        width: 1200,
        height: 630,
        alt: 'HOA approved roofing Charlotte NC',
      },
    ],
  },
};

const faqs = [
  {
    question: 'How does Best Roofing Now handle HOA approval for roofing projects in Charlotte NC?',
    answer:
      'We manage the full HOA architectural-review-board (ARB) submission process: prepare the application packet with material samples, manufacturer specs, color samples, and installer credentials; submit to your HOA management company (FirstService Residential, CAMS, AMG, RealManage, etc.); follow up on the typical 2-4 week review window; and address any ARB clarifications. You sign the install contract only after approval — no risk of locked-in pricing while waiting on review.',
  },
  {
    question: 'How long does HOA roof approval take in Charlotte communities?',
    answer:
      'Typical Charlotte HOA architectural review takes 2-4 weeks from submission. Some HOAs (Quail Hollow, The Peninsula, Trump National) take 4-6 weeks for premier estate communities with stricter color/material standards. Expedited review is sometimes possible for storm-damage emergency replacements — we coordinate with the HOA directly to expedite documentation when needed.',
  },
  {
    question: 'Which Charlotte HOA management companies do you work with?',
    answer:
      'We regularly submit ARB packets to FirstService Residential, CAMS (Community Association Management Services), AMG (Association Management Group), RealManage, William Douglas Management, and Henderson Properties. Most Ballantyne, SouthPark, Providence, Quail Hollow, Foxcroft, Eastover, Piper Glen, Steele Creek, and Lake Norman gated communities work with one of these firms.',
  },
  {
    question: 'How do you ensure exact color and style matching for HOA approval?',
    answer:
      "We bring physical shingle samples to the consultation — not just photos. For HOA-restricted color palettes, we use GAF Timberline HDZ, CertainTeed Landmark, OC TruDefinition Duration, and Tamko Heritage manufacturer color libraries that include HOA-friendly options like Charcoal Gray, Weathered Wood, Slate, Pewter, and Driftwood. We also match to your existing roof slope sample if you're replacing one section, or to neighboring homes in townhouse/condo communities where exact match is required.",
  },
  {
    question: 'What HOA-approved certifications does Best Roofing Now hold?',
    answer:
      "We hold the top-tier credential at every major manufacturer — credentials many HOAs require for warranty validity and contractor approval: GAF Master Elite (top 2% nationwide), CertainTeed SELECT ShingleMaster (top tier), and Owens Corning Platinum Preferred. Plus BBB A+ accreditation, NC General Contractor License #87344, full general liability and workers' comp insurance ($2M+), and veteran-owned status.",
  },
  {
    question: 'Do gated Charlotte HOAs require special access coordination?',
    answer:
      'Yes — and we handle this routinely. For gated communities (The Peninsula, Piper Glen, Quail Hollow, Ballantyne Country Club, Trump National, Foxcroft, Carmel Country Club, River Run), we pre-coordinate gate access with HOA security, schedule weekday work hours that respect community rules, use uniformed background-checked installers, and provide daily progress updates to property managers when required.',
  },
  {
    question: 'What if my HOA rejects the initial ARB submission?',
    answer:
      "We'll address any ARB clarification requests at no additional charge — typically alternative color samples, adjusted material specs, or supplemental installer documentation. Most rejections are minor specification clarifications that get resolved within 3-7 days of resubmission. We've had a 99%+ approval rate on Charlotte HOA submissions over the past 3 years.",
  },
  {
    question: 'Can you handle townhouse or condo associations where multiple units share a roof?',
    answer:
      'Yes. Townhouse and condo association roofing requires extra coordination: ARB approval through the master association, exact unit-match shingle and color matching to neighboring units, shared-roof flashing and party-wall transitions handled correctly, neighbor scheduling notifications, and property-management firm communication. We have completed roofing for 50+ Charlotte condo and townhouse associations.',
  },
];

export default function HoaApprovedRoofingCharlotteNCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'HOA Approved Roofing Charlotte NC', url: `${SITE_CONFIG.url}/hoa-approved-roofing-charlotte-nc` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema includeRating={true} />
      <AISearchOptimizationBundle
        pageUrl={`${SITE_CONFIG.url}/hoa-approved-roofing-charlotte-nc`}
        pageName="HOA-Approved Roofing Charlotte NC"
        city="Charlotte"
      />
      <VoiceSearchActionSchema />
      <SpeakableContentBlocks city="Charlotte" />
      <WebPageSchema
        name="HOA-Approved Roofing Charlotte NC | ARB Specialists | Best Roofing Now"
        url={`${SITE_CONFIG.url}/hoa-approved-roofing-charlotte-nc`}
        description="HOA-approved roofing for Charlotte NC communities. Architectural review board packet preparation, color and style matching, approved-installer credentials, gated-community access coordination."
        primaryImage={IMAGES.hero.hero1}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'HOA Approved Roofing Charlotte NC', url: `${SITE_CONFIG.url}/hoa-approved-roofing-charlotte-nc` },
        ]}
      />
      <FeaturedSnippetListAnswerSchema
        question="How does HOA-approved roofing work in Charlotte NC?"
        directAnswer="HOA-approved roofing in Charlotte NC follows a 7-step process: (1) free on-site inspection and material consultation with physical shingle samples; (2) ARB packet preparation including color samples, manufacturer specs, installer credentials, NC license #87344, and insurance certificates; (3) submission to your HOA management company (FirstService Residential, CAMS, AMG, RealManage, William Douglas, Henderson Properties); (4) 2-4 week typical review window (4-6 weeks for premier estate communities); (5) any ARB clarifications addressed at no charge; (6) install scheduled after written approval; (7) gated-community access coordination, uniformed background-checked installers, weekday work hours respecting community rules. We hold GAF Master Elite (top 2%), CertainTeed SELECT ShingleMaster, and OC Platinum Preferred credentials — required by many Charlotte HOAs for warranty validity."
        items={[
          'Free on-site inspection with physical shingle samples for ARB submission',
          'ARB packet preparation — color samples, specs, credentials, NC license, insurance certificates',
          'Submission to HOA management company (FirstService, CAMS, AMG, RealManage, William Douglas, Henderson)',
          '2-4 week typical review (4-6 weeks for premier estate communities)',
          'Free clarification handling — 99%+ first-pass approval rate',
          'Install scheduled only after written ARB approval',
          'Gated-community access coordination with HOA security',
          'Uniformed background-checked installers respecting community rules',
        ]}
        pageUrl={`${SITE_CONFIG.url}/hoa-approved-roofing-charlotte-nc`}
      />
      <FreeInspectionOfferSchema />

      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 hidden md:block">
          <SEOImage src={IMAGES.hero.hero1} alt="HOA approved roofing Charlotte NC" fill className="object-cover opacity-20" priority />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">ARB Specialists | 99%+ Approval Rate</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              HOA-Approved Roofing <br className="hidden md:block" />
              <span className="text-accent-light">Charlotte NC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              ARB packet preparation. Color matching. Gated-community access.
            </p>
            <p className="speakable-intro text-lg text-white/80 mb-8 max-w-2xl">
              Best Roofing Now manages the full HOA architectural-review-board (ARB) submission and
              approval process for Charlotte communities including Ballantyne, SouthPark, Providence,
              Providence Plantation, Quail Hollow, Foxcroft, Eastover, Piper Glen, The Peninsula,
              Trump National, Carmel Country Club, River Run, Steele Creek, Berewick, Rivergate, and
              the Lake Norman gated communities of Cornelius, Davidson, Huntersville, and Mooresville.
              We coordinate with FirstService Residential, CAMS, AMG, RealManage, William Douglas,
              and Henderson Properties — with a 99%+ first-pass approval rate. GAF Master Elite (top
              2%), CertainTeed SELECT ShingleMaster, OC Platinum Preferred credentialed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" aria-hidden="true" />}>
                Schedule Free Consultation
              </Button>
              <Button href={`tel:${SITE_CONFIG.phoneClean}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" icon={<Phone className="w-5 h-5" aria-hidden="true" />}>
                Call {SITE_CONFIG.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How We Manage HOA Approval</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: 'ARB Packet Prep', desc: 'Material samples, color samples, manufacturer specs, installer credentials, NC license, insurance' },
              { icon: Palette, title: 'Color Matching', desc: 'Physical samples (not photos); HOA-friendly colors from GAF/CT/OC libraries; neighbor matching for townhouses' },
              { icon: Users, title: 'HOA Coordination', desc: 'FirstService, CAMS, AMG, RealManage, William Douglas, Henderson — we know who to email' },
              { icon: Home, title: 'Gated Access', desc: 'Pre-coordinated security access; uniformed background-checked installers; weekday work respecting rules' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-light rounded-xl">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GeoProjectGalleryStrip pageType="service" city="Charlotte" slug="hoa-approved-roofing-charlotte-nc" />

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">HOA Roofing Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-light rounded-xl p-6 group">
                <summary className="flex items-start justify-between cursor-pointer font-semibold text-primary">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                    {faq.question}
                  </span>
                  <ArrowRight className="w-5 h-5 mt-0.5 flex-shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-gray pl-8">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CityGeoSection city="Charlotte" state="NC" citySlug="charlotte-nc" service="hoa-approved-roofing" />

      <CTASection title="Need HOA-Approved Roofing in Charlotte?" subtitle="We handle the ARB packet, the color matching, and the gated-community access. You get an approved roof — not a paperwork headache." />
    </>
  );
}
