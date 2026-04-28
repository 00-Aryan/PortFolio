'use client'

import { motion } from 'framer-motion'

export function ChopperCharacter() {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60">
        {/* Horns */}
        <path d="M 20 20 Q 15 10 20 5" stroke="#E9D5FF" strokeWidth="2" fill="none" />
        <path d="M 40 20 Q 45 10 40 5" stroke="#E9D5FF" strokeWidth="2" fill="none" />
        {/* Medical cross */}
        <rect x="25" y="25" width="10" height="10" fill="#E9D5FF" />
        <rect x="22" y="28" width="16" height="4" fill="#E9D5FF" />
        <rect x="28" y="22" width="4" height="16" fill="#E9D5FF" />
      </svg>
    </motion.div>
  )
}
