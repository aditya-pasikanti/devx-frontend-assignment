import React from 'react'
import './Sustainability.css';
import Navbar from '../../container/navbar/Navbar';
import Overview from '../../container/overview/Overview';
import images from './image.js'
import Awards from './sustainability_container/awards/Awards';
import NetZero from './sustainability_container/netzero/NetZero';
import SustainavblePractices from './sustainability_container/sustainablepractices/SustainavblePractices';
import CaseStudy from './sustainability_container/casestudy/CaseStudy';
const Sustainability = () => {
  return (
    <div className='ecoworld__sustainability'>
      <div className="ecoworld__sustainability_header">
        <Navbar />
      </div>
      <Overview image={images.sustainability} heading="Sustainability and Wellness" about="Where nature flourishes and well-being thrives, immense yourself in an extraordinary space that priorities and sustainability fosters community engagement. Driven by the need to minimise our environment impact, we are committed to achieving the Green Energy Model at Ecoworld." />
      <Awards />
      <NetZero />
      <SustainavblePractices />
      <CaseStudy />
    </div>
  )
}

export default Sustainability