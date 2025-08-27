import React from 'react'
import cart7 from './images/Blog7.webp'
import cart1 from './images/Blog1.svg'
import cart2 from './images/Blog2.svg'
import cart3 from './images/Blog3.svg'
import Card from './Card'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Latestblog() {

    useEffect(()=>{
        Aos.init({
            offset: 500,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 100,
          });
    },[])

    const Cdata = [
        {
            "cart": cart7,
            "title": "HOW MOC IS THE GAME CHANGER?",
            "desc": "Feel the power of world-class hospital, clinical and laboratory management systems. Leverage the patient experience & overall business profitability &...",
            "linkto": "https://akhilsystems.com/blog-post/how-moc-is-the-game-changer/"
        },
        {
            "cart": cart1,
            "title": "Enhancing Healthcare Excellence",
            "desc": " In the dynamic realm of healthcare, efficient management and accessibility of data play pivotal roles in delivering the highest quality...",
            "linkto": "https://akhilsystems.com/blog-post/enhancing-healthcare-excellence-the-success-story-of-miracle-hims-lis-implementation-at-labaid-group-bangladesh/"
        },
        {
            "cart": cart2,
            "title": "Improving Access To Health Data",
            "desc": "In today's rapidly advancing healthcare landscape, access to accurate and comprehensive data is crucial for delivering personalized care to patients....",
            "linkto": "https://akhilsystems.com/blog-post/improving-access-to-health-data-will-enhance-personalized-care/"
        }
        // ,
        // {
        //     "cart": cart3,
        //     "title": "Footprint of Akhil System In India",
        //     "desc": "Experience the Future of Healthcare with Miracle HIS & EMR: Available Across 22+ states, and 50+ cities with over 40...",
        //     "linkto": "https://akhilsystems.com/blog-post/akhil-footprints/"
        // }
    ]

    return (
        <>
            <div className='container-fluid'>
                <div className='row gy-4 p-5' data-aos="fade-down">
                    {
                        Cdata.map((value, index) => (
                            <Card imag={value.cart} key={index} title={value.title} desc={value.desc} goto={value.linkto} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Latestblog;