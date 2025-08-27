import React from "react";
import Details from './Details';
import frame from './images/frame.svg'
import client from './images/mam-pic.svg'
import './index.css';
import downloadimg from './images/downloadimg.svg'
import reqs from './images/DemoReq.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Client() {

    useEffect(()=>{
        Aos.init({
            offset: 500,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 100,
          });
    },[])
    return (
        <>
            <div className="client p-t-b-8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-12 pt-5" data-aos="fade-right">
                            <h5>Manage all your Data</h5>
                            <h2>Grow with Miracle on Cloud</h2>
                            <h6>Miracle on Cloud is an initiative from Akhil Systems Pvt Ltd having  nearly 3 decades of
                                exposure in healthcare IT to digitalize smaller healthcare facilities
                                like nursing homes, small, mid-sized hospitals, clinics & Labs helping
                                them to deliver superior care, improve operational agility, and thrive
                                in tooday s dynamic 
    
                                landscape.</h6>
                            <Details />

                        </div>
                        <div className="col-md-5 col-12 text-center">
                            <img src={client} className='product-image' alt="Responsive image" data-aos="fade-left" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Client;
