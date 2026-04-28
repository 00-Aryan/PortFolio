'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const name = 'Aryan Kumar'

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[rgba(255,215,0,0.06)] blur-3xl" />
        <motion.svg
          className="absolute top-[-200px] right-[-200px] w-[800px] h-[800px]"
          viewBox="0 0 800 800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.path
            d="M 400 400 A 400 400 0 0 1 800 400"
            stroke="rgba(255,215,0,0.04)"
            strokeWidth="100"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          />
        </motion.svg>
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="relative z-10 grid grid-cols-12 gap-4 items-center px-8 py-24 min-h-screen">
        {/* Left column */}
        <div className="col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-outfit text-[11px] tracking-[0.2em] text-nika-haki-text uppercase mb-4"
          >
            DATA SCIENCE × IIT MADRAS
          </motion.p>

          <h1 className="font-display font-extrabold text-[clamp(36px,5vw,72px)] text-nika-white gold-glow mb-6">
            {name.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4 + index * 0.04,
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                }}
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
            className="font-body text-[15px] leading-relaxed max-w-md text-[rgba(250,250,250,0.6)] mb-8"
          >
            Building intelligent systems at the intersection of NLP, ML Engineering, and human-centred AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, type: 'spring', stiffness: 260, damping: 14 }}
            className="flex gap-3"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.08, boxShadow: '0 0 28px rgba(255,215,0,0.55)' }}
              whileTap={{ scale: 0.93 }}
              transition={{ type: 'spring', stiffness: 500, damping: 18 }}
              className="bg-nika-gold text-nika-bg font-outfit font-semibold text-[13px] px-6 py-2.5 rounded-full"
            >
              View Projects →
            </motion.a>
            <motion.a
              href="/Aryan_Kumar_CV.pdf"
              whileHover={{ borderColor: '#FFD700', color: '#FFD700', scale: 1.05 }}
              whileTap={{ scale: 0.93 }}
              transition={{ type: 'spring', stiffness: 500, damping: 18 }}
              className="border border-nika-haki-border text-nika-white font-outfit font-semibold text-[13px] px-6 py-2.5 rounded-full"
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4, type: 'spring', stiffness: 400, damping: 12 }}
            className="inline-flex items-center gap-2 mt-6"
          >
            <div className="w-2 h-2 bg-nika-green rounded-full animate-sonar" />
            <span className="font-outfit text-[12px] text-nika-haki-text">
              Open to Roles · Data Science · ML Engineer
            </span>
          </motion.div>
        </div>

        {/* Right column - Luffy Gear 5 drum motif */}
        <div className="col-span-5 flex justify-center">
          <motion.div
            className="relative w-64 h-64"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 256">
              <motion.circle
                cx="128"
                cy="128"
                r="120"
                stroke="#FFD700"
                strokeWidth="1"
                strokeDasharray="8 6"
                fill="none"
                opacity="0.35"
                animate={{ rotate: 360 }}
                style={{ originX: '50%', originY: '50%' }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear', direction: 'reverse' }}
              />
              <circle
                cx="128"
                cy="128"
                r="100"
                stroke="rgba(255,215,0,0.12)"
                strokeWidth="40"
                fill="none"
              />
              <circle
                cx="128"
                cy="128"
                r="80"
                stroke="rgba(233,213,255,0.1)"
                strokeWidth="1"
                fill="none"
              />
            </svg>

            <motion.span
              className="absolute inset-0 flex items-center justify-center font-display font-extrabold text-[56px] text-nika-gold gold-glow"
              animate={{ scale: [1, 1.04, 1], rotate: [-1, 1, -1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              AK
            </motion.span>

            {/* Robin flower petals */}
            {[0, 72, 144, 216, 288].map((angle, index) => {
              const rad = (angle * Math.PI) / 180
              const x = 128 + 110 * Math.cos(rad)
              const y = 128 + 110 * Math.sin(rad)
              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{ left: x - 4, top: y - 7 }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 1.6 + index * 0.1,
                    type: 'spring',
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <svg width="8" height="14" viewBox="0 0 8 14">
                    <path
                      d="M4 0 C6 4 8 8 4 14 C0 8 2 4 4 0"
                      fill="rgba(233,213,255,0.4)"
                    />
                  </svg>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
