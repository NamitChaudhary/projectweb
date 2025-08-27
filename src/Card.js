import React from 'react'
import explore from './images/explore.svg'
import { NavLink } from 'reactstrap';

function Card(props) {
    return (
        <>
            <div className='col-md-4  mx-auto'>
                <div className="card">
                    <img src={props.imag} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <a href={props.goto}>
                            <img src={explore} alt='button' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;