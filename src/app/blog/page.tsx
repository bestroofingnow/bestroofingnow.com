import { Metadata } from 'next';
import Image from 'next/image';
import { BookOpen } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { getAllPostsLite, WPPostLite } from '@/lib/wordpress';
import BlogContent from './BlogContent';

// Low-quality blur placeholder for hero image
const BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMH/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIDBAAREiEFE0FR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/AMT8fblq8lYS6CVo4JTE0qsyN6ydrYHH4Oc9aznGVpYoIxUsOqxf/9k=';

export const metadata: Metadata = {
  title: 'Roofing Tips & Guides',
  description:
    'Roofing tips and guides from Best Roofing Now. Learn roof maintenance, repair, replacement, and storm prep for Charlotte area homeowners.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
  openGraph: {
    title: 'Roofing Blog | Expert Tips from Charlotte Roofers',
    description: 'Expert roofing tips, guides, and news. Learn about roof maintenance, repair, replacement, and protecting your Charlotte home.',
    type: 'website',
  },
};

// Revalidate every hour
export const revalidate = 3600;

export default async function BlogPage() {
  // Fetch ALL posts from WordPress (paginates through all) - uses lightweight version
  const posts = await getAllPostsLite();

  // Generate BlogPosting structured data for AI/SEO readability
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Best Roofing Now Blog',
    description: 'Expert roofing tips, guides, and news from Charlotte\'s trusted roofing company.',
    url: `${SITE_CONFIG.url}/blog`,
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
          { name: 'Blog', url: `${SITE_CONFIG.url}/blog` },
        ]}
      />

      {/* Blog structured data for AI/SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* Hero Section - Mobile optimized */}
      <section className="relative bg-gradient-primary text-white py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
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
              <span className="text-xs sm:text-sm font-semibold">Roofing Tips & Guides</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
              Expert Roofing Advice for Charlotte Homeowners
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              Learn from Charlotte&apos;s trusted roofing experts. Tips on maintenance, repair,
              replacement, and protecting your home from the elements.
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

      {/* Blog Content with Search & Pagination */}
      <BlogContent initialPosts={posts} />

      {/* CTA */}
      <CTASection />
    </>
  );
}
