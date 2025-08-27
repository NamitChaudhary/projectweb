import React, { useEffect, useState } from 'react'
import Details from './Details';
import partner from './images/Program_img.svg'
import SVideo from './SVideo';
import simg from "./images/Consult_img.png"
import Marketing from './images/Marketing.svg'
import Alliance from './images/Alliance.svg'
import phoneicon from './images/Phone_icon.svg'
import mailicon from './images/Mail_icon.svg'
import axios from 'axios';

function Partnersprogram() {
    return (
        <>
            <div className='container-fluid bckimg' >
                <div className='row p-5'>
                    <div>
                        <h1 className='d-flex justify-content-center colorpart mt-3'>Miracle on Cloud Partner Program</h1>
                        <h6 className='d-flex justify-content-center colorpart mt-3'>Discover Limitless Opportunities: Engage with our 'Miracle on Cloud' Partner Program,</h6>
                        <h6 className='d-flex justify-content-center colorpart' > Unleashing Innovation in Healthcare Solutions. Join Us in Redefining </h6>
                        <h6 className='d-flex justify-content-center colorpart'>the Future of Collaborative Care.</h6>
                        <div className='d-flex justify-content-center'>
                            <Details />
                        </div>
                        {/* <div className='d-flex justify-content-center'>
                            <img src={partner} alt='image' />
                        </div> */}
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='container'>
                    <div className='row p-t-b-8'>
                        <h2 className=' text-center'>Grow With US</h2>
                        <p className=' text-center'>Interested partners who are from Healthcare domain like Hospital consultants,
                             Technology consultants,System integrators, Biomedical companies, Medical devices,
                              Surgical items, Quality (NABH/JCI) & independent consultants etc.
                               who have strong network in their respective healthcare field can reach the undersigned. </p>

                               <div className='col-md-12'>
                                <div className='row'>
                                <div className='col-md-6 col-sm-12 col-xs-12 box-groth' data-aos="fade-left">
                                   <img src = {Marketing} className='mb-5' alt = "image"/>
                                   
                                   <div className='card-rt-content'><h4 className=''>Mr. Debangshu Sengupta <br></br><span>(Asst. General Manager- Sales & Mktg)</span></h4>
                                   <ul>
                                    <li>
                                    <img src={phoneicon} alt="images" className='pull-left' />
                                    <h6>+91- 8448799453</h6>
                                    </li>
                                    <li>
                                    <img src={mailicon} alt="images" className='pull-left' />
                                    <h6 className='mail'>debangshu.sengupta@akhilsystems.com</h6>
                                    </li>
                                   </ul>
                                   </div>
                                </div>
                                <div className='col-md-6 col-sm-12 col-xs-12 box-groth' data-aos="fade-right">
                                <img src = {Alliance}  className='mb-5' alt = "image"/>
                                <div className='card-rt-content'><h4 className=''>Mr. Karan Kumar <br></br><span> (Head- Strategic Alliance)</span></h4>
                                <ul>
                                    <li>
                                    <img src={phoneicon} alt="images" className='pull-left' />
                                    <h6>+91- 9953188908</h6>
                                    </li>
                                    <li>
                                    <img src={mailicon} alt="images" className='pull-left' />
                                    <h6 className='mail'>karan.kumar@akhilsystems.com</h6>
                                    </li>
                                </ul>
                                </div>
                                </div>
                               </div>
                               </div>
                       
                    </div>
                    <div className='row'>
                        <h1>What all Solutions we provide</h1>
                        <div className='col-md-5 col-12 backimg1-no-p-r' data-aos="zoom-in">
                            <div className='backimg1'>
                                <h4>Hospital Information System</h4>
                                <p> Registration and demographic data collectioå
                                    Admissions, discharges, and bed managementã  Appointment and visit scheduling</p>
                            </div>
                        </div>

                        <div className='col-md-7 col-12' data-aos="zoom-out">
                            <div className='backimg2'>
                                <h4>Electronic Medical Records</h4>
                                <p>Store and organize patient medical histories, treatments, and  diagnoses digitally
                                    Instant access to patient records for healthcare providers within the facility.
                                    Quick retrieval of information for better diagnosis and treatment decisions.</p>
                            </div>
                        </div>
                    </div >
                    <div className='row mt-3'>
                        <div className='col-md-7 col-12  backimg3-no-p-r' data-aos="zoom-in">
                            <div className='backimg3'>
                                <h4>Radiology Information Systems and Laboratory Information Systems :</h4>
                                <p>Efficient scheduling of radiology procedures and managing patient appointments.
                                    Streamlining radiology workflows, tracking imaging orders, and managing results.
                                    Storing and organizing radiological images and associated data for easy access.</p>
                            </div>
                        </div>


                        <div className='col-md-5 col-12' data-aos="zoom-out">
                            <div className=' backimg4'>
                                <h4>Pathology Information Systems :</h4>
                                <ul>
                                    <li>
                                        Efficient tracking of specimens from collection to processing and analysis.
                                    </li>
                                    <li>
                                        Streamlining pathology workflows, reducing errors, and improving efficiency in sample processing.
                                    </li>
                                    <li>
                                        Generating reports for pathology test results, aiding in diagnosis and treatment planning.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div >
                    <div className='row'>
                        <div className='col-md-12 mt-3'>
                            <div className='consimg1 '>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-12 f-left p-5" data-aos="fade-left">
                                    <h1 className='colortext'>Become Our Consulting Partner</h1>

                                    <p className='colortext'>Unlock Opportunities, Ignite Innovation: Join Us in Shaping the Future of Healthcare Together.
                                    </p>
                                    <Details />
                                </div>
                                <div className='col-md-4 f-right consimg1rightpic' data-aos="fade-right">
                                    <img src={simg} alt="" />


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Partnersprogram;