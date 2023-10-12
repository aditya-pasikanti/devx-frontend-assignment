import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_container">
                <div className="footer-links">
                    <div className="footer-links_logo">
                        <h1>ECOWORLD</h1>
                    </div>
                    <div className="footer-links_div">
                        <Link to='/otherdetails'>

                            <li>Our Properties</li>
                        </Link>
                        <li>Careers</li>
                        <li>Case Studies</li>
                        <li>Sustainability</li>
                        <Link to='events' className='link'>
                            <li>Events</li>
                        </Link>
                        <Link to='/mediacenter'>
                            <li>Media resources</li>
                        </Link>
                    </div>
                    <div className="footer-links_div">
                        <li>Development</li>
                        <li>Office</li>
                        <li>Retail</li>
                        <li>Logistics</li>
                        <li>Multifamily</li>
                        <li>Hospitality</li>
                    </div>
                    <div className="footer-links_div">
                        <Link to="/contactus">

                            <li>Contact</li>
                        </Link>
                        <li>Accessibility</li>
                        <li>Brookfield Assest Management</li>

                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2023 Brookfield Properties</p>
                <p>Terms Privacy Policy Cookies Setting</p>
                <p>Your Privacy Choices</p>
            </div>
        </div>
    )
}

export default Footer