import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { readFile, writeFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const W = 1200
const H = 630
const CY = Math.round(H * 0.52)
const ACCENT = '45,212,191'

function wavePath(amp, freq, phase) {
  const pts = []
  for (let x = 0; x <= W; x += 6) {
    const y = CY + amp * Math.sin(x * freq + phase)
    pts.push(`${x === 0 ? 'M' : 'L'}${x},${y.toFixed(1)}`)
  }
  return pts.join(' ')
}

function makeParticles() {
  const ps = []
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

const WAVES = [
  { amp: 28, freq: 0.002,  phase: 0,            op: 0.18, lw: 1   },
  { amp: 16, freq: 0.004,  phase: Math.PI,       op: 0.14, lw: 0.6 },
  { amp: 40, freq: 0.0013, phase: Math.PI / 2,   op: 0.11, lw: 1.2 },
]

const particles = makeParticles()
const MAX_DIST = 155
const bonds = []
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

const wavePaths = WAVES.map(w => wavePath(w.amp, w.freq, w.phase))

const [interBold, interRegular, spaceMono] = await Promise.all([
  readFile(join(root, 'public/fonts/inter-bold.ttf')),
  readFile(join(root, 'public/fonts/inter-regular.ttf')),
  readFile(join(root, 'public/fonts/space-mono.ttf')),
])

const svg = await satori(
  {
    type: 'div',
    props: {
      style: {
        width: W,
        height: H,
        background: '#0A0A0A',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
      },
      children: [
        {
          type: 'svg',
          props: {
            style: { position: 'absolute', top: 0, left: 0 },
            width: W,
            height: H,
            viewBox: `0 0 ${W} ${H}`,
            children: [
              ...WAVES.map((w, i) => ({
                type: 'path',
                props: {
                  d: wavePaths[i],
                  stroke: `rgba(${ACCENT},${w.op})`,
                  'stroke-width': w.lw,
                  fill: 'none',
                },
              })),
              ...bonds.map((b, i) => ({
                type: 'line',
                props: {
                  key: `b${i}`,
                  x1: b.x1, y1: b.y1, x2: b.x2, y2: b.y2,
                  stroke: `rgba(${ACCENT},${b.op.toFixed(3)})`,
                  'stroke-width': 0.5,
                },
              })),
              ...particles.map((p, i) => ({
                type: 'circle',
                props: {
                  key: `p${i}`,
                  cx: p.x, cy: p.y, r: p.r,
                  fill: `rgba(${ACCENT},${p.op})`,
                },
              })),
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #0A0A0A 100%)',
            },
          },
        },
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 80px',
              paddingTop: 96,
            },
            children: [
              {
                type: 'p',
                props: {
                  style: {
                    fontFamily: 'Space Mono',
                    fontWeight: 400,
                    fontSize: 15,
                    letterSpacing: '0.25em',
                    color: '#2DD4BF',
                    textTransform: 'uppercase',
                    margin: 0,
                    marginBottom: 36,
                  },
                  children: 'Senior Environmental Analyst',
                },
              },
              {
                type: 'h1',
                props: {
                  style: {
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: 108,
                    lineHeight: 0.92,
                    letterSpacing: '-0.03em',
                    color: '#FFFFFF',
                    margin: 0,
                    marginBottom: 36,
                    whiteSpace: 'nowrap',
                  },
                  children: 'KOO SOYEON',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    marginBottom: 28,
                  },
                  children: [
                    {
                      type: 'div',
                      props: { style: { width: 48, height: 1, background: '#2DD4BF' } },
                    },
                    {
                      type: 'span',
                      props: {
                        style: {
                          fontFamily: 'Space Mono',
                          fontWeight: 400,
                          fontSize: 12,
                          letterSpacing: '0.2em',
                          color: '#525252',
                          textTransform: 'uppercase',
                        },
                        children: 'Environmental Science',
                      },
                    },
                  ],
                },
              },
              {
                type: 'p',
                props: {
                  style: {
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: 24,
                    color: '#A3A3A3',
                    margin: 0,
                    maxWidth: 480,
                    lineHeight: 1.5,
                  },
                  children: '8+ years at the intersection of environmental science and industrial compliance.',
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    width: W,
    height: H,
    fonts: [
      { name: 'Inter', data: interBold, weight: 700, style: 'normal' },
      { name: 'Inter', data: interRegular, weight: 400, style: 'normal' },
      { name: 'Space Mono', data: spaceMono, weight: 400, style: 'normal' },
    ],
  }
)

const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: W } })
const png = resvg.render().asPng()
const outPath = join(root, 'site/og.png')
await writeFile(outPath, png)
console.log(`OG image written to ${outPath}`)
