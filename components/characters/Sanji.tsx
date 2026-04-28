'use client'

import { motion } from 'framer-motion'

export function SanjiCharacter() {
  return (
    <motion.div
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60">
        {/* Flames */}
        <path
          d="M 30 55 Q 20 40 25 25 Q 30 10 35 25 Q 40 40 30 55"
          fill="url(#flameGradient)"
        />
        <path
          d="M 20 50 Q 15 40 18 30 Q 22 20 25 30 Q 28 40 20 50"
          fill="url(#flameGradient)"
          opacity="0.7"
        />
        <path
          d="M 40 50 Q 35 40 38 30 Q 42 20 45 30 Q 48 40 40 50"
          fill="url(#flameGradient)"
          opacity="0.7"
        />
        <defs>
          <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FF6B35" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
