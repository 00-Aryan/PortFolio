'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects, type Project } from '@/data/projects'

const visualThemes: Record<Project['visualTheme'], { background: string; accent: string; ink: string }> = {
  'ecommerce-ml': {
    background: 'radial-gradient(circle at 24% 18%, rgba(56,189,248,0.42), transparent 26%), linear-gradient(135deg, #06111f 0%, #0f172a 58%, #111827 100%)',
    accent: '#38bdf8',
    ink: '#0f172a',
  },
  'clinical-nlp': {
    background: 'radial-gradient(circle at 78% 22%, rgba(248,113,113,0.34), transparent 26%), linear-gradient(135deg, #111827 0%, #1f2937 60%, #0f172a 100%)',
    accent: '#f87171',
    ink: '#111827',
  },
  'tender-intelligence': {
    background: 'radial-gradient(circle at 75% 25%, rgba(251,191,36,0.34), transparent 30%), linear-gradient(135deg, #17110a 0%, #292014 58%, #0f0b07 100%)',
    accent: '#fbbf24',
    ink: '#17110a',
  },
  'content-pipeline': {
    background: 'radial-gradient(circle at 15% 30%, rgba(168,85,247,0.36), transparent 28%), linear-gradient(135deg, #12091f 0%, #1e1b4b 55%, #0f172a 100%)',
    accent: '#a855f7',
    ink: '#12091f',
  },
  'agent-os': {
    background: 'radial-gradient(circle at 75% 20%, rgba(45,212,191,0.36), transparent 30%), linear-gradient(135deg, #042f2e 0%, #0f172a 58%, #020617 100%)',
    accent: '#2dd4bf',
    ink: '#042f2e',
  },
  'business-analytics': {
    background: 'radial-gradient(circle at 18% 18%, rgba(251,146,60,0.34), transparent 28%), linear-gradient(135deg, #1c1208 0%, #2a2118 60%, #0f0d0a 100%)',
    accent: '#fb923c',
    ink: '#1c1208',
  },
  'recommender-system': {
    background: 'radial-gradient(circle at 72% 18%, rgba(96,165,250,0.34), transparent 30%), linear-gradient(135deg, #07111f 0%, #172554 55%, #020617 100%)',
    accent: '#60a5fa',
    ink: '#07111f',
  },
  'daily-tracker': {
    background: 'radial-gradient(circle at 25% 20%, rgba(74,222,128,0.32), transparent 28%), linear-gradient(135deg, #07170d 0%, #16251a 58%, #020617 100%)',
    accent: '#4ade80',
    ink: '#07170d',
  },
  'judicial-scraping': {
    background: 'radial-gradient(circle at 80% 22%, rgba(203,213,225,0.28), transparent 30%), linear-gradient(135deg, #111111 0%, #1f2937 60%, #030712 100%)',
    accent: '#cbd5e1',
    ink: '#111111',
  },
  'quiz-platform': {
    background: 'radial-gradient(circle at 20% 20%, rgba(244,114,182,0.32), transparent 28%), linear-gradient(135deg, #1f0a18 0%, #312036 58%, #020617 100%)',
    accent: '#f472b6',
    ink: '#1f0a18',
  },
}

