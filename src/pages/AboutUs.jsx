import React from 'react'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import Characters from "../components/crew/Characters"
import MainCrew from "../components/crew/MainCrew"
import BackToTop from '../components/body/BackToTop'

function AboutUs() {
  return (
    < >
        <Navbar/>
        <MainCrew/>
        <Characters/> 
        <BackToTop/>   
        <Footer/>
    </>
  )
}

export default AboutUs
