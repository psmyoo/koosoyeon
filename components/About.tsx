'use client'

import { motion } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' } as const,
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 md:py-28 lg:py-36 border-t border-[#1C1C1C]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div {...inView(0)} className="flex items-center gap-4 mb-16 md:mb-20">
          <span className="font-mono text-[10px] tracking-[0.25em] text-accent uppercase">
            01
          </span>
          <div className="w-8 h-px bg-[#2A2A2A]" />
          <span
            id="about-heading"
            className="font-mono text-[10px] tracking-[0.25em] text-[#525252] uppercase"
          >
            About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24 items-start">
          <div>
            <motion.p
              {...inView(0.1)}
              className="text-[clamp(1.5rem,3.5vw,2.4rem)] font-light leading-[1.3] tracking-[-0.01em] text-white mb-10 text-balance"
            >
              Koo Soyeon is a Senior Environmental Analyst with over eight years
              of experience in air quality monitoring and pollutant analysis.
            </motion.p>
            <motion.p
              {...inView(0.2)}
              className="text-base md:text-[17px] text-[#A3A3A3] leading-[1.75] max-w-2xl"
            >
              Specializing in industrial emissions and ambient air assessment, she applies
              rigorous analytical methodologies to deliver data that withstands regulatory
              scrutiny. Her work spans the full measurement lifecycle — from instrument
              calibration and sample collection through laboratory analysis, quality
              assurance, and compliance reporting.
            </motion.p>
          </div>

          <motion.div
            {...inView(0.25)}
            className="border border-[#1C1C1C] p-8 bg-[#0E0E0E]"
          >
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#525252] uppercase mb-8">
              At a glance
            </p>
            <dl className="space-y-6">
              {[
                { label: 'Experience', value: '8+ years' },
                { label: 'Specialization', value: 'Air quality & industrial emissions' },
                { label: 'Focus', value: 'Measurement precision' },
                { label: 'Domain', value: 'Environmental compliance' },
              ].map((item) => (
                <div key={item.label} className="border-b border-[#1C1C1C] pb-6 last:border-0 last:pb-0">
                  <dt className="font-mono text-[10px] tracking-[0.15em] text-[#525252] uppercase mb-1">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-white font-light">{item.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
