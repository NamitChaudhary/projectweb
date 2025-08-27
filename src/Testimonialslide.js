import React, { useState } from 'react'
import { useCollapse } from 'react-collapsed'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';



function Testtimonialslide(props) {


    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    useEffect(()=>{
        Aos.init({
            offset: 500,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 100,
          });
    },[])
    return (
        <>
            <div className='box-slick-slide'  data-aos="fade-out">
                <div className='testimg '>
                    <div>
                        <img src={props.pro} alt='' />
                    </div>
                    <div>
                        <h5 className=' mx-3' >{props.hd}</h5>
                        <h6 className=' mx-3' >{props.dt}</h6>
                    </div>
                </div>
                <div>
                    <img src={props.str} alt='' />


                </div>
                <div>
                    <h6 className='mt-3'>{props.dsc}</h6>
                </div>


                <div>
                    <h6 {...getCollapseProps()}>{props.rd}</h6>
                    <button className='box-btn'
                        {...getToggleProps({
                            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                        })}
                    >
                        {isExpanded ? 'ReadLess' : 'ReadMore'}
                    </button>

                </div>
            </div>
        </>
    )

}

export default Testtimonialslide;

