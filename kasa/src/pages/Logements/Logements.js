import './logements.scss'
import data from '../../data/data.json'
import pinkStar from '../../images/pink_star.png'
import greyStar from '../../images/grey_star.png'
import Header from '../../composants/header/Header'
import Footer from '../../composants/footer/Footer'
import Collapse from '../../composants/collapse/Collapse'
import Caroussel from '../../composants/caroussel/Caroussel'
import { useParams } from "react-router-dom";

const Logements = () => {

const dataId = useParams('id').id;
const dataIdFilter = data.filter(data => data.id == dataId) ;
const description = dataIdFilter[0].description ;
const equipments = dataIdFilter[0].equipments ;
   return (
      <div>
         <Header />
      
            <div className='logements_collapse'>
               <div className='logements_collapse_content'>
                  <Collapse title={'Description'} content={description } />
               </div>
               <div className='logements_collapse_content'>
                  <Collapse title={'Équipements'} content={equipments} />
               </div>
            </div>
         
    <Footer />
    </div>
   )
}

export default Logements;