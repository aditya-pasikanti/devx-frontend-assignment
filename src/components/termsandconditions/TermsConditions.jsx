import React from 'react'
import './TermsConditions.css';
import Navbar from '../../container/navbar/Navbar';
import Explore from '../../container/explore/Explore';
import Footer from '../../container/footer/Footer';
import Terms from './terms_container/Terms';
const TermsConditions = () => {
    return (
        <div className='ecoworld__termsandconditions'>
                <div className="ecoworld__termsandconditions_header">
                    <Navbar />
                </div>
            {/* <div className="ecoworld__termsandconditions_container"> */}
                <div className="termsandconditions">
                    <Explore />
                    <div className="termsandconditions_heading">
                        <h1>Terms and Conditions</h1>
                    </div>
                    <Terms />
                </div>
            {/* <Footer /> */}
        </div>
    )
}

export default TermsConditions