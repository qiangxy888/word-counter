import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Character Counter — Count Characters, Letters & Spaces Online',
  description: 'Free online character counter. Count characters with and without spaces, letters, words, sentences. Check social media limits for Twitter, Instagram, LinkedIn.',
  keywords: ['character counter', 'character count', 'letter counter', 'count characters online'],
};

export default function CharacterCounterPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Character Counter</h1>
          <p className="mt-2 text-gray-600">Count characters, letters, and spaces in your text. Check social media character limits.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <p className="text-gray-700 mb-4">Our character counter is part of the full Word Counter tool with all features included.</p>
          <Link href="/word-counter" className="inline-block bg-[--color-primary] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[--color-primary-dark]">
            Open Full Word Counter →
          </Link>
        </div>
        <div className="mt-12 prose prose-lg prose-blue max-w-none">
          <h2>What Is a Character Counter?</h2>
          <p>A character counter is a tool that counts the number of individual characters in a piece of text, including letters, numbers, symbols, and spaces. It is essential for social media posts, meta descriptions, SMS messages, and any content with length restrictions.</p>
          <h2>Common Character Limits</h2>
          <ul>
            <li><strong>Twitter/X:</strong> 280 characters per tweet</li>
            <li><strong>Instagram:</strong> 2,200 characters per caption</li>
            <li><strong>LinkedIn:</strong> 3,000 characters per post</li>
            <li><strong>Meta Description:</strong> 155-160 characters for optimal SEO</li>
            <li><strong>SMS:</strong> 160 characters per message</li>
          </ul>
          <h2>Characters vs Words</h2>
          <p>Characters count every individual letter, number, space, and punctuation mark. Words are groups of characters separated by spaces. Both metrics are important for different purposes.</p>
        </div>
      </div>
    </div>
  );
}
