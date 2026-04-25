'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors">
            Aryan Kumar
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </motion.nav>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Aryan Kumar. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
