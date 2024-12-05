import React from 'react'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import District from '../components/theater/Districts'
import BackToTop from '../components/body/BackToTop'


function Theaters() {
  return (
    <div>
      <Navbar/>
      <District/>
      <BackToTop/>  
      <Footer/>
      
    </div>
  )
}

export default Theaters
