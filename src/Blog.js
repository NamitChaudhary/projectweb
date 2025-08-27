import React, { useEffect, useState } from 'react'
import blog from './images/blog.jpg'
import bgimg from './images/bgabs.svg'
import eye from './images/eye.svg'
import cal from './images/cal.svg'
import sidearrow from './images/Sidearrow.svg'
import Cart from './Cart'
import Chatbox from './images/Chat_Box.svg'
import Blogslider from './Blogslider'
import axios from 'axios';

function Blog() {
    return (
        <>
            <div className='container-fluid abstract'>
                <div className='row backcolor'>
                    <div className='col-12'>
                        <h1 className='p-5 no-p-b no-m-b' data-aos="fade-left">Latest Update</h1>

                        <Blogslider />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 box-bog-heading' data-aos="fade-flip">
                        <h2>Other Blogs</h2>
                    </div>
                </div>
            </div>

            {/* <div className="d-flex justify-content-end">
            <img  src={Chatbox} alt="image" />      
            </div> */}

            <Cart />
            {/* <div className='d-flex justify-content-center'>
                <button className=' btn btn-primary'>See More</button>
            </div> */}


        </>
    )
}

export default Blog;