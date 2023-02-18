import Error from '../src/pages/Error/Error' ;
import Home from './pages/Home/Home' ;
//import Logements from './pages/Logements/Logements' ;
import About from './pages/About/About' ;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom' ;


export default function App() {
	return(
        
        <BrowserRouter >
        <Routes >
        <Route path = "/"
        element = { < Home /> }/>
        
        <Route path = "/Error"
        element = { < Error /> }/>

        <Route path = "/About"
        element = { <About /> }/>

        
        </Routes> 
        </BrowserRouter> 
       
    )
}



