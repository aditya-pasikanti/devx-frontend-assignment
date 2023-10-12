import React from 'react'
import './Properties.css'
import Header from '../../../../container/header/Header'
import images from '../../image.js'
import PropertyNotes from '../property_notes/PropertyNotes'
import { FaCircle } from 'react-icons/fa'
const Properties = () => {
  return (
    <div className='brookfield_properties'>
        <Header title="Brookfield Properties" content="With more than 50-million sq ft Grade-A office parks in major markets, Brookfield Properties are India's leading developer and manager of commercial space." />
        <div className="properties_image">
            <img src={images.properties} alt="No Image" />
        </div>
        <div className="property_details">
            <div className="propertynotes_container">
                <PropertyNotes heading="38+" content="MSF OPERATIONAL" />
                <PropertyNotes heading="$8 B" content="GROSS ASSETVALUE"/>
                <PropertyNotes heading="12+" content="MSF UNDER ONGOING DEVELOPMENT"/>
            </div>
            <div className="propertynotes_locations">
                <p> <FaCircle style={{ fontSize: '10px', color: '#354033' }} /> Benguluru </p>
                <p> <FaCircle style={{ fontSize: '10px', color: '#354033' }} /> Chennai </p>
                <p> <FaCircle style={{ fontSize: '10px', color: '#354033' }} /> Gurugram </p>
                <p> <FaCircle style={{ fontSize: '10px', color: '#354033' }} /> Noida </p>
                <p> <FaCircle style={{ fontSize: '10px', color: '#354033' }} /> Delhi </p>
                <p> <FaCircle style={{ fontSize: '10px', color: '#354033' }} /> Mumbai </p>
                <p> <FaCircle style={{ fontSize: '10px', color: '#354033' }} /> Pune </p>
                <p> <FaCircle style={{ fontSize: '10px', color: '#354033' }} /> Hyderabad </p>
            </div>
        </div>
    </div>
  )
}

export default Properties