import React, { useState } from 'react';
import { Cross as Hamburger } from 'hamburger-react';
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
  return (
    <div className='ecoworld__navbar'>
        <h1>ECOWORLD</h1>
        <Hamburger color='white' toggled={isOpen} toggle={setOpen} />
    </div>
  )
}

export default Navbar