import React from 'react'
import './index.css';
import Product from './images/Product.svg'
import Chatbox from './images/Chat_Box.svg'
import proc1 from './images/first.png'
import proc2 from './images/2nd.png'
import proc3 from './images/3rd.png'
import proc4 from './images/4th.png'
import proc5 from './images/mobile.png'
import Productcomp from './Productcomp';
import Details from './Details';
import client from './images/sir-pic.svg'
import sir from './images/SanjaySir.png'
import Prodslider from './Prodslider';
import proimg from "./images/Proimg.svg"

function Products() {
    return (
        <>
            <div className='container-fluid procon backcolor'>
                <div className='row p-5  '>
                    <div className='d-flex justify-content-center'>
                        <h1>One Platform for All Solutions</h1>

                    </div>
                    <div className='mt-2' >
                        <p className='text-center'>Miracle on Cloud offers an intuitive interface, empowering healthcare providers with robust tools for patient
                            data management, scheduling, billing, and inventory control. Its adaptable nature caters to diverse
                            healthcare settings, ensuring scalability and customization for varied requirements.</p>
                    </div>

                </div>
            </div>

            <div className='container-fluid procon1 '>
                <div className='row'>

                    {/* <div className='d-flex justify-content-end' >
                        <img src={Chatbox} alt="image" />
                    </div> */}
                    <div className='d-flex justify-content-center proimg' >
                        <img className='proimg' src={Product} alt='images' height={700} />

                    </div>
                    <div>
                        <img className='proimg1' src={proc1}
                            alt='image' height={70} />
                        <img className='proimg2' src={proc2} alt='image' height={70} />
                    </div>
                    <div className='d-flex justify-content-end' >
                        <img className='proimg3' src={proc3} alt='image' height={70} />
                        <img className='proimg4' src={proc4} alt="image" height={70} />
                    </div>
                </div>
            </div>
            <div className='container-fluid box-mobile-show'>
                <div className='row'>
                    <div className='lg-12 col-md-12 col-sm-12 col-12 text-center box-mobile-pic'>
                        <img src={proc5} alt="image" />
                    </div>
                </div>
            </div>
            <div className='container-fluid '>


                <Productcomp />

            </div>
            <div className='p-t-b-8 hidden'>
                <div className='container box-prod-item text-center'>
                    <img src={proimg} alt="image" className='img-fluid' />
                </div>
            </div>
            <div className='container-fluid '>
                <div className='row p-5  '>
                    <div className='d-flex justify-content-center'>
                        <h1>Benefits of Our Products</h1>

                    </div>
                    <div className='mt-2' >
                        <h6 className='d-flex justify-content-center '>Discover How Our Solutions Redefine Efficiency and Precision in Patient Care.
                        </h6>
                    </div>

                </div>

            </div>
            <Prodslider />

            <div className="client p-t-b-8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-12 pt-5" data-aos="fade-right">
                            <h5>Manage all your Data</h5>
                            <h2>Transforming Healthcare Management: Miracle on Cloud</h2>
                            <h6>Our solution is designed to meet requirements of hospital of all<br></br>
                            sizes, medical colleges and nursing homes. We understand  the <br></br>
                            unique workflows and information needs of various care types,<br></br>
                            our product has been designed with modular architecture<br></br>
                            to cater to the requirements of the various departments and <br></br>
                            specialties of the hospital such as OPD, IPD, Emergency Care,<br></br>
                            Nursing Care, Pharmacy, Laboratory, Radiology, Inventory <br></br>
                            Management, Operation Theater and many more.</h6>
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

export default Products;;