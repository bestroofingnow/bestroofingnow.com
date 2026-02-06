import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, CheckCircle, Award, Shield, ArrowRight, Star } from 'lucide-react';
import { SITE_CONFIG, ROOFING_BRANDS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { BreadcrumbSchema, WebPageSchema } from '@/components/seo/SchemaMarkup';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

interface BrandPageProps {
  params: Promise<{ slug: string }>;
}

// Canonical URL mappings for brand slugs that have competing static keyword pages
const brandCanonicals: Record<string, string> = {
  'gaf': '/gaf-roofing-charlotte-nc',
  'certainteed': '/certainteed-shingles-charlotte-nc',
  'owens-corning': '/owens-corning-roofing-charlotte-nc',
};

export async function generateStaticParams() {
  return ROOFING_BRANDS.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = ROOFING_BRANDS.find((b) => b.slug === slug);

  if (!brand) {
    return { title: 'Brand Not Found' };
  }

  const ogImage = 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png';

  return {
    title: `${brand.fullName} | Certified Charlotte`,
    description: `${brand.description} As a ${brand.certificationLevel}, we offer enhanced warranty options on ${brand.name} products.`,
    keywords: brand.keywords,
    alternates: {
      canonical: brandCanonicals[slug]
        ? `${SITE_CONFIG.url}${brandCanonicals[slug]}`
        : `${SITE_CONFIG.url}/brands/${slug}`,
    },
    openGraph: {
      title: `${brand.fullName} | Best Roofing Now Charlotte`,
      description: brand.description,
      url: `${SITE_CONFIG.url}/brands/${slug}`,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${brand.fullName} certified installer in Charlotte NC - Best Roofing Now`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${brand.fullName} | Best Roofing Now Charlotte`,
      description: brand.description,
      images: [ogImage],
    },
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = ROOFING_BRANDS.find((b) => b.slug === slug);

  if (!brand) {
    notFound();
  }

  const otherBrands = ROOFING_BRANDS.filter((b) => b.slug !== slug);

  const pageUrl = `${SITE_CONFIG.url}/brands/${slug}`;

  // Brand-specific differentiators for richer content
  const brandReasons: Record<string, { reasons: string[]; overview: string }> = {
    gaf: {
      overview: 'GAF manufactures roughly one out of every four shingles installed in the United States. Their Timberline HDZ — America\'s best-selling shingle — uses patented LayerLock technology that creates a mechanical bond between layers, improving wind resistance up to 130 MPH. Charlotte homeowners benefit from GAF\'s StainGuard Plus algae-protection warranty, which is especially valuable in our humid, Southern climate.',
      reasons: [
        'Timberline HDZ is the #1 selling shingle in North America for over 20 consecutive years',
        'LayerLock technology provides a mechanical nail-seal bond for 130 MPH wind resistance',
        'StainGuard Plus algae-protection warranty — critical for Charlotte\'s humid climate',
        'Golden Pledge warranty includes 25-year workmanship coverage when installed by a certified contractor',
        'Full roofing system accessories (underlayment, ridge vents, starter strips) for total protection',
      ],
    },
    certainteed: {
      overview: 'CertainTeed has manufactured building materials in the U.S. since 1904, and their Landmark series architectural shingles consistently rank among the industry\'s most durable and aesthetically versatile options. As a ShingleMaster, Best Roofing Now qualifies for CertainTeed\'s highest warranty tier — the 5-Star SureStart PLUS coverage that includes material and workmanship protection.',
      reasons: [
        'Over 120 years of manufacturing experience in the U.S.',
        'Landmark PRO shingles offer a Class 4 impact-resistance option for hail-prone areas',
        'NaturalWood color palette designed to complement Southern architecture styles',
        'Presidential Shake line delivers authentic cedar-shake appearance without wood maintenance',
        '5-Star SureStart PLUS warranty available exclusively through ShingleMaster contractors',
      ],
    },
    'owens-corning': {
      overview: 'Owens Corning is a Fortune 500 company whose patented SureNail Technology sets their shingles apart in high-wind regions like the Carolinas. The SureNail strip provides a visible nailing target and a triple-layer reinforcement zone, which independent testing shows outperforms standard shingles in blow-off resistance. Their Duration series is engineered for long-term color accuracy even under intense UV exposure.',
      reasons: [
        'Patented SureNail Technology delivers 130 MPH wind-resistance rating with only 4 nails',
        'TruDefinition color granules resist UV fading — ideal for Charlotte\'s 215+ sunny days per year',
        'Duration FLEX shingles bend without cracking, perfect for complex roof shapes and dormers',
        'Platinum Protection warranty includes lifetime workmanship coverage from preferred contractors',
        'ENERGY STAR-rated Cool Roof shingles available to reduce summer cooling costs',
      ],
    },
    iko: {
      overview: 'IKO is a global manufacturer with over 70 years of experience and plants across North America and Europe. Their Dynasty line features ArmourZone technology — a reinforced nailing strip that improves wind-uplift resistance and simplifies proper nail placement. For Charlotte homeowners looking for premium performance at a competitive price point, IKO delivers strong value.',
      reasons: [
        'ArmourZone reinforced nailing area improves fastener hold and installation accuracy',
        'Dynasty shingles rated for 130 MPH winds with only 4 nails per shingle',
        'Nordic line offers extra-large 7.4-inch exposure for dramatic curb appeal',
        'Iron Clad warranty includes 15-year workmanship coverage from certified contractors',
        'Competitive pricing makes premium architectural shingles accessible for more budgets',
      ],
    },
    tamko: {
      overview: 'TAMKO is a family-owned American manufacturer that has been producing roofing products since 1944. Their Titan XT heavyweight shingle was designed specifically for extreme weather regions, making it a strong choice for the Charlotte area where summer storms and occasional hail are common. TAMKO also offers one of the broadest 3-tab selections on the market for budget-conscious projects.',
      reasons: [
        'Family-owned for 80+ years — company values align with Best Roofing Now\'s family-run approach',
        'Titan XT heavyweight shingle provides extra thickness for severe-weather protection',
        'Heritage series architectural shingles deliver reliable performance at competitive prices',
        'Algae Guard protection prevents black streaking in Charlotte\'s hot, humid summers',
        'Broad product range from economy 3-tab to premium architectural for any budget',
      ],
    },
  };

  const brandContent = brandReasons[slug] || {
    overview: `${brand.name} is a trusted name in the roofing industry, and as a ${brand.certificationLevel}, Best Roofing Now can offer enhanced warranty options on every ${brand.name} installation.`,
    reasons: [
      'Industry-leading research and development',
      'Rigorous quality control and testing',
      'Wide range of colors and styles',
      'Strong warranty protection',
      `Proven performance in Charlotte's climate`,
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name={`${brand.fullName} | Certified Installer Charlotte NC`}
        description={brand.description}
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Brands', url: `${SITE_CONFIG.url}/brands` },
          { name: brand.name, url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Brands', url: `${SITE_CONFIG.url}/brands` },
          { name: brand.name, url: pageUrl },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Brands', href: '/brands' },
              { label: brand.name },
            ]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-10 h-10" aria-hidden="true" />
              <span className="bg-accent/20 px-3 py-1 rounded-full text-sm font-semibold">
                {brand.certificationLevel}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {brand.fullName}
            </h1>
            <p className="text-xl text-accent font-semibold mb-4">{brand.tagline}</p>
            <p className="text-xl text-white/90 mb-8">
              {brand.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="btn bg-accent hover:bg-accent-dark text-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Get {brand.name} Quote
              </a>
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-light"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {brand.name} Products We Install
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {brand.products.map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-primary">{product.name}</h3>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <p className="text-gray mb-3">{product.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-green-500" aria-hidden="true" />
                  <span className="font-semibold text-green-700">{product.warranty} Warranty</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Options */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            {brand.name} Warranty Options
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray text-center mb-8">
              As a {brand.certificationLevel}, we can offer enhanced warranty
              options not available from uncertified contractors.
            </p>

            <div className="space-y-4">
              {brand.warranties.map((warranty, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark">{warranty}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/warranty" className="btn btn-outline">
                Learn More About Warranties
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Brand */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Why Choose {brand.name}?
            </h2>

            <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
              {brandContent.overview}
            </p>

            <div className="bg-primary/5 rounded-xl p-8">
              <ul className="space-y-4">
                {brandContent.reasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-dark">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Brands */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Other Brands We Install
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {otherBrands.map((b) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="card hover:shadow-xl transition group"
              >
                <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition">
                  {b.name}
                </h3>
                <p className="text-accent text-sm font-semibold mb-2">{b.tagline}</p>
                <p className="text-gray text-sm mb-4">{b.description.slice(0, 80)}...</p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Strip */}
      <GeoProjectGalleryStrip pageType="other" city="Charlotte" slug={slug} />

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roofing"
      />

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a {brand.name} Roof?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free quote for {brand.name} installation with our certified team.
            We&apos;ll help you choose the perfect product for your home.
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
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <DirectoryCitations pageType="brands" maxLinks={3} variant="inline" title="Certified Contractor" />
          </div>
        </div>
      </section>
    </>
  );
}
