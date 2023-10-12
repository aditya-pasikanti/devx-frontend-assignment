import React from 'react'
import './PortalCards.css';
const PortalCards = ( { image, content } ) => {
  return (
    <div className='portal__cards'>
        <img src={image} alt="No Image" />
        <p> { content } </p>
    </div>
  )
}

export default PortalCards