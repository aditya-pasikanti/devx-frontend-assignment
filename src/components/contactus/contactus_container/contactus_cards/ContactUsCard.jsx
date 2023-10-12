import React from 'react'
import './ContactUsCard.css';

const ContactUsCard = ({ image, heading, contact }) => {
    return (
        <div className='contactuscard'>
            <div className="contactuscard_image">
                <img src={image} alt="No Card Image" />
            </div>
            <div className="contactuscard_content">
                <h3> {heading} </h3>
                <div>
                    <p> {contact.name} </p>
                    <p> {contact.number} </p>
                    <p> {contact.email} </p>
                </div>
            </div>
        </div>
    )
}

export default ContactUsCard