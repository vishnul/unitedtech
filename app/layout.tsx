import type { Metadata } from 'next';
import './globals.css';
import './extended.css';

const siteUrl = 'https://vishnul.github.io/unitedtech/';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'United Technologies | Staffing & Software Services', template: '%s | United Technologies' },
  description: 'Staffing, independent talent, custom software development, and digital tools for individuals and businesses. Based in Frisco, Texas.',
  openGraph: { title: 'United Technologies | People + Software', description: 'Staffing, independent talent, custom software development, and digital tools from Frisco, Texas.', type: 'website', url: siteUrl, images: [{ url: `${siteUrl}og.png`, width: 1200, height: 630, alt: 'United Technologies — People + Software' }] },
  twitter: { card: 'summary_large_image', title: 'United Technologies | People + Software', description: 'Staffing, independent talent, custom software development, and digital tools from Frisco, Texas.', images: [`${siteUrl}og.png`] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

