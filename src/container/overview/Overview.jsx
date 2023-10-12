import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import './Overview.css'
import Explore from '../explore/Explore';

const Overview = ({ heading, info, image, about }) => {
    return (
        <div className="overview">
            <Explore />
            <div className="overview_container">
                <div className="overview_info">
                    <p>{heading}</p>
                    <p>{info}</p>
                </div>
                <div className="overview_img">
                    <img src={image} alt="No Image" />
                </div>
                <div className="overview_about">
                    {about}
                </div>
            </div>
        </div>
    )
}

export default Overview