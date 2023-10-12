import React from 'react'
import './AireCube.css';
import Header from '../../../../container/header/Header';
import images from '../../image.js'
const AireCube = () => {
  return (
    <div className='airecube'>
        <Header title="Aire Cube" content="The Dynamic Green Cube embodies sustainability in its design and material selection, showcasing its iconic nature. This Net Zero structure features rain sensors and solar panels, while doubling up as a versatile event space." />
        <div className="airecube_image">
            <img src={images.airecube} alt="No Image" />
        </div>
    </div>
  )
}

export default AireCube