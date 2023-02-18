import { Link } from 'react-router-dom'

const Card = ({cover, title})=> {
    console.log(cover)
    return (
        
        <Link to={'/Logements/:{id}'} className="card_location">
           <img src={cover}  alt={title}/>
          <h2>{title}</h2>
        </Link>

    )
}

export default Card