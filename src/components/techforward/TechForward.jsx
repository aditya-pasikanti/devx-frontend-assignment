import React from 'react'
import Navbar from '../../container/navbar/Navbar'
import './TechForward.css'
import Overview from '../../container/overview/Overview'
import techforward from '../../assets/techforward/techforward.png'
import images from './image.js';
import CardLeft from '../../container/card_left/CardLeft';
import TenantPortal from './techforward_container/tenantportal/TenantPortal'

const TechForward = () => {
  return (
    <div className='ecoworld__techforward'>
      <div className="ecoworld__techforward_header">
        <Navbar />
      </div>
      <Overview heading="Tech Forward" image={techforward} about="Experience the future of workspaces where the cutting-edge technology makes seamless efficient like never before."
      />
      <div className="ecoworld__techforward_cards">
        <div className="techforward_card">
          <h2>Command Centre</h2>
          <CardLeft image={images.tech1} heading="Monitor. Manage. Control" content="The high-tech command centre at Ecoworld brings it all together, ensuring smooth daily functioning of all campus facilities." />
        </div>
        <div className="techforward_card">
          <h2>24/7 Helpdesk</h2>
          <CardLeft image={images.tech2} heading="Help is a call away" content="Our dedicated helpdesk employees are ready to extend a helping hand any time of the day. Simply our command centre who will take care of any issues that may arise at your workspace." />
        </div>
        <div className="techforward_card">
          <h2>Concierge Services</h2>
          <CardLeft image={images.tech3} heading="Personalized assistance, improved work experience, effortless convenience" content="Enjoy a seamless workday with our concierge service always at your disposal!" />
        </div>
        <div className="techforward_card">
          <h2>Security</h2>
          <CardLeft image={images.tech4} heading="Feel safe and protected, no matter where you are" content="Stay rest assured with our robust security measures featuring real-time CCTV Surviellance and security guards patrolling around the campus with our hi-tech equipment bringing it all together." />
        </div>
        <div className="techforward_card">
          <h2>Parking</h2>
          <CardLeft image={images.tech5} heading="Park with ease" content="Leave your parking struggles behind with ample spaces available across the expansive campus." />
        </div>
      </div>
      <TenantPortal />
    </div>
  )
}

export default TechForward