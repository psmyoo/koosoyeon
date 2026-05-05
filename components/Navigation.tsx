'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`)

  const links = [
    { label: 'Expertise', href: sectionHref('expertise') },
    { label: 'Methods', href: sectionHref('methods') },
    { label: 'About', href: '/about' },
    // TODO: Replace '#' with the actual resume URL or file path when available
    { label: 'Resume', href: '#' },
  ]

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1C1C1C]'
            : ''
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-mono text-sm font-bold tracking-[0.25em] text-accent hover:text-white transition-colors relative z-[60]"
            aria-label="Home"
          >
            KS
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-8" role="list">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`font-mono text-[11px] tracking-[0.18em] uppercase transition-colors ${
                      pathname === link.href
                        ? 'text-white'
                        : 'text-[#A3A3A3] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-[60] flex flex-col justify-center items-center w-10 h-10 gap-[6px]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="block w-5 h-px bg-white origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="block w-5 h-px bg-white origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-center px-8 md:hidden"
          >
            <nav>
              <ul className="space-y-8" role="list">
                {links.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.055, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`font-mono text-[1.6rem] tracking-[0.1em] uppercase transition-colors ${
                        pathname === link.href
                          ? 'text-accent'
                          : 'text-white hover:text-accent'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <p className="absolute bottom-10 left-8 font-mono text-[10px] tracking-[0.2em] text-[#2A2A2A] uppercase">
              Koo Soyeon — Senior Environmental Analyst
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
