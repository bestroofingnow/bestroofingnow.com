import { Metadata } from 'next';
import { SEOImage } from '@/components/ui/SEOImage';
import { BookOpen, HelpCircle, CheckCircle, CloudRain, FileText, Wrench, Layers, Shield, DollarSign } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import {
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
  SpeakableContentBlocks,
  AISearchOptimizationBundle,
  VoiceSearchActionSchema,
} from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { getAllPostsLite, WPPostLite } from '@/lib/wordpress';
import BlogContent from './BlogContent';

// Low-quality blur placeholder for hero image
const BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMH/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIDBAAREiEFE0FR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/AMT8fblq8lYS6CVo4JTE0qsyN6ydrYHH4Oc9aznGVpYoIxUsOqxf/9k=';

export const metadata: Metadata = {
  title: 'Roofing Blog | Charlotte & Lake Norman Guides',
  description:
    'Expert roofing tips from Best Roofing Now — storm prep, insurance claims, shingle vs metal, inspection checklists, and cost guides for Charlotte and Lake Norman.',
  keywords: [
    'charlotte roofing blog',
    'lake norman roofing tips',
    'roof insurance claim guide',
    'storm damage roof charlotte',
    'roof maintenance tips',
    'roof replacement cost charlotte',
    'shingle vs metal roof nc',
    'diy roof inspection',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
  openGraph: {
    title: 'Roofing Blog | Expert Tips from Charlotte Roofers',
    description: 'Expert roofing tips, guides, and news. Learn about roof maintenance, repair, replacement, insurance claims, and protecting your Charlotte or Lake Norman home.',
    url: `${SITE_CONFIG.url}/blog`,
    type: 'website',
    images: [{ url: IMAGES.hero.hero25, width: 1200, height: 630, alt: 'Roofing blog — tips for Charlotte and Lake Norman homeowners' }],
  },
};

// On-demand revalidation via webhook/cron (no time-based ISR)
export const revalidate = false;

interface TopicCluster {
  icon: typeof CloudRain;
  title: string;
  description: string;
  anchors: { href: string; label: string }[];
}

const topicClusters: TopicCluster[] = [
  {
    icon: CloudRain,
    title: 'Storms, Hail, and Wind Damage',
    description: 'What to do after Piedmont hailstorms, tropical remnants, and Lake Norman wind events — plus how to tell storm damage from wear-and-tear.',
    anchors: [
      { href: '/blog/wind-vs-hail-a-visual-guide-to-help-you-identify-what-actually-hit-your-roof', label: 'Wind vs. Hail: Visual Guide' },
      { href: '/blog/what-to-do-after-a-winter-storm-damages-your-roof-in-charlotte-lake-norman-2026-guide', label: 'After a Winter Storm Damages Your Roof' },
      { href: '/blog/the-lake-norman-wind-tunnel-why-waterfront-homes-face-unique-storm-risks', label: 'Lake Norman Wind Tunnel Effect' },
    ],
  },
  {
    icon: FileText,
    title: 'Insurance Claims',
    description: 'Step-by-step claim filing, carrier-specific expectations, and the 48-hour rule that governs most NC homeowner policies.',
    anchors: [
      { href: '/blog/the-insurance-claim-roadmap-a-step-by-step-guide-to-filing-a-claim-without-the-headache', label: 'Insurance Claim Roadmap' },
      { href: '/blog/the-48-hour-rule-why-the-first-two-days-after-a-storm-are-the-most-critical-for-your-insurance-claim', label: 'The 48-Hour Claim Rule' },
      { href: '/blog/does-your-homeowners-insurance-actually-cover-your-roof-what-charlotte-homeowners-need-to-know', label: 'Does Your Insurance Cover Your Roof?' },
    ],
  },
  {
    icon: Wrench,
    title: 'Repair vs Replace',
    description: 'When a repair is the right call, when full replacement is more economical, and what signals the crossover point.',
    anchors: [
      { href: '/blog/roof-replacement-vs-roof-repair-which-is-better-for-your-charlotte-home', label: 'Repair vs. Replace: Which Is Right?' },
      { href: '/blog/top-signs-your-charlotte-roof-needs-immediate-repair', label: 'Signs Your Roof Needs Immediate Repair' },
      { href: '/blog/from-someday-to-done-why-you-shouldnt-wait-another-year-to-replace-your-roof', label: 'Why Not to Wait Another Year' },
    ],
  },
  {
    icon: Layers,
    title: 'Materials & Comparisons',
    description: 'Asphalt vs metal, Class 4 impact shingles, commercial flat systems, and emerging energy-efficient materials.',
    anchors: [
      { href: '/blog/metal-vs-asphalt-shingles-which-roof-is-right-for-charlottes-climate', label: 'Metal vs. Asphalt Shingles' },
      { href: '/blog/roof-coating-vs-full-roof-replacement-which-is-better-for-your-commercial-building', label: 'Roof Coating vs. Replacement (Commercial)' },
      { href: '/blog/energy-efficient-roofing-how-modern-materials-cut-utility-costs-in-lkn', label: 'Energy-Efficient Roofing in LKN' },
    ],
  },
  {
    icon: Shield,
    title: 'Maintenance & Seasonal Prep',
    description: 'DIY inspection checklists, gutter care, ice/winter prep, and the routine tasks that extend roof life 3–7 years.',
    anchors: [
      { href: '/blog/diy-roof-inspection-checklist-for-homeowners-what-to-look-for-before-calling-the-pros', label: 'DIY Roof Inspection Checklist' },
      { href: '/blog/winter-storm-roof-preparation-guide-for-charlotte-lake-norman-homeowners-2026', label: 'Winter Storm Prep Guide 2026' },
      { href: '/blog/gutters-and-siding-why-these-are-the-unsung-heroes-of-your-roofs-protection', label: 'Gutters and Siding as Roof Protection' },
    ],
  },
  {
    icon: DollarSign,
    title: 'Cost, Financing & Warranties',
    description: 'Per-square-foot pricing, 2026 cost ranges, Enhancify financing, and what "lifetime warranty" actually means.',
    anchors: [
      { href: '/blog/roof-shingle-cost-per-square-foot', label: 'Roof Shingle Cost Per Square Foot' },
      { href: '/blog/the-ultimate-guide-to-roof-project-financing-0-options-no-surprise-loans-how-to-qualify-fast', label: 'Roofing Project Financing Guide' },
      { href: '/blog/lifetime-warranty-roofing-systems-are-they-worth-it', label: 'Lifetime Warranty Systems: Worth It?' },
    ],
  },
];

const whatYoullFind = [
  'Practical guides written by the same crews that inspect and install roofs every week',
  'Cost ranges in 2026 dollars for Charlotte, Lake Norman, and surrounding markets',
  'Step-by-step checklists you can use before calling any contractor',
  'Storm-damage visual guides and claim-filing playbooks',
  'Material comparisons with manufacturer specs (GAF, CertainTeed, Owens Corning, metal, flat systems)',
  'Seasonal prep content keyed to Piedmont NC weather patterns',
];

const blogFaqs = [
  { question: 'Who writes the Best Roofing Now blog?', answer: 'Our content is written and edited by the same team that inspects and installs roofs across Charlotte, Lake Norman, and the surrounding metro every week — field project managers, estimators, and our in-house insurance claims specialist. Guides are based on real jobs we have completed, not generic stock content.' },
  { question: 'How often is the blog updated?', answer: 'We publish new guides and seasonal content monthly, with occasional rapid-response posts after major weather events (hailstorms, tropical remnants, ice events). Existing evergreen posts — cost ranges, material comparisons, insurance guides — are refreshed annually at minimum.' },
  { question: 'Can I use blog content to prepare before getting a roofing quote?', answer: 'Yes — that is exactly why we publish it. Our inspection checklists, cost guides, and material comparison posts are designed to help Charlotte and Lake Norman homeowners compare quotes confidently, understand scope, and ask the right questions. Many readers call us after using a competing contractor, having discovered something in a blog post that prompted a second opinion.' },
  { question: 'Do you cover commercial roofing topics on the blog?', answer: 'Yes. We have dedicated content on flat roof systems (TPO, EPDM, PVC, modified bitumen), commercial insurance claims, cool-roof energy code compliance, maintenance programs, and roof coating ROI vs full replacement. Search "commercial" or "flat roof" within the blog to find those posts.' },
  { question: 'Where are your blog posts hosted?', answer: 'Posts live on our WordPress CMS and are surfaced here on bestroofingnow.com via the site&apos;s static-rendering pipeline. Individual post URLs follow the /blog/[slug] pattern and include the full post content, publish and update dates, and author attribution in the structured data.' },
  { question: 'Is your blog content specific to Charlotte and Lake Norman?', answer: 'Yes — most content is explicitly keyed to the Charlotte metro and Lake Norman region. We reference local neighborhoods, NC-specific insurance carriers, county-level code variations, Piedmont climate patterns (hail belt, tropical remnants, ice events), and regional material suppliers. Readers outside NC/SC may still find the technical guides useful, but pricing and carrier references are local.' },
];

export default async function BlogPage() {
  // Fetch ALL posts from WordPress (paginates through all) - uses lightweight version
  const posts = await getAllPostsLite();
  const pageUrl = `${SITE_CONFIG.url}/blog`;

  // Generate BlogPosting structured data for AI/SEO readability
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Best Roofing Now Blog',
    description: 'Expert roofing tips, guides, and news from Charlotte\'s trusted roofing company.',
    url: pageUrl,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: IMAGES.logo,
      },
    },
    blogPost: posts.slice(0, 20).map((post: WPPostLite) => ({
      '@type': 'BlogPosting',
      headline: post.title.rendered.replace(/<[^>]*>/g, ''),
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.modified,
      author: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
      },
      image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || IMAGES.hero.hero25,
      description: post.excerpt.rendered.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim().slice(0, 160),
    })),
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Blog', url: pageUrl },
        ]}
      />
      <FAQSchema faqs={blogFaqs} />
      <WebPageSchema
        name="Roofing Blog | Charlotte & Lake Norman Guides | Best Roofing Now"
        description="Expert roofing tips from Best Roofing Now — storm prep, insurance claims, material comparisons, inspection checklists, and cost guides for Charlotte NC and Lake Norman."
        url={pageUrl}
        primaryImage={IMAGES.hero.hero25}
        breadcrumb={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Blog', url: pageUrl },
        ]}
      />
      <SpeakableContentBlocks includeCompany={true} includeServices={true} includeContact={true} />
      <AISearchOptimizationBundle pageUrl={pageUrl} pageName="Roofing Blog" />
      <VoiceSearchActionSchema />

      {/* Blog structured data for AI/SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* Hero Section - Mobile optimized */}
      <section className="relative bg-gradient-primary text-white py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SEOImage
            src={IMAGES.hero.hero25}
            alt="Roofing tips and guides from Charlotte experts"
            fill
            className="object-cover opacity-20"
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4">
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-semibold">Roofing Tips &amp; Guides</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              Expert Roofing Advice for Charlotte Homeowners
            </h1>
            <p className="speakable-intro text-base sm:text-lg md:text-xl text-white/90">
              Written by the Best Roofing Now team — field project managers, estimators, and our in-house insurance claims specialist — covering storm damage, insurance claims, repair vs. replacement decisions, material comparisons, maintenance checklists, cost guides, and seasonal prep keyed to Charlotte NC and Lake Norman weather patterns. Updated monthly with rapid-response coverage after major weather events.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Content (helps users and improves on-page context for search engines) */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Start Here: Roofing Help for Charlotte Homeowners
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                If you are trying to decide between roof repair and replacement, planning for storm season, or just want to understand what you are seeing on your shingles, you are in the right place. This blog is written by the same team that inspects and installs roofs across Charlotte, Lake Norman, and the surrounding towns every week.
              </p>
              <p>
                We focus on practical guidance: what the problem is, why it happens, what it typically costs, and what to do next. You will also find checklists you can use before calling a contractor, plus questions to ask so you can compare quotes confidently.
              </p>
              <p>
                Popular starting points:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {[
                { href: '/blog/roof-shingle-cost-per-square-foot', label: 'Roof Shingle Cost (Per Square Foot)' },
                { href: '/blog/the-anatomy-of-a-roof-every-part-homeowners-should-know', label: 'The Anatomy of a Roof (Parts Explained)' },
                { href: '/blog/roof-crickets-101-what-they-are-benefits-and-why-your-roof-might-need-one', label: 'Roof Crickets: What They Are and When You Need One' },
                { href: '/blog/roof-ridges-and-valleys-explained-purpose-benefits-and-maintenance-for-homeowners', label: 'Roof Ridges and Valleys (Purpose and Maintenance)' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="bg-light rounded-xl p-4 border border-gray-200 hover:border-primary hover:bg-white transition"
                >
                  <span className="font-semibold text-primary">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What You&apos;ll Find in This Blog</h2>
              <p className="text-gray text-lg">Six content pillars that shape every guide we publish.</p>
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

      {/* Topic Clusters */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Browse by Topic</h2>
            <p className="text-gray text-lg">Six topic clusters with curated starting points. Each cluster cross-links to related guides.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicClusters.map((cluster) => (
              <div key={cluster.title} className="bg-light rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <cluster.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-dark text-lg">{cluster.title}</h3>
                </div>
                <p className="text-gray-700 text-sm mb-4">{cluster.description}</p>
                <ul className="space-y-2">
                  {cluster.anchors.map((anchor) => (
                    <li key={anchor.href}>
                      <a href={anchor.href} className="text-primary hover:underline text-sm font-medium">
                        → {anchor.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content with Search & Pagination */}
      <BlogContent initialPosts={posts} />

      {/* Blog FAQs */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">About the Blog</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Blog FAQs</h2>
            </div>
            <div className="space-y-4">
              {blogFaqs.map((faq, index) => (
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
