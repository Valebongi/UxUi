import { motion } from 'framer-motion'
import BackgroundSystem from '../components/BackgroundSystem'

const glows = [
  { color: '#7C3AED', x: '-15%', y: '-20%', size: '70vw', opacity: 0.22, duration: 18 },
  { color: '#22D3EE', x: '55%', y: '40%', size: '55vw', opacity: 0.14, duration: 24, delay: 4 },
  { color: '#A855F7', x: '30%', y: '60%', size: '40vw', opacity: 0.10, duration: 30, delay: 8 },
]

function FloatingDevice({ style, children }) {
  return (
    <div style={{ position: 'absolute', ...style }}>
      {children}
    </div>
  )
}

function DeviceIcon({ type }) {
  const styles = {
    position: 'relative',
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: type === 'phone' ? 18 : type === 'tablet' ? 12 : 8,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }

  if (type === 'desktop') return (
    <div style={{ ...styles, width: 140, height: 88, flexDirection: 'column' }}>
      <div style={{ width: '90%', height: 6, background: 'rgba(168,85,247,0.4)', borderRadius: 3, marginBottom: 8 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4, padding: '0 8px', width: '100%' }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{ height: 12, background: `rgba(${i % 2 === 0 ? '124,58,237' : '34,211,238'},0.3)`, borderRadius: 2 }} />
        ))}
      </div>
      <div style={{ position: 'absolute', bottom: -12, width: 50, height: 6, background: 'rgba(255,255,255,0.15)', borderRadius: '0 0 4px 4px' }} />
    </div>
  )

  if (type === 'tablet') return (
    <div style={{ ...styles, width: 70, height: 95 }}>
      <div style={{ width: '80%', display: 'flex', flexDirection: 'column', gap: 5 }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} style={{ height: 8, background: `rgba(168,85,247,${0.4 - i * 0.08})`, borderRadius: 2 }} />
        ))}
      </div>
    </div>
  )

  return (
    <div style={{ ...styles, width: 42, height: 75, borderRadius: 12 }}>
      <div style={{ width: '70%', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{ height: 7, background: `rgba(34,211,238,${0.5 - i * 0.1})`, borderRadius: 2 }} />
        ))}
      </div>
    </div>
  )
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: (i) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function Slide01() {
  return (
    <div className="slide">
      <BackgroundSystem glows={glows} />

      {/* Floating device mockups */}
      <FloatingDevice style={{ top: '12%', right: '8%', opacity: 0.6 }} delay={0}>
        <DeviceIcon type="desktop" />
      </FloatingDevice>
      <FloatingDevice style={{ bottom: '20%', right: '12%', opacity: 0.5 }} delay={2}>
        <DeviceIcon type="tablet" />
      </FloatingDevice>
      <FloatingDevice style={{ top: '30%', right: '22%', opacity: 0.4 }} delay={4}>
        <DeviceIcon type="phone" />
      </FloatingDevice>
      <FloatingDevice style={{ bottom: '15%', left: '8%', opacity: 0.3 }} delay={1}>
        <DeviceIcon type="phone" />
      </FloatingDevice>
      <FloatingDevice style={{ top: '10%', left: '15%', opacity: 0.25 }} delay={3}>
        <DeviceIcon type="tablet" />
      </FloatingDevice>

      {/* Particle dots */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 2, height: 2,
            borderRadius: '50%',
            background: i % 2 === 0 ? '#A855F7' : '#22D3EE',
            left: `${(i * 37 + 8) % 92}%`,
            top: `${(i * 53 + 12) % 88}%`,
            willChange: 'opacity',
          }}
          animate={{ opacity: [0, 0.55, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.7, ease: 'easeInOut' }}
        />
      ))}

      {/* Main content */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'flex', flexDirection: 'column',
        alignItems: 'flex-start', justifyContent: 'center',
        width: '100%', height: '100%',
        padding: '0 10% 0 8%',
        maxWidth: '760px',
      }}>
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(124,58,237,0.15)',
            border: '1px solid rgba(124,58,237,0.3)',
            borderRadius: 100, padding: '6px 16px',
            marginBottom: 32,
          }}
        >
          <motion.div
            style={{ width: 7, height: 7, borderRadius: '50%', background: '#A855F7' }}
            animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#C084FC', letterSpacing: '0.12em', fontWeight: 500 }}>
            DISEÑO UX/UI · 2025
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: 'clamp(42px, 5.5vw, 82px)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            color: '#FFFFFF',
            marginBottom: 12,
          }}
        >
          Diseño de
        </motion.h1>
        <motion.h1
          custom={2}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="gradient-text"
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: 'clamp(42px, 5.5vw, 82px)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            marginBottom: 12,
          }}
        >
          Interfaces
        </motion.h1>
        <motion.h1
          custom={3}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: 'clamp(42px, 5.5vw, 82px)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            color: '#FFFFFF',
            marginBottom: 40,
          }}
        >
          para Diferentes
          <br />
          <span className="gradient-text-cyan">Plataformas</span>
        </motion.h1>

        <motion.p
          custom={5}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: 480,
            marginBottom: 48,
          }}
        >
          Cómo los principios de UX/UI evolucionan para adaptarse
          a web, mobile y software de escritorio — creando experiencias
          coherentes en cualquier contexto.
        </motion.p>

        <motion.div
          custom={6}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', gap: 16, alignItems: 'center' }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #7C3AED, #22D3EE)',
            borderRadius: 12, padding: '12px 28px',
            fontFamily: 'var(--font-body)', fontSize: 14,
            fontWeight: 600, color: '#fff', letterSpacing: '0.02em',
            boxShadow: '0 8px 32px rgba(124,58,237,0.4)',
          }}>
            Comenzar →
          </div>
          <span style={{ color: 'var(--text-muted)', fontSize: 12, letterSpacing: '0.08em' }}>
            ↕ Scroll o flechas para navegar
          </span>
        </motion.div>
      </div>

      {/* Right side glow accent line */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 1.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute', right: '38%', top: '15%', bottom: '15%',
          width: 1,
          background: 'linear-gradient(180deg, transparent, rgba(124,58,237,0.5), rgba(34,211,238,0.3), transparent)',
          zIndex: 5,
          transformOrigin: 'top',
        }}
      />
    </div>
  )
}
