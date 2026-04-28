'use client'

import { motion } from 'framer-motion'

export function FrankyCharacter() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60">
        {/* Gear */}
        <circle cx="30" cy="30" r="20" stroke="#4ADE80" strokeWidth="2" fill="none" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180
          const x1 = 30 + 15 * Math.cos(rad)
          const y1 = 30 + 15 * Math.sin(rad)
          const x2 = 30 + 25 * Math.cos(rad)
          const y2 = 30 + 25 * Math.sin(rad)
          return (
            <line
              key={angle}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#4ADE80"
              strokeWidth="3"
            />
          )
        })}
        <circle cx="30" cy="30" r="8" fill="#4ADE80" />
      </svg>
    </motion.div>
  )
}
