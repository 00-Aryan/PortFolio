'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 relative"
        >
          <h2 className="text-3xl font-bold text-nika-white mb-2">Projects</h2>
          <p className="text-nika-white/60 text-lg">A selection of my recent work</p>

          {/* Robin flower petals */}
          {[0, 72, 144, 216, 288].map((angle, index) => {
            const rad = (angle * Math.PI) / 180
            const x = 50 + 8 * Math.cos(rad)
            const y = 50 + 8 * Math.sin(rad)
            return (
              <motion.svg
                key={index}
                className="absolute"
                style={{ left: `${x}%`, top: `${y}%` }}
                width="6"
                height="10"
                viewBox="0 0 6 10"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 400, damping: 10 }}
              >
                <path
                  d="M3 0 C4.5 3 6 6 3 10 C0 6 1.5 3 3 0"
                  fill="rgba(233,213,255,0.5)"
                />
              </motion.svg>
            )
          })}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card p-6"
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 18,
                delay: index * 0.12,
              }}
            >
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-nika-haki border border-nika-haki-border text-nika-haki-text font-outfit text-[10px] tracking-widest uppercase rounded-full px-3 py-1">
                    {project.techStack[0]}
                  </span>
                  {project.slug === 'pastry-palace' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-nika-green/20 text-nika-green">
                      Real World
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-xl text-nika-white mb-2">
                  {project.title}
                </h3>

                <p className="font-body text-[13px] text-nika-white/60 mb-4 line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-nika-gold/10 border border-nika-gold/20 text-nika-gold font-outfit text-[11px] rounded-full px-2.5 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4, color: '#FFD700' }}
                    className="font-outfit text-[12px] text-nika-white/50"
                  >
                    View Code →
                  </motion.a>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4, color: '#FFD700' }}
                      className="font-outfit text-[12px] text-nika-white/50"
                    >
                      Live Demo ↗
                    </motion.a>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-outfit text-[12px] text-nika-white/50 hover:text-nika-gold"
                  >
                    About →
                  </Link>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
