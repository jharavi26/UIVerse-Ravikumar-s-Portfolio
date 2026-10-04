import { m, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { strengths } from '../data/portfolio'
import './Approach.scss'

export default function Approach() {
  const prefersReducedMotion = useReducedMotion()
  const reveal = prefersReducedMotion ? {} : { opacity: 1, y: 0 }

  return (
    <section className="bring-section section-wrap" id="approach">
      <SectionLabel number="05">WHAT I BRING</SectionLabel>
      <div className="bring-heading"><h2>Good work is in<br />the <span className="serif-italic">details.</span></h2><p>How I think about the work, not just the tools I use.</p></div>
      <div className="strength-grid">
        {strengths.map(({ icon: Icon, title, description }, index) => (
          <m.article
            className="strength-card"
            key={title}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reveal}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            whileHover={prefersReducedMotion ? undefined : { y: -5 }}
          >
            <span className="strength-index mono">0{index + 1}</span>
            <span className="strength-icon"><Icon size={19} /></span>
            <h3>{title}</h3><p>{description}</p>
            <span className="strength-arrow"><ArrowUpRight size={15} /></span>
          </m.article>
        ))}
      </div>
    </section>
  )
}
