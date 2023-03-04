import ArrowLeft from '../../images/arrow_left.png'
import ArrowRight from '../../images/arrow_right.png'
import { useState } from 'react'
import './caroussel.scss'


export default function Caroussel({ picturesSlider }) {
    const [slideshow, updateSlideshow] = useState(0);
    

    const nextSlide = () => {
        updateSlideshow(slideshow === picturesSlider.length - 1 ? 0 : slideshow + 1);
    }

    const previousSlide = () => {
        updateSlideshow(slideshow === 0 ? picturesSlider.length - 1 : slideshow - 1); 
    }

    return (
        <section style={{ backgroundImage: `url(${picturesSlider[slideshow]})` }} className='caroussel'>
            {picturesSlider.length > 1 &&
                <>
                    <img className='caroussel_arrow caroussel_arrow_right' src={ArrowRight} alt="show next slider" onClick={nextSlide} />
                     <img className='caroussel_arrow caroussel_arrow_left' src={ArrowLeft} alt="show previous slider" onClick={previousSlide} />
                     <p className='numberslide'>{slideshow + 1} / {picturesSlider.length}</p>
                </>
            }
            <p></p>
        </section>
    )
}