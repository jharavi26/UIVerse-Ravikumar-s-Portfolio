import { memo, useEffect, useState } from 'react'
import { LazyMotion, domAnimation, m, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import Approach from './sections/Approach'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  const prefersReducedMotion = useReducedMotion()
  const [activeSection, setActiveSection] = useState('home')
  const year = new Date().getFullYear()
  const { scrollYProgress } = useScroll()
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const displayedProgress = prefersReducedMotion ? scrollYProgress : progressScale

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    document.querySelectorAll('main section[id], header[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <m.div className="scroll-progress" style={{ scaleX: displayedProgress }} />
      <div className="site-shell">
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Approach />
          <Contact />
        </main>
        <Footer year={year} />
      </div>
    </LazyMotion>
  )
}

export default memo(App)
