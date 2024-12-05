import React from 'react'
import Navbar from '../components/header/Navbar'
import ReviewList from '../components/body/ReviewList'
import Footer from '../components/footer/Footer'
import BackToTop from '../components/body/BackToTop'


function ViewReview() {
  return (
    <div>

        <Navbar/>

        <ReviewList/>

        <BackToTop/>

        <Footer/>

      
    </div>
  )
}

export default ViewReview
