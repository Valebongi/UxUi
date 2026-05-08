import { motion } from 'framer-motion'
import BackgroundSystem from '../components/BackgroundSystem'

const glows = [
  { color: '#7C3AED', x: '-8%', y: '20%', size: '50vw', opacity: 0.18, duration: 20 },
  { color: '#22D3EE', x: '65%', y: '20%', size: '45vw', opacity: 0.12, duration: 26, delay: 5 },
]

const principles = [
  {
    id: 1,
    icon: '◈',
    title: 'Consistencia',
    color: '#7C3AED',
    colorAlt: '#A855F7',
    items: ['Branding unificado', 'Identidad visual coherente', 'Familiaridad de navegación'],
    desc: 'La experiencia debe sentirse familiar sin importar el dispositivo.',
    delay: 0,
  },
  {
    id: 2,
    icon: '⬡',
    title: 'Adaptabilidad',
    color: '#22D3EE',
    colorAlt: '#67E8F9',
    items: ['Layout responsive', 'Jerarquía dinámica', 'Flexibilidad visual'],
    desc: 'La interfaz debe transformarse según el dispositivo.',
    delay: 0.2,
  },
  {
    id: 3,
    icon: '◎',
    title: 'Usabilidad Contextual',
    color: '#A855F7',
    colorAlt: '#C084FC',
    items: ['Contexto real de uso', 'Accesibilidad', 'Rapidez de interacción'],
    desc: 'El diseño responde al entorno del usuario.',
    delay: 0.4,
  },
]

function PrincipleCard({ icon, title, color, colorAlt, items, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: 'blur(16px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{
        flex: 1,
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(24px)',
        border: `1px solid ${color}33`,
        borderRadius: 24,
        padding: '32px 28px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        boxShadow: `0 20px 60px ${color}18`,
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Top gradient accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${color}, ${colorAlt})`,
      }} />

      {/* Background glow blob */}
      <div style={{
        position: 'absolute', top: -40, right: -40,
        width: 160, height: 160, borderRadius: '50%',
        background: color,
        filter: 'blur(70px)',
        opacity: 0.1,
        pointerEvents: 'none',
      }} />

      {/* Icon */}
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: `linear-gradient(135deg, ${color}33, ${colorAlt}22)`,
        border: `1px solid ${color}44`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 22, color, marginBottom: 20,
      }}>
        {icon}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-title)', fontSize: 20, fontWeight: 700,
        color: '#fff', marginBottom: 8, letterSpacing: '-0.02em',
      }}>
        {title}
      </h3>

      <p style={{
        fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.45)',
        lineHeight: 1.6, marginBottom: 20,
      }}>
        {desc}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.3 + i * 0.1, duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: 10 }}
          >
            <div style={{
              width: 5, height: 5, borderRadius: '50%',
              background: `linear-gradient(135deg, ${color}, ${colorAlt})`,
              flexShrink: 0,
              boxShadow: `0 0 6px ${color}80`,
            }} />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: 12,
              color: 'rgba(255,255,255,0.6)',
            }}>{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function ConnectionLines() {
  return (
    <svg
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 1,
      }}
    >
      <motion.line
        x1="33%" y1="55%" x2="50%" y2="55%"
        stroke="rgba(124,58,237,0.2)" strokeWidth="1"
        strokeDasharray="4 4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      />
      <motion.line
        x1="67%" y1="55%" x2="50%" y2="55%"
        stroke="rgba(34,211,238,0.2)" strokeWidth="1"
        strokeDasharray="4 4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />
    </svg>
  )
}

export default function Slide04() {
  return (
    <div className="slide">
      <BackgroundSystem glows={glows} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <ConnectionLines />

      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '40px 6%',
        gap: 36,
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex', gap: 8,
              background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)',
              borderRadius: 100, padding: '5px 14px', marginBottom: 18,
            }}
          >
            <span style={{ color: '#A855F7', fontSize: 11, fontFamily: 'var(--font-body)', letterSpacing: '0.1em', fontWeight: 500 }}>SLIDE 03</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(28px, 4vw, 60px)',
              fontWeight: 700, lineHeight: 1,
              letterSpacing: '-0.04em', color: '#fff',
            }}
          >
            Principios del Diseño
            <span className="gradient-text"> Multiplataforma</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: 'var(--font-body)', fontSize: 14,
              color: 'var(--text-muted)', marginTop: 10,
            }}
          >
            Diseñar para distintos dispositivos sin perder coherencia visual.
          </motion.p>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', gap: 20, width: '100%', maxWidth: 1000 }}>
          {principles.map(p => <PrincipleCard key={p.id} {...p} />)}
        </div>
      </div>
    </div>
  )
}
