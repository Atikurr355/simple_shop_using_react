import React from 'react';
const Location = () => {
  return (
    <div>
        {/* <Heading id="Location" heading="Location" text="Something short and leading about the collection below—its contents, the creator, etc."/> */}
        <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-12 text-center">
            <h3>Location Below:</h3>
        </div>
        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-12 ">
            <iframe  style={{height:'300px',width:'100%',}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15023.236179351476!2d90.57351190420565!3d23.607178968098346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b32ef6ee6149%3A0xcf3048bbbe07a9aa!2sHabib%20Computer%20%26%20Telecom!5e0!3m2!1sen!2sbd!4v1652514826693!5m2!1sen!2sbd" loading="lazy"></iframe>
        </div>
        </div>
    </div>
  )
}

export default Location