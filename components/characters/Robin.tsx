'use client'

import { motion } from 'framer-motion'

export function RobinCharacter() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
    >
      <svg width="50" height="50" viewBox="0 0 50 50">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x = 25 + 18 * Math.cos(rad)
          const y = 25 + 18 * Math.sin(rad)
          return (
            <path
              key={angle}
              d={`M ${x} ${y - 5} Q ${x + 3} ${y} ${x} ${y + 8} Q ${x - 3} ${y} ${x} ${y - 5}`}
              fill="rgba(233,213,255,0.6)"
            />
          )
        })}
        <circle cx="25" cy="25" r="5" fill="#FFD700" />
      </svg>
    </motion.div>
  )
}
