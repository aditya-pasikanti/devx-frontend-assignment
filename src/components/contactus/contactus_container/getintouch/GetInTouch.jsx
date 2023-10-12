import React, { useState } from 'react'
import './GetInTouch.css'
import images from '../../image.js'
const GetInTouch = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert("Sumitted");
    }

    return (
        <div className='getintouch'>
            <h1>Get In Touch With Us</h1>
            <div className="getintouch_form">
                <div className="form_image">
                    <img src={images.form} alt="No Image" />
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="getintouch_name">
                            <input
                                value={name}
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Name*' 
                                onChange={(e) => setName(e.target.value)}
                                autoComplete='off'
                            />
                        </div>
                        <div className="getintouch_email">
                            <input
                                value={email}
                                type="text"
                                name="email"
                                id="email"
                                placeholder='Email*' 
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete='off'
                            />
                        </div>
                        <div className="getintouch_mobile">
                            <input
                                value={mobile}
                                type="text"
                                name="mobile"
                                id="mobile"
                                placeholder='Mobile*' 
                                onChange={(e) => setMobile(e.target.value)}
                                autoComplete='off'
                            />
                        </div>
                        <div className="getintouch_message">
                            <input
                                value={message}
                                type="text"
                                name="message"
                                id="message"
                                placeholder='Message*' 
                                onChange={(e) => setMessage(e.target.value)}
                                autoComplete='off'
                            />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch