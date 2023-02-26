import ArrowLeft from '../../images/arrow_left.png'
import ArrowRight from '../../images/arrow_right.png'
import React, { useState } from 'react';

export default function Caroussel({ picturesSlider }) {
    const [slideshow, updateSlideshow] = useState(0);

    const nextSlide = () => {
        updateSlideshow(slideshow + 1)
        if (slideshow == picturesSlider.lenght - 1)
            updateSlideshow(0)
    }

    const previousSlide = () => {
        updateSlideshow(slideshow - 1)
        if (slideshow == 0)
            updateSlideshow(-1)
    }

    return (
        <div style={{backgroundImage : `url(${picturesSlider[slideshow]})`}} className='caroussel'>
{picturesSlider.lenght > 1 &&
<>
            <img className='caroussel_arrow caroussel_arrow_right'
                src={ArrowRight} alt="arrow right next slide" onClick={nextSlide} />
            <img className='caroussel_arrow caroussel_arrow_left'
                src={ArrowLeft} alt="arrow left previous slide" onClick={previousSlide} />
                <div className='caroussel_slide'>{slideshow + 1} / {picturesSlider.length}</div>
</>
}
        </div>
    )
}