import React from 'react'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import List from '../components/theater/List'
import BackToTop from '../components/body/BackToTop'


function TheaterList() {
  return (
	<div>
		<Navbar/>
		<List/>
		<BackToTop/>
		<Footer/>
	</div>
  )
}

export default TheaterList