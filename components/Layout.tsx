'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface LayoutProps {
  children: React.ReactNode
}

const navItems = [
  { id: 'hero', href: '#hero', label: '01. Home' },
  { id: 'projects', href: '#projects', label: '02. Case Files' },
  { id: 'skills', href: '#skills', label: '03. Arsenal' },
  { id: 'research', href: '#research', label: '04. About' },
  { id: 'contact', href: '#contact', label: '05. Contact' },
]

export default function Layout({ children }: LayoutProps) {
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = ['hero', 'projects', 'skills', 'research', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.25 }
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-nika-bg text-nika-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[rgba(232,221,197,0.14)] bg-[#070707]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B4442E] font-display text-lg font-black text-[#D85A43]">
              AK
            </span>
            <span>
              <span className="block font-outfit text-[13px] font-semibold uppercase tracking-[0.12em] text-[#E8DDC5]">Aryan Kumar</span>
              <span className="block font-body text-[10px] uppercase tracking-[0.14em] text-[#E8DDC5]/55">Data Science & ML Engineering</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`font-outfit text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  activeSection === item.id ? 'text-[#D85A43]' : 'text-[#E8DDC5]/72 hover:text-[#D85A43]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="/Aryan_Kumar_CV.pdf"
              className="border border-[rgba(232,221,197,0.16)] px-3 py-2 font-outfit text-[10px] uppercase tracking-[0.18em] text-[#E8DDC5]/72 transition-colors hover:border-[#B4442E] hover:text-[#D85A43]"
            >
              Resume
            </a>
            <span className="flex h-9 w-9 items-center justify-center border border-[rgba(232,221,197,0.16)] text-[#E8DDC5]/70">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M18.36 5.64l-2.12 2.12M7.76 16.24l-2.12 2.12" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </span>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-[rgba(232,221,197,0.18)] text-[#E8DDC5] lg:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-[rgba(232,221,197,0.14)] bg-[#070707] px-4 py-4 lg:hidden"
          >
            <div className="mx-auto grid max-w-[1600px] gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border border-[rgba(232,221,197,0.12)] px-4 py-3 font-outfit text-[11px] uppercase tracking-[0.18em] text-[#E8DDC5]/78"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </header>

      <main className="overflow-x-hidden pt-16">{children}</main>
    </div>
  )
}
