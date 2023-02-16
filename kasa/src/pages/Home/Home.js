import '../Home/home.scss'
import React from 'react'
import Header from '../../composants/header/Header'
import Banner from '../../composants/banner/Banner'
import Location from '../../composants/location/Location'
import Footer from '../../composants/footer/Footer'

export default function Home(){
    console.log("accueil kasa")
    return(
        <div>
            <Header />
            <Banner />
            <Location />
            <Footer />
        </div>
    )
}