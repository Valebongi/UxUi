import { motion } from 'framer-motion'
import BackgroundSystem from '../components/BackgroundSystem'

const glows = [
  { color: '#7C3AED', x: '30%', y: '-20%', size: '70vw', opacity: 0.18, duration: 22 },
  { color: '#22D3EE', x: '50%', y: '60%', size: '45vw', opacity: 0.12, duration: 28, delay: 7 },
]

const concepts = [
  { id: 'contexto', label: 'Contexto', desc: 'Dónde usa el producto el usuario.', icon: '◎', color: '#7C3AED', x: -460, y: -90 },
  { id: 'interaccion', label: 'Interacción', desc: 'Touch, mouse, teclado, gestos.', icon: '◈', color: '#22D3EE', x: 460, y: -70 },
  { id: 'adaptabilidad', label: 'Adaptabilidad', desc: 'La interfaz responde al entorno.', icon: '⬡', color: '#A855F7', x: -440, y: 130 },
  { id: 'consistencia', label: 'Consistencia', desc: 'La identidad visual permanece.', icon: '◆', color: '#67E8F9', x: 440, y: 140 },
]

function ConceptCard({ label, desc, icon, color, x, y, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, filter: 'blur(12px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'absolute',
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${color}44`,
          borderRadius: 16,
          padding: '14px 18px',
          minWidth: 160,
          cursor: 'default',
          boxShadow: `0 0 30px ${color}22`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <span style={{ fontSize: 16, color }}>{icon}</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: '#fff' }}>{label}</span>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, margin: 0 }}>{desc}</p>
      </div>
    </motion.div>
  )
}

export default function Slide03() {
  return (
    <div className="slide">
      <BackgroundSystem glows={glows} />

      {/* Particle dots */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 2, height: 2, borderRadius: '50%',
            background: i % 3 === 0 ? '#7C3AED' : i % 3 === 1 ? '#22D3EE' : '#A855F7',
            left: `${(i * 37 + 5) % 92}%`,
            top: `${(i * 53 + 10) % 88}%`,
            willChange: 'opacity',
          }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.8, ease: 'easeInOut' }}
        />
      ))}

      {/* Concept cards */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
        {concepts.map((c, i) => (
          <ConceptCard key={c.id} {...c} delay={0.6 + i * 0.15} />
        ))}
      </div>

      {/* Center — hero text */}
      <div style={{ position: 'relative', zIndex: 20, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)',
            borderRadius: 100, padding: '5px 14px', marginBottom: 24,
          }}
        >
          <span style={{ color: '#A855F7', fontSize: 11, fontFamily: 'var(--font-body)', letterSpacing: '0.1em', fontWeight: 500 }}>SLIDE 02</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(16px)', scale: 0.9 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          transition={{ delay: 0.1, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: 'clamp(44px, 6vw, 90px)',
            fontWeight: 700, lineHeight: 0.9,
            letterSpacing: '-0.05em',
            marginBottom: 8,
          }}
        >
          <span style={{ color: '#fff' }}>La plataforma</span>
          <br />
          <span className="gradient-text">cambia.</span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(16px)', scale: 0.9 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          transition={{ delay: 0.25, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-title)',
            fontSize: 'clamp(44px, 6vw, 90px)',
            fontWeight: 700, lineHeight: 0.9,
            letterSpacing: '-0.05em',
            color: '#fff',
          }}
        >
          La experiencia
          <br />
          <span className="gradient-text-cyan">evoluciona.</span>
        </motion.h1>
      </div>
    </div>
  )
}
