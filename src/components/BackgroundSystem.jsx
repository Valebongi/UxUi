import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

function NoiseOverlay() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width = window.innerWidth
    const H = canvas.height = window.innerHeight
    const imageData = ctx.createImageData(W, H)
    const data = imageData.data
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255
      data[i] = data[i + 1] = data[i + 2] = v
      data[i + 3] = 12
    }
    ctx.putImageData(imageData, 0, 0)
  }, [])
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 1, opacity: 0.04, mixBlendMode: 'overlay'
      }}
    />
  )
}

// Simplified: only scale+opacity, no x/y movement (much cheaper on GPU)
function GlowBlob({ color, x, y, size, opacity, duration, delay = 0 }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        filter: 'blur(110px)',
        opacity,
        mixBlendMode: 'screen',
        pointerEvents: 'none',
        zIndex: 0,
        willChange: 'transform, opacity',
      }}
      animate={{
        scale: [1, 1.06, 0.97, 1],
        opacity: [opacity, opacity * 1.2, opacity * 0.85, opacity],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

// Static SVG curves — no expensive path morphing
function FloatingCurves() {
  return (
    <svg
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 1, opacity: 0.06
      }}
      preserveAspectRatio="none"
    >
      <motion.g
        animate={{ translateY: [0, -8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
      >
        <path
          d="M -100 400 Q 400 100 900 500 Q 1400 900 1920 300"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M -100 700 Q 500 300 1000 700 Q 1500 1100 1920 600"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="0.6"
          fill="none"
        />
      </motion.g>
      <motion.g
        animate={{ translateY: [0, 10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        style={{ willChange: 'transform' }}
      >
        <path
          d="M 300 -50 Q 600 300 400 700 Q 200 1100 600 1150"
          stroke="rgba(168,85,247,0.25)"
          strokeWidth="0.7"
          fill="none"
        />
      </motion.g>
    </svg>
  )
}

export default function BackgroundSystem({ glows, noLines = false }) {
  const defaultGlows = [
    { color: '#7C3AED', x: '-10%', y: '-15%', size: '60vw', opacity: 0.18, duration: 20 },
    { color: '#22D3EE', x: '60%', y: '50%', size: '50vw', opacity: 0.12, duration: 25, delay: 5 },
  ]
  const activeGlows = glows || defaultGlows

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at top left, #0D0F2B 0%, #050816 60%)',
      overflow: 'hidden',
    }}>
      {activeGlows.map((g, i) => <GlowBlob key={i} {...g} />)}
      {!noLines && <FloatingCurves />}
      <NoiseOverlay />
    </div>
  )
}
