import Link from 'next/link';

const tools = [
  { href: '/word-counter', icon: '📝', title: 'Word Counter', desc: 'Count words, characters, sentences, paragraphs, and pages.' },
  { href: '/character-counter', icon: '🔤', title: 'Character Counter', desc: 'Count characters with and without spaces. Check social media limits.' },
  { href: '/reading-time-calculator', icon: '⏱', title: 'Reading Time', desc: 'Estimate reading and speaking time for any text.' },
  { href: '/keyword-density-checker', icon: '🔑', title: 'Keyword Density', desc: 'Analyze keyword frequency for SEO optimization.' },
  { href: '/case-converter', icon: '🔠', title: 'Case Converter', desc: 'Convert between UPPERCASE, lowercase, Title Case, and more.' },
];

const faqs = [
  { q: 'How does the word counter work?', a: 'Our word counter splits your text by whitespace and counts the resulting tokens. It runs entirely in your browser — your text is never sent to any server.' },
  { q: 'Is WordCountHub free?', a: 'Yes, completely free with no sign-up required. All tools work instantly in your browser.' },
  { q: 'How is reading time calculated?', a: 'We use an average reading speed of 225 words per minute for silent reading and 130 words per minute for speaking.' },
  { q: 'What is Flesch Reading Ease?', a: 'The Flesch Reading Ease score rates text on a 100-point scale. Higher scores mean easier reading. A score of 60-70 is considered standard and accessible to most readers.' },
  { q: 'Is my text stored?', a: 'No. All analysis happens locally in your browser using JavaScript. We have zero access to your text.' },
];

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Count Words. <span className="text-[--color-primary]">Analyze Text.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Free word counter with reading time, keyword density, readability score, case converter, and social media limits — all in one tool.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/word-counter" className="inline-block bg-[--color-primary] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[--color-primary-dark] shadow-lg shadow-blue-200">
              Open Word Counter — Free →
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>🆓 No sign-up</span><span>🔒 100% private</span><span>📊 6 tools in one</span><span>⚡ Real-time</span>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">All-in-One Text Analysis</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">Everything you need to analyze, optimize, and transform your text.</p>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map(t => (
              <Link key={t.href} href={t.href} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group">
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[--color-primary]">{t.title}</h3>
                <p className="mt-2 text-gray-600">{t.desc}</p>
              </Link>
            ))}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <span className="text-4xl mb-4">🧹</span>
              <h3 className="text-xl font-semibold text-gray-900">Text Cleaner</h3>
              <p className="mt-2 text-gray-600">Remove extra spaces, empty lines, HTML tags, and special characters.</p>
              <Link href="/word-counter" className="mt-4 text-[--color-primary] font-semibold hover:underline">Try it →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who Uses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">Who Uses WordCountHub?</h2>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '📚', title: 'Students', desc: 'Meet essay word count requirements and improve readability.' },
              { icon: '✍️', title: 'Writers & Bloggers', desc: 'Optimize article length and keyword density for SEO.' },
              { icon: '📱', title: 'Social Media Managers', desc: 'Stay within character limits for every platform.' },
              { icon: '🔍', title: 'SEO Professionals', desc: 'Analyze keyword density and content readability.' },
            ].map(u => (
              <div key={u.title} className="text-center">
                <div className="text-4xl mb-4">{u.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{u.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">FAQ</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <details key={faq.q} className="bg-gray-50 rounded-xl border border-gray-200">
                <summary className="flex items-center justify-between px-6 py-5 font-semibold text-gray-900 hover:bg-gray-100 cursor-pointer">
                  {faq.q}
                  <svg className="faq-icon w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
