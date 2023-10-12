import React from 'react'
import './Testimonals.css';
import Navbar from '../../container/navbar/Navbar'
import Overview from '../../container/overview/Overview';
import images from './image.js'
import TestimonalCard from './testimonals_container/testimonalcards/TestimonalCard';
import Footer from '../../container/footer/Footer';

const Testimonals = () => {
  return (
    <div className='ecoworld__testimonals'>
      <div className="ecoworld__testimonals_header">
        <Navbar />
      </div>
      <Overview image={images.testimonals} heading="Testimonals" about="Where inspiration is limitless, experiences are boundless. From life-changing adventures to self-discovery, hear people share their Ecoworld stories." />

      <div className="testimonals_cards">
        <div className="testimonals_cards_container">
          <TestimonalCard image={images.ceo1} content="'Ecoworld is where the future is! And we can say this after having being here for the past 5 years.'" designation="-Vishakha Nilakhe CEO, Kalyan Infra" quote={images.quote} />
          <TestimonalCard image={images.ceo2} content="'Ecoworld is where the future is! And we can say this after having being here for the past 5 years.'" designation="-Vishakha Nilakhe CEO, Kalyan Infra" quote={images.quote} />
        </div>
        <div className="arrows">
          <button >&lt;</button>
          <button >&gt;</button>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Testimonals