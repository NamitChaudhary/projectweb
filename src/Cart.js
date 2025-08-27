import React from 'react'
import cart1 from './images/Blog4.svg'
import cart2 from './images/Blog5.svg'
import cart3 from './images/Blog1.svg'
import cart4 from './images/Blog2.svg'
import cart5 from './images/Blog3.svg'
import cart6 from './images/Img_2.png'
import Card from './Card'
import CardBlog from './CardBlog'


function Cart() {

    const Cdata = [
        {
            "cart": cart1,
            "title": "What Every Healthcare Provider.. ",
            "desc": "What every healthcare provider should know about patient flow management?",
            "link": "https://akhilsystems.com/blog-post/what-every-healthcare-provider-should-know-about-patient-flow-management/"

        },
        {
            "cart": cart2,
            "title": "Yashoda Hospitals Extends Care.. ",
            "desc": "With over 2 billion users globally and 487.5 million users in India, WhatsApp – the most used mobile messenger application...",
            "link": "https://akhilsystems.com/blog-post/yashoda-hospitals-extends-care-delivery-via-whatsapp/"
        },
        {
            "cart": cart3,
            "title": "Enhancing Healthcare Excellence",
            "desc": " In the dynamic realm of healthcare, efficient management and accessibility of data play pivotal roles in delivering the highest quality...",
            "link": "https://akhilsystems.com/blog-post/enhancing-healthcare-excellence-the-success-story-of-miracle-hims-lis-implementation-at-labaid-group-bangladesh/"

        },
        {
            "cart": cart4,
            "title": "Improving Access To Health Data",
            "desc": "In today's rapidly advancing healthcare landscape, access to accurate and comprehensive data is crucial for delivering personalized care to patients....",
            "link": "https://akhilsystems.com/blog-post/improving-access-to-health-data-will-enhance-personalized-care/"

        },
        {
            "cart": cart5,
            "title": "Footprint of Akhil System In India",
            "desc": "Experience the Future of Healthcare with Miracle HIS & EMR: Available Across 22+ states, and 50+ cities with over 40...",
            "link": "https://akhilsystems.com/blog-post/akhil-footprints/"
        },
        {
            "cart": cart6,
            "title": "How MOC Is The Game Changer?",
            "desc": "Feel the power of world-class hospital, clinical and laboratory management systems. Leverage the patient experience & overall business profi......",
            "link": "https://akhilsystems.com/blog-post/how-moc-is-the-game-changer/"

        },
    ]

    return (
        <>
            <div className='container-fluid'>
                <div className='row gy-4 p-5' >

                    {
                        Cdata.map((value, index) => (

                            <CardBlog imag={value.cart} key={index} title={value.title} desc={value.desc} go={value.link} />
                        ))

                    }
                </div>
            </div>



        </>
    )
}

export default Cart;