import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './MainHeader.css';

const titleVariants = {
    hidden: {
        y: '100vh'
    },
    visible: {
        y: 0,
        transition: { type: 'spring', stiffness: 80, when: 'beforeChildren', }
    }
}

const titleChildVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1
    }
}

const iVariants = {
    visible: {
        y: [0, -40],
        transition: {
            y: {
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeOut',
                duration: 0.25
            }
        }
    },
}

const readMoreVariants = {
    hidden: {
        y: '100vh',
    },
    visible: {
        y: 0,
        transition: { delay: .5, duration: .8 }
    }
}

const MainHeader = ({ title, subtitle, background, span, paragraph }) => {
    // Parallax effect
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    // Initiaalize Parallax effect
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <motion.section className='main' style={{ background: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0,0,0,.6)', backgroundBlendMode: 'multiply' }}>
            {/***** Content with parallax effect *****/}
            <div className='main-content' style={{ transform: `translateY(-${offsetY * 1}px)` }}>
                <motion.div className='main-titles'
                    variants={titleVariants}
                    initial='hidden'
                    animate='visible'
                >
                    <span className='home-title'>
                        <span className='home-span'>{span}</span>
                        <h1>{title}</h1>
                    </span>
                    <motion.p className='home-p'
                        variants={titleChildVariants}
                    >
                        {paragraph}
                    </motion.p>
                    <motion.div className='home-read-more' variants={readMoreVariants} initial='hidden' animate='visible'>
                        <p>READ MORE</p>
                        <motion.div variants={iVariants} animate='visible' className="loader">
                            <i className="fas fa-arrow-alt-circle-down" style={{ cursor: 'auto' }}></i>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/***** Blend into next section *****/}
            <div className='fade-bottom'></div>
        </motion.section>
    )
}

export default MainHeader
