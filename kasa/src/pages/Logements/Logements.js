import './logements.scss'
import data from '../../data/data.json'
import pinkStar from '../../images/pink_star.png'
import greyStar from '../../images/grey_star.png'
import Header from '../../composants/header/Header'
import Footer from '../../composants/footer/Footer'
import Collapse from '../../composants/collapse/Collapse'
import Caroussel from '../../composants/caroussel/Caroussel'
import { Navigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'



const Logements = () => {
   
   const dataId = useParams('id').id;
   const dataIdFilter = data.filter(data => data.id === dataId);
   const dataIdLogement = data.find(data => data.id === dataId) ;
   const description = dataIdFilter[0].description;
   const equipments = dataIdFilter[0].equipments;
   const name = dataIdFilter[0].host.name;
   const profilpicture = dataIdFilter[0].host.picture;
   const title = dataIdFilter[0].title;
   const location = dataIdFilter[0].location;
   const stars = [1, 2, 3, 4, 5];
   const rating = dataIdFilter[0].rating;
   const [picturesSlider, setPicturesSlide] = useState([]);



   useEffect(() => {
      const dataIdFilter = data.filter(data => data.id === dataId);
      setPicturesSlide(dataIdFilter[0].pictures)
   }, [dataId]);

   return (
      <div>
         {dataIdLogement? ( 
            <div>
               <Header />
               <Caroussel picturesSlider={picturesSlider} />
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
                  <div className='logement_info_host_content'>
                  <div className='logement_info_host_name'>
                     <div className='logement_info_host_name_width'>{name}</div>
                  </div>
                  <img className='logement_info_host_profilpicture' src={profilpicture} alt='profil host'/>
                  </div>
                  <div className='logement_info_host_stars'>
                     {stars.map((data) =>
                        rating >= data ? (
                           <img key={data.toString()} className="rating_icon" src={pinkStar} alt="red star" />
                        ) : (
                           <img key={data.toString()} className="rating_icon" src={greyStar} alt="grey star" />
                        )
                     )}
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
         ): <Navigate replace to='/Error'/>}
      </div>
   )
}

export default Logements;