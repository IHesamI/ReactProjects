import { NavBar,Footer } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover Best choice for yourself',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={'relative'}>
      <NavBar />
        {children}
      <Footer />
        </body>
    </html>
  )
}
