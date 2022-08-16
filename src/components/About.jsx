import React, {useState} from 'react';
import Heading from './Heading';
import Location from './Location';
export const About = () => {
  const[color,setColor]=useState('')
  let myStyle = {
    color:"white",
    backgroundColor:"#233b52",
  }
  const colorChange= () =>{
    let myStyle = {
      color:"white",
      backgroundColor:"#233b52",
    }
    let newColor =myStyle;
    setColor(newColor);
};
  return (
    <div className="container-fluid" style={{ 
      minHeight:'100vh',backgroundColor:{myStyle}, 
      }}>
          <Heading heading='আমাদের সম্পর্কে' text='সকলের আস্থা ও নির্ভর যোগ্য একটি সেবা মূলক প্রতিষ্ঠান।.' buttonDesign='btn btn-outline-warning my-2 mx-2' buttonName1="Let's Explore" id='about' bgChange={colorChange}/>
          <div className="album py-5 bg-">
            <div className="container">
                <div className="row">       
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-12 d-flex justify-content-center align-items-center">
                      <img className="align-self-center mr-3" src="habib.jpg" style={{height:'300px',}} alt="Habib"/>  
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-12 d-flex justify-content-center align-items-center">
                      <div>
                      <h1 className="mt-0" style={{fontFamily: "'Lobster Two', cursive",}}>Habib Computer & training centre </h1>
                      <p>
                          সকলের আস্থা ও নির্ভর যোগ্য একটি সেবা মূলক প্রতিষ্ঠান।
                      </p>
                      <p className="mb-0">
                          আপনাদের সেবা ও সুবিধার্থে <strong><sup>"</sup>হাবিব কম্পিউটার এন্ড ট্রেনিং সেন্টার<sup>"</sup> </strong>বলাকীতে এই প্রথম নিয়ে এলো কম্পিউটার ও ইন্টারনেটর জাবতীয় কাজসহ রয়েছে ছাত্র-ছাত্রীদের জন্য খাতা-কলম ও ভিবিন্ন প্রয়োজনীয় এক্সেসরিস।
                      </p> 
                      </div> 
                    </div>
                </div>
                
          </div>
        </div>
        <div className="row">
                  <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-12 ">
                      <Location/>
                  </div>
                </div>
        </div>
      
  )
}
