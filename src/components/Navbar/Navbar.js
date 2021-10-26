import './Navbar.css';
import { useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const navVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1,
            delay: 1
        }
    }
}

const scrollToTop = () => {
    window.scroll(0, 0)
}

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [navBackground, setNavBackground] = useState(false);

    // Add background color to nav after scroll point
    const addNavBackground = () => {
        if (window.scrollY >= 529) {
            setNavBackground(true)
        } else {
            setNavBackground(false)
        }
    }

    window.addEventListener('scroll', addNavBackground)


    return (
        <motion.nav className={navBackground ? 'nav background' : 'nav'}
            variants={navVariants}
            initial='hidden'
            animate='visible'
        >
            <Link to='/' style={{ textDecoration: 'none', color: '#fff ' }} onClick={scrollToTop}>
                <li><h1 className="nav-icon">ICELAND</h1></li>
            </Link>
            <i id='burger' className={`fas fa-${navOpen ? 'times' : 'bars'}`} onClick={() => setNavOpen(!navOpen)}></i>
            <ul className={navOpen ? 'nav-links active' : 'nav-links'}>
                <Link to='/' style={{ textDecoration: 'none', color: '#fff ' }}>
                    <li className="nav-link" onClick={scrollToTop}>Home</li>
                </Link>
                <Link to='/explore' style={{ textDecoration: 'none', color: '#fff ' }}>
                    <li className="nav-link" onClick={scrollToTop}>Explore</li>
                </Link>
                <Link to='travelinfo' style={{ textDecoration: 'none', color: '#fff ' }}>
                    <li className="nav-link" onClick={scrollToTop}>Travel Info</li>
                </Link>
                <Link to='contact' style={{ textDecoration: 'none', color: '#fff ' }}>
                    <li className="nav-link" onClick={scrollToTop}>Contact</li>
                </Link>

            </ul>
        </motion.nav>
    )
}

export default Navbar
