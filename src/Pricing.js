import React, { useEffect, useState } from 'react'
import Details from './Details';
import Pricingplan from './Pricingplan';
import Chatbox from './images/Chat_Box.svg'
import mainimg from './images/Main Img.svg'
import axios from 'axios';

function Pricing() {
    return (
        <>
            <div className='container-fluid backcolor'>
                <div className='row p-5'>
                    <div className='col-md-6' data-aos="fade-left">
                        <h6>Miracle on Cloud</h6>
                        <h1>Best Plans For You
                            <br></br>and Your Bussiness
                        </h1>
                        <h6>We are thrilled to share the success of our recent Digital <br></br>
                            Health-tech Roadshow, a remarkable collaboration choose<br></br>
                            your plan and be apart of it</h6>
                        <Details />
                    </div>
                    <div className='col-md-6' data-aos="fade-right">
                        <img src={mainimg} alt='image' height={300} width={600} />

                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row p-5' data-aos="zoom-out">
                    <h3 className='d-flex justify-content-center '>Miracle HIS (Health Information System)</h3>
                    <h6 className='d-flex justify-content-center '>Best price Plans in the Market</h6>
                </div>
                <Pricingplan />
            </div>
            {/* <div className="d-flex justify-content-end">
            <img  src={Chatbox} alt="image" />      
            </div> */}
        </>
    )
}

export default Pricing;