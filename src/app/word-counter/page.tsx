'use client';

import { useState, useMemo } from 'react';
import { analyzeText, analyzeKeywords, analyzeReadability, getSocialLimits, convertCase, cleanText } from '@/lib/analyzer';

const statCards = [
  { key: 'words', label: 'Words', icon: '📝' },
  { key: 'characters', label: 'Characters', icon: '🔤' },
  { key: 'charactersNoSpaces', label: 'Chars (no spaces)', icon: '🔡' },
  { key: 'sentences', label: 'Sentences', icon: '📄' },
  { key: 'paragraphs', label: 'Paragraphs', icon: '📑' },
  { key: 'pages', label: 'Pages', icon: '📖' },
] as const;

export default function WordCounterPage() {
  const [text, setText] = useState('');
  const [activeTab, setActiveTab] = useState<'stats' | 'keywords' | 'readability' | 'social' | 'case' | 'clean'>('stats');

  const stats = useMemo(() => analyzeText(text), [text]);
  const keywords = useMemo(() => analyzeKeywords(text), [text]);
  const readability = useMemo(() => analyzeReadability(text), [text]);
  const socialLimits = useMemo(() => getSocialLimits(text), [text]);

  const [caseMode, setCaseMode] = useState('upper');
  const caseModes = [
    { id: 'upper', label: 'UPPER' }, { id: 'lower', label: 'lower' },
    { id: 'title', label: 'Title Case' }, { id: 'sentence', label: 'Sentence case' },
    { id: 'camel', label: 'camelCase' }, { id: 'snake', label: 'snake_case' },
  ];

  const cleanModes = [
    { id: 'extraSpaces', label: 'Remove Extra Spaces' },
    { id: 'emptyLines', label: 'Remove Empty Lines' },
    { id: 'htmlTags', label: 'Strip HTML Tags' },
    { id: 'specialChars', label: 'Remove Special Chars' },
  ];

  const handleCopy = (t: string) => navigator.clipboard.writeText(t);

  const readabilityColor = readability.fleschEase >= 60 ? 'text-green-600 bg-green-50' : readability.fleschEase >= 40 ? 'text-yellow-600 bg-yellow-50' : 'text-red-600 bg-red-50';

  const tabs = [
    { id: 'stats', label: '📊 Stats', mobileLabel: 'Stats' },
    { id: 'keywords', label: '🔑 Keywords', mobileLabel: 'Keywords' },
    { id: 'readability', label: '📖 Readability', mobileLabel: 'Read' },
    { id: 'social', label: '📱 Social Limits', mobileLabel: 'Social' },
    { id: 'case', label: '🔠 Case Convert', mobileLabel: 'Case' },
    { id: 'clean', label: '🧹 Clean Text', mobileLabel: 'Clean' },
  ] as const;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Word Counter</h1>
          <p className="mt-1 text-gray-600">Count words, characters, sentences. Analyze readability, keyword density, and more.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Text Input */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-gray-700">Your Text</label>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>⏱ {stats.readingTime} read</span>
                  <span>🗣 {stats.speakingTime} speak</span>
                </div>
              </div>
              <textarea
                className="w-full h-64 p-4 border border-gray-200 rounded-xl text-sm text-gray-800 leading-relaxed resize-y focus:outline-none focus:border-[--color-primary] focus:ring-2 focus:ring-blue-100"
                placeholder="Start typing or paste your text here..."
                value={text}
                onChange={e => setText(e.target.value)}
              />
              {text && (
                <button onClick={() => setText('')} className="mt-2 text-xs text-gray-400 hover:text-gray-600">Clear text</button>
              )}
            </div>

            {/* Tabs */}
            <div className="mt-6 bg-white rounded-2xl border border-gray-200">
              <div className="flex overflow-x-auto border-b border-gray-200">
                {tabs.map(t => (
                  <button key={t.id} onClick={() => setActiveTab(t.id)}
                    className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${activeTab === t.id ? 'text-[--color-primary] border-b-2 border-[--color-primary]' : 'text-gray-500 hover:text-gray-700'}`}>
                    <span className="hidden sm:inline">{t.label}</span>
                    <span className="sm:hidden">{t.mobileLabel}</span>
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* Stats Tab */}
                {activeTab === 'stats' && (
                  <div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {statCards.map(s => (
                        <div key={s.key} className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-2xl mb-1">{s.icon}</div>
                          <div className="text-2xl font-bold text-gray-900">{stats[s.key].toLocaleString()}</div>
                          <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>⏱ Reading Time: <strong>{stats.readingTime}</strong></div>
                      <div>🗣 Speaking Time: <strong>{stats.speakingTime}</strong></div>
                      <div>📏 Avg Word Length: <strong>{stats.avgWordLength}</strong> chars</div>
                      <div>📐 Avg Sentence Length: <strong>{stats.avgSentenceLength}</strong> words</div>
                      {stats.longestWord && <div className="col-span-2">🏆 Longest Word: <strong>{stats.longestWord}</strong></div>}
                    </div>
                  </div>
                )}

                {/* Keywords Tab */}
                {activeTab === 'keywords' && (
                  <div className="space-y-6">
                    {[{ label: 'Top Keywords', data: keywords.single }, { label: 'Top 2-Word Phrases', data: keywords.bigrams }, { label: 'Top 3-Word Phrases', data: keywords.trigrams }].map(section => (
                      <div key={section.label}>
                        <h3 className="text-sm font-semibold text-gray-700 mb-3">{section.label}</h3>
                        {section.data.length === 0 ? <p className="text-sm text-gray-400">Not enough text to analyze.</p> : (
                          <div className="space-y-2">
                            {section.data.map((kw, i) => (
                              <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2">
                                <span className="text-sm text-gray-800 font-medium">{kw.word}</span>
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                  <span>{kw.count}x</span>
                                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{kw.density}%</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    {stats.words > 0 && (
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                        💡 <strong>SEO Tip:</strong> Aim for 1-2% keyword density for your target keyword. Use <a href="/go/surfer" className="text-[--color-primary] underline">Surfer SEO</a> for advanced optimization.
                      </div>
                    )}
                  </div>
                )}

                {/* Readability Tab */}
                {activeTab === 'readability' && (
                  <div>
                    <div className="flex items-center gap-6 mb-6">
                      <div className={`w-24 h-24 rounded-2xl flex flex-col items-center justify-center ${readabilityColor}`}>
                        <span className="text-3xl font-extrabold">{readability.fleschEase}</span>
                        <span className="text-xs">/ 100</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{readability.label}</h3>
                        <p className="text-sm text-gray-600 mt-1">{readability.description}</p>
                        <p className="text-sm text-gray-500 mt-2">Grade Level: <strong>{readability.fleschGrade}</strong></p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className={`h-3 rounded-full transition-all ${readability.fleschEase >= 60 ? 'bg-green-500' : readability.fleschEase >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${readability.fleschEase}%` }} />
                    </div>
                    <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                      💡 Want to improve your readability? <a href="/go/grammarly" className="text-[--color-primary] underline font-semibold">Try Grammarly</a> — it suggests simpler words and shorter sentences.
                    </div>
                  </div>
                )}

                {/* Social Limits Tab */}
                {activeTab === 'social' && (
                  <div className="space-y-3">
                    {socialLimits.map(s => (
                      <div key={s.platform} className={`flex items-center justify-between p-4 rounded-xl border ${s.exceeded ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'}`}>
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{s.icon}</span>
                          <span className="text-sm font-medium text-gray-800">{s.platform}</span>
                        </div>
                        <div className="text-sm">
                          <span className={s.exceeded ? 'text-red-600 font-bold' : 'text-gray-600'}>{s.current.toLocaleString()}</span>
                          <span className="text-gray-400"> / {s.limit.toLocaleString()}</span>
                          {s.exceeded && <span className="ml-2 text-xs text-red-500">⚠️ Over limit</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Case Converter Tab */}
                {activeTab === 'case' && (
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseModes.map(m => (
                        <button key={m.id} onClick={() => setCaseMode(m.id)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${caseMode === m.id ? 'bg-[--color-primary] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                          {m.label}
                        </button>
                      ))}
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 min-h-[100px]">
                      <p className="text-sm text-gray-800 whitespace-pre-wrap">{text ? convertCase(text, caseMode) : 'Type text above to see conversion...'}</p>
                    </div>
                    {text && (
                      <button onClick={() => handleCopy(convertCase(text, caseMode))} className="mt-3 text-sm text-[--color-primary] hover:underline font-medium">📋 Copy converted text</button>
                    )}
                  </div>
                )}

                {/* Clean Text Tab */}
                {activeTab === 'clean' && (
                  <div className="space-y-3">
                    {cleanModes.map(m => (
                      <button key={m.id} onClick={() => setText(cleanText(text, m.id))}
                        className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-blue-50 rounded-xl text-sm font-medium text-gray-700 hover:text-[--color-primary] transition-colors">
                        🧹 {m.label}
                      </button>
                    ))}
                    {!text && <p className="text-sm text-gray-400">Type text above to use cleaning tools.</p>}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                {[
                  { label: 'Words', value: stats.words },
                  { label: 'Characters', value: stats.characters },
                  { label: 'Sentences', value: stats.sentences },
                  { label: 'Paragraphs', value: stats.paragraphs },
                  { label: 'Reading Time', value: stats.readingTime },
                ].map(s => (
                  <div key={s.label} className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{s.label}</span>
                    <span className="font-semibold text-gray-900">{typeof s.value === 'number' ? s.value.toLocaleString() : s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Affiliate Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
              <h3 className="font-bold text-gray-900">✍️ Write Better</h3>
              <p className="mt-2 text-sm text-gray-600">Improve grammar, tone, and clarity with AI-powered writing tools.</p>
              <a href="/go/grammarly" target="_blank" rel="noopener noreferrer nofollow" className="mt-4 inline-block bg-[--color-primary] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[--color-primary-dark]">
                Try Grammarly Free →
              </a>
            </div>

            {/* More Tools */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">More Tools</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { href: '/character-counter', label: 'Character Counter' },
                  { href: '/reading-time-calculator', label: 'Reading Time Calculator' },
                  { href: '/keyword-density-checker', label: 'Keyword Density Checker' },
                  { href: '/case-converter', label: 'Case Converter' },
                ].map(t => (
                  <li key={t.href}><a href={t.href} className="text-[--color-primary] hover:underline">{t.label} →</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
