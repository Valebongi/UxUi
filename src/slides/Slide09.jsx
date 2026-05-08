import { motion } from 'framer-motion'
import BackgroundSystem from '../components/BackgroundSystem'

const glows = [
  { color: '#7C3AED', x: '20%', y: '-10%', size: '70vw', opacity: 0.20, duration: 22 },
  { color: '#22D3EE', x: '55%', y: '55%', size: '50vw', opacity: 0.10, duration: 28, delay: 6 },
]

function SpotifyDesktop({ isActive }) {
  return (
    <div style={{
      width: '100%', height: '100%', background: '#070A1C',
      display: 'flex', fontSize: 8, overflow: 'hidden',
    }}>
      {/* Sidebar */}
      <div style={{ width: 120, background: '#050816', padding: '12px 8px', display: 'flex', flexDirection: 'column', gap: 5 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 10 }}>
          <div style={{ width: 18, height: 18, borderRadius: 4, background: 'linear-gradient(135deg,#1DB954,#0D7A34)' }} />
          <span style={{ color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 8 }}>Spotify</span>
        </div>
        {['Inicio', 'Buscar', 'Tu biblioteca', 'Playlists'].map((item, i) => (
          <div key={item} style={{
            padding: '5px 6px', borderRadius: 5, display: 'flex', alignItems: 'center', gap: 5,
            background: i === 0 ? 'rgba(29,185,84,0.15)' : 'transparent',
          }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: i === 0 ? '#1DB954' : 'rgba(255,255,255,0.2)' }} />
            <span style={{ color: i === 0 ? '#1DB954' : 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}>{item}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 700 }}>Buenas noches</span>
          <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'linear-gradient(135deg,#7C3AED,#A855F7)' }} />
        </div>

        {/* Featured row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 5 }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,255,255,0.06)', borderRadius: 5, overflow: 'hidden', height: 28,
            }}>
              <div style={{ width: 28, height: 28, background: `rgba(${i%2===0?'29,185,84':'124,58,237'},0.6)`, flexShrink: 0 }} />
              <span style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)', fontSize: 7 }}>Playlist {i+1}</span>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', gap: 6, flex: 1 }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{
              flex: 1, background: 'rgba(255,255,255,0.04)',
              borderRadius: 6, padding: 6,
            }}>
              <div style={{ width: '100%', aspectRatio: 1, borderRadius: 4, background: `linear-gradient(135deg,rgba(${i%2===0?'29,185,84':'124,58,237'},0.5),rgba(168,85,247,0.2))`, marginBottom: 5 }} />
              <div style={{ height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2, marginBottom: 3 }} />
              <div style={{ height: 3, width: '70%', background: 'rgba(255,255,255,0.07)', borderRadius: 2 }} />
            </div>
          ))}
        </div>

        {/* Player */}
        <div style={{
          height: 36, background: 'rgba(29,185,84,0.1)',
          border: '1px solid rgba(29,185,84,0.2)', borderRadius: 7,
          display: 'flex', alignItems: 'center', padding: '0 8px', gap: 8,
        }}>
          <div style={{ width: 22, height: 22, borderRadius: 4, background: 'linear-gradient(135deg,#1DB954,#0D7A34)' }} />
          <div style={{ flex: 1 }}>
            <div style={{ height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 2, marginBottom: 3 }}>
              <div style={{ height: '100%', width: '38%', background: '#1DB954', borderRadius: 2 }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {['⏮','⏸','⏭'].map((c,i) => <span key={i} style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>{c}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}

function SpotifyTablet({ isActive }) {
  return (
    <div style={{
      width: '100%', height: '100%', background: '#070A1C',
      display: 'flex', flexDirection: 'column', fontSize: 8, overflow: 'hidden',
    }}>
      <div style={{ height: 32, background: '#050816', display: 'flex', alignItems: 'center', padding: '0 12px', gap: 10, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ width: 16, height: 16, borderRadius: 4, background: 'linear-gradient(135deg,#1DB954,#0D7A34)' }} />
        <div style={{ flex: 1 }} />
        {['Inicio','Buscar','Biblioteca'].map((item,i) => (
          <span key={item} style={{ color: i===0?'#1DB954':'rgba(255,255,255,0.35)', fontSize: 8, fontFamily:'var(--font-body)', padding:'2px 6px', background:i===0?'rgba(29,185,84,0.1)':'transparent', borderRadius:3 }}>{item}</span>
        ))}
        <div style={{ width:16,height:16,borderRadius:'50%',background:'linear-gradient(135deg,#7C3AED,#A855F7)' }} />
      </div>
      <div style={{ flex:1, padding:'10px 12px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, overflow:'hidden' }}>
        {[...Array(4)].map((_,i) => (
          <div key={i} style={{ background:'rgba(255,255,255,0.04)', borderRadius:8, padding:8 }}>
            <div style={{ width:'100%', height:50, borderRadius:6, background:`linear-gradient(135deg,rgba(${i%2===0?'29,185,84':'124,58,237'},0.4),rgba(168,85,247,0.15))`, marginBottom:6 }} />
            <div style={{ height:4, background:'rgba(255,255,255,0.12)', borderRadius:2, marginBottom:4 }} />
            <div style={{ height:3, width:'65%', background:'rgba(255,255,255,0.06)', borderRadius:2 }} />
          </div>
        ))}
      </div>
      <div style={{ height:32, background:'rgba(29,185,84,0.08)', borderTop:'1px solid rgba(29,185,84,0.15)', display:'flex', alignItems:'center', padding:'0 12px', gap:8 }}>
        <div style={{ width:22,height:22,borderRadius:4,background:'linear-gradient(135deg,#1DB954,#0D7A34)' }} />
        <div style={{ flex:1, height:3, background:'rgba(255,255,255,0.08)', borderRadius:2 }}>
          <div style={{ height:'100%', width:'42%', background:'#1DB954', borderRadius:2 }} />
        </div>
        <div style={{ display:'flex',gap:4 }}>
          {['⏮','⏸','⏭'].map((c,i)=><span key={i} style={{ fontSize:8,color:'rgba(255,255,255,0.5)' }}>{c}</span>)}
        </div>
      </div>
    </div>
  )
}

function SpotifyMobile({ isActive }) {
  return (
    <div style={{
      width:'100%',height:'100%',background:'#070A1C',
      display:'flex',flexDirection:'column',fontSize:8,overflow:'hidden',
    }}>
      <div style={{ padding:'10px 12px 6px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span style={{ color:'#fff',fontFamily:'var(--font-body)',fontWeight:700,fontSize:9 }}>Buenas noches</span>
        <div style={{ width:18,height:18,borderRadius:'50%',background:'linear-gradient(135deg,#7C3AED,#A855F7)' }} />
      </div>
      <div style={{ flex:1, padding:'0 12px', display:'flex', flexDirection:'column', gap:7, overflow:'hidden' }}>
        {[...Array(4)].map((_,i)=>(
          <div key={i} style={{ display:'flex', gap:8, alignItems:'center', background:'rgba(255,255,255,0.03)', borderRadius:7, padding:'7px 9px' }}>
            <div style={{ width:34,height:34,borderRadius:6,flexShrink:0,background:`linear-gradient(135deg,rgba(${i%2===0?'29,185,84':'124,58,237'},0.5),rgba(168,85,247,0.2))` }} />
            <div style={{ flex:1 }}>
              <div style={{ height:5,background:'rgba(255,255,255,0.15)',borderRadius:2,marginBottom:4,width:'75%' }} />
              <div style={{ height:4,background:'rgba(255,255,255,0.07)',borderRadius:2,width:'50%' }} />
            </div>
            <span style={{ color:'rgba(255,255,255,0.3)',fontSize:10 }}>▶</span>
          </div>
        ))}
      </div>
      <div style={{ height:48,background:'rgba(5,4,20,0.98)',borderTop:'1px solid rgba(255,255,255,0.06)',display:'flex',alignItems:'center',justifyContent:'space-around' }}>
        {['⊞','◎','♪','☰'].map((icon,i)=>(
          <div key={i} style={{ display:'flex',flexDirection:'column',alignItems:'center',gap:2 }}>
            <span style={{ fontSize:13,color:i===0?'#1DB954':'rgba(255,255,255,0.3)' }}>{icon}</span>
            <span style={{ fontSize:6,color:i===0?'#1DB954':'rgba(255,255,255,0.2)',fontFamily:'var(--font-body)' }}>{['Inicio','Buscar','Música','Perfil'][i]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function DeviceCard({ type, children, delay }) {
  const sizes = {
    desktop: { width: 360, height: 260, label: 'Desktop' },
    tablet: { width: 240, height: 300, label: 'Tablet' },
    mobile: { width: 150, height: 300, label: 'Mobile' },
  }
  const s = sizes[type]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: 'blur(16px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, cursor: 'default' }}
    >
      <div style={{
        width: s.width, height: s.height,
        borderRadius: type === 'mobile' ? 24 : 12,
        border: '1.5px solid rgba(124,58,237,0.35)',
        background: '#070A1C',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(124,58,237,0.25)',
      }}>
        {children}
      </div>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.35)' }}>{s.label}</span>
    </motion.div>
  )
}

export default function Slide09() {

  return (
    <div className="slide">
      <BackgroundSystem glows={glows} />


      <div style={{
        position:'relative',zIndex:10,width:'100%',height:'100%',
        display:'flex',flexDirection:'column',
        alignItems:'center',justifyContent:'center',
        padding:'30px 5%',gap:28,
      }}>
        {/* Header */}
        <div style={{ textAlign:'center' }}>
          <motion.h1
            initial={{ opacity:0, y:30, filter:'blur(10px)' }}
            animate={{ opacity:1, y:0, filter:'blur(0px)' }}
            transition={{ delay:0.1, duration:0.9, ease:[0.22,1,0.36,1] }}
            style={{
              fontFamily:'var(--font-title)',
              fontSize:'clamp(24px,3.5vw,52px)',
              fontWeight:700,lineHeight:0.95,letterSpacing:'-0.04em',color:'#fff',
            }}
          >
            Spotify como
            <span className="gradient-text"> ecosistema</span>
            <br />
            <span style={{ color:'var(--text-muted)',fontSize:'clamp(14px,2vw,28px)',fontWeight:400 }}>Una identidad visual. Múltiples experiencias.</span>
          </motion.h1>
        </div>

        {/* Devices */}
        <div style={{ display:'flex',gap:24,alignItems:'flex-end' }}>
          <DeviceCard type="desktop" delay={0.3}>
            <SpotifyDesktop />
          </DeviceCard>
          <DeviceCard type="tablet" delay={0.5}>
            <SpotifyTablet />
          </DeviceCard>
          <DeviceCard type="mobile" delay={0.7}>
            <SpotifyMobile />
          </DeviceCard>
        </div>

        {/* Sync pulse label */}
        <div style={{
          display:'flex',alignItems:'center',gap:8,
          background:'rgba(124,58,237,0.1)',border:'1px solid rgba(124,58,237,0.25)',
          borderRadius:100,padding:'5px 16px',
        }}>
          <div style={{ width:6,height:6,borderRadius:'50%',background:'#A855F7' }} />
          <span style={{ color:'rgba(255,255,255,0.5)',fontSize:11,fontFamily:'var(--font-body)' }}>Experiencia sincronizada entre plataformas</span>
        </div>
      </div>
    </div>
  )
}
