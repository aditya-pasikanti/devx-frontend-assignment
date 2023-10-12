import React from 'react'
import './Reach.css';
import { FaCircle } from 'react-icons/fa';
const Reach = ({ title, price, lists }) => {
  return (
    <div className='reach'>
        <h3> {title} </h3>
        <h1> {price} </h1>
        <div className="list_container">
            {lists.map((item) => (
                <p className="item"> <FaCircle style={{fontSize: '10px'}}/> {item} </p>
            ))}
        </div>
    </div>
  )
}

export default Reach