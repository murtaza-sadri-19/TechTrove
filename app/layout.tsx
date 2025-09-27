import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'TechTrove - Developer Portfolio',
  description: 'Showcasing cutting-edge technology integrations and innovative solutions',
  keywords: ['portfolio', 'developer', 'AI', 'Next.js', 'Firebase', 'OpenAI'],
  authors: [{ name: 'Murtaza Sadri' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techtrove.dev',
    title: 'TechTrove - Developer Portfolio',
    description: 'Showcasing cutting-edge technology integrations and innovative solutions',
    siteName: 'TechTrove',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechTrove - Developer Portfolio',
    description: 'Showcasing cutting-edge technology integrations and innovative solutions',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="font-sans antialiased bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-secondary-900 dark:via-secondary-800 dark:to-purple-900/20 transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}