import React, { useEffect, useState } from 'react'
import circle from './images/circle.svg'
import Products from "./Products";
import bluecircle from './images/bluecircle.svg'

import btn from './images/btn.svg'
import axios from 'axios';


function Pricingplan() {
    const [his, setHis] = useState(true)
    const [lis, setLis] = useState(false)
    const [ris, setRis] = useState(false)
    const [pis, setPis] = useState(false)
    const [emr, setEmr] = useState(false)
    const [isactive, setIsactive] = useState(false)
    const [isactive1, setIsactive1] = useState(false)
    const [isactive2, setIsactive2] = useState(false)
    const [isactive3, setIsactive3] = useState(false)
    const [isactive4, setIsactive4] = useState(false)



    const Silver = [
        {
            "img": circle,
            "text": "Unlimited product updates"
        },
        {
            "img": circle,
            "text": "Unlimited product updates"
        },

        {
            "img": circle,
            "text": "Unlimited product updates"
        },

        {
            "img": circle,
            "text": "Unlimited product updates"
        },

        {
            "img": circle,
            "text": "Unlimited product updates"
        },

        {
            "img": circle,
            "text": "Unlimited product updates"
        },

        {
            "img": circle,
            "text": "Unlimited product updates"
        },

        {
            "img": circle,
            "text": "Unlimited product updates"
        },

        {
            "img": circle,
            "text": "Unlimited product updates"
        },

        {
            "img": circle,
            "text": "Unlimited product updates"
        },
        {
            "img": circle,
            "text": "Unlimited product updates"
        },
        {
            "img": circle,
            "text": "Unlimited product updates"
        },
        {
            "img": circle,
            "text": "Unlimited product updates"
        },
        {
            "img": circle,
            "text": "Unlimited product updates"
        }


    ]

    const Premium = [
        {
            "img": circle,
            "text": "Unlimited product updates"
        },
        {
            "img": circle,
            "text": "Unlimited product updates"
        },
        {
            "img": circle,
            "text": "Unlimited product updates"
        }
    ]

    const Gold = [
        {
            "img": circle,
            "text": "Unlimited product updates"
        },
        {
            "img": circle,
            "text": "Unlimited product updates"
        },
        {
            "img": circle,
            "text": "Unlimited product updates"
        },
        {
            "img": circle,
            "text": "Unlimited product updates"
        },
        {
            "img": circle,
            "text": "Unlimited product updates"
        }
    ]


    function handleHis() {
        if (lis || ris || pis || emr == true) {
            setLis(false)
            setRis(false)
            setPis(false)
            setEmr(false)
            setIsactive1(false)
            setIsactive2(false)
            setIsactive3(false)
            setIsactive4(false)
            setHis(true)
            setIsactive(true)
        }


    }
    function handleLis() {
        if (his || ris || pis || emr || isactive == true) {
            setHis(false)
            setRis(false)
            setPis(false)
            setEmr(false)
            setIsactive(false)
            setIsactive2(false)
            setIsactive3(false)
            setIsactive4(false)
            setLis(true)
            setIsactive1(true)

        }


    }
    function handleRis() {
        if (his || lis || pis || emr == true) {
            setHis(false)
            setLis(false)
            setPis(false)
            setEmr(false)

            setIsactive1(false)
            setIsactive(false)
            setIsactive3(false)
            setIsactive4(false)
            setIsactive2(true)

            setRis(true)
        }


    }
    function handlePis() {
        if (his || lis || ris || emr == true) {
            setHis(false)
            setLis(false)
            setRis(false)
            setEmr(false)

            setIsactive(false)
            setIsactive2(false)
            setIsactive1(false)
            setIsactive4(false)
            setIsactive3(true)
            setPis(true)

        }


    }
    function handleEmr() {
        if (his || lis || ris || pis == true) {
            setHis(false)
            setLis(false)
            setRis(false)
            setPis(false)
            setIsactive(false)
            setIsactive1(false)
            setIsactive2(false)
            setIsactive3(false)
            setIsactive4(true)
            setEmr(true)


        }


    }



    return (
        <>
            <div className='row p-5'>
                <div className="col-md-2 col-12 box-pricecate">
                    <h3>Products</h3>
                    <button className={isactive ? ' pricbtn active ' : 'pricbtn notactive'} onClick={handleHis}> HIS </button>
                    <button className={isactive1 ? ' pricbtn active ' : 'pricbtn notactive'} onClick={handleLis}> LIS </button>
                    <button className={isactive2 ? ' pricbtn active ' : 'pricbtn notactive'} onClick={handleRis}> RIS </button>
                    <button className={isactive3 ? ' pricbtn active ' : 'pricbtn notactive'} onClick={handlePis}> PIS </button>
                    <button className={isactive4 ? ' pricbtn active ' : 'pricbtn notactive'} onClick={handleEmr}>EMR </button>
                </div>
                {
                    his && <div className="col-md-10 col-12 box-price-plane">
                        <div className='row'>

                            <div className="col-md-4 p-4" data-aos="flip-left">
                                <div className="price1 price-detail">
                                    <h3>Silver HIS</h3>
                                    <h6>Some dummy text goes</h6>
                                    <h6 className="m-b-3">here for each plan</h6>
                                    {
                                        Silver.map((val, index) => (
                                            <div className="pric" key={index}>
                                                <ul>
                                                    <li><img src={val.img} alt="image" />
                                                        <p>{val.text}</p></li>
                                                </ul>
                                            </div>

                                        ))
                                    }
                                    <div className="pricbtn text-center">
                                        <img className="mt-3" src={btn} width={200} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4" data-aos="flip-up">
                                <div className="price2 price-detail">
                                    <h3>Premium</h3>
                                    <h6>Some dummy text goes</h6>
                                    <h6 className="m-b-3">here for each plan</h6>
                                    <div className="pric mt-4">
                                        <ul>
                                            <li>
                                                <img src={bluecircle} alt="image" />
                                                <p>Gold Modules</p>
                                            </li>
                                        </ul>
                                    </div>


                                    {
                                        Premium.map((val, index) => (
                                            <div className="pric" key={index}>
                                                <ul>
                                                    <li>
                                                        <img src={val.img} alt="image" />
                                                        <p>{val.text}</p>
                                                    </li>
                                                </ul>
                                            </div>

                                        ))
                                    }
                                    <div className="pricbtn text-center">
                                        <img className="mt-3" src={btn} width={200} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-4" data-aos="flip-right">
                                <div className=" price3 price-detail">
                                    <h3>Gold</h3>

                                    <h6>Some dummy text goes</h6>
                                    <h6 className="m-b-3">here for each plan</h6>

                                    <div className="pric mt-4">
                                        <ul>
                                            <li>
                                                <img src={bluecircle} alt="image" />
                                                <p>Silver Modules</p>
                                            </li>
                                        </ul>
                                    </div>
                                    {
                                        Gold.map((val, index) => (
                                            <div className="pric" key={index}>
                                                <ul>
                                                    <li>
                                                        <img src={val.img} width={20} alt="image" />
                                                        <p>{val.text}</p>
                                                    </li>
                                                </ul>
                                            </div>

                                        ))
                                    }
                                    <div className="pricbtn text-center">
                                        <img className="mt-3" src={btn} width={200} alt="image" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>
                        </div>
                    </div>
                }







                {
                    lis && <div className="col-md-10">
                        <div className='row'>

                            <div className="col-md-4 p-4"  data-aos="zoom-in">
                                <div className="price1 price-detail">
                                    <h3>Silver LIS</h3>
                                    <h6>Some dummy text goes</h6>
                                    <h6>here for each plan</h6>
                                    {
                                        Silver.map((val, index) => (
                                            <div className="pric" key={index}>
                                                <ul>
                                                    <li>
                                                        <img src={val.img} alt="image" />
                                                        <p>{val.text}</p>
                                                    </li>
                                                </ul>
                                            </div>

                                        ))
                                    }
                                    <div className="pricbtn text-center">
                                        <img className="mt-3" src={btn} width={200} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4"  data-aos="zoom-in">
                                <div className="price2 price-detail">
                                    <h3>Premium</h3>
                                    <h6>Some dummy text goes</h6>
                                    <h6 className="m-b-3">here for each plan</h6>
                                    <div className="pric mt-4">
                                        <ul>
                                            <li>
                                                <img src={bluecircle} alt="image" />
                                                <p>Gold Modules</p>
                                            </li>
                                        </ul>
                                    </div>
                                    {
                                        Premium.map((val, index) => (
                                            <div className="pric" key={index}>
                                                <ul>
                                                    <li>
                                                        <img src={val.img} alt="image" />
                                                        <p>{val.text}</p>
                                                    </li>
                                                </ul>
                                            </div>

                                        ))
                                    }
                                    <div className="pricbtn text-center">
                                        <img className="mt-3" src={btn} width={200} alt="image" />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-4 p-4 mt-5 w-25 price3">
                            <h3 className='d-flex justify-content-center '>Gold</h3>

                            <h6 className='d-flex justify-content-center '>Some dummy text goes</h6>
                            <h6 className='d-flex justify-content-center '>here for each plan</h6>

                            <div className="pric mt-4">
                                <div>
                                    <img src={bluecircle} width={20} alt="image" />
                                </div>
                                <div>
                                    <h5 className="mx-3 ">Silver Modules</h5>
                                </div>
                            </div>
                            <h3 className='d-flex justify-content-center '>+</h3>

                            {
                                Gold.map((val,index) => (
                                    <div className="pric" key={index}>
                                        <div>
                                            <img src={val.img} width={20} alt="image" />
                                        </div>
                                        <div>
                                            <h6 className="prictxt">{val.text}</h6>
                                        </div>
                                    </div>

                                ))
                            }
                            <img className="mt-3" src={btn} width={200} alt="image" />



                        </div> */}

                        </div>

                        <div>
                        </div>
                    </div>
                }





                {
                    ris && <div className="col-md-10">
                        <div className='row'>

                            <div className="col-md-4 p-4">
                                <div className="price1 price-detail">
                                    <h3>Silver RIS</h3>
                                    <h6>Some dummy text goes</h6>
                                    <h6 className="m-b-3">here for each plan</h6>
                                    {
                                        Silver.map((val, index) => (
                                            <div className="pric" key={index}>
                                                <ul>
                                                    <li>
                                                        <img src={val.img} alt="image" />
                                                        <p>{val.text}</p>
                                                    </li>
                                                </ul>
                                            </div>

                                        ))
                                    }
                                    <div className="pricbtn text-center">
                                        <img className="mt-3" src={btn} width={200} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="price2 price-detail">
                                    <h3>Premium</h3>
                                    <h6>Some dummy text goes</h6>
                                    <h6 className="m-b-3">here for each plan</h6>
                                    <div className="pric mt-4">
                                        <ul>
                                            <li>
                                                <img src={bluecircle} alt="image" />
                                                <p>Gold Modules</p>
                                            </li>
                                        </ul>
                                    </div>


                                    {
                                        Premium.map((val, index) => (
                                            <div className="pric" key={index}>
                                                <ul>
                                                    <li>
                                                        <img src={val.img} alt="image" />
                                                        <p>{val.text}</p>
                                                    </li>
                                                </ul>
                                            </div>

                                        ))
                                    }
                                    <div className="pricbtn text-center">
                                        <img className="mt-3" src={btn} width={200} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-4"  data-aos="zoom-in">
                                <div className="price3 price-detail">
                                    <h3>Gold</h3>

                                    <h6>Some dummy text goes</h6>
                                    <h6 className="m-b-3">here for each plan</h6>

                                    <div className="pric mt-4">
                                        <ul>
                                            <li>
                                                <img src={bluecircle} alt="image" />
                                                <p>Silver Modules</p>
                                            </li>
                                        </ul>
                                    </div>

                                    {
                                        Gold.map((val, index) => (
                                            <div className="pric" key={index}>
                                                <ul>
                                                    <li>
                                                        <img src={val.img} alt="image" />
                                                        <p>{val.text}</p>
                                                    </li>
                                                </ul>
                                            </div>

                                        ))
                                    }
                                    <div className="pricbtn text-center">
                                        <img className="mt-3" src={btn} width={200} alt="image" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>
                        </div>
                    </div>
                }




                {
                    pis && <div className="col-md-10">
                        <div className='row'>

                            <div className="col-md-4 p-4">
                                <div className="price1 price-detail">
                                    <h3>Silver PIS</h3>
                                    <h6>Some dummy text goes</h6>
                                    <h6 className="m-b-3">here for each plan</h6>
                                    {
                                        Silver.map((val, index) => (
                                            <div className="pric" key={index}>
                                                <ul>
                                                    <li>
                                                        <img src={val.img} alt="image" />
                                                        <p>{val.text}</p>
                                                    </li>
                                                </ul>
                                            </div>

                                        ))
                                    }
                                    <div className="pricbtn text-center">
                                        <img className="mt-3" src={btn} width={200} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="price2 price-detail">
                                    <h3>Premium</h3>
                                    <h6>Some dummy text goes</h6>
                                    <h6 className="m-b-3">here for each plan</h6>
                                    <div className="pric mt-4">
                                        <ul>
                                            <li>
                                                <img src={bluecircle} alt="image" />
                                                <p>Gold Modules</p>
                                            </li>
                                        </ul>
                                    </div>


                                    {
                                        Premium.map((val, index) => (
                                            <div className="pric" key={index}>
                                                <ul>
                                                    <li>
                                                        <img src={val.img} alt="image" />
                                                        <p>{val.text}</p>
                                                    </li>
                                                </ul>
                                            </div>

                                        ))
                                    }
                                    <div className="pricbtn text-center">
                                        <img className="mt-3" src={btn} width={200} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-4">
                                <div className="price3 price-detail">
                                    <h3>Gold</h3>

                                    <h6>Some dummy text goes</h6>
                                    <h6 className="m-b-3">here for each plan</h6>

                                    <div className="pric mt-4">
                                        <ul>
                                            <li>
                                                <img src={bluecircle} alt="image" />
                                                <p>Silver Modules</p>
                                            </li>
                                        </ul>
                                    </div>

                                    {
                                        Gold.map((val, index) => (
                                            <div className="pric" key={index}>
                                                <ul>
                                                    <li>
                                                        <img src={val.img} alt="image" />
                                                        <p>{val.text}</p>
                                                    </li>
                                                </ul>
                                            </div>

                                        ))
                                    }
                                    <div className="pricbtn text-center">
                                        <img className="mt-3" src={btn} width={200} alt="image" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>
                        </div>
                    </div>
                }




                {
                    emr && <div className="col-md-10">
                        <div className='row'>

                            <div className="col-md-4 p-4">
                                <div className="price1 price-detail">
                                    <h3>Silver EMR</h3>
                                    <h6>Some dummy text goes</h6>
                                    <h6 className="m-b-3">here for each plan</h6>
                                    {
                                        Silver.map((val, index) => (
                                            <div className="pric" key={index}>
                                                <ul>
                                                    <li>
                                                        <img src={val.img} alt="image" />
                                                        <p>{val.text}</p>
                                                    </li>
                                                </ul>
                                            </div>

                                        ))
                                    }
                                    <div className="pricbtn text-center">
                                        <img className="mt-3" src={btn} width={200} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="price2 price-detail">
                                    <h3>Premium</h3>
                                    <h6>Some dummy text goes</h6>
                                    <h6 className="m-b-3">here for each plan</h6>
                                    <div className="pric mt-4">
                                        <ul>
                                            <li>
                                                <img src={bluecircle} alt="image" />
                                                <p>Gold Modules</p>
                                            </li>
                                        </ul>
                                    </div>


                                    {
                                        Premium.map((val, index) => (
                                            <div className="pric" key={index}>
                                                <ul>
                                                    <li>
                                                        <img src={val.img} width={20} alt="image" />
                                                        <p>{val.text}</p>
                                                    </li>
                                                </ul>
                                            </div>

                                        ))
                                    }
                                    <div className="pricbtn text-center">
                                        <img className="mt-3" src={btn} width={200} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-4">
                                <div className="price3 price-detail">
                                    <h3>Gold</h3>

                                    <h6>Some dummy text goes</h6>
                                    <h6 className="m-b-3">here for each plan</h6>

                                    <div className="pric mt-4">
                                        <ul>
                                            <li>
                                                <img src={bluecircle} alt="image" />
                                                <p>Silver Modules</p>
                                            </li>
                                        </ul>
                                    </div>

                                    {
                                        Gold.map((val, index) => (
                                            <div className="pric" key={index}>
                                                <ul>
                                                    <li>
                                                        <img src={val.img} alt="image" />
                                                        <p>{val.text}</p>
                                                    </li>
                                                </ul>
                                            </div>

                                        ))
                                    }
                                    <div className="pricbtn text-center">
                                        <img className="mt-3" src={btn} width={200} alt="image" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>
                        </div>
                    </div>
                }















            </div>
        </>
    )
}
export default Pricingplan;