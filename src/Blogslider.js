import React from "react";
import blog from './images/blog.jpg'
import eye from './images/eye.svg'
import cal from './images/cal.svg'
import explore from './images/explore.svg'
import moc from './images/Img_2.png'
import intro from './images/img_3.png'
import Slider from 'react-slick'

function Blogslider() {

    const data = [
        {
            "img": blog,
            "head": "AKHIL SYSTEMS IN ",
            "head1": "COLLABORATION WITH PWC",
            "desc": "We are thrilled to share the success of our recent Digital Health-tech Roadshow, a remarkable collaboration between ASPL and PwC....",
            "eye": eye,
            "min": "10 min read",
            "cal": cal,
            "Date": "21/11/23",
            "linkto": "https://akhilsystems.com/blog-post/celebrating-healthcare-technology-akhil-systems-pwc-digital-health-tech-roadshow/"

        },
        {
            "img": moc,
            "head": "How MOC Is The Game Changer?",
            "head1": "",
            "desc": "Feel the power of world-class hospital, clinical and laboratory management systems. Leverage the patient experience & overall business profi......",
            "eye": eye,
            "min": "10 min read",
            "cal": cal,
            "Date": "21/11/23",
            "linkto": "https://akhilsystems.com/blog-post/how-moc-is-the-game-changer/"

        },
        {
            "img": intro,
            "head": "INTRODUCING MIRACLE LIS VERSION 2.0",
            "head1": "",
            "desc": "Akhil Systems is proud to announce the launch of the new version 2.0 of our LIS software after the vital...",
            "eye": eye,
            "min": "10 min read",
            "cal": cal,
            "Date": "21/11/23",
            "linkto": "https://akhilsystems.com/blog-post/introducing-miracle-lis-version-2-0-for-a-better-and-smooth-experience-2/"

        }
    ]




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
                    autoplay: true,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    cssEase: "linear",
                    autoplay: true,
                    slidesToScroll: 1
                }
            }
        ]



    };

    return (
        <>
            <Slider {...settings}>

                {
                    data.map((val, index) => (

                        <div key={index}>
                            <>

                                <div className="row" data-aos="fade-left">

                                    <div className='col-md-5  p-5 '>
                                        <img className='mt-3 ' src={val.img} width={450} height={300} alt="Image" />

                                    </div>
                                    <div className='col-md-7 box-blog-det p-5  '>
                                        <h2>{val.head}</h2>
                                        <h2>{val.head1}</h2>
                                        <p>{val.desc}</p>
                                        <div className="eye">
                                            <img src={val.eye} alt="image" />
                                            <h6>&nbsp;{val.min}</h6>&nbsp;&nbsp;&nbsp;
                                            <img src={val.cal} alt="image" />
                                            <h6 >&nbsp;{val.Date}</h6>



                                        </div>
                                        <div className='mt-3'>
                                            <a href={val.linkto}><img className='mt-3 ' src={explore} alt="Image" /></a>
                                        </div>
                                    </div>
                                </div>


                            </>
                        </div>


                    ))
                }
            </Slider>






        </>
    )
}

export default Blogslider;