import React, { useRef } from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Carousel.css';

const Carousel = ({ images }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        }
        else {
            current.scrollLeft += 300;
        }
    }
    return (
        <div className="carousel__images">
            <div className="carousel__images_container" ref={scrollRef}>
                {images.map((image, index) => (
                    <div className="carousel__images_card" key={`carousel_image-${index + 1}`}>
                        <img src={image} alt="Gallery" />
                        {/* <BsInstagram className='gallery__image-icon' /> */}
                    </div>
                ))}
            </div>
            <div className="carousel__images_arrows">
                <BsArrowLeftShort className='carousel__arrow-icon' onClick={() => scroll('left')} />
                <BsArrowRightShort className='carousel__arrow-icon' onClick={() => scroll('right')} />
            </div>
        </div>
    )
}

export default Carousel