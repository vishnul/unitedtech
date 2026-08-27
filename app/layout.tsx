import type { Metadata } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import './globals.css';
import './extended.css';

const display = Manrope({ variable: '--font-display', subsets: ['latin'] });
const body = DM_Sans({ variable: '--font-body', subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'United Technologies | Staffing & Software Services', template: '%s | United Technologies' },
  description: 'Staffing, independent talent, custom software development, and digital tools for individuals and businesses. Based in Frisco, Texas.',
  openGraph: { title: 'United Technologies | People + Software', description: 'Staffing, independent talent, custom software development, and digital tools from Frisco, Texas.', type: 'website', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'United Technologies — People + Software' }] },
  twitter: { card: 'summary_large_image', title: 'United Technologies | People + Software', description: 'Staffing, independent talent, custom software development, and digital tools from Frisco, Texas.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
