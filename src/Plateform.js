import React from 'react'
import plateform from './images/plateform.jpg'
import card1 from './images/Card_frst.jpg'
import card2 from './images/Card_sec.jpg'
import card3 from './images/Card_third.jpg'
import card4 from './images/Card_four.jpg'
import card5 from './images/Card_five.jpg'
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';



function Plateform() {
    const [trans, setTrans] = useState(false)

    return (
        <>
            <ScrollTrigger onEnter={() => setTrans(true)} onExit={() => setTrans(false)}>
                <div className='container-fluid plateform'>
                    <div className='row p-5'>
                        <div className='col-md-3 plt'>
                            {trans && <img className='pimg' src={card1} height={200} width={200} />}
                        </div>
                        <div className='col-md-6'>
                        </div>
                        <div className='col-md-3 plt'>
                            {trans && <img className='pimg' src={card2} height={200} width={200} />}
                        </div>
                    </div>
                    <div className='row p-5 '>
                        <div className='col-md-5 plt1'>
                            {trans && <img className='pimg' src={card3} height={200} width={200} />}
                        </div>
                        <div className='col-md-3'>
                        </div>
                        <div className='col-md-4 plt2'>
                            {trans && <img className='pimg' src={card4} height={200} width={200} />}
                        </div>
                    </div>
                    <div className='row p-5 '>
                        <div className='col-md-4'>
                        </div>

                        <div className='col-md-4 '>
                            {trans && <img className='plt3' src={card5} height={200} width={200} />}
                        </div>
                    </div>
                </div>
            </ScrollTrigger>
        </>
    )
}
export default Plateform;