import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import BackgroundSystem from '../components/BackgroundSystem'

const glows = [
  { color: '#7C3AED', x: '30%', y: '-15%', size: '65vw', opacity: 0.22, duration: 18 },
  { color: '#22D3EE', x: '55%', y: '55%', size: '40vw', opacity: 0.10, duration: 26, delay: 5 },
]

function MobileScreen() {
  const activeNav = 0

  const navItems = [
    { icon: '⊞', label: 'Inicio' },
    { icon: '◎', label: 'Explorar' },
    { icon: '♪', label: 'Música' },
    { icon: '☰', label: 'Perfil' },
  ]

  const cards = [
    { title: 'En tendencia', subtitle: 'Top 50 global', color: '#7C3AED' },
    { title: 'Recién añadido', subtitle: 'Nuevos lanzamientos', color: '#22D3EE' },
    { title: 'Para ti', subtitle: 'Recomendado', color: '#A855F7' },
  ]

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', width: '100%', height: '100%',
      background: '#070A1C', overflow: 'hidden',
    }}>
      {/* Status bar */}
      <div style={{
        height: 28, background: 'rgba(5,4,18,0.95)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 16px',
      }}>
        <span style={{ color: '#fff', fontSize: 9, fontFamily: 'var(--font-body)', fontWeight: 600 }}>9:41</span>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{ width: 3, height: 4 + i * 2, background: i < 3 ? '#fff' : 'rgba(255,255,255,0.3)', borderRadius: 1 }} />
          ))}
          <div style={{ width: 12, height: 6, border: '1px solid rgba(255,255,255,0.5)', borderRadius: 2, marginLeft: 4, display: 'flex', alignItems: 'center', padding: 1 }}>
            <div style={{ width: '70%', height: '100%', background: '#4ADE80', borderRadius: 1 }} />
          </div>
        </div>
      </div>

      {/* Header */}
      <div style={{
        padding: '12px 16px 8px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, fontFamily: 'var(--font-body)' }}>Buenas tardes,</div>
          <div style={{ color: '#fff', fontSize: 13, fontFamily: 'var(--font-title)', fontWeight: 700 }}>Usuario</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 10 }}>🔔</span>
          </div>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#A855F7)' }} />
        </div>
      </div>

      {/* Search bar */}
      <div style={{ padding: '0 14px 12px' }}>
        <div style={{
          height: 32, background: 'rgba(255,255,255,0.06)',
          borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', alignItems: 'center', padding: '0 10px', gap: 6,
        }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10 }}>🔍</span>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 10, fontFamily: 'var(--font-body)' }}>Buscar canciones...</span>
        </div>
      </div>

      {/* Content feed */}
      <div style={{ flex: 1, padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'hidden' }}>
        {cards.map((card, i) => (
          <div
            key={card.title}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 14, padding: 12,
              display: 'flex', gap: 10, alignItems: 'center',
              cursor: 'default',
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 10, flexShrink: 0,
              background: `linear-gradient(135deg, ${card.color}80, ${card.color}30)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: 16 }}>🎵</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#fff', fontSize: 11, fontFamily: 'var(--font-body)', fontWeight: 600, marginBottom: 3 }}>{card.title}</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, fontFamily: 'var(--font-body)' }}>{card.subtitle}</div>
            </div>
            <div style={{
              width: 28, height: 28, borderRadius: '50%',
              background: `rgba(${i===0?'124,58,237':i===1?'34,211,238':'168,85,247'},0.2)`,
              border: `1px solid rgba(${i===0?'124,58,237':i===1?'34,211,238':'168,85,247'},0.35)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: 10 }}>▶</span>
            </div>
          </div>
        ))}

        {/* Player mini */}
        <div style={{
          marginTop: 4,
          background: 'rgba(124,58,237,0.15)',
          border: '1px solid rgba(124,58,237,0.3)',
          borderRadius: 14, padding: '10px 12px',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg,#7C3AED,#22D3EE)', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ color: '#fff', fontSize: 10, fontFamily: 'var(--font-body)', fontWeight: 600, marginBottom: 4 }}>Reproduciendo ahora</div>
            <div style={{ height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
              <div style={{ height: '100%', width: '45%', background: 'linear-gradient(90deg,#7C3AED,#22D3EE)', borderRadius: 2 }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['⏮', '⏸', '⏭'].map((ctrl, i) => (
              <div key={i} style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#fff' }}>{ctrl}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div style={{
        height: 58, background: 'rgba(5,4,20,0.98)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex', alignItems: 'center',
        paddingBottom: 6,
      }}>
        {navItems.map((item, i) => (
          <div
            key={item.label}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: 'default' }}
          >
            {i === activeNav && (
              <div style={{
                position: 'absolute', width: 32, height: 3, background: '#A855F7',
                borderRadius: '0 0 3px 3px', top: 0,
                boxShadow: '0 0 8px rgba(168,85,247,0.8)',
              }} />
            )}
            <span style={{ fontSize: 15, color: i === activeNav ? '#C084FC' : 'rgba(255,255,255,0.3)' }}>{item.icon}</span>
            <span style={{
              fontSize: 7, fontFamily: 'var(--font-body)', fontWeight: 500,
              color: i === activeNav ? '#C084FC' : 'rgba(255,255,255,0.25)',
            }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Slide06() {
  return (
    <div className="slide">
      <BackgroundSystem glows={glows} />

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
              fontSize: 'clamp(34px, 4.2vw, 64px)',
              fontWeight: 700, lineHeight: 0.92,
              letterSpacing: '-0.04em', color: '#fff',
              marginBottom: 20,
            }}
          >
            Diseño
            <br />
            <span className="gradient-text">Mobile</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}
          >
            {['Menos espacio.', 'Más velocidad.', 'Más foco.'].map((line, i) => (
              <div key={line} style={{
                fontFamily: 'var(--font-title)', fontSize: 'clamp(14px, 1.8vw, 22px)',
                fontWeight: 600, color: i === 0 ? '#fff' : i === 1 ? '#CBD5E1' : '#94A3B8',
              }}>{line}</div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontFamily: 'var(--font-body)', fontSize: 13,
              color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24,
            }}
          >
            En mobile, el usuario está en movimiento, usa una sola mano
            y necesita interacciones rápidas. La navegación táctil es clave.
          </motion.p>

          {/* Touch zone visual */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <div style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12, padding: '14px 16px',
            }}>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, fontFamily: 'var(--font-body)', letterSpacing: '0.1em', marginBottom: 10, textTransform: 'uppercase' }}>Zona de alcance del pulgar</div>
              <div style={{ position: 'relative', height: 60, background: 'rgba(255,255,255,0.03)', borderRadius: 8, overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute', bottom: 0, left: '10%', right: '10%', height: '75%',
                  background: 'rgba(74,222,128,0.15)', border: '1px dashed rgba(74,222,128,0.3)', borderRadius: '8px 8px 0 0',
                }}>
                  <span style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', color: 'rgba(74,222,128,0.7)', fontSize: 8, fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}>✓ Zona óptima</span>
                </div>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '25%',
                  background: 'rgba(239,68,68,0.1)', border: '1px dashed rgba(239,68,68,0.25)',
                  borderRadius: '0 0 0 0',
                }}>
                  <span style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', color: 'rgba(239,68,68,0.6)', fontSize: 8, fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}>⚠ Difícil alcance</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}
          >
            {['Bottom nav', 'Touch gestures', 'Swipe', 'Haptic feedback'].map(tag => (
              <span key={tag} style={{
                padding: '4px 10px', borderRadius: 6,
                background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)',
                color: '#67E8F9', fontSize: 10, fontFamily: 'var(--font-body)', fontWeight: 500,
              }}>{tag}</span>
            ))}
          </motion.div>
        </div>

        {/* Right — phone mockup */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow halo */}
            <div style={{
              position: 'absolute',
              width: 320, height: 620,
              borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(124,58,237,0.25), transparent 70%)',
              filter: 'blur(30px)',
              transform: 'translate(-50%, -50%)',
              left: '50%', top: '50%',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative' }}>
              {/* Phone shell */}
              <div style={{
                width: 240, height: 500,
                borderRadius: 36,
                border: '2px solid rgba(124,58,237,0.5)',
                background: '#050816',
                boxShadow: '0 40px 100px rgba(124,58,237,0.4), 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 20px rgba(124,58,237,0.05)',
                overflow: 'hidden',
                position: 'relative',
              }}>
                {/* Notch */}
                <div style={{
                  position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                  width: 80, height: 24, background: '#050816', borderRadius: '0 0 16px 16px',
                  zIndex: 20, border: '1px solid rgba(255,255,255,0.05)',
                }} />
                <MobileScreen />
              </div>

              {/* Side buttons */}
              <div style={{
                position: 'absolute', right: -3, top: 100, width: 3, height: 40,
                background: 'rgba(255,255,255,0.15)', borderRadius: '0 2px 2px 0',
              }} />
              <div style={{
                position: 'absolute', left: -3, top: 80, width: 3, height: 28,
                background: 'rgba(255,255,255,0.15)', borderRadius: '2px 0 0 2px',
              }} />
              <div style={{
                position: 'absolute', left: -3, top: 116, width: 3, height: 28,
                background: 'rgba(255,255,255,0.15)', borderRadius: '2px 0 0 2px',
              }} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
