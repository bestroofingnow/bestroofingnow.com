import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of service for Best Roofing Now. Review the terms and conditions governing the use of our website and roofing services in Charlotte, NC and surrounding areas.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/terms`,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-white py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Effective Date: January 1, 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Welcome to the website of Best Roofing Now LLC (&quot;Best Roofing Now,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), located at{' '}
            <a href="https://www.bestroofingnow.com" className="text-blue-700 underline">
              www.bestroofingnow.com
            </a>{' '}
            (the &quot;Site&quot;). By accessing or using the Site, you agree to be bound by these
            Terms of Service (&quot;Terms&quot;). If you do not agree with these Terms, please do not
            use the Site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. About Our Services</h2>
          <p>
            Best Roofing Now is a family-owned, veteran-operated roofing company serving Charlotte,
            NC and surrounding areas including Huntersville, Mooresville, Cornelius, Davidson,
            Matthews, Concord, and other communities within approximately 50 miles of Charlotte. We
            provide residential and commercial roofing services including roof repair, roof
            replacement, roof inspections, emergency roofing, storm damage restoration, gutter
            services, siding services, and related exterior work.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Use of the Site</h2>
          <p>You agree to use the Site only for lawful purposes. You may not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Site in any way that violates applicable federal, state, or local laws</li>
            <li>
              Attempt to gain unauthorized access to any part of the Site, its servers, or connected
              systems
            </li>
            <li>
              Interfere with or disrupt the Site&apos;s operation, security, or performance
            </li>
            <li>
              Use automated tools, bots, or scrapers to access or collect data from the Site without
              our written consent
            </li>
            <li>
              Submit false, misleading, or fraudulent information through any form on the Site
            </li>
            <li>
              Reproduce, distribute, or publicly display content from the Site without our
              authorization
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            3. Estimates and Pricing
          </h2>
          <p>
            Any estimates, price ranges, or cost information presented on the Site are for general
            informational purposes only and do not constitute a binding offer or contract. Actual
            project costs depend on factors including scope of work, materials, roof size, condition,
            accessibility, and other site-specific variables.
          </p>
          <p>
            A formal written estimate or proposal provided by Best Roofing Now after an on-site
            inspection supersedes any pricing information displayed on the Site. All services are
            subject to a separate written agreement between Best Roofing Now and the property owner
            or authorized representative.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            4. Intellectual Property
          </h2>
          <p>
            All content on the Site, including but not limited to text, graphics, logos, photographs,
            images, videos, page layouts, and design elements, is the property of Best Roofing Now
            LLC or its licensors and is protected by United States copyright, trademark, and other
            intellectual property laws.
          </p>
          <p>
            The &quot;Best Roofing Now&quot; name, logo, and related branding are trademarks of Best
            Roofing Now LLC. You may not use our trademarks without prior written permission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            5. User-Submitted Content
          </h2>
          <p>
            When you submit information through our contact forms, estimate request forms, or other
            communication channels on the Site, you grant Best Roofing Now a non-exclusive,
            royalty-free right to use that information for the purpose of responding to your inquiry,
            providing services, and improving our business operations.
          </p>
          <p>
            If you submit photographs or images of your property (e.g., roof damage photos), you
            represent that you have the right to share those images and grant us permission to use
            them for project assessment. We may request separate permission before using any images
            for marketing or promotional purposes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            6. Third-Party Links and Services
          </h2>
          <p>
            The Site may contain links to third-party websites, including but not limited to
            financing partners (e.g., PowerPay), review platforms (e.g., Google, Yelp, BBB),
            manufacturer websites, social media platforms, and business directories. These links are
            provided for your convenience and informational purposes.
          </p>
          <p>
            We do not control, endorse, or assume responsibility for the content, privacy policies,
            or practices of any third-party websites. Accessing third-party sites is at your own
            risk, and you should review their terms and privacy policies independently.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            7. Warranties and Guarantees
          </h2>
          <p>
            Specific warranty terms for roofing materials, workmanship, and services are provided in
            writing as part of individual project agreements and are not governed by these Terms of
            Service. Material warranties are provided by the respective manufacturers (e.g.,
            CertainTeed, GAF, Owens Corning) and are subject to their terms and conditions.
          </p>
          <p>
            Information about warranties displayed on the Site is for general reference only. The
            written warranty documentation provided at the completion of your project constitutes the
            binding warranty terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            8. Limitation of Liability
          </h2>
          <p>
            The Site and its content are provided on an &quot;as is&quot; and &quot;as
            available&quot; basis without warranties of any kind, either express or implied. Best
            Roofing Now does not warrant that the Site will be uninterrupted, error-free, or free of
            harmful components.
          </p>
          <p>
            To the fullest extent permitted by law, Best Roofing Now LLC shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from your use
            of or inability to use the Site, including but not limited to loss of data, revenue, or
            profits, even if we have been advised of the possibility of such damages.
          </p>
          <p>
            Nothing in these Terms limits our liability for gross negligence, willful misconduct, or
            any liability that cannot be excluded under applicable law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Best Roofing Now LLC, its owners, employees,
            and agents from any claims, damages, losses, liabilities, or expenses (including
            reasonable attorneys&apos; fees) arising from your use of the Site, violation of these
            Terms, or infringement of any third-party rights.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            10. Insurance Claim Assistance
          </h2>
          <p>
            Best Roofing Now may provide assistance with roof insurance claims, including damage
            documentation, adjuster meetings, and claim filing support. However, we are not a
            licensed insurance adjuster, attorney, or public adjuster. Our assistance is provided as
            a courtesy and does not constitute legal, insurance, or financial advice.
          </p>
          <p>
            The property owner remains responsible for all decisions regarding their insurance claim.
            Approval and payment of claims is solely at the discretion of the insurance company.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            11. Financing Disclaimer
          </h2>
          <p>
            Roof financing options referenced on the Site are provided by third-party financing
            partners and are subject to credit approval and the terms of the financing provider. Best
            Roofing Now is not a lender and does not make credit decisions. All financing inquiries
            and applications are processed by the respective financing partner under their own terms
            and privacy policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State
            of North Carolina, without regard to its conflict of law principles. Any disputes arising
            from these Terms or your use of the Site shall be resolved in the state or federal courts
            located in Mecklenburg County, North Carolina.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            13. Changes to These Terms
          </h2>
          <p>
            We reserve the right to update or modify these Terms of Service at any time. Changes will
            be posted on this page with a revised effective date. Your continued use of the Site
            after any changes constitutes acceptance of the updated Terms. We encourage you to review
            this page periodically.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">14. Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid or unenforceable, the remaining
            provisions shall continue in full force and effect. The invalid or unenforceable
            provision will be modified to the minimum extent necessary to make it valid and
            enforceable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">15. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <ul className="list-none pl-0 space-y-2 mt-4">
            <li>
              <strong>Best Roofing Now LLC</strong>
            </li>
            <li>10130 Mallard Creek Rd, Ste 300, Charlotte, NC 28262</li>
            <li>
              Phone:{' '}
              <a href={`tel:${SITE_CONFIG.phoneClean}`} className="text-blue-700 underline">
                {SITE_CONFIG.phone}
              </a>
            </li>
            <li>
              Email:{' '}
              <a href="mailto:james@bestroofingnow.com" className="text-blue-700 underline">
                james@bestroofingnow.com
              </a>
            </li>
            <li>
              Website:{' '}
              <a href="https://www.bestroofingnow.com" className="text-blue-700 underline">
                www.bestroofingnow.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
