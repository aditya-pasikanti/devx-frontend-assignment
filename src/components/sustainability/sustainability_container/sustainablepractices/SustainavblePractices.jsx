import React from 'react'
import './SustainavblePractices.css'
import Header from '../../../../container/header/Header'
import images from '../../image.js'
import ImageCards from '../../../../container/image_cards/ImageCards'
const SustainavblePractices = () => {
  return (
    <div className='sustainavblepractices'>
        <Header title="Sustainable Practices" content="100% water recycling and rain harvasting helps Ecoworld conserve water, while the LED lights controlled using daylight and proximity sensors, lead to an energy-efficient campus." />
        <div className="image_cards">
            <ImageCards image={images.sus1} />
            <ImageCards image={images.sus2} />
        </div>
        <div className="arrows">
                        <button>&lt;</button>
                        <button>&gt;</button>
                    </div>
    </div>
  )
}

export default SustainavblePractices