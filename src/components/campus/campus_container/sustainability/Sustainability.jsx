import React from 'react'
import './Sustainability.css'
import Header from '../../../../container/header/Header.jsx';
import images from './image.js'

const Sustainability = () => {
  return (
    <div className='sustainability'>
      <Header title="Sustainability" content="Ecoworld has been recognised as an Asia's first Net Zero Campus and has won several green awards for its sustainable practices like 100% water recycling and rainwater harvasting" />
      <div className="sustainability_images_container">
        <div className="sustainability_images">
          <img src={images.sustain1} alt="No Image" />
          <img src={images.sustain2} alt="No Image" />
        </div>
      </div>
      <p>Know More</p>
    </div>
  )
}

export default Sustainability