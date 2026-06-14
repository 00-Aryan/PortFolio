'use client'

import { motion } from 'framer-motion'

const facts = [
  { label: 'Location', value: 'Jamshedpur / Gurgaon, India' },
  { label: 'Education', value: 'B.Tech CSE (AI & ML), SRM University' },
  { label: 'Availability', value: 'Open to internships and entry-level roles' },
  { label: 'Email', value: '22f2000697@ds.study.iitm.ac.in' },
]

export default function About() {
  return (
    <section id="research" className="bg-[#070707] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid overflow-hidden border border-[rgba(232,221,197,0.16)] bg-[#0D0D0D] shadow-[0_20px_70px_rgba(0,0,0,0.45)] lg:grid-cols-[1fr_0.72fr]"
        >
          <div className="relative min-h-[360px] border-b border-[rgba(232,221,197,0.16)] lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#111_0%,#101010_42%,#E8DDC5_43%,#D9C8AD_100%)]" />
            <div className="absolute inset-0 opacity-[0.14] [background-image:radial-gradient(#E8DDC5_0.8px,transparent_0.8px)] [background-size:18px_18px]" />
            <div className="absolute bottom-0 left-[18%] h-[68%] w-[36%] rounded-t-[48%] bg-[#070707] shadow-[0_0_80px_rgba(0,0,0,0.65)]" />
            <div className="absolute bottom-[26%] left-[12%] h-[32%] w-[58%] rounded-[42px] bg-[#111] opacity-95" />
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#070707] to-transparent" />
            <div className="absolute left-8 top-8 max-w-md">
              <p className="font-outfit text-[11px] uppercase tracking-[0.24em] text-[#D85A43]">01 / About Me</p>
              <h2 className="mt-3 font-display text-4xl font-black text-[#E8DDC5]">Data-first builder with product instincts</h2>
            </div>
            <div className="absolute bottom-8 left-8 max-w-md border border-[rgba(232,221,197,0.18)] bg-black/35 p-5 backdrop-blur-sm">
              <p className="font-body text-[13px] leading-relaxed text-[#E8DDC5]/72">
                I work at the intersection of data science, NLP, automation, and business analytics. My goal is to build systems that are useful, evidence-backed, and strong enough to defend in technical interviews.
              </p>
            </div>
          </div>

          <div className="bg-[#0D0D0D] p-6 sm:p-8 lg:p-10">
            <p className="font-outfit text-[11px] uppercase tracking-[0.24em] text-[#B4442E]">Profile Snapshot</p>
            <div className="mt-6 grid gap-4">
              {facts.map((fact) => (
                <div key={fact.label} className="border border-[rgba(232,221,197,0.12)] bg-white/[0.025] p-4">
                  <p className="font-outfit text-[10px] uppercase tracking-[0.18em] text-[#E8DDC5]/42">{fact.label}</p>
                  <p className="mt-2 font-body text-[13px] leading-relaxed text-[#E8DDC5]/76">{fact.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 border border-[#B4442E]/40 bg-[#B4442E]/10 p-5">
              <p className="font-display text-2xl font-black text-[#E8DDC5]">Discipline in the process, clarity in the impact.</p>
              <p className="mt-3 font-body text-[13px] leading-relaxed text-[#E8DDC5]/62">
                The portfolio should signal that I can reason through data, build working systems, document tradeoffs, and keep improving instead of relying on generic AI-generated output.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
