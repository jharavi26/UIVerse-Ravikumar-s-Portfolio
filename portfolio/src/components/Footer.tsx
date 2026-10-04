import { memo } from 'react'
import { Asterisk, ArrowUp } from 'lucide-react'
import SocialLinks from './SocialLinks'
import './Footer.scss'

type FooterProps = {
  year: number
}

function Footer({ year }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a className="wordmark footer-mark" href="#home" aria-label="Back to home">rj<span>.</span></a>
        <div className="footer-name"><strong>Ravikumar Jha</strong><span>Frontend Developer</span></div>
        <SocialLinks compact />
        <a className="back-top" href="#home">BACK TO TOP <ArrowUp size={14} /></a>
      </div>
      <div className="footer-bottom"><span>© {year} Ravikumar Jha</span><span>MADE WITH CARE, AND A LITTLE CSS <Asterisk size={12} /></span><a href="#home">INDIA ↗</a></div>
    </footer>
  )
}

export default memo(Footer)
