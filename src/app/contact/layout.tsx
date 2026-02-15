import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Best Roofing Now for a free roof inspection in Charlotte NC. Call (704) 605-6047 or request an estimate online. 24/7 emergency service available.',
  keywords: [
    'contact roofer Charlotte',
    'free roof inspection Charlotte NC',
    'roofing estimate Charlotte',
    'roofing company phone number',
    'Charlotte roofer contact',
    'schedule roof inspection',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  openGraph: {
    title: 'Contact Us | Best Roofing Now',
    description:
      'Get a free roof inspection from Charlotte\'s top-rated roofing contractor. Call (704) 605-6047 or schedule online. 24/7 emergency service.',
    url: `${SITE_CONFIG.url}/contact`,
    type: 'website',
    images: [
      {
        url: 'https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png',
        width: 1200,
        height: 630,
        alt: 'Contact Best Roofing Now - Charlotte NC Roofing Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Best Roofing Now',
    description:
      'Get a free roof inspection from Charlotte\'s top-rated roofing contractor. Call (704) 605-6047.',
    images: ['https://cms.bestroofingnow.com/wp-content/uploads/2025/12/Untitled-design-53.png'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_CONFIG.url },
          { name: 'Contact', url: `${SITE_CONFIG.url}/contact` },
        ]}
      />
      {children}
    </>
  );
}
