import { m, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import './About.scss'

export default function About() {
  const prefersReducedMotion = useReducedMotion()
  const reveal = prefersReducedMotion ? {} : { opacity: 1, y: 0 }

  return (
    <section className="about-section section-wrap" id="about">
      <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
      <div className="about-grid">
        <m.div
          className="about-heading"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reveal}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <h2>Good interfaces<br />feel <span className="serif-italic">effortless.</span></h2>
          <span className="about-asterisk">✳</span>
        </m.div>
        <m.div
          className="about-body"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reveal}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <p>I’m a frontend developer who cares about the details between a good idea and a really good experience.</p>
          <p>My work began with AEM-based websites: shaping responsive layouts, building with HTML, CSS, and JavaScript, and making existing experiences feel faster and easier to use. That foundation taught me to value solid structure just as much as a polished finish.</p>
          <p>Now I’m building deeper with React and Next.js, bringing that same care to modern product interfaces. I’m looking for a team where I can contribute, keep learning, and ship things people genuinely enjoy using.</p>
          <a className="text-link" href="#experience">A little more about my experience <ArrowRight size={15} /></a>
        </m.div>
      </div>
      <div className="about-footnote"><span className="mono">BASED IN INDIA</span><span className="footnote-line" /><span>Curious by default. Always learning.</span></div>
    </section>
  )
}