function VisualGlyph({ theme, accent }: { theme: Project['visualTheme']; accent: string }) {
  const stroke = accent

  if (theme === 'clinical-nlp') {
    return (
      <svg viewBox="0 0 220 120" className="absolute inset-x-4 bottom-5 h-24 opacity-90">
        <rect x="26" y="16" width="74" height="88" rx="8" fill="none" stroke={stroke} strokeWidth="2" />
        <path d="M46 42h34M46 58h44M46 74h26" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <path d="M142 32v18M133 41h18" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
        <path d="M112 78h18l10-18 14 38 10-20h24" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (theme === 'tender-intelligence') {
    return (
      <svg viewBox="0 0 220 120" className="absolute inset-x-4 bottom-5 h-24 opacity-90">
        <rect x="32" y="18" width="72" height="86" rx="8" fill="none" stroke={stroke} strokeWidth="2" />
        <path d="M50 42h34M50 58h44M50 74h24" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <circle cx="146" cy="58" r="24" fill="none" stroke={stroke} strokeWidth="3" />
        <path d="M164 76l28 28" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  }

  if (theme === 'content-pipeline' || theme === 'agent-os') {
    return (
      <svg viewBox="0 0 220 120" className="absolute inset-x-4 bottom-5 h-24 opacity-90">
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
      <svg viewBox="0 0 220 120" className="absolute inset-x-4 bottom-5 h-24 opacity-90">
        <rect x="24" y="22" width="48" height="76" rx="8" fill="none" stroke={stroke} strokeWidth="2" />
        <rect x="86" y="22" width="48" height="76" rx="8" fill="none" stroke={stroke} strokeWidth="2" />
        <rect x="148" y="22" width="48" height="76" rx="8" fill="none" stroke={stroke} strokeWidth="2" />
        <path d="M38 42h20M100 42h20M162 42h20M38 61h14M100 61h18M162 61h12" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  if (theme === 'judicial-scraping') {
    return (
      <svg viewBox="0 0 220 120" className="absolute inset-x-4 bottom-5 h-24 opacity-90">
        <rect x="26" y="28" width="92" height="64" rx="6" fill="none" stroke={stroke} strokeWidth="2" />
        <path d="M26 48h92M26 68h92M56 28v64M88 28v64" stroke={stroke} strokeWidth="1.5" />
        <path d="M138 60h42M166 44l16 16-16 16" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (theme === 'quiz-platform') {
    return (
      <svg viewBox="0 0 220 120" className="absolute inset-x-4 bottom-5 h-24 opacity-90">
        <rect x="34" y="18" width="72" height="86" rx="8" fill="none" stroke={stroke} strokeWidth="2" />
        <path d="M50 44l8 8 18-20M50 72l8 8 18-20" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M132 86a34 34 0 1 1 58 0" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <path d="M161 84l18-28" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  }

  if (theme === 'recommender-system') {
    return (
      <svg viewBox="0 0 220 120" className="absolute inset-x-4 bottom-5 h-24 opacity-90">
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
    <svg viewBox="0 0 220 120" className="absolute inset-x-4 bottom-5 h-24 opacity-90">
      <path d="M28 88h28V62H28v26ZM72 88h28V42H72v46ZM116 88h28V56h-28v32ZM160 88h28V30h-28v58Z" fill="none" stroke={stroke} strokeWidth="2.5" />
      <path d="M30 38c28 30 52 35 78 18 29-19 50-12 80 12" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      <path d="M188 68l-18-2 10-14" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function shortMetric(project: Project) {
  const metric = project.metrics[0] ?? 'Evidence documented in case file'
  return metric.length > 54 ? `${metric.slice(0, 54)}…` : metric
}

function ProjectVisual({ project }: { project: Project }) {
  const theme = visualThemes[project.visualTheme]

  return (
    <div className="relative h-52 overflow-hidden border border-[#15110D]/18 shadow-[0_14px_30px_rgba(0,0,0,0.28)]" style={{ background: theme.background }}>
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(250,250,250,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(250,250,250,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute left-3 top-3 border border-white/22 bg-black/30 px-2 py-1 font-outfit text-[9px] uppercase tracking-[0.22em] text-white/72">
        Case File {project.caseFile}
      </div>
      <VisualGlyph theme={project.visualTheme} accent={theme.accent} />
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
        <p className="font-outfit text-[10px] uppercase tracking-[0.2em] text-white/68">{project.visualLabel}</p>
        <span className="border border-white/18 bg-black/28 px-2 py-1 font-body text-[9px] text-white/65">{project.category}</span>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const theme = visualThemes[project.visualTheme]
  const firstSignal = project.recruiterSignal[0] ?? 'Clear technical signal for recruiter review'

  return (
    <motion.article
      className="group relative overflow-hidden bg-[#E8DDC5] text-[#15110D] shadow-[0_18px_60px_rgba(0,0,0,0.42)] transition-transform duration-300 hover:-translate-y-1"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 28 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(#15110D_0.75px,transparent_0.75px)] [background-size:16px_16px]" />
      <div className="pointer-events-none absolute inset-0 border-[8px] border-[#15110D]/[0.04]" />
      <div className="relative z-10 p-4">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="font-outfit text-[9px] uppercase tracking-[0.22em] text-[#8F3325]">Case File</p>
            <p className="font-display text-5xl font-black leading-none text-[#9E3428]">{project.caseFile}</p>
          </div>
          <div className="border border-[#9E3428]/45 px-3 py-1.5 font-outfit text-[9px] uppercase tracking-[0.18em] text-[#9E3428] rotate-[-2deg]">
            {project.priority}
          </div>
        </div>

        <ProjectVisual project={project} />

        <div className="mt-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.accent }} />
            <span className="font-outfit text-[10px] uppercase tracking-[0.2em] text-[#15110D]/52">{project.category}</span>
          </div>

          <h3 className="font-display text-2xl font-black leading-[1.02] tracking-[-0.03em] text-[#101010]">{project.title}</h3>

          <div className="mt-4 grid grid-cols-[78px_1fr] border-y border-[#15110D]/14 py-3">
            <p className="font-outfit text-[9px] uppercase tracking-[0.18em] text-[#15110D]/45">Evidence</p>
            <p className="font-body text-[12px] leading-relaxed text-[#15110D]/72">{shortMetric(project)}</p>
          </div>

          <div className="grid grid-cols-[78px_1fr] border-b border-[#15110D]/14 py-3">
            <p className="font-outfit text-[9px] uppercase tracking-[0.18em] text-[#15110D]/45">Signal</p>
            <p className="font-body text-[12px] leading-relaxed text-[#15110D]/72">{firstSignal}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className="border border-[#15110D]/22 bg-[#15110D]/[0.025] px-2.5 py-1 font-body text-[10px] text-[#15110D]/70">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-3 border-t border-[#15110D]/14 pt-4">
            <Link
              href={`/projects/${project.slug}`}
              className="bg-[#15110D] px-4 py-2.5 font-outfit text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E8DDC5] transition-colors hover:bg-[#B4442E]"
            >
              Open File →
            </Link>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto font-outfit text-[10px] uppercase tracking-[0.16em] text-[#15110D]/55 transition-colors hover:text-[#B4442E]"
            >
              GitHub ↗
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-outfit text-[10px] uppercase tracking-[0.16em] text-[#15110D]/55 transition-colors hover:text-[#B4442E]"
              >
                Live ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const primaryProjects = projects.filter((project) => project.priority === 'Primary')
  const secondaryProjects = projects.filter((project) => project.priority !== 'Primary')

  return (
    <section id="projects" className="bg-[#070707] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 flex flex-col justify-between gap-4 border-b border-[rgba(232,221,197,0.16)] pb-6 md:flex-row md:items-end"
        >
          <div>
            <p className="font-outfit text-[11px] uppercase tracking-[0.24em] text-[#B4442E]">02 / Case Files</p>
            <h2 className="mt-2 font-display text-4xl font-black tracking-[-0.04em] text-[#E8DDC5] md:text-5xl">Project evidence, designed for scanning</h2>
          </div>
          <p className="max-w-xl font-body text-[13px] leading-relaxed text-[#E8DDC5]/55">
            Each card behaves like a recruiter dossier: what it is, what evidence exists, why it matters, and where to verify the work.
          </p>
        </motion.div>

        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="font-outfit text-[10px] uppercase tracking-[0.22em] text-[#E8DDC5]/45">Primary work</p>
          <a href="https://github.com/00-Aryan" target="_blank" rel="noopener noreferrer" className="font-outfit text-[10px] uppercase tracking-[0.2em] text-[#E8DDC5]/55 transition-colors hover:text-[#D85A43]">
            View all repositories →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {primaryProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 border-t border-[rgba(232,221,197,0.14)] pt-8">
          <p className="mb-6 font-outfit text-[10px] uppercase tracking-[0.22em] text-[#E8DDC5]/45">Supporting systems and practice projects</p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {secondaryProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + primaryProjects.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
