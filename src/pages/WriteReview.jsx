import React from 'react'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import ReviewForm from '../components/body/ReviewForm'
import BackToTop from '../components/body/BackToTop'


function WriteReview() {
    return (
        <div>

            <Navbar/>

            <ReviewForm/>

            <BackToTop/>

            <Footer/>

        </div>
    )
}

export default WriteReview
