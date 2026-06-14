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
    <div className="relative min-h-[440px] overflow-hidden bg-[#15110D] md:min-h-[560px]">
      <div className="absolute inset-0 bg-[#E8DDC5]" />
      <div className="absolute inset-0 opacity-[0.24] [background-image:radial-gradient(#15110D_0.9px,transparent_0.9px)] [background-size:18px_18px]" />
      <div className="absolute inset-y-0 right-0 w-[28%] bg-gradient-to-l from-[#070707] via-[#15110D]/70 to-transparent" />
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#15110D]/80 to-transparent" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 760 560"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="roughInk" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" />
          </filter>
          <linearGradient id="coat" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#181818" />
            <stop offset="0.55" stopColor="#080808" />
            <stop offset="1" stopColor="#020202" />
          </linearGradient>
        </defs>

        <circle cx="408" cy="262" r="146" fill="#B4442E" opacity="0.82" filter="url(#roughInk)" />
        <circle cx="408" cy="262" r="112" fill="none" stroke="#15110D" strokeWidth="2" strokeDasharray="18 14" opacity="0.18" />
        <path d="M214 406c70-48 128-54 193-26 52 23 104 14 169-38" fill="none" stroke="#15110D" strokeWidth="7" opacity="0.18" filter="url(#roughInk)" />
        <path d="M500 96c46 24 86 31 142 15M502 126c58 20 93 23 142 7" stroke="#15110D" strokeWidth="3" opacity="0.28" />

        <g transform="translate(280 54)">
          <path
            d="M106 402c24-98 52-159 104-187 45-24 102-3 133 34 38 46 48 111 82 153 30 37 74 55 101 98H102c-19-37-15-68 4-98Z"
            fill="url(#coat)"
          />
          <path
            d="M189 255c37-44 82-61 128-34 52 31 57 99 82 143 18 31 51 52 83 64-49 8-107-2-151-31-52-34-73-89-101-115-14-13-26-18-41-27Z"
            fill="#111111"
            stroke="#2A2A2A"
            strokeWidth="2"
          />
          <path
            d="M154 421c42-43 79-70 118-81 45-13 93-3 138 22"
            fill="none"
            stroke="#E8DDC5"
            strokeWidth="2"
            opacity="0.18"
          />
          <path d="M248 198c-6 31-1 55 17 72 20 19 55 22 82 5-16-18-31-42-38-72l-61-5Z" fill="#2B2119" />

          <path
            d="M236 112c-33 21-51 53-49 88 2 40 31 70 70 78 30 6 62-4 82-24 12-12 22-22 39-26 19-5 27-15 22-27-4-9-14-13-32-15-20-3-27-11-34-28-17-41-59-67-98-46Z"
            fill="#CDB99E"
            stroke="#15110D"
            strokeWidth="3"
          />
          <path d="M201 196c14 8 29 11 45 10" fill="none" stroke="#15110D" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M291 178c12-3 23-2 33 4" fill="none" stroke="#15110D" strokeWidth="3" strokeLinecap="round" />
          <path d="M349 199c16 4 25 8 34 16" fill="none" stroke="#15110D" strokeWidth="2" strokeLinecap="round" />
          <path d="M342 225c12 8 24 10 37 8" fill="none" stroke="#15110D" strokeWidth="2" strokeLinecap="round" />

          <path
            d="M184 135c-18-28-3-60 31-75 29-13 70-11 102 4 36 17 58 48 58 86-17-19-34-29-52-30 2 22-4 41-18 56-5-29-17-51-38-66-7 27-21 47-43 61 1-25-4-44-18-57-5 22-13 39-22 51Z"
            fill="#050505"
            stroke="#15110D"
            strokeWidth="2"
            filter="url(#roughInk)"
          />
          <path d="M207 72c-31-8-56 1-78 26 27-1 46 5 61 22" fill="#050505" />
          <path d="M246 58c-20-22-45-31-76-26 20 13 32 29 38 49" fill="#050505" />
          <path d="M300 63c-9-25-29-43-58-55 11 22 14 44 9 66" fill="#050505" />
          <path d="M342 92c4-24-4-47-25-70-1 25-8 45-22 61" fill="#050505" />

          <path
            d="M93 459c51-18 104-23 160-11 73 16 141 15 213-8"
            fill="none"
            stroke="#B4442E"
            strokeWidth="5"
            opacity="0.55"
            filter="url(#roughInk)"
          />
          <path d="M198 314c25 28 53 48 84 61" fill="none" stroke="#E8DDC5" strokeWidth="2" opacity="0.18" />
          <path d="M172 347c35 25 74 43 118 54" fill="none" stroke="#E8DDC5" strokeWidth="2" opacity="0.12" />
        </g>

        <g opacity="0.34" filter="url(#roughInk)">
          <path d="M540 330c44 8 82 27 118 59" stroke="#15110D" strokeWidth="4" fill="none" />
          <path d="M100 444c70-18 119-18 185 0" stroke="#15110D" strokeWidth="4" fill="none" />
          <path d="M94 104c44 11 91 7 141-13" stroke="#15110D" strokeWidth="3" fill="none" />
        </g>
      </svg>

      <div className="absolute right-8 top-8 hidden border border-[#15110D]/25 bg-[#E8DDC5]/76 px-5 py-4 text-[#15110D] shadow-xl backdrop-blur-sm sm:block">
        <p className="font-outfit text-[10px] uppercase tracking-[0.18em] text-[#8F3325]">Field Report</p>
        <p className="mt-1 font-display text-2xl font-black">2026</p>
      </div>

      <div className="absolute bottom-8 right-8 hidden max-w-[230px] border border-[#15110D]/20 bg-[#E8DDC5]/78 p-4 text-[#15110D] shadow-xl backdrop-blur-sm md:block">
        <p className="font-outfit text-[10px] uppercase tracking-[0.18em] text-[#8F3325]">Focus Areas</p>
        <ul className="mt-3 space-y-1.5 font-body text-[12px] text-[#15110D]/78">
          {focusAreas.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
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
