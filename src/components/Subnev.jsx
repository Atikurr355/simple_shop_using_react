import React from 'react';
import Grettings from './Grettings';
import Datetime from './Datetime';
const Subnev = () => {
  return (
    <>
            <div>
                <div className=" text-center" data-aos="slide-down" data-aos-duration="2000">
                    <div className="row">
                        <div className="col-12">
                        <nav className='d-flex justify-content-center align-items-center text-center bg-dark px-2' style={{ height:'50px', backgroundColor:'#',borderTopLeftRadius:'30px',borderTopRightRadius:'30px',}}>
                        <div className="Date font-weight-bold text-warning mx-3">
                            <Datetime/>
                        </div>
                        <div className="greeting">
                            <Grettings/>
                        </div>
                    </nav>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Subnev