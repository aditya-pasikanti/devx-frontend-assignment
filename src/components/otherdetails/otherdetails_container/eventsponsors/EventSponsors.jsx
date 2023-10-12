import React from 'react'
import Awards from '../../../sustainability/sustainability_container/awards/Awards'
import './EventSponsors.css'
import { FaArrowRight } from 'react-icons/fa'
const EventSponsors = () => {
  return (
    <div className='eventsponsors'>
        <h1>Event Sponsors</h1>
        <Awards />
        <p> Become a sponsor <FaArrowRight /> </p>
    </div>
  )
}

export default EventSponsors