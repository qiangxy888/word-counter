import Link from 'next/link';
import type { Metadata } from 'next';

const posts: Record<string, { title: string; description: string; date: string; readTime: string; content: string; keywords: string[] }> = {
  'ideal-word-count-blog-posts-essays': {
    title: 'Ideal Word Count for Blog Posts, Essays, and Social Media in 2026',
    description: 'Data-backed word count recommendations for every content format.',
    date: '2026-03-28', readTime: '8 min',
    keywords: ['ideal word count', 'blog post length', 'essay word count', 'how many words'],
    content: `<p>One of the most common questions writers face is: <strong>How long should my content be?</strong> The answer depends on the format, audience, and purpose. Here are data-backed recommendations for 2026.</p>
<h2>Blog Posts</h2>
<p>For SEO, the sweet spot is <strong>1,500-2,500 words</strong>. Studies consistently show that longer, comprehensive content ranks higher in Google. However, quality matters more than quantity — 1,500 well-written words will outperform 3,000 words of fluff.</p>
<ul><li><strong>Short-form:</strong> 300-600 words — news updates, quick tips</li><li><strong>Standard:</strong> 1,000-1,500 words — how-to guides, lists</li><li><strong>Long-form:</strong> 2,000-3,000 words — comprehensive guides, pillar content</li><li><strong>Ultimate guides:</strong> 3,000-5,000+ words — definitive resources</li></ul>
<h2>Academic Essays</h2>
<ul><li><strong>High school essay:</strong> 500-1,000 words</li><li><strong>College essay:</strong> 1,500-3,000 words</li><li><strong>Graduate thesis:</strong> 10,000-20,000 words</li><li><strong>Dissertation:</strong> 40,000-80,000 words</li></ul>
<h2>Social Media Posts</h2>
<ul><li><strong>Twitter/X:</strong> 71-100 characters get the most engagement</li><li><strong>Instagram:</strong> 138-150 characters for captions (though up to 2,200 allowed)</li><li><strong>LinkedIn:</strong> 1,300-2,000 characters for articles</li><li><strong>Facebook:</strong> 40-80 characters for highest engagement</li></ul>
<h2>Email</h2>
<p>Marketing emails perform best at <strong>50-125 words</strong>. Subject lines should be 6-10 words. Newsletter content can be 200-500 words.</p>
<p>Use our <a href="/word-counter">free word counter</a> to check your content length instantly.</p>`,
  },
  'what-is-flesch-reading-ease': {
    title: 'What Is Flesch Reading Ease Score? How to Improve Readability',
    description: 'Understanding the Flesch formula and tips to improve your writing.',
    date: '2026-03-25', readTime: '7 min',
    keywords: ['flesch reading ease', 'readability score', 'flesch kincaid', 'improve readability'],
    content: `<p>The Flesch Reading Ease score is one of the most widely used readability metrics. It tells you how easy or difficult your text is to understand.</p>
<h2>The Formula</h2>
<p>The Flesch Reading Ease formula considers two factors: <strong>average sentence length</strong> (words per sentence) and <strong>average syllables per word</strong>.</p>
<p>Score = 206.835 - (1.015 × ASL) - (84.6 × ASW)</p>
<h2>Score Interpretation</h2>
<ul><li><strong>90-100:</strong> Very Easy — 5th grade level</li><li><strong>80-89:</strong> Easy — 6th grade level</li><li><strong>70-79:</strong> Fairly Easy — 7th grade level</li><li><strong>60-69:</strong> Standard — 8th-9th grade (recommended for most content)</li><li><strong>50-59:</strong> Fairly Difficult — 10th-12th grade</li><li><strong>30-49:</strong> Difficult — College level</li><li><strong>0-29:</strong> Very Difficult — Graduate level</li></ul>
<h2>How to Improve Your Score</h2>
<ul><li><strong>Shorten sentences:</strong> Aim for 15-20 words per sentence on average</li><li><strong>Use simpler words:</strong> Replace multi-syllable words with shorter alternatives</li><li><strong>Break up paragraphs:</strong> Keep paragraphs to 3-4 sentences</li><li><strong>Use active voice:</strong> "The dog bit the man" vs "The man was bitten by the dog"</li><li><strong>Cut unnecessary words:</strong> Remove filler phrases like "in order to" (use "to")</li></ul>
<p>Tools like <a href="/go/grammarly">Grammarly</a> and <a href="/go/hemingway">Hemingway Editor</a> can automatically highlight complex sentences and suggest improvements.</p>
<p>Check your readability score instantly with our <a href="/word-counter">free word counter</a>.</p>`,
  },
  'social-media-character-limits-2026': {
    title: 'Social Media Character Limits 2026: Complete Guide',
    description: 'Updated character limits for every major social media platform.',
    date: '2026-03-20', readTime: '5 min',
    keywords: ['social media character limits', 'twitter character limit', 'instagram character limit', 'linkedin character limit'],
    content: `<p>Social media platforms each have different character and word limits. Here is the complete, updated guide for 2026.</p>
<h2>Twitter / X</h2>
<ul><li><strong>Tweet:</strong> 280 characters (free), 25,000 characters (Premium)</li><li><strong>Display name:</strong> 50 characters</li><li><strong>Bio:</strong> 160 characters</li><li><strong>Best practice:</strong> 71-100 characters for highest engagement</li></ul>
<h2>Instagram</h2>
<ul><li><strong>Caption:</strong> 2,200 characters</li><li><strong>Bio:</strong> 150 characters</li><li><strong>Hashtags:</strong> 30 maximum per post</li><li><strong>Best practice:</strong> 138-150 characters for captions</li></ul>
<h2>LinkedIn</h2>
<ul><li><strong>Post:</strong> 3,000 characters</li><li><strong>Article:</strong> 120,000 characters</li><li><strong>Headline:</strong> 220 characters</li><li><strong>Best practice:</strong> 1,300-2,000 characters for posts</li></ul>
<h2>Facebook</h2>
<ul><li><strong>Post:</strong> 63,206 characters</li><li><strong>Ad headline:</strong> 40 characters</li><li><strong>Ad description:</strong> 125 characters</li><li><strong>Best practice:</strong> 40-80 characters for organic posts</li></ul>
<h2>YouTube</h2>
<ul><li><strong>Title:</strong> 100 characters</li><li><strong>Description:</strong> 5,000 characters</li><li><strong>Best practice:</strong> 55-70 character titles, 200+ word descriptions</li></ul>
<h2>SEO Meta Tags</h2>
<ul><li><strong>Title tag:</strong> 50-60 characters</li><li><strong>Meta description:</strong> 150-160 characters</li></ul>
<p>Use our <a href="/word-counter">word counter tool</a> to check your text against all these limits in real-time.</p>`,
  },
};

export async function generateStaticParams() { return Object.keys(posts).map(slug => ({ slug })); }

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return { title: post.title, description: post.description, keywords: post.keywords };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return <div className="py-20 text-center">Post not found</div>;

  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.description, datePublished: post.date, author: { '@type': 'Organization', name: 'WordCountHub' } };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="text-[--color-primary] hover:underline text-sm mb-4 inline-block">← Back to Blog</Link>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">{post.title}</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500"><time>{post.date}</time><span>·</span><span>{post.readTime}</span></div>
        <div className="mt-8 prose prose-lg prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Count Your Words</h2>
          <p className="mt-3 text-gray-600">Check word count, readability, and keyword density — free and instant.</p>
          <Link href="/word-counter" className="mt-6 inline-block bg-[--color-primary] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[--color-primary-dark] shadow-lg shadow-blue-200">Open Word Counter →</Link>
        </div>
      </article>
    </>
  );
}
