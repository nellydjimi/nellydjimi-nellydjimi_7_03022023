//import Error from '../src/pages/Error/Error' ;
import Home from '../src/pages/Home/Home' ;
//import Logements from '../src/pages/Logements/Logements' ;
//import About from '../src/pages/About/About' ;
import React from 'react';
import { BrowserRouter, RouterProvider } from 'react-router-dom' ;


const router = BrowserRouter([
{
    path : "/",
    element : <Home />
},


]);

function App() {
	return(
        <>
            <RouterProvider router={router}/>
        </>
    )
}


export default App;
