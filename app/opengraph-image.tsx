import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const alt = 'Koo Soyeon — Senior Environmental Analyst'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const W = 1200
const H = 630
const CY = Math.round(H * 0.52)

function wavePath(amp: number, freq: number, phase: number): string {
  const pts: string[] = []
  for (let x = 0; x <= W; x += 6) {
    const y = CY + amp * Math.sin(x * freq + phase)
    pts.push(`${x === 0 ? 'M' : 'L'}${x},${y.toFixed(1)}`)
  }
  return pts.join(' ')
}

interface Particle { x: number; y: number; r: number; op: number }

function makeParticles(): Particle[] {
  const ps: Particle[] = []
  let s = 42
  for (let i = 0; i < 55; i++) {
    s = (Math.imul(s, 1664525) + 1013904223) | 0
    const x = Math.abs(s) % W
    s = (Math.imul(s, 1664525) + 1013904223) | 0
    const y = Math.abs(s) % H
    s = (Math.imul(s, 1664525) + 1013904223) | 0
    const heavy = Math.abs(s) % 100 > 78
    ps.push({ x, y, r: heavy ? 2.6 : 1.2, op: heavy ? 0.95 : 0.80 })
  }
  return ps
}

async function loadFont(filename: string): Promise<ArrayBuffer> {
  const buf = await readFile(join(process.cwd(), 'public/fonts', filename))
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength)
}

const ACCENT = '45,212,191'
const WAVES = [
  { amp: 28, freq: 0.002,  phase: 0,          op: 0.18, lw: 1   },
  { amp: 16, freq: 0.004,  phase: Math.PI,     op: 0.14, lw: 0.6 },
  { amp: 40, freq: 0.0013, phase: Math.PI / 2, op: 0.11, lw: 1.2 },
]

export default async function OGImage() {
  const [interBold, interRegular, spaceMono] = await Promise.all([
    loadFont('inter-bold.ttf'),
    loadFont('inter-regular.ttf'),
    loadFont('space-mono.ttf'),
  ])

  const particles = makeParticles()

  const MAX_DIST = 155
  interface Bond { x1: number; y1: number; x2: number; y2: number; op: number }
  const bonds: Bond[] = []
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const d = Math.sqrt(dx * dx + dy * dy)
      if (d < MAX_DIST) {
        bonds.push({
          x1: particles[i].x, y1: particles[i].y,
          x2: particles[j].x, y2: particles[j].y,
          op: (1 - d / MAX_DIST) * 0.55,
        })
      }
    }
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: W,
          height: H,
          background: '#0A0A0A',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Waveform + particles */}
        <svg
          style={{ position: 'absolute', top: 0, left: 0, width: W, height: H }}
          viewBox={`0 0 ${W} ${H}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {WAVES.map((w, i) => (
            <path
              key={i}
              d={wavePath(w.amp, w.freq, w.phase)}
              stroke={`rgba(${ACCENT},${w.op})`}
              strokeWidth={w.lw}
              fill="none"
              strokeLinejoin="round"
            />
          ))}
          {bonds.map((b, i) => (
            <line
              key={`b${i}`}
              x1={b.x1} y1={b.y1} x2={b.x2} y2={b.y2}
              stroke={`rgba(${ACCENT},${b.op.toFixed(3)})`}
              strokeWidth={0.5}
            />
          ))}
          {particles.map((p, i) => (
            <circle
              key={`p${i}`}
              cx={p.x} cy={p.y} r={p.r}
              fill={`rgba(${ACCENT},${p.op})`}
            />
          ))}
        </svg>

        {/* Radial vignette */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #0A0A0A 100%)',
          }}
        />

        {/* Text content */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '96px 80px 0',
          }}
        >
          <p
            style={{
              fontFamily: 'Space Mono',
              fontWeight: 400,
              fontSize: 15,
              letterSpacing: '0.25em',
              color: '#2DD4BF',
              textTransform: 'uppercase',
              margin: 0,
              marginBottom: 36,
            }}
          >
            Senior Environmental Analyst
          </p>

          <h1
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: 108,
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              margin: 0,
              marginBottom: 36,
              whiteSpace: 'nowrap',
            }}
          >
            KOO SOYEON
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 28,
            }}
          >
            <div style={{ width: 48, height: 1, background: '#2DD4BF' }} />
            <span
              style={{
                fontFamily: 'Space Mono',
                fontWeight: 400,
                fontSize: 12,
                letterSpacing: '0.2em',
                color: '#525252',
                textTransform: 'uppercase',
              }}
            >
              Environmental Science
            </span>
          </div>

          <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 24,
              color: '#A3A3A3',
              margin: 0,
              maxWidth: 480,
              lineHeight: 1.5,
            }}
          >
            8+ years at the intersection of environmental science and industrial compliance.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Inter', data: interBold, style: 'normal', weight: 700 },
        { name: 'Inter', data: interRegular, style: 'normal', weight: 400 },
        { name: 'Space Mono', data: spaceMono, style: 'normal', weight: 400 },
      ],
    }
  )
}
