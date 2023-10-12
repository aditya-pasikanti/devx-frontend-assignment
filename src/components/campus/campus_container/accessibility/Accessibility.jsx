import React from 'react'
import Cards from './cards/Cards'
import images from './image.js';
import './Accessibility.css'
import Header from '../../../../container/header/Header.jsx';
const Accessibility = () => {
    return (
        <div className='accessiblity'>
            <div className="accessibility_header">
                <Header title="Accessibility" content='Discover a welcoming work environment where accessibility to all is a priority.From tactile flooring , braile letters to wheelchair ramps, every space is designed for easy accessibility.'
                />
            </div>
            <div className="accessibility_cards">
                <Cards image={images.acc1} heading="Dedicated Parking" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, illo!" />
                <Cards image={images.acc2} heading="Ease of Entry - Exit" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, illo!" />
                <Cards image={images.acc3} heading="Ramps" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, illo!" />
            </div>
            <div className="arrows">
                <button>&lt;</button>
                <button>&gt;</button>
            </div>
        </div>
    )
}

export default Accessibility