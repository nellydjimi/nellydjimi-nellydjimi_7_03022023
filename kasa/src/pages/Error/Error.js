import '../Error/error.scss'
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className='error'>
<h1>404</h1>
<p>OUps ! La page que vous demandez n'existe pas. </p>
<Link>Retourner sur la page d'accueil</Link>
        </div>
    )
}