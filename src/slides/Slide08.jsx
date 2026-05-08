import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import BackgroundSystem from '../components/BackgroundSystem'

const glows = [
  { color: '#7C3AED', x: '20%', y: '-20%', size: '80vw', opacity: 0.22, duration: 20 },
  { color: '#22D3EE', x: '50%', y: '50%', size: '60vw', opacity: 0.14, duration: 26, delay: 5 },
]

const PHASES = ['desktop', 'tablet', 'mobile']
const PHASE_LABELS = {
  desktop: { name: 'Desktop', size: '1440px', icon: '🖥' },
  tablet: { name: 'Tablet', size: '768px', icon: '⬜' },
  mobile: { name: 'Mobile', size: '390px', icon: '📱' },
}

// Shared sidebar that morphs
function AdaptiveSidebar({ phase }) {
  if (phase === 'mobile') return null
  return (
    <motion.div
      layout
      style={{
        background: '#0A0D22',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        overflow: 'hidden',
      }}
      animate={{
        width: phase === 'desktop' ? 160 : 48,
        padding: phase === 'desktop' ? '16px 12px' : '14px 6px',
      }}
      transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: phase === 'desktop' ? 8 : 0, overflow: 'hidden', marginBottom: 8, width: '100%' }}>
        <div style={{ width: 22, height: 22, borderRadius: 5, background: 'linear-gradient(135deg,#7C3AED,#22D3EE)', flexShrink: 0 }} />
        <motion.span
          animate={{ opacity: phase === 'desktop' ? 1 : 0, width: phase === 'desktop' ? 'auto' : 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: '#fff', fontSize: 11, fontWeight: 700, fontFamily: 'var(--font-body)', whiteSpace: 'nowrap', overflow: 'hidden' }}
        >Stream</motion.span>
      </div>

      {['⊞', '◎', '♪', '☰', '⚙'].map((icon, i) => (
        <motion.div
          key={i}
          layout
          style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: 8,
            padding: phase === 'desktop' ? '6px 8px' : '6px',
            borderRadius: 7,
            background: i === 0 ? 'rgba(124,58,237,0.2)' : 'transparent',
          }}
        >
          <span style={{ fontSize: 12, color: i === 0 ? '#A855F7' : 'rgba(255,255,255,0.35)', flexShrink: 0 }}>{icon}</span>
          <motion.span
            animate={{ opacity: phase === 'desktop' ? 1 : 0, maxWidth: phase === 'desktop' ? 100 : 0 }}
            transition={{ duration: 0.4 }}
            style={{ color: i === 0 ? '#C084FC' : 'rgba(255,255,255,0.35)', fontSize: 10, fontFamily: 'var(--font-body)', overflow: 'hidden', whiteSpace: 'nowrap' }}
          >
            {['Dashboard', 'Explorar', 'Música', 'Playlists', 'Settings'][i]}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  )
}

