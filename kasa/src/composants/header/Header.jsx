import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = ()=> {
    return (
        <header className='header'>
            <img src={Logo} alt="Logo Kasa" />
            <nav className='nav'>
                <ul className='nav_list'>
                    <li className='nav_list_item_active '>
                        <Link to='/'> Accueil </Link>
                    </li>
                    <li className='nav_list_item_active '>
                        <Link to='/About'> A propos </Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header