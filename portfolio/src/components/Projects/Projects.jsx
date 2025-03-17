import React from 'react';
import "./Projects.css";
import Card from '../Card/Card';
import portfolio from "../../assets/portfolio.png";
import todo from "../../assets/todo.png";
import purebuy from "../../assets/purebuy.png";
import resume from "../../assets/resume.png";
import { useGSAP } from '@gsap/react'; 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);




function Projects() {
  useGSAP(()=>{
    gsap.from(".tagline", {
      y:100,
      duration:1,
      opacity : 0,
      stagger : 1,
      scrollTrigger : {
        trigger : ".tagline",
        scroll : "body",
        scrub : 2,
        start : "top 80%",
        end : "30%",

      }
    })
  })


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
