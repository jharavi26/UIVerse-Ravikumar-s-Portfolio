import { m, useReducedMotion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import './Experience.scss'

export default function Experience() {
  const prefersReducedMotion = useReducedMotion()
  const reveal = prefersReducedMotion ? {} : { opacity: 1, y: 0 }

  return (
    <section className="experience-section section-wrap" id="experience">
      <SectionLabel number="04">WHERE I’VE BEEN</SectionLabel>
      <div className="experience-grid">
        <div className="experience-heading"><h2>Built on<br />the <span className="serif-italic">fundamentals.</span></h2><p>Good craft starts with paying attention: to the browser, to the brief, and to the person on the other side of the screen.</p></div>
        <m.article
          className="experience-card"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reveal}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="experience-top"><span className="experience-mark">A.</span><span className="mono">FOUNDATIONS / 01</span></div>
          <div className="experience-role"><span>Frontend Developer</span><span className="experience-at"></span></div>
          <p>Hands-on frontend experience on websites, working across responsive implementation, styling, and optimization.</p>
          <div className="experience-rule" />
          <ul>
            <li>Developed responsive layouts with HTML, CSS, and JavaScript & React.</li>
            <li>Improved website performance and resolved UI issues.</li>
            <li>Used Git in collaborative development workflows.</li>
            <li>Worked on AEM components and client-side styling.</li>
          </ul>
          <div className="experience-bottom"><span className="mono">A SOLID START. A LOT MORE TO BUILD.</span><ArrowDownRight size={16} /></div>
        </m.article>
      </div>
    </section>
  )
}
