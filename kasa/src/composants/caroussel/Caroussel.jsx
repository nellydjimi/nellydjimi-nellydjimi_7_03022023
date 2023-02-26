import ArrowLeft from '../../images/arrow_left.png'
import ArrowRight from '../../images/arrow_right.png'
import React, { useState } from 'react';

export default function Caroussel({ picturesSlide }) {
    const [slideshow, updateSlideshow] = useState(0);

    const nextSlide = () => {
        updateSlideshow(slideshow + 1)
        if (slideshow == picturesSlide.lenght - 1)
            updateSlideshow(0)
    }

    const previousSlide = () => {
        updateSlideshow(slideshow - 1)
        if (slideshow == 0)
            updateSlideshow(-1)
    }




    return (
        <div /*style={{backgroundImage : `url(${picturesSlide[slideshow]})`}} className='carousel'*/>
            <img className='carousel_arrow carousel_arrow_right'
                src={ArrowRight} alt="arrow right next slide" onClick={nextSlide} />
            <img className='carousel_arrow carousel_arrow_left'
                src={ArrowLeft} alt="arrow left previous slide" onClick={previousSlide} />
        </div>
    )
}