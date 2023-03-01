import { Link } from 'react-router-dom'
import './card.scss'

const Card = ({id, cover, title})=> {
    return (
        <Link to={`/Logements/${id}`}  className="card">
           <img src={cover}  alt='images logements' className='card_image'/>
          <h2 className='card_image_title'>{title}</h2>
        </Link>
    )
}

export default Card