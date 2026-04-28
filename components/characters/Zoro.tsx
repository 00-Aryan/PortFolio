'use client'

import { motion } from 'framer-motion'

export function ZoroCharacter() {
  return (
    <motion.div
      animate={{ rotate: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60">
        {/* Three swords */}
        <line x1="10" y1="50" x2="50" y2="10" stroke="#4ADE80" strokeWidth="2" />
        <line x1="30" y1="50" x2="30" y2="10" stroke="#4ADE80" strokeWidth="2" />
        <line x1="50" y1="50" x2="10" y2="10" stroke="#4ADE80" strokeWidth="2" />
        {/* Sword handles */}
        <rect x="8" y="48" width="4" height="8" fill="#4ADE80" />
        <rect x="28" y="48" width="4" height="8" fill="#4ADE80" />
        <rect x="48" y="48" width="4" height="8" fill="#4ADE80" />
      </svg>
    </motion.div>
  )
}
