import '../footer/footer.scss'
import Logo from '../../images/logoFooter.png'

export default function Footer(){
    return (
        <footer>
            <img src={Logo} alt='Logo footer' />
            <p className='rightFooter'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}