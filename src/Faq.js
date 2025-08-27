import React, { useState } from 'react'
import Faqans from './Faqans';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
function Faq() {
    useEffect(()=>{
        Aos.init({
            offset: 500,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 100,
          });
    },[])

    const [show, setShow] = useState(false)

    return (
        <>
            <div className='container p-t-b-8'>
                <div className='row' data-aos="fade-down">
                    <h6>Our FAQs</h6>
                    <h2 className='mt-3'>Have any Questions for Us</h2>
                </div>
                <div className='row' data-aos="fade-up">
                    <Faqans />
                </div>
            </div>
        </>
    )
}
export default Faq;