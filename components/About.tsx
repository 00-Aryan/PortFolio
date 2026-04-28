'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { RobinCharacter } from './characters'
import { sectionStory } from '@/data/story'

const papers = [
  {
    year: '2017',
    title: 'Attention Is All You Need',
    authors: 'Vaswani et al.',
  },
  {
    year: '2020',
    title: 'Language Models are Few-Shot Learners',
    authors: 'Brown et al.',
  },
  {
    year: '2023',
    title: 'LLaMA: Open & Efficient Foundation LMs',
    authors: 'Touvron et al.',
  },
  {
    year: '2022',
    title: 'Constitutional AI: Harmlessness from AI Feedback',
    authors: 'Anthropic',
  },
]

export default function About() {
  const story = sectionStory.research

  return (
    <section id="research" className="py-20 px-8 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Left column */}
          <div className="col-span-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-outfit text-[11px] tracking-[0.2em] text-nika-haki-text uppercase mb-4"
            >
              {story.character} · {story.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-body text-[15px] text-nika-white/65 leading-relaxed mb-6"
            >
              {story.title}. {story.blurb}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, type: 'spring', stiffness: 320, damping: 16 }}
              className="mb-2"
            >
              <RobinCharacter />
            </motion.div>

            {/* Auto-scrolling papers carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative overflow-hidden mt-6"
            >
              <motion.div
                className="flex gap-4"
                animate={{ x: [0, -400, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {[...papers, ...papers].map((paper, index) => (
                  <motion.div
                    key={`${paper.year}-${index}`}
                    className="min-w-[200px] flex-shrink-0"
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <div className="glass-card p-4 rounded-[20px]">
                      <span className="font-outfit text-[10px] text-nika-gold-dim bg-nika-gold/10 px-2 py-0.5 rounded-full inline-block">
                        {paper.year}
                      </span>
                      <h4 className="font-display text-[13px] text-nika-white leading-snug mt-2 line-clamp-2">
                        {paper.title}
                      </h4>
                      <p className="font-body text-[11px] text-nika-haki-text mt-1">
                        {paper.authors}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <Link
                href="https://www.linkedin.com/in/aryan-kumar-1969b819b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg font-medium hover:bg-[#004182] transition-colors shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
