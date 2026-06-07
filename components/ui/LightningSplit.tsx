'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Brand-tuned config
export const ELECTRIC_CONFIG = {
  timeClampSec: 0.05,
  svg: {
    strokes: {
      outer: { width: 3,   color: 'rgba(218,41,28,0.35)' }, // rossa halo
      mid:   { width: 2.2, color: 'rgba(218,41,28,0.55)' }, // rossa glow
      core:  { width: 1.4, opacity: 1,    color: 'rgba(255,255,255,0.9)' }, // white core
    },
    glowBlur: 1.2,
  },
  speeds:   [-1.32, 0.42, 0.95],
  shimmer:  { speed: 4.2, freq: 8.5, amp: 0.2 },
  segments: 48,
  freqs:    [0.7, 2.7, 3.9],
  easeStiffness: 6,
  clipOffset: 22,
  amps: [0.35, -0.7, 0.5],
} as const

interface LightningSplitProps {
  beforeImg:   string
  afterImg:    string
  beforeLabel?: string
  afterLabel?:  string
}

export default function LightningSplit({
  beforeImg,
  afterImg,
  beforeLabel = 'Before',
  afterLabel  = 'After',
}: LightningSplitProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position,   setPosition]   = useState(55)
  const [displayPos, setDisplayPos] = useState(55)
  const [time,       setTime]       = useState(0)

  useEffect(() => {
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(ELECTRIC_CONFIG.timeClampSec, (now - last) / 1000)
      last = now
      setTime(t => t + dt)
      setDisplayPos(p => {
        const stiffness = ELECTRIC_CONFIG.easeStiffness
        return p + (position - p) * (1 - Math.exp(-stiffness * dt))
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [position])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    setPosition(x < 50 ? 100 : 15)
  }
  const handleMouseLeave = () => setPosition(55)

  const clamp = (v: number) => Math.max(0, Math.min(100, v))

  const { polyPointsStr, clipPolygonStr } = useMemo(() => {
    const { segments: SEGMENTS, amps: AMPS, freqs: FREQS, speeds: SPEEDS } = ELECTRIC_CONFIG
    const topX    = clamp(displayPos)
    const bottomX = clamp(displayPos - ELECTRIC_CONFIG.clipOffset)
    const pts: { x: number; y: number }[] = []

    for (let i = 0; i <= SEGMENTS; i++) {
      const tNorm = i / SEGMENTS
      const y    = tNorm * 100
      const base = topX * (1 - tNorm) + bottomX * tNorm
      let off = 0
      for (let k = 0; k < AMPS.length; k++) {
        off += AMPS[k] * Math.sin(2 * Math.PI * (FREQS[k] * tNorm + SPEEDS[k] * time) + k * 1.3)
      }
      off += ELECTRIC_CONFIG.shimmer.amp *
        Math.sin(2 * Math.PI * (ELECTRIC_CONFIG.shimmer.freq * tNorm + ELECTRIC_CONFIG.shimmer.speed * time))
      pts.push({ y, x: clamp(base + off) })
    }

    const polyPointsStr  = pts.map(p => `${p.x},${p.y}`).join(' ')
    const edgePoints     = pts.map(p => `${p.x}% ${p.y}%`).join(', ')
    const clipPolygonStr = `polygon(0% 0%, ${edgePoints}, 0% 100%)`
    return { polyPointsStr, clipPolygonStr }
  }, [displayPos, time])

  const leftClipStyle: CSSProperties & { WebkitClipPath?: string } = {
    WebkitClipPath: clipPolygonStr,
    clipPath: clipPolygonStr,
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none bg-canvas"
      style={{ aspectRatio: '16/9' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* After image — base layer */}
      <div className="absolute inset-0">
        <Image
          src={afterImg}
          alt={afterLabel}
          fill unoptimized
          className="object-cover"
          sizes="(max-width:1024px) 100vw, 75vw"
        />
        {/* Dark veil so text is readable */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Before image — wavy-clipped layer */}
      <div className="absolute inset-0" style={leftClipStyle}>
        <Image
          src={beforeImg}
          alt={beforeLabel}
          fill unoptimized
          className="object-cover"
          sizes="(max-width:1024px) 100vw, 75vw"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* SVG electric arc */}
      <svg
        className="pointer-events-none absolute inset-0 z-30"
        width="100%" height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="electric-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={ELECTRIC_CONFIG.svg.glowBlur} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Outer rossa halo */}
        <polyline points={polyPointsStr} fill="none"
          stroke={ELECTRIC_CONFIG.svg.strokes.outer.color}
          strokeWidth={ELECTRIC_CONFIG.svg.strokes.outer.width}
          vectorEffect="non-scaling-stroke"
          filter="url(#electric-glow)" />
        {/* Mid rossa glow */}
        <polyline points={polyPointsStr} fill="none"
          stroke={ELECTRIC_CONFIG.svg.strokes.mid.color}
          strokeWidth={ELECTRIC_CONFIG.svg.strokes.mid.width}
          vectorEffect="non-scaling-stroke"
          filter="url(#electric-glow)" />
        {/* White hot core */}
        <polyline points={polyPointsStr} fill="none"
          stroke={ELECTRIC_CONFIG.svg.strokes.core.color}
          strokeOpacity={ELECTRIC_CONFIG.svg.strokes.core.opacity}
          strokeWidth={ELECTRIC_CONFIG.svg.strokes.core.width}
          vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Labels */}
      <div className="absolute left-5 top-5 z-40 label-uc text-[9px] bg-canvas/70 backdrop-blur-sm px-3 py-1 border border-hairline">
        {beforeLabel}
      </div>
      <div className="absolute right-5 top-5 z-40 label-uc text-[9px] bg-canvas/70 backdrop-blur-sm px-3 py-1 border border-hairline">
        {afterLabel}
      </div>

      {/* Hover hint — fades out after first interaction */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 label-uc text-[8px] text-white/40 pointer-events-none">
        Hover to reveal
      </div>
    </motion.div>
  )
}
