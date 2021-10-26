import { motion } from 'framer-motion';
import ReactCarousel from '../Carousels/ReactCarousel';
import { TourDataActivities, TourDataAround, TourDataFood, Hiking, WhaleWatch, NorthernLights, Diving, Volcanoes, Arctic, Bath, Food, LambMeat, Seafood } from '../Data';
import './Tours.css';
import { Link } from 'react-router-dom';

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

//Scroll to top on link clicks
const scrollToTop = () => {
    window.scroll(0, 0)
}

export const ActivityTour = ({ background }) => {
    return (
        <div data-aos='slide-left' className='tour' style={{
            background: `url('${background}')`, backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,.6)',
            backgroundBlendMode: 'multiply', backgroundPosition: 'top'
        }}>
            <ReactCarousel data={TourDataActivities} />
            <div className='tour-info'>
                <div className='tour-text'>
                    <h2 className='tour-h1'>Activities in Iceland</h2>
                    <p className="tour-p">Every day, there is an adventure waiting to happen in Iceland. With its abundance of mountains, volcanoes, glaciers, rivers, lakes, caves and otherwise rough terrain waiting to be tackled, Iceland is truly an outdoor enthusiast's paradise. But, it is also a warm and welcoming place for the rest of us.</p>
                </div>
                <Link to='/explore' style={{ textDecoration: 'none' }}>
                    <motion.button className='tour-btn'
                        variants={buttonVariants}
                        whileHover='hover'
                        onClick={scrollToTop}
                    >
                        Learn More <i style={{ marginLeft: '1rem' }} className="fas fa-hand-point-right"></i>
                    </motion.button>
                </Link>
            </div>
        </div>
    )
}

export const AroundTour = ({ background }) => {
    return (
        <div data-aos='slide-right' className='tour' style={{
            background: `url('${background}')`, backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,.6)',
            backgroundBlendMode: 'multiply', backgroundPosition: 'center'
        }}>
            <ReactCarousel data={TourDataAround} />
            <div className='tour-info'>
                <div className='tour-text'>
                    <h2 className='tour-h1'>Around Iceland</h2>
                    <p className="tour-p">The best time to experience Iceland is all year-round.<br /> Iceland is a country of extreme contrasts where long summer days with 24-hours of sunlight are offset by short winter days.You might want to visit during fall or winter and see the Northern lights with your own eyes.Or soak in one of the countless geothermal pools around the country - any given time of the year.</p>
                </div>
                <Link to='/explore' style={{ textDecoration: 'none' }}>
                    <motion.button className='tour-btn'
                        variants={buttonVariants}
                        whileHover='hover'
                        onClick={scrollToTop}
                    >
                        Learn More <i style={{ marginLeft: '1rem' }} className="fas fa-hand-point-right"></i>
                    </motion.button>
                </Link>
            </div>
        </div >
    )
}

export const CuisineTour = ({ background }) => {
    return (
        <div data-aos='slide-left' className='tour black-fade' style={{
            background: `url('${background}')`, backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,.6)',
            backgroundBlendMode: 'multiply', backgroundPosition: 'bottom'
        }}>
            <ReactCarousel data={TourDataFood} />
            <div className='tour-info'>
                <div className='tour-text'>
                    <h2 className='tour-h1'>Iceland Cuisine</h2>
                    <p className="tour-p">Iceland has emerged as one of Europe's most dynamic gastronomic destinations, full of exciting places to taste thrilling new recipes.
                        A staple of Icelandic cuisine is freshly caught fish, as fishing has been an essential part of Icelandic history and culture for centuries.</p>
                </div>
                <Link to='/explore' style={{ textDecoration: 'none' }}>
                    <motion.button className='tour-btn'
                        variants={buttonVariants}
                        whileHover='hover'
                        onClick={scrollToTop}
                    >
                        Learn More <i style={{ marginLeft: '1rem' }} className="fas fa-hand-point-right"></i>
                    </motion.button>
                </Link>
            </div>
        </div>
    )
}

/**********  Explore Page Tours **********/

export const HikingTour = ({ background }) => {
    return (
        <div data-aos='slide-left' className='tour' style={{
            background: `url('${background}')`, backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,.6)',
            backgroundBlendMode: 'multiply', backgroundPosition: 'bottom'
        }}>
            <ReactCarousel data={Hiking} />
            <div className='tour-info'>
                <div className='tour-text'>
                    <h2 className='tour-h1'>Hiking in Iceland</h2>
                    <p className="tour-p">Walking and hiking in Iceland’s diverse landscapes is a fantastic way to experience the island’s unique nature, especially during the long days of summer. </p>
                    <h2 className='tour-h1 extra-info'>Hiker's Paradise</h2>
                    <p className="tour-p extra-info">Iceland is a hiker’s paradise, with a wide network of trails in lowland and highland areas. With trails that run across mountains, along valleys or rugged coastlines, over moss-grown lava fields, explore waterfalls, hot springs, volcanoes, and glaciers, to name a few.</p>

                    <p className='extra-info'>All around Iceland, you will find various hiking routes, and each part of the country has its specialty and unique nature gems.</p>
                </div>
            </div>
        </div>
    )
}

