import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './ExploreCarousel.css';

const data = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1415226556993-1404e0c6e727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=759&q=80',
        name: 'Blue Lagoon, Grindavík'
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80',
        name: 'The Northern Lights'
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1538681105587-85640961bf8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
        name: 'Vatnajökull National Park'
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1585219581414-4442041c2d03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=652&q=80',
        name: 'Kirk Waterfall'
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1621897100070-055b183ead92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
        name: 'Fagradalsfjall Volcano'
    },
    {
        id: 6,
        img: 'https://images.unsplash.com/flagged/photo-1624126095380-c89fa9bafceb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        name: 'Reynisfjara Beach'
    },
]

const Carousel = () => {
    // Map through above data
    const items =
        data.map(item => {
            return <div key={item.id} className='slider-item'>
                <p className='carousel-item-p'>{item.name}</p>
                <img className='carousel-item-img' src={item.img} alt={item.name} />
            </div>

        })
        ;

    // Carousel breakpoints
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    // Custom next button
    const nextArrow = () => {
        return <i className="fas fa-arrow-right right-arrow"></i>
    }

    // Custom prev button
    const prevArrow = () => {
        return <i className="fas fa-arrow-left left-arrow"></i>
    }

    return (
        <div className='alice-carousel'>
            <AliceCarousel
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                infinite
                renderNextButton={nextArrow}
                renderPrevButton={prevArrow}
            />
        </div>
    );
}

export default Carousel;


