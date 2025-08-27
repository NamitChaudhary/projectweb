import React from 'react'
import logo from './images/Logoimg.svg'
import './index.css';
import address from './images/Location.svg'
import phoneicon from './images/Phone_icon.svg'
import mailicon from './images/Mail_icon.svg'
import { Link, NavLink } from 'react-router-dom';
import  Linkdin  from './images/Linkdin.svg'
import  Yt  from './images/YT.svg'
import  Facebook  from './images/Fb.svg'
import  Insta  from './images/Insta.svg'



function Footer() {
    return (
        <>
            <div className='container-fluid footerbg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 col-12'>
                            <img src={logo} height="100" className='box-mob-logo-footer' alt="Responsive image" /><br></br>
                            <p className='box-footer-det'>
                            Akhil Systems Pvt. Ltd. unveils Miracle on Cloud(MoC), a cutting-edge SaaS-based solution revolutionizing healthcare for small to mid-sized hospitals, nursing homes, clinics, and diagnostics across tier-1, tier-2, and tier-3 cities. 
                            </p>

                        </div>
                        <div className='col-md-2 col-6'>
                            <h6 className='footer'>Main</h6>
                            <ul>              



                                <li><NavLink to='/'>Home</NavLink></li>
                                <li className='hidden'><NavLink to='/pricing'>Pricing</NavLink></li>                                
                                <li><NavLink to='/products'>Products</NavLink></li>
                                <li><NavLink to='/partners'>Partners Program</NavLink></li>
                            </ul>



                        </div>
                        <div className='col-md-2 col-6'>
                            <h6 className='footer'>Policies</h6>
                            <ul>
                                <li><NavLink to=''>Disclaimer</NavLink></li>
                                <li><NavLink to=''>Privacy Policy</NavLink></li>
                                <li><NavLink to=''>Terms & Condition</NavLink></li>
                            
                            </ul>
                        </div>
                        <div className='col-md-2'>
                            <h6 className='footer'>External</h6>
                            <ul>
                                <li><NavLink to='/contact'>Contact Us</NavLink></li>
                                <li><NavLink to='/blog'>Blog</NavLink></li>
                                
                            </ul>

                        </div>
                        <div className='col-md-3 head-office'>
                            <h6 className='footer'>Head Office</h6>
                            <div className='head1'>
                                <div className='box-footer'>
                                    <img src={address} alt="images" className='pull-left' />

                                    <h6>Incuspaze Building, 5th Floor,Plot<br />
                                        No. 17, Sector 18, Udyog ViharPhase<br />
                                        4, Gurugram, Haryana 122015</h6>
                                </div>
                                <div className='box-footer'>
                                    <img src={phoneicon} alt="images" className='pull-left' />
                                    <h6>+91 8447846239</h6>
                                </div>
                                <div className='box-footer'>
                                    <img src={mailicon} alt="images" className='pull-left' />
                                    <h6 className='mail'>moc@akhilsystems.com</h6>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

               <div className='footer'>

               <div className='copy-text text-center'>&copy; 2023 akhilsystems.com All rights reserved.
                </div>
                <div className='social-icon'>
                    <img src = {Linkdin}  alt = "Linkdin"/>
                    <img src = {Yt}  alt = "Youtube"/>
                    <img src = {Facebook}  alt = "Facebook"/>
                    <img src = {Insta}  alt = "Insta"/>
                 </div>
               </div>

            </div>


        </>

    )
}
export default Footer;