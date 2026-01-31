import type { NextConfig } from "next";

// WordPress CMS URL - change this to your subdomain after migration
const WP_CMS_HOSTNAME = process.env.WORDPRESS_HOSTNAME || 'bestroofingnow.com';

const nextConfig: NextConfig = {
  // Prevent duplicate content from trailing slashes
  trailingSlash: false,

  // Enable compression
  compress: true,

  // Optimize CSS delivery and other experimental features
  experimental: {
    optimizeCss: true,
  },

  // Power performance mode - more aggressive optimizations
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: WP_CMS_HOSTNAME,
        pathname: '/wp-content/uploads/**',
      },
      // CMS subdomain for WordPress images
      {
        protocol: 'https',
        hostname: 'cms.bestroofingnow.com',
        pathname: '/wp-content/uploads/**',
      },
      // Keep original domain for backward compatibility
      {
        protocol: 'https',
        hostname: 'bestroofingnow.com',
        pathname: '/wp-content/uploads/**',
      },
      // Wikimedia Commons for city hero images
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/wikipedia/commons/**',
      },
      // PowerPay financing badges and banners
      {
        protocol: 'https',
        hostname: 'getpowerpay.com',
        pathname: '/**',
      },
      // ProjectMapIt (PMI) project photos
      {
        protocol: 'https',
        hostname: 'projectmapit.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.projectmapit.com',
        pathname: '/**',
      },
      // AWS S3 buckets (common for PMI image hosting)
      {
        protocol: 'https',
        hostname: '*.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.cloudfront.net',
        pathname: '/**',
      },
      // Google Cloud Storage (PMI photos)
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/pmi-photos/**',
      },
      // Vercel Blob Storage (self-hosted photos)
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
    // Optimize image loading for performance - prefer AVIF for best compression
    formats: ['image/avif', 'image/webp'],
    // Smaller device sizes for faster mobile loading
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    // Reduce default quality for faster loading
    dangerouslyAllowSVG: false,
    contentDispositionType: 'inline',
  },

  async redirects() {
    return [
      // ===========================================
      // DUPLICATE BLOG POST REDIRECTS
      // Redirect duplicate posts (-2, -3, -4 suffixes) to canonical versions
      // ===========================================

      // "New Homeowner? 5 Roofing Facts You Must Know" duplicates
      { source: '/new-homeowner-5-roofing-facts-you-must-know-2', destination: '/blog/new-homeowner-5-roofing-facts-you-must-know', permanent: true },
      { source: '/new-homeowner-5-roofing-facts-you-must-know-3', destination: '/blog/new-homeowner-5-roofing-facts-you-must-know', permanent: true },

      // "Modern Metal Roof Styles" duplicates
      { source: '/modern-metal-roof-styles-photo-catalog-color-guide-2', destination: '/blog/modern-metal-roof-styles-photo-catalog-color-guide', permanent: true },
      { source: '/modern-metal-roof-styles-photo-catalog-color-guide-3', destination: '/blog/modern-metal-roof-styles-photo-catalog-color-guide', permanent: true },

      // "Why Homeowners Trust the Best Roofing Co" duplicates
      { source: '/why-homeowners-trust-the-best-roofing-co-in-charlotte-2', destination: '/blog/trust-the-best-roofing-co-in-charlotte', permanent: true },

      // "Selling Your Home? Roofing Checklist" duplicates
      { source: '/selling-your-home-use-this-roofing-checklist-to-impress-buyers-2', destination: '/blog/selling-your-home-use-this-roofing-checklist-to-impress-buyers', permanent: true },
      { source: '/selling-your-home-use-this-roofing-checklist-to-impress-buyers-3', destination: '/blog/selling-your-home-use-this-roofing-checklist-to-impress-buyers', permanent: true },

      // "What to Do After a Storm" duplicates
      { source: '/what-to-do-after-a-storm-hits-your-roof-2', destination: '/blog/what-to-do-after-a-storm-hits-your-roof', permanent: true },

      // "Safety First: On-Site Protocols" duplicates
      { source: '/safety-first-our-on-site-safety-protocols-2', destination: '/blog/safety-first-our-on-site-safety-protocols', permanent: true },

      // "Quality Control: Final Inspection" duplicates
      { source: '/quality-control-our-final-inspection-process-2', destination: '/blog/quality-control-our-final-inspection-process', permanent: true },

      // "DIY Inspection Guide" duplicates
      { source: '/is-your-roof-hiding-problems-diy-inspection-guide-no-ladder-needed-2', destination: '/blog/is-your-roof-hiding-problems-diy-inspection-guide-no-ladder-needed', permanent: true },

      // "How Financing Works" duplicates
      { source: '/how-financing-works-for-full-roof-replacement-understanding-payment-plans-like-0-interest-for-24-months-2', destination: '/blog/how-financing-works-for-full-roof-replacement-understanding-payment-plans-like-0-interest-for-24-months', permanent: true },
      { source: '/how-financing-works-for-full-roof-replacement-understanding-payment-plans-like-0-interest-for-24-months-3', destination: '/blog/how-financing-works-for-full-roof-replacement-understanding-payment-plans-like-0-interest-for-24-months', permanent: true },
      { source: '/how-financing-works-for-full-roof-replacement-understanding-payment-plans-like-0-interest-for-24-months-4', destination: '/blog/how-financing-works-for-full-roof-replacement-understanding-payment-plans-like-0-interest-for-24-months', permanent: true },

      // "Why You Shouldn't Waive Your Deductible" duplicates
      { source: '/why-you-shouldnt-waive-your-deductible-2', destination: '/blog/why-you-shouldnt-waive-your-deductible', permanent: true },

      // "Call Roofer Before Insurance" duplicates
      { source: '/why-you-should-call-your-roofer-before-your-insurance-company-2', destination: '/blog/why-you-should-call-your-roofer-before-your-insurance-company', permanent: true },

      // "Does Roof Coating Really Matter" duplicates
      { source: '/does-roof-coating-really-matter-in-2025-the-truth-about-energy-savings-2', destination: '/blog/does-roof-coating-really-matter-in-2025-the-truth-about-energy-savings', permanent: true },

      // "If Your Roof Could Talk" duplicates
      { source: '/if-your-roof-could-talk-5-things-it-would-tell-you-before-it-fails-2', destination: '/blog/if-your-roof-could-talk-5-things-it-would-tell-you-before-it-fails', permanent: true },

      // "Flat Roof Replacement vs Coating" duplicates
      { source: '/flat-roof-replacement-vs-coating-the-ultimate-guide-to-saving-money-on-your-commercial-property-2', destination: '/blog/flat-roof-replacement-vs-coating-the-ultimate-guide-to-saving-money-on-your-commercial-property', permanent: true },

      // "Roof Restoration vs Replacement" duplicates
      { source: '/roof-restoration-vs-roof-replacement-which-is-better-for-your-charlotte-home-2', destination: '/blog/roof-restoration-vs-roof-replacement-which-is-better-for-your-charlotte-home', permanent: true },

      // "Storm Damage Insurance Claims" duplicates
      { source: '/how-to-choose-the-best-roof-contractors-after-storm-damage-insurance-claims-made-easy-2', destination: '/blog/how-to-choose-the-best-roof-contractors-after-storm-damage-insurance-claims-made-easy', permanent: true },

      // "5 Years Ribbon Cutting" duplicates
      { source: '/best-roofing-now-celebrates-5-years-in-lake-norman-with-a-ribbon-cutting-ceremony-2', destination: '/blog/best-roofing-now-celebrates-5-years-in-lake-norman-with-a-ribbon-cutting-ceremony', permanent: true },

      // "Smart Roofing Technology Future-Proofing" duplicates
      { source: '/smart-roofing-technology-5-ways-the-best-roofing-companies-are-future-proofing-lake-norman-homes-2', destination: '/blog/smart-roofing-technology-5-ways-the-best-roofing-companies-are-future-proofing-lake-norman-homes', permanent: true },

      // "Ultimate Guide to Flat Roof Replacement" duplicates
      { source: '/the-ultimate-guide-to-flat-roof-replacement-everything-charlotte-businesses-need-to-succeed-2', destination: '/blog/the-ultimate-guide-to-flat-roof-replacement-everything-charlotte-businesses-need-to-succeed', permanent: true },

      // "James Turner Message" duplicates
      { source: '/a-message-from-james-turner-owner-of-best-roofing-now-integrity-honesty-and-transparency-above-all-2', destination: '/blog/a-message-from-james-turner-owner-of-best-roofing-now-integrity-honesty-and-transparency-above-all', permanent: true },

      // "Flat Roof Installation Mistakes" duplicates
      { source: '/7-mistakes-youre-making-with-flat-roof-installation-and-how-charlottes-best-roofing-contractors-fix-them-2', destination: '/blog/7-mistakes-youre-making-with-flat-roof-installation-and-how-charlottes-best-roofing-contractors-fix-them', permanent: true },

      // "Homeowners Afraid of Roofers" duplicates
      { source: '/why-homeowners-are-afraid-to-let-roofers-in-understanding-the-concerns-behind-the-door-2', destination: '/blog/why-homeowners-are-afraid-to-let-roofers-in-understanding-the-concerns-behind-the-door', permanent: true },

      // "Shingle Colors" duplicates
      { source: '/top-10-most-popular-asphalt-shingle-colors-for-charlotte-homes-in-2025-certainteed-landmark-edition-2', destination: '/blog/top-10-most-popular-asphalt-shingle-colors-for-charlotte-homes-in-2025-certainteed-landmark-edition', permanent: true },

      // "What You Need to Know About Roof Financing" duplicates
      { source: '/what-you-need-to-know-about-roof-financing-2', destination: '/blog/what-you-need-to-know-about-roof-financing', permanent: true },

      // "Cool Roofs Big Savings" duplicates
      { source: '/cool-roofs-big-savings-cut-ac-bills-with-the-right-roof-2', destination: '/blog/cool-roofs-big-savings-cut-ac-bills-with-the-right-roof', permanent: true },

      // "Beat the Charlotte Heat" duplicates
      { source: '/beat-the-charlotte-heat-how-a-cool-roof-lowers-your-summer-energy-bills-2', destination: '/blog/beat-the-charlotte-heat-how-a-cool-roof-lowers-your-summer-energy-bills', permanent: true },

      // "Storm Survival Checklist" duplicates
      { source: '/dont-miss-hidden-roof-damage-free-storm-survival-checklist-2', destination: '/blog/dont-miss-hidden-roof-damage-free-storm-survival-checklist', permanent: true },

      // "Expired Shingles" duplicates
      { source: '/expired-shingles-what-every-charlotte-homeowner-should-know-and-why-timely-replacement-matters-2', destination: '/blog/expired-shingles-what-every-charlotte-homeowner-should-know-and-why-timely-replacement-matters', permanent: true },

      // "Smart Roofing Technology Secrets" duplicates
      { source: '/smart-roofing-technology-secrets-revealed-what-roofing-companies-dont-want-you-to-know-2', destination: '/blog/smart-roofing-technology-secrets-revealed-what-roofing-companies-dont-want-you-to-know', permanent: true },

      // "Durable Roof Guide" duplicates
      { source: '/the-ultimate-guide-to-choosing-a-durable-roof-metal-single-ply-and-the-latest-innovations-explained-2', destination: '/blog/the-ultimate-guide-to-choosing-a-durable-roof-metal-single-ply-and-the-latest-innovations-explained', permanent: true },

      // "Storms Effect Your Roof" duplicates
      { source: '/storms-effect-your-roof-2', destination: '/blog/storms-effect-your-roof-2', permanent: true },

      // "Commercial Roofing Solutions" duplicates
      { source: '/expert-commercial-roofing-solutions-for-your-business-2', destination: '/blog/commercial-roofing-solutions-for-your-business', permanent: true },
      { source: '/expert-commercial-roofing-solutions-for-your-business-3', destination: '/blog/commercial-roofing-solutions-for-your-business', permanent: true },

      // "Find Your Trusted Local Roofing Company" duplicates
      { source: '/find-your-trusted-local-roofing-company-today-3', destination: '/blog/find-your-trusted-local-roofing-company-today', permanent: true },

      // "Roof Coating vs Replacement LKN" duplicates
      { source: '/roof-coating-vs-roof-replacement-which-is-better-for-your-lkn-commercial-property-2', destination: '/blog/roof-coating-vs-roof-replacement-which-is-better-for-your-lkn-commercial-property', permanent: true },

      // ===========================================
      // SERVICE PAGE REDIRECTS
      // ===========================================
      { source: '/roof-replacement', destination: '/services/roof-replacement', permanent: true },
      { source: '/residential-roofing', destination: '/services/residential-roofing', permanent: true },
      { source: '/commercial-roofing', destination: '/services/commercial-roofing', permanent: true },
      { source: '/roofing-repair', destination: '/services/roof-repair', permanent: true },
      { source: '/emergency-roofing', destination: '/services/emergency-roofing', permanent: true },
      { source: '/emergency', destination: '/services/emergency-roofing', permanent: true },
      { source: '/24-7-emergency', destination: '/services/emergency-roofing', permanent: true },
      { source: '/emergency-roof-repair', destination: '/services/emergency-roofing', permanent: true },
      { source: '/storm-damage-roofing', destination: '/services/storm-damage', permanent: true },
      { source: '/gutter', destination: '/services/gutters', permanent: true },
      { source: '/siding', destination: '/services/siding', permanent: true },
      { source: '/roof-inspection-and-repair', destination: '/services/roof-inspection', permanent: true },
      { source: '/new-roof-installation-services', destination: '/services/roof-replacement', permanent: true },
      { source: '/fast-roof-replacement-services', destination: '/services/roof-replacement', permanent: true },
      { source: '/urgent-roof-repair', destination: '/services/emergency-roofing', permanent: true },
      { source: '/insurance-claim-assistance', destination: '/services/storm-damage', permanent: true },

      // ===========================================
      // "NEAR ME" REDIRECTS TO /SERVICES
      // ===========================================
      { source: '/residential-roofing-near-me', destination: '/services', permanent: true },
      { source: '/best-roofers-near-me', destination: '/services', permanent: true },
      { source: '/roof-repair-near-me-2', destination: '/services', permanent: true },
      { source: '/roofing-contractors-near-me', destination: '/services', permanent: true },
      { source: '/roofing-contractors-near-me-2', destination: '/services', permanent: true },
      { source: '/roof-replacement-near-me', destination: '/services', permanent: true },
      { source: '/roof-installation-near-me', destination: '/services', permanent: true },
      { source: '/local-roofers-near-me', destination: '/services', permanent: true },
      { source: '/best-roofing-company-near-me', destination: '/services', permanent: true },

      // ===========================================
      // LOCATION REDIRECTS
      // ===========================================
      { source: '/best-roofing-company-near-me-charlotte-nc', destination: '/locations/charlotte-nc', permanent: true },
      { source: '/best-roofing-company-near-me-concord-nc', destination: '/locations/concord-nc', permanent: true },
      { source: '/best-roofing-company-near-concord-nc', destination: '/locations/concord-nc', permanent: true },
      { source: '/roofing-company-near-me-huntersville-nc', destination: '/locations/huntersville-nc', permanent: true },
      { source: '/best-roofing-company-near-me-matthews-nc', destination: '/locations/matthews-nc', permanent: true },
      { source: '/best-roofing-company-near-me-mint-hill-nc', destination: '/locations/mint-hill-nc', permanent: true },
      { source: '/best-roofing-company-near-gastonia-nc', destination: '/locations/gastonia-nc', permanent: true },
      { source: '/best-roofing-company-near-me-cornelius-nc', destination: '/locations/cornelius-nc', permanent: true },
      { source: '/the-one-best-roofing-company-denver-nc', destination: '/locations/denver-nc', permanent: true },
      { source: '/denver-roofing-contractors', destination: '/locations/denver-nc', permanent: true },
      { source: '/charlotte-roofing-contractors', destination: '/locations/charlotte-nc', permanent: true },

      // ===========================================
      // SEO URL CANONICALIZATION REDIRECTS
      // ===========================================
      { source: '/storm-damage-roof-repair-charlotte', destination: '/storm-damage-roof-repair-charlotte-nc', permanent: true },

      // ===========================================
      // MISC PAGE REDIRECTS
      // ===========================================
      { source: '/frequently-asked-questions', destination: '/faq', permanent: true },
      { source: '/roof-financing', destination: '/roof-financing-charlotte-nc', permanent: true },
      { source: '/request-a-free-estimate', destination: '/contact', permanent: true },
      { source: '/why-were-different', destination: '/about', permanent: true },
      { source: '/service-area-2', destination: '/locations', permanent: true },

      // ===========================================
      // SEO CONSOLIDATION REDIRECTS
      // Consolidate competing pages to eliminate keyword cannibalization
      // ===========================================
      // Roof Installation → Roof Replacement (same service, different names)
      { source: '/roof-installation-charlotte-nc', destination: '/roof-replacement-charlotte-nc', permanent: true },
      // Emergency Roof Repair Charlotte → Main Repair Page (emergency is subset of repair)
      { source: '/emergency-roof-repair-charlotte-nc', destination: '/roof-repair-charlotte-nc', permanent: true },

      // ===========================================
      // KEYWORD CANNIBALIZATION FIXES
      // Consolidate duplicate-intent pages to single canonical URLs
      // ===========================================
      // Financing: /financing and /roof-financing-charlotte-nc are identical intent
      { source: '/financing', destination: '/roof-financing-charlotte-nc', permanent: true },
      // Roofing Services: /roofing-services duplicates /services (same title)
      { source: '/roofing-services', destination: '/services', permanent: true },
      // Leak repair: "leaking roof repair" = "roof leak repair" (same keyword)
      { source: '/leaking-roof-repair-charlotte-nc', destination: '/roof-leak-repair-charlotte-nc', permanent: true },
      // Storm: /storm-restoration duplicates /storm-damage-roof-repair-charlotte-nc
      { source: '/storm-restoration', destination: '/storm-damage-roof-repair-charlotte-nc', permanent: true },
      // Commercial contractors: near-identical title to /commercial-roofing-services
      { source: '/commercial-roofing-contractors-charlotte-nc', destination: '/commercial-roofing-services', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // HSTS - Force HTTPS for 1 year, include subdomains, allow preload list
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          // DNS prefetching for faster resource loading
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          // Security headers
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
          // Performance hints
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
      // Cache static assets for 1 year
      {
        source: '/(.*)\\.(ico|png|jpg|jpeg|gif|webp|svg|woff|woff2|ttf|eot)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Cache Next.js static files
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Cache optimized images
      {
        source: '/_next/image(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
    ];
  },
};

export default nextConfig;
