import '../footer/footer.scss'
import Logo from '../../images/logoFooter.png'

const Footer = ()=>{
    return (
        <footer className='footer'>
            <div>
            <img src={Logo} alt='Logo footer' />
            <p className='footer_right'>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer