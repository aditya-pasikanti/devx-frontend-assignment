import React from 'react'
import Navbar from '../../container/navbar/Navbar'
import images from './image.js'
import './Brookfield.css'
import Overview from '../../container/overview/Overview'
import Properties from './brookfield_container/properties/Properties'
import Management from './brookfield_container/management/Management'
const Brookfield = () => {
  return (
    <div className='ecoworld__brookfield'>
      <div className="ecoworld__brookfield_header">
        <Navbar />
      </div>
      <Overview image={images.brookfield} heading="About Brookfield" about="Brookfield Coorperation, a Canadian multinational, is a key player in global alternative investment management. Our focus is investing int he worldwide economy's essential foundations, we remain dedicated to improving communities." />
      <Properties />
      <Management />
    </div>
  )
}

export default Brookfield