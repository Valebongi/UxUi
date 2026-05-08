import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import BackgroundSystem from '../components/BackgroundSystem'

const glows = [
  { color: '#7C3AED', x: '20%', y: '-10%', size: '80vw', opacity: 0.16, duration: 24 },
  { color: '#22D3EE', x: '55%', y: '55%', size: '60vw', opacity: 0.08, duration: 30, delay: 8 },
]

function MinimalDevice({ type, delay }) {
  const sizes = {
    desktop: { w: 80, h: 52, rx: 5, label: 'Desktop' },
    tablet: { w: 44, h: 58, rx: 4, label: 'Tablet' },
    mobile: { w: 26, h: 50, rx: 7, label: 'Mobile' },
  }
  const s = sizes[type]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delay + 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5 + delay * 2, repeat: Infinity, ease: 'easeInOut', delay }}
        whileHover={{ scale: 1.15 }}
        style={{ cursor: 'default' }}
      >
        <svg width={s.w} height={s.h} viewBox={`0 0 ${s.w} ${s.h}`}>
          <rect
            x="1" y="1" width={s.w - 2} height={s.h - 2}
            rx={s.rx} ry={s.rx}
            fill="none"
            stroke="rgba(168,85,247,0.5)"
            strokeWidth="1.2"
          />
          <rect
            x="5" y="5" width={s.w - 10} height={s.h - 12}
            rx={s.rx - 2} ry={s.rx - 2}
            fill="rgba(124,58,237,0.08)"
          />
          {/* Screen content lines */}
          {[0, 1, 2].map(i => (
            <rect
              key={i}
              x="8" y={12 + i * 8}
              width={s.w - 20} height="3"
              rx="1.5"
              fill={i === 0 ? 'rgba(168,85,247,0.4)' : 'rgba(255,255,255,0.12)'}
            />
          ))}
          {type === 'desktop' && (
            <rect x={s.w / 2 - 10} y={s.h - 5} width="20" height="3" rx="1" fill="rgba(255,255,255,0.1)" />
          )}
          {type === 'mobile' && (
            <rect x={s.w / 2 - 5} y={s.h - 6} width="10" height="2.5" rx="1.25" fill="rgba(168,85,247,0.4)" />
          )}
        </svg>
      </motion.div>
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: 10, color: 'rgba(255,255,255,0.3)',
        fontWeight: 500, letterSpacing: '0.06em',
      }}>{s.label}</span>
    </motion.div>
  )
}

function ParticleFlow() {
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 6 }}>
      {/* Device connector lines */}
      <motion.line x1="36%" y1="72%" x2="50%" y2="80%"
        stroke="rgba(168,85,247,0.25)" strokeWidth="0.8" strokeDasharray="4 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />
      <motion.line x1="64%" y1="72%" x2="50%" y2="80%"
        stroke="rgba(34,211,238,0.2)" strokeWidth="0.8" strokeDasharray="4 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      />

      {/* Traveling particles on left line */}
      {[0, 1, 2].map(i => (
        <motion.circle key={`l${i}`} r="2" fill="#A855F7"
          animate={{ opacity: [0, 0.8, 0], cx: ['36%', '50%'], cy: ['72%', '80%'] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: 'linear' }}
        />
      ))}

      {/* Traveling particles on right line */}
      {[0, 1, 2].map(i => (
        <motion.circle key={`r${i}`} r="1.8" fill="#22D3EE"
          animate={{ opacity: [0, 0.7, 0], cx: ['64%', '50%'], cy: ['72%', '80%'] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 1 + 0.5, ease: 'linear' }}
        />
      ))}
    </svg>
  )
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(16px)' },
  visible: (i) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function Slide11() {
  return (
    <div className="slide">
      <BackgroundSystem glows={glows} />

      {/* Cinematic particle dots */}
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 1.5, height: 1.5, borderRadius: '50%',
            background: i % 3 === 0 ? '#7C3AED' : i % 3 === 1 ? '#22D3EE' : '#A855F7',
            left: `${(i * 37 + 13) % 94}%`,
            top: `${(i * 59 + 7) % 90}%`,
            willChange: 'transform, opacity',
          }}
          animate={{
            opacity: [0, 0.45, 0],
            y: [0, -(12 + (i % 20)), 0],
          }}
          transition={{
            duration: 6 + (i % 4),
            repeat: Infinity,
            delay: (i * 0.35) % 8,
            ease: 'easeInOut',
          }}
        />
      ))}

      <ParticleFlow />

      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '40px 8%',
        gap: 40,
      }}>
        {/* Badge */}
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'inline-flex', gap: 8,
            background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)',
            borderRadius: 100, padding: '5px 18px',
          }}
        >
          <motion.div
            style={{ width: 6, height: 6, borderRadius: '50%', background: '#A855F7' }}
            animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span style={{ color: '#A855F7', fontSize: 11, fontFamily: 'var(--font-body)', letterSpacing: '0.12em', fontWeight: 500 }}>SLIDE 10 · CONCLUSIÓN</span>
        </motion.div>

        {/* Main statement */}
        <div style={{ textAlign: 'center', maxWidth: 900 }}>
          <motion.h1
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(36px, 5.5vw, 88px)',
              fontWeight: 700, lineHeight: 0.92,
              letterSpacing: '-0.05em',
              marginBottom: 8,
            }}
          >
            <span style={{ color: '#fff' }}>Diseñar para</span>
            <br />
            <span className="gradient-text">múltiples plataformas</span>
          </motion.h1>

          <motion.h1
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(36px, 5.5vw, 88px)',
              fontWeight: 700, lineHeight: 0.92,
              letterSpacing: '-0.05em',
              color: '#fff',
            }}
          >
            es diseñar para
            <br />
            <span className="gradient-text-cyan">múltiples contextos.</span>
          </motion.h1>
        </div>

        {/* Supporting keywords */}
        <motion.div
          custom={3}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', gap: 24, alignItems: 'center' }}
        >
          {['Consistencia', 'Adaptabilidad', 'Experiencia'].map((word, i) => (
            <div key={word} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {i > 0 && <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />}
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: 'easeInOut' }}
                style={{
                  fontFamily: 'var(--font-title)', fontSize: 'clamp(14px, 1.8vw, 22px)',
                  fontWeight: 600,
                  color: i === 0 ? '#C084FC' : i === 1 ? '#67E8F9' : '#A855F7',
                  letterSpacing: '-0.01em',
                }}
              >{word}</motion.span>
            </div>
          ))}
        </motion.div>

        {/* Minimal device ecosystem */}
        <motion.div
          custom={4}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex', alignItems: 'flex-end', gap: 32,
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20, padding: '20px 40px',
          }}
        >
          <MinimalDevice type="desktop" delay={0} />
          <MinimalDevice type="tablet" delay={0.2} />
          <MinimalDevice type="mobile" delay={0.4} />
        </motion.div>

        {/* Shared glow pulse */}
        <motion.div
          style={{
            position: 'absolute',
            width: '50%', height: '40%',
            top: '30%', left: '25%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}
