import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import {
  getLocalBusinessSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  getServiceSchema,
  getWebPageSchema,
} from '@/lib/structured-data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Same-Day Couriers in Blackburn | A2A Couriers',
  description:
    'Professional same-day courier service covering Blackburn, Darwen, and surrounding areas. Collections within 60 minutes. Dedicated, direct delivery — no depots, no delays.',
  keywords:
    'Blackburn courier, same day delivery Blackburn, courier service Blackburn, Darwen courier, BB1 courier, BB2 courier, BB3 courier, same day courier Lancashire',
  openGraph: {
    title: 'Same-Day Couriers in Blackburn | A2A Couriers',
    description:
      'Professional same-day courier service covering Blackburn, Darwen, and surrounding areas. Collections within 60 minutes.',
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.blackburn-couriers.co.uk',
    siteName: 'A2A Couriers — Blackburn',
  },
  alternates: {
    canonical: 'https://www.blackburn-couriers.co.uk',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        {/* Structured Data — Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()),
          }}
        />
        {/* Structured Data — FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getFAQSchema()),
          }}
        />
        {/* Structured Data — Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbSchema()),
          }}
        />
        {/* Structured Data — Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getServiceSchema()),
          }}
        />
        {/* Structured Data — WebPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebPageSchema()),
          }}
        />
      </head>
      <body className="bg-off-white text-brand-black font-sans antialiased">
        {children}
      </body>
    </html>
  );
}