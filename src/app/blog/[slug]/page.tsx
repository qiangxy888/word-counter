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
  'how-to-reduce-word-count': {
    title: 'How to Reduce Word Count: 15 Editing Tips for Tighter Writing',
    description: 'Learn 15 proven techniques to cut word count without losing meaning. Essential for essays, articles, and professional writing.',
    date: '2026-03-29',
    readTime: '8 min',
    keywords: ['reduce word count', 'how to shorten essay', 'cut word count', 'concise writing tips'],
    content: `<p><strong>Need to cut your word count?</strong> Whether you're over a college essay limit, tightening a blog post, or editing a cover letter, these 15 techniques will help you write more concisely without sacrificing clarity.</p>

<p>Start by pasting your text into our <a href="/word-counter">word counter</a> to see exactly where you stand.</p>

<h2>Quick Wins (Cut 10-20% Fast)</h2>

<h3>1. Delete "That"</h3>
<p>The word "that" is unnecessary in 90% of sentences. "I think that this is good" → "I think this is good." Read each sentence aloud — if it works without "that," delete it.</p>

<h3>2. Replace "In order to" with "To"</h3>
<p>"In order to succeed" → "To succeed." Three words become one. Apply the same logic to: "due to the fact that" → "because," "at this point in time" → "now."</p>

<h3>3. Cut Adverbs</h3>
<p>"Very important" → "crucial." "Really fast" → "rapid." "Extremely good" → "excellent." Adverbs often weaken writing — replace adverb + adjective with a single strong word.</p>

<h3>4. Remove "I think / I believe / In my opinion"</h3>
<p>If you're writing it, the reader already knows it's your opinion. "I think the policy should change" → "The policy should change." Saves 2-4 words per occurrence.</p>

<h3>5. Delete Filler Openings</h3>
<p>Cut: "It is important to note that…" "There are many reasons why…" "It goes without saying that…" Just state the point directly.</p>

<h2>Structural Cuts (Cut 20-30%)</h2>

<h3>6. One Idea Per Sentence</h3>
<p>Long, compound sentences can usually be split or simplified. If a sentence has two commas and an "and," consider breaking it apart or cutting the weaker half.</p>

<h3>7. Cut Redundant Pairs</h3>
<p>"Each and every" → "each." "First and foremost" → "first." "Hopes and dreams" → "hopes." English is full of redundant pairs inherited from Anglo-Saxon + Latin. Pick one word.</p>

<h3>8. Replace Phrases with Single Words</h3>
<table><thead><tr><th>Wordy</th><th>Concise</th><th>Words Saved</th></tr></thead>
<tbody>
<tr><td>in the event that</td><td>if</td><td>4</td></tr>
<tr><td>at the present time</td><td>now</td><td>3</td></tr>
<tr><td>has the ability to</td><td>can</td><td>3</td></tr>
<tr><td>in spite of the fact that</td><td>although</td><td>5</td></tr>
<tr><td>make a decision</td><td>decide</td><td>2</td></tr>
<tr><td>give consideration to</td><td>consider</td><td>2</td></tr>
</tbody></table>

<h3>9. Use Active Voice</h3>
<p>"The report was written by the team" (8 words) → "The team wrote the report" (6 words). Active voice is almost always shorter and stronger.</p>

<h3>10. Merge Short Paragraphs</h3>
<p>If two consecutive paragraphs make the same point, combine them. Cut the transitional sentence between them.</p>

<h2>Advanced Techniques (Final Polish)</h2>

<h3>11. Read Aloud</h3>
<p>If you run out of breath or stumble, the sentence is too long. If it sounds repetitive, it probably is.</p>

<h3>12. Cut Your Intro and Conclusion by Half</h3>
<p>Introductions and conclusions are where most filler lives. Get to the point faster at the start, summarize more tightly at the end.</p>

<h3>13. Delete Sentences That Repeat Earlier Points</h3>
<p>Search your text for key phrases. If the same idea appears twice, keep the stronger version and cut the other.</p>

<h3>14. Question Every Adjective</h3>
<p>Does "large, spacious room" say more than "spacious room"? Usually not. Keep only adjectives that add new information.</p>

<h3>15. Use Our Word Counter's Readability Metrics</h3>
<p>Our <a href="/word-counter">word counter tool</a> shows reading time, sentence length, and readability scores. Target: average sentence length under 20 words, Flesch reading ease above 60.</p>

<h2>FAQ</h2>
<h3>How much can I realistically cut?</h3>
<p>Most first drafts can be cut by 20-30% without losing content. Academic writing can often be cut by 15-20%.</p>

<h3>Will cutting words hurt my SEO?</h3>
<p>No — Google values quality over quantity. A focused 1,500-word article outranks a padded 3,000-word one. Use our <a href="/keyword-density-checker">keyword density checker</a> to verify keywords after cutting.</p>

<h2>Conclusion</h2>
<p>Cutting word count isn't about removing ideas — it's about expressing them more efficiently. Start with the quick wins (delete "that," cut adverbs), then make structural changes. Use <a href="/word-counter">WordCountHub</a> to track your progress in real-time.</p>`,
  },
  'best-word-counter-tools-2026': {
    title: 'Best Word Counter Tools in 2026: Free Online Options Compared',
    description: 'Compare the best free word counter tools online. Features, accuracy, and which one is right for your writing needs.',
    date: '2026-03-27',
    readTime: '7 min',
    keywords: ['word counter tool', 'best word counter', 'online word counter', 'free word counter 2026'],
    content: `<p><strong>Need a reliable word counter?</strong> While every text editor has a built-in word count, dedicated word counter tools offer much more: reading time estimates, keyword density, readability scores, and sentence-level analysis.</p>

<p>We compared 7 popular word counter tools. Here's what we found.</p>

<h2>Quick Comparison</h2>
<table><thead><tr><th>Tool</th><th>Word Count</th><th>Reading Time</th><th>Readability</th><th>Keyword Density</th><th>Cost</th></tr></thead>
<tbody>
<tr><td><strong><a href="/word-counter">WordCountHub</a></strong></td><td>✅</td><td>✅</td><td>✅ Flesch</td><td>✅</td><td>Free</td></tr>
<tr><td>WordCounter.net</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>Free</td></tr>
<tr><td>CountWordsFree</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td><td>Free</td></tr>
<tr><td>Google Docs</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td><td>Free</td></tr>
<tr><td>Microsoft Word</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>Paid</td></tr>
<tr><td>Hemingway Editor</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>Free/$)</td></tr>
<tr><td><a href="/go/grammarly">Grammarly</a></td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>Free/Paid</td></tr>
</tbody></table>

<h2>1. WordCountHub — Best Free All-in-One Tool</h2>
<p><a href="/word-counter">WordCountHub</a> is our own tool (bias acknowledged!), but it genuinely offers the most features for free: word count, character count, reading time, keyword density analysis, readability scoring, and a case converter — all in one place with no sign-up.</p>
<p><strong>Standout feature:</strong> <a href="/keyword-density-checker">Keyword density checker</a> shows top keywords with percentages — essential for SEO writers.</p>

<h2>2. WordCounter.net — Most Popular</h2>
<p>WordCounter.net is the most well-known dedicated word counter. It offers similar features to WordCountHub plus a "writing quality" indicator. The interface is clean but ad-heavy on free tier.</p>

<h2>3. Google Docs — Simplest Built-in Option</h2>
<p>Tools → Word Count (or Ctrl+Shift+C). Shows words, characters, and characters excluding spaces. No reading time or readability. Good enough if you just need a count.</p>

<h2>4. Hemingway Editor — Best for Readability</h2>
<p>Hemingway isn't primarily a word counter, but it shows word count alongside powerful readability analysis. It highlights complex sentences, passive voice, and weak adverbs. Grade level targeting is unique and useful.</p>

<h2>5. Grammarly — Best for Writing Quality</h2>
<p><a href="/go/grammarly">Grammarly</a> shows word count in its editor along with grammar checking, tone detection, and plagiarism scanning (Premium). If you need a word counter PLUS writing improvement, Grammarly is the best choice.</p>
<p><strong>Limitation:</strong> Many features require Premium ($12/mo). For pure word counting with SEO features, <a href="/word-counter">WordCountHub</a> is free.</p>

<h2>When to Use Each Tool</h2>
<ul>
<li><strong>Quick word count:</strong> Google Docs or any text editor</li>
<li><strong>SEO writing:</strong> <a href="/word-counter">WordCountHub</a> (keyword density + readability)</li>
<li><strong>Academic writing:</strong> <a href="/word-counter">WordCountHub</a> (word + character limits) or Hemingway (readability)</li>
<li><strong>Professional writing:</strong> <a href="/go/grammarly">Grammarly</a> (grammar + tone + word count)</li>
<li><strong>Content marketing:</strong> <a href="/word-counter">WordCountHub</a> for counts + <a href="/go/grammarly">Grammarly</a> for quality</li>
</ul>

<h2>FAQ</h2>
<h3>Do spaces count as characters?</h3>
<p>Depends on context. Twitter counts spaces. Some academic requirements don't. <a href="/character-counter">Our character counter</a> shows both: characters with spaces and characters without spaces.</p>

<h3>How accurate are online word counters?</h3>
<p>All reputable tools count words the same way (splitting by whitespace). Differences arise in how they handle hyphenated words, numbers, and abbreviations. Variance is typically under 1%.</p>

<h2>Conclusion</h2>
<p>For most writers, <a href="/word-counter">WordCountHub</a> covers everything you need for free: word count, character count, reading time, keyword density, and readability. Pair it with <a href="/go/grammarly">Grammarly</a> when you need grammar and style checking too.</p>`,
  },
  'ideal-essay-length-by-type': {
    title: 'Ideal Essay Length by Type: College, Grad School, and Scholarship',
    description: 'How long should your essay be? Word count guidelines for every type of academic and scholarship essay.',
    date: '2026-03-22', readTime: '7 min',
    keywords: ['essay word count', 'how long should an essay be', 'college essay length', 'scholarship essay length'],
    content: `<p><strong>"How long should my essay be?"</strong> is the most common question students ask. The answer depends on the type, purpose, and where you're submitting. Here's a comprehensive guide.</p>

<h2>Essay Length by Type</h2>
<table><thead><tr><th>Essay Type</th><th>Typical Length</th><th>Pages (12pt, double-spaced)</th></tr></thead>
<tbody>
<tr><td>College application (Common App)</td><td>250-650 words</td><td>~1-2 pages</td></tr>
<tr><td>Scholarship essay</td><td>500-1,000 words</td><td>1.5-3 pages</td></tr>
<tr><td>Short answer / supplemental</td><td>100-250 words</td><td>0.5-1 page</td></tr>
<tr><td>High school essay</td><td>500-1,500 words</td><td>2-5 pages</td></tr>
<tr><td>Undergraduate paper</td><td>1,500-5,000 words</td><td>5-17 pages</td></tr>
<tr><td>Graduate thesis chapter</td><td>5,000-10,000 words</td><td>17-33 pages</td></tr>
<tr><td>PhD dissertation</td><td>60,000-100,000 words</td><td>200-350 pages</td></tr>
</tbody></table>

<h2>College Application Essays</h2>
<p>The Common App personal statement has a strict 650-word limit. Admissions officers read thousands — respect the limit. Aim for 600-650 words; going under 500 looks like you didn't try.</p>
<p><strong>Supplemental essays</strong> are typically 100-250 words. Be concise. Every word counts.</p>

<h2>What Happens If You Go Over the Limit?</h2>
<ul>
<li><strong>Common App:</strong> Hard limit — the system cuts you off at 650 words</li>
<li><strong>Scholarships:</strong> Many will disqualify over-limit submissions without reading them</li>
<li><strong>Class assignments:</strong> Depends on professor, but 10% over is generally acceptable</li>
</ul>

<h2>Tips for Hitting Your Target</h2>
<ol>
<li><strong>Draft freely, then cut.</strong> Write 20% over, then trim to the limit</li>
<li><strong>One idea per paragraph.</strong> If you need fewer words, cut entire paragraphs, not individual words</li>
<li><strong>Use <a href="/word-counter">WordCountHub</a></strong> to track your count in real-time as you edit</li>
</ol>

<p>Check your essay length instantly with <a href="/word-counter">WordCountHub</a> — free, real-time, with readability analysis.</p>`,
  },
  'seo-content-length-guide': {
    title: 'SEO Content Length: How Many Words Do You Need to Rank?',
    description: 'Data-driven guide to optimal content length for SEO. Blog posts, landing pages, and product descriptions.',
    date: '2026-03-20', readTime: '9 min',
    keywords: ['SEO content length', 'how long should a blog post be', 'word count for SEO', 'optimal blog post length'],
    content: `<p><strong>There is no magic word count for SEO.</strong> But data from Ahrefs, Backlinko, and HubSpot studies consistently shows patterns. Here's what the evidence says.</p>

<h2>What the Data Shows (2024-2026)</h2>
<table><thead><tr><th>Content Type</th><th>Avg. Length of Top 10 Results</th><th>Recommended Range</th></tr></thead>
<tbody>
<tr><td>Blog post (informational)</td><td>1,447 words</td><td>1,200-2,500 words</td></tr>
<tr><td>Listicle / roundup</td><td>2,300 words</td><td>1,500-3,000 words</td></tr>
<tr><td>How-to guide</td><td>1,800 words</td><td>1,500-3,000 words</td></tr>
<tr><td>Product page</td><td>800 words</td><td>500-1,000 words</td></tr>
<tr><td>Landing page</td><td>500 words</td><td>300-800 words</td></tr>
<tr><td>Category page</td><td>300 words</td><td>200-500 words</td></tr>
</tbody></table>

<h2>Why Longer Content Tends to Rank</h2>
<p>It's not that Google rewards word count directly. Longer content tends to:</p>
<ul>
<li>Cover the topic more comprehensively (satisfying search intent)</li>
<li>Include more long-tail keyword variations naturally</li>
<li>Earn more backlinks (50%+ more than short content)</li>
<li>Keep users on page longer (dwell time signal)</li>
</ul>

<h2>When Shorter Is Better</h2>
<p>Not every query needs a 2,000-word article:</p>
<ul>
<li><strong>"What time is the Super Bowl?"</strong> → 50 words max</li>
<li><strong>Tool pages</strong> (calculators, converters) → Minimal text, maximum utility</li>
<li><strong>Transactional queries</strong> → Users want to buy, not read</li>
</ul>
<p>Match content length to <strong>search intent</strong>, not an arbitrary target.</p>

<h2>The Goldilocks Approach</h2>
<ol>
<li>Google your target keyword</li>
<li>Check the word count of the top 5 results (use <a href="/word-counter">WordCountHub</a>)</li>
<li>Match or exceed their depth — not their word count</li>
<li>Add unique value: original data, expert quotes, case studies</li>
</ol>

<p>Analyze your content length and readability with <a href="/word-counter">WordCountHub</a> — free and instant.</p>`,
  },
  'readability-scores-explained': {
    title: 'Readability Scores Explained: Flesch, Gunning Fog, and More',
    description: 'What readability scores mean, how they\'re calculated, and what score to aim for in your writing.',
    date: '2026-03-17', readTime: '8 min',
    keywords: ['readability score', 'Flesch reading ease', 'Gunning Fog index', 'readability test', 'writing grade level'],
    content: `<p><strong>Readability scores measure how easy your text is to understand.</strong> They've been used since the 1940s by the US military, and today they're essential for content marketing, UX writing, and SEO.</p>

<h2>The Main Readability Formulas</h2>
<table><thead><tr><th>Formula</th><th>Measures</th><th>Scale</th><th>Target for Web</th></tr></thead>
<tbody>
<tr><td><strong>Flesch Reading Ease</strong></td><td>Sentence length + syllables</td><td>0-100 (higher = easier)</td><td>60-70</td></tr>
<tr><td><strong>Flesch-Kincaid Grade</strong></td><td>Same inputs, grade output</td><td>US grade level</td><td>6th-8th grade</td></tr>
<tr><td><strong>Gunning Fog Index</strong></td><td>Sentence length + complex words</td><td>Years of education needed</td><td>8-10</td></tr>
<tr><td><strong>Coleman-Liau Index</strong></td><td>Characters per word + sentences</td><td>US grade level</td><td>7th-9th grade</td></tr>
<tr><td><strong>SMOG Grade</strong></td><td>Polysyllabic words</td><td>Years of education</td><td>8-10</td></tr>
</tbody></table>

<h2>Flesch Reading Ease: The Gold Standard</h2>
<p>The most widely used formula. Higher scores mean easier reading:</p>
<ul>
<li><strong>90-100:</strong> Very easy (5th grade). Children's books.</li>
<li><strong>80-90:</strong> Easy (6th grade). Conversational.</li>
<li><strong>60-70:</strong> Standard (8th-9th grade). Ideal for web content.</li>
<li><strong>50-60:</strong> Fairly difficult (10th-12th grade). Academic.</li>
<li><strong>30-50:</strong> Difficult. College level.</li>
<li><strong>0-30:</strong> Very difficult. Graduate/professional.</li>
</ul>

<h2>Why Readability Matters for Content</h2>
<ul>
<li><strong>Web users skim.</strong> 79% of users scan pages; only 16% read word by word</li>
<li><strong>Lower readability = higher bounce rate.</strong> If readers struggle, they leave</li>
<li><strong>Google favors accessible content.</strong> Matching user reading level improves engagement metrics</li>
<li><strong>Wider audience.</strong> Writing at 8th grade level reaches 85% of English speakers</li>
</ul>

<h2>How to Improve Your Readability Score</h2>
<ol>
<li><strong>Shorter sentences.</strong> Aim for 15-20 words average</li>
<li><strong>Simpler words.</strong> "Use" not "utilize." "Buy" not "purchase."</li>
<li><strong>Active voice.</strong> "We tested 6 tools" not "6 tools were tested by us"</li>
<li><strong>Break up long paragraphs.</strong> 3-4 sentences max per paragraph for web</li>
<li><strong>Use subheadings.</strong> Break content into scannable sections</li>
</ol>

<p>Check your readability score instantly with <a href="/word-counter">WordCountHub</a> — Flesch, Gunning Fog, and grade level analysis, all free.</p>`,
  },
  'writing-word-count-by-genre': {
    title: 'Word Count by Genre: Novel, Novella, Short Story, and More',
    description: 'How long should your book be? Industry-standard word counts for every fiction and non-fiction genre.',
    date: '2026-03-14', readTime: '7 min',
    keywords: ['novel word count', 'book word count', 'how long is a novel', 'word count by genre'],
    content: `<p><strong>Publishers have clear expectations</strong> for manuscript length. Submit a 200,000-word debut novel and it's going straight to the rejection pile. Here are the industry standards.</p>

<h2>Fiction Word Counts</h2>
<table><thead><tr><th>Category</th><th>Word Count</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Flash fiction</td><td>Up to 1,000</td><td>Micro stories, often under 500</td></tr>
<tr><td>Short story</td><td>1,000-7,500</td><td>Magazine standard</td></tr>
<tr><td>Novelette</td><td>7,500-17,500</td><td>Hugo/Nebula category</td></tr>
<tr><td>Novella</td><td>17,500-40,000</td><td>Growing market (Kindle)</td></tr>
<tr><td>Novel</td><td>40,000-110,000</td><td>Standard for traditional publishing</td></tr>
<tr><td>Epic / saga</td><td>110,000+</td><td>Fantasy/sci-fi tolerance is higher</td></tr>
</tbody></table>

<h2>Fiction by Genre</h2>
<table><thead><tr><th>Genre</th><th>Sweet Spot</th><th>Acceptable Range</th></tr></thead>
<tbody>
<tr><td>Literary fiction</td><td>80,000-90,000</td><td>70,000-100,000</td></tr>
<tr><td>Romance</td><td>70,000-80,000</td><td>50,000-100,000</td></tr>
<tr><td>Mystery / Thriller</td><td>75,000-90,000</td><td>60,000-100,000</td></tr>
<tr><td>Sci-fi / Fantasy</td><td>90,000-110,000</td><td>80,000-150,000</td></tr>
<tr><td>Young Adult</td><td>55,000-70,000</td><td>40,000-80,000</td></tr>
<tr><td>Middle Grade</td><td>30,000-50,000</td><td>25,000-60,000</td></tr>
</tbody></table>

<h2>Non-Fiction Word Counts</h2>
<table><thead><tr><th>Type</th><th>Word Count</th></tr></thead>
<tbody>
<tr><td>Self-help / Business</td><td>40,000-60,000</td></tr>
<tr><td>Memoir</td><td>60,000-90,000</td></tr>
<tr><td>Biography</td><td>80,000-120,000</td></tr>
<tr><td>Academic / Textbook</td><td>Varies widely</td></tr>
</tbody></table>

<h2>Why Word Count Matters for Publishing</h2>
<ul>
<li><strong>Printing costs:</strong> Longer books cost more to print, affecting pricing and margins</li>
<li><strong>Reader expectations:</strong> Genre fans expect certain lengths</li>
<li><strong>Agent screening:</strong> Many agents auto-reject manuscripts outside standard ranges</li>
</ul>

<p>Track your manuscript word count with <a href="/word-counter">WordCountHub</a> — paste your text for instant analysis.</p>`,
  },
  'character-count-for-meta-descriptions': {
    title: 'Character Count for Meta Descriptions, Titles, and Social Media',
    description: 'The exact character limits for Google titles, meta descriptions, tweets, and every social media platform.',
    date: '2026-03-11', readTime: '6 min',
    keywords: ['meta description character count', 'title tag character limit', 'character count SEO', 'social media character limits'],
    content: `<p><strong>Character limits are everywhere in digital content.</strong> Go over and your text gets truncated. Go under and you're leaving opportunity on the table. Here are all the limits you need to know.</p>

<h2>SEO Character Limits</h2>
<table><thead><tr><th>Element</th><th>Character Limit</th><th>Optimal Length</th></tr></thead>
<tbody>
<tr><td><strong>Title tag</strong></td><td>~60 characters (600px)</td><td>50-60 characters</td></tr>
<tr><td><strong>Meta description</strong></td><td>~155 characters (920px)</td><td>120-155 characters</td></tr>
<tr><td><strong>URL slug</strong></td><td>No hard limit</td><td>3-5 words, under 60 chars</td></tr>
<tr><td><strong>H1 heading</strong></td><td>No limit</td><td>20-70 characters</td></tr>
<tr><td><strong>Image alt text</strong></td><td>No hard limit</td><td>Under 125 characters</td></tr>
</tbody></table>

<h2>Social Media Character Limits (2026)</h2>
<table><thead><tr><th>Platform</th><th>Post Limit</th><th>Bio Limit</th></tr></thead>
<tbody>
<tr><td>X (Twitter)</td><td>280 chars (free) / 25,000 (Premium)</td><td>160 chars</td></tr>
<tr><td>Instagram caption</td><td>2,200 chars</td><td>150 chars</td></tr>
<tr><td>LinkedIn post</td><td>3,000 chars</td><td>2,600 chars (About)</td></tr>
<tr><td>Facebook post</td><td>63,206 chars</td><td>101 chars (intro)</td></tr>
<tr><td>TikTok caption</td><td>4,000 chars</td><td>80 chars</td></tr>
<tr><td>Pinterest pin</td><td>500 chars</td><td>160 chars</td></tr>
<tr><td>YouTube title</td><td>100 chars</td><td>–</td></tr>
<tr><td>YouTube description</td><td>5,000 chars</td><td>–</td></tr>
</tbody></table>

<h2>Email Subject Lines</h2>
<ul>
<li><strong>Optimal:</strong> 30-50 characters (highest open rates)</li>
<li><strong>Maximum visible:</strong> ~60 characters on desktop, ~30-40 on mobile</li>
<li><strong>Preheader text:</strong> 40-130 characters</li>
</ul>

<h2>Tips for Working Within Limits</h2>
<ol>
<li><strong>Write the full version first,</strong> then trim to fit</li>
<li><strong>Front-load keywords</strong> in case of truncation</li>
<li><strong>Use <a href="/word-counter">WordCountHub</a></strong> to check character count as you write</li>
<li><strong>Test on mobile</strong> — limits are tighter on small screens</li>
</ol>

<p>Count your characters instantly with <a href="/word-counter">WordCountHub</a> — word count, character count (with and without spaces), and more.</p>`,
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
