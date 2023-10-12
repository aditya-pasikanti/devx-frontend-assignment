import React from 'react'
import Navbar from '../../container/navbar/Navbar'
import './InspirationalSpaces.css';
import Overview from '../../container/overview/Overview';
import images from './image.js';
import AireCube from './inspirationalspaces_container/airecube/AireCube';
import InspirationalCards from './inspirationalspaces_container/inspirationalcards/InspirationalCards';
import Footer from '../../container/footer/Footer';
const InspirationalSpaces = () => {
  return (
    <div className='ecoworld__inspirationalspaces'>
      <div className="ecoworld__inspirationalspaces_header">
        <Navbar />
      </div>
      <Overview image={images.inspirationalspaces} heading="Inspirational Spaces" about="Explore a space where inspiration abounds and ideas come alive. Open doors to innovation in a workspace that nurtures both individuals and the environment."/>
      <AireCube />
      <InspirationalCards />
      {/* <Footer /> */}
    </div>
  )
}

export default InspirationalSpaces