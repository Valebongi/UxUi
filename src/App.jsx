import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Slide01 from './slides/Slide01'
import Slide02 from './slides/Slide02'
import Slide03 from './slides/Slide03'
import Slide04 from './slides/Slide04'
import Slide05 from './slides/Slide05'
import Slide06 from './slides/Slide06'
import Slide07 from './slides/Slide07'
import Slide08 from './slides/Slide08'
import Slide09 from './slides/Slide09'
import Slide10 from './slides/Slide10'
import Slide11 from './slides/Slide11'

const slides = [
  Slide01, Slide02, Slide03, Slide04, Slide05,
  Slide06, Slide07, Slide08, Slide09, Slide10, Slide11
]

const TOTAL = slides.length

const slideVariants = {
  enter: (dir) => ({
    y: dir > 0 ? '100%' : '-100%',
    opacity: 0,
    filter: 'blur(12px)',
    scale: 0.97,
  }),
  center: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
  },
  exit: (dir) => ({
    y: dir > 0 ? '-60%' : '60%',
    opacity: 0,
    filter: 'blur(16px)',
    scale: 0.95,
  }),
}

const slideTransition = {
  duration: 0.9,
  ease: [0.43, 0.13, 0.23, 0.96],
}

export default function App() {
  const [[current, dir], setPage] = useState([0, 0])
  const [locked, setLocked] = useState(false)

  const navigate = useCallback((newDir) => {
    if (locked) return
    setLocked(true)
    setPage(([c]) => {
      const next = Math.max(0, Math.min(TOTAL - 1, c + newDir))
      if (next === c) { setTimeout(() => setLocked(false), 200); return [c, newDir] }
      return [next, newDir]
    })
    setTimeout(() => setLocked(false), 1100)
  }, [locked])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') navigate(1)
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') navigate(-1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [navigate])

  useEffect(() => {
    let last = 0
    const handleWheel = (e) => {
      const now = Date.now()
      if (now - last < 900) return
      last = now
      navigate(e.deltaY > 0 ? 1 : -1)
    }
    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [navigate])

  const SlideComponent = slides[current]
  const progress = ((current + 1) / TOTAL) * 100

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={current}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          style={{ position: 'absolute', inset: 0 }}
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      <div className="nav-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`nav-dot ${i === current ? 'active' : ''}`}
            onClick={() => {
              if (locked) return
              setLocked(true)
              const d = i > current ? 1 : -1
              setPage([i, d])
              setTimeout(() => setLocked(false), 1100)
            }}
          />
        ))}
      </div>

      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div className="slide-counter">{String(current + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}</div>
    </div>
  )
}
