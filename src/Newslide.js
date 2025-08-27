import React from 'react'
import first from './images/1st.svg'
import second from './images/img-sec.svg'
import third from './images/img-thrd.svg'
import Slider from 'react-slick'
import Learn from './images/Learn_more.svg'
import Sidearrow from './images/Sidearrow.svg'
import Slideauto from './Slideauto'
import Slider1 from './Slider1'
import Slider2 from './Slider2'
import Slider3 from './Slider3'
import Slider4 from './Slider4'

function Newslide() {



    const settings = {

        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    autoplay: true,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    autoplay: true,
                    slidesToScroll: 1
                }
            }
        ]



    };





    return (
        <>
            <Slider className='newslider'  {...settings}>
                <Slideauto />
                <Slider1 />
                <Slider2 />
                <Slider3 />
                <Slider4 />
            </Slider>
        </>
    )
}

export default Newslide;