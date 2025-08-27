import React, { useState } from 'react'
import img2 from './images/img2.svg'
import Chart from './images/Chart.svg'
import EMRframe from './images/EMRframe.svg'
import LISPotential from './images/LISPotential.svg'
import Base from './images/Base.svg'
import Sidearrow from './images/Sidearrow.svg'
import './index.css';
import Details from './Details';
import Slickslide from './Slickslide'
import SVideo from './SVideo'
import Slideauto from './Slideauto'
import Illustration from './images/Dirimg.svg'
import Cloud from './images/Cloud.svg'
import Learn from './images/Learn_more.svg'
import Counter from './Counter'
import Plateform from './Plateform'
import Cslider from './Cslider'
import Latestblog from './Latestblog'
import Client from './Client'
import Faq from './Faq'
import downloadimg from './images/downloadimg.svg'
import reqs from './images/DemoReq.svg'
import Newslide from './Newslide'
import Slider1 from './Slider1'
import Testtimonial from './Testtimonial'
import LearnMore from './images/LearnmoreBtn.svg'
import oneplate from "./images/OnePlatform.png"




function Home() {

   
    return (
        <>
            <div>

                <div className="container-fluid backcolor p-5 ">
                    <div className="row">
                        <div className="col-md-6 col-12" data-aos="fade-right">
                            <h5 className='headcolor1'>New, Healthcare IT</h5>
                            <Details first="Connecting Health &
                                    Technology for all"  second="Miracle on Cloud offers an intuitive interface, empowering healthcare
                                    providers with robust tools for patient data management, scheduling, billing,
                                    and inventory control. By leveraging cloud technology, this solution
                                    optimizes workflows, enhances accessibility to medical records, and
                                    facilitates real-time collaboration among healthcare professionals."/>



                        </div>
                        <div className="col-md-6 col-12 banner-rt-section">                         
                        <div className='row'>
                            <div className='box-banner' data-aos="fade-left">
                                <div className='box-banner-left'>
                                <img src={EMRframe} className='plus-image1' width="100%" alt="Responsive image" />
                                <img src={Chart} className='plus-image' width="100%" alt="Responsive image" />
                                </div>
                                <div className='box-banner-right'>
                                <img src={LISPotential} className='plus-image2 mt-2' width="100%" alt="Responsive image" />
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
          
                <Slickslide />
                <div className='backcolor'>
                    <div className="container p-t-b-8">
                        <div className="row ">
                            <div className="col-md-7  " data-aos="fade-right">
                                <h2 className='css4'>What is Miracle on Cloud?</h2>
                                <h6 className='clt'>Akhil Systems Pvt. Ltd. unveils Miracle on Cloud(MoC),
                                    a cutting-edge SaaS-based solution revolutionizing
                                    healthcare for  small to mid-sized hospitals, nursing homes,
                                    clinics, and  diagnostics  across tier-1, tier-2, and tier-3
                                    cities.This innovative  platform redefines healthcare
                                    management by  seamlessly digitalizing operations,
                                    streamlining  patient care, and enhancing administrative
                                    efficiency.</h6>

                                <Details />
                            </div>
                            <div className="col-md-5 " data-aos-duration="000" data-aos="fade-left">

                                <SVideo />

                            </div>
                        </div>
                    </div>
                </div>

                <Newslide />
                <div className='bgcloud'>
                    <div className="container p-t-b-8">
                        <div className="row">

                            <div className="col-md-5 col-12" data-aos="fade-left">
                                <img className='' src={Illustration} />
                            </div>
                            <div className="col-md-7 col-12">

                                <div className='miracle' data-aos="fade-right">
                                    <h2>Miracle LIS</h2>
                                    <h6><span className="quotes">&nbsp;</span>"Our relationship with Akhil Systems benefited our hospitals beyond expectation for past 15 years. The HIS implemented helped us transform our hospitals to next level."</h6><br></br>


                                    <a href='/products'><img className='mt-3' src={LearnMore} alt='' /></a>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <Counter />
                <div className="container-fluid p-0">
                    <img className='img-fluid' src={oneplate} alt='images' />


                </div>
                <Testtimonial />


                {/* <Plateform /> */}

                {/* <Cslider /> */}
                <div className="container-fluid clients-slider">
                    <div className="row">
                        <h4 className=' d-flex justify-content-center' data-aos="fade-down">Latest Blogs</h4>
                    </div>
                </div>
                <Latestblog />
                <Client />
                <Faq />



            </div>
     </>
    )
}
export default Home;