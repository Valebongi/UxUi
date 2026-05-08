import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import BackgroundSystem from '../components/BackgroundSystem'

const glows = [
  { color: '#7C3AED', x: '20%', y: '20%', size: '60vw', opacity: 0.16, duration: 20 },
  { color: '#EF4444', x: '60%', y: '40%', size: '40vw', opacity: 0.08, duration: 25, delay: 5 },
]

const WARNINGS = [
  { id: 'info', label: 'Too much information', x: -140, y: -120, color: '#EF4444', delay: 0.8 },
  { id: 'touch', label: 'Touch targets too small', x: 140, y: -60, color: '#F59E0B', delay: 1.1 },
  { id: 'hierarchy', label: 'Poor hierarchy', x: -150, y: 80, color: '#EF4444', delay: 1.4 },
  { id: 'nav', label: 'Navigation overload', x: 130, y: 120, color: '#F59E0B', delay: 1.7 },
]

function BrokenMobileUI() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#06070F', overflow: 'hidden',
      fontSize: 7, position: 'relative',
    }}>
      {/* Crammed desktop sidebar inside mobile */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 120,
        background: '#0A0C1A', borderRight: '1px solid rgba(255,255,255,0.05)',
        padding: '8px 4px', display: 'flex', flexDirection: 'column', gap: 2, overflow: 'hidden',
      }}>
        <div style={{ color: '#fff', fontSize: 8, fontFamily: 'var(--font-body)', fontWeight: 700, marginBottom: 4, padding: '2px 4px' }}>StreamApp Desktop</div>
        {['Dashboard', 'Analytics', 'Users', 'Products', 'Reports', 'Settings', 'Help', 'Archive', 'Export'].map((item, i) => (
          <div key={item} style={{
            padding: '3px 4px', borderRadius: 3, display: 'flex', alignItems: 'center', gap: 3,
            background: i === 0 ? 'rgba(124,58,237,0.2)' : 'transparent',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: 1, background: 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 6, fontFamily: 'var(--font-body)', whiteSpace: 'nowrap', overflow: 'hidden' }}>{item}</span>
          </div>
        ))}
      </div>

      {/* Crammed content */}
      <div style={{ marginLeft: 120, padding: '4px', overflow: 'hidden', height: '100%' }}>
        {/* Tiny nav bar */}
        <div style={{
          height: 20, background: '#080A18', borderRadius: 3,
          display: 'flex', alignItems: 'center', gap: 2, padding: '0 4px', marginBottom: 4,
          overflow: 'hidden',
        }}>
          {['Home', 'Analytics', 'Users', 'Products', 'Reports'].map((item, i) => (
            <span key={item} style={{ color: 'rgba(255,255,255,0.3)', fontSize: 5.5, fontFamily: 'var(--font-body)', padding: '1px 3px', whiteSpace: 'nowrap' }}>{item}</span>
          ))}
        </div>

        {/* Overcrowded cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 3 }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)', borderRadius: 3, padding: 4,
            }}>
              <div style={{ height: 16, background: `rgba(${i%2===0?'124,58,237':'34,211,238'},0.25)`, borderRadius: 2, marginBottom: 2 }} />
              <div style={{ height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 1, marginBottom: 2 }} />
              <div style={{ height: 3, background: 'rgba(255,255,255,0.06)', borderRadius: 1 }} />
            </div>
          ))}
        </div>

        {/* Tiny table overflowing */}
        <div style={{ marginTop: 4, overflow: 'hidden' }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{
              display: 'flex', gap: 2, padding: '2px 0',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
            }}>
              {[...Array(4)].map((_, j) => (
                <div key={j} style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.05)', borderRadius: 1 }} />
              ))}
            </div>
          ))}
        </div>

        {/* Overflow indicator */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            position: 'absolute', right: 2, bottom: 2,
            color: '#EF4444', fontSize: 8, fontFamily: 'var(--font-body)',
          }}
        >
          ↓ content overflow
        </motion.div>
      </div>
    </div>
  )
}

