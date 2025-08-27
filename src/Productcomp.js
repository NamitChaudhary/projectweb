import React from "react";
import his from './images/pro-HIS.svg'
import emr from './images/pro-EMR.svg'
import lis from './images/pro-LIS.svg'
import pis from './images/pro-PIS.png'
import clinic from './images/pro-Clinic.png'


import HIS from './images/box-EMR.svg'
import EMR from './images/box-LIS.svg'
import LIS from './images/box-Clinc.svg'
import Clinic from './images/box-HIS.svg'
import PIS from './images/box-PIS.svg'
import './index.css';

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';



function Productcomp() {
    
    useEffect(()=>{
        Aos.init();
    },[])

    return (
        <>

            <div className="row p-t-b-8 bg-color-prod">
                <div className=" col-md-5 p-5 no-p-r box-product-detail">
                    <img src={HIS} alt="imsges" data-aos="fade-left" />

                    <h2 >ELECTRONIC MEDICAL RECORDS (EMR)</h2>
                    <p>
                        Miracle EMR is a web based clinical solution for any healthcare setting
                        combining clinical patient records with labs, prescription writing, procedures &
                        much more. It’s a powerful tool that supports drug allergy & interaction check,
                        CPT & DRG coding, ICD 10 and supports CDSS.<br></br>
                        Miracle EMR is a Single page EMR that works on a single screen. A physician
                        can record patient details like Chief complaints, Allergies, Capture Vitals,
                        Medical & Family history, Examination, Diagnosis, Investigation orders,
                        Prescriptions, Referrals and Follow up details in a single screen. It helps them
                        view complete patient clinical summary in a single window. Shortcuts like
                        favourites, templates and Investigation profiles reduce physician’s time & the
                        number of clicks improving TAT.
                    </p>

                </div>
                <div className="col-md-7 box-prod-item text-center">
                    <img src={emr} alt="EMR" data-aos="fade-left" />

                </div>
            </div>



            <div className="row p-t-b-8">
                <div className="col-md-7 box-prod-item text-center">
                    <img src={his} alt="HIS" data-aos="fade-rigth"/>

                </div>
                <div className=" col-md-5 p-5 no-p-l box-product-detail">
                    <img src={Clinic} alt="imsges" data-aos="fade-right"  />

                    <h2 >HOSPITAL MANAGEMENT & INFORMATION SYSTEM</h2>
                    <p>Miracle Cloud HIS is a comprehensive and complete solution designed that
                        automates the clinical and administrative functions and enables the
                        healthcare providers to improve their operational effectiveness, consequently
                        reducing costs and medical errors, while enhancing quality of care. Our
                        solution is designed to meet requirements of hospital of all sizes, medical
                        colleges and nursing homes.<br /><br />


                        We understand the unique workflows and information needs of various care
                        types, our product has been designed with modular architecture to cater to
                        the requirements of the various departments and specialties of the hospital
                        such as OPD, IPD, Emergency Care, Nursing Care, Pharmacy, Laboratory,
                        Radiology, Inventory Management, Operation Theater and many more.</p>

                </div>

            </div>

            <div className="row p-t-b-8 bg-color-prod1">
                <div className=" col-md-5 p-5 no-p-r box-product-detail">

                    <img src={LIS} alt="imsges" data-aos="fade-left" />
                    <h2 >Miracle Clinics</h2>
                    <p>Miracle Clinic is exclusively designed for the single/multi doctor clinics. It
                        comes with the world class EMR that transform any clinic into a paperless
                        setup. Doctors may easily add prescriptions or request any order or procedure
                        to the patient. MoC Clinic supports multi specialty clinics and allow doctors to
                        keep a track of their patients and even consult them remotely through Tele
                        consultation.<br /><br />
                        Miracle Clinic offers integrated payment gateway for hassle free payments.
                        Doctors can view the overall performance of their businesses, understand
                        what drugs are more frequently ordered. Using the Tele consultation app, the
                        doctors can consult their patients remotely and write them prescriptions.
                    </p>

                </div>
                <div className="col-md-7 box-prod-item text-center">
                    <img src={clinic} alt="Clinics" data-aos="fade-left" />

                </div>
            </div>


            <div className="row p-t-b-8">
                <div className="col-md-7 box-prod-item text-center">
                    <img src={pis} alt="image" data-aos="fade-right" />

                </div>
                <div className=" col-md-5 p-5 no-p-l box-product-detail">
                    <img src={EMR} alt="imsges" data-aos="fade-right"/>
                    <h2 >PHARMACY INFORMATION SYSTEMS(PIS)</h2>
                    <p>Miracle PIS fully integrates the Pharmacy with CPOE & Medication Charting.
                        This can be an extremely versatile option created to improve in addition
                        to automate the regular workflows associated with pharmacists & staffs
                        dispensing medicines by means of Inpatient & ambulatory pharmacy
                        functionalities. Once the order has been entered by the Physician,
                        electronic orders or indents made by the staff nurses are received
                        instantaneously allowing the Patients rapid medical supplies.</p>

                </div>

            </div>
            <div className="row p-t-b-8 bg-color-prod2">

                <div className=" col-md-5 p-5 no-p-r box-product-detail">

                    <img src={PIS} alt="imsges" data-aos="fade-left" />
                    <h2 >Cloud LIS & RIS:</h2>
                    <p>Akhil Systems has developed a unique perspective on Pathology & Radiology workflow through years of working closely with a broad spectrum of Healthcare Organizations to understand their complex diagnostic workflow & information technology requirements. We have leveraged this expertise to create new tools that will help the healthcare units to streamline their multiple workflow management within their Department.
                        Miracle LIS/RIS is the platform for a more intelligent approach to imaging, one that takes full advantage of the information residing in LIS/RIS. This robust suite of tools can help the healthcare radiology department:
                        Increase staff productivity, which can allow more time for Patient Care.
                        Seamlessly manage Patient & Image tracking to improve operational efficiency.</p>

                </div>
                <div className="col-md-7 box-prod-item text-center">
                    <img src={lis} alt="LIS" data-aos="fade-left" />

                </div>

            </div>




        </>
    )
}

export default Productcomp;