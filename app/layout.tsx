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
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white transition-colors">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}