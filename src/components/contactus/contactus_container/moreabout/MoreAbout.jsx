import React, { useState } from 'react'
import './MoreAbout.css';
const MoreAbout = () => {

    const [email, setEmail] = useState('');

    return (
        <div className='moreabout'>
            <h1>To know more about Ecoworld</h1>
            <div className="field">
                <form action="">
                    <div className="moreabout_email">
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
                    <button type='submit'>Download Brochure</button>
                </form>
            </div>
        </div>
    )
}

export default MoreAbout