import './Home.css';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import { useEffect } from 'react'
import Carousel from '../Carousels/ExploreCarousel';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import { ActivityTour, AroundTour, CuisineTour } from '../Tours/Tours';
import MainHeader from '../MainHeader/MainHeader';

const buttonVariants = {
    hover: {
        scale: 1.1,
        boxShadow: '0 0 10px #fff',
        textShadow: '0 0 5px #fff',
        transition: {
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
        }
    },
    hoverTwo: {
        scale: 1.1,
        boxShadow: '0 0 10px rgb(39, 39, 243)',
        textShadow: '0 0 5px #fff',
        transition: {
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
        }
    }
}

const Home = () => {
    // Initialize scroll animations
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    //Scroll to top on link clicks
    const scrollToTop = () => {
        window.scroll(0, 0)
    }

    return (
        <motion.div className='home-container'
        >
            {/***** Header *****/}
            <Navbar />

            {/***** Main  *****/}
            <MainHeader title='LAND' span='ICE' subtitle='ADVENTURE' paragraph='LETS MAKE YOUR BEST TRIP EVER' background='https://img4.goodfon.com/wallpaper/nbig/b/76/putishestvie-palatka-noch-svet-gory-kanada.jpg' />

            {/***** Explore sections *****/}
            <section className='explore'>
                <div data-aos='fade-right' className='explore-top'>
                    <div className='explore-top-info'>
                        <h1>Ice World</h1>
                        <p>Iceland amazes with its stunning atmosphere and nature</p>
                    </div>
                    <Carousel />
                </div>
                <div data-aos='zoom-in' className='explore-bottom-container'>
                    <div className='explore-bottom'>
                        <img className='explore-bottom-img' src='https://wallpaperboat.com/wp-content/uploads/2019/12/iceland-01.jpg' alt="explore" />
                        <div className="explore-bottom-info">
                            <h1 className='explore-bottom-h1'>Unforgettable Sights</h1>
                            <p className='explore-bottom-p'>Iceland is made up of a diverse landscape that includes glaciers, geothermal hot springs, spectacular ice caves, stunning waterfalls, and black sand beaches.</p>

                            <p>Its incredibly diverse landscape is what makes travelers so intrigued with this Nordic island nation and it is easily one of the most beautiful places on earth.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/***** Tours section *****/}
            <section className='tours'>
                <h1 className='tours-title'>Explore</h1>
                <ActivityTour background='https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80' />

                <AroundTour background='https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80' />

                <CuisineTour background='https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80' />

                <div className='sale-tour'>
                    <div data-aos='fade-up' className='sale-info'>
                        <span>
                            <h2>Iceland Glow</h2>
                            <h2 className='sale-sub-header'>Sale</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatum vero sed explicabo pariatur voluptatibus?Asperiores numquam, impedit placeat sunt voluptas reiciendis maxime natus odit veniam unde repudiandae cum recusandae quibusdam.</p>
                        </span>

                        <motion.button className='tour-btn'
                            variants={buttonVariants}
                            whileHover='hover'
                        >
                            Learn More <i style={{ marginLeft: '1rem' }} className="fas fa-hand-point-right"></i>
                        </motion.button>
                    </div>
                </div>
            </section>

            {/***** Photo grid section *****/}
            <section className='iceland-photos'>
                <h1 data-aos='fade-up'>Follow us @DiscoverIceland</h1>
                <div data-aos='zoom-in' className='photo-grid'>
                    <img src="https://images.unsplash.com/photo-1443926818681-717d074a57af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1559233622-74d351a510c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1556640483-2992793549cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1478004054926-5dcf4534dbf5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1464495131956-142fe25dd50c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1522225183079-95a3a2e618f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1505857231560-ec7df63800e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1557238687-f10be4e702ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1624017624329-fccb6b82841f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=865&q=80" alt="" />
                </div>
            </section>

            {/***** Home Footer *****/}
            <section className='home-footer-content'>
                <div data-aos='fade-up' className='home-footer-contact'>
                    <h2>Get in touch</h2>
                    <div className='form'>
                        <h4>Name</h4>
                        <p>Enter your name</p>
                        <h4>Email or Phone</h4>
                        <p>Enter your email or phone</p>
                        <h4>Your message</h4>
                        <p>Tell us about your interests, passions, neeedsm and any other details relevent to your trip.</p>
                        <motion.button
                            variants={buttonVariants}
                            whileHover='hoverTwo'
                        >Send</motion.button>
                    </div>
                </div>
                <div data-aos='fade' className='home-footer-container'>
                    <div className='home-footer'>
                        <div className='footer-socials'>
                            <p className='footer-headers'>Connect with us</p>
                            <ul className='footer-link-list'>
                                <i className="fab fa-facebook footer-social"></i>
                                <i className="fab fa-instagram footer-social"></i>
                                <i className="fab fa-twitter footer-social"></i>
                            </ul>
                        </div>
                        <div className='footer-links'>
                            <i className="fas fa-igloo"></i>
                            <ul className='footer-link-list home-footer-links'>
                                <Link to='/' style={{ textDecoration: 'none', color: '#fff ' }}>
                                    <li className='footer-link' onClick={scrollToTop}>Home</li>
                                </Link>
                                <Link to='/explore' style={{ textDecoration: 'none', color: '#fff ' }}>
                                    <li className='footer-link' onClick={scrollToTop}>Explore</li>
                                </Link>
                                <Link to='/travelinfo' style={{ textDecoration: 'none', color: '#fff ' }}>
                                    <li className='footer-link' onClick={scrollToTop}>Travel Info</li>
                                </Link>
                                <Link to='/contact' style={{ textDecoration: 'none', color: '#fff ' }}>
                                    <li className='footer-link' onClick={scrollToTop}>Contact</li>
                                </Link>
                            </ul>
                        </div>
                        <div className='footer-info'>
                            <p className='footer-headers'>Contacts</p>
                            <p>(470)-339-7965</p>
                            <p>IcelandDiscover@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )

}

export default Home
