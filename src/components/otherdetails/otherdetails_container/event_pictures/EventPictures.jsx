import React from 'react'
import images from '../../image.js'
import Carousel from '../../../../container/carousel/Carousel.jsx'
import './EventPictures.css';

const galleryImages = [images.hc1, images.hc2, images.hc3, images.hc4, images.hc5 ];

const EventPictures = () => {
  return (
    <div className='eventpictures'>
        <h1>Event Pictures</h1>
        <Carousel images={galleryImages} />
    </div>
  )
}

export default EventPictures