import React from 'react';
import "./Home.css";
import profile from "../../assets/profile.jpg";



function Home() {
  return (
    <div id="home">
      <div className='left'>
        <div className='details'>
          <div className='line1'>I'm </div>
          <div className='line2'>Ravikumar Jha</div>
          <div className='line3'>Front-End Developer</div>
          <button>Hire me</button>
        </div>
      </div>
      <div className='right'>
        <img src = {profile}  alt = "profile-image"/>
      </div>
      
    </div>
  )
}

export default Home
