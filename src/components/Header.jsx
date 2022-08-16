import React from 'react'

export const Header = () => {
  return (
    <div className='container-fluid'>
    
    <div className="row">
      <nav className='header col-12 col-sm-12 col-md-12 col-lg-12' style={{backgroundColor:'#006033',position:'sticky', }}>
        <div className="d-flex">
          <div className="mr-auto p-2"><a href="/" className="nav-link navbar-brand font-weight-bold"> AmarDokan</a></div>
          <div className="p-2 nav-tab"><a href="/" className="nav-link text-light">Home</a></div>
          <div className="p-2 nav-tab"><a href="#about" className="nav-link text-light">About</a></div>
          <div className="p-2 nav-tab"><a href="#products" className="nav-link text-light">Products</a></div>
          <div className="p-2 nav-tab"><a href="#contact" className="nav-link text-light">Contact</a></div>
        </div>
      </nav>
      </div>
      
    </div>

  )
}
