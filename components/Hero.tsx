'use client'

import { motion } from 'framer-motion'
import WaveformAnimation from './WaveformAnimation'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
})

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative h-screen min-h-[600px] flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle radial vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #0A0A0A 100%)',
        }}
      />

      <WaveformAnimation />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 w-full pt-16">
        <motion.p
          {...fadeUp(0.3)}
          className="font-mono text-[15px] tracking-[0.25em] text-accent uppercase mb-10"
        >
          Senior Environmental Analyst
        </motion.p>

        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,8vw,8rem)] font-bold leading-[0.92] tracking-[-0.03em] text-white whitespace-nowrap"
          >
            KOO SOYEON
          </motion.h1>
        </div>

        <motion.div
          {...fadeUp(0.65)}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="font-mono text-[12px] tracking-[0.2em] text-[#525252] uppercase">
            Environmental Science
          </span>
        </motion.div>

        <motion.p
          {...fadeUp(0.75)}
          className="text-xl md:text-2xl text-[#A3A3A3] font-light max-w-lg leading-relaxed"
        >
          8+ years at the intersection of environmental science
          and industrial compliance.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] text-[#525252] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#525252] to-transparent"
        />
      </motion.div>
    </section>
  )
}
