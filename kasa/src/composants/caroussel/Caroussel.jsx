import ArrowLeft from '../../images/arrow_left.png'
import ArrowRight from '../../images/arrow_right.png'
import { useState } from 'react'
import './caroussel.scss'


export default function Caroussel({ picturesSlider }) {
    const [slideshow, updateSlideshow] = useState(0);

    const nextSlide = () => {
        if (slideshow === picturesSlider.lenght - 1) {
            updateSlideshow(0)
        } else {
            updateSlideshow(slideshow + 1)
        }
    }

    const previousSlide = () => {
        if (slideshow === 0) {
            updateSlideshow(picturesSlider.lenght - 1)
        }
        else {
            updateSlideshow(slideshow - 1)
        }
    }

    return (
        <section style={{ backgroundImage: `url(${picturesSlider[slideshow]})` }} className='caroussel'>
            {picturesSlider.length > 1 &&
                <>
                    <img className='caroussel_arrow caroussel_arrow_right' src={ArrowRight} alt="show next slider" onClick={nextSlide} />
                    <img className='caroussel_arrow caroussel_arrow_left' src={ArrowLeft} alt="show previous slider" onClick={previousSlide} />
                </>
            }
        </section>
    )
}