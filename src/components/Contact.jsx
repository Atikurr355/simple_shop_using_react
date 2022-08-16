import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="container-fluid" id="contact">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4 col-12">
                    <div className="address text-success">
                        <div className="row">
                            <div className="title h1">Habib's Shop</div>
                        </div>
                        <div className="row">
                            <div className="propitor h5"><span className='h4'>Owner:</span> Md Habibur Rahman</div>
                        </div>
                        <div className="row">
                            <div className="location h5"><span className='h4'>Location:</span> Charbalaki, Gazaria, Munshiganj</div>
                        </div>
                        <div className="row">
                           <div className="container mt-5">
                           <div className="Media h5">
                                <a href="https://www.facebook.com/profile.php?id=100081001421979" title='Facebook' target="_blank" className='mx-1 '><span className='' style={{fontSize:"30px",}}><i className="fa-brands fa-facebook-square text-primary"></i></span></a>
                                <a href="" title='Instagram' className='mx-1 '><span className='' style={{fontSize:"30px",}}><i class="fa-brands fa-instagram text-secondary"></i></span></a>
                                <a href="" title='Telegram' className='mx-1 '><span className='' style={{fontSize:"30px",}}><i class="fa-brands fa-telegram text-warning"></i></span></a>
                                <a href="" title='Twitter' className='mx-1 '><span className='' style={{fontSize:"30px",}}><i class="fa-brands fa-twitter-square text-success"></i></span></a>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4 col-12">
                    <div className="links my-5">
                        <div className='list-group'>
                        <a href="" className='text-light '>Hossaindi Union</a>
                        <a href="" className='text-light'>Gazaria Subdistrict</a>
                        <a href="" className='text-light'>Munshiganj District</a>
                        <a href="" className='text-light'>Dhaka Division</a>
                        <a href="" className='text-light'>Bangladesh</a>
                        <a href="" className='text-light'>Home</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4 col-12 text-light">
                <form>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="phone">Phone</label>
                        <input type="number" className="form-control" name="phone" id="phone" placeholder="Enter Phone Number"/>
                    </div>
                    <div className="form-group">
                        <label for="Message">Message</label>
                        <textarea className="form-control" id="Message" rows="3" placeholder="Write your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact