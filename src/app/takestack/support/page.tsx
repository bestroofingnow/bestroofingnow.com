import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'TakeStack Support',
  description:
    'Support for the TakeStack iOS app. Get help with recording, the teleprompter, takes, subscriptions, and more.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/takestack/support`,
  },
};

export default function TakeStackSupportPage() {
  return (
    <main className="bg-white py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">TakeStack Support</h1>
        <p className="text-gray-500 mb-10">
          TakeStack is a shoot-day workflow app for solo video creators on iPhone.
        </p>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>
          <p>
            For help with TakeStack, email{' '}
            <a
              href="mailto:info@bestroofingnow.com?subject=TakeStack%20Support"
              className="text-blue-700 underline"
            >
              info@bestroofingnow.com
            </a>{' '}
            and include your iPhone model and iOS version. We aim to reply within 2 business days.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Questions</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Where are my recordings stored?
          </h3>
          <p>
            All recordings and project data are stored locally on your device. Nothing is uploaded
            to a server. You can save takes to your Photos library or share them with other apps at
            any time.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            The camera or microphone is not working
          </h3>
          <p>
            Open iOS Settings &gt; TakeStack and make sure Camera and Microphone access are enabled.
            You can also check permission status inside the app under Settings &gt; Permissions.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Is the teleprompter text recorded into my video?
          </h3>
          <p>
            No. The teleprompter overlay is visible only on your screen while recording and is never
            burned into the recorded video.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            How do I manage or cancel my subscription?
          </h3>
          <p>
            Subscriptions are billed through your Apple ID. Open iOS Settings &gt; your name &gt;
            Subscriptions to manage or cancel. You can restore previous purchases from TakeStack
            Settings &gt; Restore Purchases.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Legal</h2>
          <p>
            <a href="/takestack/privacy" className="text-blue-700 underline">
              Privacy Policy
            </a>{' '}
            ·{' '}
            <a href="/takestack/terms" className="text-blue-700 underline">
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
