import '../Error/error.scss'
import Header from '../../composants/header/Header'
import Footer from '../../composants/footer/Footer';
import { Link } from 'react-router-dom';

const Error = () => {

    return (
        <div>
        <Header />
        <div className='error'>
        <h1 className='error_title'>404</h1>
        <p className='error_content'>Oups ! La page que vous demandez n'existe pas. </p>
            <Link to='/' className='error_home'>Retourner sur la page d'accueil</Link>
        </div>
        <Footer />
        </div>
    )
}

export default Error;