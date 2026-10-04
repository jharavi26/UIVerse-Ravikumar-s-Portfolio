import { m, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import ProjectVisual from '../components/ProjectVisual'
import SectionLabel from '../components/SectionLabel'
import { projects } from '../data/portfolio'
import './Projects.scss'

export default function Projects() {
  const prefersReducedMotion = useReducedMotion()
  const reveal = prefersReducedMotion ? {} : { opacity: 1, y: 0 }

  return (
    <section className="projects-section section-wrap" id="projects">
      <SectionLabel number="03">A FEW THINGS I’VE MADE</SectionLabel>
      <div className="projects-heading">
        <h2>Selected <span className="serif-italic">work.</span></h2>
        <p>A mix of practice projects and product explorations.<br />Each one a chance to get a little better.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <m.article
            className={`project-card project-card-${index + 1}`}
            key={project.name}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reveal}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index % 2 * 0.1 }}
          >
            <a
              className="project-image-link"
              href={project.liveDemo ?? '#contact'}
              target={project.liveDemo ? '_blank' : undefined}
              rel={project.liveDemo ? 'noreferrer' : undefined}
              aria-label={project.liveDemo ? `Open ${project.name} live demo in a new tab` : `Ask about the ${project.name} project`}
            >
              <ProjectVisual kind={project.visual} mark={project.mark} image={project.image} />
              <span className="project-open"><ArrowUpRight size={17} /></span>
            </a>
            <div className="project-meta"><span className="mono">{project.number} / {project.type}</span><span className="mono">{project.liveDemo ? 'LIVE DEMO' : 'CONCEPT PROJECT'}</span></div>
            <div className="project-title-row"><h3>{project.name}</h3><ArrowUpRight className="project-title-arrow" size={17} /></div>
            <p>{project.description}</p>
            <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="project-actions">
              <a
                href={project.liveDemo ?? '#contact'}
                target={project.liveDemo ? '_blank' : undefined}
                rel={project.liveDemo ? 'noreferrer' : undefined}
                aria-label={project.liveDemo ? `Open ${project.name} live demo in a new tab` : `Ask about the ${project.name} live demo`}
              >
                {project.liveDemo ? 'Live demo' : 'Ask for demo'} <ArrowUpRight size={13} />
              </a>
              <a href="https://github.com/jharavi26" target="_blank" rel="noreferrer" aria-label={`${project.name}: open GitHub profile in a new tab`}>GitHub profile <Github size={13} /></a>
            </div>
          </m.article>
        ))}
      </div>
      <p className="project-disclaimer"><span className="mono">A NOTE ON LINKS</span> PureBuy and UIverse Portfolio have live demos. Other projects are concepts; GitHub links open my profile, not project-specific repositories.</p>
    </section>
  )
}
