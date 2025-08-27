import React, { useEffect, useState } from 'react'
import explore from './images/explore.svg'
import { NavLink } from 'reactstrap';
import axios from 'axios';

function CardBlog(props) {
    return (
        <>

            <div className='col-md-4  mx-auto'>
                <div className="card" data-aos="fade-up">
                    <img src={props.imag} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <a href={props.go}>
                            <img src={explore} alt='button' />
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default CardBlog;