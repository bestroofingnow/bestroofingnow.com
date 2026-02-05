import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, ArrowRight, CheckCircle, AlertTriangle, DollarSign, Clock, FileText } from 'lucide-react';
import { SITE_CONFIG, ROOFING_GUIDES } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DirectoryCitations } from '@/components/ui/DirectoryCitations';
import { BreadcrumbSchema, WebPageSchema, ArticleSchema } from '@/components/seo/SchemaMarkup';
import { GeoProjectGalleryStrip } from '@/components/sections/GeoProjectGalleryStrip';
import { CityGeoSection } from '@/components/sections/CityGeoSection';

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ROOFING_GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = ROOFING_GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    return { title: 'Guide Not Found' };
  }

  const ogImage = 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png';

  return {
    title: `${guide.title}`,
    description: guide.description,
    keywords: guide.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/guides/${slug}`,
    },
    openGraph: {
      title: `${guide.title} | Best Roofing Now`,
      description: guide.description,
      url: `${SITE_CONFIG.url}/guides/${slug}`,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${guide.title} - Best Roofing Now Charlotte NC`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${guide.title} | Best Roofing Now`,
      description: guide.description,
      images: [ogImage],
    },
  };
}

// Guide content for each slug
const guideContent: Record<string, {
  intro: string;
  sections: { title: string; content: string; items?: string[] }[];
}> = {
  'roof-replacement-cost': {
    intro: 'Understanding the cost of a roof replacement is crucial for budgeting your home improvement project. In Charlotte, NC, roof replacement costs vary based on several factors including materials, roof size, and complexity.',
    sections: [
      {
        title: 'Average Roof Replacement Costs in Charlotte',
        content: 'Most homeowners in Charlotte pay between $8,000 and $25,000 for a complete roof replacement. The average cost is around $12,000-$15,000 for a standard 2,000 square foot home with asphalt shingles.',
        items: [
          'Asphalt shingles: $7,000-$15,000',
          'Metal roofing: $15,000-$30,000',
          'Tile roofing: $20,000-$40,000',
          'Slate roofing: $30,000-$50,000+',
        ],
      },
      {
        title: 'Factors That Affect Price',
        content: 'Several factors influence your total roof replacement cost:',
        items: [
          'Roof size and square footage',
          'Roofing material chosen',
          'Roof pitch and complexity',
          'Number of stories',
          'Removal of old roofing',
          'Structural repairs needed',
          'Permits and inspections',
        ],
      },
      {
        title: 'Ways to Save on Your New Roof',
        content: 'There are legitimate ways to reduce your roof replacement costs:',
        items: [
          'Get multiple quotes from reputable contractors',
          'Consider financing options with 0% interest',
          'Time your project during off-peak seasons',
          'Ask about manufacturer rebates',
          'Check if storm damage qualifies for insurance coverage',
        ],
      },
    ],
  },
  'signs-you-need-new-roof': {
    intro: 'Your roof protects your home and family from the elements. Knowing when it needs replacement can save you from costly water damage and emergency repairs. Here are the key warning signs to watch for.',
    sections: [
      {
        title: 'Age of Your Roof',
        content: 'Most asphalt shingle roofs last 20-25 years. If your roof is approaching or exceeding this age, it\'s time for a professional inspection, even if no obvious problems exist.',
        items: [
          'Asphalt shingles: 20-30 years',
          'Metal roofing: 40-70 years',
          'Tile roofing: 50-100 years',
          'Wood shakes: 30-40 years',
        ],
      },
      {
        title: 'Visible Warning Signs',
        content: 'These exterior signs indicate your roof may need replacement:',
        items: [
          'Curling, cracking, or missing shingles',
          'Excessive granules in gutters',
          'Sagging or uneven roof sections',
          'Visible daylight through roof boards',
          'Moss or algae growth (indicates moisture retention)',
          'Damaged or missing flashing',
          'Multiple repair patches',
        ],
      },
      {
        title: 'Interior Warning Signs',
        content: 'Check inside your home for these indicators:',
        items: [
          'Water stains on ceilings or walls',
          'Peeling paint near rooflines',
          'Mold or mildew in attic',
          'Rising energy bills (poor insulation)',
          'Daylight visible in attic',
        ],
      },
    ],
  },
  'how-long-does-roof-last': {
    intro: 'The lifespan of your roof depends on several factors including the material used, installation quality, climate conditions, and maintenance. Understanding these factors helps you plan for future replacement.',
    sections: [
      {
        title: 'Roof Lifespan by Material',
        content: 'Different roofing materials have vastly different expected lifespans:',
        items: [
          'Three-tab asphalt shingles: 15-20 years',
          'Architectural asphalt shingles: 25-30 years',
          'Metal roofing: 40-70 years',
          'Clay/concrete tile: 50-100 years',
          'Natural slate: 75-200 years',
          'Wood shakes: 25-40 years',
          'Flat roof (TPO/EPDM): 20-30 years',
        ],
      },
      {
        title: 'Factors That Shorten Roof Life',
        content: 'Several factors can reduce your roof\'s lifespan:',
        items: [
          'Poor installation quality',
          'Inadequate ventilation',
          'Lack of regular maintenance',
          'Severe weather exposure',
          'Overhanging trees and debris',
          'Walking on the roof frequently',
          'Ignoring minor repairs',
        ],
      },
      {
        title: 'How to Maximize Roof Life',
        content: 'Extend your roof\'s lifespan with these practices:',
        items: [
          'Schedule annual professional inspections',
          'Keep gutters clean and functional',
          'Trim trees away from the roof',
          'Address repairs promptly',
          'Ensure proper attic ventilation',
          'Remove moss and algae growth',
        ],
      },
    ],
  },
  'roof-maintenance-tips': {
    intro: 'Regular roof maintenance is the key to maximizing your roof\'s lifespan and avoiding expensive emergency repairs. These essential tips will help Charlotte homeowners keep their roofs in top condition.',
    sections: [
      {
        title: 'Seasonal Maintenance Schedule',
        content: 'Follow this seasonal maintenance routine:',
        items: [
          'Spring: Post-winter inspection, clean gutters, check for damage',
          'Summer: Trim overhanging branches, check attic ventilation',
          'Fall: Clean gutters before leaf season, remove debris',
          'Winter: Clear snow buildup, watch for ice dams',
        ],
      },
      {
        title: 'DIY Maintenance Tasks',
        content: 'These tasks can be safely performed by homeowners:',
        items: [
          'Visual inspection from ground level',
          'Cleaning gutters and downspouts',
          'Removing debris from roof valleys',
          'Trimming nearby tree branches',
          'Checking attic for leaks or moisture',
          'Cleaning skylights and roof vents',
        ],
      },
      {
        title: 'When to Call a Professional',
        content: 'Some maintenance requires professional attention:',
        items: [
          'Walking on steep or high roofs',
          'Repairing or replacing shingles',
          'Sealing flashing around chimneys',
          'Addressing structural concerns',
          'Post-storm damage assessment',
          'Annual comprehensive inspections',
        ],
      },
    ],
  },
  'insurance-claim-guide': {
    intro: 'Filing a roof insurance claim after storm damage can be overwhelming. This step-by-step guide will help Charlotte homeowners navigate the process and maximize their claim.',
    sections: [
      {
        title: 'Before You File a Claim',
        content: 'Take these important steps immediately after storm damage:',
        items: [
          'Document all damage with photos and video',
          'Prevent further damage with temporary repairs',
          'Keep receipts for any emergency repairs',
          'Do not sign anything with door-to-door contractors',
          'Contact a reputable roofing company for inspection',
        ],
      },
      {
        title: 'Filing Your Claim',
        content: 'Follow these steps when filing your insurance claim:',
        items: [
          'Contact your insurance company promptly',
          'Provide documentation of all damage',
          'Request a professional adjuster inspection',
          'Have your roofer present during inspection',
          'Get a detailed written estimate',
          'Keep copies of all correspondence',
        ],
      },
      {
        title: 'Working with Your Roofing Contractor',
        content: 'Choose a contractor who will advocate for you:',
        items: [
          'Select a licensed, insured contractor',
          'Get a detailed scope of work in writing',
          'Ensure they use quality materials',
          'Never pay the full amount upfront',
          'Verify they will handle supplemental claims',
          'Get warranty information in writing',
        ],
      },
    ],
  },
  'choosing-roofing-contractor': {
    intro: 'Choosing the right roofing contractor is crucial for a successful project. Use these tips to find a reputable contractor and avoid common scams that target Charlotte homeowners.',
    sections: [
      {
        title: 'Essential Qualifications to Verify',
        content: 'Every legitimate roofing contractor should have:',
        items: [
          'Valid NC contractor license',
          'General liability insurance',
          'Workers compensation insurance',
          'Local business address (not just a P.O. box)',
          'Manufacturer certifications',
          'Positive reviews and references',
        ],
      },
      {
        title: 'Red Flags to Avoid',
        content: 'Be wary of contractors who:',
        items: [
          'Demand large deposits upfront',
          'Go door-to-door after storms',
          'Pressure you to sign immediately',
          'Offer to waive your insurance deductible',
          'Can\'t provide references',
          'Only accept cash payments',
          'Have no local presence or office',
        ],
      },
      {
        title: 'Questions to Ask Before Hiring',
        content: 'Ask potential contractors these questions:',
        items: [
          'How long have you been in business locally?',
          'Can I see proof of insurance?',
          'What manufacturer certifications do you hold?',
          'Do you use subcontractors?',
          'What warranties do you offer?',
          'Can I see examples of similar projects?',
          'What is your payment schedule?',
        ],
      },
    ],
  },
};

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = ROOFING_GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  const content = guideContent[slug];
  const otherGuides = ROOFING_GUIDES.filter((g) => g.slug !== slug).slice(0, 3);

  const pageUrl = `${SITE_CONFIG.url}/guides/${slug}`;

  return (
    <>
      {/* Schema Markup */}
      <WebPageSchema
        name={`${guide.title} | Best Roofing Now`}
        description={guide.description}
        url={pageUrl}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Guides', url: `${SITE_CONFIG.url}/guides` },
          { name: guide.shortTitle, url: pageUrl },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Guides', url: `${SITE_CONFIG.url}/guides` },
          { name: guide.shortTitle, url: pageUrl },
        ]}
      />
      <ArticleSchema
        post={{
          title: guide.title,
          description: guide.description,
          slug: `guides/${slug}`,
          datePublished: '2024-01-01',
          dateModified: new Date().toISOString().split('T')[0],
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Guides', href: '/guides' },
              { label: guide.shortTitle },
            ]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {guide.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {guide.description}
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

      {/* Guide Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="prose max-w-none mb-12">
              <p className="text-lg text-gray leading-relaxed">
                {content?.intro}
              </p>
            </div>

            {/* Sections */}
            {content?.sections.map((section, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {section.title}
                </h2>
                <p className="text-gray mb-4">{section.content}</p>
                {section.items && (
                  <ul className="space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-dark">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Expert Tip */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-primary mb-2">Expert Tip from Best Roofing Now</h3>
                  <p className="text-gray">
                    When in doubt, get a professional opinion. Our free roof inspections provide detailed
                    assessments with no obligation. We&apos;ll give you honest advice whether you need repairs,
                    replacement, or just regular maintenance.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-light rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Need Help with Your Roof?
              </h3>
              <p className="text-gray mb-6">
                Our roofing experts are ready to answer your questions and provide personalized guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`tel:${SITE_CONFIG.phoneClean}`}
                  className="btn btn-primary"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  {SITE_CONFIG.phone}
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Schedule Free Inspection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Strip */}
      <GeoProjectGalleryStrip pageType="guide" city="Charlotte" slug={slug} />

      {/* Other Guides */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            More Roofing Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="card hover:shadow-xl transition group"
              >
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition">
                  {g.title}
                </h3>
                <p className="text-gray text-sm mb-4">{g.description}</p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Read Guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/guides" className="btn btn-outline">
              View All Guides
            </Link>
          </div>
        </div>
      </section>

      <CityGeoSection
        city="Charlotte"
        state="NC"
        citySlug="charlotte-nc"
        service="Roofing Guide"
      />

      {/* Directory Citations */}
      <section className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <DirectoryCitations pageType="default" maxLinks={3} variant="inline" title="Trusted By" />
          </div>
        </div>
      </section>
    </>
  );
}
