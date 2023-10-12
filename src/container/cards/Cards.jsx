import React from 'react'
import './Cards.css'
const Cards = ({ image, heading, content }) => {
  return (
    <div className='ecoworld__cards'>
        <div className="card_image">
            <img src={image} alt="No Card Image" />
        </div>
        <div className="card_content">
            <h3> { heading } </h3>
            <p> { content } </p>
        </div>
    </div>
  )
}

export default Cards