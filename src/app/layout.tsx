import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'WordCountHub — Free Online Word Counter & Text Analyzer', template: '%s | WordCountHub' },
  description: 'Free online word counter. Count words, characters, sentences, paragraphs. Check reading time, keyword density, readability score. No sign-up required.',
  keywords: ['word counter', 'character counter', 'word count tool', 'reading time calculator', 'keyword density checker'],
  openGraph: { title: 'WordCountHub — Free Word Counter', description: 'Count words, characters, and analyze your text — free and instant.', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
