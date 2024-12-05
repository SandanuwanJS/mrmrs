import React from 'react'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import List from '../components/theater/List'
import { useParams } from 'react-router-dom';
import BackToTop from '../components/body/BackToTop'


function ViewTheaters() {
	let {id} = useParams();
	console.log(id);
  return (
	<div>
		<Navbar/>
		<List theaterId={id}/>
		<BackToTop/>
		<Footer/>
	</div>
  )
}

export default ViewTheaters;