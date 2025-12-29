import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyCTA } from '@/components/sections/CTASection';
import { LocalBusinessSchema, WebSiteSchema, HowToGetRoofEstimateSchema } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/constants';
import CustomCursor from '@/components/ui/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | #1 Roofing Company Charlotte NC | BBB A+ Rated`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: `${SITE_CONFIG.description} Free inspections, financing available. Call (704) 605-6047.`,
  keywords: [
    'roofing company Charlotte NC',
    'roof repair Charlotte',
    'roof replacement Charlotte NC',
    'roofers near me',
    'Charlotte roofers',
    'roof inspection Charlotte',
    'emergency roof repair Charlotte',
    'storm damage roof repair',
    'residential roofing Charlotte',
    'commercial roofing Charlotte NC',
    'best roofer Charlotte',
    'roof leak repair Charlotte NC',
    'new roof installation',
    'shingle roof replacement',
    'gutter installation Charlotte',
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
        <meta name="theme-color" content="#1A43AA" />
        {/* Preconnect to critical origins - image host is most important for LCP */}
        <link rel="preconnect" href="https://bestroofingnow.com" />
        <link rel="dns-prefetch" href="https://bestroofingnow.com" />
        {/* Chat widget loads on lazyOnload, but preconnect helps when it does */}
        <link rel="preconnect" href="https://widgets.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://widgets.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://services.leadconnectorhq.com" />
        <LocalBusinessSchema />
        <WebSiteSchema />
        <HowToGetRoofEstimateSchema />
      </head>
      <body className="antialiased">
        <CustomCursor />
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
              {/* GHL Chat Widget */}
        <Script
          id="ghl-chat-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com"
          data-widget-id="692def99cf45951b90d25076"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
