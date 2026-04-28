'use client'

import { motion } from 'framer-motion'

export function LuffyCharacter() {
  return (
    <motion.div
      className="relative"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="80" height="80" viewBox="0 0 80 80">
        {/* Straw hat outline */}
        <ellipse
          cx="40"
          cy="35"
          rx="25"
          ry="12"
          stroke="#FFD700"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 15 35 Q 40 50 65 35"
          stroke="#FFD700"
          strokeWidth="2"
          fill="none"
        />
        {/* Drum */}
        <circle cx="40" cy="55" r="15" stroke="#FFD700" strokeWidth="2" fill="none" />
        <line x1="25" y1="55" x2="55" y2="55" stroke="#FFD700" strokeWidth="1" />
        <line x1="40" y1="40" x2="40" y2="70" stroke="#FFD700" strokeWidth="1" />
      </svg>
    </motion.div>
  )
}
