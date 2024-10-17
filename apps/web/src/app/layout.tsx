import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

import './globals.css'

export const metadata: Metadata = {
  title: 'Flash Cards',
  description: 'Improve learning',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html lang="en" className={GeistSans.className}>
    <body className={` antialiased bg-mirage-50 text-mirage-950`}>
      {children}
    </body>
  </html>
)

export default RootLayout
