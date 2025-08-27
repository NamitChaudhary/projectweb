import React from 'react'
import first from './images/PIS1.svg'
import second from './images/PIS2.svg'
import Slider from 'react-slick'
import Learn from './images/Learn_more.svg'
import Sidearrow from './images/Sidearrow.svg'

function Slider4() {

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
                        <div className="row p-5 slider4 box-mob-slider">
                            <div className="col-md-6 col-12 box-md-size">
                                <h6 className='css6'>Introducing </h6>
                                <h3 className='css5'>Cloud PIS</h3>
                                <h6 className='css7'>1- Integrates the Pharmacy with CPOE & Medication Charting. </h6>
                                <h6 className='css7'>2- Rapid medical supplies.</h6>
                                <h6 className='css7' >3-Versatile, to improve in addition to automate the regular workflows associated with pharmacists & staffs dispensing </h6>
                                <h6 className='css7'>4- Enhances quality of care</h6>
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

export default Slider4;