import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Products } from './components/Products';
import Navbar from './components/Navbar';
import { Services } from './components/Services';
import { Footer } from './components/Footer';


function App() {
  
  return (
    <div className="App ">
      <Navbar/>
      <Home />
      <About />
      <Products />
      <Services />
      <Footer/>
    </div>
  );
}

export default App;
