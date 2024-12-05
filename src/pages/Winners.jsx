import React from 'react'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import BackToTop from '../components/body/BackToTop'
import WinnerList from '../components/body/WinnerList'


function Winners() {
  return (
    <div>
      <Navbar/>
      <WinnerList/>
      <BackToTop/>
      <Footer/>
    </div>
  );
}

export default Winners
