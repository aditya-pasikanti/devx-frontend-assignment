import React from 'react'
import './Main.css'
import Header from '../../../../container/header/Header'
import Carousel from '../../../../container/carousel/Carousel'
const Main = ( {title, content, para, images} ) => {
  return (
    <div className='main'>
        <div className="main_header">
            <Header title={title} content={content} />
            <p> {para} </p>
        </div>
        <Carousel images={images} />
    </div>
  )
}

export default Main 