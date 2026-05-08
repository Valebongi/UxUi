import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import BackgroundSystem from '../components/BackgroundSystem'

const glows = [
  { color: '#7C3AED', x: '-10%', y: '-10%', size: '60vw', opacity: 0.18, duration: 30 },
  { color: '#22D3EE', x: '58%', y: '50%', size: '45vw', opacity: 0.11, duration: 35, delay: 8 },
]

const phases = ['desktop', 'tablet', 'mobile']
const phaseLabels = { desktop: '1440px', tablet: '768px', mobile: '390px' }

function DesktopUI() {
  return (
    <div style={{
      display: 'flex', width: '100%', height: '100%',
      background: 'rgba(8,10,28,0.95)', borderRadius: 12, overflow: 'hidden',
    }}>
      {/* Sidebar */}
      <div style={{
        width: 220, minWidth: 220, background: 'rgba(15,12,40,0.98)',
        borderRight: '1px solid rgba(255,255,255,0.07)',
        padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 8,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, padding: '6px 8px' }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: 'linear-gradient(135deg,#7C3AED,#22D3EE)' }} />
          <span style={{ color: '#fff', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)' }}>StreamApp</span>
        </div>
        {['Dashboard', 'Explorar', 'Mi Música', 'Playlists', 'Artistas'].map((item, i) => (
          <div key={item} style={{
            padding: '8px 10px', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10,
            background: i === 0 ? 'rgba(124,58,237,0.2)' : 'transparent',
            border: i === 0 ? '1px solid rgba(124,58,237,0.3)' : '1px solid transparent',
          }}>
            <div style={{ width: 14, height: 14, borderRadius: 3, background: i === 0 ? '#A855F7' : 'rgba(255,255,255,0.2)' }} />
            <span style={{ color: i === 0 ? '#C084FC' : 'rgba(255,255,255,0.5)', fontSize: 12, fontFamily: 'var(--font-body)' }}>{item}</span>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: 20, display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ height: 28, width: 160, background: 'rgba(255,255,255,0.06)', borderRadius: 6 }} />
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ height: 28, width: 80, background: 'rgba(124,58,237,0.25)', borderRadius: 6, border: '1px solid rgba(124,58,237,0.3)' }} />
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#A855F7)' }} />
          </div>
        </div>
        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, flex: 1 }}>
          {['Recientes', 'Tendencias', 'Para Ti'].map((label, i) => (
            <div key={label} style={{
              background: 'rgba(255,255,255,0.04)', borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.08)', padding: 14,
              display: 'flex', flexDirection: 'column', gap: 8,
            }}>
              <div style={{ height: 70, borderRadius: 8, background: `linear-gradient(135deg, rgba(${i===0?'124,58,237':i===1?'34,211,238':'168,85,247'},0.35), rgba(${i===0?'34,211,238':i===1?'168,85,247':'34,211,238'},0.15))` }} />
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10, fontFamily: 'var(--font-body)', fontWeight: 500 }}>{label}</span>
              <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.08)' }} />
              <div style={{ height: 6, width: '70%', borderRadius: 3, background: 'rgba(255,255,255,0.05)' }} />
            </div>
          ))}
        </div>
        {/* Player bar */}
        <div style={{
          height: 52, background: 'rgba(124,58,237,0.12)',
          borderRadius: 10, border: '1px solid rgba(124,58,237,0.2)',
          display: 'flex', alignItems: 'center', padding: '0 16px', gap: 12,
        }}>
          <div style={{ width: 32, height: 32, borderRadius: 6, background: 'linear-gradient(135deg,#7C3AED,#22D3EE)' }} />
          <div style={{ flex: 1 }}>
            <div style={{ height: 5, background: 'rgba(255,255,255,0.15)', borderRadius: 3, marginBottom: 6 }}>
              <div style={{ height: '100%', width: '45%', background: 'linear-gradient(90deg,#7C3AED,#22D3EE)', borderRadius: 3 }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[...Array(3)].map((_, i) => <div key={i} style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

function TabletUI() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', width: '100%', height: '100%',
      background: 'rgba(8,10,28,0.95)', borderRadius: 12, overflow: 'hidden',
    }}>
      {/* Top nav */}
      <div style={{
        height: 52, background: 'rgba(15,12,40,0.98)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        display: 'flex', alignItems: 'center', padding: '0 16px', gap: 12,
      }}>
        <div style={{ width: 24, height: 24, borderRadius: 6, background: 'linear-gradient(135deg,#7C3AED,#22D3EE)' }} />
        <div style={{ flex: 1 }} />
        {['Home', 'Explorar', 'Biblioteca'].map((item, i) => (
          <div key={item} style={{
            padding: '5px 12px', borderRadius: 6,
            background: i === 0 ? 'rgba(124,58,237,0.2)' : 'transparent',
            color: i === 0 ? '#C084FC' : 'rgba(255,255,255,0.4)',
            fontSize: 11, fontFamily: 'var(--font-body)',
          }}>{item}</div>
        ))}
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#A855F7)' }} />
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, overflow: 'hidden' }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.04)', borderRadius: 10,
            border: '1px solid rgba(255,255,255,0.07)', padding: 12,
          }}>
            <div style={{ height: 55, borderRadius: 7, background: `linear-gradient(135deg,rgba(${i%2===0?'124,58,237':'34,211,238'},0.3),rgba(168,85,247,0.1))`, marginBottom: 8 }} />
            <div style={{ height: 5, background: 'rgba(255,255,255,0.12)', borderRadius: 3, marginBottom: 5 }} />
            <div style={{ height: 5, width: '60%', background: 'rgba(255,255,255,0.06)', borderRadius: 3 }} />
          </div>
        ))}
      </div>

      {/* Mini player */}
      <div style={{
        height: 48, background: 'rgba(124,58,237,0.15)',
        borderTop: '1px solid rgba(124,58,237,0.2)',
        display: 'flex', alignItems: 'center', padding: '0 16px', gap: 10,
      }}>
        <div style={{ width: 28, height: 28, borderRadius: 5, background: 'linear-gradient(135deg,#7C3AED,#22D3EE)' }} />
        <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
          <div style={{ height: '100%', width: '35%', background: '#A855F7', borderRadius: 2 }} />
        </div>
        <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
      </div>
    </div>
  )
}

