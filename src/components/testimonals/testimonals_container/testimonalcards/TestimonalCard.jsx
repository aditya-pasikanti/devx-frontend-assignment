import React from 'react'
import './TestimonalCard.css';
const TestimonalCard = ({ image, content, designation, quote }) => {
  return (
    <div className='testimonal_card'>
        <img className='testimonal_card_image' src={image} alt="No Image" />
        <div className="testimonal_card_details">
            <p> {content} </p>
            <p> <span> {designation} </span> <img src={quote} alt="No Image" /> </p>
        </div>
    </div>
  )
}

export default TestimonalCard