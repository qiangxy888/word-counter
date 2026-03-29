import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About WordCountHub', description: 'Learn about WordCountHub — free word counter and text analysis tools.' };

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">About WordCountHub</h1>
      <div className="prose prose-lg prose-blue max-w-none text-gray-700">
        <p>WordCountHub is a free suite of text analysis tools designed for writers, students, SEO professionals, and social media managers.</p>
        <h2>Our Tools</h2>
        <ul>
          <li><strong>Word Counter:</strong> Count words, characters, sentences, paragraphs, and pages.</li>
          <li><strong>Reading Time:</strong> Estimate reading and speaking time based on word count.</li>
          <li><strong>Keyword Density:</strong> Analyze keyword frequency for SEO optimization.</li>
          <li><strong>Readability:</strong> Flesch Reading Ease and grade-level scoring.</li>
          <li><strong>Case Converter:</strong> Transform text between different cases.</li>
          <li><strong>Text Cleaner:</strong> Remove extra spaces, empty lines, and HTML tags.</li>
        </ul>
        <h2>Privacy</h2>
        <p>All analysis happens in your browser. Your text is never sent to any server. We have zero access to the content you analyze.</p>
        <h2>Revenue Model</h2>
        <p>WordCountHub is free to use. We earn a small commission when you click through to recommended writing tools like Grammarly or ProWritingAid.</p>
      </div>
    </div>
  );
}
