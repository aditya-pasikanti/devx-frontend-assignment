import React from 'react'
import './PropertyNotes.css';
const PropertyNotes = ({ heading, content }) => {
  return (
    <div className='propertynotes'>
        <h1> {heading} </h1>
        <p> {content} </p>
    </div>
  )
}

export default PropertyNotes