import React from 'react';
import "./Navbar.css";
import {Link} from "react-scroll"

function Navbar() {
  return (
    <nav className='navbar'>
      <h1>PORTFOLIO</h1>
      <ul className='desktop'>
        <Link to = "home" spy = {true} activeClass='active' smooth={true} duration={500}><li >Home</li></Link>
        <Link to = "about" spy = {true} activeClass='active' smooth={true} duration={500} ><li>About</li></Link>
        <Link to = "projects" spy = {true} activeClass='active' smooth={true} duration={500} ><li>Projects</li></Link>
        <Link to = "contact" spy = {true} activeClass='active' smooth={true} duration={500} ><li>Contact</li></Link>
      </ul>

      <div className='hamburger'>
        <div className='ham'></div>
        <div className='ham'></div>
        <div className='ham'></div>
      </div>

    </nav>
      
  )
}

export default Navbar
