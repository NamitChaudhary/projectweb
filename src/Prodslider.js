import React from "react";
import HIS from './images/box-EMR.svg'
import EMR from './images/box-LIS.svg'
import LIS from './images/box-Clinc.svg'
import Clinic from './images/box-HIS.svg'
import PIS from './images/box-PIS.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

function Prodslider() {

    const settings = {


        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    slidesToScroll: 1
                }
            }
        ]



    };

    return (
        <>
            <div className="container" data-aos="fade-right">
                <div className="row">

                    <Slider {...settings}>
                        <div className="hisimg1">
                            <img src={HIS} alt="image" />
                            <h1> HIS</h1>
                            <h6>HIS applications optimize administrative tasks like appointment
                                scheduling, billing, and inventory management, reducing manual
                                errors and improving efficiency.</h6>


                        </div>
                        <div className="hisimg1 ">
                            <img src={EMR} alt="image" />
                            <h1>EMR</h1>
                            <h6>EMRs offer comprehensive and up-to-date patient information,
                                including medical history, medications, allergies, and lab
                                results.
                                {/* This data accessibility enables better-informed
                                decisions and more personalized care. */}
                            </h6>

                        </div>
                        <div className="hisimg2">
                            <img src={Clinic} alt="image" />
                            <h1>RIS</h1>
                            <h6>RIS streamlines radiology department workflows,
                                managing patient scheduling, exam tracking,
                                and report generation, enhancing operational efficiency.</h6>

                        </div>
                        <div className="hisimg3 ">
                            <img src={PIS} alt="image" />
                            <h1>PIS</h1>
                            <h6> PIS systems integrate with laboratory devices and equipment,
                                enabling automatic data capture, reducing manual entry errors,
                                and expediting test results.</h6>


                        </div>
                        <div className="hisimg4 ">
                            <img src={LIS} alt="image" />
                            <h1>LIS</h1>
                            <h6>LIS integrates with various laboratory instruments and devices,
                                facilitating automatic data capture, reducing manual transcription errors,
                                and expediting result reporting.</h6>


                        </div>


                    </Slider>





                </div>

            </div>


        </>
    )
}

export default Prodslider;