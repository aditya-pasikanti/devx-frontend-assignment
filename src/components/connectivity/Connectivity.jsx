import React from 'react'
import Navbar from '../../container/navbar/Navbar'
import './Connectivity.css'
import Overview from '../../container/overview/Overview'
import connectivity from '../../assets/connectivity/connectivity.png'
import SeamlessConnectivity from './connectivity_container/seamless_connectivity/SeamlessConnectivity'

const Connectivity = () => {
  return (
    <div className='ecoworld__connectivity'>
      <div className='ecoworld__connectivity_header'>
        <Navbar />
      </div>
      <Overview heading="Connectivity" image={connectivity} about="Explore thr perks of a strategically located workplace that lends a work-life balance, offering a harmonious workday to all." />
      <SeamlessConnectivity />
    </div>
  )
}

export default Connectivity