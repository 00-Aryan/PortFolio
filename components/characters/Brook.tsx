'use client'

import { motion } from 'framer-motion'

export function BrookCharacter() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="50" height="60" viewBox="0 0 50 60">
        {/* Musical notes */}
        <path
          d="M 15 45 L 15 15 L 35 10 L 35 40"
          stroke="#E9D5FF"
          strokeWidth="2"
          fill="none"
        />
        <ellipse cx="12" cy="48" rx="6" ry="4" fill="#E9D5FF" />
        <ellipse cx="32" cy="43" rx="6" ry="4" fill="#E9D5FF" />
        {/* Skull outline */}
        <circle cx="25" cy="25" r="12" stroke="#E9D5FF" strokeWidth="1" fill="none" />
        <circle cx="21" cy="23" r="2" fill="#E9D5FF" />
        <circle cx="29" cy="23" r="2" fill="#E9D5FF" />
      </svg>
    </motion.div>
  )
}
