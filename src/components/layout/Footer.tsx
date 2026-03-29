import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[--color-primary] rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">#</span></div>
              <span className="text-xl font-bold text-white">Word<span className="text-[--color-primary-light]">CountHub</span></span>
            </div>
            <p className="text-sm leading-relaxed">Free online word counter and text analysis tool. Count words, characters, and more — instantly.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/word-counter" className="hover:text-white transition-colors">Word Counter</Link></li>
              <li><Link href="/character-counter" className="hover:text-white transition-colors">Character Counter</Link></li>
              <li><Link href="/reading-time-calculator" className="hover:text-white transition-colors">Reading Time</Link></li>
              <li><Link href="/keyword-density-checker" className="hover:text-white transition-colors">Keyword Density</Link></li>
              <li><Link href="/case-converter" className="hover:text-white transition-colors">Case Converter</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Our Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://invoicefly.co" target="_blank" rel="noopener" className="hover:text-white transition-colors">Invoice Generator</a></li>
              <li><a href="https://formforge.co" target="_blank" rel="noopener" className="hover:text-white transition-colors">Form Builder</a></li>
              <li><a href="https://aiwritingcheck.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">AI Content Detector</a></li>
              <li><a href="https://clearcut.tools" target="_blank" rel="noopener" className="hover:text-white transition-colors">Background Remover</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-sm gap-4">
          <span>© {new Date().getFullYear()} WordCountHub. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/about" className="hover:text-white">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
