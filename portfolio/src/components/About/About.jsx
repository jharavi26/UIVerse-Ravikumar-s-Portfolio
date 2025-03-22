import React from 'react';
import "./About.css";
import Card from '../Card/Card';
import stack from "../../assets/stack.jpg"
import soft from "../../assets/Soft.jpg";
import skill from "../../assets/skill.jpg"


function About() {
  return (
    <div id="about">

      <div className='left'>
        <div className='circle-line'>
          <div className='circle'></div>
          <div className='line'></div>
          <div className='circle'></div>
          <div className='line'></div>
          <div className='circle'></div>
        </div>
      <div className='about-details'>
        <div className='personal'>
          <h1>Personal Information</h1>
          <ul>
            <li><span>Name</span> : Ravikumar Jha</li>
            <li><span>Age</span> : 27</li>
            <li><span>Location</span> : Mumbai</li>
          </ul>
        </div>

        <div className='Education'>
          <h1>Education Information</h1>
          <ul>
            <li><span>Degree</span> : Master of Science</li>
            <li><span>Department </span> : Information Technology</li>
            <li><span>University</span> : Mumbai University</li>
          </ul>
        </div>

        <div className='skills'>
          <h1>Skills</h1>
          <ul>
            <li><span>Frontend</span> : HTML, CSS , JAVASCRIPT , REACT , REDUX</li>
            <li><span>Tools</span> : Vite, WebPack , NPM , VsCode </li>
            <li><span>Version Control</span> : Git , Github</li>
          </ul>
        </div>

      </div>

      </div>

      <div className='right'>
        <Card title = "Tech Stack" image = {stack} />
        <Card title = "Skiils" image = {skill}/>
        <Card title= "Soft-Skills" image = {soft}/>

      </div>
      
      
    </div>
  )
}

export default About
