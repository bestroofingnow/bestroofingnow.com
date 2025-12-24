import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us | Free Roof Inspection Charlotte NC',
  description:
    'Contact Best Roofing Now for a free roof inspection in Charlotte NC. Call (704) 605-6047 or request an estimate online. 24/7 emergency service available.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
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