export const WhaleTour = ({ background }) => {
    return (
        <div data-aos='slide-right' className='tour' style={{
            background: `url('${background}')`, backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,.6)',
            backgroundBlendMode: 'multiply', backgroundPosition: 'center'
        }}>
            <ReactCarousel data={WhaleWatch} />
            <div className='tour-info'>
                <div className='tour-text'>
                    <h2 className='tour-h1'>Whale Watching</h2>
                    <p className="tour-p">Iceland is the perfect location for whale watching. The cold waters off the coast play host to diverse marine life.<span className='extra-info'> During the summer months, in particular, the shores become a veritable feeding ground for multiple species of large marine mammals, giving visitors a chance to observe these magnificent creatures in their natural habitat.</span></p>
                    <h2 className='tour-h1 extra-info'>Optimal Time To Whale Watching</h2>
                    <p className="tour-p extra-info">The best time to see whales in Iceland is from April until September when several species of Cetacea are frequently spotted. While whale watching tours are less frequent in the winter months, they come with the bonus of beautiful and stark scenery; snowcapped mountains, sunsets, and possibly even the chance to see the Northern Lights.</p>
                </div>
            </div>
        </div>
    )
}

export const NorthernLightsTour = ({ background }) => {
    return (
        <div data-aos='slide-left' className='tour' style={{
            background: `url('${background}')`, backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,.6)',
            backgroundBlendMode: 'multiply', backgroundPosition: 'center'
        }}>
            <ReactCarousel data={NorthernLights} />
            <div className='tour-info'>
                <div className='tour-text'>
                    <h2 className='tour-h1'>THE NORTHERN LIGHTS</h2>
                    <p className="tour-p">The extreme dark of the Icelandic winter has a few perks. Between September and April, people in Iceland are treated to a magnificent natural display.</p>
                    <h2 className='tour-h1 extra-info'>Best Time To See The Northern Lights</h2>
                    <p className="tour-p extra-info">The best time to see the Northern Lights is during the winter, between September and April, when dark and long nights have taken over from the bright summernights in Iceland.</p>

                    <p className='extra-info'>The Northern lights are said to be most active around the equinoxes in September and March, but the chances also improve mid winter by bringing more darkness - it simply gives you a larger window each day to witness them.</p>
                </div>
            </div>
        </div>
    )
}

export const SnorklingTour = ({ background }) => {
    return (
        <div data-aos='slide-right' className='tour' style={{
            background: `url('${background}')`, backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,.6)',
            backgroundBlendMode: 'multiply', backgroundPosition: 'center'
        }}>
            <ReactCarousel data={Diving} />
            <div className='tour-info'>
                <div className='tour-text'>
                    <h2 className='tour-h1'>DIVING AND SNORKELING</h2>
                    <p className="tour-p">Iceland is a geologic hot spot and famous for everything that's warm: volcanoes, hot springs, and thick wool sweaters.</p>

                    <p className='extra-info'>It, therefore, seems far-fetched to pick this country for diving and snorkeling in ice-cold oceans and lakes.</p>

                    <p className='extra-info'>But the ones who leave the bathtub warm waters of our comfortable swimming pools will be rewarded with a view of a magnificent underwater world. So, squeeze yourself into a dry suit and jump!</p>
                </div>
            </div>
        </div>
    )
}

export const VolcanoTour = ({ background }) => {
    return (
        <div data-aos='slide-left' className='tour' style={{
            background: `url('${background}')`, backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,.6)',
            backgroundBlendMode: 'multiply', backgroundPosition: 'center'
        }}>
            <ReactCarousel data={Volcanoes} />
            <div className='tour-info'>
                <div className='tour-text'>
                    <h2 className='tour-h1'>VISITING THE VOLCANO</h2>
                    <p className="tour-p">If you are interested in coming to Iceland to visit the volcano, you might want to stay for a few days to improve your chances of good weather and visibility and the possibility to see the volcano in an active phase.  </p>

                    <p className='extra-info'>However, if the volcano is quiet, the magnificent crater and the freshly made lava formations are a spectacular sight on their own.</p>
                </div>
            </div>
        </div>
    )
}

