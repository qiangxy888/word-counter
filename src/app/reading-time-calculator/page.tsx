import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reading Time Calculator — Estimate Read & Speaking Time Free',
  description: 'Calculate reading time and speaking time for any text. Based on average reading speed (225 WPM) and speaking speed (130 WPM). Free, instant.',
  keywords: ['reading time calculator', 'how long to read', 'speaking time calculator', 'words per minute'],
};

export default function ReadingTimePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Reading Time Calculator</h1>
          <p className="mt-2 text-gray-600">Estimate how long it takes to read or speak your text aloud.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <p className="text-gray-700 mb-4">Reading time estimation is built into our full Word Counter tool.</p>
          <Link href="/word-counter" className="inline-block bg-[--color-primary] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[--color-primary-dark]">Open Full Word Counter →</Link>
        </div>
        <div className="mt-12 prose prose-lg prose-blue max-w-none">
          <h2>How Reading Time Is Calculated</h2>
          <p>The average adult reads at approximately <strong>225 words per minute</strong> (WPM) for non-fiction content and up to 300 WPM for fiction. Our calculator uses 225 WPM as the baseline.</p>
          <h2>Speaking Time</h2>
          <p>The average speaking rate is about <strong>130 words per minute</strong>. This is useful for estimating presentation length, podcast scripts, or speech preparation.</p>
          <h2>Ideal Content Length</h2>
          <ul>
            <li><strong>Blog posts:</strong> 1,500-2,500 words (7-11 min read) for SEO</li>
            <li><strong>Social media:</strong> Under 300 words (1-2 min read)</li>
            <li><strong>Emails:</strong> 50-200 words (under 1 min)</li>
            <li><strong>Presentations:</strong> 100-150 words per minute of speaking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
