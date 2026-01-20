import { Metadata } from 'next';
import Image from 'next/image';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { ServiceAreas } from '@/components/sections/ServiceAreas';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import {
  FAQSchema,
  BreadcrumbSchema,
  HomePageAEOSchemas,
  SpeakableContent,
  WebPageSchema,
  HeroImageSchema,
  GallerySchema,
} from '@/components/seo/SchemaMarkup';
import { DirectoryCitations, TrustBadges } from '@/components/ui/DirectoryCitations';
import { SITE_CONFIG, HOMEPAGE_FAQ } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: "Best Roofing Now | Top-Rated Roofing Company Charlotte NC | BBB A+",
  description: 'Best Roofing Now is Charlotte\'s top-rated roofing contractor. 5-star Google rating, 500+ roofs installed, veteran-owned. Free inspections, storm damage experts. Call (704) 605-6047.',
  keywords: [
    'Best Roofing Now',
    'roofing company Charlotte NC',
    'roofers near me',
    'roofing contractor near me',
    'roof repair near me',
    'roof replacement near me',
    'Charlotte roofing company',
    'veteran owned roofing',
    'BBB A+ roofer',
  ],
  openGraph: {
    title: "Best Roofing Now | Charlotte's Top-Rated Roofing Company",
    description: 'Charlotte\'s top-rated roofing contractor. 5-star Google rating, veteran-owned, BBB A+ rated. Free roof inspections and estimates.',
    url: 'https://www.bestroofingnow.com/',
  },
  alternates: {
    canonical: 'https://www.bestroofingnow.com/',
  },
};

