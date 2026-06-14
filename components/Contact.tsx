'use client'

import { motion } from 'framer-motion'

const contacts = [
  {
    label: 'Email',
    value: '22f2000697@ds.study.iitm.ac.in',
    href: 'mailto:22f2000697@ds.study.iitm.ac.in',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/aryan-kumar-1969b819b',
    href: 'https://www.linkedin.com/in/aryan-kumar-1969b819b/',
  },
  {
    label: 'GitHub',
    value: 'github.com/00-Aryan',
    href: 'https://github.com/00-Aryan',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-[#070707] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="overflow-hidden border border-[rgba(232,221,197,0.16)] bg-[#0D0D0D] shadow-[0_20px_70px_rgba(0,0,0,0.45)]"
        >
          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            <div className="relative min-h-[260px] border-b border-[rgba(232,221,197,0.16)] bg-[#E8DDC5] p-8 text-[#15110D] lg:border-b-0 lg:border-r lg:p-10">
              <p className="font-outfit text-[11px] uppercase tracking-[0.24em] text-[#8F3325]">05 / Contact</p>
              <h2 className="mt-4 max-w-lg font-display text-4xl font-black leading-tight md:text-5xl">Let’s build something useful.</h2>
              <p className="mt-5 max-w-md font-body text-[14px] leading-relaxed text-[#15110D]/70">
                Open to Data Science, ML Engineering, NLP, and analytics-focused internship or entry-level opportunities.
              </p>
              <div className="absolute bottom-6 right-6 rounded-full border-2 border-[#B4442E] px-5 py-3 font-outfit text-[11px] uppercase tracking-[0.2em] text-[#B4442E] rotate-[-8deg]">
                Available
              </div>
            </div>

            <div className="grid gap-0 md:grid-cols-3">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="group border-b border-[rgba(232,221,197,0.12)] p-6 transition-colors hover:bg-[#B4442E]/10 md:border-b-0 md:border-r md:last:border-r-0 lg:p-8"
                >
                  <p className="font-outfit text-[10px] uppercase tracking-[0.22em] text-[#B4442E]">{contact.label}</p>
                  <p className="mt-4 break-words font-body text-[13px] leading-relaxed text-[#E8DDC5]/68 transition-colors group-hover:text-[#E8DDC5]">
                    {contact.value}
                  </p>
                  <p className="mt-6 font-outfit text-[11px] uppercase tracking-[0.18em] text-[#E8DDC5]/42 transition-colors group-hover:text-[#D85A43]">
                    Open →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
