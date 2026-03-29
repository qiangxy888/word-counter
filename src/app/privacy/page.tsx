import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy', description: 'WordCountHub privacy policy — your text stays in your browser.' };

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-lg prose-blue max-w-none text-gray-700">
        <p><strong>Last updated:</strong> March 2026</p>
        <h2>Your Text Data</h2>
        <p><strong>We do not collect, store, or transmit any text you input.</strong> All text analysis happens entirely in your browser using JavaScript.</p>
        <h2>Analytics</h2>
        <p>We may use Google Analytics to understand website usage. You can opt out using a browser extension.</p>
        <h2>Affiliate Links</h2>
        <p>Our site contains affiliate links to writing tools. We earn commissions on purchases at no extra cost to you.</p>
        <h2>Contact</h2>
        <p>For questions, visit our About page.</p>
      </div>
    </div>
  );
}
