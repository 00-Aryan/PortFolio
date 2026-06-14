import Link from 'next/link'

const socialLinks = [
  {
    label: 'GitHub',
    value: '00-Aryan',
    href: 'https://github.com/00-Aryan',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    value: 'Aryan Kumar',
    href: 'https://www.linkedin.com/in/aryan-kumar-1969b819b/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    value: '22f2000697@ds.study.iitm.ac.in',
    href: 'mailto:22f2000697@ds.study.iitm.ac.in',
    icon: 'mail',
  },
]

function Icon({ type }: { type: string }) {
  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.38-3.88-1.38-.53-1.33-1.3-1.68-1.3-1.68-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18A11.1 11.1 0 0 1 12 6.15c.98 0 1.96.13 2.88.38 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.3 8.1h4.4V23H.3V8.1ZM8.1 8.1h4.2v2.04h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.3 2.94 5.3 6.76V23h-4.4v-7.45c0-1.78-.03-4.07-2.48-4.07-2.49 0-2.87 1.94-2.87 3.94V23H8.1V8.1Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function SocialStrip() {
  return (
    <div className="flex flex-wrap gap-3 lg:hidden">
      {socialLinks.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target={item.href.startsWith('mailto:') ? undefined : '_blank'}
          rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          className="inline-flex items-center gap-2 border border-[#B4442E]/45 bg-[#0D0D0D]/70 px-4 py-2 font-outfit text-[11px] uppercase tracking-[0.16em] text-[#E8DDC5] transition-colors hover:border-[#D85A43] hover:text-[#D85A43]"
        >
          <Icon type={item.icon} />
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default function SocialRail() {
  return (
    <aside className="absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B4442E] bg-[#0D0D0D] font-display text-lg font-black text-[#D85A43] shadow-[0_0_32px_rgba(180,68,46,0.24)]">
        AK
      </div>

      <div className="flex flex-col gap-2 border border-[rgba(232,221,197,0.16)] bg-black/35 p-2 shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm">
        {socialLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target={item.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            aria-label={item.label}
            className="group relative flex h-10 w-10 items-center justify-center border border-[rgba(232,221,197,0.12)] text-[#E8DDC5] transition-colors hover:border-[#B4442E] hover:text-[#D85A43]"
          >
            <Icon type={item.icon} />
            <span className="pointer-events-none absolute left-12 whitespace-nowrap border border-[rgba(232,221,197,0.14)] bg-[#111111] px-3 py-1.5 font-body text-[11px] text-[#E8DDC5] opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
              {item.value}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  )
}
