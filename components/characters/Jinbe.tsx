'use client'

import { motion } from 'framer-motion'

export function JinbeCharacter() {
  return (
    <motion.div
      animate={{ x: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg width="70" height="50" viewBox="0 0 70 50">
        {/* Water waves */}
        <path
          d="M 0 25 Q 17.5 15 35 25 Q 52.5 35 70 25"
          stroke="#4ADE80"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 0 35 Q 17.5 25 35 35 Q 52.5 45 70 35"
          stroke="#4ADE80"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 0 15 Q 17.5 5 35 15 Q 52.5 25 70 15"
          stroke="#4ADE80"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
      </svg>
    </motion.div>
  )
}
