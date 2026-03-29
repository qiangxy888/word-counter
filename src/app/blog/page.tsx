import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Writing Tips, Word Count Guides & SEO Tools',
  description: 'Writing tips, word count guides, and SEO content optimization articles from WordCountHub.',
};

const posts = [
  { slug: 'how-to-reduce-word-count', title: 'How to Reduce Word Count: 15 Editing Tips for Tighter Writing', description: 'Learn 15 proven techniques to cut word count without losing meaning.', date: '2026-03-29', readTime: '8 min' },
  { slug: 'best-word-counter-tools-2026', title: 'Best Word Counter Tools in 2026: Free Online Options Compared', description: 'Compare the best free word counter tools online. Features, accuracy, and recommendations.', date: '2026-03-27', readTime: '7 min' },
  { slug: 'ideal-word-count-blog-posts-essays', title: 'Ideal Word Count for Blog Posts, Essays, and Social Media in 2026', description: 'How long should your content be? Data-backed word count recommendations for every format.', date: '2026-03-28', readTime: '8 min' },
  { slug: 'what-is-flesch-reading-ease', title: 'What Is Flesch Reading Ease Score? How to Improve Readability', description: 'Understanding the Flesch formula and practical tips to make your writing more accessible.', date: '2026-03-25', readTime: '7 min' },
  { slug: 'social-media-character-limits-2026', title: 'Social Media Character Limits 2026: Complete Guide', description: 'Updated character and word limits for Twitter, Instagram, LinkedIn, Facebook, YouTube, and more.', date: '2026-03-20', readTime: '5 min' },
  { slug: 'ideal-essay-length-by-type', title: 'Ideal Essay Length by Type: College, Grad School, and Scholarship', description: 'Word count guidelines for every type of academic essay.', date: '2026-03-22', readTime: '7 min' },
  { slug: 'seo-content-length-guide', title: 'SEO Content Length: How Many Words Do You Need to Rank?', description: 'Data-driven guide to optimal content length for SEO.', date: '2026-03-20', readTime: '9 min' },
  { slug: 'readability-scores-explained', title: 'Readability Scores Explained: Flesch, Gunning Fog, and More', description: 'What readability scores mean and what to aim for.', date: '2026-03-17', readTime: '8 min' },
  { slug: 'writing-word-count-by-genre', title: 'Word Count by Genre: Novel, Novella, Short Story, and More', description: 'Industry-standard word counts for every fiction and non-fiction genre.', date: '2026-03-14', readTime: '7 min' },
  { slug: 'character-count-for-meta-descriptions', title: 'Character Count for Meta Descriptions, Titles, and Social Media', description: 'The exact character limits for SEO and social media.', date: '2026-03-11', readTime: '6 min' },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Blog</h1>
        <p className="mt-4 text-lg text-gray-600">Writing tips, word count guides, and SEO optimization.</p>
      </div>
      <div className="space-y-6">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-2"><time>{post.date}</time><span>·</span><span>{post.readTime}</span></div>
            <h2 className="text-xl font-bold text-gray-900 hover:text-[--color-primary]">{post.title}</h2>
            <p className="mt-2 text-gray-600">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
