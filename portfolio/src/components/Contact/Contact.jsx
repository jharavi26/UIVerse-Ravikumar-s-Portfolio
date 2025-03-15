import React from 'react';
import "./Contact.css";
import contact from "../../assets/Contact.png";


function Contact() {



  return (
    <>
    <h1 className='header'>Get in Touch </h1>
    <div id = "contact">
       
      <div className='leftside'>
        <img src = {contact} alt = "contact" />

      </div>

      <div className='rightside'>
        <form action = "https://formspree.io/f/mrbpbebr" method='POST' className='form'>
       
          <input type='text' name = "UserName" placeholder='Name'/>
          <input type = "email" name = "Email" placeholder = "Email"/>
          <textarea name = "message" id = "textarea" placeholder='Enter Your Message'/>
          <button type='submit' id = "btn">Submit</button>

          

        </form>
        
        </div>
      
    </div>
    </>
  )
}

export default Contact
