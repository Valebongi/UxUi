import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'
import BackgroundSystem from '../components/BackgroundSystem'

const glows = [
  { color: '#7C3AED', x: '-12%', y: '10%', size: '55vw', opacity: 0.20, duration: 20 },
  { color: '#22D3EE', x: '50%', y: '-10%', size: '40vw', opacity: 0.08, duration: 28, delay: 6 },
]

function SidebarItem({ icon, label, active }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '8px 12px', borderRadius: 8,
      background: active ? 'rgba(124,58,237,0.2)' : 'transparent',
      border: `1px solid ${active ? 'rgba(124,58,237,0.3)' : 'transparent'}`,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    }}>
      <div style={{
        width: 16, height: 16, borderRadius: 4,
        background: active ? 'linear-gradient(135deg,#7C3AED,#A855F7)' : 'rgba(255,255,255,0.15)',
      }} />
      <span style={{ color: active ? '#C084FC' : 'rgba(255,255,255,0.45)', fontSize: 11, fontFamily: 'var(--font-body)' }}>{label}</span>
      {active && <div style={{ marginLeft: 'auto', width: 5, height: 5, borderRadius: '50%', background: '#A855F7' }} />}
    </div>
  )
}

function MiniChart({ color, data }) {
  const max = Math.max(...data)
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 40 }}>
      {data.map((val, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${(val / max) * 100}%` }}
          transition={{ delay: 0.5 + i * 0.05, duration: 0.5, ease: 'easeOut' }}
          style={{ flex: 1, background: `linear-gradient(180deg, ${color}, ${color}44)`, borderRadius: '2px 2px 0 0' }}
        />
      ))}
    </div>
  )
}

function WebDashboard() {
  const [hovered, setHovered] = useState(null)

  const cards = [
    { id: 0, label: 'Usuarios activos', value: '24.8K', change: '+12%', color: '#7C3AED', data: [6,8,5,9,7,11,10,13,12,15] },
    { id: 1, label: 'Sesiones', value: '142K', change: '+8%', color: '#22D3EE', data: [10,8,12,9,14,11,16,13,18,15] },
    { id: 2, label: 'Conversión', value: '3.4%', change: '+2%', color: '#A855F7', data: [3,4,3,5,4,6,5,7,6,8] },
  ]

  return (
    <div style={{
      display: 'flex', width: '100%', height: '100%',
      background: '#070A1C', overflow: 'hidden', fontSize: 11,
    }}>
      {/* Sidebar */}
      <div style={{
        width: 180, background: '#0A0D22',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 4,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, padding: '4px 8px' }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(135deg,#7C3AED,#22D3EE)' }} />
          <span style={{ color: '#fff', fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-body)' }}>Analytix</span>
        </div>
        {['Dashboard', 'Analytics', 'Usuarios', 'Productos', 'Reportes'].map((item, i) => (
          <SidebarItem key={item} label={item} active={i === 0} />
        ))}
        <div style={{ marginTop: 'auto' }}>
          <SidebarItem label="Configuración" />
          <SidebarItem label="Ayuda" />
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ height: 22, width: 120, background: 'rgba(255,255,255,0.06)', borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)' }} />
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10, fontFamily: 'var(--font-body)' }}>← Dashboard</span>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ height: 22, width: 60, background: 'rgba(124,58,237,0.2)', borderRadius: 6, border: '1px solid rgba(124,58,237,0.3)' }} />
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#A855F7)' }} />
          </div>
        </div>

        {/* Analytics cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
          {cards.map(card => (
            <motion.div
              key={card.id}
              onHoverStart={() => setHovered(card.id)}
              onHoverEnd={() => setHovered(null)}
              animate={{ y: hovered === card.id ? -4 : 0 }}
              transition={{ duration: 0.2 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${hovered === card.id ? card.color + '44' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: 12, padding: '12px 14px',
                boxShadow: hovered === card.id ? `0 8px 24px ${card.color}22` : 'none',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                cursor: 'default',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{card.label}</span>
                <span style={{ color: '#4ADE80', fontSize: 9, fontFamily: 'var(--font-body)', fontWeight: 600 }}>{card.change}</span>
              </div>
              <div style={{ color: '#fff', fontSize: 18, fontFamily: 'var(--font-title)', fontWeight: 700, marginBottom: 10 }}>{card.value}</div>
              <MiniChart color={card.color} data={card.data} />
            </motion.div>
          ))}
        </div>

        {/* Table area */}
        <div style={{
          flex: 1, background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, overflow: 'hidden',
        }}>
          <div style={{
            padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10, fontFamily: 'var(--font-body)', fontWeight: 600 }}>ACTIVIDAD RECIENTE</span>
            <div style={{ height: 18, width: 50, background: 'rgba(255,255,255,0.05)', borderRadius: 4 }} />
          </div>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{
              padding: '8px 14px', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: `rgba(${i%2===0?'124,58,237':'34,211,238'},0.4)` }} />
              <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3 }} />
              <div style={{ width: 40, height: 6, background: 'rgba(255,255,255,0.04)', borderRadius: 3 }} />
              <div style={{
                width: 32, height: 14, borderRadius: 4,
                background: i % 3 === 0 ? 'rgba(74,222,128,0.15)' : 'rgba(124,58,237,0.15)',
              }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BrowserFrame({ children }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#0C0F24',
      borderRadius: 14,
      border: '1px solid rgba(255,255,255,0.1)',
      overflow: 'hidden',
      boxShadow: '0 40px 100px rgba(124,58,237,0.35), 0 0 0 1px rgba(255,255,255,0.05)',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Browser chrome */}
      <div style={{
        height: 38, background: '#090C1E',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        display: 'flex', alignItems: 'center', padding: '0 14px', gap: 12,
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#EF4444', '#F59E0B', '#10B981'].map(c => (
            <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, opacity: 0.7 }} />
          ))}
        </div>
        <div style={{
          flex: 1, height: 20, background: 'rgba(255,255,255,0.05)',
          borderRadius: 5, border: '1px solid rgba(255,255,255,0.07)',
          display: 'flex', alignItems: 'center', paddingLeft: 8, gap: 6,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80', opacity: 0.8 }} />
          <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 9, fontFamily: 'var(--font-body)' }}>analytix.app/dashboard</span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[...Array(3)].map((_, i) => <div key={i} style={{ width: 20, height: 18, borderRadius: 4, background: 'rgba(255,255,255,0.04)' }} />)}
        </div>
      </div>

      {/* Page content */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  )
}

export default function Slide05() {
  return (
    <div className="slide">
      <BackgroundSystem glows={glows} />

      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', alignItems: 'center',
        padding: '0 6%',
        gap: '4%',
      }}>
        {/* Left text */}
        <div style={{ flex: '0 0 300px', display: 'flex', flexDirection: 'column' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'inline-flex', gap: 8, alignSelf: 'flex-start',
              background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)',
              borderRadius: 100, padding: '5px 14px', marginBottom: 20,
            }}
          >
            <span style={{ color: '#A855F7', fontSize: 11, fontFamily: 'var(--font-body)', letterSpacing: '0.1em', fontWeight: 500 }}>SLIDE 04</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(32px, 4vw, 60px)',
              fontWeight: 700, lineHeight: 0.92,
              letterSpacing: '-0.04em', color: '#fff',
              marginBottom: 20,
            }}
          >
            Diseño
            <br />
            <span className="gradient-text">Web</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}
          >
            {['Más espacio.', 'Más exploración.', 'Más información simultánea.'].map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.6 }}
                style={{
                  fontFamily: 'var(--font-title)', fontSize: 'clamp(13px, 1.6vw, 20px)',
                  fontWeight: 600, color: i === 0 ? '#fff' : i === 1 ? '#CBD5E1' : '#94A3B8',
                }}
              >{line}</motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              fontFamily: 'var(--font-body)', fontSize: 13,
              color: 'var(--text-muted)', lineHeight: 1.7,
            }}
          >
            El diseño web prioriza exploración y acceso a grandes cantidades
            de información. Mouse + teclado permiten layouts complejos.
          </motion.p>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 24 }}
          >
            {['Sidebar', 'Multi-panel', 'Hover states', 'Tooltips', 'Grids'].map(tag => (
              <span key={tag} style={{
                padding: '4px 10px', borderRadius: 6,
                background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)',
                color: '#C084FC', fontSize: 10, fontFamily: 'var(--font-body)', fontWeight: 500,
              }}>{tag}</span>
            ))}
          </motion.div>
        </div>

        {/* Right — browser window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 30, filter: 'blur(16px)' }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ flex: 1, height: '72vh', maxHeight: 520, minHeight: 380 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0], rotateX: [0, 1, 0], rotateY: [0, -1.5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '100%', height: '100%' }}
          >
            <BrowserFrame>
              <WebDashboard />
            </BrowserFrame>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
