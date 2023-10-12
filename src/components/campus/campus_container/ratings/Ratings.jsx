import React from 'react'
import { FaCircle } from 'react-icons/fa';
import ratings from '../../../../assets/campus/ratings.png'
import './Ratings.css'
const Ratings = () => {
  return (
    <div className='ratings'>
        <h2>Ratings & Certifications</h2>
        <div className="ratings_container">
            <div className="ratings_rewards">
                <img src={ratings} alt="No Image" />
            </div>
            <div className="ratings_details">
                <p>
                    <FaCircle style={{ fontSize: '10px', color: '#354033' }} />
                    <span>Largest Business Park to be certified under LEED ARC</span>
                </p>
                <p>
                    <FaCircle style={{ fontSize: '10px', color: '#354033' }} />
                    <span>USGBC Gold Rated Grade A Commercial Campus Development</span>
                </p>
                <p>
                    <FaCircle style={{ fontSize: '10px', color: '#354033' }} />
                    <span>One of the Largest 'Grade-A' Campuses in Asia</span>
                </p>
                <p>
                    <FaCircle style={{ fontSize: '10px', color: '#354033' }} />
                    <span>Brookfield properties is the Founding Member of CI BDN and signed up for the 'The Valuable 500'</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Ratings