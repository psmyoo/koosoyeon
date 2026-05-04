import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Koo Soyeon — Senior Environmental Analyst',
  description:
    'Senior Environmental Analyst with over eight years of experience in air quality monitoring and pollutant analysis, specializing in industrial emissions and ambient air assessment.',
  keywords: [
    'environmental analyst',
    'air quality monitoring',
    'pollutant analysis',
    'ICP',
    'GC-MS',
    'industrial emissions',
    'ambient air assessment',
    'environmental science',
  ],
  authors: [{ name: 'Koo Soyeon' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Koo Soyeon — Senior Environmental Analyst',
    description:
      'Senior Environmental Analyst specializing in air quality monitoring and pollutant analysis.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Koo Soyeon — Senior Environmental Analyst',
    description:
      'Senior Environmental Analyst specializing in air quality monitoring and pollutant analysis.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceMono.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-black focus:px-4 focus:py-2 focus:text-sm focus:font-mono"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
