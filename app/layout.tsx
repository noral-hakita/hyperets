import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HyperETS - Elite Minecraft Server Hosting',
  description: 'Launch your lag-free Minecraft server with HyperETS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-inter bg-gray-900 text-white">
        {children}
      </body>
    </html>
  )
}