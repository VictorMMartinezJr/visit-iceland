import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ArcticCircleTour, BatheTour, HikingTour, IcelandicFoodTour, LambTour, NorthernLightsTour, SeafoodTour, SnorklingTour, VolcanoTour, WhaleTour } from '../Tours/Tours';
import MainHeader from '../MainHeader/MainHeader';
import { motion } from 'framer-motion';
import './Explore.css'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: {
        opacity: 0,
        transition: { ease: 'easeInOut' }
    }
}

const Explore = () => {

    return (
        <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            {/***** Header *****/}
            <Navbar />

            {/***** Main *****/}
            <MainHeader title='LORE' span='EXP' paragraph='ESCAPE FROM REALITY' background='https://images.unsplash.com/photo-1523297741243-79e695ee9a44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80' />

            {/***** Tours *****/}
            <section className='explore-content'>
                <section className='tours'>
                    <h1 className='tours-title'>Activites</h1>
                    <HikingTour background='https://images.unsplash.com/photo-1517321579022-aa4d037c3b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80' />

                    <WhaleTour background='https://images.unsplash.com/photo-1509122696753-d01769640838?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2149&q=80' />

                    <NorthernLightsTour background='https://images.unsplash.com/photo-1542668083-fad855298842?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80' />

                    <SnorklingTour background='https://images.unsplash.com/photo-1586508577428-120d6b072945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80' />

                </section>
            </section>
            <section className='tours'>
                <VolcanoTour background='https://images.unsplash.com/photo-1555339990-18e05015e062?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80' />

                <ArcticCircleTour background='https://images.unsplash.com/photo-1503527142795-ec26d5a9ea52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80' />

                <BatheTour background='https://images.unsplash.com/photo-1470010762743-1fa2363f65ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
            </section>
            <section className='tours'>
                <h1 className='tours-title'>ICELAND CUISINE</h1>
                <IcelandicFoodTour background='https://images.unsplash.com/photo-1559339352-11d035aa65de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80' />

                <SeafoodTour background='https://images.unsplash.com/photo-1559339352-11d035aa65de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80' />

                <LambTour background='https://images.unsplash.com/photo-1559339352-11d035aa65de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80' />

                {/***** Footer *****/}
                <Footer />
            </section>
        </motion.div>
    )
}

export default Explore
