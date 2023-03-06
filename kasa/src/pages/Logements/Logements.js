import './logements.scss'
import data from '../../data/data.json'
import pinkStar from '../../images/pink_star.png'
import greyStar from '../../images/grey_star.png'
import Header from '../../composants/header/Header'
import Footer from '../../composants/footer/Footer'
import Collapse from '../../composants/collapse/Collapse'
import Caroussel from '../../composants/caroussel/Caroussel'
import { useNavigate, useParams} from "react-router-dom"
import { useState, useEffect } from 'react'

export default function Logements() {
   
   const dataId = useParams().id;
   const navigate = useNavigate();
   const [location, setLocaion] = useState(null)
   const stars = [1, 2, 3, 4, 5];
   const [picturesSlider, setPicturesSlide] = useState([]);

   useEffect(() => {
      let item = data.filter(data => data.id === dataId)[0]; // on recherche le logement
      if (item !== undefined) {
          /*
              Si le logement est trouvé alors on met à jour le state
           */
          setLocaion(item)
          setPicturesSlide(item.pictures)
      } else {
          /*
              Si le logement n'est pas trouver alors on demande à naviguer vers une page qui n'existe pas,
               donc on se retrouve sur la page 404
           */
          navigate("/error")
      }
  }, [dataId]);

         return (
            <>
            {
               location && (
            <div>
                  <div>
                     <Header />
                     <Caroussel picturesSlider={picturesSlider} />
                     <main className='logement'>
                        <div className='logement_info'>
                           <div className='logement_info_content'>
                              <h2>{location.title}</h2>
                              <p>{location.location}</p>
      
                              <ul className='location_info_tags'>{location.tags.map((tag) =>
                                 <li className='location_info_tags_tag' key={tag}>{tag}</li>)}
                              </ul>
                           </div>
      
      
                     <div className='logement_info_host'>
                        <div className='logement_info_host_content'>
                        <div className='logement_info_host_name'>
                           <div className='logement_info_host_name_width'>{location.name}</div>
                        </div>
                        <img className='logement_info_host_profilpicture' src={location.profilpicture} alt='profil host'/>
                        </div>
                        <div className='logement_info_host_stars'>
                           {stars.map((data) =>
                              location.rating >= data ? (
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
                              <Collapse title={'Description'} content={location.description} />
                           </div>
                           <div className='logements_collapse_content'>
                              <Collapse title={'Équipements'} content={location.equipments} />
                           </div>
                        </div>
      
                     </main>
                     <Footer />
                  </div>
            
            </div>
               ) 
            }
        </>
         ) 
      
   }