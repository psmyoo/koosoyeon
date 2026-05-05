import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Expertise from '@/components/Expertise'
import TechnicalSkills from '@/components/TechnicalSkills'
import Certifications from '@/components/Certifications'

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <TechnicalSkills />
        <Certifications />
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
