import React from 'react'
import Navbar from '../../container/navbar/Navbar'
import campus from '../../assets/campus/building.png'
import './Campus.css'
import Video from './campus_container/campus_video/Video';
import Masterplan from './campus_container/campus_masterplan/Masterplan';

import Cards from '../../container/cards/Cards';

import image1 from '../../assets/campus/masterplan_card1.png'
import image2 from '../../assets/campus/masterplan_card2.png'

import WorkspaceSolutions from './campus_container/workspacesolutions/WorkspaceSolutions';
import Accessibility from './campus_container/accessibility/Accessibility';
import Sustainability from './campus_container/sustainability/Sustainability';
import Overview from '../../container/overview/Overview';
import Ratings from './campus_container/ratings/Ratings';
import CurrentTenants from './campus_container/currenttenants/CurrentTenants';


const Campus = () => {
    return (
        <div className='ecoworld__campus'>
            <div className='ecoworld__campus_header'>
                <Navbar />
            </div>
            <Overview heading="The Campus" info="Presenting Benguluru's most inspired workplace destination." image={campus} about="One of Asia's largest 'Grade-A' workplace where thoughtful layout and impeccable design come together to create a harmonious blend of work, nature and leisure." />
            <Video />

            <div className="campus_masterplan">
                <Masterplan />
                <div className="campus_card_container">
                    <div className="campus_cards">
                        <Cards image={image1} heading="ACTIV Health Club" content="A state-of-the-art club perfect for all your fitness needs." />
                        <Cards image={image2} heading="Amphitheatre" content="A 500 seater amphitheatre perfect for large events like concerts." />
                    </div>
                    <div className="arrows">
                        <button>&lt;</button>
                        <button>&gt;</button>
                    </div>
                </div>
            </div>
            <WorkspaceSolutions />
            <Accessibility />
            <Sustainability />
            <Ratings />
            <CurrentTenants />
        </div>
    )
}

export default Campus