'use client'

import { motion } from 'framer-motion'

const areas = [
  {
    index: '01',
    title: 'Air Quality Monitoring',
    description: 'Industrial stack emissions and ambient air assessment across regulated and unregulated pollutant classes.',
  },
  {
    index: '02',
    title: 'Pollutant Analysis',
    description: 'Quantitative detection of aldehydes, phenols, hydrogen chloride, and volatile organic compounds.',
  },
  {
    index: '03',
    title: 'Detection Methods',
    description: 'Trace-level identification of metals and volatile compounds using validated laboratory instrumentation.',
  },
  {
    index: '04',
    title: 'Regulatory Compliance',
    description: 'Data integrity assurance, QA/QC protocols, and compliance reporting to environmental regulatory standards.',
  },
]

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' } as const,
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export default function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="py-16 md:py-28 lg:py-36 border-t border-[#1C1C1C]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div {...inView(0)} className="flex items-center gap-4 mb-16 md:mb-20">
          <span className="font-mono text-[13px] tracking-[0.25em] text-accent uppercase">
            02
          </span>
          <div className="w-8 h-px bg-[#2A2A2A]" />
          <span
            id="expertise-heading"
            className="font-mono text-[13px] tracking-[0.25em] text-[#525252] uppercase"
          >
            Areas of Expertise
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1C1C1C]">
          {areas.map((area, i) => (
            <motion.article
              key={area.index}
              {...inView(0.08 * i)}
              className="bg-[#0A0A0A] p-8 md:p-10 group hover:bg-[#0E0E0E] transition-colors duration-300"
            >
              <div className="flex items-start gap-6 mb-6">
                <span className="font-mono text-[13px] tracking-[0.2em] text-accent uppercase shrink-0 mt-1">
                  /{area.index}
                </span>
                <h3 className="text-[18px] font-medium tracking-[-0.01em] text-white">
                  {area.title}
                </h3>
              </div>
              <p className="text-[16px] text-[#A3A3A3] leading-[1.7] font-light pl-10">
                {area.description}
              </p>
              <div className="mt-6 pl-10">
                <div className="w-0 group-hover:w-8 h-px bg-accent transition-all duration-500" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
