import React from 'react';


export const Cart = (props) => {
  return (
    <div>
        <div className="">
            <div className="card mb-4 box-shadow">
                <img className="card-img-top" style={{height:'200px',}} src={props.img} alt={props.name}/>
                <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.shortdesc}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View Details</button>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
