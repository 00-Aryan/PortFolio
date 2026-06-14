'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'

interface ProjectDetailProps {
  project: Project
}

function DetailPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[24px] border border-nika-haki-border bg-[#111111] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.28)]">
      <h2 className="mb-4 font-outfit text-[11px] uppercase tracking-[0.22em] text-[#D85A43]">{title}</h2>
      {children}
    </section>
  )
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="min-h-screen bg-nika-bg px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6"
        >
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 font-outfit text-[12px] uppercase tracking-[0.18em] text-nika-white/45 transition-colors hover:text-[#D85A43]"
          >
            ← Back to Case Files
          </Link>

          <div className="overflow-hidden rounded-[28px] border border-nika-haki-border bg-[#111111] shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
            <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
              <div className="border-b border-nika-haki-border bg-[#E8DDC5] p-8 text-[#15110D] lg:border-b-0 lg:border-r">
                <p className="font-outfit text-[11px] uppercase tracking-[0.24em] text-[#8F3325]">Case File</p>
                <p className="mt-2 font-display text-8xl font-black leading-none text-[#9E3428]">{project.caseFile}</p>
                <div className="mt-8 space-y-4 border-t border-[#15110D]/20 pt-6 font-body text-[12px] leading-relaxed">
                  <div>
                    <p className="font-outfit text-[10px] uppercase tracking-[0.18em] text-[#15110D]/50">Category</p>
                    <p className="mt-1 text-[#15110D]">{project.category}</p>
                  </div>
                  <div>
                    <p className="font-outfit text-[10px] uppercase tracking-[0.18em] text-[#15110D]/50">Role</p>
                    <p className="mt-1 text-[#15110D]">{project.role}</p>
                  </div>
                  <div>
                    <p className="font-outfit text-[10px] uppercase tracking-[0.18em] text-[#15110D]/50">Visual Motif</p>
                    <p className="mt-1 text-[#15110D]">{project.visualLabel}</p>
                  </div>
                </div>
              </div>

              <header className="p-8 lg:p-10">
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 6).map((tech) => (
                    <span key={tech} className="border border-nika-haki-border bg-white/[0.03] px-2.5 py-1 font-body text-[10px] text-nika-white/55">
                      {tech}
                    </span>
                  ))}
                </div>

                <h1 className="font-display text-4xl font-black leading-tight text-nika-white md:text-6xl">{project.title}</h1>
                <p className="mt-5 max-w-3xl font-body text-[15px] leading-relaxed text-nika-white/62">{project.tagline}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#B4442E] px-5 py-3 font-outfit text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#D85A43]"
                  >
                    View Repository
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-nika-haki-border px-5 py-3 font-outfit text-[12px] font-semibold uppercase tracking-[0.16em] text-nika-white/70 transition-colors hover:border-[#D85A43] hover:text-[#D85A43]"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </header>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="space-y-6"
          >
            <DetailPanel title="Executive Summary">
              <p className="font-body text-[14px] leading-loose text-nika-white/68">{project.writeupSummary}</p>
            </DetailPanel>

            <DetailPanel title="Problem Framing">
              <p className="font-body text-[14px] leading-loose text-nika-white/68">{project.problem}</p>
            </DetailPanel>

            <DetailPanel title="Approach">
              <ol className="space-y-3">
                {project.approach.map((item, index) => (
                  <li key={item} className="grid grid-cols-[36px_1fr] gap-3 font-body text-[14px] leading-relaxed text-nika-white/68">
                    <span className="flex h-7 w-7 items-center justify-center border border-[#B4442E]/40 bg-[#B4442E]/10 font-outfit text-[11px] text-[#D85A43]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </DetailPanel>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
            className="space-y-6"
          >
            <DetailPanel title="Measured Evidence">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {project.metrics.map((metric) => (
                  <div key={metric} className="border border-nika-haki-border bg-white/[0.025] p-4">
                    <p className="font-body text-[13px] leading-relaxed text-nika-white/70">{metric}</p>
                  </div>
                ))}
              </div>
            </DetailPanel>

            <DetailPanel title="Recruiter Signal">
              <ul className="space-y-3">
                {project.recruiterSignal.map((signal) => (
                  <li key={signal} className="flex gap-3 font-body text-[13px] leading-relaxed text-nika-white/68">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-[#D85A43]" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </DetailPanel>

            <DetailPanel title="Tech Stack">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="border border-nika-haki-border bg-white/[0.03] px-2.5 py-1 font-body text-[11px] text-nika-white/58">
                    {tech}
                  </span>
                ))}
              </div>
            </DetailPanel>
          </motion.aside>
        </div>
      </div>
    </main>
  )
}
