import React from 'react';
import { Cart } from './Cart';
import Heading from './Heading';

export const Services = () => {
  return (

    <div className='container-fluid' style={{ 
        minHeight:'100vh',backgroundImage: `url("/bg.webp")`,backgroundRepeat:'no-repeat', backgroundAttachment:'fixed', backgroundSize:`100% 100%`, 
    }}>
            <Heading heading='আমাদের সেবা সমূহ' text='Something short and leading about the collection below—its contents, the creator, etc.'buttonDesign='btn btn-outline-warning my-2 mx-2' buttonName1='Get Started' buttonName2='Lets Go' id='services'/>

            <div className="album py-5 bg-light">
              <div className="container">

              <div className="row">
                        <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-12">
                            <Cart name="ফটো কপি করা যায় " shortdesc="This is a wider card with supporting text below ." img='copy.jpg'/>
                        </div>
                        <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-12">
                            <Cart name="চাকুরীর আবেদন করা যায় " shortdesc="This is a wider card with supporting text below ." img='job.jpg'/>
                        </div>
                        <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-12">
                            <Cart name="বৈদ্যুতিক পণ্য পাওয়া যায়  " shortdesc="This is a wider card with supporting text below ." img='electric.jpg'/>
                        </div>
                        <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-12">
                            <Cart name="ছবি তোলা যায় " shortdesc="This is a wider card with supporting text below ." img='photo.webp'/>
                        </div>
              
                  </div>

          
          </div>
        </div>
            
            </div>
  )
}
