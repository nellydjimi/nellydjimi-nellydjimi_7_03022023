import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='header'>
            <img src={Logo} alt="Logo Kasa" />
            <nav className='nav'>
                <ul>
                    <li>
                        <Link to='/Kasa/'> Accueil </Link>
                    </li>
                    <li>
                        <Link to='/About'> A propos </Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}