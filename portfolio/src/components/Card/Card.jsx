import React from 'react';
import "./Card.css"
import stack from "../../assets/stack.png";

function Card({title , image}) {
  return (
    <div className='card'>
        <h1>{title}</h1>
      <div className='hovercard'>
        <img src = {image} alt = "card"/>
      </div>
      
    </div>
  )
}

export default Card
