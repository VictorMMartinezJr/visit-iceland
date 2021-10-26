import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    // Scroll to top on link clicks
    const scrollToTop = () => {
        window.scroll(0, 0)
    }

    return (
        <div data-aos='fade' className='home-footer-secondary'>

            {/***** Footer socials *****/}
            <div className='footer-socials secondary'>
                <p className='footer-headers secondary'>Connect with us</p>
                <ul className='footer-link-list secondary'>
                    <i className="fab fa-facebook footer-social secondary"></i>
                    <i className="fab fa-instagram footer-social secondary"></i>
                    <i className="fab fa-twitter footer-social secondary"></i>
                </ul>
            </div>

            {/***** Footer nav links *****/}
            <div className='footer-links secondary'>
                <i className="fas fa-igloo"></i>
                <ul className='footer-link-list secondary column'>
                    <Link to='/' style={{ textDecoration: 'none', color: '#fff ' }}>
                        <li className='footer-link secondary' onClick={scrollToTop}>Home</li>
                    </Link>
                    <Link to='/explore' style={{ textDecoration: 'none', color: '#fff ' }}>
                        <li className='footer-link secondary' onClick={scrollToTop}>Explore</li>
                    </Link>
                    <Link to='/travelinfo' style={{ textDecoration: 'none', color: '#fff ' }}>
                        <li className='footer-link secondary' onClick={scrollToTop}>Travel Info</li>
                    </Link>
                    <Link to='/contact' style={{ textDecoration: 'none', color: '#fff ' }}>
                        <li className='footer-link secondary' onClick={scrollToTop}>Contact</li>
                    </Link>
                </ul>
            </div>

            {/***** Footer contact info *****/}
            <div className='footer-info secondary'>
                <p className='footer-headers secondary'>Contacts</p>
                <div className='footer-contact-email'>
                    <p>(470)-339-7965</p>
                    <p>IcelandDiscover@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
