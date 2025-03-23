import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gowtham | Portfolio',
  description: 'personal portfolio of Gowtham',
  icons: {
    icon: 'https://i.ibb.co/XZV0V755/G-1.png', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
