import Header from '../../composants/header/Header'
import Footer from '../../composants/footer/Footer'
import Banner from '../../composants/banner/Banner'
import Collapse from '../../composants/collapse/Collapse'
import '../About/about.scss'


const About = () => {
    
    const aboutList = [
        {
            "keys" : "1",
            "title" : "Fiabilité" ,
            "content" : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        },
        {
            "keys" : "2",
            "title" : "Respect" ,
            "content" : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "keys" : "3",
            "title" : "Service" ,
            "content" : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            "keys" : "4",
            "title" : "Sécurité" ,
            "content" : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ]
return (
   
 <div>
    <Header />
    <Banner />
   
    <Footer />
 </div>
)
}

export default About;
