import React from 'react'
import './Cards.css'
const Cards = ({ image, heading, content }) => {
  return (
    <div className='ecoworld_accessibility_cards'>
        <div className="card_accessibility_image">
            <img src={image} alt="No Card Image" />
        </div>
        <div className="card_accessibility_content">
            <h3> { heading } </h3>
            <p> { content } </p>
        </div>
    </div>
  )
}

export default Cards