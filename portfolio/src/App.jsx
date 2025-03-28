import React from 'react';
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/> 
      
    </div>
  )
}

export default App
