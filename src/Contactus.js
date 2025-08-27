

import React, { useEffect, useState } from 'react'
import './index.css';
import Chatbox from './images/Chat_Box.svg'
import mailicon from './images/Mail_icon.svg'
import phoneicon from './images/Phone_icon.svg'
import flower from './images/contact-image.png'
import axios from 'axios';


function Contactus() {


    const [user, setUser] = useState({ name: '', email: '', phone: '', message: '' })
    const [error, setError] = useState({})


    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: [e.target.value] })
    }




    const submitRecord = (e) => {
        // console.log(user)
        // e.preventDefault();
        //  axios.post('/submit', user)
        // .then(res=>console.log("inserted successfully"))
        // .catch(err => console.log(err));

        e.preventDefault();
        setError(validate(user));

        console.log(user)

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

        else if (!phone.test(values.phone)) {
            error.phone = "Please enter valid number"
        }
        else if (!values.message) {
            error.message = "Please enter message "
        }
        else {
            alert("submit successfully")
            setUser(
                {
                    name: '', email: '', phone: '', message: ''
                }
            );

        }

        return error;

    }

    return (
        <>
            <div className='container-fluid '>
                <div className='row m-5  ' data-aos="fade-out">
                    <div className='d-flex justify-content-center'>
                        <h1>Get In Touch</h1>

                    </div>
                    <div className='d-flex justify-content-center mt-2'>
                        <h6>Reach Out Today and Experience the Transformation in Healthcare Delivery with Our Cutting-Edge Solutions.</h6>
                    </div>

                </div>
                <div className='row '>
                    <div className='col-md-2 '>

                    </div>

                    <div className='col-md-8  shadow-sm contact-box' data-aos="fade-up">
                        <div className='row '>
                            <div className='col-md-5 col-sm-12 col-12 p-4 con1'>
                                <h4>Contact Information</h4>
                                <p>Let's Connect and Transform Possibilities into Reality - Reach Out Today</p>
                                <h5 className='head'>Sales Department</h5>
                                <div className='box-contactus'>
                                    <img className='mt-1' src={mailicon} alt="images" />
                                    <p className='mail' >moc@akhilsystems.com</p>
                                </div>
                                
                                <div className='box-contactus'>
                                    <img className='mt-1' src={phoneicon} alt="images" />
                                    <p>+91 9968464439, 8791798751,
                                        8448535001, 9953188908,
                                        8448799453 (South India)
                                    </p>
                                </div>
                                <h5 className='head'>Support Department</h5>
                                <div className='box-contactus'>
                                    <img className='mt-1' src={mailicon} alt="images" />
                                    <p>support@akhilsystems.com</p>
                                </div>
                               
                                <div className='box-contactus'>
                                    <img className='mt-1' src={phoneicon} alt="images" />

                                    <p>+91 8447846239</p>
                                </div>
                                <div className="flow">
                                    <img src={flower} height={150} alt="images" />
                                </div>
                            </div>

                            <div className='col-md-7 col-sm-12 col-12  p-4 '>

                                <div className='row'>

                                    <div className='col-md-6 col-12 box-contactus-form'>
                                        <label className="form-label">Enter your Name</label>
                                        <input className='head form-control' placeholder='Enter your Name'
                                            name='name'
                                            value={user.name}
                                            onChange={handleInput}
                                        />
                                        {
                                            error.name && <span>{error.name}</span>
                                        }
                                    </div>



                                    <div className='col-md-6 col-12 box-contactus-form'>
                                        <label className="form-label">Enter your Email</label>

                                        <input className='input form-control' placeholder="Enter youer Email"
                                            name='email'
                                            value={user.email}
                                            onChange={handleInput}
                                        />

                                        {
                                            error.email && <span>{error.email}</span>
                                        }
                                    </div>


                                    <div className='col-md-6 col-12 mt-3 box-contactus-form'>
                                        <label className="form-label">Enter your Number</label>
                                        <input className='form-control' placeholder="Enter your Number"
                                            name='phone'
                                            value={user.phone}
                                            onChange={handleInput}
                                        />
                                        {
                                            error.phone && <span>{error.phone}</span>
                                        }

                                    </div>

                                    <div className='col-md-12 col-12 mt-3 box-contactus-form'>
                                        <label className="form-label">Write your Message here...</label>
                                        <textarea className='form-control' placeholder="enter message"
                                            name='message'
                                            value={user.message}
                                            onChange={handleInput}
                                        />
                                        {
                                            error.message && <span className='colspan'>{error.message}</span>
                                        }
                                    </div>
                                    <div className='col-md-4 col-12 mt-3'>
                                        <button className='btn btn-danger col-12' onClick={submitRecord}>Submit</button>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                    {/* <div className='col-md-2 box  '>
                        <img src={Chatbox} alt="image" />


                    </div> */}
                </div>
            </div>



        </>
    )
}

export default Contactus;