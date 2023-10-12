import React from 'react'
import Section from '../../container/section/Section';
import './MediaCenter.css'
import Cards from '../../container/cards/Cards';
import images from './image.js'
const MediaCenter = () => {
    return (
        <div className='ecoworld__mediacenter'>
            <Section heading="Media Centre" />
            <div className="ecoworld__mediacenter_buttons">
                <button className='blogs'>Blogs</button>
                <button className="press">Press</button>
                <button className="images">Images</button>
                <button className="videos">Videos</button>
            </div>


            <div className="mediacenter_cards">
                <Cards image={images.acc1} heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit." content="Category Tag" />
                <Cards image={images.acc2} heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit." content="Category Tag" />
                <Cards image={images.acc3} heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit." content="Category Tag" />

            </div>
            <div className="mediacenter_cards">
                <Cards image={images.acc1} heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit." content="Category Tag" />
                <Cards image={images.acc2} heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit." content="Category Tag" />
                <Cards image={images.acc3} heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit." content="Category Tag" />

            </div>
            <div className="mediacenter_cards">
                <Cards image={images.acc1} heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit." content="Category Tag" />
                <Cards image={images.acc2} heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit." content="Category Tag" />
                <Cards image={images.acc3} heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit." content="Category Tag" />

            </div>
        </div>
    )
}

export default MediaCenter;