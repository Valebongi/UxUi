import { motion } from 'framer-motion'
import BackgroundSystem from '../components/BackgroundSystem'

const glows = [
  { color: '#7C3AED', x: '-8%', y: '-10%', size: '55vw', opacity: 0.18, duration: 22 },
  { color: '#22D3EE', x: '65%', y: '60%', size: '40vw', opacity: 0.08, duration: 28, delay: 8 },
]

function DesktopWorkspace() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', width: '100%', height: '100%',
      background: '#06070F', fontSize: 9, overflow: 'hidden',
    }}>
      {/* Title bar */}
      <div style={{
        height: 26, background: '#0A0C1A',
        display: 'flex', alignItems: 'center', padding: '0 10px', gap: 6,
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {['#EF4444', '#F59E0B', '#10B981'].map(c => (
            <div key={c} style={{ width: 7, height: 7, borderRadius: '50%', background: c, opacity: 0.7 }} />
          ))}
        </div>
        <div style={{ flex: 1 }} />
        {['File', 'Edit', 'View', 'Window', 'Help'].map(m => (
          <span key={m} style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, fontFamily: 'var(--font-body)', padding: '0 6px' }}>{m}</span>
        ))}
      </div>

      {/* Main workspace */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Left tool sidebar */}
        <div style={{
          width: 42, background: '#080A18',
          borderRight: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0', gap: 6,
        }}>
          {['▶', '◈', '⬡', '◆', '⊞', '◎', '⊕'].map((icon, i) => (
            <div
              key={i}
              style={{
                width: 28, height: 28, borderRadius: 6,
                background: i === 0 ? 'rgba(124,58,237,0.25)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${i === 0 ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.06)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: i === 0 ? '#A855F7' : 'rgba(255,255,255,0.3)',
                fontSize: 10, cursor: 'default',
              }}
            >{icon}</div>
          ))}
        </div>

        {/* Main canvas */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#070910' }}>
          {/* Grid */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }} />

          {/* Canvas elements */}
          <div
            style={{
              position: 'absolute', top: '15%', left: '12%',
              width: 200, height: 120,
              background: 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.3)',
              borderRadius: 10, padding: 12,
            }}
          >
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 8, marginBottom: 8 }}>Frame 1</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
              {[...Array(4)].map((_, i) => (
                <div key={i} style={{ height: 28, background: `rgba(${i%2===0?'124,58,237':'34,211,238'},0.2)`, borderRadius: 4 }} />
              ))}
            </div>
          </div>

          <div
            style={{
              position: 'absolute', top: '45%', left: '35%',
              width: 180, height: 90,
              background: 'rgba(34,211,238,0.08)',
              border: '1px solid rgba(34,211,238,0.25)',
              borderRadius: 8, padding: 10,
            }}
          >
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 8, marginBottom: 6 }}>Component</div>
            <div style={{ height: 20, background: 'rgba(34,211,238,0.15)', borderRadius: 4, marginBottom: 5 }} />
            <div style={{ height: 20, background: 'rgba(168,85,247,0.15)', borderRadius: 4 }} />
          </div>

          <div
            style={{
              position: 'absolute', bottom: '20%', right: '15%',
              width: 140, height: 80,
              background: 'rgba(168,85,247,0.1)',
              border: '1.5px dashed rgba(168,85,247,0.3)',
              borderRadius: 6, padding: 8,
            }}
          >
            <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 8, marginBottom: 6 }}>Auto Layout</div>
            <div style={{ display: 'flex', gap: 4 }}>
              {[...Array(3)].map((_, i) => (
                <div key={i} style={{ flex: 1, height: 28, background: 'rgba(168,85,247,0.2)', borderRadius: 3 }} />
              ))}
            </div>
          </div>
        </div>

        {/* Right inspector */}
        <div style={{
          width: 160, background: '#080A18',
          borderLeft: '1px solid rgba(255,255,255,0.05)',
          padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          {/* Section headers */}
          {['Design', 'Prototype', 'Inspect'].map((tab, i) => (
            <span key={tab} style={{
              color: i === 0 ? '#A855F7' : 'rgba(255,255,255,0.3)',
              fontSize: 8, fontFamily: 'var(--font-body)', fontWeight: 600,
              borderBottom: i === 0 ? '1px solid rgba(168,85,247,0.4)' : 'none',
              paddingBottom: 4, letterSpacing: '0.06em', cursor: 'default',
            }}>{tab}</span>
          ))}

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 8 }}>
            {[
              { label: 'W', val: '200' },
              { label: 'H', val: '120' },
              { label: 'X', val: '144' },
              { label: 'Y', val: '87' },
              { label: 'R', val: '10' },
            ].map(({ label, val }) => (
              <div key={label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginBottom: 6,
              }}>
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 8, fontFamily: 'var(--font-body)' }}>{label}</span>
                <div style={{
                  width: 50, height: 14, background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)', borderRadius: 3,
                  display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 4,
                }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 8, fontFamily: 'var(--font-body)' }}>{val}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 8 }}>
            <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 8, marginBottom: 8, fontFamily: 'var(--font-body)', letterSpacing: '0.06em' }}>FILL</div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <div style={{ width: 16, height: 16, borderRadius: 3, background: 'linear-gradient(135deg,#7C3AED,#22D3EE)', flexShrink: 0 }} />
              <div style={{ flex: 1, height: 12, background: 'rgba(255,255,255,0.04)', borderRadius: 2 }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom panel / timeline */}
      <div style={{
        height: 60, background: '#09080F',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '6px 12px',
        display: 'flex', flexDirection: 'column', gap: 4,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
          {['Layers', 'Assets', 'Plugins'].map((tab, i) => (
            <span key={tab} style={{
              color: i === 0 ? '#A855F7' : 'rgba(255,255,255,0.3)',
              fontSize: 8, fontFamily: 'var(--font-body)', fontWeight: 600,
              cursor: 'default', padding: '2px 6px',
              background: i === 0 ? 'rgba(124,58,237,0.15)' : 'transparent',
              borderRadius: 4,
            }}>{tab}</span>
          ))}
          <div style={{ flex: 1 }} />
          <div style={{
            height: 4, width: 60, background: 'rgba(255,255,255,0.05)',
            borderRadius: 2, overflow: 'hidden',
          }}>
            <div style={{ height: '100%', width: '55%', background: 'linear-gradient(90deg,#7C3AED,#22D3EE)', borderRadius: 2 }} />
          </div>
        </div>
        {/* Layer items */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flex: 1 }}>
          {['Frame 1', 'Component', 'Auto Layout', 'Background', 'Grid'].map((item, i) => (
            <div key={item} style={{
              display: 'flex', alignItems: 'center', gap: 4,
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 4, padding: '3px 8px',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: 1, background: `rgba(${i%3===0?'124,58,237':i%3===1?'34,211,238':'168,85,247'},0.6)` }} />
              <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 7, fontFamily: 'var(--font-body)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Slide07() {
  return (
    <div className="slide">
      <BackgroundSystem glows={glows} />

      <div style={{
        position: 'relative', zIndex: 10, width: '100%', height: '100%',
        display: 'flex', alignItems: 'center',
        padding: '0 6%', gap: '4%',
      }}>
        {/* Left text */}
        <div style={{ flex: '0 0 auto', maxWidth: 320 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'inline-flex', gap: 8,
              background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)',
              borderRadius: 100, padding: '5px 14px', marginBottom: 20,
            }}
          >
            <span style={{ color: '#A855F7', fontSize: 11, fontFamily: 'var(--font-body)', letterSpacing: '0.1em', fontWeight: 500 }}>SLIDE 06</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-title)',
              fontSize: 'clamp(28px, 3.8vw, 56px)',
              fontWeight: 700, lineHeight: 0.92,
              letterSpacing: '-0.04em', color: '#fff',
              marginBottom: 20,
            }}
          >
            Software de
            <br />
            <span className="gradient-text">Escritorio</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}
          >
            {['Más herramientas.', 'Más precisión.', 'Más productividad.'].map((line, i) => (
              <div key={line} style={{
                fontFamily: 'var(--font-title)', fontSize: 'clamp(13px, 1.6vw, 20px)',
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
            El software de escritorio está pensado para productividad y multitarea.
            Paneles, sidebars, timelines — toda la complejidad que mobile no puede ofrecer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}
          >
            {['Multi-panel', 'Drag & drop', 'Keyboard shortcuts', 'Precision tools', 'Multitask'].map(tag => (
              <span key={tag} style={{
                padding: '4px 10px', borderRadius: 6,
                background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)',
                color: '#C084FC', fontSize: 10, fontFamily: 'var(--font-body)', fontWeight: 500,
              }}>{tag}</span>
            ))}
          </motion.div>

          {/* Complexity indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              marginTop: 24, background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 14,
            }}
          >
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, fontFamily: 'var(--font-body)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>Complejidad de UI</div>
            {[
              { label: 'Desktop', value: 95, color: '#7C3AED' },
              { label: 'Web', value: 70, color: '#22D3EE' },
              { label: 'Mobile', value: 40, color: '#A855F7' },
            ].map(({ label, value, color }) => (
              <div key={label} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 9, fontFamily: 'var(--font-body)' }}>{label}</span>
                  <span style={{ color, fontSize: 9, fontFamily: 'var(--font-body)', fontWeight: 600 }}>{value}%</span>
                </div>
                <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                    style={{ height: '100%', background: `linear-gradient(90deg, ${color}, ${color}88)`, borderRadius: 2 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — desktop workspace */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ flex: 1, height: '74vh', maxHeight: 500, minHeight: 360 }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '100%', height: '100%' }}
          >
            <div style={{
              width: '100%', height: '100%',
              borderRadius: 12,
              border: '1px solid rgba(124,58,237,0.35)',
              boxShadow: '0 30px 80px rgba(124,58,237,0.3), 0 0 0 1px rgba(255,255,255,0.04)',
              overflow: 'hidden',
            }}>
              <DesktopWorkspace />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
