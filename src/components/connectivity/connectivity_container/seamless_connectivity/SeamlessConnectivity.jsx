import React from 'react'
import Header from '../../../../container/header/Header'
import './SeamlessConnectivity.css'
import location from '../../../../assets/connectivity/location.png'
import { FaCircle } from 'react-icons/fa';

const SeamlessConnectivity = () => {
  return (
    <div className='seamless_connectivity'>
        <Header title="Seamless Connectivity" content="A strategic location where everything is within your reach" />
        <div className="seamless_connectivity_container">
            <div className="seamless_connectivity_location">
                <img src={location} alt="No Image" />
            </div>
            <div className="seamless_connectivity_details">
                <p className='locations'>
                    <FaCircle style={{ fontSize: '10px', color: '#354033' }} />
                    <span>KR PURAM</span>
                    <p>17.02km</p>
                </p>
                <p className='locations'>
                    <FaCircle style={{ fontSize: '10px', color: '#354033' }} />
                    <span>Biappanahalli Metro Station</span>
                    <p>13.04km</p>
                </p>
                <p className='locations'>
                    <FaCircle style={{ fontSize: '10px', color: '#354033' }} />
                    <span>Indiranagar</span>
                    <p>13.02km</p>
                </p>
                <p className='locations'>
                    <FaCircle style={{ fontSize: '10px', color: '#354033' }} />
                    <span>Sakra Hospital</span>
                    <p>01.60km</p>
                </p>
                <p className='locations'>
                    <FaCircle style={{ fontSize: '10px', color: '#354033' }} />
                    <span>New Horizon College</span>
                    <p>03.20km</p>
                </p>
                <p className='locations'>
                    <FaCircle style={{ fontSize: '10px', color: '#354033' }} />
                    <span>Marathahalli</span>
                    <p>04.70km</p>
                </p>
                <p className='locations'>
                    <FaCircle style={{ fontSize: '10px', color: '#354033' }} />
                    <span>Leela Palace Hotel</span>
                    <p>12.60km</p>
                </p>
            </div>
        </div>
    </div>
  )
}

export default SeamlessConnectivity