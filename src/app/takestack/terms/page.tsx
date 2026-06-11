import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'TakeStack Terms of Use',
  description:
    'Terms of Use for the TakeStack iOS app, including subscription terms, acceptable use, and limitation of liability.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/takestack/terms`,
  },
};

export default function TakeStackTermsPage() {
  return (
    <main className="bg-white py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">TakeStack Terms of Use</h1>
        <p className="text-gray-500 mb-10">Effective Date: May 5, 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>These Terms of Use govern your use of TakeStack.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Use of the App</h2>
          <p>
            TakeStack is provided to help creators plan, record, organize, and prepare video
            projects. You are responsible for the content you create, record, import, save, share,
            or publish using the app.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">No Posting Guarantee</h2>
          <p>
            TakeStack does not post directly to TikTok, Instagram, YouTube, LinkedIn, or other
            platforms. Posting checklists are planning tools only.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Local Storage</h2>
          <p>
            Videos and project data are stored locally on your device unless you choose to export,
            share, save, or otherwise transfer them.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Subscriptions</h2>
          <p>
            TakeStack may offer auto-renewable subscriptions such as Pro Monthly and Pro Annual.
          </p>
          <p>
            Payment is charged to your Apple ID at confirmation of purchase. Subscriptions
            automatically renew unless canceled at least 24 hours before the end of the current
            period. You can manage or cancel subscriptions in your Apple account settings. Any
            unused portion of a free trial, if offered, may be forfeited when you purchase a
            subscription.
          </p>
          <p>
            Subscription features, pricing, and availability may change. If prices change, Apple
            will provide notice where required.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Acceptable Use</h2>
          <p>
            Do not use TakeStack to create, store, or share content that violates applicable law,
            infringes another person&apos;s rights, or violates the terms of any platform where you
            publish.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">No Warranty</h2>
          <p>
            TakeStack is provided as is and as available. We do not guarantee uninterrupted
            operation, compatibility with every device, or acceptance by any social platform.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we are not liable for indirect, incidental,
            special, consequential, or punitive damages arising from your use of the app.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Apple</h2>
          <p>
            Apple is not responsible for TakeStack or its content. Your use of the app may also be
            governed by Apple&apos;s App Store terms and Apple Media Services terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact</h2>
          <p>
            For support, contact:{' '}
            <a href="mailto:info@bestroofingnow.com" className="text-blue-700 underline">
              info@bestroofingnow.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
