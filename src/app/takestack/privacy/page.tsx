import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'TakeStack Privacy Policy',
  description:
    'Privacy policy for the TakeStack iOS app. TakeStack stores your projects and recordings locally on your device and does not collect personal data.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/takestack/privacy`,
  },
};

export default function TakeStackPrivacyPage() {
  return (
    <main className="bg-white py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">TakeStack Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Effective Date: May 5, 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            TakeStack helps creators plan and record videos on iPhone. This policy explains what
            information the app uses and how it is handled.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Information We Do Not Collect
          </h2>
          <p>
            TakeStack does not require an account. We do not collect analytics, advertising
            identifiers, contact lists, location data, or uploaded video files.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Camera, Microphone, and Photos
          </h2>
          <p>
            TakeStack asks for camera and microphone access only when you use the recorder. Recorded
            videos are saved locally on your device unless you choose to share them or save them to
            Photos.
          </p>
          <p>
            TakeStack asks for Photos access when you choose to import a video, import a cover
            image, or save a take to your Photos library.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Local Project Data</h2>
          <p>
            Your project titles, scripts, shot checklists, takes, title ideas, thumbnail notes,
            caption notes, and posting checklists are stored locally on your device. TakeStack does
            not upload this project data to our servers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Purchases</h2>
          <p>
            TakeStack may offer paid subscriptions through Apple in-app purchase. Subscription
            purchase and billing information is handled by Apple. We receive subscription status
            from Apple&apos;s StoreKit APIs so the app can unlock Pro features.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Sharing</h2>
          <p>
            When you use system sharing controls, the selected video or project content is shared
            through the destination you choose. TakeStack does not control how third-party apps
            handle content after you share it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Children</h2>
          <p>TakeStack is not directed to children under 13.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes</h2>
          <p>
            We may update this policy as the app changes. The updated policy will be posted at the
            same privacy policy URL.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact</h2>
          <p>
            For privacy questions, contact:{' '}
            <a href="mailto:info@bestroofingnow.com" className="text-blue-700 underline">
              info@bestroofingnow.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
