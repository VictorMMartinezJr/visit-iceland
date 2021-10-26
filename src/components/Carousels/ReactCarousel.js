import Carousel from 'react-bootstrap/Carousel'
import './ReactCarousel.css'

const ReactCarousel = ({ data }) => {
    return (
        <div className='react-carousel'>
            <Carousel fade interval={500} controls={false}>
                {
                    data.map(item => (
                        <Carousel.Item key={item.id}>
                            <img
                                className="tour-item-img"
                                src={item.img}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default ReactCarousel
