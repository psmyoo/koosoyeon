'use client'

import { motion } from 'framer-motion'

const certifications = [
  { index: '01', name: 'Air and Water Quality',   domain: 'Environmental Monitoring' },
  { index: '02', name: 'Hazardous Materials',     domain: 'Safety & Compliance'      },
  { index: '03', name: 'Industrial Safety',       domain: 'Workplace Safety'         },
  { index: '04', name: 'Air Quality Measurement', domain: 'Analytical Methods'       },
]

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' } as const,
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

function Checkmark() {
  return (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
      <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="cert-heading"
      className="py-16 md:py-28 lg:py-36 border-t border-[#1C1C1C]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div {...inView(0)} className="flex items-center gap-4 mb-16 md:mb-20">
          <span className="font-mono text-[10px] tracking-[0.25em] text-accent uppercase">04</span>
          <div className="w-8 h-px bg-[#2A2A2A]" />
          <span id="cert-heading" className="font-mono text-[10px] tracking-[0.25em] text-[#525252] uppercase">
            Certifications
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1C1C1C]">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.index}
              {...inView(0.08 * i)}
              className="bg-[#0A0A0A] border-t-2 border-accent p-9 md:p-10 flex flex-col justify-between min-h-[210px] hover:bg-[#0E0E0E] transition-colors duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-[#525252]">
                    {cert.index}
                  </span>
                  <div className="w-[22px] h-[22px] rounded-full border border-[#2A2A2A] group-hover:border-accent flex items-center justify-center text-accent transition-colors duration-300">
                    <Checkmark />
                  </div>
                </div>

                <h3 className="text-[19px] font-medium tracking-[-0.01em] leading-[1.3] text-white mb-2">
                  {cert.name}
                </h3>
                <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#525252]">
                  {cert.domain}
                </p>
              </div>

              <div className="mt-7 pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent">
                  Certified
                </span>
                <div className="w-[5px] h-[5px] rounded-full bg-accent" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
