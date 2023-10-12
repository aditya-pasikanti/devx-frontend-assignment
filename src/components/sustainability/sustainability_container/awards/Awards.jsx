import React from 'react'
import './Awards.css'
import images from '../../image.js'
const Awards = () => {
  return (
    <div className='awards'>
        <img src={images.award1} alt="No Image" />
        <img src={images.award2} alt="No Image" />
        <img src={images.award1} alt="No Image" />
        <img src={images.award2} alt="No Image" />
        <img src={images.award1} alt="No Image" />
        <img src={images.award2} alt="No Image" />
        <img src={images.award1} alt="No Image" />
        <img src={images.award2} alt="No Image" />
    </div>
  )
}

export default Awards