function AdaptiveContent({ phase }) {
  return (
    <div style={{ flex: 1, padding: phase === 'mobile' ? '10px 12px' : '14px 16px', display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}>
      {/* Top navigation for tablet/mobile */}
      {phase !== 'desktop' && (
        <motion.div
          layout
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            height: 36, background: '#0A0D22',
            border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8,
            display: 'flex', alignItems: 'center', padding: '0 10px', gap: 8,
          }}
        >
          <div style={{ width: 20, height: 20, borderRadius: 4, background: 'linear-gradient(135deg,#7C3AED,#22D3EE)' }} />
          <div style={{ flex: 1 }} />
          {phase === 'tablet' && ['Inicio', 'Explorar', 'Biblioteca'].map((item, i) => (
            <span key={item} style={{ color: i === 0 ? '#C084FC' : 'rgba(255,255,255,0.35)', fontSize: 9, fontFamily: 'var(--font-body)', padding: '2px 6px', background: i === 0 ? 'rgba(124,58,237,0.15)' : 'transparent', borderRadius: 4 }}>{item}</span>
          ))}
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#A855F7)' }} />
        </motion.div>
      )}

      {/* Cards grid — adapts columns */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gap: 8,
          flex: 1,
        }}
        animate={{
          gridTemplateColumns: phase === 'desktop' ? 'repeat(3,1fr)' : phase === 'tablet' ? 'repeat(2,1fr)' : '1fr',
        }}
        transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {[
          { label: 'Recientes', color: '#7C3AED' },
          { label: 'Tendencias', color: '#22D3EE' },
          { label: 'Para Ti', color: '#A855F7' },
          ...(phase === 'desktop' ? [{ label: 'Playlist', color: '#67E8F9' }, { label: 'Artistas', color: '#C084FC' }, { label: 'Álbumes', color: '#7C3AED' }] : []),
        ].map((card, i) => (
          <motion.div
            key={card.label}
            layout
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 10, padding: phase === 'mobile' ? '10px 12px' : 12,
              display: 'flex', alignItems: phase === 'mobile' ? 'center' : 'flex-start',
              gap: 10, flexDirection: phase === 'mobile' ? 'row' : 'column',
            }}
          >
            <div style={{
              width: phase === 'mobile' ? 38 : '100%',
              height: phase === 'mobile' ? 38 : 50,
              minWidth: phase === 'mobile' ? 38 : undefined,
              borderRadius: 7, flexShrink: 0,
              background: `linear-gradient(135deg, ${card.color}55, ${card.color}22)`,
            }} />
            <div style={{ flex: phase === 'mobile' ? 1 : undefined }}>
              <div style={{ height: 6, width: phase === 'mobile' ? '80%' : '100%', background: 'rgba(255,255,255,0.15)', borderRadius: 3, marginBottom: 5 }} />
              <div style={{ height: 5, width: '60%', background: 'rgba(255,255,255,0.07)', borderRadius: 3 }} />
            </div>
            {phase === 'mobile' && (
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: `rgba(${i%2===0?'124,58,237':'34,211,238'},0.25)`, border: `1px solid rgba(${i%2===0?'124,58,237':'34,211,238'},0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8 }}>▶</div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Player bar */}
      <AnimatePresence>
        {phase !== 'mobile' && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            style={{
              height: 44, background: 'rgba(124,58,237,0.12)',
              border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: 10, display: 'flex', alignItems: 'center', padding: '0 12px', gap: 10,
            }}
          >
            <div style={{ width: 28, height: 28, borderRadius: 5, background: 'linear-gradient(135deg,#7C3AED,#22D3EE)' }} />
            <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
              <div style={{ height: '100%', width: '45%', background: 'linear-gradient(90deg,#7C3AED,#22D3EE)', borderRadius: 2 }} />
            </div>
            <div style={{ display: 'flex', gap: 5 }}>
              {['⏮', '⏸', '⏭'].map((c, i) => (
                <div key={i} style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, color: '#fff' }}>{c}</div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function AdaptiveBottomNav({ phase }) {
  if (phase !== 'mobile') return null
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      style={{
        height: 52, background: 'rgba(5,4,20,0.98)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex', alignItems: 'center',
      }}
    >
      {['⊞', '◎', '♪', '☰'].map((icon, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          {i === 0 && <div style={{ width: 28, height: 3, background: '#A855F7', borderRadius: '0 0 2px 2px', position: 'absolute', top: 0, boxShadow: '0 0 8px rgba(168,85,247,0.7)' }} />}
          <span style={{ fontSize: 14, color: i === 0 ? '#C084FC' : 'rgba(255,255,255,0.3)' }}>{icon}</span>
          <span style={{ fontSize: 7, color: i === 0 ? '#C084FC' : 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-body)' }}>{['Home', 'Buscar', 'Música', 'Perfil'][i]}</span>
        </div>
      ))}
    </motion.div>
  )
}

function ResponsiveMorphEnvironment({ phase }) {
  const widths = { desktop: 720, tablet: 480, mobile: 280 }
  const heights = { desktop: 440, tablet: 440, mobile: 460 }

  return (
    <motion.div
      animate={{ width: widths[phase], height: heights[phase] }}
      transition={{ duration: 1.3, ease: [0.43, 0.13, 0.23, 0.96] }}
      style={{
        borderRadius: phase === 'mobile' ? 28 : 14,
        border: '1.5px solid rgba(124,58,237,0.45)',
        background: '#070A1C',
        boxShadow: '0 40px 100px rgba(124,58,237,0.35), 0 0 0 1px rgba(255,255,255,0.04)',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        position: 'relative',
      }}
    >
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <AdaptiveSidebar phase={phase} />
        <AdaptiveContent phase={phase} />
      </div>
      <AnimatePresence>
        {phase === 'mobile' && <AdaptiveBottomNav phase={phase} key="bottom-nav" />}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Slide08() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setPhase(p => (p + 1) % PHASES.length), 3800)
    return () => clearInterval(t)
  }, [])

  const currentPhase = PHASES[phase]
  const phaseInfo = PHASE_LABELS[currentPhase]

  return (
    <div className="slide">
      <BackgroundSystem glows={glows} />

      {/* Subtle ambient particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 2, height: 2, borderRadius: '50%',
            background: i % 2 === 0 ? '#7C3AED' : '#22D3EE',
            left: `${(i * 41 + 10) % 90}%`,
            top: `${(i * 59 + 5) % 90}%`,
          }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8, ease: 'easeInOut' }}
        />
      ))}

      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '30px 6%', gap: 28,
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'inline-flex', gap: 8,
              background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)',
              borderRadius: 100, padding: '5px 14px', marginBottom: 16,
            }}
          >
            <span style={{ color: '#A855F7', fontSize: 11, fontFamily: 'var(--font-body)', letterSpacing: '0.1em', fontWeight: 500 }}>SLIDE 07 · EL MOMENTO WOW</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="gradient-text"
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(28px, 4vw, 60px)',
              fontWeight: 700, lineHeight: 0.92,
              letterSpacing: '-0.05em',
            }}
          >
            La experiencia cambia.
            <br />
            <span style={{ color: '#fff' }}>La identidad permanece.</span>
          </motion.h1>
        </div>

        {/* Main morphing scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}
        >
          {/* Phase indicator */}
          <div style={{ display: 'flex', gap: 8 }}>
            {PHASES.map((p, i) => (
              <motion.button
                key={p}
                onClick={() => setPhase(i)}
                animate={{
                  background: i === phase ? 'rgba(124,58,237,0.25)' : 'rgba(255,255,255,0.04)',
                  borderColor: i === phase ? 'rgba(124,58,237,0.5)' : 'rgba(255,255,255,0.08)',
                  color: i === phase ? '#C084FC' : 'rgba(255,255,255,0.4)',
                }}
                style={{
                  padding: '6px 16px', borderRadius: 8,
                  border: '1px solid', cursor: 'pointer',
                  fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600,
                  display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                <span>{PHASE_LABELS[p].icon}</span>
                {PHASE_LABELS[p].name}
                <span style={{ opacity: 0.6, fontSize: 9 }}>{PHASE_LABELS[p].size}</span>
              </motion.button>
            ))}
          </div>

          {/* THE MORPHING COMPONENT */}
          <div style={{ position: 'relative' }}>
            {/* Glow halo */}
            <div style={{
              position: 'absolute', inset: -30,
              background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)',
              filter: 'blur(20px)', pointerEvents: 'none',
            }} />
            <ResponsiveMorphEnvironment phase={currentPhase} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
