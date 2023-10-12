import React from 'react'
import './Section.css'
import Navbar from '../navbar/Navbar'
import { FaArrowLeft } from 'react-icons/fa'
const Section = ({heading}) => {
  return (
    <div>
        <div className="ecoworld__header">
        <Navbar />
        <div className="section_explore">
          <FaArrowLeft /> Explore Other Topics
        </div>
        <div className="heading">
          <h3>{heading}</h3>
        </div>
      </div>
    </div>
  )
}

export default Section