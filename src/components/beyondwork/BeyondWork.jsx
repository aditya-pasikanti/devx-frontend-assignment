import React from 'react'
import './BeyondWork.css'
import Navbar from '../../container/navbar/Navbar'
import Overview from '../../container/overview/Overview'
import images from './image.js'
import Main from './beyondwork_container/main/Main'
const galleryImages = [images.hc1, images.hc2, images.hc3, images.hc4, images.hc5];

const BeyondWork = () => {

  return (
    <div className='ecoworld__beyondwork'>
      <div className="ecoworld__beyondwork_headers">
        <Navbar />
      </div>
      <Overview image={images.beyondwork} heading="Beyond Work" about="EMbark on immensive experiences that transcend the realm of work, brimming with the endless possibilities. Engage in a vibrant social scene, and find tranquility in a serene oasis of rejuvenation." />

      {/* Healthclub */}
      <div className="beyondwork_main">
        <div className="beyondwork_healthclub">
          <Main title="ACTIV Health Club" content="Never miss out your fitness goals or on that quick boost of endorophins when an exclusive health club featuring multipne activities is right on campus." para="Infinity Pool | Tennis Court | Squash Court | BasketBall Court | Jacuzzi | Outdoor Gym | Jogging Track | Juice Bar | Café Desk" images={galleryImages} />
        </div>

        {/* The Bay */}
        <div className="beyondwork_thebay">
          <Main title="The Bay" content="Unwind at impressive retail, dining and recreational spaces. Savour a special evening at renowned breweries and restaurants or delight in a world of retail bliss as you explore premium stores around the campus." para="Alfreco Dining | Breweries | Cafés | Market Place | Banking Facilities | Salon | Retail Stores | Daycare" images={galleryImages} />
        </div>

        {/* Amphitheatre */}
        <div className="beyondwork_amphitheatre">
          <Main title="Amphitheatre" content="Create lasting memories at the grand 500-seater amphitheatre, where inspiring performances and spectacular events unfold. With the curated yearlong events calender, the park exudes vibrant energy that leaves you mesmerised." images={galleryImages} />
        </div>
      </div>
    </div>
  )
}

export default BeyondWork