import { useRef, useState } from "react";
import "./Navbar.css";
import {Link} from "react-scroll";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
 
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen); // Toggles menu visibility
  };


useGSAP(()=>{
  let t1 = gsap.timeline();
  t1.from("nav h1" , {
    y : -100,
    duration : 1,
    opacity : 0
  })
  t1.from("nav ul li",{
    y : -100,
    duration : 1,
    opacity : 0,
    stagger : 0.5
  })
})

const toggleDarkMode = () => {
  const body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  setDarkMode(!darkMode)
};

  return (
    <nav className='navbar'>
      <h1>PORTFOLIO</h1>
      <ul className="desktop">
        <Link to="home" spy={true} activeClass="active" smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="about" spy={true} activeClass="active" smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="projects" spy={true} activeClass="active" smooth={true} duration={500}>
          <li>Projects</li>
        </Link>
        <Link to="contact" spy={true} activeClass="active" smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
        <li style={{ fontSize: "20px", cursor: "pointer" }} onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </li>
      </ul>

      <div className='hamburger'onClick={toggleMobileMenu}>
        <div className='ham'></div>
        <div className='ham'></div>
        <div className='ham'></div>
      </div>

      <ul className={`mobile ${menuOpen ? "activemobile" : ""}`}>
        <Link to="home" spy={true} activeClass="active" smooth={true} duration={500}onClick={toggleMobileMenu}>
          <li>Home</li>
        </Link>
        <Link to="about" spy={true} activeClass="active" smooth={true} duration={500} onClick={toggleMobileMenu}>
          <li>About</li>
        </Link>
        <Link to="projects" spy={true} activeClass="active" smooth={true} duration={500} onClick={toggleMobileMenu}>
          <li>Projects</li>
        </Link>
        <Link to="contact" spy={true} activeClass="active" smooth={true} duration={500} onClick={toggleMobileMenu}>
          <li>Contact</li>
        </Link>
        <li style={{ fontSize: "20px", cursor: "pointer" }} onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </li>
      </ul>

    </nav>
      
  )
}

export default Navbar
