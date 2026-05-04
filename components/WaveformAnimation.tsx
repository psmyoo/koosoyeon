'use client'

import { useEffect, useRef } from 'react'

const ACCENT = '45, 212, 191'

const WAVES = [
  { amp: 28, freq: 0.0020, speed: 0.004, phase: 0,           opacity: 0.18, lw: 1   },
  { amp: 16, freq: 0.0040, speed: 0.003, phase: Math.PI,     opacity: 0.14, lw: 0.6 },
  { amp: 40, freq: 0.0013, speed: 0.002, phase: Math.PI / 2, opacity: 0.11, lw: 1.2 },
]

type Particle = { x: number; y: number; vx: number; vy: number; r: number; opacity: number }

export default function WaveformAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0
    let animId: number
    let particles: Particle[] = []

    const initParticles = () => {
      const count = Math.max(40, Math.min(Math.floor((W * H) / 16000), 85))
      particles = Array.from({ length: count }, () => {
        const heavy = Math.random() > 0.78
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.32,
          vy: (Math.random() - 0.5) * 0.32,
          r: heavy ? 2.6 : 1.2,
          opacity: heavy ? 0.95 : 0.80,
        }
      })
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.scale(dpr, dpr)
      initParticles()
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const MAX_DIST = 155

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const cy = H * 0.52

      // Subtle atmospheric waveforms underneath
      WAVES.forEach(w => {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(${ACCENT}, ${w.opacity})`
        ctx.lineWidth = w.lw
        ctx.lineJoin = 'round'
        for (let x = 0; x <= W; x += 4) {
          const y = cy + w.amp * Math.sin(x * w.freq + w.phase)
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
        w.phase += w.speed
      })

      // Bonds between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < MAX_DIST) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${ACCENT}, ${(1 - d / MAX_DIST) * 0.55})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Particles
      particles.forEach(p => {
        // Soft glow on heavy nodes
        if (p.r > 2) {
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5)
          g.addColorStop(0, `rgba(${ACCENT}, 0.40)`)
          g.addColorStop(1, `rgba(${ACCENT}, 0)`)
          ctx.fillStyle = g
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.beginPath()
        ctx.fillStyle = `rgba(${ACCENT}, ${p.opacity})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        // Wrap edges
        if (p.x < -12) p.x = W + 12
        if (p.x > W + 12) p.x = -12
        if (p.y < -12) p.y = H + 12
        if (p.y > H + 12) p.y = -12
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
