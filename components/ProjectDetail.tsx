'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProjectDetailProps {
  project: {
    id: string
    title: string
    slug: string
    tagline: string
    description: string
    techStack: string[]
    githubUrl: string
    liveUrl?: string
    writeupSummary: string
    metrics: string[]
  }
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-nika-bg py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass-card p-8 mb-8"
        >
          <motion.button
            whileHover={{ x: -4, color: '#FFD700' }}
            className="font-outfit text-[13px] text-nika-white/50 mb-8 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </motion.button>

          <header className="mb-8">
            <h1 className="font-display text-5xl text-nika-white gold-glow mb-4">
              {project.title}
            </h1>
            <p className="font-body text-nika-white/60 text-lg leading-relaxed">
              {project.tagline}
            </p>
          </header>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-nika-gold/10 border border-nika-gold/20 text-nika-gold font-outfit text-[11px] rounded-full px-2.5 py-0.5"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 28px rgba(255,215,0,0.4)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 500, damping: 18 }}
              className="bg-nika-gold text-nika-bg font-outfit font-semibold px-6 py-3 rounded-full text-[13px]"
            >
              View Code
            </motion.a>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, borderColor: '#FFD700', color: '#FFD700' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                className="border border-nika-haki-border text-nika-white font-outfit font-semibold px-6 py-3 rounded-full text-[13px]"
              >
                Live Demo
              </motion.a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="glass-card p-8"
        >
          <h2 className="font-display text-2xl text-nika-white mb-6">Overview</h2>
          <p className="font-body text-[15px] text-nika-white/70 leading-loose mb-8">
            {project.writeupSummary}
          </p>

          {project.metrics && project.metrics.length > 0 && (
            <>
              <h2 className="font-display text-2xl text-nika-white mb-6">Key Results</h2>
              <ul className="space-y-3">
                {project.metrics.map((metric, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-nika-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-body text-[15px] text-nika-white/70">{metric}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}
