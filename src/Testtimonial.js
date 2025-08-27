

import React, { useState } from 'react'
import { useCollapse } from 'react-collapsed'
import star5 from './images/5star.svg'
import profile1 from './images/Test1.svg'
import profile2 from './images/Test2.svg'
import profile3 from './images/Test3.svg'
import profile4 from './images/Test4.svg'
import profile5 from './images/Test5.svg'
import profile6 from './images/Test6.svg'
import Readmore from './images/readmore.svg'
import Slider from 'react-slick'
import './index.css';
import Testtimonialslide from './Testimonialslide'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const data = [
    {
        "profile": profile1,
        "head": "Dr. Ola Jide Ojo",
        "Date": "Director Lagoon Hospital ",
        "star": star5,
        "desc": "Choosing Akhil systems to design the application we are using for our EMR in Lagoon Hospitals, Lagos, Nigeria, ",
        "read": "has been an excellent choice that has helped our business."


    },
    {
        "profile": profile2,
        "head": "Mr. Manish Mishra",
        "Date": "CEO – Labaid Group(Bangladesh)",
        "star": star5,
        "desc": "I would like to congratulate and acknowledge the tremendous success your team has achieved ",
        "read": " along with our project team. The results they have strategic partners like Akhil and such team who is willing to go above and beyond to achieve such great success. My Sincere thanks to you as well, as your leadership and efforts have made Akhil HIS as one of the best Hospital information system in the Asia which is comprehensive still user friendly . I also personally appreciate Suman Kumar who has led the local team and the entire project. I believe you have a very professional team. Wish you all the best for your future projects."


    },
    {
        "profile": profile3,
        "head": "Vishal Kakkar",
        "Date": "Head – I.T Batra Hospital (New Delhi) ",
        "star": star5,
        "desc": "Congratulations on developing MIRACLE HIS web ERP! Many thanks for your prompt",
        "read": " service & technical support and making our work so easy."


    },
    {
        "profile": profile4,
        "head": "Santevita Hospital ",
        "Date": "Ranchi / Director",
        "star": star5,
        "desc": "We would like to thank you and your team for all co-operation and help extended to our IT Manager. ",
        "read": "We would also like... to take take this opportunity to state that we are very satisfied with the functioning of your HIS at our hospital."


    },
    {
        "profile": profile5,
        "head": "Dr. Rajeev Boudhankar",
        "Date": " Vice President, Kohinoor Hospitals",
        "star": star5,
        "desc": "Kohinoor Hospital appreciates the efforts taken and the service provided by ",
        "read": "Akhil Systems for successful implementation of  AKHIL HIS Software solution. They have not only helped us organize and better manage our operations through their HIS but also have provided us the tools to look at our business more strategically"


    },
    {
        "profile": profile6,
        "head": "Sehgal Neo Hospital",
        "Date": "Hospital Staff",
        "star": star5,
        "desc": "We are a mid-sized, multi-specialty hospital located in New Delhi, and we have been utilizing ",
        "read": "Akhil Systems HIS for nearly two decades It stands out as a leading software in the industry, encompassing a wide range of modules suitable for. both large hospitals and small nursing homes. Akhil Systems consistently adapts and evolves to meet the ever-changing needs of the healthcare sector. We extend our best wishes to them for all their future endeavors.Warm regards"


    }
]

const settings = {


    dots: false,
    prevArrow: false,
    nextArrow: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                initialSlide: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                initialSlide: 1
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
}





function Testtimonial() {


    return (
        <>
            <div className='container-fluid p-t-b-8'>
                <div className="row">
                    <h4 className=' d-flex justify-content-center'  data-aos="flip-out">What Customers says about Our Products</h4>
                </div>
                <div className='row p-5 '>

                    <Slider {...settings} >
                        {
                            data.map((val, index) => (

                                <Testtimonialslide pro={val.profile} key={index} hd={val.head} dt={val.Date} str={val.star} dsc={val.desc} rd={val.read} />





                            ))
                        }
                    </Slider>

                </div>
            </div>

        </>
    )
}

export default Testtimonial;