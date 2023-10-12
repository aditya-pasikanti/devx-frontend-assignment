import React from 'react'
import './ContactUs.css';
import images from './image.js';

import contacts from './contacts';
import ContactUsCard from './contactus_container/contactus_cards/ContactUsCard';
import GetInTouch from './contactus_container/getintouch/GetInTouch';
import MoreAbout from './contactus_container/moreabout/MoreAbout';
import Section from '../../container/section/Section';

const ContactUs = () => {
  return (
    <div className='ecoworld_contactus'>
      <Section heading="Connect with us today and get all your queries answered." />
      <div className="contactus_cards">
        <ContactUsCard image={images.card1} heading="Office Leasing" contact={contacts[0]} />
        <ContactUsCard image={images.card2} heading="Retail Leasing" contact={contacts[1]} />
      </div>
      <GetInTouch />
      <MoreAbout />
    </div>
  )
}

export default ContactUs