function CorrectMobileUI() {
  return (
    <div style={{
      width: '100%', height: '100%', background: '#070A1C',
      display: 'flex', flexDirection: 'column', fontSize: 8, overflow: 'hidden',
    }}>
      <div style={{ padding: '10px 12px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Dashboard</span>
        <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#A855F7)' }} />
      </div>
      <div style={{ flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: `rgba(${i===0?'124,58,237':i===1?'34,211,238':'168,85,247'},0.4)`, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ height: 6, background: 'rgba(255,255,255,0.2)', borderRadius: 2, marginBottom: 5, width: '70%' }} />
              <div style={{ height: 5, background: 'rgba(255,255,255,0.1)', borderRadius: 2, width: '45%' }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: 48, background: 'rgba(5,4,20,0.98)', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        {['⊞', '◎', '⚙'].map((icon, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <span style={{ fontSize: 14, color: i === 0 ? '#A855F7' : 'rgba(255,255,255,0.3)' }}>{icon}</span>
            <span style={{ fontSize: 6, color: i === 0 ? '#A855F7' : 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-body)' }}>{['Inicio', 'Buscar', 'Config'][i]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function WarningLabel({ label, x, y, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'absolute',
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
        background: `${color}18`,
        border: `1px solid ${color}55`,
        borderRadius: 8,
        padding: '5px 10px',
        display: 'flex', alignItems: 'center', gap: 6,
        pointerEvents: 'none',
        zIndex: 20,
        whiteSpace: 'nowrap',
      }}
    >
      <motion.div
        style={{ width: 5, height: 5, borderRadius: '50%', background: color }}
        animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <span style={{ color, fontSize: 10, fontFamily: 'var(--font-body)', fontWeight: 600 }}>{label}</span>
    </motion.div>
  )
}

export default function Slide10() {
  const [showCorrect, setShowCorrect] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      setShowCorrect(true)
      setTimeout(() => setShowCorrect(false), 2000)
    }, 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="slide" style={{ background: 'radial-gradient(ellipse at center, #06050F 0%, #030408 100%)' }}>
      <BackgroundSystem glows={glows} />

      {/* Extra noise for tension feel */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: 'radial-gradient(rgba(239,68,68,0.03) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        pointerEvents: 'none',
      }} />

      {/* Warning labels */}
      {WARNINGS.map(w => <WarningLabel key={w.id} {...w} />)}

      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', alignItems: 'center',
        padding: '0 7%', gap: '5%',
      }}>
        {/* Left text */}
        <div style={{ flex: '0 0 auto', maxWidth: 360 }}>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(28px, 3.8vw, 56px)',
              fontWeight: 700, lineHeight: 0.92,
              letterSpacing: '-0.04em', color: '#fff',
              marginBottom: 16,
            }}
          >
            El error
            <br />
            <span style={{ color: '#EF4444' }}>más común</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            style={{
              background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: 12, padding: '14px 16px', marginBottom: 22,
            }}
          >
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600,
              color: '#fff', lineHeight: 1.4,
              fontStyle: 'italic',
            }}>
              "Copiar interfaces<br />no es diseñar experiencias."
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontFamily: 'var(--font-body)', fontSize: 13,
              color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 22,
            }}
          >
            Cuando una interfaz desktop se traslada directamente a mobile,
            aparecen problemas que frustran al usuario y dañan la experiencia.
          </motion.p>

          {/* Problems list */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
          >
            {[
              { label: 'Saturación visual', color: '#EF4444' },
              { label: 'Botones demasiado pequeños', color: '#F59E0B' },
              { label: 'Navegación incómoda', color: '#EF4444' },
              { label: 'Jerarquía perdida', color: '#F59E0B' },
            ].map(({ label, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                style={{ display: 'flex', alignItems: 'center', gap: 10 }}
              >
                <div style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: color, flexShrink: 0,
                  boxShadow: `0 0 6px ${color}80`,
                }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              marginTop: 20, fontFamily: 'var(--font-body)', fontSize: 11,
              color: 'rgba(255,255,255,0.3)', fontStyle: 'italic',
            }}
          >
            El mockup correcto aparece cada 6 segundos →
          </motion.p>
        </div>

        {/* Right — broken phone with comparison */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
          {/* Glow halo */}
          <div style={{
            position: 'absolute',
            width: 300, height: 560,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(239,68,68,0.15), transparent 70%)',
            filter: 'blur(20px)',
          }} />

          <div style={{ position: 'relative' }}>
            {/* Phone shell */}
            <motion.div
              animate={{
                x: [0, 0.8, -0.8, 0],
                borderColor: showCorrect
                  ? 'rgba(74,222,128,0.5)'
                  : 'rgba(239,68,68,0.5)',
              }}
              transition={{
                x: { duration: 0.2, repeat: Infinity, ease: 'linear' },
                borderColor: { duration: 0.4 },
              }}
              style={{
                width: 240, height: 480,
                borderRadius: 36,
                border: '2px solid rgba(239,68,68,0.5)',
                background: '#050816',
                overflow: 'hidden',
                boxShadow: showCorrect
                  ? '0 30px 80px rgba(74,222,128,0.3)'
                  : '0 30px 80px rgba(239,68,68,0.3)',
                transition: 'box-shadow 0.4s',
              }}
            >
              {/* Notch */}
              <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: 80, height: 22, background: '#050816', borderRadius: '0 0 14px 14px',
                zIndex: 20, border: '1px solid rgba(255,255,255,0.04)',
              }} />

              <AnimatePresence mode="wait">
                {showCorrect ? (
                  <motion.div
                    key="correct"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <CorrectMobileUI />
                  </motion.div>
                ) : (
                  <motion.div
                    key="broken"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <BrokenMobileUI />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Status badge */}
            <motion.div
              animate={{ background: showCorrect ? 'rgba(74,222,128,0.15)' : 'rgba(239,68,68,0.15)' }}
              style={{
                position: 'absolute', bottom: -16, left: '50%', transform: 'translateX(-50%)',
                border: `1px solid ${showCorrect ? 'rgba(74,222,128,0.3)' : 'rgba(239,68,68,0.3)'}`,
                borderRadius: 8, padding: '4px 12px',
                whiteSpace: 'nowrap', transition: 'border-color 0.4s',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600,
                color: showCorrect ? '#4ADE80' : '#EF4444',
              }}>
                {showCorrect ? '✓ Correctamente adaptado' : '✕ Desktop copiado en Mobile'}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
