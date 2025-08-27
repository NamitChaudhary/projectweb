import React, { useState } from 'react'
import logo from './images/Logoimg.svg'
import callnumber from './images/CallNumber.svg'
import './index.css';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {

    return (
        <>
            <div className="container-fluid topbar  p-5 pt-3 pb-3">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-4">
                        <Link to='/'><img className="navb" src={logo} height="50" alt="Responsive image" /></Link>
                    </div>
                    <div className="col-lg-6 col-md-4 col-4 box-mob">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                    <li className="nav-item">
                                        <NavLink className="navcss" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item hidden">
                                        <NavLink className="navcss" to="/pricing">Pricing</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="navcss" to="/products" aria-disabled="true">Product</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="navcss" to="/partners" aria-disabled="true">Partners Program</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="navcss" to="/blog" aria-disabled="true">Blog</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="navcss" to="/contact" aria-disabled="true">Contact Us</NavLink>
                                    </li>

                                </ul>

                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-md-4 col-4 box-mob-no">
                        <form className="d-flex justify-content-end">
                            <img src={callnumber} alt="call" />
                        </form>

                    </div>




                </div>
            </div>


        </>
    )
}
export default Navbar;