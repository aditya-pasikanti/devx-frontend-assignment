import React from 'react'
import './ImageCards.css';
const ImageCards = ( { image } ) => {
  return (
    <div className='imagecard'>
        <img src={image} alt="No Image" />
    </div>
  )
}

export default ImageCards