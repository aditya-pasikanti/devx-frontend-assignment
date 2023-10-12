import React from 'react'
import './Management.css';
import Header from '../../../../container/header/Header';
import images from '../../image.js';
import details from '../../details';
import Reach from '../reach/Reach';
const Management = () => {
  return (
    <div className='brookfield_management'>
        <Header title="Brookfield Asset Management" content="Brookfield Asset Management is a leading global alternative asset manager with over US $800 billion in real estate, private equity, infrastructure and credit. Levereging a century-long investment history, we offer a wide range of products and services to investors worldwide with operational expertise, global reach and large-scale capital access." />
        <div className="management_image">
            <img src={images.management} alt="No Image" />
        </div>
        <div className="management_reach">
            <Reach title="REAL ESTATE" price="$260 B" lists={details.realEstate} />
            <Reach title="INFRASTRUCTURE" price="$137 B" lists={details.infrastructure} />
            <Reach title="RENEWABLE POWER" price="$68 B" lists={details.renewablePower} />
            <Reach title="PRIORITY EQUITY" price="$121 B" lists={details.privateEquity} />
            <Reach title="CREDIT" price="$163 B" lists={details.credit} />
        </div>
        <div className="management_assests">
            <h1>~$800 B+</h1>
            <p>ASSETS UNDER MANAGEMENT</p>
        </div>
    </div>
  )
}

export default Management