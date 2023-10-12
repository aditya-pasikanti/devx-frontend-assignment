import React from 'react'
import './NetZero.css';
import Header from '../../../../container/header/Header';
import images from '../../image.js'
const NetZero = () => {
  return (
    <div className='netzero'>
        <Header title="Asia's First Net Zero Waste Campus" content="A robust waste management system has allowed us to achieve zero waste tranfers to landfills." />
        <div className="netzero_image">
            <img src={images.netzero} alt="No Image" />
        </div>
    </div>
  )
}

export default NetZero