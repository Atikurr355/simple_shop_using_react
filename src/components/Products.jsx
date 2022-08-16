import React from 'react';
import { Cart } from './Cart';
import Heading from './Heading';
import MultipleItemSlider from './MultipleItemSlider'
export const Products = (props) => {
  return (
    <div className='container-fluid' style={{ 
      minHeight:'100vh',backgroundImage: `url("/bg.webp")`,backgroundRepeat:'no-repeat', backgroundAttachment:'fixed', backgroundSize:`100% 100%`, 
    }}>
            
            <Heading heading='আমাদের পণ্য' text='Something short and leading about the collection below—its contents, the creator, etc.' buttonDesign='btn btn-outline-warning my-2 mx-2' buttonName1='Main call to action' buttonName2='Secondary action' id='products'/>

          <div className="album py-5 bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-12 my-5 bg-secondary">
                  <MultipleItemSlider/>
                  </div>
                </div>
              <div className="row">
                  <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-12">
                      <Cart name="Headphone " img='headphone.jpg' />
                  </div>
                  <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-12">
                      <Cart name="Multy plugs" img='plug.jpg'/>
                  </div>
                  <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-12">
                      <Cart name="Pendrive " img='pendrive.jpg'/>
                  </div>
                  <div className="col-md-3 col-sm-3 col-lg-3 col-xl-3 col-12">
                      <Cart name="Books" img='books.png'/>
                  </div>
              
                  </div>

          
          </div>
        </div>
      </div>
        
  )
}