export default function HomePage() {
  // Gallery images for schema
  const galleryImages = [
    { url: IMAGES.projects.work1, caption: 'Complete roof replacement in Charlotte NC - asphalt shingle installation' },
    { url: IMAGES.projects.work2, caption: 'Residential roofing project in Myers Park Charlotte' },
    { url: IMAGES.projects.work3, caption: 'Storm damage roof repair in Huntersville NC' },
    { url: IMAGES.projects.work4, caption: 'New roof installation in Matthews NC' },
    { url: IMAGES.projects.work5, caption: 'Commercial roofing project in Charlotte metro area' },
  ];

  return (
    <>
      {/* Enhanced Schema Markup for SEO */}
      <WebPageSchema
        name="Best Roofing Now | Top-Rated Roofing Company Charlotte NC"
        description="Charlotte's top-rated roofing contractor. 5-star Google rating, 500+ roofs installed, veteran-owned. Free inspections, storm damage experts."
        url={SITE_CONFIG.url}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString().split('T')[0]}
        primaryImage={IMAGES.hero.roofTeam}
        breadcrumb={[{ name: 'Home', url: SITE_CONFIG.url }]}
      />
      <FAQSchema faqs={HOMEPAGE_FAQ} />
      <BreadcrumbSchema items={[{ name: 'Home', url: SITE_CONFIG.url }]} />
      <HeroImageSchema
        url={IMAGES.hero.roofTeam}
        caption="Best Roofing Now team - Charlotte's top-rated roofing contractors"
        pageUrl={SITE_CONFIG.url}
      />
      <GallerySchema
        name="Best Roofing Now Project Gallery"
        description="Recent roofing projects completed in Charlotte NC and surrounding areas"
        images={galleryImages}
        pageUrl={SITE_CONFIG.url}
      />
      {/* AEO Schemas for Voice Search and AI Assistants */}
      <HomePageAEOSchemas />
      {/* Speakable Content for Voice Assistants */}
      <SpeakableContent />
      <Hero
        title="Best Roofing Now - Charlotte's Top-Rated Roofing Company"
        subtitle="Veteran-owned roofing contractor with 500+ roofs installed. Full-service roofing including metal roofing, flat roof repair, gutter installation &amp; cleaning, siding, skylights, and chimney services. Storm damage restoration and insurance claim assistance. 5-star Google rating, BBB A+ accredited."
        backgroundImage={IMAGES.hero.roofTeam}
      />
      <Services
        title="Our Roofing Services"
        subtitle="Comprehensive roofing solutions from Charlotte's trusted general contractor. Roof repair, replacement, gutter services, siding installation, skylights, chimney repair, and building restoration for residential and commercial properties."
        limit={9}
        showAll={false}
      />
      <WhyChooseUs />

      {/* GBP Service Categories Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Charlotte&apos;s Full-Service Roofing &amp; Exterior Contractor
            </h2>
            <p className="text-gray-600 mb-8">
              Best Roofing Now is more than just a roofing contractor. As a licensed general contractor and construction company,
              we provide comprehensive exterior services including metal roofing, gutter installation, siding, and storm damage restoration.
            </p>

            {/* GBP Category Cards - Primary Link Tier */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <a href="/roofing-services" className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white hover:shadow-xl transition-all group">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="font-bold text-xl mb-2">Roofing Services</h3>
                <p className="text-white/80 text-sm mb-3">Repair, replacement, inspection, metal roofing &amp; flat roofs</p>
                <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Explore Roofing <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="/gutter-services" className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white hover:shadow-xl transition-all group">
                <div className="text-3xl mb-3">🌧️</div>
                <h3 className="font-bold text-xl mb-2">Gutter Services</h3>
                <p className="text-white/80 text-sm mb-3">Installation, repair, cleaning &amp; gutter guard systems</p>
                <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Explore Gutters <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="/siding-services" className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white hover:shadow-xl transition-all group">
                <div className="text-3xl mb-3">🏡</div>
                <h3 className="font-bold text-xl mb-2">Siding Services</h3>
                <p className="text-white/80 text-sm mb-3">James Hardie, vinyl siding installation &amp; repair</p>
                <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Explore Siding <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="/storm-restoration" className="bg-gradient-to-br from-accent to-accent-dark rounded-xl p-6 text-white hover:shadow-xl transition-all group">
                <div className="text-3xl mb-3">⛈️</div>
                <h3 className="font-bold text-xl mb-2">Storm Restoration</h3>
                <p className="text-white/80 text-sm mb-3">Emergency service, insurance claims &amp; full restoration</p>
                <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Get Help Now <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="/specialty-services" className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white hover:shadow-xl transition-all group">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="font-bold text-xl mb-2">Specialty Services</h3>
                <p className="text-white/80 text-sm mb-3">Skylights, ventilation, chimney &amp; flat roof repair</p>
                <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Explore Specialty <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="/solar-services" className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-6 text-white hover:shadow-xl transition-all group">
                <div className="text-3xl mb-3">☀️</div>
                <h3 className="font-bold text-xl mb-2">Solar Roofing</h3>
                <p className="text-white/80 text-sm mb-3">Solar panel roof integration &amp; solar-ready roofing</p>
                <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Explore Solar <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="/metal-roofing-services" className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl p-6 text-white hover:shadow-xl transition-all group">
                <div className="text-3xl mb-3">🔩</div>
                <h3 className="font-bold text-xl mb-2">Metal Roofing</h3>
                <p className="text-white/80 text-sm mb-3">Standing seam, metal shingles &amp; steel roofing</p>
                <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Explore Metal <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="/commercial-roofing-services" className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white hover:shadow-xl transition-all group">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-bold text-xl mb-2">Commercial Roofing</h3>
                <p className="text-white/80 text-sm mb-3">TPO, EPDM, flat roofs &amp; commercial repairs</p>
                <span className="inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
                  Explore Commercial <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
              <a href="/services" className="bg-light rounded-xl p-6 text-primary hover:shadow-xl transition-all group border-2 border-primary/20 hover:border-primary">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-bold text-xl mb-2">All 27 Services</h3>
                <p className="text-gray-600 text-sm mb-3">View our complete service directory</p>
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-accent">
                  View All <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </a>
            </div>

            {/* Quick Service Links - Secondary Tier */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 mb-4">Popular Services:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="/services/roof-repair" className="bg-light rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Roof Repair</a>
                <a href="/services/roof-replacement" className="bg-light rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Roof Replacement</a>
                <a href="/services/metal-roofing" className="bg-light rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Metal Roofing</a>
                <a href="/services/gutter-installation" className="bg-light rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Gutter Installation</a>
                <a href="/services/siding-installation" className="bg-light rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Siding Installation</a>
                <a href="/services/storm-damage" className="bg-light rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Storm Damage</a>
                <a href="/services/skylight-installation" className="bg-light rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Skylights</a>
                <a href="/services/emergency-roofing" className="bg-light rounded-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors">Emergency Service</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Badge Section */}
      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <p className="text-lg font-semibold text-gray-700">
              Affordable Financing Options Available
            </p>
            <a
              href="https://app.getpowerpay.com/apply/16995"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <Image
                src="https://getpowerpay.com/badges/home-improvement-style2.png"
                alt="PowerPay Roof Financing - Apply Now for Home Improvement Financing"
                width={200}
                height={80}
                className="w-[200px] block"
                loading="lazy"
                unoptimized
              />
              <span className="block text-center text-xs font-bold text-[#ee9c48]">
                Roof Financing
              </span>
            </a>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Trust Badges Section with Directory Citations */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Verified On</p>
          </div>
          <TrustBadges />
          <div className="mt-6 flex justify-center">
            <DirectoryCitations pageType="home" maxLinks={3} variant="inline" title="Also Listed On" />
          </div>
        </div>
      </section>

      <ServiceAreas />
      <FAQ />
      <CTASection
        title="Ready to Protect Your Home?"
        subtitle="Get a free, no-obligation roof inspection from Charlotte's most trusted roofing company."
      />
    </>
  );
}
