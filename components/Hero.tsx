'use client'

import { motion } from 'framer-motion'
import SocialRail, { SocialStrip } from './SocialRail'

const metrics = [
  { value: '116K+', label: 'Sessions Modeled' },
  { value: '10+', label: 'Projects Built' },
  { value: '5+', label: 'End-to-End Pipelines' },
  { value: '2+', label: 'Years of Learning' },
]

const focusAreas = ['Data Science', 'Machine Learning', 'NLP Systems', 'Automation', 'Business Analytics']

function HeroIllustration() {
  return (
    <div className="relative min-h-[420px] overflow-hidden bg-[#15110D] md:min-h-[520px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_44%,rgba(180,68,46,0.42),transparent_24%),linear-gradient(135deg,#E8DDC5_0%,#D8C7AA_38%,#17120E_39%,#070707_100%)]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(21,17,13,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(21,17,13,0.35)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute bottom-0 right-[8%] h-[82%] w-[44%] min-w-[260px]">
        <div className="absolute bottom-0 left-1/2 h-[72%] w-[46%] -translate-x-1/2 rounded-t-[42%] bg-[#0B0B0B] shadow-[0_0_80px_rgba(0,0,0,0.7)]" />
        <div className="absolute left-[47%] top-[7%] h-28 w-24 -translate-x-1/2 rounded-full bg-[#111]" />
        <div className="absolute left-[43%] top-[3%] h-16 w-28 -translate-x-1/2 rotate-[-12deg] rounded-[48%] bg-[#050505]" />
        <div className="absolute left-[52%] top-[2%] h-16 w-20 -translate-x-1/2 rotate-[18deg] rounded-[48%] bg-[#050505]" />
        <div className="absolute bottom-[15%] left-[20%] h-[42%] w-[72%] rotate-[-12deg] rounded-[40px] bg-[#141414]" />
        <div className="absolute bottom-[35%] left-[18%] h-[2px] w-[64%] rotate-[-18deg] bg-[#E8DDC5]/35" />
      </div>
      <div className="absolute right-8 top-8 border border-[#15110D]/25 bg-[#E8DDC5]/70 px-5 py-4 text-[#15110D] shadow-xl backdrop-blur-sm">
        <p className="font-outfit text-[10px] uppercase tracking-[0.18em] text-[#8F3325]">Field Report</p>
        <p className="mt-1 font-display text-2xl font-black">2026</p>
      </div>
      <div className="absolute bottom-8 right-8 max-w-[230px] border border-[#15110D]/20 bg-[#E8DDC5]/76 p-4 text-[#15110D] shadow-xl backdrop-blur-sm">
        <p className="font-outfit text-[10px] uppercase tracking-[0.18em] text-[#8F3325]">Focus Areas</p>
        <ul className="mt-3 space-y-1.5 font-body text-[12px] text-[#15110D]/78">
          {focusAreas.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(0,0,0,0.26),transparent_24%)]" />
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#070707] to-transparent" />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#070707] px-4 py-6 sm:px-6 lg:px-8">
      <SocialRail />

      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative overflow-hidden border border-[rgba(232,221,197,0.22)] bg-[#E8DDC5] text-[#15110D] shadow-[0_24px_90px_rgba(0,0,0,0.6)]"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.2] [background-image:radial-gradient(#15110D_0.8px,transparent_0.8px)] [background-size:18px_18px]" />
          <div className="pointer-events-none absolute inset-0 border-[10px] border-[#15110D]/[0.06]" />

          <div className="grid min-h-[calc(100vh-112px)] grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 lg:pl-28 xl:pl-40">
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="font-outfit text-[11px] uppercase tracking-[0.24em] text-[#B4442E]">Data Scientist</span>
                <span className="h-2 w-2 rounded-full bg-[#B4442E]" />
                <span className="font-outfit text-[11px] uppercase tracking-[0.24em] text-[#15110D]/50">ML Engineering</span>
              </div>

              <h1 className="max-w-2xl font-display text-[clamp(54px,8vw,138px)] font-black leading-[0.88] tracking-[-0.07em] text-[#0B0B0B]">
                ARYAN
                <br />
                KUMAR
              </h1>

              <p className="mt-7 max-w-lg font-body text-[14px] leading-relaxed text-[#15110D]/72 sm:text-[15px]">
                Building intelligent systems that solve real problems and turn messy data into measurable impact.
              </p>

              <div className="mt-9 grid max-w-2xl grid-cols-2 gap-0 border-y border-[#15110D]/18 sm:grid-cols-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="border-[#15110D]/14 px-4 py-4 first:pl-0 sm:border-r sm:last:border-r-0">
                    <p className="font-display text-3xl font-black text-[#0B0B0B]">{metric.value}</p>
                    <p className="mt-1 font-body text-[10px] leading-snug text-[#15110D]/58">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="bg-[#B4442E] px-6 py-3 font-outfit text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#D85A43]"
                >
                  Explore Case Files →
                </a>
                <a
                  href="/Aryan_Kumar_CV.pdf"
                  className="font-outfit text-[12px] font-semibold uppercase tracking-[0.16em] text-[#15110D]/78 transition-colors hover:text-[#B4442E]"
                >
                  Resume ↓
                </a>
                <a
                  href="https://github.com/00-Aryan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-outfit text-[12px] font-semibold uppercase tracking-[0.16em] text-[#15110D]/78 transition-colors hover:text-[#B4442E]"
                >
                  GitHub ↗
                </a>
              </div>

              <div className="mt-6">
                <SocialStrip />
              </div>
            </div>

            <HeroIllustration />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
