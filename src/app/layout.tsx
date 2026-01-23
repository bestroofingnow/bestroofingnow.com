import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyCTA } from '@/components/sections/CTASection';
import { LocalBusinessSchema, WebSiteSchema, HowToGetRoofEstimateSchema, FreeInspectionOfferSchema, ReviewsSchema } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/constants';
import { EstimateProvider } from '@/components/estimate';
import { LazyCustomCursor } from '@/components/ui/LazyCustomCursor';
import { WebVitals } from '@/components/analytics/WebVitals';
import { AnalyticsProvider } from '@/components/analytics';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  // Automatically adjust fallback font metrics to reduce CLS
  adjustFontFallback: true,
  // Minimal weights for faster initial load - 400 for body, 700 for headings
  weight: ['400', '700'],
});

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  // Support for notched devices (iPhone X+, etc.)
  viewportFit: 'cover',
  themeColor: '#1A43AA',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `Best Roofing Company Charlotte NC | 5-Star Rated | BBB A+ | ${SITE_CONFIG.name}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: `Looking for the best roofing company? Charlotte's top-rated contractor with 5.0 Google rating, 500+ roofs installed, BBB A+ rated, veteran-owned. FREE inspections & same-day estimates. Call (704) 605-6047.`,
  keywords: [
    // Primary target keywords
    'roofing contractor Charlotte NC',
    'roofing company Charlotte NC',
    'roofing contractor near me',
    'roofing company near me',
    'roofers near me Charlotte',
    'Charlotte roofers',
    'Charlotte roofing contractor',
    'Charlotte roofing company',
    // Service keywords
    'roof repair Charlotte NC',
    'roof replacement Charlotte NC',
    'roof inspection Charlotte',
    'emergency roof repair Charlotte',
    'storm damage roof repair Charlotte',
    'residential roofing Charlotte',
    'commercial roofing Charlotte NC',
    // Long-tail keywords
    'best roofer Charlotte NC',
    'top rated roofing company Charlotte',
    'roof leak repair Charlotte NC',
    'new roof installation Charlotte',
    'shingle roof replacement Charlotte',
    'gutter installation Charlotte',
    'hail damage roof repair Charlotte',
    'insurance claim roofer Charlotte',
    // Near me variations
    'roofers near me',
    'roofing contractors near me',
    'roof repair near me',
    'roof replacement near me',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Charlotte's Most Trusted Roofing Company`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Professional Roofing Services Charlotte NC`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | Roofing Company Charlotte NC`,
    description: SITE_CONFIG.description,
    site: '@bestroofingnow',
    creator: '@bestroofingnow',
    images: ['https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  // Google Search Console & Bing Webmaster verification
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    // Add Bing verification if needed: yandex: 'xxx', other: { 'msvalidate.01': 'xxx' }
  },
  category: 'Home Services',
  other: {
    'dns-prefetch': 'https://bestroofingnow.com',
    'geo.region': 'US-NC',
    'geo.placename': 'Charlotte',
    'geo.position': `${SITE_CONFIG.geo.latitude};${SITE_CONFIG.geo.longitude}`,
    'ICBM': `${SITE_CONFIG.geo.latitude}, ${SITE_CONFIG.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* CRITICAL: Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* CRITICAL: Preconnect to CMS for images */}
        <link rel="preconnect" href="https://cms.bestroofingnow.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cms.bestroofingnow.com" />
        {/* Hero image preload - ONLY for desktop (hero image hidden on mobile for faster LCP) */}
        <link
          rel="preload"
          as="image"
          href="https://cms.bestroofingnow.com/wp-content/uploads/2025/07/b5462b39-d7e7-479d-b417-39f82e68ae21-hero-picture.webp"
          type="image/webp"
          fetchPriority="high"
          media="(min-width: 768px)"
        />
        {/* Secondary preconnects */}
        <link rel="preconnect" href="https://bestroofingnow.com" />
        <link rel="dns-prefetch" href="https://bestroofingnow.com" />
        {/* RSS Feed for projects - social media automation */}
        <link rel="alternate" type="application/rss+xml" title="Best Roofing Now - Recent Projects" href="/projects/feed.xml" />
        {/* Non-critical third-party - dns-prefetch only */}
        <link rel="dns-prefetch" href="https://widgets.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://services.leadconnectorhq.com" />
        {/* PowerPay financing - preconnect for faster badge loading */}
        <link rel="preconnect" href="https://getpowerpay.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://getpowerpay.com" />
        <link rel="dns-prefetch" href="https://app.getpowerpay.com" />
        <LocalBusinessSchema />
        <WebSiteSchema />
        <HowToGetRoofEstimateSchema />
        <FreeInspectionOfferSchema />
        <ReviewsSchema />
      </head>
      <body className="antialiased">
        <EstimateProvider>
          {/* Web Vitals monitoring - reports Core Web Vitals metrics */}
          <WebVitals />
          {/* Analytics: GA4, Microsoft Clarity, Facebook Pixel */}
          <AnalyticsProvider />
          <LazyCustomCursor />
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Footer />
          <StickyCTA />
          {/* GHL Chat Widget - loaded after page is interactive */}
          <Script
            id="ghl-chat-widget"
            src="https://widgets.leadconnectorhq.com/loader.js"
            data-resources-url="https://widgets.leadconnectorhq.com"
            data-widget-id="692def99cf45951b90d25076"
            strategy="lazyOnload"
          />
        </EstimateProvider>
      </body>
    </html>
  );
}