export const ArcticCircleTour = ({ background }) => {
    return (
        <div data-aos='slide-right' className='tour' style={{
            background: `url('${background}')`, backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,.6)',
            backgroundBlendMode: 'multiply', backgroundPosition: '0 80%'
        }}>
            <ReactCarousel data={Arctic} />
            <div className='tour-info'>
                <div className='tour-text'>
                    <h2 className='tour-h1'>ICELAND'S MOST BEAUTIFUL DETOUR</h2>
                    <p className="tour-p">An opportunity to get to know Iceland off the beaten path and experience life closest to the Arctic circle. Iceland’s new and northernmost tourist route was opened in 2019 and at once chosen by Lonely Planet as one of Europe’s Top Destinations.</p>
                    <h2 className='tour-h1 extra-info'>ENTER THE GATEWAY TO ICELAND'S PAST</h2>
                    <p className="tour-p extra-info">More than 25 cultural sights and museums await the ones who want to learn about the exciting, and sometimes very dark, Icelandic past.</p>

                    <p className='extra-info'>You can listen to sagas and myths and visit the places where Iceland's bloodiest battle took place, outlaws spend their banishment and the last woman in Iceland was executed by law.</p>
                </div>
            </div>
        </div>
    )
}

export const BatheTour = ({ background }) => {
    return (
        <div data-aos='slide-left' className='tour' style={{
            background: `url('${background}')`, backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,.7)',
            backgroundBlendMode: 'multiply', backgroundPosition: '0 70%'
        }}>
            <ReactCarousel data={Bath} />
            <div className='tour-info'>
                <div className='tour-text'>
                    <h2 className='tour-h1'>BATHE IN STYLE</h2>
                    <p className="tour-p">Warm or chilly, bright or dark, gray or blue -- any day is good for a warm outdoor bath. That, at least, is the local consensus. Icelanders love soaking in hot water.</p>

                    <p className='extra-info'>And for the past years developers across the country have been stepping up the variety of leisure baths, with its swim-up bars and stunning views.</p>
                </div>
            </div>
        </div>
    )
}

export const IcelandicFoodTour = ({ background }) => {
    return (
        <div data-aos='slide-left' className='tour' style={{
            background: `url('${background}')`, backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,.7)',
            backgroundBlendMode: 'multiply', backgroundPosition: 'top'
        }}>
            <ReactCarousel data={Food} />
            <div className='tour-info'>
                <div className='tour-text'>
                    <h2 className='tour-h1'>ENJOY ICELANDIC FOOD</h2>
                    <p className="tour-p">Iceland has emerged as one of Europe's most dynamic gastronomic destinations, full of exciting
                        places to taste thrilling new recipes.</p>

                    <p className='extra-info'>Chefs create modern dishes with traditional ingredients, influenced by the philosophy of the New Nordic Cuisine, where freshness and local seasonal ingredients play a vital role.</p>
                </div>
            </div>
        </div>
    )
}

export const SeafoodTour = ({ background }) => {
    return (
        <div data-aos='slide-right' className='tour' style={{
            background: `url('${background}')`, backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,.7)',
            backgroundBlendMode: 'multiply', backgroundPosition: 'center'
        }}>
            <ReactCarousel data={Seafood} />
            <div className='tour-info'>
                <div className='tour-text'>
                    <h2 className='tour-h1'>SEAFOOD - ICELAND’S TOP PRIDE</h2>
                    <p className="tour-p">A staple of Icelandic cuisine is freshly caught fish, as fishing has been an essential part of Icelandic history and culture for centuries.<span className='extra-info'> Fish is the main export product of Iceland, and sustainable fishing and optimal treatment of the cath are a priority.</span></p>

                    <p className='extra-info'>Try one of the many Icelandic fish restaurants, and you will understand why the locals will have you believe they invented the thing.</p>
                </div>
            </div>
        </div>
    )
}

export const LambTour = ({ background }) => {
    return (
        <div data-aos='slide-left' className='tour' style={{
            background: `url('${background}')`, backgroundSize: 'cover', backgroundColor: 'rgba(0,0,0,.7)',
            backgroundBlendMode: 'multiply', backgroundPosition: 'bottom'
        }}>
            <ReactCarousel data={LambMeat} />
            <div className='tour-info'>
                <div className='tour-text'>
                    <h2 className='tour-h1'>ICELANDIC LAMB MEAT-THE BEST IN THE WORLD?</h2>
                    <p className="tour-p extra-info">Ever since the first settlers brought sheep to the island over a thousand years ago, Icelandic lamb has been an important element of Icelandic food tradition.</p>

                    <p>It is Icelanders’ favorite meat by far, and they will tell you with pride and conviction that it is absolutely the best meat in the world.</p>

                    <p className="tour-p extra-info">The lamb meat is tender and contains an unusually high amount of omega-3, most likely because sheep are primarily grass-fed. The lambs roam free with their mothers in highland pastures during the summer, feeding on wild herbs and grasses.</p>
                </div>
            </div>
        </div>
    )
}