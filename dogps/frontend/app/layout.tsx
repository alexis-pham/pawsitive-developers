import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ConditionalNavbar from '@/components/conditional-navbar'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: 'Pawsitive - Find Your Best Friend Today',
  description: 'Adopt a dog from shelters near you. Search by breed, age, and location to find your perfect furry companion.',
}

export const viewport: Viewport = {
  themeColor: '#00635D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} font-sans antialiased`}>
        <ConditionalNavbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}