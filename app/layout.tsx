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
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
