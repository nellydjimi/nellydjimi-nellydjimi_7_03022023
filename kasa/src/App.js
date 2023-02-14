import Error from '../src/pages/Error/Error' ;
import Home from '../src/pages/Home/Home' ;
import Logements from '../src/pages/Logements/Logements' ;
import About from '../src/pages/About/About' ;
import React from 'react';
import { BrowserRouter } from 'react-router-dom' ;


const router = BrowserRouter([
{
    path : "/Kasa/",
    element : <Home />
},
{
    path : "/Logoments/:id",
    element : <Logements />
},
{
    path : "/About/",
    element : <About />
},
{
    path : "/Error/",
    element : <Error />
},

]);

function App() {
	
}


export default App;
