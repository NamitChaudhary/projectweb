import React from 'react'
import first from './images/HIS1.svg'
import second from './images/HIS2.svg'
import Slider from 'react-slick'
import Learn from './images/Learn_more.svg'
import Sidearrow from './images/Sidearrow.svg'

function Slideauto() {

    const AData = [

        {
            "img": first,
        },
        {
            "img": second,
        }
    ]

    const settings = {

        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
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
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]



    };





    return (
        <>
            <div className='backcolor'>
                <div className="container p-t-b-8">
                    <div className='introducing-block '>
                        <div className="row p-5 intro box-mob-slider">
                            <div className="col-md-6 col-12 box-md-size" data-aos="fade-left">
                                <h6 className='css6'>Introducing </h6>
                                <h3 className='css5'>Cloud HIS</h3>
                                <h6 className='css7'>1- Automates clinical and administrative Functions </h6>
                                <h6 className='css7'>2- Improves operational  effectiveness</h6>
                                <h6 className='css7' >3- Reduces costs and medical errors.</h6>
                                <h6 className='css7'>4- Enhances quality of care</h6>
                                <h6 className='css7'>5- Suits hospitals of all sizes, medical colleges, nursing</h6>
                                <h6 className='css7'>&nbsp;&nbsp;&nbsp;&nbsp;homes</h6>
                                <div className='css8'>
                                    <a href='/products'><img src={Learn} alt='images' /></a>

                                </div>

                            </div>
                            <div className="col-md-6 hidden-xs">

                                <Slider className='css9' {...settings}>
                                    {
                                        AData.map((value, index) => (

                                            <img src={value.img} key={index} alt='image' height={300} width={200} />


                                        ))
                                    }
                                </Slider>

                            </div>

                        </div>
                    </div>
                </div>
            </div>









        </>
    )
}

export default Slideauto;