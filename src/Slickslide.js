import React from 'react'

import c1 from './images/c1.svg'
import c2 from './images/c2.svg'
import c3 from './images/c3.svg'
import c4 from './images/c4.svg'
import c6 from './images/c6.svg'
import c7 from './images/c7.svg'
import c8 from './images/c8.svg'
import c9 from './images/c9.svg'
import c10 from './images/c10.svg'
import c11 from './images/c11.svg'
import c12 from './images/c12.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

function Slickslide() {


    const SData = [

        {
            "image": c1,
        },
        {
            "image": c2,
        },
        {
            "image": c3,
        },
        {
            "image": c1,
        },
        {
            "image": c4,
        },
        {
            "image": c6,
        },
        {
            "image": c7,
        },
        {
            "image": c8,
        },
        {
            "image": c10,
        },
        {
            "image": c11,
        },
        {
            "image": c12,
        }

    ]



    const settings = {


        dots: false,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]



    };
    return (
        <>

            <div className='container-fluid p-5'>
                <div className='row '>
                <h4 className='css3  d-flex justify-content-center' data-aos="fade-down">200+ customers in 25+ states and 14+ countries</h4>
                    <div className='col-md-12' data-aos="zoom-in">
                        <Slider {...settings}>
                            {
                                SData.map((value, index) => (
                                    <div className='col-md-2 ' key={index}>
                                        <img src={value.image} alt='image' />
                                    </div>

                                ))
                            }
                        </Slider>

                    </div>


                </div>

            </div>

        </>
    )

}

export default Slickslide;