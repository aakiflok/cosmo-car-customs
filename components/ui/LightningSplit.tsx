'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import Image from 'next/image'

export const ELECTRIC_CONFIG = {
  timeClampSec: 0.05,
  svg: {
    strokes: {
      outer: { width: 3,   color: 'rgba(218,41,28,0.35)' },
      mid:   { width: 2.2, color: 'rgba(218,41,28,0.55)' },
      core:  { width: 1.4, opacity: 1, color: 'rgba(255,255,255,0.9)' },
    },
    glowBlur: 1.2,
  },
  speeds:        [-1.32, 0.42, 0.95],
  shimmer:       { speed: 4.2, freq: 8.5, amp: 0.2 },
  segments:      48,
  freqs:         [0.7, 2.7, 3.9],
  easeStiffness: 6,
  clipOffset:    22,
  amps:          [0.35, -0.7, 0.5],
  // Idle oscillation when no interaction
  idle: { amp: 18, speed: 0.4, center: 50 },
} as const

interface LightningSplitProps {
  beforeImg:    string
  afterImg:     string
  beforeLabel?: string
  afterLabel?:  string
}

export default function LightningSplit({
  beforeImg,
  afterImg,
  beforeLabel = 'Before',
  afterLabel  = 'After',
}: LightningSplitProps) {
  const containerRef  = useRef<HTMLDivElement>(null)
  const [position,    setPosition]    = useState(50)
  const [displayPos,  setDisplayPos]  = useState(50)
  const [time,        setTime]        = useState(0)
  const [interacting, setInteracting] = useState(false)
  const [isTouch,     setIsTouch]     = useState(false)

  // Detect touch device on mount
  useEffect(() => {
    setIsTouch(window.matchMedia('(hover: none)').matches)
  }, [])

  // Main RAF loop: advance time, ease displayPos, idle oscillation
  useEffect(() => {
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(ELECTRIC_CONFIG.timeClampSec, (now - last) / 1000)
      last = now
      setTime(t => t + dt)
      setDisplayPos(p => {
        const target = interacting
          ? position
          : ELECTRIC_CONFIG.idle.center +
            ELECTRIC_CONFIG.idle.amp * Math.sin(2 * Math.PI * ELECTRIC_CONFIG.idle.speed * (now / 1000))
        return p + (target - p) * (1 - Math.exp(-ELECTRIC_CONFIG.easeStiffness * dt))
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [position, interacting])

  const getXFromClient = (clientX: number) => {
    if (!containerRef.current) return 50
    const rect = containerRef.current.getBoundingClientRect()
    return ((clientX - rect.left) / rect.width) * 100
  }

  // Mouse handlers
  const handleMouseMove = (e: React.MouseEvent) => {
    setInteracting(true)
    setPosition(getXFromClient(e.clientX) < 50 ? 95 : 15)
  }
  const handleMouseLeave = () => { setInteracting(false) }

  // Touch handlers
  const handleTouchMove = (e: React.TouchEvent) => {
    setInteracting(true)
    const x = getXFromClient(e.touches[0].clientX)
    setPosition(Math.max(5, Math.min(95, x)))
  }
  const handleTouchEnd = () => { setInteracting(false) }

  const clamp = (v: number) => Math.max(0, Math.min(100, v))

  const { polyPointsStr, clipPolygonStr } = useMemo(() => {
    const { segments: S, amps: AMPS, freqs: FREQS, speeds: SPEEDS } = ELECTRIC_CONFIG
    const topX    = clamp(displayPos)
    const bottomX = clamp(displayPos - ELECTRIC_CONFIG.clipOffset)
    const pts: { x: number; y: number }[] = []

    for (let i = 0; i <= S; i++) {
      const t    = i / S
      const base = topX * (1 - t) + bottomX * t
      let off = 0
      for (let k = 0; k < AMPS.length; k++) {
        off += AMPS[k] * Math.sin(2 * Math.PI * (FREQS[k] * t + SPEEDS[k] * time) + k * 1.3)
      }
      off += ELECTRIC_CONFIG.shimmer.amp *
        Math.sin(2 * Math.PI * (ELECTRIC_CONFIG.shimmer.freq * t + ELECTRIC_CONFIG.shimmer.speed * time))
      pts.push({ y: t * 100, x: clamp(base + off) })
    }

    return {
      polyPointsStr:  pts.map(p => `${p.x},${p.y}`).join(' '),
      clipPolygonStr: `polygon(0% 0%, ${pts.map(p => `${p.x}% ${p.y}%`).join(', ')}, 0% 100%)`,
    }
  }, [displayPos, time])

  const clipStyle: CSSProperties & { WebkitClipPath?: string } = {
    WebkitClipPath: clipPolygonStr,
    clipPath:       clipPolygonStr,
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none overflow-hidden bg-[#0a0a0a]"
      style={{ aspectRatio: '4 / 3' }}
      // Use a CSS var override for md+ via inline style — Tailwind can't do dynamic aspect-ratio
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {/* Responsive aspect ratio: 4:3 mobile, 16:9 desktop */}
      <style>{`
        @media (min-width: 768px) {
          .lsplit-container { aspect-ratio: 16 / 9 !important; }
        }
      `}</style>

      {/* After image — base layer */}
      <div className="absolute inset-0">
        <Image
          src={afterImg}
          alt={afterLabel}
          fill unoptimized
          className="object-cover"
          sizes="(max-width:768px) 100vw, 75vw"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Before image — wavy-clipped layer */}
      <div className="absolute inset-0" style={clipStyle}>
        <Image
          src={beforeImg}
          alt={beforeLabel}
          fill unoptimized
          className="object-cover"
          sizes="(max-width:768px) 100vw, 75vw"
          priority
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
          <filter id="lsplit-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={ELECTRIC_CONFIG.svg.glowBlur} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <polyline points={polyPointsStr} fill="none"
          stroke={ELECTRIC_CONFIG.svg.strokes.outer.color}
          strokeWidth={ELECTRIC_CONFIG.svg.strokes.outer.width}
          vectorEffect="non-scaling-stroke"
          filter="url(#lsplit-glow)" />
        <polyline points={polyPointsStr} fill="none"
          stroke={ELECTRIC_CONFIG.svg.strokes.mid.color}
          strokeWidth={ELECTRIC_CONFIG.svg.strokes.mid.width}
          vectorEffect="non-scaling-stroke"
          filter="url(#lsplit-glow)" />
        <polyline points={polyPointsStr} fill="none"
          stroke={ELECTRIC_CONFIG.svg.strokes.core.color}
          strokeOpacity={ELECTRIC_CONFIG.svg.strokes.core.opacity}
          strokeWidth={ELECTRIC_CONFIG.svg.strokes.core.width}
          vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Labels */}
      <div className="absolute left-4 top-4 z-40 label-uc text-[9px] bg-black/60 backdrop-blur-sm px-3 py-1 border border-white/10 text-white">
        {beforeLabel}
      </div>
      <div className="absolute right-4 top-4 z-40 label-uc text-[9px] bg-black/60 backdrop-blur-sm px-3 py-1 border border-white/10 text-white">
        {afterLabel}
      </div>

      {/* Hint — context-aware */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 label-uc text-[8px] text-white/40 pointer-events-none whitespace-nowrap">
        {isTouch ? 'Drag to reveal' : 'Hover to reveal'}
      </div>
    </div>
  )
}
