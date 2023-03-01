import '../Home/home.scss'
import React from 'react'
import Header from '../../composants/header/Header'
import HomeBackground from '../../images/homebackground.png'
import Location from '../../composants/location/Location'
import Footer from '../../composants/footer/Footer'

export default function Home() {
 


    return ( 
        <div>
        <Header />
        <section className= 'banner' >
            <img src={HomeBackground} alt='Imagebanner' className='banner_img'></img>
			<p className='banner_img_title'>Chez vous, partout et ailleurs</p>
		</section>
        <Location/>
        <Footer />
        </div>
        
    )
}


