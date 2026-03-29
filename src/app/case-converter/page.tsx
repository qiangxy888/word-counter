import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Converter — Free Online Text Case Changer',
  description: 'Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case. Free online case converter tool.',
  keywords: ['case converter', 'text case converter', 'uppercase converter', 'lowercase converter', 'title case converter'],
};

export default function CaseConverterPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Case Converter</h1>
          <p className="mt-2 text-gray-600">Convert text between UPPERCASE, lowercase, Title Case, and more.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <p className="text-gray-700 mb-4">Case conversion is built into our full Word Counter tool.</p>
          <Link href="/word-counter" className="inline-block bg-[--color-primary] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[--color-primary-dark]">Open Full Word Counter →</Link>
        </div>
        <div className="mt-12 prose prose-lg prose-blue max-w-none">
          <h2>Available Conversions</h2>
          <ul>
            <li><strong>UPPERCASE:</strong> ALL LETTERS BECOME CAPITALS</li>
            <li><strong>lowercase:</strong> all letters become small</li>
            <li><strong>Title Case:</strong> First Letter Of Each Word Is Capitalized</li>
            <li><strong>Sentence case:</strong> Only the first letter of each sentence is capitalized</li>
            <li><strong>camelCase:</strong> usedInProgramming for variable names</li>
            <li><strong>snake_case:</strong> used_in_programming_for_file_names</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
