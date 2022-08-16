import React, {useState} from 'react';
import './Home.css'
import Subnev from './Subnev';

export const Home = () => {
  const[contact,SetContact]=useState('')
  const call = () =>{
    let newCall = 'tel:01829018244';
    SetContact(newCall)
  }
  return (
    <div className='container-fluid ' id='home' style={{ 
        marginTop:'75px',backgroundImage: `linear-gradient(#CFCFCF,#173753)`,backgroundRepeat:'no-repeat',backgroundAttachment:'fixed',backgroundSize:`100% 100%`,fontFamily: "'Lobster Two', cursive" 
      }}>
        <div className="row">
          <div className=" col-12 col-sm-12 col-md-12 col-lg-12 mt-2 " >
          <div className="mt-5 h1 text-center">
              হাবিব কম্পিউটার এন্ড ট্রেনিং সেন্টার
          </div>
          </div>
        </div>
        <div className="row">
        <div className="home  col-12 col-sm-12 col-md-12 col-lg-12 m-auto " >
            <div className="row">
                        
                <div className="home col-12 col-sm-6 col-md-6 col-lg-6 bg- text-warning d-flex justify-content-center align-items-center " >
                    <img src="habib.jpg" data-aos="slide-right" data-aos-duration="1000" className="img-fluid h-50 shadow rounded p-2 img-thumbnail " alt="Habib" />
                    <div className="">
                        
                        <div className="text-danger text-4 d-flex text-light ml-3" data-aos="slide-left" data-aos-duration="1000">পরিচালনায়ঃ-<p className="text-warning ml-1">  মোঃ হাবিবুর রহামান </p>
                        </div>
                        <a href={contact} onClick={call} className="btn btn-outline-warning ml-3" data-aos="zoom-out" data-aos-duration="2000">কল করুন </a>
                    </div>
                    
                </div>
                <div className=" home col-12 col-sm-6 col-md-6 col-lg-6 my-3 image bg- d-flex justify-content-center align-items-center">
                        <div className="card">
                          <ul class="list-group">
                          <li class="list-group-item active">আমাদের অনলাইন সেবাসমূহঃ </li>
                            <li class="list-group-item bg-">চাকুরীর আবেদন।</li>
                            <li class="list-group-item bg-">কলেজে ভর্তি আবেদন। </li>
                            <li class="list-group-item bg-">JSC,SSC,এবং HSC ফলাফল যাচাই ও মার্কসীট বের করা হয়। </li>
                            <li class="list-group-item bg-">পাসপোর্ট এর ফর্ম পূরন। </li>
                            <li class="list-group-item bg-">বিদেশে পাসপোর্ট ই-মেইল করা। </li>
                            <li class="list-group-item bg-">ভটার আই.ডি কার্ড সংশোধন করা। </li>
                            <li class="list-group-item bg-">জন্ম নিবন্ধন অনলাইন করা। </li>
                            <li class="list-group-item bg-">মোবাইল আপডেট করা। </li>
                          </ul>
                        </div>                                
                </div> 
            </div>
        </div>
    </div>
    </div>
  )
}
