'use client'

import { motion } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' } as const,
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

export default function AboutContent() {
  return (
    <div className="space-y-16">

      {/* Professional */}
      <section aria-labelledby="professional-heading">
        <motion.p
          {...inView(0)}
          id="professional-heading"
          className="font-mono text-[10px] tracking-[0.25em] text-[#525252] uppercase mb-8"
        >
          Professional
        </motion.p>

        <motion.p
          {...inView(0.08)}
          className="text-[clamp(1.3rem,2.5vw,1.65rem)] font-light leading-[1.45] tracking-[-0.01em] text-white mb-8 text-balance"
        >
          Over eight years spent at the boundary of science and
          industrial accountability.
        </motion.p>

        <div className="space-y-5">
          <motion.p {...inView(0.12)} className="text-[15px] text-[#A3A3A3] leading-[1.8] font-light">
            Koo Soyeon has built her career around the precise measurement
            of what cannot be seen. Working across industrial sites and ambient
            monitoring networks, she applies validated analytical methods to
            characterize pollutant concentrations, trace emission sources, and
            verify compliance with environmental standards.
          </motion.p>
          <motion.p {...inView(0.16)} className="text-[15px] text-[#A3A3A3] leading-[1.8] font-light">
            Her expertise spans the detection of aldehydes, phenols, hydrogen
            chloride, volatile organic compounds, and trace metals — pollutant
            classes that demand both methodological rigor and careful
            interpretation. She operates instrumentation including ICP, GC,
            AA, and GC-MS systems, and maintains a consistent focus on data
            integrity throughout the analytical process.
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <motion.div {...inView(0)} className="w-full h-px bg-[#1C1C1C]" />

      {/* Outside of work */}
      <section aria-labelledby="personal-heading">
        <motion.p
          {...inView(0)}
          id="personal-heading"
          className="font-mono text-[10px] tracking-[0.25em] text-[#525252] uppercase mb-8"
        >
          Beyond the lab
        </motion.p>

        <div className="space-y-5">
          <motion.p {...inView(0.08)} className="text-[15px] text-[#A3A3A3] leading-[1.8] font-light">
            Outside the laboratory, Koo Soyeon is an avid follower of baseball
            and a passionate traveler. She attends games whenever her schedule
            permits and finds great joy in the sport's energy and competitive spirit.
          </motion.p>
          <motion.p {...inView(0.12)} className="text-[15px] text-[#A3A3A3] leading-[1.8] font-light">
            She is equally devoted to seeing the world, embracing every opportunity
            to explore new destinations, cultures, and landscapes.
          </motion.p>
        </div>
      </section>

    </div>
  )
}
