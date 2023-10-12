import React from 'react'
import './HomeRouter.css'
const HomeRouter = ({ image, heading, content }) => {
  return (
    <div className='home_router_container'>
        <div className="router_image">
            <img src={image} alt="No Image" />
        </div>
        <div className="router_content">
            <h2> {heading} </h2>
            <p> {content} </p>
        </div>
    </div>
  )
}

export default HomeRouter