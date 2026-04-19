import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone, Award, Shield, CheckCircle, HelpCircle, Star, Home, Building2 } from 'lucide-react';
import { SITE_CONFIG, ROOFING_BRANDS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import {
  BreadcrumbSchema,
  WebPageSchema,
  CollectionPageSchema,
  FAQSchema,
  SpeakableContentBlocks,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Roofing Brands We Install | GAF, CertainTeed, Owens Corning | Charlotte NC',
  description:
    'Certified installer for GAF (Master Elite), CertainTeed (SELECT ShingleMaster), Owens Corning (Platinum), Malarkey, and Atlas in Charlotte NC. NDL warranty eligible.',
  keywords: [
    'GAF roofing Charlotte',
    'GAF Master Elite contractor',
    'CertainTeed SELECT ShingleMaster charlotte',
    'Owens Corning Platinum installer nc',
    'malarkey roofing contractor',
    'atlas roofing installer',
    'carlisle syntec commercial roofing nc',
    'johns manville commercial roofer',
    'certified roofing contractor charlotte',
    'best shingle brands',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/brands`,
  },
  openGraph: {
    title: 'Roofing Brands We Install | Best Roofing Now',
    description: 'Premium roofing products from America\'s top manufacturers. Certified installer with enhanced warranty options.',
    url: `${SITE_CONFIG.url}/brands`,
    type: 'website',
  },
};

const whatYoullFind = [
  'Full product catalog per brand (shingle lines, commercial systems, accessories)',
  'Our top-tier installer certification level (Master Elite, SELECT ShingleMaster, Platinum)',
  'Enhanced full-system warranties unlocked by our certifications',
  'Brand-specific wind, impact, and fire rating performance',
  'Warranty transferability terms on home sale',
  'Cross-links to matching product detail pages and local installer pages',
];

interface CertTier {
  icon: typeof Award;
  tier: string;
  description: string;
  exampleBrands: string;
  warrantyUnlocks: string;
}

const certTiers: CertTier[] = [
  {
    icon: Award,
    tier: 'Top-Tier Residential Certifications',
    description: 'Reserved for the top 2–3% of contractors nationally. Requires verified installations, annual training, insurance floors, and reputational review.',
    exampleBrands: 'GAF Master Elite, CertainTeed SELECT ShingleMaster, Owens Corning Platinum Preferred',
    warrantyUnlocks: 'Unlocks GAF Golden Pledge (50yr mat + 25yr labor), CertainTeed 5-Star warranty, Owens Corning Platinum Protection',
  },
  {
    icon: Shield,
    tier: 'Storm/Impact-Resistant Specialist',
    description: 'Manufacturer authorization to install and certify Class 4 impact-resistant systems for insurance premium discounts in NC.',
    exampleBrands: 'Malarkey Vista, Atlas StormMaster, GAF Armor Shield II, CertainTeed NorthGate',
    warrantyUnlocks: 'UL 2218 Class 4 impact rating documentation for 10–30% insurance premium discount with NC carriers',
  },
  {
    icon: Building2,
    tier: 'Commercial NDL Certifications',
    description: 'Authorized commercial installer status enabling manufacturer no-dollar-limit system warranties — critical for building owners positioning for refinance or sale.',
    exampleBrands: 'Carlisle SynTec, Johns Manville Peak Advantage, Firestone/Holcim UltraLoyalty, GAF Golden Pledge Commercial',
    warrantyUnlocks: '20–30 year NDL system warranties, transferable on building sale',
  },
];

const faqs = [
  { question: 'Which roofing brand is best for Charlotte NC homes?', answer: 'There is no single "best" brand — the three residential leaders (GAF, CertainTeed, Owens Corning) all produce excellent shingles for the Piedmont climate. The meaningful differences are: aesthetic preference (color palette and profile), specific product line (architectural vs designer vs Class 4 impact-resistant), and your insurance carrier&apos;s discount eligibility. We hold top-tier installer certifications with all three, so we can match the brand to your specific goal rather than pushing a single manufacturer.' },
  { question: 'Why does brand-certification status matter when choosing a roofer?', answer: 'Certifications unlock enhanced full-system warranties that cover labor for 25–50 years — far stronger than the standard manufacturer product warranty any contractor can offer. For example, a GAF Master Elite contractor (top 2% nationally) can install the Golden Pledge system: 50 years of material coverage plus 25 years of labor coverage, fully transferable once on home sale. An uncertified contractor cannot offer this regardless of the products they install. Our certifications include GAF Master Elite, CertainTeed SELECT ShingleMaster, and Owens Corning Platinum Preferred.' },
  { question: 'What is the difference between a manufacturer warranty and a system warranty?', answer: 'A standard manufacturer warranty covers only the shingle material against defects (typically 25–50 years, often pro-rated after 10 years). A system warranty covers the full roof assembly — shingles, starter strip, underlayment, ridge cap, hip and ridge — plus labor, installation errors, and sometimes the full tear-off. System warranties require certified installation and are the meaningful protection for Charlotte and Lake Norman homeowners. Examples: GAF Golden Pledge, CertainTeed 5-Star, Owens Corning Platinum Protection.' },
  { question: 'Are the premium brands worth it compared to generic shingles?', answer: 'Usually yes. Generic or value-tier shingles often carry thinner laminates, weaker adhesive, lower wind ratings (typically 110 MPH vs 130 MPH on premium architectural), and limited warranties that exclude labor. The installed-cost delta between generic and top-tier architectural is typically only $0.50–$1.50/sq ft — meaningfully less than the 10–30% insurance discount Class 4 upgrades unlock. Over a 25-year hold, premium brands deliver materially better economics.' },
  { question: 'Do you install commercial roofing brands too?', answer: 'Yes. For commercial TPO, EPDM, PVC, and modified bitumen systems we are authorized installers for Carlisle SynTec, Johns Manville Peak Advantage, Firestone/Holcim UltraLoyalty, and Mule-Hide. These authorizations unlock 20–30 year NDL (No Dollar Limit) system warranties — the strongest coverage tier in commercial roofing and valuable when positioning a building for refinance or resale. See our commercial roofing pages for system-level detail.' },
  { question: 'Is a brand warranty transferable when I sell my home?', answer: 'Yes, with conditions. Most premium full-system warranties (GAF Golden Pledge, CertainTeed 5-Star, Owens Corning Platinum) are transferable once during the warranty term if the transfer is registered with the manufacturer within 60 days of home sale. Product-only warranties are often pro-rated on transfer. For Charlotte and Lake Norman sellers, documented transferable warranties are a real marketing asset and frequently cited by home inspectors and buyer agents.' },
  { question: 'Which brands qualify for Class 4 impact-resistant insurance discounts in NC?', answer: 'Class 4 UL 2218 rated shingles available from all major brands we install: GAF Armor Shield II, CertainTeed NorthGate, Malarkey Vista, Atlas StormMaster, and Owens Corning Duration Storm. All qualify for 10–30% homeowner insurance premium discounts with State Farm, Allstate, USAA, Farm Bureau NC, and other NC carriers. We provide manufacturer certificates and installation photos for your insurance agent.' },
  { question: 'What happens if the manufacturer changes hands or discontinues a product?', answer: 'Warranty obligations follow the manufacturer, not the product. If a brand is acquired (like Firestone Building Products → Holcim in 2022), existing warranties transfer to the new parent. If a specific product line is discontinued, the warranty on already-installed product remains in force. We maintain records of manufacturer-level warranty documentation on every completed Charlotte and Lake Norman project so future claims are not dependent on our involvement.' },
];

export default function BrandsPage() {
  const pageUrl = `${SITE_CONFIG.url}/brands`;

  const items = ROOFING_BRANDS.map((b) => ({
    name: b.name,
    url: `${SITE_CONFIG.url}/brands/${b.slug}`,
    description: b.description,
  }));

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Brands We Install', url: pageUrl },
        ]}
      />
      <WebPageSchema
        name="Roofing Brands We Install | Charlotte NC"
        description="Certified installer for GAF (Master Elite), CertainTeed (SELECT ShingleMaster), Owens Corning (Platinum), Malarkey, Atlas, and commercial brands in Charlotte NC."
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Brands We Install', url: pageUrl },
        ]}
      />
      <CollectionPageSchema
        name="Roofing Brands We Install"
        description="Roofing manufacturers Best Roofing Now is certified to install in Charlotte NC and Lake Norman — residential and commercial."
        url={pageUrl}
        items={items}
      />
      <FAQSchema faqs={faqs} />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Roofing Brands We Install" />
      <VoiceSearchActionSchema />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Brands We Install' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-10 h-10" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Roofing Brands
            </h1>
            <p className="speakable-intro text-xl text-white/90 mb-8">
              Best Roofing Now is a certified installer for GAF (Master Elite — top 2% of US contractors), CertainTeed (SELECT ShingleMaster), and Owens Corning (Platinum Preferred) on the residential side, plus Carlisle SynTec, Johns Manville, Firestone/Holcim, and Mule-Hide for commercial TPO, EPDM, PVC, and modified bitumen systems. These certifications unlock enhanced NDL full-system warranties — covering labor for 25–50 years and transferable on home or building sale.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Get Brand Recommendations
            </a>
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What You&apos;ll Find on Every Brand Page</h2>
              <p className="text-gray text-lg">Six data points we cover per brand so you can compare warranty structures like-for-like.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {whatYoullFind.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-light rounded-lg p-4 border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification Tiers */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Manufacturer Certification Tiers</h2>
            <p className="text-gray text-lg">The certifications that unlock enhanced warranty coverage — residential, impact-resistant, and commercial.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certTiers.map((tier) => (
              <div key={tier.tier} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <tier.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-dark text-lg mb-2">{tier.tier}</h3>
                <p className="text-gray-700 text-sm mb-3">{tier.description}</p>
                <p className="text-xs text-gray-600 mb-2">
                  <span className="font-semibold text-dark">Brands:</span> {tier.exampleBrands}
                </p>
                <p className="text-xs text-primary font-medium">
                  {tier.warrantyUnlocks}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Residential Shingle Brands</h2>
            <p className="text-gray text-lg">Drill into any brand for full product catalog, warranty terms, and matching Charlotte installer pages.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ROOFING_BRANDS.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 border border-gray-100"
              >
                <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition">
                  {brand.name}
                </div>
                <p className="text-sm text-accent font-semibold mb-4">{brand.tagline}</p>
                <p className="text-gray mb-4">
                  {brand.description.slice(0, 120)}...
                </p>
                <div className="flex items-center gap-2 text-sm text-primary/80 mb-4">
                  <Shield className="w-4 h-4" aria-hidden="true" />
                  <span>{brand.certificationLevel}</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  View Products &amp; Warranties
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Brand Matters */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Why Roofing Brand Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="font-bold text-primary text-lg">Quality Assurance</h3>
                </div>
                <p className="text-gray text-sm">
                  Top manufacturers invest heavily in R&amp;D, testing, and quality control.
                  Their products consistently outperform generic alternatives in
                  durability, weather resistance, and longevity.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="font-bold text-primary text-lg">Warranty Protection</h3>
                </div>
                <p className="text-gray text-sm">
                  Premium brands offer comprehensive warranties that cover both
                  materials and labor. Cheap alternatives often have limited or
                  pro-rated coverage that leaves you exposed.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="font-bold text-primary text-lg">Certified Installers</h3>
                </div>
                <p className="text-gray text-sm">
                  Brand certifications require ongoing training and quality standards.
                  This means better installation practices and access to enhanced
                  warranty options not available to uncertified contractors.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Home className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="font-bold text-primary text-lg">Home Value</h3>
                </div>
                <p className="text-gray text-sm">
                  Recognized brand names add value when selling your home. Buyers
                  and inspectors recognize quality materials, and transferable
                  warranties are a selling point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Certifications */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our Manufacturer Certifications
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {ROOFING_BRANDS.map((brand) => (
                <div key={brand.slug} className="bg-light rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{brand.name}</h3>
                      <p className="text-accent font-semibold">{brand.certificationLevel}</p>
                    </div>
                    <Link
                      href={`/brands/${brand.slug}`}
                      className="btn btn-outline btn-sm"
                    >
                      Learn More
                    </Link>
                  </div>
                  <ul className="space-y-2">
                    {brand.warranties.slice(0, 2).map((warranty, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {warranty}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">Choosing a Brand</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Brand &amp; Warranty FAQs</h2>
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

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Which Brand is Right for You?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Each brand offers unique advantages. Let our experts help you choose
            the best product for your home, budget, and style preferences.
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
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
