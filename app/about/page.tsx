import type { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'About — Koo Soyeon',
  description:
    'Senior Environmental Analyst with over eight years of experience in air quality monitoring, industrial emissions, and pollutant analysis.',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main" className="min-h-screen pt-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          {/* Page label */}
          <div className="flex items-center gap-4 py-10 md:py-16 border-b border-[#1C1C1C]">
            <span className="font-mono text-[10px] tracking-[0.25em] text-accent uppercase">
              About
            </span>
            <div className="w-8 h-px bg-[#2A2A2A]" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#525252] uppercase">
              Koo Soyeon
            </span>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-0 lg:gap-20 xl:gap-28 py-10 md:py-16">

            {/* Photo column */}
            <div className="relative mb-12 lg:mb-0">
              <div className="lg:sticky lg:top-24">
                <div className="relative w-full aspect-[4/3] sm:aspect-[3/4] overflow-hidden bg-[#111111]">
                  <Image
                    src="/profile.avif"
                    alt="Koo Soyeon, Senior Environmental Analyst"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-top grayscale"
                    priority
                  />
                  {/* Subtle bottom fade */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent"
                  />
                </div>

                {/* Name block below photo */}
                <div className="mt-6 border-t border-[#1C1C1C] pt-6">
                  <p className="text-white font-semibold tracking-[-0.01em] mb-1">
                    Koo Soyeon
                  </p>
                  <p className="font-mono text-[11px] tracking-[0.15em] text-[#525252] uppercase">
                    Senior Environmental Analyst
                  </p>
                </div>
              </div>
            </div>

            {/* Content column */}
            <AboutContent />
          </div>

        </div>
      </main>

      <footer className="border-t border-[#1C1C1C] py-8">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#525252] uppercase">
            Koo Soyeon
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#525252] uppercase">
            Senior Environmental Analyst
          </span>
        </div>
      </footer>
    </>
  )
}
