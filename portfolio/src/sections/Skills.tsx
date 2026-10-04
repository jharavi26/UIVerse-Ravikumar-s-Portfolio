import { m, useReducedMotion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { skills } from '../data/portfolio'
import './Skills.scss'

export default function Skills() {
  const prefersReducedMotion = useReducedMotion()
  const reveal = prefersReducedMotion ? {} : { opacity: 1, y: 0 }

  return (
    <section className="skills-section section-wrap" id="skills">
      <SectionLabel number="02">TOOLS OF THE TRADE</SectionLabel>
      <div className="section-intro">
        <h2>The right tool<br />for the <span className="serif-italic">right reason.</span></h2>
        <p>A growing toolkit for designing and building thoughtful experiences — from the first line of markup to the final performance check.</p>
      </div>
      <div className="skills-grid">
        {skills.map(({ title, icon: Icon, items }, index) => (
          <m.article
            className="skill-card"
            key={title}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reveal}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
          >
            <div className="skill-card-top"><span className="skill-icon"><Icon size={17} /></span><span className="mono">0{index + 1}</span></div>
            <h3>{title}</h3>
            <div className="skill-tags">{items.map((item) => <span key={item}>{item}</span>)}</div>
          </m.article>
        ))}
      </div>
      <div className="skills-note"><span className="note-line" /><span>And always curious about what’s next.</span><Sparkles size={14} /></div>
    </section>
  )
}
