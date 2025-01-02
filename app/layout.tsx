import './global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

// Initialize Inter font with latin subset
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Leonardo Betti - Blog',
    template: '%s | Leonardo Betti - Blog',
  },
  description: 'Leonardo Betti - Blog.',
  openGraph: {
    title: 'Leonardo Betti - Blog',
    description: 'Leonardo Betti - Blog',
    url: baseUrl,
    siteName: 'Leonardo Betti - Blog',
    locale: 'en_UK',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// Utility function for conditional class names
const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        inter.variable,
      )}
    >
      <body
        className={cx(
          'antialiased max-w-xl mx-4 mt-8 lg:mx-auto',
          inter.className, // Apply Inter font to the entire body
        )}
      >
        <main className="flex flex-col flex-auto min-w-0 px-2 mt-12 md:px-0">
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
