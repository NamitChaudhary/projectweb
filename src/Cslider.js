import React, { useState } from 'react'
import cus1 from './images/cus1.jpg'
import cus2 from './images/cus2.jpg'
import cus3 from './images/cus3.jpg'
import cus4 from './images/cus4.jpg'
import cus5 from './images/cus5.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

function Cslider() {
    
    const CData = [

        {
            "image": cus1
        },
        {
            "image": cus2
        },
        {
            "image": cus3
        },
        {
            "image": cus4
        },
        {
            "image": cus5
        }

    ]



    const settings = {


        dots: false,
        slidesToShow: 4,
        autoplay: true,
        centerMode: true,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
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
                <div className='row clients-slider'>



                    <div className='col-md-12'>
                        <Slider {...settings}>
                            {
                                CData.map((value, idx) => (
                                    <div className='col-md-8'>

                                        <img src={value.image} height={150} width={150} alt='image' />

                                    </div>

                                ))
                            }
                        </Slider>
                    </div>


                </div>
                <div className='row'>
                    <h7 className='mt-5 d-flex justify-content-center'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br></br>
                        &nbsp;do eiusmod tempor incididunt ut labore et dolore magna<br></br>
                        &nbsp;aliqua. Ut enim ad minim veniam, quis nostrud exercitation"</h7>
                </div>
            </div>

        </>
    )

}

export default Cslider;