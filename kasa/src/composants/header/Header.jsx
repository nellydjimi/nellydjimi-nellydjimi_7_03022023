import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = ()=> {
    return (
        <header className='header'>
            <Link to='/'>
            <img src={Logo} alt="Logo Kasa" />
            </Link>
            <nav className='nav'>
                <ul className='nav_list'>
                    <li className='nav_list_item '>
                        <Link to='/'> Accueil </Link>
                    </li>
                    <li className='nav_list_item '>
                        <Link to='/About'> A propos </Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header