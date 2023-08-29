import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { SessionProvider, useSession } from 'next-auth/react'
import NextAuthProvider from '@/components/NextAuthProvider'

export const metadata: Metadata = {
  title: 'RhythmAI',
  description: 'AI Generated Music fit to your tastes',
}

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className="relative">
        <NextAuthProvider>
          <Navbar />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
