import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function Counter() {

    const [counteron, setCounteron] = useState(false)
    return (
        <>
            <div className="cont">
                <div className='container p-t-b-8'>
                    <div className='row '>
                        <h2 className='d-flex justify-content-center'>Our Solid Accomplishments</h2>
                    </div>
                    <ScrollTrigger onEnter={() => setCounteron(true)} onExit={() => setCounteron(false)}>

                        <div className='row m-5 p-5 intro '>


                            <div className='col-md-4 text-center'>
                                <h1 className='text-primary'>
                                    {counteron && <CountUp start={1} end={400} duration={2} delay={0} />}
                                    +
                                </h1>

                                <span className='box-line'></span>
                                <h3>Clients</h3>
                            </div>

                            <div className='col-md-4 text-center'>

                                <h1 className='text-primary'>
                                    {counteron && <CountUp start={1} end={3600000} duration={2} delay={0} />}
                                    +
                                </h1>
                                <span className='box-line'></span>
                                <h3>Patients</h3>
                            </div>



                            <div className='col-md-4 text-center'>
                                <h1 className='text-primary'>
                                    {counteron && <CountUp start={1} end={300000} duration={2} delay={0} />}
                                    +
                                </h1>


                                <span className='box-line'></span>
                                <h3>Admission per Year</h3>


                            </div>

                            <div className='col-md-4 text-center'>
                                <h1 className='text-primary'>
                                    {counteron && <CountUp start={1} end={14} duration={2} delay={0} />}
                                    +
                                </h1>
                                <span className='box-line'></span>
                                <h3>Countries</h3>
                            </div>

                            <div className='col-md-4 text-center'>
                                <h1 className='text-primary'>
                                    {counteron && <CountUp start={1} end={25} duration={2} delay={0} />}
                                    +
                                </h1>
                                <span className='box-line'></span>
                                <h3>States</h3>

                            </div>

                            <div className='col-md-4 text-center'>
                                <h1 className='text-primary'>
                                    {counteron && <CountUp start={1} end={29} duration={2} delay={0} />}
                                    +
                                </h1>
                                <span className='box-line'></span>
                                <h3>Experience</h3>


                            </div>

                        </div>
                    </ScrollTrigger>

                </div>
            </div>

        </>
    )
}
export default Counter;