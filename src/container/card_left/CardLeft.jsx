import React from 'react'
import './CardLeft.css'
const CardLeft = ( { image, heading, content } ) => {
  return (
    <div className='card_left'>
        <div className="card_left_image">
            <img src={image} alt="No Card Image" />
        </div>
        <div className="card_left_content">
            <p> { heading } </p>
            <p> { content } </p>
        </div>
    </div>
  )
}

export default CardLeft