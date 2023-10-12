import React from 'react'
import './CurrentTenants.css';
import Header from '../../../../container/header/Header.jsx';
import images from './image';
import Video from '../campus_video/Video';
const CurrentTenants = () => {
    return (
        <div className='currenttenants'>
            <Header title="Current tenants at Ecoworld" content="Apart from featuring breathtaking nature, stunning designs and a pioneering work setting, Ecoworld has become a home to some companies." />
            <div className="companies">
                <img src={images.google} alt="No Image" />
                <img src={images.microsoft} alt="No Image" />
                <img src={images.infosys} alt="No Image" />
                <img src={images.tcs} alt="No Image" />
            </div>
            <div className="currenttenants_about">
                <Video />
                <div className="currenttenants_about_details">
                    <img src={images.quote} alt="No Image" />
                    <p className="currenttenants_content">
                        "Ecoworld is where the future is! And we can say this after having being here for the past 5 years."
                    </p>
                    <div>
                        <p> - Vishaka Nilakhe</p>
                        <p>CEO, Kalyan Infra</p>
                    </div>
                </div>
            </div>
            <div className="arrows">
                <button>&lt;</button>
                <button>&gt;</button>
            </div>
        </div>
    )
}

export default CurrentTenants