'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects, type Project } from '@/data/projects'

const visualThemes: Record<Project['visualTheme'], { background: string; accent: string }> = {
  'ecommerce-ml': {
    background: 'radial-gradient(circle at 20% 25%, rgba(56,189,248,0.35), transparent 28%), linear-gradient(135deg, #06111f 0%, #0f172a 58%, #111827 100%)',
    accent: '#38bdf8',
  },
  'clinical-nlp': {
    background: 'radial-gradient(circle at 80% 20%, rgba(248,113,113,0.32), transparent 28%), linear-gradient(135deg, #111827 0%, #1f2937 60%, #0f172a 100%)',
    accent: '#f87171',
  },
  'tender-intelligence': {
    background: 'radial-gradient(circle at 75% 25%, rgba(251,191,36,0.34), transparent 30%), linear-gradient(135deg, #17110a 0%, #292014 58%, #0f0b07 100%)',
    accent: '#fbbf24',
  },
  'content-pipeline': {
    background: 'radial-gradient(circle at 15% 30%, rgba(168,85,247,0.34), transparent 28%), linear-gradient(135deg, #12091f 0%, #1e1b4b 55%, #0f172a 100%)',
    accent: '#a855f7',
  },
  'agent-os': {
    background: 'radial-gradient(circle at 75% 20%, rgba(45,212,191,0.34), transparent 30%), linear-gradient(135deg, #042f2e 0%, #0f172a 58%, #020617 100%)',
    accent: '#2dd4bf',
  },
  'business-analytics': {
    background: 'radial-gradient(circle at 18% 18%, rgba(251,146,60,0.32), transparent 28%), linear-gradient(135deg, #1c1208 0%, #2a2118 60%, #0f0d0a 100%)',
    accent: '#fb923c',
  },
  'recommender-system': {
    background: 'radial-gradient(circle at 72% 18%, rgba(96,165,250,0.32), transparent 30%), linear-gradient(135deg, #07111f 0%, #172554 55%, #020617 100%)',
    accent: '#60a5fa',
  },
  'daily-tracker': {
    background: 'radial-gradient(circle at 25% 20%, rgba(74,222,128,0.3), transparent 28%), linear-gradient(135deg, #07170d 0%, #16251a 58%, #020617 100%)',
    accent: '#4ade80',
  },
  'judicial-scraping': {
    background: 'radial-gradient(circle at 80% 22%, rgba(203,213,225,0.25), transparent 30%), linear-gradient(135deg, #111111 0%, #1f2937 60%, #030712 100%)',
    accent: '#cbd5e1',
  },
  'quiz-platform': {
    background: 'radial-gradient(circle at 20% 20%, rgba(244,114,182,0.3), transparent 28%), linear-gradient(135deg, #1f0a18 0%, #312036 58%, #020617 100%)',
    accent: '#f472b6',
  },
}

