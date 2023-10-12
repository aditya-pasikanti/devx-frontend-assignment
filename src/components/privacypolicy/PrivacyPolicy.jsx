import React from 'react'
import './PrivacyPolicy.css';
import Policy from './policy/Policy';
import Navbar from '../../container/navbar/Navbar';
import Explore from '../../container/explore/Explore';
const PrivacyPolicy = () => {
    return (
        <div className="container">
            <div className="ecoworld__container_header">
                <Navbar />
            </div>
            <div className="content_container">

                <Explore />
                <div className='ecoworld_privacypolicy'>
                    <h1>Privacy Policy</h1>
                    <Policy />
                </div>
                <div className="ecoworld_disclaimer">
                    <h1>Disclaimer</h1>
                    <Policy />
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy