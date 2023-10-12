import React from 'react'
import './CaseStudy.css';
import images from '../../image.js'
import ImageCards from '../../../../container/image_cards/ImageCards';
import { FaArrowRight } from 'react-icons/fa';
import CardLeft from '../../../../container/card_left/CardLeft';
const CaseStudy = () => {
  return (
    <div className='casestudy'>
        <h1>AIRE Case Study</h1>
        <div className="casestudy_image_cards">
            <ImageCards image={images.cs1}/>
            <ImageCards image={images.cs2}/>
            <ImageCards image={images.cs3}/>
        </div>
        <p>Know More <FaArrowRight /> </p>
        <CardLeft image={images.cs4} heading="Ventilation" content="Acres of lush greenery and advanced MER 13 filters in the air-con infrastructure, make sure you breathe easy inside and out." />
        <CardLeft image={images.cs5} heading="Building Plan" content="The buildings are designed to allow maximum of infiltration of sunlight, with 85% of occupied spaces offering views of the outdoors." />
    </div>
  )
}

export default CaseStudy