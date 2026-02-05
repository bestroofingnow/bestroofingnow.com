import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Best Roofing Now. Learn how we collect, use, and protect your personal information when you visit our website or use our roofing services in Charlotte, NC.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Effective Date: January 1, 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Best Roofing Now LLC (&quot;Best Roofing Now,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
            protecting the privacy of visitors to our website at{' '}
            <a href="https://www.bestroofingnow.com" className="text-blue-700 underline">
              www.bestroofingnow.com
            </a>{' '}
            (the &quot;Site&quot;). This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit the Site, submit a form, or contact us for
            roofing services in the Charlotte, NC area.
          </p>
          <p>
            By using our Site, you agree to the practices described in this Privacy Policy. If you do
            not agree, please discontinue use of the Site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
          <p>
            When you fill out a contact form, request a free estimate, or otherwise reach out to us,
            we may collect the following personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Street address or service location</li>
            <li>Details about your roofing project or inquiry</li>
            <li>Photos or images you upload related to your roof</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Automatically Collected Information
          </h3>
          <p>
            When you visit the Site, certain information is collected automatically through cookies
            and similar tracking technologies, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address and approximate geographic location</li>
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Pages visited, time spent on pages, and navigation paths</li>
            <li>Referring website or search terms used to find us</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your inquiries and provide roofing estimates</li>
            <li>Schedule inspections, repairs, and other roofing services</li>
            <li>Communicate with you about your project via phone, email, or text</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Analyze site traffic and usage patterns to optimize performance</li>
            <li>Send occasional service-related updates or promotions (with your consent)</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            3. Cookies and Tracking Technologies
          </h2>
          <p>Our Site uses cookies and similar technologies to enhance your browsing experience. These include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Required for core site functionality such as page
              navigation and form submissions.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> We use Google Analytics to understand how visitors
              interact with our Site. Google Analytics collects data such as pages visited, session
              duration, and traffic sources. This data is aggregated and anonymous.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> We may use Google Ads remarketing tags or
              Facebook Pixel to show relevant advertisements to past visitors.
            </li>
          </ul>
          <p>
            You can manage cookie preferences through your browser settings. Disabling cookies may
            affect your ability to use certain features of the Site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            4. Third-Party Services
          </h2>
          <p>
            We may share your information with trusted third-party services that assist us in
            operating our business, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google Analytics:</strong> Website traffic analysis and reporting.
            </li>
            <li>
              <strong>Google Ads:</strong> Online advertising and remarketing.
            </li>
            <li>
              <strong>Lead Form and CRM Providers:</strong> To manage inquiries and schedule
              services.
            </li>
            <li>
              <strong>Email and SMS Services:</strong> To send project updates and communications.
            </li>
            <li>
              <strong>Payment Processors:</strong> To process payments securely for roofing services.
            </li>
            <li>
              <strong>Financing Partners (e.g., PowerPay):</strong> If you apply for roof financing,
              your application is processed by our financing partner under their own privacy policy.
            </li>
          </ul>
          <p>
            These third parties are bound by their own privacy policies. We do not sell your personal
            information to any third party.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical security measures to
            protect your personal information from unauthorized access, alteration, disclosure, or
            destruction. Our Site uses SSL/TLS encryption to protect data transmitted between your
            browser and our servers.
          </p>
          <p>
            However, no method of electronic transmission or storage is completely secure. While we
            strive to protect your information, we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes
            described in this Privacy Policy, including providing services, maintaining customer
            records, complying with legal obligations, and resolving disputes. Contact and project
            information is typically retained for the duration of any applicable warranty period.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Opt out of the sale of personal information (we do not sell your data)</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the information provided below.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            8. Children&apos;s Privacy
          </h2>
          <p>
            Our Site is not intended for individuals under the age of 18. We do not knowingly collect
            personal information from children. If we learn that we have collected information from a
            child under 18, we will take steps to delete that information promptly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            9. Links to Other Websites
          </h2>
          <p>
            Our Site may contain links to third-party websites, including review platforms, social
            media profiles, manufacturer websites, and financing partners. We are not responsible for
            the privacy practices of these external sites. We encourage you to review the privacy
            policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            10. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices
            or applicable laws. Updates will be posted on this page with a revised effective date. We
            encourage you to review this policy periodically.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact
            us:
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
