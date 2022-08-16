import React from 'react'

const New = (props) => {
  return (
    <div className=''>
            <section className="text-light mt-0 text-center" id={props.id}>
                <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 py-5 bg-dark">
                    <h1 className="jumbotron-heading mt-5" > {props.heading} </h1>
                    <p className="lead text-secondary">{props.text}.</p>
                    <p>
                        <button href="" onClick={props.bgChange} className={props.buttonDesign}>{props.buttonName1} </button>
                    </p>
                </div>
                </div>
                
                
            </section>

            
            </div>
  )
 }

export default New