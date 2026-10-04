import { useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation } from '../data/portfolio'
import './Navbar.scss'

type NavbarProps = {
  activeSection: string
}

const resumePath = '/Ravikumar_Jha_Resume.pdf'

export default function Navbar({ activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="Ravikumar Jha, home">
          rj<span>.</span>
        </a>
        <div className="nav-links">
          {navigation.map(({ label, id }) => (
            <a className={activeSection === id ? 'active' : ''} href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </div>
        <a className="nav-resume" href={resumePath} download="Ravikumar_Jha_Resume.pdf">
          Resume <ArrowUpRight size={14} />
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <m.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {navigation.map(({ label, id }, index) => (
              <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>
                <span className="mono">0{index + 1}</span>{label}<ArrowUpRight size={16} />
              </a>
            ))}
            <a href={resumePath} download="Ravikumar_Jha_Resume.pdf" onClick={() => setMenuOpen(false)}>
              <span className="mono">→</span>Download resume<ArrowUpRight size={16} />
            </a>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}
