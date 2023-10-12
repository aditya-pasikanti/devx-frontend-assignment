import React from 'react'
import './Header.css'

const Header = ({ title, content }) => {
  return (
    <div className='header'>
        <h2> { title } </h2>
        <p> { content } </p>
    </div>
  )
}

export default Header