import React from 'react'
import { MdLocationOn } from 'react-icons/md';
import masterplan from '../../../../assets/campus/masterplan1.jpg'
import './Masterplan.css';

const Masterplan = () => {
  return (
    <div className='masterplan'>
        <h1>Masterplan</h1>

        <div className="masterplan_image">
            <img src={masterplan} alt="MAsterplan" />
        </div>

        <div className="masterplan_details">
            <p>
                <MdLocationOn />
                    Towers 10
            </p>
            <p>
                <MdLocationOn />
                Expanse - 7mm sq ft
            </p>
            <p>
                <MdLocationOn />
                30,000 - 86,000 sq ft
            </p>
        </div>

        <div className="masterplan_bottom">
            <h2>A Look at Ecoworld</h2>
            <p>Explore the campus through captivating photos that showcase everything that Ecoworld has to offer.</p>
        </div>
    </div>
  )
}

export default Masterplan