import React from 'react';
import "./Projects.css";
import Card from '../Card/Card';
import stack from "../../assets/stack.jpg"
import soft from "../../assets/soft.jpg";
import skill from "../../assets/skill.jpg"

function Projects() {
  return (
    <div id = "projects">
      <h1 className='tagline'>Projects</h1>
      <div className='slidder'>
      <Card title = "AI Resume-Builder" image = {stack} />
      <Card title = "PureBuy E-Commerce" image = {skill}/>
      <Card title= "UIVerse Portfolio" image = {soft}/>
      <Card title= "To-Do" image = {soft}/>


      </div>
      
    </div>
  )
}

export default Projects