function VisualGlyph({ theme, accent }: { theme: Project['visualTheme']; accent: string }) {
  const stroke = accent

  if (theme === 'clinical-nlp') {
    return (
      <svg viewBox="0 0 220 120" className="absolute inset-x-6 bottom-8 h-24 opacity-90">
        <rect x="28" y="18" width="72" height="86" rx="8" fill="none" stroke={stroke} strokeWidth="2" />
        <path d="M47 46h34M47 62h44M47 78h26" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <path d="M142 32v18M133 41h18" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        <path d="M112 78h18l10-18 14 38 10-20h24" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (theme === 'tender-intelligence') {
    return (
      <svg viewBox="0 0 220 120" className="absolute inset-x-6 bottom-8 h-24 opacity-90">
        <rect x="32" y="18" width="72" height="86" rx="8" fill="none" stroke={stroke} strokeWidth="2" />
        <path d="M50 42h34M50 58h44M50 74h24" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <circle cx="146" cy="58" r="24" fill="none" stroke={stroke} strokeWidth="3" />
        <path d="M164 76l28 28" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  }

  if (theme === 'content-pipeline' || theme === 'agent-os') {
    return (
      <svg viewBox="0 0 220 120" className="absolute inset-x-6 bottom-8 h-24 opacity-90">
        <circle cx="40" cy="60" r="15" fill="none" stroke={stroke} strokeWidth="3" />
        <circle cx="110" cy="34" r="15" fill="none" stroke={stroke} strokeWidth="3" />
        <circle cx="110" cy="86" r="15" fill="none" stroke={stroke} strokeWidth="3" />
        <circle cx="180" cy="60" r="15" fill="none" stroke={stroke} strokeWidth="3" />
        <path d="M55 56l40-16M55 64l40 16M125 40l40 16M125 80l40-16" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  if (theme === 'daily-tracker') {
    return (
      <svg viewBox="0 0 220 120" className="absolute inset-x-6 bottom-8 h-24 opacity-90">
        <rect x="24" y="22" width="48" height="76" rx="8" fill="none" stroke={stroke} strokeWidth="2" />
        <rect x="86" y="22" width="48" height="76" rx="8" fill="none" stroke={stroke} strokeWidth="2" />
        <rect x="148" y="22" width="48" height="76" rx="8" fill="none" stroke={stroke} strokeWidth="2" />
        <path d="M38 42h20M100 42h20M162 42h20M38 61h14M100 61h18M162 61h12" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  if (theme === 'judicial-scraping') {
    return (
      <svg viewBox="0 0 220 120" className="absolute inset-x-6 bottom-8 h-24 opacity-90">
        <rect x="26" y="28" width="92" height="64" rx="6" fill="none" stroke={stroke} strokeWidth="2" />
        <path d="M26 48h92M26 68h92M56 28v64M88 28v64" stroke={stroke} strokeWidth="1.5" />
        <path d="M138 60h42M166 44l16 16-16 16" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (theme === 'quiz-platform') {
    return (
      <svg viewBox="0 0 220 120" className="absolute inset-x-6 bottom-8 h-24 opacity-90">
        <rect x="34" y="18" width="72" height="86" rx="8" fill="none" stroke={stroke} strokeWidth="2" />
        <path d="M50 44l8 8 18-20M50 72l8 8 18-20" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M132 86a34 34 0 1 1 58 0" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <path d="M161 84l18-28" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  }

  if (theme === 'recommender-system') {
    return (
      <svg viewBox="0 0 220 120" className="absolute inset-x-6 bottom-8 h-24 opacity-90">
        <circle cx="48" cy="60" r="12" fill="none" stroke={stroke} strokeWidth="3" />
        <circle cx="104" cy="34" r="12" fill="none" stroke={stroke} strokeWidth="3" />
        <circle cx="104" cy="86" r="12" fill="none" stroke={stroke} strokeWidth="3" />
        <circle cx="164" cy="40" r="12" fill="none" stroke={stroke} strokeWidth="3" />
        <circle cx="174" cy="84" r="12" fill="none" stroke={stroke} strokeWidth="3" />
        <path d="M60 56l32-16M60 64l32 16M116 36l36 4M116 84l46 0M113 45l49 31" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 220 120" className="absolute inset-x-6 bottom-8 h-24 opacity-90">
      <path d="M28 88h28V62H28v26ZM72 88h28V42H72v46ZM116 88h28V56h-28v32ZM160 88h28V30h-28v58Z" fill="none" stroke={stroke} strokeWidth="2.5" />
      <path d="M30 38c28 30 52 35 78 18 29-19 50-12 80 12" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      <path d="M188 68l-18-2 10-14" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ProjectVisual({ project }: { project: Project }) {
  const theme = visualThemes[project.visualTheme]

  return (
    <div className="relative h-44 overflow-hidden border-b border-nika-haki-border" style={{ background: theme.background }}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(250,250,250,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,0.12) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="border border-white/25 bg-black/25 px-2 py-1 font-outfit text-[10px] uppercase tracking-[0.24em] text-white/70">
          Case File
        </span>
        <span className="font-display text-3xl font-black text-white/90">{project.caseFile}</span>
      </div>
      <VisualGlyph theme={project.visualTheme} accent={theme.accent} />
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
        <p className="font-outfit text-[11px] uppercase tracking-[0.2em] text-white/70">{project.visualLabel}</p>
        <span className="rounded-full border border-white/20 bg-black/25 px-2.5 py-1 font-body text-[10px] text-white/70">
          {project.category}
        </span>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 flex flex-col justify-between gap-4 border-b border-nika-haki-border pb-6 md:flex-row md:items-end"
        >
          <div>
            <p className="font-outfit text-[11px] uppercase tracking-[0.24em] text-[#B4442E]">02 / Selected Case Files</p>
            <h2 className="mt-2 font-display text-3xl font-black text-nika-white md:text-4xl">Project evidence, not project decoration</h2>
          </div>
          <p className="max-w-xl font-body text-[13px] leading-relaxed text-nika-white/55">
            Each card uses a project-specific visual motif: clickstream charts for ML, documents for NLP and tender AI, workflow nodes for automation, and dashboards for product systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group overflow-hidden rounded-[24px] border border-nika-haki-border bg-[#111111] shadow-[0_16px_50px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 28 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
            >
              <ProjectVisual project={project} />

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-[#B4442E]/40 bg-[#B4442E]/10 px-3 py-1 font-outfit text-[10px] uppercase tracking-[0.2em] text-[#D85A43]">
                    {project.priority}
                  </span>
                  <span className="font-body text-[11px] text-nika-white/40">{project.techStack[0]}</span>
                </div>

                <h3 className="font-display text-xl font-bold leading-tight text-nika-white">{project.title}</h3>
                <p className="mt-3 min-h-[58px] font-body text-[13px] leading-relaxed text-nika-white/58">{project.tagline}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="border border-nika-haki-border bg-white/[0.03] px-2.5 py-1 font-body text-[10px] text-nika-white/55">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-nika-haki-border pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-outfit text-[12px] uppercase tracking-[0.16em] text-nika-white/55 transition-colors hover:text-[#D85A43]"
                  >
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-outfit text-[12px] uppercase tracking-[0.16em] text-nika-white/55 transition-colors hover:text-[#D85A43]"
                    >
                      Live
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="ml-auto font-outfit text-[12px] uppercase tracking-[0.16em] text-nika-white/70 transition-colors hover:text-[#D85A43]"
                  >
                    View Case File →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
