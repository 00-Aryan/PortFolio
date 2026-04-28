'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14 }}
          viewport={{ once: true }}
          className="glass-card max-w-2xl mx-auto text-center p-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl text-nika-white mb-2"
          >
            Let's build something
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-display text-5xl text-nika-gold gold-glow mb-4"
          >
            intelligent together.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-body text-[14px] text-nika-white/60 mt-4 max-w-sm mx-auto"
          >
            Open to Data Science, ML Engineer, and Data Analyst roles. Based in India · Gurgaon preferred · Remote friendly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 mt-8 justify-center flex-wrap"
          >
            <motion.a
              href="mailto:22f2000697@ds.study.iitm.ac.in"
              whileHover={{ scale: 1.08, boxShadow: '0 0 32px rgba(255,215,0,0.5)' }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 500, damping: 18 }}
              className="bg-nika-gold text-nika-bg font-outfit font-semibold px-6 py-3 rounded-full text-[13px]"
            >
              22f2000697@ds.study.iitm.ac.in
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/aryan-kumar-1969b819b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, borderColor: '#FFD700', color: '#FFD700' }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 500, damping: 18 }}
              className="border border-nika-haki-border text-nika-white font-outfit font-semibold px-6 py-3 rounded-full text-[13px]"
            >
              LinkedIn
            </motion.a>

            <motion.a
              href="https://github.com/00-Aryan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, borderColor: '#FFD700', color: '#FFD700' }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 500, damping: 18 }}
              className="border border-nika-haki-border text-nika-white font-outfit font-semibold px-6 py-3 rounded-full text-[13px]"
            >
              GitHub
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="font-body text-[11px] text-nika-white/20 mt-10"
          >
            — Coded with the will of the Joyboy 🥁
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
