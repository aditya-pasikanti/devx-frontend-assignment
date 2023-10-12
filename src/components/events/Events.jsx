import React from 'react'
import './Events.css'
import Section from '../../container/section/Section'
import images from './image.js'
import Cards from '../../container/cards/Cards'
import { FaArrowRight } from 'react-icons/fa'
const Events = () => {
    return (
        <div className='ecoworld__events'>
            <Section heading="Events" />
            <div className="ecoworld__events_buttons">
                <button className='past'>Past</button>
                <button className="upcoming">Upcoming</button>
            </div>

            <div className="events_card_section">
                <h1>Section header here</h1>
                <div className="events_cards">
                    <Cards image={images.acc1} heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, harum." content="Aug 20 2023" />
                    <Cards image={images.acc2} heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, harum." content="Aug 20 2023" />
                    <Cards image={images.acc3} heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, harum." content="Aug 20 2023" />
                </div>
                <div className="arrows">
                    <button >&lt;</button>
                    <button >&gt;</button>
                </div>
                <div className='viewall'>View All <FaArrowRight /> </div>
            </div>
            <div className="events_card_section">
                <h1>Section header here</h1>
                <div className="events_cards">
                    <Cards image={images.acc2} heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, harum." content="Aug 20 2023" />
                    <Cards image={images.acc1} heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, harum." content="Aug 20 2023" />
                    <Cards image={images.acc3} heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, harum." content="Aug 20 2023" />
                </div>
                <div className="arrows">
                    <button >&lt;</button>
                    <button >&gt;</button>
                </div>
                <div className='viewall'>View All <FaArrowRight /> </div>
            </div>
        </div>
    )
}

export default Events