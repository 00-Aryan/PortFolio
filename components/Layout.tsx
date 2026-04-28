'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  NamiCharacter,
  RobinCharacter,
  ChopperCharacter,
  BrookCharacter,
  JinbeCharacter,
} from './characters'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const sections = ['hero', 'projects', 'research', 'skills', 'contact']

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const navItems = [
    { id: 'hero', href: '#hero', icon: 'grid', label: 'Home' },
    { id: 'projects', href: '#projects', icon: 'code', label: 'Projects' },
    { id: 'research', href: '#research', icon: 'book', label: 'Research' },
    { id: 'skills', href: '#skills', icon: 'layers', label: 'Skills' },
    { id: 'contact', href: '#contact', icon: 'mail', label: 'Contact' },
  ]

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'grid':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </svg>
        )
      case 'code':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        )
      case 'book':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        )
      case 'layers':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        )
      case 'mail':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        )
      default:
        return null
    }
  }

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="flex min-h-screen bg-nika-bg">
      {/* Mobile Hamburger Button */}
      {isMobile && (
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 left-4 z-50 w-10 h-10 rounded-full bg-nika-gold text-nika-bg flex items-center justify-center shadow-lg"
          whileTap={{ scale: 0.9 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      )}

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-16 bg-[rgba(13,13,13,0.85)] backdrop-blur-[20px] border-r border-nika-haki-border flex flex-col items-center justify-between py-6 z-50 transition-transform duration-300 ${
          isMobile ? (isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <motion.a
            href="#hero"
            className="relative"
            whileHover={{ scale: 1.25 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            onClick={() => handleNavClick('#hero')}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              whileHover={{ filter: 'drop-shadow(0 0 10px #FFD700)' }}
            >
              <svg width="36" height="36" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="6" fill="#FFD700" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const length = i % 2 === 0 ? 12 : 7
                  const rad = (angle * Math.PI) / 180
                  const x1 = 18 + 8 * Math.cos(rad)
                  const y1 = 18 + 8 * Math.sin(rad)
                  const x2 = 18 + (8 + length) * Math.cos(rad)
                  const y2 = 18 + (8 + length) * Math.sin(rad)
                  return (
                    <line
                      key={angle}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#FFD700"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  )
                })}
              </svg>
            </motion.div>
          </motion.a>

          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                <motion.a
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-11 h-11 rounded-[20px] flex items-center justify-center transition-colors ${
                    activeSection === item.id
                      ? 'border-l-2 border-nika-gold bg-[rgba(255,215,0,0.12)]'
                      : 'text-nika-white/50 hover:text-nika-white'
                  }`}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,215,0,0.1)' }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                >
                  {getIcon(item.icon)}
                </motion.a>
                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute left-[72px] top-1/2 -translate-y-1/2 bg-nika-gold text-nika-bg font-outfit text-[11px] px-3 py-1 rounded-full whitespace-nowrap pointer-events-none"
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  {item.label}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mb-4"
          >
            <p className="text-[9px] uppercase tracking-[0.18em] text-nika-haki-text text-center mb-2">
              Crew
            </p>
            <div className="grid grid-cols-2 gap-1.5 rounded-2xl border border-nika-haki-border bg-white/[0.03] p-1.5">
              <div className="scale-[0.42] origin-center">
                <NamiCharacter />
              </div>
              <div className="scale-[0.42] origin-center">
                <RobinCharacter />
              </div>
              <div className="scale-[0.42] origin-center">
                <ChopperCharacter />
              </div>
              <div className="scale-[0.42] origin-center">
                <BrookCharacter />
              </div>
              <div className="col-span-2 flex justify-center scale-[0.42] origin-center">
                <JinbeCharacter />
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ rotate: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="cursor-pointer"
          >
            <svg width="36" height="36" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="14" stroke="rgba(250,250,250,0.15)" strokeWidth="1" fill="none" />
              <line x1="18" y1="4" x2="18" y2="32" stroke="rgba(255,215,0,0.3)" strokeWidth="1" />
              <line x1="4" y1="18" x2="32" y2="18" stroke="rgba(255,215,0,0.3)" strokeWidth="1" />
              <line x1="18" y1="18" x2="18" y2="8" stroke="#FFD700" strokeWidth="2" />
              <line x1="18" y1="18" x2="24" y2="18" stroke="rgba(250,250,250,0.3)" strokeWidth="2" />
              <circle cx="18" cy="18" r="4" fill="#FFD700" />
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -6 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute left-[72px] top-1/2 -translate-y-1/2 bg-nika-gold text-nika-bg font-outfit text-[11px] px-3 py-1 rounded-full whitespace-nowrap pointer-events-none"
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Available for work
          </motion.div>
        </div>
      </aside>

      <main className="flex-1 ml-16 overflow-x-hidden">
        {children}
      </main>
    </div>
  )
}
