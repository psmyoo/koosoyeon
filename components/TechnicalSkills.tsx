'use client'

import { motion } from 'framer-motion'

const methods = [
  {
    acronym: 'ICP',
    full: 'Inductively Coupled Plasma',
    description: 'Multi-element trace metal analysis in aqueous and digested environmental matrices.',
  },
  {
    acronym: 'GC',
    full: 'Gas Chromatography',
    description: 'Separation and quantification of volatile and semi-volatile organic compounds.',
  },
  {
    acronym: 'AA',
    full: 'Atomic Absorption Spectroscopy',
    description: 'Single-element determination of metals at trace and ultra-trace concentrations.',
  },
  {
    acronym: 'GC-MS',
    full: 'Gas Chromatography–Mass Spectrometry',
    description: 'Definitive identification and quantification of complex organic mixtures and unknowns.',
  },
]

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' } as const,
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export default function TechnicalSkills() {
  return (
    <section
      id="methods"
      aria-labelledby="methods-heading"
      className="py-16 md:py-28 lg:py-36 border-t border-[#1C1C1C]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div {...inView(0)} className="flex items-center gap-4 mb-16 md:mb-20">
          <span className="font-mono text-[10px] tracking-[0.25em] text-accent uppercase">
            03
          </span>
          <div className="w-8 h-px bg-[#2A2A2A]" />
          <span
            id="methods-heading"
            className="font-mono text-[10px] tracking-[0.25em] text-[#525252] uppercase"
          >
            Laboratory Methods
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1C1C1C]">
          {methods.map((method, i) => (
            <motion.article
              key={method.acronym}
              {...inView(0.08 * i)}
              className="bg-[#0A0A0A] p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[240px] hover:bg-[#0E0E0E] transition-colors duration-300"
            >
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <span
                    className="font-mono text-[clamp(2.8rem,6vw,4.5rem)] font-bold tracking-[-0.03em] text-accent leading-none"
                    aria-hidden="true"
                  >
                    {method.acronym}
                  </span>
                </div>
                <p className="text-[13px] font-light text-[#A3A3A3] tracking-[0.01em] mb-4">
                  <span className="sr-only">{method.acronym} — </span>
                  {method.full}
                </p>
              </div>
              <div className="border-t border-[#1C1C1C] pt-5 mt-2">
                <p className="text-sm text-[#525252] leading-[1.65] font-light">
                  {method.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
