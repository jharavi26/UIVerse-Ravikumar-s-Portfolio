import { Github, Linkedin } from 'lucide-react'

type SocialLinksProps = {
  compact?: boolean
}

export default function SocialLinks({ compact = false }: SocialLinksProps) {
  return (
    <div className={`social-links${compact ? ' social-links-compact' : ''}`}>
      <a
        href="https://github.com/jharavi26"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile (opens in a new tab)"
      >
        <Github size={16} aria-hidden="true" />
        <span>GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/ravikumar-jha"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile (opens in a new tab)"
      >
        <Linkedin size={16} aria-hidden="true" />
        <span>LinkedIn</span>
      </a>
    </div>
  )
}
