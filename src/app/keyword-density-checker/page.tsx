import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Keyword Density Checker — Free SEO Keyword Analysis Tool',
  description: 'Check keyword density for SEO optimization. Analyze single words, 2-grams, and 3-grams. Find your most used keywords and optimize content.',
  keywords: ['keyword density checker', 'keyword density tool', 'seo keyword analysis', 'keyword frequency counter'],
};

export default function KeywordDensityPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Keyword Density Checker</h1>
          <p className="mt-2 text-gray-600">Analyze keyword frequency and density for SEO optimization.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <p className="text-gray-700 mb-4">Keyword density analysis is part of our full Word Counter tool.</p>
          <Link href="/word-counter" className="inline-block bg-[--color-primary] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[--color-primary-dark]">Open Full Word Counter →</Link>
        </div>
        <div className="mt-12 prose prose-lg prose-blue max-w-none">
          <h2>What Is Keyword Density?</h2>
          <p>Keyword density is the percentage of times a keyword or phrase appears in a text compared to the total word count. It is an important factor in SEO — search engines use it to understand what your content is about.</p>
          <h2>Ideal Keyword Density</h2>
          <p>Most SEO experts recommend a keyword density of <strong>1-2%</strong> for your primary keyword. Going above 3% may be seen as keyword stuffing and could hurt your rankings.</p>
          <h2>Beyond Simple Density</h2>
          <p>Modern SEO focuses more on semantic relevance than raw keyword density. Tools like <a href="/go/surfer">Surfer SEO</a> analyze top-ranking pages and provide data-driven content optimization recommendations.</p>
        </div>
      </div>
    </div>
  );
}