function MobileUI() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', width: '100%', height: '100%',
      background: 'rgba(8,10,28,0.95)', borderRadius: 12, overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        padding: '14px 16px 10px',
        background: 'rgba(15,12,40,0.98)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ color: '#fff', fontSize: 14, fontWeight: 700, fontFamily: 'var(--font-body)' }}>StreamApp</span>
        <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#A855F7)' }} />
      </div>

      {/* Feed vertical */}
      <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}>
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.04)', borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.07)', padding: 12,
            display: 'flex', gap: 10, alignItems: 'center',
          }}>
            <div style={{ width: 42, height: 42, borderRadius: 8, background: `linear-gradient(135deg,rgba(${i===0?'124,58,237':i===1?'34,211,238':'168,85,247'},0.5),rgba(168,85,247,0.2))`, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ height: 6, background: 'rgba(255,255,255,0.2)', borderRadius: 3, marginBottom: 5, width: '80%' }} />
              <div style={{ height: 5, background: 'rgba(255,255,255,0.1)', borderRadius: 3, width: '55%' }} />
            </div>
            <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(124,58,237,0.3)', border: '1px solid rgba(124,58,237,0.4)' }} />
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div style={{
        height: 54, background: 'rgba(10,8,32,0.98)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 8px',
      }}>
        {['⊞', '◎', '♪', '☰'].map((icon, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, flex: 1,
          }}>
            <div style={{
              width: i === 0 ? 32 : 22, height: 4, borderRadius: 2,
              background: i === 0 ? '#A855F7' : 'transparent',
              marginBottom: 2,
            }} />
            <span style={{ fontSize: 16, opacity: i === 0 ? 1 : 0.35, color: i === 0 ? '#C084FC' : '#fff' }}>{icon}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Slide02() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(p => (p + 1) % phases.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const deviceSizes = {
    desktop: { width: 600, height: 380, label: 'Desktop', borderRadius: '14px 14px 4px 4px' },
    tablet: { width: 380, height: 380, label: 'Tablet', borderRadius: 14 },
    mobile: { width: 220, height: 380, label: 'Mobile', borderRadius: 22 },
  }

  const currentPhase = phases[phase]
  const size = deviceSizes[currentPhase]

  return (
    <div className="slide">
      <BackgroundSystem glows={glows} noLines />

      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', alignItems: 'center',
        padding: '0 7%',
        gap: '5%',
      }}>
        {/* Left — text */}
        <div style={{
          flex: '0 0 auto', maxWidth: 400,
          background: 'rgba(5,8,22,0.45)',
          backdropFilter: 'blur(24px)',
          borderRadius: 20,
          padding: '32px 28px',
          border: '1px solid rgba(255,255,255,0.05)',
        }}>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(34px, 4.2vw, 64px)',
              fontWeight: 700, lineHeight: 0.95,
              letterSpacing: '-0.04em', color: '#fff',
              marginBottom: 24,
            }}
          >
            ¿Por qué la misma
            <br />
            <span className="gradient-text">app se siente</span>
            <br />
            tan distinta?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            style={{
              fontFamily: 'var(--font-body)', fontSize: 14,
              color: 'var(--text-secondary)', lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            La experiencia cambia según:<br />
            el contexto · la interacción · el dispositivo.
          </motion.p>

          {/* Phase indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', gap: 10 }}
          >
            {phases.map((p, i) => (
              <div
                key={p}
                style={{
                  padding: '5px 14px', borderRadius: 8,
                  background: i === phase ? 'rgba(124,58,237,0.25)' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${i === phase ? 'rgba(124,58,237,0.5)' : 'rgba(255,255,255,0.08)'}`,
                  color: i === phase ? '#C084FC' : 'rgba(255,255,255,0.35)',
                  fontSize: 11, fontFamily: 'var(--font-body)', fontWeight: 600,
                  textTransform: 'capitalize',
                  transition: 'all 0.4s ease',
                }}
              >
                {p}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — animated device */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          {/* Viewport label */}
          <motion.div
            key={currentPhase + '-label'}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8, padding: '4px 14px',
              fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-muted)',
              letterSpacing: '0.1em',
            }}
          >
            {phaseLabels[currentPhase]}
          </motion.div>

          {/* Device frame */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Glow behind device */}
            <div style={{
              position: 'absolute',
              width: size.width + 60, height: size.height + 60,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%)',
              filter: 'blur(20px)',
              transition: 'all 1.2s ease',
            }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhase}
                initial={{ opacity: 0, scale: 0.85, filter: 'blur(12px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: size.width,
                  height: size.height,
                  borderRadius: size.borderRadius,
                  border: '1.5px solid rgba(124,58,237,0.4)',
                  background: 'rgba(8,10,28,0.95)',
                  boxShadow: '0 30px 80px rgba(124,58,237,0.3), 0 0 0 1px rgba(255,255,255,0.05)',
                  overflow: 'hidden',
                }}
              >
                {currentPhase === 'desktop' && <DesktopUI />}
                {currentPhase === 'tablet' && <TabletUI />}
                {currentPhase === 'mobile' && <MobileUI />}
              </motion.div>
            </AnimatePresence>

            {/* Desktop stand */}
            {currentPhase === 'desktop' && (
              <motion.div
                layoutId="desktop-stand"
                style={{
                  position: 'absolute', bottom: -16, width: 100, height: 8,
                  background: 'rgba(255,255,255,0.1)', borderRadius: '0 0 6px 6px',
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
