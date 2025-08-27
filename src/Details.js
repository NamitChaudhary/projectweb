import React, { useState } from 'react'
import './index.css';
import downloadimg from './images/downloadimg.svg'
import reqs from './images/DemoReq.svg'
import logo from './images/Logoimg.svg'
import btn from './images/submitbtn.svg'
import reqdemo from './images/RequestDemo.svg'
import { Form, Modal, ModalBody, ModalHeader } from 'reactstrap'
import axios from 'axios';
import { useForm } from "react-hook-form";
import pdf from './PDF/moc-flyer.pdf'




function Details(props) {
    const { reset } = useForm();
    const [model, setModel] = useState(false)
    const [error, setError] = useState({})
    const [demo, setDemo] = useState({
        name: '', email: '', product: '', mobile: '', message: ''
    })

    const handleDemo = (e) => {
        setDemo({ ...demo, [e.target.name]: [e.target.value] });
        console.log(demo);

    }

    // const sendBrochure = () => {
    //     axios.post('/demodetails', demo)
    //         .then(res => alert("Sent SuccessFully"))
    //         .catch(err => console.log(err))
    //         setDemo(
    //             {
    //                 name: '', email: '', product: '', mobile: '', orgname: '', location: '', message: ''
    //             }
    //         );


    // }


    const sendBrochure = (e) => {


        e.preventDefault();
        setError(validate(demo));




    }

    const validate = (values) => {
        const error = {}
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


        const pattern = new RegExp(/[a-zA-Z]{5,}/);

        const phone = new RegExp(/[0-9]{10,}/);


        if (!pattern.test(values.name)) {

            error.name = "please enter 5 character name"

        }
        else if (!regex.test(values.email)) {
            error.email = "valid email is required"
        }
        else if (!values.product) {
            error.product = "Please select product "
        }
        else if (!phone.test(values.mobile)) {
            error.mobile = "Please enter valid number"
        }
        else if (!values.message) {
            error.message = "Please enter message "
        }
        else {
            alert("submit successfully")
            setDemo(
                {
                    name: '', email: '', product: '', mobile: '', message: ''
                }
            );

        }

        return error;

    }


    return (
        <>
            <Modal className='modelw'
                isOpen={model}
                toggle={() => { setModel(!model) }}
            >
                <ModalHeader toggle={() => { setModel(!model) }}>

                </ModalHeader>

                <ModalBody
                >

                    <div className='row'>
                        <div className='col-md-6'>
                            <div>
                                <img src={logo} alt='' width={200} height={100} />
                            </div>
                            <div>
                                <h2 className='mt-3'>Work with  best Healthcare Software in the Market</h2>
                            </div>
                            <div>
                                <img src={reqdemo} alt='' width={500} height={400} />
                            </div>


                        </div>
                        <div className='col-md-6 p-3'>
                            <div className='mt-5'>
                                <h3 className='d-flex justify-content-center'>Request a demo</h3>
                            </div>
                            <div>
                                <h6 className='mt-3 mb-3'>
                                    Please help us with some of your information to reach out to you
                                </h6>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-12  mb-4 box-contactus-form'>
                                    <div className='row'>
                                        <div className='col-lg-12 col-md-12 col-sm-12 mb-1'>
                                            <label >Enter Your Name</label>
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-sm-12'>
                                            <input type='text' className='form-control' placeholder='Full Name'
                                                name='name'
                                                value={demo.name}
                                                onChange={handleDemo}

                                            />
                                            {
                                                error.name && <span>{error.name}</span>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-12 mb-3 box-contactus-form'>
                                    <div className='row'>
                                        <div className='col-lg-12 col-md-12 col-sm-12 mb-1'>
                                            <label >Enter Your Email</label>
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-sm-12'>
                                            <input type='email' placeholder='Email' className='form-control'
                                                name='email'
                                                value={demo.email}
                                                onChange={handleDemo}
                                            />
                                            {
                                                error.email && <span>{error.email}</span>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-12 mb-3 box-contactus-form'>
                                    <div className='row'>
                                        <div className='col-lg-12 col-md-12 col-sm-12 mb-1'>
                                            <label >Select the Product</label>
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-sm-12'>
                                            <select className='productwid'
                                                name='product'
                                                value={demo.product}
                                                onChange={handleDemo}
                                            >

                                                <option default >Select</option>
                                                <option value="HIS">HIS</option>
                                                <option value="RIS">RIS</option>
                                                <option value="RIS">RIS</option>

                                            </select>
                                            {
                                                error.product && <span>{error.product}</span>
                                            }



                                            {/* <input className='m-3' type='text' placeholder='Product'
                                        name='product'
                                        value={demo.product}
                                        onChange={handleDemo}
                                    /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12 col-12 mb-3 box-contactus-form'>
                                    <div className='row'>
                                        <div className='col-lg-12 col-md-12 col-sm-12 mb-1'>
                                            <label>Enter Your Number</label>
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-sm-12'>
                                            <input className='form-control' type='text' placeholder='Mobile'
                                                name='mobile'
                                                value={demo.mobile}
                                                onChange={handleDemo}
                                            />
                                            {
                                                error.mobile && <span>{error.mobile}</span>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 mb-1 box-contactus-form'>
                                    <label>Write your Message</label>
                                </div>
                                <div className='col-lg-12 col-md-12'>

                                    <textarea className='form-control'  placeholder="enter message"
                                        name='message'
                                        value={demo.message}
                                        onChange={handleDemo}
                                    />
                                    {
                                        error.message && <span className='colspan'>{error.message}</span>
                                    }




                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 text-center mt-4'>
                                    <button className='btn btn-danger' onClick={sendBrochure}  >Submit</button>
                                </div>
                            </div>




                            {/* <div>
                                    <input className='m-3' type='text' placeholder='Hospital/Clinic/Org Name'
                                        name='orgname'
                                        value={demo.orgname}
                                        onChange={handleDemo}
                                    />
                                    <input className='m-3' type='text' placeholder='Location'
                                        name='location'
                                        value={demo.location}
                                        onChange={handleDemo}
                                    />


                                </div> */}
                        </div>
                    </div>

                </ModalBody>

            </Modal>

            <h1 className='headcolor'>{props.first}</h1>
            <h1 className='headcolor2'>{props.second}</h1>
            <div className='css1'>
                <a href={pdf} download="brochure.pdf"><img src={downloadimg} height={50} alt='image' /></a>
                <button className='btncss'><img onClick={() => { setModel(true) }} src={reqs} height={50} alt='image' />
                <span className='pos'><i className='arrow-btn'></i></span>
                </button>

            </div>

        </>
    )
}
export default Details