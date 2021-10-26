import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar'
import './TravelInfo.css'
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: {
        opacity: 0,
        transition: { ease: 'easeInOut' }
    }
}

const TravelInfo = () => {

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
            <MainHeader title='VEL' span='TRA' paragraph='INFORMATION ABOUT YOUR TRIP' background='https://images.unsplash.com/photo-1515005089749-e950d6a164b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80' />

            {/***** Travel info *****/}
            <section className='travel-info-container'>
                <div className='travel-info'>
                    <div data-aos='zoom-in' className='travel-info-head'>
                        <h1>SAFETRAVEL - EVERYTHING YOU NEED TO KNOW FOR A SAFE TRIP TO ICELAND</h1>
                        <h3>Is Iceland a safe country? Actually, it is hard to feel any safer than here: Iceland is a country with one of the world’s lowest crime rates, ranking consecutively in 1st place on the Global Peace Index, and home to no animal predators dangerous to man. So, it doesn’t seem very dangerous, but the challenges lie elsewhere.</h3>
                        <p>Weather and nature dictate Iceland’s everyday life. Situated at the Arctic Circle and in the middle of the Atlantic Ocean, unpredictable weather outbursts and rapid temperature changes are normal. The rough, untouched and scarcely populated landscape is stunning but also requires you to take good care and precautions when exploring. <a href='/' style={{ textDecoration: 'underline' }}>Here you can learn more about Icelandic weather.</a></p>
                    </div>
                    <div data-aos='slide-up' className="safetravelis">
                        <div className='safetravelsis-info'>
                            <h2>SAFETRAVEL.IS - THE ONE STOP SHOP FOR SAFETY IN ICELAND</h2>
                            <p>The No. 1 site for all travel information you’ll need during your trip is <a href='/' style={{ textDecoration: 'underline' }}>www.safetravel.is.</a> Get informed, sign up for their free SMS service, and check their constantly updated weather & conditions map or get the <a href='/' style={{ textDecoration: 'underline' }}>SafeTravel Iceland App</a>. It helps you make most of your time in Iceland and you surely don’t want to miss out on snowstorms, avalanches, earthquakes, and volcanic eruptions!</p>
                        </div>
                        <img src='https://wallpapercave.com/wp/tkbh3eV.jpg' alt="snow-hazard" />
                    </div>
                    <div data-aos='slide-up' className='ice-sar'>
                        <h2>ICE-SAR</h2>
                        <p>Here in Iceland, the <a href='/' style={{ textDecoration: 'underline' }}>ICE-SAR (Icelandic Association for search and rescue)</a> teams, consisting of thousands of volunteers and specialists help inhabitants as well as travelers who get into dangerous situations on land and sea. To avoid these situations beforehand, follow Safetravels' guidelines. <span>In case of an emergency, always call 112.</span></p>
                    </div>
                    <div data-aos='slide-up' className='driving'>
                        <h2>DRIVING IN ICELAND</h2>
                        <p>Driving in Iceland is very different from anywhere else, because of gravel, snowy, and icy roads as well as many mountain passages. But one also gets so easily distracted by the stunning landscape. Therefore, it’s important to pay special attention to the road surface, the weather, and traffic. The latter can sometimes even include animals, especially sheep. You can find everything you need to know about <a href='/' style={{ textDecoration: 'underline' }}>driving in Iceland here</a>. It is vital for you and the sensitive nature and vegetation around you to stay on marked paths.</p>
                    </div>

                    <div data-aos='slide-up' className='travel-plan'>
                        <h2>STEP INTO THE GREAT OUTDOORS – LEAVE A TRAVEL PLAN</h2>
                        <p>Iceland is THE country for outdoor activities like climbing, diving, or horseback riding. In case you plan a longer outdoor trip outside a tour group - <a href='/' style={{ textDecoration: 'underline' }}>leave a travel plan with safetravel</a> and make sure you’re properly dressed and equipped for the trip.</p>
                    </div>
                    <div data-aos='slide-up' className="safetravelis">
                        <div className='safetravelsis-info'>
                            <h2 className='danger-h2'>THE SIGHTS – NOT EVERYTHING FOR A GOOD PHOTO</h2>
                            <p>Follow the instructions that are given to you by warning signs and respect rails and fences because they are there for a reason. Some risks might not be visible at first and might also be dismissed by people around you. But strong undercurrents at beaches, slippery stones at cliffs and waterfalls, or unstable ground at hot springs can turn into life-threatening hazards.</p>
                        </div>
                        <img src='https://www.atlasandboots.com/wp-content/uploads/2018/10/dangerous-mountains-in-the-world-lead-image.jpg' alt="danger" />
                    </div>
                    <div data-aos='slide-up' className='wear'>
                        <h2>WHAT TO WEAR IN ICELAND</h2>
                        <p>What clothes should you bring to Iceland? One of the most asked questions and a big safety issue can be answered in 3 words: layers, layers, layers! Whether in summer or in winter, to make sure, you never get cold, Safetravel has put together a <a href='/' style={{ textDecoration: 'underline' }}>dressing guide</a> as well as packing lists for specific activities. Also check out the video below from the Iceland Academy.</p>
                    </div>
                </div>

                {/***** Footer *****/}
                <Footer />
            </section>
        </motion.div>
    )
}

export default TravelInfo
