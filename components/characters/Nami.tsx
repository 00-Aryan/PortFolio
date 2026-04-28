'use client'

import { motion } from 'framer-motion'

export function NamiCharacter() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      <svg width="70" height="70" viewBox="0 0 70 70">
        {/* Weather swirls */}
        <path
          d="M 35 10 Q 50 20 45 35 Q 40 50 25 45 Q 10 40 15 25 Q 20 10 35 10"
          stroke="#FFA500"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 35 20 Q 45 25 42 35 Q 39 45 28 42 Q 17 39 20 29 Q 23 19 35 20"
          stroke="#FFA500"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Cloud */}
        <ellipse cx="35" cy="35" rx="12" ry="8" fill="rgba(255,165,0,0.3)" />
      </svg>
    </motion.div>
  )
}
