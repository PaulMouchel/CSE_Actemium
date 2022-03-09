import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = ({ children, arrows = false, carouselRef }) => {

    const settings = {
        arrows: arrows,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        ref:carouselRef,
        // nextArrow: <CarouselNextArrow />,
        // prevArrow: <CarouselPrevArrow />,
    }

    return (
        <div className="relative w-full">
            <Slider {...settings}>{children}</Slider>
        </div>
    )
}

export default Carousel
