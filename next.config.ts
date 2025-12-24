import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bestroofingnow.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },

  async redirects() {
    return [
      // Service page redirects
      { source: '/residential-roofing', destination: '/services/residential-roofing', permanent: true },
      { source: '/commercial-roofing', destination: '/services/commercial-roofing', permanent: true },
      { source: '/roofing-repair', destination: '/services/roof-repair', permanent: true },
      { source: '/emergency-roofing', destination: '/services/emergency-roofing', permanent: true },
      { source: '/storm-damage-roofing', destination: '/services/storm-damage', permanent: true },
      { source: '/gutter', destination: '/services/gutters', permanent: true },
      { source: '/siding', destination: '/services/siding', permanent: true },
      { source: '/roof-inspection-and-repair', destination: '/services/roof-inspection', permanent: true },
      { source: '/new-roof-installation-services', destination: '/services/roof-replacement', permanent: true },
      { source: '/fast-roof-replacement-services', destination: '/services/roof-replacement', permanent: true },
      { source: '/urgent-roof-repair', destination: '/services/emergency-roofing', permanent: true },
      { source: '/insurance-claim-assistance', destination: '/services/storm-damage', permanent: true },
      
      // Near me redirects to /services
      { source: '/residential-roofing-near-me', destination: '/services', permanent: true },
      { source: '/best-roofers-near-me', destination: '/services', permanent: true },
      { source: '/roof-repair-near-me-2', destination: '/services', permanent: true },
      { source: '/roofing-contractors-near-me', destination: '/services', permanent: true },
      { source: '/roofing-contractors-near-me-2', destination: '/services', permanent: true },
      { source: '/roof-replacement-near-me', destination: '/services', permanent: true },
      { source: '/roof-installation-near-me', destination: '/services', permanent: true },
      { source: '/local-roofers-near-me', destination: '/services', permanent: true },
      { source: '/best-roofing-company-near-me', destination: '/services', permanent: true },
      
      // Location blog posts to location pages
      { source: '/best-roofing-company-near-me-charlotte-nc', destination: '/locations/charlotte-nc', permanent: true },
      { source: '/best-roofing-company-near-me-concord-nc', destination: '/locations/concord-nc', permanent: true },
      { source: '/best-roofing-company-near-concord-nc', destination: '/locations/concord-nc', permanent: true },
      { source: '/roofing-company-near-me-huntersville-nc', destination: '/locations/huntersville-nc', permanent: true },
      { source: '/best-roofing-company-near-me-matthews-nc', destination: '/locations/matthews-nc', permanent: true },
      { source: '/best-roofing-company-near-me-mint-hill-nc', destination: '/locations/mint-hill-nc', permanent: true },
      { source: '/best-roofing-company-near-gastonia-nc', destination: '/locations/gastonia-nc', permanent: true },
      { source: '/best-roofing-company-near-me-cornelius-nc', destination: '/locations/cornelius-nc', permanent: true },
      { source: '/the-one-best-roofing-company-denver-nc', destination: '/locations/denver-nc', permanent: true },
      { source: '/roofing-denver-nc', destination: '/locations/denver-nc', permanent: true },
      { source: '/denver-roofing-contractors', destination: '/locations/denver-nc', permanent: true },
      { source: '/charlotte-roofing-contractors', destination: '/locations/charlotte-nc', permanent: true },
      
      // Misc pages
      { source: '/frequently-asked-questions', destination: '/faq', permanent: true },
      { source: '/roof-financing', destination: '/financing', permanent: true },
      { source: '/request-a-free-estimate', destination: '/contact', permanent: true },
      { source: '/why-were-different', destination: '/about', permanent: true },
      { source: '/service-area-2', destination: '/locations', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ];
  },
};

export default nextConfig;
