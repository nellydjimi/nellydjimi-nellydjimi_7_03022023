import './logements.scss'
import data from '../../data/data.json'
import pinkStar from '../../images/pink_star.png'
import greyStar from '../../images/grey_star.png'
import Header from '../../composants/header/Header'
import Footer from '../../composants/footer/Footer'
import Collapse from '../../composants/collapse/Collapse'
import Caroussel from '../../composants/caroussel/Caroussel'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

const Logements = () => {


   const dataId = useParams('id').id;
   const dataIdFilter = data.filter(data => data.id == dataId);
   const description = dataIdFilter[0].description;
   const equipments = dataIdFilter[0].equipments;
   const name = dataIdFilter[0].host.name;
   const profilpicture = dataIdFilter[0].host.picture;
   const title = dataIdFilter[0].title;
   const location = dataIdFilter[0].location;

   const [picturesSlide, setPicturesSlide] = useState([]);
   const rating = dataIdFilter[0].rating;

   useEffect(() => {

   }, [dataId]);

   return (
      <div>
         <Header />
         <Caroussel img={picturesSlide} />
         <main className='logement'>
            <div className='logement_info'>
               <div className='logement_info_content'>
                  <h2>{title}</h2>
                  <p>{location}</p>
                 
                  <ul className='location_info_tags'>{dataIdFilter[0].tags.map((tag) =>
                     <li className='location_info_tags_tag' key={tag}>{tag}</li>)}
                  </ul>
               </div> 


               <div className='logement_info_host'>
                  <div className='logement_info_host_name'>
                     <div className='logement_info_host_name_width'>{name}</div>
                  </div>
                  <img className='logement_info_host_profilpicture' src={profilpicture} />

                  <div className='logement_info_host_stars'>

                  </div>




               </div>





            </div>

            <div className='logements_collapse'>
               <div className='logements_collapse_content'>
                  <Collapse title={'Description'} content={description} />
               </div>
               <div className='logements_collapse_content'>
                  <Collapse title={'Équipements'} content={equipments} />
               </div>
            </div>
         </main>
         <Footer />
      </div>
   )
}

export default Logements;