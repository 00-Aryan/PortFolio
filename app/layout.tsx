import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aryan Kumar - Data Science Portfolio',
  description: 'Data Science student from IIT Madras specializing in ML pipelines, NLP systems, and real-world data solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Outfit:wght@400;500;600&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-outfit antialiased">
        {children}
      </body>
    </html>
  )
}
