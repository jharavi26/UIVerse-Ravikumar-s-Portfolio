import React from 'react';
import "./Projects.css";
import Card from '../Card/Card';
import portfolio from "../../assets/portfolio.png";
import todo from "../../assets/todo.png";
import purebuy from "../../assets/purebuy.png";
import resume from "../../assets/resume.png"




function Projects() {
  return (
    <div id = "projects">
      <h1 className='tagline'>Projects</h1>
      <div className='slidder'>
      <Card title = "PureBuy E-Commerce" image = {purebuy}/>
      <Card title = "AI Resume-Builder" image = {resume} />
      <Card title= "UIVerse Portfolio" image = {portfolio}/>
      <Card title= "To-Do" image = {todo}/>


      </div>
      
    </div>
  )
}

export default Projects
