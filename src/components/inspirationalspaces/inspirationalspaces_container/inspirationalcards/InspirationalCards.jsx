import React from 'react'
import './InspirationalCards.css';
import CardLeft from '../../../../container/card_left/CardLeft';
import images from '../../image.js'
const InspirationalCards = () => {
  return (
    <div className='inspirationalcards'>
        <CardLeft image={images.ins1} heading="Headline Comes here" content="Find your nook amidst the sprawling green open spaces and native landscapes." />
        <CardLeft image={images.ins2} heading="Headline Comes here" content="Make conversations. Discuss ideas with calleagues. All while strolling along the wxpansive water bodies dotted all along the campus." />
        <CardLeft image={images.ins3} heading="Headline Comes here" content="Embrace tranquilty, find inspiration in captivating sculptures and immense yourself in an enchanting lanscape that sets your imagination free." />
    </div>
  )
}

export default InspirationalCards