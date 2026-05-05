'use client'

import { motion } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' } as const,
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

const LINKEDIN_URL = 'https://www.linkedin.com/in/soyeonkoo97'

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 md:py-28 lg:py-36 border-t border-[#1C1C1C]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div {...inView(0)} className="flex items-center gap-4 mb-16 md:mb-20">
          <span className="font-mono text-[10px] tracking-[0.25em] text-accent uppercase">
            05
          </span>
          <div className="w-8 h-px bg-[#2A2A2A]" />
          <span
            id="contact-heading"
            className="font-mono text-[10px] tracking-[0.25em] text-[#525252] uppercase"
          >
            Contact
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">
          <div>
            <motion.p
              {...inView(0.1)}
              className="text-[clamp(1.75rem,4vw,3rem)] font-light leading-[1.2] tracking-[-0.02em] text-white mb-4 text-balance"
            >
              Available for professional consultation and technical collaboration.
            </motion.p>
            <motion.p
              {...inView(0.2)}
              className="text-sm text-[#525252] font-light leading-relaxed max-w-sm"
            >
              Reach out via LinkedIn to discuss projects or just to say hi!
            </motion.p>
          </div>

          <motion.div {...inView(0.2)} className="flex flex-col gap-4 lg:items-end">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Koo Soyeon's LinkedIn profile (opens in new tab)"
              className="
                group inline-flex items-center justify-between gap-4
                w-full sm:w-auto
                border border-[#2A2A2A] hover:border-accent
                px-8 py-5 transition-all duration-300
                hover:bg-accent/5
              "
            >
              <span className="font-mono text-[11px] tracking-[0.2em] text-white uppercase">
                View LinkedIn Profile
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="text-[#525252] group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              >
                <path
                  d="M1 13L13 1M13 1H4M13 1V10"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <p className="font-mono text-[10px] tracking-[0.15em] text-[#2A2A2A]">
              linkedin.com/in/soyeonkoo97
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
