import { Asterisk, ArrowDown, ArrowDownRight, ArrowUpRight } from 'lucide-react'
import SocialLinks from './SocialLinks'
import './Hero.scss'

const resumePath = '/Ravikumar_Jha_Resume.pdf'

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" /> OPEN TO FRONTEND OPPORTUNITIES
          </div>
          <h1>
            <span>Hi, I’m</span>
            <span>Ravikumar Jha<span className="accent-dot">.</span></span>
          </h1>
          <p className="hero-headline">
            Frontend developer crafting <em>modern, responsive</em> &amp; interactive web experiences.
          </p>
          <p className="hero-description">
            I build clean, accessible, performance-focused interfaces with React, JavaScript, and modern frontend technologies.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
            <a className="button button-resume" href={resumePath} download="Ravikumar_Jha_Resume.pdf">Download resume <ArrowUpRight size={15} /></a>
            <a className="button button-quiet" href="#contact">Let’s connect <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-social">
            <span className="mono">FIND ME ON</span><SocialLinks compact />
          </div>
        </div>
        <div className="hero-art">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-glow" />
          <div className="art-core"><span>rj<span className="accent-dot">.</span></span><small>FRONTEND<br />DEVELOPER</small></div>
          <div className="float-chip chip-react"><span className="react-symbol">✳</span> React</div>
          <div className="float-chip chip-ts"><span className="ts-symbol">TS</span> TypeScript</div>
          <div className="float-chip chip-css"><Asterisk size={15} /> Thoughtful UI</div>
          <span className="art-caption mono">MADE OF CURIOSITY<br />AND A LITTLE CSS</span>
          <span className="art-coordinates mono">26°N 85°E<br />INDIA</span>
        </div>
      </div>
      <div className="hero-bottom"><span className="mono">01 — A LITTLE ABOUT ME</span><a href="#about">SCROLL TO EXPLORE <ArrowDown size={14} /></a><span className="mono">REACT · UI · PERFORMANCE</span></div>
    </header>
  )
}
