import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zenith EA — Automated Trading Built For Precision',
  description: 'Advanced automated Forex trading designed for traders who demand precision, speed, and consistent execution. Experience the future of algorithmic trading with Zenith EA.',
  keywords: ['Forex EA', 'Automated Trading', 'Trading Bot', 'XAUUSD', 'MT5', 'Algorithmic Trading', 'Zenith EA'],
  openGraph: {
    title: 'Zenith EA — Automated Trading Built For Precision',
    description: 'Advanced automated Forex trading designed for traders who demand precision, speed, and consistent execution.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenith EA — Automated Trading Built For Precision',
    description: 'Advanced automated Forex trading designed for traders who demand precision, speed, and consistent execution.',
  },
}

export const viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} bg-[#050505]`}>
      <body className="font-sans antialiased bg-[#050505] text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
